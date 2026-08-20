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
import { RouterLink } from '@angular/router';
import {
  DadosFaixas,
  DadosVersoesFaixa,
  type CadastroFaixa,
  type FaixaCompleta,
  type StatusProducaoFaixa,
  type VersaoFaixa,
} from '@fleiva-studios/shared-data-access';

interface OpcaoStatus {
  valor: StatusProducaoFaixa;
  rotulo: string;
}

@Component({
  selector: 'app-faixas',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './faixas.html',
  styleUrl: './faixas.scss',
})
export class Faixas implements OnInit {
  readonly dadosFaixas = inject(DadosFaixas);
  readonly dadosVersoes = inject(DadosVersoesFaixa);

  private readonly construtorFormulario =
    inject(FormBuilder);

  readonly salvando = signal(false);
  readonly excluindoId = signal<string | null>(null);
  readonly faixaEditandoId = signal<string | null>(null);
  readonly faixaUploadId = signal<string | null>(null);
  readonly enviandoFaixaId = signal<string | null>(null);
  readonly baixandoVersaoId = signal<string | null>(null);
  readonly erroFormulario = signal<string | null>(null);
  readonly erroUpload = signal<string | null>(null);
  readonly processandoLinkVersaoId = signal<string | null>(null)
  readonly mensagemCompartilhamento = signal<string | null>(null);
  readonly erroCompartilhamento = signal<string | null>(null);
  readonly opcoesStatus: readonly OpcaoStatus[] = [
    {
      valor: 'composicao',
      rotulo: 'Composição',
    },
    {
      valor: 'arranjos',
      rotulo: 'Arranjos',
    },
    {
      valor: 'gravacao',
      rotulo: 'Gravação',
    },
    {
      valor: 'edicao',
      rotulo: 'Edição',
    },
    {
      valor: 'mixagem',
      rotulo: 'Mixagem',
    },
    {
      valor: 'masterizacao',
      rotulo: 'Masterização',
    },
    {
      valor: 'concluido',
      rotulo: 'Concluído',
    },
  ];
  readonly formulario = this.construtorFormulario.group({
    projeto_id:
      this.construtorFormulario.nonNullable.control('', [
        Validators.required,
      ]),
    titulo:
      this.construtorFormulario.nonNullable.control('', [
        Validators.required,
      ]),
    bpm:
      this.construtorFormulario.control<number | null>(
        null,
      ),
    tom:
      this.construtorFormulario.control<string | null>(
        null,
      ),
    status_producao:
      this.construtorFormulario.nonNullable.control<StatusProducaoFaixa>(
        'composicao',
        [Validators.required],
      ),
    link_externo_audio:
      this.construtorFormulario.control<string | null>(
        null,
      ),
    observacoes:
      this.construtorFormulario.control<string | null>(
        null,
      ),
  });

  readonly formularioUpload =
    this.construtorFormulario.group({
      versao:
        this.construtorFormulario.nonNullable.control('', [
          Validators.required,
        ]),
      observacoes:
        this.construtorFormulario.control<string | null>(
          null,
        ),
      arquivo:
        this.construtorFormulario.control<File | null>(
          null,
          [Validators.required],
        ),
    });

  ngOnInit(): void {
    void this.carregarDados();
  }

  async carregarDados(): Promise<void> {
    await Promise.all([
      this.dadosFaixas.listar(),
      this.dadosVersoes.listar(),
    ]);
  }

  async salvar(): Promise<void> {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.salvando.set(true);
    this.erroFormulario.set(null);

    try {
      const valor = this.formulario.getRawValue();

      const dados: CadastroFaixa = {
        projeto_id: valor.projeto_id,
        titulo: valor.titulo,
        bpm: valor.bpm,
        tom: this.normalizarTextoOpcional(valor.tom),
        status_producao: valor.status_producao,
        link_externo_audio: this.normalizarTextoOpcional(
          valor.link_externo_audio,
        ),
        observacoes: this.normalizarTextoOpcional(
          valor.observacoes,
        ),
      };

      const faixaId = this.faixaEditandoId();

      if (faixaId) {
        await this.dadosFaixas.atualizar(
          faixaId,
          dados,
        );
      } else {
        await this.dadosFaixas.cadastrar(dados);
      }

      this.limparFormulario();
    } catch (erro) {
      this.erroFormulario.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.salvando.set(false);
    }
  }

  editar(faixa: FaixaCompleta): void {
    this.faixaEditandoId.set(faixa.id);
    this.erroFormulario.set(null);

    this.formulario.setValue({
      projeto_id: faixa.projeto_id,
      titulo: faixa.titulo,
      bpm: faixa.bpm,
      tom: faixa.tom,
      status_producao: faixa.status_producao,
      link_externo_audio: faixa.link_externo_audio,
      observacoes: faixa.observacoes,
    });

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  cancelarEdicao(): void {
    this.limparFormulario();
  }

  async excluir(faixa: FaixaCompleta): Promise<void> {
    if (this.temVersoes(faixa.id)) {
      this.erroFormulario.set(
        'A faixa possui versões armazenadas e não pode ser excluída diretamente.',
      );

      return;
    }

    const confirmou = window.confirm(
      `Excluir a faixa "${faixa.titulo}"?`,
    );

    if (!confirmou) {
      return;
    }

    this.excluindoId.set(faixa.id);
    this.erroFormulario.set(null);

    try {
      await this.dadosFaixas.excluir(faixa.id);

      if (this.faixaEditandoId() === faixa.id) {
        this.limparFormulario();
      }
    } catch (erro) {
      this.erroFormulario.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.excluindoId.set(null);
    }
  }

  abrirUpload(faixaId: string): void {
    if (this.faixaUploadId() === faixaId) {
      this.cancelarUpload();
      return;
    }

    this.limparFormularioUpload();
    this.faixaUploadId.set(faixaId);
  }

  cancelarUpload(): void {
    if (this.enviandoFaixaId()) {
      return;
    }

    this.faixaUploadId.set(null);
    this.limparFormularioUpload();
  }

  selecionarArquivo(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    const arquivo = input.files?.item(0) ?? null;

    this.formularioUpload.controls.arquivo.setValue(
      arquivo,
    );
    this.formularioUpload.controls.arquivo.markAsTouched();
    this.erroUpload.set(null);
  }

  async enviarVersao(
    faixaId: string,
  ): Promise<void> {
    if (this.formularioUpload.invalid) {
      this.formularioUpload.markAllAsTouched();
      return;
    }

    const valor =
      this.formularioUpload.getRawValue();

    if (!valor.arquivo) {
      this.formularioUpload.controls.arquivo.setErrors({
        required: true,
      });
      return;
    }

    if (
      valor.arquivo.size >
      this.dadosVersoes.espacoDisponivelBytes()
    ) {
      this.erroUpload.set(
        'O arquivo é maior que o espaço disponível.',
      );
      return;
    }

    this.enviandoFaixaId.set(faixaId);
    this.erroUpload.set(null);

    try {
      await this.dadosVersoes.enviar({
        faixa_id: faixaId,
        versao: valor.versao,
        observacoes:
          this.normalizarTextoOpcional(
            valor.observacoes,
          ),
        arquivo: valor.arquivo,
      });

      this.faixaUploadId.set(null);
      this.limparFormularioUpload();
    } catch (erro) {
      this.erroUpload.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.enviandoFaixaId.set(null);
    }
  }
  async baixarVersao(
    versao: VersaoFaixa,
  ): Promise<void> {
    if (this.baixandoVersaoId()) {
      return;
    }

    this.baixandoVersaoId.set(versao.id);
    this.erroUpload.set(null);

    try {
      const download =
        await this.dadosVersoes.obterDownload(
          versao.id,
        );

      const link = document.createElement('a');

      link.href = download.url;
      link.download = download.nome_arquivo;
      link.rel = 'noopener noreferrer';

      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (erro) {
      this.erroUpload.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.baixandoVersaoId.set(null);
    }
  }
    async copiarLink(
    versao: VersaoFaixa,
  ): Promise<void> {
    if (this.processandoLinkVersaoId()) {
      return;
    }

    this.processandoLinkVersaoId.set(
      versao.id,
    );

    this.limparRetornoCompartilhamento();

    try {
      const link =
        await this.obterLinkCompartilhamento(
          versao,
        );

      await navigator.clipboard.writeText(link);

      this.mensagemCompartilhamento.set(
        'Link copiado.',
      );
    } catch (erro) {
      this.erroCompartilhamento.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.processandoLinkVersaoId.set(null);
    }
  }

  async compartilharWhatsApp(
    faixa: FaixaCompleta,
    versao: VersaoFaixa,
  ): Promise<void> {
    if (this.processandoLinkVersaoId()) {
      return;
    }

    const janelaWhatsApp = window.open(
      'about:blank',
      '_blank',
    );

    if (janelaWhatsApp) {
      janelaWhatsApp.opener = null;
    }

    this.processandoLinkVersaoId.set(
      versao.id,
    );

    this.limparRetornoCompartilhamento();

    try {
      const link =
        await this.obterLinkCompartilhamento(
          versao,
        );

      const linhas = [
        `Olá! Segue a versão ${versao.versao} da faixa "${faixa.titulo}".`,
        `Projeto: ${faixa.projeto.nome}.`,
        versao.observacoes
          ? `Observações: ${versao.observacoes}`
          : null,
        `Acesse ou baixe o arquivo: ${link}`,
      ];

      const mensagem = linhas
        .filter((linha) => linha !== null)
        .join('\n');

      const urlWhatsApp =
        `https://wa.me/?text=${encodeURIComponent(
          mensagem,
        )}`;

      if (janelaWhatsApp) {
        janelaWhatsApp.location.href =
          urlWhatsApp;
      } else {
        window.location.href = urlWhatsApp;
      }
    } catch (erro) {
      janelaWhatsApp?.close();

      this.erroCompartilhamento.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.processandoLinkVersaoId.set(null);
    }
  }

  async revogarLink(
    versao: VersaoFaixa,
  ): Promise<void> {
    const confirmou = window.confirm(
      'Revogar este link? Quem recebeu não conseguirá mais acessar o arquivo.',
    );

    if (!confirmou) {
      return;
    }

    this.processandoLinkVersaoId.set(
      versao.id,
    );

    this.limparRetornoCompartilhamento();

    try {
      await this.dadosVersoes
        .revogarLinkCompartilhamento(
          versao.id,
        );

      this.mensagemCompartilhamento.set(
        'Link revogado.',
      );
    } catch (erro) {
      this.erroCompartilhamento.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.processandoLinkVersaoId.set(null);
    }
  }

  private async obterLinkCompartilhamento(
    versao: VersaoFaixa,
  ): Promise<string> {
    const token =
      versao.token_compartilhamento ??
      await this.dadosVersoes
        .criarLinkCompartilhamento(
          versao.id,
        );

    return `${window.location.origin}/arquivo/${encodeURIComponent(
      token,
    )}`;
  }

  private limparRetornoCompartilhamento(): void {
    this.mensagemCompartilhamento.set(null);
    this.erroCompartilhamento.set(null);
  }
  versoesDaFaixa(
    faixaId: string,
  ): VersaoFaixa[] {
    return this.dadosVersoes.versoesDaFaixa(
      faixaId,
    );
  }

  temVersoes(faixaId: string): boolean {
    return this.versoesDaFaixa(faixaId).length > 0;
  }

  rotuloStatus(
    status: StatusProducaoFaixa,
  ): string {
    return (
      this.opcoesStatus.find(
        (opcao) => opcao.valor === status,
      )?.rotulo ?? status
    );
  }

  formatarBytes(bytes: number): string {
    if (bytes < 1000) {
      return `${bytes} B`;
    }

    const unidades = [
      'KB',
      'MB',
      'GB',
      'TB',
    ];

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

  formatarData(data: string): string {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'short',
    }).format(new Date(data));
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

  private limparFormulario(): void {
    this.faixaEditandoId.set(null);

    this.formulario.reset({
      projeto_id: '',
      titulo: '',
      bpm: null,
      tom: null,
      status_producao: 'composicao',
      link_externo_audio: null,
      observacoes: null,
    });
  }

  private limparFormularioUpload(): void {
    this.erroUpload.set(null);

    this.formularioUpload.reset({
      versao: '',
      observacoes: null,
      arquivo: null,
    });
  }

  private normalizarTextoOpcional(
    valor: string | null,
  ): string | null {
    const texto = valor?.trim();

    return texto ? texto : null;
  }

  private obterMensagemErro(
    erro: unknown,
  ): string {
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
