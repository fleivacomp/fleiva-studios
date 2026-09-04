import {
  inject,
  Injectable,
  signal,
} from '@angular/core';
import { ClienteSupabase } from './cliente-supabase';
import type { Database } from './tipos-banco';

export type BlocoExperienciaImersiva =
  Database['public']['Tables']['blocos_experiencia_imersiva']['Row'];

export interface DadosBlocoExperienciaImersiva {
  ordem: number;
  conteudo: string | null;
  imagem_caminho: string | null;
  teto_temporal_segundos: number | null;
  hold_point_segundos: number | null;
}

@Injectable({
  providedIn: 'root',
})
export class DadosBlocosExperienciaImersiva {
  private readonly clienteSupabase =
    inject(ClienteSupabase);

  private readonly listaInterna =
    signal<BlocoExperienciaImersiva[]>([]);

  private readonly carregandoInterno = signal(false);
  private readonly erroInterno =
    signal<string | null>(null);

  readonly blocos = this.listaInterna.asReadonly();
  readonly carregando =
    this.carregandoInterno.asReadonly();
  readonly erro = this.erroInterno.asReadonly();

  async listar(experienciaId: string): Promise<void> {
    this.carregandoInterno.set(true);
    this.erroInterno.set(null);

    try {
      const estudioId = await this.obterEstudioId();

      const { data, error } =
        await this.clienteSupabase.cliente
          .from('blocos_experiencia_imersiva')
          .select('*')
          .eq('experiencia_id', experienciaId)
          .eq('estudio_id', estudioId)
          .order('ordem', {
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
          'Não foi possível carregar os blocos.',
        ),
      );
    } finally {
      this.carregandoInterno.set(false);
    }
  }

  async cadastrar(
    experienciaId: string,
    dados: DadosBlocoExperienciaImersiva,
  ): Promise<BlocoExperienciaImersiva> {
    const estudioId = await this.obterEstudioId();

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('blocos_experiencia_imersiva')
        .insert({
          estudio_id: estudioId,
          experiencia_id: experienciaId,
          ordem: dados.ordem,
          conteudo: dados.conteudo,
          imagem_caminho: dados.imagem_caminho,
          teto_temporal_segundos:
            dados.teto_temporal_segundos,
          hold_point_segundos:
            dados.hold_point_segundos,
        })
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listar(experienciaId);

    return data;
  }

  async atualizar(
    experienciaId: string,
    blocoId: string,
    dados: DadosBlocoExperienciaImersiva,
  ): Promise<BlocoExperienciaImersiva> {
    const estudioId = await this.obterEstudioId();

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('blocos_experiencia_imersiva')
        .update({
          ordem: dados.ordem,
          conteudo: dados.conteudo,
          imagem_caminho: dados.imagem_caminho,
          teto_temporal_segundos:
            dados.teto_temporal_segundos,
          hold_point_segundos:
            dados.hold_point_segundos,
        })
        .eq('id', blocoId)
        .eq('experiencia_id', experienciaId)
        .eq('estudio_id', estudioId)
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listar(experienciaId);

    return data;
  }

  async excluir(
    experienciaId: string,
    blocoId: string,
  ): Promise<void> {
    const estudioId = await this.obterEstudioId();

    const { error } = await this.clienteSupabase.cliente
      .from('blocos_experiencia_imersiva')
      .delete()
      .eq('id', blocoId)
      .eq('experiencia_id', experienciaId)
      .eq('estudio_id', estudioId);

    if (error) {
      throw error;
    }

    await this.listar(experienciaId);
  }

  async mover(
    experienciaId: string,
    blocoId: string,
    direcao: -1 | 1,
  ): Promise<void> {
    const blocos = this.listaInterna();
    const indice = blocos.findIndex((bloco) => bloco.id === blocoId);
    const vizinho = blocos[indice + direcao];
    const bloco = blocos[indice];

    if (!bloco || !vizinho) {
      return;
    }

    const estudioId = await this.obterEstudioId();
    let ordemTemporaria = -Math.floor(Date.now() / 1000);

    while (blocos.some((item) => item.ordem === ordemTemporaria)) {
      ordemTemporaria -= 1;
    }

    let vizinhoMovido = false;

    try {
      await this.atualizarSomenteOrdem(
        estudioId,
        experienciaId,
        bloco.id,
        ordemTemporaria,
      );
      await this.atualizarSomenteOrdem(
        estudioId,
        experienciaId,
        vizinho.id,
        bloco.ordem,
      );
      vizinhoMovido = true;
      await this.atualizarSomenteOrdem(
        estudioId,
        experienciaId,
        bloco.id,
        vizinho.ordem,
      );
    } catch (erro) {
      if (vizinhoMovido) {
        await this.atualizarSomenteOrdem(
          estudioId,
          experienciaId,
          vizinho.id,
          vizinho.ordem,
        ).catch(() => undefined);
      }

      await this.atualizarSomenteOrdem(
        estudioId,
        experienciaId,
        bloco.id,
        bloco.ordem,
      ).catch(() => undefined);

      throw erro;
    } finally {
      await this.listar(experienciaId);
    }
  }

  private async atualizarSomenteOrdem(
    estudioId: string,
    experienciaId: string,
    blocoId: string,
    ordem: number,
  ): Promise<void> {
    const { error } = await this.clienteSupabase.cliente
      .from('blocos_experiencia_imersiva')
      .update({ ordem })
      .eq('id', blocoId)
      .eq('experiencia_id', experienciaId)
      .eq('estudio_id', estudioId);

    if (error) {
      throw error;
    }
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
