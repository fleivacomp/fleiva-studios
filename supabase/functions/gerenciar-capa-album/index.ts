import { createClient } from 'npm:@supabase/supabase-js@2';
import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from 'npm:@aws-sdk/client-s3@3';

interface RequisicaoAlbum {
  acao?: 'remover' | 'excluir_album';
  album_id?: string;
}

interface TipoImagem {
  mime: 'image/jpeg' | 'image/png' | 'image/webp';
  extensao: 'jpg' | 'png' | 'webp';
}

interface AlbumCapa {
  id: string;
  capa_caminho: string | null;
}

const LIMITE_CAPA_BYTES = 5_000_000;

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
    const authorization =
      requisicao.headers.get('Authorization');

    if (!authorization) {
      return responderJson(
        {
          erro: 'Usuário não autenticado.',
        },
        401,
      );
    }

    const supabaseUrl =
      obterVariavelObrigatoria('SUPABASE_URL');

    const supabaseAnonKey =
      obterVariavelObrigatoria('SUPABASE_ANON_KEY');

    const clienteSupabase = createClient(
      supabaseUrl,
      supabaseAnonKey,
      {
        global: {
          headers: {
            Authorization: authorization,
          },
        },
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false,
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

    const tipoConteudo =
      requisicao.headers.get('Content-Type') ?? '';

    if (
      tipoConteudo
        .toLowerCase()
        .startsWith('multipart/form-data')
    ) {
      return await enviarCapa(
        requisicao,
        clienteSupabase,
        user.id,
      );
    }

    return await executarAcao(
      requisicao,
      clienteSupabase,
      user.id,
    );
  } catch (erro) {
    console.error(
      'Erro ao gerenciar capa do álbum:',
      erro,
    );

    return responderJson(
      {
        erro: 'Não foi possível gerenciar a capa do álbum.',
      },
      500,
    );
  }
});

async function enviarCapa(
  requisicao: Request,
  clienteSupabase: ReturnType<typeof createClient>,
  estudioId: string,
): Promise<Response> {
  const formulario = await requisicao.formData();

  const albumId = normalizarTexto(
    formulario.get('album_id'),
  );

  const arquivo = formulario.get('arquivo');

  if (!albumId || !uuidValido(albumId)) {
    return responderJson(
      {
        erro: 'Informe um álbum válido.',
      },
      400,
    );
  }

  if (!(arquivo instanceof File)) {
    return responderJson(
      {
        erro: 'Selecione uma imagem.',
      },
      400,
    );
  }

  if (
    arquivo.size <= 0 ||
    arquivo.size > LIMITE_CAPA_BYTES
  ) {
    return responderJson(
      {
        erro: 'A imagem deve ter no máximo 5 MB.',
      },
      400,
    );
  }

  const album = await obterAlbum(
    clienteSupabase,
    albumId,
    estudioId,
  );

  if (!album) {
    return responderJson(
      {
        erro: 'Álbum não encontrado.',
      },
      404,
    );
  }

  const bytes = new Uint8Array(
    await arquivo.arrayBuffer(),
  );

  const tipoImagem = detectarTipoImagem(bytes);

  if (!tipoImagem) {
    return responderJson(
      {
        erro: 'Use uma imagem JPEG, PNG ou WebP válida.',
      },
      400,
    );
  }

  const clienteR2 = criarClienteR2();
  const bucket = obterVariavelObrigatoria(
    'R2_IMAGES_BUCKET_NAME',
  );

  const prefixo = criarPrefixoAlbum(
    estudioId,
    albumId,
  );

  const novoCaminho =
    `${prefixo}${crypto.randomUUID()}.${tipoImagem.extensao}`;

  await clienteR2.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: novoCaminho,
      Body: bytes,
      ContentType: tipoImagem.mime,
      ContentDisposition: 'inline',
      CacheControl:
        'public, max-age=31536000, immutable',
      Metadata: {
        estudio_id: estudioId,
        album_id: albumId,
      },
    }),
  );

  const { data, error } = await clienteSupabase
    .from('albuns')
    .update({
      capa_caminho: novoCaminho,
      atualizado_em: new Date().toISOString(),
    })
    .eq('id', albumId)
    .eq('estudio_id', estudioId)
    .select('*')
    .single();

  if (error) {
    await excluirObjetoSemFalhar(
      clienteR2,
      bucket,
      novoCaminho,
    );

    throw error;
  }

  const capaAnterior = album.capa_caminho;

  if (
    capaAnterior &&
    capaAnterior !== novoCaminho &&
    capaAnterior.startsWith(prefixo)
  ) {
    await excluirObjetoSemFalhar(
      clienteR2,
      bucket,
      capaAnterior,
    );
  }

  return responderJson({
    album: data,
  });
}

async function executarAcao(
  requisicao: Request,
  clienteSupabase: ReturnType<typeof createClient>,
  estudioId: string,
): Promise<Response> {
  let corpo: RequisicaoAlbum;

  try {
    corpo = (await requisicao.json()) as RequisicaoAlbum;
  } catch {
    return responderJson(
      {
        erro: 'A requisição é inválida.',
      },
      400,
    );
  }

  const albumId = corpo.album_id?.trim();

  if (!albumId || !uuidValido(albumId)) {
    return responderJson(
      {
        erro: 'Informe um álbum válido.',
      },
      400,
    );
  }

  const album = await obterAlbum(
    clienteSupabase,
    albumId,
    estudioId,
  );

  if (!album) {
    return responderJson(
      {
        erro: 'Álbum não encontrado.',
      },
      404,
    );
  }

  if (corpo.acao === 'remover') {
    return await removerCapa(
      clienteSupabase,
      album,
      estudioId,
    );
  }

  if (corpo.acao === 'excluir_album') {
    return await excluirAlbum(
      clienteSupabase,
      album,
      estudioId,
    );
  }

  return responderJson(
    {
      erro: 'Informe uma ação válida.',
    },
    400,
  );
}

async function removerCapa(
  clienteSupabase: ReturnType<typeof createClient>,
  album: AlbumCapa,
  estudioId: string,
): Promise<Response> {
  if (!album.capa_caminho) {
    return responderJson({
      album,
    });
  }

  const caminhoAnterior = album.capa_caminho;

  const { data, error } = await clienteSupabase
    .from('albuns')
    .update({
      capa_caminho: null,
      atualizado_em: new Date().toISOString(),
    })
    .eq('id', album.id)
    .eq('estudio_id', estudioId)
    .select('*')
    .single();

  if (error) {
    throw error;
  }

  await excluirCapaPropriaSemFalhar(
    caminhoAnterior,
    estudioId,
    album.id,
  );

  return responderJson({
    album: data,
  });
}

async function excluirAlbum(
  clienteSupabase: ReturnType<typeof createClient>,
  album: AlbumCapa,
  estudioId: string,
): Promise<Response> {
  const { data, error } = await clienteSupabase
    .from('albuns')
    .delete()
    .eq('id', album.id)
    .eq('estudio_id', estudioId)
    .select('id')
    .maybeSingle();

  if (error) {
    throw error;
  }

  if (!data) {
    return responderJson(
      {
        erro: 'Álbum não encontrado.',
      },
      404,
    );
  }

  if (album.capa_caminho) {
    await excluirCapaPropriaSemFalhar(
      album.capa_caminho,
      estudioId,
      album.id,
    );
  }

  return responderJson({
    excluido: true,
  });
}

async function obterAlbum(
  clienteSupabase: ReturnType<typeof createClient>,
  albumId: string,
  estudioId: string,
): Promise<AlbumCapa | null> {
  const { data, error } = await clienteSupabase
    .from('albuns')
    .select('id, capa_caminho')
    .eq('id', albumId)
    .eq('estudio_id', estudioId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data as AlbumCapa | null;
}

function criarClienteR2(): S3Client {
  const accountId = obterVariavelObrigatoria(
    'R2_ACCOUNT_ID',
  );

  const accessKeyId = obterVariavelObrigatoria(
    'R2_ACCESS_KEY_ID',
  );

  const secretAccessKey = obterVariavelObrigatoria(
    'R2_SECRET_ACCESS_KEY',
  );

  return new S3Client({
    region: 'auto',
    endpoint:
      `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
}

async function excluirCapaPropriaSemFalhar(
  caminho: string,
  estudioId: string,
  albumId: string,
): Promise<void> {
  const prefixo = criarPrefixoAlbum(
    estudioId,
    albumId,
  );

  if (!caminho.startsWith(prefixo)) {
    return;
  }

  const clienteR2 = criarClienteR2();
  const bucket = obterVariavelObrigatoria(
    'R2_IMAGES_BUCKET_NAME',
  );

  await excluirObjetoSemFalhar(
    clienteR2,
    bucket,
    caminho,
  );
}

async function excluirObjetoSemFalhar(
  clienteR2: S3Client,
  bucket: string,
  caminho: string,
): Promise<void> {
  try {
    await clienteR2.send(
      new DeleteObjectCommand({
        Bucket: bucket,
        Key: caminho,
      }),
    );
  } catch (erro) {
    console.error(
      `Não foi possível excluir o objeto ${caminho}.`,
      erro,
    );
  }
}

function detectarTipoImagem(
  bytes: Uint8Array,
): TipoImagem | null {
  if (
    bytes.length >= 3 &&
    bytes[0] === 0xff &&
    bytes[1] === 0xd8 &&
    bytes[2] === 0xff
  ) {
    return {
      mime: 'image/jpeg',
      extensao: 'jpg',
    };
  }

  if (
    bytes.length >= 8 &&
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47 &&
    bytes[4] === 0x0d &&
    bytes[5] === 0x0a &&
    bytes[6] === 0x1a &&
    bytes[7] === 0x0a
  ) {
    return {
      mime: 'image/png',
      extensao: 'png',
    };
  }

  if (
    bytes.length >= 12 &&
    bytes[0] === 0x52 &&
    bytes[1] === 0x49 &&
    bytes[2] === 0x46 &&
    bytes[3] === 0x46 &&
    bytes[8] === 0x57 &&
    bytes[9] === 0x45 &&
    bytes[10] === 0x42 &&
    bytes[11] === 0x50
  ) {
    return {
      mime: 'image/webp',
      extensao: 'webp',
    };
  }

  return null;
}

function criarPrefixoAlbum(
  estudioId: string,
  albumId: string,
): string {
  return `capas/${estudioId}/albuns/${albumId}/`;
}

function normalizarTexto(
  valor: FormDataEntryValue | null,
): string | null {
  if (typeof valor !== 'string') {
    return null;
  }

  const texto = valor.trim();

  return texto || null;
}

function uuidValido(valor: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    valor,
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
  return new Response(JSON.stringify(corpo), {
    status,
    headers: {
      ...cabecalhosCors,
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}
