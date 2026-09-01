import {
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  ViewChild,
  computed,
  inject,
  signal,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, RouterLink, type ParamMap } from "@angular/router";
import {
  DadosAlbuns,
  DadosFaixas,
  DadosVersoesFaixa,
  TIPO_PUBLICO_ENVIO,
  type AlbumCompleto,
  type CadastroEnvio,
  type ConfiguracaoPublicacaoAlbum,
  type CadastroFaixa,
  type FaixaCompleta,
  type StatusProducaoFaixa,
  type VersaoAlbum,
  type VersaoFaixa,
} from "@fleiva-studios/shared-data-access";

interface OpcaoStatus {
  valor: StatusProducaoFaixa;
  rotulo: string;
}

interface GrupoFaixaEnvio {
  id: string;
  titulo: string;
  versoes: VersaoAlbum[];
}

interface GrupoProjetoEnvio {
  id: string;
  nome: string;
  faixas: GrupoFaixaEnvio[];
}

@Component({
  selector: "app-faixas",
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: "./faixas.html",
  styleUrl: "./faixas.scss",
})
export class Faixas implements OnInit {
  readonly dadosAlbuns = inject(DadosAlbuns);
  readonly dadosFaixas = inject(DadosFaixas);
  readonly dadosVersoes = inject(DadosVersoesFaixa);

  private readonly construtorFormulario = inject(FormBuilder);

  private readonly rota = inject(ActivatedRoute);
  private readonly destruirRef = inject(DestroyRef);

  @ViewChild("reprodutor")
  private reprodutor?: ElementRef<HTMLAudioElement>;

  readonly salvando = signal(false);
  readonly excluindoId = signal<string | null>(null);
  readonly faixaEditandoId = signal<string | null>(null);
  readonly faixaUploadId = signal<string | null>(null);
  readonly enviandoFaixaId = signal<string | null>(null);
  readonly baixandoVersaoId = signal<string | null>(null);
  readonly erroFormulario = signal<string | null>(null);
  readonly erroUpload = signal<string | null>(null);
  readonly processandoLinkVersaoId = signal<string | null>(null);
  readonly mensagemCompartilhamento = signal<string | null>(null);
  readonly erroCompartilhamento = signal<string | null>(null);
  readonly termoBusca = signal("");
  readonly projetoFiltradoId = signal<string | null>(null);
  readonly faixaSelecionadaId = signal<string | null>(null);
  readonly editorAberto = signal(false);
  readonly versaoReproduzindo = signal<VersaoFaixa | null>(null);
  readonly urlReproducao = signal<string | null>(null);
  readonly carregandoReproducaoId = signal<string | null>(null);
  readonly erroReproducao = signal<string | null>(null);
  readonly definindoVersaoPrincipalId = signal<string | null>(null);
  readonly erroVersaoPrincipal = signal<string | null>(null);
  readonly audioTocando = signal(false);
  readonly tempoAtualAudio = signal(0);
  readonly duracaoAudio = signal(0);
  readonly volumeAudio = signal(1);
  readonly montadorEnvioAberto = signal(false);
  readonly termoBuscaEnvio = signal("");
  readonly versoesEnvioIds = signal<string[]>([]);
  readonly criandoEnvio = signal(false);
  readonly erroEnvio = signal<string | null>(null);
  readonly linkEnvioCriado = signal<string | null>(null);
  readonly envioEditandoId = signal<string | null>(null);

  readonly faixasVisiveis = computed(() => {
    const termo = this.termoBusca().trim().toLocaleLowerCase("pt-BR");
    const projetoId = this.projetoFiltradoId();

    const faixasDoProjeto = projetoId
      ? this.dadosFaixas
          .faixas()
          .filter((faixa) => faixa.projeto_id === projetoId)
      : this.dadosFaixas.faixas();

    if (!termo) {
      return faixasDoProjeto;
    }

    return faixasDoProjeto.filter((faixa) =>
      [
        faixa.titulo,
        faixa.projeto.nome,
        faixa.status_producao,
        faixa.tom ?? "",
      ].some((valor) => valor.toLocaleLowerCase("pt-BR").includes(termo)),
    );
  });

  readonly projetoFiltrado = computed(() => {
    const projetoId = this.projetoFiltradoId();

    return (
      this.dadosFaixas.projetos().find((projeto) => projeto.id === projetoId) ??
      null
    );
  });

  readonly faixaSelecionada = computed(() => {
    const faixas = this.faixasVisiveis();
    const faixaId = this.faixaSelecionadaId();

    return faixas.find((faixa) => faixa.id === faixaId) ?? faixas[0] ?? null;
  });

  readonly versoesSelecionadas = computed(() => {
    const faixa = this.faixaSelecionada();

    return faixa ? this.dadosVersoes.versoesDaFaixa(faixa.id) : [];
  });

  readonly versaoPrincipalSelecionada = computed(() => {
    const faixa = this.faixaSelecionada();
    const versoes = this.versoesSelecionadas();

    if (!faixa) {
      return null;
    }

    return (
      versoes.find((versao) => versao.id === faixa.versao_principal_id) ??
      versoes[0] ??
      null
    );
  });

  readonly faixaReproduzindo = computed(() => {
    const versao = this.versaoReproduzindo();

    return versao
      ? (this.dadosFaixas
          .faixas()
          .find((faixa) => faixa.id === versao.faixa_id) ?? null)
      : null;
  });

  readonly versoesEscolhidasEnvio = computed(() => {
    const versoes = this.dadosAlbuns.versoesDisponiveis();

    return this.versoesEnvioIds()
      .map((versaoId) => versoes.find((versao) => versao.id === versaoId))
      .filter((versao): versao is VersaoAlbum => versao !== undefined);
  });

  readonly envios = computed(() =>
    this.dadosAlbuns
      .albuns()
      .filter((album) => album.tipo_publico === TIPO_PUBLICO_ENVIO),
  );

  readonly gruposEnvio = computed<GrupoProjetoEnvio[]>(() => {
    const termo = this.termoBuscaEnvio().trim().toLocaleLowerCase("pt-BR");
    const projetos = new Map<string, GrupoProjetoEnvio>();

    for (const versao of this.dadosAlbuns.versoesDisponiveis()) {
      const projeto = this.dadosFaixas
        .projetos()
        .find((item) => item.id === versao.faixa.projeto_id);
      const nomeProjeto = projeto?.nome ?? "Projeto não encontrado";
      const valoresBusca = [
        nomeProjeto,
        versao.faixa.titulo,
        versao.versao,
        versao.nome_arquivo,
      ];

      if (
        termo &&
        !valoresBusca.some((valor) =>
          valor.toLocaleLowerCase("pt-BR").includes(termo),
        )
      ) {
        continue;
      }

      let grupoProjeto = projetos.get(versao.faixa.projeto_id);

      if (!grupoProjeto) {
        grupoProjeto = {
          id: versao.faixa.projeto_id,
          nome: nomeProjeto,
          faixas: [],
        };
        projetos.set(versao.faixa.projeto_id, grupoProjeto);
      }

      let grupoFaixa = grupoProjeto.faixas.find(
        (item) => item.id === versao.faixa_id,
      );

      if (!grupoFaixa) {
        grupoFaixa = {
          id: versao.faixa_id,
          titulo: versao.faixa.titulo,
          versoes: [],
        };
        grupoProjeto.faixas.push(grupoFaixa);
      }

      grupoFaixa.versoes.push(versao);
    }

    return [...projetos.values()]
      .map((projeto) => ({
        ...projeto,
        faixas: projeto.faixas.sort((a, b) =>
          a.titulo.localeCompare(b.titulo, "pt-BR"),
        ),
      }))
      .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  });
  readonly opcoesStatus: readonly OpcaoStatus[] = [
    {
      valor: "composicao",
      rotulo: "Composição",
    },
    {
      valor: "arranjos",
      rotulo: "Arranjos",
    },
    {
      valor: "gravacao",
      rotulo: "Gravação",
    },
    {
      valor: "edicao",
      rotulo: "Edição",
    },
    {
      valor: "mixagem",
      rotulo: "Mixagem",
    },
    {
      valor: "masterizacao",
      rotulo: "Masterização",
    },
    {
      valor: "concluido",
      rotulo: "Concluído",
    },
  ];
  readonly formulario = this.construtorFormulario.group({
    projeto_id: this.construtorFormulario.nonNullable.control("", [
      Validators.required,
    ]),
    titulo: this.construtorFormulario.nonNullable.control("", [
      Validators.required,
    ]),
    bpm: this.construtorFormulario.control<number | null>(null),
    tom: this.construtorFormulario.control<string | null>(null),
    status_producao:
      this.construtorFormulario.nonNullable.control<StatusProducaoFaixa>(
        "composicao",
        [Validators.required],
      ),
    link_externo_audio: this.construtorFormulario.control<string | null>(null),
    observacoes: this.construtorFormulario.control<string | null>(null),
  });

  readonly formularioUpload = this.construtorFormulario.group({
    versao: this.construtorFormulario.nonNullable.control("", [
      Validators.required,
    ]),
    observacoes: this.construtorFormulario.control<string | null>(null),
    arquivo: this.construtorFormulario.control<File | null>(null, [
      Validators.required,
    ]),
  });

  readonly formularioEnvio = this.construtorFormulario.group({
    projeto_id: this.construtorFormulario.nonNullable.control("", [
      Validators.required,
    ]),
    nome: this.construtorFormulario.nonNullable.control("", [
      Validators.required,
    ]),
    observacoes: this.construtorFormulario.control<string | null>(null),
    publicar: this.construtorFormulario.nonNullable.control(false),
    descricao_publica: this.construtorFormulario.control<string | null>(null),
    download_publico: this.construtorFormulario.nonNullable.control(false),
  });

  ngOnInit(): void {
    void this.inicializar();
  }

  private async inicializar(): Promise<void> {
    await this.carregarDados();

    this.rota.queryParamMap
      .pipe(takeUntilDestroyed(this.destruirRef))
      .subscribe((parametros) => {
        this.aplicarContextoDaRota(parametros);
      });
  }

  private aplicarContextoDaRota(parametros: ParamMap): void {
    const projetoId = parametros.get("projeto")?.trim();
    const faixaId = parametros.get("faixa")?.trim();
    const envioId = parametros.get("envio")?.trim();

    const projeto = this.dadosFaixas
      .projetos()
      .find((item) => item.id === projetoId);

    this.projetoFiltradoId.set(projeto?.id ?? null);

    const envioSolicitado = this.envios().find(
      (envio) =>
        envio.id === envioId &&
        (!projeto || envio.projeto_id === projeto.id),
    );

    if (envioSolicitado) {
      this.abrirMontadorEnvio(envioSolicitado);
      return;
    }

    if (projeto && parametros.get("novoEnvio") === "1") {
      this.abrirMontadorEnvio();
      return;
    }

    if (projeto && parametros.get("novo") === "1") {
      this.abrirNovaFaixa(projeto.id);
      return;
    }

    const faixaSolicitada = this.dadosFaixas
      .faixas()
      .find(
        (faixa) =>
          faixa.id === faixaId && (!projeto || faixa.projeto_id === projeto.id),
      );

    if (faixaSolicitada) {
      this.faixaSelecionadaId.set(faixaSolicitada.id);

      if (parametros.get("upload") === "1") {
        this.abrirUpload(faixaSolicitada.id);
      }

      return;
    }

    if (!projeto) {
      return;
    }

    const primeiraFaixa = this.dadosFaixas
      .faixas()
      .find((faixa) => faixa.projeto_id === projeto.id);

    this.faixaSelecionadaId.set(primeiraFaixa?.id ?? null);
  }

  async carregarDados(): Promise<void> {
    await Promise.all([
      this.dadosFaixas.listar(),
      this.dadosVersoes.listar(),
      this.dadosAlbuns.listar(),
    ]);
  }

  abrirMontadorEnvio(envio?: AlbumCompleto): void {
    const faixa = this.faixaSelecionada();

    this.formularioEnvio.reset({
      projeto_id:
        envio?.projeto_id ??
        faixa?.projeto_id ??
        this.projetoFiltradoId() ??
        "",
      nome: envio?.nome ?? (faixa ? `Envio — ${faixa.titulo}` : ""),
      observacoes: envio?.observacoes ?? null,
      publicar: envio?.publico_na_landing ?? false,
      descricao_publica: envio?.descricao_publica ?? null,
      download_publico: envio?.download_publico ?? false,
    });
    this.termoBuscaEnvio.set("");
    this.versoesEnvioIds.set(
      envio
        ? [...envio.faixas]
            .sort((a, b) => a.ordem - b.ordem)
            .map((item) => item.versao_id)
        : [],
    );
    this.erroEnvio.set(null);
    this.linkEnvioCriado.set(null);
    this.envioEditandoId.set(envio?.id ?? null);
    this.montadorEnvioAberto.set(true);
  }

  fecharMontadorEnvio(): void {
    if (this.criandoEnvio()) {
      return;
    }

    this.montadorEnvioAberto.set(false);
    this.termoBuscaEnvio.set("");
    this.versoesEnvioIds.set([]);
    this.erroEnvio.set(null);
    this.linkEnvioCriado.set(null);
    this.envioEditandoId.set(null);
    this.formularioEnvio.reset({
      projeto_id: "",
      nome: "",
      observacoes: null,
      publicar: false,
      descricao_publica: null,
      download_publico: false,
    });
  }

  atualizarBuscaEnvio(evento: Event): void {
    const input = evento.target as HTMLInputElement;

    this.termoBuscaEnvio.set(input.value);
  }

  versaoEstaNoEnvio(versaoId: string): boolean {
    return this.versoesEnvioIds().includes(versaoId);
  }

  alternarVersaoEnvio(versaoId: string): void {
    this.versoesEnvioIds.update((versoesIds) =>
      versoesIds.includes(versaoId)
        ? versoesIds.filter((id) => id !== versaoId)
        : [...versoesIds, versaoId],
    );
    this.erroEnvio.set(null);
  }

  moverVersaoEnvio(versaoId: string, deslocamento: -1 | 1): void {
    this.versoesEnvioIds.update((versoesIds) => {
      const novaOrdem = [...versoesIds];
      const indiceAtual = novaOrdem.indexOf(versaoId);
      const novoIndice = indiceAtual + deslocamento;

      if (
        indiceAtual < 0 ||
        novoIndice < 0 ||
        novoIndice >= novaOrdem.length
      ) {
        return versoesIds;
      }

      [novaOrdem[indiceAtual], novaOrdem[novoIndice]] = [
        novaOrdem[novoIndice],
        novaOrdem[indiceAtual],
      ];

      return novaOrdem;
    });
  }

  async criarEnvio(): Promise<void> {
    if (this.formularioEnvio.invalid) {
      this.formularioEnvio.markAllAsTouched();
      return;
    }

    if (this.versoesEnvioIds().length === 0) {
      this.erroEnvio.set("Selecione pelo menos um arquivo.");
      return;
    }

    this.criandoEnvio.set(true);
    this.erroEnvio.set(null);
    this.linkEnvioCriado.set(null);

    try {
      const valor = this.formularioEnvio.getRawValue();
      const dados: CadastroEnvio = {
        projeto_id: valor.projeto_id,
        nome: valor.nome,
        observacoes: this.normalizarTextoOpcional(valor.observacoes),
        versoes_ids: this.versoesEnvioIds(),
      };
      const envioId = this.envioEditandoId();
      const envio = envioId
        ? await this.dadosAlbuns.atualizarEnvio(envioId, dados)
        : await this.dadosAlbuns.cadastrarEnvio(dados);

      if (valor.publicar) {
        const configuracaoPublicacao: ConfiguracaoPublicacaoAlbum = {
          tipo_publico: TIPO_PUBLICO_ENVIO,
          descricao_publica: this.normalizarTextoOpcional(
            valor.descricao_publica,
          ),
          reproducao_publica: true,
          download_publico: valor.download_publico,
        };

        await this.dadosAlbuns.publicar(envio.id, configuracaoPublicacao);
      } else if (envioId) {
        const envioAnterior = this.envios().find(
          (item) => item.id === envioId,
        );

        if (envioAnterior?.publico_na_landing) {
          await this.dadosAlbuns.despublicar(envio.id);
        }
      }

      const token =
        envio.token_compartilhamento ??
        (await this.dadosAlbuns.renovarTokenCompartilhamento(envio.id));
      const link = this.montarLinkEnvio(token);

      this.linkEnvioCriado.set(link);

      try {
        await navigator.clipboard.writeText(link);
        this.mensagemCompartilhamento.set(
          envioId ? "Envio atualizado e link copiado." : "Envio criado e link copiado.",
        );
      } catch {
        this.mensagemCompartilhamento.set(
          envioId
            ? "Envio atualizado. Copie o link exibido no painel."
            : "Envio criado. Copie o link exibido no painel.",
        );
      }
    } catch (erro) {
      this.erroEnvio.set(this.obterMensagemErro(erro));
    } finally {
      this.criandoEnvio.set(false);
    }
  }

  async copiarLinkEnvioCriado(): Promise<void> {
    const link = this.linkEnvioCriado();

    if (!link) {
      return;
    }

    try {
      await navigator.clipboard.writeText(link);
      this.mensagemCompartilhamento.set("Link do envio copiado.");
    } catch {
      this.erroEnvio.set("Não foi possível copiar o link automaticamente.");
    }
  }

  atualizarBusca(evento: Event): void {
    const input = evento.target as HTMLInputElement;

    this.termoBusca.set(input.value);
  }

  selecionarFaixa(faixaId: string): void {
    this.faixaSelecionadaId.set(faixaId);
    this.erroUpload.set(null);
    this.erroFormulario.set(null);
    this.erroVersaoPrincipal.set(null);
    this.limparRetornoCompartilhamento();
  }

  abrirNovaFaixa(projetoId = ""): void {
    this.limparFormulario();
    this.formulario.controls.projeto_id.setValue(projetoId);
    this.editorAberto.set(true);
  }

  fecharEditor(): void {
    if (this.salvando()) {
      return;
    }

    this.limparFormulario();
    this.editorAberto.set(false);
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
        observacoes: this.normalizarTextoOpcional(valor.observacoes),
      };

      const faixaId = this.faixaEditandoId();

      let faixaSalvaId = faixaId;

      if (faixaId) {
        await this.dadosFaixas.atualizar(faixaId, dados);
      } else {
        const faixaCriada = await this.dadosFaixas.cadastrar(dados);

        faixaSalvaId = faixaCriada.id;
      }

      this.faixaSelecionadaId.set(faixaSalvaId);
      this.limparFormulario();
      this.editorAberto.set(false);
    } catch (erro) {
      this.erroFormulario.set(this.obterMensagemErro(erro));
    } finally {
      this.salvando.set(false);
    }
  }

  editar(faixa: FaixaCompleta): void {
    this.faixaEditandoId.set(faixa.id);
    this.faixaSelecionadaId.set(faixa.id);
    this.editorAberto.set(true);
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
  }

  cancelarEdicao(): void {
    this.fecharEditor();
  }

  async excluir(faixa: FaixaCompleta): Promise<void> {
    if (this.temVersoes(faixa.id)) {
      this.erroFormulario.set(
        "A faixa possui versões armazenadas e não pode ser excluída diretamente.",
      );

      return;
    }

    const confirmou = window.confirm(`Excluir a faixa "${faixa.titulo}"?`);

    if (!confirmou) {
      return;
    }

    this.excluindoId.set(faixa.id);
    this.erroFormulario.set(null);

    try {
      await this.dadosFaixas.excluir(faixa.id);

      if (this.faixaSelecionadaId() === faixa.id) {
        this.faixaSelecionadaId.set(null);
      }

      if (this.faixaEditandoId() === faixa.id) {
        this.limparFormulario();
      }
    } catch (erro) {
      this.erroFormulario.set(this.obterMensagemErro(erro));
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

    this.formularioUpload.controls.arquivo.setValue(arquivo);
    this.formularioUpload.controls.arquivo.markAsTouched();
    this.erroUpload.set(null);
  }

  async enviarVersao(faixaId: string): Promise<void> {
    if (this.formularioUpload.invalid) {
      this.formularioUpload.markAllAsTouched();
      return;
    }

    const valor = this.formularioUpload.getRawValue();

    if (!valor.arquivo) {
      this.formularioUpload.controls.arquivo.setErrors({
        required: true,
      });
      return;
    }

    if (valor.arquivo.size > this.dadosVersoes.espacoDisponivelBytes()) {
      this.erroUpload.set("O arquivo é maior que o espaço disponível.");
      return;
    }

    this.enviandoFaixaId.set(faixaId);
    this.erroUpload.set(null);

    try {
      await this.dadosVersoes.enviar({
        faixa_id: faixaId,
        versao: valor.versao,
        observacoes: this.normalizarTextoOpcional(valor.observacoes),
        arquivo: valor.arquivo,
      });

      this.faixaUploadId.set(null);
      this.limparFormularioUpload();
    } catch (erro) {
      this.erroUpload.set(this.obterMensagemErro(erro));
    } finally {
      this.enviandoFaixaId.set(null);
    }
  }
  async baixarVersao(versao: VersaoFaixa): Promise<void> {
    if (this.baixandoVersaoId()) {
      return;
    }

    this.baixandoVersaoId.set(versao.id);
    this.erroUpload.set(null);

    try {
      const download = await this.dadosVersoes.obterDownload(versao.id);

      const link = document.createElement("a");

      link.href = download.url;
      link.download = download.nome_arquivo;
      link.rel = "noopener noreferrer";

      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (erro) {
      this.erroUpload.set(this.obterMensagemErro(erro));
    } finally {
      this.baixandoVersaoId.set(null);
    }
  }

  async definirVersaoPrincipal(
    faixa: FaixaCompleta,
    versao: VersaoFaixa,
  ): Promise<void> {
    if (
      this.definindoVersaoPrincipalId() !== null ||
      faixa.versao_principal_id === versao.id
    ) {
      return;
    }

    this.definindoVersaoPrincipalId.set(versao.id);
    this.erroVersaoPrincipal.set(null);

    try {
      await this.dadosFaixas.definirVersaoPrincipal(faixa.id, versao.id);
    } catch (erro) {
      this.erroVersaoPrincipal.set(this.obterMensagemErro(erro));
    } finally {
      this.definindoVersaoPrincipalId.set(null);
    }
  }

  versaoPrincipalDaFaixa(faixa: FaixaCompleta): VersaoFaixa | null {
    const versoes = this.dadosVersoes.versoesDaFaixa(faixa.id);

    return (
      versoes.find((versao) => versao.id === faixa.versao_principal_id) ??
      versoes[0] ??
      null
    );
  }

  async reproduzirVersao(versao: VersaoFaixa): Promise<void> {
    if (this.carregandoReproducaoId() || !this.podeReproduzir(versao)) {
      return;
    }

    if (this.versaoReproduzindo()?.id === versao.id && this.urlReproducao()) {
      await this.alternarReproducao();
      return;
    }

    this.carregandoReproducaoId.set(versao.id);
    this.erroReproducao.set(null);

    try {
      const arquivo = await this.dadosVersoes.obterReproducao(versao.id);

      this.versaoReproduzindo.set(versao);
      this.urlReproducao.set(arquivo.url);

      window.setTimeout(() => {
        void this.tentarIniciarReproducao();
      });
    } catch (erro) {
      this.erroReproducao.set(this.obterMensagemErro(erro));
    } finally {
      this.carregandoReproducaoId.set(null);
    }
  }

  fecharReprodutor(): void {
    const audio = this.reprodutor?.nativeElement;

    if (audio) {
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
    }

    this.versaoReproduzindo.set(null);
    this.urlReproducao.set(null);
    this.erroReproducao.set(null);
    this.audioTocando.set(false);
    this.tempoAtualAudio.set(0);
    this.duracaoAudio.set(0);
  }

  registrarErroReproducao(): void {
    this.audioTocando.set(false);
    this.erroReproducao.set(
      "Não foi possível reproduzir este formato no navegador.",
    );
  }

  async alternarReproducao(): Promise<void> {
    const audio = this.reprodutor?.nativeElement;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        this.audioTocando.set(false);
      }
    } else {
      audio.pause();
    }
  }

  atualizarEstadoReproducao(tocando: boolean): void {
    this.audioTocando.set(tocando);
  }

  atualizarDadosReproducao(evento: Event): void {
    const audio = evento.target as HTMLAudioElement;

    this.tempoAtualAudio.set(
      Number.isFinite(audio.currentTime) ? audio.currentTime : 0,
    );

    this.duracaoAudio.set(Number.isFinite(audio.duration) ? audio.duration : 0);
  }

  buscarNaFaixa(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    const audio = this.reprodutor?.nativeElement;

    if (!audio) {
      return;
    }

    const tempo = Number(input.value);

    if (Number.isFinite(tempo)) {
      audio.currentTime = tempo;
      this.tempoAtualAudio.set(tempo);
    }
  }

  alterarVolume(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    const audio = this.reprodutor?.nativeElement;
    const volume = Number(input.value);

    if (!audio || !Number.isFinite(volume)) {
      return;
    }

    audio.volume = volume;
    this.volumeAudio.set(volume);
  }

  formatarTempoAudio(segundos: number): string {
    if (!Number.isFinite(segundos) || segundos < 0) {
      return "0:00";
    }

    const minutosInteiros = Math.floor(segundos / 60);
    const segundosInteiros = Math.floor(segundos % 60);

    return `${minutosInteiros}:${String(segundosInteiros).padStart(2, "0")}`;
  }

  podeReproduzir(versao: VersaoFaixa): boolean {
    if (versao.tipo_mime?.startsWith("audio/")) {
      return true;
    }

    return /\.(aac|flac|m4a|mp3|ogg|wav)$/i.test(versao.nome_arquivo);
  }

  iniciaisFaixa(faixa: FaixaCompleta): string {
    return faixa.titulo
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((parte) => parte.charAt(0))
      .join("")
      .toLocaleUpperCase("pt-BR");
  }

  private async tentarIniciarReproducao(): Promise<void> {
    try {
      await this.reprodutor?.nativeElement.play();
    } catch {
      // O controle nativo permanece disponível quando autoplay é bloqueado.
    }
  }

  async copiarLink(versao: VersaoFaixa): Promise<void> {
    if (this.processandoLinkVersaoId()) {
      return;
    }

    this.processandoLinkVersaoId.set(versao.id);

    this.limparRetornoCompartilhamento();

    try {
      const link = await this.obterLinkCompartilhamento(versao);

      await navigator.clipboard.writeText(link);

      this.mensagemCompartilhamento.set("Link copiado.");
    } catch (erro) {
      this.erroCompartilhamento.set(this.obterMensagemErro(erro));
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

    const janelaWhatsApp = window.open("about:blank", "_blank");

    if (janelaWhatsApp) {
      janelaWhatsApp.opener = null;
    }

    this.processandoLinkVersaoId.set(versao.id);

    this.limparRetornoCompartilhamento();

    try {
      const link = await this.obterLinkCompartilhamento(versao);

      const linhas = [
        `Salve! Segue a versão ${versao.versao} da faixa "${faixa.titulo}".`,
        `Projeto: ${faixa.projeto.nome}.`,
        versao.observacoes ? `Observações: ${versao.observacoes}` : null,
        `Acesse ou baixe o arquivo: ${link}`,
      ];

      const mensagem = linhas.filter((linha) => linha !== null).join("\n");

      const urlWhatsApp = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;

      if (janelaWhatsApp) {
        janelaWhatsApp.location.href = urlWhatsApp;
      } else {
        window.location.href = urlWhatsApp;
      }
    } catch (erro) {
      janelaWhatsApp?.close();

      this.erroCompartilhamento.set(this.obterMensagemErro(erro));
    } finally {
      this.processandoLinkVersaoId.set(null);
    }
  }

  async revogarLink(versao: VersaoFaixa): Promise<void> {
    const confirmou = window.confirm(
      "Revogar este link? Quem recebeu não conseguirá mais acessar o arquivo.",
    );

    if (!confirmou) {
      return;
    }

    this.processandoLinkVersaoId.set(versao.id);

    this.limparRetornoCompartilhamento();

    try {
      await this.dadosVersoes.revogarLinkCompartilhamento(versao.id);

      this.mensagemCompartilhamento.set("Link revogado.");
    } catch (erro) {
      this.erroCompartilhamento.set(this.obterMensagemErro(erro));
    } finally {
      this.processandoLinkVersaoId.set(null);
    }
  }

  private async obterLinkCompartilhamento(
    versao: VersaoFaixa,
  ): Promise<string> {
    const token =
      versao.token_compartilhamento ??
      (await this.dadosVersoes.criarLinkCompartilhamento(versao.id));

    const tokenSeguro = encodeURIComponent(token);

    const hostname = window.location.hostname.trim().toLocaleLowerCase();

    const dominioFleiva =
      hostname === "fleiva.com.br" || hostname.endsWith(".fleiva.com.br");

    if (dominioFleiva) {
      return `https://play.fleiva.com.br/t/${tokenSeguro}`;
    }

    const origem = window.location.origin.replace(/\/$/, "");

    return `${origem}/arquivo/${tokenSeguro}`;
  }

  private montarLinkEnvio(token: string): string {
    const tokenSeguro = encodeURIComponent(token);
    const hostname = window.location.hostname.trim().toLocaleLowerCase();
    const dominioFleiva =
      hostname === "fleiva.com.br" || hostname.endsWith(".fleiva.com.br");

    if (dominioFleiva) {
      return `https://play.fleiva.com.br/a/${tokenSeguro}`;
    }

    const origem = window.location.origin.replace(/\/$/, "");

    return `${origem}/album/${tokenSeguro}`;
  }

  private limparRetornoCompartilhamento(): void {
    this.mensagemCompartilhamento.set(null);
    this.erroCompartilhamento.set(null);
  }
  versoesDaFaixa(faixaId: string): VersaoFaixa[] {
    return this.dadosVersoes.versoesDaFaixa(faixaId);
  }

  temVersoes(faixaId: string): boolean {
    return this.versoesDaFaixa(faixaId).length > 0;
  }

  rotuloStatus(status: StatusProducaoFaixa): string {
    return (
      this.opcoesStatus.find((opcao) => opcao.valor === status)?.rotulo ??
      status
    );
  }

  formatarBytes(bytes: number): string {
    if (bytes < 1000) {
      return `${bytes} B`;
    }

    const unidades = ["KB", "MB", "GB", "TB"];

    let valor = bytes / 1000;
    let indice = 0;

    while (valor >= 1000 && indice < unidades.length - 1) {
      valor /= 1000;
      indice += 1;
    }

    return `${new Intl.NumberFormat("pt-BR", {
      maximumFractionDigits: 1,
    }).format(valor)} ${unidades[indice]}`;
  }

  formatarData(data: string): string {
    return new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(new Date(data));
  }

  percentualUso(): number {
    const limite = this.dadosVersoes.limiteBytes();

    if (limite <= 0) {
      return 0;
    }

    return Math.min((this.dadosVersoes.usoBytes() / limite) * 100, 100);
  }

  private limparFormulario(): void {
    this.faixaEditandoId.set(null);
    this.erroFormulario.set(null);

    this.formulario.reset({
      projeto_id: "",
      titulo: "",
      bpm: null,
      tom: null,
      status_producao: "composicao",
      link_externo_audio: null,
      observacoes: null,
    });
  }

  private limparFormularioUpload(): void {
    this.erroUpload.set(null);

    this.formularioUpload.reset({
      versao: "",
      observacoes: null,
      arquivo: null,
    });
  }

  private normalizarTextoOpcional(valor: string | null): string | null {
    const texto = valor?.trim();

    return texto ? texto : null;
  }

  private obterMensagemErro(erro: unknown): string {
    if (typeof erro === "object" && erro !== null && "message" in erro) {
      return String(erro.message);
    }

    return "Não foi possível concluir a operação.";
  }
}
