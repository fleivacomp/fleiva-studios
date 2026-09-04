import {
  inject,
  Injectable,
  signal,
} from '@angular/core';
import { ClienteSupabase } from './cliente-supabase';
import type {
  Database,
  Json,
} from './tipos-banco';

export type AcaoBlocoExperienciaImersiva =
  Database['public']['Tables']['acoes_bloco_experiencia_imersiva']['Row'];

export interface DadosAcaoBlocoExperienciaImersiva {
  recurso_id: string | null;
  ordem: number;
  acao: string;
  inicio_segundos: number;
  parametros: Json;
}

@Injectable({
  providedIn: 'root',
})
export class DadosAcoesBlocoExperienciaImersiva {
  private readonly clienteSupabase =
    inject(ClienteSupabase);

  private readonly listaInterna =
    signal<AcaoBlocoExperienciaImersiva[]>([]);

  private readonly carregandoInterno = signal(false);
  private readonly erroInterno =
    signal<string | null>(null);

  readonly acoes = this.listaInterna.asReadonly();
  readonly carregando =
    this.carregandoInterno.asReadonly();
  readonly erro = this.erroInterno.asReadonly();

  async listarDaExperiencia(
    experienciaId: string,
  ): Promise<void> {
    await this.consultar(experienciaId);
  }

  async listar(
    experienciaId: string,
    blocoId: string,
  ): Promise<void> {
    await this.consultar(experienciaId, blocoId);
  }

  private async consultar(
    experienciaId: string,
    blocoId?: string,
  ): Promise<void> {
    this.carregandoInterno.set(true);
    this.erroInterno.set(null);

    try {
      const estudioId = await this.obterEstudioId();

      let consulta = this.clienteSupabase.cliente
        .from('acoes_bloco_experiencia_imersiva')
        .select('*')
        .eq('experiencia_id', experienciaId)
        .eq('estudio_id', estudioId);

      if (blocoId) {
        consulta = consulta.eq('bloco_id', blocoId);
      }

      const { data, error } = await consulta.order('ordem', {
        ascending: true,
      });

      if (error) {
        throw error;
      }

      this.listaInterna.set(data);
    } catch (erro) {
      this.erroInterno.set(
        this.obterMensagemErro(
          erro,
          'Não foi possível carregar as ações do bloco.',
        ),
      );
    } finally {
      this.carregandoInterno.set(false);
    }
  }

  async cadastrar(
    experienciaId: string,
    blocoId: string,
    dados: DadosAcaoBlocoExperienciaImersiva,
  ): Promise<AcaoBlocoExperienciaImersiva> {
    const estudioId = await this.obterEstudioId();

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('acoes_bloco_experiencia_imersiva')
        .insert({
          estudio_id: estudioId,
          experiencia_id: experienciaId,
          bloco_id: blocoId,
          recurso_id: dados.recurso_id,
          ordem: dados.ordem,
          acao: dados.acao,
          inicio_segundos: dados.inicio_segundos,
          parametros: dados.parametros,
        })
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listarDaExperiencia(experienciaId);

    return data;
  }

  async atualizar(
    experienciaId: string,
    blocoId: string,
    acaoId: string,
    dados: DadosAcaoBlocoExperienciaImersiva,
  ): Promise<AcaoBlocoExperienciaImersiva> {
    const estudioId = await this.obterEstudioId();

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('acoes_bloco_experiencia_imersiva')
        .update({
          recurso_id: dados.recurso_id,
          ordem: dados.ordem,
          acao: dados.acao,
          inicio_segundos: dados.inicio_segundos,
          parametros: dados.parametros,
        })
        .eq('id', acaoId)
        .eq('bloco_id', blocoId)
        .eq('experiencia_id', experienciaId)
        .eq('estudio_id', estudioId)
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listarDaExperiencia(experienciaId);

    return data;
  }

  async excluir(
    experienciaId: string,
    blocoId: string,
    acaoId: string,
  ): Promise<void> {
    const estudioId = await this.obterEstudioId();

    const { error } =
      await this.clienteSupabase.cliente
        .from('acoes_bloco_experiencia_imersiva')
        .delete()
        .eq('id', acaoId)
        .eq('bloco_id', blocoId)
        .eq('experiencia_id', experienciaId)
        .eq('estudio_id', estudioId);

    if (error) {
      throw error;
    }

    await this.listarDaExperiencia(experienciaId);
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
}
