import {
  computed,
  inject,
  Injectable,
  signal,
} from '@angular/core';
import { ClienteSupabase } from './cliente-supabase';
import type { Database } from './tipos-banco';

type EstudioCasaBanco =
  Database['public']['Functions']['listar_casa']['Returns'][number];

type TrabalhoCasaBanco =
  Database['public']['Functions']['listar_trabalhos_casa']['Returns'][number];

const BUCKET_LOGOS = 'logos-estudios';

const URL_PUBLICA_CAPAS =
  'https://pub-b1d515cf725c469ea3d43e6cdc3546a7.r2.dev';

export interface EstudioCasa {
  id: string;
  nome: string;
  slug: string;
  cidade: string | null;
  descricao_publica: string | null;
  servicos: string[];
  cor_principal: string | null;
  logo_caminho: string | null;
  logo_url: string | null;
  criado_em: string;
  atualizado_em: string;
}

export interface TrabalhoCasa {
  album_id: string;
  album_nome: string;
  album_tipo: string | null;
  album_descricao: string | null;
  capa_caminho: string | null;
  capa_url: string | null;
  reproducao_publica: boolean;
  download_publico: boolean;
  selecionado_para_casa_em: string;
  estudio_id: string;
  estudio_nome: string;
  estudio_slug: string;
  estudio_cor_principal: string | null;
  projeto_nome: string;
}

@Injectable({
  providedIn: 'root',
})
export class DadosCasa {
  private readonly clienteSupabase =
    inject(ClienteSupabase);

  private readonly estudiosInternos =
    signal<EstudioCasa[]>([]);

  private readonly trabalhosInternos =
    signal<TrabalhoCasa[]>([]);

  private readonly carregandoInterno = signal(false);
  private readonly erroInterno = signal<string | null>(null);

  readonly estudios = this.estudiosInternos.asReadonly();
  readonly trabalhos = this.trabalhosInternos.asReadonly();
  readonly carregando = this.carregandoInterno.asReadonly();
  readonly erro = this.erroInterno.asReadonly();

  readonly totalEstudios = computed(
    () => this.estudiosInternos().length,
  );

  readonly totalTrabalhos = computed(
    () => this.trabalhosInternos().length,
  );

  async listar(): Promise<void> {
    if (this.carregandoInterno()) {
      return;
    }

    this.carregandoInterno.set(true);
    this.erroInterno.set(null);

    try {
      const [resultadoEstudios, resultadoTrabalhos] =
        await Promise.all([
          this.clienteSupabase.cliente.rpc(
            'listar_casa',
          ),
          this.clienteSupabase.cliente.rpc(
            'listar_trabalhos_casa',
          ),
        ]);

      if (resultadoEstudios.error) {
        throw resultadoEstudios.error;
      }

      if (resultadoTrabalhos.error) {
        throw resultadoTrabalhos.error;
      }

      this.estudiosInternos.set(
        (resultadoEstudios.data ?? []).map((estudio) =>
          this.normalizarEstudio(estudio),
        ),
      );

      this.trabalhosInternos.set(
        (resultadoTrabalhos.data ?? []).map((trabalho) =>
          this.normalizarTrabalho(trabalho),
        ),
      );
    } catch (erro) {
      this.estudiosInternos.set([]);
      this.trabalhosInternos.set([]);
      this.erroInterno.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.carregandoInterno.set(false);
    }
  }

  private normalizarEstudio(
    estudio: EstudioCasaBanco,
  ): EstudioCasa {
    const logoCaminho = estudio.logo_caminho || null;

    return {
      id: estudio.id,
      nome: estudio.nome,
      slug: estudio.slug,
      cidade: estudio.cidade || null,
      descricao_publica:
        estudio.descricao_publica || null,
      servicos: Array.isArray(estudio.servicos)
        ? estudio.servicos.filter(
            (servico) => servico.trim().length > 0,
          )
        : [],
      cor_principal: estudio.cor_principal || null,
      logo_caminho: logoCaminho,
      logo_url: logoCaminho
        ? this.obterLogoUrl(
            logoCaminho,
            estudio.atualizado_em,
          )
        : null,
      criado_em: estudio.criado_em,
      atualizado_em: estudio.atualizado_em,
    };
  }

  private normalizarTrabalho(
    trabalho: TrabalhoCasaBanco,
  ): TrabalhoCasa {
    const capaCaminho = trabalho.capa_caminho || null;

    return {
      album_id: trabalho.album_id,
      album_nome: trabalho.album_nome,
      album_tipo: trabalho.album_tipo || null,
      album_descricao:
        trabalho.album_descricao || null,
      capa_caminho: capaCaminho,
      capa_url: capaCaminho
        ? this.obterCapaUrl(capaCaminho)
        : null,
      reproducao_publica:
        trabalho.reproducao_publica,
      download_publico:
        trabalho.download_publico,
      selecionado_para_casa_em:
        trabalho.selecionado_para_casa_em,
      estudio_id: trabalho.estudio_id,
      estudio_nome: trabalho.estudio_nome,
      estudio_slug: trabalho.estudio_slug,
      estudio_cor_principal:
        trabalho.estudio_cor_principal || null,
      projeto_nome: trabalho.projeto_nome,
    };
  }

  private obterLogoUrl(
    caminho: string,
    atualizadoEm: string,
  ): string {
    const { data } = this.clienteSupabase.cliente.storage
      .from(BUCKET_LOGOS)
      .getPublicUrl(caminho);

    return `${data.publicUrl}?v=${encodeURIComponent(
      atualizadoEm,
    )}`;
  }

  private obterCapaUrl(caminho: string): string {
    const caminhoCodificado = caminho
      .split('/')
      .map((parte) => encodeURIComponent(parte))
      .join('/');

    return `${URL_PUBLICA_CAPAS}/${caminhoCodificado}`;
  }

  private obterMensagemErro(erro: unknown): string {
    if (
      typeof erro === 'object' &&
      erro !== null &&
      'message' in erro
    ) {
      return String(erro.message);
    }

    return 'Não foi possível carregar a Casa Flêiva.';
  }
}
