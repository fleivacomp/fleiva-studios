import { Component, inject, signal } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { Autenticacao } from '@fleiva-studios/shared-data-access';

@Component({
  selector: 'app-layout-principal',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './layout-principal.html',
  styleUrl: './layout-principal.scss',
})
export class LayoutPrincipal {
  readonly autenticacao = inject(Autenticacao);

  private readonly roteador = inject(Router);

  readonly menuAberto = signal(false);
  readonly saindo = signal(false);
  readonly erroSaida = signal<string | null>(null);

  alternarMenu(): void {
    this.menuAberto.update((aberto) => !aberto);
  }

  fecharMenu(): void {
    this.menuAberto.set(false);
  }

  async sair(): Promise<void> {
    this.saindo.set(true);
    this.erroSaida.set(null);

    try {
      await this.autenticacao.sair();
      await this.roteador.navigate(['/login']);
    } catch (erro) {
      this.erroSaida.set(
        erro instanceof Error
          ? erro.message
          : 'Não foi possível sair.',
      );
    } finally {
      this.saindo.set(false);
    }
  }
}
