import {
  ActivatedRoute,
  ClienteSupabase,
  Component,
  DadosAlbuns,
  DadosEstudio,
  DadosFaixas,
  DadosProjetosArtisticos,
  DadosVersoesFaixa,
  RouterLink,
  TIPO_PUBLICO_ENVIO,
  ViewChild,
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
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-IMBOO5ID.js";

// apps/studio-dash/src/app/paginas/projeto-detalhe/projeto-detalhe.ts
var _c0 = ["reprodutor"];
var _c1 = () => [];
var _c2 = (a0) => ({ projeto: a0 });
var _c3 = (a0) => ({ projeto: a0, novoMembro: 1 });
var _c4 = (a0) => ({ contato: a0 });
var _c5 = (a0) => ({ projeto: a0, novo: 1 });
var _c6 = (a0) => ({ projeto: a0, editar: 1 });
var _c7 = (a0, a1) => ({ projeto: a0, faixa: a1 });
var _c8 = (a0) => ({ projeto: a0, novoEnvio: 1 });
var _c9 = (a0, a1) => ({ projeto: a0, envio: a1 });
var _c10 = (a0, a1) => ({ projeto: a0, album: a1 });
var _forTrack0 = ($index, $item) => $item.id;
function ProjetoDetalhe_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275text(1, "\u2190 Todos os projetos");
    \u0275\u0275elementEnd();
  }
}
function ProjetoDetalhe_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275text(1, "\u2190 Projetos externos");
    \u0275\u0275elementEnd();
  }
}
function ProjetoDetalhe_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5);
    \u0275\u0275element(1, "span", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Carregando projeto...");
    \u0275\u0275elementEnd()();
  }
}
function ProjetoDetalhe_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 6)(1, "p", 9);
    \u0275\u0275text(2, "PROJETO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4, "N\xE3o foi poss\xEDvel carregar os dados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 10);
    \u0275\u0275listener("click", function ProjetoDetalhe_Conditional_5_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.recarregar());
    });
    \u0275\u0275text(8, "Tentar novamente");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.erroPagina());
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 13);
  }
  if (rf & 2) {
    const projetoAtual_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", "Capa de " + projetoAtual_r3.nome);
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const projetoAtual_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", projetoAtual_r3.nome.charAt(0).toLocaleUpperCase("pt-BR"), " ");
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 39)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const membro_r4 = ctx.$implicit;
    \u0275\u0275classProp("inativo", !membro_r4.ativo);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(6, _c4, membro_r4.contato.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", membro_r4.contato.nome.charAt(0).toLocaleUpperCase("pt-BR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(membro_r4.contato.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(membro_r4.papel);
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, ProjetoDetalhe_Conditional_6_Conditional_22_For_2_Template, 8, 8, "a", 37, _forTrack0);
    \u0275\u0275elementStart(3, "a", 38);
    \u0275\u0275text(4, " + Participante ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const projetoAtual_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(projetoAtual_r3.membros);
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(1, _c3, projetoAtual_r3.id));
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "a", 27);
    \u0275\u0275text(2, " + Nova faixa ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 40);
    \u0275\u0275text(4, " Montar trabalho ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const projetoAtual_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(2, _c5, projetoAtual_r3.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(4, _c5, projetoAtual_r3.id));
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275text(1, " Identidade ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const projetoAtual_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(1, _c6, projetoAtual_r3.id));
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.erroReproducao(), " ");
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_48_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Cadastre a primeira m\xFAsica para come\xE7ar o hist\xF3rico de produ\xE7\xE3o. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 27);
    \u0275\u0275text(3, " Criar primeira faixa ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const projetoAtual_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(1, _c5, projetoAtual_r3.id));
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_48_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Ainda n\xE3o h\xE1 faixas dispon\xEDveis neste projeto. ");
    \u0275\u0275elementEnd();
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "strong");
    \u0275\u0275text(2, "Este projeto ainda n\xE3o tem faixas.");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ProjetoDetalhe_Conditional_6_Conditional_48_Conditional_3_Template, 4, 3)(4, ProjetoDetalhe_Conditional_6_Conditional_48_Conditional_4_Template, 2, 0, "p");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.modoEstudio() ? 3 : 4);
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 51);
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "\u2161");
    \u0275\u0275elementEnd();
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "\u25B6");
    \u0275\u0275elementEnd();
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      \u0275\u0275nextContext();
      const versaoAtual_r6 = \u0275\u0275readContextLet(0);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.reproduzirVersao(versaoAtual_r6));
    });
    \u0275\u0275conditionalCreate(1, ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_4_Conditional_1_Template, 1, 0, "span", 51)(2, ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_4_Conditional_2_Template, 2, 0, "span", 14)(3, ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_4_Conditional_3_Template, 2, 0, "span", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faixa_r7 = \u0275\u0275nextContext().$implicit;
    const versaoAtual_r6 = \u0275\u0275readContextLet(0);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.carregandoReproducaoId() !== null);
    \u0275\u0275attribute("aria-label", ctx_r1.versaoReproduzindo()?.id === versaoAtual_r6.id && ctx_r1.audioTocando() ? "Pausar " + faixa_r7.titulo : "Reproduzir " + faixa_r7.titulo);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.carregandoReproducaoId() === versaoAtual_r6.id ? 1 : ctx_r1.versaoReproduzindo()?.id === versaoAtual_r6.id && ctx_r1.audioTocando() ? 2 : 3);
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, " \u2014 ");
    \u0275\u0275elementEnd();
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faixa_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", faixa_r7.bpm, " BPM");
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faixa_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(faixa_r7.tom);
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " VERS\xC3O PRINCIPAL ");
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " MAIS RECENTE \xB7 PROVIS\xD3RIA ");
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275conditionalCreate(1, ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_15_Conditional_1_Template, 1, 0)(2, ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_15_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faixa_r7 = \u0275\u0275nextContext().$implicit;
    const versaoAtual_r6 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275conditional(faixa_r7.versao_principal_id === versaoAtual_r6.id ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(versaoAtual_r6.versao);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(versaoAtual_r6.nome_arquivo);
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "SEM ARQUIVO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Envie a primeira vers\xE3o");
    \u0275\u0275elementEnd();
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " vers\xE3o ");
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " vers\xF5es ");
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "article", 42)(2, "span", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_4_Template, 4, 3, "button", 44)(5, ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_5_Template, 2, 0, "span", 45);
    \u0275\u0275elementStart(6, "div", 46)(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p")(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_12_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(13, ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_13_Template, 2, 1, "span");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 47);
    \u0275\u0275conditionalCreate(15, ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_15_Template, 7, 3)(16, ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_16_Template, 4, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 48)(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275conditionalCreate(21, ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_21_Template, 1, 0)(22, ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Conditional_22_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "a", 49);
    \u0275\u0275text(24, " \u2192 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const faixa_r7 = ctx.$implicit;
    const \u0275$index_168_r8 = ctx.$index;
    const projetoAtual_r3 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    const versaoAtual_r9 = \u0275\u0275storeLet(ctx_r1.versaoPrincipal(faixa_r7));
    \u0275\u0275advance();
    \u0275\u0275classProp("em-reproducao", versaoAtual_r9?.id === ctx_r1.versaoReproduzindo()?.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatarOrdem(\u0275$index_168_r8), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(versaoAtual_r9 && ctx_r1.podeReproduzir(versaoAtual_r9) ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(faixa_r7.titulo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatarStatus(faixa_r7.status_producao), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(faixa_r7.bpm ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(faixa_r7.tom ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(versaoAtual_r9 ? 15 : 16);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.versoesDaFaixa(faixa_r7.id).length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.versoesDaFaixa(faixa_r7.id).length === 1 ? 21 : 22);
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction2(14, _c7, projetoAtual_r3.id, faixa_r7.id));
    \u0275\u0275attribute("aria-label", "Abrir faixa " + faixa_r7.titulo);
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, ProjetoDetalhe_Conditional_6_Conditional_49_For_2_Template, 25, 17, "article", 41, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.faixas());
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275text(1, " + Novo envio ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const projetoAtual_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(1, _c8, projetoAtual_r3.id));
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1, " Nenhum envio montado para este projeto. ");
    \u0275\u0275elementEnd();
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_61_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 55);
    \u0275\u0275text(1, " P\xE1gina \u2197 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("href", ctx, \u0275\u0275sanitizeUrl);
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_61_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275text(1, " Editar \u2192 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const envio_r10 = \u0275\u0275nextContext().$implicit;
    const projetoAtual_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction2(1, _c9, projetoAtual_r3.id, envio_r10.id));
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_61_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 52)(1, "span", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 54);
    \u0275\u0275conditionalCreate(11, ProjetoDetalhe_Conditional_6_Conditional_61_For_2_Conditional_11_Template, 2, 1, "a", 55);
    \u0275\u0275conditionalCreate(12, ProjetoDetalhe_Conditional_6_Conditional_61_For_2_Conditional_12_Template, 2, 4, "a", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_18_0;
    const envio_r10 = ctx.$implicit;
    const \u0275$index_273_r11 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" OUT ", ctx_r1.formatarOrdem(\u0275$index_273_r11), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(envio_r10.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.totalArquivosEnvio(envio_r10));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.situacaoEnvio(envio_r10));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_18_0 = ctx_r1.linkPublico(envio_r10)) ? 11 : -1, tmp_18_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.modoEstudio() ? 12 : -1);
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275repeaterCreate(1, ProjetoDetalhe_Conditional_6_Conditional_61_For_2_Template, 13, 6, "article", 52, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.envios());
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.trabalhosNaCasa().length, " na Casa ");
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 34);
    \u0275\u0275text(1, " Gerenciar cat\xE1logo \u2192 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const projetoAtual_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(1, _c2, projetoAtual_r3.id));
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_73_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Re\xFAna vers\xF5es em um \xE1lbum, single, EP, mixtape ou pack. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 34);
    \u0275\u0275text(3, " Montar primeiro trabalho ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const projetoAtual_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(1, _c5, projetoAtual_r3.id));
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_73_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Ainda n\xE3o h\xE1 trabalhos dispon\xEDveis neste projeto. ");
    \u0275\u0275elementEnd();
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "strong");
    \u0275\u0275text(2, "Nenhum trabalho montado.");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ProjetoDetalhe_Conditional_6_Conditional_73_Conditional_3_Template, 4, 3)(4, ProjetoDetalhe_Conditional_6_Conditional_73_Conditional_4_Template, 2, 0, "p");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.modoEstudio() ? 3 : 4);
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_74_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 13);
  }
  if (rf & 2) {
    const trabalho_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", "Capa de " + trabalho_r12.nome);
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_74_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trabalho_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", trabalho_r12.nome.charAt(0).toLocaleUpperCase("pt-BR"), " ");
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_74_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 55);
    \u0275\u0275text(1, " Ver p\xE1gina \u2197 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("href", ctx, \u0275\u0275sanitizeUrl);
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_74_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 56)(1, "a", 57);
    \u0275\u0275conditionalCreate(2, ProjetoDetalhe_Conditional_6_Conditional_74_For_2_Conditional_2_Template, 1, 2, "img", 13)(3, ProjetoDetalhe_Conditional_6_Conditional_74_For_2_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "footer");
    \u0275\u0275conditionalCreate(13, ProjetoDetalhe_Conditional_6_Conditional_74_For_2_Conditional_13_Template, 2, 1, "a", 55);
    \u0275\u0275elementStart(14, "a", 34);
    \u0275\u0275text(15, " Abrir \u2192 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_19_0;
    const trabalho_r12 = ctx.$implicit;
    const projetoAtual_r3 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction2(8, _c10, projetoAtual_r3.id, trabalho_r12.id));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_14_0 = ctx_r1.dadosAlbuns.capaUrl(trabalho_r12)) ? 2 : 3, tmp_14_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tipoTrabalho(trabalho_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(trabalho_r12.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.totalFaixasTrabalho(trabalho_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.situacaoTrabalho(trabalho_r12));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_19_0 = ctx_r1.linkPublico(trabalho_r12)) ? 13 : -1, tmp_19_0);
    \u0275\u0275advance();
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction2(11, _c10, projetoAtual_r3.id, trabalho_r12.id));
  }
}
function ProjetoDetalhe_Conditional_6_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275repeaterCreate(1, ProjetoDetalhe_Conditional_6_Conditional_74_For_2_Template, 16, 14, "article", 56, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.trabalhos());
  }
}
function ProjetoDetalhe_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 11)(1, "div", 12);
    \u0275\u0275conditionalCreate(2, ProjetoDetalhe_Conditional_6_Conditional_2_Template, 1, 2, "img", 13)(3, ProjetoDetalhe_Conditional_6_Conditional_3_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15)(5, "p", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16)(10, "span")(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " faixas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span")(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " vers\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span")(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " trabalhos");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(22, ProjetoDetalhe_Conditional_6_Conditional_22_Template, 5, 3, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, ProjetoDetalhe_Conditional_6_Conditional_23_Template, 5, 6, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "nav", 19)(25, "a", 20);
    \u0275\u0275text(26, " Faixas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 21);
    \u0275\u0275text(28, " Envios ");
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "a", 22);
    \u0275\u0275text(32, " Trabalhos ");
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(35, ProjetoDetalhe_Conditional_6_Conditional_35_Template, 2, 3, "a", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(36, ProjetoDetalhe_Conditional_6_Conditional_36_Template, 2, 1, "p", 24);
    \u0275\u0275elementStart(37, "section", 25)(38, "header", 26)(39, "div")(40, "p", 9);
    \u0275\u0275text(41, "EM PRODU\xC7\xC3O");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "h2");
    \u0275\u0275text(43, "Faixas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45, " Ou\xE7a a vers\xE3o atual ou abra o hist\xF3rico completo. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "a", 27);
    \u0275\u0275text(47, " Abrir biblioteca \u2192 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(48, ProjetoDetalhe_Conditional_6_Conditional_48_Template, 5, 1, "div", 28)(49, ProjetoDetalhe_Conditional_6_Conditional_49_Template, 3, 0, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "section", 30)(51, "header", 26)(52, "div")(53, "p", 9);
    \u0275\u0275text(54, "SA\xCDDA E APROVA\xC7\xC3O");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "h2");
    \u0275\u0275text(56, "Envios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58, " Links montados com vers\xF5es deste projeto. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(59, ProjetoDetalhe_Conditional_6_Conditional_59_Template, 2, 3, "a", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(60, ProjetoDetalhe_Conditional_6_Conditional_60_Template, 2, 0, "p", 31)(61, ProjetoDetalhe_Conditional_6_Conditional_61_Template, 3, 0, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "section", 33)(63, "header", 26)(64, "div")(65, "p", 9);
    \u0275\u0275text(66, " CAT\xC1LOGO E PUBLICA\xC7\xC3O ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "h2");
    \u0275\u0275text(68, "Trabalhos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span");
    \u0275\u0275text(70);
    \u0275\u0275conditionalCreate(71, ProjetoDetalhe_Conditional_6_Conditional_71_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(72, ProjetoDetalhe_Conditional_6_Conditional_72_Template, 2, 3, "a", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(73, ProjetoDetalhe_Conditional_6_Conditional_73_Template, 5, 1, "div", 35)(74, ProjetoDetalhe_Conditional_6_Conditional_74_Template, 3, 0, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const projetoAtual_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.dadosProjetos.capaUrl(projetoAtual_r3)) ? 2 : 3, tmp_2_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" PROJETO ART\xCDSTICO \xB7 ", projetoAtual_r3.tipo, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(projetoAtual_r3.nome);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.faixas().length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.totalVersoes());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.trabalhos().length);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.modoEstudio() ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.modoEstudio() ? 23 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(23, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(24, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.envios().length);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(25, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.trabalhos().length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.modoEstudio() ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.erroReproducao() ? 36 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(26, _c2, projetoAtual_r3.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.faixas().length === 0 ? 48 : 49);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r1.modoEstudio() ? 59 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.envios().length === 0 ? 60 : 61);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", ctx_r1.trabalhosPublicados().length, " publicados ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.trabalhosNaCasa().length > 0 ? 71 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.modoEstudio() ? 72 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.trabalhos().length === 0 ? 73 : 74);
  }
}
function ProjetoDetalhe_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7)(1, "p", 9);
    \u0275\u0275text(2, "PROJETO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4, "Projeto n\xE3o encontrado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, " Este projeto n\xE3o existe ou n\xE3o est\xE1 dispon\xEDvel para a sua conta. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 3);
    \u0275\u0275text(8, " Voltar aos projetos ");
    \u0275\u0275elementEnd()();
  }
}
function ProjetoDetalhe_Conditional_8_Conditional_0_Conditional_2_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 13);
  }
  if (rf & 2) {
    const projetoAtual_r14 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", "Capa de " + projetoAtual_r14.nome);
  }
}
function ProjetoDetalhe_Conditional_8_Conditional_0_Conditional_2_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const faixa_r15 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", faixa_r15.titulo.charAt(0).toLocaleUpperCase("pt-BR"), " ");
  }
}
function ProjetoDetalhe_Conditional_8_Conditional_0_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ProjetoDetalhe_Conditional_8_Conditional_0_Conditional_2_Conditional_1_Conditional_0_Template, 1, 2, "img", 13)(1, ProjetoDetalhe_Conditional_8_Conditional_0_Conditional_2_Conditional_1_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional((tmp_9_0 = ctx_r1.dadosProjetos.capaUrl(ctx)) ? 0 : 1, tmp_9_0);
  }
}
function ProjetoDetalhe_Conditional_8_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275conditionalCreate(1, ProjetoDetalhe_Conditional_8_Conditional_0_Conditional_2_Conditional_1_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const versao_r16 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_7_0 = ctx_r1.projeto()) ? 1 : -1, tmp_7_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(versao_r16.versao);
  }
}
function ProjetoDetalhe_Conditional_8_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2161 ");
  }
}
function ProjetoDetalhe_Conditional_8_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u25B6 ");
  }
}
function ProjetoDetalhe_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 58)(1, "div", 59);
    \u0275\u0275conditionalCreate(2, ProjetoDetalhe_Conditional_8_Conditional_0_Conditional_2_Template, 7, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 60)(4, "button", 61);
    \u0275\u0275listener("click", function ProjetoDetalhe_Conditional_8_Conditional_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.alternarReproducao());
    });
    \u0275\u0275conditionalCreate(5, ProjetoDetalhe_Conditional_8_Conditional_0_Conditional_5_Template, 1, 0)(6, ProjetoDetalhe_Conditional_8_Conditional_0_Conditional_6_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label")(10, "span", 62);
    \u0275\u0275text(11, " Posi\xE7\xE3o da reprodu\xE7\xE3o ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 63);
    \u0275\u0275listener("input", function ProjetoDetalhe_Conditional_8_Conditional_0_Template_input_input_12_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.buscarNaFaixa($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 64)(16, "label")(17, "span", 62);
    \u0275\u0275text(18, "Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 65);
    \u0275\u0275listener("input", function ProjetoDetalhe_Conditional_8_Conditional_0_Template_input_input_19_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.alterarVolume($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 66);
    \u0275\u0275listener("click", function ProjetoDetalhe_Conditional_8_Conditional_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.fecharReprodutor());
    });
    \u0275\u0275text(21, " \xD7 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "audio", 67, 0);
    \u0275\u0275listener("play", function ProjetoDetalhe_Conditional_8_Conditional_0_Template_audio_play_22_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.atualizarEstadoReproducao(true));
    })("pause", function ProjetoDetalhe_Conditional_8_Conditional_0_Template_audio_pause_22_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.atualizarEstadoReproducao(false));
    })("timeupdate", function ProjetoDetalhe_Conditional_8_Conditional_0_Template_audio_timeupdate_22_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.atualizarDadosReproducao($event));
    })("loadedmetadata", function ProjetoDetalhe_Conditional_8_Conditional_0_Template_audio_loadedmetadata_22_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.atualizarDadosReproducao($event));
    })("durationchange", function ProjetoDetalhe_Conditional_8_Conditional_0_Template_audio_durationchange_22_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.atualizarDadosReproducao($event));
    })("ended", function ProjetoDetalhe_Conditional_8_Conditional_0_Template_audio_ended_22_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.atualizarEstadoReproducao(false));
    })("error", function ProjetoDetalhe_Conditional_8_Conditional_0_Template_audio_error_22_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.registrarErroReproducao());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const url_r17 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_5_0 = ctx_r1.faixaReproduzindo()) ? 2 : -1, tmp_5_0);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", ctx_r1.audioTocando() ? "Pausar" : "Reproduzir");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.audioTocando() ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatarTempoAudio(ctx_r1.tempoAtualAudio()), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("max", ctx_r1.duracaoAudio() || 0)("value", ctx_r1.tempoAtualAudio());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatarTempoAudio(ctx_r1.duracaoAudio()), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.volumeAudio());
    \u0275\u0275advance(3);
    \u0275\u0275property("src", url_r17);
  }
}
function ProjetoDetalhe_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ProjetoDetalhe_Conditional_8_Conditional_0_Template, 24, 9, "footer", 58);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.versaoReproduzindo()) ? 0 : -1, tmp_2_0);
  }
}
var ProjetoDetalhe = class _ProjetoDetalhe {
  dadosProjetos = inject(DadosProjetosArtisticos);
  dadosFaixas = inject(DadosFaixas);
  dadosAlbuns = inject(DadosAlbuns);
  dadosEstudio = inject(DadosEstudio);
  dadosVersoes = inject(DadosVersoesFaixa);
  clienteSupabase = inject(ClienteSupabase);
  rota = inject(ActivatedRoute);
  reprodutor;
  projetoId = signal(
    "",
    ...ngDevMode ? [{ debugName: "projetoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  carregandoPagina = signal(
    true,
    ...ngDevMode ? [{ debugName: "carregandoPagina" }] : (
      /* istanbul ignore next */
      []
    )
  );
  versaoReproduzindo = signal(
    null,
    ...ngDevMode ? [{ debugName: "versaoReproduzindo" }] : (
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
  carregandoReproducaoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "carregandoReproducaoId" }] : (
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
  audioTocando = signal(
    false,
    ...ngDevMode ? [{ debugName: "audioTocando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tempoAtualAudio = signal(
    0,
    ...ngDevMode ? [{ debugName: "tempoAtualAudio" }] : (
      /* istanbul ignore next */
      []
    )
  );
  duracaoAudio = signal(
    0,
    ...ngDevMode ? [{ debugName: "duracaoAudio" }] : (
      /* istanbul ignore next */
      []
    )
  );
  volumeAudio = signal(
    1,
    ...ngDevMode ? [{ debugName: "volumeAudio" }] : (
      /* istanbul ignore next */
      []
    )
  );
  usuarioId = signal(
    null,
    ...ngDevMode ? [{ debugName: "usuarioId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  projeto = computed(
    () => this.dadosProjetos.projetos().find((projeto) => projeto.id === this.projetoId()) ?? null,
    ...ngDevMode ? [{ debugName: "projeto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  modoEstudio = computed(
    () => this.projeto()?.estudio_id === this.dadosEstudio.estudio()?.id,
    ...ngDevMode ? [{ debugName: "modoEstudio" }] : (
      /* istanbul ignore next */
      []
    )
  );
  membroLogado = computed(
    () => this.projeto()?.membros.find((membro) => membro.contato?.auth_user_id === this.usuarioId()) ?? null,
    ...ngDevMode ? [{ debugName: "membroLogado" }] : (
      /* istanbul ignore next */
      []
    )
  );
  podeEnviar = computed(
    () => this.modoEstudio() || this.membroLogado()?.pode_enviar === true,
    ...ngDevMode ? [{ debugName: "podeEnviar" }] : (
      /* istanbul ignore next */
      []
    )
  );
  podeComentar = computed(
    () => this.modoEstudio() || this.membroLogado()?.pode_comentar === true,
    ...ngDevMode ? [{ debugName: "podeComentar" }] : (
      /* istanbul ignore next */
      []
    )
  );
  faixas = computed(
    () => this.dadosFaixas.faixas().filter((faixa) => faixa.projeto_id === this.projetoId()),
    ...ngDevMode ? [{ debugName: "faixas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  trabalhos = computed(
    () => this.dadosAlbuns.albuns().filter((album) => album.projeto_id === this.projetoId()),
    ...ngDevMode ? [{ debugName: "trabalhos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  envios = computed(
    () => this.dadosAlbuns.albuns().filter((album) => album.projeto_id === this.projetoId() && album.tipo_publico === TIPO_PUBLICO_ENVIO),
    ...ngDevMode ? [{ debugName: "envios" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalVersoes = computed(
    () => this.faixas().reduce((total, faixa) => total + this.versoesDaFaixa(faixa.id).length, 0),
    ...ngDevMode ? [{ debugName: "totalVersoes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  faixaReproduzindo = computed(
    () => {
      const versao = this.versaoReproduzindo();
      return versao ? this.faixas().find((faixa) => faixa.id === versao.faixa_id) ?? null : null;
    },
    ...ngDevMode ? [{ debugName: "faixaReproduzindo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  membrosAtivos = computed(
    () => this.projeto()?.membros.filter((membro) => membro.ativo) ?? [],
    ...ngDevMode ? [{ debugName: "membrosAtivos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  faixasSemVersao = computed(
    () => this.faixas().filter((faixa) => this.versoesDaFaixa(faixa.id).length === 0),
    ...ngDevMode ? [{ debugName: "faixasSemVersao" }] : (
      /* istanbul ignore next */
      []
    )
  );
  trabalhosPublicados = computed(
    () => this.trabalhos().filter((trabalho) => trabalho.publico_na_landing),
    ...ngDevMode ? [{ debugName: "trabalhosPublicados" }] : (
      /* istanbul ignore next */
      []
    )
  );
  trabalhosNaCasa = computed(
    () => this.trabalhos().filter((trabalho) => trabalho.publico_na_casa),
    ...ngDevMode ? [{ debugName: "trabalhosNaCasa" }] : (
      /* istanbul ignore next */
      []
    )
  );
  trabalhosComLink = computed(
    () => this.trabalhos().filter((trabalho) => !trabalho.publico_na_landing && Boolean(trabalho.token_compartilhamento)),
    ...ngDevMode ? [{ debugName: "trabalhosComLink" }] : (
      /* istanbul ignore next */
      []
    )
  );
  trabalhosPrivados = computed(
    () => this.trabalhos().filter((trabalho) => !trabalho.publico_na_landing && !trabalho.token_compartilhamento),
    ...ngDevMode ? [{ debugName: "trabalhosPrivados" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroPagina = computed(
    () => this.dadosProjetos.erro() ?? this.dadosFaixas.erro() ?? this.dadosAlbuns.erro() ?? this.dadosVersoes.erro(),
    ...ngDevMode ? [{ debugName: "erroPagina" }] : (
      /* istanbul ignore next */
      []
    )
  );
  async ngOnInit() {
    this.projetoId.set(this.rota.snapshot.paramMap.get("id")?.trim() ?? "");
    try {
      await this.carregarDados();
    } finally {
      this.carregandoPagina.set(false);
    }
  }
  async recarregar() {
    this.carregandoPagina.set(true);
    try {
      await this.carregarDados();
    } finally {
      this.carregandoPagina.set(false);
    }
  }
  async carregarDados() {
    const { data: { user } } = await this.clienteSupabase.cliente.auth.getUser();
    this.usuarioId.set(user?.id ?? null);
    let carregarEstudio = Promise.resolve();
    if (user) {
      const { data: estudio } = await this.clienteSupabase.cliente.from("estudios").select("id").eq("id", user.id).maybeSingle();
      if (estudio) {
        carregarEstudio = this.dadosEstudio.estudio() ? Promise.resolve() : this.dadosEstudio.carregar();
      }
    }
    await Promise.all([
      this.dadosProjetos.listar(),
      this.dadosFaixas.listar(),
      this.dadosAlbuns.listar(),
      this.dadosVersoes.listar(),
      carregarEstudio
    ]);
    console.log("PROJETO ABERTO:", this.projetoId());
    console.log("TODAS AS FAIXAS:", this.dadosFaixas.faixas());
    console.log("FAIXAS DESTE PROJETO:", this.faixas());
  }
  versoesDaFaixa(faixaId) {
    return this.dadosVersoes.versoesDaFaixa(faixaId);
  }
  versaoPrincipal(faixa) {
    const versoes = this.versoesDaFaixa(faixa.id);
    return versoes.find((versao) => versao.id === faixa.versao_principal_id) ?? versoes[0] ?? null;
  }
  async reproduzirVersao(versao) {
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
  async alternarReproducao() {
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
  fecharReprodutor() {
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
  registrarErroReproducao() {
    this.audioTocando.set(false);
    this.erroReproducao.set("N\xE3o foi poss\xEDvel reproduzir este formato no navegador.");
  }
  atualizarEstadoReproducao(tocando) {
    this.audioTocando.set(tocando);
  }
  atualizarDadosReproducao(evento) {
    const audio = evento.target;
    this.tempoAtualAudio.set(Number.isFinite(audio.currentTime) ? audio.currentTime : 0);
    this.duracaoAudio.set(Number.isFinite(audio.duration) ? audio.duration : 0);
  }
  buscarNaFaixa(evento) {
    const input = evento.target;
    const audio = this.reprodutor?.nativeElement;
    const tempo = Number(input.value);
    if (audio && Number.isFinite(tempo)) {
      audio.currentTime = tempo;
      this.tempoAtualAudio.set(tempo);
    }
  }
  alterarVolume(evento) {
    const input = evento.target;
    const audio = this.reprodutor?.nativeElement;
    const volume = Number(input.value);
    if (audio && Number.isFinite(volume)) {
      audio.volume = volume;
      this.volumeAudio.set(volume);
    }
  }
  formatarTempoAudio(segundos) {
    if (!Number.isFinite(segundos) || segundos < 0) {
      return "0:00";
    }
    const minutosInteiros = Math.floor(segundos / 60);
    const segundosInteiros = Math.floor(segundos % 60);
    return `${minutosInteiros}:${String(segundosInteiros).padStart(2, "0")}`;
  }
  podeReproduzir(versao) {
    if (versao.tipo_mime?.startsWith("audio/")) {
      return true;
    }
    return /\.(aac|flac|m4a|mp3|ogg|wav)$/i.test(versao.nome_arquivo);
  }
  formatarStatus(status) {
    return status.replace(/_/g, " ").replace(/^./, (inicio) => inicio.toLocaleUpperCase("pt-BR"));
  }
  formatarOrdem(indice) {
    return String(indice + 1).padStart(2, "0");
  }
  tipoTrabalho(album) {
    return album.tipo_publico?.trim() || "Trabalho";
  }
  totalFaixasTrabalho(album) {
    const total = album.faixas.length;
    return total === 1 ? "1 faixa" : `${total} faixas`;
  }
  totalArquivosEnvio(envio) {
    const total = envio.faixas.length;
    return total === 1 ? "1 arquivo" : `${total} arquivos`;
  }
  situacaoEnvio(envio) {
    if (envio.publico_na_casa) {
      return "Publicado \xB7 Casa Fl\xEAiva";
    }
    if (envio.publico_na_landing) {
      return "Publicado no Card";
    }
    if (envio.token_compartilhamento) {
      return "Link ativo";
    }
    return "Sem link ativo";
  }
  situacaoTrabalho(album) {
    if (album.publico_na_casa) {
      return "Publicado \xB7 Casa Fl\xEAiva";
    }
    if (album.publico_na_landing) {
      return "Publicado no Card";
    }
    if (album.token_compartilhamento) {
      return "Link privado ativo";
    }
    return "Privado";
  }
  linkPublico(album) {
    if (!album.publico_na_landing) {
      return null;
    }
    const slug = this.dadosEstudio.estudio()?.slug;
    if (!slug) {
      return null;
    }
    const slugSeguro = encodeURIComponent(slug);
    const albumIdSeguro = encodeURIComponent(album.id);
    if (this.usarDominiosFleiva()) {
      return `https://play.fleiva.com.br/${slugSeguro}/trabalho/${albumIdSeguro}`;
    }
    const origem = window.location.origin.replace(/\/$/, "");
    return `${origem}/estudio/${slugSeguro}/trabalho/${albumIdSeguro}`;
  }
  usarDominiosFleiva() {
    if (typeof window === "undefined") {
      return false;
    }
    const hostname = window.location.hostname.trim().toLocaleLowerCase();
    return hostname === "fleiva.com.br" || hostname.endsWith(".fleiva.com.br");
  }
  async tentarIniciarReproducao() {
    try {
      await this.reprodutor?.nativeElement.play();
    } catch {
    }
  }
  obterMensagemErro(erro) {
    if (typeof erro === "object" && erro !== null && "message" in erro) {
      return String(erro.message);
    }
    return "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o.";
  }
  identificarFaixa(_indice, faixa) {
    return faixa.id;
  }
  static \u0275fac = function ProjetoDetalhe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjetoDetalhe)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjetoDetalhe, selectors: [["app-projeto-detalhe"]], viewQuery: function ProjetoDetalhe_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.reprodutor = _t.first);
    }
  }, decls: 9, vars: 5, consts: [["reprodutor", ""], [1, "pagina-projeto"], ["aria-label", "Navega\xE7\xE3o do projeto", 1, "voltar"], ["routerLink", "/projetos"], ["routerLink", "/projetos-externos"], ["aria-live", "polite", 1, "estado-pagina"], ["role", "alert", 1, "estado-pagina", "estado-erro"], [1, "estado-pagina", "estado-erro"], ["aria-hidden", "true", 1, "carregador"], [1, "sobretitulo"], ["type", "button", 3, "click"], [1, "hero-projeto"], [1, "capa-projeto"], [3, "src", "alt"], ["aria-hidden", "true"], [1, "identidade-projeto"], ["aria-label", "Resumo do projeto", 1, "numeros-projeto"], ["aria-label", "Participantes", 1, "participantes-inline"], [1, "acoes-projeto"], ["aria-label", "\xC1reas do projeto", 1, "navegacao-projeto"], ["fragment", "faixas", 3, "routerLink"], ["fragment", "envios", 3, "routerLink"], ["fragment", "trabalhos", 3, "routerLink"], ["routerLink", "/projetos", 3, "queryParams"], ["role", "alert", 1, "aviso-audio"], ["id", "faixas", 1, "secao-projeto", "secao-faixas"], [1, "cabecalho-secao"], ["routerLink", "/faixas", 3, "queryParams"], [1, "estado-vazio"], ["role", "list", 1, "tracklist"], ["id", "envios", 1, "secao-projeto", "secao-envios"], [1, "linha-vazia"], [1, "lista-envios"], ["id", "trabalhos", 1, "secao-projeto", "secao-trabalhos"], ["routerLink", "/albuns", 3, "queryParams"], [1, "estado-vazio", "trabalho-vazio"], [1, "prateleira-trabalhos"], ["routerLink", "/contatos", 3, "queryParams", "inativo"], ["routerLink", "/projetos", 1, "adicionar-pessoa", 3, "queryParams"], ["routerLink", "/contatos", 3, "queryParams"], ["routerLink", "/albuns", 1, "acao-principal", 3, "queryParams"], ["role", "listitem", 1, "linha-faixa", 3, "em-reproducao"], ["role", "listitem", 1, "linha-faixa"], [1, "numero-faixa"], ["type", "button", 1, "reproduzir-faixa", 3, "disabled"], ["aria-hidden", "true", 1, "reproduzir-faixa", "indisponivel"], [1, "nome-faixa"], [1, "versao-faixa"], [1, "historico-faixa"], ["routerLink", "/faixas", 1, "abrir-faixa", 3, "queryParams"], ["type", "button", 1, "reproduzir-faixa", 3, "click", "disabled"], [1, "carregador", "pequeno"], [1, "linha-envio"], [1, "codigo-envio"], [1, "acoes-envio"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "trabalho"], ["routerLink", "/albuns", 1, "capa-trabalho", 3, "queryParams"], [1, "reprodutor-global"], [1, "musica-reprodutor"], [1, "controles-reprodutor"], ["type", "button", 1, "alternar-reproducao", 3, "click"], [1, "sr-only"], ["type", "range", "min", "0", "step", "0.1", 3, "input", "max", "value"], [1, "acoes-reprodutor"], ["type", "range", "min", "0", "max", "1", "step", "0.05", 3, "input", "value"], ["type", "button", "aria-label", "Fechar player", 3, "click"], ["preload", "metadata", 3, "play", "pause", "timeupdate", "loadedmetadata", "durationchange", "ended", "error", "src"], [1, "mini-capa-reprodutor"]], template: function ProjetoDetalhe_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 1)(1, "nav", 2);
      \u0275\u0275conditionalCreate(2, ProjetoDetalhe_Conditional_2_Template, 2, 0, "a", 3)(3, ProjetoDetalhe_Conditional_3_Template, 2, 0, "a", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, ProjetoDetalhe_Conditional_4_Template, 4, 0, "section", 5)(5, ProjetoDetalhe_Conditional_5_Template, 9, 1, "section", 6)(6, ProjetoDetalhe_Conditional_6_Template, 75, 28)(7, ProjetoDetalhe_Conditional_7_Template, 9, 0, "section", 7);
      \u0275\u0275conditionalCreate(8, ProjetoDetalhe_Conditional_8_Template, 1, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      \u0275\u0275classProp("com-reprodutor", ctx.urlReproducao() !== null);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.modoEstudio() ? 2 : 3);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.carregandoPagina() ? 4 : ctx.erroPagina() ? 5 : (tmp_2_0 = ctx.projeto()) ? 6 : 7, tmp_2_0);
      \u0275\u0275advance(4);
      \u0275\u0275conditional((tmp_3_0 = ctx.urlReproducao()) ? 8 : -1, tmp_3_0);
    }
  }, dependencies: [RouterLink], styles: ['@charset "UTF-8";\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.pagina-projeto[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 112rem;\n  box-sizing: border-box;\n  margin: 0 auto;\n  padding: 1.35rem 1.5rem 5rem;\n  color: var(--app-text);\n}\n.pagina-projeto.com-reprodutor[_ngcontent-%COMP%] {\n  padding-bottom: 8rem;\n}\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%] {\n  font: inherit;\n}\n.voltar[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n}\n.voltar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.cabecalho-secao[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: var(--app-text-soft);\n  font-size: 0.68rem;\n  font-weight: 700;\n}\n.voltar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.cabecalho-secao[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: var(--studio-brand);\n}\n.hero-projeto[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-height: 14rem;\n  grid-template-columns: 10.5rem minmax(0, 1fr) auto;\n  align-items: end;\n  gap: 2rem;\n  overflow: hidden;\n  padding: 1.75rem;\n  background:\n    linear-gradient(\n      115deg,\n      var(--studio-brand-soft),\n      transparent 48%),\n    var(--app-surface);\n  border-top: 0.18rem solid var(--studio-brand);\n  border-bottom: 0.0625rem solid var(--app-border-strong);\n}\n.capa-projeto[_ngcontent-%COMP%] {\n  display: grid;\n  width: 10.5rem;\n  aspect-ratio: 1;\n  place-items: center;\n  overflow: hidden;\n  background: var(--app-surface-muted);\n  color: var(--studio-brand);\n  border-radius: var(--radius-small);\n  box-shadow: 0 1.2rem 2.8rem rgba(0, 0, 0, 0.22);\n  font-size: 3rem;\n  font-weight: 820;\n}\n.capa-projeto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.capa-trabalho[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.mini-capa-reprodutor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.identidade-projeto[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.sobretitulo[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.57rem;\n  font-weight: 780;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.identidade-projeto[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0.65rem;\n  font-size: clamp(2.8rem, 6vw, 5.4rem);\n  line-height: 0.92;\n  letter-spacing: -0.075em;\n}\n.numeros-projeto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.55rem 1rem;\n  color: var(--app-text-soft);\n  font-size: 0.68rem;\n}\n.numeros-projeto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]::before {\n  margin-right: 1rem;\n  color: var(--app-border-strong);\n  content: "\\2022";\n}\n.numeros-projeto[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--app-text);\n}\n.participantes-inline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.45rem;\n  margin-top: 1.15rem;\n}\n.participantes-inline[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.adicionar-pessoa) {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.35rem 0.55rem 0.35rem 0.35rem;\n  background: var(--app-surface);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: 999rem;\n}\n.participantes-inline[_ngcontent-%COMP%]    > a.inativo[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.participantes-inline[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  display: grid;\n  width: 1.65rem;\n  height: 1.65rem;\n  place-items: center;\n  background: var(--studio-brand-soft);\n  color: var(--studio-brand);\n  border-radius: 50%;\n  font-size: 0.55rem;\n  font-weight: 780;\n}\n.participantes-inline[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  display: grid;\n  gap: 0.04rem;\n}\n.participantes-inline[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.61rem;\n}\n.participantes-inline[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.5rem;\n}\n.adicionar-pessoa[_ngcontent-%COMP%] {\n  color: var(--app-text-soft);\n  font-size: 0.59rem;\n  font-weight: 680;\n}\n.acoes-projeto[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n}\n.acoes-projeto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.estado-vazio[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.estado-pagina[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 2.55rem;\n  box-sizing: border-box;\n  padding: 0.7rem 0.9rem;\n  background: transparent;\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-small);\n  font-size: 0.65rem;\n  font-weight: 720;\n}\n.acoes-projeto[_ngcontent-%COMP%]   .acao-principal[_ngcontent-%COMP%], \n.estado-vazio[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border-color: var(--studio-brand);\n}\n.navegacao-projeto[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 12;\n  top: 3.91rem;\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 0 0.2rem;\n  background: var(--app-background);\n  border-bottom: 0.0625rem solid var(--app-border);\n  -webkit-backdrop-filter: blur(0.7rem);\n  backdrop-filter: blur(0.7rem);\n}\n.navegacao-projeto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 3.25rem;\n  align-items: center;\n  gap: 0.35rem;\n  color: var(--app-text-soft);\n  font-size: 0.66rem;\n  font-weight: 700;\n}\n.navegacao-projeto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--studio-brand);\n}\n.navegacao-projeto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.55rem;\n}\n.secao-projeto[_ngcontent-%COMP%] {\n  scroll-margin-top: 8rem;\n  padding: 4rem 0 0;\n}\n.cabecalho-secao[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.2rem;\n}\n.cabecalho-secao[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.28rem 0 0.2rem;\n  font-size: clamp(1.65rem, 3vw, 2.5rem);\n  letter-spacing: -0.055em;\n}\n.cabecalho-secao[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.65rem;\n}\n.tracklist[_ngcontent-%COMP%], \n.lista-envios[_ngcontent-%COMP%] {\n  border-top: 0.0625rem solid var(--app-border-strong);\n}\n.linha-faixa[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 6.4rem;\n  grid-template-columns: 2rem 2.8rem minmax(12rem, 1.3fr) minmax(12rem, 1fr) 4rem 2rem;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 0 0.75rem;\n  border-bottom: 0.0625rem solid var(--app-border);\n  transition: background-color 120ms ease;\n}\n.linha-faixa[_ngcontent-%COMP%]:hover, \n.linha-faixa.em-reproducao[_ngcontent-%COMP%] {\n  background: var(--app-surface-muted);\n}\n.linha-faixa.em-reproducao[_ngcontent-%COMP%] {\n  box-shadow: inset 0.15rem 0 var(--studio-brand);\n}\n.numero-faixa[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.56rem;\n  font-variant-numeric: tabular-nums;\n}\n.reproduzir-faixa[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.55rem;\n  height: 2.55rem;\n  place-items: center;\n  padding: 0;\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0;\n  border-radius: 50%;\n  font-size: 0.64rem;\n  cursor: pointer;\n}\n.reproduzir-faixa.indisponivel[_ngcontent-%COMP%] {\n  background: var(--app-surface);\n  color: var(--app-text-muted);\n  border: 0.0625rem solid var(--app-border);\n}\n.reproduzir-faixa[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.6;\n}\n.nome-faixa[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.linha-envio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.trabalho[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.nome-faixa[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  letter-spacing: -0.02em;\n}\n.nome-faixa[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n  margin: 0.32rem 0 0;\n  color: var(--app-text-muted);\n  font-size: 0.57rem;\n}\n.versao-faixa[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.16rem;\n}\n.versao-faixa[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.codigo-envio[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.49rem;\n  font-weight: 760;\n  letter-spacing: 0.12em;\n}\n.versao-faixa[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-size: 0.7rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.versao-faixa[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--app-text-muted);\n  font-size: 0.54rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.historico-faixa[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: end;\n}\n.historico-faixa[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.historico-faixa[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.5rem;\n}\n.abrir-faixa[_ngcontent-%COMP%] {\n  color: var(--studio-brand);\n  font-size: 1rem;\n}\n.aviso-audio[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  padding: 0.7rem 0.85rem;\n  background: #2b1a1b;\n  color: #f09a94;\n  border-radius: var(--radius-small);\n  font-size: 0.65rem;\n}\n.linha-envio[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 4.8rem;\n  grid-template-columns: 4.5rem minmax(12rem, 1fr) minmax(8rem, auto) auto;\n  align-items: center;\n  gap: 1rem;\n  padding: 0 0.75rem;\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.linha-envio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.linha-envio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0;\n  color: var(--app-text-muted);\n  font-size: 0.55rem;\n}\n.linha-envio[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  color: var(--app-text-soft);\n  font-size: 0.59rem;\n  font-weight: 650;\n}\n.acoes-envio[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.acoes-envio[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.trabalho[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--studio-brand);\n  font-size: 0.58rem;\n  font-weight: 720;\n}\n.prateleira-trabalhos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(11rem, 13rem));\n  gap: 1.5rem;\n}\n.trabalho[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.capa-trabalho[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  aspect-ratio: 1;\n  place-items: center;\n  overflow: hidden;\n  background: var(--studio-brand-soft);\n  color: var(--studio-brand);\n  border-radius: var(--radius-small);\n  box-shadow: 0 0.8rem 1.8rem rgba(0, 0, 0, 0.14);\n  font-size: 2.5rem;\n  font-weight: 820;\n  transition: transform 140ms ease;\n}\n.capa-trabalho[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.18rem);\n}\n.trabalho[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0.7rem 0 0.18rem;\n  color: var(--app-text-muted);\n  font-size: 0.52rem;\n  font-weight: 720;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.trabalho[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n  font-size: 0.78rem;\n}\n.trabalho[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.trabalho[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.22rem;\n  color: var(--app-text-muted);\n  font-size: 0.54rem;\n}\n.trabalho[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  color: var(--studio-brand);\n  font-weight: 680;\n}\n.trabalho[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n  margin-top: 0.55rem;\n}\n.estado-vazio[_ngcontent-%COMP%], \n.estado-pagina[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: start;\n  gap: 0.65rem;\n  padding: 2rem;\n  background: var(--app-surface-muted);\n  border-top: 0.0625rem solid var(--app-border);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.estado-vazio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.estado-pagina[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.linha-vazia[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.67rem;\n}\n.linha-vazia[_ngcontent-%COMP%] {\n  padding: 1.2rem 0;\n  border-top: 0.0625rem solid var(--app-border-strong);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.estado-pagina[_ngcontent-%COMP%] {\n  min-height: 22rem;\n  align-content: center;\n}\n.estado-pagina[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.carregador[_ngcontent-%COMP%] {\n  width: 1.2rem;\n  height: 1.2rem;\n  border: 0.12rem solid var(--app-border-strong);\n  border-top-color: var(--studio-brand);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_girar 700ms linear infinite;\n}\n.carregador.pequeno[_ngcontent-%COMP%] {\n  width: 0.8rem;\n  height: 0.8rem;\n}\n.reprodutor-global[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 60;\n  inset: auto 0 0;\n  display: grid;\n  min-height: 4.8rem;\n  grid-template-columns: minmax(12rem, 0.8fr) minmax(18rem, 1.4fr) minmax(10rem, 0.8fr);\n  align-items: center;\n  gap: 1rem;\n  padding: 0.6rem 1.2rem;\n  background: #100d0f;\n  color: #f4f0f2;\n  border-top: 0.12rem solid var(--studio-brand);\n  box-shadow: 0 -1rem 3rem rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(0.8rem);\n  backdrop-filter: blur(0.8rem);\n}\n.musica-reprodutor[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.65rem;\n}\n.mini-capa-reprodutor[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.8rem;\n  height: 2.8rem;\n  flex: 0 0 auto;\n  place-items: center;\n  overflow: hidden;\n  background: var(--studio-brand-soft);\n  color: var(--studio-brand);\n  border-radius: 0.25rem;\n  font-weight: 780;\n}\n.musica-reprodutor[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  display: grid;\n  min-width: 0;\n}\n.musica-reprodutor[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-size: 0.7rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.musica-reprodutor[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #8e8389;\n  font-size: 0.55rem;\n}\n.controles-reprodutor[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto minmax(6rem, 1fr) auto;\n  align-items: center;\n  gap: 0.65rem;\n}\n.alternar-reproducao[_ngcontent-%COMP%], \n.acoes-reprodutor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.3rem;\n  height: 2.3rem;\n  place-items: center;\n  padding: 0;\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.controles-reprodutor[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #8e8389;\n  font-size: 0.52rem;\n  font-variant-numeric: tabular-nums;\n}\n.controles-reprodutor[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.controles-reprodutor[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.acoes-reprodutor[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.acoes-reprodutor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n.acoes-reprodutor[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 45%;\n  max-width: 7rem;\n}\n.acoes-reprodutor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #c4bbc0;\n  border: 0.0625rem solid #352d32;\n  border-radius: 0.3rem;\n  font-size: 1rem;\n}\n.reprodutor-global[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%] {\n  display: none;\n}\n.sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n}\n@keyframes _ngcontent-%COMP%_girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 64rem) {\n  .hero-projeto[_ngcontent-%COMP%] {\n    grid-template-columns: 8rem minmax(0, 1fr);\n  }\n  .capa-projeto[_ngcontent-%COMP%] {\n    width: 8rem;\n  }\n  .acoes-projeto[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    justify-content: flex-end;\n  }\n  .linha-faixa[_ngcontent-%COMP%] {\n    grid-template-columns: 1.5rem 2.8rem minmax(10rem, 1fr) minmax(9rem, 0.8fr) 2rem;\n  }\n  .historico-faixa[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 48rem) {\n  .pagina-projeto[_ngcontent-%COMP%] {\n    padding: 1rem 0.85rem 4rem;\n  }\n  .hero-projeto[_ngcontent-%COMP%] {\n    min-height: auto;\n    grid-template-columns: 5.5rem minmax(0, 1fr);\n    align-items: center;\n    gap: 1rem;\n    padding: 1rem;\n  }\n  .capa-projeto[_ngcontent-%COMP%] {\n    width: 5.5rem;\n    font-size: 1.8rem;\n  }\n  .identidade-projeto[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(2.2rem, 13vw, 3.6rem);\n  }\n  .participantes-inline[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n  .acoes-projeto[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .acoes-projeto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex: 1;\n    text-align: center;\n  }\n  .navegacao-projeto[_ngcontent-%COMP%] {\n    top: 3.81rem;\n    gap: 1rem;\n    overflow-x: auto;\n  }\n  .navegacao-projeto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n  }\n  .secao-projeto[_ngcontent-%COMP%] {\n    padding-top: 3rem;\n  }\n  .cabecalho-secao[_ngcontent-%COMP%] {\n    align-items: start;\n  }\n  .linha-faixa[_ngcontent-%COMP%] {\n    min-height: 5.6rem;\n    grid-template-columns: 2.6rem minmax(0, 1fr) auto;\n    gap: 0.65rem;\n    padding: 0 0.35rem;\n  }\n  .numero-faixa[_ngcontent-%COMP%], \n   .versao-faixa[_ngcontent-%COMP%], \n   .historico-faixa[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .abrir-faixa[_ngcontent-%COMP%] {\n    padding: 0.8rem 0.2rem;\n  }\n  .linha-envio[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) auto;\n    gap: 0.45rem 0.75rem;\n    padding: 0.8rem 0.35rem;\n  }\n  .codigo-envio[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .linha-envio[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n  .acoes-envio[_ngcontent-%COMP%] {\n    grid-column: 2;\n    grid-row: 1/span 2;\n    flex-direction: column;\n    align-items: end;\n  }\n  .prateleira-trabalhos[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 1rem;\n  }\n  .reprodutor-global[_ngcontent-%COMP%] {\n    min-height: 4.2rem;\n    grid-template-columns: minmax(8rem, 1fr) auto auto;\n    padding: 0.55rem 0.75rem;\n  }\n  .controles-reprodutor[_ngcontent-%COMP%] {\n    grid-template-columns: auto;\n  }\n  .controles-reprodutor[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n   .controles-reprodutor[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n   .acoes-reprodutor[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .acoes-reprodutor[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%], \n   *[_ngcontent-%COMP%]::before, \n   *[_ngcontent-%COMP%]::after {\n    transition-duration: 0.01ms !important;\n  }\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjetoDetalhe, [{
    type: Component,
    args: [{ selector: "app-projeto-detalhe", standalone: true, imports: [RouterLink], template: `<main class="pagina-projeto" [class.com-reprodutor]="urlReproducao() !== null">
  <nav class="voltar" aria-label="Navega\xE7\xE3o do projeto">
    @if (modoEstudio()) {
    <a routerLink="/projetos">\u2190 Todos os projetos</a>
    } @else {
    <a routerLink="/projetos-externos">\u2190 Projetos externos</a>
    }
  </nav>

  @if (carregandoPagina()) {
  <section class="estado-pagina" aria-live="polite">
    <span class="carregador" aria-hidden="true"></span>
    <p>Carregando projeto...</p>
  </section>
  } @else if (erroPagina()) {
  <section class="estado-pagina estado-erro" role="alert">
    <p class="sobretitulo">PROJETO</p>
    <h1>N\xE3o foi poss\xEDvel carregar os dados</h1>
    <p>{{ erroPagina() }}</p>
    <button type="button" (click)="recarregar()">Tentar novamente</button>
  </section>
  } @else if (projeto(); as projetoAtual) {
  <header class="hero-projeto">
    <div class="capa-projeto">
      @if (dadosProjetos.capaUrl(projetoAtual); as capaUrl) {
      <img [src]="capaUrl" [alt]="'Capa de ' + projetoAtual.nome" />
      } @else {
      <span aria-hidden="true">
        {{ projetoAtual.nome.charAt(0).toLocaleUpperCase('pt-BR') }}
      </span>
      }
    </div>

    <div class="identidade-projeto">
      <p class="sobretitulo">
        PROJETO ART\xCDSTICO \xB7 {{ projetoAtual.tipo }}
      </p>

      <h1>{{ projetoAtual.nome }}</h1>



      <div class="numeros-projeto" aria-label="Resumo do projeto">
        <span><strong>{{ faixas().length }}</strong> faixas</span>
        <span><strong>{{ totalVersoes() }}</strong> vers\xF5es</span>
        <span><strong>{{ trabalhos().length }}</strong> trabalhos</span>
      </div>

      @if (modoEstudio()) {
      <div class="participantes-inline" aria-label="Participantes">
        @for (membro of projetoAtual.membros; track membro.id) {
        <a
          routerLink="/contatos"
          [queryParams]="{ contato: membro.contato.id }"
          [class.inativo]="!membro.ativo"
        >
          <span aria-hidden="true">
            {{ membro.contato.nome.charAt(0).toLocaleUpperCase('pt-BR') }}
          </span>

          <span>
            <strong>{{ membro.contato.nome }}</strong>
            <small>{{ membro.papel }}</small>
          </span>
        </a>
        }

        <a
          class="adicionar-pessoa"
          routerLink="/projetos"
          [queryParams]="{
            projeto: projetoAtual.id,
            novoMembro: 1
          }"
        >
          + Participante
        </a>
      </div>
      }
    </div>

    @if (modoEstudio()) {
    <div class="acoes-projeto">
      <a
        routerLink="/faixas"
        [queryParams]="{
          projeto: projetoAtual.id,
          novo: 1
        }"
      >
        + Nova faixa
      </a>

      <a
        class="acao-principal"
        routerLink="/albuns"
        [queryParams]="{
          projeto: projetoAtual.id,
          novo: 1
        }"
      >
        Montar trabalho
      </a>
    </div>
    }
  </header>

  <nav class="navegacao-projeto" aria-label="\xC1reas do projeto">
    <a [routerLink]="[]" fragment="faixas">
      Faixas
    </a>

    <a [routerLink]="[]" fragment="envios">
      Envios <span>{{ envios().length }}</span>
    </a>

    <a [routerLink]="[]" fragment="trabalhos">
      Trabalhos <span>{{ trabalhos().length }}</span>
    </a>

    @if (modoEstudio()) {
    <a
      routerLink="/projetos"
      [queryParams]="{
        projeto: projetoAtual.id,
        editar: 1
      }"
    >
      Identidade
    </a>
    }
  </nav>

  @if (erroReproducao()) {
  <p class="aviso-audio" role="alert">
    {{ erroReproducao() }}
  </p>
  }

  <section id="faixas" class="secao-projeto secao-faixas">
    <header class="cabecalho-secao">
      <div>
        <p class="sobretitulo">EM PRODU\xC7\xC3O</p>
        <h2>Faixas</h2>
        <span>
          Ou\xE7a a vers\xE3o atual ou abra o hist\xF3rico completo.
        </span>
      </div>

      <a
        routerLink="/faixas"
        [queryParams]="{ projeto: projetoAtual.id }"
      >
        Abrir biblioteca \u2192
      </a>
    </header>

    @if (faixas().length === 0) {
    <div class="estado-vazio">
      <strong>Este projeto ainda n\xE3o tem faixas.</strong>

      @if (modoEstudio()) {
      <p>
        Cadastre a primeira m\xFAsica para come\xE7ar o hist\xF3rico de produ\xE7\xE3o.
      </p>

      <a
        routerLink="/faixas"
        [queryParams]="{
          projeto: projetoAtual.id,
          novo: 1
        }"
      >
        Criar primeira faixa
      </a>
      } @else {
      <p>
        Ainda n\xE3o h\xE1 faixas dispon\xEDveis neste projeto.
      </p>
      }
    </div>
    } @else {
    <div class="tracklist" role="list">
      @for (
        faixa of faixas();
        track faixa.id;
        let indice = $index
      ) {
      @let versaoAtual = versaoPrincipal(faixa);

      <article
        class="linha-faixa"
        role="listitem"
        [class.em-reproducao]="
          versaoAtual?.id === versaoReproduzindo()?.id
        "
      >
        <span class="numero-faixa">
          {{ formatarOrdem(indice) }}
        </span>

        @if (versaoAtual && podeReproduzir(versaoAtual)) {
        <button
          type="button"
          class="reproduzir-faixa"
          [disabled]="carregandoReproducaoId() !== null"
          [attr.aria-label]="
            versaoReproduzindo()?.id === versaoAtual.id &&
            audioTocando()
              ? 'Pausar ' + faixa.titulo
              : 'Reproduzir ' + faixa.titulo
          "
          (click)="reproduzirVersao(versaoAtual)"
        >
          @if (carregandoReproducaoId() === versaoAtual.id) {
          <span class="carregador pequeno"></span>
          } @else if (
            versaoReproduzindo()?.id === versaoAtual.id &&
            audioTocando()
          ) {
          <span aria-hidden="true">\u2161</span>
          } @else {
          <span aria-hidden="true">\u25B6</span>
          }
        </button>
        } @else {
        <span
          class="reproduzir-faixa indisponivel"
          aria-hidden="true"
        >
          \u2014
        </span>
        }

        <div class="nome-faixa">
          <h3>{{ faixa.titulo }}</h3>

          <p>
            <span>
              {{ formatarStatus(faixa.status_producao) }}
            </span>

            @if (faixa.bpm) {
            <span>{{ faixa.bpm }} BPM</span>
            }

            @if (faixa.tom) {
            <span>{{ faixa.tom }}</span>
            }
          </p>
        </div>

        <div class="versao-faixa">
          @if (versaoAtual) {
          <span>
            @if (faixa.versao_principal_id === versaoAtual.id) {
            VERS\xC3O PRINCIPAL
            } @else {
            MAIS RECENTE \xB7 PROVIS\xD3RIA
            }
          </span>

          <strong>{{ versaoAtual.versao }}</strong>

          <small>{{ versaoAtual.nome_arquivo }}</small>
          } @else {
          <span>SEM ARQUIVO</span>
          <strong>Envie a primeira vers\xE3o</strong>
          }
        </div>

        <div class="historico-faixa">
          <strong>
            {{ versoesDaFaixa(faixa.id).length }}
          </strong>

          <span>
            @if (versoesDaFaixa(faixa.id).length === 1) {
            vers\xE3o
            } @else {
            vers\xF5es
            }
          </span>
        </div>

        <a
          class="abrir-faixa"
          routerLink="/faixas"
          [queryParams]="{
            projeto: projetoAtual.id,
            faixa: faixa.id
          }"
          [attr.aria-label]="'Abrir faixa ' + faixa.titulo"
        >
          \u2192
        </a>
      </article>
      }
    </div>
    }
  </section>

  <section id="envios" class="secao-projeto secao-envios">
    <header class="cabecalho-secao">
      <div>
        <p class="sobretitulo">SA\xCDDA E APROVA\xC7\xC3O</p>
        <h2>Envios</h2>
        <span>
          Links montados com vers\xF5es deste projeto.
        </span>
      </div>

      @if (modoEstudio()) {
      <a
        routerLink="/faixas"
        [queryParams]="{
          projeto: projetoAtual.id,
          novoEnvio: 1
        }"
      >
        + Novo envio
      </a>
      }
    </header>

    @if (envios().length === 0) {
    <p class="linha-vazia">
      Nenhum envio montado para este projeto.
    </p>
    } @else {
    <div class="lista-envios">
      @for (
        envio of envios();
        track envio.id;
        let indice = $index
      ) {
      <article class="linha-envio">
        <span class="codigo-envio">
          OUT {{ formatarOrdem(indice) }}
        </span>

        <div>
          <h3>{{ envio.nome }}</h3>
          <p>{{ totalArquivosEnvio(envio) }}</p>
        </div>

        <strong>{{ situacaoEnvio(envio) }}</strong>

        <div class="acoes-envio">
          @if (linkPublico(envio); as link) {
          <a
            [href]="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            P\xE1gina \u2197
          </a>
          }

          @if (modoEstudio()) {
          <a
            routerLink="/faixas"
            [queryParams]="{
              projeto: projetoAtual.id,
              envio: envio.id
            }"
          >
            Editar \u2192
          </a>
          }
        </div>
      </article>
      }
    </div>
    }
  </section>

  <section id="trabalhos" class="secao-projeto secao-trabalhos">
    <header class="cabecalho-secao">
      <div>
        <p class="sobretitulo">
          CAT\xC1LOGO E PUBLICA\xC7\xC3O
        </p>

        <h2>Trabalhos</h2>

        <span>
          {{ trabalhosPublicados().length }} publicados

          @if (trabalhosNaCasa().length > 0) {
          \xB7 {{ trabalhosNaCasa().length }} na Casa
          }
        </span>
      </div>

      @if (modoEstudio()) {
      <a
        routerLink="/albuns"
        [queryParams]="{
          projeto: projetoAtual.id
        }"
      >
        Gerenciar cat\xE1logo \u2192
      </a>
      }
    </header>

    @if (trabalhos().length === 0) {
    <div class="estado-vazio trabalho-vazio">
      <strong>Nenhum trabalho montado.</strong>

      @if (modoEstudio()) {
      <p>
        Re\xFAna vers\xF5es em um \xE1lbum, single, EP, mixtape ou pack.
      </p>

      <a
        routerLink="/albuns"
        [queryParams]="{
          projeto: projetoAtual.id,
          novo: 1
        }"
      >
        Montar primeiro trabalho
      </a>
      } @else {
      <p>
        Ainda n\xE3o h\xE1 trabalhos dispon\xEDveis neste projeto.
      </p>
      }
    </div>
    } @else {
    <div class="prateleira-trabalhos">
      @for (trabalho of trabalhos(); track trabalho.id) {
      <article class="trabalho">
        <a
          class="capa-trabalho"
          routerLink="/albuns"
          [queryParams]="{
            projeto: projetoAtual.id,
            album: trabalho.id
          }"
        >
          @if (dadosAlbuns.capaUrl(trabalho); as capaUrl) {
          <img
            [src]="capaUrl"
            [alt]="'Capa de ' + trabalho.nome"
          />
          } @else {
          <span>
            {{ trabalho.nome.charAt(0).toLocaleUpperCase('pt-BR') }}
          </span>
          }
        </a>

        <p>{{ tipoTrabalho(trabalho) }}</p>

        <h3>{{ trabalho.nome }}</h3>

        <span>{{ totalFaixasTrabalho(trabalho) }}</span>

        <strong>{{ situacaoTrabalho(trabalho) }}</strong>

        <footer>
          @if (linkPublico(trabalho); as link) {
          <a
            [href]="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver p\xE1gina \u2197
          </a>
          }

          <a
            routerLink="/albuns"
            [queryParams]="{
              projeto: projetoAtual.id,
              album: trabalho.id
            }"
          >
            Abrir \u2192
          </a>
        </footer>
      </article>
      }
    </div>
    }
  </section>
  } @else {
  <section class="estado-pagina estado-erro">
    <p class="sobretitulo">PROJETO</p>

    <h1>Projeto n\xE3o encontrado</h1>

    <p>
      Este projeto n\xE3o existe ou n\xE3o est\xE1 dispon\xEDvel para a sua conta.
    </p>

    <a routerLink="/projetos">
      Voltar aos projetos
    </a>
  </section>
  }

  @if (urlReproducao(); as url) {
  @if (versaoReproduzindo(); as versao) {
  <footer class="reprodutor-global">
    <div class="musica-reprodutor">
      @if (faixaReproduzindo(); as faixa) {
      <span class="mini-capa-reprodutor">
        @if (projeto(); as projetoAtual) {
        @if (dadosProjetos.capaUrl(projetoAtual); as capaUrl) {
        <img
          [src]="capaUrl"
          [alt]="'Capa de ' + projetoAtual.nome"
        />
        } @else {
        {{ faixa.titulo.charAt(0).toLocaleUpperCase('pt-BR') }}
        }
        }
      </span>

      <span>
        <strong>{{ faixa.titulo }}</strong>
        <small>{{ versao.versao }}</small>
      </span>
      }
    </div>

    <div class="controles-reprodutor">
      <button
        type="button"
        class="alternar-reproducao"
        [attr.aria-label]="
          audioTocando() ? 'Pausar' : 'Reproduzir'
        "
        (click)="alternarReproducao()"
      >
        @if (audioTocando()) {
        \u2161
        } @else {
        \u25B6
        }
      </button>

      <span>
        {{ formatarTempoAudio(tempoAtualAudio()) }}
      </span>

      <label>
        <span class="sr-only">
          Posi\xE7\xE3o da reprodu\xE7\xE3o
        </span>

        <input
          type="range"
          min="0"
          [max]="duracaoAudio() || 0"
          step="0.1"
          [value]="tempoAtualAudio()"
          (input)="buscarNaFaixa($event)"
        />
      </label>

      <span>
        {{ formatarTempoAudio(duracaoAudio()) }}
      </span>
    </div>

    <div class="acoes-reprodutor">
      <label>
        <span class="sr-only">Volume</span>

        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          [value]="volumeAudio()"
          (input)="alterarVolume($event)"
        />
      </label>

      <button
        type="button"
        aria-label="Fechar player"
        (click)="fecharReprodutor()"
      >
        \xD7
      </button>
    </div>

    <audio
      #reprodutor
      preload="metadata"
      [src]="url"
      (play)="atualizarEstadoReproducao(true)"
      (pause)="atualizarEstadoReproducao(false)"
      (timeupdate)="atualizarDadosReproducao($event)"
      (loadedmetadata)="atualizarDadosReproducao($event)"
      (durationchange)="atualizarDadosReproducao($event)"
      (ended)="atualizarEstadoReproducao(false)"
      (error)="registrarErroReproducao()"
    ></audio>
  </footer>
  }
  }
</main>
`, styles: ['@charset "UTF-8";\n\n/* apps/studio-dash/src/app/paginas/projeto-detalhe/projeto-detalhe.scss */\n:host {\n  display: block;\n}\n.pagina-projeto {\n  width: 100%;\n  max-width: 112rem;\n  box-sizing: border-box;\n  margin: 0 auto;\n  padding: 1.35rem 1.5rem 5rem;\n  color: var(--app-text);\n}\n.pagina-projeto.com-reprodutor {\n  padding-bottom: 8rem;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\nbutton,\ninput {\n  font: inherit;\n}\n.voltar {\n  margin-bottom: 1.2rem;\n}\n.voltar a,\n.cabecalho-secao > a {\n  color: var(--app-text-soft);\n  font-size: 0.68rem;\n  font-weight: 700;\n}\n.voltar a:hover,\n.cabecalho-secao > a:hover {\n  color: var(--studio-brand);\n}\n.hero-projeto {\n  position: relative;\n  display: grid;\n  min-height: 14rem;\n  grid-template-columns: 10.5rem minmax(0, 1fr) auto;\n  align-items: end;\n  gap: 2rem;\n  overflow: hidden;\n  padding: 1.75rem;\n  background:\n    linear-gradient(\n      115deg,\n      var(--studio-brand-soft),\n      transparent 48%),\n    var(--app-surface);\n  border-top: 0.18rem solid var(--studio-brand);\n  border-bottom: 0.0625rem solid var(--app-border-strong);\n}\n.capa-projeto {\n  display: grid;\n  width: 10.5rem;\n  aspect-ratio: 1;\n  place-items: center;\n  overflow: hidden;\n  background: var(--app-surface-muted);\n  color: var(--studio-brand);\n  border-radius: var(--radius-small);\n  box-shadow: 0 1.2rem 2.8rem rgba(0, 0, 0, 0.22);\n  font-size: 3rem;\n  font-weight: 820;\n}\n.capa-projeto img,\n.capa-trabalho img,\n.mini-capa-reprodutor img {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.identidade-projeto {\n  align-self: center;\n}\n.sobretitulo {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.57rem;\n  font-weight: 780;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.identidade-projeto h1 {\n  margin: 0.35rem 0 0.65rem;\n  font-size: clamp(2.8rem, 6vw, 5.4rem);\n  line-height: 0.92;\n  letter-spacing: -0.075em;\n}\n.numeros-projeto {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.55rem 1rem;\n  color: var(--app-text-soft);\n  font-size: 0.68rem;\n}\n.numeros-projeto span + span::before {\n  margin-right: 1rem;\n  color: var(--app-border-strong);\n  content: "\\2022";\n}\n.numeros-projeto strong {\n  color: var(--app-text);\n}\n.participantes-inline {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.45rem;\n  margin-top: 1.15rem;\n}\n.participantes-inline > a:not(.adicionar-pessoa) {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.35rem 0.55rem 0.35rem 0.35rem;\n  background: var(--app-surface);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: 999rem;\n}\n.participantes-inline > a.inativo {\n  opacity: 0.5;\n}\n.participantes-inline > a > span:first-child {\n  display: grid;\n  width: 1.65rem;\n  height: 1.65rem;\n  place-items: center;\n  background: var(--studio-brand-soft);\n  color: var(--studio-brand);\n  border-radius: 50%;\n  font-size: 0.55rem;\n  font-weight: 780;\n}\n.participantes-inline > a > span:last-child {\n  display: grid;\n  gap: 0.04rem;\n}\n.participantes-inline strong {\n  font-size: 0.61rem;\n}\n.participantes-inline small {\n  color: var(--app-text-muted);\n  font-size: 0.5rem;\n}\n.adicionar-pessoa {\n  color: var(--app-text-soft);\n  font-size: 0.59rem;\n  font-weight: 680;\n}\n.acoes-projeto {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n}\n.acoes-projeto a,\n.estado-vazio a,\n.estado-pagina button {\n  min-height: 2.55rem;\n  box-sizing: border-box;\n  padding: 0.7rem 0.9rem;\n  background: transparent;\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-small);\n  font-size: 0.65rem;\n  font-weight: 720;\n}\n.acoes-projeto .acao-principal,\n.estado-vazio a {\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border-color: var(--studio-brand);\n}\n.navegacao-projeto {\n  position: sticky;\n  z-index: 12;\n  top: 3.91rem;\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 0 0.2rem;\n  background: var(--app-background);\n  border-bottom: 0.0625rem solid var(--app-border);\n  -webkit-backdrop-filter: blur(0.7rem);\n  backdrop-filter: blur(0.7rem);\n}\n.navegacao-projeto a {\n  display: flex;\n  min-height: 3.25rem;\n  align-items: center;\n  gap: 0.35rem;\n  color: var(--app-text-soft);\n  font-size: 0.66rem;\n  font-weight: 700;\n}\n.navegacao-projeto a:hover {\n  color: var(--studio-brand);\n}\n.navegacao-projeto span {\n  color: var(--app-text-muted);\n  font-size: 0.55rem;\n}\n.secao-projeto {\n  scroll-margin-top: 8rem;\n  padding: 4rem 0 0;\n}\n.cabecalho-secao {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.2rem;\n}\n.cabecalho-secao h2 {\n  margin: 0.28rem 0 0.2rem;\n  font-size: clamp(1.65rem, 3vw, 2.5rem);\n  letter-spacing: -0.055em;\n}\n.cabecalho-secao > div > span {\n  color: var(--app-text-muted);\n  font-size: 0.65rem;\n}\n.tracklist,\n.lista-envios {\n  border-top: 0.0625rem solid var(--app-border-strong);\n}\n.linha-faixa {\n  display: grid;\n  min-height: 6.4rem;\n  grid-template-columns: 2rem 2.8rem minmax(12rem, 1.3fr) minmax(12rem, 1fr) 4rem 2rem;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 0 0.75rem;\n  border-bottom: 0.0625rem solid var(--app-border);\n  transition: background-color 120ms ease;\n}\n.linha-faixa:hover,\n.linha-faixa.em-reproducao {\n  background: var(--app-surface-muted);\n}\n.linha-faixa.em-reproducao {\n  box-shadow: inset 0.15rem 0 var(--studio-brand);\n}\n.numero-faixa {\n  color: var(--app-text-muted);\n  font-size: 0.56rem;\n  font-variant-numeric: tabular-nums;\n}\n.reproduzir-faixa {\n  display: grid;\n  width: 2.55rem;\n  height: 2.55rem;\n  place-items: center;\n  padding: 0;\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0;\n  border-radius: 50%;\n  font-size: 0.64rem;\n  cursor: pointer;\n}\n.reproduzir-faixa.indisponivel {\n  background: var(--app-surface);\n  color: var(--app-text-muted);\n  border: 0.0625rem solid var(--app-border);\n}\n.reproduzir-faixa:disabled {\n  cursor: wait;\n  opacity: 0.6;\n}\n.nome-faixa h3,\n.linha-envio h3,\n.trabalho h3 {\n  margin: 0;\n}\n.nome-faixa h3 {\n  font-size: 0.88rem;\n  letter-spacing: -0.02em;\n}\n.nome-faixa p {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n  margin: 0.32rem 0 0;\n  color: var(--app-text-muted);\n  font-size: 0.57rem;\n}\n.versao-faixa {\n  display: grid;\n  min-width: 0;\n  gap: 0.16rem;\n}\n.versao-faixa > span,\n.codigo-envio {\n  color: var(--app-text-muted);\n  font-size: 0.49rem;\n  font-weight: 760;\n  letter-spacing: 0.12em;\n}\n.versao-faixa strong {\n  overflow: hidden;\n  font-size: 0.7rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.versao-faixa small {\n  overflow: hidden;\n  color: var(--app-text-muted);\n  font-size: 0.54rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.historico-faixa {\n  display: grid;\n  justify-items: end;\n}\n.historico-faixa strong {\n  font-size: 0.8rem;\n}\n.historico-faixa span {\n  color: var(--app-text-muted);\n  font-size: 0.5rem;\n}\n.abrir-faixa {\n  color: var(--studio-brand);\n  font-size: 1rem;\n}\n.aviso-audio {\n  margin: 1rem 0 0;\n  padding: 0.7rem 0.85rem;\n  background: #2b1a1b;\n  color: #f09a94;\n  border-radius: var(--radius-small);\n  font-size: 0.65rem;\n}\n.linha-envio {\n  display: grid;\n  min-height: 4.8rem;\n  grid-template-columns: 4.5rem minmax(12rem, 1fr) minmax(8rem, auto) auto;\n  align-items: center;\n  gap: 1rem;\n  padding: 0 0.75rem;\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.linha-envio h3 {\n  font-size: 0.75rem;\n}\n.linha-envio p {\n  margin: 0.2rem 0 0;\n  color: var(--app-text-muted);\n  font-size: 0.55rem;\n}\n.linha-envio > strong {\n  color: var(--app-text-soft);\n  font-size: 0.59rem;\n  font-weight: 650;\n}\n.acoes-envio {\n  display: flex;\n  gap: 0.75rem;\n}\n.acoes-envio a,\n.trabalho footer a {\n  color: var(--studio-brand);\n  font-size: 0.58rem;\n  font-weight: 720;\n}\n.prateleira-trabalhos {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(11rem, 13rem));\n  gap: 1.5rem;\n}\n.trabalho {\n  min-width: 0;\n}\n.capa-trabalho {\n  display: grid;\n  width: 100%;\n  aspect-ratio: 1;\n  place-items: center;\n  overflow: hidden;\n  background: var(--studio-brand-soft);\n  color: var(--studio-brand);\n  border-radius: var(--radius-small);\n  box-shadow: 0 0.8rem 1.8rem rgba(0, 0, 0, 0.14);\n  font-size: 2.5rem;\n  font-weight: 820;\n  transition: transform 140ms ease;\n}\n.capa-trabalho:hover {\n  transform: translateY(-0.18rem);\n}\n.trabalho > p {\n  margin: 0.7rem 0 0.18rem;\n  color: var(--app-text-muted);\n  font-size: 0.52rem;\n  font-weight: 720;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.trabalho h3 {\n  overflow-wrap: anywhere;\n  font-size: 0.78rem;\n}\n.trabalho > span,\n.trabalho > strong {\n  display: block;\n  margin-top: 0.22rem;\n  color: var(--app-text-muted);\n  font-size: 0.54rem;\n}\n.trabalho > strong {\n  color: var(--studio-brand);\n  font-weight: 680;\n}\n.trabalho footer {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n  margin-top: 0.55rem;\n}\n.estado-vazio,\n.estado-pagina {\n  display: grid;\n  justify-items: start;\n  gap: 0.65rem;\n  padding: 2rem;\n  background: var(--app-surface-muted);\n  border-top: 0.0625rem solid var(--app-border);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.estado-vazio p,\n.estado-pagina p,\n.linha-vazia {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.67rem;\n}\n.linha-vazia {\n  padding: 1.2rem 0;\n  border-top: 0.0625rem solid var(--app-border-strong);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.estado-pagina {\n  min-height: 22rem;\n  align-content: center;\n}\n.estado-pagina h1 {\n  margin: 0;\n}\n.carregador {\n  width: 1.2rem;\n  height: 1.2rem;\n  border: 0.12rem solid var(--app-border-strong);\n  border-top-color: var(--studio-brand);\n  border-radius: 50%;\n  animation: girar 700ms linear infinite;\n}\n.carregador.pequeno {\n  width: 0.8rem;\n  height: 0.8rem;\n}\n.reprodutor-global {\n  position: fixed;\n  z-index: 60;\n  inset: auto 0 0;\n  display: grid;\n  min-height: 4.8rem;\n  grid-template-columns: minmax(12rem, 0.8fr) minmax(18rem, 1.4fr) minmax(10rem, 0.8fr);\n  align-items: center;\n  gap: 1rem;\n  padding: 0.6rem 1.2rem;\n  background: #100d0f;\n  color: #f4f0f2;\n  border-top: 0.12rem solid var(--studio-brand);\n  box-shadow: 0 -1rem 3rem rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(0.8rem);\n  backdrop-filter: blur(0.8rem);\n}\n.musica-reprodutor {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.65rem;\n}\n.mini-capa-reprodutor {\n  display: grid;\n  width: 2.8rem;\n  height: 2.8rem;\n  flex: 0 0 auto;\n  place-items: center;\n  overflow: hidden;\n  background: var(--studio-brand-soft);\n  color: var(--studio-brand);\n  border-radius: 0.25rem;\n  font-weight: 780;\n}\n.musica-reprodutor > span:last-child {\n  display: grid;\n  min-width: 0;\n}\n.musica-reprodutor strong {\n  overflow: hidden;\n  font-size: 0.7rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.musica-reprodutor small {\n  color: #8e8389;\n  font-size: 0.55rem;\n}\n.controles-reprodutor {\n  display: grid;\n  grid-template-columns: auto auto minmax(6rem, 1fr) auto;\n  align-items: center;\n  gap: 0.65rem;\n}\n.alternar-reproducao,\n.acoes-reprodutor button {\n  display: grid;\n  width: 2.3rem;\n  height: 2.3rem;\n  place-items: center;\n  padding: 0;\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.controles-reprodutor > span {\n  color: #8e8389;\n  font-size: 0.52rem;\n  font-variant-numeric: tabular-nums;\n}\n.controles-reprodutor label,\n.controles-reprodutor input,\n.acoes-reprodutor input {\n  width: 100%;\n}\n.acoes-reprodutor {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n.acoes-reprodutor label {\n  width: 45%;\n  max-width: 7rem;\n}\n.acoes-reprodutor button {\n  background: transparent;\n  color: #c4bbc0;\n  border: 0.0625rem solid #352d32;\n  border-radius: 0.3rem;\n  font-size: 1rem;\n}\n.reprodutor-global audio {\n  display: none;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n}\n@keyframes girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 64rem) {\n  .hero-projeto {\n    grid-template-columns: 8rem minmax(0, 1fr);\n  }\n  .capa-projeto {\n    width: 8rem;\n  }\n  .acoes-projeto {\n    grid-column: 1/-1;\n    justify-content: flex-end;\n  }\n  .linha-faixa {\n    grid-template-columns: 1.5rem 2.8rem minmax(10rem, 1fr) minmax(9rem, 0.8fr) 2rem;\n  }\n  .historico-faixa {\n    display: none;\n  }\n}\n@media (max-width: 48rem) {\n  .pagina-projeto {\n    padding: 1rem 0.85rem 4rem;\n  }\n  .hero-projeto {\n    min-height: auto;\n    grid-template-columns: 5.5rem minmax(0, 1fr);\n    align-items: center;\n    gap: 1rem;\n    padding: 1rem;\n  }\n  .capa-projeto {\n    width: 5.5rem;\n    font-size: 1.8rem;\n  }\n  .identidade-projeto h1 {\n    font-size: clamp(2.2rem, 13vw, 3.6rem);\n  }\n  .participantes-inline {\n    grid-column: 1/-1;\n  }\n  .acoes-projeto {\n    justify-content: stretch;\n  }\n  .acoes-projeto a {\n    flex: 1;\n    text-align: center;\n  }\n  .navegacao-projeto {\n    top: 3.81rem;\n    gap: 1rem;\n    overflow-x: auto;\n  }\n  .navegacao-projeto a {\n    flex: 0 0 auto;\n  }\n  .secao-projeto {\n    padding-top: 3rem;\n  }\n  .cabecalho-secao {\n    align-items: start;\n  }\n  .linha-faixa {\n    min-height: 5.6rem;\n    grid-template-columns: 2.6rem minmax(0, 1fr) auto;\n    gap: 0.65rem;\n    padding: 0 0.35rem;\n  }\n  .numero-faixa,\n  .versao-faixa,\n  .historico-faixa {\n    display: none;\n  }\n  .abrir-faixa {\n    padding: 0.8rem 0.2rem;\n  }\n  .linha-envio {\n    grid-template-columns: minmax(0, 1fr) auto;\n    gap: 0.45rem 0.75rem;\n    padding: 0.8rem 0.35rem;\n  }\n  .codigo-envio {\n    display: none;\n  }\n  .linha-envio > strong {\n    grid-column: 1;\n  }\n  .acoes-envio {\n    grid-column: 2;\n    grid-row: 1/span 2;\n    flex-direction: column;\n    align-items: end;\n  }\n  .prateleira-trabalhos {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 1rem;\n  }\n  .reprodutor-global {\n    min-height: 4.2rem;\n    grid-template-columns: minmax(8rem, 1fr) auto auto;\n    padding: 0.55rem 0.75rem;\n  }\n  .controles-reprodutor {\n    grid-template-columns: auto;\n  }\n  .controles-reprodutor > span,\n  .controles-reprodutor label,\n  .acoes-reprodutor label {\n    display: none;\n  }\n  .acoes-reprodutor {\n    display: flex;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *,\n  *::before,\n  *::after {\n    transition-duration: 0.01ms !important;\n  }\n}\n'] }]
  }], null, { reprodutor: [{
    type: ViewChild,
    args: ["reprodutor"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjetoDetalhe, { className: "ProjetoDetalhe", filePath: "apps/studio-dash/src/app/paginas/projeto-detalhe/projeto-detalhe.ts", lineNumber: 33 });
})();
export {
  ProjetoDetalhe
};
