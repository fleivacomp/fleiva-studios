import { createClient } from 'npm:@supabase/supabase-js@2';
import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from 'npm:@aws-sdk/client-s3@3';

interface RequisicaoRemoverCapa {
  acao?: string;
  projeto_id?: string;
}

interface TipoImagem {
  mime: 'image/jpeg' | 'image/png' | 'image/webp';
  extensao: 'jpg' | 'png' | 'webp';
}

interface ProjetoCapa {
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
      obterVariavelObrigatoria(
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

    let corpo: RequisicaoRemoverCapa;

    try {
      corpo =
        (await requisicao.json()) as RequisicaoRemoverCapa;
    } catch {
      return responderJson(
        {
          erro: 'A requisição é inválida.',
        },
        400,
      );
    }

    if (corpo.acao === 'excluir_projeto') {
      return await excluirProjeto(
        corpo,
        clienteSupabase,
        user.id,
      );
    }

    return await removerCapa(
      corpo,
      clienteSupabase,
      user.id,
    );
  } catch (erro) {
    console.error(
      'Erro ao gerenciar capa do projeto:',
      erro,
    );

    return responderJson(
      {
        erro: 'Não foi possível gerenciar a capa do projeto.',
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

  const projetoId = normalizarTexto(
    formulario.get('projeto_id'),
  );

  const arquivo = formulario.get('arquivo');

  if (!projetoId || !uuidValido(projetoId)) {
    return responderJson(
      {
        erro: 'Informe um projeto válido.',
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

  const projeto = await obterProjeto(
    clienteSupabase,
    projetoId,
    estudioId,
  );

  if (!projeto) {
    return responderJson(
      {
        erro: 'Projeto não encontrado.',
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

  const prefixo = criarPrefixoProjeto(
    estudioId,
    projetoId,
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
        projeto_id: projetoId,
      },
    }),
  );

  const { data, error } = await clienteSupabase
    .from('projetos_artisticos')
    .update({
      capa_caminho: novoCaminho,
    })
    .eq('id', projetoId)
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

  const capaAnterior = projeto.capa_caminho;

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
    projeto: data,
  });
}

async function removerCapa(
  corpo: RequisicaoRemoverCapa,
  clienteSupabase: ReturnType<typeof createClient>,
  estudioId: string,
): Promise<Response> {
  const projetoId = corpo.projeto_id?.trim();

  if (
    corpo.acao !== 'remover' ||
    !projetoId ||
    !uuidValido(projetoId)
  ) {
    return responderJson(
      {
        erro: 'Informe a capa que deve ser removida.',
      },
      400,
    );
  }

  const projeto = await obterProjeto(
    clienteSupabase,
    projetoId,
    estudioId,
  );

  if (!projeto) {
    return responderJson(
      {
        erro: 'Projeto não encontrado.',
      },
      404,
    );
  }

  if (!projeto.capa_caminho) {
    return responderJson({
      projeto,
    });
  }

  const caminhoAnterior = projeto.capa_caminho;

  const { data, error } = await clienteSupabase
    .from('projetos_artisticos')
    .update({
      capa_caminho: null,
    })
    .eq('id', projetoId)
    .eq('estudio_id', estudioId)
    .select('*')
    .single();

  if (error) {
    throw error;
  }

  const prefixo = criarPrefixoProjeto(
    estudioId,
    projetoId,
  );

  if (caminhoAnterior.startsWith(prefixo)) {
    const clienteR2 = criarClienteR2();
    const bucket = obterVariavelObrigatoria(
      'R2_IMAGES_BUCKET_NAME',
    );

    await excluirObjetoSemFalhar(
      clienteR2,
      bucket,
      caminhoAnterior,
    );
  }

  return responderJson({
    projeto: data,
  });
}

async function excluirProjeto(
  corpo: RequisicaoRemoverCapa,
  clienteSupabase: ReturnType<typeof createClient>,
  estudioId: string,
): Promise<Response> {
  const projetoId = corpo.projeto_id?.trim();

  if (!projetoId || !uuidValido(projetoId)) {
    return responderJson(
      {
        erro: 'Informe um projeto válido.',
      },
      400,
    );
  }

  const projeto = await obterProjeto(
    clienteSupabase,
    projetoId,
    estudioId,
  );

  if (!projeto) {
    return responderJson(
      {
        erro: 'Projeto não encontrado.',
      },
      404,
    );
  }

  // MVP: só permite excluir se não houver faixas no projeto.
  const { count, error: erroFaixas } =
    await clienteSupabase
      .from('faixas')
      .select('id', { count: 'exact', head: true })
      .eq('projeto_id', projetoId);

  if (erroFaixas) {
    throw erroFaixas;
  }

  if ((count ?? 0) > 0) {
    return responderJson(
      {
        erro:
          'Não é possível excluir um projeto que ainda tem faixas. ' +
          'Remova as faixas antes.',
      },
      400,
    );
  }

  // Remove a capa do R2 (best-effort).
  if (projeto.capa_caminho) {
    const prefixo = criarPrefixoProjeto(
      estudioId,
      projetoId,
    );

    if (projeto.capa_caminho.startsWith(prefixo)) {
      const clienteR2 = criarClienteR2();
      const bucket = obterVariavelObrigatoria(
        'R2_IMAGES_BUCKET_NAME',
      );

      await excluirObjetoSemFalhar(
        clienteR2,
        bucket,
        projeto.capa_caminho,
      );
    }
  }

  // Apaga membros antes (evita FK).
  const { error: erroMembros } = await clienteSupabase
    .from('membros_projeto')
    .delete()
    .eq('projeto_id', projetoId)
    .eq('estudio_id', estudioId);

  if (erroMembros) {
    throw erroMembros;
  }

  const { error: erroProjeto } = await clienteSupabase
    .from('projetos_artisticos')
    .delete()
    .eq('id', projetoId)
    .eq('estudio_id', estudioId);

  if (erroProjeto) {
    throw erroProjeto;
  }

  return responderJson({
    excluido: true,
  });
}

async function obterProjeto(
  clienteSupabase: ReturnType<typeof createClient>,
  projetoId: string,
  estudioId: string,
): Promise<ProjetoCapa | null> {
  const { data, error } = await clienteSupabase
    .from('projetos_artisticos')
    .select('id, capa_caminho')
    .eq('id', projetoId)
    .eq('estudio_id', estudioId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data as ProjetoCapa | null;
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

function criarPrefixoProjeto(
  estudioId: string,
  projetoId: string,
): string {
  return `capas/${estudioId}/${projetoId}/`;
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
