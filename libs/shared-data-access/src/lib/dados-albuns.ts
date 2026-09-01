import {
  computed,
  inject,
  Injectable,
  signal,
} from '@angular/core';
import { ClienteSupabase } from './cliente-supabase';
import type { Database } from './tipos-banco';

type AlbumBanco =
  Database['public']['Tables']['albuns']['Row'];

type AlbumFaixaBanco =
  Database['public']['Tables']['album_faixas']['Row'];

type ProjetoBanco =
  Database['public']['Tables']['projetos_artisticos']['Row'];

type FaixaBanco =
  Database['public']['Tables']['faixas']['Row'];

type VersaoFaixaBanco =
  Database['public']['Tables']['versoes_faixa']['Row'];

const URL_PUBLICA_CAPAS =
  'https://pub-b1d515cf725c469ea3d43e6cdc3546a7.r2.dev';

const LIMITE_CAPA_BYTES = 5_000_000;

const TIPOS_CAPA_PERMITIDOS = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
]);

export const TIPO_PUBLICO_ENVIO = 'Envio';

interface RespostaAlbum {
  album: AlbumBanco;
}

interface RespostaExclusaoAlbum {
  excluido: boolean;
}

export interface CadastroAlbum {
  projeto_id: string;
  nome: string;
  observacoes: string | null;
}

export interface CadastroEnvio extends CadastroAlbum {
  versoes_ids: readonly string[];
}

export interface ConfiguracaoPublicacaoAlbum {
  tipo_publico: string | null;
  descricao_publica: string | null;
  reproducao_publica: boolean;
  download_publico: boolean;
}

export type ProjetoAlbum = Pick<
  ProjetoBanco,
  'id' | 'nome' | 'tipo' | 'capa_caminho'
>;

export type FaixaAlbum = Pick<
  FaixaBanco,
  'id' | 'projeto_id' | 'titulo'
>;

export type VersaoAlbum = Pick<
  VersaoFaixaBanco,
  | 'id'
  | 'faixa_id'
  | 'versao'
  | 'nome_arquivo'
  | 'tamanho_bytes'
  | 'tipo_mime'
  | 'confirmado_em'
  | 'criado_em'
> & {
  faixa: FaixaAlbum;
};

export interface AlbumFaixaCompleta
  extends AlbumFaixaBanco {
  versao: VersaoAlbum;
}

export interface AlbumCompleto extends AlbumBanco {
  projeto: ProjetoAlbum;
  faixas: AlbumFaixaCompleta[];
}

export interface FaixaDisponivelAlbum {
  faixa: FaixaAlbum;
  versoes: VersaoAlbum[];
}

@Injectable({
  providedIn: 'root',
})
export class DadosAlbuns {
  private readonly clienteSupabase =
    inject(ClienteSupabase);

  private readonly listaInterna =
    signal<AlbumCompleto[]>([]);

  private readonly versoesInternas =
    signal<VersaoAlbum[]>([]);

  private readonly carregandoInterno = signal(false);
  private readonly erroInterno = signal<string | null>(null);
  private readonly limiteTrabalhosCasaInterno =
    signal(2);

  readonly albuns = this.listaInterna.asReadonly();

  readonly versoesDisponiveis =
    this.versoesInternas.asReadonly();

  readonly carregando =
    this.carregandoInterno.asReadonly();

  readonly erro = this.erroInterno.asReadonly();

  readonly limiteTrabalhosCasa =
    this.limiteTrabalhosCasaInterno.asReadonly();

  readonly totalAlbuns = computed(
    () => this.listaInterna().length,
  );

  readonly totalTrabalhosNaCasa = computed(
    () =>
      this.listaInterna().filter(
        (album) => album.publico_na_casa,
      ).length,
  );

  readonly podeAdicionarTrabalhoNaCasa = computed(
    () =>
      this.totalTrabalhosNaCasa() <
      this.limiteTrabalhosCasaInterno(),
  );

  async listar(): Promise<void> {
  this.carregandoInterno.set(true);
  this.erroInterno.set(null);

  try {
    const estudioId =
      await this.obterEstudioId();

    const [
      resultadoAlbuns,
      resultadoVersoes,
      resultadoLimiteCasa,
    ] = await Promise.all([
      this.clienteSupabase.cliente
        .from('albuns')
        .select(`
          id,
          estudio_id,
          projeto_id,
          nome,
          observacoes,
          capa_caminho,
          token_compartilhamento,
          tipo_publico,
          descricao_publica,
          publico_na_landing,
          publico_na_casa,
          selecionado_para_casa_em,
          reproducao_publica,
          download_publico,
          criado_em,
          atualizado_em,
          projeto:projetos_artisticos!albuns_projeto_id_fkey (
            id,
            nome,
            tipo,
            capa_caminho
          ),
          faixas:album_faixas!album_faixas_album_id_fkey (
            id,
            album_id,
            versao_id,
            ordem,
            criado_em,
            versao:versoes_faixa!album_faixas_versao_id_fkey (
              id,
              faixa_id,
              versao,
              nome_arquivo,
              tamanho_bytes,
              tipo_mime,
              confirmado_em,
              criado_em,
              faixa:faixas!versoes_faixa_faixa_estudio_fkey (
                id,
                projeto_id,
                titulo
              )
            )
          )
        `)
        .eq('estudio_id', estudioId)
        .order('criado_em', {
          ascending: false,
        }),

      this.clienteSupabase.cliente
        .from('versoes_faixa')
        .select(`
          id,
          faixa_id,
          versao,
          nome_arquivo,
          tamanho_bytes,
          tipo_mime,
          confirmado_em,
          criado_em,
          faixa:faixas!versoes_faixa_faixa_estudio_fkey (
            id,
            projeto_id,
            titulo
          )
        `)
        .eq('estudio_id', estudioId)
        .not('confirmado_em', 'is', null)
        .order('criado_em', {
          ascending: false,
        }),

      this.clienteSupabase.cliente.rpc(
        'obter_limite_trabalhos_casa',
      ),
    ]);

    if (resultadoAlbuns.error) {
      throw resultadoAlbuns.error;
    }

    if (resultadoVersoes.error) {
      throw resultadoVersoes.error;
    }

    if (resultadoLimiteCasa.error) {
      throw resultadoLimiteCasa.error;
    }

    const albuns =
      resultadoAlbuns.data as unknown as
        AlbumCompleto[];

    this.listaInterna.set(
      albuns.map((album) => ({
        ...album,
        faixas: [...album.faixas].sort(
          (primeira, segunda) =>
            primeira.ordem -
            segunda.ordem,
        ),
      })),
    );

    this.versoesInternas.set(
      resultadoVersoes.data as unknown as
        VersaoAlbum[],
    );

    this.limiteTrabalhosCasaInterno.set(
      resultadoLimiteCasa.data ?? 2,
    );
  } catch (erro) {
    this.erroInterno.set(
      this.obterMensagemErro(
        erro,
        'Não foi possível carregar os álbuns.',
      ),
    );
  } finally {
    this.carregandoInterno.set(false);
  }
}
  async cadastrar(
    dados: CadastroAlbum,
  ): Promise<AlbumBanco> {
    const estudioId = await this.obterEstudioId();
    const dadosNormalizados =
      this.normalizarCadastro(dados);

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('albuns')
        .insert({
          estudio_id: estudioId,
          projeto_id: dadosNormalizados.projeto_id,
          nome: dadosNormalizados.nome,
          observacoes: dadosNormalizados.observacoes,
        })
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async cadastrarEnvio(
    dados: CadastroEnvio,
  ): Promise<AlbumBanco> {
    const estudioId = await this.obterEstudioId();
    const dadosNormalizados =
      this.normalizarCadastro(dados);
    const versoesIds = [
      ...new Set(
        dados.versoes_ids
          .map((versaoId) => versaoId.trim())
          .filter(Boolean),
      ),
    ];

    if (versoesIds.length === 0) {
      throw new Error(
        'Selecione pelo menos um arquivo para montar o envio.',
      );
    }

    const versoes = versoesIds.map((versaoId) =>
      this.obterVersao(versaoId),
    );

    const { data: album, error: erroAlbum } =
      await this.clienteSupabase.cliente
        .from('albuns')
        .insert({
          estudio_id: estudioId,
          projeto_id: dadosNormalizados.projeto_id,
          nome: dadosNormalizados.nome,
          observacoes: dadosNormalizados.observacoes,
          tipo_publico: TIPO_PUBLICO_ENVIO,
        })
        .select()
        .single();

    if (erroAlbum || !album) {
      throw (
        erroAlbum ??
        new Error('O envio criado não foi retornado.')
      );
    }

    const itens = versoes.map((versao, indice) => ({
      album_id: album.id,
      versao_id: versao.id,
      ordem: indice + 1,
    }));

    const { error: erroItens } =
      await this.clienteSupabase.cliente
        .from('album_faixas')
        .insert(itens);

    if (erroItens) {
      await this.clienteSupabase.cliente
        .from('albuns')
        .delete()
        .eq('id', album.id)
        .eq('estudio_id', estudioId);

      throw erroItens;
    }

    await this.listar();

    return album;
  }

  async atualizarEnvio(
    albumId: string,
    dados: CadastroEnvio,
  ): Promise<AlbumBanco> {
    const estudioId = await this.obterEstudioId();
    const album = this.obterAlbum(albumId);
    const dadosNormalizados =
      this.normalizarCadastro(dados);
    const versoesIds = [
      ...new Set(
        dados.versoes_ids
          .map((versaoId) => versaoId.trim())
          .filter(Boolean),
      ),
    ];

    if (album.tipo_publico !== TIPO_PUBLICO_ENVIO) {
      throw new Error('O trabalho selecionado não é um envio.');
    }

    if (versoesIds.length === 0) {
      throw new Error(
        'Selecione pelo menos um arquivo para montar o envio.',
      );
    }

    const versoes = versoesIds.map((versaoId) =>
      this.obterVersao(versaoId),
    );
    const itensAtuaisPorVersao = new Map(
      album.faixas.map((item) => [item.versao_id, item]),
    );
    const versoesNovas = versoes.filter(
      (versao) => !itensAtuaisPorVersao.has(versao.id),
    );
    let itensNovos: AlbumFaixaBanco[] = [];

    if (versoesNovas.length > 0) {
      const { data, error } =
        await this.clienteSupabase.cliente
          .from('album_faixas')
          .insert(
            versoesNovas.map((versao, indice) => ({
              album_id: albumId,
              versao_id: versao.id,
              ordem: album.faixas.length + indice + 1,
            })),
          )
          .select();

      if (error) {
        throw error;
      }

      itensNovos = data ?? [];

      if (itensNovos.length !== versoesNovas.length) {
        throw new Error(
          'Nem todos os arquivos novos foram adicionados ao envio.',
        );
      }
    }

    const itensNovosPorVersao = new Map(
      itensNovos.map((item) => [item.versao_id, item]),
    );
    const itensOrdenados = versoes.map((versao, indice) => {
      const item =
        itensAtuaisPorVersao.get(versao.id) ??
        itensNovosPorVersao.get(versao.id);

      if (!item) {
        throw new Error(
          'Não foi possível organizar um dos arquivos do envio.',
        );
      }

      return {
        id: item.id,
        album_id: item.album_id,
        versao_id: item.versao_id,
        ordem: indice + 1,
        criado_em: item.criado_em,
      };
    });
    const { error: erroOrdem } =
      await this.clienteSupabase.cliente
        .from('album_faixas')
        .upsert(itensOrdenados, {
          onConflict: 'id',
        });

    if (erroOrdem) {
      if (itensNovos.length > 0) {
        await this.clienteSupabase.cliente
          .from('album_faixas')
          .delete()
          .in(
            'id',
            itensNovos.map((item) => item.id),
          );
      }

      throw erroOrdem;
    }

    const versoesMantidas = new Set(versoesIds);
    const itensRemovidosIds = album.faixas
      .filter((item) => !versoesMantidas.has(item.versao_id))
      .map((item) => item.id);

    if (itensRemovidosIds.length > 0) {
      const { error } =
        await this.clienteSupabase.cliente
          .from('album_faixas')
          .delete()
          .in('id', itensRemovidosIds);

      if (error) {
        throw error;
      }
    }

    const { data: envioAtualizado, error: erroEnvio } =
      await this.clienteSupabase.cliente
        .from('albuns')
        .update({
          projeto_id: dadosNormalizados.projeto_id,
          nome: dadosNormalizados.nome,
          observacoes: dadosNormalizados.observacoes,
          atualizado_em: new Date().toISOString(),
        })
        .eq('id', albumId)
        .eq('estudio_id', estudioId)
        .select()
        .single();

    if (erroEnvio || !envioAtualizado) {
      throw (
        erroEnvio ??
        new Error('O envio atualizado não foi retornado.')
      );
    }

    await this.listar();

    return envioAtualizado;
  }

  async atualizar(
    albumId: string,
    dados: CadastroAlbum,
  ): Promise<AlbumBanco> {
    const estudioId = await this.obterEstudioId();
    const albumAtual = this.obterAlbum(albumId);
    const dadosNormalizados =
      this.normalizarCadastro(dados);

    if (
      albumAtual.projeto_id !==
        dadosNormalizados.projeto_id &&
      albumAtual.faixas.length > 0
    ) {
      throw new Error(
        'Remova as faixas antes de trocar o projeto artístico.',
      );
    }

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('albuns')
        .update({
          projeto_id: dadosNormalizados.projeto_id,
          nome: dadosNormalizados.nome,
          observacoes: dadosNormalizados.observacoes,
          atualizado_em: new Date().toISOString(),
        })
        .eq('id', albumId)
        .eq('estudio_id', estudioId)
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }
async publicar(
  albumId: string,
  configuracao: ConfiguracaoPublicacaoAlbum,
): Promise<AlbumBanco> {
  const estudioId = await this.obterEstudioId();
  const album = this.obterAlbum(albumId);

  if (album.faixas.length === 0) {
    throw new Error(
      'Adicione pelo menos uma faixa antes de publicar.',
    );
  }

  const possuiVersaoInvalida =
    album.faixas.some(
      (item) =>
        !item.versao.confirmado_em,
    );

  if (possuiVersaoInvalida) {
    throw new Error(
      'O álbum possui uma versão que ainda não foi confirmada.',
    );
  }

  const { data, error } =
    await this.clienteSupabase.cliente
      .from('albuns')
      .update({
        tipo_publico:
          configuracao.tipo_publico?.trim() || null,
        descricao_publica:
          configuracao.descricao_publica?.trim() || null,
        publico_na_landing: true,
        reproducao_publica:
          configuracao.reproducao_publica,
        download_publico:
          configuracao.download_publico,
        atualizado_em:
          new Date().toISOString(),
      })
      .eq('id', albumId)
      .eq('estudio_id', estudioId)
      .select()
      .single();

  if (error) {
    throw error;
  }

  await this.listar();

  return data;
}

async despublicar(
  albumId: string,
): Promise<AlbumBanco> {
  const estudioId = await this.obterEstudioId();

  const { data, error } =
    await this.clienteSupabase.cliente
      .from('albuns')
      .update({
        publico_na_landing: false,
        reproducao_publica: false,
        download_publico: false,
        atualizado_em:
          new Date().toISOString(),
      })
      .eq('id', albumId)
      .eq('estudio_id', estudioId)
      .select()
      .single();

  if (error) {
    throw error;
  }

  await this.listar();

  return data;
}

async definirExibicaoNaCasa(
  albumId: string,
  exibir: boolean,
): Promise<void> {
  const { error } =
    await this.clienteSupabase.cliente.rpc(
      'definir_trabalho_na_casa',
      {
        trabalho_id: albumId,
        exibir,
      },
    );

  if (error) {
    throw error;
  }

  await this.listar();
}

  async renovarTokenCompartilhamento(
    albumId: string,
  ): Promise<string> {
    const estudioId = await this.obterEstudioId();
    const album = this.obterAlbum(albumId);

    if (album.faixas.length === 0) {
      throw new Error(
        'Adicione pelo menos uma faixa antes de gerar o link.',
      );
    }

    const novoToken = crypto.randomUUID();

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('albuns')
        .update({
          token_compartilhamento: novoToken,
          atualizado_em: new Date().toISOString(),
        })
        .eq('id', albumId)
        .eq('estudio_id', estudioId)
        .select('token_compartilhamento')
        .single();

    if (error) {
      throw error;
    }

    if (!data.token_compartilhamento) {
      throw new Error(
        'O novo link não foi confirmado.',
      );
    }

    await this.listar();

    return data.token_compartilhamento;
  }

  async desativarTokenCompartilhamento(
    albumId: string,
  ): Promise<void> {
    const estudioId = await this.obterEstudioId();

    const { error } =
      await this.clienteSupabase.cliente
        .from('albuns')
        .update({
          token_compartilhamento: null,
          atualizado_em: new Date().toISOString(),
        })
        .eq('id', albumId)
        .eq('estudio_id', estudioId)
        .select('id')
        .single();

    if (error) {
      throw error;
    }

    await this.listar();
  }

  async excluir(albumId: string): Promise<void> {
    const { data, error } =
      await this.clienteSupabase.cliente.functions.invoke(
        'gerenciar-capa-album',
        {
          body: {
            acao: 'excluir_album',
            album_id: albumId,
          },
        },
      );

    if (error) {
      throw await this.criarErroFuncao(
        error,
        'Não foi possível excluir o álbum.',
      );
    }

    const resposta = data as
      | RespostaExclusaoAlbum
      | null;

    if (!resposta?.excluido) {
      throw new Error(
        'A confirmação da exclusão do álbum é inválida.',
      );
    }

    this.listaInterna.update((albuns) =>
      albuns.filter((album) => album.id !== albumId),
    );
  }

  async enviarCapa(
    albumId: string,
    arquivo: File,
  ): Promise<AlbumBanco> {
    this.validarCapa(arquivo);

    const formulario = new FormData();

    formulario.append('album_id', albumId);
    formulario.append('arquivo', arquivo, arquivo.name);

    const { data, error } =
      await this.clienteSupabase.cliente.functions.invoke(
        'gerenciar-capa-album',
        {
          body: formulario,
        },
      );

    if (error) {
      throw await this.criarErroFuncao(
        error,
        'Não foi possível enviar a capa do álbum.',
      );
    }

    const resposta = data as RespostaAlbum | null;

    if (!resposta?.album) {
      throw new Error(
        'A resposta da capa do álbum é inválida.',
      );
    }

    await this.listar();

    return resposta.album;
  }

  async removerCapa(
    albumId: string,
  ): Promise<AlbumBanco> {
    const { data, error } =
      await this.clienteSupabase.cliente.functions.invoke(
        'gerenciar-capa-album',
        {
          body: {
            acao: 'remover',
            album_id: albumId,
          },
        },
      );

    if (error) {
      throw await this.criarErroFuncao(
        error,
        'Não foi possível remover a capa do álbum.',
      );
    }

    const resposta = data as RespostaAlbum | null;

    if (!resposta?.album) {
      throw new Error(
        'A resposta da remoção da capa é inválida.',
      );
    }

    await this.listar();

    return resposta.album;
  }

  capaUrl(album: AlbumCompleto): string | null {
    const caminho =
      album.capa_caminho ??
      album.projeto.capa_caminho;

    if (!caminho) {
      return null;
    }

    const caminhoCodificado = caminho
      .split('/')
      .map((parte) => encodeURIComponent(parte))
      .join('/');

    return `${URL_PUBLICA_CAPAS}/${caminhoCodificado}`;
  }

  async adicionarFaixa(
    albumId: string,
    faixaId: string,
    versaoId?: string,
  ): Promise<AlbumFaixaBanco> {
    const album = this.obterAlbum(albumId);
    const versao = versaoId
      ? this.obterVersao(versaoId)
      : this.versaoMaisRecenteDaFaixa(faixaId);

    if (!versao) {
      throw new Error(
        'A faixa ainda não possui uma versão enviada.',
      );
    }

    if (versao.faixa_id !== faixaId) {
      throw new Error(
        'A versão selecionada não pertence à faixa.',
      );
    }

    const maiorOrdem = album.faixas.reduce(
      (maior, item) => Math.max(maior, item.ordem),
      0,
    );

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('album_faixas')
        .insert({
          album_id: albumId,
          versao_id: versao.id,
          ordem: maiorOrdem + 1,
        })
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async trocarVersao(
    albumFaixaId: string,
    versaoId: string,
  ): Promise<AlbumFaixaBanco> {
    const itemAtual = this.obterItem(albumFaixaId);
    const novaVersao = this.obterVersao(versaoId);

    if (
      itemAtual.versao.faixa_id !==
      novaVersao.faixa_id
    ) {
      throw new Error(
        'Escolha outra versão da mesma faixa.',
      );
    }

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('album_faixas')
        .update({
          versao_id: novaVersao.id,
        })
        .eq('id', albumFaixaId)
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async removerFaixa(
    albumFaixaId: string,
  ): Promise<void> {
    const { error } =
      await this.clienteSupabase.cliente
        .from('album_faixas')
        .delete()
        .eq('id', albumFaixaId);

    if (error) {
      throw error;
    }

    await this.listar();
  }

  async reordenar(
    albumId: string,
    itensEmOrdem: readonly string[],
  ): Promise<void> {
    const album = this.obterAlbum(albumId);
    const idsUnicos = new Set(itensEmOrdem);

    if (
      itensEmOrdem.length !== album.faixas.length ||
      idsUnicos.size !== album.faixas.length
    ) {
      throw new Error(
        'A nova ordem não contém todas as faixas do álbum.',
      );
    }

    const itensAtualizados = itensEmOrdem.map(
      (itemId, indice) => {
        const item = album.faixas.find(
          (faixa) => faixa.id === itemId,
        );

        if (!item) {
          throw new Error(
            'A nova ordem contém uma faixa inválida.',
          );
        }

        return {
          id: item.id,
          album_id: item.album_id,
          versao_id: item.versao_id,
          ordem: indice + 1,
          criado_em: item.criado_em,
        };
      },
    );

    if (itensAtualizados.length === 0) {
      return;
    }

    const { error } =
      await this.clienteSupabase.cliente
        .from('album_faixas')
        .upsert(itensAtualizados, {
          onConflict: 'id',
        });

    if (error) {
      throw error;
    }

    await this.listar();
  }

  faixasDisponiveisDoProjeto(
    projetoId: string,
  ): FaixaDisponivelAlbum[] {
    const faixas = new Map<
      string,
      FaixaDisponivelAlbum
    >();

    for (const versao of this.versoesInternas()) {
      if (versao.faixa.projeto_id !== projetoId) {
        continue;
      }

      const faixaExistente = faixas.get(
        versao.faixa_id,
      );

      if (faixaExistente) {
        faixaExistente.versoes.push(versao);
        continue;
      }

      faixas.set(versao.faixa_id, {
        faixa: versao.faixa,
        versoes: [versao],
      });
    }

    return [...faixas.values()].sort((a, b) =>
      a.faixa.titulo.localeCompare(
        b.faixa.titulo,
        'pt-BR',
      ),
    );
  }

  versoesDaFaixa(faixaId: string): VersaoAlbum[] {
    return this.versoesInternas().filter(
      (versao) => versao.faixa_id === faixaId,
    );
  }

  versaoMaisRecenteDaFaixa(
    faixaId: string,
  ): VersaoAlbum | undefined {
    return this.versoesDaFaixa(faixaId)[0];
  }

  private obterAlbum(albumId: string): AlbumCompleto {
    const album = this.listaInterna().find(
      (item) => item.id === albumId,
    );

    if (!album) {
      throw new Error('Álbum não encontrado.');
    }

    return album;
  }

  private obterItem(
    albumFaixaId: string,
  ): AlbumFaixaCompleta {
    const item = this.listaInterna()
      .flatMap((album) => album.faixas)
      .find((faixa) => faixa.id === albumFaixaId);

    if (!item) {
      throw new Error(
        'Faixa do álbum não encontrada.',
      );
    }

    return item;
  }

  private obterVersao(versaoId: string): VersaoAlbum {
    const versao = this.versoesInternas().find(
      (item) => item.id === versaoId,
    );

    if (!versao) {
      throw new Error(
        'Versão da faixa não encontrada.',
      );
    }

    return versao;
  }

  private normalizarCadastro(
    dados: CadastroAlbum,
  ): CadastroAlbum {
    const nome = dados.nome.trim();

    if (!nome) {
      throw new Error('Informe o nome do álbum.');
    }

    return {
      projeto_id: dados.projeto_id,
      nome,
      observacoes:
        dados.observacoes?.trim() || null,
    };
  }

  private validarCapa(arquivo: File): void {
    if (arquivo.size <= 0) {
      throw new Error(
        'Selecione uma imagem válida.',
      );
    }

    if (arquivo.size > LIMITE_CAPA_BYTES) {
      throw new Error(
        'A capa deve ter no máximo 5 MB.',
      );
    }

    if (!TIPOS_CAPA_PERMITIDOS.has(arquivo.type)) {
      throw new Error(
        'Use uma imagem PNG, JPEG ou WebP.',
      );
    }
  }

  private async criarErroFuncao(
    erro: unknown,
    mensagemPadrao: string,
  ): Promise<Error> {
    const mensagemResposta =
      await this.obterMensagemRespostaFuncao(erro);

    return new Error(
      mensagemResposta ??
        this.obterMensagemErro(erro, mensagemPadrao),
    );
  }

  private async obterMensagemRespostaFuncao(
    erro: unknown,
  ): Promise<string | null> {
    if (
      typeof erro !== 'object' ||
      erro === null ||
      !('context' in erro) ||
      !(erro.context instanceof Response)
    ) {
      return null;
    }

    try {
      const corpo = (await erro.context.clone().json()) as {
        erro?: unknown;
      };

      return typeof corpo.erro === 'string'
        ? corpo.erro
        : null;
    } catch {
      return null;
    }
  }

  private async obterEstudioId(): Promise<string> {
    const {
      data: { user },
      error,
    } =
      await this.clienteSupabase.cliente.auth.getUser();

    if (error || !user) {
      throw new Error('Usuário não autenticado.');
    }

    return user.id;
  }

  private obterMensagemErro(
    erro: unknown,
    mensagemPadrao: string,
  ): string {
    if (
      typeof erro === 'object' &&
      erro !== null &&
      'message' in erro
    ) {
      return String(erro.message);
    }

    return mensagemPadrao;
  }
}
