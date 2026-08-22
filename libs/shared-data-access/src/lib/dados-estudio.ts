import {
  computed,
  inject,
  Injectable,
  signal,
} from '@angular/core';
import { ClienteSupabase } from './cliente-supabase';
import type { Database } from './tipos-banco';

export type Estudio =
  Database['public']['Tables']['estudios']['Row'];

export const COR_PADRAO_ESTUDIO = '#9aa653' ;
export const COR_TEXTO_ESCURA = '#07130c';
export const COR_TEXTO_CLARA = '#ffffff';

const BUCKET_LOGOS = 'logos-estudios';
const LIMITE_LOGO_BYTES = 5_000_000;

const TIPOS_LOGO_PERMITIDOS = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
]);

export function normalizarCorEstudio(
  valor: string | null | undefined,
): string | null {
  const cor = valor?.trim().toLowerCase();

  return cor && /^#[0-9a-f]{6}$/.test(cor)
    ? cor
    : null;
}

export function obterCorContrasteEstudio(
  valor: string,
): string {
  const cor =
    normalizarCorEstudio(valor) ?? COR_PADRAO_ESTUDIO;

  const luminanciaFundo = calcularLuminancia(cor);
  const luminanciaEscura = calcularLuminancia(
    COR_TEXTO_ESCURA,
  );
  const luminanciaClara = calcularLuminancia(
    COR_TEXTO_CLARA,
  );

  const contrasteEscuro = calcularContraste(
    luminanciaFundo,
    luminanciaEscura,
  );
  const contrasteClaro = calcularContraste(
    luminanciaFundo,
    luminanciaClara,
  );

  return contrasteEscuro >= contrasteClaro
    ? COR_TEXTO_ESCURA
    : COR_TEXTO_CLARA;
}

@Injectable({
  providedIn: 'root',
})
export class DadosEstudio {
  private readonly clienteSupabase =
    inject(ClienteSupabase);

  private readonly estudioInterno =
    signal<Estudio | null>(null);

  private readonly carregandoInterno = signal(false);
  private readonly salvandoInterno = signal(false);
  private readonly erroInterno =
    signal<string | null>(null);

  readonly estudio = this.estudioInterno.asReadonly();

  readonly carregando =
    this.carregandoInterno.asReadonly();

  readonly salvando =
    this.salvandoInterno.asReadonly();

  readonly erro = this.erroInterno.asReadonly();

  readonly corPrincipal = computed(() =>
    normalizarCorEstudio(
      this.estudioInterno()?.cor_principal,
    ) ?? COR_PADRAO_ESTUDIO,
  );

  readonly corTextoPrincipal = computed(() =>
    obterCorContrasteEstudio(this.corPrincipal()),
  );

  readonly logoUrl = computed(() => {
    const estudio = this.estudioInterno();

    if (!estudio?.logo_caminho) {
      return null;
    }

    const { data } =
      this.clienteSupabase.cliente.storage
        .from(BUCKET_LOGOS)
        .getPublicUrl(estudio.logo_caminho);

    return `${data.publicUrl}?v=${encodeURIComponent(
      estudio.atualizado_em,
    )}`;
  });

  async carregar(): Promise<void> {
    this.carregandoInterno.set(true);
    this.erroInterno.set(null);
    this.estudioInterno.set(null);

    try {
      const estudioId = await this.obterEstudioId();

      const { data, error } =
        await this.clienteSupabase.cliente
          .from('estudios')
          .select('*')
          .eq('id', estudioId)
          .single();

      if (error) {
        throw error;
      }

      this.estudioInterno.set(data);
    } catch (erro) {
      this.erroInterno.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.carregandoInterno.set(false);
    }
  }

  async atualizarNome(nome: string): Promise<Estudio> {
    const nomeNormalizado = nome.trim();

    if (!nomeNormalizado) {
      throw new Error('Informe o nome do estúdio.');
    }

    this.salvandoInterno.set(true);

    try {
      const estudioId = await this.obterEstudioId();

      const { data, error } =
        await this.clienteSupabase.cliente
          .from('estudios')
          .update({
            nome: nomeNormalizado,
          })
          .eq('id', estudioId)
          .select()
          .single();

      if (error) {
        throw error;
      }

      this.estudioInterno.set(data);

      return data;
    } finally {
      this.salvandoInterno.set(false);
    }
  }

  async atualizarCorPrincipal(
    cor: string | null,
  ): Promise<Estudio> {
    const corNormalizada = cor === null
      ? null
      : normalizarCorEstudio(cor);

    if (cor !== null && corNormalizada === null) {
      throw new Error(
        'Selecione uma cor válida no formato hexadecimal.',
      );
    }

    this.salvandoInterno.set(true);

    try {
      const estudioId = await this.obterEstudioId();

      const { data, error } =
        await this.clienteSupabase.cliente
          .from('estudios')
          .update({
            cor_principal: corNormalizada,
          })
          .eq('id', estudioId)
          .select()
          .single();

      if (error) {
        throw error;
      }

      this.estudioInterno.set(data);

      return data;
    } finally {
      this.salvandoInterno.set(false);
    }
  }

  async enviarLogo(arquivo: File): Promise<Estudio> {
    this.validarLogo(arquivo);
    this.salvandoInterno.set(true);

    try {
      const estudioId = await this.obterEstudioId();
      const caminho = `${estudioId}/logo`;

      const { error: erroUpload } =
        await this.clienteSupabase.cliente.storage
          .from(BUCKET_LOGOS)
          .upload(caminho, arquivo, {
            cacheControl: '3600',
            contentType: arquivo.type,
            upsert: true,
          });

      if (erroUpload) {
        throw erroUpload;
      }

      const { data, error: erroAtualizacao } =
        await this.clienteSupabase.cliente
          .from('estudios')
          .update({
            logo_caminho: caminho,
          })
          .eq('id', estudioId)
          .select()
          .single();

      if (erroAtualizacao) {
        throw erroAtualizacao;
      }

      this.estudioInterno.set(data);

      return data;
    } finally {
      this.salvandoInterno.set(false);
    }
  }

  async removerLogo(): Promise<Estudio> {
    const estudioAtual = this.estudioInterno();

    if (!estudioAtual) {
      throw new Error(
        'O perfil do estúdio ainda não foi carregado.',
      );
    }

    if (!estudioAtual.logo_caminho) {
      return estudioAtual;
    }

    this.salvandoInterno.set(true);

    try {
      const estudioId = await this.obterEstudioId();

      const { error: erroRemocao } =
        await this.clienteSupabase.cliente.storage
          .from(BUCKET_LOGOS)
          .remove([estudioAtual.logo_caminho]);

      if (erroRemocao) {
        throw erroRemocao;
      }

      const { data, error: erroAtualizacao } =
        await this.clienteSupabase.cliente
          .from('estudios')
          .update({
            logo_caminho: null,
          })
          .eq('id', estudioId)
          .select()
          .single();

      if (erroAtualizacao) {
        throw erroAtualizacao;
      }

      this.estudioInterno.set(data);

      return data;
    } finally {
      this.salvandoInterno.set(false);
    }
  }

  private validarLogo(arquivo: File): void {
    if (arquivo.size <= 0) {
      throw new Error(
        'Selecione um arquivo de imagem válido.',
      );
    }

    if (arquivo.size > LIMITE_LOGO_BYTES) {
      throw new Error(
        'O logo deve ter no máximo 5 MB.',
      );
    }

    if (!TIPOS_LOGO_PERMITIDOS.has(arquivo.type)) {
      throw new Error(
        'Use uma imagem PNG, JPEG ou WebP.',
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

  private obterMensagemErro(erro: unknown): string {
    if (
      typeof erro === 'object' &&
      erro !== null &&
      'message' in erro
    ) {
      return String(erro.message);
    }

    return 'Não foi possível carregar o perfil do estúdio.';
  }
}

function calcularLuminancia(cor: string): number {
  const vermelho = converterCanalLinear(
    Number.parseInt(cor.slice(1, 3), 16),
  );
  const verde = converterCanalLinear(
    Number.parseInt(cor.slice(3, 5), 16),
  );
  const azul = converterCanalLinear(
    Number.parseInt(cor.slice(5, 7), 16),
  );

  return (
    vermelho * 0.2126 +
    verde * 0.7152 +
    azul * 0.0722
  );
}

function converterCanalLinear(canal: number): number {
  const normalizado = canal / 255;

  return normalizado <= 0.04045
    ? normalizado / 12.92
    : Math.pow(
        (normalizado + 0.055) / 1.055,
        2.4,
      );
}

function calcularContraste(
  primeiraLuminancia: number,
  segundaLuminancia: number,
): number {
  const clara = Math.max(
    primeiraLuminancia,
    segundaLuminancia,
  );
  const escura = Math.min(
    primeiraLuminancia,
    segundaLuminancia,
  );

  return (clara + 0.05) / (escura + 0.05);
}
