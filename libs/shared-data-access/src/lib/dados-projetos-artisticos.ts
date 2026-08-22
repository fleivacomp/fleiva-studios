import { inject, Injectable, signal } from '@angular/core';
import { ClienteSupabase } from './cliente-supabase';
import type { Database } from './tipos-banco';

type ProjetoBanco =
  Database['public']['Tables']['projetos_artisticos']['Row'];

type MembroProjetoBanco =
  Database['public']['Tables']['membros_projeto']['Row'];

type ContatoBanco =
  Database['public']['Tables']['contatos']['Row'];

const URL_PUBLICA_IMAGENS =
  'https://pub-b1d515cf725c469ea3d43e6cdc3546a7.r2.dev';

const LIMITE_CAPA_BYTES = 5_000_000;

const TIPOS_CAPA_PERMITIDOS = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
]);

export interface CadastroProjetoArtistico {
  nome: string;
  tipo: string;
}

export interface CadastroMembroProjeto {
  contato_id: string;
  papel: string;
  ativo: boolean;
}

export interface MembroProjetoCompleto
  extends MembroProjetoBanco {
  contato: Pick<
    ContatoBanco,
    'id' | 'nome' | 'email' | 'telefone'
  >;
}

export interface ProjetoArtisticoCompleto
  extends ProjetoBanco {
  membros: MembroProjetoCompleto[];
}

interface RespostaProjeto {
  projeto: ProjetoBanco;
}

interface RespostaExclusao {
  excluido: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DadosProjetosArtisticos {
  private readonly clienteSupabase =
    inject(ClienteSupabase);

  private readonly listaInterna =
    signal<ProjetoArtisticoCompleto[]>([]);

  private readonly carregandoInterno = signal(false);
  private readonly erroInterno =
    signal<string | null>(null);

  readonly projetos = this.listaInterna.asReadonly();
  readonly carregando =
    this.carregandoInterno.asReadonly();
  readonly erro = this.erroInterno.asReadonly();

  async listar(): Promise<void> {
    this.carregandoInterno.set(true);
    this.erroInterno.set(null);

    try {
      const estudioId = await this.obterEstudioId();

      const { data, error } =
        await this.clienteSupabase.cliente
          .from('projetos_artisticos')
          .select(`
            id,
            estudio_id,
            nome,
            tipo,
            capa_caminho,
            criado_em,
            atualizado_em,
            membros:membros_projeto (
              id,
              estudio_id,
              projeto_id,
              contato_id,
              papel,
              ativo,
              criado_em,
              atualizado_em,
              contato:contatos (
                id,
                nome,
                email,
                telefone
              )
            )
          `)
          .eq('estudio_id', estudioId)
          .order('nome');

      if (error) {
        throw error;
      }

      this.listaInterna.set(
        data as unknown as ProjetoArtisticoCompleto[],
      );
    } catch (erro) {
      this.erroInterno.set(
        this.obterMensagemErro(
          erro,
          'Não foi possível carregar os projetos artísticos.',
        ),
      );
    } finally {
      this.carregandoInterno.set(false);
    }
  }

  async cadastrarProjeto(
    dados: CadastroProjetoArtistico,
  ): Promise<ProjetoBanco> {
    const estudioId = await this.obterEstudioId();

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('projetos_artisticos')
        .insert({
          estudio_id: estudioId,
          nome: dados.nome.trim(),
          tipo: dados.tipo.trim(),
        })
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async atualizarProjeto(
    projetoId: string,
    dados: CadastroProjetoArtistico,
  ): Promise<ProjetoBanco> {
    const estudioId = await this.obterEstudioId();

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('projetos_artisticos')
        .update({
          nome: dados.nome.trim(),
          tipo: dados.tipo.trim(),
        })
        .eq('id', projetoId)
        .eq('estudio_id', estudioId)
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async excluirProjeto(
    projetoId: string,
  ): Promise<void> {
    const { data, error } =
      await this.clienteSupabase.cliente.functions.invoke(
        'gerenciar-capa-projeto',
        {
          body: {
            acao: 'excluir_projeto',
            projeto_id: projetoId,
          },
        },
      );

    if (error) {
      throw await this.criarErroFuncao(
        error,
        'Não foi possível excluir o projeto.',
      );
    }

    const resposta = data as
      | RespostaExclusao
      | null;

    if (!resposta?.excluido) {
      throw new Error(
        'A confirmação de exclusão do projeto é inválida.',
      );
    }

    this.listaInterna.update((projetos) =>
      projetos.filter(
        (projeto) => projeto.id !== projetoId,
      ),
    );
  }

  async enviarCapa(
    projetoId: string,
    arquivo: File,
  ): Promise<ProjetoBanco> {
    this.validarCapa(arquivo);

    const formulario = new FormData();

    formulario.append('projeto_id', projetoId);
    formulario.append('arquivo', arquivo);

    const { data, error } =
      await this.clienteSupabase.cliente.functions.invoke(
        'gerenciar-capa-projeto',
        {
          body: formulario,
        },
      );

    if (error) {
      throw await this.criarErroFuncao(
        error,
        'Não foi possível enviar a capa.',
      );
    }

    const resposta = data as RespostaProjeto | null;

    if (!resposta?.projeto) {
      throw new Error(
        'A resposta do envio da capa é inválida.',
      );
    }

    await this.listar();

    return resposta.projeto;
  }

  async removerCapa(
    projetoId: string,
  ): Promise<ProjetoBanco> {
    const { data, error } =
      await this.clienteSupabase.cliente.functions.invoke(
        'gerenciar-capa-projeto',
        {
          body: {
            acao: 'remover',
            projeto_id: projetoId,
          },
        },
      );

    if (error) {
      throw await this.criarErroFuncao(
        error,
        'Não foi possível remover a capa.',
      );
    }

    const resposta = data as RespostaProjeto | null;

    if (!resposta?.projeto) {
      throw new Error(
        'A resposta da remoção da capa é inválida.',
      );
    }

    await this.listar();

    return resposta.projeto;
  }

  capaUrl(
    projeto: Pick<ProjetoBanco, 'capa_caminho'>,
  ): string | null {
    if (!projeto.capa_caminho) {
      return null;
    }

    const caminhoSeguro = projeto.capa_caminho
      .split('/')
      .map((parte) => encodeURIComponent(parte))
      .join('/');

    return `${URL_PUBLICA_IMAGENS}/${caminhoSeguro}`;
  }

  async adicionarMembro(
    projetoId: string,
    dados: CadastroMembroProjeto,
  ): Promise<MembroProjetoBanco> {
    const estudioId = await this.obterEstudioId();

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('membros_projeto')
        .insert({
          estudio_id: estudioId,
          projeto_id: projetoId,
          contato_id: dados.contato_id,
          papel: dados.papel.trim(),
          ativo: dados.ativo,
        })
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async atualizarMembro(
    membroId: string,
    dados: CadastroMembroProjeto,
  ): Promise<MembroProjetoBanco> {
    const estudioId = await this.obterEstudioId();

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('membros_projeto')
        .update({
          contato_id: dados.contato_id,
          papel: dados.papel.trim(),
          ativo: dados.ativo,
        })
        .eq('id', membroId)
        .eq('estudio_id', estudioId)
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async removerMembro(
    membroId: string,
  ): Promise<void> {
    const estudioId = await this.obterEstudioId();

    const { error } =
      await this.clienteSupabase.cliente
        .from('membros_projeto')
        .delete()
        .eq('id', membroId)
        .eq('estudio_id', estudioId);

    if (error) {
      throw error;
    }

    await this.listar();
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
        'Use uma imagem JPEG, PNG ou WebP.',
      );
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

  private async criarErroFuncao(
    erro: unknown,
    mensagemPadrao: string,
  ): Promise<Error> {
    const mensagemResposta =
      await this.obterMensagemRespostaFuncao(erro);

    return new Error(
      mensagemResposta ??
        this.obterMensagemErro(
          erro,
          mensagemPadrao,
        ),
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
      const corpo =
        (await erro.context.clone().json()) as {
          erro?: unknown;
        };

      return typeof corpo.erro === 'string'
        ? corpo.erro
        : null;
    } catch {
      return null;
    }
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
