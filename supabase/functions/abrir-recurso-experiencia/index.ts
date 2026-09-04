import { createClient } from 'npm:@supabase/supabase-js@2';
import {
  GetObjectCommand,
  S3Client,
} from 'npm:@aws-sdk/client-s3@3';
import { getSignedUrl } from 'npm:@aws-sdk/s3-request-presigner@3';

interface Solicitacao {
  experiencia_id?: unknown;
  recurso_id?: unknown;
}

interface Arquivo {
  nome_arquivo: string;
  chave_objeto: string;
  tipo_mime: string | null;
}

const cabecalhosCors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, apikey, content-type, x-client-info',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const validadeSegundos = 60 * 60;

Deno.serve(async (requisicao) => {
  if (requisicao.method === 'OPTIONS') {
    return new Response('ok', { headers: cabecalhosCors });
  }

  if (requisicao.method !== 'POST') {
    return responder(405, { erro: 'Método não permitido.' });
  }

  try {
    const autorizacao = requisicao.headers.get('Authorization');
    if (!autorizacao) {
      return responder(401, { erro: 'Usuário não autenticado.' });
    }

    const corpo = await requisicao.json() as Solicitacao;
    const experienciaId = texto(corpo.experiencia_id);
    const recursoId = texto(corpo.recurso_id);

    if (!uuidValido(experienciaId) || !uuidValido(recursoId)) {
      return responder(400, { erro: 'Recurso inválido.' });
    }

    const supabase = createClient(
      variavel('SUPABASE_URL'),
      variavel('SUPABASE_ANON_KEY'),
      {
        global: { headers: { Authorization: autorizacao } },
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
      return responder(401, { erro: 'Usuário não autenticado.' });
    }

    const { data: recurso, error: erroRecurso } = await supabase
      .from('recursos_experiencia_imersiva')
      .select(`
        id,
        versao_id,
        nome_arquivo,
        chave_objeto,
        tipo_mime,
        confirmado_em
      `)
      .eq('id', recursoId)
      .eq('experiencia_id', experienciaId)
      .eq('estudio_id', user.id)
      .maybeSingle();

    if (erroRecurso) throw erroRecurso;
    if (!recurso) {
      return responder(404, { erro: 'Recurso não encontrado.' });
    }

    let arquivo: Arquivo | null = null;

    if (recurso.versao_id) {
      const { data: versao, error: erroVersao } = await supabase
        .from('versoes_faixa')
        .select('nome_arquivo, chave_objeto, tipo_mime, confirmado_em')
        .eq('id', recurso.versao_id)
        .eq('estudio_id', user.id)
        .maybeSingle();

      if (erroVersao) throw erroVersao;
      if (
        versao?.confirmado_em &&
        versao.nome_arquivo &&
        versao.chave_objeto?.startsWith(`${user.id}/`)
      ) {
        arquivo = {
          nome_arquivo: versao.nome_arquivo,
          chave_objeto: versao.chave_objeto,
          tipo_mime: versao.tipo_mime,
        };
      }
    } else if (
      recurso.confirmado_em &&
      recurso.nome_arquivo &&
      recurso.chave_objeto?.startsWith(
        `${user.id}/experiencias/${experienciaId}/`,
      )
    ) {
      arquivo = {
        nome_arquivo: recurso.nome_arquivo,
        chave_objeto: recurso.chave_objeto,
        tipo_mime: recurso.tipo_mime,
      };
    }

    if (!arquivo) {
      return responder(409, { erro: 'O arquivo ainda não está disponível.' });
    }

    const clienteR2 = new S3Client({
      region: 'auto',
      endpoint:
        `https://${variavel('R2_ACCOUNT_ID')}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: variavel('R2_ACCESS_KEY_ID'),
        secretAccessKey: variavel('R2_SECRET_ACCESS_KEY'),
      },
      requestChecksumCalculation: 'WHEN_REQUIRED',
      responseChecksumValidation: 'WHEN_REQUIRED',
    });

    const comando = new GetObjectCommand({
      Bucket: variavel('R2_BUCKET_NAME'),
      Key: arquivo.chave_objeto,
      ResponseContentType: arquivo.tipo_mime ?? 'application/octet-stream',
      ResponseContentDisposition:
        `inline; filename*=UTF-8''${encodeURIComponent(arquivo.nome_arquivo)}`,
    });

    const reproducaoUrl = await getSignedUrl(clienteR2, comando, {
      expiresIn: validadeSegundos,
    });

    return responder(200, {
      reproducao_url: reproducaoUrl,
      expira_em: new Date(
        Date.now() + validadeSegundos * 1000,
      ).toISOString(),
    });
  } catch (erro) {
    console.error('Erro ao abrir recurso da experiência:', erro);
    return responder(500, { erro: 'Não foi possível abrir o recurso.' });
  }
});

function texto(valor: unknown): string {
  return typeof valor === 'string' ? valor.trim() : '';
}

function uuidValido(valor: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    valor,
  );
}

function variavel(nome: string): string {
  const valor = Deno.env.get(nome);
  if (!valor) throw new Error(`Variável ausente: ${nome}`);
  return valor;
}

function responder(status: number, corpo: Record<string, unknown>): Response {
  return new Response(JSON.stringify(corpo), {
    status,
    headers: {
      ...cabecalhosCors,
      'Content-Type': 'application/json',
    },
  });
}
