import { createClient } from 'npm:@supabase/supabase-js@2';
import {
  DeleteObjectCommand,
  S3Client,
} from 'npm:@aws-sdk/client-s3@3';

interface Solicitacao {
  experiencia_id?: unknown;
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

    if (!uuidValido(experienciaId)) {
      return responder(400, { erro: 'Experiência inválida.' });
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

    const { data: experiencia, error: erroExperiencia } = await supabase
      .from('experiencias_imersivas')
      .select('id')
      .eq('id', experienciaId)
      .eq('estudio_id', user.id)
      .maybeSingle();

    if (erroExperiencia) throw erroExperiencia;
    if (!experiencia) {
      return responder(404, { erro: 'Experiência não encontrada.' });
    }

    const { data: recursos, error: erroRecursos } = await supabase
      .from('recursos_experiencia_imersiva')
      .select('id, chave_objeto')
      .eq('experiencia_id', experienciaId)
      .eq('estudio_id', user.id)
      .is('versao_id', null)
      .not('chave_objeto', 'is', null);

    if (erroRecursos) throw erroRecursos;

    const recursosProprios = recursos ?? [];

    if (recursosProprios.length > 0) {
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
      const bucket = variavel('R2_BUCKET_NAME');
      const prefixoSeguro =
        `${user.id}/experiencias/${experienciaId}/`;

      for (const recurso of recursosProprios) {
        if (!recurso.chave_objeto?.startsWith(prefixoSeguro)) {
          return responder(400, {
            erro: 'Um arquivo da experiência possui chave inválida.',
          });
        }

        await clienteR2.send(
          new DeleteObjectCommand({
            Bucket: bucket,
            Key: recurso.chave_objeto,
          }),
        );
      }
    }

    const { error: erroExclusao } = await supabase
      .from('experiencias_imersivas')
      .delete()
      .eq('id', experienciaId)
      .eq('estudio_id', user.id);

    if (erroExclusao) throw erroExclusao;

    return responder(200, { excluida: true });
  } catch (erro) {
    console.error('Erro ao excluir experiência imersiva:', erro);
    return responder(500, {
      erro: 'Não foi possível excluir a experiência.',
    });
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
