import {
  Component,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  Autenticacao,
  COR_PADRAO_ESTUDIO,
  DadosEstudio,
  DadosVersoesFaixa,
  normalizarCorEstudio,
  normalizarTemaPaginaPublica,
  obterCorContrasteEstudio,
  normalizarSlugEstudio,
  normalizarUrlEmbedPublico,
type EmbedPublico,
type ProvedorEmbedPublico,
  type ConfiguracaoPublicaEstudio,
  type TemaPaginaPublica,
} from '@fleiva-studios/shared-data-access';
import { CropperLogo } from './cropper-logo';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [ReactiveFormsModule, CropperLogo],
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss',
})
export class Perfil implements OnInit {
  readonly autenticacao = inject(Autenticacao);
  readonly dadosEstudio = inject(DadosEstudio);
  readonly dadosVersoes = inject(DadosVersoesFaixa);

  private readonly construtorFormulario =
    inject(FormBuilder);

  readonly salvandoNome = signal(false);
  readonly salvandoCor = signal(false);
  readonly salvandoTemaPaginaPublica = signal(false);
  readonly salvandoPaginaPublica = signal(false);
  readonly enviandoLogo = signal(false);
  readonly removendoLogo = signal(false);
  readonly arquivoSelecionado = signal<File | null>(null);
  readonly erroOperacao = signal<string | null>(null);
  readonly mensagemOperacao = signal<string | null>(null);
  readonly corPrevia = signal(COR_PADRAO_ESTUDIO);
  readonly salvandoSlug = signal(false);
  readonly salvandoEmbeds = signal(false);
readonly embedsPrevia = signal<EmbedPublico[]>([]);
readonly erroEmbeds = signal<string | null>(null);
readonly arquivoParaRecortar = signal<File | null>(null);
readonly mensagemEmbeds = signal<string | null>(null);
  readonly temaPaginaPublicaPrevia =
    signal<TemaPaginaPublica>('grafite');

  readonly opcoesTemaPaginaPublica: readonly {
    valor: TemaPaginaPublica;
    nome: string;
    descricao: string;
  }[] = [
    {
      valor: 'grafite',
      nome: 'Grafite',
      descricao: 'Creme e grafite técnico.',
    },
    {
      valor: 'creme',
      nome: 'Creme',
      descricao: 'Claro, editorial e direto.',
    },
    {
      valor: 'ameixa',
      nome: 'Ameixa',
      descricao: 'Escuro, artístico e noturno.',
    },
  ];

  readonly temaPaginaPublicaAlterado = computed(
    () =>
      this.temaPaginaPublicaPrevia() !==
      this.dadosEstudio.temaPaginaPublica(),
  );

  readonly formulario = this.construtorFormulario.group({
    nome: this.construtorFormulario.nonNullable.control('', [
      Validators.required,
    ]),
  });

  readonly formularioCor = this.construtorFormulario.group({
    cor_principal:
      this.construtorFormulario.nonNullable.control(
        COR_PADRAO_ESTUDIO,
        [
          Validators.required,
          Validators.pattern(/^#[0-9a-fA-F]{6}$/),
        ],
      ),
  });

  readonly formularioPaginaPublica =
    this.construtorFormulario.nonNullable.group({
      descricao_publica: [''],
      cidade: [''],
      whatsapp_publico: [''],
      instagram: [''],
      landing_publicada: [false],
      participar_da_casa: [false],
    });
  readonly formularioSlug =
  this.construtorFormulario.nonNullable.group({
    slug: [
      '',
      [
        Validators.required,
        Validators.maxLength(120),
      ],
    ],
  });
  readonly limiteEmbedsAtingido = computed(
  () => this.embedsPrevia().length >= 4,
);
readonly formularioEmbed =
  this.construtorFormulario.group({
    provedor:
      this.construtorFormulario.nonNullable.control<
        ProvedorEmbedPublico
      >('spotify'),

    url:
      this.construtorFormulario.nonNullable.control(
        '',
        Validators.required,
      ),
  });
readonly embedsAlterados = computed(
  () =>
    JSON.stringify(this.embedsPrevia()) !==
    JSON.stringify(
      this.dadosEstudio.embedsPublicos(),
    ),
);

  ngOnInit(): void {
    void this.carregarDados();
  }

  async carregarDados(): Promise<void> {
  this.erroOperacao.set(null);

  await this.dadosEstudio.carregar();

  if (this.dadosEstudio.possuiModulos()) {
    void this.dadosVersoes.listar();
  }

  const estudio = this.dadosEstudio.estudio();

  if (!estudio) {
    return;
  }

  // O restante do método permanece igual.

    this.formulario.controls.nome.setValue(estudio.nome);
    this.formularioSlug.controls.slug.setValue(
  estudio.slug,
);

    this.formularioPaginaPublica.setValue({
      descricao_publica:
        estudio.descricao_publica ?? '',
      cidade: estudio.cidade ?? '',
      whatsapp_publico:
        estudio.whatsapp_publico ?? '',
      instagram: estudio.instagram ?? '',
      landing_publicada: estudio.landing_publicada,
      participar_da_casa:
        estudio.participar_da_casa ?? false,
    });

    const cor =
      normalizarCorEstudio(estudio.cor_principal) ??
      COR_PADRAO_ESTUDIO;

    this.formularioCor.controls.cor_principal.setValue(cor);
    this.corPrevia.set(cor);
    this.temaPaginaPublicaPrevia.set(
      normalizarTemaPaginaPublica(
        estudio.tema_pagina_publica,
      ),
    );
    this.embedsPrevia.set([
  ...this.dadosEstudio.embedsPublicos(),
]);
  }

  async salvarNome(): Promise<void> {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.salvandoNome.set(true);
    this.limparRetornoOperacao();

    try {
      const valor = this.formulario.getRawValue();

      await this.dadosEstudio.atualizarNome(valor.nome);

      this.mensagemOperacao.set(
        'Nome atualizado.',
      );
    } catch (erro) {
      this.erroOperacao.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.salvandoNome.set(false);
    }
  }

  normalizarSlugFormulario(): void {
  const controle =
    this.formularioSlug.controls.slug;

  controle.setValue(
    normalizarSlugEstudio(controle.value),
  );
}

async salvarSlug(): Promise<void> {
  this.normalizarSlugFormulario();

  if (
    this.formularioSlug.invalid ||
    this.salvandoSlug()
  ) {
    this.formularioSlug.markAllAsTouched();
    return;
  }

  this.salvandoSlug.set(true);
  this.limparRetornoOperacao();

  try {
    const { slug } =
      this.formularioSlug.getRawValue();

    const estudio =
      await this.dadosEstudio.atualizarSlug(slug);

    this.formularioSlug.controls.slug.setValue(
      estudio.slug,
    );

    this.mensagemOperacao.set(
      'Endereço da página atualizado.',
    );
  } catch (erro) {
    this.erroOperacao.set(
      this.obterMensagemErro(erro),
    );
  } finally {
    this.salvandoSlug.set(false);
  }
}

urlPaginaPublica(): string {
  const slug = normalizarSlugEstudio(
    this.formularioSlug.controls.slug.value,
  );

  return `https://card.fleiva.com.br/${slug}`;
}

  selecionarCor(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    const cor = normalizarCorEstudio(input.value);

    if (cor) {
      this.corPrevia.set(cor);
    }

    this.limparRetornoOperacao();
  }

  async salvarCor(): Promise<void> {
    if (this.formularioCor.invalid) {
      this.formularioCor.markAllAsTouched();
      return;
    }

    this.salvandoCor.set(true);
    this.limparRetornoOperacao();

    try {
      const valor = this.formularioCor.getRawValue();
      const estudio = await this.dadosEstudio
        .atualizarCorPrincipal(valor.cor_principal);

      const cor =
        normalizarCorEstudio(estudio.cor_principal) ??
        COR_PADRAO_ESTUDIO;

      this.formularioCor.controls.cor_principal.setValue(cor);
      this.corPrevia.set(cor);
      this.mensagemOperacao.set(
        'Cores Atualizadas.',
      );
    } catch (erro) {
      this.erroOperacao.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.salvandoCor.set(false);
    }
  }

  async restaurarCorPadrao(): Promise<void> {
    this.salvandoCor.set(true);
    this.limparRetornoOperacao();

    try {
      await this.dadosEstudio.atualizarCorPrincipal(null);

      this.formularioCor.controls.cor_principal.setValue(
        COR_PADRAO_ESTUDIO,
      );
      this.corPrevia.set(COR_PADRAO_ESTUDIO);
      this.mensagemOperacao.set(
        'Cor padrão restaurada.',
      );
    } catch (erro) {
      this.erroOperacao.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.salvandoCor.set(false);
    }
  }

  corContrastePrevia(): string {
    return obterCorContrasteEstudio(this.corPrevia());
  }

  selecionarTemaPaginaPublica(
    tema: TemaPaginaPublica,
  ): void {
    this.temaPaginaPublicaPrevia.set(tema);
    this.limparRetornoOperacao();
  }

  async salvarTema(): Promise<void> {
    if (
      this.salvandoTemaPaginaPublica() ||
      !this.temaPaginaPublicaAlterado()
    ) {
      return;
    }

    this.salvandoTemaPaginaPublica.set(true);
    this.limparRetornoOperacao();

    try {
      const estudio = await this.dadosEstudio
        .atualizarTemaPaginaPublica(
          this.temaPaginaPublicaPrevia(),
        );

      this.temaPaginaPublicaPrevia.set(
        normalizarTemaPaginaPublica(
          estudio.tema_pagina_publica,
        ),
      );
      this.mensagemOperacao.set(
        'Página pública atualizada.',
      );
    } catch (erro) {
      this.erroOperacao.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.salvandoTemaPaginaPublica.set(false);
    }
  }

  selecionarLogo(evento: Event): void {
  const input = evento.target as HTMLInputElement;
  const arquivo = input.files?.item(0) ?? null;

  if (!arquivo) {
    return;
  }

  this.arquivoParaRecortar.set(arquivo);
  this.arquivoSelecionado.set(arquivo);
  this.limparRetornoOperacao();
}

cancelarCropper(): void {
  this.arquivoParaRecortar.set(null);
  this.arquivoSelecionado.set(null);
}

async aplicarCropper(blob: Blob): Promise<void> {
  if (this.enviandoLogo()) {
    return;
  }

  this.enviandoLogo.set(true);
  this.limparRetornoOperacao();

  try {
    const arquivo = new File([blob], 'logo.webp', {
      type: 'image/webp',
    });

    await this.dadosEstudio.enviarLogo(arquivo);

    this.arquivoParaRecortar.set(null);
    this.arquivoSelecionado.set(null);
    this.mensagemOperacao.set('Logo do estúdio atualizada.');
  } catch (erro) {
    this.erroOperacao.set(this.obterMensagemErro(erro));
  } finally {
    this.enviandoLogo.set(false);
  }
}


  async removerLogo(): Promise<void> {
    const confirmou = window.confirm(
      'Remover a logo do estúdio?',
    );

    if (!confirmou) {
      return;
    }

    this.removendoLogo.set(true);
    this.limparRetornoOperacao();

    try {
      await this.dadosEstudio.removerLogo();
      this.mensagemOperacao.set(
        'Logo do estúdio removido.',
      );
    } catch (erro) {
      this.erroOperacao.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.removendoLogo.set(false);
    }
  }

  async salvarPaginaPublica(): Promise<void> {
    if (this.salvandoPaginaPublica()) {
      return;
    }

    this.salvandoPaginaPublica.set(true);
    this.limparRetornoOperacao();

    try {
      const valor =
        this.formularioPaginaPublica.getRawValue();

      const configuracao: ConfiguracaoPublicaEstudio = {
        descricao_publica: valor.descricao_publica,
        cidade: valor.cidade,
        whatsapp_publico: valor.whatsapp_publico,
        instagram: valor.instagram,
        landing_publicada: valor.landing_publicada,
        participar_da_casa:
          valor.participar_da_casa,
      };

      const estudio = await this.dadosEstudio
        .atualizarConfiguracaoPublica(configuracao);

      this.formularioPaginaPublica.setValue({
        descricao_publica:
          estudio.descricao_publica ?? '',
        cidade: estudio.cidade ?? '',
        whatsapp_publico:
          estudio.whatsapp_publico ?? '',
        instagram: estudio.instagram ?? '',
        landing_publicada: estudio.landing_publicada,
        participar_da_casa:
          estudio.participar_da_casa ?? false,
      });

      this.mensagemOperacao.set(
        estudio.landing_publicada
          ? 'Página pública atualizada e publicada.'
          : 'Configurações salvas. A página continua em rascunho.',
      );
    } catch (erro) {
      this.erroOperacao.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.salvandoPaginaPublica.set(false);
    }
  }

  inicialEstudio(): string {
    const nome = this.dadosEstudio.estudio()?.nome.trim();

    return nome?.charAt(0).toUpperCase() || 'F';
  }

  formatarModulo(modulo: string): string {
    const rotulos: Record<string, string> = {
      agenda: 'Agenda',
      artistas: 'Projetos',
      faixas: 'Faixas',
      financeiro: 'Acertos',
    };

    return rotulos[modulo] ?? this.formatarTexto(modulo);
  }

  formatarPlano(plano: string): string {
    return this.formatarTexto(plano);
  }

  formatarBytes(bytes: number): string {
    if (bytes < 1000) {
      return `${bytes} B`;
    }

    const unidades = ['KB', 'MB', 'GB', 'TB'];
    let valor = bytes / 1000;
    let indice = 0;

    while (
      valor >= 1000 &&
      indice < unidades.length - 1
    ) {
      valor /= 1000;
      indice += 1;
    }

    return `${new Intl.NumberFormat('pt-BR', {
      maximumFractionDigits: 1,
    }).format(valor)} ${unidades[indice]}`;
  }

  percentualUso(): number {
    const limite = this.dadosVersoes.limiteBytes();

    if (limite <= 0) {
      return 0;
    }

    return Math.min(
      (this.dadosVersoes.usoBytes() / limite) * 100,
      100,
    );
  }

  private formatarTexto(valor: string): string {
    const texto = valor
      .replace(/_/g, ' ')
      .trim()
      .toLocaleLowerCase('pt-BR');

    return texto
      ? texto.charAt(0).toLocaleUpperCase('pt-BR') +
          texto.slice(1)
      : valor;
  }

  private limparRetornoOperacao(): void {
    this.erroOperacao.set(null);
    this.mensagemOperacao.set(null);
  }

  private obterMensagemErro(erro: unknown): string {
    if (
      typeof erro === 'object' &&
      erro !== null &&
      'message' in erro
    ) {
      return String(erro.message);
    }

    return 'Não foi possível concluir a operação.';
  }
  adicionarEmbed(): void {
  if (
    this.formularioEmbed.invalid ||
    this.limiteEmbedsAtingido()
  ) {
    this.formularioEmbed.markAllAsTouched();
    return;
  }

  this.erroEmbeds.set(null);
  this.mensagemEmbeds.set(null);

  const {
    provedor,
    url: urlRecebida,
  } = this.formularioEmbed.getRawValue();

  const url = normalizarUrlEmbedPublico(
    provedor,
    urlRecebida,
  );

  if (!url) {
    this.erroEmbeds.set(
      `O endereço informado para ${this.formatarProvedorEmbed(
        provedor,
      )} não é válido.`,
    );
    return;
  }

  const duplicado = this.embedsPrevia().some(
    (embed) =>
      embed.provedor === provedor &&
      embed.url === url,
  );

  if (duplicado) {
    this.erroEmbeds.set(
      'Este conteúdo já foi adicionado.',
    );
    return;
  }

  this.embedsPrevia.update((embeds) => [
    ...embeds,
    {
      provedor,
      url,
    },
  ]);

  this.formularioEmbed.controls.url.setValue('');
  this.formularioEmbed.controls.url.markAsUntouched();
}

removerEmbed(indice: number): void {
  this.embedsPrevia.update((embeds) =>
    embeds.filter(
      (_, indiceAtual) =>
        indiceAtual !== indice,
    ),
  );

  this.erroEmbeds.set(null);
  this.mensagemEmbeds.set(null);
}

async salvarEmbeds(): Promise<void> {
  if (
    this.salvandoEmbeds() ||
    !this.embedsAlterados()
  ) {
    return;
  }

  this.salvandoEmbeds.set(true);
  this.erroEmbeds.set(null);
  this.mensagemEmbeds.set(null);

  try {
    await this.dadosEstudio
      .atualizarEmbedsPublicos(
        this.embedsPrevia(),
      );

    this.embedsPrevia.set([
      ...this.dadosEstudio.embedsPublicos(),
    ]);

    this.mensagemEmbeds.set(
      'Conteúdos externos atualizados.',
    );
  } catch (erro) {
    this.erroEmbeds.set(
      this.obterMensagemErro(erro),
    );
  } finally {
    this.salvandoEmbeds.set(false);
  }
}

formatarProvedorEmbed(
  provedor: ProvedorEmbedPublico,
): string {
  const nomes: Record<
    ProvedorEmbedPublico,
    string
  > = {
    spotify: 'Spotify',
    youtube: 'YouTube',
    soundcloud: 'SoundCloud',
  };

  return nomes[provedor];
}
}
