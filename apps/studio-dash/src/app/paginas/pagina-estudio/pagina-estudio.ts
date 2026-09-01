import {
  computed,
  Component,
  effect,
  inject,
  OnInit,
} from '@angular/core';

import {
  ActivatedRoute,
} from '@angular/router';

import {
  DomSanitizer,
  type SafeResourceUrl,
  Title,
} from '@angular/platform-browser';

import {
  DadosPaginaEstudio,
  type EmbedPaginaPublica,
} from '@fleiva-studios/shared-data-access';

interface EmbedPublicoRenderizado {
  chave: string;
  provedor: EmbedPaginaPublica['provedor'];
  rotulo: string;
  src: SafeResourceUrl;
}

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

  private readonly sanitizador =
    inject(DomSanitizer);

  private readonly tituloPagina =
    inject(Title);

  private slug = '';

  constructor() {
    effect(() => {
      const estudio = this.dados.estudio();

      this.tituloPagina.setTitle(
        estudio
          ? `${estudio.nome} — Casa Flêiva`
          : 'Casa Flêiva',
      );
    });
  }

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

  readonly embedsPublicos = computed(() =>
    this.dados
      .embeds()
      .map((embed) =>
        this.criarEmbedPublico(embed),
      )
      .filter(
        (
          embed,
        ): embed is EmbedPublicoRenderizado =>
          embed !== null,
      ),
  );

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

  urlCasa(slug: string): string {
    const slugSeguro = encodeURIComponent(slug);

    if (this.usarDominiosFleiva()) {
      return `https://card.fleiva.com.br/${slugSeguro}`;
    }

    return `/estudio/${slugSeguro}`;
  }

  urlTrabalho(
    slug: string,
    albumId: string,
  ): string {
    const slugSeguro = encodeURIComponent(slug);
    const albumIdSeguro = encodeURIComponent(albumId);

    if (this.usarDominiosFleiva()) {
      return `https://play.fleiva.com.br/${slugSeguro}/trabalho/${albumIdSeguro}`;
    }

    return `/estudio/${slugSeguro}/trabalho/${albumIdSeguro}`;
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

  private usarDominiosFleiva(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }

    const hostname = window.location.hostname
      .trim()
      .toLocaleLowerCase();

    return (
      hostname === 'fleiva.com.br' ||
      hostname.endsWith('.fleiva.com.br')
    );
  }

  private criarEmbedPublico(
    embed: EmbedPaginaPublica,
  ): EmbedPublicoRenderizado | null {
    const urlSegura =
      this.criarUrlEmbedSegura(embed);

    if (!urlSegura) {
      return null;
    }

    return {
      chave: `${embed.provedor}:${embed.url}`,
      provedor: embed.provedor,
      rotulo:
        embed.provedor === 'spotify'
          ? 'Spotify'
          : embed.provedor === 'youtube'
            ? 'YouTube'
            : 'SoundCloud',
      src: this.sanitizador
        .bypassSecurityTrustResourceUrl(
          urlSegura,
        ),
    };
  }

  private criarUrlEmbedSegura(
    embed: EmbedPaginaPublica,
  ): string | null {
    try {
      const url = new URL(embed.url);

      if (url.protocol !== 'https:') {
        return null;
      }

      if (embed.provedor === 'spotify') {
        return this.criarUrlSpotify(url);
      }

      if (embed.provedor === 'youtube') {
        return this.criarUrlYoutube(url);
      }

      if (embed.provedor === 'soundcloud') {
        return this.criarUrlSoundCloud(url);
      }

      return null;
    } catch {
      return null;
    }
  }

  private criarUrlSpotify(
    url: URL,
  ): string | null {
    if (url.hostname !== 'open.spotify.com') {
      return null;
    }

    const partes = url.pathname
      .split('/')
      .filter(Boolean);

    const tipo = partes[0];
    const id = partes[1];

    const tiposPermitidos = new Set([
      'album',
      'artist',
      'episode',
      'playlist',
      'show',
      'track',
    ]);

    if (
      partes.length !== 2 ||
      !tipo ||
      !tiposPermitidos.has(tipo) ||
      !id ||
      !/^[a-zA-Z0-9]+$/.test(id)
    ) {
      return null;
    }

    return `https://open.spotify.com/embed/${tipo}/${id}`;
  }

  private criarUrlYoutube(
    url: URL,
  ): string | null {
    const hostname = url.hostname
      .replace(/^www\./, '')
      .toLocaleLowerCase();

    let videoId: string | null = null;

    if (hostname === 'youtu.be') {
      videoId =
        url.pathname.split('/').filter(Boolean)[0] ??
        null;
    } else if (
      hostname === 'youtube.com' ||
      hostname === 'music.youtube.com'
    ) {
      if (url.pathname === '/watch') {
        videoId = url.searchParams.get('v');
      }
    }

    if (
      !videoId ||
      !/^[a-zA-Z0-9_-]{11}$/.test(videoId)
    ) {
      return null;
    }

    return `https://www.youtube-nocookie.com/embed/${videoId}`;
  }

  private criarUrlSoundCloud(
    url: URL,
  ): string | null {
    const hostname = url.hostname
      .replace(/^www\./, '')
      .toLocaleLowerCase();

    const partes = url.pathname
      .split('/')
      .filter(Boolean);

    if (
      hostname !== 'soundcloud.com' ||
      partes.length < 2
    ) {
      return null;
    }

    const urlCanonica =
      `https://soundcloud.com${url.pathname}`;

    return (
      'https://w.soundcloud.com/player/' +
      `?url=${encodeURIComponent(urlCanonica)}` +
      '&auto_play=false' +
      '&hide_related=true' +
      '&show_comments=false' +
      '&show_user=true' +
      '&show_reposts=false' +
      '&visual=false'
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
