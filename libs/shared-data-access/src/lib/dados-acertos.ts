import {
  computed,
  inject,
  Injectable,
  signal,
} from '@angular/core';
import { ClienteSupabase } from './cliente-supabase';
import type { Database } from './tipos-banco';

type CobrancaBanco =
  Database['public']['Tables']['cobrancas']['Row'];

type CobrancaItemBanco =
  Database['public']['Tables']['cobranca_itens']['Row'];

type PagamentoBanco =
  Database['public']['Tables']['pagamentos']['Row'];

type ContatoBanco =
  Database['public']['Tables']['contatos']['Row'];

export type ContatoAcerto = Pick<
  ContatoBanco,
  'id' | 'nome' | 'email' | 'telefone'
>;

export type PagamentoAcerto =
  PagamentoBanco & {
    pagador: ContatoAcerto | null;
  };

type CobrancaConsulta =
  CobrancaBanco & {
    contato: ContatoAcerto;
    itens: CobrancaItemBanco[];
    pagamentos: PagamentoAcerto[];
  };

export type AcertoCompleto =
  CobrancaConsulta & {
    valor_total: number;
    valor_pago: number;
    saldo: number;
  };

export interface CadastroAcerto {
  contato_id: string;
  vencimento_em: string | null;
  observacoes: string | null;
}

export interface AtualizacaoAcerto {
  contato_id: string;
  vencimento_em: string | null;
  fechada_em: string | null;
  observacoes: string | null;
}

export interface CadastroItemAcerto {
  agendamento_id: string | null;
  descricao: string;
  quantidade: number;
  valor_unitario: number;
}

export interface CadastroPagamentoAcerto {
  pagador_contato_id: string | null;
  valor: number;
  forma_pagamento: string | null;
  pago_em: string;
  observacoes: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class DadosAcertos {
  private readonly clienteSupabase =
    inject(ClienteSupabase);

  private readonly listaInterna =
    signal<AcertoCompleto[]>([]);

  private readonly carregandoInterno =
    signal(false);

  private readonly erroInterno =
    signal<string | null>(null);

  readonly acertos =
    this.listaInterna.asReadonly();

  readonly carregando =
    this.carregandoInterno.asReadonly();

  readonly erro =
    this.erroInterno.asReadonly();

  readonly totalAReceber = computed(() =>
    this.listaInterna().reduce(
      (total, acerto) =>
        total + Math.max(acerto.saldo, 0),
      0,
    ),
  );

  readonly totalRecebido = computed(() =>
    this.listaInterna().reduce(
      (total, acerto) =>
        total + acerto.valor_pago,
      0,
    ),
  );

  readonly totalEmCredito = computed(() =>
    this.listaInterna().reduce(
      (total, acerto) =>
        total +
        Math.max(acerto.saldo * -1, 0),
      0,
    ),
  );

  async listar(): Promise<void> {
    this.carregandoInterno.set(true);
    this.erroInterno.set(null);

    try {
      const estudioId =
        await this.obterEstudioId();

      const { data, error } =
        await this.clienteSupabase.cliente
          .from('cobrancas')
          .select(`
            id,
            estudio_id,
            contato_id,
            vencimento_em,
            fechada_em,
            observacoes,
            criado_em,
            atualizado_em,
            contato:contatos!cobrancas_contato_estudio_fkey (
              id,
              nome,
              email,
              telefone
            ),
            itens:cobranca_itens (
              id,
              estudio_id,
              cobranca_id,
              agendamento_id,
              descricao,
              quantidade,
              valor_unitario,
              criado_em,
              atualizado_em
            ),
            pagamentos (
              id,
              estudio_id,
              cobranca_id,
              pagador_contato_id,
              valor,
              forma_pagamento,
              pago_em,
              observacoes,
              criado_em,
              pagador:contatos!pagamentos_pagador_estudio_fkey (
                id,
                nome,
                email,
                telefone
              )
            )
          `)
          .eq('estudio_id', estudioId)
          .order('criado_em', {
            ascending: false,
          });

      if (error) {
        throw error;
      }

      const cobrancas =
        data as unknown as CobrancaConsulta[];

      this.listaInterna.set(
        cobrancas.map((cobranca) =>
          this.calcularAcerto(cobranca),
        ),
      );
    } catch (erro) {
      this.erroInterno.set(
        this.obterMensagemErro(
          erro,
          'Não foi possível carregar os acertos.',
        ),
      );
    } finally {
      this.carregandoInterno.set(false);
    }
  }

  async criarDoAgendamento(
    agendamentoId: string,
  ): Promise<string> {
    const { data, error } =
      await this.clienteSupabase.cliente.rpc(
        'criar_cobranca_agendamento',
        {
          p_agendamento_id: agendamentoId,
        },
      );

    if (error) {
      throw error;
    }

    if (typeof data !== 'string') {
      throw new Error(
        'A resposta de criação do acerto é inválida.',
      );
    }

    await this.listar();

    return data;
  }

  async criarManual(
    dados: CadastroAcerto,
  ): Promise<CobrancaBanco> {
    const estudioId =
      await this.obterEstudioId();

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('cobrancas')
        .insert({
          estudio_id: estudioId,
          contato_id: dados.contato_id,
          vencimento_em:
            dados.vencimento_em,
          observacoes:
            this.normalizarTextoOpcional(
              dados.observacoes,
            ),
        })
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async atualizarAcerto(
    acertoId: string,
    dados: AtualizacaoAcerto,
  ): Promise<CobrancaBanco> {
    const estudioId =
      await this.obterEstudioId();

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('cobrancas')
        .update({
          contato_id: dados.contato_id,
          vencimento_em:
            dados.vencimento_em,
          fechada_em: dados.fechada_em,
          observacoes:
            this.normalizarTextoOpcional(
              dados.observacoes,
            ),
        })
        .eq('id', acertoId)
        .eq('estudio_id', estudioId)
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async adicionarItem(
    acertoId: string,
    dados: CadastroItemAcerto,
  ): Promise<CobrancaItemBanco> {
    const estudioId =
      await this.obterEstudioId();

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('cobranca_itens')
        .insert({
          estudio_id: estudioId,
          cobranca_id: acertoId,
          agendamento_id:
            dados.agendamento_id,
          descricao: dados.descricao.trim(),
          quantidade: dados.quantidade,
          valor_unitario:
            dados.valor_unitario,
        })
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async atualizarItem(
    itemId: string,
    dados: CadastroItemAcerto,
  ): Promise<CobrancaItemBanco> {
    const estudioId =
      await this.obterEstudioId();

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('cobranca_itens')
        .update({
          agendamento_id:
            dados.agendamento_id,
          descricao: dados.descricao.trim(),
          quantidade: dados.quantidade,
          valor_unitario:
            dados.valor_unitario,
        })
        .eq('id', itemId)
        .eq('estudio_id', estudioId)
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async excluirItem(
    itemId: string,
  ): Promise<void> {
    const estudioId =
      await this.obterEstudioId();

    const { error } =
      await this.clienteSupabase.cliente
        .from('cobranca_itens')
        .delete()
        .eq('id', itemId)
        .eq('estudio_id', estudioId);

    if (error) {
      throw error;
    }

    await this.listar();
  }

  async registrarPagamento(
    acertoId: string,
    dados: CadastroPagamentoAcerto,
  ): Promise<PagamentoBanco> {
    const estudioId =
      await this.obterEstudioId();

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('pagamentos')
        .insert({
          estudio_id: estudioId,
          cobranca_id: acertoId,
          pagador_contato_id:
            dados.pagador_contato_id,
          valor: dados.valor,
          forma_pagamento:
            this.normalizarTextoOpcional(
              dados.forma_pagamento,
            ),
          pago_em: dados.pago_em,
          observacoes:
            this.normalizarTextoOpcional(
              dados.observacoes,
            ),
        })
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async atualizarPagamento(
    pagamentoId: string,
    dados: CadastroPagamentoAcerto,
  ): Promise<PagamentoBanco> {
    const estudioId =
      await this.obterEstudioId();

    const { data, error } =
      await this.clienteSupabase.cliente
        .from('pagamentos')
        .update({
          pagador_contato_id:
            dados.pagador_contato_id,
          valor: dados.valor,
          forma_pagamento:
            this.normalizarTextoOpcional(
              dados.forma_pagamento,
            ),
          pago_em: dados.pago_em,
          observacoes:
            this.normalizarTextoOpcional(
              dados.observacoes,
            ),
        })
        .eq('id', pagamentoId)
        .eq('estudio_id', estudioId)
        .select()
        .single();

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async excluirPagamento(
    pagamentoId: string,
  ): Promise<void> {
    const estudioId =
      await this.obterEstudioId();

    const { error } =
      await this.clienteSupabase.cliente
        .from('pagamentos')
        .delete()
        .eq('id', pagamentoId)
        .eq('estudio_id', estudioId);

    if (error) {
      throw error;
    }

    await this.listar();
  }

  private calcularAcerto(
    cobranca: CobrancaConsulta,
  ): AcertoCompleto {
    const itens = [...cobranca.itens].sort(
      (primeiro, segundo) =>
        primeiro.criado_em.localeCompare(
          segundo.criado_em,
        ),
    );

    const pagamentos = [
      ...cobranca.pagamentos,
    ].sort(
      (primeiro, segundo) =>
        segundo.pago_em.localeCompare(
          primeiro.pago_em,
        ),
    );

    const valorTotal = this.arredondarValor(
      itens.reduce(
        (total, item) =>
          total +
          Number(item.quantidade) *
            Number(item.valor_unitario),
        0,
      ),
    );

    const valorPago = this.arredondarValor(
      pagamentos.reduce(
        (total, pagamento) =>
          total + Number(pagamento.valor),
        0,
      ),
    );

    return {
      ...cobranca,
      itens,
      pagamentos,
      valor_total: valorTotal,
      valor_pago: valorPago,
      saldo: this.arredondarValor(
        valorTotal - valorPago,
      ),
    };
  }

  private arredondarValor(
    valor: number,
  ): number {
    return Math.round(valor * 100) / 100;
  }

  private normalizarTextoOpcional(
    valor: string | null,
  ): string | null {
    const texto = valor?.trim();

    return texto ? texto : null;
  }

  private async obterEstudioId(): Promise<string> {
    const {
      data: { user },
      error,
    } =
      await this.clienteSupabase.cliente.auth.getUser();

    if (error || !user) {
      throw new Error(
        'Usuário não autenticado.',
      );
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
