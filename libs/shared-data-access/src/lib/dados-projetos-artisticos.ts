import { inject, Injectable, signal } from '@angular/core';
import { ClienteSupabase } from './cliente-supabase';
import type { Database } from './tipos-banco';

type ProjetoBanco =
  Database['public']['Tables']['projetos_artisticos']['Row'];

type MembroProjetoBanco =
  Database['public']['Tables']['membros_projeto']['Row'];

type ContatoBanco =
  Database['public']['Tables']['contatos']['Row'];

export interface CadastroProjetoArtistico {
  nome: string;
  tipo: string;
}

export interface CadastroMembroProjeto {
  contato_id: string;
  papel: string;
  ativo: boolean;
}

export interface MembroProjetoCompleto
  extends MembroProjetoBanco {
  contato: Pick<
    ContatoBanco,
    'id' | 'nome' | 'email' | 'telefone'
  >;
}

export interface ProjetoArtisticoCompleto
  extends ProjetoBanco {
  membros: MembroProjetoCompleto[];
}

@Injectable({
  providedIn: 'root',
})
export class DadosProjetosArtisticos {
  private readonly clienteSupabase = inject(ClienteSupabase);

  private readonly listaInterna =
    signal<ProjetoArtisticoCompleto[]>([]);

  private readonly carregandoInterno = signal(false);
  private readonly erroInterno = signal<string | null>(null);

  readonly projetos = this.listaInterna.asReadonly();
  readonly carregando = this.carregandoInterno.asReadonly();
  readonly erro = this.erroInterno.asReadonly();

  async listar(): Promise<void> {
    this.carregandoInterno.set(true);
    this.erroInterno.set(null);

    try {
      const estudioId = await this.obterEstudioId();

      const { data, error } = await this.clienteSupabase.cliente
        .from('projetos_artisticos')
        .select(`
          id,
          estudio_id,
          nome,
          tipo,
          criado_em,
          atualizado_em,
          membros:membros_projeto (
            id,
            estudio_id,
            projeto_id,
            contato_id,
            papel,
            ativo,
            criado_em,
            atualizado_em,
            contato:contatos (
              id,
              nome,
              email,
              telefone
            )
          )
        `)
        .eq('estudio_id', estudioId)
        .order('nome');

      if (error) {
        throw error;
      }

      this.listaInterna.set(
        data as unknown as ProjetoArtisticoCompleto[],
      );
    } catch (erro) {
      this.erroInterno.set(this.obterMensagemErro(erro));
    } finally {
      this.carregandoInterno.set(false);
    }
  }

  async cadastrarProjeto(
    dados: CadastroProjetoArtistico,
  ): Promise<ProjetoBanco> {
    const estudioId = await this.obterEstudioId();

    const { data, error } = await this.clienteSupabase.cliente
      .from('projetos_artisticos')
      .insert({
        estudio_id: estudioId,
        nome: dados.nome.trim(),
        tipo: dados.tipo.trim(),
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async atualizarProjeto(
    projetoId: string,
    dados: CadastroProjetoArtistico,
  ): Promise<ProjetoBanco> {
    const estudioId = await this.obterEstudioId();

    const { data, error } = await this.clienteSupabase.cliente
      .from('projetos_artisticos')
      .update({
        nome: dados.nome.trim(),
        tipo: dados.tipo.trim(),
      })
      .eq('id', projetoId)
      .eq('estudio_id', estudioId)
      .select()
      .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async excluirProjeto(projetoId: string): Promise<void> {
    const estudioId = await this.obterEstudioId();

    const { error } = await this.clienteSupabase.cliente
      .from('projetos_artisticos')
      .delete()
      .eq('id', projetoId)
      .eq('estudio_id', estudioId);

    if (error) {
      throw error;
    }

    this.listaInterna.update((projetos) =>
      projetos.filter((projeto) => projeto.id !== projetoId),
    );
  }

  async adicionarMembro(
    projetoId: string,
    dados: CadastroMembroProjeto,
  ): Promise<MembroProjetoBanco> {
    const estudioId = await this.obterEstudioId();

    const { data, error } = await this.clienteSupabase.cliente
      .from('membros_projeto')
      .insert({
        estudio_id: estudioId,
        projeto_id: projetoId,
        contato_id: dados.contato_id,
        papel: dados.papel.trim(),
        ativo: dados.ativo,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async atualizarMembro(
    membroId: string,
    dados: CadastroMembroProjeto,
  ): Promise<MembroProjetoBanco> {
    const estudioId = await this.obterEstudioId();

    const { data, error } = await this.clienteSupabase.cliente
      .from('membros_projeto')
      .update({
        contato_id: dados.contato_id,
        papel: dados.papel.trim(),
        ativo: dados.ativo,
      })
      .eq('id', membroId)
      .eq('estudio_id', estudioId)
      .select()
      .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async removerMembro(membroId: string): Promise<void> {
    const estudioId = await this.obterEstudioId();

    const { error } = await this.clienteSupabase.cliente
      .from('membros_projeto')
      .delete()
      .eq('id', membroId)
      .eq('estudio_id', estudioId);

    if (error) {
      throw error;
    }

    await this.listar();
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

    return 'Não foi possível carregar os projetos artísticos.';
  }
}
