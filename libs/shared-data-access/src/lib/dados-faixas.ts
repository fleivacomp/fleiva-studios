import { inject, Injectable, signal } from '@angular/core';
import { ClienteSupabase } from './cliente-supabase';
import type { Database } from './tipos-banco';

type FaixaBanco =
  Database['public']['Tables']['faixas']['Row'];

type AtualizacaoFaixaBanco =
  Database['public']['Tables']['faixas']['Update'];

type ProjetoBanco =
  Database['public']['Tables']['projetos_artisticos']['Row'];

export type StatusProducaoFaixa =
  Database['public']['Enums']['status_producao_faixa'];

export type ProjetoFaixa = Pick<
  ProjetoBanco,
  'id' | 'nome' | 'tipo' | 'capa_caminho'
>;

export type FaixaCompleta = FaixaBanco & {
  versao_principal_id: string | null;
  projeto: ProjetoFaixa;
};

export interface CadastroFaixa {
  projeto_id: string;
  titulo: string;
  bpm: number | null;
  tom: string | null;
  link_externo_audio: string | null;
  observacoes: string | null;
  status_producao: StatusProducaoFaixa;
}

const URL_PUBLICA_IMAGENS =
  'https://pub-b1d515cf725c469ea3d43e6cdc3546a7.r2.dev';

@Injectable({
  providedIn: 'root',
})
export class DadosFaixas {
  private readonly clienteSupabase = inject(ClienteSupabase);

  private readonly listaInterna = signal<FaixaCompleta[]>([]);
  private readonly projetosInternos = signal<ProjetoFaixa[]>([]);
  private readonly carregandoInterno = signal(false);
  private readonly erroInterno = signal<string | null>(null);

  readonly faixas = this.listaInterna.asReadonly();
  readonly projetos = this.projetosInternos.asReadonly();
  readonly carregando = this.carregandoInterno.asReadonly();
  readonly erro = this.erroInterno.asReadonly();

  async listar(): Promise<void> {
    this.carregandoInterno.set(true);
    this.erroInterno.set(null);

    try {
      const estudioId = await this.obterEstudioId();

      const [resultadoFaixas, resultadoProjetos] = await Promise.all([
        this.clienteSupabase.cliente
          .from('faixas')
          .select(`
            id,
            estudio_id,
            projeto_id,
            titulo,
            bpm,
            tom,
            link_externo_audio,
            observacoes,
            status_producao,
            versao_principal_id,
            criado_em,
            atualizado_em,
            projeto:projetos_artisticos (
              id,
              nome,
              tipo,
              capa_caminho
            )
          `)
          .eq('estudio_id', estudioId)
          .order('titulo'),
        this.clienteSupabase.cliente
          .from('projetos_artisticos')
          .select(`
            id,
            nome,
            tipo,
            capa_caminho
          `)
          .eq('estudio_id', estudioId)
          .order('nome'),
      ]);

      if (resultadoFaixas.error) {
        throw resultadoFaixas.error;
      }

      if (resultadoProjetos.error) {
        throw resultadoProjetos.error;
      }

      this.listaInterna.set(
        resultadoFaixas.data as unknown as FaixaCompleta[],
      );

      this.projetosInternos.set(
        resultadoProjetos.data as ProjetoFaixa[],
      );
    } catch (erro) {
      this.erroInterno.set(this.obterMensagemErro(erro));
    } finally {
      this.carregandoInterno.set(false);
    }
  }

  async cadastrar(dados: CadastroFaixa): Promise<FaixaBanco> {
    const estudioId = await this.obterEstudioId();

    const { data, error } = await this.clienteSupabase.cliente
      .from('faixas')
      .insert({
        estudio_id: estudioId,
        projeto_id: dados.projeto_id,
        titulo: dados.titulo.trim(),
        bpm: dados.bpm,
        tom: dados.tom,
        link_externo_audio: dados.link_externo_audio,
        observacoes: dados.observacoes,
        status_producao: dados.status_producao,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async atualizar(
    faixaId: string,
    dados: CadastroFaixa,
  ): Promise<FaixaBanco> {
    const estudioId = await this.obterEstudioId();

    const { data, error } = await this.clienteSupabase.cliente
      .from('faixas')
      .update({
        projeto_id: dados.projeto_id,
        titulo: dados.titulo.trim(),
        bpm: dados.bpm,
        tom: dados.tom,
        link_externo_audio: dados.link_externo_audio,
        observacoes: dados.observacoes,
        status_producao: dados.status_producao,
      })
      .eq('id', faixaId)
      .eq('estudio_id', estudioId)
      .select()
      .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async excluir(faixaId: string): Promise<void> {
    const estudioId = await this.obterEstudioId();

    const { error } = await this.clienteSupabase.cliente
      .from('faixas')
      .delete()
      .eq('id', faixaId)
      .eq('estudio_id', estudioId);

    if (error) {
      throw error;
    }

    this.listaInterna.update((faixas) =>
      faixas.filter((faixa) => faixa.id !== faixaId),
    );
  }

  async definirVersaoPrincipal(
    faixaId: string,
    versaoId: string,
  ): Promise<void> {
    const estudioId = await this.obterEstudioId();
    const atualizacao: AtualizacaoFaixaBanco & {
      versao_principal_id: string;
    } = {
      versao_principal_id: versaoId,
    };

    const { error } = await this.clienteSupabase.cliente
      .from('faixas')
      .update(atualizacao)
      .eq('id', faixaId)
      .eq('estudio_id', estudioId);

    if (error) {
      throw error;
    }

    await this.listar();
  }

  capaUrl(projeto: Pick<ProjetoBanco, 'capa_caminho'>): string | null {
    if (!projeto.capa_caminho) {
      return null;
    }

    const caminhoSeguro = projeto.capa_caminho
      .split('/')
      .map((parte) => encodeURIComponent(parte))
      .join('/');

    return `${URL_PUBLICA_IMAGENS}/${caminhoSeguro}`;
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

    return 'Não foi possível carregar as faixas.';
  }
}
