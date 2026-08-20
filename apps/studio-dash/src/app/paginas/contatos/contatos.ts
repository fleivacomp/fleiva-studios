import { Component, OnInit, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  DadosContatos,
  type CadastroContato,
  type Contato,
} from '@fleiva-studios/shared-data-access';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contatos.html',
  styleUrl: './contatos.scss',
})
export class Contatos implements OnInit {
  readonly dadosContatos = inject(DadosContatos);

  private readonly construtorFormulario = inject(FormBuilder);

  readonly salvando = signal(false);
  readonly excluindoId = signal<string | null>(null);
  readonly contatoEditandoId = signal<string | null>(null);
  readonly erroFormulario = signal<string | null>(null);

  readonly formulario = this.construtorFormulario.group({
    nome: this.construtorFormulario.nonNullable.control('', [
      Validators.required,
    ]),
    telefone:
      this.construtorFormulario.nonNullable.control(''),
    email: this.construtorFormulario.nonNullable.control('', [
      Validators.email,
    ]),
    e_cliente:
      this.construtorFormulario.nonNullable.control(true),
  });

  ngOnInit(): void {
    void this.dadosContatos.listar();
  }

  async salvar(): Promise<void> {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.salvando.set(true);
    this.erroFormulario.set(null);

    try {
      const valor = this.formulario.getRawValue();

      const dados: CadastroContato = {
        nome: valor.nome,
        telefone: this.normalizarTextoOpcional(valor.telefone),
        email: this.normalizarTextoOpcional(valor.email),
        e_cliente: valor.e_cliente,
      };

      const contatoId = this.contatoEditandoId();

      if (contatoId) {
        await this.dadosContatos.atualizar(contatoId, dados);
      } else {
        await this.dadosContatos.cadastrar(dados);
      }

      this.limparFormulario();
    } catch (erro) {
      this.erroFormulario.set(this.obterMensagemErro(erro));
    } finally {
      this.salvando.set(false);
    }
  }

  editar(contato: Contato): void {
    this.contatoEditandoId.set(contato.id);
    this.erroFormulario.set(null);

    this.formulario.setValue({
      nome: contato.nome,
      telefone: contato.telefone ?? '',
      email: contato.email ?? '',
      e_cliente: contato.e_cliente,
    });

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  cancelarEdicao(): void {
    this.limparFormulario();
  }

  async excluir(contato: Contato): Promise<void> {
    const confirmou = window.confirm(
      `Excluir o contato "${contato.nome}"?`,
    );

    if (!confirmou) {
      return;
    }

    this.excluindoId.set(contato.id);
    this.erroFormulario.set(null);

    try {
      await this.dadosContatos.excluir(contato.id);

      if (this.contatoEditandoId() === contato.id) {
        this.limparFormulario();
      }
    } catch (erro) {
      this.erroFormulario.set(this.obterMensagemErro(erro));
    } finally {
      this.excluindoId.set(null);
    }
  }

  private limparFormulario(): void {
    this.contatoEditandoId.set(null);

    this.formulario.reset({
      nome: '',
      telefone: '',
      email: '',
      e_cliente: true,
    });
  }

  private normalizarTextoOpcional(valor: string): string | null {
    const texto = valor.trim();
    return texto.length > 0 ? texto : null;
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
