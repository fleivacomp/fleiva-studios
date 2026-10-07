import {
  ActivatedRoute,
  Component,
  DadosPaginaEstudio,
  DomSanitizer,
  Title,
  computed,
  effect,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵinterpolate1,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IMBOO5ID.js";

// apps/studio-dash/src/app/paginas/pagina-estudio/pagina-estudio.ts
var _forTrack0 = ($index, $item) => $item.chave;
var _forTrack1 = ($index, $item) => $item.id;
function PaginaEstudio_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 1);
    \u0275\u0275domElement(1, "span", 3);
    \u0275\u0275domElementStart(2, "p");
    \u0275\u0275text(3, "Carregando P\xE1gina...");
    \u0275\u0275domElementEnd()();
  }
}
function PaginaEstudio_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "section", 2)(1, "span", 4);
    \u0275\u0275text(2, "404");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "h1");
    \u0275\u0275text(4, "P\xE1gina indispon\xEDvel");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "button", 5);
    \u0275\u0275domListener("click", function PaginaEstudio_Conditional_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.recarregar());
    });
    \u0275\u0275text(8, " Tentar novamente ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.dados.erro());
  }
}
function PaginaEstudio_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 9);
  }
  if (rf & 2) {
    const estudio_r3 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", estudio_r3.logo_url, \u0275\u0275sanitizeUrl)("alt", "Logo de " + estudio_r3.nome);
  }
}
function PaginaEstudio_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.inicialEstudio(), " ");
  }
}
function PaginaEstudio_Conditional_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "a", 14);
    \u0275\u0275text(1, " Ouvir ");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const estudio_r3 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("href", \u0275\u0275interpolate1("https://play.fleiva.com.br/", estudio_r3.slug), \u0275\u0275sanitizeUrl);
  }
}
function PaginaEstudio_Conditional_3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "a", 15);
    \u0275\u0275text(1, " Instagram ");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275domProperty("href", ctx, \u0275\u0275sanitizeUrl);
  }
}
function PaginaEstudio_Conditional_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "a", 16);
    \u0275\u0275text(1, " Whatsapp ");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275domProperty("href", ctx, \u0275\u0275sanitizeUrl);
  }
}
function PaginaEstudio_Conditional_3_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 38);
    \u0275\u0275text(1, " - ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const estudio_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(estudio_r3.cidade);
  }
}
function PaginaEstudio_Conditional_3_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const estudio_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", estudio_r3.descricao, " ");
  }
}
function PaginaEstudio_Conditional_3_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "a", 23)(1, "span");
    \u0275\u0275text(2, "Falar com o est\xFAdio");
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(3, "svg", 39);
    \u0275\u0275domElement(4, "path", 40)(5, "path", 41);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275domProperty("href", ctx, \u0275\u0275sanitizeUrl);
  }
}
function PaginaEstudio_Conditional_3_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "a", 24);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("href", ctx, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" @", ctx_r1.usuarioInstagram(), " ");
  }
}
function PaginaEstudio_Conditional_3_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 9);
  }
  if (rf & 2) {
    const estudio_r3 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", estudio_r3.logo_url, \u0275\u0275sanitizeUrl)("alt", "Identidade visual de " + estudio_r3.nome);
  }
}
function PaginaEstudio_Conditional_3_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.inicialEstudio());
  }
}
function PaginaEstudio_Conditional_3_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const estudio_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(estudio_r3.cidade);
  }
}
function PaginaEstudio_Conditional_3_Conditional_62_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " destaque ");
  }
}
function PaginaEstudio_Conditional_3_Conditional_62_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " destaques ");
  }
}
function PaginaEstudio_Conditional_3_Conditional_62_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 44)(1, "header")(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "small");
    \u0275\u0275text(7, "PLAYER OFICIAL");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "div", 45);
    \u0275\u0275domElement(9, "iframe", 46);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const embed_r4 = ctx.$implicit;
    const \u0275$index_189_r5 = ctx.$index;
    const estudio_r3 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-provedor", embed_r4.provedor);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatarOrdem(\u0275$index_189_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(embed_r4.rotulo);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("src", embed_r4.src, \u0275\u0275sanitizeResourceUrl)("title", "Conte\xFAdo de " + embed_r4.rotulo + " selecionado por " + estudio_r3.nome);
  }
}
function PaginaEstudio_Conditional_3_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 30)(1, "header", 42)(2, "div")(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "h2");
    \u0275\u0275text(6, "Ou\xE7a e assista");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275conditionalCreate(9, PaginaEstudio_Conditional_3_Conditional_62_Conditional_9_Template, 1, 0)(10, PaginaEstudio_Conditional_3_Conditional_62_Conditional_10_Template, 1, 0);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "div", 43);
    \u0275\u0275repeaterCreate(12, PaginaEstudio_Conditional_3_Conditional_62_For_13_Template, 10, 5, "article", 44, _forTrack0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const estudio_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("SELE\xC7\xC3O DE ", estudio_r3.nome);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.embedsPublicos().length, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.embedsPublicos().length === 1 ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("embed-unico", ctx_r1.embedsPublicos().length === 1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.embedsPublicos());
  }
}
function PaginaEstudio_Conditional_3_Conditional_63_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " trabalho ");
  }
}
function PaginaEstudio_Conditional_3_Conditional_63_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " trabalhos ");
  }
}
function PaginaEstudio_Conditional_3_Conditional_63_For_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 9);
  }
  if (rf & 2) {
    const album_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275domProperty("src", album_r6.capa_url, \u0275\u0275sanitizeUrl)("alt", "Capa de " + album_r6.nome);
  }
}
function PaginaEstudio_Conditional_3_Conditional_63_For_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "small");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const album_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.iniciaisAlbum(album_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(album_r6.projeto);
  }
}
function PaginaEstudio_Conditional_3_Conditional_63_For_14_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 53);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const album_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", album_r6.descricao, " ");
  }
}
function PaginaEstudio_Conditional_3_Conditional_63_For_14_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 55);
    \u0275\u0275domElement(1, "i", 56);
    \u0275\u0275text(2, " Audi\xE7\xE3o liberada ");
    \u0275\u0275domElementEnd();
  }
}
function PaginaEstudio_Conditional_3_Conditional_63_For_14_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 55);
    \u0275\u0275domElement(1, "i", 56);
    \u0275\u0275text(2, " Download liberado ");
    \u0275\u0275domElementEnd();
  }
}
function PaginaEstudio_Conditional_3_Conditional_63_For_14_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1, " Apresenta\xE7\xE3o do trabalho ");
    \u0275\u0275domElementEnd();
  }
}
function PaginaEstudio_Conditional_3_Conditional_63_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "a", 49)(1, "div", 50);
    \u0275\u0275conditionalCreate(2, PaginaEstudio_Conditional_3_Conditional_63_For_14_Conditional_2_Template, 1, 2, "img", 9)(3, PaginaEstudio_Conditional_3_Conditional_63_For_14_Conditional_3_Template, 4, 2);
    \u0275\u0275domElementStart(4, "span", 51);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 52)(7, "header")(8, "div")(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "h3");
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(15, "small");
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(17, PaginaEstudio_Conditional_3_Conditional_63_For_14_Conditional_17_Template, 2, 1, "p", 53);
    \u0275\u0275domElementStart(18, "footer", 54);
    \u0275\u0275conditionalCreate(19, PaginaEstudio_Conditional_3_Conditional_63_For_14_Conditional_19_Template, 3, 0, "span", 55);
    \u0275\u0275conditionalCreate(20, PaginaEstudio_Conditional_3_Conditional_63_For_14_Conditional_20_Template, 3, 0, "span", 55);
    \u0275\u0275conditionalCreate(21, PaginaEstudio_Conditional_3_Conditional_63_For_14_Conditional_21_Template, 2, 0, "span");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const album_r6 = ctx.$implicit;
    const \u0275$index_231_r7 = ctx.$index;
    const estudio_r3 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("href", ctx_r1.urlTrabalho(estudio_r3.slug, album_r6.id), \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", "Abrir " + album_r6.nome + " na Toca Fl\xEAiva");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(album_r6.capa_url ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatarOrdem(\u0275$index_231_r7), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", album_r6.tipo === "Envio" ? "Processo" : album_r6.tipo || "Trabalho", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(album_r6.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(album_r6.projeto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.rotuloQuantidadeFaixas(album_r6.quantidade_faixas), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r6.descricao ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(album_r6.reproducao_publica ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r6.download_publico ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!album_r6.reproducao_publica && !album_r6.download_publico ? 21 : -1);
  }
}
function PaginaEstudio_Conditional_3_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 31)(1, "header", 42)(2, "div")(3, "p");
    \u0275\u0275text(4, "TRABALHOS SELECIONADOS");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "h2", 47)(6, "a", 14);
    \u0275\u0275text(7, "Cat\xE1logo");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275conditionalCreate(10, PaginaEstudio_Conditional_3_Conditional_63_Conditional_10_Template, 1, 0)(11, PaginaEstudio_Conditional_3_Conditional_63_Conditional_11_Template, 1, 0);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "div", 48);
    \u0275\u0275repeaterCreate(13, PaginaEstudio_Conditional_3_Conditional_63_For_14_Template, 22, 12, "a", 49, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const estudio_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275domProperty("href", \u0275\u0275interpolate1("https://play.fleiva.com.br/", estudio_r3.slug), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.dados.albuns().length, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dados.albuns().length === 1 ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.dados.albuns());
  }
}
function PaginaEstudio_Conditional_3_Conditional_64_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " servi\xE7o ");
  }
}
function PaginaEstudio_Conditional_3_Conditional_64_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " servi\xE7os ");
  }
}
function PaginaEstudio_Conditional_3_Conditional_64_For_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function PaginaEstudio_Conditional_3_Conditional_64_For_13_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "a", 15);
    \u0275\u0275text(1, " Consultar disponibilidade ");
    \u0275\u0275domElementStart(2, "span", 56);
    \u0275\u0275text(3, "\u2197");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275domProperty("href", ctx, \u0275\u0275sanitizeUrl);
  }
}
function PaginaEstudio_Conditional_3_Conditional_64_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 58)(1, "header")(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, PaginaEstudio_Conditional_3_Conditional_64_For_13_Conditional_4_Template, 2, 1, "small");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 59)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 60)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(13, PaginaEstudio_Conditional_3_Conditional_64_For_13_Conditional_13_Template, 4, 1, "a", 15);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    let tmp_19_0;
    const servico_r8 = ctx.$implicit;
    const \u0275$index_311_r9 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatarOrdem(\u0275$index_311_r9), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_15_0 = ctx_r1.formatarDuracao(servico_r8.duracao_minutos)) ? 4 : -1, tmp_15_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(servico_r8.nome);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatarPreco(servico_r8.preco), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" / ", servico_r8.tipo_cobranca, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_19_0 = ctx_r1.linkWhatsapp()) ? 13 : -1, tmp_19_0);
  }
}
function PaginaEstudio_Conditional_3_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 32)(1, "header", 42)(2, "div")(3, "p");
    \u0275\u0275text(4, "CAT\xC1LOGO DO EST\xDADIO");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "h2");
    \u0275\u0275text(6, "Servi\xE7os");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275conditionalCreate(9, PaginaEstudio_Conditional_3_Conditional_64_Conditional_9_Template, 1, 0)(10, PaginaEstudio_Conditional_3_Conditional_64_Conditional_10_Template, 1, 0);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "div", 57);
    \u0275\u0275repeaterCreate(12, PaginaEstudio_Conditional_3_Conditional_64_For_13_Template, 14, 6, "article", 58, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.dados.servicos().length, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dados.servicos().length === 1 ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.dados.servicos());
  }
}
function PaginaEstudio_Conditional_3_Conditional_65_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 63)(1, "span", 65);
    \u0275\u0275text(2, "SOBRE");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const estudio_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(estudio_r3.descricao);
  }
}
function PaginaEstudio_Conditional_3_Conditional_65_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Localiza\xE7\xE3o");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const estudio_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(estudio_r3.cidade);
  }
}
function PaginaEstudio_Conditional_3_Conditional_65_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "WhatsApp");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "dd")(4, "a", 15);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const estudio_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("href", ctx, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", estudio_r3.whatsapp, " ");
  }
}
function PaginaEstudio_Conditional_3_Conditional_65_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Instagram");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "dd")(4, "a", 15);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("href", ctx, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" @", ctx_r1.usuarioInstagram(), " ");
  }
}
function PaginaEstudio_Conditional_3_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 33)(1, "div", 61)(2, "div")(3, "p");
    \u0275\u0275text(4, "CONTATO E INFORMA\xC7\xD5ES");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "h2");
    \u0275\u0275text(6, "Conhe\xE7a o est\xFAdio");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(7, "div", 62);
    \u0275\u0275conditionalCreate(8, PaginaEstudio_Conditional_3_Conditional_65_Conditional_8_Template, 5, 1, "article", 63);
    \u0275\u0275domElementStart(9, "article", 64)(10, "span", 65);
    \u0275\u0275text(11, "INFORMA\xC7\xD5ES");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "dl");
    \u0275\u0275conditionalCreate(13, PaginaEstudio_Conditional_3_Conditional_65_Conditional_13_Template, 5, 1, "div");
    \u0275\u0275conditionalCreate(14, PaginaEstudio_Conditional_3_Conditional_65_Conditional_14_Template, 6, 2, "div");
    \u0275\u0275conditionalCreate(15, PaginaEstudio_Conditional_3_Conditional_65_Conditional_15_Template, 6, 2, "div");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const estudio_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(estudio_r3.descricao ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(estudio_r3.cidade ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_5_0 = ctx_r1.linkWhatsapp()) ? 14 : -1, tmp_5_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_6_0 = ctx_r1.linkInstagram()) ? 15 : -1, tmp_6_0);
  }
}
function PaginaEstudio_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "header", 6)(1, "a", 7)(2, "span", 8);
    \u0275\u0275conditionalCreate(3, PaginaEstudio_Conditional_3_Conditional_3_Template, 1, 2, "img", 9)(4, PaginaEstudio_Conditional_3_Conditional_4_Template, 1, 1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 10)(6, "small", 11);
    \u0275\u0275text(7, " CASA FL\xCAIVA ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "small", 12);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(12, "nav", 13);
    \u0275\u0275conditionalCreate(13, PaginaEstudio_Conditional_3_Conditional_13_Template, 2, 2, "a", 14);
    \u0275\u0275conditionalCreate(14, PaginaEstudio_Conditional_3_Conditional_14_Template, 2, 1, "a", 15);
    \u0275\u0275conditionalCreate(15, PaginaEstudio_Conditional_3_Conditional_15_Template, 2, 1, "a", 16);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "section", 17)(17, "div", 18)(18, "div", 19);
    \u0275\u0275domElement(19, "span", 20);
    \u0275\u0275domElementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(22, PaginaEstudio_Conditional_3_Conditional_22_Template, 4, 1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "h1");
    \u0275\u0275text(24);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(25, PaginaEstudio_Conditional_3_Conditional_25_Template, 2, 1, "p", 21);
    \u0275\u0275domElementStart(26, "div", 22);
    \u0275\u0275conditionalCreate(27, PaginaEstudio_Conditional_3_Conditional_27_Template, 6, 1, "a", 23);
    \u0275\u0275conditionalCreate(28, PaginaEstudio_Conditional_3_Conditional_28_Template, 2, 2, "a", 24);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(29, "div", 25)(30, "header")(31, "span");
    \u0275\u0275text(32, "CASA FL\xCAIVA / IDENTIDADE");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(33, "span");
    \u0275\u0275text(34, "PUBLIC PROFILE");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(35, "div", 26)(36, "div", 27);
    \u0275\u0275conditionalCreate(37, PaginaEstudio_Conditional_3_Conditional_37_Template, 1, 2, "img", 9)(38, PaginaEstudio_Conditional_3_Conditional_38_Template, 2, 1, "span");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(39, "div", 28)(40, "span");
    \u0275\u0275text(41, "IDENTIFICA\xC7\xC3O");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(42, "strong");
    \u0275\u0275text(43);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(44, PaginaEstudio_Conditional_3_Conditional_44_Template, 2, 1, "small");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(45, "footer")(46, "span");
    \u0275\u0275text(47, "P\xC1GINA OFICIAL");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(48, "strong");
    \u0275\u0275domElement(49, "i");
    \u0275\u0275text(50, " ONLINE ");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(51, "footer", 29)(52, "span");
    \u0275\u0275text(53, "IDENTIDADE");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(54, "i");
    \u0275\u0275domElementStart(55, "span");
    \u0275\u0275text(56, "SERVI\xC7OS");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(57, "i");
    \u0275\u0275domElementStart(58, "span");
    \u0275\u0275text(59, "TRABALHOS");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(60, "strong");
    \u0275\u0275text(61, "PUBLICADO ATRAV\xC9S DA CASA FL\xCAIVA");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(62, PaginaEstudio_Conditional_3_Conditional_62_Template, 14, 5, "section", 30);
    \u0275\u0275conditionalCreate(63, PaginaEstudio_Conditional_3_Conditional_63_Template, 15, 4, "section", 31);
    \u0275\u0275conditionalCreate(64, PaginaEstudio_Conditional_3_Conditional_64_Template, 14, 2, "section", 32);
    \u0275\u0275conditionalCreate(65, PaginaEstudio_Conditional_3_Conditional_65_Template, 16, 4, "section", 33);
    \u0275\u0275domElementStart(66, "footer", 34)(67, "div")(68, "strong");
    \u0275\u0275text(69);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(70, "span");
    \u0275\u0275text(71);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(72, "a", 35);
    \u0275\u0275text(73, " Publicado com Fl\xEAiva ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(74, "footer", 36)(75, "span");
    \u0275\u0275text(76, "Publicado com");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(77, "span", 37);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_13_0;
    let tmp_14_0;
    const estudio_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("href", ctx_r1.urlCasa(estudio_r3.slug), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(estudio_r3.logo_url ? 3 : 4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(estudio_r3.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", estudio_r3.cidade, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.embedsPublicos().length > 0 ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_7_0 = ctx_r1.linkInstagram()) ? 14 : -1, tmp_7_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_8_0 = ctx_r1.linkWhatsapp()) ? 15 : -1, tmp_8_0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" /", estudio_r3.slug, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(estudio_r3.cidade ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(estudio_r3.nome);
    \u0275\u0275advance();
    \u0275\u0275conditional(estudio_r3.descricao ? 25 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_13_0 = ctx_r1.linkWhatsapp()) ? 27 : -1, tmp_13_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_14_0 = ctx_r1.linkInstagram()) ? 28 : -1, tmp_14_0);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("sem-logo", !estudio_r3.logo_url);
    \u0275\u0275advance();
    \u0275\u0275conditional(estudio_r3.logo_url ? 37 : 38);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(estudio_r3.nome);
    \u0275\u0275advance();
    \u0275\u0275conditional(estudio_r3.cidade ? 44 : -1);
    \u0275\u0275advance(18);
    \u0275\u0275conditional(ctx_r1.embedsPublicos().length > 0 ? 62 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dados.albuns().length > 0 ? 63 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dados.servicos().length > 0 ? 64 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(estudio_r3.descricao || estudio_r3.cidade || ctx_r1.linkWhatsapp() || ctx_r1.linkInstagram() ? 65 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(estudio_r3.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xA9 ", ctx_r1.anoAtual);
  }
}
var PaginaEstudio = class _PaginaEstudio {
  dados = inject(DadosPaginaEstudio);
  rota = inject(ActivatedRoute);
  sanitizador = inject(DomSanitizer);
  tituloPagina = inject(Title);
  slug = "";
  constructor() {
    effect(() => {
      const estudio = this.dados.estudio();
      this.tituloPagina.setTitle(estudio ? `${estudio.nome} \u2014 Casa Fl\xEAiva` : "Casa Fl\xEAiva");
    });
  }
  inicialEstudio = computed(
    () => {
      const nome = this.dados.estudio()?.nome.trim();
      return nome?.charAt(0).toLocaleUpperCase("pt-BR") || "F";
    },
    ...ngDevMode ? [{ debugName: "inicialEstudio" }] : (
      /* istanbul ignore next */
      []
    )
  );
  linkWhatsapp = computed(
    () => {
      const telefone = this.dados.estudio()?.whatsapp;
      if (!telefone) {
        return null;
      }
      const numeros = telefone.replace(/\D/g, "");
      if (numeros.length < 10 || numeros.length > 15) {
        return null;
      }
      return `https://wa.me/${numeros}`;
    },
    ...ngDevMode ? [{ debugName: "linkWhatsapp" }] : (
      /* istanbul ignore next */
      []
    )
  );
  usuarioInstagram = computed(
    () => this.extrairUsuarioInstagram(this.dados.estudio()?.instagram),
    ...ngDevMode ? [{ debugName: "usuarioInstagram" }] : (
      /* istanbul ignore next */
      []
    )
  );
  linkInstagram = computed(
    () => {
      const usuario = this.usuarioInstagram();
      return usuario ? `https://www.instagram.com/${usuario}` : null;
    },
    ...ngDevMode ? [{ debugName: "linkInstagram" }] : (
      /* istanbul ignore next */
      []
    )
  );
  embedsPublicos = computed(
    () => this.dados.embeds().map((embed) => this.criarEmbedPublico(embed)).filter((embed) => embed !== null),
    ...ngDevMode ? [{ debugName: "embedsPublicos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  anoAtual = (/* @__PURE__ */ new Date()).getFullYear();
  ngOnInit() {
    this.slug = this.rota.snapshot.paramMap.get("slug") ?? "";
    void this.dados.carregar(this.slug);
  }
  recarregar() {
    void this.dados.carregar(this.slug);
  }
  urlCasa(slug) {
    const slugSeguro = encodeURIComponent(slug);
    if (this.usarDominiosFleiva()) {
      return `https://card.fleiva.com.br/${slugSeguro}`;
    }
    return `/estudio/${slugSeguro}`;
  }
  urlTrabalho(slug, albumId) {
    const slugSeguro = encodeURIComponent(slug);
    const albumIdSeguro = encodeURIComponent(albumId);
    if (this.usarDominiosFleiva()) {
      return `https://play.fleiva.com.br/${slugSeguro}/trabalho/${albumIdSeguro}`;
    }
    return `/estudio/${slugSeguro}/trabalho/${albumIdSeguro}`;
  }
  formatarPreco(valor) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(valor);
  }
  formatarDuracao(duracaoMinutos) {
    if (duracaoMinutos === null) {
      return null;
    }
    if (duracaoMinutos < 60) {
      return `${duracaoMinutos} min`;
    }
    const horas = Math.floor(duracaoMinutos / 60);
    const minutos = duracaoMinutos % 60;
    return minutos > 0 ? `${horas}h ${minutos}min` : `${horas}h`;
  }
  formatarOrdem(indice) {
    return String(indice + 1).padStart(2, "0");
  }
  rotuloQuantidadeFaixas(quantidade) {
    return quantidade === 1 ? "1 faixa" : `${quantidade} faixas`;
  }
  iniciaisAlbum(album) {
    const referencia = album.projeto || album.nome;
    return referencia.trim().split(/\s+/).filter(Boolean).slice(0, 2).map((palavra) => palavra.charAt(0)).join("").toLocaleUpperCase("pt-BR") || "FL";
  }
  usarDominiosFleiva() {
    if (typeof window === "undefined") {
      return false;
    }
    const hostname = window.location.hostname.trim().toLocaleLowerCase();
    return hostname === "fleiva.com.br" || hostname.endsWith(".fleiva.com.br");
  }
  criarEmbedPublico(embed) {
    const urlSegura = this.criarUrlEmbedSegura(embed);
    if (!urlSegura) {
      return null;
    }
    return {
      chave: `${embed.provedor}:${embed.url}`,
      provedor: embed.provedor,
      rotulo: embed.provedor === "spotify" ? "Spotify" : embed.provedor === "youtube" ? "YouTube" : "SoundCloud",
      src: this.sanitizador.bypassSecurityTrustResourceUrl(urlSegura)
    };
  }
  criarUrlEmbedSegura(embed) {
    try {
      const url = new URL(embed.url);
      if (url.protocol !== "https:") {
        return null;
      }
      if (embed.provedor === "spotify") {
        return this.criarUrlSpotify(url);
      }
      if (embed.provedor === "youtube") {
        return this.criarUrlYoutube(url);
      }
      if (embed.provedor === "soundcloud") {
        return this.criarUrlSoundCloud(url);
      }
      return null;
    } catch {
      return null;
    }
  }
  criarUrlSpotify(url) {
    if (url.hostname !== "open.spotify.com") {
      return null;
    }
    const partes = url.pathname.split("/").filter(Boolean);
    const tipo = partes[0];
    const id = partes[1];
    const tiposPermitidos = /* @__PURE__ */ new Set([
      "album",
      "artist",
      "episode",
      "playlist",
      "show",
      "track"
    ]);
    if (partes.length !== 2 || !tipo || !tiposPermitidos.has(tipo) || !id || !/^[a-zA-Z0-9]+$/.test(id)) {
      return null;
    }
    return `https://open.spotify.com/embed/${tipo}/${id}`;
  }
  criarUrlYoutube(url) {
    const hostname = url.hostname.replace(/^www\./, "").toLocaleLowerCase();
    let videoId = null;
    if (hostname === "youtu.be") {
      videoId = url.pathname.split("/").filter(Boolean)[0] ?? null;
    } else if (hostname === "youtube.com" || hostname === "music.youtube.com") {
      if (url.pathname === "/watch") {
        videoId = url.searchParams.get("v");
      }
    }
    if (!videoId || !/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
      return null;
    }
    return `https://www.youtube-nocookie.com/embed/${videoId}`;
  }
  criarUrlSoundCloud(url) {
    const hostname = url.hostname.replace(/^www\./, "").toLocaleLowerCase();
    const partes = url.pathname.split("/").filter(Boolean);
    if (hostname !== "soundcloud.com" || partes.length < 2) {
      return null;
    }
    const urlCanonica = `https://soundcloud.com${url.pathname}`;
    return `https://w.soundcloud.com/player/?url=${encodeURIComponent(urlCanonica)}&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=false`;
  }
  extrairUsuarioInstagram(valor) {
    if (!valor) {
      return null;
    }
    const texto = valor.trim();
    const usuario = texto.replace(/^(?:https?:\/\/)?(?:www\.)?instagram\.com\//i, "").replace(/^@/, "").split(/[/?#]/)[0].trim();
    return /^[a-zA-Z0-9._]{1,30}$/.test(usuario) ? usuario : null;
  }
  static \u0275fac = function PaginaEstudio_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginaEstudio)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginaEstudio, selectors: [["app-pagina-estudio"]], decls: 4, vars: 6, consts: [[1, "pagina-estudio"], [1, "estado-pagina"], [1, "estado-pagina", "estado-erro"], ["aria-hidden", "true", 1, "carregador"], [1, "codigo-estado"], ["type", "button", 3, "click"], [1, "topo"], [1, "marca", 3, "href"], [1, "logo-marca"], [3, "src", "alt"], [1, "identidade-topo"], [1, "rotulo-casa"], [1, "local-estudio"], ["aria-label", "Contato do est\xFAdio"], [3, "href"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "contato-topo", 3, "href"], [1, "hero"], [1, "conteudo-hero"], [1, "metadados"], [1, "indicador"], [1, "descricao"], [1, "acoes-hero"], ["target", "_blank", "rel", "noopener noreferrer", 1, "acao-principal", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "acao-secundaria", 3, "href"], ["aria-label", "Identidade do est\xFAdio", 1, "cartao-estudio"], [1, "centro-cartao"], [1, "logo-grande"], [1, "leitura-cartao"], ["aria-hidden", "true", 1, "rodape-hero"], ["id", "midia", 1, "embeds-publicos"], ["id", "trabalhos", 1, "albuns-publicos"], ["id", "servicos", 1, "servicos-publicos"], [1, "informacoes-publicas"], [1, "rodape-pagina"], ["href", "https://fleiva.com.br"], [1, "assinatura-fleiva"], ["role", "img", "aria-label", "Fl\xEAiva", 1, "assinatura-wordmark"], [1, "separador"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M5 12h14"], ["d", "m13 6 6 6-6 6"], [1, "cabecalho-secao-publica"], [1, "grade-embeds-publicos"], [1, "embed-publico"], [1, "moldura-embed"], ["loading", "lazy", "referrerpolicy", "strict-origin-when-cross-origin", "allow", "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture", "allowfullscreen", "", 3, "src", "title"], [1, "titulo-clicavel"], [1, "grade-albuns-publicos"], [1, "album-publico", 3, "href"], [1, "capa-album-publico"], [1, "numero-album"], [1, "conteudo-album-publico"], [1, "descricao-album-publico"], [1, "permissoes-album-publico"], [1, "permissao-ativa"], ["aria-hidden", "true"], [1, "grade-servicos-publicos"], [1, "servico-publico"], [1, "conteudo-servico-publico"], [1, "preco-publico"], [1, "titulo-secao"], [1, "grade-informacoes"], [1, "bloco-sobre"], [1, "bloco-contato"], [1, "rotulo"]], template: function PaginaEstudio_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "main", 0);
      \u0275\u0275conditionalCreate(1, PaginaEstudio_Conditional_1_Template, 4, 0, "section", 1)(2, PaginaEstudio_Conditional_2_Template, 9, 1, "section", 2)(3, PaginaEstudio_Conditional_3_Template, 78, 24);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275styleProp("--cor-estudio", ctx.dados.corPrincipal())("--contraste-estudio", ctx.dados.corContraste());
      \u0275\u0275attribute("data-tema", ctx.dados.temaPaginaPublica());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dados.carregando() ? 1 : ctx.dados.erro() ? 2 : (tmp_3_0 = ctx.dados.estudio()) ? 3 : -1, tmp_3_0);
    }
  }, styles: ['@charset "UTF-8";\n\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100dvh;\n}\n.pagina-estudio[_ngcontent-%COMP%] {\n  --cor-estudio: #1ed760;\n  --contraste-estudio: #07130c;\n  --fundo: #101210;\n  --fundo-elevado: #151815;\n  --superficie: #191c19;\n  --superficie-clara: #1e221e;\n  --superficie-hover: #252a25;\n  --texto: #f3f5f1;\n  --texto-suave: #adb3ad;\n  --texto-fraco: #747b75;\n  --borda: rgb(255 255 255 / 10%);\n  --borda-forte: rgb(255 255 255 / 17%);\n  position: relative;\n  min-height: 100dvh;\n  overflow: hidden;\n  isolation: isolate;\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--cor-estudio) 4%, transparent),\n      transparent 34rem),\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.02),\n      transparent 14rem),\n    var(--fundo);\n  color: var(--texto);\n}\n.pagina-estudio[data-tema=creme][_ngcontent-%COMP%] {\n  --fundo: #f1efe5;\n  --fundo-elevado: #f7f4eb;\n  --superficie: #faf8f1;\n  --superficie-clara: #ece8dc;\n  --superficie-hover: #e6e1d5;\n  --texto: #151815;\n  --texto-suave: #555b55;\n  --texto-fraco: #747970;\n  --borda: rgb(20 23 20 / 11%);\n  --borda-forte: rgb(20 23 20 / 20%);\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--cor-estudio) 5%, transparent),\n      transparent 34rem),\n    var(--fundo);\n}\n.pagina-estudio[data-tema=creme][_ngcontent-%COMP%]::before {\n  opacity: 0.15;\n  background-image: linear-gradient(rgba(20, 23, 20, 0.05) 0.0625rem, transparent 0.0625rem);\n}\n.pagina-estudio[data-tema=ameixa][_ngcontent-%COMP%] {\n  --fundo: #241820;\n  --fundo-elevado: #2a1d26;\n  --superficie: #31232c;\n  --superficie-clara: #392a34;\n  --superficie-hover: #44323e;\n  --texto: #f4efe5;\n  --texto-suave: #c6b9c0;\n  --texto-fraco: #91838b;\n  --borda: rgb(255 245 238 / 10%);\n  --borda-forte: rgb(255 245 238 / 18%);\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--cor-estudio) 6%, transparent),\n      transparent 34rem),\n    var(--fundo);\n}\n.pagina-estudio[data-tema=ameixa][_ngcontent-%COMP%]   .topo[_ngcontent-%COMP%]::before {\n  background: var(--fundo);\n}\n.pagina-estudio[data-tema=ameixa][_ngcontent-%COMP%]   .topo[_ngcontent-%COMP%] {\n  border-color: var(--borda);\n}\n.pagina-estudio[data-tema=ameixa][_ngcontent-%COMP%]   .marca[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.pagina-estudio[data-tema=ameixa][_ngcontent-%COMP%]   .topo[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.contato-topo), \n.pagina-estudio[data-tema=ameixa][_ngcontent-%COMP%]   .conteudo-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.pagina-estudio[data-tema=ameixa][_ngcontent-%COMP%]   .acao-secundaria[_ngcontent-%COMP%] {\n  color: var(--texto);\n}\n.pagina-estudio[data-tema=ameixa][_ngcontent-%COMP%]   .marca[_ngcontent-%COMP%]   .local-estudio[_ngcontent-%COMP%], \n.pagina-estudio[data-tema=ameixa][_ngcontent-%COMP%]   .metadados[_ngcontent-%COMP%], \n.pagina-estudio[data-tema=ameixa][_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%], \n.pagina-estudio[data-tema=ameixa][_ngcontent-%COMP%]   .rodape-hero[_ngcontent-%COMP%] {\n  color: var(--texto-suave);\n}\n.pagina-estudio[data-tema=ameixa][_ngcontent-%COMP%]   .logo-marca[_ngcontent-%COMP%] {\n  color: var(--texto);\n  background:\n    linear-gradient(\n      145deg,\n      color-mix(in srgb, var(--cor-estudio) 12%, transparent),\n      var(--superficie));\n}\n.pagina-estudio[data-tema=ameixa][_ngcontent-%COMP%]   .topo[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.contato-topo):hover {\n  color: var(--texto);\n  border-color: var(--borda-forte);\n  background: rgba(255, 255, 255, 0.04);\n}\n.pagina-estudio[data-tema=ameixa][_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      115deg,\n      color-mix(in srgb, var(--cor-estudio) 8%, transparent),\n      transparent 32rem),\n    var(--fundo);\n}\n.pagina-estudio[data-tema=ameixa][_ngcontent-%COMP%]   .acao-secundaria[_ngcontent-%COMP%] {\n  border-color: var(--borda-forte);\n  background: rgba(255, 255, 255, 0.03);\n}\n.pagina-estudio[data-tema=ameixa][_ngcontent-%COMP%]   .acao-secundaria[_ngcontent-%COMP%]:hover {\n  border-color: color-mix(in srgb, var(--cor-estudio) 36%, var(--borda-forte));\n  background: rgba(255, 255, 255, 0.06);\n}\n.pagina-estudio[_ngcontent-%COMP%]::before {\n  position: fixed;\n  z-index: -2;\n  inset: 0;\n  pointer-events: none;\n  content: "";\n  opacity: 0.2;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.017) 0.0625rem, transparent 0.0625rem);\n  background-size: 100% 0.25rem;\n}\n.topo[_ngcontent-%COMP%], \n.hero[_ngcontent-%COMP%], \n.embeds-publicos[_ngcontent-%COMP%], \n.albuns-publicos[_ngcontent-%COMP%], \n.servicos-publicos[_ngcontent-%COMP%], \n.informacoes-publicas[_ngcontent-%COMP%], \n.rodape-pagina[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: min(78rem, 100% - 3rem);\n  margin-inline: auto;\n}\n.topo[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 5.4rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  border-top: 0.0625rem solid rgba(20, 23, 20, 0.22);\n  border-bottom: 0.0625rem solid rgba(20, 23, 20, 0.14);\n}\n.topo[_ngcontent-%COMP%]::before {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 100vw;\n  background: #f1efe5;\n  content: "";\n  transform: translateX(-50%);\n}\n.topo[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: 0;\n  bottom: -0.0625rem;\n  width: min(12rem, 32vw);\n  height: 0.16rem;\n  background: var(--cor-estudio);\n  content: "";\n}\n.marca[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.85rem;\n}\n.marca[_ngcontent-%COMP%]    > .identidade-topo[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.11rem;\n}\n.marca[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  max-width: 20rem;\n  overflow: hidden;\n  color: #151815;\n  font-size: 0.82rem;\n  font-weight: 750;\n  letter-spacing: 0.055em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.marca[_ngcontent-%COMP%]   .rotulo-casa[_ngcontent-%COMP%] {\n  color: var(--cor-estudio);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.49rem;\n  font-weight: 750;\n  letter-spacing: 0.14em;\n}\n.marca[_ngcontent-%COMP%]   .local-estudio[_ngcontent-%COMP%] {\n  color: #71766f;\n  font-size: 0.54rem;\n  font-weight: 650;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.logo-marca[_ngcontent-%COMP%] {\n  display: grid;\n  width: 3rem;\n  height: 3rem;\n  flex: 0 0 auto;\n  place-items: center;\n  overflow: hidden;\n  color: #151815;\n  background:\n    linear-gradient(\n      145deg,\n      color-mix(in srgb, var(--cor-estudio) 11%, transparent),\n      #f8f6ed);\n  border: 0.0625rem solid color-mix(in srgb, var(--cor-estudio) 32%, var(--borda-forte));\n  border-radius: 0;\n  font-size: 1rem;\n  font-weight: 800;\n}\n.logo-marca[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  object-fit: scale-down;\n  object-position: center;\n}\n.topo[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n}\n.topo[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 2.45rem;\n  align-items: center;\n  justify-content: center;\n  padding: 0 0.85rem;\n  color: #555b55;\n  border: 0.0625rem solid transparent;\n  border-radius: 0;\n  font-size: 0.67rem;\n  font-weight: 750;\n  letter-spacing: 0.035em;\n  text-transform: uppercase;\n  transition:\n    color 150ms ease,\n    border-color 150ms ease,\n    background-color 150ms ease,\n    transform 150ms ease;\n}\n.topo[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #151815;\n  border-color: rgba(20, 23, 20, 0.2);\n  background: rgba(20, 23, 20, 0.04);\n}\n.topo[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .contato-topo[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n  background: var(--cor-estudio);\n  color: var(--contraste-estudio);\n  border-color: var(--cor-estudio);\n  box-shadow: 0.2rem 0.2rem 0 color-mix(in srgb, var(--cor-estudio) 32%, transparent);\n}\n.topo[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .contato-topo[_ngcontent-%COMP%]:hover {\n  color: var(--contraste-estudio);\n  border-color: var(--cor-estudio);\n  background: var(--cor-estudio);\n  filter: brightness(1.07);\n  transform: translateY(-0.08rem);\n}\n.hero[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: calc(100dvh - 5.4rem);\n  grid-template-columns: minmax(0, 1.18fr) minmax(21rem, 0.82fr);\n  align-items: center;\n  column-gap: clamp(3rem, 7vw, 7rem);\n  row-gap: 0;\n  padding: clamp(4rem, 8vw, 7rem) 0 0;\n}\n.hero[_ngcontent-%COMP%]::before {\n  position: absolute;\n  z-index: -2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 100vw;\n  border-bottom: 0.4rem solid var(--cor-estudio);\n  background:\n    linear-gradient(\n      115deg,\n      color-mix(in srgb, var(--cor-estudio) 8%, transparent),\n      transparent 32rem),\n    #f1efe5;\n  content: "";\n  transform: translateX(-50%);\n}\n.hero[_ngcontent-%COMP%]::after {\n  position: absolute;\n  z-index: -1;\n  top: 8%;\n  right: -18rem;\n  width: min(52rem, 70vw);\n  aspect-ratio: 1.35;\n  background:\n    repeating-radial-gradient(\n      ellipse at center,\n      transparent 0 0.42rem,\n      color-mix(in srgb, var(--cor-estudio) 23%, transparent) 0.46rem 0.51rem);\n  content: "";\n  opacity: 0.55;\n  pointer-events: none;\n  transform: rotate(-8deg) scaleY(0.6);\n}\n.conteudo-hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 0;\n}\n.conteudo-hero[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: -2.5rem;\n  left: 0;\n  width: 4.5rem;\n  height: 0.22rem;\n  background:\n    linear-gradient(\n      90deg,\n      var(--cor-estudio) 0 62%,\n      var(--borda-forte) 62%);\n  content: "";\n}\n.metadados[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.55rem;\n  color: #686e68;\n  font-family: var(--font-mono, monospace);\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.13em;\n}\n.indicador[_ngcontent-%COMP%] {\n  width: 0.45rem;\n  height: 0.45rem;\n  flex: 0 0 auto;\n  background: var(--cor-estudio);\n  border-radius: 50%;\n  box-shadow: 0 0 0.7rem color-mix(in srgb, var(--cor-estudio) 65%, transparent), 0 0 1.5rem color-mix(in srgb, var(--cor-estudio) 25%, transparent);\n}\n.separador[_ngcontent-%COMP%] {\n  color: var(--cor-estudio);\n}\n.conteudo-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 10ch;\n  margin: 1.25rem 0 1.65rem;\n  color: #111411;\n  font-size: clamp(3.7rem, 8.6vw, 7.7rem);\n  font-weight: 760;\n  line-height: 0.88;\n  letter-spacing: -0.07em;\n  overflow-wrap: anywhere;\n}\n.descricao[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  margin: 0;\n  color: #555b55;\n  font-size: clamp(1rem, 1.8vw, 1.16rem);\n  line-height: 1.72;\n  white-space: pre-wrap;\n}\n.acoes-hero[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.7rem;\n  margin-top: 2rem;\n}\n.acao-principal[_ngcontent-%COMP%], \n.acao-secundaria[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 3rem;\n  align-items: center;\n  justify-content: center;\n  gap: 1.1rem;\n  padding: 0 1.1rem;\n  border-radius: 0;\n  font-size: 0.69rem;\n  font-weight: 780;\n  letter-spacing: 0.035em;\n  text-transform: uppercase;\n  transition:\n    transform 150ms ease,\n    background-color 150ms ease,\n    border-color 150ms ease,\n    color 150ms ease;\n}\n.acao-principal[_ngcontent-%COMP%]:hover, \n.acao-secundaria[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.12rem);\n}\n.acao-principal[_ngcontent-%COMP%] {\n  background: var(--cor-estudio);\n  color: var(--contraste-estudio);\n  box-shadow: 0.22rem 0.22rem 0 color-mix(in srgb, var(--cor-estudio) 34%, transparent);\n}\n.acao-principal[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.05rem;\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.8;\n}\n.acao-principal[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.07);\n}\n.acao-secundaria[_ngcontent-%COMP%] {\n  color: #151815;\n  border: 0.0625rem solid rgba(20, 23, 20, 0.24);\n  background: rgba(255, 255, 255, 0.34);\n}\n.acao-secundaria[_ngcontent-%COMP%]:hover {\n  border-color: rgba(20, 23, 20, 0.42);\n  background: rgba(255, 255, 255, 0.62);\n}\n.cartao-estudio[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--cor-estudio) 10%, transparent),\n      transparent 48%),\n    var(--superficie);\n  border: 0.0625rem solid var(--borda-forte);\n  border-radius: 0;\n  box-shadow: 0.45rem 0.45rem 0 color-mix(in srgb, var(--cor-estudio) 72%, #111311), 0.82rem 0.82rem 0 rgba(0, 0, 0, 0.5);\n}\n.cartao-estudio[_ngcontent-%COMP%]::before {\n  position: absolute;\n  inset: 3.2rem 0 auto;\n  height: 0.0625rem;\n  pointer-events: none;\n  content: "";\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      color-mix(in srgb, var(--cor-estudio) 35%, transparent),\n      transparent);\n}\n.cartao-estudio[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: -9rem;\n  bottom: -11rem;\n  width: 23rem;\n  aspect-ratio: 1;\n  background:\n    repeating-radial-gradient(\n      ellipse at center,\n      transparent 0 0.24rem,\n      color-mix(in srgb, var(--cor-estudio) 28%, transparent) 0.27rem 0.32rem);\n  opacity: 0.25;\n  pointer-events: none;\n  content: "";\n  transform: rotate(-12deg) scaleY(0.74);\n}\n.cartao-estudio[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%], \n.cartao-estudio[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  min-height: 3rem;\n  padding: 0.7rem 1rem;\n  color: var(--texto-fraco);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.56rem;\n  font-weight: 650;\n  letter-spacing: 0.11em;\n}\n.cartao-estudio[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  border-bottom: 0.0625rem solid var(--borda);\n}\n.cartao-estudio[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n  border-top: 0.0625rem solid var(--borda);\n}\n.cartao-estudio[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  color: var(--cor-estudio);\n  font-size: inherit;\n  font-weight: 750;\n}\n.cartao-estudio[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 0.38rem;\n  height: 0.38rem;\n  flex: 0 0 auto;\n  background: currentColor;\n  border-radius: 50%;\n  box-shadow: 0 0 0.7rem currentColor;\n}\n.centro-cartao[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  min-height: 29rem;\n  display: grid;\n  grid-template-rows: minmax(0, 1fr) auto;\n  gap: 2rem;\n  padding: clamp(2rem, 5vw, 3rem);\n}\n.centro-cartao[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  width: 2rem;\n  height: 0.25rem;\n  content: "";\n  background:\n    linear-gradient(\n      90deg,\n      var(--cor-estudio) 0 20%,\n      transparent 20% 40%,\n      rgba(255, 255, 255, 0.16) 40% 60%,\n      transparent 60% 80%,\n      rgba(255, 255, 255, 0.16) 80%);\n}\n.logo-grande[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  width: 100%;\n  min-height: 15rem;\n  place-items: center;\n  place-self: center;\n  overflow: hidden;\n  color: var(--cor-estudio);\n  background: var(--fundo-elevado);\n  border: 0.0625rem solid var(--borda-forte);\n}\n.logo-grande[_ngcontent-%COMP%]:not(.sem-logo) {\n  aspect-ratio: 1;\n}\n.logo-grande[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  max-height: none;\n  object-fit: cover;\n  object-position: center;\n}\n.logo-grande[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  line-height: 1;\n}\n.logo-grande.sem-logo[_ngcontent-%COMP%] {\n  width: 8.5rem;\n  min-height: 8.5rem;\n  aspect-ratio: 1;\n  place-self: center;\n  background: var(--fundo-elevado);\n  border: 0.0625rem solid color-mix(in srgb, var(--cor-estudio) 42%, var(--borda-forte));\n  font-size: 4rem;\n  font-weight: 800;\n}\n.leitura-cartao[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  gap: 0.35rem;\n  padding-top: 1.3rem;\n  border-top: 0.0625rem solid var(--borda);\n}\n.leitura-cartao[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--cor-estudio);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.57rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n}\n.leitura-cartao[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  max-width: 100%;\n  overflow: hidden;\n  color: var(--texto);\n  font-size: clamp(1.25rem, 3vw, 2rem);\n  line-height: 1.05;\n  text-overflow: ellipsis;\n}\n.leitura-cartao[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--texto-fraco);\n  font-size: 0.75rem;\n}\n.rodape-hero[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-height: 3.85rem;\n  grid-column: 1/-1;\n  align-items: center;\n  gap: clamp(0.55rem, 1.5vw, 1.25rem);\n  margin-top: clamp(2.75rem, 5vw, 4rem);\n  padding: 0 1.1rem;\n  overflow: hidden;\n  color: var(--texto-suave);\n  background: var(--fundo-elevado);\n  border: 0.0625rem solid var(--borda-forte);\n  border-left: 0.28rem solid var(--cor-estudio);\n  box-shadow: 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.2);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.5rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  transform: translateY(50%);\n}\n.rodape-hero[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: -4rem;\n  right: -2rem;\n  width: 18rem;\n  aspect-ratio: 1.7;\n  background:\n    repeating-radial-gradient(\n      ellipse at center,\n      transparent 0 0.28rem,\n      color-mix(in srgb, var(--cor-estudio) 22%, transparent) 0.31rem 0.35rem);\n  content: "";\n  opacity: 0.32;\n  pointer-events: none;\n  transform: rotate(-7deg) scaleY(0.58);\n}\n.rodape-hero[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.rodape-hero[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 0.0625rem;\n  background: var(--borda-forte);\n}\n.rodape-hero[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--cor-estudio);\n  font-size: inherit;\n}\n.embeds-publicos[_ngcontent-%COMP%], \n.albuns-publicos[_ngcontent-%COMP%], \n.servicos-publicos[_ngcontent-%COMP%] {\n  padding: clamp(5rem, 9vw, 7rem) 0;\n  border-top: 0.0625rem solid var(--borda);\n  scroll-margin-top: 2rem;\n}\n.informacoes-publicas[_ngcontent-%COMP%] {\n  padding: clamp(5rem, 10vw, 8rem) 0;\n  border-top: 0.0625rem solid var(--borda);\n}\n.titulo-secao[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 2.5rem;\n}\n.titulo-secao[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.1rem;\n  height: 2.1rem;\n  flex: 0 0 auto;\n  place-items: center;\n  background: var(--cor-estudio);\n  color: var(--contraste-estudio);\n  border-radius: 50%;\n  font-family: var(--font-mono, monospace);\n  font-size: 0.62rem;\n  font-weight: 800;\n}\n.titulo-secao[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  color: var(--texto-fraco);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.13em;\n}\n.titulo-secao[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--texto);\n  font-size: clamp(1.8rem, 4vw, 2.8rem);\n  letter-spacing: -0.04em;\n}\n.grade-informacoes[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.25fr) minmax(17rem, 0.75fr);\n  gap: 1rem;\n}\n.bloco-sobre[_ngcontent-%COMP%], \n.bloco-contato[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: clamp(1.4rem, 4vw, 2.15rem);\n  background:\n    linear-gradient(\n      145deg,\n      rgba(255, 255, 255, 0.02),\n      transparent 45%),\n    var(--superficie);\n  border: 0.0625rem solid var(--borda);\n  border-radius: 0.45rem;\n}\n.rotulo[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 1.5rem;\n  color: var(--cor-estudio);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.58rem;\n  font-weight: 750;\n  letter-spacing: 0.14em;\n}\n.bloco-sobre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 45rem;\n  margin: 0;\n  color: var(--texto-suave);\n  font-size: 1rem;\n  line-height: 1.78;\n  white-space: pre-wrap;\n}\n.bloco-contato[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  display: grid;\n  margin: 0;\n}\n.bloco-contato[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.28rem;\n  padding: 0.95rem 0;\n  border-bottom: 0.0625rem solid var(--borda);\n}\n.bloco-contato[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n}\n.bloco-contato[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n  border-bottom: 0;\n}\n.bloco-contato[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--texto-fraco);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.58rem;\n  font-weight: 650;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.bloco-contato[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  min-width: 0;\n  margin: 0;\n  overflow-wrap: anywhere;\n  color: var(--texto);\n  font-size: 0.86rem;\n  font-weight: 650;\n}\n.bloco-contato[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: color 140ms ease;\n}\n.bloco-contato[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--cor-estudio);\n}\n.rodape-pagina[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 6rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  border-top: 0.0625rem solid var(--borda);\n  color: var(--texto-fraco);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.57rem;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n}\n.rodape-pagina[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.rodape-pagina[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--texto-suave);\n  font-size: inherit;\n}\n.rodape-pagina[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: color 140ms ease;\n}\n.rodape-pagina[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--cor-estudio);\n}\n.estado-pagina[_ngcontent-%COMP%] {\n  display: grid;\n  width: min(32rem, 100% - 2rem);\n  min-height: 100dvh;\n  align-content: center;\n  justify-items: center;\n  gap: 1rem;\n  margin: auto;\n  text-align: center;\n}\n.estado-pagina[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--texto);\n}\n.estado-pagina[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 27rem;\n  margin: 0;\n  color: var(--texto-suave);\n}\n.estado-pagina[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 2.75rem;\n  margin-top: 0.5rem;\n  padding: 0 1rem;\n  background: var(--cor-estudio);\n  color: var(--contraste-estudio);\n  border: 0;\n  border-radius: 0.3rem;\n  font-size: 0.75rem;\n  font-weight: 750;\n}\n.estado-pagina[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.07);\n}\n.codigo-estado[_ngcontent-%COMP%] {\n  color: var(--cor-estudio);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.65rem;\n  font-weight: 750;\n  letter-spacing: 0.16em;\n}\n.estado-erro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 7vw, 3.5rem);\n}\n.carregador[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border: 0.15rem solid var(--borda);\n  border-top-color: var(--cor-estudio);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_girar 700ms linear infinite;\n}\n@keyframes _ngcontent-%COMP%_girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.embeds-publicos[_ngcontent-%COMP%]::before {\n  display: flex;\n  min-height: 1.65rem;\n  align-items: center;\n  margin-bottom: 1.35rem;\n  padding: 0 0.7rem;\n  color: var(--texto-fraco);\n  border-left: 0.16rem solid var(--cor-estudio);\n  background: rgba(255, 255, 255, 0.025);\n  content: "CASA FL\\caIVA / SINAL EXTERNO";\n  font-family: var(--font-mono, monospace);\n  font-size: 0.49rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n}\n.grade-embeds-publicos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.85rem;\n}\n.grade-embeds-publicos.embed-unico[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 52rem);\n}\n.embed-publico[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  background: var(--superficie);\n  border: 0.0625rem solid var(--borda);\n  border-left: 0.22rem solid var(--cor-estudio);\n}\n.embed-publico[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 3rem;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 0.8rem;\n  padding: 0 1rem;\n  border-bottom: 0.0625rem solid var(--borda);\n  font-family: var(--font-mono, monospace);\n  text-transform: uppercase;\n}\n.embed-publico[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--cor-estudio);\n  font-size: 0.57rem;\n  font-weight: 750;\n  letter-spacing: 0.08em;\n}\n.embed-publico[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--texto);\n  font-size: 0.61rem;\n  letter-spacing: 0.1em;\n}\n.embed-publico[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--texto-fraco);\n  font-size: 0.49rem;\n  letter-spacing: 0.1em;\n}\n.moldura-embed[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 10.4rem;\n  background: var(--fundo-elevado);\n}\n.moldura-embed[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.embed-publico[data-provedor=youtube][_ngcontent-%COMP%]   .moldura-embed[_ngcontent-%COMP%] {\n  aspect-ratio: 16/9;\n}\n.embed-publico[data-provedor=spotify][_ngcontent-%COMP%]   .moldura-embed[_ngcontent-%COMP%] {\n  height: 22rem;\n}\n.embed-publico[data-provedor=soundcloud][_ngcontent-%COMP%]   .moldura-embed[_ngcontent-%COMP%] {\n  height: 10.4rem;\n}\n.albuns-publicos[_ngcontent-%COMP%]::before {\n  display: flex;\n  min-height: 1.65rem;\n  align-items: center;\n  margin-bottom: 1.35rem;\n  padding: 0 0.7rem;\n  color: var(--texto-fraco);\n  border-left: 0.16rem solid var(--cor-estudio);\n  background: rgba(255, 255, 255, 0.025);\n  content: "CASA FL\\caIVA / CAT\\c1LOGO P\\da BLICO";\n  font-family: var(--font-mono, monospace);\n  font-size: 0.49rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n}\n.grade-albuns-publicos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.85rem;\n}\n.album-publico[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  grid-template-columns: minmax(11rem, 0.82fr) minmax(0, 1.18fr);\n  overflow: hidden;\n  background: var(--sup);\n}\n.capa-album-publico[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  width: 100%;\n  aspect-ratio: 1/1;\n  place-items: center;\n  overflow: hidden;\n  background: color-mix(in srgb, var(--cor-estudio) 55%, #171a17);\n  color: var(--contraste-estudio);\n}\n.capa-album-publico[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  display: block;\n}\n.capa-album-publico[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.numero-album) {\n  font-size: clamp(2rem, 5vw, 3.8rem);\n  font-weight: 800;\n  letter-spacing: -0.08em;\n}\n.capa-album-publico[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.8rem;\n  bottom: 0.75rem;\n  left: 0.8rem;\n  overflow: hidden;\n  font-size: 0.53rem;\n  letter-spacing: 0.1em;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.numero-album[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  left: 0.75rem;\n  display: grid;\n  min-width: 2rem;\n  min-height: 1.55rem;\n  place-items: center;\n  padding-inline: 0.4rem;\n  background: rgba(8, 10, 8, 0.72);\n  color: #f3f5f1;\n  border-radius: 999rem;\n  font-family: var(--font-mono, monospace);\n  font-size: 0.55rem;\n}\n.conteudo-album-publico[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  grid-template-rows: auto 1fr auto;\n  gap: 1rem;\n  padding: 1.2rem;\n}\n.conteudo-album-publico[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.conteudo-album-publico[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.conteudo-album-publico[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.45rem;\n  color: var(--cor-estudio);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.55rem;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.conteudo-album-publico[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow-wrap: anywhere;\n  color: var(--texto);\n  font-size: clamp(1.25rem, 2.5vw, 1.8rem);\n  line-height: 1;\n}\n.conteudo-album-publico[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.4rem;\n  color: var(--texto-fraco);\n  font-size: 0.68rem;\n}\n.conteudo-album-publico[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  padding: 0.3rem 0.48rem;\n  color: var(--texto-suave);\n  border: 0.0625rem solid var(--borda);\n  border-radius: 999rem;\n  font-size: 0.55rem;\n  white-space: nowrap;\n}\n.descricao-album-publico[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  overflow: hidden;\n  margin: 0;\n  color: var(--texto-suave);\n  font-size: 0.76rem;\n  line-height: 1.6;\n  white-space: pre-wrap;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 4;\n}\n.permissoes-album-publico[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  padding-top: 0.8rem;\n  border-top: 0.0625rem solid var(--borda);\n}\n.permissoes-album-publico[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  height: 1.75rem;\n  align-items: center;\n  gap: 0.38rem;\n  padding: 0 0.5rem;\n  color: var(--texto-fraco);\n  border: 0.0625rem solid var(--borda);\n  border-radius: 999rem;\n  font-size: 0.54rem;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.permissoes-album-publico[_ngcontent-%COMP%]   .permissao-ativa[_ngcontent-%COMP%] {\n  color: var(--texto);\n  border-color: color-mix(in srgb, var(--cor-estudio) 28%, var(--borda));\n  background: color-mix(in srgb, var(--cor-estudio) 6%, transparent);\n}\n.permissoes-album-publico[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 0.35rem;\n  height: 0.35rem;\n  flex: 0 0 auto;\n  background: var(--cor-estudio);\n  border-radius: 50%;\n}\n.cabecalho-secao-publica[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n.cabecalho-secao-publica[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.4rem;\n  color: var(--cor-estudio);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.58rem;\n  font-weight: 750;\n  letter-spacing: 0.14em;\n}\n.cabecalho-secao-publica[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--texto);\n  font-size: clamp(2.2rem, 6vw, 4.2rem);\n  line-height: 0.95;\n  letter-spacing: -0.055em;\n}\n.cabecalho-secao-publica[_ngcontent-%COMP%]   .titulo-clicavel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n}\n.cabecalho-secao-publica[_ngcontent-%COMP%]   .titulo-clicavel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.cabecalho-secao-publica[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding-bottom: 0.3rem;\n  color: var(--texto-fraco);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.62rem;\n  text-transform: uppercase;\n}\n.grade-servicos-publicos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.servico-publico[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-width: 0;\n  min-height: 17rem;\n  grid-template-rows: auto 1fr auto;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      145deg,\n      color-mix(in srgb, var(--cor-estudio) 5%, transparent),\n      transparent 50%),\n    var(--superficie);\n  border: 0.0625rem solid var(--borda);\n  border-radius: 0.4rem;\n  transition:\n    transform 150ms ease,\n    border-color 150ms ease,\n    background-color 150ms ease;\n}\n.servico-publico[_ngcontent-%COMP%]::before {\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 0.16rem;\n  content: "";\n  background: var(--cor-estudio);\n  opacity: 0.7;\n}\n.servico-publico[_ngcontent-%COMP%]:hover {\n  border-color: color-mix(in srgb, var(--cor-estudio) 36%, var(--borda));\n  background-color: var(--superficie-clara);\n  transform: translateY(-0.16rem);\n}\n.servico-publico[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem 1.1rem;\n}\n.servico-publico[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--cor-estudio);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.6rem;\n  font-weight: 750;\n  letter-spacing: 0.08em;\n}\n.servico-publico[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.45rem;\n  color: var(--texto-fraco);\n  border: 0.0625rem solid var(--borda);\n  border-radius: 999rem;\n  font-size: 0.56rem;\n  white-space: nowrap;\n}\n.servico-publico[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 3rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0 1.1rem;\n  color: var(--texto-suave);\n  border-top: 0.0625rem solid var(--borda);\n  font-size: 0.63rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  transition: color 140ms ease, background-color 140ms ease;\n}\n.servico-publico[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--cor-estudio);\n  font-size: 0.9rem;\n}\n.servico-publico[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n  color: var(--texto);\n}\n.conteudo-servico-publico[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: center;\n  gap: 1.4rem;\n  padding: 1rem 1.1rem 1.7rem;\n}\n.conteudo-servico-publico[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  max-width: 18ch;\n  margin: 0;\n  color: var(--texto);\n  font-size: clamp(1.15rem, 2.5vw, 1.55rem);\n  line-height: 1.08;\n  letter-spacing: -0.04em;\n}\n.preco-publico[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: start;\n  gap: 0.25rem;\n}\n.preco-publico[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--cor-estudio);\n  font-size: clamp(1.5rem, 3vw, 2.1rem);\n  line-height: 1;\n  letter-spacing: -0.05em;\n}\n.preco-publico[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--texto-fraco);\n  font-size: 0.65rem;\n}\n@media (max-width: 60rem) {\n  .hero[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.8fr);\n    column-gap: 3rem;\n    row-gap: 0;\n  }\n  .conteudo-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(3.5rem, 8vw, 6rem);\n  }\n  .centro-cartao[_ngcontent-%COMP%] {\n    min-height: 26rem;\n    padding: 2rem;\n  }\n}\n@media (max-width: 58rem) {\n  .grade-embeds-publicos[_ngcontent-%COMP%], \n   .grade-albuns-publicos[_ngcontent-%COMP%], \n   .grade-servicos-publicos[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 52rem) {\n  .hero[_ngcontent-%COMP%], \n   .grade-informacoes[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero[_ngcontent-%COMP%] {\n    min-height: auto;\n    padding: 4rem 0 0;\n    row-gap: 2.5rem;\n  }\n  .conteudo-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    max-width: 100%;\n    font-size: clamp(2.6rem, 9vw, 4.5rem);\n    line-height: 0.92;\n    margin: 1rem 0 1.25rem;\n  }\n  .descricao[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    line-height: 1.65;\n  }\n  .acoes-hero[_ngcontent-%COMP%] {\n    margin-top: 1.75rem;\n  }\n  .cartao-estudio[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-self: stretch;\n    box-shadow: 0.3rem 0.3rem 0 color-mix(in srgb, var(--cor-estudio) 72%, #111311), 0.55rem 0.55rem 0 rgba(0, 0, 0, 0.5);\n  }\n  .centro-cartao[_ngcontent-%COMP%] {\n    min-height: 0;\n    gap: 1.25rem;\n    padding: 1.5rem;\n  }\n  .logo-grande[_ngcontent-%COMP%]:not(.sem-logo) {\n    aspect-ratio: 1;\n    min-height: 0;\n  }\n  .rodape-hero[_ngcontent-%COMP%] {\n    transform: none;\n    margin-top: 2rem;\n    padding-block: 0.75rem;\n  }\n}\n@media (max-width: 38rem) {\n  .pagina-estudio[_ngcontent-%COMP%] {\n    overflow-x: clip;\n  }\n  .topo[_ngcontent-%COMP%], \n   .hero[_ngcontent-%COMP%], \n   .embeds-publicos[_ngcontent-%COMP%], \n   .albuns-publicos[_ngcontent-%COMP%], \n   .servicos-publicos[_ngcontent-%COMP%], \n   .informacoes-publicas[_ngcontent-%COMP%], \n   .rodape-pagina[_ngcontent-%COMP%] {\n    width: min(78rem, 100% - 2rem);\n  }\n  .topo[_ngcontent-%COMP%] {\n    min-height: auto;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    gap: 0.75rem;\n    padding-block: 0.75rem;\n  }\n  .marca[_ngcontent-%COMP%] {\n    gap: 0.6rem;\n  }\n  .marca[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    max-width: 9rem;\n    font-size: 0.7rem;\n  }\n  .marca[_ngcontent-%COMP%]   .local-estudio[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .marca[_ngcontent-%COMP%]   .rotulo-casa[_ngcontent-%COMP%] {\n    font-size: 0.45rem;\n  }\n  .logo-marca[_ngcontent-%COMP%] {\n    width: 2.35rem;\n    height: 2.35rem;\n  }\n  .topo[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-wrap: wrap;\n    gap: 0.4rem;\n  }\n  .topo[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    min-height: 2.5rem;\n    padding-inline: 0.7rem;\n    font-size: 0.58rem;\n  }\n  .topo[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .contato-topo[_ngcontent-%COMP%] {\n    margin: 0;\n    flex: 1 1 100%;\n  }\n  .hero[_ngcontent-%COMP%] {\n    padding: 3.5rem 0 0;\n  }\n  .conteudo-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    font-size: clamp(2.6rem, 15vw, 4.5rem);\n    line-height: 0.9;\n  }\n  .descricao[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n    line-height: 1.65;\n  }\n  .acoes-hero[_ngcontent-%COMP%] {\n    display: grid;\n    margin-top: 1.5rem;\n  }\n  .acoes-hero[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .cartao-estudio[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-self: stretch;\n  }\n  .centro-cartao[_ngcontent-%COMP%] {\n    min-height: 21rem;\n    gap: 1.5rem;\n    padding: 1.5rem;\n  }\n  .logo-grande[_ngcontent-%COMP%] {\n    min-height: 12rem;\n  }\n  .logo-grande.sem-logo[_ngcontent-%COMP%] {\n    width: 6.5rem;\n    min-height: 6.5rem;\n    font-size: 3rem;\n  }\n  .leitura-cartao[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .rodape-hero[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n    padding-block: 0.9rem;\n    transform: none;\n    column-gap: 0.55rem;\n    font-size: 0.45rem;\n  }\n  .rodape-hero[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    width: 0.8rem;\n  }\n  .embeds-publicos[_ngcontent-%COMP%], \n   .albuns-publicos[_ngcontent-%COMP%], \n   .servicos-publicos[_ngcontent-%COMP%], \n   .informacoes-publicas[_ngcontent-%COMP%] {\n    padding: 3.5rem 0;\n  }\n  .cabecalho-secao-publica[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 0.6rem;\n    margin-bottom: 1.5rem;\n  }\n  .cabecalho-secao-publica[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: clamp(2.2rem, 11vw, 3.4rem);\n  }\n  .grade-embeds-publicos[_ngcontent-%COMP%], \n   .grade-albuns-publicos[_ngcontent-%COMP%], \n   .grade-servicos-publicos[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .album-publico[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .conteudo-album-publico[_ngcontent-%COMP%] {\n    gap: 0.85rem;\n    padding: 1rem;\n  }\n  .permissoes-album-publico[_ngcontent-%COMP%] {\n    padding-top: 0.7rem;\n  }\n  .servico-publico[_ngcontent-%COMP%] {\n    min-height: auto;\n  }\n  .conteudo-servico-publico[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem 1.5rem;\n  }\n  .titulo-secao[_ngcontent-%COMP%] {\n    margin-bottom: 1.75rem;\n  }\n  .bloco-sobre[_ngcontent-%COMP%], \n   .bloco-contato[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .rodape-pagina[_ngcontent-%COMP%] {\n    min-height: 7rem;\n    align-items: flex-start;\n    flex-direction: column;\n    justify-content: center;\n    gap: 0.5rem;\n  }\n  .rodape-pagina[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .assinatura-fleiva[_ngcontent-%COMP%] {\n    margin-top: 1.75rem;\n  }\n}\n@media (max-width: 22rem) {\n  .conteudo-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(2.2rem, 14vw, 3.5rem);\n  }\n  .cabecalho-secao-publica[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: clamp(1.9rem, 10vw, 2.6rem);\n  }\n  .permissoes-album-publico[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n    padding-inline: 0.4rem;\n  }\n}\n@media (max-width: 52rem) and (orientation: landscape) and (max-height: 32rem) {\n  .hero[_ngcontent-%COMP%] {\n    min-height: auto;\n    padding-top: 3rem;\n  }\n  .cartao-estudio[_ngcontent-%COMP%]   .centro-cartao[_ngcontent-%COMP%] {\n    min-height: 18rem;\n  }\n}\n@supports (padding: env(safe-area-inset-left)) {\n  .topo[_ngcontent-%COMP%], \n   .hero[_ngcontent-%COMP%], \n   .embeds-publicos[_ngcontent-%COMP%], \n   .albuns-publicos[_ngcontent-%COMP%], \n   .servicos-publicos[_ngcontent-%COMP%], \n   .informacoes-publicas[_ngcontent-%COMP%], \n   .rodape-pagina[_ngcontent-%COMP%] {\n    padding-inline: max(1rem, env(safe-area-inset-left)) max(1rem, env(safe-area-inset-right));\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .carregador[_ngcontent-%COMP%] {\n    animation-duration: 1.5s;\n  }\n  .topo[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n   .acao-principal[_ngcontent-%COMP%], \n   .acao-secundaria[_ngcontent-%COMP%], \n   .bloco-contato[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n   .rodape-pagina[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.assinatura-fleiva[_ngcontent-%COMP%] {\n  display: flex;\n  width: fit-content;\n  align-items: center;\n  gap: 0.55rem;\n  margin: 2.5rem auto 0;\n  color: var(--texto-fraco);\n  font-size: 0.62rem;\n}\n.assinatura-wordmark[_ngcontent-%COMP%] {\n  width: 3.8rem;\n  aspect-ratio: 1256/596;\n  background: currentColor;\n  mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) center/contain no-repeat;\n  -webkit-mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) center/contain no-repeat;\n  opacity: 0.72;\n  transition: color 160ms ease, opacity 160ms ease;\n}\n.assinatura-fleiva[_ngcontent-%COMP%]:hover   .assinatura-wordmark[_ngcontent-%COMP%] {\n  color: var(--fleiva-verde, #5e886f);\n  opacity: 1;\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginaEstudio, [{
    type: Component,
    args: [{ selector: "app-pagina-estudio", standalone: true, imports: [], template: `<main
  class="pagina-estudio"
  [attr.data-tema]="dados.temaPaginaPublica()"
  [style.--cor-estudio]="dados.corPrincipal()"
  [style.--contraste-estudio]="dados.corContraste()"
>
  @if (dados.carregando()) {
    <section class="estado-pagina">
      <span class="carregador" aria-hidden="true"></span>
      <p>Carregando P\xE1gina...</p>
    </section>
  } @else if (dados.erro()) {
    <section class="estado-pagina estado-erro">
      <span class="codigo-estado">404</span>

      <h1>P\xE1gina indispon\xEDvel</h1>
      <p>{{ dados.erro() }}</p>

      <button
        type="button"
        (click)="recarregar()"
      >
        Tentar novamente
      </button>
    </section>
  } @else if (dados.estudio(); as estudio) {
    <header class="topo">
      <a
        class="marca"
        [href]="urlCasa(estudio.slug)"
      >
        <span class="logo-marca">
          @if (estudio.logo_url) {
            <img
              [src]="estudio.logo_url"
              [alt]="'Logo de ' + estudio.nome"
            />
          } @else {
            {{ inicialEstudio() }}
          }
        </span>

        <span class="identidade-topo">
          <small class="rotulo-casa">
            CASA FL\xCAIVA
          </small>

          <strong>{{ estudio.nome }}</strong>

          <small class="local-estudio">
            {{ estudio.cidade}}
          </small>
        </span>
      </a>

      <nav aria-label="Contato do est\xFAdio">
        @if (embedsPublicos().length > 0) {
          <a href="https://play.fleiva.com.br/{{estudio.slug}}">
            Ouvir
          </a>
        }

        @if (linkInstagram(); as instagram) {
          <a
            [href]="instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        }

        @if (linkWhatsapp(); as whatsapp) {
          <a
            class="contato-topo"
            [href]="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsapp
          </a>
        }
      </nav>
    </header>

    <section class="hero">
      <div class="conteudo-hero">
        <div class="metadados">
          <span class="indicador"></span>
          <span> /{{estudio.slug}} </span>

          @if (estudio.cidade) {
            <span class="separador"> - </span>
            <span>{{ estudio.cidade }}</span>
          }
        </div>

        <h1>{{ estudio.nome }}</h1>

        @if (estudio.descricao) {
          <p class="descricao">
            {{ estudio.descricao }}
          </p>
        }

        <div class="acoes-hero">
          @if (linkWhatsapp(); as whatsapp) {
            <a
              class="acao-principal"
              [href]="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Falar com o est\xFAdio</span>

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          }

          @if (linkInstagram(); as instagram) {
            <a
              class="acao-secundaria"
              [href]="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              @{{ usuarioInstagram() }}
            </a>
          }
        </div>
      </div>

      <div
        class="cartao-estudio"
        aria-label="Identidade do est\xFAdio"
      >
        <header>
          <span>CASA FL\xCAIVA / IDENTIDADE</span>
          <span>PUBLIC PROFILE</span>
        </header>

        <div class="centro-cartao">
          <div
            class="logo-grande"
            [class.sem-logo]="!estudio.logo_url"
          >
            @if (estudio.logo_url) {
  <img
    [src]="estudio.logo_url"
    [alt]="'Identidade visual de ' + estudio.nome"
  />
} @else {
  <span>{{ inicialEstudio() }}</span>
}
          </div>

          <div class="leitura-cartao">
            <span>IDENTIFICA\xC7\xC3O</span>
            <strong>{{ estudio.nome }}</strong>

            @if (estudio.cidade) {
              <small>{{ estudio.cidade }}</small>
            }
          </div>
        </div>

        <footer>
          <span>P\xC1GINA OFICIAL</span>

          <strong>
            <i></i>
            ONLINE
          </strong>
        </footer>
      </div>

      <footer class="rodape-hero" aria-hidden="true">
        <span>IDENTIDADE</span>
        <i></i>
        <span>SERVI\xC7OS</span>
        <i></i>
        <span>TRABALHOS</span>

        <strong>PUBLICADO ATRAV\xC9S DA CASA FL\xCAIVA</strong>
      </footer>
    </section>

    @if (embedsPublicos().length > 0) {
      <section
        id="midia"
        class="embeds-publicos"
      >
        <header class="cabecalho-secao-publica">
          <div>
            <p>SELE\xC7\xC3O DE {{ estudio.nome }}</p>
            <h2>Ou\xE7a e assista</h2>
          </div>

          <span>
            {{ embedsPublicos().length }}

            @if (embedsPublicos().length === 1) {
              destaque
            } @else {
              destaques
            }
          </span>
        </header>

        <div
          class="grade-embeds-publicos"
          [class.embed-unico]="
            embedsPublicos().length === 1
          "
        >
          @for (
            embed of embedsPublicos();
            track embed.chave;
            let indice = $index
          ) {
            <article
              class="embed-publico"
              [attr.data-provedor]="embed.provedor"
            >
              <header>
                <span>{{ formatarOrdem(indice) }}</span>
                <strong>{{ embed.rotulo }}</strong>
                <small>PLAYER OFICIAL</small>
              </header>

              <div class="moldura-embed">
                <iframe
                  [src]="embed.src"
                  [title]="
                    'Conte\xFAdo de ' +
                    embed.rotulo +
                    ' selecionado por ' +
                    estudio.nome
                  "
                  loading="lazy"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </article>
          }
        </div>
      </section>
    }

    @if (dados.albuns().length > 0) {
      <section
        id="trabalhos"
        class="albuns-publicos"
      >
        <header class="cabecalho-secao-publica">
          <div>

            <p >TRABALHOS SELECIONADOS</p>

             <h2 class="titulo-clicavel" >
                        <a href="https://play.fleiva.com.br/{{estudio.slug}}">Cat\xE1logo</a>
             </h2>
          </div>

          <span>
            {{ dados.albuns().length }}

            @if (dados.albuns().length === 1) {
              trabalho
            } @else {
              trabalhos
            }
          </span>
        </header>

        <div class="grade-albuns-publicos">
          @for (
            album of dados.albuns();
            track album.id;
            let indice = $index
          ) {
            <a
              class="album-publico"
              [href]="
                urlTrabalho(
                  estudio.slug,
                  album.id
                )
              "
              [attr.aria-label]="
                'Abrir ' +
                album.nome +
                ' na Toca Fl\xEAiva'
              "
            >
              <div class="capa-album-publico">
                @if (album.capa_url) {
                  <img
                    [src]="album.capa_url"
                    [alt]="'Capa de ' + album.nome"
                  />
                } @else {
                  <span>{{ iniciaisAlbum(album) }}</span>
                  <small>{{ album.projeto }}</small>
                }

                <span class="numero-album">
                  {{ formatarOrdem(indice) }}
                </span>
              </div>

              <div class="conteudo-album-publico">
                <header>
                  <div>

                    <p>
                     {{
  album.tipo === 'Envio'
    ? 'Processo'
    : (album.tipo || 'Trabalho')
}}
                    </p>

                    <h3>{{ album.nome }}</h3>
                    <span>{{ album.projeto }}</span>
                  </div>

                  <small>
                    {{
                      rotuloQuantidadeFaixas(
                        album.quantidade_faixas
                      )
                    }}
                  </small>
                </header>

                @if (album.descricao) {
                  <p class="descricao-album-publico">
                    {{ album.descricao }}
                  </p>
                }

                <footer class="permissoes-album-publico">
                  @if (album.reproducao_publica) {
                    <span class="permissao-ativa">
                      <i aria-hidden="true"></i>
                      Audi\xE7\xE3o liberada
                    </span>
                  }

                  @if (album.download_publico) {
                    <span class="permissao-ativa">
                      <i aria-hidden="true"></i>
                      Download liberado
                    </span>
                  }

                  @if (
                    !album.reproducao_publica &&
                    !album.download_publico
                  ) {
                    <span>
                      Apresenta\xE7\xE3o do trabalho
                    </span>
                  }
                </footer>
              </div>
            </a>
          }
        </div>
      </section>
    }

    @if (dados.servicos().length > 0) {
      <section
        id="servicos"
        class="servicos-publicos"
      >
        <header class="cabecalho-secao-publica">
          <div>
            <p>CAT\xC1LOGO DO EST\xDADIO</p>
            <h2>Servi\xE7os</h2>
          </div>

          <span>
            {{ dados.servicos().length }}

            @if (dados.servicos().length === 1) {
              servi\xE7o
            } @else {
              servi\xE7os
            }
          </span>
        </header>

        <div class="grade-servicos-publicos">
          @for (
            servico of dados.servicos();
            track servico.id;
            let indice = $index
          ) {
            <article class="servico-publico">
              <header>
                <span>
                  {{ formatarOrdem(indice) }}
                </span>

                @if (
                  formatarDuracao(
                    servico.duracao_minutos
                  );
                  as duracao
                ) {
                  <small>{{ duracao }}</small>
                }
              </header>

              <div class="conteudo-servico-publico">
                <h3>{{ servico.nome }}</h3>

                <div class="preco-publico">
                  <strong>
                    {{ formatarPreco(servico.preco) }}
                  </strong>

                  <span>
                    / {{ servico.tipo_cobranca }}
                  </span>
                </div>
              </div>

              @if (linkWhatsapp(); as whatsapp) {
                <a
                  [href]="whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar disponibilidade
                  <span aria-hidden="true">\u2197</span>
                </a>
              }
            </article>
          }
        </div>
      </section>
    }

    @if (
      estudio.descricao ||
      estudio.cidade ||
      linkWhatsapp() ||
      linkInstagram()
    ) {
      <section class="informacoes-publicas">
        <div class="titulo-secao">
          <div>
            <p>CONTATO E INFORMA\xC7\xD5ES</p>
            <h2>Conhe\xE7a o est\xFAdio</h2>
          </div>
        </div>

        <div class="grade-informacoes">
          @if (estudio.descricao) {
            <article class="bloco-sobre">
              <span class="rotulo">SOBRE</span>
              <p>{{ estudio.descricao }}</p>
            </article>
          }

          <article class="bloco-contato">
            <span class="rotulo">INFORMA\xC7\xD5ES</span>

            <dl>
              @if (estudio.cidade) {
                <div>
                  <dt>Localiza\xE7\xE3o</dt>
                  <dd>{{ estudio.cidade }}</dd>
                </div>
              }

              @if (linkWhatsapp(); as whatsapp) {
                <div>
                  <dt>WhatsApp</dt>

                  <dd>
                    <a
                      [href]="whatsapp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {{ estudio.whatsapp }}
                    </a>
                  </dd>
                </div>
              }

              @if (linkInstagram(); as instagram) {
                <div>
                  <dt>Instagram</dt>

                  <dd>
                    <a
                      [href]="instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @{{ usuarioInstagram() }}
                    </a>
                  </dd>
                </div>
              }
            </dl>
          </article>
        </div>
      </section>
    }

    <footer class="rodape-pagina">
      <div>
        <strong>{{ estudio.nome }}</strong>
        <span>\xA9 {{ anoAtual }}</span>
      </div>

      <a href="https://fleiva.com.br">
        Publicado com Fl\xEAiva
      </a>
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
`, styles: ['@charset "UTF-8";\n\n/* apps/studio-dash/src/app/paginas/pagina-estudio/pagina-estudio.scss */\n:host {\n  display: block;\n  min-height: 100dvh;\n}\n.pagina-estudio {\n  --cor-estudio: #1ed760;\n  --contraste-estudio: #07130c;\n  --fundo: #101210;\n  --fundo-elevado: #151815;\n  --superficie: #191c19;\n  --superficie-clara: #1e221e;\n  --superficie-hover: #252a25;\n  --texto: #f3f5f1;\n  --texto-suave: #adb3ad;\n  --texto-fraco: #747b75;\n  --borda: rgb(255 255 255 / 10%);\n  --borda-forte: rgb(255 255 255 / 17%);\n  position: relative;\n  min-height: 100dvh;\n  overflow: hidden;\n  isolation: isolate;\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--cor-estudio) 4%, transparent),\n      transparent 34rem),\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.02),\n      transparent 14rem),\n    var(--fundo);\n  color: var(--texto);\n}\n.pagina-estudio[data-tema=creme] {\n  --fundo: #f1efe5;\n  --fundo-elevado: #f7f4eb;\n  --superficie: #faf8f1;\n  --superficie-clara: #ece8dc;\n  --superficie-hover: #e6e1d5;\n  --texto: #151815;\n  --texto-suave: #555b55;\n  --texto-fraco: #747970;\n  --borda: rgb(20 23 20 / 11%);\n  --borda-forte: rgb(20 23 20 / 20%);\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--cor-estudio) 5%, transparent),\n      transparent 34rem),\n    var(--fundo);\n}\n.pagina-estudio[data-tema=creme]::before {\n  opacity: 0.15;\n  background-image: linear-gradient(rgba(20, 23, 20, 0.05) 0.0625rem, transparent 0.0625rem);\n}\n.pagina-estudio[data-tema=ameixa] {\n  --fundo: #241820;\n  --fundo-elevado: #2a1d26;\n  --superficie: #31232c;\n  --superficie-clara: #392a34;\n  --superficie-hover: #44323e;\n  --texto: #f4efe5;\n  --texto-suave: #c6b9c0;\n  --texto-fraco: #91838b;\n  --borda: rgb(255 245 238 / 10%);\n  --borda-forte: rgb(255 245 238 / 18%);\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--cor-estudio) 6%, transparent),\n      transparent 34rem),\n    var(--fundo);\n}\n.pagina-estudio[data-tema=ameixa] .topo::before {\n  background: var(--fundo);\n}\n.pagina-estudio[data-tema=ameixa] .topo {\n  border-color: var(--borda);\n}\n.pagina-estudio[data-tema=ameixa] .marca strong,\n.pagina-estudio[data-tema=ameixa] .topo nav a:not(.contato-topo),\n.pagina-estudio[data-tema=ameixa] .conteudo-hero h1,\n.pagina-estudio[data-tema=ameixa] .acao-secundaria {\n  color: var(--texto);\n}\n.pagina-estudio[data-tema=ameixa] .marca .local-estudio,\n.pagina-estudio[data-tema=ameixa] .metadados,\n.pagina-estudio[data-tema=ameixa] .descricao,\n.pagina-estudio[data-tema=ameixa] .rodape-hero {\n  color: var(--texto-suave);\n}\n.pagina-estudio[data-tema=ameixa] .logo-marca {\n  color: var(--texto);\n  background:\n    linear-gradient(\n      145deg,\n      color-mix(in srgb, var(--cor-estudio) 12%, transparent),\n      var(--superficie));\n}\n.pagina-estudio[data-tema=ameixa] .topo nav a:not(.contato-topo):hover {\n  color: var(--texto);\n  border-color: var(--borda-forte);\n  background: rgba(255, 255, 255, 0.04);\n}\n.pagina-estudio[data-tema=ameixa] .hero::before {\n  background:\n    linear-gradient(\n      115deg,\n      color-mix(in srgb, var(--cor-estudio) 8%, transparent),\n      transparent 32rem),\n    var(--fundo);\n}\n.pagina-estudio[data-tema=ameixa] .acao-secundaria {\n  border-color: var(--borda-forte);\n  background: rgba(255, 255, 255, 0.03);\n}\n.pagina-estudio[data-tema=ameixa] .acao-secundaria:hover {\n  border-color: color-mix(in srgb, var(--cor-estudio) 36%, var(--borda-forte));\n  background: rgba(255, 255, 255, 0.06);\n}\n.pagina-estudio::before {\n  position: fixed;\n  z-index: -2;\n  inset: 0;\n  pointer-events: none;\n  content: "";\n  opacity: 0.2;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.017) 0.0625rem, transparent 0.0625rem);\n  background-size: 100% 0.25rem;\n}\n.topo,\n.hero,\n.embeds-publicos,\n.albuns-publicos,\n.servicos-publicos,\n.informacoes-publicas,\n.rodape-pagina {\n  position: relative;\n  z-index: 1;\n  width: min(78rem, 100% - 3rem);\n  margin-inline: auto;\n}\n.topo {\n  display: flex;\n  min-height: 5.4rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  border-top: 0.0625rem solid rgba(20, 23, 20, 0.22);\n  border-bottom: 0.0625rem solid rgba(20, 23, 20, 0.14);\n}\n.topo::before {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 100vw;\n  background: #f1efe5;\n  content: "";\n  transform: translateX(-50%);\n}\n.topo::after {\n  position: absolute;\n  right: 0;\n  bottom: -0.0625rem;\n  width: min(12rem, 32vw);\n  height: 0.16rem;\n  background: var(--cor-estudio);\n  content: "";\n}\n.marca {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.85rem;\n}\n.marca > .identidade-topo {\n  display: grid;\n  min-width: 0;\n  gap: 0.11rem;\n}\n.marca strong {\n  max-width: 20rem;\n  overflow: hidden;\n  color: #151815;\n  font-size: 0.82rem;\n  font-weight: 750;\n  letter-spacing: 0.055em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.marca .rotulo-casa {\n  color: var(--cor-estudio);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.49rem;\n  font-weight: 750;\n  letter-spacing: 0.14em;\n}\n.marca .local-estudio {\n  color: #71766f;\n  font-size: 0.54rem;\n  font-weight: 650;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.logo-marca {\n  display: grid;\n  width: 3rem;\n  height: 3rem;\n  flex: 0 0 auto;\n  place-items: center;\n  overflow: hidden;\n  color: #151815;\n  background:\n    linear-gradient(\n      145deg,\n      color-mix(in srgb, var(--cor-estudio) 11%, transparent),\n      #f8f6ed);\n  border: 0.0625rem solid color-mix(in srgb, var(--cor-estudio) 32%, var(--borda-forte));\n  border-radius: 0;\n  font-size: 1rem;\n  font-weight: 800;\n}\n.logo-marca img {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  object-fit: scale-down;\n  object-position: center;\n}\n.topo nav {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n}\n.topo nav a {\n  display: inline-flex;\n  min-height: 2.45rem;\n  align-items: center;\n  justify-content: center;\n  padding: 0 0.85rem;\n  color: #555b55;\n  border: 0.0625rem solid transparent;\n  border-radius: 0;\n  font-size: 0.67rem;\n  font-weight: 750;\n  letter-spacing: 0.035em;\n  text-transform: uppercase;\n  transition:\n    color 150ms ease,\n    border-color 150ms ease,\n    background-color 150ms ease,\n    transform 150ms ease;\n}\n.topo nav a:hover {\n  color: #151815;\n  border-color: rgba(20, 23, 20, 0.2);\n  background: rgba(20, 23, 20, 0.04);\n}\n.topo nav .contato-topo {\n  margin-left: 0.25rem;\n  background: var(--cor-estudio);\n  color: var(--contraste-estudio);\n  border-color: var(--cor-estudio);\n  box-shadow: 0.2rem 0.2rem 0 color-mix(in srgb, var(--cor-estudio) 32%, transparent);\n}\n.topo nav .contato-topo:hover {\n  color: var(--contraste-estudio);\n  border-color: var(--cor-estudio);\n  background: var(--cor-estudio);\n  filter: brightness(1.07);\n  transform: translateY(-0.08rem);\n}\n.hero {\n  display: grid;\n  min-height: calc(100dvh - 5.4rem);\n  grid-template-columns: minmax(0, 1.18fr) minmax(21rem, 0.82fr);\n  align-items: center;\n  column-gap: clamp(3rem, 7vw, 7rem);\n  row-gap: 0;\n  padding: clamp(4rem, 8vw, 7rem) 0 0;\n}\n.hero::before {\n  position: absolute;\n  z-index: -2;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 100vw;\n  border-bottom: 0.4rem solid var(--cor-estudio);\n  background:\n    linear-gradient(\n      115deg,\n      color-mix(in srgb, var(--cor-estudio) 8%, transparent),\n      transparent 32rem),\n    #f1efe5;\n  content: "";\n  transform: translateX(-50%);\n}\n.hero::after {\n  position: absolute;\n  z-index: -1;\n  top: 8%;\n  right: -18rem;\n  width: min(52rem, 70vw);\n  aspect-ratio: 1.35;\n  background:\n    repeating-radial-gradient(\n      ellipse at center,\n      transparent 0 0.42rem,\n      color-mix(in srgb, var(--cor-estudio) 23%, transparent) 0.46rem 0.51rem);\n  content: "";\n  opacity: 0.55;\n  pointer-events: none;\n  transform: rotate(-8deg) scaleY(0.6);\n}\n.conteudo-hero {\n  position: relative;\n  min-width: 0;\n}\n.conteudo-hero::before {\n  position: absolute;\n  top: -2.5rem;\n  left: 0;\n  width: 4.5rem;\n  height: 0.22rem;\n  background:\n    linear-gradient(\n      90deg,\n      var(--cor-estudio) 0 62%,\n      var(--borda-forte) 62%);\n  content: "";\n}\n.metadados {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.55rem;\n  color: #686e68;\n  font-family: var(--font-mono, monospace);\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.13em;\n}\n.indicador {\n  width: 0.45rem;\n  height: 0.45rem;\n  flex: 0 0 auto;\n  background: var(--cor-estudio);\n  border-radius: 50%;\n  box-shadow: 0 0 0.7rem color-mix(in srgb, var(--cor-estudio) 65%, transparent), 0 0 1.5rem color-mix(in srgb, var(--cor-estudio) 25%, transparent);\n}\n.separador {\n  color: var(--cor-estudio);\n}\n.conteudo-hero h1 {\n  max-width: 10ch;\n  margin: 1.25rem 0 1.65rem;\n  color: #111411;\n  font-size: clamp(3.7rem, 8.6vw, 7.7rem);\n  font-weight: 760;\n  line-height: 0.88;\n  letter-spacing: -0.07em;\n  overflow-wrap: anywhere;\n}\n.descricao {\n  max-width: 42rem;\n  margin: 0;\n  color: #555b55;\n  font-size: clamp(1rem, 1.8vw, 1.16rem);\n  line-height: 1.72;\n  white-space: pre-wrap;\n}\n.acoes-hero {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.7rem;\n  margin-top: 2rem;\n}\n.acao-principal,\n.acao-secundaria {\n  display: inline-flex;\n  min-height: 3rem;\n  align-items: center;\n  justify-content: center;\n  gap: 1.1rem;\n  padding: 0 1.1rem;\n  border-radius: 0;\n  font-size: 0.69rem;\n  font-weight: 780;\n  letter-spacing: 0.035em;\n  text-transform: uppercase;\n  transition:\n    transform 150ms ease,\n    background-color 150ms ease,\n    border-color 150ms ease,\n    color 150ms ease;\n}\n.acao-principal:hover,\n.acao-secundaria:hover {\n  transform: translateY(-0.12rem);\n}\n.acao-principal {\n  background: var(--cor-estudio);\n  color: var(--contraste-estudio);\n  box-shadow: 0.22rem 0.22rem 0 color-mix(in srgb, var(--cor-estudio) 34%, transparent);\n}\n.acao-principal svg {\n  width: 1.05rem;\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.8;\n}\n.acao-principal:hover {\n  filter: brightness(1.07);\n}\n.acao-secundaria {\n  color: #151815;\n  border: 0.0625rem solid rgba(20, 23, 20, 0.24);\n  background: rgba(255, 255, 255, 0.34);\n}\n.acao-secundaria:hover {\n  border-color: rgba(20, 23, 20, 0.42);\n  background: rgba(255, 255, 255, 0.62);\n}\n.cartao-estudio {\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--cor-estudio) 10%, transparent),\n      transparent 48%),\n    var(--superficie);\n  border: 0.0625rem solid var(--borda-forte);\n  border-radius: 0;\n  box-shadow: 0.45rem 0.45rem 0 color-mix(in srgb, var(--cor-estudio) 72%, #111311), 0.82rem 0.82rem 0 rgba(0, 0, 0, 0.5);\n}\n.cartao-estudio::before {\n  position: absolute;\n  inset: 3.2rem 0 auto;\n  height: 0.0625rem;\n  pointer-events: none;\n  content: "";\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      color-mix(in srgb, var(--cor-estudio) 35%, transparent),\n      transparent);\n}\n.cartao-estudio::after {\n  position: absolute;\n  right: -9rem;\n  bottom: -11rem;\n  width: 23rem;\n  aspect-ratio: 1;\n  background:\n    repeating-radial-gradient(\n      ellipse at center,\n      transparent 0 0.24rem,\n      color-mix(in srgb, var(--cor-estudio) 28%, transparent) 0.27rem 0.32rem);\n  opacity: 0.25;\n  pointer-events: none;\n  content: "";\n  transform: rotate(-12deg) scaleY(0.74);\n}\n.cartao-estudio > header,\n.cartao-estudio > footer {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  min-height: 3rem;\n  padding: 0.7rem 1rem;\n  color: var(--texto-fraco);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.56rem;\n  font-weight: 650;\n  letter-spacing: 0.11em;\n}\n.cartao-estudio > header {\n  border-bottom: 0.0625rem solid var(--borda);\n}\n.cartao-estudio > footer {\n  border-top: 0.0625rem solid var(--borda);\n}\n.cartao-estudio > footer strong {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  color: var(--cor-estudio);\n  font-size: inherit;\n  font-weight: 750;\n}\n.cartao-estudio > footer i {\n  width: 0.38rem;\n  height: 0.38rem;\n  flex: 0 0 auto;\n  background: currentColor;\n  border-radius: 50%;\n  box-shadow: 0 0 0.7rem currentColor;\n}\n.centro-cartao {\n  position: relative;\n  z-index: 1;\n  min-height: 29rem;\n  display: grid;\n  grid-template-rows: minmax(0, 1fr) auto;\n  gap: 2rem;\n  padding: clamp(2rem, 5vw, 3rem);\n}\n.centro-cartao::before {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  width: 2rem;\n  height: 0.25rem;\n  content: "";\n  background:\n    linear-gradient(\n      90deg,\n      var(--cor-estudio) 0 20%,\n      transparent 20% 40%,\n      rgba(255, 255, 255, 0.16) 40% 60%,\n      transparent 60% 80%,\n      rgba(255, 255, 255, 0.16) 80%);\n}\n.logo-grande {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  width: 100%;\n  min-height: 15rem;\n  place-items: center;\n  place-self: center;\n  overflow: hidden;\n  color: var(--cor-estudio);\n  background: var(--fundo-elevado);\n  border: 0.0625rem solid var(--borda-forte);\n}\n.logo-grande:not(.sem-logo) {\n  aspect-ratio: 1;\n}\n.logo-grande img {\n  position: absolute;\n  inset: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  max-height: none;\n  object-fit: cover;\n  object-position: center;\n}\n.logo-grande span {\n  position: relative;\n  z-index: 1;\n  line-height: 1;\n}\n.logo-grande.sem-logo {\n  width: 8.5rem;\n  min-height: 8.5rem;\n  aspect-ratio: 1;\n  place-self: center;\n  background: var(--fundo-elevado);\n  border: 0.0625rem solid color-mix(in srgb, var(--cor-estudio) 42%, var(--borda-forte));\n  font-size: 4rem;\n  font-weight: 800;\n}\n.leitura-cartao {\n  position: relative;\n  display: grid;\n  gap: 0.35rem;\n  padding-top: 1.3rem;\n  border-top: 0.0625rem solid var(--borda);\n}\n.leitura-cartao > span {\n  color: var(--cor-estudio);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.57rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n}\n.leitura-cartao strong {\n  max-width: 100%;\n  overflow: hidden;\n  color: var(--texto);\n  font-size: clamp(1.25rem, 3vw, 2rem);\n  line-height: 1.05;\n  text-overflow: ellipsis;\n}\n.leitura-cartao small {\n  color: var(--texto-fraco);\n  font-size: 0.75rem;\n}\n.rodape-hero {\n  position: relative;\n  display: flex;\n  min-height: 3.85rem;\n  grid-column: 1/-1;\n  align-items: center;\n  gap: clamp(0.55rem, 1.5vw, 1.25rem);\n  margin-top: clamp(2.75rem, 5vw, 4rem);\n  padding: 0 1.1rem;\n  overflow: hidden;\n  color: var(--texto-suave);\n  background: var(--fundo-elevado);\n  border: 0.0625rem solid var(--borda-forte);\n  border-left: 0.28rem solid var(--cor-estudio);\n  box-shadow: 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.2);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.5rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  transform: translateY(50%);\n}\n.rodape-hero::after {\n  position: absolute;\n  top: -4rem;\n  right: -2rem;\n  width: 18rem;\n  aspect-ratio: 1.7;\n  background:\n    repeating-radial-gradient(\n      ellipse at center,\n      transparent 0 0.28rem,\n      color-mix(in srgb, var(--cor-estudio) 22%, transparent) 0.31rem 0.35rem);\n  content: "";\n  opacity: 0.32;\n  pointer-events: none;\n  transform: rotate(-7deg) scaleY(0.58);\n}\n.rodape-hero > * {\n  position: relative;\n  z-index: 1;\n}\n.rodape-hero i {\n  width: 1.5rem;\n  height: 0.0625rem;\n  background: var(--borda-forte);\n}\n.rodape-hero strong {\n  margin-left: auto;\n  color: var(--cor-estudio);\n  font-size: inherit;\n}\n.embeds-publicos,\n.albuns-publicos,\n.servicos-publicos {\n  padding: clamp(5rem, 9vw, 7rem) 0;\n  border-top: 0.0625rem solid var(--borda);\n  scroll-margin-top: 2rem;\n}\n.informacoes-publicas {\n  padding: clamp(5rem, 10vw, 8rem) 0;\n  border-top: 0.0625rem solid var(--borda);\n}\n.titulo-secao {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 2.5rem;\n}\n.titulo-secao > span {\n  display: grid;\n  width: 2.1rem;\n  height: 2.1rem;\n  flex: 0 0 auto;\n  place-items: center;\n  background: var(--cor-estudio);\n  color: var(--contraste-estudio);\n  border-radius: 50%;\n  font-family: var(--font-mono, monospace);\n  font-size: 0.62rem;\n  font-weight: 800;\n}\n.titulo-secao p {\n  margin: 0 0 0.35rem;\n  color: var(--texto-fraco);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.13em;\n}\n.titulo-secao h2 {\n  margin: 0;\n  color: var(--texto);\n  font-size: clamp(1.8rem, 4vw, 2.8rem);\n  letter-spacing: -0.04em;\n}\n.grade-informacoes {\n  display: grid;\n  grid-template-columns: minmax(0, 1.25fr) minmax(17rem, 0.75fr);\n  gap: 1rem;\n}\n.bloco-sobre,\n.bloco-contato {\n  min-width: 0;\n  padding: clamp(1.4rem, 4vw, 2.15rem);\n  background:\n    linear-gradient(\n      145deg,\n      rgba(255, 255, 255, 0.02),\n      transparent 45%),\n    var(--superficie);\n  border: 0.0625rem solid var(--borda);\n  border-radius: 0.45rem;\n}\n.rotulo {\n  display: block;\n  margin-bottom: 1.5rem;\n  color: var(--cor-estudio);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.58rem;\n  font-weight: 750;\n  letter-spacing: 0.14em;\n}\n.bloco-sobre p {\n  max-width: 45rem;\n  margin: 0;\n  color: var(--texto-suave);\n  font-size: 1rem;\n  line-height: 1.78;\n  white-space: pre-wrap;\n}\n.bloco-contato dl {\n  display: grid;\n  margin: 0;\n}\n.bloco-contato dl div {\n  display: grid;\n  gap: 0.28rem;\n  padding: 0.95rem 0;\n  border-bottom: 0.0625rem solid var(--borda);\n}\n.bloco-contato dl div:first-child {\n  padding-top: 0;\n}\n.bloco-contato dl div:last-child {\n  padding-bottom: 0;\n  border-bottom: 0;\n}\n.bloco-contato dl dt {\n  color: var(--texto-fraco);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.58rem;\n  font-weight: 650;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.bloco-contato dl dd {\n  min-width: 0;\n  margin: 0;\n  overflow-wrap: anywhere;\n  color: var(--texto);\n  font-size: 0.86rem;\n  font-weight: 650;\n}\n.bloco-contato dl a {\n  transition: color 140ms ease;\n}\n.bloco-contato dl a:hover {\n  color: var(--cor-estudio);\n}\n.rodape-pagina {\n  display: flex;\n  min-height: 6rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  border-top: 0.0625rem solid var(--borda);\n  color: var(--texto-fraco);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.57rem;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n}\n.rodape-pagina div {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.rodape-pagina strong {\n  color: var(--texto-suave);\n  font-size: inherit;\n}\n.rodape-pagina a {\n  transition: color 140ms ease;\n}\n.rodape-pagina a:hover {\n  color: var(--cor-estudio);\n}\n.estado-pagina {\n  display: grid;\n  width: min(32rem, 100% - 2rem);\n  min-height: 100dvh;\n  align-content: center;\n  justify-items: center;\n  gap: 1rem;\n  margin: auto;\n  text-align: center;\n}\n.estado-pagina h1 {\n  margin: 0;\n  color: var(--texto);\n}\n.estado-pagina p {\n  max-width: 27rem;\n  margin: 0;\n  color: var(--texto-suave);\n}\n.estado-pagina button {\n  min-height: 2.75rem;\n  margin-top: 0.5rem;\n  padding: 0 1rem;\n  background: var(--cor-estudio);\n  color: var(--contraste-estudio);\n  border: 0;\n  border-radius: 0.3rem;\n  font-size: 0.75rem;\n  font-weight: 750;\n}\n.estado-pagina button:hover {\n  filter: brightness(1.07);\n}\n.codigo-estado {\n  color: var(--cor-estudio);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.65rem;\n  font-weight: 750;\n  letter-spacing: 0.16em;\n}\n.estado-erro h1 {\n  font-size: clamp(2rem, 7vw, 3.5rem);\n}\n.carregador {\n  width: 2rem;\n  height: 2rem;\n  border: 0.15rem solid var(--borda);\n  border-top-color: var(--cor-estudio);\n  border-radius: 50%;\n  animation: girar 700ms linear infinite;\n}\n@keyframes girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.embeds-publicos::before {\n  display: flex;\n  min-height: 1.65rem;\n  align-items: center;\n  margin-bottom: 1.35rem;\n  padding: 0 0.7rem;\n  color: var(--texto-fraco);\n  border-left: 0.16rem solid var(--cor-estudio);\n  background: rgba(255, 255, 255, 0.025);\n  content: "CASA FL\\caIVA / SINAL EXTERNO";\n  font-family: var(--font-mono, monospace);\n  font-size: 0.49rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n}\n.grade-embeds-publicos {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.85rem;\n}\n.grade-embeds-publicos.embed-unico {\n  grid-template-columns: minmax(0, 52rem);\n}\n.embed-publico {\n  min-width: 0;\n  overflow: hidden;\n  background: var(--superficie);\n  border: 0.0625rem solid var(--borda);\n  border-left: 0.22rem solid var(--cor-estudio);\n}\n.embed-publico > header {\n  display: grid;\n  min-height: 3rem;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 0.8rem;\n  padding: 0 1rem;\n  border-bottom: 0.0625rem solid var(--borda);\n  font-family: var(--font-mono, monospace);\n  text-transform: uppercase;\n}\n.embed-publico > header span {\n  color: var(--cor-estudio);\n  font-size: 0.57rem;\n  font-weight: 750;\n  letter-spacing: 0.08em;\n}\n.embed-publico > header strong {\n  color: var(--texto);\n  font-size: 0.61rem;\n  letter-spacing: 0.1em;\n}\n.embed-publico > header small {\n  color: var(--texto-fraco);\n  font-size: 0.49rem;\n  letter-spacing: 0.1em;\n}\n.moldura-embed {\n  position: relative;\n  min-height: 10.4rem;\n  background: var(--fundo-elevado);\n}\n.moldura-embed iframe {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.embed-publico[data-provedor=youtube] .moldura-embed {\n  aspect-ratio: 16/9;\n}\n.embed-publico[data-provedor=spotify] .moldura-embed {\n  height: 22rem;\n}\n.embed-publico[data-provedor=soundcloud] .moldura-embed {\n  height: 10.4rem;\n}\n.albuns-publicos::before {\n  display: flex;\n  min-height: 1.65rem;\n  align-items: center;\n  margin-bottom: 1.35rem;\n  padding: 0 0.7rem;\n  color: var(--texto-fraco);\n  border-left: 0.16rem solid var(--cor-estudio);\n  background: rgba(255, 255, 255, 0.025);\n  content: "CASA FL\\caIVA / CAT\\c1LOGO P\\da BLICO";\n  font-family: var(--font-mono, monospace);\n  font-size: 0.49rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n}\n.grade-albuns-publicos {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.85rem;\n}\n.album-publico {\n  display: grid;\n  min-width: 0;\n  grid-template-columns: minmax(11rem, 0.82fr) minmax(0, 1.18fr);\n  overflow: hidden;\n  background: var(--sup);\n}\n.capa-album-publico {\n  position: relative;\n  display: grid;\n  width: 100%;\n  aspect-ratio: 1/1;\n  place-items: center;\n  overflow: hidden;\n  background: color-mix(in srgb, var(--cor-estudio) 55%, #171a17);\n  color: var(--contraste-estudio);\n}\n.capa-album-publico img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  display: block;\n}\n.capa-album-publico > span:not(.numero-album) {\n  font-size: clamp(2rem, 5vw, 3.8rem);\n  font-weight: 800;\n  letter-spacing: -0.08em;\n}\n.capa-album-publico > small {\n  position: absolute;\n  right: 0.8rem;\n  bottom: 0.75rem;\n  left: 0.8rem;\n  overflow: hidden;\n  font-size: 0.53rem;\n  letter-spacing: 0.1em;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.numero-album {\n  position: absolute;\n  top: 0.75rem;\n  left: 0.75rem;\n  display: grid;\n  min-width: 2rem;\n  min-height: 1.55rem;\n  place-items: center;\n  padding-inline: 0.4rem;\n  background: rgba(8, 10, 8, 0.72);\n  color: #f3f5f1;\n  border-radius: 999rem;\n  font-family: var(--font-mono, monospace);\n  font-size: 0.55rem;\n}\n.conteudo-album-publico {\n  display: grid;\n  min-width: 0;\n  grid-template-rows: auto 1fr auto;\n  gap: 1rem;\n  padding: 1.2rem;\n}\n.conteudo-album-publico > header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.conteudo-album-publico > header > div {\n  min-width: 0;\n}\n.conteudo-album-publico > header p {\n  margin: 0 0 0.45rem;\n  color: var(--cor-estudio);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.55rem;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.conteudo-album-publico > header h3 {\n  margin: 0;\n  overflow-wrap: anywhere;\n  color: var(--texto);\n  font-size: clamp(1.25rem, 2.5vw, 1.8rem);\n  line-height: 1;\n}\n.conteudo-album-publico > header div > span {\n  display: block;\n  margin-top: 0.4rem;\n  color: var(--texto-fraco);\n  font-size: 0.68rem;\n}\n.conteudo-album-publico > header > small {\n  flex: 0 0 auto;\n  padding: 0.3rem 0.48rem;\n  color: var(--texto-suave);\n  border: 0.0625rem solid var(--borda);\n  border-radius: 999rem;\n  font-size: 0.55rem;\n  white-space: nowrap;\n}\n.descricao-album-publico {\n  display: -webkit-box;\n  overflow: hidden;\n  margin: 0;\n  color: var(--texto-suave);\n  font-size: 0.76rem;\n  line-height: 1.6;\n  white-space: pre-wrap;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 4;\n}\n.permissoes-album-publico {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  padding-top: 0.8rem;\n  border-top: 0.0625rem solid var(--borda);\n}\n.permissoes-album-publico span {\n  display: inline-flex;\n  height: 1.75rem;\n  align-items: center;\n  gap: 0.38rem;\n  padding: 0 0.5rem;\n  color: var(--texto-fraco);\n  border: 0.0625rem solid var(--borda);\n  border-radius: 999rem;\n  font-size: 0.54rem;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.permissoes-album-publico .permissao-ativa {\n  color: var(--texto);\n  border-color: color-mix(in srgb, var(--cor-estudio) 28%, var(--borda));\n  background: color-mix(in srgb, var(--cor-estudio) 6%, transparent);\n}\n.permissoes-album-publico i {\n  width: 0.35rem;\n  height: 0.35rem;\n  flex: 0 0 auto;\n  background: var(--cor-estudio);\n  border-radius: 50%;\n}\n.cabecalho-secao-publica {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n.cabecalho-secao-publica p {\n  margin: 0 0 0.4rem;\n  color: var(--cor-estudio);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.58rem;\n  font-weight: 750;\n  letter-spacing: 0.14em;\n}\n.cabecalho-secao-publica h2 {\n  margin: 0;\n  color: var(--texto);\n  font-size: clamp(2.2rem, 6vw, 4.2rem);\n  line-height: 0.95;\n  letter-spacing: -0.055em;\n}\n.cabecalho-secao-publica .titulo-clicavel a {\n  display: block;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n}\n.cabecalho-secao-publica .titulo-clicavel a:hover {\n  opacity: 0.8;\n}\n.cabecalho-secao-publica > span {\n  padding-bottom: 0.3rem;\n  color: var(--texto-fraco);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.62rem;\n  text-transform: uppercase;\n}\n.grade-servicos-publicos {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.servico-publico {\n  position: relative;\n  display: grid;\n  min-width: 0;\n  min-height: 17rem;\n  grid-template-rows: auto 1fr auto;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      145deg,\n      color-mix(in srgb, var(--cor-estudio) 5%, transparent),\n      transparent 50%),\n    var(--superficie);\n  border: 0.0625rem solid var(--borda);\n  border-radius: 0.4rem;\n  transition:\n    transform 150ms ease,\n    border-color 150ms ease,\n    background-color 150ms ease;\n}\n.servico-publico::before {\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 0.16rem;\n  content: "";\n  background: var(--cor-estudio);\n  opacity: 0.7;\n}\n.servico-publico:hover {\n  border-color: color-mix(in srgb, var(--cor-estudio) 36%, var(--borda));\n  background-color: var(--superficie-clara);\n  transform: translateY(-0.16rem);\n}\n.servico-publico > header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem 1.1rem;\n}\n.servico-publico > header > span {\n  color: var(--cor-estudio);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.6rem;\n  font-weight: 750;\n  letter-spacing: 0.08em;\n}\n.servico-publico > header small {\n  padding: 0.25rem 0.45rem;\n  color: var(--texto-fraco);\n  border: 0.0625rem solid var(--borda);\n  border-radius: 999rem;\n  font-size: 0.56rem;\n  white-space: nowrap;\n}\n.servico-publico > a {\n  display: flex;\n  min-height: 3rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0 1.1rem;\n  color: var(--texto-suave);\n  border-top: 0.0625rem solid var(--borda);\n  font-size: 0.63rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  transition: color 140ms ease, background-color 140ms ease;\n}\n.servico-publico > a span {\n  color: var(--cor-estudio);\n  font-size: 0.9rem;\n}\n.servico-publico > a:hover {\n  background: rgba(255, 255, 255, 0.03);\n  color: var(--texto);\n}\n.conteudo-servico-publico {\n  display: grid;\n  align-content: center;\n  gap: 1.4rem;\n  padding: 1rem 1.1rem 1.7rem;\n}\n.conteudo-servico-publico h3 {\n  max-width: 18ch;\n  margin: 0;\n  color: var(--texto);\n  font-size: clamp(1.15rem, 2.5vw, 1.55rem);\n  line-height: 1.08;\n  letter-spacing: -0.04em;\n}\n.preco-publico {\n  display: grid;\n  justify-items: start;\n  gap: 0.25rem;\n}\n.preco-publico strong {\n  color: var(--cor-estudio);\n  font-size: clamp(1.5rem, 3vw, 2.1rem);\n  line-height: 1;\n  letter-spacing: -0.05em;\n}\n.preco-publico span {\n  color: var(--texto-fraco);\n  font-size: 0.65rem;\n}\n@media (max-width: 60rem) {\n  .hero {\n    grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.8fr);\n    column-gap: 3rem;\n    row-gap: 0;\n  }\n  .conteudo-hero h1 {\n    font-size: clamp(3.5rem, 8vw, 6rem);\n  }\n  .centro-cartao {\n    min-height: 26rem;\n    padding: 2rem;\n  }\n}\n@media (max-width: 58rem) {\n  .grade-embeds-publicos,\n  .grade-albuns-publicos,\n  .grade-servicos-publicos {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 52rem) {\n  .hero,\n  .grade-informacoes {\n    grid-template-columns: 1fr;\n  }\n  .hero {\n    min-height: auto;\n    padding: 4rem 0 0;\n    row-gap: 2.5rem;\n  }\n  .conteudo-hero h1 {\n    max-width: 100%;\n    font-size: clamp(2.6rem, 9vw, 4.5rem);\n    line-height: 0.92;\n    margin: 1rem 0 1.25rem;\n  }\n  .descricao {\n    font-size: 1rem;\n    line-height: 1.65;\n  }\n  .acoes-hero {\n    margin-top: 1.75rem;\n  }\n  .cartao-estudio {\n    width: 100%;\n    justify-self: stretch;\n    box-shadow: 0.3rem 0.3rem 0 color-mix(in srgb, var(--cor-estudio) 72%, #111311), 0.55rem 0.55rem 0 rgba(0, 0, 0, 0.5);\n  }\n  .centro-cartao {\n    min-height: 0;\n    gap: 1.25rem;\n    padding: 1.5rem;\n  }\n  .logo-grande:not(.sem-logo) {\n    aspect-ratio: 1;\n    min-height: 0;\n  }\n  .rodape-hero {\n    transform: none;\n    margin-top: 2rem;\n    padding-block: 0.75rem;\n  }\n}\n@media (max-width: 38rem) {\n  .pagina-estudio {\n    overflow-x: clip;\n  }\n  .topo,\n  .hero,\n  .embeds-publicos,\n  .albuns-publicos,\n  .servicos-publicos,\n  .informacoes-publicas,\n  .rodape-pagina {\n    width: min(78rem, 100% - 2rem);\n  }\n  .topo {\n    min-height: auto;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    gap: 0.75rem;\n    padding-block: 0.75rem;\n  }\n  .marca {\n    gap: 0.6rem;\n  }\n  .marca strong {\n    max-width: 9rem;\n    font-size: 0.7rem;\n  }\n  .marca .local-estudio {\n    display: none;\n  }\n  .marca .rotulo-casa {\n    font-size: 0.45rem;\n  }\n  .logo-marca {\n    width: 2.35rem;\n    height: 2.35rem;\n  }\n  .topo nav {\n    width: 100%;\n    flex-wrap: wrap;\n    gap: 0.4rem;\n  }\n  .topo nav a {\n    flex: 1 1 auto;\n    min-height: 2.5rem;\n    padding-inline: 0.7rem;\n    font-size: 0.58rem;\n  }\n  .topo nav .contato-topo {\n    margin: 0;\n    flex: 1 1 100%;\n  }\n  .hero {\n    padding: 3.5rem 0 0;\n  }\n  .conteudo-hero h1 {\n    margin-top: 1rem;\n    font-size: clamp(2.6rem, 15vw, 4.5rem);\n    line-height: 0.9;\n  }\n  .descricao {\n    font-size: 0.95rem;\n    line-height: 1.65;\n  }\n  .acoes-hero {\n    display: grid;\n    margin-top: 1.5rem;\n  }\n  .acoes-hero a {\n    width: 100%;\n  }\n  .cartao-estudio {\n    width: 100%;\n    justify-self: stretch;\n  }\n  .centro-cartao {\n    min-height: 21rem;\n    gap: 1.5rem;\n    padding: 1.5rem;\n  }\n  .logo-grande {\n    min-height: 12rem;\n  }\n  .logo-grande.sem-logo {\n    width: 6.5rem;\n    min-height: 6.5rem;\n    font-size: 3rem;\n  }\n  .leitura-cartao strong {\n    font-size: 1.25rem;\n  }\n  .rodape-hero {\n    margin-top: 2rem;\n    padding-block: 0.9rem;\n    transform: none;\n    column-gap: 0.55rem;\n    font-size: 0.45rem;\n  }\n  .rodape-hero i {\n    width: 0.8rem;\n  }\n  .embeds-publicos,\n  .albuns-publicos,\n  .servicos-publicos,\n  .informacoes-publicas {\n    padding: 3.5rem 0;\n  }\n  .cabecalho-secao-publica {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 0.6rem;\n    margin-bottom: 1.5rem;\n  }\n  .cabecalho-secao-publica h2 {\n    font-size: clamp(2.2rem, 11vw, 3.4rem);\n  }\n  .grade-embeds-publicos,\n  .grade-albuns-publicos,\n  .grade-servicos-publicos {\n    grid-template-columns: 1fr;\n  }\n  .album-publico {\n    grid-template-columns: 1fr;\n  }\n  .conteudo-album-publico {\n    gap: 0.85rem;\n    padding: 1rem;\n  }\n  .permissoes-album-publico {\n    padding-top: 0.7rem;\n  }\n  .servico-publico {\n    min-height: auto;\n  }\n  .conteudo-servico-publico {\n    padding: 0.75rem 1rem 1.5rem;\n  }\n  .titulo-secao {\n    margin-bottom: 1.75rem;\n  }\n  .bloco-sobre,\n  .bloco-contato {\n    padding: 1.25rem;\n  }\n  .rodape-pagina {\n    min-height: 7rem;\n    align-items: flex-start;\n    flex-direction: column;\n    justify-content: center;\n    gap: 0.5rem;\n  }\n  .rodape-pagina div {\n    flex-wrap: wrap;\n  }\n  .assinatura-fleiva {\n    margin-top: 1.75rem;\n  }\n}\n@media (max-width: 22rem) {\n  .conteudo-hero h1 {\n    font-size: clamp(2.2rem, 14vw, 3.5rem);\n  }\n  .cabecalho-secao-publica h2 {\n    font-size: clamp(1.9rem, 10vw, 2.6rem);\n  }\n  .permissoes-album-publico span {\n    font-size: 0.5rem;\n    padding-inline: 0.4rem;\n  }\n}\n@media (max-width: 52rem) and (orientation: landscape) and (max-height: 32rem) {\n  .hero {\n    min-height: auto;\n    padding-top: 3rem;\n  }\n  .cartao-estudio .centro-cartao {\n    min-height: 18rem;\n  }\n}\n@supports (padding: env(safe-area-inset-left)) {\n  .topo,\n  .hero,\n  .embeds-publicos,\n  .albuns-publicos,\n  .servicos-publicos,\n  .informacoes-publicas,\n  .rodape-pagina {\n    padding-inline: max(1rem, env(safe-area-inset-left)) max(1rem, env(safe-area-inset-right));\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .carregador {\n    animation-duration: 1.5s;\n  }\n  .topo nav a,\n  .acao-principal,\n  .acao-secundaria,\n  .bloco-contato a,\n  .rodape-pagina a {\n    transition: none;\n  }\n}\n.assinatura-fleiva {\n  display: flex;\n  width: fit-content;\n  align-items: center;\n  gap: 0.55rem;\n  margin: 2.5rem auto 0;\n  color: var(--texto-fraco);\n  font-size: 0.62rem;\n}\n.assinatura-wordmark {\n  width: 3.8rem;\n  aspect-ratio: 1256/596;\n  background: currentColor;\n  mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) center/contain no-repeat;\n  -webkit-mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) center/contain no-repeat;\n  opacity: 0.72;\n  transition: color 160ms ease, opacity 160ms ease;\n}\n.assinatura-fleiva:hover .assinatura-wordmark {\n  color: var(--fleiva-verde, #5e886f);\n  opacity: 1;\n}\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginaEstudio, { className: "PaginaEstudio", filePath: "apps/studio-dash/src/app/paginas/pagina-estudio/pagina-estudio.ts", lineNumber: 38 });
})();
export {
  PaginaEstudio
};
