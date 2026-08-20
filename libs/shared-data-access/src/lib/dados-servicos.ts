import { inject, Injectable, signal } from '@angular/core';
import { ClienteSupabase } from './cliente-supabase';
import type { Database } from './tipos-banco';

export type Servico =
  Database['public']['Tables']['servicos']['Row'];

export interface CadastroServico {
  nome: string;
  preco: number;
  tipo_cobranca: string;
  duracao_minutos: number | null;
}

@Injectable({
  providedIn: 'root',
})
export class DadosServicos {
  private readonly clienteSupabase = inject(ClienteSupabase);

  private readonly listaInterna = signal<Servico[]>([]);
  private readonly carregandoInterno = signal(false);
  private readonly erroInterno = signal<string | null>(null);

  readonly servicos = this.listaInterna.asReadonly();
  readonly carregando = this.carregandoInterno.asReadonly();
  readonly erro = this.erroInterno.asReadonly();

  async listar(): Promise<void> {
    this.carregandoInterno.set(true);
    this.erroInterno.set(null);

    try {
      const estudioId = await this.obterEstudioId();

      const { data, error } = await this.clienteSupabase.cliente
        .from('servicos')
        .select('*')
        .eq('estudio_id', estudioId)
        .order('nome');

      if (error) {
        throw error;
      }

      this.listaInterna.set(data);
    } catch (erro) {
      this.erroInterno.set(this.obterMensagemErro(erro));
    } finally {
      this.carregandoInterno.set(false);
    }
  }

  async cadastrar(dados: CadastroServico): Promise<Servico> {
    const estudioId = await this.obterEstudioId();

    const { data, error } = await this.clienteSupabase.cliente
      .from('servicos')
      .insert({
        estudio_id: estudioId,
        nome: dados.nome.trim(),
        preco: dados.preco,
        tipo_cobranca: dados.tipo_cobranca.trim(),
        duracao_minutos: dados.duracao_minutos,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    this.listaInterna.update((servicos) =>
      [...servicos, data].sort((a, b) =>
        a.nome.localeCompare(b.nome),
      ),
    );

    return data;
  }

  async atualizar(
    servicoId: string,
    dados: CadastroServico,
  ): Promise<Servico> {
    const estudioId = await this.obterEstudioId();

    const { data, error } = await this.clienteSupabase.cliente
      .from('servicos')
      .update({
        nome: dados.nome.trim(),
        preco: dados.preco,
        tipo_cobranca: dados.tipo_cobranca.trim(),
        duracao_minutos: dados.duracao_minutos,
      })
      .eq('id', servicoId)
      .eq('estudio_id', estudioId)
      .select()
      .single();

    if (error) {
      throw error;
    }

    this.listaInterna.update((servicos) =>
      servicos
        .map((servico) =>
          servico.id === servicoId ? data : servico,
        )
        .sort((a, b) => a.nome.localeCompare(b.nome)),
    );

    return data;
  }

  async excluir(servicoId: string): Promise<void> {
    const estudioId = await this.obterEstudioId();

    const { error } = await this.clienteSupabase.cliente
      .from('servicos')
      .delete()
      .eq('id', servicoId)
      .eq('estudio_id', estudioId);

    if (error) {
      throw error;
    }

    this.listaInterna.update((servicos) =>
      servicos.filter((servico) => servico.id !== servicoId),
    );
  }

  private async obterEstudioId(): Promise<string> {
    const {
      data: { user },
      error,
    } = await this.clienteSupabase.cliente.auth.getUser();

    if (error || !user) {
      throw new Error('Usuário não autenticado.');
    }

    return user.id;
  }

  private obterMensagemErro(erro: unknown): string {
    return erro instanceof Error
      ? erro.message
      : 'Não foi possível carregar os serviços.';
  }
}
