import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Autenticacao } from '@fleiva-studios/shared-data-access';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaInicial {
  private readonly autenticacao = inject(Autenticacao);
  private readonly roteador = inject(Router);

  readonly usuario = this.autenticacao.usuario;

  async sair(): Promise<void> {
    await this.autenticacao.sair();
    await this.roteador.navigateByUrl('/login');
  }
}
