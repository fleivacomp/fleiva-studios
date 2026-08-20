import { createClient } from 'npm:@supabase/supabase-js@2';
import {
  GetObjectCommand,
  S3Client,
} from 'npm:@aws-sdk/client-s3@3';
import { getSignedUrl } from 'npm:@aws-sdk/s3-request-presigner@3';

interface RequisicaoDownload {
  versao_id?: string;
}

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
    const authorization = requisicao.headers.get('Authorization');

    if (!authorization) {
      return responderJson(
        {
          erro: 'Usuário não autenticado.',
        },
        401,
      );
    }

    const supabaseUrl = obterVariavelObrigatoria('SUPABASE_URL');
    const supabaseAnonKey = obterVariavelObrigatoria(
      'SUPABASE_ANON_KEY',
    );

    const clienteSupabase = createClient(
      supabaseUrl,
      supabaseAnonKey,
      {
        global: {
          headers: {
            Authorization: authorization,
          },
        },
      },
    );

    const {
      data: { user },
      error: erroUsuario,
    } = await clienteSupabase.auth.getUser();

    if (erroUsuario || !user) {
      return responderJson(
        {
          erro: 'Usuário não autenticado.',
        },
        401,
      );
    }

    const corpo = (await requisicao.json()) as RequisicaoDownload;
    const versaoId = corpo.versao_id?.trim();

    if (!versaoId) {
      return responderJson(
        {
          erro: 'Informe a versão da faixa.',
        },
        400,
      );
    }

    const { data: versao, error: erroVersao } =
      await clienteSupabase
        .from('versoes_faixa')
        .select(`
          id,
          chave_objeto,
          nome_arquivo,
          tipo_mime,
          confirmado_em
        `)
        .eq('id', versaoId)
        .eq('estudio_id', user.id)
        .not('confirmado_em', 'is', null)
        .maybeSingle();

    if (erroVersao) {
      throw erroVersao;
    }

    if (!versao) {
      return responderJson(
        {
          erro: 'Versão não encontrada.',
        },
        404,
      );
    }

    const accountId = obterVariavelObrigatoria('R2_ACCOUNT_ID');
    const accessKeyId = obterVariavelObrigatoria(
      'R2_ACCESS_KEY_ID',
    );
    const secretAccessKey = obterVariavelObrigatoria(
      'R2_SECRET_ACCESS_KEY',
    );
    const bucket = obterVariavelObrigatoria('R2_BUCKET_NAME');

    const clienteR2 = new S3Client({
      region: 'auto',
      endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });

    const duracaoSegundos = 300;
    const nomeArquivo = versao.nome_arquivo;

    const comando = new GetObjectCommand({
      Bucket: bucket,
      Key: versao.chave_objeto,
      ResponseContentType:
        versao.tipo_mime ?? 'application/octet-stream',
      ResponseContentDisposition:
        criarContentDisposition(nomeArquivo),
    });

    const url = await getSignedUrl(clienteR2, comando, {
      expiresIn: duracaoSegundos,
    });

    return responderJson({
      url,
      nome_arquivo: nomeArquivo,
      expira_em: new Date(
        Date.now() + duracaoSegundos * 1000,
      ).toISOString(),
    });
  } catch (erro) {
    console.error('Erro ao gerar download:', erro);

    return responderJson(
      {
        erro: 'Não foi possível preparar o download.',
      },
      500,
    );
  }
});

function obterVariavelObrigatoria(nome: string): string {
  const valor = Deno.env.get(nome);

  if (!valor) {
    throw new Error(`Variável ${nome} não configurada.`);
  }

  return valor;
}

function criarContentDisposition(nomeArquivo: string): string {
  const nomeAscii =
    nomeArquivo
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/[^\x20-\x7e]/g, '_')
      .replace(/["\\;\r\n]/g, '_')
      .trim() || 'arquivo';

  const nomeUtf8 = encodeURIComponent(nomeArquivo).replace(
    /[!'()*]/g,
    (caractere) =>
      `%${caractere.charCodeAt(0).toString(16).toUpperCase()}`,
  );

  return `attachment; filename="${nomeAscii}"; filename*=UTF-8''${nomeUtf8}`;
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
    },
  });
}
