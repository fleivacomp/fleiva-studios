import { createClient } from 'npm:@supabase/supabase-js@2';

interface RequisicaoPaginaEstudio {
  slug?: string;
}

const BUCKET_LOGOS = 'logos-estudios';

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
      .toLocaleLowerCase();

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

    const { data: estudio, error } =
      await clienteSupabase
        .from('estudios')
        .select(`
          id,
          nome,
          slug,
          logo_caminho,
          cor_principal,
          descricao_publica,
          cidade,
          whatsapp_publico,
          instagram
        `)
        .eq('slug', slug)
        .eq('landing_publicada', true)
        .maybeSingle();

    if (error) {
      throw error;
    }

    if (!estudio) {
      return responderIndisponivel();
    }

    let logoUrl: string | null = null;

    if (estudio.logo_caminho) {
      const { data } =
        clienteSupabase.storage
          .from(BUCKET_LOGOS)
          .getPublicUrl(estudio.logo_caminho);

      logoUrl = data.publicUrl;
    }

    return responderJson({
      estudio: {
        nome: estudio.nome,
        slug: estudio.slug,
        logo_url: logoUrl,
        cor_principal:
          estudio.cor_principal,
        descricao:
          estudio.descricao_publica,
        cidade: estudio.cidade,
        whatsapp:
          estudio.whatsapp_publico,
        instagram: estudio.instagram,
      },
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

function slugValido(slug: string): boolean {
  return (
    slug.length <= 120 &&
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
  );
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
