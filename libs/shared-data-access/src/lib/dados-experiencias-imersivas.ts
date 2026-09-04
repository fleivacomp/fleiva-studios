import {
  inject,
  Injectable,
  signal,
} from '@angular/core';
import { ClienteSupabase } from './cliente-supabase';
import type { Database } from './tipos-banco';

export type ExperienciaImersiva =
  Database['public']['Tables']['experiencias_imersivas']['Row'];

export interface DadosExperienciaImersiva {
  nome: string;
  album_id: string | null;
}

export interface AlbumDisponivelExperienciaImersiva {
  id: string;
  nome: string;
  tipo_publico: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class DadosExperienciasImersivas {
  private readonly clienteSupabase =
    inject(ClienteSupabase);

  private readonly listaInterna =
    signal<ExperienciaImersiva[]>([]);

  private readonly carregandoInterno = signal(false);
  private readonly erroInterno =
    signal<string | null>(null);
  private readonly albunsDisponiveisInternos =
    signal<AlbumDisponivelExperienciaImersiva[]>([]);
  private readonly carregandoAlbunsInterno = signal(false);
  private readonly erroAlbunsInterno = signal<string | null>(null);

  readonly experiencias = this.listaInterna.asReadonly();
  readonly carregando =
    this.carregandoInterno.asReadonly();
  readonly erro = this.erroInterno.asReadonly();
  readonly albunsDisponiveis =
    this.albunsDisponiveisInternos.asReadonly();
  readonly carregandoAlbuns =
    this.carregandoAlbunsInterno.asReadonly();
  readonly erroAlbuns = this.erroAlbunsInterno.asReadonly();

  async listar(): Promise<void> {
    this.carregandoInterno.set(true);
    this.erroInterno.set(null);

    try {
      const estudioId = await this.obterEstudioId();

      const { data, error } =
        await this.clienteSupabase.cliente
          .from('experiencias_imersivas')
          .select('*')
          .eq('estudio_id', estudioId)
          .order('criado_em', {
            ascending: false,
          });

      if (error) {
        throw error;
      }

      this.listaInterna.set(data);
    } catch (erro) {
      this.erroInterno.set(
        this.obterMensagemErro(
          erro,
          'Não foi possível carregar as experiências.',
        ),
      );
    } finally {
      this.carregandoInterno.set(false);
    }
  }

  async cadastrar(
    dados: DadosExperienciaImersiva,
  ): Promise<ExperienciaImersiva> {
    const estudioId = await this.obterEstudioId();
    const dadosNormalizados = this.normalizar(dados);

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('experiencias_imersivas')
        .insert({
          estudio_id: estudioId,
          nome: dadosNormalizados.nome,
          album_id: dadosNormalizados.album_id,
        })
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async listarAlbunsDisponiveis(): Promise<void> {
    this.carregandoAlbunsInterno.set(true);
    this.erroAlbunsInterno.set(null);

    try {
      const estudioId = await this.obterEstudioId();
      const { data, error } = await this.clienteSupabase.cliente
        .from('albuns')
        .select('id, nome, tipo_publico')
        .eq('estudio_id', estudioId)
        .eq('publico_na_landing', true)
        .order('atualizado_em', { ascending: false });

      if (error) throw error;
      this.albunsDisponiveisInternos.set(data);
    } catch (erro) {
      this.erroAlbunsInterno.set(
        this.obterMensagemErro(
          erro,
          'Não foi possível carregar os trabalhos publicados.',
        ),
      );
    } finally {
      this.carregandoAlbunsInterno.set(false);
    }
  }

  async atualizar(
    experienciaId: string,
    dados: DadosExperienciaImersiva,
  ): Promise<ExperienciaImersiva> {
    const estudioId = await this.obterEstudioId();
    const dadosNormalizados = this.normalizar(dados);

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('experiencias_imersivas')
        .update({
          nome: dadosNormalizados.nome,
          album_id: dadosNormalizados.album_id,
        })
        .eq('id', experienciaId)
        .eq('estudio_id', estudioId)
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async publicar(
    experienciaId: string,
  ): Promise<ExperienciaImersiva> {
    return this.definirPublicacao(
      experienciaId,
      new Date().toISOString(),
    );
  }

  async retirarPublicacao(
    experienciaId: string,
  ): Promise<ExperienciaImersiva> {
    return this.definirPublicacao(
      experienciaId,
      null,
    );
  }

  async excluir(experienciaId: string): Promise<void> {
    const { error } =
      await this.clienteSupabase.cliente.functions.invoke(
        'excluir-experiencia-imersiva',
        {
          body: {
            experiencia_id: experienciaId,
          },
        },
      );

    if (error) {
      throw await this.criarErroFuncao(
        error,
        'Não foi possível excluir a experiência.',
      );
    }

    await this.listar();
  }

  private async definirPublicacao(
    experienciaId: string,
    publicadaEm: string | null,
  ): Promise<ExperienciaImersiva> {
    const estudioId = await this.obterEstudioId();

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('experiencias_imersivas')
        .update({
          publicada_em: publicadaEm,
        })
        .eq('id', experienciaId)
        .eq('estudio_id', estudioId)
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  private normalizar(
    dados: DadosExperienciaImersiva,
  ): DadosExperienciaImersiva {
    const nome = dados.nome.trim();

    if (!nome) {
      throw new Error('Informe o nome da experiência.');
    }

    return {
      nome,
      album_id: dados.album_id?.trim() || null,
    };
  }

  private async obterEstudioId(): Promise<string> {
    const {
      data: { user },
      error,
    } =
      await this.clienteSupabase.cliente.auth.getUser();

    if (error || !user) {
      throw new Error('Usuário não autenticado.');
    }

    return user.id;
  }

  private obterMensagemErro(
    erro: unknown,
    mensagemPadrao: string,
  ): string {
    if (
      typeof erro === 'object' &&
      erro !== null &&
      'message' in erro
    ) {
      return String(erro.message);
    }

    return mensagemPadrao;
  }

  private async criarErroFuncao(
    erro: unknown,
    mensagemPadrao: string,
  ): Promise<Error> {
    if (
      typeof erro === 'object' &&
      erro !== null &&
      'context' in erro &&
      erro.context instanceof Response
    ) {
      try {
        const corpo = await erro.context.clone().json() as {
          erro?: unknown;
        };

        if (typeof corpo.erro === 'string') {
          return new Error(corpo.erro);
        }
      } catch {
        // Mantém a mensagem padrão.
      }
    }

    return new Error(this.obterMensagemErro(erro, mensagemPadrao));
  }
}
