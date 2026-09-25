import { inject, Injectable, signal } from '@angular/core';

import { ClienteSupabase } from './cliente-supabase';

import type { Database } from './tipos-banco';

type FaixaBanco =

  Database['public']['Tables']['faixas']['Row'];

type AtualizacaoFaixaBanco =

  Database['public']['Tables']['faixas']['Update'];

type ProjetoBanco =

  Database['public']['Tables']['projetos_artisticos']['Row'];

export type StatusProducaoFaixa =

  Database['public']['Enums']['status_producao_faixa'];

export type ProjetoFaixa = Pick<

  ProjetoBanco,

  'id' | 'nome' | 'tipo' | 'capa_caminho'

>;

export type FaixaCompleta = FaixaBanco & {

  versao_principal_id: string | null;

  projeto: ProjetoFaixa;

};

export interface CadastroFaixa {

  projeto_id: string;

  titulo: string;

  bpm: number | null;

  tom: string | null;

  link_externo_audio: string | null;

  observacoes: string | null;

  status_producao: StatusProducaoFaixa;

}

const URL_PUBLICA_IMAGENS =

  'https://pub-b1d515cf725c469ea3d43e6cdc3546a7.r2.dev';

@Injectable({

  providedIn: 'root',

})

export class DadosFaixas {

  private readonly clienteSupabase = inject(ClienteSupabase);

  private readonly listaInterna = signal<FaixaCompleta[]>([]);

  private readonly projetosInternos = signal<ProjetoFaixa[]>([]);

  private readonly carregandoInterno = signal(false);

  private readonly erroInterno = signal<string | null>(null);

  readonly faixas = this.listaInterna.asReadonly();

  readonly projetos = this.projetosInternos.asReadonly();

  readonly carregando = this.carregandoInterno.asReadonly();

  readonly erro = this.erroInterno.asReadonly();

 async listar(): Promise<void> {

  this.carregandoInterno.set(true);

  this.erroInterno.set(null);

  try {

    const {

      data: { user },

      error: erroUsuario,

    } = await this.clienteSupabase.cliente.auth.getUser();

    if (erroUsuario || !user) {

      throw new Error('Usuário não autenticado.');

    }

    const { data: estudio } =

      await this.clienteSupabase.cliente

        .from('estudios')

        .select('id')

        .eq('id', user.id)

        .maybeSingle();

        console.log('ESTUDIO ENCONTRADO:', estudio);

    const consultaFaixas =

  this.clienteSupabase.cliente

    .from('faixas')

    .select(`

      id,

      estudio_id,

      projeto_id,

      titulo,

      bpm,

      tom,

      link_externo_audio,

      observacoes,

      status_producao,

      versao_principal_id,

      criado_em,

      atualizado_em,

      projeto:projetos_artisticos (

        id,

        nome,

        tipo,

        capa_caminho

      )

    `)

    .order('titulo');

    const consultaProjetos =

      this.clienteSupabase.cliente

        .from('projetos_artisticos')

        .select(`

          id,

          nome,

          tipo,

          capa_caminho

        `)

        .order('nome');

    console.log('USUARIO ANGULAR:', user.id, user.email);

   const [
  resultadoFaixas,
  resultadoProjetos,
] = await Promise.all([
  consultaFaixas,
  estudio
    ? consultaProjetos.eq('estudio_id', estudio.id)
    : consultaProjetos,
]);

    console.log('RESULTADO FAIXAS:', resultadoFaixas);

    console.log('RESULTADO PROJETOS:', resultadoProjetos);

    const testeDireto =

      await this.clienteSupabase.cliente

        .from('faixas')

        .select('id, titulo, projeto_id');

    console.log('TESTE DIRETO FAIXAS:', testeDireto);

    const testeCampos =

      await this.clienteSupabase.cliente

        .from('faixas')

        .select(`

      id,

      estudio_id,

      projeto_id,

      titulo,

      bpm,

      tom,

      link_externo_audio,

      observacoes,

      status_producao,

      versao_principal_id,

      criado_em,

      atualizado_em

    `);

    console.log('TESTE CAMPOS FAIXAS:', testeCampos);

    const testeEstudio =

      await this.clienteSupabase.cliente

        .from('faixas')

        .select('id, titulo, projeto_id, estudio_id')

        .eq(

          'estudio_id',

          '17fc5c2a-4880-41f2-9c64-e12b06439c7d',

        );

    console.log('TESTE ESTUDIO CONTATO:', testeEstudio);

    if (resultadoFaixas.error) {

      throw resultadoFaixas.error;

    }

    if (resultadoProjetos.error) {

      throw resultadoProjetos.error;

    }

    this.listaInterna.set(

      resultadoFaixas.data as unknown as FaixaCompleta[],

    );

    this.projetosInternos.set(

      resultadoProjetos.data as ProjetoFaixa[],

    );

  } catch (erro) {

    this.erroInterno.set(

      this.obterMensagemErro(erro),

    );

  } finally {

    this.carregandoInterno.set(false);

  }

}

 async cadastrar(dados: CadastroFaixa): Promise<FaixaBanco> {

  const { data: projeto, error: erroProjeto } =
    await this.clienteSupabase.cliente
      .from('projetos_artisticos')
      .select('estudio_id')
      .eq('id', dados.projeto_id)
      .single();

  if (erroProjeto || !projeto) {
    throw erroProjeto ?? new Error('Projeto não encontrado.');
  }

  const { data, error } = await this.clienteSupabase.cliente

    .from('faixas')

    .insert({

      estudio_id: projeto.estudio_id,
      projeto_id: dados.projeto_id,
      titulo: dados.titulo.trim(),
      bpm: dados.bpm,
      tom: dados.tom,
      link_externo_audio: dados.link_externo_audio,
      observacoes: dados.observacoes,
      status_producao: dados.status_producao,

    })

    .select()

    .single();

  if (error) {

    throw error;

  }

  await this.listar();

  return data;

}
async atualizar(

  faixaId: string,

  dados: CadastroFaixa,

): Promise<FaixaBanco> {

  const { data: faixa, error: erroFaixa } =

    await this.clienteSupabase.cliente

      .from('faixas')

      .select('estudio_id')

      .eq('id', faixaId)

      .single();

  if (erroFaixa || !faixa) {

    throw erroFaixa ?? new Error('Faixa não encontrada.');

  }

  const { data, error } = await this.clienteSupabase.cliente

    .from('faixas')

    .update({

      projeto_id: dados.projeto_id,

      titulo: dados.titulo.trim(),

      bpm: dados.bpm,

      tom: dados.tom,

      link_externo_audio: dados.link_externo_audio,

      observacoes: dados.observacoes,

      status_producao: dados.status_producao,

    })

    .eq('id', faixaId)

    .eq('estudio_id', faixa.estudio_id)

    .select()

    .single();

  if (error) {

    throw error;

  }

  await this.listar();

  return data;

}
async excluir(faixaId: string): Promise<void> {
  const { data: faixa, error: erroFaixa } =
    await this.clienteSupabase.cliente
      .from('faixas')
      .select('estudio_id')
      .eq('id', faixaId)
      .single();

  if (erroFaixa || !faixa) {
    throw erroFaixa ?? new Error('Faixa não encontrada.');
  }

  // 1) Remove arquivos do R2 primeiro — se falhar, a faixa continua
  //    no banco e dá pra tentar de novo.
  const { data: resultadoStorage, error: erroStorage } =
    await this.clienteSupabase.cliente.functions.invoke(
      'excluir-versoes-faixa',
      { body: { faixa_id: faixaId } },
    );

  if (erroStorage) {
    throw new Error('Não foi possível remover os arquivos da faixa.');
  }

  if (resultadoStorage?.falhas > 0) {
    console.warn(
      `Falha ao remover ${resultadoStorage.falhas} arquivo(s) do R2 para a faixa ${faixaId}.`,
    );
  }

  // 2) Apaga a faixa (cascade limpa versoes_faixa)
  const { error } = await this.clienteSupabase.cliente
    .from('faixas')
    .delete()
    .eq('id', faixaId)
    .eq('estudio_id', faixa.estudio_id);

  if (error) {
    throw error;
  }

  this.listaInterna.update((faixas) =>
    faixas.filter((faixa) => faixa.id !== faixaId),
  );
}
 async definirVersaoPrincipal(

  faixaId: string,

  versaoId: string,

): Promise<void> {

  const { data: faixa, error: erroFaixa } =

    await this.clienteSupabase.cliente

      .from('faixas')

      .select('estudio_id')

      .eq('id', faixaId)

      .single();

  if (erroFaixa || !faixa) {

    throw erroFaixa ?? new Error('Faixa não encontrada.');

  }

  const atualizacao: AtualizacaoFaixaBanco & {

    versao_principal_id: string;

  } = {

    versao_principal_id: versaoId,

  };

  const { error } = await this.clienteSupabase.cliente

    .from('faixas')

    .update(atualizacao)

    .eq('id', faixaId)

    .eq('estudio_id', faixa.estudio_id);

  if (error) {

    throw error;

  }

  await this.listar();

}
  capaUrl(projeto: Pick<ProjetoBanco, 'capa_caminho'>): string | null {

    if (!projeto.capa_caminho) {

      return null;

    }

    const caminhoSeguro = projeto.capa_caminho

      .split('/')

      .map((parte) => encodeURIComponent(parte))

      .join('/');

    return `${URL_PUBLICA_IMAGENS}/${caminhoSeguro}`;

  }

  private async obterEstudioId(): Promise<string> {

    const {

      data: { user },

      error,

    } = await this.clienteSupabase.cliente.auth.getUser();

    if (error || !user) {

      throw new Error('Usuário não autenticado.');

    }

    return user.id;

  }

  private obterMensagemErro(erro: unknown): string {

    if (

      typeof erro === 'object' &&

      erro !== null &&

      'message' in erro

    ) {

      return String(erro.message);

    }

    return 'Não foi possível carregar as faixas.';

  }

}
