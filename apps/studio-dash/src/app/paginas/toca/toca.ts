import {
  Component,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
} from '@angular/router';
import {
  DadosPaginaEstudio,
  type AlbumPaginaPublica,
  type ExperienciaPaginaPublica,
} from '@fleiva-studios/shared-data-access';

@Component({
  selector: 'app-toca',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './toca.html',
  styleUrl: './toca.scss',
})
export class Toca implements OnInit {
  readonly dados = inject(DadosPaginaEstudio);

  private readonly rota = inject(ActivatedRoute);

  readonly slug = signal<string | null>(null);

  readonly paginaInicial = computed(
    () => this.slug() === null,
  );

  readonly anoAtual = new Date().getFullYear();

  ngOnInit(): void {
    const slug = this.rota.snapshot.paramMap
      .get('slug')
      ?.trim()
      .toLocaleLowerCase() || null;

    this.slug.set(slug);

    if (slug) {
      void this.dados.carregar(slug);
    }
  }

  recarregar(): void {
    const slug = this.slug();

    if (slug) {
      void this.dados.carregar(slug);
    }
  }

  rotaAlbum(albumId: string): string[] {
    const slug = this.slug();

    return slug
      ? ['/', slug, 'trabalho', albumId]
      : ['/'];
  }

  rotaExperiencia(experienciaId: string): string[] {
    return ['/experiencia', experienciaId];
  }

  urlCasa(): string {
    const slug = this.slug();

    return slug
      ? `https://card.fleiva.com.br/${encodeURIComponent(
          slug,
        )}`
      : 'https://card.fleiva.com.br';
  }

  inicialEstudio(): string {
    const nome = this.dados.estudio()?.nome.trim();

    return nome?.charAt(0).toUpperCase() || 'F';
  }

  inicialAlbum(album: AlbumPaginaPublica): string {
    return album.nome.trim().charAt(0).toUpperCase() || 'A';
  }

  inicialExperiencia(
    experiencia: ExperienciaPaginaPublica,
  ): string {
    return experiencia.nome.trim().charAt(0).toUpperCase() || 'E';
  }

  quantidadeFaixas(album: AlbumPaginaPublica): string {
    return album.quantidade_faixas === 1
      ? '1 faixa'
      : `${album.quantidade_faixas} faixas`;
  }
}
