import {
  ActivatedRoute,
  Component,
  DadosPaginaEstudio,
  RouterLink,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IMBOO5ID.js";

// apps/studio-dash/src/app/paginas/toca/toca.ts
var _forTrack0 = ($index, $item) => $item.id;
function Toca_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementStart(2, "header", 6)(3, "a", 7);
    \u0275\u0275element(4, "span", 8);
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "TOCA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 9);
    \u0275\u0275text(8, " Conhe\xE7a a Fl\xEAiva ");
    \u0275\u0275elementStart(9, "span", 8);
    \u0275\u0275text(10, "\u2197");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "p");
    \u0275\u0275text(14, "TOCA FL\xCAIVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h1");
    \u0275\u0275text(16, " Trabalhos feitos para ");
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18, "serem ouvidos.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p", 12);
    \u0275\u0275text(20, " Um espa\xE7o para est\xFAdios, produtores e artistas apresentarem \xE1lbuns, vers\xF5es e projetos sem depender de links soltos. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 13)(22, "a", 14);
    \u0275\u0275text(23, " Ver demonstra\xE7\xE3o ");
    \u0275\u0275elementStart(24, "span", 8);
    \u0275\u0275text(25, "\u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "a", 15);
    \u0275\u0275text(27, " Sobre a plataforma ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 16)(29, "header")(30, "span");
    \u0275\u0275text(31, "FL\xCAIVA / PLAY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "PUBLIC SYSTEM");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 17);
    \u0275\u0275element(35, "span", 18);
    \u0275\u0275elementStart(36, "div")(37, "small");
    \u0275\u0275text(38, "TRABALHO EM DESTAQUE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "strong");
    \u0275\u0275text(40, "CarcaMoi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42, "SAMPA BEATSTOP \xB7 4 FAIXAS");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "footer")(44, "span");
    \u0275\u0275text(45, "CAPA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span");
    \u0275\u0275text(47, "ORDEM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49, "ESCUTA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "strong");
    \u0275\u0275text(51, "\u25CF DISPON\xCDVEL");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "footer", 19)(53, "span");
    \u0275\u0275text(54, "TOCA FL\xCAIVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span");
    \u0275\u0275text(56, "APRESENTA\xC7\xC3O DE TRABALHOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(58);
    \u0275\u0275textInterpolate1("BRASIL \xB7 ", ctx_r0.anoAtual);
  }
}
function Toca_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2);
    \u0275\u0275element(1, "span", 20);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Carregando trabalhos...");
    \u0275\u0275elementEnd()();
  }
}
function Toca_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 3);
    \u0275\u0275element(1, "span", 20);
    \u0275\u0275elementStart(2, "p", 21);
    \u0275\u0275text(3, "TOCA FL\xCAIVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5, "P\xE1gina indispon\xEDvel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 22)(9, "button", 23);
    \u0275\u0275listener("click", function Toca_Conditional_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.recarregar());
    });
    \u0275\u0275text(10, " Tentar novamente ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 24);
    \u0275\u0275text(12, " Conhecer a Toca ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.dados.erro());
  }
}
function Toca_Conditional_4_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 30);
  }
  if (rf & 2) {
    const estudio_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("src", estudio_r3.logo_url, \u0275\u0275sanitizeUrl)("alt", "Logo de " + estudio_r3.nome);
  }
}
function Toca_Conditional_4_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.inicialEstudio());
  }
}
function Toca_Conditional_4_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const estudio_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(estudio_r3.cidade);
  }
}
function Toca_Conditional_4_Conditional_20_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "p");
    \u0275\u0275text(2, " Este est\xFAdio ainda n\xE3o publicou nada na Toca Fl\xEAiva. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 37);
    \u0275\u0275text(4, " Visitar p\xE1gina do est\xFAdio ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r0.urlCasa(), \u0275\u0275sanitizeUrl);
  }
}
function Toca_Conditional_4_Conditional_20_Conditional_10_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 30);
  }
  if (rf & 2) {
    const album_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", album_r4.capa_url, \u0275\u0275sanitizeUrl)("alt", "Capa de " + album_r4.nome);
  }
}
function Toca_Conditional_4_Conditional_20_Conditional_10_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const album_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.inicialAlbum(album_r4), " ");
  }
}
function Toca_Conditional_4_Conditional_20_Conditional_10_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const album_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", album_r4.descricao, " ");
  }
}
function Toca_Conditional_4_Conditional_20_Conditional_10_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Reprodu\xE7\xE3o");
    \u0275\u0275elementEnd();
  }
}
function Toca_Conditional_4_Conditional_20_Conditional_10_For_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Download");
    \u0275\u0275elementEnd();
  }
}
function Toca_Conditional_4_Conditional_20_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 38)(1, "div", 39);
    \u0275\u0275conditionalCreate(2, Toca_Conditional_4_Conditional_20_Conditional_10_For_2_Conditional_2_Template, 1, 2, "img", 30)(3, Toca_Conditional_4_Conditional_20_Conditional_10_For_2_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275elementStart(4, "i", 8);
    \u0275\u0275text(5, "\u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 40)(7, "div");
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "small");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "h3");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, Toca_Conditional_4_Conditional_20_Conditional_10_For_2_Conditional_15_Template, 2, 1, "small", 41);
    \u0275\u0275elementStart(16, "div", 42);
    \u0275\u0275conditionalCreate(17, Toca_Conditional_4_Conditional_20_Conditional_10_For_2_Conditional_17_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(18, Toca_Conditional_4_Conditional_20_Conditional_10_For_2_Conditional_18_Template, 2, 0, "span");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const album_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("routerLink", ctx_r0.rotaAlbum(album_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(album_r4.capa_url ? 2 : 3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", album_r4.tipo === "Envio" ? "Processo" : album_r4.tipo || "Trabalho", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.quantidadeFaixas(album_r4), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(album_r4.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(album_r4.projeto);
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r4.descricao ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(album_r4.reproducao_publica ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r4.download_publico ? 18 : -1);
  }
}
function Toca_Conditional_4_Conditional_20_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275repeaterCreate(1, Toca_Conditional_4_Conditional_20_Conditional_10_For_2_Template, 19, 9, "a", 38, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.dados.albuns());
  }
}
function Toca_Conditional_4_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 31)(1, "header", 34)(2, "div")(3, "p");
    \u0275\u0275text(4, "TOCA FL\xCAIVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Trabalhos dispon\xEDveis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, Toca_Conditional_4_Conditional_20_Conditional_9_Template, 5, 1, "div", 35)(10, Toca_Conditional_4_Conditional_20_Conditional_10_Template, 3, 0, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.dados.albuns().length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.dados.albuns().length === 0 ? 9 : 10);
  }
}
function Toca_Conditional_4_Conditional_21_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 44)(2, "span", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 46);
    \u0275\u0275text(7, " Abrir ");
    \u0275\u0275elementStart(8, "i", 8);
    \u0275\u0275text(9, "\u2192");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const experiencia_r5 = ctx.$implicit;
    const $index_r6 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.rotaExperiencia(experiencia_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", $index_r6 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(experiencia_r5.nome);
  }
}
function Toca_Conditional_4_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 31)(1, "header", 34)(2, "div")(3, "p");
    \u0275\u0275text(4, "TOCA FL\xCAIVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Experi\xEAncias multim\xEDda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a");
    \u0275\u0275text(8, "Para uma melhor experi\xEAncia use fones");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ol", 43);
    \u0275\u0275repeaterCreate(12, Toca_Conditional_4_Conditional_21_For_13_Template, 10, 3, "li", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.dados.experiencias().length);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.dados.experiencias());
  }
}
function Toca_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "header", 25)(2, "a", 26);
    \u0275\u0275element(3, "span", 8);
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "TOCA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a", 27);
    \u0275\u0275text(7, " P\xE1gina do est\xFAdio ");
    \u0275\u0275elementStart(8, "span", 8);
    \u0275\u0275text(9, "\u2197");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "section", 28)(11, "div", 29);
    \u0275\u0275conditionalCreate(12, Toca_Conditional_4_Conditional_12_Template, 1, 2, "img", 30)(13, Toca_Conditional_4_Conditional_13_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "p");
    \u0275\u0275text(16, "PUBLICA\xC7\xD5ES DO EST\xDADIO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h1");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, Toca_Conditional_4_Conditional_19_Template, 2, 1, "span");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(20, Toca_Conditional_4_Conditional_20_Template, 11, 2, "section", 31);
    \u0275\u0275conditionalCreate(21, Toca_Conditional_4_Conditional_21_Template, 14, 1, "section", 31);
    \u0275\u0275elementStart(22, "footer", 32)(23, "span");
    \u0275\u0275text(24, " Publicado atrav\xE9s da Toca Fl\xEAiva ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "a", 33);
    \u0275\u0275text(26, " Conhe\xE7a a plataforma ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const estudio_r3 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("href", ctx_r0.urlCasa(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(estudio_r3.logo_url ? 12 : 13);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(estudio_r3.nome);
    \u0275\u0275advance();
    \u0275\u0275conditional(estudio_r3.cidade ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.dados.albuns().length > 0 || ctx_r0.dados.experiencias().length === 0 ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.dados.experiencias().length > 0 ? 21 : -1);
  }
}
var Toca = class _Toca {
  dados = inject(DadosPaginaEstudio);
  rota = inject(ActivatedRoute);
  slug = signal(
    null,
    ...ngDevMode ? [{ debugName: "slug" }] : (
      /* istanbul ignore next */
      []
    )
  );
  paginaInicial = computed(
    () => this.slug() === null,
    ...ngDevMode ? [{ debugName: "paginaInicial" }] : (
      /* istanbul ignore next */
      []
    )
  );
  anoAtual = (/* @__PURE__ */ new Date()).getFullYear();
  ngOnInit() {
    const slug = this.rota.snapshot.paramMap.get("slug")?.trim().toLocaleLowerCase() || null;
    this.slug.set(slug);
    if (slug) {
      void this.dados.carregar(slug);
    }
  }
  recarregar() {
    const slug = this.slug();
    if (slug) {
      void this.dados.carregar(slug);
    }
  }
  rotaAlbum(albumId) {
    const slug = this.slug();
    return slug ? ["/", slug, "trabalho", albumId] : ["/"];
  }
  rotaExperiencia(experienciaId) {
    return ["/experiencia", experienciaId];
  }
  urlCasa() {
    const slug = this.slug();
    return slug ? `https://card.fleiva.com.br/${encodeURIComponent(slug)}` : "https://card.fleiva.com.br";
  }
  inicialEstudio() {
    const nome = this.dados.estudio()?.nome.trim();
    return nome?.charAt(0).toUpperCase() || "F";
  }
  inicialAlbum(album) {
    return album.nome.trim().charAt(0).toUpperCase() || "A";
  }
  inicialExperiencia(experiencia) {
    return experiencia.nome.trim().charAt(0).toUpperCase() || "E";
  }
  quantidadeFaixas(album) {
    return album.quantidade_faixas === 1 ? "1 faixa" : `${album.quantidade_faixas} faixas`;
  }
  static \u0275fac = function Toca_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Toca)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Toca, selectors: [["app-toca"]], decls: 5, vars: 5, consts: [[1, "toca"], [1, "inicio-toca"], [1, "estado"], [1, "estado", "estado-erro"], [1, "pagina-estudio"], ["aria-hidden", "true", 1, "moire"], [1, "cabecalho-toca"], ["href", "https://fleiva.com.br", "aria-label", "Fl\xEAiva Studios", 1, "marca-fleiva"], ["aria-hidden", "true"], ["href", "https://fleiva.com.br", 1, "link-fleiva"], [1, "apresentacao-toca"], [1, "texto-apresentacao"], [1, "descricao"], [1, "acoes-inicio"], ["routerLink", "/sampabeatstop", 1, "botao-demonstracao"], ["href", "https://fleiva.com.br", 1, "link-institucional"], ["aria-hidden", "true", 1, "visor-toca"], [1, "visor-conteudo"], [1, "monograma"], [1, "rodape-inicio"], ["aria-hidden", "true", 1, "marca-estado"], [1, "rotulo"], [1, "acoes-estado"], ["type", "button", 3, "click"], ["routerLink", "/"], [1, "cabecalho-estudio"], ["routerLink", "/", "aria-label", "Toca Fl\xEAiva", 1, "marca-fleiva"], [1, "voltar-casa", 3, "href"], [1, "identidade-estudio"], [1, "logo-estudio"], [3, "src", "alt"], [1, "trabalhos"], [1, "rodape-estudio"], ["href", "https://fleiva.com.br"], [1, "titulo-trabalhos"], [1, "sem-trabalhos"], [1, "grade-albuns"], [3, "href"], [1, "album", 3, "routerLink"], [1, "capa-album"], [1, "dados-album"], [1, "descricao-album"], [1, "recursos-album"], [1, "lista-experiencias"], [3, "routerLink"], ["aria-hidden", "true", 1, "numero-experiencia"], [1, "abrir-experiencia"]], template: function Toca_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0);
      \u0275\u0275conditionalCreate(1, Toca_Conditional_1_Template, 59, 1, "section", 1)(2, Toca_Conditional_2_Template, 4, 0, "section", 2)(3, Toca_Conditional_3_Template, 13, 1, "section", 3)(4, Toca_Conditional_4_Template, 27, 6, "section", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275styleProp("--accent", ctx.dados.corPrincipal())("--on-accent", ctx.dados.corContraste());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.paginaInicial() ? 1 : ctx.dados.carregando() ? 2 : ctx.dados.erro() ? 3 : (tmp_2_0 = ctx.dados.estudio()) ? 4 : -1, tmp_2_0);
    }
  }, dependencies: [RouterLink], styles: ['@charset "UTF-8";\n\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100dvh;\n}\n.toca[_ngcontent-%COMP%] {\n  min-height: 100dvh;\n  background: #f4efdd;\n  color: #151714;\n  --accent: #4f7b61;\n  --on-accent: #ffffff;\n  --paper: #fbf8ec;\n  --ink: #151714;\n  --soft: #62675f;\n  --border: rgb(21 23 20 / 20%);\n}\n.marca-fleiva[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n}\n.marca-fleiva[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  width: 7.5rem;\n  height: 2rem;\n  background: currentColor;\n  mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) left center/contain no-repeat;\n  -webkit-mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) left center/contain no-repeat;\n}\n.marca-fleiva[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  padding-left: 0.7rem;\n  border-left: 1px solid currentColor;\n  font-size: 0.55rem;\n  letter-spacing: 0.16em;\n}\n.inicio-toca[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-height: 100dvh;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 1rem clamp(1rem, 4vw, 4rem);\n  background:\n    linear-gradient(\n      120deg,\n      rgba(79, 123, 97, 0.09),\n      transparent 48%),\n    #f4efdd;\n  isolation: isolate;\n}\n.moire[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  right: -15rem;\n  bottom: -18rem;\n  width: min(60rem, 70vw);\n  aspect-ratio: 1;\n  background: url(/fleiva-landing/moire-fleiva.svg) center/contain no-repeat;\n  opacity: 0.18;\n}\n.cabecalho-toca[_ngcontent-%COMP%], \n.cabecalho-estudio[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 4.5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  border-bottom: 1px solid var(--ink);\n}\n.link-fleiva[_ngcontent-%COMP%], \n.voltar-casa[_ngcontent-%COMP%] {\n  padding-bottom: 0.2rem;\n  border-bottom: 1px solid currentColor;\n  font-size: 0.68rem;\n  font-weight: 800;\n}\n.apresentacao-toca[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 1;\n  grid-template-columns: minmax(0, 1.1fr) minmax(22rem, 0.7fr);\n  align-items: center;\n  gap: clamp(3rem, 8vw, 9rem);\n  padding: clamp(4rem, 9vw, 8rem) 0;\n}\n.texto-apresentacao[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:first-child {\n  color: #315441;\n  font-size: 0.6rem;\n  font-weight: 850;\n  letter-spacing: 0.16em;\n}\n.texto-apresentacao[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 12ch;\n  margin: 0;\n  font-size: clamp(3.2rem, 7vw, 7rem);\n  line-height: 0.9;\n  letter-spacing: -0.06em;\n}\n.texto-apresentacao[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #4f7b61;\n  font: inherit;\n}\n.descricao[_ngcontent-%COMP%] {\n  max-width: 38rem;\n  margin: 2rem 0 0;\n  color: #454941;\n  font-size: 1.05rem;\n  line-height: 1.65;\n}\n.acoes-inicio[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 1.5rem;\n  margin-top: 2.25rem;\n}\n.botao-demonstracao[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 3.1rem;\n  align-items: center;\n  gap: 1.2rem;\n  padding: 0.7rem 1rem;\n  background: #151714;\n  color: #f4efdd;\n  font-size: 0.72rem;\n  font-weight: 850;\n}\n.link-institucional[_ngcontent-%COMP%] {\n  padding-bottom: 0.2rem;\n  border-bottom: 1px solid currentColor;\n  font-size: 0.72rem;\n  font-weight: 800;\n}\n.visor-toca[_ngcontent-%COMP%] {\n  background: #151714;\n  color: #f4efdd;\n  border: 1px solid #151714;\n  box-shadow: 0.4rem 0.4rem 0 #4f7b61, 0.75rem 0.75rem 0 #885f74;\n}\n.visor-toca[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], \n.visor-toca[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  min-height: 2.8rem;\n  padding: 0.65rem 0.85rem;\n  font-size: 0.48rem;\n  font-weight: 850;\n  letter-spacing: 0.1em;\n}\n.visor-toca[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(244, 239, 221, 0.2);\n}\n.visor-toca[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(244, 239, 221, 0.2);\n}\n.visor-toca[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #82a58e;\n  font-size: inherit;\n}\n.visor-conteudo[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-height: 22rem;\n  place-items: center;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #365d45,\n      #1f392a);\n}\n.visor-conteudo[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: -7rem;\n  width: 22rem;\n  aspect-ratio: 1;\n  background: url(/fleiva-landing/moire-fleiva.svg) center/contain no-repeat;\n  opacity: 0.28;\n  filter: brightness(0) invert(1);\n  content: "";\n}\n.visor-conteudo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  bottom: 1.2rem;\n  left: 1.2rem;\n  display: grid;\n  gap: 0.25rem;\n}\n.visor-conteudo[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.visor-conteudo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(244, 239, 221, 0.55);\n  font-size: 0.46rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n}\n.visor-conteudo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.monograma[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: block;\n  width: 7rem;\n  aspect-ratio: 1;\n  background: #f4efdd;\n  mask: url(/fleiva-brand-kit/mask/fleiva-monogram-mask.png) center/contain no-repeat;\n  -webkit-mask: url(/fleiva-brand-kit/mask/fleiva-monogram-mask.png) center/contain no-repeat;\n}\n.rodape-inicio[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 3rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  border-top: 1px solid #151714;\n  color: #62675f;\n  font-size: 0.48rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n}\n.pagina-estudio[_ngcontent-%COMP%] {\n  width: min(78rem, 100% - 2rem);\n  margin: 0 auto;\n}\n.identidade-estudio[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: center;\n  gap: clamp(1.25rem, 4vw, 3rem);\n  padding: clamp(3rem, 7vw, 6rem) 0;\n  border-bottom: 1px solid var(--border);\n}\n.identidade-estudio[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child    > p[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem;\n  color: var(--accent);\n  font-size: 0.58rem;\n  font-weight: 850;\n  letter-spacing: 0.14em;\n}\n.identidade-estudio[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2.8rem, 7vw, 6rem);\n  line-height: 0.94;\n  letter-spacing: -0.055em;\n}\n.identidade-estudio[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.7rem;\n  color: var(--soft);\n}\n.logo-estudio[_ngcontent-%COMP%] {\n  display: grid;\n  width: clamp(5.5rem, 12vw, 9rem);\n  aspect-ratio: 1;\n  place-items: center;\n  overflow: hidden;\n  background-color: transparent;\n  color: var(--on-accent);\n}\n.logo-estudio[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.logo-estudio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 850;\n}\n.trabalhos[_ngcontent-%COMP%] {\n  padding: clamp(3rem, 7vw, 6rem) 0;\n}\n.titulo-trabalhos[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n.titulo-trabalhos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.2rem;\n  color: var(--accent);\n  font-size: 0.58rem;\n  font-weight: 850;\n  letter-spacing: 0.14em;\n}\n.titulo-trabalhos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: var(--soft);\n  font-size: 0.58rem;\n  font-weight: 850;\n  letter-spacing: 0.14em;\n}\n.titulo-trabalhos[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2rem, 4vw, 3.5rem);\n  letter-spacing: -0.04em;\n}\n.titulo-trabalhos[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.3rem;\n  aspect-ratio: 1;\n  place-items: center;\n  background: var(--accent);\n  color: var(--on-accent);\n  font-family: monospace;\n  font-size: 0.65rem;\n  font-weight: 850;\n}\n.grade-albuns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: clamp(1.25rem, 3vw, 2rem);\n}\n.album[_ngcontent-%COMP%] {\n  min-width: 0;\n  color: inherit;\n}\n.capa-album[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 1;\n  overflow: hidden;\n  background: var(--accent);\n}\n.capa-album[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 180ms ease;\n}\n.capa-album[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  place-items: center;\n  color: var(--on-accent);\n  font-size: 3rem;\n  font-weight: 850;\n}\n.capa-album[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  bottom: 0.75rem;\n  display: grid;\n  width: 2.3rem;\n  aspect-ratio: 1;\n  place-items: center;\n  background: #151714;\n  color: #f4efdd;\n  font-style: normal;\n  opacity: 0;\n  transform: translateY(0.4rem);\n  transition: opacity 150ms ease, transform 150ms ease;\n}\n.album[_ngcontent-%COMP%]:hover   .capa-album[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.025);\n}\n.album[_ngcontent-%COMP%]:hover   .capa-album[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.dados-album[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n.dados-album[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  color: var(--accent);\n  font-size: 0.52rem;\n  font-weight: 850;\n  letter-spacing: 0.09em;\n}\n.dados-album[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.65rem 0 0.2rem;\n  font-size: 1.2rem;\n}\n.dados-album[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--soft);\n  font-size: 0.75rem;\n}\n.descricao-album[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  margin-top: 0.8rem;\n  overflow: hidden;\n  color: var(--soft);\n  font-size: 0.7rem;\n  line-height: 1.5;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.recursos-album[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin-top: 0.9rem;\n}\n.recursos-album[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.45rem;\n  background: color-mix(in srgb, var(--accent) 10%, transparent);\n  color: var(--accent);\n  font-size: 0.52rem;\n  font-weight: 800;\n}\n.lista-experiencias[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border-top: 1px solid var(--border);\n  list-style: none;\n}\n.lista-experiencias[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border);\n}\n.lista-experiencias[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2.5rem minmax(0, 1fr) auto;\n  align-items: center;\n  gap: clamp(1rem, 3vw, 2rem);\n  min-height: 5.5rem;\n  padding: 1rem;\n  color: inherit;\n  transition: background 150ms ease;\n}\n.lista-experiencias[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--accent) 8%, transparent);\n}\n.lista-experiencias[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  min-width: 0;\n  font-size: clamp(1.15rem, 2.4vw, 1.7rem);\n  letter-spacing: -0.025em;\n}\n.numero-experiencia[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-family: monospace;\n  font-size: 0.65rem;\n  font-weight: 850;\n}\n.abrir-experiencia[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: var(--accent);\n  font-size: 0.62rem;\n  font-weight: 850;\n  letter-spacing: 0.08em;\n}\n.abrir-experiencia[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-style: normal;\n}\n.sem-trabalhos[_ngcontent-%COMP%] {\n  padding: 4rem 1rem;\n  border-top: 1px solid var(--border);\n  border-bottom: 1px solid var(--border);\n  text-align: center;\n}\n.sem-trabalhos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--soft);\n}\n.sem-trabalhos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-bottom: 0.2rem;\n  border-bottom: 1px solid currentColor;\n  font-size: 0.72rem;\n  font-weight: 800;\n}\n.rodape-estudio[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  border-top: 1px solid var(--border);\n  color: var(--soft);\n  font-size: 0.6rem;\n}\n.rodape-estudio[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-bottom: 0.15rem;\n  border-bottom: 1px solid currentColor;\n  font-weight: 800;\n}\n.estado[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 100dvh;\n  place-content: center;\n  justify-items: center;\n  padding: 2rem;\n  text-align: center;\n}\n.estado[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  font-size: clamp(2.5rem, 8vw, 5rem);\n}\n.estado[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 34rem;\n  color: var(--soft);\n}\n.estado[_ngcontent-%COMP%]   .rotulo[_ngcontent-%COMP%] {\n  color: #4f7b61;\n  font-size: 0.58rem;\n  font-weight: 850;\n  letter-spacing: 0.14em;\n}\n.marca-estado[_ngcontent-%COMP%] {\n  display: block;\n  width: 6rem;\n  aspect-ratio: 1;\n  background: #4f7b61;\n  mask: url(/fleiva-brand-kit/mask/fleiva-monogram-mask.png) center/contain no-repeat;\n  -webkit-mask: url(/fleiva-brand-kit/mask/fleiva-monogram-mask.png) center/contain no-repeat;\n}\n.acoes-estado[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 1rem;\n}\n.acoes-estado[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.acoes-estado[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  min-height: 2.75rem;\n  padding: 0.65rem 0.9rem;\n  background: transparent;\n  color: #151714;\n  border: 1px solid #151714;\n  font: inherit;\n  font-size: 0.7rem;\n  font-weight: 800;\n}\n.acoes-estado[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #151714;\n  color: #f4efdd;\n}\n@media (max-width: 58rem) {\n  .apresentacao-toca[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .visor-toca[_ngcontent-%COMP%] {\n    width: min(32rem, 100%);\n  }\n  .grade-albuns[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 38rem) {\n  .marca-fleiva[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .inicio-toca[_ngcontent-%COMP%] {\n    padding-inline: 1rem;\n  }\n  .apresentacao-toca[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n  }\n  .texto-apresentacao[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(3rem, 15vw, 5rem);\n  }\n  .acoes-inicio[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .acoes-inicio[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .visor-conteudo[_ngcontent-%COMP%] {\n    min-height: 17rem;\n  }\n  .rodape-inicio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n    display: none;\n  }\n  .pagina-estudio[_ngcontent-%COMP%] {\n    width: min(100% - 1.25rem, 78rem);\n  }\n  .cabecalho-estudio[_ngcontent-%COMP%] {\n    min-height: 4rem;\n  }\n  .identidade-estudio[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .logo-estudio[_ngcontent-%COMP%] {\n    width: 5.5rem;\n  }\n  .grade-albuns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .lista-experiencias[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    grid-template-columns: 1.5rem minmax(0, 1fr) auto;\n    gap: 0.75rem;\n    min-height: 4.75rem;\n    padding-inline: 0.5rem;\n  }\n  .abrir-experiencia[_ngcontent-%COMP%] {\n    font-size: 0;\n  }\n  .rodape-estudio[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    justify-content: center;\n  }\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toca, [{
    type: Component,
    args: [{ selector: "app-toca", standalone: true, imports: [RouterLink], template: `<main
  class="toca"
  [style.--accent]="dados.corPrincipal()"
  [style.--on-accent]="dados.corContraste()"
>
  @if (paginaInicial()) {
    <section class="inicio-toca">
      <div class="moire" aria-hidden="true"></div>

      <header class="cabecalho-toca">
        <a
          class="marca-fleiva"
          href="https://fleiva.com.br"
          aria-label="Fl\xEAiva Studios"
        >
          <span aria-hidden="true"></span>

          <strong>TOCA</strong>
        </a>

        <a
          class="link-fleiva"
          href="https://fleiva.com.br"
        >
          Conhe\xE7a a Fl\xEAiva
          <span aria-hidden="true">\u2197</span>
        </a>
      </header>

      <div class="apresentacao-toca">
        <div class="texto-apresentacao">
          <p>TOCA FL\xCAIVA</p>

          <h1>
            Trabalhos feitos para
            <strong>serem ouvidos.</strong>
          </h1>

          <p class="descricao">
            Um espa\xE7o para est\xFAdios, produtores e artistas
            apresentarem \xE1lbuns, vers\xF5es e projetos sem
            depender de links soltos.
          </p>

          <div class="acoes-inicio">
            <a
              class="botao-demonstracao"
              routerLink="/sampabeatstop"
            >
              Ver demonstra\xE7\xE3o
              <span aria-hidden="true">\u2192</span>
            </a>

            <a
              class="link-institucional"
              href="https://fleiva.com.br"
            >
              Sobre a plataforma
            </a>
          </div>
        </div>

        <div class="visor-toca" aria-hidden="true">
          <header>
            <span>FL\xCAIVA / PLAY</span>
            <span>PUBLIC SYSTEM</span>
          </header>

          <div class="visor-conteudo">
            <span class="monograma"></span>

            <div>
              <small>TRABALHO EM DESTAQUE</small>
              <strong>CarcaMoi</strong>
              <span>SAMPA BEATSTOP \xB7 4 FAIXAS</span>
            </div>
          </div>

          <footer>
            <span>CAPA</span>
            <span>ORDEM</span>
            <span>ESCUTA</span>
            <strong>\u25CF DISPON\xCDVEL</strong>
          </footer>
        </div>
      </div>

      <footer class="rodape-inicio">
        <span>TOCA FL\xCAIVA</span>
        <span>APRESENTA\xC7\xC3O DE TRABALHOS</span>
        <span>BRASIL \xB7 {{ anoAtual }}</span>
      </footer>
    </section>
  } @else if (dados.carregando()) {
    <section class="estado">
      <span class="marca-estado" aria-hidden="true"></span>
      <p>Carregando trabalhos...</p>
    </section>
  } @else if (dados.erro()) {
    <section class="estado estado-erro">
      <span class="marca-estado" aria-hidden="true"></span>

      <p class="rotulo">TOCA FL\xCAIVA</p>
      <h1>P\xE1gina indispon\xEDvel</h1>
      <p>{{ dados.erro() }}</p>

      <div class="acoes-estado">
        <button
          type="button"
          (click)="recarregar()"
        >
          Tentar novamente
        </button>

        <a routerLink="/">
          Conhecer a Toca
        </a>
      </div>
    </section>
  } @else if (dados.estudio(); as estudio) {
    <section class="pagina-estudio">
      <header class="cabecalho-estudio">
        <a
          class="marca-fleiva"
          routerLink="/"
          aria-label="Toca Fl\xEAiva"
        >
          <span aria-hidden="true"></span>
          <strong>TOCA</strong>
        </a>

        <a
          class="voltar-casa"
          [href]="urlCasa()"
        >
          P\xE1gina do est\xFAdio
          <span aria-hidden="true">\u2197</span>
        </a>
      </header>

      <section class="identidade-estudio">
        <div class="logo-estudio">
          @if (estudio.logo_url) {
            <img
              [src]="estudio.logo_url"
              [alt]="'Logo de ' + estudio.nome"
            />
          } @else {
            <span>{{ inicialEstudio() }}</span>
          }
        </div>

        <div>
          <p>PUBLICA\xC7\xD5ES DO EST\xDADIO</p>
          <h1>{{ estudio.nome }}</h1>

          @if (estudio.cidade) {
            <span>{{ estudio.cidade }}</span>
          }
        </div>
      </section>

      @if (
        dados.albuns().length > 0 ||
        dados.experiencias().length === 0
      ) {
        <section class="trabalhos">
          <header class="titulo-trabalhos">
            <div>
              <p>TOCA FL\xCAIVA</p>
              <h2>Trabalhos dispon\xEDveis</h2>
            </div>

            <span>{{ dados.albuns().length }}</span>
          </header>

          @if (dados.albuns().length === 0) {
            <div class="sem-trabalhos">
              <p>
                Este est\xFAdio ainda n\xE3o publicou nada na
                Toca Fl\xEAiva.
              </p>

              <a [href]="urlCasa()">
                Visitar p\xE1gina do est\xFAdio
              </a>
            </div>
          } @else {
            <div class="grade-albuns">
              @for (
                album of dados.albuns();
                track album.id
              ) {
                <a
                  class="album"
                  [routerLink]="rotaAlbum(album.id)"
                >
                  <div class="capa-album">
                    @if (album.capa_url) {
                      <img
                        [src]="album.capa_url"
                        [alt]="'Capa de ' + album.nome"
                      />
                    } @else {
                      <span>
                        {{ inicialAlbum(album) }}
                      </span>
                    }

                    <i aria-hidden="true">\u2192</i>
                  </div>

                  <div class="dados-album">
                    <div>
                     {{
  album.tipo === 'Envio'
    ? 'Processo'
    : (album.tipo || 'Trabalho')
}}
                      <small>
                        {{
                          quantidadeFaixas(album)
                        }}
                      </small>
                    </div>

                    <h3>{{ album.nome }}</h3>
                    <p>{{ album.projeto }}</p>

                    @if (album.descricao) {
                      <small class="descricao-album">
                        {{ album.descricao }}
                      </small>
                    }

                    <div class="recursos-album">
                      @if (album.reproducao_publica) {
                        <span>Reprodu\xE7\xE3o</span>
                      }

                      @if (album.download_publico) {
                        <span>Download</span>
                      }
                    </div>
                  </div>
                </a>
              }
            </div>
          }
        </section>
      }

      @if (dados.experiencias().length > 0) {
        <section class="trabalhos">
          <header class="titulo-trabalhos">
            <div>
              <p>TOCA FL\xCAIVA</p>
              <h2>Experi\xEAncias multim\xEDda</h2>
              <a>Para uma melhor experi\xEAncia use fones</a>
            </div>
            <span>{{ dados.experiencias().length }}</span>
          </header>

          <ol class="lista-experiencias">
            @for (
              experiencia of dados.experiencias();
              track experiencia.id
            ) {
              <li>
                <a
                  [routerLink]="rotaExperiencia(experiencia.id)"
                >
                  <span class="numero-experiencia" aria-hidden="true">
                    {{ $index + 1 }}
                  </span>

                  <strong>{{ experiencia.nome }}</strong>

                  <span class="abrir-experiencia">
                    Abrir
                    <i aria-hidden="true">\u2192</i>
                  </span>
                </a>
              </li>
            }
          </ol>
        </section>
      }

      <footer class="rodape-estudio">
        <span>
          Publicado atrav\xE9s da Toca Fl\xEAiva
        </span>

        <a href="https://fleiva.com.br">
          Conhe\xE7a a plataforma
        </a>
      </footer>
    </section>
  }
</main>
`, styles: ['@charset "UTF-8";\n\n/* apps/studio-dash/src/app/paginas/toca/toca.scss */\n:host {\n  display: block;\n  min-height: 100dvh;\n}\n.toca {\n  min-height: 100dvh;\n  background: #f4efdd;\n  color: #151714;\n  --accent: #4f7b61;\n  --on-accent: #ffffff;\n  --paper: #fbf8ec;\n  --ink: #151714;\n  --soft: #62675f;\n  --border: rgb(21 23 20 / 20%);\n}\n.marca-fleiva {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n}\n.marca-fleiva > span {\n  display: block;\n  width: 7.5rem;\n  height: 2rem;\n  background: currentColor;\n  mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) left center/contain no-repeat;\n  -webkit-mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) left center/contain no-repeat;\n}\n.marca-fleiva strong {\n  padding-left: 0.7rem;\n  border-left: 1px solid currentColor;\n  font-size: 0.55rem;\n  letter-spacing: 0.16em;\n}\n.inicio-toca {\n  position: relative;\n  display: flex;\n  min-height: 100dvh;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 1rem clamp(1rem, 4vw, 4rem);\n  background:\n    linear-gradient(\n      120deg,\n      rgba(79, 123, 97, 0.09),\n      transparent 48%),\n    #f4efdd;\n  isolation: isolate;\n}\n.moire {\n  position: absolute;\n  z-index: -1;\n  right: -15rem;\n  bottom: -18rem;\n  width: min(60rem, 70vw);\n  aspect-ratio: 1;\n  background: url(/fleiva-landing/moire-fleiva.svg) center/contain no-repeat;\n  opacity: 0.18;\n}\n.cabecalho-toca,\n.cabecalho-estudio {\n  display: flex;\n  min-height: 4.5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  border-bottom: 1px solid var(--ink);\n}\n.link-fleiva,\n.voltar-casa {\n  padding-bottom: 0.2rem;\n  border-bottom: 1px solid currentColor;\n  font-size: 0.68rem;\n  font-weight: 800;\n}\n.apresentacao-toca {\n  display: grid;\n  flex: 1;\n  grid-template-columns: minmax(0, 1.1fr) minmax(22rem, 0.7fr);\n  align-items: center;\n  gap: clamp(3rem, 8vw, 9rem);\n  padding: clamp(4rem, 9vw, 8rem) 0;\n}\n.texto-apresentacao > p:first-child {\n  color: #315441;\n  font-size: 0.6rem;\n  font-weight: 850;\n  letter-spacing: 0.16em;\n}\n.texto-apresentacao h1 {\n  max-width: 12ch;\n  margin: 0;\n  font-size: clamp(3.2rem, 7vw, 7rem);\n  line-height: 0.9;\n  letter-spacing: -0.06em;\n}\n.texto-apresentacao h1 strong {\n  display: block;\n  color: #4f7b61;\n  font: inherit;\n}\n.descricao {\n  max-width: 38rem;\n  margin: 2rem 0 0;\n  color: #454941;\n  font-size: 1.05rem;\n  line-height: 1.65;\n}\n.acoes-inicio {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 1.5rem;\n  margin-top: 2.25rem;\n}\n.botao-demonstracao {\n  display: inline-flex;\n  min-height: 3.1rem;\n  align-items: center;\n  gap: 1.2rem;\n  padding: 0.7rem 1rem;\n  background: #151714;\n  color: #f4efdd;\n  font-size: 0.72rem;\n  font-weight: 850;\n}\n.link-institucional {\n  padding-bottom: 0.2rem;\n  border-bottom: 1px solid currentColor;\n  font-size: 0.72rem;\n  font-weight: 800;\n}\n.visor-toca {\n  background: #151714;\n  color: #f4efdd;\n  border: 1px solid #151714;\n  box-shadow: 0.4rem 0.4rem 0 #4f7b61, 0.75rem 0.75rem 0 #885f74;\n}\n.visor-toca header,\n.visor-toca footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  min-height: 2.8rem;\n  padding: 0.65rem 0.85rem;\n  font-size: 0.48rem;\n  font-weight: 850;\n  letter-spacing: 0.1em;\n}\n.visor-toca header {\n  border-bottom: 1px solid rgba(244, 239, 221, 0.2);\n}\n.visor-toca footer {\n  border-top: 1px solid rgba(244, 239, 221, 0.2);\n}\n.visor-toca footer strong {\n  color: #82a58e;\n  font-size: inherit;\n}\n.visor-conteudo {\n  position: relative;\n  display: grid;\n  min-height: 22rem;\n  place-items: center;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #365d45,\n      #1f392a);\n}\n.visor-conteudo::after {\n  position: absolute;\n  right: -7rem;\n  width: 22rem;\n  aspect-ratio: 1;\n  background: url(/fleiva-landing/moire-fleiva.svg) center/contain no-repeat;\n  opacity: 0.28;\n  filter: brightness(0) invert(1);\n  content: "";\n}\n.visor-conteudo > div {\n  position: absolute;\n  z-index: 2;\n  bottom: 1.2rem;\n  left: 1.2rem;\n  display: grid;\n  gap: 0.25rem;\n}\n.visor-conteudo small,\n.visor-conteudo span {\n  color: rgba(244, 239, 221, 0.55);\n  font-size: 0.46rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n}\n.visor-conteudo strong {\n  font-size: 1.1rem;\n}\n.monograma {\n  position: relative;\n  z-index: 2;\n  display: block;\n  width: 7rem;\n  aspect-ratio: 1;\n  background: #f4efdd;\n  mask: url(/fleiva-brand-kit/mask/fleiva-monogram-mask.png) center/contain no-repeat;\n  -webkit-mask: url(/fleiva-brand-kit/mask/fleiva-monogram-mask.png) center/contain no-repeat;\n}\n.rodape-inicio {\n  display: flex;\n  min-height: 3rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  border-top: 1px solid #151714;\n  color: #62675f;\n  font-size: 0.48rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n}\n.pagina-estudio {\n  width: min(78rem, 100% - 2rem);\n  margin: 0 auto;\n}\n.identidade-estudio {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: center;\n  gap: clamp(1.25rem, 4vw, 3rem);\n  padding: clamp(3rem, 7vw, 6rem) 0;\n  border-bottom: 1px solid var(--border);\n}\n.identidade-estudio > div:last-child > p {\n  margin-bottom: 0.6rem;\n  color: var(--accent);\n  font-size: 0.58rem;\n  font-weight: 850;\n  letter-spacing: 0.14em;\n}\n.identidade-estudio h1 {\n  margin: 0;\n  font-size: clamp(2.8rem, 7vw, 6rem);\n  line-height: 0.94;\n  letter-spacing: -0.055em;\n}\n.identidade-estudio > div:last-child > span {\n  display: block;\n  margin-top: 0.7rem;\n  color: var(--soft);\n}\n.logo-estudio {\n  display: grid;\n  width: clamp(5.5rem, 12vw, 9rem);\n  aspect-ratio: 1;\n  place-items: center;\n  overflow: hidden;\n  background-color: transparent;\n  color: var(--on-accent);\n}\n.logo-estudio img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.logo-estudio span {\n  font-size: 2rem;\n  font-weight: 850;\n}\n.trabalhos {\n  padding: clamp(3rem, 7vw, 6rem) 0;\n}\n.titulo-trabalhos {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n.titulo-trabalhos p {\n  margin-bottom: 0.2rem;\n  color: var(--accent);\n  font-size: 0.58rem;\n  font-weight: 850;\n  letter-spacing: 0.14em;\n}\n.titulo-trabalhos a {\n  margin-bottom: 0.5rem;\n  color: var(--soft);\n  font-size: 0.58rem;\n  font-weight: 850;\n  letter-spacing: 0.14em;\n}\n.titulo-trabalhos h2 {\n  margin: 0;\n  font-size: clamp(2rem, 4vw, 3.5rem);\n  letter-spacing: -0.04em;\n}\n.titulo-trabalhos > span {\n  display: grid;\n  width: 2.3rem;\n  aspect-ratio: 1;\n  place-items: center;\n  background: var(--accent);\n  color: var(--on-accent);\n  font-family: monospace;\n  font-size: 0.65rem;\n  font-weight: 850;\n}\n.grade-albuns {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: clamp(1.25rem, 3vw, 2rem);\n}\n.album {\n  min-width: 0;\n  color: inherit;\n}\n.capa-album {\n  position: relative;\n  aspect-ratio: 1;\n  overflow: hidden;\n  background: var(--accent);\n}\n.capa-album img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 180ms ease;\n}\n.capa-album > span {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  place-items: center;\n  color: var(--on-accent);\n  font-size: 3rem;\n  font-weight: 850;\n}\n.capa-album i {\n  position: absolute;\n  right: 0.75rem;\n  bottom: 0.75rem;\n  display: grid;\n  width: 2.3rem;\n  aspect-ratio: 1;\n  place-items: center;\n  background: #151714;\n  color: #f4efdd;\n  font-style: normal;\n  opacity: 0;\n  transform: translateY(0.4rem);\n  transition: opacity 150ms ease, transform 150ms ease;\n}\n.album:hover .capa-album img {\n  transform: scale(1.025);\n}\n.album:hover .capa-album i {\n  opacity: 1;\n  transform: translateY(0);\n}\n.dados-album {\n  padding-top: 1rem;\n}\n.dados-album > div:first-child {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  color: var(--accent);\n  font-size: 0.52rem;\n  font-weight: 850;\n  letter-spacing: 0.09em;\n}\n.dados-album h3 {\n  margin: 0.65rem 0 0.2rem;\n  font-size: 1.2rem;\n}\n.dados-album > p {\n  margin: 0;\n  color: var(--soft);\n  font-size: 0.75rem;\n}\n.descricao-album {\n  display: -webkit-box;\n  margin-top: 0.8rem;\n  overflow: hidden;\n  color: var(--soft);\n  font-size: 0.7rem;\n  line-height: 1.5;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.recursos-album {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin-top: 0.9rem;\n}\n.recursos-album span {\n  padding: 0.3rem 0.45rem;\n  background: color-mix(in srgb, var(--accent) 10%, transparent);\n  color: var(--accent);\n  font-size: 0.52rem;\n  font-weight: 800;\n}\n.lista-experiencias {\n  margin: 0;\n  padding: 0;\n  border-top: 1px solid var(--border);\n  list-style: none;\n}\n.lista-experiencias li {\n  border-bottom: 1px solid var(--border);\n}\n.lista-experiencias a {\n  display: grid;\n  grid-template-columns: 2.5rem minmax(0, 1fr) auto;\n  align-items: center;\n  gap: clamp(1rem, 3vw, 2rem);\n  min-height: 5.5rem;\n  padding: 1rem;\n  color: inherit;\n  transition: background 150ms ease;\n}\n.lista-experiencias a:hover {\n  background: color-mix(in srgb, var(--accent) 8%, transparent);\n}\n.lista-experiencias strong {\n  min-width: 0;\n  font-size: clamp(1.15rem, 2.4vw, 1.7rem);\n  letter-spacing: -0.025em;\n}\n.numero-experiencia {\n  color: var(--accent);\n  font-family: monospace;\n  font-size: 0.65rem;\n  font-weight: 850;\n}\n.abrir-experiencia {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: var(--accent);\n  font-size: 0.62rem;\n  font-weight: 850;\n  letter-spacing: 0.08em;\n}\n.abrir-experiencia i {\n  font-size: 1rem;\n  font-style: normal;\n}\n.sem-trabalhos {\n  padding: 4rem 1rem;\n  border-top: 1px solid var(--border);\n  border-bottom: 1px solid var(--border);\n  text-align: center;\n}\n.sem-trabalhos p {\n  color: var(--soft);\n}\n.sem-trabalhos a {\n  display: inline-block;\n  padding-bottom: 0.2rem;\n  border-bottom: 1px solid currentColor;\n  font-size: 0.72rem;\n  font-weight: 800;\n}\n.rodape-estudio {\n  display: flex;\n  min-height: 5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  border-top: 1px solid var(--border);\n  color: var(--soft);\n  font-size: 0.6rem;\n}\n.rodape-estudio a {\n  padding-bottom: 0.15rem;\n  border-bottom: 1px solid currentColor;\n  font-weight: 800;\n}\n.estado {\n  display: grid;\n  min-height: 100dvh;\n  place-content: center;\n  justify-items: center;\n  padding: 2rem;\n  text-align: center;\n}\n.estado h1 {\n  margin: 0.5rem 0;\n  font-size: clamp(2.5rem, 8vw, 5rem);\n}\n.estado > p {\n  max-width: 34rem;\n  color: var(--soft);\n}\n.estado .rotulo {\n  color: #4f7b61;\n  font-size: 0.58rem;\n  font-weight: 850;\n  letter-spacing: 0.14em;\n}\n.marca-estado {\n  display: block;\n  width: 6rem;\n  aspect-ratio: 1;\n  background: #4f7b61;\n  mask: url(/fleiva-brand-kit/mask/fleiva-monogram-mask.png) center/contain no-repeat;\n  -webkit-mask: url(/fleiva-brand-kit/mask/fleiva-monogram-mask.png) center/contain no-repeat;\n}\n.acoes-estado {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 1rem;\n}\n.acoes-estado button,\n.acoes-estado a {\n  min-height: 2.75rem;\n  padding: 0.65rem 0.9rem;\n  background: transparent;\n  color: #151714;\n  border: 1px solid #151714;\n  font: inherit;\n  font-size: 0.7rem;\n  font-weight: 800;\n}\n.acoes-estado button {\n  background: #151714;\n  color: #f4efdd;\n}\n@media (max-width: 58rem) {\n  .apresentacao-toca {\n    grid-template-columns: 1fr;\n  }\n  .visor-toca {\n    width: min(32rem, 100%);\n  }\n  .grade-albuns {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 38rem) {\n  .marca-fleiva strong {\n    display: none;\n  }\n  .inicio-toca {\n    padding-inline: 1rem;\n  }\n  .apresentacao-toca {\n    padding: 4rem 0;\n  }\n  .texto-apresentacao h1 {\n    font-size: clamp(3rem, 15vw, 5rem);\n  }\n  .acoes-inicio {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .acoes-inicio a {\n    width: 100%;\n    text-align: center;\n  }\n  .visor-conteudo {\n    min-height: 17rem;\n  }\n  .rodape-inicio span:nth-child(2) {\n    display: none;\n  }\n  .pagina-estudio {\n    width: min(100% - 1.25rem, 78rem);\n  }\n  .cabecalho-estudio {\n    min-height: 4rem;\n  }\n  .identidade-estudio {\n    grid-template-columns: 1fr;\n  }\n  .logo-estudio {\n    width: 5.5rem;\n  }\n  .grade-albuns {\n    grid-template-columns: 1fr;\n  }\n  .lista-experiencias a {\n    grid-template-columns: 1.5rem minmax(0, 1fr) auto;\n    gap: 0.75rem;\n    min-height: 4.75rem;\n    padding-inline: 0.5rem;\n  }\n  .abrir-experiencia {\n    font-size: 0;\n  }\n  .rodape-estudio {\n    align-items: flex-start;\n    flex-direction: column;\n    justify-content: center;\n  }\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Toca, { className: "Toca", filePath: "apps/studio-dash/src/app/paginas/toca/toca.ts", lineNumber: 25 });
})();
export {
  Toca
};
