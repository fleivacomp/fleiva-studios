import {
  inject,
  Injectable,
  signal,
} from '@angular/core';
import { ClienteSupabase } from './cliente-supabase';

export interface ArquivoFaixaCompartilhado {
  faixa: string;
  projeto: string;
  versao: string;
  observacoes: string | null;
  nome_arquivo: string;
  tamanho_bytes: number;
  tipo_mime: string | null;
  criado_em: string;
}

export interface DownloadArquivoCompartilhado {
  url: string;
  nome_arquivo: string;
}

interface RespostaArquivoCompartilhado {
  arquivo: ArquivoFaixaCompartilhado;
  download_url: string;
  expira_em: string;
}

@Injectable({
  providedIn: 'root',
})
export class DadosArquivoCompartilhado {
  private readonly clienteSupabase =
    inject(ClienteSupabase);

  private readonly arquivoInterno =
    signal<ArquivoFaixaCompartilhado | null>(null);

  private readonly respostaInterna =
    signal<RespostaArquivoCompartilhado | null>(
      null,
    );

  private readonly carregandoInterno =
    signal(false);

  private readonly erroInterno =
    signal<string | null>(null);

  readonly arquivo =
    this.arquivoInterno.asReadonly();

  readonly carregando =
    this.carregandoInterno.asReadonly();

  readonly erro =
    this.erroInterno.asReadonly();

  async carregar(token: string): Promise<void> {
    this.carregandoInterno.set(true);
    this.erroInterno.set(null);
    this.arquivoInterno.set(null);
    this.respostaInterna.set(null);

    try {
      const resposta = await this.solicitar(
        token,
      );

      this.respostaInterna.set(resposta);
      this.arquivoInterno.set(
        resposta.arquivo,
      );
    } catch (erro) {
      this.erroInterno.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.carregandoInterno.set(false);
    }
  }

    async obterDownload(
    token: string,
  ): Promise<DownloadArquivoCompartilhado> {
    let resposta = this.respostaInterna();

    if (
      resposta === null ||
      Date.parse(resposta.expira_em) <=
        Date.now() + 15_000
    ) {
      resposta = await this.solicitar(token);

      this.respostaInterna.set(resposta);
      this.arquivoInterno.set(
        resposta.arquivo,
      );
    }

    return {
      url: resposta.download_url,
      nome_arquivo:
        resposta.arquivo.nome_arquivo,
    };
  }
  private async solicitar(
    token: string,
  ): Promise<RespostaArquivoCompartilhado> {
    const { data, error } =
      await this.clienteSupabase.cliente.functions.invoke(
        'abrir-arquivo-faixa',
        {
          body: {
            token,
          },
        },
      );

    if (error) {
      throw await this.criarErroFuncao(error);
    }

    const resposta = data as
      | RespostaArquivoCompartilhado
      | null;

    if (
      !resposta?.arquivo ||
      !resposta.download_url ||
      !resposta.expira_em
    ) {
      throw new Error(
        'A resposta do arquivo é inválida.',
      );
    }

    return resposta;
  }

  private async criarErroFuncao(
    erro: unknown,
  ): Promise<Error> {
    if (
      typeof erro === 'object' &&
      erro !== null &&
      'context' in erro &&
      erro.context instanceof Response
    ) {
      try {
        const corpo = await erro.context
          .clone()
          .json() as {
            erro?: unknown;
          };

        if (typeof corpo.erro === 'string') {
          return new Error(corpo.erro);
        }
      } catch {
        // Usa a mensagem padrão abaixo.
      }
    }

    return new Error(
      'Link inválido ou indisponível.',
    );
  }

  private obterMensagemErro(
    erro: unknown,
  ): string {
    if (
      typeof erro === 'object' &&
      erro !== null &&
      'message' in erro
    ) {
      return String(erro.message);
    }

    return 'Link inválido ou indisponível.';
  }
}
