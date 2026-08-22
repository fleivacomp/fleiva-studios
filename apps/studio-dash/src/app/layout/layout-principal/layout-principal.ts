import { Component, inject, signal, OnInit, computed, } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, } from '@angular/router';
import { Autenticacao, DadosEstudio } from '@fleiva-studios/shared-data-access';

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
export class LayoutPrincipal implements OnInit {
  readonly autenticacao = inject(Autenticacao);

  private readonly roteador = inject(Router);

  readonly menuAberto = signal(false);
  readonly saindo = signal(false);
  readonly erroSaida = signal<string | null>(null);
  readonly dadosEstudio = inject(DadosEstudio);

readonly nomeEstudio = computed(
  () => this.dadosEstudio.estudio()?.nome ?? 'Fleiva',
);

readonly inicialEstudio = computed(
  () =>
    this.nomeEstudio()
      .trim()
      .charAt(0)
      .toLocaleUpperCase('pt-BR') || 'F',
);
ngOnInit(): void {
  void this.dadosEstudio.carregar();
}
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
