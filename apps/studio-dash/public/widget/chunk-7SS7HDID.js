import {
  ActivatedRoute,
  Component,
  DadosAlbumCompartilhado,
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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
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

// apps/studio-dash/src/app/paginas/album-compartilhado/album-compartilhado.ts
var _forTrack0 = ($index, $item) => $item.item_id;
function AlbumCompartilhado_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 1);
    \u0275\u0275domElement(1, "span", 3);
    \u0275\u0275domElementStart(2, "p");
    \u0275\u0275text(3, "Preparando compartilhamento...");
    \u0275\u0275domElementEnd()();
  }
}
function AlbumCompartilhado_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 7);
    \u0275\u0275domListener("click", function AlbumCompartilhado_Conditional_2_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.recarregar());
    });
    \u0275\u0275text(1, " Tentar novamente ");
    \u0275\u0275domElementEnd();
  }
}
function AlbumCompartilhado_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 2)(1, "div", 4);
    \u0275\u0275text(2, "F");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 5);
    \u0275\u0275text(4, "\xC1LBUM COMPARTILHADO");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "h1");
    \u0275\u0275text(6, "\xC1lbum indispon\xEDvel");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(9, AlbumCompartilhado_Conditional_2_Conditional_9_Template, 2, 0, "button", 6);
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
function AlbumCompartilhado_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 11);
  }
  if (rf & 2) {
    const album_r3 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", album_r3.estudio.logo_url, \u0275\u0275sanitizeUrl)("alt", "Logo de " + album_r3.estudio.nome);
  }
}
function AlbumCompartilhado_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.inicialEstudio(), " ");
  }
}
function AlbumCompartilhado_Conditional_3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 11);
  }
  if (rf & 2) {
    const album_r3 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", album_r3.capa_url, \u0275\u0275sanitizeUrl)("alt", "Capa de " + album_r3.projeto);
  }
}
function AlbumCompartilhado_Conditional_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "small");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const album_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.iniciaisProjeto());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(album_r3.projeto);
  }
}
function AlbumCompartilhado_Conditional_3_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const album_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", album_r3.observacoes, " ");
  }
}
function AlbumCompartilhado_Conditional_3_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 27);
    \u0275\u0275domListener("click", function AlbumCompartilhado_Conditional_3_Conditional_30_Template_button_click_0_listener() {
      const primeiraFaixa_r5 = \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reproduzir(primeiraFaixa_r5));
    });
    \u0275\u0275domElementStart(1, "span", 17);
    \u0275\u0275text(2, "\u25B6");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Ouvir do in\xEDcio ");
    \u0275\u0275domElementEnd();
  }
}
function AlbumCompartilhado_Conditional_3_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 22)(1, "span", 17);
    \u0275\u0275text(2, "\u266A");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "Este compartilhamento ainda n\xE3o possui arquivos dispon\xEDveis.");
    \u0275\u0275domElementEnd()();
  }
}
function AlbumCompartilhado_Conditional_3_Conditional_41_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const faixa_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(faixa_r7.observacoes);
  }
}
function AlbumCompartilhado_Conditional_3_Conditional_41_For_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " ... ");
  }
}
function AlbumCompartilhado_Conditional_3_Conditional_41_For_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2193 ");
  }
}
function AlbumCompartilhado_Conditional_3_Conditional_41_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "li")(1, "button", 29);
    \u0275\u0275domListener("click", function AlbumCompartilhado_Conditional_3_Conditional_41_For_2_Template_button_click_1_listener() {
      const faixa_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.reproduzir(faixa_r7));
    });
    \u0275\u0275domElementStart(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 31);
    \u0275\u0275text(5, " \u25B6 ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 32)(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(11, AlbumCompartilhado_Conditional_3_Conditional_41_For_2_Conditional_11_Template, 2, 1, "p");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div", 33)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "small");
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(17, "button", 34);
    \u0275\u0275domListener("click", function AlbumCompartilhado_Conditional_3_Conditional_41_For_2_Template_button_click_17_listener() {
      const faixa_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.baixar(faixa_r7));
    });
    \u0275\u0275conditionalCreate(18, AlbumCompartilhado_Conditional_3_Conditional_41_For_2_Conditional_18_Template, 1, 0)(19, AlbumCompartilhado_Conditional_3_Conditional_41_For_2_Conditional_19_Template, 1, 0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const faixa_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("faixa-ativa", ctx_r1.faixaAtivaId() === faixa_r7.item_id);
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", !ctx_r1.podeReproduzir(faixa_r7));
    \u0275\u0275attribute("aria-label", "Ouvir " + faixa_r7.versao + " de " + faixa_r7.faixa);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatarOrdem(faixa_r7.ordem), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(faixa_r7.versao);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faixa_r7.faixa);
    \u0275\u0275advance();
    \u0275\u0275conditional(faixa_r7.observacoes ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faixa_r7.nome_arquivo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatarBytes(faixa_r7.tamanho_bytes), " ");
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r1.baixandoFaixaId() !== null);
    \u0275\u0275attribute("aria-label", "Baixar " + faixa_r7.versao + " de " + faixa_r7.faixa);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.baixandoFaixaId() === faixa_r7.item_id ? 18 : 19);
  }
}
function AlbumCompartilhado_Conditional_3_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ol", 23);
    \u0275\u0275repeaterCreate(1, AlbumCompartilhado_Conditional_3_Conditional_41_For_2_Template, 20, 13, "li", 28, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const album_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(album_r3.faixas);
  }
}
function AlbumCompartilhado_Conditional_3_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.erroDownload(), " ");
  }
}
function AlbumCompartilhado_Conditional_3_Conditional_43_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 37);
  }
  if (rf & 2) {
    const album_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("src", album_r3.capa_url, \u0275\u0275sanitizeUrl);
  }
}
function AlbumCompartilhado_Conditional_3_Conditional_43_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.iniciaisProjeto(), " ");
  }
}
function AlbumCompartilhado_Conditional_3_Conditional_43_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.erroReproducao());
  }
}
function AlbumCompartilhado_Conditional_3_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "section", 25)(1, "div", 35)(2, "span", 36);
    \u0275\u0275conditionalCreate(3, AlbumCompartilhado_Conditional_3_Conditional_43_Conditional_3_Template, 1, 1, "img", 37)(4, AlbumCompartilhado_Conditional_3_Conditional_43_Conditional_4_Template, 1, 1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(10, "div", 38)(11, "audio", 39);
    \u0275\u0275domListener("ended", function AlbumCompartilhado_Conditional_3_Conditional_43_Template_audio_ended_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reproduzirProxima());
    })("error", function AlbumCompartilhado_Conditional_3_Conditional_43_Template_audio_error_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.registrarErroReproducao());
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(12, AlbumCompartilhado_Conditional_3_Conditional_43_Conditional_12_Template, 2, 1, "p");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const faixa_r9 = ctx;
    const album_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(album_r3.capa_url ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(faixa_r9.versao);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faixa_r9.faixa);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("src", faixa_r9.reproducao_url);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.erroReproducao() ? 12 : -1);
  }
}
function AlbumCompartilhado_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "header", 8)(1, "div", 9)(2, "span", 10);
    \u0275\u0275conditionalCreate(3, AlbumCompartilhado_Conditional_3_Conditional_3_Template, 1, 2, "img", 11)(4, AlbumCompartilhado_Conditional_3_Conditional_4_Template, 1, 1);
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
    \u0275\u0275domElementStart(12, "section", 13)(13, "div", 14);
    \u0275\u0275conditionalCreate(14, AlbumCompartilhado_Conditional_3_Conditional_14_Template, 1, 2, "img", 11)(15, AlbumCompartilhado_Conditional_3_Conditional_15_Template, 4, 2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "div", 15)(17, "p", 5);
    \u0275\u0275text(18, "RASCUNHO COMPARTILHADO");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "h1");
    \u0275\u0275text(20);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(21, "h2");
    \u0275\u0275text(22);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "div", 16)(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(26, "i", 17);
    \u0275\u0275domElementStart(27, "span");
    \u0275\u0275text(28, "Vers\xF5es privadas");
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(29, AlbumCompartilhado_Conditional_3_Conditional_29_Template, 2, 1, "p", 18);
    \u0275\u0275conditionalCreate(30, AlbumCompartilhado_Conditional_3_Conditional_30_Template, 4, 0, "button", 19);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(31, "section", 20)(32, "header", 21)(33, "span");
    \u0275\u0275text(34, "#");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(35, "span");
    \u0275\u0275text(36, "Vers\xE3o");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(37, "span");
    \u0275\u0275text(38, "Arquivo");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(39, "span");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(40, AlbumCompartilhado_Conditional_3_Conditional_40_Template, 5, 0, "div", 22)(41, AlbumCompartilhado_Conditional_3_Conditional_41_Template, 3, 0, "ol", 23);
    \u0275\u0275conditionalCreate(42, AlbumCompartilhado_Conditional_3_Conditional_42_Template, 2, 1, "p", 24);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(43, AlbumCompartilhado_Conditional_3_Conditional_43_Template, 13, 5, "section", 25);
    \u0275\u0275domElementStart(44, "footer", 26)(45, "span");
    \u0275\u0275text(46, "FLEIVA STUDIOS");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(47, "p");
    \u0275\u0275text(48, "Arquivos profissionais, organizados em um s\xF3 lugar.");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_12_0;
    const album_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(album_r3.estudio.logo_url ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(album_r3.estudio.nome);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(album_r3.capa_url ? 14 : 15);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(album_r3.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(album_r3.projeto);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.rotuloQuantidadeFaixas(album_r3.faixas.length), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(album_r3.observacoes ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_9_0 = ctx_r1.primeiraFaixaReproduzivel()) ? 30 : -1, tmp_9_0);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(album_r3.faixas.length === 0 ? 40 : 41);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.erroDownload() ? 42 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_12_0 = ctx_r1.faixaAtiva()) ? 43 : -1, tmp_12_0);
  }
}
var AlbumCompartilhado = class _AlbumCompartilhado {
  dados = inject(DadosAlbumCompartilhado);
  rota = inject(ActivatedRoute);
  token = signal(
    null,
    ...ngDevMode ? [{ debugName: "token" }] : (
      /* istanbul ignore next */
      []
    )
  );
  faixaAtivaId = signal(
    null,
    ...ngDevMode ? [{ debugName: "faixaAtivaId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  baixandoFaixaId = signal(
    null,
    ...ngDevMode ? [{ debugName: "baixandoFaixaId" }] : (
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
  faixaAtiva = computed(
    () => {
      const faixaAtivaId = this.faixaAtivaId();
      return this.dados.album()?.faixas.find((faixa) => faixa.item_id === faixaAtivaId) ?? null;
    },
    ...ngDevMode ? [{ debugName: "faixaAtiva" }] : (
      /* istanbul ignore next */
      []
    )
  );
  primeiraFaixaReproduzivel = computed(
    () => this.dados.album()?.faixas.find((faixa) => this.podeReproduzir(faixa)) ?? null,
    ...ngDevMode ? [{ debugName: "primeiraFaixaReproduzivel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  corPrincipal = computed(
    () => {
      const cor = this.dados.album()?.estudio.cor_principal;
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
  reproduzir(faixa) {
    if (!this.podeReproduzir(faixa)) {
      return;
    }
    this.erroReproducao.set(null);
    this.faixaAtivaId.set(faixa.item_id);
  }
  reproduzirProxima() {
    const album = this.dados.album();
    const faixaAtual = this.faixaAtiva();
    if (!album || !faixaAtual) {
      return;
    }
    const faixasReproduziveis = album.faixas.filter((faixa) => this.podeReproduzir(faixa));
    const indiceAtual = faixasReproduziveis.findIndex((faixa) => faixa.item_id === faixaAtual.item_id);
    const proximaFaixa = faixasReproduziveis[indiceAtual + 1];
    if (proximaFaixa) {
      this.faixaAtivaId.set(proximaFaixa.item_id);
    }
  }
  registrarErroReproducao() {
    this.erroReproducao.set("A reprodu\xE7\xE3o foi interrompida. Recarregue o \xE1lbum para renovar o acesso.");
  }
  async baixar(faixa) {
    const token = this.token();
    if (!token || this.baixandoFaixaId()) {
      return;
    }
    this.baixandoFaixaId.set(faixa.item_id);
    this.erroDownload.set(null);
    try {
      const download = await this.dados.obterDownload(token, faixa.item_id);
      const link = document.createElement("a");
      link.href = download.url;
      link.download = download.nome_arquivo;
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (erro) {
      this.erroDownload.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel baixar a faixa."));
    } finally {
      this.baixandoFaixaId.set(null);
    }
  }
  podeReproduzir(faixa) {
    if (faixa.tipo_mime?.startsWith("audio/")) {
      return true;
    }
    return /\.(aac|flac|m4a|mp3|ogg|wav|webm)$/i.test(faixa.nome_arquivo);
  }
  inicialEstudio() {
    return this.dados.album()?.estudio.nome.trim().charAt(0).toLocaleUpperCase("pt-BR") || "F";
  }
  iniciaisProjeto() {
    const projeto = this.dados.album()?.projeto ?? "";
    const palavras = projeto.trim().split(/\s+/).filter(Boolean);
    return palavras.slice(0, 2).map((palavra) => palavra.charAt(0)).join("").toLocaleUpperCase("pt-BR") || "FL";
  }
  rotuloQuantidadeFaixas(quantidade) {
    return quantidade === 1 ? "1 faixa" : `${quantidade} faixas`;
  }
  formatarOrdem(ordem) {
    return String(ordem).padStart(2, "0");
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
  async carregar(token) {
    this.erroLocal.set(null);
    this.erroDownload.set(null);
    this.erroReproducao.set(null);
    this.faixaAtivaId.set(null);
    await this.dados.carregar(token);
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
  static \u0275fac = function AlbumCompartilhado_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlbumCompartilhado)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlbumCompartilhado, selectors: [["app-album-compartilhado"]], decls: 4, vars: 5, consts: [[1, "pagina-publica"], [1, "estado-pagina"], [1, "estado-pagina", "estado-erro"], ["aria-hidden", "true", 1, "carregador"], [1, "marca-fleiva"], [1, "rotulo"], ["type", "button", 1, "botao-secundario"], ["type", "button", 1, "botao-secundario", 3, "click"], [1, "topo-publico"], [1, "identidade-estudio"], [1, "logo-estudio"], [3, "src", "alt"], [1, "selo-privado"], [1, "apresentacao-album"], [1, "capa-album"], [1, "identificacao-album"], [1, "resumo-album"], ["aria-hidden", "true"], [1, "observacoes-album"], ["type", "button", 1, "botao-ouvir-album"], [1, "conteudo-album"], ["aria-hidden", "true", 1, "cabecalho-lista"], [1, "album-vazio"], [1, "lista-faixas"], [1, "mensagem-erro"], [1, "player-atual"], [1, "rodape-publico"], ["type", "button", 1, "botao-ouvir-album", 3, "click"], [3, "faixa-ativa"], ["type", "button", 1, "botao-reproduzir", 3, "click", "disabled"], [1, "numero-faixa"], ["aria-hidden", "true", 1, "icone-reproduzir"], [1, "identificacao-faixa"], [1, "metadados-faixa"], ["type", "button", 1, "botao-download", 3, "click", "disabled"], [1, "faixa-player"], [1, "miniatura-player"], ["alt", "", 3, "src"], [1, "controle-player"], ["controls", "", "autoplay", "", "preload", "metadata", 3, "ended", "error", "src"]], template: function AlbumCompartilhado_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "main", 0);
      \u0275\u0275conditionalCreate(1, AlbumCompartilhado_Conditional_1_Template, 4, 0, "section", 1)(2, AlbumCompartilhado_Conditional_2_Template, 10, 2, "section", 2)(3, AlbumCompartilhado_Conditional_3_Template, 49, 11);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275styleProp("--studio-accent", ctx.corPrincipal())("--studio-on-accent", ctx.corSobrePrincipal());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dados.carregando() ? 1 : ctx.erroLocal() || ctx.dados.erro() ? 2 : (tmp_2_0 = ctx.dados.album()) ? 3 : -1, tmp_2_0);
    }
  }, styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background: var(--studio-brand);\n  color: #f2f4f1;\n  font-family:\n    Inter,\n    ui-sans-serif,\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  font-synthesis: none;\n  -webkit-font-smoothing: antialiased;\n}\n.pagina-publica[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  box-sizing: border-box;\n  padding: clamp(1rem, 3vw, 2.25rem);\n  background:\n    radial-gradient(\n      circle at 78% 4%,\n      color-mix(in oklab, var(--studio-accent) 20%, transparent),\n      transparent 28rem),\n    linear-gradient(\n      145deg,\n      #151715,\n      #090a09 68%);\n}\nbutton[_ngcontent-%COMP%], \naudio[_ngcontent-%COMP%] {\n  font: inherit;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\nbutton[_ngcontent-%COMP%]:focus-visible, \naudio[_ngcontent-%COMP%]:focus-visible {\n  outline: 0.15rem solid var(--studio-accent);\n  outline-offset: 0.15rem;\n}\n.topo-publico[_ngcontent-%COMP%], \n.apresentacao-album[_ngcontent-%COMP%], \n.conteudo-album[_ngcontent-%COMP%], \n.player-atual[_ngcontent-%COMP%], \n.rodape-publico[_ngcontent-%COMP%] {\n  width: min(100%, 76rem);\n  margin-right: auto;\n  margin-left: auto;\n}\n.topo-publico[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 3.5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: clamp(2.5rem, 7vh, 5rem);\n}\n.identidade-estudio[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.75rem;\n}\n.identidade-estudio[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  display: grid;\n  min-width: 0;\n  gap: 0.15rem;\n}\n.identidade-estudio[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.identidade-estudio[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.identidade-estudio[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 720;\n  background-color: --brand-sage;\n}\n.identidade-estudio[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n}\n.logo-estudio[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.75rem;\n  height: 2.75rem;\n  flex: 0 0 auto;\n  place-items: center;\n  overflow: hidden;\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border-radius: 0.2rem;\n  font-size: 1rem;\n  font-weight: 800;\n}\n.logo-estudio[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.selo-privado[_ngcontent-%COMP%] {\n  padding: 0.32rem 0.48rem;\n  color: #9ca19c;\n  border: 0.0625rem solid #3b3e3b;\n  border-radius: 0.18rem;\n  font-size: 0.54rem;\n  font-weight: 740;\n  letter-spacing: 0.1em;\n}\n.apresentacao-album[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(15rem, 25rem) minmax(0, 1fr);\n  align-items: end;\n  gap: clamp(2rem, 6vw, 5.5rem);\n}\n.capa-album[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  width: 100%;\n  aspect-ratio: 1;\n  place-items: center;\n  overflow: hidden;\n  isolation: isolate;\n  background:\n    linear-gradient(\n      135deg,\n      transparent 0 48%,\n      rgba(255, 255, 255, 0.16) 48% 50%,\n      transparent 50%),\n    linear-gradient(\n      145deg,\n      color-mix(in oklab, var(--studio-accent) 35%, #252825),\n      var(--studio-accent));\n  color: var(--studio-on-accent);\n  border: 0.0625rem solid rgba(255, 255, 255, 0.13);\n  border-radius: 0.18rem;\n  box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.55), 0 2.2rem 5rem rgba(0, 0, 0, 0.42);\n}\n.capa-album[_ngcontent-%COMP%]::before {\n  position: absolute;\n  z-index: -1;\n  width: 52%;\n  height: 52%;\n  border: 0.0625rem solid currentColor;\n  content: "";\n  opacity: 0.18;\n  transform: rotate(45deg);\n}\n.capa-album[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.capa-album[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  font-size: clamp(2.5rem, 8vw, 5rem);\n  font-weight: 800;\n  letter-spacing: -0.08em;\n}\n.capa-album[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  bottom: 0.9rem;\n  left: 1rem;\n  overflow: hidden;\n  font-size: 0.58rem;\n  font-weight: 760;\n  letter-spacing: 0.11em;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.identificacao-album[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding-bottom: 0.35rem;\n}\n.identificacao-album[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 13ch;\n  margin: 0.7rem 0 0;\n  overflow-wrap: anywhere;\n  font-size: clamp(3rem, 8vw, 6.5rem);\n  font-weight: 760;\n  line-height: 0.84;\n  letter-spacing: -0.075em;\n}\n.identificacao-album[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  color: #c6cac6;\n  font-size: 0.9rem;\n  font-weight: 620;\n}\n.rotulo[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #858b85;\n  font-size: 0.56rem;\n  font-weight: 760;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n.resumo-album[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  margin-top: 0.75rem;\n  color: #7f847f;\n  font-size: 0.62rem;\n}\n.resumo-album[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 0.18rem;\n  height: 0.18rem;\n  background: #646964;\n  border-radius: 999rem;\n}\n.observacoes-album[_ngcontent-%COMP%] {\n  max-width: 45rem;\n  margin: 1.25rem 0 0;\n  color: #a7aca7;\n  font-size: 0.74rem;\n  line-height: 1.6;\n  white-space: pre-wrap;\n}\n.botao-ouvir-album[_ngcontent-%COMP%], \n.botao-secundario[_ngcontent-%COMP%] {\n  min-height: 2.75rem;\n  padding: 0.62rem 1rem;\n  border-radius: 0.22rem;\n  font-size: 0.68rem;\n  font-weight: 740;\n}\n.botao-ouvir-album[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.55rem;\n  margin-top: 1.5rem;\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border: 0.0625rem solid var(--studio-accent);\n}\n.botao-ouvir-album[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.95) saturate(1.08);\n}\n.conteudo-album[_ngcontent-%COMP%] {\n  margin-top: clamp(2.5rem, 7vh, 5rem);\n  overflow: hidden;\n  background: rgba(17, 19, 17, 0.72);\n  border: 0.0625rem solid #303330;\n  border-radius: 0.25rem;\n  -webkit-backdrop-filter: blur(0.8rem);\n  backdrop-filter: blur(0.8rem);\n}\n.cabecalho-lista[_ngcontent-%COMP%], \n.lista-faixas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 3rem minmax(12rem, 1fr) minmax(9rem, 17rem) 2.5rem;\n  align-items: center;\n  gap: 0.8rem;\n}\n.cabecalho-lista[_ngcontent-%COMP%] {\n  min-height: 2.6rem;\n  padding: 0 1rem;\n  color: #666b66;\n  border-bottom: 0.0625rem solid #303330;\n  font-size: 0.53rem;\n  font-weight: 720;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n}\n.lista-faixas[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.lista-faixas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  min-height: 4.6rem;\n  padding: 0.65rem 1rem;\n  border-bottom: 0.0625rem solid #292c29;\n  transition: background-color 130ms ease;\n}\n.lista-faixas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.lista-faixas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, \n.lista-faixas[_ngcontent-%COMP%]   li.faixa-ativa[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.045);\n}\n.botao-reproduzir[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.3rem;\n  height: 2.3rem;\n  place-items: center;\n  padding: 0;\n  background: transparent;\n  color: #767b76;\n  border: 0;\n  border-radius: 999rem;\n}\n.icone-reproduzir[_ngcontent-%COMP%] {\n  display: none;\n  color: var(--studio-accent);\n  font-size: 0.65rem;\n}\n.lista-faixas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .numero-faixa[_ngcontent-%COMP%], \n.faixa-ativa[_ngcontent-%COMP%]   .numero-faixa[_ngcontent-%COMP%] {\n  display: none;\n}\n.lista-faixas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .icone-reproduzir[_ngcontent-%COMP%], \n.faixa-ativa[_ngcontent-%COMP%]   .icone-reproduzir[_ngcontent-%COMP%] {\n  display: inline;\n}\n.numero-faixa[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n}\n.identificacao-faixa[_ngcontent-%COMP%], \n.metadados-faixa[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.22rem;\n}\n.identificacao-faixa[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-size: 0.8rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.identificacao-faixa[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: color-mix(in srgb, var(--studio-accent) 58%, #c4c8c4);\n  font-size: 0.6rem;\n}\n.identificacao-faixa[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 60ch;\n  margin: 0.18rem 0 0;\n  overflow: hidden;\n  color: #747974;\n  font-size: 0.58rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.metadados-faixa[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: #8b908b;\n  font-size: 0.62rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.metadados-faixa[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #616661;\n  font-size: 0.55rem;\n}\n.botao-download[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.25rem;\n  height: 2.25rem;\n  place-items: center;\n  padding: 0;\n  background: transparent;\n  color: #9da29d;\n  border: 0.0625rem solid #3b3f3b;\n  border-radius: 999rem;\n  font-size: 0.85rem;\n}\n.botao-download[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border-color: var(--studio-accent);\n}\n.mensagem-erro[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.75rem 1rem;\n  color: #ff7770;\n  border-top: 0.0625rem solid #303330;\n  font-size: 0.66rem;\n}\n.album-vazio[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 11rem;\n  place-content: center;\n  justify-items: center;\n  color: #727772;\n}\n.album-vazio[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.album-vazio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0;\n  font-size: 0.72rem;\n}\n.player-atual[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 10;\n  bottom: 1rem;\n  display: grid;\n  grid-template-columns: minmax(10rem, 0.8fr) minmax(18rem, 1.5fr);\n  align-items: center;\n  gap: 1.25rem;\n  box-sizing: border-box;\n  margin-top: 1rem;\n  padding: 0.75rem;\n  background: rgba(24, 27, 24, 0.94);\n  border: 0.0625rem solid #3a3e3a;\n  border-radius: 0.3rem;\n  box-shadow: 0 1.25rem 3rem rgba(0, 0, 0, 0.45);\n  -webkit-backdrop-filter: blur(1rem);\n  backdrop-filter: blur(1rem);\n}\n.faixa-player[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.7rem;\n}\n.faixa-player[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  display: grid;\n  min-width: 0;\n  gap: 0.2rem;\n}\n.faixa-player[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.faixa-player[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.faixa-player[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: color-mix(in srgb, var(--studio-accent) 58%, #c4c8c4);\n  font-size: 0.6rem;\n}\n.faixa-player[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #898e89;\n  font-size: 0.58rem;\n}\n.miniatura-player[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.9rem;\n  height: 2.9rem;\n  flex: 0 0 auto;\n  place-items: center;\n  overflow: hidden;\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  font-size: 0.7rem;\n  font-weight: 780;\n}\n.miniatura-player[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.controle-player[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.controle-player[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 2.7rem;\n  accent-color: var(--studio-accent);\n}\n.controle-player[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0;\n  color: #ff7770;\n  font-size: 0.58rem;\n}\n.rodape-publico[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: clamp(3rem, 8vh, 6rem);\n  padding-top: 1rem;\n  color: #686d68;\n  border-top: 0.0625rem solid #292c29;\n}\n.rodape-publico[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n}\n.rodape-publico[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.58rem;\n}\n.estado-pagina[_ngcontent-%COMP%] {\n  display: grid;\n  width: min(100%, 34rem);\n  min-height: calc(100vh - 4rem);\n  place-content: center;\n  justify-items: center;\n  gap: 0.8rem;\n  box-sizing: border-box;\n  margin: 0 auto;\n  text-align: center;\n}\n.estado-pagina[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2rem, 8vw, 3.5rem);\n  line-height: 0.95;\n  letter-spacing: -0.05em;\n}\n.estado-pagina[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:not(.rotulo) {\n  max-width: 28rem;\n  margin: 0;\n  color: #9ba09b;\n  line-height: 1.5;\n}\n.marca-fleiva[_ngcontent-%COMP%] {\n  display: grid;\n  width: 3rem;\n  height: 3rem;\n  place-items: center;\n  margin-bottom: 0.5rem;\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border-radius: 0.2rem;\n  font-weight: 800;\n}\n.botao-secundario[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  background: transparent;\n  color: #f4f5f1;\n  border: 0.0625rem solid #444844;\n}\n.botao-secundario[_ngcontent-%COMP%]:hover {\n  background: #202320;\n}\n.carregador[_ngcontent-%COMP%] {\n  display: block;\n  width: 1.2rem;\n  height: 1.2rem;\n  box-sizing: border-box;\n  border: 0.13rem solid #464a46;\n  border-top-color: var(--studio-accent);\n  border-radius: 999rem;\n  animation: _ngcontent-%COMP%_girar 650ms linear infinite;\n}\n@keyframes _ngcontent-%COMP%_girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .carregador[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 52rem) {\n  .apresentacao-album[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(10rem, 17rem) minmax(0, 1fr);\n    gap: 2rem;\n  }\n  .identificacao-album[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(2.5rem, 8vw, 4.5rem);\n  }\n  .cabecalho-lista[_ngcontent-%COMP%], \n   .lista-faixas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    grid-template-columns: 2.7rem minmax(9rem, 1fr) 2.5rem;\n  }\n  .cabecalho-lista[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3), \n   .metadados-faixa[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 38rem) {\n  .pagina-publica[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .topo-publico[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n  .selo-privado[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .apresentacao-album[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .capa-album[_ngcontent-%COMP%] {\n    width: min(78vw, 20rem);\n  }\n  .identificacao-album[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    max-width: none;\n    font-size: clamp(2.7rem, 14vw, 4.5rem);\n  }\n  .conteudo-album[_ngcontent-%COMP%] {\n    margin-top: 2.5rem;\n  }\n  .cabecalho-lista[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .lista-faixas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    grid-template-columns: 2.5rem minmax(0, 1fr) 2.4rem;\n    gap: 0.55rem;\n    padding: 0.75rem;\n  }\n  .player-atual[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.65rem;\n  }\n  .miniatura-player[_ngcontent-%COMP%] {\n    width: 2.4rem;\n    height: 2.4rem;\n  }\n  .rodape-publico[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlbumCompartilhado, [{
    type: Component,
    args: [{ selector: "app-album-compartilhado", standalone: true, imports: [], template: `<main
  class="pagina-publica"
  [style.--studio-accent]="corPrincipal()"
  [style.--studio-on-accent]="corSobrePrincipal()"
>
  @if (dados.carregando()) {
    <section class="estado-pagina">
      <span class="carregador" aria-hidden="true"></span>
      <p>Preparando compartilhamento...</p>
    </section>
  } @else if (erroLocal() || dados.erro()) {
    <section class="estado-pagina estado-erro">
      <div class="marca-fleiva">F</div>
      <p class="rotulo">\xC1LBUM COMPARTILHADO</p>
      <h1>\xC1lbum indispon\xEDvel</h1>
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
  } @else if (dados.album(); as album) {
    <header class="topo-publico">
      <div class="identidade-estudio">
        <span class="logo-estudio">
          @if (album.estudio.logo_url) {
            <img
              [src]="album.estudio.logo_url"
              [alt]="'Logo de ' + album.estudio.nome"
            />
          } @else {
            {{ inicialEstudio() }}
          }
        </span>

        <span>
          <strong>{{ album.estudio.nome }}</strong>
          <small>Compartilhado pelo Fleiva</small>
        </span>
      </div>

      <span class="selo-privado">LINK PRIVADO</span>
    </header>

    <section class="apresentacao-album">
      <div class="capa-album">
        @if (album.capa_url) {
          <img
            [src]="album.capa_url"
            [alt]="'Capa de ' + album.projeto"
          />
        } @else {
          <strong>{{ iniciaisProjeto() }}</strong>
          <small>{{ album.projeto }}</small>
        }
      </div>

      <div class="identificacao-album">
        <p class="rotulo">RASCUNHO COMPARTILHADO</p>
        <h1>{{ album.nome }}</h1>
        <h2>{{ album.projeto }}</h2>

        <div class="resumo-album">
          <span>
            {{ rotuloQuantidadeFaixas(album.faixas.length) }}
          </span>
          <i aria-hidden="true"></i>
          <span>Vers\xF5es privadas</span>
        </div>

        @if (album.observacoes) {
          <p class="observacoes-album">
            {{ album.observacoes }}
          </p>
        }

        @if (primeiraFaixaReproduzivel(); as primeiraFaixa) {
          <button
            type="button"
            class="botao-ouvir-album"
            (click)="reproduzir(primeiraFaixa)"
          >
            <span aria-hidden="true">\u25B6</span>
            Ouvir do in\xEDcio
          </button>
        }
      </div>
    </section>

    <section class="conteudo-album">
      <header class="cabecalho-lista" aria-hidden="true">
        <span>#</span>
        <span>Vers\xE3o</span>
        <span>Arquivo</span>
        <span></span>
      </header>

      @if (album.faixas.length === 0) {
        <div class="album-vazio">
          <span aria-hidden="true">\u266A</span>
          <p>Este compartilhamento ainda n\xE3o possui arquivos dispon\xEDveis.</p>
        </div>
      } @else {
        <ol class="lista-faixas">
          @for (faixa of album.faixas; track faixa.item_id) {
            <li
              [class.faixa-ativa]="
                faixaAtivaId() === faixa.item_id
              "
            >
              <button
                type="button"
                class="botao-reproduzir"
                [disabled]="!podeReproduzir(faixa)"
                [attr.aria-label]="
                  'Ouvir ' + faixa.versao + ' de ' + faixa.faixa
                "
                (click)="reproduzir(faixa)"
              >
                <span class="numero-faixa">
                  {{ formatarOrdem(faixa.ordem) }}
                </span>
                <span class="icone-reproduzir" aria-hidden="true">
                  \u25B6
                </span>
              </button>

              <div class="identificacao-faixa">
                <strong>{{ faixa.versao }}</strong>
                <span>{{ faixa.faixa }}</span>

                @if (faixa.observacoes) {
                  <p>{{ faixa.observacoes }}</p>
                }
              </div>

              <div class="metadados-faixa">
                <span>{{ faixa.nome_arquivo }}</span>
                <small>
                  {{ formatarBytes(faixa.tamanho_bytes) }}
                </small>
              </div>

              <button
                type="button"
                class="botao-download"
                [disabled]="baixandoFaixaId() !== null"
                [attr.aria-label]="
                  'Baixar ' + faixa.versao + ' de ' + faixa.faixa
                "
                (click)="baixar(faixa)"
              >
                @if (baixandoFaixaId() === faixa.item_id) {
                  ...
                } @else {
                  \u2193
                }
              </button>
            </li>
          }
        </ol>
      }

      @if (erroDownload()) {
        <p class="mensagem-erro">
          {{ erroDownload() }}
        </p>
      }
    </section>

    @if (faixaAtiva(); as faixa) {
      <section class="player-atual">
        <div class="faixa-player">
          <span class="miniatura-player">
            @if (album.capa_url) {
              <img
                [src]="album.capa_url"
                alt=""
              />
            } @else {
              {{ iniciaisProjeto() }}
            }
          </span>

          <span>
            <strong>{{ faixa.versao }}</strong>
            <small>{{ faixa.faixa }}</small>
          </span>
        </div>

        <div class="controle-player">
          <audio
            controls
            autoplay
            preload="metadata"
            [src]="faixa.reproducao_url"
            (ended)="reproduzirProxima()"
            (error)="registrarErroReproducao()"
          ></audio>

          @if (erroReproducao()) {
            <p>{{ erroReproducao() }}</p>
          }
        </div>
      </section>
    }

    <footer class="rodape-publico">
      <span>FLEIVA STUDIOS</span>
      <p>Arquivos profissionais, organizados em um s\xF3 lugar.</p>
    </footer>
  }
</main>
`, styles: ['/* apps/studio-dash/src/app/paginas/album-compartilhado/album-compartilhado.scss */\n:host {\n  display: block;\n  min-height: 100vh;\n  background: var(--studio-brand);\n  color: #f2f4f1;\n  font-family:\n    Inter,\n    ui-sans-serif,\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  font-synthesis: none;\n  -webkit-font-smoothing: antialiased;\n}\n.pagina-publica {\n  min-height: 100vh;\n  box-sizing: border-box;\n  padding: clamp(1rem, 3vw, 2.25rem);\n  background:\n    radial-gradient(\n      circle at 78% 4%,\n      color-mix(in oklab, var(--studio-accent) 20%, transparent),\n      transparent 28rem),\n    linear-gradient(\n      145deg,\n      #151715,\n      #090a09 68%);\n}\nbutton,\naudio {\n  font: inherit;\n}\nbutton {\n  cursor: pointer;\n}\nbutton:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\nbutton:focus-visible,\naudio:focus-visible {\n  outline: 0.15rem solid var(--studio-accent);\n  outline-offset: 0.15rem;\n}\n.topo-publico,\n.apresentacao-album,\n.conteudo-album,\n.player-atual,\n.rodape-publico {\n  width: min(100%, 76rem);\n  margin-right: auto;\n  margin-left: auto;\n}\n.topo-publico {\n  display: flex;\n  min-height: 3.5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: clamp(2.5rem, 7vh, 5rem);\n}\n.identidade-estudio {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.75rem;\n}\n.identidade-estudio > span:last-child {\n  display: grid;\n  min-width: 0;\n  gap: 0.15rem;\n}\n.identidade-estudio strong,\n.identidade-estudio small {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.identidade-estudio strong {\n  font-size: 0.78rem;\n  font-weight: 720;\n  background-color: --brand-sage;\n}\n.identidade-estudio small {\n  font-size: 0.6rem;\n}\n.logo-estudio {\n  display: grid;\n  width: 2.75rem;\n  height: 2.75rem;\n  flex: 0 0 auto;\n  place-items: center;\n  overflow: hidden;\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border-radius: 0.2rem;\n  font-size: 1rem;\n  font-weight: 800;\n}\n.logo-estudio img {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.selo-privado {\n  padding: 0.32rem 0.48rem;\n  color: #9ca19c;\n  border: 0.0625rem solid #3b3e3b;\n  border-radius: 0.18rem;\n  font-size: 0.54rem;\n  font-weight: 740;\n  letter-spacing: 0.1em;\n}\n.apresentacao-album {\n  display: grid;\n  grid-template-columns: minmax(15rem, 25rem) minmax(0, 1fr);\n  align-items: end;\n  gap: clamp(2rem, 6vw, 5.5rem);\n}\n.capa-album {\n  position: relative;\n  display: grid;\n  width: 100%;\n  aspect-ratio: 1;\n  place-items: center;\n  overflow: hidden;\n  isolation: isolate;\n  background:\n    linear-gradient(\n      135deg,\n      transparent 0 48%,\n      rgba(255, 255, 255, 0.16) 48% 50%,\n      transparent 50%),\n    linear-gradient(\n      145deg,\n      color-mix(in oklab, var(--studio-accent) 35%, #252825),\n      var(--studio-accent));\n  color: var(--studio-on-accent);\n  border: 0.0625rem solid rgba(255, 255, 255, 0.13);\n  border-radius: 0.18rem;\n  box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.55), 0 2.2rem 5rem rgba(0, 0, 0, 0.42);\n}\n.capa-album::before {\n  position: absolute;\n  z-index: -1;\n  width: 52%;\n  height: 52%;\n  border: 0.0625rem solid currentColor;\n  content: "";\n  opacity: 0.18;\n  transform: rotate(45deg);\n}\n.capa-album img {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.capa-album > strong {\n  font-size: clamp(2.5rem, 8vw, 5rem);\n  font-weight: 800;\n  letter-spacing: -0.08em;\n}\n.capa-album > small {\n  position: absolute;\n  right: 1rem;\n  bottom: 0.9rem;\n  left: 1rem;\n  overflow: hidden;\n  font-size: 0.58rem;\n  font-weight: 760;\n  letter-spacing: 0.11em;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.identificacao-album {\n  min-width: 0;\n  padding-bottom: 0.35rem;\n}\n.identificacao-album h1 {\n  max-width: 13ch;\n  margin: 0.7rem 0 0;\n  overflow-wrap: anywhere;\n  font-size: clamp(3rem, 8vw, 6.5rem);\n  font-weight: 760;\n  line-height: 0.84;\n  letter-spacing: -0.075em;\n}\n.identificacao-album h2 {\n  margin: 1rem 0 0;\n  color: #c6cac6;\n  font-size: 0.9rem;\n  font-weight: 620;\n}\n.rotulo {\n  margin: 0;\n  color: #858b85;\n  font-size: 0.56rem;\n  font-weight: 760;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n.resumo-album {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  margin-top: 0.75rem;\n  color: #7f847f;\n  font-size: 0.62rem;\n}\n.resumo-album i {\n  width: 0.18rem;\n  height: 0.18rem;\n  background: #646964;\n  border-radius: 999rem;\n}\n.observacoes-album {\n  max-width: 45rem;\n  margin: 1.25rem 0 0;\n  color: #a7aca7;\n  font-size: 0.74rem;\n  line-height: 1.6;\n  white-space: pre-wrap;\n}\n.botao-ouvir-album,\n.botao-secundario {\n  min-height: 2.75rem;\n  padding: 0.62rem 1rem;\n  border-radius: 0.22rem;\n  font-size: 0.68rem;\n  font-weight: 740;\n}\n.botao-ouvir-album {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.55rem;\n  margin-top: 1.5rem;\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border: 0.0625rem solid var(--studio-accent);\n}\n.botao-ouvir-album:hover:not(:disabled) {\n  filter: brightness(0.95) saturate(1.08);\n}\n.conteudo-album {\n  margin-top: clamp(2.5rem, 7vh, 5rem);\n  overflow: hidden;\n  background: rgba(17, 19, 17, 0.72);\n  border: 0.0625rem solid #303330;\n  border-radius: 0.25rem;\n  -webkit-backdrop-filter: blur(0.8rem);\n  backdrop-filter: blur(0.8rem);\n}\n.cabecalho-lista,\n.lista-faixas li {\n  display: grid;\n  grid-template-columns: 3rem minmax(12rem, 1fr) minmax(9rem, 17rem) 2.5rem;\n  align-items: center;\n  gap: 0.8rem;\n}\n.cabecalho-lista {\n  min-height: 2.6rem;\n  padding: 0 1rem;\n  color: #666b66;\n  border-bottom: 0.0625rem solid #303330;\n  font-size: 0.53rem;\n  font-weight: 720;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n}\n.lista-faixas {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.lista-faixas li {\n  min-height: 4.6rem;\n  padding: 0.65rem 1rem;\n  border-bottom: 0.0625rem solid #292c29;\n  transition: background-color 130ms ease;\n}\n.lista-faixas li:last-child {\n  border-bottom: 0;\n}\n.lista-faixas li:hover,\n.lista-faixas li.faixa-ativa {\n  background: rgba(255, 255, 255, 0.045);\n}\n.botao-reproduzir {\n  display: grid;\n  width: 2.3rem;\n  height: 2.3rem;\n  place-items: center;\n  padding: 0;\n  background: transparent;\n  color: #767b76;\n  border: 0;\n  border-radius: 999rem;\n}\n.icone-reproduzir {\n  display: none;\n  color: var(--studio-accent);\n  font-size: 0.65rem;\n}\n.lista-faixas li:hover .numero-faixa,\n.faixa-ativa .numero-faixa {\n  display: none;\n}\n.lista-faixas li:hover .icone-reproduzir,\n.faixa-ativa .icone-reproduzir {\n  display: inline;\n}\n.numero-faixa {\n  font-size: 0.66rem;\n}\n.identificacao-faixa,\n.metadados-faixa {\n  display: grid;\n  min-width: 0;\n  gap: 0.22rem;\n}\n.identificacao-faixa strong {\n  overflow: hidden;\n  font-size: 0.8rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.identificacao-faixa > span {\n  color: color-mix(in srgb, var(--studio-accent) 58%, #c4c8c4);\n  font-size: 0.6rem;\n}\n.identificacao-faixa p {\n  max-width: 60ch;\n  margin: 0.18rem 0 0;\n  overflow: hidden;\n  color: #747974;\n  font-size: 0.58rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.metadados-faixa span {\n  overflow: hidden;\n  color: #8b908b;\n  font-size: 0.62rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.metadados-faixa small {\n  color: #616661;\n  font-size: 0.55rem;\n}\n.botao-download {\n  display: grid;\n  width: 2.25rem;\n  height: 2.25rem;\n  place-items: center;\n  padding: 0;\n  background: transparent;\n  color: #9da29d;\n  border: 0.0625rem solid #3b3f3b;\n  border-radius: 999rem;\n  font-size: 0.85rem;\n}\n.botao-download:hover:not(:disabled) {\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border-color: var(--studio-accent);\n}\n.mensagem-erro {\n  margin: 0;\n  padding: 0.75rem 1rem;\n  color: #ff7770;\n  border-top: 0.0625rem solid #303330;\n  font-size: 0.66rem;\n}\n.album-vazio {\n  display: grid;\n  min-height: 11rem;\n  place-content: center;\n  justify-items: center;\n  color: #727772;\n}\n.album-vazio > span {\n  font-size: 1.4rem;\n}\n.album-vazio p {\n  margin: 0.5rem 0 0;\n  font-size: 0.72rem;\n}\n.player-atual {\n  position: sticky;\n  z-index: 10;\n  bottom: 1rem;\n  display: grid;\n  grid-template-columns: minmax(10rem, 0.8fr) minmax(18rem, 1.5fr);\n  align-items: center;\n  gap: 1.25rem;\n  box-sizing: border-box;\n  margin-top: 1rem;\n  padding: 0.75rem;\n  background: rgba(24, 27, 24, 0.94);\n  border: 0.0625rem solid #3a3e3a;\n  border-radius: 0.3rem;\n  box-shadow: 0 1.25rem 3rem rgba(0, 0, 0, 0.45);\n  -webkit-backdrop-filter: blur(1rem);\n  backdrop-filter: blur(1rem);\n}\n.faixa-player {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.7rem;\n}\n.faixa-player > span:last-child {\n  display: grid;\n  min-width: 0;\n  gap: 0.2rem;\n}\n.faixa-player strong,\n.faixa-player small {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.faixa-player strong {\n  font-size: 0.72rem;\n  color: color-mix(in srgb, var(--studio-accent) 58%, #c4c8c4);\n  font-size: 0.6rem;\n}\n.faixa-player small {\n  color: #898e89;\n  font-size: 0.58rem;\n}\n.miniatura-player {\n  display: grid;\n  width: 2.9rem;\n  height: 2.9rem;\n  flex: 0 0 auto;\n  place-items: center;\n  overflow: hidden;\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  font-size: 0.7rem;\n  font-weight: 780;\n}\n.miniatura-player img {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.controle-player {\n  min-width: 0;\n}\n.controle-player audio {\n  display: block;\n  width: 100%;\n  height: 2.7rem;\n  accent-color: var(--studio-accent);\n}\n.controle-player p {\n  margin: 0.4rem 0 0;\n  color: #ff7770;\n  font-size: 0.58rem;\n}\n.rodape-publico {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: clamp(3rem, 8vh, 6rem);\n  padding-top: 1rem;\n  color: #686d68;\n  border-top: 0.0625rem solid #292c29;\n}\n.rodape-publico span {\n  font-size: 0.58rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n}\n.rodape-publico p {\n  margin: 0;\n  font-size: 0.58rem;\n}\n.estado-pagina {\n  display: grid;\n  width: min(100%, 34rem);\n  min-height: calc(100vh - 4rem);\n  place-content: center;\n  justify-items: center;\n  gap: 0.8rem;\n  box-sizing: border-box;\n  margin: 0 auto;\n  text-align: center;\n}\n.estado-pagina h1 {\n  margin: 0;\n  font-size: clamp(2rem, 8vw, 3.5rem);\n  line-height: 0.95;\n  letter-spacing: -0.05em;\n}\n.estado-pagina > p:not(.rotulo) {\n  max-width: 28rem;\n  margin: 0;\n  color: #9ba09b;\n  line-height: 1.5;\n}\n.marca-fleiva {\n  display: grid;\n  width: 3rem;\n  height: 3rem;\n  place-items: center;\n  margin-bottom: 0.5rem;\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border-radius: 0.2rem;\n  font-weight: 800;\n}\n.botao-secundario {\n  margin-top: 0.5rem;\n  background: transparent;\n  color: #f4f5f1;\n  border: 0.0625rem solid #444844;\n}\n.botao-secundario:hover {\n  background: #202320;\n}\n.carregador {\n  display: block;\n  width: 1.2rem;\n  height: 1.2rem;\n  box-sizing: border-box;\n  border: 0.13rem solid #464a46;\n  border-top-color: var(--studio-accent);\n  border-radius: 999rem;\n  animation: girar 650ms linear infinite;\n}\n@keyframes girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .carregador {\n    animation: none;\n  }\n}\n@media (max-width: 52rem) {\n  .apresentacao-album {\n    grid-template-columns: minmax(10rem, 17rem) minmax(0, 1fr);\n    gap: 2rem;\n  }\n  .identificacao-album h1 {\n    font-size: clamp(2.5rem, 8vw, 4.5rem);\n  }\n  .cabecalho-lista,\n  .lista-faixas li {\n    grid-template-columns: 2.7rem minmax(9rem, 1fr) 2.5rem;\n  }\n  .cabecalho-lista span:nth-child(3),\n  .metadados-faixa {\n    display: none;\n  }\n}\n@media (max-width: 38rem) {\n  .pagina-publica {\n    padding: 1rem;\n  }\n  .topo-publico {\n    margin-bottom: 2rem;\n  }\n  .selo-privado {\n    display: none;\n  }\n  .apresentacao-album {\n    grid-template-columns: 1fr;\n  }\n  .capa-album {\n    width: min(78vw, 20rem);\n  }\n  .identificacao-album h1 {\n    max-width: none;\n    font-size: clamp(2.7rem, 14vw, 4.5rem);\n  }\n  .conteudo-album {\n    margin-top: 2.5rem;\n  }\n  .cabecalho-lista {\n    display: none;\n  }\n  .lista-faixas li {\n    grid-template-columns: 2.5rem minmax(0, 1fr) 2.4rem;\n    gap: 0.55rem;\n    padding: 0.75rem;\n  }\n  .player-atual {\n    grid-template-columns: 1fr;\n    gap: 0.65rem;\n  }\n  .miniatura-player {\n    width: 2.4rem;\n    height: 2.4rem;\n  }\n  .rodape-publico {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlbumCompartilhado, { className: "AlbumCompartilhado", filePath: "apps/studio-dash/src/app/paginas/album-compartilhado/album-compartilhado.ts", lineNumber: 21 });
})();
export {
  AlbumCompartilhado
};
