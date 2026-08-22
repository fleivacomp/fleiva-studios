import {
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  DadosServicos,
  type CadastroServico,
  type Servico,
} from '@fleiva-studios/shared-data-access';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './servicos.html',
  styleUrl: './servicos.scss',
})
export class Servicos implements OnInit {
  readonly dadosServicos = inject(DadosServicos);

  private readonly construtorFormulario =
    inject(FormBuilder);

  readonly salvando = signal(false);

  readonly excluindoId =
    signal<string | null>(null);

  readonly servicoEditandoId =
    signal<string | null>(null);

  readonly erroFormulario =
    signal<string | null>(null);

  readonly formulario =
    this.construtorFormulario.group({
      nome:
        this.construtorFormulario.nonNullable.control(
          '',
          [Validators.required],
        ),

      preco:
        this.construtorFormulario.control<number | null>(
          null,
          [
            Validators.required,
            Validators.min(0),
          ],
        ),

      tipo_cobranca:
        this.construtorFormulario.nonNullable.control(
          '',
          [Validators.required],
        ),

      duracao_minutos:
        this.construtorFormulario.control<number | null>(
          null,
          [Validators.min(1)],
        ),

      publico_na_landing:
        this.construtorFormulario.nonNullable.control(
          true,
        ),
    });

  ngOnInit(): void {
    void this.dadosServicos.listar();
  }

  async salvar(): Promise<void> {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.salvando.set(true);
    this.erroFormulario.set(null);

    try {
      const valor =
        this.formulario.getRawValue();

      const dados: CadastroServico = {
        nome: valor.nome,
        preco: Number(valor.preco),
        tipo_cobranca: valor.tipo_cobranca,
        duracao_minutos:
          valor.duracao_minutos,
        publico_na_landing:
          valor.publico_na_landing,
      };

      const servicoId =
        this.servicoEditandoId();

      if (servicoId) {
        await this.dadosServicos.atualizar(
          servicoId,
          dados,
        );
      } else {
        await this.dadosServicos.cadastrar(dados);
      }

      this.limparFormulario();
    } catch (erro) {
      this.erroFormulario.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.salvando.set(false);
    }
  }

  editar(servico: Servico): void {
    this.servicoEditandoId.set(servico.id);
    this.erroFormulario.set(null);

    this.formulario.setValue({
      nome: servico.nome,
      preco: servico.preco,
      tipo_cobranca: servico.tipo_cobranca,
      duracao_minutos:
        servico.duracao_minutos,
      publico_na_landing:
        servico.publico_na_landing,
    });

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  cancelarEdicao(): void {
    this.limparFormulario();
  }

  async excluir(servico: Servico): Promise<void> {
    const confirmou = window.confirm(
      `Excluir o serviço "${servico.nome}"?`,
    );

    if (!confirmou) {
      return;
    }

    this.excluindoId.set(servico.id);
    this.erroFormulario.set(null);

    try {
      await this.dadosServicos.excluir(servico.id);

      if (
        this.servicoEditandoId() === servico.id
      ) {
        this.limparFormulario();
      }
    } catch (erro) {
      this.erroFormulario.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.excluindoId.set(null);
    }
  }

  formatarPreco(preco: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(preco);
  }

  formatarDuracao(
    duracaoMinutos: number | null,
  ): string {
    if (duracaoMinutos === null) {
      return 'Não informada';
    }

    if (duracaoMinutos < 60) {
      return `${duracaoMinutos} min`;
    }

    const horas = Math.floor(
      duracaoMinutos / 60,
    );

    const minutos = duracaoMinutos % 60;

    return minutos > 0
      ? `${horas}h ${minutos}min`
      : `${horas}h`;
  }

  private limparFormulario(): void {
    this.servicoEditandoId.set(null);

    this.formulario.reset({
      nome: '',
      preco: null,
      tipo_cobranca: '',
      duracao_minutos: null,
      publico_na_landing: false,
    });
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
