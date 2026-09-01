import {
  Component,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import {
  Autenticacao,
  DadosEstudio,
} from '@fleiva-studios/shared-data-access';

const CHAVE_TEMA_ESCURO = 'fleiva-tema-escuro';
const CHAVE_LUZ_BAIXA = 'fleiva-luz-baixa';
const CHAVE_MODO_NOTURNO_ANTIGA =
  'fleiva-modo-noturno';

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
  readonly dadosEstudio = inject(DadosEstudio);

  private readonly roteador = inject(Router);

  readonly menuAberto = signal(false);
  readonly saindo = signal(false);
  readonly erroSaida = signal<string | null>(null);
  readonly temaEscuro = signal(
    this.carregarPreferencia(CHAVE_TEMA_ESCURO),
  );
  readonly luzBaixa = signal(
    this.carregarPreferencia(
      CHAVE_LUZ_BAIXA,
      CHAVE_MODO_NOTURNO_ANTIGA,
    ),
  );

  readonly nomeEstudio = computed(
    () => this.dadosEstudio.estudio()?.nome ?? 'Flêiva',
  );

  readonly inicialEstudio = computed(
    () =>
      this.nomeEstudio()
        .trim()
        .charAt(0)
        .toLocaleUpperCase('pt-BR') || 'F',
  );
readonly destinoInicial = computed(() => {
  if (this.dadosEstudio.possuiModulo('agenda')) {
    return '/agendamentos';
  }

  if (this.dadosEstudio.possuiModulo('artistas')) {
    return '/projetos';
  }

  if (this.dadosEstudio.possuiModulo('faixas')) {
    return '/faixas';
  }

  if (this.dadosEstudio.possuiModulo('financeiro')) {
    return '/acertos';
  }

  return '/perfil';
});
  ngOnInit(): void {
  if (!this.dadosEstudio.estudio()) {
    void this.dadosEstudio.carregar();
  }
}

  alternarMenu(): void {
    this.menuAberto.update((aberto) => !aberto);
  }

  fecharMenu(): void {
    this.menuAberto.set(false);
  }

  alternarTemaEscuro(): void {
    const ativo = !this.temaEscuro();

    this.temaEscuro.set(ativo);
    this.salvarPreferencia(CHAVE_TEMA_ESCURO, ativo);
  }

  alternarLuzBaixa(): void {
    const ativo = !this.luzBaixa();

    this.luzBaixa.set(ativo);
    this.salvarPreferencia(CHAVE_LUZ_BAIXA, ativo);
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

  private carregarPreferencia(
    chave: string,
    chaveLegada?: string,
  ): boolean {
    try {
      const valor = localStorage.getItem(chave);

      if (valor !== null) {
        return valor === 'ativo';
      }

      return chaveLegada
        ? localStorage.getItem(chaveLegada) === 'ativo'
        : false;
    } catch {
      return false;
    }
  }

  private salvarPreferencia(
    chave: string,
    ativa: boolean,
  ): void {
    try {
      localStorage.setItem(
        chave,
        ativa ? 'ativo' : 'inativo',
      );
    } catch {
      // A preferência continua válida durante a sessão atual.
    }
  }
}
