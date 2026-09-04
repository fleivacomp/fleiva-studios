import {
  inject,
  Injectable,
  signal,
} from '@angular/core';
import { ClienteSupabase } from './cliente-supabase';
import type { Database } from './tipos-banco';

export type RecursoExperienciaImersiva =
  Database['public']['Tables']['recursos_experiencia_imersiva']['Row'];

export interface VinculoVersaoExperienciaImersiva {
  nome: string;
  versao_id: string;
}

export interface UploadRecursoExperienciaImersiva {
  experiencia_id: string;
  nome: string;
  arquivo: File;
}

export interface VersaoDisponivelExperienciaImersiva {
  id: string;
  faixa_id: string;
  faixa_titulo: string;
  versao: string;
  nome_arquivo: string;
}

interface RespostaCriarUploadRecurso {
  recurso_id: string;
  upload_url: string;
  metodo: 'PUT';
  cabecalhos: Record<string, string>;
  expira_em: string;
}

interface RespostaConfirmarUploadRecurso {
  recurso: RecursoExperienciaImersiva;
}

interface RespostaAbrirRecurso {
  reproducao_url: string;
  expira_em: string;
}

@Injectable({
  providedIn: 'root',
})
export class DadosRecursosExperienciaImersiva {
  private readonly clienteSupabase =
    inject(ClienteSupabase);

  private readonly listaInterna =
    signal<RecursoExperienciaImersiva[]>([]);

  private readonly carregandoInterno = signal(false);
  private readonly erroInterno =
    signal<string | null>(null);
  private readonly versoesDisponiveisInternas =
    signal<VersaoDisponivelExperienciaImersiva[]>([]);
  private readonly carregandoVersoesInterno = signal(false);
  private readonly erroVersoesInterno = signal<string | null>(null);

  readonly recursos = this.listaInterna.asReadonly();
  readonly carregando =
    this.carregandoInterno.asReadonly();
  readonly erro = this.erroInterno.asReadonly();
  readonly versoesDisponiveis =
    this.versoesDisponiveisInternas.asReadonly();
  readonly carregandoVersoes =
    this.carregandoVersoesInterno.asReadonly();
  readonly erroVersoes = this.erroVersoesInterno.asReadonly();

  async listar(experienciaId: string): Promise<void> {
    this.carregandoInterno.set(true);
    this.erroInterno.set(null);

    try {
      const estudioId = await this.obterEstudioId();

      const { data, error } =
        await this.clienteSupabase.cliente
          .from('recursos_experiencia_imersiva')
          .select('*')
          .eq('experiencia_id', experienciaId)
          .eq('estudio_id', estudioId)
          .order('criado_em', {
            ascending: true,
          });

      if (error) {
        throw error;
      }

      this.listaInterna.set(
        data.filter(
          (recurso) =>
            !recurso.tipo_mime?.startsWith('image/'),
        ),
      );
    } catch (erro) {
      this.erroInterno.set(
        this.obterMensagemErro(
          erro,
          'Não foi possível carregar os recursos sonoros.',
        ),
      );
    } finally {
      this.carregandoInterno.set(false);
    }
  }

  async vincularVersao(
    experienciaId: string,
    dados: VinculoVersaoExperienciaImersiva,
  ): Promise<RecursoExperienciaImersiva> {
    const estudioId = await this.obterEstudioId();
    const nome = this.normalizarNome(dados.nome);

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('recursos_experiencia_imersiva')
        .insert({
          estudio_id: estudioId,
          experiencia_id: experienciaId,
          nome,
          versao_id: dados.versao_id,
        })
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listar(experienciaId);

    return data;
  }

  async listarVersoesDisponiveis(): Promise<void> {
    this.carregandoVersoesInterno.set(true);
    this.erroVersoesInterno.set(null);

    try {
      const estudioId = await this.obterEstudioId();
      const { data: versoes, error: erroVersoes } =
        await this.clienteSupabase.cliente
          .from('versoes_faixa')
          .select('id, faixa_id, versao, nome_arquivo')
          .eq('estudio_id', estudioId)
          .not('confirmado_em', 'is', null)
          .order('criado_em', { ascending: false });

      if (erroVersoes) throw erroVersoes;

      const faixaIds = [
        ...new Set(versoes.map((versao) => versao.faixa_id)),
      ];

      if (faixaIds.length === 0) {
        this.versoesDisponiveisInternas.set([]);
        return;
      }

      const { data: faixas, error: erroFaixas } =
        await this.clienteSupabase.cliente
          .from('faixas')
          .select('id, titulo')
          .eq('estudio_id', estudioId)
          .in('id', faixaIds);

      if (erroFaixas) throw erroFaixas;

      const titulos = new Map(
        faixas.map((faixa) => [faixa.id, faixa.titulo]),
      );

      this.versoesDisponiveisInternas.set(
        versoes.map((versao) => ({
          id: versao.id,
          faixa_id: versao.faixa_id,
          faixa_titulo: titulos.get(versao.faixa_id) ?? 'Faixa',
          versao: versao.versao,
          nome_arquivo: versao.nome_arquivo,
        })),
      );
    } catch (erro) {
      this.erroVersoesInterno.set(
        this.obterMensagemErro(
          erro,
          'Não foi possível carregar as versões de faixa.',
        ),
      );
    } finally {
      this.carregandoVersoesInterno.set(false);
    }
  }

  async enviar(
    dados: UploadRecursoExperienciaImersiva,
  ): Promise<RecursoExperienciaImersiva> {
    const arquivo = dados.arquivo;
    const nome = this.normalizarNome(dados.nome);

    const { data, error } =
      await this.clienteSupabase.cliente.functions.invoke(
        'criar-upload-recurso-experiencia',
        {
          body: {
            experiencia_id: dados.experiencia_id,
            nome,
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
      | RespostaCriarUploadRecurso
      | null;

    if (
      !inicio?.recurso_id ||
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
        dados.experiencia_id,
        inicio.recurso_id,
      );
    }

    if (!respostaUpload.ok) {
      await this.cancelarReserva(
        inicio.recurso_id,
      );

      throw new Error(
        'O armazenamento recusou o envio do arquivo.',
      );
    }

    const recursoConfirmado =
      await this.confirmarUpload(
        inicio.recurso_id,
      );

    await this.listar(dados.experiencia_id);

    return recursoConfirmado;
  }

  async enviarImagem(
    dados: UploadRecursoExperienciaImersiva,
  ): Promise<RecursoExperienciaImersiva> {
    if (!dados.arquivo.type.startsWith('image/')) {
      throw new Error('Selecione um arquivo de imagem válido.');
    }

    return this.enviar(dados);
  }

  async renomear(
    experienciaId: string,
    recursoId: string,
    nomeInformado: string,
  ): Promise<RecursoExperienciaImersiva> {
    const estudioId = await this.obterEstudioId();
    const nome = this.normalizarNome(nomeInformado);

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('recursos_experiencia_imersiva')
        .update({ nome })
        .eq('id', recursoId)
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

  async obterUrlReproducao(
    experienciaId: string,
    recursoId: string,
  ): Promise<string> {
    const { data, error } =
      await this.clienteSupabase.cliente.functions.invoke(
        'abrir-recurso-experiencia',
        {
          body: {
            experiencia_id: experienciaId,
            recurso_id: recursoId,
          },
        },
      );

    if (error) {
      throw await this.criarErroFuncao(
        error,
        'Não foi possível abrir o recurso.',
      );
    }

    const resposta = data as RespostaAbrirRecurso | null;

    if (!resposta?.reproducao_url) {
      throw new Error(
        'A resposta de reprodução é inválida.',
      );
    }

    return resposta.reproducao_url;
  }

  async excluir(
    experienciaId: string,
    recursoId: string,
  ): Promise<void> {
    const { error } =
      await this.clienteSupabase.cliente.functions.invoke(
        'excluir-recurso-experiencia',
        {
          body: {
            experiencia_id: experienciaId,
            recurso_id: recursoId,
          },
        },
      );

    if (error) {
      throw await this.criarErroFuncao(
        error,
        'Não foi possível excluir o recurso.',
      );
    }

    await this.listar(experienciaId);
  }

  private normalizarNome(nomeInformado: string): string {
    const nome = nomeInformado.trim();

    if (!nome) {
      throw new Error('Informe o nome do recurso.');
    }

    return nome;
  }

  private async recuperarConfirmacao(
    experienciaId: string,
    recursoId: string,
  ): Promise<RecursoExperienciaImersiva> {
    try {
      const recurso =
        await this.confirmarUpload(recursoId);

      await this.listar(experienciaId);

      return recurso;
    } catch {
      throw new Error(
        'A conexão foi interrompida durante o upload. Tente novamente.',
      );
    }
  }

  private async confirmarUpload(
    recursoId: string,
  ): Promise<RecursoExperienciaImersiva> {
    let ultimoErro: unknown = null;

    for (
      let tentativa = 0;
      tentativa < 2;
      tentativa += 1
    ) {
      const { data, error } =
        await this.clienteSupabase.cliente.functions.invoke(
          'confirmar-upload-recurso-experiencia',
          {
            body: {
              recurso_id: recursoId,
            },
          },
        );

      if (!error) {
        const resposta = data as
          | RespostaConfirmarUploadRecurso
          | null;

        if (!resposta?.recurso) {
          throw new Error(
            'A confirmação do upload é inválida.',
          );
        }

        return resposta.recurso;
      }

      ultimoErro = error;
    }

    throw await this.criarErroFuncao(
      ultimoErro,
      'Não foi possível confirmar o upload.',
    );
  }

  private async cancelarReserva(
    recursoId: string,
  ): Promise<void> {
    const { error } =
      await this.clienteSupabase.cliente.rpc(
        'cancelar_reserva_upload_recurso_experiencia',
        {
          p_recurso_id: recursoId,
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
