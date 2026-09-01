import { createClient } from 'npm:@supabase/supabase-js@2';

interface RequisicaoPaginaEstudio {
  slug?: string;
}

interface ProjetoAlbumConsultado {
  nome: string;
  capa_caminho: string | null;
}

interface ItemAlbumConsultado {
  id: string;
}

interface AlbumConsultado {
  id: string;
  nome: string;
  tipo_publico: string | null;
  descricao_publica: string | null;
  capa_caminho: string | null;
  reproducao_publica: boolean;
  download_publico: boolean;

  projeto:
    | ProjetoAlbumConsultado
    | ProjetoAlbumConsultado[]
    | null;

  faixas: ItemAlbumConsultado[] | null;
}

type TemaPaginaPublica =
  | 'grafite'
  | 'creme'
  | 'ameixa';

type ProvedorEmbedPublico =
  | 'spotify'
  | 'youtube'
  | 'soundcloud';

interface EmbedPublicoConsultado {
  provedor: ProvedorEmbedPublico;
  url: string;
}

const BUCKET_LOGOS = 'logos-estudios';

const URL_PUBLICA_CAPAS =
  'https://pub-b1d515cf725c469ea3d43e6cdc3546a7.r2.dev';

const cabecalhosCors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, apikey, content-type, x-client-info',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (requisicao) => {
  if (requisicao.method === 'OPTIONS') {
    return new Response('ok', {
      headers: cabecalhosCors,
    });
  }

  if (requisicao.method !== 'POST') {
    return responderJson(
      {
        erro: 'Método não permitido.',
      },
      405,
    );
  }

  try {
    const corpo =
      (await requisicao.json()) as RequisicaoPaginaEstudio;

    const slug = corpo.slug
      ?.trim()
      .toLocaleLowerCase('pt-BR');

    if (!slug || !slugValido(slug)) {
      return responderIndisponivel();
    }

    const supabaseUrl =
      obterVariavelObrigatoria('SUPABASE_URL');

    const serviceRoleKey =
      obterVariavelObrigatoria(
        'SUPABASE_SERVICE_ROLE_KEY',
      );

    const clienteSupabase = createClient(
      supabaseUrl,
      serviceRoleKey,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false,
        },
      },
    );

    const {
      data: estudio,
      error: erroEstudio,
    } = await clienteSupabase
      .from('estudios')
      .select(`
        id,
        nome,
        slug,
        logo_caminho,
        cor_principal,
        tema_pagina_publica,
        descricao_publica,
        cidade,
        whatsapp_publico,
        instagram,
        embeds_publicos
      `)
      .eq('slug', slug)
      .eq('landing_publicada', true)
      .maybeSingle();

    if (erroEstudio) {
      throw erroEstudio;
    }

    if (!estudio) {
      return responderIndisponivel();
    }

    const [
      resultadoServicos,
      resultadoAlbuns,
    ] = await Promise.all([
      clienteSupabase
        .from('servicos')
        .select(`
          id,
          nome,
          preco,
          tipo_cobranca,
          duracao_minutos
        `)
        .eq('estudio_id', estudio.id)
        .eq('publico_na_landing', true)
        .order('nome'),

      clienteSupabase
        .from('albuns')
        .select(`
          id,
          nome,
          tipo_publico,
          descricao_publica,
          capa_caminho,
          reproducao_publica,
          download_publico,

          projeto:projetos_artisticos!albuns_projeto_id_fkey (
            nome,
            capa_caminho
          ),

          faixas:album_faixas!album_faixas_album_id_fkey (
            id
          )
        `)
        .eq('estudio_id', estudio.id)
        .eq('publico_na_landing', true)
        .order('criado_em', {
          ascending: false,
        }),
    ]);

    if (resultadoServicos.error) {
      throw resultadoServicos.error;
    }

    if (resultadoAlbuns.error) {
      throw resultadoAlbuns.error;
    }

    const albunsConsultados =
      (resultadoAlbuns.data ?? []) as unknown as
        AlbumConsultado[];

    const albuns = albunsConsultados
      .map((album) => {
        const projeto = obterPrimeiroRegistro(
          album.projeto,
        );

        if (!projeto) {
          return null;
        }

        const caminhoCapa =
          album.capa_caminho ??
          projeto.capa_caminho;

        return {
          id: album.id,
          nome: album.nome,
          projeto: projeto.nome,
          tipo: album.tipo_publico,
          descricao:
            album.descricao_publica,

          capa_url: criarUrlPublica(
            URL_PUBLICA_CAPAS,
            caminhoCapa,
          ),

          quantidade_faixas:
            album.faixas?.length ?? 0,

          reproducao_publica:
            album.reproducao_publica,

          download_publico:
            album.download_publico,
        };
      })
      .filter(itemValido);

    let logoUrl: string | null = null;

    if (estudio.logo_caminho) {
      const { data } =
        clienteSupabase.storage
          .from(BUCKET_LOGOS)
          .getPublicUrl(
            estudio.logo_caminho,
          );

      logoUrl = data.publicUrl;
    }

    const servicos =
      (resultadoServicos.data ?? []).map(
        (servico) => ({
          id: servico.id,
          nome: servico.nome,
          preco: servico.preco,
          tipo_cobranca:
            servico.tipo_cobranca,
          duracao_minutos:
            servico.duracao_minutos,
        }),
      );

    const embeds = obterEmbedsPublicos(
      estudio.embeds_publicos,
    );

    return responderJson({
      estudio: {
        nome: estudio.nome,
        slug: estudio.slug,
        logo_url: logoUrl,

        cor_principal:
          estudio.cor_principal,

        tema_pagina_publica:
          normalizarTemaPaginaPublica(
            estudio.tema_pagina_publica,
          ),

        descricao:
          estudio.descricao_publica,

        cidade:
          estudio.cidade,

        whatsapp:
          estudio.whatsapp_publico,

        instagram:
          estudio.instagram,
      },

      servicos,
      albuns,
      embeds,
    });
  } catch (erro) {
    console.error(
      'Erro ao abrir página pública do estúdio:',
      erro,
    );

    return responderJson(
      {
        erro: 'Não foi possível abrir esta página.',
      },
      500,
    );
  }
});

function normalizarTemaPaginaPublica(
  valor: string | null,
): TemaPaginaPublica {
  if (
    valor === 'creme' ||
    valor === 'ameixa'
  ) {
    return valor;
  }

  return 'grafite';
}

function obterEmbedsPublicos(
  valor: unknown,
): EmbedPublicoConsultado[] {
  if (!Array.isArray(valor)) {
    return [];
  }

  const embeds: EmbedPublicoConsultado[] = [];

  for (const item of valor.slice(0, 4)) {
    if (
      typeof item !== 'object' ||
      item === null ||
      Array.isArray(item)
    ) {
      continue;
    }

    const registro = item as Record<
      string,
      unknown
    >;

    const provedor =
      registro['provedor'];

    const urlRecebida =
      registro['url'];

    if (
      !provedorEmbedValido(provedor) ||
      typeof urlRecebida !== 'string'
    ) {
      continue;
    }

    const url = normalizarUrlEmbed(
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

function normalizarUrlEmbed(
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
    return normalizarSpotify(url);
  }

  if (provedor === 'youtube') {
    return normalizarYoutube(url);
  }

  return normalizarSoundCloud(url);
}

function normalizarSpotify(
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

  return (
    `https://open.spotify.com/` +
    `${tipo}/${identificador}`
  );
}

function normalizarYoutube(
  url: URL,
): string | null {
  const hostname = url.hostname
    .toLocaleLowerCase()
    .replace(/^www\./, '');

  let identificador = '';

  if (hostname === 'youtu.be') {
    identificador =
      url.pathname
        .split('/')
        .filter(Boolean)[0] ?? '';
  } else if (
    hostname === 'youtube.com' ||
    hostname === 'music.youtube.com'
  ) {
    if (url.pathname === '/watch') {
      identificador =
        url.searchParams.get('v') ?? '';
    } else {
      identificador =
        url.pathname.match(
          /^\/(?:embed|shorts)\/([^/]+)/,
        )?.[1] ?? '';
    }
  }

  if (
    !/^[a-zA-Z0-9_-]{11}$/.test(
      identificador,
    )
  ) {
    return null;
  }

  return (
    'https://www.youtube.com/watch' +
    `?v=${identificador}`
  );
}

function normalizarSoundCloud(
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

  try {
    const caminho = partes
      .map((parte) =>
        encodeURIComponent(
          decodeURIComponent(parte),
        ),
      )
      .join('/');

    return `https://soundcloud.com/${caminho}`;
  } catch {
    return null;
  }
}

function slugValido(
  slug: string,
): boolean {
  return (
    slug.length <= 120 &&
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(
      slug,
    )
  );
}

function criarUrlPublica(
  base: string,
  caminho: string | null,
): string | null {
  if (!caminho) {
    return null;
  }

  const caminhoSeguro = caminho
    .split('/')
    .map((parte) =>
      encodeURIComponent(parte),
    )
    .join('/');

  return `${
    base.replace(/\/$/, '')
  }/${caminhoSeguro}`;
}

function obterPrimeiroRegistro<T>(
  valor: T | T[] | null,
): T | null {
  if (Array.isArray(valor)) {
    return valor[0] ?? null;
  }

  return valor ?? null;
}

function itemValido<T>(
  item: T | null,
): item is T {
  return item !== null;
}

function responderIndisponivel(): Response {
  return responderJson(
    {
      erro: 'Página não encontrada ou indisponível.',
    },
    404,
  );
}

function obterVariavelObrigatoria(
  nome: string,
): string {
  const valor = Deno.env.get(nome);

  if (!valor) {
    throw new Error(
      `Variável ${nome} não configurada.`,
    );
  }

  return valor;
}

function responderJson(
  corpo: unknown,
  status = 200,
): Response {
  return new Response(
    JSON.stringify(corpo),
    {
      status,
      headers: {
        ...cabecalhosCors,

        'Content-Type':
          'application/json; charset=utf-8',

        'Cache-Control':
          status === 200
            ? 'public, max-age=60, s-maxage=300'
            : 'no-store',
      },
    },
  );
}
