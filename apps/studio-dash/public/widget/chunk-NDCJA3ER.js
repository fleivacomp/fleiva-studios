import {
  Component,
  DadosCasa,
  Router,
  RouterLink,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IMBOO5ID.js";

// apps/studio-dash/src/app/paginas/casa/casa.ts
var _c0 = (a0, a1) => ["/estudio", a0, "trabalho", a1];
var _c1 = (a0) => ["/", a0];
var _forTrack0 = ($index, $item) => $item.album_id;
var _forTrack1 = ($index, $item) => $item.id;
function Casa_Conditional_28_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function Casa_Conditional_28_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.limparBusca());
    });
    \u0275\u0275text(1, " Limpar busca ");
    \u0275\u0275elementEnd();
  }
}
function Casa_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 12)(1, "label", 17)(2, "span");
    \u0275\u0275text(3, "BUSCAR NA CASA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 18);
    \u0275\u0275listener("input", function Casa_Conditional_28_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.atualizarBusca($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, Casa_Conditional_28_Conditional_5_Template, 2, 0, "button", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.termoBusca());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.buscaAtiva() ? 5 : -1);
  }
}
function Casa_Conditional_29_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " trabalho ");
  }
}
function Casa_Conditional_29_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " trabalhos ");
  }
}
function Casa_Conditional_29_For_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "figure", 26);
    \u0275\u0275element(1, "img", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trabalho_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", trabalho_r4.capa_url, \u0275\u0275sanitizeUrl)("alt", "Capa de " + trabalho_r4.album_nome);
  }
}
function Casa_Conditional_29_For_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trabalho_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", trabalho_r4.album_tipo, " ");
  }
}
function Casa_Conditional_29_For_13_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trabalho_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", trabalho_r4.album_descricao, " ");
  }
}
function Casa_Conditional_29_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275conditionalCreate(1, Casa_Conditional_29_For_13_Conditional_1_Template, 2, 2, "figure", 26);
    \u0275\u0275elementStart(2, "div", 27)(3, "div");
    \u0275\u0275conditionalCreate(4, Casa_Conditional_29_For_13_Conditional_4_Template, 2, 1, "p", 28);
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, Casa_Conditional_29_For_13_Conditional_9_Template, 2, 1, "p", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "footer")(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, " Abrir trabalho ");
    \u0275\u0275elementStart(15, "i", 4);
    \u0275\u0275text(16, "\u2192");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const trabalho_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("--studio-brand", ctx_r1.corTrabalho(trabalho_r4));
    \u0275\u0275classProp("sem-capa", !trabalho_r4.capa_url);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(11, _c0, trabalho_r4.estudio_slug, trabalho_r4.album_id));
    \u0275\u0275advance();
    \u0275\u0275conditional(trabalho_r4.capa_url ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(trabalho_r4.album_tipo ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(trabalho_r4.album_nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", trabalho_r4.projeto_nome, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(trabalho_r4.album_descricao ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(trabalho_r4.estudio_nome);
  }
}
function Casa_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "header", 21)(2, "div")(3, "p");
    \u0275\u0275text(4, "ESCOLHIDOS PELOS EST\xDADIOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 22);
    \u0275\u0275text(6, " Trabalhos da Casa ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275conditionalCreate(9, Casa_Conditional_29_Conditional_9_Template, 1, 0)(10, Casa_Conditional_29_Conditional_10_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 23);
    \u0275\u0275repeaterCreate(12, Casa_Conditional_29_For_13_Template, 17, 14, "a", 24, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.trabalhosFiltrados().length, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.trabalhosFiltrados().length === 1 ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.trabalhosFiltrados());
  }
}
function Casa_Conditional_30_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " est\xFAdio ");
  }
}
function Casa_Conditional_30_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " est\xFAdios ");
  }
}
function Casa_Conditional_30_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, Casa_Conditional_30_Conditional_7_Conditional_2_Template, 1, 0)(3, Casa_Conditional_30_Conditional_7_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.estudiosFiltrados().length, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.estudiosFiltrados().length === 1 ? 2 : 3);
  }
}
function Casa_Conditional_30_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "span", 37);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Procurando casas abertas...");
    \u0275\u0275elementEnd()();
  }
}
function Casa_Conditional_30_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "strong");
    \u0275\u0275text(2, "N\xE3o foi poss\xEDvel abrir a Casa.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function Casa_Conditional_30_Conditional_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dadosCasa.listar());
    });
    \u0275\u0275text(6, " Tentar novamente ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.dadosCasa.erro());
  }
}
function Casa_Conditional_30_Conditional_10_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 31);
  }
  if (rf & 2) {
    const estudio_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", estudio_r6.logo_url, \u0275\u0275sanitizeUrl)("alt", "Logo de " + estudio_r6.nome);
  }
}
function Casa_Conditional_30_Conditional_10_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const estudio_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.inicialEstudio(estudio_r6.nome), " ");
  }
}
function Casa_Conditional_30_Conditional_10_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const estudio_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", estudio_r6.cidade, " ");
  }
}
function Casa_Conditional_30_Conditional_10_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const estudio_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", estudio_r6.descricao_publica, " ");
  }
}
function Casa_Conditional_30_Conditional_10_For_2_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const servico_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(servico_r7);
  }
}
function Casa_Conditional_30_Conditional_10_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 45);
    \u0275\u0275repeaterCreate(1, Casa_Conditional_30_Conditional_10_For_2_Conditional_13_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const estudio_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("aria-label", "Servi\xE7os de " + estudio_r6.nome);
    \u0275\u0275advance();
    \u0275\u0275repeater(estudio_r6.servicos);
  }
}
function Casa_Conditional_30_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 39)(1, "header")(2, "div", 40);
    \u0275\u0275conditionalCreate(3, Casa_Conditional_30_Conditional_10_For_2_Conditional_3_Template, 1, 2, "img", 31)(4, Casa_Conditional_30_Conditional_10_For_2_Conditional_4_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 41);
    \u0275\u0275element(6, "i", 4);
    \u0275\u0275text(7, " CASA ABERTA ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 42);
    \u0275\u0275conditionalCreate(9, Casa_Conditional_30_Conditional_10_For_2_Conditional_9_Template, 2, 1, "p", 43);
    \u0275\u0275elementStart(10, "h3");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, Casa_Conditional_30_Conditional_10_For_2_Conditional_12_Template, 2, 1, "p", 44);
    \u0275\u0275conditionalCreate(13, Casa_Conditional_30_Conditional_10_For_2_Conditional_13_Template, 3, 1, "ul", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "footer")(15, "span");
    \u0275\u0275text(16, "Abrir Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 4);
    \u0275\u0275text(18, "\u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const estudio_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("--studio-brand", ctx_r1.corEstudio(estudio_r6));
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c1, estudio_r6.slug));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(estudio_r6.logo_url ? 3 : 4);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(estudio_r6.cidade ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(estudio_r6.nome);
    \u0275\u0275advance();
    \u0275\u0275conditional(estudio_r6.descricao_publica ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(estudio_r6.servicos.length > 0 ? 13 : -1);
  }
}
function Casa_Conditional_30_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275repeaterCreate(1, Casa_Conditional_30_Conditional_10_For_2_Template, 19, 10, "a", 38, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.estudiosFiltrados());
  }
}
function Casa_Conditional_30_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "strong");
    \u0275\u0275text(2, "A Casa est\xE1 abrindo as portas.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Os est\xFAdios publicados aparecer\xE3o aqui. ");
    \u0275\u0275elementEnd()();
  }
}
function Casa_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "header", 21)(2, "div")(3, "p");
    \u0275\u0275text(4, "CARDS FL\xCAIVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 32);
    \u0275\u0275text(6, "Casas abertas");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, Casa_Conditional_30_Conditional_7_Template, 4, 2, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, Casa_Conditional_30_Conditional_8_Template, 4, 0, "div", 33)(9, Casa_Conditional_30_Conditional_9_Template, 7, 1, "div", 34)(10, Casa_Conditional_30_Conditional_10_Template, 3, 0, "div", 35)(11, Casa_Conditional_30_Conditional_11_Template, 5, 0, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!ctx_r1.dadosCasa.carregando() && !ctx_r1.dadosCasa.erro() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dadosCasa.carregando() ? 8 : ctx_r1.dadosCasa.erro() ? 9 : ctx_r1.estudiosFiltrados().length > 0 ? 10 : 11);
  }
}
function Casa_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 15)(1, "strong");
    \u0275\u0275text(2, "Nada encontrado na Casa.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Tente outro nome, cidade, servi\xE7o ou trabalho. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function Casa_Conditional_31_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.limparBusca());
    });
    \u0275\u0275text(6, " Limpar busca ");
    \u0275\u0275elementEnd()();
  }
}
var Casa = class _Casa {
  dadosCasa = inject(DadosCasa);
  roteador = inject(Router);
  chaveUltimaPorta = "casa-fleiva:ultima-porta";
  anoAtual = (/* @__PURE__ */ new Date()).getFullYear();
  termoBusca = signal(
    "",
    ...ngDevMode ? [{ debugName: "termoBusca" }] : (
      /* istanbul ignore next */
      []
    )
  );
  buscaAtiva = computed(
    () => this.normalizarBusca(this.termoBusca()).length > 0,
    ...ngDevMode ? [{ debugName: "buscaAtiva" }] : (
      /* istanbul ignore next */
      []
    )
  );
  trabalhosFiltrados = computed(
    () => {
      const termo = this.normalizarBusca(this.termoBusca());
      if (!termo) {
        return this.dadosCasa.trabalhos();
      }
      return this.dadosCasa.trabalhos().filter((trabalho) => this.correspondeBusca([
        trabalho.album_nome,
        trabalho.album_tipo,
        trabalho.album_descricao,
        trabalho.projeto_nome,
        trabalho.estudio_nome
      ], termo));
    },
    ...ngDevMode ? [{ debugName: "trabalhosFiltrados" }] : (
      /* istanbul ignore next */
      []
    )
  );
  estudiosFiltrados = computed(
    () => {
      const termo = this.normalizarBusca(this.termoBusca());
      if (!termo) {
        return this.dadosCasa.estudios();
      }
      return this.dadosCasa.estudios().filter((estudio) => this.correspondeBusca([
        estudio.nome,
        estudio.cidade,
        estudio.descricao_publica,
        ...estudio.servicos
      ], termo));
    },
    ...ngDevMode ? [{ debugName: "estudiosFiltrados" }] : (
      /* istanbul ignore next */
      []
    )
  );
  possuiResultadosBusca = computed(
    () => this.trabalhosFiltrados().length > 0 || this.estudiosFiltrados().length > 0,
    ...ngDevMode ? [{ debugName: "possuiResultadosBusca" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    void this.dadosCasa.listar();
  }
  atualizarBusca(evento) {
    const campo = evento.target;
    this.termoBusca.set(campo.value);
  }
  limparBusca() {
    this.termoBusca.set("");
  }
  abrirPorta(evento) {
    const estudios = this.dadosCasa.estudios();
    if (estudios.length === 0) {
      return;
    }
    evento.preventDefault();
    const ultimaPortaId = this.obterUltimaPortaId();
    const estudiosDisponiveis = estudios.length > 1 ? estudios.filter((estudio2) => estudio2.id !== ultimaPortaId) : estudios;
    const indice = Math.floor(Math.random() * estudiosDisponiveis.length);
    const estudio = estudiosDisponiveis[indice];
    if (!estudio) {
      return;
    }
    this.salvarUltimaPortaId(estudio.id);
    void this.roteador.navigate(["/", estudio.slug]);
  }
  inicialEstudio(nome) {
    return nome.trim().charAt(0).toLocaleUpperCase("pt-BR") || "F";
  }
  corEstudio(estudio) {
    return this.normalizarCor(estudio.cor_principal);
  }
  corTrabalho(trabalho) {
    return this.normalizarCor(trabalho.estudio_cor_principal);
  }
  normalizarCor(corOriginal) {
    const cor = corOriginal?.trim();
    return cor && /^#[0-9a-fA-F]{6}$/.test(cor) ? cor : "#4f7b61";
  }
  obterUltimaPortaId() {
    if (typeof window === "undefined") {
      return null;
    }
    try {
      return window.sessionStorage.getItem(this.chaveUltimaPorta);
    } catch {
      return null;
    }
  }
  salvarUltimaPortaId(estudioId) {
    if (typeof window === "undefined") {
      return;
    }
    try {
      window.sessionStorage.setItem(this.chaveUltimaPorta, estudioId);
    } catch {
      return;
    }
  }
  correspondeBusca(valores, termo) {
    return valores.some((valor) => this.normalizarBusca(valor ?? "").includes(termo));
  }
  normalizarBusca(valor) {
    return valor.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLocaleLowerCase("pt-BR");
  }
  static \u0275fac = function Casa_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Casa)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Casa, selectors: [["app-casa"]], decls: 39, vars: 5, consts: [[1, "casa"], ["aria-hidden", "true", 1, "moire"], [1, "cabecalho"], ["href", "https://fleiva.com.br", "aria-label", "Fl\xEAiva Studios", 1, "marca-fleiva"], ["aria-hidden", "true"], ["href", "https://fleiva.com.br", 1, "link-fleiva"], [1, "apresentacao"], [1, "texto"], [1, "descricao"], [1, "acoes"], ["href", "#casas-abertas", 1, "botao-explorar", 3, "click"], ["href", "https://fleiva.com.br", 1, "link-institucional"], ["aria-label", "Buscar na Casa Fl\xEAiva", 1, "busca-casa"], ["id", "trabalhos-da-casa", "aria-labelledby", "titulo-trabalhos-da-casa", 1, "trabalhos-da-casa"], ["id", "casas-abertas", "aria-labelledby", "titulo-casas-abertas", 1, "descoberta"], [1, "resultado-vazio-busca"], [1, "rodape"], ["for", "busca-casa"], ["id", "busca-casa", "type", "search", "placeholder", "Trabalho, artista, est\xFAdio, cidade ou servi\xE7o", "autocomplete", "off", 3, "input", "value"], ["type", "button"], ["type", "button", 3, "click"], [1, "cabecalho-descoberta"], ["id", "titulo-trabalhos-da-casa"], [1, "grade-trabalhos"], [1, "cartao-trabalho", 3, "sem-capa", "routerLink", "--studio-brand"], [1, "cartao-trabalho", 3, "routerLink"], [1, "capa-trabalho"], [1, "conteudo-trabalho"], [1, "tipo-trabalho"], [1, "projeto-trabalho"], [1, "descricao-trabalho"], [3, "src", "alt"], ["id", "titulo-casas-abertas"], [1, "estado-casa"], [1, "estado-casa", "estado-erro"], [1, "grade-estudios"], [1, "estado-casa", "estado-vazio"], ["aria-hidden", "true", 1, "carregador"], [1, "cartao-estudio", 3, "routerLink", "--studio-brand"], [1, "cartao-estudio", 3, "routerLink"], [1, "avatar-estudio"], [1, "estado-estudio"], [1, "conteudo-cartao"], [1, "local-estudio"], [1, "bio-estudio"], [1, "servicos-estudio"]], template: function Casa_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "header", 2)(3, "a", 3);
      \u0275\u0275element(4, "span", 4);
      \u0275\u0275elementStart(5, "strong");
      \u0275\u0275text(6, "CASA");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 5);
      \u0275\u0275text(8, " Conhe\xE7a a Fl\xEAiva ");
      \u0275\u0275elementStart(9, "span", 4);
      \u0275\u0275text(10, "\u2197");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "section", 6)(12, "div", 7)(13, "p");
      \u0275\u0275text(14, "CASA FL\xCAIVA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h1");
      \u0275\u0275text(16, " M\xFAsica nasce em muitos lugares. ");
      \u0275\u0275elementStart(17, "strong");
      \u0275\u0275text(18, "Encontre alguns deles.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "p", 8);
      \u0275\u0275text(20, " A Casa Fl\xEAiva re\xFAne Cards p\xFAblicos de quem faz a m\xFAsica independente acontecer. Cada Card \xE9 organizado por quem est\xE1 por tr\xE1s dele. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 9)(22, "a", 10);
      \u0275\u0275listener("click", function Casa_Template_a_click_22_listener($event) {
        return ctx.abrirPorta($event);
      });
      \u0275\u0275text(23, " Abrir uma porta ");
      \u0275\u0275elementStart(24, "span", 4);
      \u0275\u0275text(25, "\u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "a", 11);
      \u0275\u0275text(27, " Crie seu Card na Fl\xEAiva ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(28, Casa_Conditional_28_Template, 6, 2, "section", 12);
      \u0275\u0275conditionalCreate(29, Casa_Conditional_29_Template, 14, 2, "section", 13);
      \u0275\u0275conditionalCreate(30, Casa_Conditional_30_Template, 12, 2, "section", 14);
      \u0275\u0275conditionalCreate(31, Casa_Conditional_31_Template, 7, 0, "section", 15);
      \u0275\u0275elementStart(32, "footer", 16)(33, "span");
      \u0275\u0275text(34, "CASA FL\xCAIVA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span");
      \u0275\u0275text(36, "CARDS P\xDABLICOS DE QUEM FAZ M\xDASICA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span");
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(28);
      \u0275\u0275conditional(!ctx.dadosCasa.carregando() && !ctx.dadosCasa.erro() && (ctx.dadosCasa.trabalhos().length > 0 || ctx.dadosCasa.estudios().length > 0) ? 28 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.dadosCasa.carregando() && !ctx.dadosCasa.erro() && ctx.trabalhosFiltrados().length > 0 ? 29 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.buscaAtiva() || ctx.estudiosFiltrados().length > 0 ? 30 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.buscaAtiva() && !ctx.dadosCasa.carregando() && !ctx.dadosCasa.erro() && !ctx.possuiResultadosBusca() ? 31 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("BRASIL \xB7 ", ctx.anoAtual);
    }
  }, dependencies: [RouterLink], styles: ['@charset "UTF-8";\n\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100dvh;\n}\n.casa[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-height: 100dvh;\n  flex-direction: column;\n  overflow: clip;\n  padding: 1rem clamp(1rem, 4vw, 4rem);\n  background:\n    linear-gradient(\n      120deg,\n      rgba(136, 95, 116, 0.08),\n      transparent 48%),\n    #f4efdd;\n  color: #151714;\n  isolation: isolate;\n}\n.moire[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  right: -16rem;\n  bottom: -20rem;\n  width: min(62rem, 72vw);\n  aspect-ratio: 1;\n  background: url(/fleiva-landing/moire-fleiva.svg) center/contain no-repeat;\n  opacity: 0.25;\n  pointer-events: none;\n}\n.casa[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(.moire) {\n  position: relative;\n  z-index: 1;\n}\n.cabecalho[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 4.5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  border-bottom: 1px solid #151714;\n}\n.marca-fleiva[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n}\n.marca-fleiva[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  width: 7.5rem;\n  height: 2rem;\n  background: currentColor;\n  mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) left center/contain no-repeat;\n  -webkit-mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) left center/contain no-repeat;\n}\n.marca-fleiva[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  padding-left: 0.7rem;\n  border-left: 1px solid currentColor;\n  font-size: 0.55rem;\n  letter-spacing: 0.16em;\n}\n.link-fleiva[_ngcontent-%COMP%], \n.link-institucional[_ngcontent-%COMP%] {\n  padding-bottom: 0.2rem;\n  border-bottom: 1px solid currentColor;\n  font-size: 0.68rem;\n  font-weight: 800;\n}\n.apresentacao[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: min(48rem, 100dvh - 5.5rem);\n  align-items: center;\n  padding: clamp(4rem, 9vw, 8rem) 0;\n}\n.texto[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  grid-template-columns: minmax(0, 1.4fr) minmax(18rem, 0.6fr);\n  align-items: end;\n  column-gap: clamp(3rem, 10vw, 10rem);\n}\n.texto[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:first-child {\n  grid-column: 1/-1;\n  color: #885f74;\n  font-size: 0.6rem;\n  font-weight: 850;\n  letter-spacing: 0.16em;\n}\n.texto[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 2/4;\n  max-width: 11ch;\n  margin: 0;\n  font-size: clamp(3.2rem, 7vw, 7rem);\n  line-height: 0.9;\n  letter-spacing: -0.06em;\n}\n.texto[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #4f7b61;\n  font: inherit;\n}\n.descricao[_ngcontent-%COMP%] {\n  grid-column: 2;\n  max-width: 38rem;\n  margin: 0 0 2rem;\n  color: #454941;\n  font-size: 1.05rem;\n  line-height: 1.65;\n}\n.acoes[_ngcontent-%COMP%] {\n  display: flex;\n  grid-column: 2;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 1.5rem;\n}\n.busca-casa[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  gap: 1rem;\n  padding: 1.25rem 0;\n  border-top: 1px solid #151714;\n}\n.busca-casa[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  flex: 1;\n  gap: 0.35rem;\n}\n.busca-casa[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #885f74;\n  font-size: 0.5rem;\n  font-weight: 850;\n  letter-spacing: 0.14em;\n}\n.busca-casa[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #151714;\n  font: inherit;\n  font-size: clamp(1.25rem, 3vw, 2rem);\n  font-weight: 750;\n  letter-spacing: -0.035em;\n}\n.busca-casa[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #7a7e75;\n  opacity: 1;\n}\n.busca-casa[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0 0 0.2rem;\n  border: 0;\n  border-bottom: 1px solid currentColor;\n  background: transparent;\n  color: #151714;\n  font: inherit;\n  font-size: 0.58rem;\n  font-weight: 850;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: color 180ms ease;\n}\n.busca-casa[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #885f74;\n}\n.botao-explorar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 3.1rem;\n  align-items: center;\n  gap: 1.2rem;\n  padding: 0.7rem 1rem;\n  background: #151714;\n  color: #f4efdd;\n  font-size: 0.72rem;\n  font-weight: 850;\n  transition: background-color 180ms ease, transform 180ms ease;\n}\n.botao-explorar[_ngcontent-%COMP%]:hover {\n  background: #2c302c;\n  transform: translateY(-2px);\n}\n.botao-explorar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: transform 180ms ease;\n}\n.botao-explorar[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n.link-institucional[_ngcontent-%COMP%] {\n  transition: color 180ms ease;\n}\n.link-institucional[_ngcontent-%COMP%]:hover {\n  color: #885f74;\n}\n.rodape[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 3rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  border-top: 1px solid #151714;\n  color: #62675f;\n  font-size: 0.48rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n}\n.trabalhos-da-casa[_ngcontent-%COMP%], \n.descoberta[_ngcontent-%COMP%] {\n  position: relative;\n  padding: clamp(3rem, 6vw, 5rem) 0;\n  border-top: 1px solid #151714;\n  isolation: isolate;\n}\n.trabalhos-da-casa[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.descoberta[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.trabalhos-da-casa[_ngcontent-%COMP%]::before, \n.descoberta[_ngcontent-%COMP%]::before {\n  position: absolute;\n  z-index: 0;\n  width: clamp(26rem, 42vw, 40rem);\n  aspect-ratio: 1;\n  background: url(/fleiva-landing/moire-fleiva.svg) center/contain no-repeat;\n  content: "";\n  opacity: 0.3;\n  pointer-events: none;\n}\n.trabalhos-da-casa[_ngcontent-%COMP%]::before {\n  right: -7rem;\n  bottom: -9rem;\n  rotate: -9deg;\n}\n.descoberta[_ngcontent-%COMP%]::before {\n  top: 34%;\n  left: -8rem;\n  rotate: 13deg;\n}\n.cabecalho-descoberta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2.5rem;\n}\n.cabecalho-descoberta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.65rem;\n  color: #885f74;\n  font-size: 0.55rem;\n  font-weight: 850;\n  letter-spacing: 0.16em;\n}\n.cabecalho-descoberta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2.4rem, 5vw, 4.8rem);\n  line-height: 0.95;\n  letter-spacing: -0.05em;\n}\n.cabecalho-descoberta[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding-bottom: 0.45rem;\n  color: #62675f;\n  font-size: 0.58rem;\n  font-weight: 850;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.grade-trabalhos[_ngcontent-%COMP%] {\n  counter-reset: trabalho;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(min(100%, 26rem), 32rem));\n  gap: clamp(1.25rem, 3vw, 2rem);\n  justify-content: center;\n}\n.cartao-trabalho[_ngcontent-%COMP%] {\n  --studio-brand: #4f7b61;\n  position: relative;\n  counter-increment: trabalho;\n  display: grid;\n  width: 100%;\n  aspect-ratio: 2/1;\n  min-height: 0;\n  box-sizing: border-box;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  overflow: hidden;\n  border: 1px solid #151714;\n  background:\n    repeating-linear-gradient(\n      0deg,\n      transparent 0,\n      transparent 1.45rem,\n      rgba(21, 23, 20, 0.03) 1.45rem,\n      rgba(21, 23, 20, 0.03) calc(1.45rem + 1px)),\n    #eee7d2;\n  color: #151714;\n  isolation: isolate;\n  transition: translate 180ms ease, box-shadow 180ms ease;\n}\n.cartao-trabalho[_ngcontent-%COMP%]::before {\n  position: absolute;\n  z-index: 4;\n  top: 0.85rem;\n  left: 0.85rem;\n  padding: 0.42rem 0.55rem;\n  background: #151714;\n  color: #f4efdd;\n  content: "CASA \\b7  " counter(trabalho, decimal-leading-zero);\n  font-size: 0.48rem;\n  font-weight: 900;\n  letter-spacing: 0.13em;\n}\n.cartao-trabalho[_ngcontent-%COMP%]::after {\n  position: absolute;\n  z-index: 5;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 0.32rem;\n  background: var(--studio-brand);\n  content: "";\n}\n.cartao-trabalho[_ngcontent-%COMP%]:hover, \n.cartao-trabalho[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  box-shadow: 0.55rem 0.55rem 0 var(--studio-brand);\n  translate: -0.28rem -0.28rem;\n}\n.cartao-trabalho[_ngcontent-%COMP%]:hover   .capa-trabalho[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.cartao-trabalho[_ngcontent-%COMP%]:focus-visible   .capa-trabalho[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  scale: 1.025;\n  rotate: -0.7deg;\n}\n.cartao-trabalho.sem-capa[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.cartao-trabalho.sem-capa[_ngcontent-%COMP%]::before {\n  right: 0.85rem;\n  left: auto;\n}\n.cartao-trabalho.sem-capa[_ngcontent-%COMP%]   .conteudo-trabalho[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  max-width: 48rem;\n  padding-top: 3.8rem;\n}\n.cartao-trabalho.sem-capa[_ngcontent-%COMP%]   .tipo-trabalho[_ngcontent-%COMP%] {\n  right: 6.4rem;\n}\n.capa-trabalho[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-width: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  aspect-ratio: 1;\n  padding: 0;\n  place-items: center;\n  border-right: 1px solid #151714;\n  background:\n    radial-gradient(\n      circle at 20% 18%,\n      color-mix(in srgb, var(--studio-brand) 24%, transparent),\n      transparent 34%),\n    linear-gradient(\n      145deg,\n      rgba(244, 239, 221, 0.38),\n      color-mix(in srgb, var(--studio-brand) 11%, #f4efdd)),\n    #f4efdd;\n}\n.capa-trabalho[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  min-width: 0;\n  min-height: 0;\n  object-fit: scale-down;\n  transition: scale 220ms ease, rotate 220ms ease;\n}\n.conteudo-trabalho[_ngcontent-%COMP%] {\n  --espaco-conteudo: clamp(1.35rem, 3vw, 2rem);\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.18),\n      transparent 55%);\n}\n.conteudo-trabalho[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 0;\n  overflow: hidden;\n  padding: 3.55rem var(--espaco-conteudo) var(--espaco-conteudo);\n}\n.conteudo-trabalho[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  height: 1.84em;\n  overflow: hidden;\n  margin: 0;\n  font-size: clamp(1.45rem, 2vw, 2rem);\n  line-height: 0.92;\n  letter-spacing: -0.045em;\n  hyphens: none;\n  overflow-wrap: normal;\n  text-wrap: pretty;\n  white-space: normal;\n  word-break: normal;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.conteudo-trabalho[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  min-height: 3.6rem;\n  padding: 0.85rem 1.25rem;\n  border-top: 1px solid #151714;\n  background: #151714;\n  color: #f4efdd;\n  font-size: 0.55rem;\n  font-weight: 850;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.conteudo-trabalho[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.6rem;\n  color: #f4efdd;\n}\n.conteudo-trabalho[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid;\n  width: 1.45rem;\n  aspect-ratio: 1;\n  place-items: center;\n  background: var(--studio-brand);\n  color: #fff;\n  font-style: normal;\n}\n.tipo-trabalho[_ngcontent-%COMP%] {\n  position: absolute;\n  top: var(--espaco-conteudo);\n  right: var(--espaco-conteudo);\n  left: var(--espaco-conteudo);\n  margin: 0;\n  overflow: hidden;\n  color: var(--studio-brand);\n  font-size: 0.53rem;\n  font-weight: 850;\n  letter-spacing: 0.12em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.projeto-trabalho[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  overflow: hidden;\n  color: #454941;\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0.07em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.descricao-trabalho[_ngcontent-%COMP%] {\n  display: none;\n  margin: 1.15rem 0 0;\n  overflow: hidden;\n  color: #545950;\n  font-size: 0.86rem;\n  line-height: 1.65;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.grade-estudios[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(min(100%, 16rem), 18rem));\n  gap: clamp(1.25rem, 3vw, 1.8rem);\n  justify-content: center;\n}\n.cartao-estudio[_ngcontent-%COMP%] {\n  --studio-brand: #4f7b61;\n  position: relative;\n  display: grid;\n  width: 100%;\n  aspect-ratio: 4/5;\n  min-height: 0;\n  box-sizing: border-box;\n  grid-template-rows: auto minmax(0, 1fr) auto;\n  overflow: hidden;\n  border: 1px solid #151714;\n  background:\n    linear-gradient(\n      145deg,\n      color-mix(in srgb, var(--studio-brand) 13%, transparent),\n      transparent 48%),\n    #eee7d2;\n  color: #151714;\n  isolation: isolate;\n  transition: translate 180ms ease, box-shadow 180ms ease;\n}\n.cartao-estudio[_ngcontent-%COMP%]::before {\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 0.38rem;\n  background: var(--studio-brand);\n  content: "";\n}\n.cartao-estudio[_ngcontent-%COMP%]:hover, \n.cartao-estudio[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  box-shadow: 0.55rem 0.55rem 0 var(--studio-brand);\n  translate: -0.28rem -0.28rem;\n}\n.cartao-estudio[_ngcontent-%COMP%]:hover   .avatar-estudio[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.cartao-estudio[_ngcontent-%COMP%]:focus-visible   .avatar-estudio[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  scale: 1.05;\n}\n.cartao-estudio[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%], \n.cartao-estudio[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem;\n}\n.cartao-estudio[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #151714;\n  background: rgba(244, 239, 221, 0.52);\n}\n.cartao-estudio[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  min-height: 3.5rem;\n  border-top: 1px solid #151714;\n  background: color-mix(in srgb, var(--studio-brand) 18%, #151714);\n  color: #f4efdd;\n  font-size: 0.58rem;\n  font-weight: 850;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.avatar-estudio[_ngcontent-%COMP%] {\n  display: grid;\n  width: 4.5rem;\n  aspect-ratio: 1;\n  overflow: hidden;\n  place-items: center;\n  background: rgba(244, 239, 221, 0.82);\n  color: #fff;\n  border: 1px solid #151714;\n  box-shadow: 0.28rem 0.28rem 0 var(--studio-brand);\n}\n.avatar-estudio[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0.35rem;\n  object-fit: scale-down;\n  transition: scale 180ms ease;\n}\n.avatar-estudio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  place-items: center;\n  background: var(--studio-brand);\n  font-size: 1.25rem;\n  font-weight: 900;\n}\n.estado-estudio[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.42rem 0.55rem;\n  background: rgba(244, 239, 221, 0.72);\n  border: 1px solid rgba(21, 23, 20, 0.22);\n  font-size: 0.46rem;\n  font-weight: 850;\n  letter-spacing: 0.1em;\n}\n.estado-estudio[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 0.45rem;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background: var(--studio-brand);\n  animation: _ngcontent-%COMP%_pulso-ponto 2.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulso-ponto {\n  0%, 100% {\n    box-shadow: 0 0 0 0 color-mix(in srgb, var(--studio-brand) 40%, transparent);\n  }\n  50% {\n    box-shadow: 0 0 0 0.35rem transparent;\n  }\n}\n.conteudo-cartao[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  z-index: 1;\n  min-height: 0;\n  overflow: hidden;\n  padding: 1rem 1.15rem;\n}\n.conteudo-cartao[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  height: 1.8em;\n  overflow: hidden;\n  margin: 0;\n  max-width: none;\n  font-size: clamp(1.4rem, 1.8vw, 1.9rem);\n  line-height: 0.9;\n  letter-spacing: -0.045em;\n  hyphens: none;\n  overflow-wrap: normal;\n  text-wrap: pretty;\n  white-space: normal;\n  word-break: normal;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.local-estudio[_ngcontent-%COMP%] {\n  position: static;\n  margin: 0 0 0.7rem;\n  overflow: hidden;\n  color: var(--studio-brand);\n  font-size: 0.52rem;\n  font-weight: 850;\n  letter-spacing: 0.11em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.bio-estudio[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  margin: 1rem 0 0;\n  overflow: hidden;\n  color: #545950;\n  font-size: 0.84rem;\n  line-height: 1.6;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.servicos-estudio[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.45rem;\n  margin: 0.9rem 0 0;\n  padding: 0;\n  list-style: none;\n}\n.servicos-estudio[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.38rem 0.55rem;\n  border: 1px solid rgba(21, 23, 20, 0.2);\n  background: rgba(244, 239, 221, 0.78);\n  color: #454941;\n  font-size: 0.5rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  line-height: 1;\n  text-transform: uppercase;\n}\n.estado-casa[_ngcontent-%COMP%], \n.resultado-vazio-busca[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  align-content: center;\n  gap: 0.65rem;\n  text-align: center;\n}\n.estado-casa[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.estado-casa[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.resultado-vazio-busca[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.resultado-vazio-busca[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.estado-casa[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.resultado-vazio-busca[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #62675f;\n  font-size: 0.78rem;\n}\n.estado-casa[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.resultado-vazio-busca[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 2.7rem;\n  margin-top: 0.5rem;\n  padding: 0.65rem 1rem;\n  border: 0;\n  background: #151714;\n  color: #f4efdd;\n  font: inherit;\n  font-size: 0.66rem;\n  font-weight: 850;\n  cursor: pointer;\n  transition: background-color 180ms ease, transform 180ms ease;\n}\n.estado-casa[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.resultado-vazio-busca[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #2c302c;\n  transform: translateY(-2px);\n}\n.estado-casa[_ngcontent-%COMP%] {\n  min-height: 15rem;\n  padding: 2rem;\n  border: 1px solid #151714;\n}\n.resultado-vazio-busca[_ngcontent-%COMP%] {\n  min-height: 20rem;\n  border-top: 1px solid #151714;\n}\n.carregador[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  aspect-ratio: 1;\n  border: 2px solid rgba(21, 23, 20, 0.18);\n  border-top-color: #151714;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_girar 700ms linear infinite;\n}\n@keyframes _ngcontent-%COMP%_girar {\n  to {\n    rotate: 1turn;\n  }\n}\n@media (min-width: 48rem) {\n  .cartao-trabalho[_ngcontent-%COMP%]:nth-child(even):not(.sem-capa)::before {\n    right: 0.85rem;\n    left: auto;\n  }\n  .cartao-trabalho[_ngcontent-%COMP%]:nth-child(even):not(.sem-capa)   .capa-trabalho[_ngcontent-%COMP%] {\n    grid-column: 2;\n    grid-row: 1;\n    border-right: 0;\n    border-left: 1px solid #151714;\n  }\n  .cartao-trabalho[_ngcontent-%COMP%]:nth-child(even):not(.sem-capa)   .conteudo-trabalho[_ngcontent-%COMP%] {\n    grid-column: 1;\n    grid-row: 1;\n  }\n}\n@media (max-width: 58rem) {\n  .texto[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .texto[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .texto[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%], \n   .texto[_ngcontent-%COMP%]   .acoes[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n  .texto[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    grid-row: auto;\n  }\n  .texto[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%] {\n    margin: 2rem 0 0;\n  }\n  .texto[_ngcontent-%COMP%]   .acoes[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n  }\n}\n@media (max-width: 38rem) {\n  .casa[_ngcontent-%COMP%] {\n    padding-inline: 1rem;\n  }\n  .marca-fleiva[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .apresentacao[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n  }\n  .texto[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(3rem, 15vw, 5rem);\n  }\n  .acoes[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .acoes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .busca-casa[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .busca-casa[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .rodape[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n    display: none;\n  }\n  .cabecalho-descoberta[_ngcontent-%COMP%] {\n    align-items: start;\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .trabalhos-da-casa[_ngcontent-%COMP%]::before, \n   .descoberta[_ngcontent-%COMP%]::before {\n    width: 30rem;\n    opacity: 0.1;\n  }\n  .trabalhos-da-casa[_ngcontent-%COMP%]::before {\n    right: -13rem;\n    bottom: -9rem;\n  }\n  .descoberta[_ngcontent-%COMP%]::before {\n    top: 42%;\n    left: -13rem;\n  }\n  .cartao-trabalho[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  }\n  .cartao-trabalho.sem-capa[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .capa-trabalho[_ngcontent-%COMP%] {\n    min-height: 0;\n    padding: 0;\n    border-right: 1px solid #151714;\n    border-bottom: 0;\n  }\n  .conteudo-trabalho[_ngcontent-%COMP%] {\n    --espaco-conteudo: 1rem;\n  }\n  .conteudo-trabalho[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    padding: 0.85rem;\n  }\n  .conteudo-trabalho[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: clamp(1.25rem, 6vw, 1.8rem);\n    -webkit-line-clamp: 2;\n  }\n  .conteudo-trabalho[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n    min-height: 2.8rem;\n    padding: 0.55rem 0.7rem;\n    font-size: 0.43rem;\n  }\n  .conteudo-trabalho[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .tipo-trabalho[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .projeto-trabalho[_ngcontent-%COMP%] {\n    margin-top: 0.6rem;\n    font-size: 0.55rem;\n  }\n  .descricao-trabalho[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .botao-explorar[_ngcontent-%COMP%], \n   .link-institucional[_ngcontent-%COMP%], \n   .busca-casa[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .estado-casa[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .resultado-vazio-busca[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .cartao-trabalho[_ngcontent-%COMP%], \n   .cartao-estudio[_ngcontent-%COMP%], \n   .capa-trabalho[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n   .avatar-estudio[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transition: none;\n    animation: none;\n  }\n  .cartao-trabalho[_ngcontent-%COMP%]:hover, \n   .cartao-estudio[_ngcontent-%COMP%]:hover, \n   .botao-explorar[_ngcontent-%COMP%]:hover, \n   .estado-casa[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n   .resultado-vazio-busca[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    transform: none;\n    box-shadow: none;\n    translate: none;\n  }\n  .estado-estudio[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n.fleiva-wordmark[_ngcontent-%COMP%] {\n  --fleiva-mascara: var(--mascara-wordmark);\n  width: clamp(8.75rem, 13vw, 11.5rem);\n  aspect-ratio: 1256/596;\n  animation: entrada-logo 700ms cubic-bezier(0.22, 1, 0.36, 1) both;\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Casa, [{
    type: Component,
    args: [{ selector: "app-casa", standalone: true, imports: [RouterLink], template: `<main class="casa">
  <div class="moire" aria-hidden="true"></div>

  <header class="cabecalho">
    <a
      class="marca-fleiva"
      href="https://fleiva.com.br"
      aria-label="Fl\xEAiva Studios"
    >
      <span aria-hidden="true"></span>
      <strong>CASA</strong>
    </a>

    <a
      class="link-fleiva"
      href="https://fleiva.com.br"
    >
      Conhe\xE7a a Fl\xEAiva
      <span aria-hidden="true">\u2197</span>
    </a>
  </header>

  <section class="apresentacao">
    <div class="texto">
      <p>CASA FL\xCAIVA</p>

      <h1>
        M\xFAsica nasce em muitos lugares.
        <strong>Encontre alguns deles.</strong>
      </h1>

      <p class="descricao">
        A Casa Fl\xEAiva re\xFAne Cards p\xFAblicos de quem faz a
        m\xFAsica independente acontecer. Cada Card \xE9 organizado
        por quem est\xE1 por tr\xE1s dele.
      </p>

      <div class="acoes">
        <a
          class="botao-explorar"
          href="#casas-abertas"
          (click)="abrirPorta($event)"
        >
          Abrir uma porta
          <span aria-hidden="true">\u2192</span>
        </a>

        <a
          class="link-institucional"
          href="https://fleiva.com.br"
        >
          Crie seu Card na Fl\xEAiva
        </a>
      </div>
    </div>
  </section>

  @if (
    !dadosCasa.carregando() &&
    !dadosCasa.erro() &&
    (
      dadosCasa.trabalhos().length > 0 ||
      dadosCasa.estudios().length > 0
    )
  ) {
    <section class="busca-casa" aria-label="Buscar na Casa Fl\xEAiva">
      <label for="busca-casa">
        <span>BUSCAR NA CASA</span>

        <input
          id="busca-casa"
          type="search"
          [value]="termoBusca()"
          placeholder="Trabalho, artista, est\xFAdio, cidade ou servi\xE7o"
          autocomplete="off"
          (input)="atualizarBusca($event)"
        />
      </label>

      @if (buscaAtiva()) {
        <button type="button" (click)="limparBusca()">
          Limpar busca
        </button>
      }
    </section>
  }

  @if (
    !dadosCasa.carregando() &&
    !dadosCasa.erro() &&
    trabalhosFiltrados().length > 0
  ) {
    <section
      id="trabalhos-da-casa"
      class="trabalhos-da-casa"
      aria-labelledby="titulo-trabalhos-da-casa"
    >
      <header class="cabecalho-descoberta">
        <div>
          <p>ESCOLHIDOS PELOS EST\xDADIOS</p>
          <h2 id="titulo-trabalhos-da-casa">
            Trabalhos da Casa
          </h2>
        </div>

        <span>
          {{ trabalhosFiltrados().length }}
          @if (trabalhosFiltrados().length === 1) {
            trabalho
          } @else {
            trabalhos
          }
        </span>
      </header>

      <div class="grade-trabalhos">
        @for (
          trabalho of trabalhosFiltrados();
          track trabalho.album_id
        ) {
          <a
            class="cartao-trabalho"
            [class.sem-capa]="!trabalho.capa_url"
            [routerLink]="[
              '/estudio',
              trabalho.estudio_slug,
              'trabalho',
              trabalho.album_id
            ]"
            [style.--studio-brand]="corTrabalho(trabalho)"
          >
            @if (trabalho.capa_url) {
              <figure class="capa-trabalho">
                <img
                  [src]="trabalho.capa_url"
                  [alt]="'Capa de ' + trabalho.album_nome"
                />
              </figure>
            }

            <div class="conteudo-trabalho">
              <div>
                @if (trabalho.album_tipo) {
                  <p class="tipo-trabalho">
                    {{ trabalho.album_tipo }}
                  </p>
                }

                <h3>{{ trabalho.album_nome }}</h3>
                <p class="projeto-trabalho">
                  {{ trabalho.projeto_nome }}
                </p>

                @if (trabalho.album_descricao) {
                  <p class="descricao-trabalho">
                    {{ trabalho.album_descricao }}
                  </p>
                }
              </div>

              <footer>
                <span>{{ trabalho.estudio_nome }}</span>
                <span>
                  Abrir trabalho
                  <i aria-hidden="true">\u2192</i>
                </span>
              </footer>
            </div>
          </a>
        }
      </div>
    </section>
  }

  @if (!buscaAtiva() || estudiosFiltrados().length > 0) {
    <section
      id="casas-abertas"
      class="descoberta"
      aria-labelledby="titulo-casas-abertas"
    >
    <header class="cabecalho-descoberta">
      <div>
        <p>CARDS FL\xCAIVA</p>
        <h2 id="titulo-casas-abertas">Casas abertas</h2>
      </div>

      @if (!dadosCasa.carregando() && !dadosCasa.erro()) {
        <span>
          {{ estudiosFiltrados().length }}
          @if (estudiosFiltrados().length === 1) {
            est\xFAdio
          } @else {
            est\xFAdios
          }
        </span>
      }
    </header>

    @if (dadosCasa.carregando()) {
      <div class="estado-casa">
        <span class="carregador" aria-hidden="true"></span>
        <p>Procurando casas abertas...</p>
      </div>
    } @else if (dadosCasa.erro()) {
      <div class="estado-casa estado-erro">
        <strong>N\xE3o foi poss\xEDvel abrir a Casa.</strong>
        <p>{{ dadosCasa.erro() }}</p>

        <button
          type="button"
          (click)="dadosCasa.listar()"
        >
          Tentar novamente
        </button>
      </div>
    } @else if (estudiosFiltrados().length > 0) {
      <div class="grade-estudios">
        @for (
          estudio of estudiosFiltrados();
          track estudio.id
        ) {
          <a
            class="cartao-estudio"
            [routerLink]="['/', estudio.slug]"
            [style.--studio-brand]="corEstudio(estudio)"
          >
            <header>
              <div class="avatar-estudio">
                @if (estudio.logo_url) {
                  <img
                    [src]="estudio.logo_url"
                    [alt]="'Logo de ' + estudio.nome"
                  />
                } @else {
                  <span>
                    {{ inicialEstudio(estudio.nome) }}
                  </span>
                }
              </div>

              <span class="estado-estudio">
                <i aria-hidden="true"></i>
                CASA ABERTA
              </span>
            </header>

            <div class="conteudo-cartao">
              @if (estudio.cidade) {
                <p class="local-estudio">
                  {{ estudio.cidade }}
                </p>
              }

              <h3>{{ estudio.nome }}</h3>

              @if (estudio.descricao_publica) {
                <p class="bio-estudio">
                  {{ estudio.descricao_publica }}
                </p>
              }

              @if (estudio.servicos.length > 0) {
                <ul
                  class="servicos-estudio"
                  [attr.aria-label]="
                    'Servi\xE7os de ' + estudio.nome
                  "
                >
                  @for (
                    servico of estudio.servicos;
                    track servico
                  ) {
                    <li>{{ servico }}</li>
                  }
                </ul>
              }
            </div>

            <footer>
              <span>Abrir Card</span>
              <span aria-hidden="true">\u2192</span>
            </footer>
          </a>
        }
      </div>
    } @else {
      <div class="estado-casa estado-vazio">
        <strong>A Casa est\xE1 abrindo as portas.</strong>
        <p>
          Os est\xFAdios publicados aparecer\xE3o aqui.
        </p>
      </div>
    }
    </section>
  }

  @if (
    buscaAtiva() &&
    !dadosCasa.carregando() &&
    !dadosCasa.erro() &&
    !possuiResultadosBusca()
  ) {
    <section class="resultado-vazio-busca">
      <strong>Nada encontrado na Casa.</strong>
      <p>
        Tente outro nome, cidade, servi\xE7o ou trabalho.
      </p>
      <button type="button" (click)="limparBusca()">
        Limpar busca
      </button>
    </section>
  }

  <footer class="rodape">
    <span>CASA FL\xCAIVA</span>
    <span>CARDS P\xDABLICOS DE QUEM FAZ M\xDASICA</span>
    <span>BRASIL \xB7 {{ anoAtual }}</span>
  </footer>
</main>
`, styles: ['@charset "UTF-8";\n\n/* apps/studio-dash/src/app/paginas/casa/casa.scss */\n:host {\n  display: block;\n  min-height: 100dvh;\n}\n.casa {\n  position: relative;\n  display: flex;\n  min-height: 100dvh;\n  flex-direction: column;\n  overflow: clip;\n  padding: 1rem clamp(1rem, 4vw, 4rem);\n  background:\n    linear-gradient(\n      120deg,\n      rgba(136, 95, 116, 0.08),\n      transparent 48%),\n    #f4efdd;\n  color: #151714;\n  isolation: isolate;\n}\n.moire {\n  position: absolute;\n  z-index: 0;\n  right: -16rem;\n  bottom: -20rem;\n  width: min(62rem, 72vw);\n  aspect-ratio: 1;\n  background: url(/fleiva-landing/moire-fleiva.svg) center/contain no-repeat;\n  opacity: 0.25;\n  pointer-events: none;\n}\n.casa > :not(.moire) {\n  position: relative;\n  z-index: 1;\n}\n.cabecalho {\n  display: flex;\n  min-height: 4.5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  border-bottom: 1px solid #151714;\n}\n.marca-fleiva {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n}\n.marca-fleiva > span {\n  display: block;\n  width: 7.5rem;\n  height: 2rem;\n  background: currentColor;\n  mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) left center/contain no-repeat;\n  -webkit-mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) left center/contain no-repeat;\n}\n.marca-fleiva strong {\n  padding-left: 0.7rem;\n  border-left: 1px solid currentColor;\n  font-size: 0.55rem;\n  letter-spacing: 0.16em;\n}\n.link-fleiva,\n.link-institucional {\n  padding-bottom: 0.2rem;\n  border-bottom: 1px solid currentColor;\n  font-size: 0.68rem;\n  font-weight: 800;\n}\n.apresentacao {\n  display: grid;\n  min-height: min(48rem, 100dvh - 5.5rem);\n  align-items: center;\n  padding: clamp(4rem, 9vw, 8rem) 0;\n}\n.texto {\n  display: grid;\n  width: 100%;\n  grid-template-columns: minmax(0, 1.4fr) minmax(18rem, 0.6fr);\n  align-items: end;\n  column-gap: clamp(3rem, 10vw, 10rem);\n}\n.texto > p:first-child {\n  grid-column: 1/-1;\n  color: #885f74;\n  font-size: 0.6rem;\n  font-weight: 850;\n  letter-spacing: 0.16em;\n}\n.texto h1 {\n  grid-column: 1;\n  grid-row: 2/4;\n  max-width: 11ch;\n  margin: 0;\n  font-size: clamp(3.2rem, 7vw, 7rem);\n  line-height: 0.9;\n  letter-spacing: -0.06em;\n}\n.texto h1 strong {\n  display: block;\n  color: #4f7b61;\n  font: inherit;\n}\n.descricao {\n  grid-column: 2;\n  max-width: 38rem;\n  margin: 0 0 2rem;\n  color: #454941;\n  font-size: 1.05rem;\n  line-height: 1.65;\n}\n.acoes {\n  display: flex;\n  grid-column: 2;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 1.5rem;\n}\n.busca-casa {\n  display: flex;\n  align-items: end;\n  gap: 1rem;\n  padding: 1.25rem 0;\n  border-top: 1px solid #151714;\n}\n.busca-casa label {\n  display: grid;\n  min-width: 0;\n  flex: 1;\n  gap: 0.35rem;\n}\n.busca-casa label > span {\n  color: #885f74;\n  font-size: 0.5rem;\n  font-weight: 850;\n  letter-spacing: 0.14em;\n}\n.busca-casa input {\n  width: 100%;\n  min-width: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #151714;\n  font: inherit;\n  font-size: clamp(1.25rem, 3vw, 2rem);\n  font-weight: 750;\n  letter-spacing: -0.035em;\n}\n.busca-casa input::placeholder {\n  color: #7a7e75;\n  opacity: 1;\n}\n.busca-casa button {\n  padding: 0 0 0.2rem;\n  border: 0;\n  border-bottom: 1px solid currentColor;\n  background: transparent;\n  color: #151714;\n  font: inherit;\n  font-size: 0.58rem;\n  font-weight: 850;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: color 180ms ease;\n}\n.busca-casa button:hover {\n  color: #885f74;\n}\n.botao-explorar {\n  display: inline-flex;\n  min-height: 3.1rem;\n  align-items: center;\n  gap: 1.2rem;\n  padding: 0.7rem 1rem;\n  background: #151714;\n  color: #f4efdd;\n  font-size: 0.72rem;\n  font-weight: 850;\n  transition: background-color 180ms ease, transform 180ms ease;\n}\n.botao-explorar:hover {\n  background: #2c302c;\n  transform: translateY(-2px);\n}\n.botao-explorar span {\n  transition: transform 180ms ease;\n}\n.botao-explorar:hover span {\n  transform: translateX(3px);\n}\n.link-institucional {\n  transition: color 180ms ease;\n}\n.link-institucional:hover {\n  color: #885f74;\n}\n.rodape {\n  display: flex;\n  min-height: 3rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  border-top: 1px solid #151714;\n  color: #62675f;\n  font-size: 0.48rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n}\n.trabalhos-da-casa,\n.descoberta {\n  position: relative;\n  padding: clamp(3rem, 6vw, 5rem) 0;\n  border-top: 1px solid #151714;\n  isolation: isolate;\n}\n.trabalhos-da-casa > *,\n.descoberta > * {\n  position: relative;\n  z-index: 1;\n}\n.trabalhos-da-casa::before,\n.descoberta::before {\n  position: absolute;\n  z-index: 0;\n  width: clamp(26rem, 42vw, 40rem);\n  aspect-ratio: 1;\n  background: url(/fleiva-landing/moire-fleiva.svg) center/contain no-repeat;\n  content: "";\n  opacity: 0.3;\n  pointer-events: none;\n}\n.trabalhos-da-casa::before {\n  right: -7rem;\n  bottom: -9rem;\n  rotate: -9deg;\n}\n.descoberta::before {\n  top: 34%;\n  left: -8rem;\n  rotate: 13deg;\n}\n.cabecalho-descoberta {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2.5rem;\n}\n.cabecalho-descoberta p {\n  margin: 0 0 0.65rem;\n  color: #885f74;\n  font-size: 0.55rem;\n  font-weight: 850;\n  letter-spacing: 0.16em;\n}\n.cabecalho-descoberta h2 {\n  margin: 0;\n  font-size: clamp(2.4rem, 5vw, 4.8rem);\n  line-height: 0.95;\n  letter-spacing: -0.05em;\n}\n.cabecalho-descoberta > span {\n  padding-bottom: 0.45rem;\n  color: #62675f;\n  font-size: 0.58rem;\n  font-weight: 850;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.grade-trabalhos {\n  counter-reset: trabalho;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(min(100%, 26rem), 32rem));\n  gap: clamp(1.25rem, 3vw, 2rem);\n  justify-content: center;\n}\n.cartao-trabalho {\n  --studio-brand: #4f7b61;\n  position: relative;\n  counter-increment: trabalho;\n  display: grid;\n  width: 100%;\n  aspect-ratio: 2/1;\n  min-height: 0;\n  box-sizing: border-box;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  overflow: hidden;\n  border: 1px solid #151714;\n  background:\n    repeating-linear-gradient(\n      0deg,\n      transparent 0,\n      transparent 1.45rem,\n      rgba(21, 23, 20, 0.03) 1.45rem,\n      rgba(21, 23, 20, 0.03) calc(1.45rem + 1px)),\n    #eee7d2;\n  color: #151714;\n  isolation: isolate;\n  transition: translate 180ms ease, box-shadow 180ms ease;\n}\n.cartao-trabalho::before {\n  position: absolute;\n  z-index: 4;\n  top: 0.85rem;\n  left: 0.85rem;\n  padding: 0.42rem 0.55rem;\n  background: #151714;\n  color: #f4efdd;\n  content: "CASA \\b7  " counter(trabalho, decimal-leading-zero);\n  font-size: 0.48rem;\n  font-weight: 900;\n  letter-spacing: 0.13em;\n}\n.cartao-trabalho::after {\n  position: absolute;\n  z-index: 5;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 0.32rem;\n  background: var(--studio-brand);\n  content: "";\n}\n.cartao-trabalho:hover,\n.cartao-trabalho:focus-visible {\n  outline: none;\n  box-shadow: 0.55rem 0.55rem 0 var(--studio-brand);\n  translate: -0.28rem -0.28rem;\n}\n.cartao-trabalho:hover .capa-trabalho img,\n.cartao-trabalho:focus-visible .capa-trabalho img {\n  scale: 1.025;\n  rotate: -0.7deg;\n}\n.cartao-trabalho.sem-capa {\n  grid-template-columns: 1fr;\n}\n.cartao-trabalho.sem-capa::before {\n  right: 0.85rem;\n  left: auto;\n}\n.cartao-trabalho.sem-capa .conteudo-trabalho > div {\n  max-width: 48rem;\n  padding-top: 3.8rem;\n}\n.cartao-trabalho.sem-capa .tipo-trabalho {\n  right: 6.4rem;\n}\n.capa-trabalho {\n  position: relative;\n  display: grid;\n  min-width: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  aspect-ratio: 1;\n  padding: 0;\n  place-items: center;\n  border-right: 1px solid #151714;\n  background:\n    radial-gradient(\n      circle at 20% 18%,\n      color-mix(in srgb, var(--studio-brand) 24%, transparent),\n      transparent 34%),\n    linear-gradient(\n      145deg,\n      rgba(244, 239, 221, 0.38),\n      color-mix(in srgb, var(--studio-brand) 11%, #f4efdd)),\n    #f4efdd;\n}\n.capa-trabalho img {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  min-width: 0;\n  min-height: 0;\n  object-fit: scale-down;\n  transition: scale 220ms ease, rotate 220ms ease;\n}\n.conteudo-trabalho {\n  --espaco-conteudo: clamp(1.35rem, 3vw, 2rem);\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.18),\n      transparent 55%);\n}\n.conteudo-trabalho > div {\n  position: relative;\n  min-height: 0;\n  overflow: hidden;\n  padding: 3.55rem var(--espaco-conteudo) var(--espaco-conteudo);\n}\n.conteudo-trabalho h3 {\n  display: -webkit-box;\n  height: 1.84em;\n  overflow: hidden;\n  margin: 0;\n  font-size: clamp(1.45rem, 2vw, 2rem);\n  line-height: 0.92;\n  letter-spacing: -0.045em;\n  hyphens: none;\n  overflow-wrap: normal;\n  text-wrap: pretty;\n  white-space: normal;\n  word-break: normal;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.conteudo-trabalho footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  min-height: 3.6rem;\n  padding: 0.85rem 1.25rem;\n  border-top: 1px solid #151714;\n  background: #151714;\n  color: #f4efdd;\n  font-size: 0.55rem;\n  font-weight: 850;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.conteudo-trabalho footer span:last-child {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.6rem;\n  color: #f4efdd;\n}\n.conteudo-trabalho footer i {\n  display: grid;\n  width: 1.45rem;\n  aspect-ratio: 1;\n  place-items: center;\n  background: var(--studio-brand);\n  color: #fff;\n  font-style: normal;\n}\n.tipo-trabalho {\n  position: absolute;\n  top: var(--espaco-conteudo);\n  right: var(--espaco-conteudo);\n  left: var(--espaco-conteudo);\n  margin: 0;\n  overflow: hidden;\n  color: var(--studio-brand);\n  font-size: 0.53rem;\n  font-weight: 850;\n  letter-spacing: 0.12em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.projeto-trabalho {\n  margin: 1rem 0 0;\n  overflow: hidden;\n  color: #454941;\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0.07em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.descricao-trabalho {\n  display: none;\n  margin: 1.15rem 0 0;\n  overflow: hidden;\n  color: #545950;\n  font-size: 0.86rem;\n  line-height: 1.65;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.grade-estudios {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(min(100%, 16rem), 18rem));\n  gap: clamp(1.25rem, 3vw, 1.8rem);\n  justify-content: center;\n}\n.cartao-estudio {\n  --studio-brand: #4f7b61;\n  position: relative;\n  display: grid;\n  width: 100%;\n  aspect-ratio: 4/5;\n  min-height: 0;\n  box-sizing: border-box;\n  grid-template-rows: auto minmax(0, 1fr) auto;\n  overflow: hidden;\n  border: 1px solid #151714;\n  background:\n    linear-gradient(\n      145deg,\n      color-mix(in srgb, var(--studio-brand) 13%, transparent),\n      transparent 48%),\n    #eee7d2;\n  color: #151714;\n  isolation: isolate;\n  transition: translate 180ms ease, box-shadow 180ms ease;\n}\n.cartao-estudio::before {\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 0.38rem;\n  background: var(--studio-brand);\n  content: "";\n}\n.cartao-estudio:hover,\n.cartao-estudio:focus-visible {\n  outline: none;\n  box-shadow: 0.55rem 0.55rem 0 var(--studio-brand);\n  translate: -0.28rem -0.28rem;\n}\n.cartao-estudio:hover .avatar-estudio img,\n.cartao-estudio:focus-visible .avatar-estudio img {\n  scale: 1.05;\n}\n.cartao-estudio > header,\n.cartao-estudio > footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem;\n}\n.cartao-estudio > header {\n  position: relative;\n  z-index: 1;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #151714;\n  background: rgba(244, 239, 221, 0.52);\n}\n.cartao-estudio > footer {\n  position: relative;\n  z-index: 1;\n  min-height: 3.5rem;\n  border-top: 1px solid #151714;\n  background: color-mix(in srgb, var(--studio-brand) 18%, #151714);\n  color: #f4efdd;\n  font-size: 0.58rem;\n  font-weight: 850;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.avatar-estudio {\n  display: grid;\n  width: 4.5rem;\n  aspect-ratio: 1;\n  overflow: hidden;\n  place-items: center;\n  background: rgba(244, 239, 221, 0.82);\n  color: #fff;\n  border: 1px solid #151714;\n  box-shadow: 0.28rem 0.28rem 0 var(--studio-brand);\n}\n.avatar-estudio img {\n  width: 100%;\n  height: 100%;\n  padding: 0.35rem;\n  object-fit: scale-down;\n  transition: scale 180ms ease;\n}\n.avatar-estudio span {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  place-items: center;\n  background: var(--studio-brand);\n  font-size: 1.25rem;\n  font-weight: 900;\n}\n.estado-estudio {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.42rem 0.55rem;\n  background: rgba(244, 239, 221, 0.72);\n  border: 1px solid rgba(21, 23, 20, 0.22);\n  font-size: 0.46rem;\n  font-weight: 850;\n  letter-spacing: 0.1em;\n}\n.estado-estudio i {\n  width: 0.45rem;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background: var(--studio-brand);\n  animation: pulso-ponto 2.4s ease-in-out infinite;\n}\n@keyframes pulso-ponto {\n  0%, 100% {\n    box-shadow: 0 0 0 0 color-mix(in srgb, var(--studio-brand) 40%, transparent);\n  }\n  50% {\n    box-shadow: 0 0 0 0.35rem transparent;\n  }\n}\n.conteudo-cartao {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  z-index: 1;\n  min-height: 0;\n  overflow: hidden;\n  padding: 1rem 1.15rem;\n}\n.conteudo-cartao h3 {\n  display: -webkit-box;\n  height: 1.8em;\n  overflow: hidden;\n  margin: 0;\n  max-width: none;\n  font-size: clamp(1.4rem, 1.8vw, 1.9rem);\n  line-height: 0.9;\n  letter-spacing: -0.045em;\n  hyphens: none;\n  overflow-wrap: normal;\n  text-wrap: pretty;\n  white-space: normal;\n  word-break: normal;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.local-estudio {\n  position: static;\n  margin: 0 0 0.7rem;\n  overflow: hidden;\n  color: var(--studio-brand);\n  font-size: 0.52rem;\n  font-weight: 850;\n  letter-spacing: 0.11em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.bio-estudio {\n  display: -webkit-box;\n  margin: 1rem 0 0;\n  overflow: hidden;\n  color: #545950;\n  font-size: 0.84rem;\n  line-height: 1.6;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.servicos-estudio {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.45rem;\n  margin: 0.9rem 0 0;\n  padding: 0;\n  list-style: none;\n}\n.servicos-estudio li {\n  padding: 0.38rem 0.55rem;\n  border: 1px solid rgba(21, 23, 20, 0.2);\n  background: rgba(244, 239, 221, 0.78);\n  color: #454941;\n  font-size: 0.5rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  line-height: 1;\n  text-transform: uppercase;\n}\n.estado-casa,\n.resultado-vazio-busca {\n  display: grid;\n  place-items: center;\n  align-content: center;\n  gap: 0.65rem;\n  text-align: center;\n}\n.estado-casa strong,\n.estado-casa p,\n.resultado-vazio-busca strong,\n.resultado-vazio-busca p {\n  margin: 0;\n}\n.estado-casa p,\n.resultado-vazio-busca p {\n  color: #62675f;\n  font-size: 0.78rem;\n}\n.estado-casa button,\n.resultado-vazio-busca button {\n  min-height: 2.7rem;\n  margin-top: 0.5rem;\n  padding: 0.65rem 1rem;\n  border: 0;\n  background: #151714;\n  color: #f4efdd;\n  font: inherit;\n  font-size: 0.66rem;\n  font-weight: 850;\n  cursor: pointer;\n  transition: background-color 180ms ease, transform 180ms ease;\n}\n.estado-casa button:hover,\n.resultado-vazio-busca button:hover {\n  background: #2c302c;\n  transform: translateY(-2px);\n}\n.estado-casa {\n  min-height: 15rem;\n  padding: 2rem;\n  border: 1px solid #151714;\n}\n.resultado-vazio-busca {\n  min-height: 20rem;\n  border-top: 1px solid #151714;\n}\n.carregador {\n  width: 1.5rem;\n  aspect-ratio: 1;\n  border: 2px solid rgba(21, 23, 20, 0.18);\n  border-top-color: #151714;\n  border-radius: 50%;\n  animation: girar 700ms linear infinite;\n}\n@keyframes girar {\n  to {\n    rotate: 1turn;\n  }\n}\n@media (min-width: 48rem) {\n  .cartao-trabalho:nth-child(even):not(.sem-capa)::before {\n    right: 0.85rem;\n    left: auto;\n  }\n  .cartao-trabalho:nth-child(even):not(.sem-capa) .capa-trabalho {\n    grid-column: 2;\n    grid-row: 1;\n    border-right: 0;\n    border-left: 1px solid #151714;\n  }\n  .cartao-trabalho:nth-child(even):not(.sem-capa) .conteudo-trabalho {\n    grid-column: 1;\n    grid-row: 1;\n  }\n}\n@media (max-width: 58rem) {\n  .texto {\n    grid-template-columns: 1fr;\n  }\n  .texto h1,\n  .texto .descricao,\n  .texto .acoes {\n    grid-column: 1;\n  }\n  .texto h1 {\n    grid-row: auto;\n  }\n  .texto .descricao {\n    margin: 2rem 0 0;\n  }\n  .texto .acoes {\n    margin-top: 2rem;\n  }\n}\n@media (max-width: 38rem) {\n  .casa {\n    padding-inline: 1rem;\n  }\n  .marca-fleiva strong {\n    display: none;\n  }\n  .apresentacao {\n    padding: 4rem 0;\n  }\n  .texto h1 {\n    font-size: clamp(3rem, 15vw, 5rem);\n  }\n  .acoes {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .acoes a {\n    width: 100%;\n    text-align: center;\n  }\n  .busca-casa {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .busca-casa button {\n    align-self: flex-start;\n  }\n  .rodape span:nth-child(2) {\n    display: none;\n  }\n  .cabecalho-descoberta {\n    align-items: start;\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .trabalhos-da-casa::before,\n  .descoberta::before {\n    width: 30rem;\n    opacity: 0.1;\n  }\n  .trabalhos-da-casa::before {\n    right: -13rem;\n    bottom: -9rem;\n  }\n  .descoberta::before {\n    top: 42%;\n    left: -13rem;\n  }\n  .cartao-trabalho {\n    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  }\n  .cartao-trabalho.sem-capa {\n    grid-template-columns: 1fr;\n  }\n  .capa-trabalho {\n    min-height: 0;\n    padding: 0;\n    border-right: 1px solid #151714;\n    border-bottom: 0;\n  }\n  .conteudo-trabalho {\n    --espaco-conteudo: 1rem;\n  }\n  .conteudo-trabalho > div {\n    padding: 0.85rem;\n  }\n  .conteudo-trabalho h3 {\n    font-size: clamp(1.25rem, 6vw, 1.8rem);\n    -webkit-line-clamp: 2;\n  }\n  .conteudo-trabalho footer {\n    min-height: 2.8rem;\n    padding: 0.55rem 0.7rem;\n    font-size: 0.43rem;\n  }\n  .conteudo-trabalho footer span:first-child {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .tipo-trabalho {\n    display: none;\n  }\n  .projeto-trabalho {\n    margin-top: 0.6rem;\n    font-size: 0.55rem;\n  }\n  .descricao-trabalho {\n    display: none;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .botao-explorar,\n  .link-institucional,\n  .busca-casa button,\n  .estado-casa button,\n  .resultado-vazio-busca button,\n  .cartao-trabalho,\n  .cartao-estudio,\n  .capa-trabalho img,\n  .avatar-estudio img {\n    transition: none;\n    animation: none;\n  }\n  .cartao-trabalho:hover,\n  .cartao-estudio:hover,\n  .botao-explorar:hover,\n  .estado-casa button:hover,\n  .resultado-vazio-busca button:hover {\n    transform: none;\n    box-shadow: none;\n    translate: none;\n  }\n  .estado-estudio i {\n    animation: none;\n  }\n}\n.fleiva-wordmark {\n  --fleiva-mascara: var(--mascara-wordmark);\n  width: clamp(8.75rem, 13vw, 11.5rem);\n  aspect-ratio: 1256/596;\n  animation: entrada-logo 700ms cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Casa, { className: "Casa", filePath: "apps/studio-dash/src/app/paginas/casa/casa.ts", lineNumber: 25 });
})();
export {
  Casa
};
