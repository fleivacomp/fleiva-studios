import {
  Component,
  DestroyRef,
  OnInit,
  computed,
  effect,
  inject,
  signal,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, RouterLink, type ParamMap } from "@angular/router";
import {
  DadosAlbuns,
  DadosEstudio,
  DadosProjetosArtisticos,
  TIPO_PUBLICO_ENVIO,
  type AlbumCompleto,
  type AlbumFaixaCompleta,
  type CadastroAlbum,
  type ConfiguracaoPublicacaoAlbum,
  type VersaoAlbum,
} from "@fleiva-studios/shared-data-access";

type AbaEditorAlbum = "conteudo" | "publicacao" | "compartilhar";

@Component({
  selector: "app-albuns",
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: "./albuns.html",
  styleUrl: "./albuns.scss",
})
export class Albuns implements OnInit {
  readonly dadosAlbuns = inject(DadosAlbuns);
  readonly dadosEstudio = inject(DadosEstudio);
  readonly dadosProjetos = inject(DadosProjetosArtisticos);

  private readonly construtorFormulario = inject(FormBuilder);

  private readonly rota = inject(ActivatedRoute);
  private readonly destruirRef = inject(DestroyRef);

  readonly formularioAberto = signal(false);
  readonly albumEditandoId = signal<string | null>(null);
  readonly albumAbertoId = signal<string | null>(null);
  readonly salvandoAlbum = signal(false);
  readonly excluindoAlbumId = signal<string | null>(null);
  readonly adicionandoFaixa = signal(false);
  readonly alterandoVersaoId = signal<string | null>(null);
  readonly removendoFaixaId = signal<string | null>(null);
  readonly ordenandoAlbumId = signal<string | null>(null);
  readonly copiandoLinkId = signal<string | null>(null);
  readonly copiandoLinkNaoListadoId = signal<string | null>(null);
  readonly renovandoLinkNaoListadoId = signal<string | null>(null);
  readonly desativandoLinkNaoListadoId = signal<string | null>(null);
  readonly enviandoCapaId = signal<string | null>(null);
  readonly removendoCapaId = signal<string | null>(null);
  readonly erroOperacao = signal<string | null>(null);
  readonly mensagemOperacao = signal<string | null>(null);
  readonly publicandoAlbumId = signal<string | null>(null);
  readonly despublicandoAlbumId = signal<string | null>(null);
  readonly alterandoCasaAlbumId = signal<string | null>(null);
  readonly projetoFiltradoId = signal<string | null>(null);
  readonly abaEditor = signal<AbaEditorAlbum>("conteudo");

  readonly albumAberto = computed(() => {
    const albumId = this.albumAbertoId();

    return (
      this.dadosAlbuns.albuns().find((album) => album.id === albumId) ?? null
    );
  });

  readonly projetoFiltrado = computed(() => {
    const projetoId = this.projetoFiltradoId();

    return (
      this.dadosProjetos
        .projetos()
        .find((projeto) => projeto.id === projetoId) ?? null
    );
  });

  readonly albunsVisiveis = computed(() => {
    const projetoId = this.projetoFiltradoId();
    const albuns = this.dadosAlbuns
      .albuns()
      .filter(
  (album) =>
    album.tipo_publico !== TIPO_PUBLICO_ENVIO ||
    album.publico_na_landing,
);

    return projetoId
      ? albuns.filter((album) => album.projeto_id === projetoId)
      : albuns;
  });

  readonly formularioAlbum = this.construtorFormulario.group({
    projeto_id: this.construtorFormulario.nonNullable.control("", [
      Validators.required,
    ]),
    nome: this.construtorFormulario.nonNullable.control("", [
      Validators.required,
    ]),
    observacoes: this.construtorFormulario.control<string | null>(null),
  });

  readonly formularioFaixa = this.construtorFormulario.group({
    versao_id: this.construtorFormulario.nonNullable.control("", [
      Validators.required,
    ]),
  });
  readonly formularioPublicacao = this.construtorFormulario.nonNullable.group({
    tipo_publico: "",
    descricao_publica: "",
    reproducao_publica: false,
    download_publico: false,
    confirmacao: [false, Validators.requiredTrue],
  });
  constructor() {
    effect(() => {
      const album = this.albumAberto();

      this.formularioPublicacao.reset(
        {
          tipo_publico: album?.tipo_publico ?? "",
          descricao_publica: album?.descricao_publica ?? "",
          reproducao_publica: album?.reproducao_publica ?? false,
          download_publico: album?.download_publico ?? false,
          confirmacao: false,
        },
        {
          emitEvent: false,
        },
      );
    });
  }

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
    const albumId = parametros.get("album")?.trim();

    const projeto = this.dadosProjetos
      .projetos()
      .find((item) => item.id === projetoId);

    this.projetoFiltradoId.set(projeto?.id ?? null);

    if (projeto && parametros.get("novo") === "1") {
      this.abrirNovoAlbum(projeto.id);
      return;
    }

    const album = this.dadosAlbuns
      .albuns()
      .find(
        (item) =>
          item.id === albumId && (!projeto || item.projeto_id === projeto.id),
      );

    if (album) {
      this.abrirAlbum(album.id);
    }
  }

  async carregarDados(): Promise<void> {
    this.erroOperacao.set(null);

    const carregarEstudio = this.dadosEstudio.estudio()
      ? Promise.resolve()
      : this.dadosEstudio.carregar();

    await Promise.all([
      this.dadosAlbuns.listar(),
      carregarEstudio,
      this.dadosProjetos.listar(),
    ]);
  }

  abrirNovoAlbum(projetoId = ""): void {
    this.albumEditandoId.set(null);
    this.formularioAberto.set(true);
    this.limparRetorno();

    this.formularioAlbum.reset({
      projeto_id: projetoId,
      nome: "",
      observacoes: null,
    });

    this.rolarPara("formulario-album");
  }

  editarAlbum(album: AlbumCompleto): void {
    this.albumEditandoId.set(album.id);
    this.formularioAberto.set(true);
    this.limparRetorno();

    this.formularioAlbum.setValue({
      projeto_id: album.projeto_id,
      nome: album.nome,
      observacoes: album.observacoes,
    });

    this.rolarPara("formulario-album");
  }

  cancelarFormulario(): void {
    this.formularioAberto.set(false);
    this.albumEditandoId.set(null);

    this.formularioAlbum.reset({
      projeto_id: "",
      nome: "",
      observacoes: null,
    });
  }

  async salvarAlbum(): Promise<void> {
    if (this.formularioAlbum.invalid) {
      this.formularioAlbum.markAllAsTouched();
      return;
    }

    this.salvandoAlbum.set(true);
    this.limparRetorno();

    try {
      const valor = this.formularioAlbum.getRawValue();

      const dados: CadastroAlbum = {
        projeto_id: valor.projeto_id,
        nome: valor.nome,
        observacoes: this.normalizarTextoOpcional(valor.observacoes),
      };

      const albumEditandoId = this.albumEditandoId();

      if (albumEditandoId) {
        await this.dadosAlbuns.atualizar(albumEditandoId, dados);

        this.albumAbertoId.set(albumEditandoId);
        this.mensagemOperacao.set("Álbum atualizado.");
      } else {
        const album = await this.dadosAlbuns.cadastrar(dados);

        this.albumAbertoId.set(album.id);
        this.mensagemOperacao.set("Álbum criado. Agora organize as faixas.");
      }

      this.cancelarFormulario();

      window.setTimeout(() => {
        this.rolarPara("editor-sequencia");
      });
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.salvandoAlbum.set(false);
    }
  }

  abrirAlbum(albumId: string): void {
    this.albumAbertoId.set(albumId);
    this.abaEditor.set("conteudo");
    this.formularioFaixa.reset({
      versao_id: "",
    });
    this.limparRetorno();

    window.setTimeout(() => {
      this.rolarPara("editor-sequencia");
    });
  }

  fecharAlbum(): void {
    this.albumAbertoId.set(null);
    this.abaEditor.set("conteudo");
    this.formularioFaixa.reset({
      versao_id: "",
    });
  }

  linkPublico(album: AlbumCompleto): string {
    const slug = this.dadosEstudio.estudio()?.slug;

    if (!slug) {
      throw new Error("O perfil do estúdio ainda não foi carregado.");
    }

    const slugSeguro = encodeURIComponent(slug);
    const albumIdSeguro = encodeURIComponent(album.id);

    if (this.usarDominiosFleiva()) {
      return `https://play.fleiva.com.br/${slugSeguro}/trabalho/${albumIdSeguro}`;
    }

    const origem = window.location.origin.replace(/\/$/, "");

    return `${origem}/estudio/${slugSeguro}/trabalho/${albumIdSeguro}`;
  }

  linkNaoListado(album: AlbumCompleto, tokenRecebido?: string): string {
    const token = tokenRecebido ?? album.token_compartilhamento;

    if (!token) {
      throw new Error("Gere um link não listado para este álbum.");
    }

    const tokenSeguro = encodeURIComponent(token);

    if (this.usarDominiosFleiva()) {
      return `https://play.fleiva.com.br/a/${tokenSeguro}`;
    }

    const origem = window.location.origin.replace(/\/$/, "");

    return `${origem}/album/${tokenSeguro}`;
  }

  abrirPaginaPublica(album: AlbumCompleto): void {
    if (!album.publico_na_landing) {
      this.erroOperacao.set(
        "Publique o álbum antes de abrir a página pública.",
      );
      return;
    }

    this.limparRetorno();

    try {
      window.open(this.linkPublico(album), "_blank", "noopener,noreferrer");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    }
  }
readonly publicandoNaMinhaPaginaId = signal<string | null>(null);

albumPertenceAoUsuario(album: AlbumCompleto): boolean {
  const estudioId = this.dadosEstudio.estudio()?.id;

  return !!estudioId && album.estudio_id === estudioId;
}

async publicarNaMinhaPagina(album: AlbumCompleto): Promise<void> {
  if (this.publicandoNaMinhaPaginaId()) {
    return;
  }

  if (album.faixas.length === 0) {
    this.erroOperacao.set("Adicione pelo menos uma faixa antes de publicar.");
    return;
  }

  this.publicandoNaMinhaPaginaId.set(album.id);
  this.limparRetorno();

  try {
    const valor = this.formularioPublicacao.getRawValue();

    const configuracao: ConfiguracaoPublicacaoAlbum = {
      tipo_publico: this.normalizarTextoOpcional(valor.tipo_publico),
      descricao_publica: this.normalizarTextoOpcional(valor.descricao_publica),
      reproducao_publica: valor.reproducao_publica,
      download_publico: valor.download_publico,
    };

    await this.dadosAlbuns.publicarNaMinhaPagina(album.id, configuracao);

    this.mensagemOperacao.set("Trabalho publicado na sua página.");
  } catch (erro) {
    this.erroOperacao.set(this.obterMensagemErro(erro));
  } finally {
    this.publicandoNaMinhaPaginaId.set(null);
  }
}
  async copiarLink(album: AlbumCompleto): Promise<void> {
    if (!album.publico_na_landing || this.copiandoLinkId()) {
      if (!album.publico_na_landing) {
        this.erroOperacao.set("Publique o álbum antes de copiar o link.");
      }

      return;
    }

    this.copiandoLinkId.set(album.id);
    this.limparRetorno();

    try {
      await this.copiarTexto(this.linkPublico(album));

      this.mensagemOperacao.set("Link do álbum copiado.");
    } catch {
      this.erroOperacao.set("Não foi possível copiar o link automaticamente.");
    } finally {
      this.copiandoLinkId.set(null);
    }
  }

  async copiarLinkNaoListado(album: AlbumCompleto): Promise<void> {
    if (
      album.faixas.length === 0 ||
      this.copiandoLinkNaoListadoId() ||
      this.renovandoLinkNaoListadoId() ||
      this.desativandoLinkNaoListadoId()
    ) {
      return;
    }

    this.copiandoLinkNaoListadoId.set(album.id);
    this.limparRetorno();

    try {
      const tokenExistente = album.token_compartilhamento;

      const token =
        tokenExistente ??
        (await this.dadosAlbuns.renovarTokenCompartilhamento(album.id));

      await this.copiarTexto(this.linkNaoListado(album, token));

      this.mensagemOperacao.set(
        tokenExistente
          ? "Link para o cliente copiado."
          : "Link para o cliente gerado e copiado.",
      );
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.copiandoLinkNaoListadoId.set(null);
    }
  }

  async renovarLinkNaoListado(album: AlbumCompleto): Promise<void> {
    if (
      album.faixas.length === 0 ||
      this.copiandoLinkNaoListadoId() ||
      this.renovandoLinkNaoListadoId() ||
      this.desativandoLinkNaoListadoId()
    ) {
      return;
    }

    if (album.token_compartilhamento) {
      const confirmou = window.confirm(
        "Gerar um novo link não listado? O link anterior deixará de funcionar.",
      );

      if (!confirmou) {
        return;
      }
    }

    this.renovandoLinkNaoListadoId.set(album.id);
    this.limparRetorno();

    try {
      await this.dadosAlbuns.renovarTokenCompartilhamento(album.id);

      this.mensagemOperacao.set(
        album.token_compartilhamento
          ? "Novo link gerado. O link anterior foi revogado."
          : "Link não listado gerado.",
      );
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.renovandoLinkNaoListadoId.set(null);
    }
  }

  async desativarLinkNaoListado(album: AlbumCompleto): Promise<void> {
    if (
      !album.token_compartilhamento ||
      this.copiandoLinkNaoListadoId() ||
      this.renovandoLinkNaoListadoId() ||
      this.desativandoLinkNaoListadoId()
    ) {
      return;
    }

    const confirmou = window.confirm(
      "Desativar o link privado? O endereço enviado anteriormente deixará de funcionar.",
    );

    if (!confirmou) {
      return;
    }

    this.desativandoLinkNaoListadoId.set(album.id);
    this.limparRetorno();

    try {
      await this.dadosAlbuns.desativarTokenCompartilhamento(album.id);

      this.mensagemOperacao.set("Link privado desativado.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.desativandoLinkNaoListadoId.set(null);
    }
  }

  enviarWhatsAppPublico(album: AlbumCompleto): void {
    if (!album.publico_na_landing) {
      this.erroOperacao.set("Publique o álbum antes de compartilhar.");
      return;
    }

    this.limparRetorno();

    const mensagem = [
      `Olá! Separei o álbum "${album.nome}" de ${album.projeto.nome} para você ouvir:`,
      "",
      this.linkPublico(album),
    ].join("\n");

    const url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  async enviarParaCliente(album: AlbumCompleto): Promise<void> {
    if (
      album.faixas.length === 0 ||
      this.copiandoLinkNaoListadoId() ||
      this.renovandoLinkNaoListadoId() ||
      this.desativandoLinkNaoListadoId()
    ) {
      return;
    }

    const janelaWhatsApp = window.open("about:blank", "_blank");

    this.copiandoLinkNaoListadoId.set(album.id);
    this.limparRetorno();

    try {
      const token =
        album.token_compartilhamento ??
        (await this.dadosAlbuns.renovarTokenCompartilhamento(album.id));

      const mensagem = [
        `Olá! Separei o álbum "${album.nome}" de ${album.projeto.nome} para você ouvir:`,
        "",
        this.linkNaoListado(album, token),
      ].join("\n");

      const url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;

      if (janelaWhatsApp) {
        janelaWhatsApp.opener = null;
        janelaWhatsApp.location.replace(url);
      } else {
        await this.copiarTexto(this.linkNaoListado(album, token));

        this.mensagemOperacao.set(
          "O navegador bloqueou o WhatsApp. O link privado foi copiado.",
        );
      }
    } catch (erro) {
      janelaWhatsApp?.close();

      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.copiandoLinkNaoListadoId.set(null);
    }
  }

  async excluirAlbum(album: AlbumCompleto): Promise<void> {
    const confirmou = window.confirm(
      `Excluir o álbum "${album.nome}"? Os arquivos das faixas continuarão no acervo.`,
    );

    if (!confirmou) {
      return;
    }

    this.excluindoAlbumId.set(album.id);
    this.limparRetorno();

    try {
      await this.dadosAlbuns.excluir(album.id);

      if (this.albumAbertoId() === album.id) {
        this.fecharAlbum();
      }

      if (this.albumEditandoId() === album.id) {
        this.cancelarFormulario();
      }

      this.mensagemOperacao.set(
        "Álbum excluído. As faixas continuam no acervo.",
      );
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.excluindoAlbumId.set(null);
    }
  }

  async selecionarCapa(album: AlbumCompleto, evento: Event): Promise<void> {
    const input = evento.target as HTMLInputElement;
    const arquivo = input.files?.item(0) ?? null;

    if (!arquivo || this.enviandoCapaId()) {
      input.value = "";
      return;
    }

    this.enviandoCapaId.set(album.id);
    this.limparRetorno();

    try {
      await this.dadosAlbuns.enviarCapa(album.id, arquivo);

      this.mensagemOperacao.set("Capa do álbum atualizada.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      input.value = "";
      this.enviandoCapaId.set(null);
    }
  }

  async usarCapaProjeto(album: AlbumCompleto): Promise<void> {
    if (!album.capa_caminho || this.removendoCapaId()) {
      return;
    }

    const destino = album.projeto.capa_caminho
      ? "a capa do projeto"
      : "a capa padrão do Fleiva";

    const confirmou = window.confirm(
      `Remover a capa própria deste álbum e usar ${destino}?`,
    );

    if (!confirmou) {
      return;
    }

    this.removendoCapaId.set(album.id);
    this.limparRetorno();

    try {
      await this.dadosAlbuns.removerCapa(album.id);

      this.mensagemOperacao.set(
        album.projeto.capa_caminho
          ? "O álbum voltou a usar a capa do projeto."
          : "O álbum voltou a usar a capa padrão.",
      );
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.removendoCapaId.set(null);
    }
  }

  async adicionarFaixa(album: AlbumCompleto): Promise<void> {
    if (this.formularioFaixa.invalid) {
      this.formularioFaixa.markAllAsTouched();
      return;
    }

    this.adicionandoFaixa.set(true);
    this.limparRetorno();

    try {
      const valor = this.formularioFaixa.getRawValue();
      const versao = this.dadosAlbuns
        .versoesDisponiveis()
        .find((item) => item.id === valor.versao_id);

      if (!versao || versao.faixa.projeto_id !== album.projeto_id) {
        throw new Error("Selecione uma versão válida deste projeto.");
      }

      await this.dadosAlbuns.adicionarFaixa(
        album.id,
        versao.faixa_id,
        versao.id,
      );

      this.formularioFaixa.reset({
        versao_id: "",
      });

      this.mensagemOperacao.set("Versão adicionada ao trabalho.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.adicionandoFaixa.set(false);
    }
  }

  async trocarVersao(item: AlbumFaixaCompleta, evento: Event): Promise<void> {
    const select = evento.target as HTMLSelectElement;
    const versaoId = select.value;

    if (!versaoId || versaoId === item.versao_id) {
      return;
    }

    this.alterandoVersaoId.set(item.id);
    this.limparRetorno();

    try {
      await this.dadosAlbuns.trocarVersao(item.id, versaoId);

      this.mensagemOperacao.set("Versão atualizada.");
    } catch (erro) {
      select.value = item.versao_id;
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.alterandoVersaoId.set(null);
    }
  }

  async removerFaixa(item: AlbumFaixaCompleta): Promise<void> {
    this.removendoFaixaId.set(item.id);
    this.limparRetorno();

    try {
      await this.dadosAlbuns.removerFaixa(item.id);
      this.mensagemOperacao.set(
        "Faixa removida do álbum. O arquivo permanece no acervo.",
      );
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.removendoFaixaId.set(null);
    }
  }

  async moverFaixa(
    album: AlbumCompleto,
    itemId: string,
    deslocamento: -1 | 1,
  ): Promise<void> {
    const ids = album.faixas.map((item) => item.id);
    const indiceAtual = ids.indexOf(itemId);
    const novoIndice = indiceAtual + deslocamento;

    if (indiceAtual < 0 || novoIndice < 0 || novoIndice >= ids.length) {
      return;
    }

    [ids[indiceAtual], ids[novoIndice]] = [ids[novoIndice], ids[indiceAtual]];

    this.ordenandoAlbumId.set(album.id);
    this.limparRetorno();

    try {
      await this.dadosAlbuns.reordenar(album.id, ids);
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.ordenandoAlbumId.set(null);
    }
  }

  versoesDisponiveis(album: AlbumCompleto): VersaoAlbum[] {
    const versoesJaAdicionadas = new Set(
      album.faixas.map((item) => item.versao_id),
    );

    return this.dadosAlbuns
      .faixasDisponiveisDoProjeto(album.projeto_id)
      .flatMap((item) => item.versoes)
      .filter((versao) => !versoesJaAdicionadas.has(versao.id));
  }

  selecionarAba(aba: AbaEditorAlbum): void {
    this.abaEditor.set(aba);
  }

  capaAlbum(album: AlbumCompleto): string | null {
    return this.dadosAlbuns.capaUrl(album);
  }

  origemCapa(album: AlbumCompleto): string {
    if (album.capa_caminho) {
      return "Capa própria do álbum";
    }

    if (album.projeto.capa_caminho) {
      return "Usando a capa do projeto";
    }

    return "Usando a capa padrão";
  }

  iniciaisProjeto(album: AlbumCompleto): string {
    const palavras = album.projeto.nome.trim().split(/\s+/).filter(Boolean);

    return (
      palavras
        .slice(0, 2)
        .map((palavra) => palavra.charAt(0))
        .join("")
        .toLocaleUpperCase("pt-BR") || "FL"
    );
  }
  async publicarAlbum(album: AlbumCompleto): Promise<void> {
    if (
      this.formularioPublicacao.invalid ||
      this.publicandoAlbumId() ||
      this.despublicandoAlbumId()
    ) {
      this.formularioPublicacao.markAllAsTouched();
      return;
    }

    this.publicandoAlbumId.set(album.id);
    this.limparRetorno();

    try {
      const valor = this.formularioPublicacao.getRawValue();

      const configuracao: ConfiguracaoPublicacaoAlbum = {
        tipo_publico: this.normalizarTextoOpcional(valor.tipo_publico),
        descricao_publica: this.normalizarTextoOpcional(
          valor.descricao_publica,
        ),
        reproducao_publica: valor.reproducao_publica,
        download_publico: valor.download_publico,
      };

      await this.dadosAlbuns.publicar(album.id, configuracao);

      this.mensagemOperacao.set(
        album.publico_na_landing
          ? "Publicação do álbum atualizada."
          : "Álbum publicado na página do estúdio.",
      );
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.publicandoAlbumId.set(null);
    }
  }

  async despublicarAlbum(album: AlbumCompleto): Promise<void> {
    if (this.publicandoAlbumId() || this.despublicandoAlbumId()) {
      return;
    }

    this.despublicandoAlbumId.set(album.id);
    this.limparRetorno();

    try {
      await this.dadosAlbuns.despublicar(album.id);

      this.mensagemOperacao.set(
        album.publico_na_casa
          ? "Álbum removido da página pública e da Casa."
          : "Álbum removido da página pública.",
      );
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.despublicandoAlbumId.set(null);
    }
  }

  async alternarExibicaoNaCasa(album: AlbumCompleto): Promise<void> {
    if (!album.publico_na_landing || this.alterandoCasaAlbumId()) {
      return;
    }

    const exibir = !album.publico_na_casa;

    this.alterandoCasaAlbumId.set(album.id);
    this.limparRetorno();

    try {
      await this.dadosAlbuns.definirExibicaoNaCasa(album.id, exibir);

      this.mensagemOperacao.set(
        exibir
          ? "Trabalho adicionado à Casa Flêiva."
          : "Trabalho removido da Casa Flêiva.",
      );
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.alterandoCasaAlbumId.set(null);
    }
  }

  rotuloQuantidadeFaixas(quantidade: number): string {
    return quantidade === 1 ? "1 faixa" : `${quantidade} faixas`;
  }

  private usarDominiosFleiva(): boolean {
    if (typeof window === "undefined") {
      return false;
    }

    const hostname = window.location.hostname.trim().toLocaleLowerCase();

    return hostname === "fleiva.com.br" || hostname.endsWith(".fleiva.com.br");
  }

  private normalizarTextoOpcional(valor: string | null): string | null {
    const texto = valor?.trim();

    return texto ? texto : null;
  }

  private limparRetorno(): void {
    this.erroOperacao.set(null);
    this.mensagemOperacao.set(null);
  }

  private async copiarTexto(texto: string): Promise<void> {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(texto);
      return;
    }

    const campoTemporario = document.createElement("textarea");

    campoTemporario.value = texto;
    campoTemporario.setAttribute("readonly", "");
    campoTemporario.style.position = "fixed";
    campoTemporario.style.opacity = "0";

    document.body.appendChild(campoTemporario);
    campoTemporario.select();

    const copiado = document.execCommand("copy");

    campoTemporario.remove();

    if (!copiado) {
      throw new Error("Cópia não permitida.");
    }
  }

  private rolarPara(elementoId: string): void {
    window.setTimeout(() => {
      document.getElementById(elementoId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  private obterMensagemErro(erro: unknown): string {
    if (typeof erro === "object" && erro !== null && "message" in erro) {
      return String(erro.message);
    }

    return "Não foi possível concluir a operação.";
  }
}
