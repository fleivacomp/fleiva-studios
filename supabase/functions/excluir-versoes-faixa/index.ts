import { createClient } from 'npm:@supabase/supabase-js@2';
import {
  DeleteObjectCommand,
  S3Client,
} from 'npm:@aws-sdk/client-s3@3';

const cabecalhosCors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (requisicao) => {
  if (requisicao.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: cabecalhosCors,
    });
  }

  if (requisicao.method !== 'POST') {
    return responder(405, { erro: 'Método não permitido.' });
  }

  const autorizacao = requisicao.headers.get('Authorization');

  if (!autorizacao) {
    return responder(401, { erro: 'Usuário não autenticado.' });
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY');
  const r2AccountId = Deno.env.get('R2_ACCOUNT_ID');
  const r2AccessKeyId = Deno.env.get('R2_ACCESS_KEY_ID');
  const r2SecretAccessKey = Deno.env.get('R2_SECRET_ACCESS_KEY');
  const r2BucketName = Deno.env.get('R2_BUCKET_NAME');

  if (
    !supabaseUrl ||
    !supabaseAnonKey ||
    !r2AccountId ||
    !r2AccessKeyId ||
    !r2SecretAccessKey ||
    !r2BucketName
  ) {
    console.error('Configuração incompleta da Edge Function.');
    return responder(500, {
      erro: 'O armazenamento não está configurado.',
    });
  }

  let corpo: { faixa_id?: unknown };

  try {
    corpo = await requisicao.json();
  } catch {
    return responder(400, { erro: 'O corpo da requisição é inválido.' });
  }

  const faixaId =
    typeof corpo.faixa_id === 'string' ? corpo.faixa_id.trim() : '';

  if (!faixaId) {
    return responder(400, { erro: 'Informe a faixa.' });
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    global: { headers: { Authorization: autorizacao } },
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const {
    data: { user },
    error: erroUsuario,
  } = await supabase.auth.getUser();

  if (erroUsuario || !user) {
    return responder(401, { erro: 'Usuário não autenticado.' });
  }

  const { data: faixa, error: erroFaixa } = await supabase
    .from('faixas')
    .select('estudio_id')
    .eq('id', faixaId)
    .maybeSingle();

  if (erroFaixa || !faixa) {
    return responder(404, { erro: 'Faixa não encontrada.' });
  }

  const { data: versoes, error: erroVersoes } = await supabase
    .from('versoes_faixa')
    .select('chave_objeto')
    .eq('faixa_id', faixaId);

  if (erroVersoes) {
    return responder(400, { erro: erroVersoes.message });
  }

  const chaves = (versoes ?? [])
    .map((v) => v.chave_objeto)
    .filter((c): c is string => typeof c === 'string' && c.length > 0);

  if (chaves.length === 0) {
    return responder(200, { removidos: 0, falhas: 0 });
  }

  const clienteR2 = new S3Client({
    region: 'auto',
    endpoint: `https://${r2AccountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: r2AccessKeyId,
      secretAccessKey: r2SecretAccessKey,
    },
    requestChecksumCalculation: 'WHEN_REQUIRED',
    responseChecksumValidation: 'WHEN_REQUIRED',
  });

  const resultados = await Promise.allSettled(
    chaves.map((chave) =>
      clienteR2.send(
        new DeleteObjectCommand({
          Bucket: r2BucketName,
          Key: chave,
        }),
      ),
    ),
  );

  const falhas = resultados.filter((r) => r.status === 'rejected');

  if (falhas.length > 0) {
    console.error(
      'Falhas ao remover objetos do R2:',
      falhas.map((f) => (f as PromiseRejectedResult).reason),
    );
  }

  return responder(200, {
    removidos: resultados.length - falhas.length,
    falhas: falhas.length,
  });
});

function responder(
  status: number,
  corpo: Record<string, unknown>,
): Response {
  return new Response(JSON.stringify(corpo), {
    status,
    headers: {
      ...cabecalhosCors,
      'Content-Type': 'application/json',
    },
  });
}
