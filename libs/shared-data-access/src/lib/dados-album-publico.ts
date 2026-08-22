import {
  computed,
  inject,
  Injectable,
  signal,
} from '@angular/core';
import { ClienteSupabase } from './cliente-supabase';
import {
  COR_PADRAO_ESTUDIO,
  normalizarCorEstudio,
  obterCorContrasteEstudio,
} from './dados-estudio';

export interface EstudioAlbumPublico {
  nome: string;
  slug: string;
  logo_url: string | null;
  cor_principal: string | null;
}

export interface FaixaAlbumPublico {
  id: string;
  ordem: number;
  faixa: string;
  versao: string;
  nome_arquivo: string;
  tamanho_bytes: number;
  tipo_mime: string | null;
}

export interface AlbumPublicoCompleto {
  id: string;
  nome: string;
  projeto: string;
  tipo: string | null;
  descricao: string | null;
  capa_url: string | null;
  reproducao_publica: boolean;
  download_publico: boolean;
  faixas: FaixaAlbumPublico[];
}

interface RespostaAlbumPublico {
  estudio: EstudioAlbumPublico;
  album: AlbumPublicoCompleto;
  arquivo?: ArquivoAlbumPublico | null;
  expira_em: string | null;
}

interface ArquivoAlbumPublico {
  faixa_id: string;
  url: string;
  nome_arquivo: string;
}

@Injectable({
  providedIn: 'root',
})
export class DadosAlbumPublico {
  private readonly clienteSupabase =
    inject(ClienteSupabase);

  private readonly respostaInterna =
    signal<RespostaAlbumPublico | null>(null);

  private readonly carregandoInterno = signal(false);
  private readonly erroInterno = signal<string | null>(null);

  readonly estudio = computed(
    () => this.respostaInterna()?.estudio ?? null,
  );

  readonly album = computed(
    () => this.respostaInterna()?.album ?? null,
  );

  readonly carregando = this.carregandoInterno.asReadonly();
  readonly erro = this.erroInterno.asReadonly();

  readonly corPrincipal = computed(() =>
    normalizarCorEstudio(
      this.estudio()?.cor_principal,
    ) ?? COR_PADRAO_ESTUDIO,
  );

  readonly corContraste = computed(() =>
    obterCorContrasteEstudio(this.corPrincipal()),
  );

  async carregar(
    slug: string,
    albumId: string,
  ): Promise<void> {
    this.carregandoInterno.set(true);
    this.erroInterno.set(null);
    this.respostaInterna.set(null);

    try {
      const resposta = await this.solicitar(
        slug,
        albumId,
      );

      this.respostaInterna.set(resposta);
    } catch (erro) {
      this.erroInterno.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.carregandoInterno.set(false);
    }
  }

  async obterUrlReproducao(
    slug: string,
    albumId: string,
    faixaId: string,
  ): Promise<string> {
    const arquivo = await this.solicitarArquivo(
      slug,
      albumId,
      faixaId,
      'reproducao',
    );

    return arquivo.url;
  }

  async obterDownload(
    slug: string,
    albumId: string,
    faixaId: string,
  ): Promise<{
    url: string;
    nome_arquivo: string;
  }> {
    const arquivo = await this.solicitarArquivo(
      slug,
      albumId,
      faixaId,
      'download',
    );

    return {
      url: arquivo.url,
      nome_arquivo: arquivo.nome_arquivo,
    };
  }

  private async solicitarArquivo(
    slug: string,
    albumId: string,
    faixaId: string,
    acao: 'reproducao' | 'download',
  ): Promise<ArquivoAlbumPublico> {
    const { data, error } =
      await this.clienteSupabase.cliente.functions.invoke(
        'abrir-album-publico',
        {
          body: {
            slug: slug.trim().toLocaleLowerCase(),
            album_id: albumId.trim(),
            faixa_id: faixaId,
            acao,
          },
        },
      );

    if (error) {
      throw await this.criarErroFuncao(error);
    }

    const resposta = data as RespostaAlbumPublico | null;

    if (
      !resposta?.arquivo ||
      resposta.arquivo.faixa_id !== faixaId ||
      !resposta.arquivo.url
    ) {
      throw new Error(
        acao === 'reproducao'
          ? 'A reprodução desta faixa não está disponível.'
          : 'O download desta faixa não está disponível.',
      );
    }

    return resposta.arquivo;
  }

  private async solicitar(
    slug: string,
    albumId: string,
  ): Promise<RespostaAlbumPublico> {
    const { data, error } =
      await this.clienteSupabase.cliente.functions.invoke(
        'abrir-album-publico',
        {
          body: {
            slug: slug.trim().toLocaleLowerCase(),
            album_id: albumId.trim(),
            acao: 'metadados',
          },
        },
      );

    if (error) {
      throw await this.criarErroFuncao(error);
    }

    const resposta = data as RespostaAlbumPublico | null;

    if (
      !resposta?.estudio ||
      !resposta.album ||
      !Array.isArray(resposta.album.faixas)
    ) {
      throw new Error(
        'A resposta do trabalho é inválida.',
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
        const corpo = (await erro.context
          .clone()
          .json()) as {
          erro?: unknown;
        };

        if (typeof corpo.erro === 'string') {
          return new Error(corpo.erro);
        }
      } catch {
        // Mantém a mensagem padrão.
      }
    }

    return new Error(
      'Trabalho não encontrado ou indisponível.',
    );
  }

  private obterMensagemErro(erro: unknown): string {
    if (
      typeof erro === 'object' &&
      erro !== null &&
      'message' in erro
    ) {
      return String(erro.message);
    }

    return 'Trabalho não encontrado ou indisponível.';
  }
};
