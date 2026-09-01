import {
  computed,
  inject,
  Injectable,
  signal,
} from '@angular/core';
import { ClienteSupabase } from './cliente-supabase';
import type {
  Database,
  Json,
} from './tipos-banco';

export type Estudio =
  Database['public']['Tables']['estudios']['Row'];

export const COR_PADRAO_ESTUDIO = '#9aa653' ;
export const COR_TEXTO_ESCURA = '#07130c';
export const COR_TEXTO_CLARA = '#ffffff';

export const TEMAS_PAGINA_PUBLICA = [
  'grafite',
  'creme',
  'ameixa',
] as const;

export type TemaPaginaPublica =
  (typeof TEMAS_PAGINA_PUBLICA)[number];

export const TEMA_PADRAO_PAGINA_PUBLICA:
  TemaPaginaPublica = 'grafite';

export const PROVEDORES_EMBED_PUBLICO = [
  'spotify',
  'youtube',
  'soundcloud',
] as const;

export type ProvedorEmbedPublico =
  (typeof PROVEDORES_EMBED_PUBLICO)[number];

export interface EmbedPublico {
  provedor: ProvedorEmbedPublico;
  url: string;
}

const BUCKET_LOGOS = 'logos-estudios';
const LIMITE_LOGO_BYTES = 5_000_000;

const TIPOS_LOGO_PERMITIDOS = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
]);
export interface ConfiguracaoPublicaEstudio {
  descricao_publica: string | null;
  cidade: string | null;
  whatsapp_publico: string | null;
  instagram: string | null;
  landing_publicada: boolean;
  participar_da_casa: boolean;
}
export function normalizarCorEstudio(
  valor: string | null | undefined,
): string | null {
  const cor = valor?.trim().toLowerCase();

  return cor && /^#[0-9a-f]{6}$/.test(cor)
    ? cor
    : null;
}

export function normalizarTemaPaginaPublica(
  valor: string | null | undefined,
): TemaPaginaPublica {
  if (
    valor === 'creme' ||
    valor === 'ameixa'
  ) {
    return valor;
  }

  return TEMA_PADRAO_PAGINA_PUBLICA;
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
export function normalizarSlugEstudio(
  valor: string,
): string {
  return valor
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLocaleLowerCase('pt-BR')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
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
  readonly possuiModulos = computed(
  () =>
    (this.estudioInterno()?.modulos ?? []).length > 0,
);
readonly embedsPublicos = computed(() =>
  obterEmbedsPublicos(
    this.estudioInterno()?.embeds_publicos,
  ),
);

possuiModulo(modulo: string): boolean {
  return (
    this.estudioInterno()?.modulos ?? []
  ).includes(modulo);
}

  readonly corPrincipal = computed(() =>
    normalizarCorEstudio(
      this.estudioInterno()?.cor_principal,
    ) ?? COR_PADRAO_ESTUDIO,
  );

  readonly corTextoPrincipal = computed(() =>
    obterCorContrasteEstudio(this.corPrincipal()),
  );

  readonly temaPaginaPublica = computed(() =>
    normalizarTemaPaginaPublica(
      this.estudioInterno()?.tema_pagina_publica,
    ),
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
async atualizarSlug(
  slug: string,
): Promise<Estudio> {
  const slugNormalizado =
    normalizarSlugEstudio(slug);

  if (
    !slugNormalizado ||
    slugNormalizado.length > 120
  ) {
    throw new Error(
      'Informe um endereço válido para a página.',
    );
  }

  if (slugNormalizado === 'estudio') {
    throw new Error(
      'Este endereço é reservado pelo Flêiva.',
    );
  }

  this.salvandoInterno.set(true);

  try {
    const estudioId =
      await this.obterEstudioId();

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('estudios')
        .update({
          slug: slugNormalizado,
        })
        .eq('id', estudioId)
        .select()
        .single();

    if (error) {
      if (error.code === '23505') {
        throw new Error(
          'Este endereço já está sendo usado por outro estúdio.',
        );
      }

      throw error;
    }

    this.estudioInterno.set(data);

    return data;
  } finally {
    this.salvandoInterno.set(false);
  }
}
async atualizarEmbedsPublicos(
  embeds: readonly EmbedPublico[],
): Promise<Estudio> {
  if (embeds.length > 4) {
    throw new Error(
      'Adicione no máximo quatro conteúdos externos.',
    );
  }

  const normalizados = embeds.map((embed) => {
    const url = normalizarUrlEmbedPublico(
      embed.provedor,
      embed.url,
    );

    if (!url) {
      throw new Error(
        `O endereço informado para ${formatarProvedorEmbed(
          embed.provedor,
        )} não é válido.`,
      );
    }

    return {
      provedor: embed.provedor,
      url,
    };
  });

  const identificadores = new Set(
    normalizados.map(
      (embed) =>
        `${embed.provedor}:${embed.url}`,
    ),
  );

  if (
    identificadores.size !== normalizados.length
  ) {
    throw new Error(
      'O mesmo conteúdo foi adicionado mais de uma vez.',
    );
  }

  const embedsJson: Json = normalizados.map(
    (embed): Json => ({
      provedor: embed.provedor,
      url: embed.url,
    }),
  );

  this.salvandoInterno.set(true);

  try {
    const estudioId =
      await this.obterEstudioId();

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('estudios')
        .update({
          embeds_publicos: embedsJson,
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

  async atualizarTemaPaginaPublica(
    tema: TemaPaginaPublica,
  ): Promise<Estudio> {
    this.salvandoInterno.set(true);

    try {
      const estudioId = await this.obterEstudioId();

      const { data, error } =
        await this.clienteSupabase.cliente
          .from('estudios')
          .update({
            tema_pagina_publica: tema,
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

  async atualizarConfiguracaoPublica(
  dados: ConfiguracaoPublicaEstudio,
): Promise<Estudio> {
  this.salvandoInterno.set(true);

  try {
    const estudioId = await this.obterEstudioId();

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('estudios')
        .update({
          descricao_publica:
            this.normalizarTextoOpcional(
              dados.descricao_publica,
            ),
          cidade: this.normalizarTextoOpcional(
            dados.cidade,
          ),
          whatsapp_publico:
            this.normalizarTextoOpcional(
              dados.whatsapp_publico,
            ),
          instagram: this.normalizarTextoOpcional(
            dados.instagram,
          ),
          landing_publicada:
            dados.landing_publicada,
          participar_da_casa:
            dados.landing_publicada
              ? dados.participar_da_casa
              : false,
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


  async enviarLogo(
  arquivo: File,
): Promise<Estudio> {
  this.validarLogo(arquivo);

  const caminhoAnterior =
    this.estudioInterno()?.logo_caminho ?? null;

  this.salvandoInterno.set(true);

  try {
    const estudioId =
      await this.obterEstudioId();

    const extensao =
      this.obterExtensaoLogo(arquivo.type);

    const caminhoNovo =
      `${estudioId}/logo-` +
      `${crypto.randomUUID()}.${extensao}`;

    const { error: erroUpload } =
      await this.clienteSupabase.cliente.storage
        .from(BUCKET_LOGOS)
        .upload(caminhoNovo, arquivo, {
          cacheControl: '31536000',
          contentType: arquivo.type,
          upsert: false,
        });

    if (erroUpload) {
      throw erroUpload;
    }

    const {
      data,
      error: erroAtualizacao,
    } = await this.clienteSupabase.cliente
      .from('estudios')
      .update({
        logo_caminho: caminhoNovo,
      })
      .eq('id', estudioId)
      .select()
      .single();

    if (erroAtualizacao) {
      const { error: erroLimpeza } =
        await this.clienteSupabase.cliente.storage
          .from(BUCKET_LOGOS)
          .remove([caminhoNovo]);

      if (erroLimpeza) {
        console.error(
          'Não foi possível remover o novo logo após a falha.',
          erroLimpeza,
        );
      }

      throw erroAtualizacao;
    }

    this.estudioInterno.set(data);

    if (
      caminhoAnterior &&
      caminhoAnterior !== caminhoNovo
    ) {
      const { error: erroRemocaoAnterior } =
        await this.clienteSupabase.cliente.storage
          .from(BUCKET_LOGOS)
          .remove([caminhoAnterior]);

      if (erroRemocaoAnterior) {
        console.warn(
          'O logo foi atualizado, mas o arquivo anterior não pôde ser removido.',
          erroRemocaoAnterior,
        );
      }
    }

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
private normalizarTextoOpcional(
  valor: string | null,
): string | null {
  const texto = valor?.trim();

  return texto || null;
}
  private validarLogo(arquivo: File): void {
    if (arquivo.size <= 0) {
      throw new Error(
        'Selecione um arquivo de imagem válido.',
      )
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
  private obterExtensaoLogo(
  tipoMime: string,
): string {
  if (tipoMime === 'image/png') {
    return 'png';
  }

  if (tipoMime === 'image/jpeg') {
    return 'jpg';
  }

  if (tipoMime === 'image/webp') {
    return 'webp';
  }

  throw new Error(
    'Use uma imagem PNG, JPEG ou WebP.',
  );
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

export function normalizarUrlEmbedPublico(
  provedor: ProvedorEmbedPublico,
  valor: string,
): string | null {
  let url: URL;

  try {
    url = new URL(valor.trim());
  } catch {
    return null;
  }

  if (url.protocol !== 'https:') {
    return null;
  }

  if (provedor === 'spotify') {
    return normalizarUrlSpotify(url);
  }

  if (provedor === 'youtube') {
    return normalizarUrlYoutube(url);
  }

  return normalizarUrlSoundCloud(url);
}

export function obterEmbedsPublicos(
  valor: Json | null | undefined,
): EmbedPublico[] {
  if (!Array.isArray(valor)) {
    return [];
  }

  const embeds: EmbedPublico[] = [];

  for (const item of valor.slice(0, 4)) {
    if (
      typeof item !== 'object' ||
      item === null ||
      Array.isArray(item)
    ) {
      continue;
    }

    const provedor = item['provedor'];
    const urlRecebida = item['url'];

    if (
      !provedorEmbedValido(provedor) ||
      typeof urlRecebida !== 'string'
    ) {
      continue;
    }

    const url = normalizarUrlEmbedPublico(
      provedor,
      urlRecebida,
    );

    if (url) {
      embeds.push({
        provedor,
        url,
      });
    }
  }

  return embeds;
}

function provedorEmbedValido(
  valor: unknown,
): valor is ProvedorEmbedPublico {
  return (
    valor === 'spotify' ||
    valor === 'youtube' ||
    valor === 'soundcloud'
  );
}

function normalizarUrlSpotify(
  url: URL,
): string | null {
  if (url.hostname !== 'open.spotify.com') {
    return null;
  }

  const partes = url.pathname
    .split('/')
    .filter(Boolean);

  if (partes[0]?.startsWith('intl-')) {
    partes.shift();
  }

  const [tipo, identificador] = partes;

  const tiposPermitidos = new Set([
    'album',
    'artist',
    'episode',
    'playlist',
    'show',
    'track',
  ]);

  if (
    !tipo ||
    !identificador ||
    !tiposPermitidos.has(tipo) ||
    !/^[a-zA-Z0-9]+$/.test(identificador)
  ) {
    return null;
  }

  return `https://open.spotify.com/${tipo}/${identificador}`;
}

function normalizarUrlYoutube(
  url: URL,
): string | null {
  const hostname = url.hostname
    .toLocaleLowerCase()
    .replace(/^www\./, '');

  let identificador = '';

  if (hostname === 'youtu.be') {
    identificador =
      url.pathname.split('/').filter(Boolean)[0] ?? '';
  } else if (
    hostname === 'youtube.com' ||
    hostname === 'music.youtube.com'
  ) {
    if (url.pathname === '/watch') {
      identificador =
        url.searchParams.get('v') ?? '';
    } else {
      const correspondencia = url.pathname.match(
        /^\/(?:embed|shorts)\/([^/]+)/,
      );

      identificador =
        correspondencia?.[1] ?? '';
    }
  }

  if (
    !/^[a-zA-Z0-9_-]{11}$/.test(
      identificador,
    )
  ) {
    return null;
  }

  return `https://www.youtube.com/watch?v=${identificador}`;
}

function normalizarUrlSoundCloud(
  url: URL,
): string | null {
  const hostname = url.hostname
    .toLocaleLowerCase()
    .replace(/^www\./, '');

  if (hostname !== 'soundcloud.com') {
    return null;
  }

  const partes = url.pathname
    .split('/')
    .filter(Boolean);

  if (partes.length < 2) {
    return null;
  }

  return `https://soundcloud.com/${partes
    .map((parte) => encodeURIComponent(
      decodeURIComponent(parte),
    ))
    .join('/')}`;
}

function formatarProvedorEmbed(
  provedor: ProvedorEmbedPublico,
): string {
  const nomes: Record<
    ProvedorEmbedPublico,
    string
  > = {
    spotify: 'Spotify',
    youtube: 'YouTube',
    soundcloud: 'SoundCloud',
  };

  return nomes[provedor];
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
