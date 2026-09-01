import {
  Component,
  OnDestroy,
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
import { RouterLink } from '@angular/router';
import {
  DadosAcertos,
  DadosAgendamentos,
  DadosContatos,
  DadosServicos,
  RESULTADOS_AGENDAMENTO,
  type AcertoCompleto,
  type AgendamentoCompleto,
  type CadastroAgendamento,
  type FechamentoAgendamento,
  type ResultadoAgendamento,
  type Servico,
  type ServicoSelecionadoAgendamento,
} from '@fleiva-studios/shared-data-access';

interface GrupoAgendamentos {
  chave: string;
  rotulo: string;
  dataCompleta: string;
  agendamentos: AgendamentoCompleto[];
}

type TipoSecaoAgenda =
  | 'agora'
  | 'proximos'
  | 'pendentes'
  | 'historico';

interface SecaoAgenda {
  tipo: TipoSecaoAgenda;
  titulo: string;
  descricao: string;
  mensagemVazia: string;
  quantidade: number;
  grupos: GrupoAgendamentos[];
}

@Component({
  selector: 'app-agendamentos',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './agendamentos.html',
  styleUrl: './agendamentos.scss',
})
export class Agendamentos implements OnInit, OnDestroy {
  readonly dadosAgendamentos = inject(DadosAgendamentos);
  readonly dadosContatos = inject(DadosContatos);
  readonly dadosServicos = inject(DadosServicos);
  readonly dadosAcertos = inject(DadosAcertos);

  private readonly construtorFormulario = inject(FormBuilder);
  private readonly agora = signal(Date.now());
  private atualizadorTempo: number | null = null;

  readonly formularioAberto = signal(false);
  readonly pendenciasAbertas = signal(false);
  readonly historicoAberto = signal(false);
  readonly salvando = signal(false);
  readonly fechandoId = signal<string | null>(null);
  readonly reabrindoId = signal<string | null>(null);
  readonly agendamentoEmFechamento =
    signal<AgendamentoCompleto | null>(null);
  readonly reagendamentoOrigem =
    signal<AgendamentoCompleto | null>(null);
  readonly excluindoId = signal<string | null>(null);
  readonly gerandoAcertoId = signal<string | null>(null);
  readonly erroFormulario = signal<string | null>(null);
  readonly erroFechamento = signal<string | null>(null);
  readonly erroAgenda = signal<string | null>(null);
  readonly erroAcerto = signal<string | null>(null);
  readonly mensagemAcerto = signal<string | null>(null);
  readonly servicosSelecionados =
    signal<ServicoSelecionadoAgendamento[]>([]);

  readonly resultadosAgendamento =
    RESULTADOS_AGENDAMENTO;

  readonly agendamentoAtual = computed(() => {
    const agora = this.agora();

    return (
      this.dadosAgendamentos
        .agendamentos()
        .filter(
          (agendamento) =>
            !agendamento.resultado &&
            Date.parse(agendamento.inicio) <= agora &&
            Date.parse(agendamento.fim) > agora,
        )
        .sort(
          (primeiro, segundo) =>
            Date.parse(primeiro.fim) -
            Date.parse(segundo.fim),
        )[0] ?? null
    );
  });

  readonly proximoAgendamento = computed(() => {
    const agora = this.agora();

    return (
      this.dadosAgendamentos
        .agendamentos()
        .filter(
          (agendamento) =>
            !agendamento.resultado &&
            Date.parse(agendamento.inicio) > agora,
        )
        .sort(
          (primeiro, segundo) =>
            Date.parse(primeiro.inicio) -
            Date.parse(segundo.inicio),
        )[0] ?? null
    );
  });

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

  readonly secoesAgenda = computed<SecaoAgenda[]>(() => {
    const agora = this.agora();
    const agendamentos = this.dadosAgendamentos
      .agendamentos()
      .filter((agendamento) => {
        const inicio = Date.parse(agendamento.inicio);
        const fim = Date.parse(agendamento.fim);

        return Number.isFinite(inicio) && Number.isFinite(fim);
      });

    const abertos = agendamentos.filter(
      (agendamento) => !agendamento.resultado,
    );

    const historico = agendamentos.filter(
      (agendamento) => Boolean(agendamento.resultado),
    );

    const emAndamento = abertos.filter(
      (agendamento) =>
        Date.parse(agendamento.inicio) <= agora &&
        Date.parse(agendamento.fim) > agora,
    );

    const proximos = abertos.filter(
      (agendamento) =>
        Date.parse(agendamento.inicio) > agora,
    );

    const pendentes = abertos.filter(
      (agendamento) =>
        Date.parse(agendamento.fim) <= agora,
    );

    return [
      {
        tipo: 'agora',
        titulo: 'Agora',
        descricao: 'Sessões que estão acontecendo neste momento.',
        mensagemVazia: 'Nenhuma sessão em andamento.',
        quantidade: emAndamento.length,
        grupos: this.agruparAgendamentos(
          emAndamento,
          'ascendente',
        ),
      },
      {
        tipo: 'pendentes',
        titulo: 'Aguardando fechamento',
        descricao:
          'Horários encerrados que ainda precisam de um desfecho.',
        mensagemVazia: 'Nenhum agendamento aguardando fechamento.',
        quantidade: pendentes.length,
        grupos: this.agruparAgendamentos(
          pendentes,
          'descendente',
        ),
      },
      {
        tipo: 'proximos',
        titulo: 'Próximos horários',
        descricao: 'O que ainda vai acontecer no estúdio.',
        mensagemVazia: 'Nenhum próximo horário agendado.',
        quantidade: proximos.length,
        grupos: this.agruparAgendamentos(
          proximos,
          'ascendente',
        ),
      },
      {
        tipo: 'historico',
        titulo: 'Histórico',
        descricao:
          'Agendamentos que já receberam um desfecho.',
        mensagemVazia: 'Nenhum agendamento finalizado.',
        quantidade: historico.length,
        grupos: this.agruparAgendamentos(
          historico,
          'descendente',
        ),
      },
    ];
  });

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

  readonly formularioFechamento =
    this.construtorFormulario.group({
      resultado:
        this.construtorFormulario.nonNullable.control<ResultadoAgendamento>(
          'concluido',
          [Validators.required],
        ),
      observacoes_fechamento:
        this.construtorFormulario.nonNullable.control(''),
    });

  ngOnInit(): void {
    void this.carregarDados();

    this.atualizadorTempo = window.setInterval(
      () => this.agora.set(Date.now()),
      60_000,
    );
  }

  ngOnDestroy(): void {
    if (this.atualizadorTempo !== null) {
      window.clearInterval(this.atualizadorTempo);
    }
  }

  async carregarDados(): Promise<void> {
    await Promise.all([
      this.dadosContatos.listar(),
      this.dadosServicos.listar(),
      this.dadosAgendamentos.listar(),
      this.dadosAcertos.listar(),
    ]);
  }

  abrirFormulario(): void {
    this.reagendamentoOrigem.set(null);
    this.formularioAberto.set(true);
    this.erroFormulario.set(null);
  }

  fecharFormulario(): void {
    if (this.salvando()) {
      return;
    }

    this.limparFormulario();
    this.formularioAberto.set(false);
  }

  alternarPendencias(): void {
    this.pendenciasAbertas.update((abertas) => !abertas);
  }

  alternarHistorico(): void {
    this.historicoAberto.update((aberto) => !aberto);
  }

  abrirFechamento(
    agendamento: AgendamentoCompleto,
    resultado: ResultadoAgendamento = 'concluido',
  ): void {
    this.agendamentoEmFechamento.set(agendamento);
    this.erroFechamento.set(null);
    this.formularioFechamento.reset({
      resultado,
      observacoes_fechamento: '',
    });
  }

  selecionarResultado(
    resultado: ResultadoAgendamento,
  ): void {
    this.formularioFechamento.controls.resultado.setValue(
      resultado,
    );
    this.erroFechamento.set(null);
  }

  fecharFormularioFechamento(): void {
    if (this.fechandoId() !== null) {
      return;
    }

    this.agendamentoEmFechamento.set(null);
    this.erroFechamento.set(null);
    this.formularioFechamento.reset({
      resultado: 'concluido',
      observacoes_fechamento: '',
    });
  }

  async confirmarFechamento(): Promise<void> {
    const agendamento = this.agendamentoEmFechamento();

    if (!agendamento || this.formularioFechamento.invalid) {
      this.formularioFechamento.markAllAsTouched();
      return;
    }

    this.fechandoId.set(agendamento.id);
    this.erroFechamento.set(null);
    this.erroAgenda.set(null);

    try {
      const valor =
        this.formularioFechamento.getRawValue();

      const dados: FechamentoAgendamento = {
        resultado: valor.resultado,
        observacoes_fechamento:
          valor.observacoes_fechamento.trim() || null,
      };

      const prepararNovoHorario =
        valor.resultado === 'reagendado';
      const oferecerGeracaoAcerto =
        valor.resultado === 'concluido' &&
        !this.acertoDoAgendamento(agendamento.id);

      await this.dadosAgendamentos.fechar(
        agendamento.id,
        dados,
      );

      this.fechandoId.set(null);
      this.fecharFormularioFechamento();

      if (prepararNovoHorario) {
        this.prepararReagendamento(agendamento);
      } else if (
        oferecerGeracaoAcerto &&
        window.confirm(
          'Sessão concluída. Deseja gerar o acerto agora?',
        )
      ) {
        await this.gerarAcerto(agendamento);
      }
    } catch (erro) {
      this.erroFechamento.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.fechandoId.set(null);
    }
  }

  async reabrir(
    agendamento: AgendamentoCompleto,
  ): Promise<void> {
    const confirmou = window.confirm(
      `Reabrir o agendamento de "${agendamento.contato.nome}"?`,
    );

    if (!confirmou) {
      return;
    }

    this.reabrindoId.set(agendamento.id);
    this.erroAgenda.set(null);

    try {
      await this.dadosAgendamentos.reabrir(
        agendamento.id,
      );
    } catch (erro) {
      this.erroAgenda.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.reabrindoId.set(null);
    }
  }

  rotuloResultado(resultado: string | null): string {
    return (
      RESULTADOS_AGENDAMENTO.find(
        (item) => item.valor === resultado,
      )?.rotulo ?? resultado ?? 'Sem resultado'
    );
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

    if (Number.isNaN(inicio.getTime())) {
      this.erroFormulario.set(
        'Informe uma data e um horário de início válidos.',
      );
      return;
    }

    const fim = this.criarFimAgendamento(
      inicio,
      valor.fim,
    );

    if (fim === null) {
      this.erroFormulario.set(
        'Informe um horário de término válido.',
      );
      return;
    }

    if (fim.getTime() === inicio.getTime()) {
      this.erroFormulario.set(
        'O término não pode ser igual ao início.',
      );
      return;
    }

    const conflito = this.encontrarConflito(
      inicio,
      fim,
    );

    if (conflito) {
      const criarMesmoAssim = window.confirm(
        `Já existe um agendamento de "${conflito.contato.nome}" ` +
          `entre ${this.formatarHorario(conflito.inicio)} e ` +
          `${this.formatarHorario(conflito.fim)}. ` +
          'Criar este horário mesmo assim?',
      );

      if (!criarMesmoAssim) {
        return;
      }
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
      this.formularioAberto.set(false);
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
            item.agendamento_id === agendamentoId,
        ),
      );
  }

  async gerarAcerto(
    agendamento: AgendamentoCompleto,
  ): Promise<void> {
    if (this.acertoDoAgendamento(agendamento.id)) {
      return;
    }

    this.gerandoAcertoId.set(agendamento.id);
    this.erroAcerto.set(null);
    this.mensagemAcerto.set(null);

    try {
      await this.dadosAcertos.criarDoAgendamento(
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
    this.erroAgenda.set(null);

    try {
      await this.dadosAgendamentos.excluir(
        agendamento.id,
      );
    } catch (erro) {
      this.erroAgenda.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.excluindoId.set(null);
    }
  }

  formatarHorario(data: string): string {
    return new Intl.DateTimeFormat('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(data));
  }

  formatarDuracaoMinutos(
    duracaoMinutos: number,
  ): string {
    if (duracaoMinutos <= 0) {
      return '0h';
    }

    const horas = Math.floor(duracaoMinutos / 60);
    const minutos = duracaoMinutos % 60;

    if (horas === 0) {
      return `${minutos} min`;
    }

    return minutos > 0
      ? `${horas}h ${minutos}min`
      : `${horas}h`;
  }

  formatarReferenciaData(data: string): string {
    const dataAgendamento = new Date(data);
    const hoje = new Date(this.agora());
    const amanha = new Date(hoje);

    amanha.setDate(amanha.getDate() + 1);

    const chave = this.criarChaveData(
      dataAgendamento,
    );

    if (chave === this.criarChaveData(hoje)) {
      return 'Hoje';
    }

    if (chave === this.criarChaveData(amanha)) {
      return 'Amanhã';
    }

    return new Intl.DateTimeFormat('pt-BR', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
    }).format(dataAgendamento);
  }

  formatarDuracao(
    agendamento: AgendamentoCompleto,
  ): string {
    const duracaoMinutos = Math.round(
      (Date.parse(agendamento.fim) -
        Date.parse(agendamento.inicio)) /
        60_000,
    );

    if (!Number.isFinite(duracaoMinutos) || duracaoMinutos <= 0) {
      return '';
    }

    const horas = Math.floor(duracaoMinutos / 60);
    const minutos = duracaoMinutos % 60;

    if (horas === 0) {
      return `${minutos} min`;
    }

    return minutos > 0
      ? `${horas}h ${minutos}min`
      : `${horas}h`;
  }

  terminaNoDiaSeguinte(
    agendamento: AgendamentoCompleto,
  ): boolean {
    return (
      this.criarChaveData(new Date(agendamento.inicio)) !==
      this.criarChaveData(new Date(agendamento.fim))
    );
  }

  formatarPreco(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  }

  criarUrlConfirmacaoWhatsApp(
    agendamento: AgendamentoCompleto,
  ): string | null {
    let telefone = this.dadosContatos
      .contatos()
      .find(
        (contato) =>
          contato.id === agendamento.contato_id,
      )
      ?.telefone?.replace(/\D/g, '');

    if (!telefone) {
      return null;
    }

    if (
      telefone.startsWith('0') &&
      (telefone.length === 11 || telefone.length === 12)
    ) {
      telefone = telefone.slice(1);
    }

    const numero =
      telefone.length === 10 || telefone.length === 11
        ? `55${telefone}`
        : telefone;

    if (numero.length < 12 || numero.length > 15) {
      return null;
    }

    const mensagem =
      `Oi, ${agendamento.contato.nome}! ` +
      `Confirmando nosso horário no estúdio: ` +
      `${this.formatarReferenciaData(agendamento.inicio)}, ` +
      `às ${this.formatarHorario(agendamento.inicio)}.`;

    return `https://wa.me/${numero}?text=${encodeURIComponent(
      mensagem,
    )}`;
  }

  identificarServico(
    servicoId: string,
  ): Servico | undefined {
    return this.dadosServicos
      .servicos()
      .find((servico) => servico.id === servicoId);
  }

  private criarFimAgendamento(
    inicio: Date,
    horarioFim: string,
  ): Date | null {
    const correspondencia =
      /^(\d{2}):(\d{2})$/.exec(horarioFim);

    if (!correspondencia) {
      return null;
    }

    const horas = Number(correspondencia[1]);
    const minutos = Number(correspondencia[2]);

    if (
      !Number.isInteger(horas) ||
      !Number.isInteger(minutos) ||
      horas < 0 ||
      horas > 23 ||
      minutos < 0 ||
      minutos > 59
    ) {
      return null;
    }

    const fim = new Date(inicio);

    fim.setHours(horas, minutos, 0, 0);

    if (fim < inicio) {
      fim.setDate(fim.getDate() + 1);
    }

    return fim;
  }

  private encontrarConflito(
    inicio: Date,
    fim: Date,
  ): AgendamentoCompleto | null {
    const inicioNovo = inicio.getTime();
    const fimNovo = fim.getTime();

    return (
      this.dadosAgendamentos
        .agendamentos()
        .filter((agendamento) => !agendamento.resultado)
        .find((agendamento) => {
          const inicioExistente = Date.parse(
            agendamento.inicio,
          );
          const fimExistente = Date.parse(
            agendamento.fim,
          );

          return (
            Number.isFinite(inicioExistente) &&
            Number.isFinite(fimExistente) &&
            inicioNovo < fimExistente &&
            fimNovo > inicioExistente
          );
        }) ?? null
    );
  }

  private agruparAgendamentos(
    itens: AgendamentoCompleto[],
    ordem: 'ascendente' | 'descendente',
  ): GrupoAgendamentos[] {
    const grupos = new Map<string, AgendamentoCompleto[]>();
    const agendamentos = [...itens].sort(
      (primeiro, segundo) => {
        const diferenca =
          Date.parse(primeiro.inicio) -
          Date.parse(segundo.inicio);

        return ordem === 'ascendente'
          ? diferenca
          : -diferenca;
      },
    );

    for (const agendamento of agendamentos) {
      const inicio = new Date(agendamento.inicio);
      const chave = this.criarChaveData(inicio);
      const grupo = grupos.get(chave) ?? [];

      grupo.push(agendamento);
      grupos.set(chave, grupo);
    }

    return Array.from(grupos.entries()).map(
      ([chave, agendamentosGrupo]) => {
        const data = new Date(agendamentosGrupo[0].inicio);

        return {
          chave,
          rotulo: this.criarRotuloData(data),
          dataCompleta: this.formatarDataCompleta(data),
          agendamentos: agendamentosGrupo,
        };
      },
    );
  }

  private criarChaveData(data: Date): string {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
  }

  private criarRotuloData(data: Date): string {
    const hoje = new Date();
    const amanha = new Date(hoje);

    amanha.setDate(amanha.getDate() + 1);

    const chave = this.criarChaveData(data);

    if (chave === this.criarChaveData(hoje)) {
      return 'Hoje';
    }

    if (chave === this.criarChaveData(amanha)) {
      return 'Amanhã';
    }

    const rotulo = new Intl.DateTimeFormat('pt-BR', {
      weekday: 'long',
    }).format(data);

    return (
      rotulo.charAt(0).toLocaleUpperCase('pt-BR') +
      rotulo.slice(1)
    );
  }

  private formatarDataCompleta(data: Date): string {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(data);
  }

  private limparFormulario(): void {
    this.formulario.reset({
      contato_id: '',
      inicio: '',
      fim: '',
    });

    this.servicosSelecionados.set([]);
    this.reagendamentoOrigem.set(null);
    this.erroFormulario.set(null);
  }

  private prepararReagendamento(
    agendamento: AgendamentoCompleto,
  ): void {
    this.formulario.reset({
      contato_id: agendamento.contato_id,
      inicio: '',
      fim: '',
    });

    this.servicosSelecionados.set(
      agendamento.agendamento_servicos.map((item) => ({
        servico_id: item.servico.id,
        quantidade: item.quantidade,
      })),
    );

    this.reagendamentoOrigem.set(agendamento);
    this.erroFormulario.set(null);
    this.formularioAberto.set(true);

    window.setTimeout(() => {
      document
        .getElementById('novo-agendamento')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
    });
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
