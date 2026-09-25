import { createClient } from 'npm:@supabase/supabase-js@2';
import {
  GetObjectCommand,
  S3Client,
} from 'npm:@aws-sdk/client-s3@3';
import { getSignedUrl } from 'npm:@aws-sdk/s3-request-presigner@3';

interface RequisicaoExperiencia {
  experiencia_id?: unknown;
}

interface ExperienciaConsultada {
  id: string;
  estudio_id: string;
  album_id: string | null;
  nome: string;
  publicada_em: string | null;
}

interface EstudioConsultado {
  nome: string;
  slug: string;
  cor_principal: string | null;
}

interface BlocoConsultado {
  id: string;
  ordem: number;
  conteudo: string | null;
  imagem_caminho: string | null;
  teto_temporal_segundos: number | null;
  hold_point_segundos: number | null;
}

interface AcaoConsultada {
  id: string;
  bloco_id: string;
  recurso_id: string | null;
  ordem: number;
  acao: string;
  inicio_segundos: number;
  parametros: unknown;
}

interface VersaoConsultada {
  estudio_id: string;
  nome_arquivo: string;
  chave_objeto: string;
  tamanho_bytes: number;
  tipo_mime: string | null;
  confirmado_em: string | null;
}

interface RecursoConsultado {
  id: string;
  nome: string;
  versao_id: string | null;
  nome_arquivo: string | null;
  chave_objeto: string | null;
  tamanho_bytes: number | null;
  tipo_mime: string | null;
  confirmado_em: string | null;
  versao:
    | VersaoConsultada
    | VersaoConsultada[]
    | null;
}

interface ArquivoRecurso {
  nome_arquivo: string;
  chave_objeto: string;
  tamanho_bytes: number;
  tipo_mime: string | null;
}

interface RecursoAssinado {
  id: string;
  nome: string;
  versao_id: string | null;
  nome_arquivo: string;
  tamanho_bytes: number;
  tipo_mime: string | null;
  reproducao_url: string;
  reproducao_expira_em: string;
}

const DURACAO_URL_SEGUNDOS = 3600;

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
    let corpo: RequisicaoExperiencia;

    try {
      corpo = await requisicao.json();
    } catch {
      return responderIndisponivel();
    }

    const experienciaId =
      typeof corpo.experiencia_id === 'string'
        ? corpo.experiencia_id.trim()
        : '';

    if (!uuidValido(experienciaId)) {
      return responderIndisponivel();
    }

    const supabaseUrl =
      obterVariavelObrigatoria('SUPABASE_URL');

    const serviceRoleKey =
      obterVariavelObrigatoria(
        'SUPABASE_SERVICE_ROLE_KEY',
      );

    const anonKey =
      obterVariavelObrigatoria('SUPABASE_ANON_KEY');

    const autorizacao =
      requisicao.headers.get('Authorization');

    let usuarioId: string | null = null;

    if (autorizacao) {
      const clienteUsuario = createClient(
        supabaseUrl,
        anonKey,
        {
          global: {
            headers: {
              Authorization: autorizacao,
            },
          },
          auth: {
            persistSession: false,
            autoRefreshToken: false,
          },
        },
      );

      const {
        data: { user },
      } = await clienteUsuario.auth.getUser();

      usuarioId = user?.id ?? null;
    }

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

    const {
      data: experienciaRecebida,
      error: erroExperiencia,
    } = await clienteSupabase
      .from('experiencias_imersivas')
      .select(`
        id,
        estudio_id,
        album_id,
        nome,
        publicada_em
      `)
      .eq('id', experienciaId)
      .maybeSingle();

    if (erroExperiencia) {
      throw erroExperiencia;
    }

    if (!experienciaRecebida) {
      return responderIndisponivel();
    }

    const experiencia =
      experienciaRecebida as ExperienciaConsultada;

    if (
      !experiencia.publicada_em &&
      usuarioId !== experiencia.estudio_id
    ) {
      return responderIndisponivel();
    }

    const [
      resultadoBlocos,
      resultadoAcoes,
      resultadoRecursos,
      resultadoEstudio,
    ] = await Promise.all([
      clienteSupabase
        .from('blocos_experiencia_imersiva')
        .select(`
          id,
          ordem,
          conteudo,
          imagem_caminho,
          teto_temporal_segundos,
          hold_point_segundos
        `)
        .eq('experiencia_id', experiencia.id)
        .eq('estudio_id', experiencia.estudio_id)
        .order('ordem', {
          ascending: true,
        }),

      clienteSupabase
        .from('acoes_bloco_experiencia_imersiva')
        .select(`
          id,
          bloco_id,
          recurso_id,
          ordem,
          acao,
          inicio_segundos,
          parametros
        `)
        .eq('experiencia_id', experiencia.id)
        .eq('estudio_id', experiencia.estudio_id),

      clienteSupabase
        .from('recursos_experiencia_imersiva')
        .select(`
          id,
          nome,
          versao_id,
          nome_arquivo,
          chave_objeto,
          tamanho_bytes,
          tipo_mime,
          confirmado_em,
          versao:versoes_faixa!recursos_experiencia_imersiva_versao_id_fkey (
            estudio_id,
            nome_arquivo,
            chave_objeto,
            tamanho_bytes,
            tipo_mime,
            confirmado_em
          )
        `)
        .eq('experiencia_id', experiencia.id)
        .eq('estudio_id', experiencia.estudio_id),

      clienteSupabase
        .from('estudios')
        .select(`
          nome,
          slug,
          cor_principal
        `)
        .eq('id', experiencia.estudio_id)
        .eq('landing_publicada', true)
        .maybeSingle(),
    ]);

    if (resultadoBlocos.error) {
      throw resultadoBlocos.error;
    }

    if (resultadoAcoes.error) {
      throw resultadoAcoes.error;
    }

    if (resultadoRecursos.error) {
      throw resultadoRecursos.error;
    }

    if (resultadoEstudio.error) {
      throw resultadoEstudio.error;
    }

    const estudioPublico =
      resultadoEstudio.data as EstudioConsultado | null;

    const blocosConsultados =
      resultadoBlocos.data as BlocoConsultado[];

    const acoesConsultadas =
      resultadoAcoes.data as AcaoConsultada[];

    const recursosConsultados =
      resultadoRecursos.data as unknown as
        RecursoConsultado[];

    const blocosComAcoes = blocosConsultados.map(
      (bloco) => ({
        ...bloco,
        acoes: acoesConsultadas
          .filter(
            (acao) => acao.bloco_id === bloco.id,
          )
          .sort(
            (primeira, segunda) =>
              primeira.ordem - segunda.ordem,
          ),
      }),
    );

    const recursosAudioReferenciados = new Set<string>();
    const recursosImagemReferenciados = new Set<string>();

    for (const bloco of blocosComAcoes) {
      for (const acao of bloco.acoes) {
        if (acao.recurso_id) {
          recursosAudioReferenciados.add(
            acao.recurso_id,
          );
        }
      }

      const recursoImagemId = extrairRecursoImagem(
        bloco.imagem_caminho,
      );
      if (recursoImagemId) {
        recursosImagemReferenciados.add(recursoImagemId);
      }
    }

    const recursosPorId = new Map(
      recursosConsultados.map(
        (recurso) => [recurso.id, recurso],
      ),
    );

    const recursosNecessarios = new Set([
      ...recursosAudioReferenciados,
      ...recursosImagemReferenciados,
    ]);
    const recursosAssinados = new Map<string, RecursoAssinado>();

    if (recursosNecessarios.size > 0) {
      const clienteR2 = criarClienteR2();
      const bucket = obterVariavelObrigatoria(
        'R2_BUCKET_NAME',
      );

      const expiraEm = new Date(
        Date.now() +
          DURACAO_URL_SEGUNDOS * 1000,
      ).toISOString();

      const assinados = await Promise.all(
        [...recursosNecessarios].map(
          async (recursoId) => {
            const recurso =
              recursosPorId.get(recursoId);

            if (!recurso) {
              throw new Error(
                'A experiência publicada referencia um recurso inexistente.',
              );
            }

            const arquivo = obterArquivoRecurso(
              recurso,
              experiencia,
            );

            if (!arquivo) {
              throw new Error(
                'A experiência publicada referencia um recurso indisponível.',
              );
            }

            const comando = new GetObjectCommand({
              Bucket: bucket,
              Key: arquivo.chave_objeto,
              ResponseContentType:
                arquivo.tipo_mime ??
                'application/octet-stream',
              ResponseContentDisposition:
                criarContentDisposition(
                  arquivo.nome_arquivo,
                ),
            });

            const reproducaoUrl = await getSignedUrl(
              clienteR2,
              comando,
              {
                expiresIn: DURACAO_URL_SEGUNDOS,
              },
            );

            return {
              id: recurso.id,
              nome: recurso.nome,
              versao_id: recurso.versao_id,
              nome_arquivo: arquivo.nome_arquivo,
              tamanho_bytes: arquivo.tamanho_bytes,
              tipo_mime: arquivo.tipo_mime,
              reproducao_url: reproducaoUrl,
              reproducao_expira_em: expiraEm,
            };
          },
        ),
      );

      for (const recurso of assinados) {
        recursosAssinados.set(recurso.id, recurso);
      }
    }

    const recursos = [...recursosAudioReferenciados].map(
      (recursoId) => {
        const recurso = recursosAssinados.get(recursoId);
        if (!recurso) {
          throw new Error(
            'A experiência publicada referencia um áudio indisponível.',
          );
        }
        return recurso;
      },
    );

    const blocos = blocosComAcoes.map((bloco) => {
      const recursoImagemId = extrairRecursoImagem(
        bloco.imagem_caminho,
      );

      return {
        ...bloco,
        imagem_url: recursoImagemId
          ? recursosAssinados.get(recursoImagemId)?.reproducao_url ?? null
          : null,
      };
    });

    return responderJson({
      experiencia: {
        id: experiencia.id,
        album_id: experiencia.album_id,
        nome: experiencia.nome,
        publicada_em: experiencia.publicada_em,
        estudio: estudioPublico
          ? {
              nome: estudioPublico.nome,
              slug: estudioPublico.slug,
              cor_principal: estudioPublico.cor_principal,
            }
          : null,
        blocos,
        recursos,
      },
    });
  } catch (erro) {
    console.error(
      'Erro ao abrir experiência imersiva:',
      erro,
    );

    return responderJson(
      {
        erro: 'Não foi possível abrir esta experiência.',
      },
      500,
    );
  }
});

function obterArquivoRecurso(
  recurso: RecursoConsultado,
  experiencia: ExperienciaConsultada,
): ArquivoRecurso | null {
  if (recurso.versao_id) {
    const versao = obterPrimeiroRegistro(
      recurso.versao,
    );

    if (
      !versao ||
      versao.estudio_id !== experiencia.estudio_id ||
      !versao.confirmado_em ||
      !versao.nome_arquivo ||
      !versao.chave_objeto ||
      !versao.chave_objeto.startsWith(
        `${experiencia.estudio_id}/`,
      ) ||
      !Number.isSafeInteger(versao.tamanho_bytes) ||
      versao.tamanho_bytes <= 0
    ) {
      return null;
    }

    return {
      nome_arquivo: versao.nome_arquivo,
      chave_objeto: versao.chave_objeto,
      tamanho_bytes: versao.tamanho_bytes,
      tipo_mime: versao.tipo_mime,
    };
  }

  if (
    !recurso.confirmado_em ||
    !recurso.nome_arquivo ||
    !recurso.chave_objeto ||
    !recurso.chave_objeto.startsWith(
      `${experiencia.estudio_id}/experiencias/${experiencia.id}/`,
    ) ||
    typeof recurso.tamanho_bytes !== 'number' ||
    !Number.isSafeInteger(recurso.tamanho_bytes) ||
    recurso.tamanho_bytes <= 0
  ) {
    return null;
  }

  return {
    nome_arquivo: recurso.nome_arquivo,
    chave_objeto: recurso.chave_objeto,
    tamanho_bytes: recurso.tamanho_bytes,
    tipo_mime: recurso.tipo_mime,
  };
}

function criarClienteR2(): S3Client {
  const accountId = obterVariavelObrigatoria(
    'R2_ACCOUNT_ID',
  );

  const accessKeyId = obterVariavelObrigatoria(
    'R2_ACCESS_KEY_ID',
  );

  const secretAccessKey =
    obterVariavelObrigatoria(
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

  return `inline; filename="${nomeAscii}"; filename*=UTF-8''${nomeUtf8}`;
}

function obterPrimeiroRegistro<T>(
  valor: T | T[] | null,
): T | null {
  if (Array.isArray(valor)) {
    return valor[0] ?? null;
  }

  return valor ?? null;
}

function uuidValido(valor: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    valor,
  );
}

function extrairRecursoImagem(caminho: string | null): string | null {
  const correspondencia = caminho?.match(
    /^recurso:([0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$/i,
  );

  return correspondencia?.[1] ?? null;
}

function responderIndisponivel(): Response {
  return responderJson(
    {
      erro: 'Experiência não encontrada ou indisponível.',
    },
    404,
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
  return new Response(
    JSON.stringify(corpo),
    {
      status,
      headers: {
        ...cabecalhosCors,
        'Content-Type':
          'application/json; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    },
  );
}
