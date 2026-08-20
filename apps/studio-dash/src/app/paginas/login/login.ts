import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Autenticacao } from '@fleiva-studios/shared-data-access';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaLogin {
  private readonly autenticacao = inject(Autenticacao);
  private readonly construtorFormulario = inject(FormBuilder);
  private readonly rota = inject(ActivatedRoute);
  private readonly roteador = inject(Router);

  readonly enviando = signal(false);
  readonly mensagemErro = signal('');

  readonly formulario = this.construtorFormulario.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required],
  });

  async entrar(): Promise<void> {
    if (this.formulario.invalid || this.enviando()) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.enviando.set(true);
    this.mensagemErro.set('');

    try {
      const { email, senha } = this.formulario.getRawValue();

      await this.autenticacao.entrar(email.trim(), senha);

      const retorno = this.rota.snapshot.queryParamMap.get('retorno');
      const destino =
        retorno?.startsWith('/') && !retorno.startsWith('//')
          ? retorno
          : '/';

      await this.roteador.navigateByUrl(destino);
    } catch {
      this.mensagemErro.set('E-mail ou senha inválidos.');
    } finally {
      this.enviando.set(false);
    }
  }
}
