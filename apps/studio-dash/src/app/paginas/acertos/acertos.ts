import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, inject, signal,} from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  DadosAcertos,
  DadosAgendamentos,
  DadosContatos,
  type AcertoCompleto,
  type AgendamentoCompleto,
} from '@fleiva-studios/shared-data-access';

@Component({
  selector: 'app-acertos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './acertos.html',
  styleUrl: './acertos.scss',
})
export class Acertos implements OnInit {
  private readonly rota = inject(ActivatedRoute);
  readonly dadosAcertos = inject(DadosAcertos);
  readonly dadosContatos = inject(DadosContatos);
  readonly dadosAgendamentos =
    inject(DadosAgendamentos);

  private readonly construtorFormulario =
    inject(FormBuilder);

  readonly salvandoAgendamento = signal(false);
  readonly salvandoManual = signal(false);
  readonly salvandoItem = signal(false);
  readonly salvandoPagamento = signal(false);
  readonly excluindoItemId =
    signal<string | null>(null);
  readonly excluindoPagamentoId =
    signal<string | null>(null);

  readonly acertoAbertoId =
    signal<string | null>(null);
  readonly acertoItemId =
    signal<string | null>(null);
  readonly acertoPagamentoId =
    signal<string | null>(null);

  readonly erroPagina =
    signal<string | null>(null);
  readonly mensagemPagina =
    signal<string | null>(null);

  readonly formularioAgendamento =
    this.construtorFormulario.group({
      agendamento_id:
        this.construtorFormulario.nonNullable.control(
          '',
          [Validators.required],
        ),
    });

  readonly formularioManual =
    this.construtorFormulario.group({
      contato_id:
        this.construtorFormulario.nonNullable.control(
          '',
          [Validators.required],
        ),
      descricao:
        this.construtorFormulario.nonNullable.control(
          '',
          [Validators.required],
        ),
      quantidade:
        this.construtorFormulario.nonNullable.control(
          1,
          [Validators.required, Validators.min(0.01)],
        ),
      valor_unitario:
        this.construtorFormulario.nonNullable.control(
          0,
          [Validators.required],
        ),
      vencimento_em:
        this.construtorFormulario.nonNullable.control(
          '',
        ),
      observacoes:
        this.construtorFormulario.control<string | null>(
          null,
        ),
    });

  readonly formularioItem =
    this.construtorFormulario.group({
      descricao:
        this.construtorFormulario.nonNullable.control(
          '',
          [Validators.required],
        ),
      quantidade:
        this.construtorFormulario.nonNullable.control(
          1,
          [Validators.required, Validators.min(0.01)],
        ),
      valor_unitario:
        this.construtorFormulario.nonNullable.control(
          0,
          [Validators.required],
        ),
    });

  readonly formularioPagamento =
    this.construtorFormulario.group({
      pagador_contato_id:
        this.construtorFormulario.nonNullable.control(
          '',
        ),
      valor:
        this.construtorFormulario.nonNullable.control(
          0,
          [Validators.required, Validators.min(0.01)],
        ),
      forma_pagamento:
        this.construtorFormulario.nonNullable.control(
          '',
        ),
      pago_em:
        this.construtorFormulario.nonNullable.control(
          this.dataHoraLocalAtual(),
          [Validators.required],
        ),
      observacoes:
        this.construtorFormulario.control<string | null>(
          null,
        ),
    });

    ngOnInit(): void {
    void this.inicializar();
  }

  private async inicializar(): Promise<void> {
    await this.carregarDados();

    const acertoId =
      this.rota.snapshot.queryParamMap.get(
        'abrir',
      );

    if (
      !acertoId ||
      !this.dadosAcertos
        .acertos()
        .some(
          (acerto) =>
            acerto.id === acertoId,
        )
    ) {
      return;
    }

    this.acertoAbertoId.set(acertoId);

    window.setTimeout(() => {
      document
        .getElementById(
          `acerto-${acertoId}`,
        )
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
    });
  }
  async carregarDados(): Promise<void> {
    this.erroPagina.set(null);

    await Promise.all([
      this.dadosAcertos.listar(),
      this.dadosContatos.listar(),
      this.dadosAgendamentos.listar(),
    ]);
  }

  carregandoPagina(): boolean {
    return (
      this.dadosAcertos.carregando() ||
      this.dadosContatos.carregando() ||
      this.dadosAgendamentos.carregando()
    );
  }

  async gerarDoAgendamento(): Promise<void> {
    if (this.formularioAgendamento.invalid) {
      this.formularioAgendamento.markAllAsTouched();
      return;
    }

    const agendamentoId =
      this.formularioAgendamento.controls
        .agendamento_id.value;

    if (this.agendamentoJaIncluido(agendamentoId)) {
      const confirmou = window.confirm(
        'Este agendamento já aparece em outro acerto. Deseja gerar mais um?',
      );

      if (!confirmou) {
        return;
      }
    }

    this.salvandoAgendamento.set(true);
    this.limparRetorno();

    try {
      await this.dadosAcertos
        .criarDoAgendamento(agendamentoId);

      this.formularioAgendamento.reset({
        agendamento_id: '',
      });

      this.mensagemPagina.set(
        'Acerto gerado a partir do agendamento.',
      );
    } catch (erro) {
      this.erroPagina.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.salvandoAgendamento.set(false);
    }
  }

  async criarManual(): Promise<void> {
    if (this.formularioManual.invalid) {
      this.formularioManual.markAllAsTouched();
      return;
    }

    this.salvandoManual.set(true);
    this.limparRetorno();

    let acertoCriadoId: string | null = null;

    try {
      const valor =
        this.formularioManual.getRawValue();

      const acerto =
        await this.dadosAcertos.criarManual({
          contato_id: valor.contato_id,
          vencimento_em:
            valor.vencimento_em || null,
          observacoes:
            this.normalizarTextoOpcional(
              valor.observacoes,
            ),
        });

      acertoCriadoId = acerto.id;

      await this.dadosAcertos.adicionarItem(
        acerto.id,
        {
          agendamento_id: null,
          descricao: valor.descricao,
          quantidade: Number(valor.quantidade),
          valor_unitario: Number(
            valor.valor_unitario,
          ),
        },
      );

      this.formularioManual.reset({
        contato_id: '',
        descricao: '',
        quantidade: 1,
        valor_unitario: 0,
        vencimento_em: '',
        observacoes: null,
      });

      this.acertoAbertoId.set(acerto.id);

      this.mensagemPagina.set(
        'Acerto criado.',
      );
    } catch (erro) {
      if (acertoCriadoId) {
        this.erroPagina.set(
          'O acerto foi criado, mas o item não foi adicionado. Abra o acerto e adicione o item novamente.',
        );
      } else {
        this.erroPagina.set(
          this.obterMensagemErro(erro),
        );
      }
    } finally {
      this.salvandoManual.set(false);
    }
  }

  alternarDetalhes(acertoId: string): void {
    if (this.acertoAbertoId() === acertoId) {
      this.acertoAbertoId.set(null);
      this.fecharFormularios();
      return;
    }

    this.acertoAbertoId.set(acertoId);
    this.fecharFormularios();
  }

  abrirNovoItem(acertoId: string): void {
    this.acertoItemId.set(acertoId);
    this.acertoPagamentoId.set(null);

    this.formularioItem.reset({
      descricao: '',
      quantidade: 1,
      valor_unitario: 0,
    });
  }

  abrirPagamento(acerto: AcertoCompleto): void {
    this.acertoPagamentoId.set(acerto.id);
    this.acertoItemId.set(null);

    this.formularioPagamento.reset({
      pagador_contato_id: '',
      valor: Math.max(acerto.saldo, 0),
      forma_pagamento: '',
      pago_em: this.dataHoraLocalAtual(),
      observacoes: null,
    });
  }

  fecharFormularios(): void {
    this.acertoItemId.set(null);
    this.acertoPagamentoId.set(null);
  }

  async adicionarItem(
    acertoId: string,
  ): Promise<void> {
    if (this.formularioItem.invalid) {
      this.formularioItem.markAllAsTouched();
      return;
    }

    this.salvandoItem.set(true);
    this.limparRetorno();

    try {
      const valor =
        this.formularioItem.getRawValue();

      await this.dadosAcertos.adicionarItem(
        acertoId,
        {
          agendamento_id: null,
          descricao: valor.descricao,
          quantidade: Number(valor.quantidade),
          valor_unitario: Number(
            valor.valor_unitario,
          ),
        },
      );

      this.acertoItemId.set(null);

      this.mensagemPagina.set(
        'Item adicionado.',
      );
    } catch (erro) {
      this.erroPagina.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.salvandoItem.set(false);
    }
  }

  async registrarPagamento(
    acertoId: string,
  ): Promise<void> {
    if (this.formularioPagamento.invalid) {
      this.formularioPagamento.markAllAsTouched();
      return;
    }

    this.salvandoPagamento.set(true);
    this.limparRetorno();

    try {
      const valor =
        this.formularioPagamento.getRawValue();

      await this.dadosAcertos.registrarPagamento(
        acertoId,
        {
          pagador_contato_id:
            valor.pagador_contato_id || null,
          valor: Number(valor.valor),
          forma_pagamento:
            this.normalizarTextoOpcional(
              valor.forma_pagamento,
            ),
          pago_em: new Date(
            valor.pago_em,
          ).toISOString(),
          observacoes:
            this.normalizarTextoOpcional(
              valor.observacoes,
            ),
        },
      );

      this.acertoPagamentoId.set(null);

      this.mensagemPagina.set(
        'Pagamento registrado.',
      );
    } catch (erro) {
      this.erroPagina.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.salvandoPagamento.set(false);
    }
  }

  async excluirItem(
    itemId: string,
  ): Promise<void> {
    const confirmou = window.confirm(
      'Remover este item do acerto?',
    );

    if (!confirmou) {
      return;
    }

    this.excluindoItemId.set(itemId);
    this.limparRetorno();

    try {
      await this.dadosAcertos.excluirItem(
        itemId,
      );

      this.mensagemPagina.set(
        'Item removido.',
      );
    } catch (erro) {
      this.erroPagina.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.excluindoItemId.set(null);
    }
  }

  async excluirPagamento(
    pagamentoId: string,
  ): Promise<void> {
    const confirmou = window.confirm(
      'Remover este pagamento?',
    );

    if (!confirmou) {
      return;
    }

    this.excluindoPagamentoId.set(
      pagamentoId,
    );

    this.limparRetorno();

    try {
      await this.dadosAcertos
        .excluirPagamento(pagamentoId);

      this.mensagemPagina.set(
        'Pagamento removido.',
      );
    } catch (erro) {
      this.erroPagina.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.excluindoPagamentoId.set(null);
    }
  }

  agendamentoJaIncluido(
    agendamentoId: string,
  ): boolean {
    return this.dadosAcertos.acertos().some(
      (acerto) =>
        acerto.itens.some(
          (item) =>
            item.agendamento_id ===
            agendamentoId,
        ),
    );
  }

  resumirAgendamento(
    agendamento: AgendamentoCompleto,
  ): string {
    const servicos =
      agendamento.agendamento_servicos
        .map(
          (item) =>
            `${item.servico.nome} ${this.formatarQuantidade(
              item.quantidade,
            )}`,
        )
        .join(' + ');

    return `${this.formatarData(
      agendamento.inicio,
    )} — ${agendamento.contato.nome} — ${servicos}`;
  }
  valorFaltante(
    acerto: AcertoCompleto,
  ): number {
    return Math.max(acerto.saldo, 0);
  }
  rotuloSituacao(
    acerto: AcertoCompleto,
  ): string {
    if (
      acerto.valor_total === 0 &&
      acerto.valor_pago === 0
    ) {
      return 'Sem valor';
    }

    if (acerto.saldo < 0) {
      return 'Com crédito';
    }

    if (acerto.saldo === 0) {
      return 'Acertado';
    }

    if (acerto.valor_pago > 0) {
      return 'Pago em parte';
    }

    return 'Falta receber';
  }

  formatarMoeda(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  }

  formatarData(data: string): string {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'short',
    }).format(new Date(data));
  }

  formatarDataOpcional(
    data: string | null,
  ): string {
    if (!data) {
      return 'Sem data combinada';
    }

    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
    }).format(
      new Date(`${data}T12:00:00`),
    );
  }

  formatarQuantidade(
    quantidade: number,
  ): string {
    return new Intl.NumberFormat('pt-BR', {
      maximumFractionDigits: 2,
    }).format(quantidade);
  }

  private dataHoraLocalAtual(): string {
    const agora = new Date();

    const local = new Date(
      agora.getTime() -
        agora.getTimezoneOffset() * 60_000,
    );

    return local.toISOString().slice(0, 16);
  }

  private limparRetorno(): void {
    this.erroPagina.set(null);
    this.mensagemPagina.set(null);
  }

  private normalizarTextoOpcional(
    valor: string | null,
  ): string | null {
    const texto = valor?.trim();

    return texto ? texto : null;
  }

  private obterMensagemErro(
    erro: unknown,
  ): string {
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
