import {
  inject,
  Injectable,
  computed,
  signal,
} from '@angular/core';
import { ClienteSupabase } from './cliente-supabase';
import {
  COR_PADRAO_ESTUDIO,
  normalizarCorEstudio,
  obterCorContrasteEstudio,
} from './dados-estudio';
import type { Json } from './tipos-banco';

export interface AcaoExperienciaImersivaPublica {
  id: string;
  bloco_id: string;
  recurso_id: string | null;
  ordem: number;
  acao: string;
  inicio_segundos: number;
  parametros: Json;
}

export interface BlocoExperienciaImersivaPublica {
  id: string;
  ordem: number;
  conteudo: string | null;
  imagem_caminho: string | null;
  imagem_url: string | null;
  teto_temporal_segundos: number | null;
  hold_point_segundos: number | null;
  acoes: AcaoExperienciaImersivaPublica[];
}

export interface RecursoExperienciaImersivaPublica {
  id: string;
  nome: string;
  versao_id: string | null;
  nome_arquivo: string;
  tamanho_bytes: number;
  tipo_mime: string | null;
  reproducao_url: string;
  reproducao_expira_em: string;
}

export interface EstudioExperienciaImersivaPublica {
  nome: string;
  slug: string;
  cor_principal: string | null;
}

export interface ExperienciaImersivaPublica {
  id: string;
  album_id: string | null;
  nome: string;
  publicada_em: string | null;
  estudio: EstudioExperienciaImersivaPublica | null;
  blocos: BlocoExperienciaImersivaPublica[];
  recursos: RecursoExperienciaImersivaPublica[];
}

interface RespostaExperienciaImersivaPublica {
  experiencia: ExperienciaImersivaPublica;
}

@Injectable({
  providedIn: 'root',
})
export class DadosExperienciaImersivaPublica {
  private readonly clienteSupabase =
    inject(ClienteSupabase);

  private readonly experienciaInterna =
    signal<ExperienciaImersivaPublica | null>(null);

  private readonly carregandoInterno = signal(false);
  private readonly erroInterno =
    signal<string | null>(null);

  readonly experiencia =
    this.experienciaInterna.asReadonly();

  readonly carregando =
    this.carregandoInterno.asReadonly();

  readonly erro = this.erroInterno.asReadonly();

  readonly corPrincipal = computed(() =>
    normalizarCorEstudio(
      this.experienciaInterna()?.estudio?.cor_principal,
    ) ?? COR_PADRAO_ESTUDIO,
  );

  readonly corContraste = computed(() =>
    obterCorContrasteEstudio(this.corPrincipal()),
  );

  async carregar(experienciaId: string): Promise<void> {
    this.carregandoInterno.set(true);
    this.erroInterno.set(null);
    this.experienciaInterna.set(null);

    try {
      const { data, error } =
        await this.clienteSupabase.cliente.functions.invoke(
          'abrir-experiencia-imersiva',
          {
            body: {
              experiencia_id: experienciaId.trim(),
            },
          },
        );

      if (error) {
        throw await this.criarErroFuncao(error);
      }

      const resposta = data as
        | RespostaExperienciaImersivaPublica
        | null;

      if (
        !resposta?.experiencia ||
        !Array.isArray(
          resposta.experiencia.blocos,
        ) ||
        !Array.isArray(
          resposta.experiencia.recursos,
        ) ||
        resposta.experiencia.blocos.some(
          (bloco) => !Array.isArray(bloco.acoes),
        )
      ) {
        throw new Error(
          'A resposta da experiência é inválida.',
        );
      }

      this.experienciaInterna.set(
        resposta.experiencia,
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
        const corpo = await erro.context
          .clone()
          .json() as {
            erro?: unknown;
          };

        if (typeof corpo.erro === 'string') {
          return new Error(corpo.erro);
        }
      } catch {
        // Mantém a mensagem pública padrão.
      }
    }

    return new Error(
      'Experiência não encontrada ou indisponível.',
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

    return 'Experiência não encontrada ou indisponível.';
  }
}
