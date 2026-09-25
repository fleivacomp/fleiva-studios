import { createClient } from 'npm:@supabase/supabase-js@2';

import {
  DeleteObjectCommand,
  HeadObjectCommand,
  S3Client,
} from 'npm:@aws-sdk/client-s3@3';

import { FetchHttpHandler } from 'npm:@smithy/fetch-http-handler@5';

interface SolicitacaoConfirmacao {

  versao_id?: unknown;

}

interface VersaoReservada {

  id: string;

  chave_objeto: string;

  estudio_id: string;

}

interface Configuracao {

  supabaseUrl: string;

  supabaseAnonKey: string;

  supabaseServiceRoleKey: string;

  r2AccountId: string;

  r2AccessKeyId: string;

  r2SecretAccessKey: string;

  r2BucketName: string;

}

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

    return responder(405, {

      erro: 'Método não permitido.',

    });

  }

  const autorizacao =
    requisicao.headers.get('Authorization');

  if (!autorizacao) {

    return responder(401, {

      erro: 'Usuário não autenticado.',

    });

  }

  const configuracao = obterConfiguracao();

  if (!configuracao) {

    console.error(
      'Configuração incompleta da Edge Function.',
    );

    return responder(500, {

      erro: 'O armazenamento não está configurado.',

    });

  }

  let corpo: SolicitacaoConfirmacao;

  try {

    corpo = await requisicao.json();

  } catch {

    return responder(400, {

      erro: 'O corpo da requisição é inválido.',

    });

  }

  const versaoId =
    typeof corpo.versao_id === 'string'
      ? corpo.versao_id.trim()
      : '';

  if (!versaoId) {

    return responder(400, {

      erro: 'Informe a versão do arquivo.',

    });

  }

  const supabaseUsuario = createClient(
    configuracao.supabaseUrl,
    configuracao.supabaseAnonKey,
    {

      global: {

        headers: {

          Authorization: autorizacao,

        },

      },

      auth: {

        autoRefreshToken: false,

        persistSession: false,

      },

    },
  );

  const {
    data: { user },
    error: erroUsuario,
  } = await supabaseUsuario.auth.getUser();

  if (erroUsuario || !user) {

    return responder(401, {

      erro: 'Usuário não autenticado.',

    });

  }

  const {
    data: versao,
    error: erroVersao,
  } = await supabaseUsuario
    .from('versoes_faixa')
    .select('id, chave_objeto, estudio_id')
    .eq('id', versaoId)
    .single();

  if (erroVersao || !versao) {

    return responder(404, {

      erro: 'Reserva de upload não encontrada.',

    });

  }

  const prefixoSeguro = `${versao.estudio_id}/`;

  if (
    !versao.chave_objeto.startsWith(
      prefixoSeguro,
    )
  ) {

    console.error(
      'A reserva aponta para uma chave fora do estúdio.',
      {
        versaoId,
        estudioId: versao.estudio_id,
      },
    );

    await cancelarReserva(
      supabaseUsuario,
      versaoId,
    );

    return responder(400, {

      erro: 'A reserva de upload é inválida.',

    });

  }

  const clienteR2 =
    criarClienteR2(configuracao);

  let tamanhoReal: number;

  try {

    const resposta = await clienteR2.send(
      new HeadObjectCommand({

        Bucket: configuracao.r2BucketName,

        Key: versao.chave_objeto,

      }),
    );

    tamanhoReal =
      resposta.ContentLength ?? 0;

  } catch (erro) {

    const status = obterStatusHttp(erro);

    if (status === 404) {

      await cancelarReserva(
        supabaseUsuario,
        versaoId,
      );

      return responder(404, {

        erro:
          'O arquivo enviado não foi encontrado.',

      });

    }

    console.error(
      'Não foi possível consultar o arquivo no R2.',
      erro,
    );

    return responder(500, {

      erro:
        'Não foi possível verificar o arquivo enviado.',

    });

  }

  if (
    !Number.isSafeInteger(tamanhoReal) ||
    tamanhoReal <= 0
  ) {

    return removerArquivoInvalido({

      clienteR2,

      bucket: configuracao.r2BucketName,

      versao,

      supabase: supabaseUsuario,

      mensagem:
        'O arquivo enviado está vazio ou possui tamanho inválido.',

    });

  }

  const supabaseAdmin = createClient(
    configuracao.supabaseUrl,
    configuracao.supabaseServiceRoleKey,
    {

      auth: {

        autoRefreshToken: false,

        persistSession: false,

      },

    },
  );

  const {
    data: confirmacaoRecebida,
    error: erroConfirmacao,
  } = await supabaseAdmin.rpc(
    'confirmar_upload_faixa_interno',
    {

      p_estudio_id: versao.estudio_id,

      p_versao_id: versaoId,

      p_tamanho_bytes_real: tamanhoReal,

    },
  );

  if (erroConfirmacao) {

    const arquivoRemovido =
      await removerObjeto(
        clienteR2,
        configuracao.r2BucketName,
        versao.chave_objeto,
      );

    if (arquivoRemovido) {

      await cancelarReserva(
        supabaseUsuario,
        versaoId,
      );

    }

    return responder(
      arquivoRemovido ? 400 : 500,
      {

        erro: arquivoRemovido
          ? erroConfirmacao.message
          : 'O upload não pôde ser confirmado e o arquivo exige limpeza manual.',

      },
    );

  }

  const confirmacao =
    obterRegistroConfirmado(
      confirmacaoRecebida,
    );

  if (!confirmacao) {

    console.error(
      'A RPC não retornou o registro confirmado.',
      confirmacaoRecebida,
    );

    return responder(500, {

      erro:
        'O upload foi processado, mas a confirmação não pôde ser lida.',

    });

  }

  return responder(200, {

    versao: confirmacao,

  });

});

function obterConfiguracao():
  Configuracao | null {

  const supabaseUrl =
    Deno.env.get('SUPABASE_URL');

  const supabaseAnonKey =
    Deno.env.get('SUPABASE_ANON_KEY');

  const supabaseServiceRoleKey =
    Deno.env.get(
      'SUPABASE_SERVICE_ROLE_KEY',
    );

  const r2AccountId =
    Deno.env.get('R2_ACCOUNT_ID');

  const r2AccessKeyId =
    Deno.env.get('R2_ACCESS_KEY_ID');

  const r2SecretAccessKey =
    Deno.env.get(
      'R2_SECRET_ACCESS_KEY',
    );

  const r2BucketName =
    Deno.env.get('R2_BUCKET_NAME');

  if (
    !supabaseUrl ||
    !supabaseAnonKey ||
    !supabaseServiceRoleKey ||
    !r2AccountId ||
    !r2AccessKeyId ||
    !r2SecretAccessKey ||
    !r2BucketName
  ) {

    return null;

  }

  return {

    supabaseUrl,

    supabaseAnonKey,

    supabaseServiceRoleKey,

    r2AccountId,

    r2AccessKeyId,

    r2SecretAccessKey,

    r2BucketName,

  };

}

function criarClienteR2(
  configuracao: Configuracao,
): S3Client {

  return new S3Client({

    region: 'auto',

    endpoint:
      `https://${configuracao.r2AccountId}.r2.cloudflarestorage.com`,

    credentials: {

      accessKeyId:
        configuracao.r2AccessKeyId,

      secretAccessKey:
        configuracao.r2SecretAccessKey,

    },

    requestHandler:
      new FetchHttpHandler(),

    requestChecksumCalculation:
      'WHEN_REQUIRED',

    responseChecksumValidation:
      'WHEN_REQUIRED',

  });

}

async function removerArquivoInvalido(
  parametros: {
    clienteR2: S3Client;

    bucket: string;

    versao: VersaoReservada;

    supabase: ReturnType<
      typeof createClient
    >;

    mensagem: string;

  },
): Promise<Response> {

  const removido = await removerObjeto(
    parametros.clienteR2,
    parametros.bucket,
    parametros.versao.chave_objeto,
  );

  if (removido) {

    await cancelarReserva(
      parametros.supabase,
      parametros.versao.id,
    );

  }

  return responder(
    removido ? 400 : 500,
    {

      erro: removido
        ? parametros.mensagem
        : 'O arquivo inválido exige limpeza manual.',

    },
  );

}

async function removerObjeto(
  clienteR2: S3Client,
  bucket: string,
  chaveObjeto: string,
): Promise<boolean> {

  try {

    await clienteR2.send(
      new DeleteObjectCommand({

        Bucket: bucket,

        Key: chaveObjeto,

      }),
    );

    return true;

  } catch (erro) {

    console.error(
      'Não foi possível remover o objeto do R2.',
      erro,
    );

    return false;

  }

}

async function cancelarReserva(
  supabase: ReturnType<
    typeof createClient
  >,
  versaoId: string,
): Promise<void> {

  const { error } = await supabase.rpc(
    'cancelar_reserva_upload_faixa',
    {

      p_versao_id: versaoId,

    },
  );

  if (error) {

    console.error(
      'Não foi possível cancelar a reserva.',
      error,
    );

  }

}

function obterRegistroConfirmado(
  valor: unknown,
): Record<string, unknown> | null {

  const registro = Array.isArray(valor)
    ? valor[0]
    : valor;

  if (
    typeof registro !== 'object' ||
    registro === null
  ) {

    return null;

  }

  return registro as Record<
    string,
    unknown
  >;

}

function obterStatusHttp(
  erro: unknown,
): number | null {

  if (
    typeof erro !== 'object' ||
    erro === null ||
    !('$metadata' in erro)
  ) {

    return null;

  }

  const metadata = erro.$metadata;

  if (
    typeof metadata !== 'object' ||
    metadata === null ||
    !('httpStatusCode' in metadata)
  ) {

    return null;

  }

  return typeof metadata.httpStatusCode ===
    'number'
    ? metadata.httpStatusCode
    : null;

}

function responder(
  status: number,
  corpo: Record<string, unknown>,
): Response {

  return new Response(
    JSON.stringify(corpo),
    {

      status,

      headers: {

        ...cabecalhosCors,

        'Content-Type':
          'application/json',

      },

    },
  );

}
