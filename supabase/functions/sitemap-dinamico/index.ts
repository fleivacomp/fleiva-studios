import { createClient } from 'npm:@supabase/supabase-js@2';

const cabecalhosCors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, apikey, content-type, x-client-info',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
};

Deno.serve(async (requisicao) => {
  if (requisicao.method === 'OPTIONS') {
    return new Response('ok', {
      headers: cabecalhosCors,
    });
  }

  if (requisicao.method !== 'GET') {
    return responderJson(
      {
        erro: 'Método não permitido.',
      },
      405,
    );
  }

  try {
    const url = new URL(requisicao.url);
    const host = requisicao.headers.get('host') ?? '';
    const tipoSitemap = url.searchParams.get('tipo');

    const supabaseUrl =
      obterVariavelObrigatoria('SUPABASE_URL');

    // A role de serviço garante a leitura completa das URLs públicas para o robô do Google
    const supabaseServiceKey =
      obterVariavelObrigatoria(
        'SUPABASE_SERVICE_ROLE_KEY',
      );

    const clienteSupabase = createClient(
      supabaseUrl,
      supabaseServiceKey,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false,
        },
      },
    );

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    if (
      host.includes('card.fleiva') ||
      tipoSitemap === 'card'
    ) {
      const { data, error } = await clienteSupabase
        .from('estudios')
        .select('slug, atualizado_em')
        .eq('landing_publicada', true);

      if (error) {
        throw error;
      }

      for (const estudio of data || []) {
        const dataIso = extrairData(estudio.atualizado_em);
        xml += `\n  <url>\n    <loc>https://card.fleiva.com.br/${estudio.slug}</loc>\n    <lastmod>${dataIso}</lastmod>\n  </url>`;
      }
    } else if (
      host.includes('play.fleiva') ||
      tipoSitemap === 'play'
    ) {
      const { data, error } = await clienteSupabase
        .from('publicacoes_album')
        .select('album_id, atualizado_em, estudios!inner(slug)')
        .eq('publico', true);

      if (error) {
        throw error;
      }

      for (const publicacao of data || []) {
        const dataIso = extrairData(publicacao.atualizado_em);
        const dadosEstudio = publicacao.estudios as unknown as { slug: string };

        if (dadosEstudio?.slug) {
          xml += `\n  <url>\n    <loc>https://play.fleiva.com.br/${dadosEstudio.slug}/trabalho/${publicacao.album_id}</loc>\n    <lastmod>${dataIso}</lastmod>\n  </url>`;
        }
      }
    }

    xml += `\n</urlset>`;

    return responderXml(xml);
  } catch (erro) {
    console.error(
      'Erro ao gerar o sitemap:',
      erro,
    );

    return responderJson(
      {
        erro: 'Não foi possível gerar o sitemap.',
      },
      500,
    );
  }
});

function extrairData(dataIso: string | null): string {
  if (!dataIso) {
    return new Date().toISOString().split('T')[0];
  }
  return dataIso.split('T')[0];
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
  return new Response(JSON.stringify(corpo), {
    status,
    headers: {
      ...cabecalhosCors,
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}

function responderXml(
  xml: string,
  status = 200,
): Response {
  return new Response(xml, {
    status,
    headers: {
      ...cabecalhosCors,
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
