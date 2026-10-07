import {
  Component,
  DadosCasa,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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

// apps/studio-dash/src/app/paginas/sala/sala.ts
var _forTrack0 = ($index, $item) => $item.album_id;
var _forTrack1 = ($index, $item) => $item.id;
function Sala_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Abrindo a Casa... ");
  }
}
function Sala_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Abrir uma porta ");
    \u0275\u0275domElementStart(1, "span", 22);
    \u0275\u0275text(2, "\u2192");
    \u0275\u0275domElementEnd();
  }
}
function Sala_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "section", 19)(1, "strong");
    \u0275\u0275text(2, "N\xE3o foi poss\xEDvel abrir a Sala.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 23);
    \u0275\u0275domListener("click", function Sala_Conditional_36_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dadosCasa.listar());
    });
    \u0275\u0275text(6, " Tentar novamente ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.dadosCasa.erro());
  }
}
function Sala_Conditional_37_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " trabalho ");
  }
}
function Sala_Conditional_37_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " trabalhos ");
  }
}
function Sala_Conditional_37_Conditional_0_For_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 36);
  }
  if (rf & 2) {
    const trabalho_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275domProperty("src", trabalho_r3.capa_url, \u0275\u0275sanitizeUrl)("alt", "Capa de " + trabalho_r3.album_nome);
  }
}
function Sala_Conditional_37_Conditional_0_For_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const trabalho_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", trabalho_r3.album_nome.charAt(0), " ");
  }
}
function Sala_Conditional_37_Conditional_0_For_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const trabalho_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(trabalho_r3.album_tipo);
  }
}
function Sala_Conditional_37_Conditional_0_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "a", 35)(1, "figure");
    \u0275\u0275conditionalCreate(2, Sala_Conditional_37_Conditional_0_For_15_Conditional_2_Template, 1, 2, "img", 36)(3, Sala_Conditional_37_Conditional_0_For_15_Conditional_3_Template, 2, 1, "span", 22);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 37);
    \u0275\u0275conditionalCreate(5, Sala_Conditional_37_Conditional_0_For_15_Conditional_5_Template, 2, 1, "p");
    \u0275\u0275domElementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "footer")(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "span", 22);
    \u0275\u0275text(14, "\u2197");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const trabalho_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("--cor-card", ctx_r1.corTrabalho(trabalho_r3));
    \u0275\u0275domProperty("href", ctx_r1.urlTrabalho(trabalho_r3), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(trabalho_r3.capa_url ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(trabalho_r3.album_tipo ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(trabalho_r3.album_nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(trabalho_r3.projeto_nome);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(trabalho_r3.estudio_nome);
  }
}
function Sala_Conditional_37_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 24);
    \u0275\u0275domElement(1, "img", 30)(2, "img", 31);
    \u0275\u0275domElementStart(3, "header", 26)(4, "div")(5, "p");
    \u0275\u0275text(6, "ESCOLHIDOS POR QUEM FEZ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "h2", 32);
    \u0275\u0275text(8, " Trabalhos da Casa ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275conditionalCreate(11, Sala_Conditional_37_Conditional_0_Conditional_11_Template, 1, 0)(12, Sala_Conditional_37_Conditional_0_Conditional_12_Template, 1, 0);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "div", 33);
    \u0275\u0275repeaterCreate(14, Sala_Conditional_37_Conditional_0_For_15_Template, 15, 8, "a", 34, _forTrack0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", ctx_r1.dadosCasa.trabalhos().length, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dadosCasa.trabalhos().length === 1 ? 11 : 12);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.dadosCasa.trabalhos());
  }
}
function Sala_Conditional_37_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Card ");
  }
}
function Sala_Conditional_37_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Cards ");
  }
}
function Sala_Conditional_37_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, Sala_Conditional_37_Conditional_8_Conditional_2_Template, 1, 0)(3, Sala_Conditional_37_Conditional_8_Conditional_3_Template, 1, 0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.dadosCasa.estudios().length, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dadosCasa.estudios().length === 1 ? 2 : 3);
  }
}
function Sala_Conditional_37_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 28);
    \u0275\u0275domElement(1, "span", 38);
    \u0275\u0275domElementStart(2, "p");
    \u0275\u0275text(3, "Procurando quem est\xE1 em casa...");
    \u0275\u0275domElementEnd()();
  }
}
function Sala_Conditional_37_Conditional_10_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 36);
  }
  if (rf & 2) {
    const estudio_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275domProperty("src", estudio_r4.logo_url, \u0275\u0275sanitizeUrl)("alt", "Logo de " + estudio_r4.nome);
  }
}
function Sala_Conditional_37_Conditional_10_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const estudio_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.inicialEstudio(estudio_r4.nome), " ");
  }
}
function Sala_Conditional_37_Conditional_10_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const estudio_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(estudio_r4.cidade);
  }
}
function Sala_Conditional_37_Conditional_10_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const estudio_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", estudio_r4.descricao_publica, " ");
  }
}
function Sala_Conditional_37_Conditional_10_For_2_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const servico_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(servico_r5);
  }
}
function Sala_Conditional_37_Conditional_10_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ul");
    \u0275\u0275repeaterCreate(1, Sala_Conditional_37_Conditional_10_For_2_Conditional_13_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const estudio_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(estudio_r4.servicos.slice(0, 3));
  }
}
function Sala_Conditional_37_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "a", 40)(1, "header")(2, "div", 41);
    \u0275\u0275conditionalCreate(3, Sala_Conditional_37_Conditional_10_For_2_Conditional_3_Template, 1, 2, "img", 36)(4, Sala_Conditional_37_Conditional_10_For_2_Conditional_4_Template, 2, 1, "span");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 42);
    \u0275\u0275domElement(6, "i", 22);
    \u0275\u0275text(7, " PORTA ABERTA ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "div", 43);
    \u0275\u0275conditionalCreate(9, Sala_Conditional_37_Conditional_10_For_2_Conditional_9_Template, 2, 1, "p");
    \u0275\u0275domElementStart(10, "h3");
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(12, Sala_Conditional_37_Conditional_10_For_2_Conditional_12_Template, 2, 1, "span", 44);
    \u0275\u0275conditionalCreate(13, Sala_Conditional_37_Conditional_10_For_2_Conditional_13_Template, 3, 0, "ul");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "footer")(15, "span");
    \u0275\u0275text(16, "Abrir Card");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "span", 22);
    \u0275\u0275text(18, "\u2192");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const estudio_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("--cor-card", ctx_r1.corEstudio(estudio_r4));
    \u0275\u0275domProperty("href", ctx_r1.urlCard(estudio_r4.slug), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(estudio_r4.logo_url ? 3 : 4);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(estudio_r4.cidade ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(estudio_r4.nome);
    \u0275\u0275advance();
    \u0275\u0275conditional(estudio_r4.descricao_publica ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(estudio_r4.servicos.length > 0 ? 13 : -1);
  }
}
function Sala_Conditional_37_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, Sala_Conditional_37_Conditional_10_For_2_Template, 19, 8, "a", 39, _forTrack1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.dadosCasa.estudios());
  }
}
function Sala_Conditional_37_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 28)(1, "strong");
    \u0275\u0275text(2, "A Sala est\xE1 abrindo as portas.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "Os Cards publicados aparecer\xE3o aqui.");
    \u0275\u0275domElementEnd()();
  }
}
function Sala_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Sala_Conditional_37_Conditional_0_Template, 16, 2, "section", 24);
    \u0275\u0275domElementStart(1, "section", 25)(2, "header", 26)(3, "div")(4, "p");
    \u0275\u0275text(5, "QUEM FAZ ACONTECER");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "h2", 27);
    \u0275\u0275text(7, "Cards na Sala");
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(8, Sala_Conditional_37_Conditional_8_Template, 4, 2, "span");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(9, Sala_Conditional_37_Conditional_9_Template, 4, 0, "div", 28)(10, Sala_Conditional_37_Conditional_10_Template, 3, 0, "div", 29)(11, Sala_Conditional_37_Conditional_11_Template, 5, 0, "div", 28);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r1.dadosCasa.carregando() && ctx_r1.dadosCasa.trabalhos().length > 0 ? 0 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!ctx_r1.dadosCasa.carregando() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dadosCasa.carregando() ? 9 : ctx_r1.dadosCasa.estudios().length > 0 ? 10 : 11);
  }
}
var Sala = class _Sala {
  dadosCasa = inject(DadosCasa);
  anoAtual = (/* @__PURE__ */ new Date()).getFullYear();
  origemCards = "https://card.fleiva.com.br";
  chaveUltimaPorta = "casa-fleiva:ultima-porta";
  ngOnInit() {
    void this.dadosCasa.listar();
  }
  abrirPorta() {
    if (typeof window === "undefined") {
      return;
    }
    const estudios = this.dadosCasa.estudios();
    if (estudios.length === 0) {
      document.getElementById("cards-da-casa")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    const ultimaPortaId = this.obterUltimaPortaId();
    const disponiveis = estudios.length > 1 ? estudios.filter((estudio) => estudio.id !== ultimaPortaId) : estudios;
    const escolhido = disponiveis[Math.floor(Math.random() * disponiveis.length)];
    if (!escolhido) {
      return;
    }
    this.salvarUltimaPortaId(escolhido.id);
    window.location.assign(this.urlCard(escolhido.slug));
  }
  urlCard(slug) {
    return `${this.origemCards}/${encodeURIComponent(slug)}`;
  }
  urlTrabalho(trabalho) {
    return `${this.origemCards}/estudio/${encodeURIComponent(trabalho.estudio_slug)}/trabalho/${encodeURIComponent(trabalho.album_id)}`;
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
    return cor && /^#[0-9a-fA-F]{6}$/.test(cor) ? cor : "#2f675f";
  }
  obterUltimaPortaId() {
    try {
      return window.sessionStorage.getItem(this.chaveUltimaPorta);
    } catch {
      return null;
    }
  }
  salvarUltimaPortaId(estudioId) {
    try {
      window.sessionStorage.setItem(this.chaveUltimaPorta, estudioId);
    } catch {
      return;
    }
  }
  static \u0275fac = function Sala_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Sala)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Sala, selectors: [["app-sala"]], decls: 44, vars: 4, consts: [[1, "sala"], [1, "cabecalho"], ["href", "https://fleiva.com.br", "aria-label", "Fl\xEAiva Studios", 1, "marca-fleiva"], ["aria-label", "Navega\xE7\xE3o da Sala"], ["href", "#trabalhos-da-casa"], ["href", "#cards-da-casa"], ["href", "https://fleiva.com.br"], ["aria-labelledby", "titulo-sala", 1, "entrada"], ["aria-hidden", "true", 1, "parede"], [1, "quadro"], ["src", "/fleiva-desenhos/rosacea.webp", "alt", ""], [1, "rodape-parede"], [1, "chamada"], [1, "sobretitulo"], ["id", "titulo-sala"], [1, "descricao"], [1, "acoes"], ["type", "button", 3, "click", "disabled"], ["aria-hidden", "true", 1, "endereco"], ["role", "alert", 1, "estado", "estado-erro"], [1, "rodape"], ["src", "/fleiva-desenhos/rosacea.webp", "alt", "", "aria-hidden", "true"], ["aria-hidden", "true"], ["type", "button", 3, "click"], ["id", "trabalhos-da-casa", "aria-labelledby", "titulo-trabalhos", 1, "secao", "trabalhos"], ["id", "cards-da-casa", "aria-labelledby", "titulo-cards", 1, "secao", "cards"], [1, "titulo-secao"], ["id", "titulo-cards"], [1, "estado"], [1, "grade-cards"], ["src", "/fleiva-desenhos/ramo-esquerdo.webp", "alt", "", "aria-hidden", "true", 1, "ramo", "ramo-esquerdo"], ["src", "/fleiva-desenhos/ramo-direito.webp", "alt", "", "aria-hidden", "true", 1, "ramo", "ramo-direito"], ["id", "titulo-trabalhos"], [1, "grade-trabalhos"], [1, "cartao-trabalho", 3, "href", "--cor-card"], [1, "cartao-trabalho", 3, "href"], [3, "src", "alt"], [1, "dados-trabalho"], ["aria-hidden", "true", 1, "carregador"], [1, "cartao-estudio", 3, "href", "--cor-card"], [1, "cartao-estudio", 3, "href"], [1, "avatar"], [1, "aberto"], [1, "dados-estudio"], [1, "bio"]], template: function Sala_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "main", 0)(1, "header", 1)(2, "a", 2)(3, "span");
      \u0275\u0275text(4, "FL\xCAIVA");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "strong");
      \u0275\u0275text(6, "SALA");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "nav", 3)(8, "a", 4);
      \u0275\u0275text(9, "Trabalhos");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "a", 5);
      \u0275\u0275text(11, "Cards");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "a", 6);
      \u0275\u0275text(13, "Sobre a Fl\xEAiva \u2197");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(14, "section", 7)(15, "div", 8)(16, "div", 9);
      \u0275\u0275domElement(17, "img", 10);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(18, "span", 11);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "div", 12)(20, "p", 13);
      \u0275\u0275text(21, "CASA FL\xCAIVA \xB7 PORTA ABERTA");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "h1", 14);
      \u0275\u0275text(23, " A m\xFAsica independente ");
      \u0275\u0275domElementStart(24, "strong");
      \u0275\u0275text(25, "mora aqui.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(26, "p", 15);
      \u0275\u0275text(27, " Entre, conhe\xE7a os trabalhos e abra os Cards de quem grava, produz e movimenta a m\xFAsica independente. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "div", 16)(29, "button", 17);
      \u0275\u0275domListener("click", function Sala_Template_button_click_29_listener() {
        return ctx.abrirPorta();
      });
      \u0275\u0275conditionalCreate(30, Sala_Conditional_30_Template, 1, 0)(31, Sala_Conditional_31_Template, 3, 0);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(32, "a", 5);
      \u0275\u0275text(33, "Ver todos os Cards");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(34, "p", 18);
      \u0275\u0275text(35, " CASA.FLEIVA.COM.BR ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(36, Sala_Conditional_36_Template, 7, 1, "section", 19)(37, Sala_Conditional_37_Template, 12, 3);
      \u0275\u0275domElementStart(38, "footer", 20)(39, "span");
      \u0275\u0275text(40, "CASA FL\xCAIVA");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(41, "img", 21);
      \u0275\u0275domElementStart(42, "span");
      \u0275\u0275text(43);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(29);
      \u0275\u0275domProperty("disabled", ctx.dadosCasa.carregando());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dadosCasa.carregando() ? 30 : 31);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.dadosCasa.erro() ? 36 : 37);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("BRASIL \xB7 ", ctx.anoAtual);
    }
  }, styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100dvh;\n}\n.sala[_ngcontent-%COMP%] {\n  --preto: #171914;\n  --papel: #f3ecd8;\n  --papel-escuro: #e3d8bd;\n  --azul: #2f675f;\n  --rosa: #b55a72;\n  --amarelo: #d7a62d;\n  min-height: 100dvh;\n  overflow: clip;\n  background: var(--papel);\n  color: var(--preto);\n}\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.cabecalho[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  display: flex;\n  min-height: 5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  padding: 0 clamp(1rem, 4vw, 4rem);\n  border-bottom: 1px solid var(--preto);\n  background: var(--papel);\n}\n.cabecalho[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: clamp(1rem, 3vw, 2.5rem);\n}\n.cabecalho[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.3rem 0;\n  border-bottom: 1px solid transparent;\n  font-size: 0.62rem;\n  font-weight: 850;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.cabecalho[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.cabecalho[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible {\n  border-bottom-color: currentColor;\n  outline: none;\n}\n.marca-fleiva[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n}\n.marca-fleiva[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  width: 7.5rem;\n  height: 2rem;\n  background: currentColor;\n  mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) left center/contain no-repeat;\n  -webkit-mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) left center/contain no-repeat;\n}\n.marca-fleiva[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  padding-left: 0.7rem;\n  border-left: 1px solid currentColor;\n  font-size: 0.55rem;\n  letter-spacing: 0.16em;\n}\n.entrada[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-height: calc(100dvh - 5rem);\n  grid-template-columns: minmax(0, 1fr) minmax(22rem, 0.8fr);\n  border-bottom: 1px solid var(--preto);\n  isolation: isolate;\n}\n.parede[_ngcontent-%COMP%] {\n  position: relative;\n  grid-column: 2;\n  grid-row: 1;\n  min-height: 38rem;\n  overflow: hidden;\n  border-left: 1px solid var(--preto);\n  background: linear-gradient(rgba(47, 103, 95, 0.05), rgba(47, 103, 95, 0.05)), url(/fleiva-casa/papel-parede-aves.webp) center/clamp(25rem, 38vw, 38rem) repeat;\n}\n.parede[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 16%;\n  border-top: 1px solid var(--preto);\n  background:\n    repeating-linear-gradient(\n      90deg,\n      rgba(23, 25, 20, 0.07) 0 1px,\n      transparent 1px 3.6rem),\n    var(--papel-escuro);\n  content: "";\n}\n.quadro[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  display: grid;\n  width: min(19rem, 55%);\n  aspect-ratio: 4/5;\n  padding: 1.2rem;\n  place-items: center;\n  border: 0.5rem solid var(--preto);\n  outline: 1px solid var(--papel);\n  background: var(--papel);\n  box-shadow: 1rem 1rem 0 rgba(23, 25, 20, 0.18);\n  translate: -50% -58%;\n}\n.quadro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.chamada[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  max-width: 58rem;\n  flex-direction: column;\n  justify-content: center;\n  padding: clamp(5rem, 10vw, 9rem) clamp(1rem, 5vw, 5rem);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(181, 90, 114, 0.1),\n      transparent 42%),\n    var(--papel);\n}\n.sobretitulo[_ngcontent-%COMP%], \n.titulo-secao[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  color: var(--rosa);\n  font-size: 0.56rem;\n  font-weight: 900;\n  letter-spacing: 0.16em;\n}\n.chamada[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 9ch;\n  margin: 0;\n  font-size: clamp(3.8rem, 7.2vw, 8rem);\n  line-height: 0.83;\n  letter-spacing: -0.075em;\n}\n.chamada[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--azul);\n  font: inherit;\n}\n.descricao[_ngcontent-%COMP%] {\n  max-width: 36rem;\n  margin: 2.25rem 0 0;\n  color: #4e5148;\n  font-size: clamp(1rem, 1.5vw, 1.18rem);\n  line-height: 1.65;\n}\n.acoes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n}\n.acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 3.25rem;\n  align-items: center;\n  gap: 1.4rem;\n  padding: 0.75rem 1.1rem;\n  border: 1px solid var(--preto);\n  background: var(--preto);\n  color: var(--papel);\n  font: inherit;\n  font-size: 0.68rem;\n  font-weight: 900;\n  letter-spacing: 0.04em;\n  cursor: pointer;\n}\n.acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled), \n.acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible:not(:disabled) {\n  box-shadow: 0.4rem 0.4rem 0 var(--rosa);\n  outline: none;\n  translate: -0.2rem -0.2rem;\n}\n.acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.65;\n}\n.acoes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-bottom: 0.25rem;\n  border-bottom: 1px solid currentColor;\n  font-size: 0.66rem;\n  font-weight: 850;\n}\n.endereco[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  bottom: 1.1rem;\n  left: clamp(1rem, 5vw, 5rem);\n  margin: 0;\n  color: #676a61;\n  font-size: 0.48rem;\n  font-weight: 900;\n  letter-spacing: 0.15em;\n}\n.secao[_ngcontent-%COMP%] {\n  position: relative;\n  padding: clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 4rem);\n  border-bottom: 1px solid var(--preto);\n  isolation: isolate;\n}\n.titulo-secao[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: clamp(2.5rem, 5vw, 4.5rem);\n}\n.titulo-secao[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 10ch;\n  margin: 0;\n  font-size: clamp(2.8rem, 6vw, 6.5rem);\n  line-height: 0.86;\n  letter-spacing: -0.065em;\n}\n.titulo-secao[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding-bottom: 0.5rem;\n  color: #676a61;\n  font-size: 0.55rem;\n  font-weight: 900;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.trabalhos[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background:\n    repeating-linear-gradient(\n      0deg,\n      transparent 0 2.1rem,\n      rgba(23, 25, 20, 0.03) 2.1rem calc(2.1rem + 1px)),\n    #e9dfc8;\n}\n.ramo[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  top: 2rem;\n  height: min(88%, 76rem);\n  opacity: 0.28;\n  pointer-events: none;\n}\n.ramo-esquerdo[_ngcontent-%COMP%] {\n  left: -1.5rem;\n}\n.ramo-direito[_ngcontent-%COMP%] {\n  right: -1.5rem;\n}\n.grade-trabalhos[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(min(100%, 27rem), 1fr));\n  gap: clamp(1.25rem, 3vw, 2.5rem);\n  padding-inline: clamp(0rem, 4vw, 4rem);\n}\n.cartao-trabalho[_ngcontent-%COMP%] {\n  --cor-card: var(--azul);\n  display: grid;\n  min-height: 20rem;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  overflow: hidden;\n  border: 1px solid var(--preto);\n  background: var(--papel);\n  transition: translate 180ms ease, box-shadow 180ms ease;\n}\n.cartao-trabalho[_ngcontent-%COMP%]:hover, \n.cartao-trabalho[_ngcontent-%COMP%]:focus-visible {\n  box-shadow: 0.6rem 0.6rem 0 var(--cor-card);\n  outline: none;\n  translate: -0.3rem -0.3rem;\n}\n.cartao-trabalho[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  margin: 0;\n  place-items: center;\n  border-right: 1px solid var(--preto);\n  background: color-mix(in srgb, var(--cor-card) 18%, var(--papel));\n}\n.cartao-trabalho[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.cartao-trabalho[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--cor-card);\n  font-size: 6rem;\n  font-weight: 950;\n}\n.dados-trabalho[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  padding: 1.5rem;\n}\n.dados-trabalho[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  color: var(--cor-card);\n  font-size: 0.53rem;\n  font-weight: 900;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.dados-trabalho[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(1.8rem, 3vw, 3rem);\n  line-height: 0.9;\n  letter-spacing: -0.055em;\n}\n.dados-trabalho[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  margin-top: 0.9rem;\n  color: #55594f;\n  font-size: 0.64rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.dados-trabalho[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: auto;\n  padding-top: 2rem;\n  color: var(--cor-card);\n  font-size: 0.58rem;\n  font-weight: 900;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.cards[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      140deg,\n      rgba(47, 103, 95, 0.07),\n      transparent 45%),\n    var(--papel);\n}\n.grade-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(min(100%, 17rem), 1fr));\n  gap: clamp(1.2rem, 2.5vw, 2rem);\n}\n.cartao-estudio[_ngcontent-%COMP%] {\n  --cor-card: var(--azul);\n  display: grid;\n  min-height: 26rem;\n  grid-template-rows: auto minmax(0, 1fr) auto;\n  overflow: hidden;\n  border: 1px solid var(--preto);\n  background:\n    linear-gradient(\n      155deg,\n      color-mix(in srgb, var(--cor-card) 14%, transparent),\n      transparent 48%),\n    #eee5cf;\n  transition: translate 180ms ease, box-shadow 180ms ease;\n}\n.cartao-estudio[_ngcontent-%COMP%]:hover, \n.cartao-estudio[_ngcontent-%COMP%]:focus-visible {\n  box-shadow: 0.55rem 0.55rem 0 var(--cor-card);\n  outline: none;\n  translate: -0.25rem -0.25rem;\n}\n.cartao-estudio[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%], \n.cartao-estudio[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem 1.15rem;\n}\n.cartao-estudio[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  border-top: 0.35rem solid var(--cor-card);\n  border-bottom: 1px solid var(--preto);\n}\n.cartao-estudio[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--preto);\n  background: var(--preto);\n  color: var(--papel);\n  font-size: 0.57rem;\n  font-weight: 900;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: grid;\n  width: 4rem;\n  aspect-ratio: 1;\n  overflow: hidden;\n  place-items: center;\n  border: 1px solid var(--preto);\n  background: var(--papel);\n  box-shadow: 0.25rem 0.25rem 0 var(--cor-card);\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0.3rem;\n  object-fit: contain;\n}\n.avatar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  place-items: center;\n  background: var(--cor-card);\n  color: #fff;\n  font-size: 1.3rem;\n  font-weight: 950;\n}\n.aberto[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  font-size: 0.46rem;\n  font-weight: 900;\n  letter-spacing: 0.1em;\n}\n.aberto[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 0.48rem;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background: var(--cor-card);\n}\n.dados-estudio[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 0;\n  flex-direction: column;\n  padding: 1.25rem;\n}\n.dados-estudio[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  color: var(--cor-card);\n  font-size: 0.52rem;\n  font-weight: 900;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.dados-estudio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(1.65rem, 2.5vw, 2.25rem);\n  line-height: 0.88;\n  letter-spacing: -0.055em;\n}\n.dados-estudio[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  margin-top: 1rem;\n  overflow: hidden;\n  color: #55594f;\n  font-size: 0.8rem;\n  line-height: 1.55;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n.dados-estudio[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin: auto 0 0;\n  padding: 1.2rem 0 0;\n  list-style: none;\n}\n.dados-estudio[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.38rem 0.5rem;\n  border: 1px solid rgba(23, 25, 20, 0.24);\n  background: rgba(243, 236, 216, 0.7);\n  font-size: 0.47rem;\n  font-weight: 850;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.estado[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 18rem;\n  place-items: center;\n  align-content: center;\n  gap: 0.7rem;\n  padding: 2rem;\n  border-bottom: 1px solid var(--preto);\n  text-align: center;\n}\n.estado[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.estado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.estado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #62665c;\n  font-size: 0.78rem;\n}\n.estado[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  padding: 0.75rem 1rem;\n  border: 0;\n  background: var(--preto);\n  color: var(--papel);\n  font: inherit;\n  font-size: 0.65rem;\n  font-weight: 850;\n  cursor: pointer;\n}\n.estado-erro[_ngcontent-%COMP%] {\n  background: rgba(181, 90, 114, 0.1);\n}\n.carregador[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  aspect-ratio: 1;\n  border: 2px solid rgba(23, 25, 20, 0.18);\n  border-top-color: var(--preto);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_girar 700ms linear infinite;\n}\n.rodape[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  padding: 0 clamp(1rem, 4vw, 4rem);\n  background: var(--preto);\n  color: var(--papel);\n  font-size: 0.5rem;\n  font-weight: 900;\n  letter-spacing: 0.12em;\n}\n.rodape[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  object-fit: contain;\n  filter: brightness(0) invert(1);\n}\n@keyframes _ngcontent-%COMP%_girar {\n  to {\n    rotate: 1turn;\n  }\n}\n@media (max-width: 58rem) {\n  .entrada[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .parede[_ngcontent-%COMP%] {\n    grid-column: 1;\n    grid-row: 1;\n    min-height: 28rem;\n    border-left: 0;\n    border-bottom: 1px solid var(--preto);\n  }\n  .chamada[_ngcontent-%COMP%] {\n    grid-column: 1;\n    grid-row: 2;\n  }\n  .endereco[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 42rem) {\n  .cabecalho[_ngcontent-%COMP%] {\n    min-height: 4.5rem;\n  }\n  .cabecalho[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:last-child) {\n    display: none;\n  }\n  .entrada[_ngcontent-%COMP%] {\n    min-height: auto;\n  }\n  .parede[_ngcontent-%COMP%] {\n    min-height: 22rem;\n  }\n  .quadro[_ngcontent-%COMP%] {\n    width: 11rem;\n    box-shadow: 0.65rem 0.65rem 0 rgba(23, 25, 20, 0.18);\n  }\n  .chamada[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(3.5rem, 17vw, 5rem);\n  }\n  .titulo-secao[_ngcontent-%COMP%] {\n    align-items: start;\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .cartao-trabalho[_ngcontent-%COMP%] {\n    min-height: 0;\n    grid-template-columns: 1fr;\n  }\n  .cartao-trabalho[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n    aspect-ratio: 1;\n    border-right: 0;\n    border-bottom: 1px solid var(--preto);\n  }\n  .cartao-trabalho[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    object-fit: contain;\n  }\n  .ramo[_ngcontent-%COMP%] {\n    opacity: 0.16;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%], \n   *[_ngcontent-%COMP%]::before, \n   *[_ngcontent-%COMP%]::after {\n    scroll-behavior: auto !important;\n    transition: none !important;\n    animation-duration: 1ms !important;\n    animation-iteration-count: 1 !important;\n  }\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Sala, [{
    type: Component,
    args: [{ selector: "app-sala", standalone: true, template: `<main class="sala">
  <header class="cabecalho">
    <a
      class="marca-fleiva"
      href="https://fleiva.com.br"
      aria-label="Fl\xEAiva Studios"
    >
      <span>FL\xCAIVA</span>
      <strong>SALA</strong>
    </a>

    <nav aria-label="Navega\xE7\xE3o da Sala">
      <a href="#trabalhos-da-casa">Trabalhos</a>
      <a href="#cards-da-casa">Cards</a>
      <a href="https://fleiva.com.br">Sobre a Fl\xEAiva \u2197</a>
    </nav>
  </header>

  <section class="entrada" aria-labelledby="titulo-sala">
    <div class="parede" aria-hidden="true">
      <div class="quadro">
        <img
          src="/fleiva-desenhos/rosacea.webp"
          alt=""
        />
      </div>
      <span class="rodape-parede"></span>
    </div>

    <div class="chamada">
      <p class="sobretitulo">CASA FL\xCAIVA \xB7 PORTA ABERTA</p>

      <h1 id="titulo-sala">
        A m\xFAsica independente
        <strong>mora aqui.</strong>
      </h1>

      <p class="descricao">
        Entre, conhe\xE7a os trabalhos e abra os Cards de quem
        grava, produz e movimenta a m\xFAsica independente.
      </p>

      <div class="acoes">
        <button
          type="button"
          [disabled]="dadosCasa.carregando()"
          (click)="abrirPorta()"
        >
          @if (dadosCasa.carregando()) {
            Abrindo a Casa...
          } @else {
            Abrir uma porta
            <span aria-hidden="true">\u2192</span>
          }
        </button>

        <a href="#cards-da-casa">Ver todos os Cards</a>
      </div>
    </div>

    <p class="endereco" aria-hidden="true">
      CASA.FLEIVA.COM.BR
    </p>
  </section>

  @if (dadosCasa.erro()) {
    <section class="estado estado-erro" role="alert">
      <strong>N\xE3o foi poss\xEDvel abrir a Sala.</strong>
      <p>{{ dadosCasa.erro() }}</p>
      <button type="button" (click)="dadosCasa.listar()">
        Tentar novamente
      </button>
    </section>
  } @else {
    @if (
      !dadosCasa.carregando() &&
      dadosCasa.trabalhos().length > 0
    ) {
      <section
        id="trabalhos-da-casa"
        class="secao trabalhos"
        aria-labelledby="titulo-trabalhos"
      >
        <img
          class="ramo ramo-esquerdo"
          src="/fleiva-desenhos/ramo-esquerdo.webp"
          alt=""
          aria-hidden="true"
        />
        <img
          class="ramo ramo-direito"
          src="/fleiva-desenhos/ramo-direito.webp"
          alt=""
          aria-hidden="true"
        />

        <header class="titulo-secao">
          <div>
            <p>ESCOLHIDOS POR QUEM FEZ</p>
            <h2 id="titulo-trabalhos">
              Trabalhos da Casa
            </h2>
          </div>
          <span>
            {{ dadosCasa.trabalhos().length }}
            @if (dadosCasa.trabalhos().length === 1) {
              trabalho
            } @else {
              trabalhos
            }
          </span>
        </header>

        <div class="grade-trabalhos">
          @for (
            trabalho of dadosCasa.trabalhos();
            track trabalho.album_id
          ) {
            <a
              class="cartao-trabalho"
              [href]="urlTrabalho(trabalho)"
              [style.--cor-card]="corTrabalho(trabalho)"
            >
              <figure>
                @if (trabalho.capa_url) {
                  <img
                    [src]="trabalho.capa_url"
                    [alt]="'Capa de ' + trabalho.album_nome"
                  />
                } @else {
                  <span aria-hidden="true">
                    {{ trabalho.album_nome.charAt(0) }}
                  </span>
                }
              </figure>

              <div class="dados-trabalho">
                @if (trabalho.album_tipo) {
                  <p>{{ trabalho.album_tipo }}</p>
                }
                <h3>{{ trabalho.album_nome }}</h3>
                <strong>{{ trabalho.projeto_nome }}</strong>
                <footer>
                  <span>{{ trabalho.estudio_nome }}</span>
                  <span aria-hidden="true">\u2197</span>
                </footer>
              </div>
            </a>
          }
        </div>
      </section>
    }

    <section
      id="cards-da-casa"
      class="secao cards"
      aria-labelledby="titulo-cards"
    >
      <header class="titulo-secao">
        <div>
          <p>QUEM FAZ ACONTECER</p>
          <h2 id="titulo-cards">Cards na Sala</h2>
        </div>

        @if (!dadosCasa.carregando()) {
          <span>
            {{ dadosCasa.estudios().length }}
            @if (dadosCasa.estudios().length === 1) {
              Card
            } @else {
              Cards
            }
          </span>
        }
      </header>

      @if (dadosCasa.carregando()) {
        <div class="estado">
          <span class="carregador" aria-hidden="true"></span>
          <p>Procurando quem est\xE1 em casa...</p>
        </div>
      } @else if (dadosCasa.estudios().length > 0) {
        <div class="grade-cards">
          @for (
            estudio of dadosCasa.estudios();
            track estudio.id
          ) {
            <a
              class="cartao-estudio"
              [href]="urlCard(estudio.slug)"
              [style.--cor-card]="corEstudio(estudio)"
            >
              <header>
                <div class="avatar">
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

                <span class="aberto">
                  <i aria-hidden="true"></i>
                  PORTA ABERTA
                </span>
              </header>

              <div class="dados-estudio">
                @if (estudio.cidade) {
                  <p>{{ estudio.cidade }}</p>
                }

                <h3>{{ estudio.nome }}</h3>

                @if (estudio.descricao_publica) {
                  <span class="bio">
                    {{ estudio.descricao_publica }}
                  </span>
                }

                @if (estudio.servicos.length > 0) {
                  <ul>
                    @for (
                      servico of estudio.servicos.slice(0, 3);
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
        <div class="estado">
          <strong>A Sala est\xE1 abrindo as portas.</strong>
          <p>Os Cards publicados aparecer\xE3o aqui.</p>
        </div>
      }
    </section>
  }

  <footer class="rodape">
    <span>CASA FL\xCAIVA</span>
    <img
      src="/fleiva-desenhos/rosacea.webp"
      alt=""
      aria-hidden="true"
    />
    <span>BRASIL \xB7 {{ anoAtual }}</span>
  </footer>
</main>
`, styles: ['/* apps/studio-dash/src/app/paginas/sala/sala.scss */\n:host {\n  display: block;\n  min-height: 100dvh;\n}\n.sala {\n  --preto: #171914;\n  --papel: #f3ecd8;\n  --papel-escuro: #e3d8bd;\n  --azul: #2f675f;\n  --rosa: #b55a72;\n  --amarelo: #d7a62d;\n  min-height: 100dvh;\n  overflow: clip;\n  background: var(--papel);\n  color: var(--preto);\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\n.cabecalho {\n  position: relative;\n  z-index: 10;\n  display: flex;\n  min-height: 5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  padding: 0 clamp(1rem, 4vw, 4rem);\n  border-bottom: 1px solid var(--preto);\n  background: var(--papel);\n}\n.cabecalho nav {\n  display: flex;\n  align-items: center;\n  gap: clamp(1rem, 3vw, 2.5rem);\n}\n.cabecalho nav a {\n  padding: 0.3rem 0;\n  border-bottom: 1px solid transparent;\n  font-size: 0.62rem;\n  font-weight: 850;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.cabecalho nav a:hover,\n.cabecalho nav a:focus-visible {\n  border-bottom-color: currentColor;\n  outline: none;\n}\n.marca-fleiva {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n}\n.marca-fleiva > span {\n  display: block;\n  width: 7.5rem;\n  height: 2rem;\n  background: currentColor;\n  mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) left center/contain no-repeat;\n  -webkit-mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) left center/contain no-repeat;\n}\n.marca-fleiva strong {\n  padding-left: 0.7rem;\n  border-left: 1px solid currentColor;\n  font-size: 0.55rem;\n  letter-spacing: 0.16em;\n}\n.entrada {\n  position: relative;\n  display: grid;\n  min-height: calc(100dvh - 5rem);\n  grid-template-columns: minmax(0, 1fr) minmax(22rem, 0.8fr);\n  border-bottom: 1px solid var(--preto);\n  isolation: isolate;\n}\n.parede {\n  position: relative;\n  grid-column: 2;\n  grid-row: 1;\n  min-height: 38rem;\n  overflow: hidden;\n  border-left: 1px solid var(--preto);\n  background: linear-gradient(rgba(47, 103, 95, 0.05), rgba(47, 103, 95, 0.05)), url(/fleiva-casa/papel-parede-aves.webp) center/clamp(25rem, 38vw, 38rem) repeat;\n}\n.parede::after {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 16%;\n  border-top: 1px solid var(--preto);\n  background:\n    repeating-linear-gradient(\n      90deg,\n      rgba(23, 25, 20, 0.07) 0 1px,\n      transparent 1px 3.6rem),\n    var(--papel-escuro);\n  content: "";\n}\n.quadro {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  display: grid;\n  width: min(19rem, 55%);\n  aspect-ratio: 4/5;\n  padding: 1.2rem;\n  place-items: center;\n  border: 0.5rem solid var(--preto);\n  outline: 1px solid var(--papel);\n  background: var(--papel);\n  box-shadow: 1rem 1rem 0 rgba(23, 25, 20, 0.18);\n  translate: -50% -58%;\n}\n.quadro img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.chamada {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  max-width: 58rem;\n  flex-direction: column;\n  justify-content: center;\n  padding: clamp(5rem, 10vw, 9rem) clamp(1rem, 5vw, 5rem);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(181, 90, 114, 0.1),\n      transparent 42%),\n    var(--papel);\n}\n.sobretitulo,\n.titulo-secao p {\n  margin: 0 0 1rem;\n  color: var(--rosa);\n  font-size: 0.56rem;\n  font-weight: 900;\n  letter-spacing: 0.16em;\n}\n.chamada h1 {\n  max-width: 9ch;\n  margin: 0;\n  font-size: clamp(3.8rem, 7.2vw, 8rem);\n  line-height: 0.83;\n  letter-spacing: -0.075em;\n}\n.chamada h1 strong {\n  display: block;\n  color: var(--azul);\n  font: inherit;\n}\n.descricao {\n  max-width: 36rem;\n  margin: 2.25rem 0 0;\n  color: #4e5148;\n  font-size: clamp(1rem, 1.5vw, 1.18rem);\n  line-height: 1.65;\n}\n.acoes {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n}\n.acoes button {\n  display: inline-flex;\n  min-height: 3.25rem;\n  align-items: center;\n  gap: 1.4rem;\n  padding: 0.75rem 1.1rem;\n  border: 1px solid var(--preto);\n  background: var(--preto);\n  color: var(--papel);\n  font: inherit;\n  font-size: 0.68rem;\n  font-weight: 900;\n  letter-spacing: 0.04em;\n  cursor: pointer;\n}\n.acoes button:hover:not(:disabled),\n.acoes button:focus-visible:not(:disabled) {\n  box-shadow: 0.4rem 0.4rem 0 var(--rosa);\n  outline: none;\n  translate: -0.2rem -0.2rem;\n}\n.acoes button:disabled {\n  cursor: wait;\n  opacity: 0.65;\n}\n.acoes a {\n  padding-bottom: 0.25rem;\n  border-bottom: 1px solid currentColor;\n  font-size: 0.66rem;\n  font-weight: 850;\n}\n.endereco {\n  position: absolute;\n  z-index: 3;\n  bottom: 1.1rem;\n  left: clamp(1rem, 5vw, 5rem);\n  margin: 0;\n  color: #676a61;\n  font-size: 0.48rem;\n  font-weight: 900;\n  letter-spacing: 0.15em;\n}\n.secao {\n  position: relative;\n  padding: clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 4rem);\n  border-bottom: 1px solid var(--preto);\n  isolation: isolate;\n}\n.titulo-secao {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: clamp(2.5rem, 5vw, 4.5rem);\n}\n.titulo-secao h2 {\n  max-width: 10ch;\n  margin: 0;\n  font-size: clamp(2.8rem, 6vw, 6.5rem);\n  line-height: 0.86;\n  letter-spacing: -0.065em;\n}\n.titulo-secao > span {\n  padding-bottom: 0.5rem;\n  color: #676a61;\n  font-size: 0.55rem;\n  font-weight: 900;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.trabalhos {\n  overflow: hidden;\n  background:\n    repeating-linear-gradient(\n      0deg,\n      transparent 0 2.1rem,\n      rgba(23, 25, 20, 0.03) 2.1rem calc(2.1rem + 1px)),\n    #e9dfc8;\n}\n.ramo {\n  position: absolute;\n  z-index: 0;\n  top: 2rem;\n  height: min(88%, 76rem);\n  opacity: 0.28;\n  pointer-events: none;\n}\n.ramo-esquerdo {\n  left: -1.5rem;\n}\n.ramo-direito {\n  right: -1.5rem;\n}\n.grade-trabalhos {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(min(100%, 27rem), 1fr));\n  gap: clamp(1.25rem, 3vw, 2.5rem);\n  padding-inline: clamp(0rem, 4vw, 4rem);\n}\n.cartao-trabalho {\n  --cor-card: var(--azul);\n  display: grid;\n  min-height: 20rem;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  overflow: hidden;\n  border: 1px solid var(--preto);\n  background: var(--papel);\n  transition: translate 180ms ease, box-shadow 180ms ease;\n}\n.cartao-trabalho:hover,\n.cartao-trabalho:focus-visible {\n  box-shadow: 0.6rem 0.6rem 0 var(--cor-card);\n  outline: none;\n  translate: -0.3rem -0.3rem;\n}\n.cartao-trabalho figure {\n  display: grid;\n  min-width: 0;\n  margin: 0;\n  place-items: center;\n  border-right: 1px solid var(--preto);\n  background: color-mix(in srgb, var(--cor-card) 18%, var(--papel));\n}\n.cartao-trabalho figure img {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.cartao-trabalho figure span {\n  color: var(--cor-card);\n  font-size: 6rem;\n  font-weight: 950;\n}\n.dados-trabalho {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  padding: 1.5rem;\n}\n.dados-trabalho > p {\n  margin: 0 0 1rem;\n  color: var(--cor-card);\n  font-size: 0.53rem;\n  font-weight: 900;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.dados-trabalho h3 {\n  margin: 0;\n  font-size: clamp(1.8rem, 3vw, 3rem);\n  line-height: 0.9;\n  letter-spacing: -0.055em;\n}\n.dados-trabalho > strong {\n  margin-top: 0.9rem;\n  color: #55594f;\n  font-size: 0.64rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.dados-trabalho footer {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: auto;\n  padding-top: 2rem;\n  color: var(--cor-card);\n  font-size: 0.58rem;\n  font-weight: 900;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.cards {\n  background:\n    linear-gradient(\n      140deg,\n      rgba(47, 103, 95, 0.07),\n      transparent 45%),\n    var(--papel);\n}\n.grade-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(min(100%, 17rem), 1fr));\n  gap: clamp(1.2rem, 2.5vw, 2rem);\n}\n.cartao-estudio {\n  --cor-card: var(--azul);\n  display: grid;\n  min-height: 26rem;\n  grid-template-rows: auto minmax(0, 1fr) auto;\n  overflow: hidden;\n  border: 1px solid var(--preto);\n  background:\n    linear-gradient(\n      155deg,\n      color-mix(in srgb, var(--cor-card) 14%, transparent),\n      transparent 48%),\n    #eee5cf;\n  transition: translate 180ms ease, box-shadow 180ms ease;\n}\n.cartao-estudio:hover,\n.cartao-estudio:focus-visible {\n  box-shadow: 0.55rem 0.55rem 0 var(--cor-card);\n  outline: none;\n  translate: -0.25rem -0.25rem;\n}\n.cartao-estudio > header,\n.cartao-estudio > footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem 1.15rem;\n}\n.cartao-estudio > header {\n  border-top: 0.35rem solid var(--cor-card);\n  border-bottom: 1px solid var(--preto);\n}\n.cartao-estudio > footer {\n  border-top: 1px solid var(--preto);\n  background: var(--preto);\n  color: var(--papel);\n  font-size: 0.57rem;\n  font-weight: 900;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n}\n.avatar {\n  display: grid;\n  width: 4rem;\n  aspect-ratio: 1;\n  overflow: hidden;\n  place-items: center;\n  border: 1px solid var(--preto);\n  background: var(--papel);\n  box-shadow: 0.25rem 0.25rem 0 var(--cor-card);\n}\n.avatar img {\n  width: 100%;\n  height: 100%;\n  padding: 0.3rem;\n  object-fit: contain;\n}\n.avatar span {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  place-items: center;\n  background: var(--cor-card);\n  color: #fff;\n  font-size: 1.3rem;\n  font-weight: 950;\n}\n.aberto {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  font-size: 0.46rem;\n  font-weight: 900;\n  letter-spacing: 0.1em;\n}\n.aberto i {\n  width: 0.48rem;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background: var(--cor-card);\n}\n.dados-estudio {\n  display: flex;\n  min-height: 0;\n  flex-direction: column;\n  padding: 1.25rem;\n}\n.dados-estudio > p {\n  margin: 0 0 0.75rem;\n  color: var(--cor-card);\n  font-size: 0.52rem;\n  font-weight: 900;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.dados-estudio h3 {\n  margin: 0;\n  font-size: clamp(1.65rem, 2.5vw, 2.25rem);\n  line-height: 0.88;\n  letter-spacing: -0.055em;\n}\n.dados-estudio .bio {\n  display: -webkit-box;\n  margin-top: 1rem;\n  overflow: hidden;\n  color: #55594f;\n  font-size: 0.8rem;\n  line-height: 1.55;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n.dados-estudio ul {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin: auto 0 0;\n  padding: 1.2rem 0 0;\n  list-style: none;\n}\n.dados-estudio li {\n  padding: 0.38rem 0.5rem;\n  border: 1px solid rgba(23, 25, 20, 0.24);\n  background: rgba(243, 236, 216, 0.7);\n  font-size: 0.47rem;\n  font-weight: 850;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.estado {\n  display: grid;\n  min-height: 18rem;\n  place-items: center;\n  align-content: center;\n  gap: 0.7rem;\n  padding: 2rem;\n  border-bottom: 1px solid var(--preto);\n  text-align: center;\n}\n.estado strong,\n.estado p {\n  margin: 0;\n}\n.estado p {\n  color: #62665c;\n  font-size: 0.78rem;\n}\n.estado button {\n  margin-top: 0.5rem;\n  padding: 0.75rem 1rem;\n  border: 0;\n  background: var(--preto);\n  color: var(--papel);\n  font: inherit;\n  font-size: 0.65rem;\n  font-weight: 850;\n  cursor: pointer;\n}\n.estado-erro {\n  background: rgba(181, 90, 114, 0.1);\n}\n.carregador {\n  width: 1.5rem;\n  aspect-ratio: 1;\n  border: 2px solid rgba(23, 25, 20, 0.18);\n  border-top-color: var(--preto);\n  border-radius: 50%;\n  animation: girar 700ms linear infinite;\n}\n.rodape {\n  display: flex;\n  min-height: 5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  padding: 0 clamp(1rem, 4vw, 4rem);\n  background: var(--preto);\n  color: var(--papel);\n  font-size: 0.5rem;\n  font-weight: 900;\n  letter-spacing: 0.12em;\n}\n.rodape img {\n  width: 2.5rem;\n  height: 2.5rem;\n  object-fit: contain;\n  filter: brightness(0) invert(1);\n}\n@keyframes girar {\n  to {\n    rotate: 1turn;\n  }\n}\n@media (max-width: 58rem) {\n  .entrada {\n    grid-template-columns: 1fr;\n  }\n  .parede {\n    grid-column: 1;\n    grid-row: 1;\n    min-height: 28rem;\n    border-left: 0;\n    border-bottom: 1px solid var(--preto);\n  }\n  .chamada {\n    grid-column: 1;\n    grid-row: 2;\n  }\n  .endereco {\n    display: none;\n  }\n}\n@media (max-width: 42rem) {\n  .cabecalho {\n    min-height: 4.5rem;\n  }\n  .cabecalho nav a:not(:last-child) {\n    display: none;\n  }\n  .entrada {\n    min-height: auto;\n  }\n  .parede {\n    min-height: 22rem;\n  }\n  .quadro {\n    width: 11rem;\n    box-shadow: 0.65rem 0.65rem 0 rgba(23, 25, 20, 0.18);\n  }\n  .chamada h1 {\n    font-size: clamp(3.5rem, 17vw, 5rem);\n  }\n  .titulo-secao {\n    align-items: start;\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .cartao-trabalho {\n    min-height: 0;\n    grid-template-columns: 1fr;\n  }\n  .cartao-trabalho figure {\n    aspect-ratio: 1;\n    border-right: 0;\n    border-bottom: 1px solid var(--preto);\n  }\n  .cartao-trabalho figure img {\n    object-fit: contain;\n  }\n  .ramo {\n    opacity: 0.16;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *,\n  *::before,\n  *::after {\n    scroll-behavior: auto !important;\n    transition: none !important;\n    animation-duration: 1ms !important;\n    animation-iteration-count: 1 !important;\n  }\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Sala, { className: "Sala", filePath: "apps/studio-dash/src/app/paginas/sala/sala.ts", lineNumber: 18 });
})();
export {
  Sala
};
