import {
  Component,
  OnInit,
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
  obterCorContrasteEstudio,
} from '@fleiva-studios/shared-data-access';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [ReactiveFormsModule],
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
  readonly enviandoLogo = signal(false);
  readonly removendoLogo = signal(false);
  readonly arquivoSelecionado = signal<File | null>(null);
  readonly erroOperacao = signal<string | null>(null);
  readonly mensagemOperacao = signal<string | null>(null);
  readonly corPrevia = signal(COR_PADRAO_ESTUDIO);

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

  ngOnInit(): void {
    void this.carregarDados();
  }

  async carregarDados(): Promise<void> {
    this.erroOperacao.set(null);

    await Promise.all([
      this.dadosEstudio.carregar(),
      this.dadosVersoes.listar(),
    ]);

    const estudio = this.dadosEstudio.estudio();

    if (estudio) {
      this.formulario.controls.nome.setValue(estudio.nome);

      const cor =
        normalizarCorEstudio(estudio.cor_principal) ??
        COR_PADRAO_ESTUDIO;

      this.formularioCor.controls.cor_principal.setValue(cor);
      this.corPrevia.set(cor);
    }
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
        'Nome do estúdio atualizado.',
      );
    } catch (erro) {
      this.erroOperacao.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.salvandoNome.set(false);
    }
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
        'Cor do estúdio atualizada.',
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

  selecionarLogo(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    const arquivo = input.files?.item(0) ?? null;

    this.arquivoSelecionado.set(arquivo);
    this.limparRetornoOperacao();
  }

  async enviarLogo(
    inputArquivo: HTMLInputElement,
  ): Promise<void> {
    const arquivo = this.arquivoSelecionado();

    if (!arquivo) {
      this.erroOperacao.set(
        'Selecione uma imagem para enviar.',
      );
      return;
    }

    this.enviandoLogo.set(true);
    this.limparRetornoOperacao();

    try {
      await this.dadosEstudio.enviarLogo(arquivo);

      this.arquivoSelecionado.set(null);
      inputArquivo.value = '';

      this.mensagemOperacao.set(
        'Logo do estúdio atualizado.',
      );
    } catch (erro) {
      this.erroOperacao.set(
        this.obterMensagemErro(erro),
      );
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
}
