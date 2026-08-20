import { RouterLink } from '@angular/router';
import {
  Component,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  DadosAgendamentos,
  DadosContatos,
  DadosServicos,
  DadosAcertos,
  type AgendamentoCompleto,
  type CadastroAgendamento,
  type Servico,
  type ServicoSelecionadoAgendamento,
  type AcertoCompleto,
} from '@fleiva-studios/shared-data-access';

@Component({
  selector: 'app-agendamentos',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink
  ],
  templateUrl: './agendamentos.html'  ,
  styleUrl: './agendamentos.scss',
})
export class Agendamentos implements OnInit {
  readonly dadosAgendamentos = inject(DadosAgendamentos);
  readonly dadosContatos = inject(DadosContatos);
  readonly dadosServicos = inject(DadosServicos);
  readonly dadosAcertos = inject(DadosAcertos);

  private readonly construtorFormulario = inject(FormBuilder);

  readonly salvando = signal(false);
  readonly excluindoId = signal<string | null>(null);
  readonly erroFormulario = signal<string | null>(null);
  readonly servicosSelecionados = signal<ServicoSelecionadoAgendamento[]>([]);
    readonly gerandoAcertoId =
    signal<string | null>(null);

  readonly erroAcerto =
    signal<string | null>(null);

  readonly mensagemAcerto =
    signal<string | null>(null);
  readonly valorEstimado = computed(() =>
    this.servicosSelecionados().reduce(
      (total, itemSelecionado) => {
        const servico = this.dadosServicos
          .servicos()
          .find(
            (item) =>
              item.id === itemSelecionado.servico_id,
          );

        if (!servico) {
          return total;
        }

        return (
          total +
          servico.preco * itemSelecionado.quantidade
        );
      },
      0,
    ),
  );

  readonly formulario = this.construtorFormulario.group({
    contato_id:
      this.construtorFormulario.nonNullable.control('', [
        Validators.required,
      ]),
    inicio:
      this.construtorFormulario.nonNullable.control('', [
        Validators.required,
      ]),
    fim: this.construtorFormulario.nonNullable.control('', [
      Validators.required,
    ]),
  });

  ngOnInit(): void {
    void this.carregarDados();
  }

  async carregarDados(): Promise<void> {
    await Promise.all([
      this.dadosContatos.listar(),
      this.dadosServicos.listar(),
      this.dadosAgendamentos.listar(),
      this.dadosAcertos.listar(),
    ]);
  }

  servicoEstaSelecionado(servicoId: string): boolean {
    return this.servicosSelecionados().some(
      (item) => item.servico_id === servicoId,
    );
  }

  obterQuantidade(servicoId: string): number {
    return (
      this.servicosSelecionados().find(
        (item) => item.servico_id === servicoId,
      )?.quantidade ?? 1
    );
  }

  alternarServico(
    servicoId: string,
    selecionado: boolean,
  ): void {
    this.erroFormulario.set(null);

    if (selecionado) {
      if (this.servicoEstaSelecionado(servicoId)) {
        return;
      }

      this.servicosSelecionados.update((servicos) => [
        ...servicos,
        {
          servico_id: servicoId,
          quantidade: 1,
        },
      ]);

      return;
    }

    this.servicosSelecionados.update((servicos) =>
      servicos.filter(
        (servico) => servico.servico_id !== servicoId,
      ),
    );
  }

  alterarQuantidade(
    servicoId: string,
    quantidade: number,
  ): void {
    const quantidadeValida =
      Number.isFinite(quantidade) && quantidade > 0
        ? quantidade
        : 1;

    this.servicosSelecionados.update((servicos) =>
      servicos.map((servico) =>
        servico.servico_id === servicoId
          ? {
              ...servico,
              quantidade: quantidadeValida,
            }
          : servico,
      ),
    );
  }

  async salvar(): Promise<void> {
    this.erroFormulario.set(null);

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    if (this.servicosSelecionados().length === 0) {
      this.erroFormulario.set(
        'Selecione pelo menos um serviço.',
      );
      return;
    }

    const valor = this.formulario.getRawValue();
    const inicio = new Date(valor.inicio);
    const fim = new Date(valor.fim);

    if (
      Number.isNaN(inicio.getTime()) ||
      Number.isNaN(fim.getTime())
    ) {
      this.erroFormulario.set(
        'Informe datas e horários válidos.',
      );
      return;
    }

    if (fim <= inicio) {
      this.erroFormulario.set(
        'O término deve ser posterior ao início.',
      );
      return;
    }

    this.salvando.set(true);

    try {
      const dados: CadastroAgendamento = {
        contato_id: valor.contato_id,
        inicio: inicio.toISOString(),
        fim: fim.toISOString(),
        servicos: this.servicosSelecionados(),
      };

      await this.dadosAgendamentos.cadastrar(dados);
      this.limparFormulario();
    } catch (erro) {
      this.erroFormulario.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.salvando.set(false);
    }
  }
  acertoDoAgendamento(
    agendamentoId: string,
  ): AcertoCompleto | undefined {
    return this.dadosAcertos
      .acertos()
      .find((acerto) =>
        acerto.itens.some(
          (item) =>
            item.agendamento_id ===
            agendamentoId,
        ),
      );
  }

  async gerarAcerto(
    agendamento: AgendamentoCompleto,
  ): Promise<void> {
    if (
      this.acertoDoAgendamento(
        agendamento.id,
      )
    ) {
      return;
    }

    this.gerandoAcertoId.set(
      agendamento.id,
    );

    this.erroAcerto.set(null);
    this.mensagemAcerto.set(null);

    try {
      await this.dadosAcertos
        .criarDoAgendamento(
          agendamento.id,
        );

      this.mensagemAcerto.set(
        `Acerto de "${agendamento.contato.nome}" gerado.`,
      );
    } catch (erro) {
      this.erroAcerto.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.gerandoAcertoId.set(null);
    }
  }
  async excluir(
    agendamento: AgendamentoCompleto,
  ): Promise<void> {
    const confirmou = window.confirm(
      `Excluir o agendamento de "${agendamento.contato.nome}"?`,
    );

    if (!confirmou) {
      return;
    }

    this.excluindoId.set(agendamento.id);
    this.erroFormulario.set(null);

    try {
      await this.dadosAgendamentos.excluir(
        agendamento.id,
      );
    } catch (erro) {
      this.erroFormulario.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.excluindoId.set(null);
    }
  }

  formatarData(data: string): string {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'short',
    }).format(new Date(data));
  }

  formatarPreco(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  }

  identificarServico(
    servicoId: string,
  ): Servico | undefined {
    return this.dadosServicos
      .servicos()
      .find((servico) => servico.id === servicoId);
  }

  private limparFormulario(): void {
    this.formulario.reset({
      contato_id: '',
      inicio: '',
      fim: '',
    });

    this.servicosSelecionados.set([]);
  }

  private obterMensagemErro(erro: unknown): string {
    if (
      typeof erro === 'object' &&
      erro !== null &&
      'message' in erro
    ) {
      return String(erro.message);
    }

    return 'Não foi possível concluir a operação.';
  }
}
