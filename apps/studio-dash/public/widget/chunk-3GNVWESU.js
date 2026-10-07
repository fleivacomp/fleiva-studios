import {
  ActivatedRoute,
  Component,
  DadosArquivoCompartilhado,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IMBOO5ID.js";

// apps/studio-dash/src/app/paginas/arquivo-compartilhado/arquivo-compartilhado.ts
function ArquivoCompartilhado_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 1);
    \u0275\u0275domElement(1, "span", 3);
    \u0275\u0275domElementStart(2, "p");
    \u0275\u0275text(3, "Preparando arquivo...");
    \u0275\u0275domElementEnd()();
  }
}
function ArquivoCompartilhado_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 7);
    \u0275\u0275domListener("click", function ArquivoCompartilhado_Conditional_2_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.recarregar());
    });
    \u0275\u0275text(1, " Tentar novamente ");
    \u0275\u0275domElementEnd();
  }
}
function ArquivoCompartilhado_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 2)(1, "div", 4);
    \u0275\u0275text(2, "F");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 5);
    \u0275\u0275text(4, "LINK COMPARTILHADO");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "h1");
    \u0275\u0275text(6, "Arquivo indispon\xEDvel");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(9, ArquivoCompartilhado_Conditional_2_Conditional_9_Template, 2, 0, "button", 6);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.erroLocal() || ctx_r1.dados.erro());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.token() ? 9 : -1);
  }
}
function ArquivoCompartilhado_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 11);
  }
  if (rf & 2) {
    const arquivo_r4 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", arquivo_r4.estudio.logo_url, \u0275\u0275sanitizeUrl)("alt", "Logo de " + arquivo_r4.estudio.nome);
  }
}
function ArquivoCompartilhado_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.inicialEstudio(), " ");
  }
}
function ArquivoCompartilhado_Conditional_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 11);
  }
  if (rf & 2) {
    const arquivo_r4 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", arquivo_r4.capa_url, \u0275\u0275sanitizeUrl)("alt", "Capa de " + arquivo_r4.projeto);
  }
}
function ArquivoCompartilhado_Conditional_3_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "small");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const arquivo_r4 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.iniciaisProjeto());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(arquivo_r4.projeto);
  }
}
function ArquivoCompartilhado_Conditional_3_Conditional_30_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "small");
    \u0275\u0275text(1, "Preparando \xE1udio...");
    \u0275\u0275domElementEnd();
  }
}
function ArquivoCompartilhado_Conditional_3_Conditional_30_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "audio", 31);
    \u0275\u0275domListener("error", function ArquivoCompartilhado_Conditional_3_Conditional_30_Conditional_5_Template_audio_error_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.registrarErroReproducao());
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275domProperty("src", ctx);
  }
}
function ArquivoCompartilhado_Conditional_3_Conditional_30_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 32);
    \u0275\u0275domListener("click", function ArquivoCompartilhado_Conditional_3_Conditional_30_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.prepararReproducao());
    });
    \u0275\u0275text(1, " Carregar \xE1udio ");
    \u0275\u0275domElementEnd();
  }
}
function ArquivoCompartilhado_Conditional_3_Conditional_30_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.erroReproducao(), " ");
  }
}
function ArquivoCompartilhado_Conditional_3_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 19)(1, "div", 28)(2, "span");
    \u0275\u0275text(3, "OUVIR ARQUIVO");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, ArquivoCompartilhado_Conditional_3_Conditional_30_Conditional_4_Template, 2, 0, "small");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(5, ArquivoCompartilhado_Conditional_3_Conditional_30_Conditional_5_Template, 1, 1, "audio", 29)(6, ArquivoCompartilhado_Conditional_3_Conditional_30_Conditional_6_Template, 2, 0, "button", 30);
    \u0275\u0275conditionalCreate(7, ArquivoCompartilhado_Conditional_3_Conditional_30_Conditional_7_Template, 2, 1, "p", 22);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.carregandoReproducao() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_4_0 = ctx_r1.urlReproducao()) ? 5 : !ctx_r1.carregandoReproducao() ? 6 : -1, tmp_4_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.erroReproducao() ? 7 : -1);
  }
}
function ArquivoCompartilhado_Conditional_3_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 20)(1, "span");
    \u0275\u0275text(2, "NOTAS DA VERS\xC3O");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const arquivo_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(arquivo_r4.observacoes);
  }
}
function ArquivoCompartilhado_Conditional_3_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.erroDownload(), " ");
  }
}
function ArquivoCompartilhado_Conditional_3_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Preparando download... ");
  }
}
function ArquivoCompartilhado_Conditional_3_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Baixar arquivo original ");
  }
}
function ArquivoCompartilhado_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "header", 8)(1, "div", 9)(2, "span", 10);
    \u0275\u0275conditionalCreate(3, ArquivoCompartilhado_Conditional_3_Conditional_3_Template, 1, 2, "img", 11)(4, ArquivoCompartilhado_Conditional_3_Conditional_4_Template, 1, 1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "small");
    \u0275\u0275text(9, "Compartilhado pelo Fleiva");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(10, "span", 12);
    \u0275\u0275text(11, "LINK PRIVADO");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "section", 13)(13, "div", 14)(14, "div", 15);
    \u0275\u0275conditionalCreate(15, ArquivoCompartilhado_Conditional_3_Conditional_15_Template, 1, 2, "img", 11)(16, ArquivoCompartilhado_Conditional_3_Conditional_16_Template, 4, 2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "div", 16)(18, "span");
    \u0275\u0275text(19, "PROJETO");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(22, "div", 17)(23, "header", 18)(24, "p");
    \u0275\u0275text(25, "FAIXA COMPARTILHADA");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "h1");
    \u0275\u0275text(27);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(30, ArquivoCompartilhado_Conditional_3_Conditional_30_Template, 8, 3, "section", 19);
    \u0275\u0275conditionalCreate(31, ArquivoCompartilhado_Conditional_3_Conditional_31_Template, 5, 1, "section", 20);
    \u0275\u0275domElementStart(32, "dl", 21)(33, "div")(34, "dt");
    \u0275\u0275text(35, "Arquivo");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(36, "dd");
    \u0275\u0275text(37);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(38, "div")(39, "dt");
    \u0275\u0275text(40, "Tamanho");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(41, "dd");
    \u0275\u0275text(42);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(43, "div")(44, "dt");
    \u0275\u0275text(45, "Enviado em");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(46, "dd");
    \u0275\u0275text(47);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(48, ArquivoCompartilhado_Conditional_3_Conditional_48_Template, 2, 1, "p", 22);
    \u0275\u0275domElementStart(49, "button", 23);
    \u0275\u0275domListener("click", function ArquivoCompartilhado_Conditional_3_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.baixar());
    });
    \u0275\u0275domElementStart(50, "span", 24);
    \u0275\u0275text(51, "\u2193");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(52, ArquivoCompartilhado_Conditional_3_Conditional_52_Template, 1, 0)(53, ArquivoCompartilhado_Conditional_3_Conditional_53_Template, 1, 0);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(54, "footer", 25)(55, "span");
    \u0275\u0275text(56, "FLEIVA STUDIOS");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(57, "p");
    \u0275\u0275text(58, "Arquivos profissionais, organizados em um s\xF3 lugar.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(59, "footer", 26)(60, "span");
    \u0275\u0275text(61, "Publicado com");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(62, "span", 27);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const arquivo_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(arquivo_r4.estudio.logo_url ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(arquivo_r4.estudio.nome);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("com-imagem", arquivo_r4.capa_url !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(arquivo_r4.capa_url ? 15 : 16);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(arquivo_r4.projeto);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(arquivo_r4.faixa);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(arquivo_r4.versao);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.podeReproduzir(arquivo_r4) ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(arquivo_r4.observacoes ? 31 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(arquivo_r4.nome_arquivo);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatarBytes(arquivo_r4.tamanho_bytes));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatarData(arquivo_r4.criado_em));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.erroDownload() ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r1.baixando());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.baixando() ? 52 : 53);
  }
}
var ArquivoCompartilhado = class _ArquivoCompartilhado {
  dados = inject(DadosArquivoCompartilhado);
  rota = inject(ActivatedRoute);
  token = signal(
    null,
    ...ngDevMode ? [{ debugName: "token" }] : (
      /* istanbul ignore next */
      []
    )
  );
  baixando = signal(
    false,
    ...ngDevMode ? [{ debugName: "baixando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  carregandoReproducao = signal(
    false,
    ...ngDevMode ? [{ debugName: "carregandoReproducao" }] : (
      /* istanbul ignore next */
      []
    )
  );
  urlReproducao = signal(
    null,
    ...ngDevMode ? [{ debugName: "urlReproducao" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroDownload = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroDownload" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroReproducao = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroReproducao" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroLocal = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroLocal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  corPrincipal = computed(
    () => {
      const cor = this.dados.arquivo()?.estudio.cor_principal;
      return this.normalizarCor(cor) ?? "#1ed760";
    },
    ...ngDevMode ? [{ debugName: "corPrincipal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  corSobrePrincipal = computed(
    () => this.obterCorContraste(this.corPrincipal()),
    ...ngDevMode ? [{ debugName: "corSobrePrincipal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    const token = this.rota.snapshot.paramMap.get("token");
    this.token.set(token);
    if (!token) {
      this.erroLocal.set("Link inv\xE1lido ou indispon\xEDvel.");
      return;
    }
    void this.carregar(token);
  }
  recarregar() {
    const token = this.token();
    if (!token) {
      return;
    }
    void this.carregar(token);
  }
  async prepararReproducao() {
    const token = this.token();
    const arquivo = this.dados.arquivo();
    if (!token || !arquivo || !this.podeReproduzir(arquivo) || this.carregandoReproducao()) {
      return;
    }
    this.carregandoReproducao.set(true);
    this.erroReproducao.set(null);
    try {
      const reproducao = await this.dados.obterReproducao(token);
      this.urlReproducao.set(reproducao.url);
    } catch (erro) {
      this.erroReproducao.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel preparar a reprodu\xE7\xE3o."));
    } finally {
      this.carregandoReproducao.set(false);
    }
  }
  registrarErroReproducao() {
    this.urlReproducao.set(null);
    this.erroReproducao.set("A reprodu\xE7\xE3o foi interrompida. Tente carregar o \xE1udio novamente.");
  }
  async baixar() {
    const token = this.token();
    if (!token || this.baixando()) {
      return;
    }
    this.baixando.set(true);
    this.erroDownload.set(null);
    try {
      const download = await this.dados.obterDownload(token);
      const link = document.createElement("a");
      link.href = download.url;
      link.download = download.nome_arquivo;
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (erro) {
      this.erroDownload.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel baixar o arquivo."));
    } finally {
      this.baixando.set(false);
    }
  }
  podeReproduzir(arquivo) {
    if (arquivo.tipo_mime?.startsWith("audio/")) {
      return true;
    }
    return /\.(aac|flac|m4a|mp3|ogg|wav|webm)$/i.test(arquivo.nome_arquivo);
  }
  inicialEstudio() {
    return this.dados.arquivo()?.estudio.nome.trim().charAt(0).toLocaleUpperCase("pt-BR") || "F";
  }
  iniciaisProjeto() {
    const projeto = this.dados.arquivo()?.projeto ?? "";
    const palavras = projeto.trim().split(/\s+/).filter(Boolean);
    if (palavras.length === 0) {
      return "FL";
    }
    return palavras.slice(0, 2).map((palavra) => palavra.charAt(0)).join("").toLocaleUpperCase("pt-BR");
  }
  formatarBytes(bytes) {
    if (bytes < 1e3) {
      return `${bytes} B`;
    }
    const unidades = ["KB", "MB", "GB", "TB"];
    let valor = bytes / 1e3;
    let indice = 0;
    while (valor >= 1e3 && indice < unidades.length - 1) {
      valor /= 1e3;
      indice += 1;
    }
    return `${new Intl.NumberFormat("pt-BR", {
      maximumFractionDigits: 1
    }).format(valor)} ${unidades[indice]}`;
  }
  formatarData(data) {
    return new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "long",
      timeStyle: "short"
    }).format(new Date(data));
  }
  async carregar(token) {
    this.erroLocal.set(null);
    this.erroDownload.set(null);
    this.erroReproducao.set(null);
    this.urlReproducao.set(null);
    await this.dados.carregar(token);
    const arquivo = this.dados.arquivo();
    if (arquivo && this.podeReproduzir(arquivo)) {
      await this.prepararReproducao();
    }
  }
  normalizarCor(cor) {
    const valor = cor?.trim();
    return valor && /^#[0-9a-f]{6}$/i.test(valor) ? valor : null;
  }
  obterCorContraste(cor) {
    const vermelho = Number.parseInt(cor.slice(1, 3), 16);
    const verde = Number.parseInt(cor.slice(3, 5), 16);
    const azul = Number.parseInt(cor.slice(5, 7), 16);
    const luminancia = (vermelho * 299 + verde * 587 + azul * 114) / 1e3;
    return luminancia >= 150 ? "#111311" : "#ffffff";
  }
  obterMensagemErro(erro, mensagemPadrao) {
    if (typeof erro === "object" && erro !== null && "message" in erro) {
      return String(erro.message);
    }
    return mensagemPadrao;
  }
  static \u0275fac = function ArquivoCompartilhado_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArquivoCompartilhado)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArquivoCompartilhado, selectors: [["app-arquivo-compartilhado"]], decls: 4, vars: 5, consts: [[1, "pagina-publica"], [1, "estado-pagina"], [1, "estado-pagina", "estado-erro"], ["aria-hidden", "true", 1, "carregador"], [1, "marca-fleiva"], [1, "rotulo"], ["type", "button", 1, "botao-secundario"], ["type", "button", 1, "botao-secundario", 3, "click"], [1, "topo-publico"], [1, "identidade-estudio"], [1, "logo-estudio"], [3, "src", "alt"], [1, "selo-privado"], [1, "experiencia-arquivo"], [1, "lado-visual"], [1, "capa-projeto"], [1, "credito-projeto"], [1, "conteudo-arquivo"], [1, "titulo-arquivo"], [1, "reproducao"], [1, "observacoes"], [1, "informacoes"], [1, "mensagem-erro"], ["type", "button", 1, "botao-download", 3, "click", "disabled"], ["aria-hidden", "true"], [1, "rodape-publico"], [1, "assinatura-fleiva"], ["role", "img", "aria-label", "Fl\xEAiva", 1, "assinatura-wordmark"], [1, "titulo-reproducao"], ["controls", "", "preload", "metadata", 3, "src"], ["type", "button", 1, "botao-carregar-audio"], ["controls", "", "preload", "metadata", 3, "error", "src"], ["type", "button", 1, "botao-carregar-audio", 3, "click"]], template: function ArquivoCompartilhado_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "main", 0);
      \u0275\u0275conditionalCreate(1, ArquivoCompartilhado_Conditional_1_Template, 4, 0, "section", 1)(2, ArquivoCompartilhado_Conditional_2_Template, 10, 2, "section", 2)(3, ArquivoCompartilhado_Conditional_3_Template, 63, 16);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275styleProp("--studio-accent", ctx.corPrincipal())("--studio-on-accent", ctx.corSobrePrincipal());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dados.carregando() ? 1 : ctx.erroLocal() || ctx.dados.erro() ? 2 : (tmp_2_0 = ctx.dados.arquivo()) ? 3 : -1, tmp_2_0);
    }
  }, styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background: #0c0d0c;\n  color: #f4f5f1;\n  font-family:\n    Inter,\n    ui-sans-serif,\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  font-synthesis: none;\n  -webkit-font-smoothing: antialiased;\n}\n.pagina-publica[_ngcontent-%COMP%] {\n  --studio-accent: #1ed760;\n  --studio-on-accent: #111311;\n  --accent-soft: color-mix( in oklab, var(--studio-accent) 18%, #171917 );\n  min-height: 100vh;\n  box-sizing: border-box;\n  padding: clamp(1rem, 3vw, 2.25rem);\n  background:\n    radial-gradient(\n      circle at 78% 8%,\n      color-mix(in oklab, var(--studio-accent) 22%, transparent),\n      transparent 24rem),\n    linear-gradient(\n      145deg,\n      #151715,\n      #090a09 68%);\n}\nbutton[_ngcontent-%COMP%], \naudio[_ngcontent-%COMP%] {\n  font: inherit;\n}\nbutton[_ngcontent-%COMP%]:focus-visible, \naudio[_ngcontent-%COMP%]:focus-visible {\n  outline: 0.15rem solid var(--studio-accent);\n  outline-offset: 0.15rem;\n}\n.topo-publico[_ngcontent-%COMP%], \n.experiencia-arquivo[_ngcontent-%COMP%], \n.rodape-publico[_ngcontent-%COMP%] {\n  width: min(100%, 74rem);\n  margin-right: auto;\n  margin-left: auto;\n}\n.topo-publico[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 3.5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: clamp(2rem, 7vh, 5rem);\n}\n.identidade-estudio[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.75rem;\n}\n.logo-estudio[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.75rem;\n  height: 2.75rem;\n  flex: 0 0 auto;\n  place-items: center;\n  overflow: hidden;\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border-radius: 0.2rem;\n  font-size: 1rem;\n  font-weight: 800;\n}\n.logo-estudio[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.identidade-estudio[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  display: grid;\n  min-width: 0;\n  gap: 0.15rem;\n}\n.identidade-estudio[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.identidade-estudio[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.identidade-estudio[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 720;\n}\n.identidade-estudio[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #8f958f;\n  font-size: 0.6rem;\n}\n.selo-privado[_ngcontent-%COMP%] {\n  padding: 0.32rem 0.48rem;\n  color: #9ca19c;\n  border: 0.0625rem solid #3b3e3b;\n  border-radius: 0.18rem;\n  font-size: 0.54rem;\n  font-weight: 740;\n  letter-spacing: 0.1em;\n}\n.experiencia-arquivo[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(15rem, 24rem) minmax(0, 1fr);\n  align-items: start;\n  gap: clamp(2rem, 6vw, 5.5rem);\n}\n.lado-visual[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.capa-projeto[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  width: 100%;\n  aspect-ratio: 1;\n  place-items: center;\n  overflow: hidden;\n  isolation: isolate;\n  background:\n    linear-gradient(\n      135deg,\n      transparent 0 48%,\n      rgba(255, 255, 255, 0.16) 48% 50%,\n      transparent 50%),\n    linear-gradient(\n      145deg,\n      color-mix(in oklab, var(--studio-accent) 35%, #252825),\n      var(--studio-accent));\n  color: var(--studio-on-accent);\n  border: 0.0625rem solid rgba(255, 255, 255, 0.13);\n  border-radius: 0.18rem;\n  box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.55), 0 2.2rem 5rem rgba(0, 0, 0, 0.42);\n}\n.capa-projeto[_ngcontent-%COMP%]::before {\n  position: absolute;\n  z-index: -1;\n  width: 52%;\n  height: 52%;\n  border: 0.0625rem solid currentColor;\n  content: "";\n  opacity: 0.18;\n  transform: rotate(45deg);\n}\n.capa-projeto.com-imagem[_ngcontent-%COMP%]::before {\n  display: none;\n}\n.capa-projeto[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.capa-projeto[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: clamp(2.5rem, 8vw, 5rem);\n  font-weight: 800;\n  letter-spacing: -0.08em;\n}\n.capa-projeto[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  bottom: 0.9rem;\n  left: 1rem;\n  overflow: hidden;\n  font-size: 0.58rem;\n  font-weight: 760;\n  letter-spacing: 0.11em;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.credito-projeto[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.25rem;\n  padding-top: 0.8rem;\n  border-top: 0.0625rem solid #343734;\n}\n.credito-projeto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.titulo-arquivo[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], \n.titulo-reproducao[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.observacoes[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.rotulo[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #858b85;\n  font-size: 0.56rem;\n  font-weight: 760;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n.credito-projeto[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 650;\n}\n.conteudo-arquivo[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding-top: clamp(0rem, 3vw, 2rem);\n}\n.titulo-arquivo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 14ch;\n  margin: 0.65rem 0 0;\n  overflow-wrap: anywhere;\n  font-size: clamp(2.5rem, 7vw, 5.8rem);\n  font-weight: 740;\n  line-height: 0.88;\n  letter-spacing: -0.07em;\n}\n.titulo-arquivo[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-top: 1rem;\n  padding: 0.3rem 0.5rem;\n  background: var(--accent-soft);\n  color: var(--studio-accent);\n  border: 0.0625rem solid color-mix(in oklab, var(--studio-accent) 45%, #343734);\n  border-radius: 999rem;\n  font-size: 0.62rem;\n  font-weight: 760;\n}\n.reproducao[_ngcontent-%COMP%], \n.observacoes[_ngcontent-%COMP%], \n.informacoes[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.reproducao[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #171917;\n  border: 0.0625rem solid #343734;\n  border-radius: 0.25rem;\n}\n.titulo-reproducao[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.titulo-reproducao[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #8f958f;\n  font-size: 0.58rem;\n}\naudio[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 2.75rem;\n  accent-color: var(--studio-accent);\n}\n.botao-carregar-audio[_ngcontent-%COMP%], \n.botao-download[_ngcontent-%COMP%], \n.botao-secundario[_ngcontent-%COMP%] {\n  min-height: 2.65rem;\n  padding: 0.58rem 0.85rem;\n  border-radius: 0.22rem;\n  font: inherit;\n  font-size: 0.68rem;\n  font-weight: 720;\n  cursor: pointer;\n}\n.botao-carregar-audio[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #232623;\n  color: #f4f5f1;\n  border: 0.0625rem solid #3d413d;\n}\n.botao-carregar-audio[_ngcontent-%COMP%]:hover {\n  background: #2c302c;\n}\n.observacoes[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  border-top: 0.0625rem solid #343734;\n  border-bottom: 0.0625rem solid #343734;\n}\n.observacoes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.65rem 0 0;\n  color: #b9bdb9;\n  font-size: 0.78rem;\n  line-height: 1.65;\n  white-space: pre-wrap;\n}\n.informacoes[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.5fr) auto auto;\n  gap: 1rem;\n  margin-bottom: 0;\n}\n.informacoes[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.informacoes[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  margin-bottom: 0.28rem;\n  color: #777d77;\n  font-size: 0.55rem;\n  font-weight: 720;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n}\n.informacoes[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0;\n  color: #b8bcb8;\n  font-size: 0.65rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.botao-download[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  min-height: 3.2rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.55rem;\n  margin-top: 1.5rem;\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border: 0.0625rem solid var(--studio-accent);\n}\n.botao-download[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.botao-download[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.95) saturate(1.08);\n}\n.botao-download[_ngcontent-%COMP%]:disabled, \n.botao-secundario[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.55;\n}\n.mensagem-erro[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 0;\n  color: #ff7770;\n  font-size: 0.68rem;\n}\n.rodape-publico[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: clamp(3rem, 8vh, 6rem);\n  padding-top: 1rem;\n  color: #686d68;\n  border-top: 0.0625rem solid #292c29;\n}\n.rodape-publico[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n}\n.rodape-publico[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.58rem;\n}\n.estado-pagina[_ngcontent-%COMP%] {\n  display: grid;\n  width: min(100%, 34rem);\n  min-height: calc(100vh - 4rem);\n  place-content: center;\n  justify-items: center;\n  gap: 0.8rem;\n  box-sizing: border-box;\n  margin: 0 auto;\n  text-align: center;\n}\n.estado-pagina[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2rem, 8vw, 3.5rem);\n  line-height: 0.95;\n  letter-spacing: -0.05em;\n}\n.estado-pagina[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:not(.rotulo) {\n  max-width: 28rem;\n  margin: 0;\n  color: #9ba09b;\n  line-height: 1.5;\n}\n.marca-fleiva[_ngcontent-%COMP%] {\n  display: grid;\n  width: 3rem;\n  height: 3rem;\n  place-items: center;\n  margin-bottom: 0.5rem;\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border-radius: 0.2rem;\n  font-weight: 800;\n}\n.botao-secundario[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  background: transparent;\n  color: #f4f5f1;\n  border: 0.0625rem solid #444844;\n}\n.botao-secundario[_ngcontent-%COMP%]:hover {\n  background: #202320;\n}\n.carregador[_ngcontent-%COMP%] {\n  display: block;\n  width: 1.2rem;\n  height: 1.2rem;\n  box-sizing: border-box;\n  border: 0.13rem solid #464a46;\n  border-top-color: var(--studio-accent);\n  border-radius: 999rem;\n  animation: _ngcontent-%COMP%_girar 650ms linear infinite;\n}\n@keyframes _ngcontent-%COMP%_girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .carregador[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 48rem) {\n  .experiencia-arquivo[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(8rem, 13rem) minmax(0, 1fr);\n    gap: 1.5rem;\n  }\n  .titulo-arquivo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(2.2rem, 8vw, 4rem);\n  }\n  .informacoes[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .informacoes[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 36rem) {\n  .pagina-publica[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .topo-publico[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n  .selo-privado[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .experiencia-arquivo[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .lado-visual[_ngcontent-%COMP%] {\n    width: min(76vw, 18rem);\n  }\n  .conteudo-arquivo[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n  .titulo-arquivo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    max-width: none;\n    font-size: clamp(2.4rem, 13vw, 4rem);\n  }\n  .informacoes[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .informacoes[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n    grid-column: auto;\n  }\n  .rodape-publico[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n.assinatura-fleiva[_ngcontent-%COMP%] {\n  display: flex;\n  width: fit-content;\n  align-items: center;\n  gap: 0.55rem;\n  margin: 2.5rem auto 0;\n  color: var(--text-muted, #747a74);\n  font-size: 0.62rem;\n}\n.assinatura-wordmark[_ngcontent-%COMP%] {\n  width: 3.8rem;\n  aspect-ratio: 1256/596;\n  background: currentColor;\n  mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) center/contain no-repeat;\n  -webkit-mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) center/contain no-repeat;\n  opacity: 0.72;\n  transition: color 160ms ease, opacity 160ms ease;\n}\n.assinatura-fleiva[_ngcontent-%COMP%]:hover   .assinatura-wordmark[_ngcontent-%COMP%] {\n  color: var(--studio-brand, var(--fleiva-verde, #5e886f));\n  opacity: 1;\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArquivoCompartilhado, [{
    type: Component,
    args: [{ selector: "app-arquivo-compartilhado", standalone: true, imports: [], template: `<main
  class="pagina-publica"
  [style.--studio-accent]="corPrincipal()"
  [style.--studio-on-accent]="corSobrePrincipal()"
>
  @if (dados.carregando()) {
    <section class="estado-pagina">
      <span class="carregador" aria-hidden="true"></span>
      <p>Preparando arquivo...</p>
    </section>
  } @else if (erroLocal() || dados.erro()) {
    <section class="estado-pagina estado-erro">
      <div class="marca-fleiva">F</div>
      <p class="rotulo">LINK COMPARTILHADO</p>
      <h1>Arquivo indispon\xEDvel</h1>
      <p>{{ erroLocal() || dados.erro() }}</p>

      @if (token()) {
        <button
          type="button"
          class="botao-secundario"
          (click)="recarregar()"
        >
          Tentar novamente
        </button>
      }
    </section>
  } @else if (dados.arquivo(); as arquivo) {
    <header class="topo-publico">
      <div class="identidade-estudio">
        <span class="logo-estudio">
          @if (arquivo.estudio.logo_url) {
            <img
              [src]="arquivo.estudio.logo_url"
              [alt]="'Logo de ' + arquivo.estudio.nome"
            />
          } @else {
            {{ inicialEstudio() }}
          }
        </span>

        <span>
          <strong>{{ arquivo.estudio.nome }}</strong>
          <small>Compartilhado pelo Fleiva</small>
        </span>
      </div>

      <span class="selo-privado">LINK PRIVADO</span>
    </header>

    <section class="experiencia-arquivo">
      <div class="lado-visual">
        <div
          class="capa-projeto"
          [class.com-imagem]="arquivo.capa_url !== null"
        >
          @if (arquivo.capa_url) {
            <img
              [src]="arquivo.capa_url"
              [alt]="'Capa de ' + arquivo.projeto"
            />
          } @else {
            <span>{{ iniciaisProjeto() }}</span>
            <small>{{ arquivo.projeto }}</small>
          }
        </div>

        <div class="credito-projeto">
          <span>PROJETO</span>
          <strong>{{ arquivo.projeto }}</strong>
        </div>
      </div>

      <div class="conteudo-arquivo">
        <header class="titulo-arquivo">
          <p>FAIXA COMPARTILHADA</p>
          <h1>{{ arquivo.faixa }}</h1>
          <span>{{ arquivo.versao }}</span>
        </header>

        @if (podeReproduzir(arquivo)) {
          <section class="reproducao">
            <div class="titulo-reproducao">
              <span>OUVIR ARQUIVO</span>

              @if (carregandoReproducao()) {
                <small>Preparando \xE1udio...</small>
              }
            </div>

            @if (urlReproducao(); as url) {
              <audio
                controls
                preload="metadata"
                [src]="url"
                (error)="registrarErroReproducao()"
              ></audio>
            } @else if (!carregandoReproducao()) {
              <button
                type="button"
                class="botao-carregar-audio"
                (click)="prepararReproducao()"
              >
                Carregar \xE1udio
              </button>
            }

            @if (erroReproducao()) {
              <p class="mensagem-erro">
                {{ erroReproducao() }}
              </p>
            }
          </section>
        }

        @if (arquivo.observacoes) {
          <section class="observacoes">
            <span>NOTAS DA VERS\xC3O</span>
            <p>{{ arquivo.observacoes }}</p>
          </section>
        }

        <dl class="informacoes">
          <div>
            <dt>Arquivo</dt>
            <dd>{{ arquivo.nome_arquivo }}</dd>
          </div>

          <div>
            <dt>Tamanho</dt>
            <dd>{{ formatarBytes(arquivo.tamanho_bytes) }}</dd>
          </div>

          <div>
            <dt>Enviado em</dt>
            <dd>{{ formatarData(arquivo.criado_em) }}</dd>
          </div>
        </dl>

        @if (erroDownload()) {
          <p class="mensagem-erro">
            {{ erroDownload() }}
          </p>
        }

        <button
          type="button"
          class="botao-download"
          [disabled]="baixando()"
          (click)="baixar()"
        >
          <span aria-hidden="true">\u2193</span>

          @if (baixando()) {
            Preparando download...
          } @else {
            Baixar arquivo original
          }
        </button>
      </div>
    </section>

    <footer class="rodape-publico">
      <span>FLEIVA STUDIOS</span>
      <p>Arquivos profissionais, organizados em um s\xF3 lugar.</p>
      <footer class="assinatura-fleiva">
  <span>Publicado com</span>

  <span
    class="assinatura-wordmark"
    role="img"
    aria-label="Fl\xEAiva"
  ></span>
</footer>
    </footer>
  }
</main>
`, styles: ['/* apps/studio-dash/src/app/paginas/arquivo-compartilhado/arquivo-compartilhado.scss */\n:host {\n  display: block;\n  min-height: 100vh;\n  background: #0c0d0c;\n  color: #f4f5f1;\n  font-family:\n    Inter,\n    ui-sans-serif,\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  font-synthesis: none;\n  -webkit-font-smoothing: antialiased;\n}\n.pagina-publica {\n  --studio-accent: #1ed760;\n  --studio-on-accent: #111311;\n  --accent-soft: color-mix( in oklab, var(--studio-accent) 18%, #171917 );\n  min-height: 100vh;\n  box-sizing: border-box;\n  padding: clamp(1rem, 3vw, 2.25rem);\n  background:\n    radial-gradient(\n      circle at 78% 8%,\n      color-mix(in oklab, var(--studio-accent) 22%, transparent),\n      transparent 24rem),\n    linear-gradient(\n      145deg,\n      #151715,\n      #090a09 68%);\n}\nbutton,\naudio {\n  font: inherit;\n}\nbutton:focus-visible,\naudio:focus-visible {\n  outline: 0.15rem solid var(--studio-accent);\n  outline-offset: 0.15rem;\n}\n.topo-publico,\n.experiencia-arquivo,\n.rodape-publico {\n  width: min(100%, 74rem);\n  margin-right: auto;\n  margin-left: auto;\n}\n.topo-publico {\n  display: flex;\n  min-height: 3.5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: clamp(2rem, 7vh, 5rem);\n}\n.identidade-estudio {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.75rem;\n}\n.logo-estudio {\n  display: grid;\n  width: 2.75rem;\n  height: 2.75rem;\n  flex: 0 0 auto;\n  place-items: center;\n  overflow: hidden;\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border-radius: 0.2rem;\n  font-size: 1rem;\n  font-weight: 800;\n}\n.logo-estudio img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.identidade-estudio > span:last-child {\n  display: grid;\n  min-width: 0;\n  gap: 0.15rem;\n}\n.identidade-estudio strong,\n.identidade-estudio small {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.identidade-estudio strong {\n  font-size: 0.78rem;\n  font-weight: 720;\n}\n.identidade-estudio small {\n  color: #8f958f;\n  font-size: 0.6rem;\n}\n.selo-privado {\n  padding: 0.32rem 0.48rem;\n  color: #9ca19c;\n  border: 0.0625rem solid #3b3e3b;\n  border-radius: 0.18rem;\n  font-size: 0.54rem;\n  font-weight: 740;\n  letter-spacing: 0.1em;\n}\n.experiencia-arquivo {\n  display: grid;\n  grid-template-columns: minmax(15rem, 24rem) minmax(0, 1fr);\n  align-items: start;\n  gap: clamp(2rem, 6vw, 5.5rem);\n}\n.lado-visual {\n  display: grid;\n  gap: 1rem;\n}\n.capa-projeto {\n  position: relative;\n  display: grid;\n  width: 100%;\n  aspect-ratio: 1;\n  place-items: center;\n  overflow: hidden;\n  isolation: isolate;\n  background:\n    linear-gradient(\n      135deg,\n      transparent 0 48%,\n      rgba(255, 255, 255, 0.16) 48% 50%,\n      transparent 50%),\n    linear-gradient(\n      145deg,\n      color-mix(in oklab, var(--studio-accent) 35%, #252825),\n      var(--studio-accent));\n  color: var(--studio-on-accent);\n  border: 0.0625rem solid rgba(255, 255, 255, 0.13);\n  border-radius: 0.18rem;\n  box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.55), 0 2.2rem 5rem rgba(0, 0, 0, 0.42);\n}\n.capa-projeto::before {\n  position: absolute;\n  z-index: -1;\n  width: 52%;\n  height: 52%;\n  border: 0.0625rem solid currentColor;\n  content: "";\n  opacity: 0.18;\n  transform: rotate(45deg);\n}\n.capa-projeto.com-imagem::before {\n  display: none;\n}\n.capa-projeto > img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.capa-projeto > span {\n  font-size: clamp(2.5rem, 8vw, 5rem);\n  font-weight: 800;\n  letter-spacing: -0.08em;\n}\n.capa-projeto > small {\n  position: absolute;\n  right: 1rem;\n  bottom: 0.9rem;\n  left: 1rem;\n  overflow: hidden;\n  font-size: 0.58rem;\n  font-weight: 760;\n  letter-spacing: 0.11em;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.credito-projeto {\n  display: grid;\n  gap: 0.25rem;\n  padding-top: 0.8rem;\n  border-top: 0.0625rem solid #343734;\n}\n.credito-projeto span,\n.titulo-arquivo > p,\n.titulo-reproducao > span,\n.observacoes > span,\n.rotulo {\n  margin: 0;\n  color: #858b85;\n  font-size: 0.56rem;\n  font-weight: 760;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n.credito-projeto strong {\n  font-size: 0.75rem;\n  font-weight: 650;\n}\n.conteudo-arquivo {\n  min-width: 0;\n  padding-top: clamp(0rem, 3vw, 2rem);\n}\n.titulo-arquivo h1 {\n  max-width: 14ch;\n  margin: 0.65rem 0 0;\n  overflow-wrap: anywhere;\n  font-size: clamp(2.5rem, 7vw, 5.8rem);\n  font-weight: 740;\n  line-height: 0.88;\n  letter-spacing: -0.07em;\n}\n.titulo-arquivo > span {\n  display: inline-flex;\n  margin-top: 1rem;\n  padding: 0.3rem 0.5rem;\n  background: var(--accent-soft);\n  color: var(--studio-accent);\n  border: 0.0625rem solid color-mix(in oklab, var(--studio-accent) 45%, #343734);\n  border-radius: 999rem;\n  font-size: 0.62rem;\n  font-weight: 760;\n}\n.reproducao,\n.observacoes,\n.informacoes {\n  margin-top: 1.5rem;\n}\n.reproducao {\n  padding: 1rem;\n  background: #171917;\n  border: 0.0625rem solid #343734;\n  border-radius: 0.25rem;\n}\n.titulo-reproducao {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.titulo-reproducao small {\n  color: #8f958f;\n  font-size: 0.58rem;\n}\naudio {\n  display: block;\n  width: 100%;\n  height: 2.75rem;\n  accent-color: var(--studio-accent);\n}\n.botao-carregar-audio,\n.botao-download,\n.botao-secundario {\n  min-height: 2.65rem;\n  padding: 0.58rem 0.85rem;\n  border-radius: 0.22rem;\n  font: inherit;\n  font-size: 0.68rem;\n  font-weight: 720;\n  cursor: pointer;\n}\n.botao-carregar-audio {\n  width: 100%;\n  background: #232623;\n  color: #f4f5f1;\n  border: 0.0625rem solid #3d413d;\n}\n.botao-carregar-audio:hover {\n  background: #2c302c;\n}\n.observacoes {\n  padding: 1rem 0;\n  border-top: 0.0625rem solid #343734;\n  border-bottom: 0.0625rem solid #343734;\n}\n.observacoes p {\n  margin: 0.65rem 0 0;\n  color: #b9bdb9;\n  font-size: 0.78rem;\n  line-height: 1.65;\n  white-space: pre-wrap;\n}\n.informacoes {\n  display: grid;\n  grid-template-columns: minmax(0, 1.5fr) auto auto;\n  gap: 1rem;\n  margin-bottom: 0;\n}\n.informacoes div {\n  min-width: 0;\n}\n.informacoes dt {\n  margin-bottom: 0.28rem;\n  color: #777d77;\n  font-size: 0.55rem;\n  font-weight: 720;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n}\n.informacoes dd {\n  overflow: hidden;\n  margin: 0;\n  color: #b8bcb8;\n  font-size: 0.65rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.botao-download {\n  display: flex;\n  width: 100%;\n  min-height: 3.2rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.55rem;\n  margin-top: 1.5rem;\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border: 0.0625rem solid var(--studio-accent);\n}\n.botao-download > span {\n  font-size: 1rem;\n}\n.botao-download:hover:not(:disabled) {\n  filter: brightness(0.95) saturate(1.08);\n}\n.botao-download:disabled,\n.botao-secundario:disabled {\n  cursor: wait;\n  opacity: 0.55;\n}\n.mensagem-erro {\n  margin: 0.75rem 0 0;\n  color: #ff7770;\n  font-size: 0.68rem;\n}\n.rodape-publico {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: clamp(3rem, 8vh, 6rem);\n  padding-top: 1rem;\n  color: #686d68;\n  border-top: 0.0625rem solid #292c29;\n}\n.rodape-publico span {\n  font-size: 0.58rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n}\n.rodape-publico p {\n  margin: 0;\n  font-size: 0.58rem;\n}\n.estado-pagina {\n  display: grid;\n  width: min(100%, 34rem);\n  min-height: calc(100vh - 4rem);\n  place-content: center;\n  justify-items: center;\n  gap: 0.8rem;\n  box-sizing: border-box;\n  margin: 0 auto;\n  text-align: center;\n}\n.estado-pagina h1 {\n  margin: 0;\n  font-size: clamp(2rem, 8vw, 3.5rem);\n  line-height: 0.95;\n  letter-spacing: -0.05em;\n}\n.estado-pagina > p:not(.rotulo) {\n  max-width: 28rem;\n  margin: 0;\n  color: #9ba09b;\n  line-height: 1.5;\n}\n.marca-fleiva {\n  display: grid;\n  width: 3rem;\n  height: 3rem;\n  place-items: center;\n  margin-bottom: 0.5rem;\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border-radius: 0.2rem;\n  font-weight: 800;\n}\n.botao-secundario {\n  margin-top: 0.5rem;\n  background: transparent;\n  color: #f4f5f1;\n  border: 0.0625rem solid #444844;\n}\n.botao-secundario:hover {\n  background: #202320;\n}\n.carregador {\n  display: block;\n  width: 1.2rem;\n  height: 1.2rem;\n  box-sizing: border-box;\n  border: 0.13rem solid #464a46;\n  border-top-color: var(--studio-accent);\n  border-radius: 999rem;\n  animation: girar 650ms linear infinite;\n}\n@keyframes girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .carregador {\n    animation: none;\n  }\n}\n@media (max-width: 48rem) {\n  .experiencia-arquivo {\n    grid-template-columns: minmax(8rem, 13rem) minmax(0, 1fr);\n    gap: 1.5rem;\n  }\n  .titulo-arquivo h1 {\n    font-size: clamp(2.2rem, 8vw, 4rem);\n  }\n  .informacoes {\n    grid-template-columns: 1fr 1fr;\n  }\n  .informacoes div:first-child {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 36rem) {\n  .pagina-publica {\n    padding: 1rem;\n  }\n  .topo-publico {\n    margin-bottom: 2rem;\n  }\n  .selo-privado {\n    display: none;\n  }\n  .experiencia-arquivo {\n    grid-template-columns: 1fr;\n  }\n  .lado-visual {\n    width: min(76vw, 18rem);\n  }\n  .conteudo-arquivo {\n    padding-top: 0;\n  }\n  .titulo-arquivo h1 {\n    max-width: none;\n    font-size: clamp(2.4rem, 13vw, 4rem);\n  }\n  .informacoes {\n    grid-template-columns: 1fr;\n  }\n  .informacoes div:first-child {\n    grid-column: auto;\n  }\n  .rodape-publico {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n.assinatura-fleiva {\n  display: flex;\n  width: fit-content;\n  align-items: center;\n  gap: 0.55rem;\n  margin: 2.5rem auto 0;\n  color: var(--text-muted, #747a74);\n  font-size: 0.62rem;\n}\n.assinatura-wordmark {\n  width: 3.8rem;\n  aspect-ratio: 1256/596;\n  background: currentColor;\n  mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) center/contain no-repeat;\n  -webkit-mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) center/contain no-repeat;\n  opacity: 0.72;\n  transition: color 160ms ease, opacity 160ms ease;\n}\n.assinatura-fleiva:hover .assinatura-wordmark {\n  color: var(--studio-brand, var(--fleiva-verde, #5e886f));\n  opacity: 1;\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArquivoCompartilhado, { className: "ArquivoCompartilhado", filePath: "apps/studio-dash/src/app/paginas/arquivo-compartilhado/arquivo-compartilhado.ts", lineNumber: 21 });
})();
export {
  ArquivoCompartilhado
};
