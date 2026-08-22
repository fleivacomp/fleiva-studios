import { createClient } from 'npm:@supabase/supabase-js@2';
import {
  GetObjectCommand,
  S3Client,
} from 'npm:@aws-sdk/client-s3@3';
import { getSignedUrl } from 'npm:@aws-sdk/s3-request-presigner@3';

interface RequisicaoAlbum {
  token?: string;
}

interface ProjetoConsultado {
  nome: string;
  capa_caminho: string | null;
}

interface FaixaConsultada {
  titulo: string;
}

interface VersaoConsultada {
  estudio_id: string;
  versao: string;
  observacoes: string | null;
  nome_arquivo: string;
  chave_objeto: string;
  tamanho_bytes: number;
  tipo_mime: string | null;
  criado_em: string;
  confirmado_em: string | null;
  faixa: FaixaConsultada | FaixaConsultada[] | null;
}

interface ItemAlbumConsultado {
  id: string;
  ordem: number;
  versao: VersaoConsultada | VersaoConsultada[] | null;
}

const URL_PUBLICA_CAPAS =
  'https://pub-b1d515cf725c469ea3d43e6cdc3546a7.r2.dev';

const BUCKET_LOGOS = 'logos-estudios';

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
      (await requisicao.json()) as RequisicaoAlbum;

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

    const { data: album, error: erroAlbum } =
      await clienteSupabase
        .from('albuns')
        .select(`
          id,
          estudio_id,
          nome,
          observacoes,
          projeto:projetos_artisticos!albuns_projeto_id_fkey (
            nome,
            capa_caminho
          ),
          faixas:album_faixas!album_faixas_album_id_fkey (
            id,
            ordem,
            versao:versoes_faixa!album_faixas_versao_id_fkey (
              estudio_id,
              versao,
              observacoes,
              nome_arquivo,
              chave_objeto,
              tamanho_bytes,
              tipo_mime,
              criado_em,
              confirmado_em,
              faixa:faixas!versoes_faixa_faixa_estudio_fkey (
                titulo
              )
            )
          )
        `)
        .eq('token_compartilhamento', token)
        .maybeSingle();

    if (erroAlbum) {
      throw erroAlbum;
    }

    if (!album) {
      return responderJson(
        {
          erro: 'Link inválido ou indisponível.',
        },
        404,
      );
    }

    const projeto = obterPrimeiroRegistro(
      album.projeto as unknown as
        | ProjetoConsultado
        | ProjetoConsultado[]
        | null,
    );

    if (!projeto) {
      return responderJson(
        {
          erro: 'Link inválido ou indisponível.',
        },
        404,
      );
    }

    const { data: estudio, error: erroEstudio } =
      await clienteSupabase
        .from('estudios')
        .select(`
          nome,
          logo_caminho,
          cor_principal
        `)
        .eq('id', album.estudio_id)
        .maybeSingle();

    if (erroEstudio) {
      throw erroEstudio;
    }

    if (!estudio) {
      return responderJson(
        {
          erro: 'Link inválido ou indisponível.',
        },
        404,
      );
    }

    const itensConsultados =
      (album.faixas ?? []) as unknown as ItemAlbumConsultado[];

    const itensValidos = itensConsultados
      .map((item) => {
        const versao = obterPrimeiroRegistro(item.versao);
        const faixa = versao
          ? obterPrimeiroRegistro(versao.faixa)
          : null;

        if (
          !versao ||
          !faixa ||
          !versao.confirmado_em ||
          versao.estudio_id !== album.estudio_id
        ) {
          return null;
        }

        return {
          item,
          versao,
          faixa,
        };
      })
      .filter(itemValido)
      .sort(
        (primeiro, segundo) =>
          primeiro.item.ordem - segundo.item.ordem,
      );

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

    const duracaoDownloadSegundos = 300;
    const duracaoReproducaoSegundos = 3600;

    const faixas = await Promise.all(
      itensValidos.map(async ({ item, versao, faixa }) => {
        const tipoMime =
          versao.tipo_mime ?? 'application/octet-stream';

        const comandoDownload = new GetObjectCommand({
          Bucket: bucket,
          Key: versao.chave_objeto,
          ResponseContentType: tipoMime,
          ResponseContentDisposition:
            criarContentDisposition(
              versao.nome_arquivo,
              'attachment',
            ),
        });

        const comandoReproducao = new GetObjectCommand({
          Bucket: bucket,
          Key: versao.chave_objeto,
          ResponseContentType: tipoMime,
          ResponseContentDisposition:
            criarContentDisposition(
              versao.nome_arquivo,
              'inline',
            ),
        });

        const [downloadUrl, reproducaoUrl] =
          await Promise.all([
            getSignedUrl(clienteR2, comandoDownload, {
              expiresIn: duracaoDownloadSegundos,
            }),
            getSignedUrl(clienteR2, comandoReproducao, {
              expiresIn: duracaoReproducaoSegundos,
            }),
          ]);

        return {
          item_id: item.id,
          ordem: item.ordem,
          faixa: faixa.titulo,
          versao: versao.versao,
          observacoes: versao.observacoes,
          nome_arquivo: versao.nome_arquivo,
          tamanho_bytes: versao.tamanho_bytes,
          tipo_mime: versao.tipo_mime,
          criado_em: versao.criado_em,
          reproducao_url: reproducaoUrl,
          reproducao_expira_em: new Date(
            Date.now() + duracaoReproducaoSegundos * 1000,
          ).toISOString(),
          download_url: downloadUrl,
          download_expira_em: new Date(
            Date.now() + duracaoDownloadSegundos * 1000,
          ).toISOString(),
        };
      }),
    );

    return responderJson({
      album: {
        nome: album.nome,
        observacoes: album.observacoes,
        projeto: projeto.nome,
        capa_url: criarUrlPublica(
          URL_PUBLICA_CAPAS,
          projeto.capa_caminho,
        ),
        estudio: {
          nome: estudio.nome,
          logo_url: criarUrlPublica(
            `${supabaseUrl}/storage/v1/object/public/${BUCKET_LOGOS}`,
            estudio.logo_caminho,
          ),
          cor_principal: estudio.cor_principal,
        },
        faixas,
      },
    });
  } catch (erro) {
    console.error(
      'Erro ao abrir álbum compartilhado:',
      erro,
    );

    return responderJson(
      {
        erro: 'Não foi possível abrir o álbum.',
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

function itemValido<T>(
  item: T | null,
): item is T {
  return item !== null;
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

function criarUrlPublica(
  base: string,
  caminho: string | null,
): string | null {
  if (!caminho) {
    return null;
  }

  const caminhoCodificado = caminho
    .split('/')
    .map((parte) => encodeURIComponent(parte))
    .join('/');

  return `${base.replace(/\/$/, '')}/${caminhoCodificado}`;
}

function criarContentDisposition(
  nomeArquivo: string,
  disposicao: 'attachment' | 'inline',
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

  return `${disposicao}; filename="${nomeAscii}"; filename*=UTF-8''${nomeUtf8}`;
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
