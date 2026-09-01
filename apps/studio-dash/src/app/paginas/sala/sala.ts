import {
  Component,
  OnInit,
  inject,
} from '@angular/core';
import {
  DadosCasa,
  type EstudioCasa,
  type TrabalhoCasa,
} from '@fleiva-studios/shared-data-access';

@Component({
  selector: 'app-sala',
  standalone: true,
  templateUrl: './sala.html',
  styleUrl: './sala.scss',
})
export class Sala implements OnInit {
  readonly dadosCasa = inject(DadosCasa);
  readonly anoAtual = new Date().getFullYear();

  private readonly origemCards =
    'https://card.fleiva.com.br';
  private readonly chaveUltimaPorta =
    'casa-fleiva:ultima-porta';

  ngOnInit(): void {
    void this.dadosCasa.listar();
  }

  abrirPorta(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const estudios = this.dadosCasa.estudios();

    if (estudios.length === 0) {
      document
        .getElementById('cards-da-casa')
        ?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const ultimaPortaId = this.obterUltimaPortaId();
    const disponiveis = estudios.length > 1
      ? estudios.filter(
        (estudio) => estudio.id !== ultimaPortaId,
      )
      : estudios;
    const escolhido = disponiveis[
      Math.floor(Math.random() * disponiveis.length)
    ];

    if (!escolhido) {
      return;
    }

    this.salvarUltimaPortaId(escolhido.id);
    window.location.assign(this.urlCard(escolhido.slug));
  }

  urlCard(slug: string): string {
    return `${this.origemCards}/${encodeURIComponent(slug)}`;
  }

  urlTrabalho(trabalho: TrabalhoCasa): string {
    return `${this.origemCards}/estudio/${encodeURIComponent(
      trabalho.estudio_slug,
    )}/trabalho/${encodeURIComponent(trabalho.album_id)}`;
  }

  inicialEstudio(nome: string): string {
    return nome.trim().charAt(0).toLocaleUpperCase('pt-BR') ||
      'F';
  }

  corEstudio(estudio: EstudioCasa): string {
    return this.normalizarCor(estudio.cor_principal);
  }

  corTrabalho(trabalho: TrabalhoCasa): string {
    return this.normalizarCor(
      trabalho.estudio_cor_principal,
    );
  }

  private normalizarCor(corOriginal: string | null): string {
    const cor = corOriginal?.trim();

    return cor && /^#[0-9a-fA-F]{6}$/.test(cor)
      ? cor
      : '#2f675f';
  }

  private obterUltimaPortaId(): string | null {
    try {
      return window.sessionStorage.getItem(
        this.chaveUltimaPorta,
      );
    } catch {
      return null;
    }
  }

  private salvarUltimaPortaId(estudioId: string): void {
    try {
      window.sessionStorage.setItem(
        this.chaveUltimaPorta,
        estudioId,
      );
    } catch {
      return;
    }
  }
}
