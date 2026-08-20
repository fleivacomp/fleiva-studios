import { inject, Injectable, signal } from '@angular/core';
import { ClienteSupabase } from './cliente-supabase';
import type { Database } from './tipos-banco';

export type Contato =
  Database['public']['Tables']['contatos']['Row'];

export interface CadastroContato {
  nome: string;
  email: string | null;
  telefone: string | null;
  e_cliente: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DadosContatos {
  private readonly clienteSupabase = inject(ClienteSupabase);

  private readonly listaInterna = signal<Contato[]>([]);
  private readonly carregandoInterno = signal(false);
  private readonly erroInterno = signal<string | null>(null);

  readonly contatos = this.listaInterna.asReadonly();
  readonly carregando = this.carregandoInterno.asReadonly();
  readonly erro = this.erroInterno.asReadonly();

  async listar(): Promise<void> {
    this.carregandoInterno.set(true);
    this.erroInterno.set(null);

    try {
      const estudioId = await this.obterEstudioId();

      const { data, error } = await this.clienteSupabase.cliente
        .from('contatos')
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

  async cadastrar(dados: CadastroContato): Promise<Contato> {
    const estudioId = await this.obterEstudioId();

    const { data, error } = await this.clienteSupabase.cliente
      .from('contatos')
      .insert({
        estudio_id: estudioId,
        nome: dados.nome.trim(),
        email: dados.email,
        telefone: dados.telefone,
        e_cliente: dados.e_cliente,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    this.listaInterna.update((contatos) =>
      [...contatos, data].sort((a, b) =>
        a.nome.localeCompare(b.nome),
      ),
    );

    return data;
  }

  async atualizar(
    contatoId: string,
    dados: CadastroContato,
  ): Promise<Contato> {
    const estudioId = await this.obterEstudioId();

    const { data, error } = await this.clienteSupabase.cliente
      .from('contatos')
      .update({
        nome: dados.nome.trim(),
        email: dados.email,
        telefone: dados.telefone,
        e_cliente: dados.e_cliente,
      })
      .eq('id', contatoId)
      .eq('estudio_id', estudioId)
      .select()
      .single();

    if (error) {
      throw error;
    }

    this.listaInterna.update((contatos) =>
      contatos
        .map((contato) =>
          contato.id === contatoId ? data : contato,
        )
        .sort((a, b) => a.nome.localeCompare(b.nome)),
    );

    return data;
  }

  async excluir(contatoId: string): Promise<void> {
    const estudioId = await this.obterEstudioId();

    const { error } = await this.clienteSupabase.cliente
      .from('contatos')
      .delete()
      .eq('id', contatoId)
      .eq('estudio_id', estudioId);

    if (error) {
      throw error;
    }

    this.listaInterna.update((contatos) =>
      contatos.filter((contato) => contato.id !== contatoId),
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
    if (
      typeof erro === 'object' &&
      erro !== null &&
      'message' in erro
    ) {
      return String(erro.message);
    }

    return 'Não foi possível carregar os contatos.';
  }
}
