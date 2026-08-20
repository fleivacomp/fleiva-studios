import { createClient } from 'npm:@supabase/supabase-js@2';
import {
  GetObjectCommand,
  S3Client,
} from 'npm:@aws-sdk/client-s3@3';
import { getSignedUrl } from 'npm:@aws-sdk/s3-request-presigner@3';

interface RequisicaoArquivo {
  token?: string;
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
    const corpo =
      (await requisicao.json()) as RequisicaoArquivo;

    const token = corpo.token?.trim();

    if (!token || !tokenUuidValido(token)) {
      return responderJson(
        {
          erro: 'Link inválido ou indisponível.',
        },
        404,
      );
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

    const { data: versao, error: erroVersao } =
      await clienteSupabase
        .from('versoes_faixa')
        .select(`
          id,
          versao,
          observacoes,
          nome_arquivo,
          chave_objeto,
          tamanho_bytes,
          tipo_mime,
          criado_em,
          faixa:faixas!versoes_faixa_faixa_estudio_fkey (
            titulo,
            projeto:projetos_artisticos!faixas_projeto_estudio_id_fkey (
              nome
            )
          )
        `)
        .eq('token_compartilhamento', token)
        .not('confirmado_em', 'is', null)
        .maybeSingle();

    if (erroVersao) {
      throw erroVersao;
    }

    if (!versao) {
      return responderJson(
        {
          erro: 'Link inválido ou indisponível.',
        },
        404,
      );
    }

    const faixa = obterPrimeiroRegistro(
      versao.faixa,
    );

    const projeto = faixa
      ? obterPrimeiroRegistro(faixa.projeto)
      : null;

    if (!faixa || !projeto) {
      return responderJson(
        {
          erro: 'Link inválido ou indisponível.',
        },
        404,
      );
    }

    const accountId =
      obterVariavelObrigatoria('R2_ACCOUNT_ID');

    const accessKeyId =
      obterVariavelObrigatoria(
        'R2_ACCESS_KEY_ID',
      );

    const secretAccessKey =
      obterVariavelObrigatoria(
        'R2_SECRET_ACCESS_KEY',
      );

    const bucket =
      obterVariavelObrigatoria('R2_BUCKET_NAME');

    const clienteR2 = new S3Client({
      region: 'auto',
      endpoint:
        `https://${accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });

    const duracaoSegundos = 300;

    const comando = new GetObjectCommand({
      Bucket: bucket,
      Key: versao.chave_objeto,
      ResponseContentType:
        versao.tipo_mime ??
        'application/octet-stream',
      ResponseContentDisposition:
        criarContentDisposition(
          versao.nome_arquivo,
        ),
    });

    const downloadUrl = await getSignedUrl(
      clienteR2,
      comando,
      {
        expiresIn: duracaoSegundos,
      },
    );

    return responderJson({
      arquivo: {
        faixa: faixa.titulo,
        projeto: projeto.nome,
        versao: versao.versao,
        observacoes: versao.observacoes,
        nome_arquivo: versao.nome_arquivo,
        tamanho_bytes: versao.tamanho_bytes,
        tipo_mime: versao.tipo_mime,
        criado_em: versao.criado_em,
      },
      download_url: downloadUrl,
      expira_em: new Date(
        Date.now() + duracaoSegundos * 1000,
      ).toISOString(),
    });
  } catch (erro) {
    console.error(
      'Erro ao abrir arquivo compartilhado:',
      erro,
    );

    return responderJson(
      {
        erro: 'Não foi possível abrir o arquivo.',
      },
      500,
    );
  }
});

function tokenUuidValido(token: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
    token,
  );
}

function obterPrimeiroRegistro<T>(
  valor: T | T[] | null,
): T | null {
  if (Array.isArray(valor)) {
    return valor[0] ?? null;
  }

  return valor ?? null;
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

function criarContentDisposition(
  nomeArquivo: string,
): string {
  const nomeAscii =
    nomeArquivo
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/[^\x20-\x7e]/g, '_')
      .replace(/["\\;\r\n]/g, '_')
      .trim() || 'arquivo';

  const nomeUtf8 = encodeURIComponent(
    nomeArquivo,
  ).replace(
    /[!'()*]/g,
    (caractere) =>
      `%${caractere
        .charCodeAt(0)
        .toString(16)
        .toUpperCase()}`,
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
      'Cache-Control': 'no-store',
    },
  });
}
