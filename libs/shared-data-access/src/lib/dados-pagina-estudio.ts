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
  normalizarTemaPaginaPublica,
  obterCorContrasteEstudio,
  type TemaPaginaPublica,
} from './dados-estudio';

export interface EmbedPaginaPublica {
  provedor: 'spotify' | 'youtube' | 'soundcloud';
  url: string;
}

export interface EstudioPaginaPublica {
  nome: string;
  slug: string;
  logo_url: string | null;
  cor_principal: string | null;
  tema_pagina_publica?: TemaPaginaPublica | null;
  descricao: string | null;
  cidade: string | null;
  whatsapp: string | null;
  instagram: string | null;
}

export interface ServicoPaginaPublica {
  id: string;
  nome: string;
  preco: number;
  tipo_cobranca: string;
  duracao_minutos: number | null;
}

export interface AlbumPaginaPublica {
  id: string;
  nome: string;
  projeto: string;
  tipo: string | null;
  descricao: string | null;
  capa_url: string | null;
  quantidade_faixas: number;
  reproducao_publica: boolean;
  download_publico: boolean;
}

interface RespostaPaginaEstudio {
  estudio: EstudioPaginaPublica;
  servicos?: ServicoPaginaPublica[];
  albuns?: AlbumPaginaPublica[];
  embeds?: EmbedPaginaPublica[];
}

@Injectable({
  providedIn: 'root',
})
export class DadosPaginaEstudio {
  private readonly clienteSupabase =
    inject(ClienteSupabase);

  private readonly estudioInterno =
    signal<EstudioPaginaPublica | null>(null);

  private readonly servicosInternos =
    signal<ServicoPaginaPublica[]>([]);

  private readonly albunsInternos =
    signal<AlbumPaginaPublica[]>([]);

  private readonly embedsInternos =
    signal<EmbedPaginaPublica[]>([]);

  private readonly carregandoInterno =
    signal(false);

  private readonly erroInterno =
    signal<string | null>(null);

  readonly estudio =
    this.estudioInterno.asReadonly();

  readonly servicos =
    this.servicosInternos.asReadonly();

  readonly albuns =
    this.albunsInternos.asReadonly();

  readonly embeds =
    this.embedsInternos.asReadonly();

  readonly carregando =
    this.carregandoInterno.asReadonly();

  readonly erro =
    this.erroInterno.asReadonly();

  readonly corPrincipal = computed(() =>
    normalizarCorEstudio(
      this.estudioInterno()?.cor_principal,
    ) ?? COR_PADRAO_ESTUDIO,
  );

  readonly corContraste = computed(() =>
    obterCorContrasteEstudio(
      this.corPrincipal(),
    ),
  );

  readonly temaPaginaPublica =
    computed<TemaPaginaPublica>(() =>
      normalizarTemaPaginaPublica(
        this.estudioInterno()
          ?.tema_pagina_publica,
      ),
    );

  async carregar(slug: string): Promise<void> {
    this.carregandoInterno.set(true);
    this.erroInterno.set(null);

    this.estudioInterno.set(null);
    this.servicosInternos.set([]);
    this.albunsInternos.set([]);
    this.embedsInternos.set([]);

    try {
      const slugNormalizado = slug
        .trim()
        .toLocaleLowerCase('pt-BR');

      if (!slugNormalizado) {
        throw new Error(
          'Página não encontrada ou indisponível.',
        );
      }

      const { data, error } =
        await this.clienteSupabase.cliente.functions.invoke(
          'abrir-pagina-estudio',
          {
            body: {
              slug: slugNormalizado,
            },
          },
        );

      if (error) {
        throw await this.criarErroFuncao(error);
      }

      const resposta =
        data as RespostaPaginaEstudio | null;

      if (!resposta?.estudio) {
        throw new Error(
          'A resposta da página é inválida.',
        );
      }

      this.estudioInterno.set(
        resposta.estudio,
      );

      this.servicosInternos.set(
        resposta.servicos ?? [],
      );

      this.albunsInternos.set(
        resposta.albuns ?? [],
      );

      this.embedsInternos.set(
        resposta.embeds ?? [],
      );
    } catch (erro) {
      this.erroInterno.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.carregandoInterno.set(false);
    }
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
      'Página não encontrada ou indisponível.',
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

    return 'Página não encontrada ou indisponível.';
  }
}
