import {
  ActivatedRoute,
  Component,
  DadosAlbumPublico,
  TIPO_PUBLICO_ENVIO,
  Title,
  computed,
  effect,
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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-IMBOO5ID.js";

// apps/studio-dash/src/app/paginas/album-publico/album-publico.ts
var _forTrack0 = ($index, $item) => $item.id;
function AlbumPublico_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 3);
    \u0275\u0275domElement(1, "span", 5);
    \u0275\u0275domElementStart(2, "p");
    \u0275\u0275text(3, "Carregando trabalho...");
    \u0275\u0275domElementEnd()();
  }
}
function AlbumPublico_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "section", 4)(1, "span", 6);
    \u0275\u0275text(2, "404");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "h1");
    \u0275\u0275text(4, "Trabalho indispon\xEDvel");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "button", 7);
    \u0275\u0275domListener("click", function AlbumPublico_Conditional_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.carregar());
    });
    \u0275\u0275text(8, " Tentar novamente ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.dados.erro());
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 11);
  }
  if (rf & 2) {
    const estudio_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("src", estudio_r5.logo_url, \u0275\u0275sanitizeUrl)("alt", "Logo de " + estudio_r5.nome);
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.inicialEstudio(), " ");
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 11);
  }
  if (rf & 2) {
    const album_r6 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", album_r6.capa_url, \u0275\u0275sanitizeUrl)("alt", "Capa de " + album_r6.nome);
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "small");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const album_r6 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.iniciaisProjeto());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(album_r6.projeto);
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " arquivo ");
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " faixa ");
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AlbumPublico_Conditional_5_Conditional_0_Conditional_23_Conditional_0_Template, 1, 0)(1, AlbumPublico_Conditional_5_Conditional_0_Conditional_23_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r3.ehEnvio() ? 0 : 1);
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_24_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " arquivos ");
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_24_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " faixas ");
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AlbumPublico_Conditional_5_Conditional_0_Conditional_24_Conditional_0_Template, 1, 0)(1, AlbumPublico_Conditional_5_Conditional_0_Conditional_24_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r3.ehEnvio() ? 0 : 1);
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const album_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(album_r6.descricao);
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275domElement(1, "i");
    \u0275\u0275text(2, " Audi\xE7\xE3o dispon\xEDvel ");
    \u0275\u0275domElementEnd();
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275domElement(1, "i");
    \u0275\u0275text(2, " Download dispon\xEDvel ");
    \u0275\u0275domElementEnd();
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1, "Apresenta\xE7\xE3o p\xFAblica");
    \u0275\u0275domElementEnd();
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.erroAcao(), " ");
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Ou\xE7a");
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " SEQU\xCANCIA OFICIAL ");
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Vers\xF5es e arquivos ");
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Faixas ");
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_46_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " arquivos ");
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_46_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " faixas ");
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 21);
    \u0275\u0275text(1, " Este trabalho ainda n\xE3o possui ");
    \u0275\u0275conditionalCreate(2, AlbumPublico_Conditional_5_Conditional_0_Conditional_46_Conditional_2_Template, 1, 0)(3, AlbumPublico_Conditional_5_Conditional_0_Conditional_46_Conditional_3_Template, 1, 0);
    \u0275\u0275text(4, " dispon\xEDveis. ");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.ehEnvio() ? 2 : 3);
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_47_For_2_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 37);
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_47_For_2_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 31);
    \u0275\u0275text(1, "\u2161");
    \u0275\u0275domElementEnd();
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_47_For_2_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 31);
    \u0275\u0275text(1, "\u25B6");
    \u0275\u0275domElementEnd();
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_47_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 36);
    \u0275\u0275domListener("click", function AlbumPublico_Conditional_5_Conditional_0_Conditional_47_For_2_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const faixa_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      const audioPlayer_r2 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(ctx_r3.reproduzir(faixa_r8, audioPlayer_r2));
    });
    \u0275\u0275conditionalCreate(1, AlbumPublico_Conditional_5_Conditional_0_Conditional_47_For_2_Conditional_2_Conditional_1_Template, 1, 0, "span", 37)(2, AlbumPublico_Conditional_5_Conditional_0_Conditional_47_For_2_Conditional_2_Conditional_2_Template, 2, 0, "span", 31)(3, AlbumPublico_Conditional_5_Conditional_0_Conditional_47_For_2_Conditional_2_Conditional_3_Template, 2, 0, "span", 31);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const faixa_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275domProperty("disabled", ctx_r3.carregandoAudioId() !== null);
    \u0275\u0275attribute("aria-label", ctx_r3.faixaAtivaId() === faixa_r8.id && ctx_r3.reproduzindo() ? "Pausar " + ctx_r3.nomePrincipalFaixa(faixa_r8) : "Ouvir " + ctx_r3.nomePrincipalFaixa(faixa_r8));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.carregandoAudioId() === faixa_r8.id ? 1 : ctx_r3.faixaAtivaId() === faixa_r8.id && ctx_r3.reproduzindo() ? 2 : 3);
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_47_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 31);
    \u0275\u0275text(1, "\u2022");
    \u0275\u0275domElementEnd();
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_47_For_2_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Preparando... ");
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_47_For_2_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Baixar ");
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_47_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 38);
    \u0275\u0275domListener("click", function AlbumPublico_Conditional_5_Conditional_0_Conditional_47_For_2_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const faixa_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.baixar(faixa_r8));
    });
    \u0275\u0275conditionalCreate(1, AlbumPublico_Conditional_5_Conditional_0_Conditional_47_For_2_Conditional_13_Conditional_1_Template, 1, 0)(2, AlbumPublico_Conditional_5_Conditional_0_Conditional_47_For_2_Conditional_13_Conditional_2_Template, 1, 0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const faixa_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275domProperty("disabled", ctx_r3.baixandoId() !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.baixandoId() === faixa_r8.id ? 1 : 2);
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_47_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li")(1, "div", 29);
    \u0275\u0275conditionalCreate(2, AlbumPublico_Conditional_5_Conditional_0_Conditional_47_For_2_Conditional_2_Template, 4, 3, "button", 30)(3, AlbumPublico_Conditional_5_Conditional_0_Conditional_47_For_2_Conditional_3_Template, 2, 0, "span", 31);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 33)(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "span", 34);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(13, AlbumPublico_Conditional_5_Conditional_0_Conditional_47_For_2_Conditional_13_Template, 3, 2, "button", 35);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const faixa_r8 = ctx.$implicit;
    const album_r6 = \u0275\u0275nextContext(2);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("faixa-ativa", ctx_r3.faixaAtivaId() === faixa_r8.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(album_r6.reproducao_publica ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatarOrdem(faixa_r8.ordem), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.nomePrincipalFaixa(faixa_r8));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r3.nomeSecundarioFaixa(faixa_r8), " \xB7 ", faixa_r8.nome_arquivo, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatarBytes(faixa_r8.tamanho_bytes), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r6.download_publico ? 13 : -1);
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ol", 22);
    \u0275\u0275repeaterCreate(1, AlbumPublico_Conditional_5_Conditional_0_Conditional_47_For_2_Template, 14, 9, "li", 28, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const album_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(album_r6.faixas);
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_48_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 31);
    \u0275\u0275text(1, "\u2161");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "span", 43);
    \u0275\u0275text(3, "Pausar");
    \u0275\u0275domElementEnd();
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_48_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 31);
    \u0275\u0275text(1, "\u25B6");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "span", 43);
    \u0275\u0275text(3, "Reproduzir");
    \u0275\u0275domElementEnd();
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "aside", 23)(1, "button", 39);
    \u0275\u0275domListener("click", function AlbumPublico_Conditional_5_Conditional_0_Conditional_48_Template_button_click_1_listener() {
      const faixa_r11 = \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(3);
      const audioPlayer_r2 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(ctx_r3.reproduzir(faixa_r11, audioPlayer_r2));
    });
    \u0275\u0275conditionalCreate(2, AlbumPublico_Conditional_5_Conditional_0_Conditional_48_Conditional_2_Template, 4, 0)(3, AlbumPublico_Conditional_5_Conditional_0_Conditional_48_Conditional_3_Template, 4, 0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 40)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "div", 41)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "input", 42);
    \u0275\u0275domListener("input", function AlbumPublico_Conditional_5_Conditional_0_Conditional_48_Template_input_input_12_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(3);
      const audioPlayer_r2 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(ctx_r3.alterarTempo($event, audioPlayer_r2));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const faixa_r11 = ctx;
    const album_r6 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r3.carregandoAudioId() !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.reproduzindo() ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.nomePrincipalFaixa(faixa_r11));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r3.nomeSecundarioFaixa(faixa_r11), " \xB7 ", album_r6.projeto, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatarTempo(ctx_r3.tempoAtual()));
    \u0275\u0275advance();
    \u0275\u0275domProperty("max", ctx_r3.duracao() || 0)("value", ctx_r3.tempoAtual());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatarTempo(ctx_r3.duracao()));
  }
}
function AlbumPublico_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "header", 8)(1, "a", 9)(2, "span", 10);
    \u0275\u0275conditionalCreate(3, AlbumPublico_Conditional_5_Conditional_0_Conditional_3_Template, 1, 2, "img", 11)(4, AlbumPublico_Conditional_5_Conditional_0_Conditional_4_Template, 1, 1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "small");
    \u0275\u0275text(9, "Voltar para o est\xFAdio");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(10, "span", 12);
    \u0275\u0275text(11, " FLEIVA / PUBLIC ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "section", 13)(13, "div", 14);
    \u0275\u0275conditionalCreate(14, AlbumPublico_Conditional_5_Conditional_0_Conditional_14_Template, 1, 2, "img", 11)(15, AlbumPublico_Conditional_5_Conditional_0_Conditional_15_Template, 4, 2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "div", 15)(17, "div", 16)(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(20, "i");
    \u0275\u0275domElementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275conditionalCreate(23, AlbumPublico_Conditional_5_Conditional_0_Conditional_23_Template, 2, 1)(24, AlbumPublico_Conditional_5_Conditional_0_Conditional_24_Template, 2, 1);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(25, "h1");
    \u0275\u0275text(26);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(27, "h2");
    \u0275\u0275text(28);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(29, AlbumPublico_Conditional_5_Conditional_0_Conditional_29_Template, 2, 1, "p");
    \u0275\u0275domElementStart(30, "div", 17);
    \u0275\u0275conditionalCreate(31, AlbumPublico_Conditional_5_Conditional_0_Conditional_31_Template, 3, 0, "span");
    \u0275\u0275conditionalCreate(32, AlbumPublico_Conditional_5_Conditional_0_Conditional_32_Template, 3, 0, "span");
    \u0275\u0275conditionalCreate(33, AlbumPublico_Conditional_5_Conditional_0_Conditional_33_Template, 2, 0, "span");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(34, AlbumPublico_Conditional_5_Conditional_0_Conditional_34_Template, 2, 1, "p", 18);
    \u0275\u0275domElementStart(35, "section", 19)(36, "header", 20)(37, "div")(38, "p");
    \u0275\u0275conditionalCreate(39, AlbumPublico_Conditional_5_Conditional_0_Conditional_39_Template, 1, 0)(40, AlbumPublico_Conditional_5_Conditional_0_Conditional_40_Template, 1, 0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(41, "h2");
    \u0275\u0275conditionalCreate(42, AlbumPublico_Conditional_5_Conditional_0_Conditional_42_Template, 1, 0)(43, AlbumPublico_Conditional_5_Conditional_0_Conditional_43_Template, 1, 0);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(44, "span");
    \u0275\u0275text(45);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(46, AlbumPublico_Conditional_5_Conditional_0_Conditional_46_Template, 5, 1, "p", 21)(47, AlbumPublico_Conditional_5_Conditional_0_Conditional_47_Template, 3, 0, "ol", 22);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(48, AlbumPublico_Conditional_5_Conditional_0_Conditional_48_Template, 15, 9, "aside", 23);
    \u0275\u0275domElementStart(49, "footer", 24)(50, "span");
    \u0275\u0275text(51);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(52, "a", 25);
    \u0275\u0275text(53, " Ver p\xE1gina do est\xFAdio ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(54, "div", 26)(55, "span");
    \u0275\u0275text(56, "Publicado com");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(57, "span", 27);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_23_0;
    const album_r6 = ctx;
    const estudio_r5 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("href", ctx_r3.urlEstudio(estudio_r5.slug), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(estudio_r5.logo_url ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(estudio_r5.nome);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(album_r6.capa_url ? 14 : 15);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.ehEnvio() ? "Processo" : album_r6.tipo || "Trabalho");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", album_r6.faixas.length, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r6.faixas.length === 1 ? 23 : 24);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(album_r6.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(album_r6.projeto);
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r6.descricao ? 29 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(album_r6.reproducao_publica ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r6.download_publico ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!album_r6.reproducao_publica && !album_r6.download_publico ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.erroAcao() ? 34 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r3.ehEnvio() ? 39 : 40);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.ehEnvio() ? 42 : 43);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(album_r6.faixas.length);
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r6.faixas.length === 0 ? 46 : 47);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_23_0 = ctx_r3.faixaAtiva()) ? 48 : -1, tmp_23_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(estudio_r5.nome);
    \u0275\u0275advance();
    \u0275\u0275domProperty("href", ctx_r3.urlEstudio(estudio_r5.slug), \u0275\u0275sanitizeUrl);
  }
}
function AlbumPublico_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AlbumPublico_Conditional_5_Conditional_0_Template, 58, 21);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_3_0 = ctx_r3.dados.album()) ? 0 : -1, tmp_3_0);
  }
}
var AlbumPublico = class _AlbumPublico {
  dados = inject(DadosAlbumPublico);
  rota = inject(ActivatedRoute);
  tituloPagina = inject(Title);
  slug = "";
  albumId = "";
  constructor() {
    effect(() => {
      const estudio = this.dados.estudio();
      const album = this.dados.album();
      if (estudio && album) {
        this.tituloPagina.setTitle(`${album.nome} \u2014 ${estudio.nome}`);
        return;
      }
      this.tituloPagina.setTitle("Play Fl\xEAiva");
    });
  }
  faixaAtivaId = signal(
    null,
    ...ngDevMode ? [{ debugName: "faixaAtivaId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  carregandoAudioId = signal(
    null,
    ...ngDevMode ? [{ debugName: "carregandoAudioId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  baixandoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "baixandoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  reproduzindo = signal(
    false,
    ...ngDevMode ? [{ debugName: "reproduzindo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tempoAtual = signal(
    0,
    ...ngDevMode ? [{ debugName: "tempoAtual" }] : (
      /* istanbul ignore next */
      []
    )
  );
  duracao = signal(
    0,
    ...ngDevMode ? [{ debugName: "duracao" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroAcao = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroAcao" }] : (
      /* istanbul ignore next */
      []
    )
  );
  faixaAtiva = computed(
    () => {
      const faixaId = this.faixaAtivaId();
      return this.dados.album()?.faixas.find((faixa) => faixa.id === faixaId) ?? null;
    },
    ...ngDevMode ? [{ debugName: "faixaAtiva" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ehEnvio = computed(
    () => this.dados.album()?.tipo === TIPO_PUBLICO_ENVIO,
    ...ngDevMode ? [{ debugName: "ehEnvio" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
  iniciaisProjeto = computed(
    () => {
      const projeto = this.dados.album()?.projeto ?? "";
      return projeto.trim().split(/\s+/).filter(Boolean).slice(0, 2).map((palavra) => palavra.charAt(0)).join("").toLocaleUpperCase("pt-BR") || "FL";
    },
    ...ngDevMode ? [{ debugName: "iniciaisProjeto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.slug = this.rota.snapshot.paramMap.get("slug") ?? "";
    this.albumId = this.rota.snapshot.paramMap.get("albumId") ?? "";
    void this.carregar();
  }
  async carregar() {
    this.pararEstadoPlayer();
    await this.dados.carregar(this.slug, this.albumId);
  }
  urlEstudio(slug) {
    const slugSeguro = encodeURIComponent(slug);
    if (this.usarDominiosFleiva()) {
      return `https://card.fleiva.com.br/${slugSeguro}`;
    }
    return `/estudio/${slugSeguro}`;
  }
  async reproduzir(faixa, audio) {
    if (this.carregandoAudioId()) {
      return;
    }
    this.erroAcao.set(null);
    if (this.faixaAtivaId() === faixa.id && audio.src) {
      if (audio.paused) {
        try {
          await audio.play();
        } catch {
          this.erroAcao.set("N\xE3o foi poss\xEDvel iniciar a reprodu\xE7\xE3o.");
        }
      } else {
        audio.pause();
      }
      return;
    }
    this.carregandoAudioId.set(faixa.id);
    this.reproduzindo.set(false);
    try {
      const url = await this.dados.obterUrlReproducao(this.slug, this.albumId, faixa.id);
      audio.pause();
      audio.src = url;
      audio.load();
      this.faixaAtivaId.set(faixa.id);
      this.tempoAtual.set(0);
      this.duracao.set(0);
      await audio.play();
    } catch (erro) {
      this.erroAcao.set(this.obterMensagemErro(erro));
    } finally {
      this.carregandoAudioId.set(null);
    }
  }
  async baixar(faixa) {
    if (this.baixandoId()) {
      return;
    }
    this.baixandoId.set(faixa.id);
    this.erroAcao.set(null);
    try {
      const download = await this.dados.obterDownload(this.slug, this.albumId, faixa.id);
      const link = document.createElement("a");
      link.href = download.url;
      link.download = download.nome_arquivo;
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (erro) {
      this.erroAcao.set(this.obterMensagemErro(erro));
    } finally {
      this.baixandoId.set(null);
    }
  }
  aoReproduzir() {
    this.reproduzindo.set(true);
  }
  aoPausar() {
    this.reproduzindo.set(false);
  }
  aoAtualizarTempo(audio) {
    this.tempoAtual.set(Number.isFinite(audio.currentTime) ? audio.currentTime : 0);
  }
  aoCarregarMetadados(audio) {
    this.duracao.set(Number.isFinite(audio.duration) ? audio.duration : 0);
  }
  alterarTempo(evento, audio) {
    const input = evento.target;
    const tempo = Number(input.value);
    if (!Number.isFinite(tempo)) {
      return;
    }
    audio.currentTime = tempo;
    this.tempoAtual.set(tempo);
  }
  aoEncerrar(audio) {
    this.reproduzindo.set(false);
    this.tempoAtual.set(0);
    const album = this.dados.album();
    const faixaAtualId = this.faixaAtivaId();
    if (!album || !faixaAtualId) {
      return;
    }
    const faixas = album.faixas;
    const indiceAtual = faixas.findIndex((faixa) => faixa.id === faixaAtualId);
    if (indiceAtual < 0) {
      return;
    }
    const proxima = faixas[indiceAtual + 1];
    if (!proxima) {
      this.faixaAtivaId.set(null);
      this.duracao.set(0);
      return;
    }
    void this.reproduzir(proxima, audio);
  }
  formatarOrdem(ordem) {
    return String(ordem).padStart(2, "0");
  }
  nomePrincipalFaixa(faixa) {
    return this.ehEnvio() ? faixa.versao : faixa.faixa;
  }
  nomeSecundarioFaixa(faixa) {
    return this.ehEnvio() ? faixa.faixa : `Vers\xE3o ${faixa.versao}`;
  }
  formatarBytes(bytes) {
    if (bytes < 1e3) {
      return `${bytes} B`;
    }
    const unidades = ["KB", "MB", "GB"];
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
  formatarTempo(segundos) {
    if (!Number.isFinite(segundos) || segundos < 0) {
      return "0:00";
    }
    const minutos = Math.floor(segundos / 60);
    const restante = Math.floor(segundos % 60);
    return `${minutos}:${String(restante).padStart(2, "0")}`;
  }
  pararEstadoPlayer() {
    this.faixaAtivaId.set(null);
    this.carregandoAudioId.set(null);
    this.reproduzindo.set(false);
    this.tempoAtual.set(0);
    this.duracao.set(0);
    this.erroAcao.set(null);
  }
  usarDominiosFleiva() {
    if (typeof window === "undefined") {
      return false;
    }
    const hostname = window.location.hostname.trim().toLocaleLowerCase();
    return hostname === "fleiva.com.br" || hostname.endsWith(".fleiva.com.br");
  }
  obterMensagemErro(erro) {
    if (typeof erro === "object" && erro !== null && "message" in erro) {
      return String(erro.message);
    }
    return "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o.";
  }
  static \u0275fac = function AlbumPublico_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlbumPublico)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlbumPublico, selectors: [["app-album-publico"]], decls: 6, vars: 5, consts: [["audioPlayer", ""], [1, "pagina-album", "tema-claro", "tema-estudio"], ["preload", "metadata", 3, "play", "pause", "ended", "timeupdate", "loadedmetadata"], [1, "estado-pagina"], [1, "estado-pagina", "estado-erro"], ["aria-hidden", "true", 1, "carregador"], [1, "codigo-estado"], ["type", "button", 3, "click"], [1, "topo"], [1, "marca", 3, "href"], [1, "logo-estudio"], [3, "src", "alt"], [1, "selo-publico"], [1, "apresentacao-album"], [1, "capa-principal"], [1, "identificacao-album"], [1, "metadados-album"], [1, "permissoes"], ["role", "alert", 1, "erro-acao"], [1, "sequencia"], [1, "cabecalho-sequencia"], [1, "sequencia-vazia"], [1, "lista-faixas"], [1, "player-publico"], [1, "rodape-pagina"], [3, "href"], [1, "assinatura-fleiva"], ["role", "img", "aria-label", "Fl\xEAiva", 1, "assinatura-wordmark"], [3, "faixa-ativa"], [1, "controle-faixa"], ["type", "button", 3, "disabled"], ["aria-hidden", "true"], [1, "ordem-faixa"], [1, "identificacao-faixa"], [1, "tamanho-faixa"], ["type", "button", 1, "botao-download", 3, "disabled"], ["type", "button", 3, "click", "disabled"], [1, "mini-carregador"], ["type", "button", 1, "botao-download", 3, "click", "disabled"], ["type", "button", 1, "controle-player", 3, "click", "disabled"], [1, "faixa-player"], [1, "progresso-player"], ["type", "range", "min", "0", "step", "0.1", "aria-label", "Posi\xE7\xE3o da reprodu\xE7\xE3o", 3, "input", "max", "value"], [1, "rotulo-acessivel"]], template: function AlbumPublico_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275domElementStart(0, "main", 1)(1, "audio", 2, 0);
      \u0275\u0275domListener("play", function AlbumPublico_Template_audio_play_1_listener() {
        return ctx.aoReproduzir();
      })("pause", function AlbumPublico_Template_audio_pause_1_listener() {
        return ctx.aoPausar();
      })("ended", function AlbumPublico_Template_audio_ended_1_listener() {
        \u0275\u0275restoreView(_r1);
        const audioPlayer_r2 = \u0275\u0275reference(2);
        return \u0275\u0275resetView(ctx.aoEncerrar(audioPlayer_r2));
      })("timeupdate", function AlbumPublico_Template_audio_timeupdate_1_listener() {
        \u0275\u0275restoreView(_r1);
        const audioPlayer_r2 = \u0275\u0275reference(2);
        return \u0275\u0275resetView(ctx.aoAtualizarTempo(audioPlayer_r2));
      })("loadedmetadata", function AlbumPublico_Template_audio_loadedmetadata_1_listener() {
        \u0275\u0275restoreView(_r1);
        const audioPlayer_r2 = \u0275\u0275reference(2);
        return \u0275\u0275resetView(ctx.aoCarregarMetadados(audioPlayer_r2));
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(3, AlbumPublico_Conditional_3_Template, 4, 0, "section", 3)(4, AlbumPublico_Conditional_4_Template, 9, 1, "section", 4)(5, AlbumPublico_Conditional_5_Template, 1, 1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275styleProp("--studio-brand", ctx.dados.corPrincipal())("--studio-on-brand", ctx.dados.corContraste());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.dados.carregando() ? 3 : ctx.dados.erro() ? 4 : (tmp_3_0 = ctx.dados.estudio()) ? 5 : -1, tmp_3_0);
    }
  }, styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100dvh;\n}\n.pagina-album[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100dvh;\n  overflow: hidden;\n  padding-bottom: 7rem;\n  background: color-mix(in oklab, var(--studio-brand) 8%, var(--app-surface));\n  color: var(--app-text);\n}\n.pagina-album[_ngcontent-%COMP%]::before {\n  position: fixed;\n  z-index: 0;\n  inset: 0;\n  pointer-events: none;\n  content: "";\n  opacity: 0.17;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.017) 0.0625rem, transparent 0.0625rem);\n  background-size: 100% 0.25rem;\n}\naudio[_ngcontent-%COMP%] {\n  display: none;\n}\n.topo[_ngcontent-%COMP%], \n.apresentacao-album[_ngcontent-%COMP%], \n.erro-acao[_ngcontent-%COMP%], \n.sequencia[_ngcontent-%COMP%], \n.rodape-pagina[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: min(76rem, 100% - 3rem);\n  margin-inline: auto;\n}\n.topo[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 5.5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.marca[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.75rem;\n}\n.marca[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  display: grid;\n  min-width: 0;\n  gap: 0.12rem;\n}\n.marca[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--app-text);\n  font-size: 0.76rem;\n  letter-spacing: 0.05em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.marca[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.57rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.logo-estudio[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.55rem;\n  height: 2.55rem;\n  flex: 0 0 auto;\n  place-items: center;\n  overflow: hidden;\n  color: var(--studio-brand);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 0.3rem;\n  font-weight: 800;\n}\n.logo-estudio[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0.15rem;\n  object-fit: scale-down;\n}\n.selo-publico[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.56rem;\n  letter-spacing: 0.12em;\n}\n.apresentacao-album[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(18rem, 0.82fr) minmax(0, 1.18fr);\n  align-items: center;\n  gap: clamp(3rem, 7vw, 7rem);\n  padding: clamp(4rem, 8vw, 7rem) 0;\n}\n.capa-principal[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  width: 100%;\n  aspect-ratio: 1;\n  place-items: center;\n  overflow: hidden;\n  background: color-mix(in srgb, var(--studio-brand) 55%, #171a17);\n  color: var(--studio-on-brand);\n  border: 0.0625rem solid var(--app-border-strong);\n  box-shadow: 1.2rem 1.2rem 0 color-mix(in srgb, var(--studio-brand) 11%, transparent), 0 2rem 5rem rgba(0, 0, 0, 0.35);\n}\n.capa-principal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.capa-principal[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: clamp(3rem, 9vw, 7rem);\n  font-weight: 800;\n  letter-spacing: -0.09em;\n}\n.capa-principal[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  bottom: 1rem;\n  left: 1rem;\n  overflow: hidden;\n  font-size: 0.58rem;\n  letter-spacing: 0.12em;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.identificacao-album[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.identificacao-album[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  max-width: 12ch;\n  margin: 1rem 0 0.6rem;\n  overflow-wrap: anywhere;\n  color: var(--app-text);\n  font-size: clamp(3.2rem, 8vw, 7rem);\n  font-weight: 760;\n  line-height: 0.88;\n  letter-spacing: -0.07em;\n}\n.identificacao-album[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--app-text-soft);\n  font-size: clamp(1rem, 2vw, 1.35rem);\n  font-weight: 600;\n}\n.identificacao-album[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  margin: 1.5rem 0 0;\n  color: var(--app-text-soft);\n  font-size: 0.93rem;\n  line-height: 1.7;\n  white-space: pre-wrap;\n}\n.metadados-album[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.55rem;\n  color: var(--studio-brand);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.11em;\n  text-transform: uppercase;\n}\n.metadados-album[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 0.25rem;\n  height: 0.25rem;\n  background: currentColor;\n  border-radius: 50%;\n}\n.permissoes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.45rem;\n  margin-top: 1.7rem;\n}\n.permissoes[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 1.8rem;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.3rem 0.55rem;\n  color: var(--app-text-soft);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 999rem;\n  font-size: 0.57rem;\n  text-transform: uppercase;\n}\n.permissoes[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 0.35rem;\n  height: 0.35rem;\n  background: var(--studio-brand);\n  border-radius: 50%;\n}\n.erro-acao[_ngcontent-%COMP%] {\n  margin-top: -1rem;\n  margin-bottom: 2rem;\n  padding: 0.8rem 1rem;\n  background: var(--color-danger-soft);\n  color: var(--color-danger);\n  border: 0.0625rem solid var(--color-danger-border);\n  border-radius: 0.35rem;\n  font-size: 0.72rem;\n}\n.sequencia[_ngcontent-%COMP%] {\n  padding: clamp(3.5rem, 7vw, 6rem) 0;\n  border-top: 0.0625rem solid var(--app-border);\n}\n.cabecalho-sequencia[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 1.5rem;\n}\n.cabecalho-sequencia[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  color: var(--studio-brand);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.56rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n}\n.cabecalho-sequencia[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2.2rem, 5vw, 3.8rem);\n  line-height: 0.95;\n  letter-spacing: -0.05em;\n}\n.cabecalho-sequencia[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 2rem;\n  min-height: 2rem;\n  place-items: center;\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border-radius: 50%;\n  font-size: 0.62rem;\n  font-weight: 800;\n}\n.lista-faixas[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border-top: 0.0625rem solid var(--app-border);\n  list-style: none;\n}\n.lista-faixas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 4.7rem;\n  grid-template-columns: 2.4rem 2.4rem minmax(0, 1fr) auto auto;\n  align-items: center;\n  gap: 0.8rem;\n  padding: 0.65rem 0.9rem;\n  border-bottom: 0.0625rem solid var(--app-border);\n  transition: background-color 140ms ease;\n}\n.lista-faixas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, \n.lista-faixas[_ngcontent-%COMP%]   li.faixa-ativa[_ngcontent-%COMP%] {\n  background: var(--studio-brand-soft);\n}\n.lista-faixas[_ngcontent-%COMP%]   li.faixa-ativa[_ngcontent-%COMP%] {\n  box-shadow: inset 0.15rem 0 var(--studio-brand);\n}\n.controle-faixa[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n}\n.controle-faixa[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n}\n.controle-faixa[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.2rem;\n  height: 2.2rem;\n  place-items: center;\n  padding: 0;\n  background: transparent;\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 50%;\n  font-size: 0.58rem;\n}\n.controle-faixa[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border-color: var(--studio-brand);\n}\n.mini-carregador[_ngcontent-%COMP%] {\n  width: 0.8rem;\n  height: 0.8rem;\n  border: 0.1rem solid currentColor;\n  border-top-color: transparent;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_girar 650ms linear infinite;\n}\n.ordem-faixa[_ngcontent-%COMP%], \n.tamanho-faixa[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.6rem;\n}\n.identificacao-faixa[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.22rem;\n}\n.identificacao-faixa[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.identificacao-faixa[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.identificacao-faixa[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n}\n.identificacao-faixa[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.6rem;\n}\n.botao-download[_ngcontent-%COMP%] {\n  min-height: 2.2rem;\n  padding: 0.4rem 0.65rem;\n  background: transparent;\n  color: var(--app-text-soft);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 0.25rem;\n  font-size: 0.6rem;\n}\n.botao-download[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: var(--studio-brand);\n  border-color: var(--studio-brand-border);\n}\n.sequencia-vazia[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 3rem 1rem;\n  color: var(--app-text-muted);\n  border-top: 0.0625rem solid var(--app-border);\n  border-bottom: 0.0625rem solid var(--app-border);\n  text-align: center;\n}\n.player-publico[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 10;\n  bottom: 1rem;\n  left: 0;\n  right: 0;\n  display: grid;\n  width: min(68rem, 100% - 2rem);\n  min-height: 4.5rem;\n  grid-template-columns: auto minmax(9rem, 0.7fr) minmax(14rem, 1.3fr);\n  align-items: center;\n  gap: 1rem;\n  margin: 0 auto;\n  padding: 0.75rem 1rem;\n  background: rgba(22, 25, 22, 0.94);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 0.5rem;\n  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.45);\n  -webkit-backdrop-filter: blur(1rem);\n  backdrop-filter: blur(1rem);\n  animation: _ngcontent-%COMP%_subir-player 220ms cubic-bezier(0.16, 0.78, 0.22, 1);\n}\n@keyframes _ngcontent-%COMP%_subir-player {\n  from {\n    opacity: 0;\n    transform: translateY(1.2rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .player-publico[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n.controle-player[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.7rem;\n  height: 2.7rem;\n  place-items: center;\n  padding: 0;\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0;\n  border-radius: 50%;\n  font-size: 0.65rem;\n}\n.faixa-player[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.2rem;\n}\n.faixa-player[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.faixa-player[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.faixa-player[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.faixa-player[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.58rem;\n}\n.progresso-player[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2.5rem minmax(0, 1fr) 2.5rem;\n  align-items: center;\n  gap: 0.6rem;\n}\n.progresso-player[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.55rem;\n  text-align: center;\n}\n.progresso-player[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  accent-color: var(--studio-brand);\n}\n.rodape-pagina[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  border-top: 0.0625rem solid var(--app-border);\n  color: var(--app-text-muted);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.57rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.rodape-pagina[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--studio-brand);\n}\n.estado-pagina[_ngcontent-%COMP%] {\n  display: grid;\n  width: min(32rem, 100% - 2rem);\n  min-height: 100dvh;\n  align-content: center;\n  justify-items: center;\n  gap: 1rem;\n  margin: auto;\n  text-align: center;\n}\n.estado-pagina[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.estado-pagina[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.estado-pagina[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--app-text-soft);\n}\n.estado-pagina[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 2.6rem;\n  padding: 0 0.9rem;\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0;\n  border-radius: 0.3rem;\n  font-size: 0.7rem;\n  font-weight: 750;\n}\n.codigo-estado[_ngcontent-%COMP%] {\n  color: var(--studio-brand);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.62rem;\n  letter-spacing: 0.14em;\n}\n.estado-erro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 7vw, 3.5rem);\n}\n.carregador[_ngcontent-%COMP%] {\n  width: 1.8rem;\n  height: 1.8rem;\n  border: 0.14rem solid var(--app-border);\n  border-top-color: var(--studio-brand);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_girar 700ms linear infinite;\n}\n.rotulo-acessivel[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  white-space: nowrap;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n}\n@keyframes _ngcontent-%COMP%_girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 52rem) {\n  .apresentacao-album[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(14rem, 22rem) minmax(0, 1fr);\n    gap: 3rem;\n  }\n  .identificacao-album[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n    font-size: clamp(2.8rem, 8vw, 5rem);\n  }\n  .lista-faixas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    grid-template-columns: 2.4rem 2rem minmax(0, 1fr) auto;\n  }\n  .tamanho-faixa[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 40rem) {\n  .topo[_ngcontent-%COMP%], \n   .apresentacao-album[_ngcontent-%COMP%], \n   .erro-acao[_ngcontent-%COMP%], \n   .sequencia[_ngcontent-%COMP%], \n   .rodape-pagina[_ngcontent-%COMP%] {\n    width: min(76rem, 100% - 2rem);\n  }\n  .apresentacao-album[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n    padding: 3rem 0 4rem;\n  }\n  .capa-principal[_ngcontent-%COMP%] {\n    width: min(100%, 27rem);\n  }\n  .identificacao-album[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n    max-width: 14ch;\n    font-size: clamp(3rem, 15vw, 5rem);\n  }\n  .lista-faixas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    grid-template-columns: 2.3rem minmax(0, 1fr) auto;\n    gap: 0.65rem;\n  }\n  .ordem-faixa[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .botao-download[_ngcontent-%COMP%] {\n    padding-inline: 0.5rem;\n  }\n  .player-publico[_ngcontent-%COMP%] {\n    bottom: 0.5rem;\n    grid-template-columns: auto minmax(0, 1fr);\n    gap: 0.75rem;\n  }\n  .progresso-player[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n  .rodape-pagina[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    justify-content: center;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .carregador[_ngcontent-%COMP%], \n   .mini-carregador[_ngcontent-%COMP%] {\n    animation-duration: 1.5s;\n  }\n  .lista-faixas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.assinatura-fleiva[_ngcontent-%COMP%] {\n  display: flex;\n  width: fit-content;\n  align-items: center;\n  gap: 0.55rem;\n  margin: 2.5rem auto 0;\n  color: var(--app-text-muted);\n  font-size: 0.62rem;\n}\n.assinatura-wordmark[_ngcontent-%COMP%] {\n  width: 3.8rem;\n  aspect-ratio: 1256/596;\n  background: currentColor;\n  mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) center/contain no-repeat;\n  -webkit-mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) center/contain no-repeat;\n  opacity: 0.72;\n  transition: color 160ms ease, opacity 160ms ease;\n}\n.assinatura-fleiva[_ngcontent-%COMP%]:hover   .assinatura-wordmark[_ngcontent-%COMP%] {\n  color: var(--studio-brand);\n  opacity: 1;\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlbumPublico, [{
    type: Component,
    args: [{ selector: "app-album-publico", standalone: true, imports: [], template: `<main
  class="pagina-album tema-claro tema-estudio"
  [style.--studio-brand]="dados.corPrincipal()"
  [style.--studio-on-brand]="dados.corContraste()"
>
  <audio
    #audioPlayer
    preload="metadata"
    (play)="aoReproduzir()"
    (pause)="aoPausar()"
    (ended)="aoEncerrar(audioPlayer)"
    (timeupdate)="aoAtualizarTempo(audioPlayer)"
    (loadedmetadata)="aoCarregarMetadados(audioPlayer)"
  ></audio>

  @if (dados.carregando()) {
    <section class="estado-pagina">
      <span class="carregador" aria-hidden="true"></span>
      <p>Carregando trabalho...</p>
    </section>
  } @else if (dados.erro()) {
    <section class="estado-pagina estado-erro">
      <span class="codigo-estado">404</span>
      <h1>Trabalho indispon\xEDvel</h1>
      <p>{{ dados.erro() }}</p>

      <button
        type="button"
        (click)="carregar()"
      >
        Tentar novamente
      </button>
    </section>
  } @else if (
    dados.estudio(); as estudio
  ) {
    @if (dados.album(); as album) {
      <header class="topo">
        <a
          class="marca"
          [href]="urlEstudio(estudio.slug)"
        >
          <span class="logo-estudio">
            @if (estudio.logo_url) {
              <img
                [src]="estudio.logo_url"
                [alt]="'Logo de ' + estudio.nome"
              />
            } @else {
              {{ inicialEstudio() }}
            }
          </span>

          <span>
            <strong>{{ estudio.nome }}</strong>
            <small>Voltar para o est\xFAdio</small>
          </span>
        </a>

        <span class="selo-publico">
          FLEIVA / PUBLIC
        </span>
      </header>

      <section class="apresentacao-album">
        <div class="capa-principal">
          @if (album.capa_url) {
            <img
              [src]="album.capa_url"
              [alt]="'Capa de ' + album.nome"
            />
          } @else {
            <span>{{ iniciaisProjeto() }}</span>
            <small>{{ album.projeto }}</small>
          }
        </div>

        <div class="identificacao-album">
          <div class="metadados-album">
            <span>{{ ehEnvio() ? 'Processo' : (album.tipo || 'Trabalho') }}</span>
            <i></i>
            <span>
              {{ album.faixas.length }}
              @if (album.faixas.length === 1) {
                @if (ehEnvio()) { arquivo } @else { faixa }
              } @else {
                @if (ehEnvio()) { arquivos } @else { faixas }
              }
            </span>
          </div>

          <h1>{{ album.nome }}</h1>
          <h2>{{ album.projeto }}</h2>

          @if (album.descricao) {
            <p>{{ album.descricao }}</p>
          }

          <div class="permissoes">
            @if (album.reproducao_publica) {
              <span>
                <i></i>
                Audi\xE7\xE3o dispon\xEDvel
              </span>
            }

            @if (album.download_publico) {
              <span>
                <i></i>
                Download dispon\xEDvel
              </span>
            }

            @if (
              !album.reproducao_publica &&
              !album.download_publico
            ) {
              <span>Apresenta\xE7\xE3o p\xFAblica</span>
            }
          </div>
        </div>
      </section>

      @if (erroAcao()) {
        <p class="erro-acao" role="alert">
          {{ erroAcao() }}
        </p>
      }

      <section class="sequencia">
        <header class="cabecalho-sequencia">
          <div>
            <p>
              @if (ehEnvio()) {Ou\xE7a} @else { SEQU\xCANCIA OFICIAL }
            </p>
            <h2>
              @if (ehEnvio()) { Vers\xF5es e arquivos } @else { Faixas }
            </h2>
          </div>

          <span>{{ album.faixas.length }}</span>
        </header>

        @if (album.faixas.length === 0) {
          <p class="sequencia-vazia">
            Este trabalho ainda n\xE3o possui
            @if (ehEnvio()) { arquivos } @else { faixas }
            dispon\xEDveis.
          </p>
        } @else {
          <ol class="lista-faixas">
            @for (
              faixa of album.faixas;
              track faixa.id
            ) {
              <li
                [class.faixa-ativa]="
                  faixaAtivaId() === faixa.id
                "
              >
                <div class="controle-faixa">
                  @if (album.reproducao_publica) {
                    <button
                      type="button"
                      [attr.aria-label]="
                        faixaAtivaId() === faixa.id &&
                        reproduzindo()
                          ? 'Pausar ' + nomePrincipalFaixa(faixa)
                          : 'Ouvir ' + nomePrincipalFaixa(faixa)
                      "
                      [disabled]="
                        carregandoAudioId() !== null
                      "
                      (click)="
                        reproduzir(faixa, audioPlayer)
                      "
                    >
                      @if (
                        carregandoAudioId() === faixa.id
                      ) {
                        <span class="mini-carregador"></span>
                      } @else if (
                        faixaAtivaId() === faixa.id &&
                        reproduzindo()
                      ) {
                        <span aria-hidden="true">\u2161</span>
                      } @else {
                        <span aria-hidden="true">\u25B6</span>
                      }
                    </button>
                  } @else {
                    <span aria-hidden="true">\u2022</span>
                  }
                </div>

                <span class="ordem-faixa">
                  {{ formatarOrdem(faixa.ordem) }}
                </span>

                <div class="identificacao-faixa">
                  <strong>{{ nomePrincipalFaixa(faixa) }}</strong>
                  <span>
                    {{ nomeSecundarioFaixa(faixa) }}
                    \xB7 {{ faixa.nome_arquivo }}
                  </span>
                </div>

                <span class="tamanho-faixa">
                  {{ formatarBytes(faixa.tamanho_bytes) }}
                </span>

                @if (album.download_publico) {
                  <button
                    type="button"
                    class="botao-download"
                    [disabled]="baixandoId() !== null"
                    (click)="baixar(faixa)"
                  >
                    @if (baixandoId() === faixa.id) {
                      Preparando...
                    } @else {
                      Baixar
                    }
                  </button>
                }
              </li>
            }
          </ol>
        }
      </section>

      @if (faixaAtiva(); as faixa) {
        <aside class="player-publico">
          <button
            type="button"
            class="controle-player"
            [disabled]="carregandoAudioId() !== null"
            (click)="reproduzir(faixa, audioPlayer)"
          >
            @if (reproduzindo()) {
              <span aria-hidden="true">\u2161</span>
              <span class="rotulo-acessivel">Pausar</span>
            } @else {
              <span aria-hidden="true">\u25B6</span>
              <span class="rotulo-acessivel">Reproduzir</span>
            }
          </button>

          <div class="faixa-player">
            <strong>{{ nomePrincipalFaixa(faixa) }}</strong>
            <span>
              {{ nomeSecundarioFaixa(faixa) }} \xB7 {{ album.projeto }}
            </span>
          </div>

          <div class="progresso-player">
            <span>{{ formatarTempo(tempoAtual()) }}</span>

            <input
              type="range"
              min="0"
              [max]="duracao() || 0"
              step="0.1"
              [value]="tempoAtual()"
              aria-label="Posi\xE7\xE3o da reprodu\xE7\xE3o"
              (input)="
                alterarTempo($event, audioPlayer)
              "
            />

            <span>{{ formatarTempo(duracao()) }}</span>
          </div>
        </aside>
      }

      <footer class="rodape-pagina">
        <span>{{ estudio.nome }}</span>
        <a
          [href]="urlEstudio(estudio.slug)"
        >
          Ver p\xE1gina do est\xFAdio
        </a>
        <div class="assinatura-fleiva">
          <span>Publicado com</span>

          <span
            class="assinatura-wordmark"
            role="img"
            aria-label="Fl\xEAiva"
          ></span>
        </div>
      </footer>
    }
  }
</main>
`, styles: ['/* apps/studio-dash/src/app/paginas/album-publico/album-publico.scss */\n:host {\n  display: block;\n  min-height: 100dvh;\n}\n.pagina-album {\n  position: relative;\n  min-height: 100dvh;\n  overflow: hidden;\n  padding-bottom: 7rem;\n  background: color-mix(in oklab, var(--studio-brand) 8%, var(--app-surface));\n  color: var(--app-text);\n}\n.pagina-album::before {\n  position: fixed;\n  z-index: 0;\n  inset: 0;\n  pointer-events: none;\n  content: "";\n  opacity: 0.17;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.017) 0.0625rem, transparent 0.0625rem);\n  background-size: 100% 0.25rem;\n}\naudio {\n  display: none;\n}\n.topo,\n.apresentacao-album,\n.erro-acao,\n.sequencia,\n.rodape-pagina {\n  position: relative;\n  z-index: 1;\n  width: min(76rem, 100% - 3rem);\n  margin-inline: auto;\n}\n.topo {\n  display: flex;\n  min-height: 5.5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.marca {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.75rem;\n}\n.marca > span:last-child {\n  display: grid;\n  min-width: 0;\n  gap: 0.12rem;\n}\n.marca strong {\n  overflow: hidden;\n  color: var(--app-text);\n  font-size: 0.76rem;\n  letter-spacing: 0.05em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.marca small {\n  color: var(--app-text-muted);\n  font-size: 0.57rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.logo-estudio {\n  display: grid;\n  width: 2.55rem;\n  height: 2.55rem;\n  flex: 0 0 auto;\n  place-items: center;\n  overflow: hidden;\n  color: var(--studio-brand);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 0.3rem;\n  font-weight: 800;\n}\n.logo-estudio img {\n  width: 100%;\n  height: 100%;\n  padding: 0.15rem;\n  object-fit: scale-down;\n}\n.selo-publico {\n  color: var(--app-text-muted);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.56rem;\n  letter-spacing: 0.12em;\n}\n.apresentacao-album {\n  display: grid;\n  grid-template-columns: minmax(18rem, 0.82fr) minmax(0, 1.18fr);\n  align-items: center;\n  gap: clamp(3rem, 7vw, 7rem);\n  padding: clamp(4rem, 8vw, 7rem) 0;\n}\n.capa-principal {\n  position: relative;\n  display: grid;\n  width: 100%;\n  aspect-ratio: 1;\n  place-items: center;\n  overflow: hidden;\n  background: color-mix(in srgb, var(--studio-brand) 55%, #171a17);\n  color: var(--studio-on-brand);\n  border: 0.0625rem solid var(--app-border-strong);\n  box-shadow: 1.2rem 1.2rem 0 color-mix(in srgb, var(--studio-brand) 11%, transparent), 0 2rem 5rem rgba(0, 0, 0, 0.35);\n}\n.capa-principal img {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.capa-principal > span {\n  font-size: clamp(3rem, 9vw, 7rem);\n  font-weight: 800;\n  letter-spacing: -0.09em;\n}\n.capa-principal > small {\n  position: absolute;\n  right: 1rem;\n  bottom: 1rem;\n  left: 1rem;\n  overflow: hidden;\n  font-size: 0.58rem;\n  letter-spacing: 0.12em;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.identificacao-album {\n  min-width: 0;\n}\n.identificacao-album > h1 {\n  max-width: 12ch;\n  margin: 1rem 0 0.6rem;\n  overflow-wrap: anywhere;\n  color: var(--app-text);\n  font-size: clamp(3.2rem, 8vw, 7rem);\n  font-weight: 760;\n  line-height: 0.88;\n  letter-spacing: -0.07em;\n}\n.identificacao-album > h2 {\n  margin: 0;\n  color: var(--app-text-soft);\n  font-size: clamp(1rem, 2vw, 1.35rem);\n  font-weight: 600;\n}\n.identificacao-album > p {\n  max-width: 42rem;\n  margin: 1.5rem 0 0;\n  color: var(--app-text-soft);\n  font-size: 0.93rem;\n  line-height: 1.7;\n  white-space: pre-wrap;\n}\n.metadados-album {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.55rem;\n  color: var(--studio-brand);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.11em;\n  text-transform: uppercase;\n}\n.metadados-album i {\n  width: 0.25rem;\n  height: 0.25rem;\n  background: currentColor;\n  border-radius: 50%;\n}\n.permissoes {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.45rem;\n  margin-top: 1.7rem;\n}\n.permissoes span {\n  display: inline-flex;\n  min-height: 1.8rem;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.3rem 0.55rem;\n  color: var(--app-text-soft);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 999rem;\n  font-size: 0.57rem;\n  text-transform: uppercase;\n}\n.permissoes i {\n  width: 0.35rem;\n  height: 0.35rem;\n  background: var(--studio-brand);\n  border-radius: 50%;\n}\n.erro-acao {\n  margin-top: -1rem;\n  margin-bottom: 2rem;\n  padding: 0.8rem 1rem;\n  background: var(--color-danger-soft);\n  color: var(--color-danger);\n  border: 0.0625rem solid var(--color-danger-border);\n  border-radius: 0.35rem;\n  font-size: 0.72rem;\n}\n.sequencia {\n  padding: clamp(3.5rem, 7vw, 6rem) 0;\n  border-top: 0.0625rem solid var(--app-border);\n}\n.cabecalho-sequencia {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 1.5rem;\n}\n.cabecalho-sequencia p {\n  margin: 0 0 0.35rem;\n  color: var(--studio-brand);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.56rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n}\n.cabecalho-sequencia h2 {\n  margin: 0;\n  font-size: clamp(2.2rem, 5vw, 3.8rem);\n  line-height: 0.95;\n  letter-spacing: -0.05em;\n}\n.cabecalho-sequencia > span {\n  display: grid;\n  min-width: 2rem;\n  min-height: 2rem;\n  place-items: center;\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border-radius: 50%;\n  font-size: 0.62rem;\n  font-weight: 800;\n}\n.lista-faixas {\n  margin: 0;\n  padding: 0;\n  border-top: 0.0625rem solid var(--app-border);\n  list-style: none;\n}\n.lista-faixas li {\n  display: grid;\n  min-height: 4.7rem;\n  grid-template-columns: 2.4rem 2.4rem minmax(0, 1fr) auto auto;\n  align-items: center;\n  gap: 0.8rem;\n  padding: 0.65rem 0.9rem;\n  border-bottom: 0.0625rem solid var(--app-border);\n  transition: background-color 140ms ease;\n}\n.lista-faixas li:hover,\n.lista-faixas li.faixa-ativa {\n  background: var(--studio-brand-soft);\n}\n.lista-faixas li.faixa-ativa {\n  box-shadow: inset 0.15rem 0 var(--studio-brand);\n}\n.controle-faixa {\n  display: grid;\n  place-items: center;\n}\n.controle-faixa > span {\n  color: var(--app-text-muted);\n}\n.controle-faixa button {\n  display: grid;\n  width: 2.2rem;\n  height: 2.2rem;\n  place-items: center;\n  padding: 0;\n  background: transparent;\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 50%;\n  font-size: 0.58rem;\n}\n.controle-faixa button:hover:not(:disabled) {\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border-color: var(--studio-brand);\n}\n.mini-carregador {\n  width: 0.8rem;\n  height: 0.8rem;\n  border: 0.1rem solid currentColor;\n  border-top-color: transparent;\n  border-radius: 50%;\n  animation: girar 650ms linear infinite;\n}\n.ordem-faixa,\n.tamanho-faixa {\n  color: var(--app-text-muted);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.6rem;\n}\n.identificacao-faixa {\n  display: grid;\n  min-width: 0;\n  gap: 0.22rem;\n}\n.identificacao-faixa strong,\n.identificacao-faixa span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.identificacao-faixa strong {\n  font-size: 0.82rem;\n}\n.identificacao-faixa span {\n  color: var(--app-text-muted);\n  font-size: 0.6rem;\n}\n.botao-download {\n  min-height: 2.2rem;\n  padding: 0.4rem 0.65rem;\n  background: transparent;\n  color: var(--app-text-soft);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 0.25rem;\n  font-size: 0.6rem;\n}\n.botao-download:hover:not(:disabled) {\n  color: var(--studio-brand);\n  border-color: var(--studio-brand-border);\n}\n.sequencia-vazia {\n  margin: 0;\n  padding: 3rem 1rem;\n  color: var(--app-text-muted);\n  border-top: 0.0625rem solid var(--app-border);\n  border-bottom: 0.0625rem solid var(--app-border);\n  text-align: center;\n}\n.player-publico {\n  position: fixed;\n  z-index: 10;\n  bottom: 1rem;\n  left: 0;\n  right: 0;\n  display: grid;\n  width: min(68rem, 100% - 2rem);\n  min-height: 4.5rem;\n  grid-template-columns: auto minmax(9rem, 0.7fr) minmax(14rem, 1.3fr);\n  align-items: center;\n  gap: 1rem;\n  margin: 0 auto;\n  padding: 0.75rem 1rem;\n  background: rgba(22, 25, 22, 0.94);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 0.5rem;\n  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.45);\n  -webkit-backdrop-filter: blur(1rem);\n  backdrop-filter: blur(1rem);\n  animation: subir-player 220ms cubic-bezier(0.16, 0.78, 0.22, 1);\n}\n@keyframes subir-player {\n  from {\n    opacity: 0;\n    transform: translateY(1.2rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .player-publico {\n    animation: none;\n  }\n}\n.controle-player {\n  display: grid;\n  width: 2.7rem;\n  height: 2.7rem;\n  place-items: center;\n  padding: 0;\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0;\n  border-radius: 50%;\n  font-size: 0.65rem;\n}\n.faixa-player {\n  display: grid;\n  min-width: 0;\n  gap: 0.2rem;\n}\n.faixa-player strong,\n.faixa-player span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.faixa-player strong {\n  font-size: 0.75rem;\n}\n.faixa-player span {\n  color: var(--app-text-muted);\n  font-size: 0.58rem;\n}\n.progresso-player {\n  display: grid;\n  grid-template-columns: 2.5rem minmax(0, 1fr) 2.5rem;\n  align-items: center;\n  gap: 0.6rem;\n}\n.progresso-player span {\n  color: var(--app-text-muted);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.55rem;\n  text-align: center;\n}\n.progresso-player input {\n  width: 100%;\n  accent-color: var(--studio-brand);\n}\n.rodape-pagina {\n  display: flex;\n  min-height: 5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  border-top: 0.0625rem solid var(--app-border);\n  color: var(--app-text-muted);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.57rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.rodape-pagina a:hover {\n  color: var(--studio-brand);\n}\n.estado-pagina {\n  display: grid;\n  width: min(32rem, 100% - 2rem);\n  min-height: 100dvh;\n  align-content: center;\n  justify-items: center;\n  gap: 1rem;\n  margin: auto;\n  text-align: center;\n}\n.estado-pagina h1,\n.estado-pagina p {\n  margin: 0;\n}\n.estado-pagina p {\n  color: var(--app-text-soft);\n}\n.estado-pagina button {\n  min-height: 2.6rem;\n  padding: 0 0.9rem;\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0;\n  border-radius: 0.3rem;\n  font-size: 0.7rem;\n  font-weight: 750;\n}\n.codigo-estado {\n  color: var(--studio-brand);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.62rem;\n  letter-spacing: 0.14em;\n}\n.estado-erro h1 {\n  font-size: clamp(2rem, 7vw, 3.5rem);\n}\n.carregador {\n  width: 1.8rem;\n  height: 1.8rem;\n  border: 0.14rem solid var(--app-border);\n  border-top-color: var(--studio-brand);\n  border-radius: 50%;\n  animation: girar 700ms linear infinite;\n}\n.rotulo-acessivel {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  white-space: nowrap;\n}\nbutton:disabled {\n  opacity: 0.55;\n}\n@keyframes girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 52rem) {\n  .apresentacao-album {\n    grid-template-columns: minmax(14rem, 22rem) minmax(0, 1fr);\n    gap: 3rem;\n  }\n  .identificacao-album > h1 {\n    font-size: clamp(2.8rem, 8vw, 5rem);\n  }\n  .lista-faixas li {\n    grid-template-columns: 2.4rem 2rem minmax(0, 1fr) auto;\n  }\n  .tamanho-faixa {\n    display: none;\n  }\n}\n@media (max-width: 40rem) {\n  .topo,\n  .apresentacao-album,\n  .erro-acao,\n  .sequencia,\n  .rodape-pagina {\n    width: min(76rem, 100% - 2rem);\n  }\n  .apresentacao-album {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n    padding: 3rem 0 4rem;\n  }\n  .capa-principal {\n    width: min(100%, 27rem);\n  }\n  .identificacao-album > h1 {\n    max-width: 14ch;\n    font-size: clamp(3rem, 15vw, 5rem);\n  }\n  .lista-faixas li {\n    grid-template-columns: 2.3rem minmax(0, 1fr) auto;\n    gap: 0.65rem;\n  }\n  .ordem-faixa {\n    display: none;\n  }\n  .botao-download {\n    padding-inline: 0.5rem;\n  }\n  .player-publico {\n    bottom: 0.5rem;\n    grid-template-columns: auto minmax(0, 1fr);\n    gap: 0.75rem;\n  }\n  .progresso-player {\n    grid-column: 1/-1;\n  }\n  .rodape-pagina {\n    align-items: flex-start;\n    flex-direction: column;\n    justify-content: center;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .carregador,\n  .mini-carregador {\n    animation-duration: 1.5s;\n  }\n  .lista-faixas li {\n    transition: none;\n  }\n}\n.assinatura-fleiva {\n  display: flex;\n  width: fit-content;\n  align-items: center;\n  gap: 0.55rem;\n  margin: 2.5rem auto 0;\n  color: var(--app-text-muted);\n  font-size: 0.62rem;\n}\n.assinatura-wordmark {\n  width: 3.8rem;\n  aspect-ratio: 1256/596;\n  background: currentColor;\n  mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) center/contain no-repeat;\n  -webkit-mask: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png) center/contain no-repeat;\n  opacity: 0.72;\n  transition: color 160ms ease, opacity 160ms ease;\n}\n.assinatura-fleiva:hover .assinatura-wordmark {\n  color: var(--studio-brand);\n  opacity: 1;\n}\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlbumPublico, { className: "AlbumPublico", filePath: "apps/studio-dash/src/app/paginas/album-publico/album-publico.ts", lineNumber: 25 });
})();
export {
  AlbumPublico
};
