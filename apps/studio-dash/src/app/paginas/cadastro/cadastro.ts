import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import {
  type AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  type ValidationErrors,
  Validators,
} from '@angular/forms';

import {
  RouterLink,
} from '@angular/router';

import {
  Autenticacao,
} from '@fleiva-studios/shared-data-access';

function validarSenhasIguais(
  controle: AbstractControl,
): ValidationErrors | null {
  const senha = controle.get('senha')?.value;
  const confirmacao =
    controle.get('confirmacaoSenha')?.value;

  if (
    typeof senha !== 'string' ||
    typeof confirmacao !== 'string' ||
    !senha ||
    !confirmacao
  ) {
    return null;
  }

  return senha === confirmacao
    ? null
    : {
        senhasDiferentes: true,
      };
}

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './cadastro.html',
  styleUrls: [
    '../login/login.scss',
    './cadastro.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cadastro {
  private readonly autenticacao =
    inject(Autenticacao);

  private readonly construtorFormulario =
    inject(FormBuilder);


  readonly enviando = signal(false);
  readonly cadastroConcluido = signal(false);
  readonly emailCadastrado = signal('');
  readonly mensagemErro = signal('');

  readonly formulario =
    this.construtorFormulario.nonNullable.group(
      {
        nome: [
          '',
          [
            Validators.required,
            Validators.maxLength(120),
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
          ],
        ],
        senha: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
          ],
        ],
        confirmacaoSenha: [
          '',
          Validators.required,
        ],
      },
      {
        validators: validarSenhasIguais,
      },
    );

  async cadastrar(): Promise<void> {
    if (
      this.formulario.invalid ||
      this.enviando()
    ) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.enviando.set(true);
    this.mensagemErro.set('');

    try {
      const {
        nome,
        email,
        senha,
      } = this.formulario.getRawValue();

      const resultado =
        await this.autenticacao.cadastrar(
          nome,
          email,
          senha,
        );

      if (
        resultado.confirmacaoEmailNecessaria
      ) {
        this.emailCadastrado.set(
          email.trim().toLocaleLowerCase(),
        );
        this.cadastroConcluido.set(true);
        return;
      }

      window.location.replace('/');
    } catch {
      this.mensagemErro.set(
        'Não foi possível criar a conta. Verifique os dados e tente novamente.',
      );
    } finally {
      this.enviando.set(false);
    }
  }
}
