import { inject, Injectable, signal } from '@angular/core';
import { ClienteSupabase } from './cliente-supabase';
import type { Database, Json } from './tipos-banco';

type AgendamentoBanco =
  Database['public']['Tables']['agendamentos']['Row'];

type ContatoBanco =
  Database['public']['Tables']['contatos']['Row'];

type ServicoBanco =
  Database['public']['Tables']['servicos']['Row'];

export interface ServicoSelecionadoAgendamento {
  servico_id: string;
  quantidade: number;
}

export interface CadastroAgendamento {
  contato_id: string;
  inicio: string;
  fim: string;
  servicos: ServicoSelecionadoAgendamento[];
}

export interface ItemServicoAgendamento {
  quantidade: number;
  servico: Pick<
    ServicoBanco,
    | 'id'
    | 'nome'
    | 'preco'
    | 'tipo_cobranca'
    | 'duracao_minutos'
  >;
}

export interface AgendamentoCompleto extends AgendamentoBanco {
  contato: Pick<ContatoBanco, 'id' | 'nome'>;
  agendamento_servicos: ItemServicoAgendamento[];
}

@Injectable({
  providedIn: 'root',
})
export class DadosAgendamentos {
  private readonly clienteSupabase = inject(ClienteSupabase);

  private readonly listaInterna =
    signal<AgendamentoCompleto[]>([]);

  private readonly carregandoInterno = signal(false);
  private readonly erroInterno = signal<string | null>(null);

  readonly agendamentos = this.listaInterna.asReadonly();
  readonly carregando = this.carregandoInterno.asReadonly();
  readonly erro = this.erroInterno.asReadonly();

  async listar(): Promise<void> {
    this.carregandoInterno.set(true);
    this.erroInterno.set(null);

    try {
      const estudioId = await this.obterEstudioId();

      const { data, error } = await this.clienteSupabase.cliente
        .from('agendamentos')
        .select(`
          id,
          estudio_id,
          contato_id,
          inicio,
          fim,
          contato:contatos (
            id,
            nome
          ),
          agendamento_servicos (
            quantidade,
            servico:servicos (
              id,
              nome,
              preco,
              tipo_cobranca,
              duracao_minutos
            )
          )
        `)
        .eq('estudio_id', estudioId)
        .order('inicio', {
          ascending: true,
        });

      if (error) {
        throw error;
      }

      this.listaInterna.set(
        data as unknown as AgendamentoCompleto[],
      );
    } catch (erro) {
      this.erroInterno.set(this.obterMensagemErro(erro));
    } finally {
      this.carregandoInterno.set(false);
    }
  }

  async cadastrar(

    dados: CadastroAgendamento,
  ): Promise<string> {
    if (dados.servicos.length === 0) {
      throw new Error(
        'Selecione pelo menos um serviço.',
      );
    }
const servicosJson: Json = dados.servicos.map(
  (servico) => ({
    servico_id: servico.servico_id,
    quantidade: servico.quantidade,
  }),
);
    const { data, error } =
      await this.clienteSupabase.cliente.rpc(
        'criar_agendamento',
        {
          p_contato_id: dados.contato_id,
          p_inicio: dados.inicio,
          p_fim: dados.fim,
          p_servicos: servicosJson,
        },
      );

    if (error) {
      throw error;
    }

    await this.listar();

    return data;
  }

  async excluir(agendamentoId: string): Promise<void> {
    const estudioId = await this.obterEstudioId();

    const { error } = await this.clienteSupabase.cliente
      .from('agendamentos')
      .delete()
      .eq('id', agendamentoId)
      .eq('estudio_id', estudioId);

    if (error) {
      throw error;
    }

    this.listaInterna.update((agendamentos) =>
      agendamentos.filter(
        (agendamento) => agendamento.id !== agendamentoId,
      ),
    );
  }

  calcularValor(agendamento: AgendamentoCompleto): number {
    return agendamento.agendamento_servicos.reduce(
      (total, item) =>
        total + item.servico.preco * item.quantidade,
      0,
    );
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

    return 'Não foi possível carregar os agendamentos.';
  }
}
