import {
  inject,
  Injectable,
  signal,
} from '@angular/core';
import { ClienteSupabase } from './cliente-supabase';

export interface EstudioAlbumCompartilhado {
  nome: string;
  logo_url: string | null;
  cor_principal: string | null;
}

export interface FaixaAlbumCompartilhado {
  item_id: string;
  ordem: number;
  faixa: string;
  versao: string;
  observacoes: string | null;
  nome_arquivo: string;
  tamanho_bytes: number;
  tipo_mime: string | null;
  criado_em: string;
  reproducao_url: string;
  reproducao_expira_em: string;
  download_url: string;
  download_expira_em: string;
}

export interface AlbumCompartilhado {
  nome: string;
  observacoes: string | null;
  projeto: string;
  capa_url: string | null;
  estudio: EstudioAlbumCompartilhado;
  faixas: FaixaAlbumCompartilhado[];
}

export interface DownloadFaixaAlbum {
  url: string;
  nome_arquivo: string;
}

interface RespostaAlbumCompartilhado {
  album: AlbumCompartilhado;
}

@Injectable({
  providedIn: 'root',
})
export class DadosAlbumCompartilhado {
  private readonly clienteSupabase =
    inject(ClienteSupabase);

  private readonly albumInterno =
    signal<AlbumCompartilhado | null>(null);

  private readonly respostaInterna =
    signal<RespostaAlbumCompartilhado | null>(null);

  private readonly carregandoInterno = signal(false);
  private readonly erroInterno = signal<string | null>(null);

  readonly album = this.albumInterno.asReadonly();
  readonly carregando = this.carregandoInterno.asReadonly();
  readonly erro = this.erroInterno.asReadonly();

  async carregar(token: string): Promise<void> {
    this.carregandoInterno.set(true);
    this.erroInterno.set(null);
    this.albumInterno.set(null);
    this.respostaInterna.set(null);

    try {
      const resposta = await this.solicitar(token);

      this.atualizarResposta(resposta);
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
    itemId: string,
  ): Promise<DownloadFaixaAlbum> {
    let resposta = this.respostaInterna();
    let faixa = resposta?.album.faixas.find(
      (item) => item.item_id === itemId,
    );

    if (
      !faixa ||
      Date.parse(faixa.download_expira_em) <=
        Date.now() + 15_000
    ) {
      resposta = await this.solicitar(token);
      this.atualizarResposta(resposta);

      faixa = resposta.album.faixas.find(
        (item) => item.item_id === itemId,
      );
    }

    if (!faixa) {
      throw new Error(
        'A faixa não está disponível neste álbum.',
      );
    }

    return {
      url: faixa.download_url,
      nome_arquivo: faixa.nome_arquivo,
    };
  }

  private atualizarResposta(
    resposta: RespostaAlbumCompartilhado,
  ): void {
    this.respostaInterna.set(resposta);
    this.albumInterno.set(resposta.album);
  }

  private async solicitar(
    token: string,
  ): Promise<RespostaAlbumCompartilhado> {
    const { data, error } =
      await this.clienteSupabase.cliente.functions.invoke(
        'abrir-album',
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
      | RespostaAlbumCompartilhado
      | null;

    if (
      !resposta?.album ||
      !resposta.album.estudio ||
      !Array.isArray(resposta.album.faixas)
    ) {
      throw new Error(
        'A resposta do álbum é inválida.',
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
