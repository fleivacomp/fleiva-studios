import {
  computed,
  inject,
  Injectable,
  signal,
} from '@angular/core';

import { ClienteSupabase } from './cliente-supabase';

import type { Database } from './tipos-banco';

export type VersaoFaixa =
  Database['public']['Tables']['versoes_faixa']['Row'];

export type ArmazenamentoEstudio =
  Database['public']['Tables']['armazenamento_estudios']['Row'];

export interface UploadVersaoFaixa {
  faixa_id: string;
  versao: string;
  observacoes: string | null;
  arquivo: File;
}

export interface DownloadVersaoFaixa {
  url: string;
  nome_arquivo: string;
  expira_em: string;
}

interface RespostaCriarUpload {
  versao_id: string;
  upload_url: string;
  metodo: 'PUT';
  cabecalhos: Record<string, string>;
  expira_em: string;
}

interface RespostaConfirmarUpload {
  versao: VersaoFaixa;
}

@Injectable({
  providedIn: 'root',
})
export class DadosVersoesFaixa {

  private readonly clienteSupabase =
    inject(ClienteSupabase);

  private readonly listaInterna =
    signal<VersaoFaixa[]>([]);

  private readonly limiteBytesInterno = signal(0);

  private readonly carregandoInterno = signal(false);

  private readonly erroInterno =
    signal<string | null>(null);

  readonly versoes = this.listaInterna.asReadonly();

  readonly limiteBytes =
    this.limiteBytesInterno.asReadonly();

  readonly carregando =
    this.carregandoInterno.asReadonly();

  readonly erro =
    this.erroInterno.asReadonly();

  readonly versoesConfirmadas = computed(() =>
    this.listaInterna().filter(
      (versao) => versao.confirmado_em !== null,
    ),
  );

  readonly usoBytes = computed(() =>
    this.versoesConfirmadas().reduce(
      (total, versao) =>
        total + versao.tamanho_bytes,
      0,
    ),
  );

  readonly espacoDisponivelBytes = computed(() =>
    Math.max(
      this.limiteBytesInterno() - this.usoBytes(),
      0,
    ),
  );

  async listar(): Promise<void> {

    this.carregandoInterno.set(true);

    this.erroInterno.set(null);

    try {

      const {
        data: { user },
        error: erroUsuario,
      } =
        await this.clienteSupabase.cliente.auth.getUser();

      if (erroUsuario || !user) {
        throw new Error('Usuário não autenticado.');
      }

      const { data: estudio } =
        await this.clienteSupabase.cliente
          .from('estudios')
          .select('id')
          .eq('id', user.id)
          .maybeSingle();

      const respostaVersoes =
        await this.clienteSupabase.cliente
          .from('versoes_faixa')
          .select('*')
          .order('criado_em', {
            ascending: false,
          });

      if (estudio) {

        const {
          data: armazenamento,
          error: erroArmazenamento,
        } =
          await this.clienteSupabase.cliente
            .from('armazenamento_estudios')
            .select('*')
            .eq('estudio_id', estudio.id)
            .maybeSingle();

        if (erroArmazenamento) {
          throw erroArmazenamento;
        }

        this.limiteBytesInterno.set(
          armazenamento?.limite_bytes ?? 0,
        );

      } else {

        this.limiteBytesInterno.set(0);

      }

      if (respostaVersoes.error) {
        throw respostaVersoes.error;
      }

      console.log(
        'VERSÕES - dados:',
        respostaVersoes.data,
      );

      console.log(
        'VERSÕES - erro:',
        respostaVersoes.error,
      );

      this.listaInterna.set(
        respostaVersoes.data ?? [],
      );

    } catch (erro) {

      this.erroInterno.set(
        this.obterMensagemErro(
          erro,
          'Não foi possível carregar as versões das faixas.',
        ),
      );

    } finally {

      this.carregandoInterno.set(false);

    }

  }

  async enviar(
    dados: UploadVersaoFaixa,
  ): Promise<VersaoFaixa> {

    const arquivo = dados.arquivo;

    const { data, error } =
      await this.clienteSupabase.cliente.functions.invoke(
        'criar-upload-faixa',
        {
          body: {
            faixa_id: dados.faixa_id,
            versao: dados.versao.trim(),
            observacoes:
              dados.observacoes?.trim() || null,
            nome_arquivo: arquivo.name,
            tamanho_bytes: arquivo.size,
            tipo_mime:
              arquivo.type ||
              'application/octet-stream',
          },
        },
      );

    if (error) {

      throw await this.criarErroFuncao(
        error,
        'Não foi possível iniciar o upload.',
      );

    }

    const inicio = data as
      | RespostaCriarUpload
      | null;

    if (
      !inicio?.versao_id ||
      !inicio.upload_url
    ) {

      throw new Error(
        'A resposta de início do upload é inválida.',
      );

    }

    let respostaUpload: Response;

    try {

      respostaUpload = await fetch(
        inicio.upload_url,
        {
          method: inicio.metodo,
          headers: inicio.cabecalhos,
          body: arquivo,
        },
      );

    } catch {

      return this.recuperarConfirmacao(
        inicio.versao_id,
      );

    }

    if (!respostaUpload.ok) {

      await this.cancelarReserva(
        inicio.versao_id,
      );

      throw new Error(
        'O armazenamento recusou o envio do arquivo.',
      );

    }

    const versaoConfirmada =
      await this.confirmarUpload(
        inicio.versao_id,
      );

    await this.listar();

    return versaoConfirmada;

  }

  async obterDownload(
    versaoId: string,
  ): Promise<DownloadVersaoFaixa> {

    return this.obterAcessoArquivo(
      versaoId,
      'download',
    );

  }

  async obterReproducao(
    versaoId: string,
  ): Promise<DownloadVersaoFaixa> {

    return this.obterAcessoArquivo(
      versaoId,
      'reproducao',
    );

  }

  private async obterAcessoArquivo(
    versaoId: string,
    modo: 'download' | 'reproducao',
  ): Promise<DownloadVersaoFaixa> {

    const { data, error } =
      await this.clienteSupabase.cliente.functions.invoke(
        'baixar-versao-faixa',
        {
          body: {
            versao_id: versaoId,
            modo,
          },
        },
      );

    if (error) {

      throw await this.criarErroFuncao(
        error,
        modo === 'reproducao'
          ? 'Não foi possível preparar a reprodução.'
          : 'Não foi possível preparar o download.',
      );

    }

    const resposta = data as
      | DownloadVersaoFaixa
      | null;

    if (
      !resposta?.url ||
      !resposta.nome_arquivo ||
      !resposta.expira_em
    ) {

      throw new Error(
        'A resposta de acesso ao arquivo é inválida.',
      );

    }

    return resposta;

  }

  async criarLinkCompartilhamento(
    versaoId: string,
  ): Promise<string> {

    const { data, error } =
      await this.clienteSupabase.cliente.rpc(
        'criar_link_compartilhamento_faixa',
        {
          p_versao_id: versaoId,
        },
      );

    if (error) {

      throw await this.criarErroFuncao(
        error,
        'Não foi possível criar o link.',
      );

    }

    if (typeof data !== 'string') {

      throw new Error(
        'A resposta de compartilhamento é inválida.',
      );

    }

    this.listaInterna.update((versoes) =>
      versoes.map((versao) =>
        versao.id === versaoId
          ? {
              ...versao,
              token_compartilhamento: data,
            }
          : versao,
      ),
    );

    return data;

  }

  async revogarLinkCompartilhamento(
    versaoId: string,
  ): Promise<void> {

    const { error } =
      await this.clienteSupabase.cliente.rpc(
        'revogar_link_compartilhamento_faixa',
        {
          p_versao_id: versaoId,
        },
      );

    if (error) {

      throw await this.criarErroFuncao(
        error,
        'Não foi possível revogar o link.',
      );

    }

    this.listaInterna.update((versoes) =>
      versoes.map((versao) =>
        versao.id === versaoId
          ? {
              ...versao,
              token_compartilhamento: null,
            }
          : versao,
      ),
    );

  }

  versoesDaFaixa(
    faixaId: string,
  ): VersaoFaixa[] {

    return this.versoesConfirmadas().filter(
      (versao) =>
        versao.faixa_id === faixaId,
    );

  }

  private async recuperarConfirmacao(
    versaoId: string,
  ): Promise<VersaoFaixa> {

    try {

      const versao =
        await this.confirmarUpload(versaoId);

      await this.listar();

      return versao;

    } catch {

      throw new Error(
        'A conexão foi interrompida durante o upload. Tente novamente.',
      );

    }

  }

  private async confirmarUpload(
    versaoId: string,
  ): Promise<VersaoFaixa> {

    let ultimoErro: unknown = null;

    for (
      let tentativa = 0;
      tentativa < 2;
      tentativa += 1
    ) {

      const { data, error } =
        await this.clienteSupabase.cliente.functions.invoke(
          'confirmar-upload-faixa',
          {
            body: {
              versao_id: versaoId,
            },
          },
        );

      if (!error) {

        const resposta = data as
          | RespostaConfirmarUpload
          | null;

        if (!resposta?.versao) {

          throw new Error(
            'A confirmação do upload é inválida.',
          );

        }

        return resposta.versao;

      }

      ultimoErro = error;

    }

    throw await this.criarErroFuncao(
      ultimoErro,
      'Não foi possível confirmar o upload.',
    );

  }

  private async cancelarReserva(
    versaoId: string,
  ): Promise<void> {

    const { error } =
      await this.clienteSupabase.cliente.rpc(
        'cancelar_reserva_upload_faixa',
        {
          p_versao_id: versaoId,
        },
      );

    if (error) {

      console.error(
        'Não foi possível cancelar a reserva de upload.',
        error,
      );

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

  private async criarErroFuncao(
    erro: unknown,
    mensagemPadrao: string,
  ): Promise<Error> {

    const mensagemResposta =
      await this.obterMensagemRespostaFuncao(
        erro,
      );

    return new Error(
      mensagemResposta ??
        this.obterMensagemErro(
          erro,
          mensagemPadrao,
        ),
    );

  }

  private async obterMensagemRespostaFuncao(
    erro: unknown,
  ): Promise<string | null> {

    if (
      typeof erro !== 'object' ||
      erro === null ||
      !('context' in erro) ||
      !(erro.context instanceof Response)
    ) {

      return null;

    }

    try {

      const corpo = await erro.context
        .clone()
        .json() as {
          erro?: unknown;
        };

      return typeof corpo.erro === 'string'
        ? corpo.erro
        : null;

    } catch {

      return null;

    }

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
