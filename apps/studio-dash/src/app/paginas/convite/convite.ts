import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteSupabase } from '@fleiva-studios/shared-data-access';

@Component({
  selector: 'app-convite',
  imports: [ReactiveFormsModule],
  templateUrl: './convite.html',
  styleUrl: './convite.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Convite {
  private readonly clienteSupabase = inject(ClienteSupabase);
  private readonly construtorFormulario = inject(FormBuilder);
  private readonly roteador = inject(Router);

  readonly enviando = signal(false);
  readonly mensagemErro = signal('');
  readonly concluido = signal(false);

  readonly formulario = this.construtorFormulario.nonNullable.group(
    {
      senha: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
        ],
      ],
      confirmarSenha: [
        '',
        Validators.required,
      ],
    },
    {
      validators: (formulario) => {
        const senha = formulario.get('senha')?.value;
        const confirmarSenha =
          formulario.get('confirmarSenha')?.value;

        return senha === confirmarSenha
          ? null
          : { senhasDiferentes: true };
      },
    },
  );

  async criarSenha(): Promise<void> {
    if (this.formulario.invalid || this.enviando()) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.enviando.set(true);
    this.mensagemErro.set('');

    try {
      const { senha } =
        this.formulario.getRawValue();

      const { error } =
        await this.clienteSupabase.cliente.auth.updateUser({
          password: senha,
        });

      if (error) {
        throw error;
      }

      this.concluido.set(true);

      setTimeout(() => {
        window.location.replace('/');
      }, 1200);
    } catch (erro) {
      console.error(erro);

      this.mensagemErro.set(
        'Não foi possível ativar sua conta. O convite pode ter expirado ou já ter sido utilizado.',
      );
    } finally {
      this.enviando.set(false);
    }
  }
}
