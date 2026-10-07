import { createClient } from 'npm:@supabase/supabase-js@2';
import {
  GetObjectCommand,
  S3Client,
} from 'npm:@aws-sdk/client-s3@3';
import { getSignedUrl } from 'npm:@aws-sdk/s3-request-presigner@3';

interface RequisicaoAlbumPublico {
  slug?: string;
  album_id?: string;
  acao?: string;
  faixa_id?: string;
}

interface ProjetoConsultado {
  nome: string;
  capa_caminho: string | null;
}

interface FaixaConsultada {
  titulo: string;
}

interface VersaoConsultada {
  id: string;
  versao: string;
  nome_arquivo: string;
  chave_objeto: string;
  tamanho_bytes: number;
  tipo_mime: string | null;
  confirmado_em: string | null;
  faixa:
    | FaixaConsultada
    | FaixaConsultada[]
    | null;
}

interface ItemAlbumConsultado {
  id: string;
  ordem: number;
  versao:
    | VersaoConsultada
    | VersaoConsultada[]
    | null;
}

interface AlbumConsultado {
  id: string;
  nome: string;
  capa_caminho: string | null;
  projeto:
    | ProjetoConsultado
    | ProjetoConsultado[]
    | null;
}

interface PublicacaoConsultada {
  tipo_publico: string | null;
  descricao_publica: string | null;
  reproducao_publica: boolean;
  download_publico: boolean;
  album:
    | AlbumConsultado
    | AlbumConsultado[]
    | null;
}

const URL_PUBLICA_CAPAS =
  'https://pub-b1d515cf725c469ea3d43e6cdc3546a7.r2.dev';

const BUCKET_LOGOS = 'logos-estudios';
const DURACAO_REPRODUCAO_SEGUNDOS = 900;
const DURACAO_DOWNLOAD_SEGUNDOS = 180;

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
    let corpo: RequisicaoAlbumPublico;

    try {
      corpo =
        (await requisicao.json()) as RequisicaoAlbumPublico;
    } catch {
      return responderIndisponivel();
    }

    const slug = corpo.slug
      ?.trim()
      .toLocaleLowerCase();

    const albumId = corpo.album_id?.trim();
    const acao = corpo.acao?.trim() || 'metadados';
    const faixaId = corpo.faixa_id?.trim();

    if (
      !slug ||
      !slugValido(slug) ||
      !albumId ||
      !uuidValido(albumId) ||
      !['metadados', 'reproducao', 'download'].includes(
        acao,
      ) ||
      (acao !== 'metadados' &&
        (!faixaId || !uuidValido(faixaId)))
    ) {
      return responderIndisponivel();
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

    const { data: estudio, error: erroEstudio } =
      await clienteSupabase
        .from('estudios')
        .select(`
          id,
          nome,
          slug,
          logo_caminho,
          cor_principal
        `)
        .eq('slug', slug)
        .eq('landing_publicada', true)
        .maybeSingle();

    if (erroEstudio) {
      throw erroEstudio;
    }

    if (!estudio) {
      return responderIndisponivel();
    }

    const [resultadoPublicacao, resultadoItens] =
      await Promise.all([
        clienteSupabase
          .from('publicacoes_album')
          .select(`
            tipo_publico,
            descricao_publica,
            reproducao_publica,
            download_publico,
            album:albuns!publicacoes_album_album_id_fkey (
              id,
              nome,
              capa_caminho,
              projeto:projetos_artisticos!albuns_projeto_id_fkey (
                nome,
                capa_caminho
              )
            )
          `)
          .eq('album_id', albumId)
          .eq('estudio_id', estudio.id)
          .eq('publico', true)
          .maybeSingle(),

        clienteSupabase
          .from('album_faixas')
          .select(`
            id,
            ordem,
            versao:versoes_faixa!album_faixas_versao_id_fkey (
              id,
              versao,
              nome_arquivo,
              chave_objeto,
              tamanho_bytes,
              tipo_mime,
              confirmado_em,
              faixa:faixas!versoes_faixa_faixa_estudio_fkey (
                titulo
              )
            )
          `)
          .eq('album_id', albumId)
          .order('ordem', {
            ascending: true,
          }),
      ]);

    if (resultadoPublicacao.error) {
      throw resultadoPublicacao.error;
    }

    if (resultadoItens.error) {
      throw resultadoItens.error;
    }

    if (!resultadoPublicacao.data) {
      return responderIndisponivel();
    }

    const publicacao =
      resultadoPublicacao.data as unknown as PublicacaoConsultada;

    const album = obterPrimeiroRegistro(
      publicacao.album,
    );

    if (!album) {
      return responderIndisponivel();
    }

    const projeto = obterPrimeiroRegistro(
      album.projeto,
    );

    if (!projeto) {
      return responderIndisponivel();
    }

    const itensConsultados =
      resultadoItens.data as unknown as
        ItemAlbumConsultado[];

    const itens = itensConsultados.map((item) => {
      const versao = obterPrimeiroRegistro(
        item.versao,
      );

      const faixa = versao
        ? obterPrimeiroRegistro(versao.faixa)
        : null;

      if (
        !versao ||
        !faixa ||
        !versao.confirmado_em
      ) {
        throw new Error(
          'O álbum publicado possui uma versão indisponível.',
        );
      }

      return {
        id: item.id,
        ordem: item.ordem,
        faixa: faixa.titulo,
        versao: versao.versao,
        nome_arquivo: versao.nome_arquivo,
        tamanho_bytes: versao.tamanho_bytes,
        tipo_mime: versao.tipo_mime,
        chave_objeto: versao.chave_objeto,
      };
    });

    const faixas = itens.map((item) => ({
      id: item.id,
      ordem: item.ordem,
      faixa: item.faixa,
      versao: item.versao,
      nome_arquivo: item.nome_arquivo,
      tamanho_bytes: item.tamanho_bytes,
      tipo_mime: item.tipo_mime,
    }));

    let arquivo: {
      faixa_id: string;
      url: string;
      nome_arquivo: string;
    } | null = null;
    let duracaoUrlSegundos: number | null = null;

    if (acao !== 'metadados' && faixaId) {
      const item = itens.find(
        (faixa) => faixa.id === faixaId,
      );

      if (!item) {
        return responderIndisponivel();
      }

      if (
        acao === 'reproducao' &&
        !publicacao.reproducao_publica
      ) {
        return responderIndisponivel();
      }

      if (
        acao === 'download' &&
        !publicacao.download_publico
      ) {
        return responderIndisponivel();
      }

      const tipoConteudo =
        item.tipo_mime ??
        'application/octet-stream';

      if (
        acao === 'reproducao' &&
        !tipoConteudo.startsWith('audio/')
      ) {
        return responderJson(
          {
            erro: 'Este arquivo não pode ser reproduzido no navegador.',
          },
          409,
        );
      }

      const clienteR2 = criarClienteR2();
      const bucket = obterVariavelObrigatoria(
        'R2_BUCKET_NAME',
      );

      duracaoUrlSegundos =
        acao === 'reproducao'
          ? DURACAO_REPRODUCAO_SEGUNDOS
          : DURACAO_DOWNLOAD_SEGUNDOS;

      arquivo = {
        faixa_id: item.id,
        url: await criarUrlArquivo(
          clienteR2,
          bucket,
          item.chave_objeto,
          item.nome_arquivo,
          tipoConteudo,
          acao === 'reproducao'
            ? 'inline'
            : 'attachment',
          duracaoUrlSegundos,
        ),
        nome_arquivo: item.nome_arquivo,
      };
    }

    const caminhoCapa =
      album.capa_caminho ??
      projeto.capa_caminho;

    let logoUrl: string | null = null;

    if (estudio.logo_caminho) {
      const { data } =
        clienteSupabase.storage
          .from(BUCKET_LOGOS)
          .getPublicUrl(estudio.logo_caminho);

      logoUrl = data.publicUrl;
    }

    return responderJson({
      estudio: {
        nome: estudio.nome,
        slug: estudio.slug,
        logo_url: logoUrl,
        cor_principal: estudio.cor_principal,
      },
      album: {
        id: album.id,
        nome: album.nome,
        projeto: projeto.nome,
        tipo: publicacao.tipo_publico,
        descricao: publicacao.descricao_publica,
        capa_url: criarUrlPublica(
          URL_PUBLICA_CAPAS,
          caminhoCapa,
        ),
        reproducao_publica:
          publicacao.reproducao_publica,
        download_publico:
          publicacao.download_publico,
        faixas,
      },
      arquivo,
      expira_em: arquivo
        ? new Date(
            Date.now() +
              (duracaoUrlSegundos ?? 0) * 1000,
          ).toISOString()
        : null,
    });
  } catch (erro) {
    console.error(
      'Erro ao abrir álbum público:',
      erro,
    );

    return responderJson(
      {
        erro: 'Não foi possível abrir este trabalho.',
      },
      500,
    );
  }
});

async function criarUrlArquivo(
  clienteR2: S3Client,
  bucket: string,
  chaveObjeto: string,
  nomeArquivo: string,
  tipoConteudo: string,
  disposicao: 'inline' | 'attachment',
  duracaoSegundos: number,
): Promise<string> {
  const comando = new GetObjectCommand({
    Bucket: bucket,
    Key: chaveObjeto,
    ResponseContentType: tipoConteudo,
    ResponseContentDisposition:
      criarContentDisposition(
        nomeArquivo,
        disposicao,
      ),
  });

  return await getSignedUrl(
    clienteR2,
    comando,
    {
      expiresIn: duracaoSegundos,
    },
  );
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
  disposicao: 'inline' | 'attachment',
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

function criarUrlPublica(
  base: string,
  caminho: string | null,
): string | null {
  if (!caminho) {
    return null;
  }

  const caminhoSeguro = caminho
    .split('/')
    .map((parte) => encodeURIComponent(parte))
    .join('/');

  return `${base.replace(/\/$/, '')}/${caminhoSeguro}`;
}

function obterPrimeiroRegistro<T>(
  valor: T | T[] | null,
): T | null {
  if (Array.isArray(valor)) {
    return valor[0] ?? null;
  }

  return valor ?? null;
}

function slugValido(slug: string): boolean {
  return (
    slug.length <= 120 &&
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
  );
}

function uuidValido(valor: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    valor,
  );
}

function responderIndisponivel(): Response {
  return responderJson(
    {
      erro: 'Trabalho não encontrado ou indisponível.',
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
