import { createClient } from 'npm:@supabase/supabase-js@2';
import {
  PutObjectCommand,
  S3Client,
} from 'npm:@aws-sdk/client-s3@3';
import { getSignedUrl } from 'npm:@aws-sdk/s3-request-presigner@3';

interface SolicitacaoUpload {
  experiencia_id?: unknown;
  nome?: unknown;
  nome_arquivo?: unknown;
  tamanho_bytes?: unknown;
  tipo_mime?: unknown;
}

interface ReservaUpload {
  id: string;
  chave_objeto: string;
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

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const supabaseAnonKey =
    Deno.env.get('SUPABASE_ANON_KEY');
  const r2AccountId = Deno.env.get('R2_ACCOUNT_ID');
  const r2AccessKeyId =
    Deno.env.get('R2_ACCESS_KEY_ID');
  const r2SecretAccessKey = Deno.env.get(
    'R2_SECRET_ACCESS_KEY',
  );
  const r2BucketName = Deno.env.get('R2_BUCKET_NAME');

  if (
    !supabaseUrl ||
    !supabaseAnonKey ||
    !r2AccountId ||
    !r2AccessKeyId ||
    !r2SecretAccessKey ||
    !r2BucketName
  ) {
    console.error(
      'Configuração incompleta da Edge Function.',
    );

    return responder(500, {
      erro: 'O armazenamento não está configurado.',
    });
  }

  let corpo: SolicitacaoUpload;

  try {
    corpo = await requisicao.json();
  } catch {
    return responder(400, {
      erro: 'O corpo da requisição é inválido.',
    });
  }

  const experienciaId = obterTexto(corpo.experiencia_id);
  const nome = obterTexto(corpo.nome);
  const nomeArquivo = obterTexto(corpo.nome_arquivo);
  const tipoMime =
    obterTextoOpcional(corpo.tipo_mime) ??
    'application/octet-stream';

  const tamanhoBytes =
    typeof corpo.tamanho_bytes === 'number'
      ? corpo.tamanho_bytes
      : Number(corpo.tamanho_bytes);

  if (!experienciaId) {
    return responder(400, {
      erro: 'Informe a experiência.',
    });
  }

  if (!nome) {
    return responder(400, {
      erro: 'Informe o nome do recurso.',
    });
  }

  if (!nomeArquivo) {
    return responder(400, {
      erro: 'O nome do arquivo é inválido.',
    });
  }

  if (
    !Number.isSafeInteger(tamanhoBytes) ||
    tamanhoBytes <= 0
  ) {
    return responder(400, {
      erro: 'O tamanho do arquivo é inválido.',
    });
  }

  const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey,
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
  } = await supabase.auth.getUser();

  if (erroUsuario || !user) {
    return responder(401, {
      erro: 'Usuário não autenticado.',
    });
  }

  const extensao = obterExtensaoSegura(nomeArquivo);
  const chaveObjeto =
    `${user.id}/experiencias/${experienciaId}/` +
    `${crypto.randomUUID()}${extensao}`;

  const { data: reservaRecebida, error: erroReserva } =
    await supabase.rpc(
      'reservar_upload_recurso_experiencia',
      {
        p_experiencia_id: experienciaId,
        p_nome: nome,
        p_nome_arquivo: nomeArquivo,
        p_chave_objeto: chaveObjeto,
        p_tamanho_bytes: tamanhoBytes,
        p_tipo_mime: tipoMime,
      },
    );

  if (erroReserva) {
    return responder(400, {
      erro: erroReserva.message,
    });
  }

  const reserva = obterReserva(reservaRecebida);

  if (!reserva) {
    console.error(
      'A RPC não retornou a reserva criada.',
      reservaRecebida,
    );

    return responder(500, {
      erro: 'Não foi possível reservar o armazenamento.',
    });
  }

  try {
    const clienteR2 = new S3Client({
      region: 'auto',
      endpoint:
        `https://${r2AccountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: r2AccessKeyId,
        secretAccessKey: r2SecretAccessKey,
      },
      requestChecksumCalculation: 'WHEN_REQUIRED',
      responseChecksumValidation: 'WHEN_REQUIRED',
    });

    const comando = new PutObjectCommand({
      Bucket: r2BucketName,
      Key: reserva.chave_objeto,
      ContentType: tipoMime,
      ContentLength: tamanhoBytes,
    });

    const validadeSegundos = 15 * 60;

    const uploadUrl = await getSignedUrl(
      clienteR2,
      comando,
      {
        expiresIn: validadeSegundos,
      },
    );

    return responder(201, {
      recurso_id: reserva.id,
      upload_url: uploadUrl,
      metodo: 'PUT',
      cabecalhos: {
        'Content-Type': tipoMime,
      },
      expira_em: new Date(
        Date.now() + validadeSegundos * 1000,
      ).toISOString(),
    });
  } catch (erro) {
    console.error(
      'Não foi possível gerar a URL do R2.',
      erro,
    );

    const { error: erroCancelamento } =
      await supabase.rpc(
        'cancelar_reserva_upload_recurso_experiencia',
        {
          p_recurso_id: reserva.id,
        },
      );

    if (erroCancelamento) {
      console.error(
        'Não foi possível cancelar a reserva.',
        erroCancelamento,
      );
    }

    return responder(500, {
      erro: 'Não foi possível iniciar o upload.',
    });
  }
});

function obterTexto(valor: unknown): string {
  return typeof valor === 'string'
    ? valor.trim()
    : '';
}

function obterTextoOpcional(
  valor: unknown,
): string | null {
  const texto = obterTexto(valor);

  return texto || null;
}

function obterExtensaoSegura(
  nomeArquivo: string,
): string {
  const correspondencia = nomeArquivo.match(
    /\.([a-zA-Z0-9]{1,10})$/,
  );

  if (!correspondencia) {
    return '';
  }

  return `.${correspondencia[1].toLowerCase()}`;
}

function obterReserva(
  valor: unknown,
): ReservaUpload | null {
  const registro = Array.isArray(valor)
    ? valor[0]
    : valor;

  if (
    typeof registro !== 'object' ||
    registro === null ||
    !('id' in registro) ||
    !('chave_objeto' in registro)
  ) {
    return null;
  }

  if (
    typeof registro.id !== 'string' ||
    typeof registro.chave_objeto !== 'string'
  ) {
    return null;
  }

  return {
    id: registro.id,
    chave_objeto: registro.chave_objeto,
  };
}

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
