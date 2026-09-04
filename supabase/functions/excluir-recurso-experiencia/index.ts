import { createClient } from 'npm:@supabase/supabase-js@2';
import {
  DeleteObjectCommand,
  S3Client,
} from 'npm:@aws-sdk/client-s3@3';

interface Solicitacao {
  experiencia_id?: unknown;
  recurso_id?: unknown;
}

const cabecalhosCors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, apikey, content-type, x-client-info',
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
      .select('id, versao_id, chave_objeto')
      .eq('id', recursoId)
      .eq('experiencia_id', experienciaId)
      .eq('estudio_id', user.id)
      .maybeSingle();

    if (erroRecurso) throw erroRecurso;
    if (!recurso) {
      return responder(404, { erro: 'Recurso não encontrado.' });
    }

    const { count, error: erroReferencias } = await supabase
      .from('acoes_bloco_experiencia_imersiva')
      .select('id', { count: 'exact', head: true })
      .eq('recurso_id', recursoId)
      .eq('experiencia_id', experienciaId)
      .eq('estudio_id', user.id);

    if (erroReferencias) throw erroReferencias;
    if ((count ?? 0) > 0) {
      return responder(409, {
        erro: 'Remova este áudio das cenas antes de excluí-lo.',
      });
    }

    if (!recurso.versao_id && recurso.chave_objeto) {
      const prefixoSeguro =
        `${user.id}/experiencias/${experienciaId}/`;

      if (!recurso.chave_objeto.startsWith(prefixoSeguro)) {
        return responder(400, { erro: 'A chave do arquivo é inválida.' });
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

      await clienteR2.send(
        new DeleteObjectCommand({
          Bucket: variavel('R2_BUCKET_NAME'),
          Key: recurso.chave_objeto,
        }),
      );
    }

    const { error: erroExclusao } = await supabase
      .from('recursos_experiencia_imersiva')
      .delete()
      .eq('id', recursoId)
      .eq('experiencia_id', experienciaId)
      .eq('estudio_id', user.id);

    if (erroExclusao) throw erroExclusao;

    return responder(200, { excluido: true });
  } catch (erro) {
    console.error('Erro ao excluir recurso da experiência:', erro);
    return responder(500, { erro: 'Não foi possível excluir o recurso.' });
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
