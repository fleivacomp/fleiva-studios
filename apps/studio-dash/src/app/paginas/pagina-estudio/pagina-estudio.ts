import {
  Component,
  OnInit,
  computed,
  inject,
} from '@angular/core';

import {
  ActivatedRoute,
  RouterLink,
} from '@angular/router';

import {
  DadosPaginaEstudio,
} from '@fleiva-studios/shared-data-access';

@Component({
  selector: 'app-pagina-estudio',
  standalone: true,
  imports: [],
  templateUrl: './pagina-estudio.html',
  styleUrl: './pagina-estudio.scss',
})
export class PaginaEstudio implements OnInit {
  readonly dados = inject(DadosPaginaEstudio);

  private readonly rota =
    inject(ActivatedRoute);

  private slug = '';

  readonly inicialEstudio = computed(() => {
    const nome =
      this.dados.estudio()?.nome.trim();

    return (
      nome
        ?.charAt(0)
        .toLocaleUpperCase('pt-BR') ||
      'F'
    );
  });

  readonly linkWhatsapp = computed(() => {
    const telefone =
      this.dados.estudio()?.whatsapp;

    if (!telefone) {
      return null;
    }

    const numeros = telefone.replace(
      /\D/g,
      '',
    );

    if (
      numeros.length < 10 ||
      numeros.length > 15
    ) {
      return null;
    }

    return `https://wa.me/${numeros}`;
  });

  readonly usuarioInstagram = computed(() =>
    this.extrairUsuarioInstagram(
      this.dados.estudio()?.instagram,
    ),
  );

  readonly linkInstagram = computed(() => {
    const usuario = this.usuarioInstagram();

    return usuario
      ? `https://www.instagram.com/${usuario}`
      : null;
  });

  readonly anoAtual =
    new Date().getFullYear();

  ngOnInit(): void {
    this.slug =
      this.rota.snapshot.paramMap.get(
        'slug',
      ) ?? '';

    void this.dados.carregar(this.slug);
  }

  recarregar(): void {
    void this.dados.carregar(this.slug);
  }

  formatarPreco(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  }

  formatarDuracao(
    duracaoMinutos: number | null,
  ): string | null {
    if (duracaoMinutos === null) {
      return null;
    }

    if (duracaoMinutos < 60) {
      return `${duracaoMinutos} min`;
    }

    const horas = Math.floor(
      duracaoMinutos / 60,
    );

    const minutos = duracaoMinutos % 60;

    return minutos > 0
      ? `${horas}h ${minutos}min`
      : `${horas}h`;
  }

  formatarOrdem(indice: number): string {
    return String(indice + 1).padStart(
      2,
      '0',
    );
  }

  rotuloQuantidadeFaixas(quantidade: number): string {
    return quantidade === 1
      ? '1 faixa'
      : `${quantidade} faixas`;
  }

  iniciaisAlbum(
    album: {
      projeto: string;
      nome: string;
    },
  ): string {
    const referencia = album.projeto || album.nome;

    return (
      referencia
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((palavra) => palavra.charAt(0))
        .join('')
        .toLocaleUpperCase('pt-BR') || 'FL'
    );
  }

  private extrairUsuarioInstagram(
    valor: string | null | undefined,
  ): string | null {
    if (!valor) {
      return null;
    }

    const texto = valor.trim();

    const usuario = texto
      .replace(
        /^(?:https?:\/\/)?(?:www\.)?instagram\.com\//i,
        '',
      )
      .replace(/^@/, '')
      .split(/[/?#]/)[0]
      .trim();

    return /^[a-zA-Z0-9._]{1,30}$/.test(
      usuario,
    )
      ? usuario
      : null;
  }
}
