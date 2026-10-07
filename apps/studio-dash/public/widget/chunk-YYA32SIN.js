import {
  takeUntilDestroyed
} from "./chunk-4ZGGKGT5.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-OOHEKRNK.js";
import {
  ActivatedRoute,
  Component,
  DadosAlbuns,
  DadosContatos,
  DadosFaixas,
  DadosProjetosArtisticos,
  DadosVersoesFaixa,
  DestroyRef,
  RouterLink,
  TIPO_PUBLICO_ENVIO,
  ViewChild,
  __spreadProps,
  __spreadValues,
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
  ɵɵcontrol,
  ɵɵcontrolCreate,
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
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-IMBOO5ID.js";

// apps/studio-dash/src/app/paginas/faixas/faixas.ts
var _c0 = ["reprodutor"];
var _c1 = ["capaHero"];
var _c2 = ["informacoesHero"];
var _c3 = ["acoesHero"];
var _c4 = ["rastroHero"];
var _c5 = ["conteudoFaixa"];
var _c6 = (a0) => ["/projetos", a0];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.membro.id;
var _forTrack2 = ($index, $item) => $item.valor;
function Faixas_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span");
    \u0275\u0275text(2, "Armazenamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 32);
    \u0275\u0275element(8, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatarBytes(ctx_r0.dadosVersoes.usoBytes()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", ctx_r0.formatarBytes(ctx_r0.dadosVersoes.limiteBytes()));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-valuenow", ctx_r0.percentualUso());
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r0.percentualUso(), "%");
  }
}
function Faixas_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 33);
    \u0275\u0275listener("click", function Faixas_Conditional_15_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.dadosVersoes.listar());
    });
    \u0275\u0275text(4, " Tentar novamente ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.dadosVersoes.erro());
  }
}
function Faixas_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.erroUpload());
  }
}
function Faixas_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.erroFormulario());
  }
}
function Faixas_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.mensagemCompartilhamento());
  }
}
function Faixas_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.erroCompartilhamento());
  }
}
function Faixas_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.erroReproducao());
  }
}
function Faixas_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span");
    \u0275\u0275text(2, " Projeto: ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 34)(6, "a", 35);
    \u0275\u0275text(7, " Voltar ao projeto ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 36);
    \u0275\u0275text(9, " Ver todas ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const projeto_r3 = ctx;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(projeto_r3.nome);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c6, projeto_r3.id));
  }
}
function Faixas_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "span", 37);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Carregando cat\xE1logo...");
    \u0275\u0275elementEnd()();
  }
}
function Faixas_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 33);
    \u0275\u0275listener("click", function Faixas_Conditional_44_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.carregarDados());
    });
    \u0275\u0275text(4, " Tentar novamente ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.dadosFaixas.erro());
  }
}
function Faixas_Conditional_45_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1, "Nenhuma faixa encontrada.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Tente buscar por outro t\xEDtulo, projeto ou status.");
    \u0275\u0275elementEnd();
  }
}
function Faixas_Conditional_45_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1, "Este projeto ainda n\xE3o tem faixas.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cadastre a primeira faixa sem sair deste contexto.");
    \u0275\u0275elementEnd();
  }
}
function Faixas_Conditional_45_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1, "Seu cat\xE1logo est\xE1 vazio.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cadastre a primeira faixa para come\xE7ar.");
    \u0275\u0275elementEnd();
  }
}
function Faixas_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275conditionalCreate(1, Faixas_Conditional_45_Conditional_1_Template, 4, 0)(2, Faixas_Conditional_45_Conditional_2_Template, 4, 0)(3, Faixas_Conditional_45_Conditional_3_Template, 4, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.termoBusca() ? 1 : ctx_r0.projetoFiltrado() ? 2 : 3);
  }
}
function Faixas_Conditional_46_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 42);
  }
  if (rf & 2) {
    const faixa_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", "Capa de " + faixa_r6.projeto.nome);
  }
}
function Faixas_Conditional_46_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faixa_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.iniciaisFaixa(faixa_r6));
  }
}
function Faixas_Conditional_46_For_2_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2161 ");
  }
}
function Faixas_Conditional_46_For_2_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u25B6 ");
  }
}
function Faixas_Conditional_46_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275conditionalCreate(1, Faixas_Conditional_46_For_2_Conditional_7_Conditional_1_Template, 1, 0)(2, Faixas_Conditional_46_For_2_Conditional_7_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const versaoPrincipal_r7 = \u0275\u0275readContextLet(0);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.versaoReproduzindo()?.id === versaoPrincipal_r7.id && ctx_r0.audioTocando() ? 1 : 2);
  }
}
function Faixas_Conditional_46_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const versaoPrincipal_r7 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(versaoPrincipal_r7.versao);
  }
}
function Faixas_Conditional_46_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Sem arquivo");
    \u0275\u0275elementEnd();
  }
}
function Faixas_Conditional_46_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "button", 39);
    \u0275\u0275listener("click", function Faixas_Conditional_46_For_2_Template_button_click_1_listener() {
      const faixa_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selecionarFaixa(faixa_r6.id));
    });
    \u0275\u0275elementStart(2, "span", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 41);
    \u0275\u0275conditionalCreate(5, Faixas_Conditional_46_For_2_Conditional_5_Template, 1, 2, "img", 42)(6, Faixas_Conditional_46_For_2_Conditional_6_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(7, Faixas_Conditional_46_For_2_Conditional_7_Template, 3, 1, "span", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 44)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, Faixas_Conditional_46_For_2_Conditional_13_Template, 2, 1, "small")(14, Faixas_Conditional_46_For_2_Conditional_14_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 45);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_21_0;
    const faixa_r6 = ctx.$implicit;
    const \u0275$index_165_r8 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    ctx_r0.versoesDaFaixa(faixa_r6.id);
    const versaoPrincipal_r9 = \u0275\u0275storeLet(ctx_r0.versaoPrincipalDaFaixa(faixa_r6));
    \u0275\u0275advance();
    \u0275\u0275classProp("selecionada", ctx_r0.faixaSelecionada().id === faixa_r6.id)("reproduzindo", ctx_r0.faixaReproduzindo()?.id === faixa_r6.id && ctx_r0.audioTocando());
    \u0275\u0275attribute("aria-selected", ctx_r0.faixaSelecionada().id === faixa_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275$index_165_r8 + 1, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("com-imagem", faixa_r6.projeto.capa_caminho !== null)("sem-imagem", faixa_r6.projeto.capa_caminho === null);
    \u0275\u0275attribute("data-ordem", \u0275$index_165_r8 % 4);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_21_0 = ctx_r0.dadosFaixas.capaUrl(faixa_r6.projeto)) ? 5 : 6, tmp_21_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(versaoPrincipal_r9 && ctx_r0.podeReproduzir(versaoPrincipal_r9) ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faixa_r6.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faixa_r6.projeto.nome);
    \u0275\u0275advance();
    \u0275\u0275conditional(versaoPrincipal_r9 ? 13 : 14);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.rotuloStatus(faixa_r6.status_producao), " ");
  }
}
function Faixas_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275repeaterCreate(1, Faixas_Conditional_46_For_2_Template, 17, 18, "button", 38, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.faixasVisiveis());
  }
}
function Faixas_Conditional_48_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 42);
  }
  if (rf & 2) {
    const faixa_r11 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", "Capa de " + faixa_r11.projeto.nome);
  }
}
function Faixas_Conditional_48_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "small");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faixa_r11 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.iniciaisFaixa(faixa_r11));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faixa_r11.projeto.nome);
  }
}
function Faixas_Conditional_48_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faixa_r11 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", faixa_r11.bpm, " BPM");
  }
}
function Faixas_Conditional_48_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faixa_r11 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Tom ", faixa_r11.tom);
  }
}
function Faixas_Conditional_48_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " vers\xE3o ");
  }
}
function Faixas_Conditional_48_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " vers\xF5es ");
  }
}
function Faixas_Conditional_48_Conditional_29_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 72);
  }
}
function Faixas_Conditional_48_Conditional_29_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2161 ");
  }
}
function Faixas_Conditional_48_Conditional_29_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u25B6 ");
  }
}
function Faixas_Conditional_48_Conditional_29_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275conditionalCreate(1, Faixas_Conditional_48_Conditional_29_Conditional_2_Conditional_1_Template, 1, 0)(2, Faixas_Conditional_48_Conditional_29_Conditional_2_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.versaoPrincipalEstaTocando() ? 1 : 2);
  }
}
function Faixas_Conditional_48_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function Faixas_Conditional_48_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      \u0275\u0275nextContext();
      const versaoPrincipal_r13 = \u0275\u0275readContextLet(1);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.reproduzirVersao(versaoPrincipal_r13));
    });
    \u0275\u0275conditionalCreate(1, Faixas_Conditional_48_Conditional_29_Conditional_1_Template, 1, 0, "span", 72)(2, Faixas_Conditional_48_Conditional_29_Conditional_2_Template, 3, 1, "span", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faixa_r11 = \u0275\u0275nextContext();
    const versaoPrincipal_r13 = \u0275\u0275readContextLet(1);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("tocando", ctx_r0.versaoPrincipalEstaTocando());
    \u0275\u0275property("disabled", ctx_r0.carregandoReproducaoId() !== null);
    \u0275\u0275attribute("aria-label", ctx_r0.versaoPrincipalEstaTocando() ? "Pausar " + faixa_r11.titulo : "Reproduzir " + faixa_r11.titulo)("aria-pressed", ctx_r0.versaoPrincipalEstaTocando());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.carregandoReproducaoId() === versaoPrincipal_r13.id ? 1 : 2);
  }
}
function Faixas_Conditional_48_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Fechar envio ");
  }
}
function Faixas_Conditional_48_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Nova vers\xE3o ");
  }
}
function Faixas_Conditional_48_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Excluindo... ");
  }
}
function Faixas_Conditional_48_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Excluir ");
  }
}
function Faixas_Conditional_48_Conditional_40_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Informe a vers\xE3o.");
    \u0275\u0275elementEnd();
  }
}
function Faixas_Conditional_48_Conditional_40_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Selecione o arquivo.");
    \u0275\u0275elementEnd();
  }
}
function Faixas_Conditional_48_Conditional_40_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const arquivo_r15 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(arquivo_r15.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatarBytes(arquivo_r15.size));
  }
}
function Faixas_Conditional_48_Conditional_40_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.erroUpload(), " ");
  }
}
function Faixas_Conditional_48_Conditional_40_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enviando... ");
  }
}
function Faixas_Conditional_48_Conditional_40_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enviar arquivo ");
  }
}
function Faixas_Conditional_48_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 59)(1, "header")(2, "div")(3, "p");
    \u0275\u0275text(4, "Novo arquivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Enviar vers\xE3o");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "form", 73);
    \u0275\u0275listener("ngSubmit", function Faixas_Conditional_48_Conditional_40_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r14);
      const faixa_r11 = \u0275\u0275nextContext();
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.enviarVersao(faixa_r11.id));
    });
    \u0275\u0275elementStart(10, "div", 74)(11, "label")(12, "span");
    \u0275\u0275text(13, "Nome da vers\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 75);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(15, Faixas_Conditional_48_Conditional_40_Conditional_15_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label")(17, "span");
    \u0275\u0275text(18, "Arquivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 76);
    \u0275\u0275listener("change", function Faixas_Conditional_48_Conditional_40_Template_input_change_19_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selecionarArquivo($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, Faixas_Conditional_48_Conditional_40_Conditional_20_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "label", 77)(22, "span");
    \u0275\u0275text(23, "Observa\xE7\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "textarea", 78);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(25, Faixas_Conditional_48_Conditional_40_Conditional_25_Template, 5, 2, "div", 79);
    \u0275\u0275conditionalCreate(26, Faixas_Conditional_48_Conditional_40_Conditional_26_Template, 2, 1, "p", 80);
    \u0275\u0275elementStart(27, "div", 81)(28, "button", 82);
    \u0275\u0275listener("click", function Faixas_Conditional_48_Conditional_40_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelarUpload());
    });
    \u0275\u0275text(29, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 83);
    \u0275\u0275conditionalCreate(31, Faixas_Conditional_48_Conditional_40_Conditional_31_Template, 1, 0)(32, Faixas_Conditional_48_Conditional_40_Conditional_32_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const faixa_r11 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatarBytes(ctx_r0.dadosVersoes.espacoDisponivelBytes()), " livres ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.formularioUpload);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.formularioUpload.controls.versao.touched && ctx_r0.formularioUpload.controls.versao.invalid ? 15 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.formularioUpload.controls.arquivo.touched && ctx_r0.formularioUpload.controls.arquivo.invalid ? 20 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = ctx_r0.formularioUpload.controls.arquivo.value) ? 25 : -1, tmp_16_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.erroUpload() ? 26 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.enviandoFaixaId() === faixa_r11.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.enviandoFaixaId() === faixa_r11.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.enviandoFaixaId() === faixa_r11.id ? 31 : 32);
  }
}
function Faixas_Conditional_48_Conditional_49_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Principal ");
  }
}
function Faixas_Conditional_48_Conditional_49_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Mais recente \xB7 escolha provis\xF3ria ");
  }
}
function Faixas_Conditional_48_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275conditionalCreate(1, Faixas_Conditional_48_Conditional_49_Conditional_1_Template, 1, 0)(2, Faixas_Conditional_48_Conditional_49_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faixa_r11 = \u0275\u0275nextContext();
    const versaoPrincipal_r13 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance();
    \u0275\u0275conditional(faixa_r11.versao_principal_id === versaoPrincipal_r13.id ? 1 : 2);
  }
}
function Faixas_Conditional_48_Conditional_50_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 37);
  }
}
function Faixas_Conditional_48_Conditional_50_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u25B6 ");
  }
}
function Faixas_Conditional_48_Conditional_50_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Definindo... ");
  }
}
function Faixas_Conditional_48_Conditional_50_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Definir como principal ");
  }
}
function Faixas_Conditional_48_Conditional_50_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function Faixas_Conditional_48_Conditional_50_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const faixa_r11 = \u0275\u0275nextContext(2);
      const versaoPrincipal_r13 = \u0275\u0275readContextLet(1);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.definirVersaoPrincipal(faixa_r11, versaoPrincipal_r13));
    });
    \u0275\u0275conditionalCreate(1, Faixas_Conditional_48_Conditional_50_Conditional_15_Conditional_1_Template, 1, 0)(2, Faixas_Conditional_48_Conditional_50_Conditional_15_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const versaoPrincipal_r13 = \u0275\u0275readContextLet(1);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.definindoVersaoPrincipalId() !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.definindoVersaoPrincipalId() === versaoPrincipal_r13.id ? 1 : 2);
  }
}
function Faixas_Conditional_48_Conditional_50_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Preparando... ");
  }
}
function Faixas_Conditional_48_Conditional_50_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Baixar ");
  }
}
function Faixas_Conditional_48_Conditional_50_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 94);
    \u0275\u0275listener("click", function Faixas_Conditional_48_Conditional_50_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      \u0275\u0275nextContext(2);
      const versaoPrincipal_r13 = \u0275\u0275readContextLet(1);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.revogarLink(versaoPrincipal_r13));
    });
    \u0275\u0275text(1, " Revogar ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.processandoLinkVersaoId() !== null);
  }
}
function Faixas_Conditional_48_Conditional_50_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const versaoPrincipal_r13 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", versaoPrincipal_r13.observacoes, " ");
  }
}
function Faixas_Conditional_48_Conditional_50_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.erroVersaoPrincipal(), " ");
  }
}
function Faixas_Conditional_48_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 84)(1, "button", 85);
    \u0275\u0275listener("click", function Faixas_Conditional_48_Conditional_50_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      \u0275\u0275nextContext();
      const versaoPrincipal_r13 = \u0275\u0275readContextLet(1);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.reproduzirVersao(versaoPrincipal_r13));
    });
    \u0275\u0275conditionalCreate(2, Faixas_Conditional_48_Conditional_50_Conditional_2_Template, 1, 0, "span", 37)(3, Faixas_Conditional_48_Conditional_50_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 86)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 87)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "time");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 88);
    \u0275\u0275conditionalCreate(15, Faixas_Conditional_48_Conditional_50_Conditional_15_Template, 3, 2, "button", 89);
    \u0275\u0275elementStart(16, "button", 90);
    \u0275\u0275listener("click", function Faixas_Conditional_48_Conditional_50_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r16);
      \u0275\u0275nextContext();
      const versaoPrincipal_r13 = \u0275\u0275readContextLet(1);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.baixarVersao(versaoPrincipal_r13));
    });
    \u0275\u0275conditionalCreate(17, Faixas_Conditional_48_Conditional_50_Conditional_17_Template, 1, 0)(18, Faixas_Conditional_48_Conditional_50_Conditional_18_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 91);
    \u0275\u0275listener("click", function Faixas_Conditional_48_Conditional_50_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r16);
      const faixa_r11 = \u0275\u0275nextContext();
      const versaoPrincipal_r13 = \u0275\u0275readContextLet(1);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.compartilharWhatsApp(faixa_r11, versaoPrincipal_r13));
    });
    \u0275\u0275text(20, " WhatsApp ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 90);
    \u0275\u0275listener("click", function Faixas_Conditional_48_Conditional_50_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r16);
      \u0275\u0275nextContext();
      const versaoPrincipal_r13 = \u0275\u0275readContextLet(1);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.copiarLink(versaoPrincipal_r13));
    });
    \u0275\u0275text(22, " Copiar link ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, Faixas_Conditional_48_Conditional_50_Conditional_23_Template, 2, 1, "button", 92);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(24, Faixas_Conditional_48_Conditional_50_Conditional_24_Template, 2, 1, "p", 93);
    \u0275\u0275conditionalCreate(25, Faixas_Conditional_48_Conditional_50_Conditional_25_Template, 2, 1, "p", 80);
  }
  if (rf & 2) {
    const faixa_r11 = \u0275\u0275nextContext();
    const versaoPrincipal_r13 = \u0275\u0275readContextLet(1);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.podeReproduzir(versaoPrincipal_r13) || ctx_r0.carregandoReproducaoId() !== null);
    \u0275\u0275attribute("aria-label", "Reproduzir " + versaoPrincipal_r13.versao);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.carregandoReproducaoId() === versaoPrincipal_r13.id ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(versaoPrincipal_r13.versao);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(versaoPrincipal_r13.nome_arquivo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatarBytes(versaoPrincipal_r13.tamanho_bytes), " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("datetime", versaoPrincipal_r13.confirmado_em ?? versaoPrincipal_r13.criado_em);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatarData(versaoPrincipal_r13.confirmado_em ?? versaoPrincipal_r13.criado_em), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(faixa_r11.versao_principal_id !== versaoPrincipal_r13.id ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.baixandoVersaoId() !== null || ctx_r0.processandoLinkVersaoId() !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.baixandoVersaoId() === versaoPrincipal_r13.id ? 17 : 18);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.baixandoVersaoId() !== null || ctx_r0.processandoLinkVersaoId() !== null);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.baixandoVersaoId() !== null || ctx_r0.processandoLinkVersaoId() !== null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(versaoPrincipal_r13.token_compartilhamento ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(versaoPrincipal_r13.observacoes ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.erroVersaoPrincipal() ? 25 : -1);
  }
}
function Faixas_Conditional_48_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "strong");
    \u0275\u0275text(2, "Nenhum arquivo enviado.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Envie uma vers\xE3o para iniciar o hist\xF3rico da faixa. ");
    \u0275\u0275elementEnd()();
  }
}
function Faixas_Conditional_48_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faixa_r11 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(faixa_r11.observacoes);
  }
}
function Faixas_Conditional_48_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 65);
    \u0275\u0275text(1, " Sem observa\xE7\xF5es registradas. ");
    \u0275\u0275elementEnd();
  }
}
function Faixas_Conditional_48_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 66);
    \u0275\u0275text(1, " Abrir \xE1udio externo ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faixa_r11 = \u0275\u0275nextContext();
    \u0275\u0275property("href", faixa_r11.link_externo_audio, \u0275\u0275sanitizeUrl);
  }
}
function Faixas_Conditional_48_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " participante ");
  }
}
function Faixas_Conditional_48_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " participantes ");
  }
}
function Faixas_Conditional_48_For_75_Conditional_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2212 ");
  }
}
function Faixas_Conditional_48_For_75_Conditional_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " + ");
  }
}
function Faixas_Conditional_48_For_75_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 101);
    \u0275\u0275conditionalCreate(6, Faixas_Conditional_48_For_75_Conditional_7_Conditional_6_Template, 1, 0)(7, Faixas_Conditional_48_For_75_Conditional_7_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const participante_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", participante_r20.versoes.length, " ", participante_r20.versoes.length === 1 ? "vers\xE3o" : "vers\xF5es", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatarData(participante_r20.versoes[0].confirmado_em ?? participante_r20.versoes[0].criado_em), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.participanteExpandidoId() === participante_r20.membro.id ? 6 : 7);
  }
}
function Faixas_Conditional_48_For_75_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "span");
    \u0275\u0275text(2, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4, "Sem vers\xE3o enviada");
    \u0275\u0275elementEnd()();
  }
}
function Faixas_Conditional_48_For_75_Conditional_9_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 107);
  }
}
function Faixas_Conditional_48_For_75_Conditional_9_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2193 ");
  }
}
function Faixas_Conditional_48_For_75_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "time");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 104)(9, "button", 105);
    \u0275\u0275listener("click", function Faixas_Conditional_48_For_75_Conditional_9_For_2_Template_button_click_9_listener() {
      const versao_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.reproduzirVersao(versao_r22));
    });
    \u0275\u0275text(10, " \u25B6 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 106);
    \u0275\u0275listener("click", function Faixas_Conditional_48_For_75_Conditional_9_For_2_Template_button_click_11_listener() {
      const versao_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.baixarVersao(versao_r22));
    });
    \u0275\u0275conditionalCreate(12, Faixas_Conditional_48_For_75_Conditional_9_For_2_Conditional_12_Template, 1, 0, "span", 107)(13, Faixas_Conditional_48_For_75_Conditional_9_For_2_Conditional_13_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const versao_r22 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(versao_r22.versao);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", versao_r22.nome_arquivo, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatarData(versao_r22.confirmado_em ?? versao_r22.criado_em), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.podeReproduzir(versao_r22));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.baixandoVersaoId() === versao_r22.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.baixandoVersaoId() === versao_r22.id ? 12 : 13);
  }
}
function Faixas_Conditional_48_For_75_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275repeaterCreate(1, Faixas_Conditional_48_For_75_Conditional_9_For_2_Template, 14, 6, "div", 102, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const participante_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(participante_r20.versoes);
  }
}
function Faixas_Conditional_48_For_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 95)(1, "button", 96);
    \u0275\u0275listener("click", function Faixas_Conditional_48_For_75_Template_button_click_1_listener() {
      const participante_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.alternarParticipante(participante_r20.membro.id));
    });
    \u0275\u0275elementStart(2, "div", 97)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, Faixas_Conditional_48_For_75_Conditional_7_Template, 8, 4)(8, Faixas_Conditional_48_For_75_Conditional_8_Template, 5, 0, "div", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, Faixas_Conditional_48_For_75_Conditional_9_Template, 3, 0, "div", 99);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const participante_r20 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("expandida", ctx_r0.participanteExpandidoId() === participante_r20.membro.id);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", participante_r20.versoes.length === 0);
    \u0275\u0275attribute("aria-expanded", ctx_r0.participanteExpandidoId() === participante_r20.membro.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", participante_r20.contato?.nome ?? "Participante", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", participante_r20.membro.papel, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(participante_r20.versoes.length > 0 ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(participante_r20.versoes.length > 0 && ctx_r0.participanteExpandidoId() === participante_r20.membro.id ? 9 : -1);
  }
}
function Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2026 ");
  }
}
function Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u275A\u275A ");
  }
}
function Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u25B6 ");
  }
}
function Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Est\xFAdio");
    \u0275\u0275elementEnd();
  }
}
function Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Participante");
    \u0275\u0275elementEnd();
  }
}
function Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2026 ");
  }
}
function Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Tornar principal ");
  }
}
function Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2026 ");
  }
}
function Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2193 ");
  }
}
function Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 115);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const versao_r24 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", versao_r24.observacoes, " ");
  }
}
function Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 110)(1, "div", 111)(2, "button", 112);
    \u0275\u0275listener("click", function Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r23);
      const versao_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.reproduzirVersao(versao_r24));
    });
    \u0275\u0275conditionalCreate(3, Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Conditional_3_Template, 1, 0)(4, Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Conditional_4_Template, 1, 0)(5, Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Conditional_5_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 113)(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Conditional_14_Template, 2, 0, "small")(15, Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Conditional_15_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "time");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 114)(21, "button", 90);
    \u0275\u0275listener("click", function Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r23);
      const versao_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.definirVersaoPrincipal(ctx_r0.faixaSelecionada(), versao_r24));
    });
    \u0275\u0275conditionalCreate(22, Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Conditional_22_Template, 1, 0)(23, Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Conditional_23_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 90);
    \u0275\u0275listener("click", function Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r23);
      const versao_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.baixarVersao(versao_r24));
    });
    \u0275\u0275conditionalCreate(25, Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Conditional_25_Template, 1, 0)(26, Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Conditional_26_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 90);
    \u0275\u0275listener("click", function Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r23);
      const versao_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.compartilharWhatsApp(ctx_r0.faixaSelecionada(), versao_r24));
    });
    \u0275\u0275text(28, " WhatsApp ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 90);
    \u0275\u0275listener("click", function Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r23);
      const versao_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.copiarLink(versao_r24));
    });
    \u0275\u0275text(30, " Link ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 90);
    \u0275\u0275listener("click", function Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r23);
      const versao_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.revogarLink(versao_r24));
    });
    \u0275\u0275text(32, " Revogar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(33, Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Conditional_33_Template, 2, 1, "p", 115);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const versao_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.carregandoReproducaoId() === versao_r24.id || !ctx_r0.podeReproduzir(versao_r24));
    \u0275\u0275attribute("aria-label", "Reproduzir vers\xE3o " + versao_r24.versao);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.carregandoReproducaoId() === versao_r24.id ? 3 : ctx_r0.versaoReproduzindo()?.id === versao_r24.id && ctx_r0.audioTocando() ? 4 : 5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(versao_r24.versao);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(versao_r24.nome_arquivo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.nomeRemetenteVersao(versao_r24), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.nomeRemetenteVersao(versao_r24) === "Est\xFAdio" ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatarBytes(versao_r24.tamanho_bytes), " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("datetime", versao_r24.confirmado_em ?? versao_r24.criado_em);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatarData(versao_r24.confirmado_em ?? versao_r24.criado_em), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.definindoVersaoPrincipalId() === versao_r24.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.definindoVersaoPrincipalId() === versao_r24.id ? 22 : 23);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.baixandoVersaoId() === versao_r24.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.baixandoVersaoId() === versao_r24.id ? 25 : 26);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.processandoLinkVersaoId() === versao_r24.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.processandoLinkVersaoId() === versao_r24.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.processandoLinkVersaoId() === versao_r24.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(versao_r24.observacoes ? 33 : -1);
  }
}
function Faixas_Conditional_48_Conditional_76_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Faixas_Conditional_48_Conditional_76_For_22_Conditional_0_Template, 34, 18, "article", 110);
  }
  if (rf & 2) {
    const versao_r24 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const versaoPrincipal_r13 = \u0275\u0275readContextLet(1);
    \u0275\u0275conditional(versao_r24.id !== versaoPrincipal_r13?.id ? 0 : -1);
  }
}
function Faixas_Conditional_48_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 70)(1, "header")(2, "div")(3, "p");
    \u0275\u0275text(4, "Arquivos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Outras vers\xF5es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 108)(10, "span");
    \u0275\u0275text(11, "Vers\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "Enviada por");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Tamanho");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Enviada em");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "A\xE7\xF5es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 109);
    \u0275\u0275repeaterCreate(21, Faixas_Conditional_48_Conditional_76_For_22_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const versoes_r25 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", versoes_r25.length - 1, " ");
    \u0275\u0275advance(13);
    \u0275\u0275repeater(versoes_r25);
  }
}
function Faixas_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0)(1);
    \u0275\u0275elementStart(2, "div", 46)(3, "header", 47);
    \u0275\u0275element(4, "span", 48, 0);
    \u0275\u0275elementStart(6, "div", 49, 1);
    \u0275\u0275conditionalCreate(8, Faixas_Conditional_48_Conditional_8_Template, 1, 2, "img", 42)(9, Faixas_Conditional_48_Conditional_9_Template, 4, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 50, 2)(12, "p");
    \u0275\u0275text(13, "Faixa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h2");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 51);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 52)(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, Faixas_Conditional_48_Conditional_21_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(22, Faixas_Conditional_48_Conditional_22_Template, 2, 1, "span");
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275conditionalCreate(25, Faixas_Conditional_48_Conditional_25_Template, 1, 0)(26, Faixas_Conditional_48_Conditional_26_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 53, 3);
    \u0275\u0275conditionalCreate(29, Faixas_Conditional_48_Conditional_29_Template, 3, 6, "button", 54);
    \u0275\u0275elementStart(30, "button", 55);
    \u0275\u0275listener("click", function Faixas_Conditional_48_Template_button_click_30_listener() {
      const faixa_r11 = \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.abrirUpload(faixa_r11.id));
    });
    \u0275\u0275conditionalCreate(31, Faixas_Conditional_48_Conditional_31_Template, 1, 0)(32, Faixas_Conditional_48_Conditional_32_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 56);
    \u0275\u0275listener("click", function Faixas_Conditional_48_Template_button_click_33_listener() {
      const faixa_r11 = \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editar(faixa_r11));
    });
    \u0275\u0275text(34, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 57);
    \u0275\u0275listener("click", function Faixas_Conditional_48_Template_button_click_35_listener() {
      const faixa_r11 = \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.excluir(faixa_r11));
    });
    \u0275\u0275conditionalCreate(36, Faixas_Conditional_48_Conditional_36_Template, 1, 0)(37, Faixas_Conditional_48_Conditional_37_Template, 1, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 58, 4);
    \u0275\u0275conditionalCreate(40, Faixas_Conditional_48_Conditional_40_Template, 33, 9, "section", 59);
    \u0275\u0275elementStart(41, "div", 60)(42, "section", 61)(43, "header")(44, "div")(45, "p");
    \u0275\u0275text(46, "Em circula\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "h3");
    \u0275\u0275text(48, "Vers\xE3o principal");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(49, Faixas_Conditional_48_Conditional_49_Template, 3, 1, "span", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(50, Faixas_Conditional_48_Conditional_50_Template, 26, 16)(51, Faixas_Conditional_48_Conditional_51_Template, 5, 0, "div", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "section", 64)(53, "header")(54, "div")(55, "p");
    \u0275\u0275text(56, "Informa\xE7\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "h3");
    \u0275\u0275text(58, "Contexto da produ\xE7\xE3o");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(59, Faixas_Conditional_48_Conditional_59_Template, 2, 1, "p")(60, Faixas_Conditional_48_Conditional_60_Template, 2, 0, "p", 65);
    \u0275\u0275conditionalCreate(61, Faixas_Conditional_48_Conditional_61_Template, 2, 1, "a", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "section", 67)(63, "header")(64, "div")(65, "p");
    \u0275\u0275text(66, "Colabora\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "h3");
    \u0275\u0275text(68, "Participantes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "span");
    \u0275\u0275text(70);
    \u0275\u0275conditionalCreate(71, Faixas_Conditional_48_Conditional_71_Template, 1, 0)(72, Faixas_Conditional_48_Conditional_72_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 68);
    \u0275\u0275repeaterCreate(74, Faixas_Conditional_48_For_75_Template, 10, 8, "article", 69, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(76, Faixas_Conditional_48_Conditional_76_Template, 23, 1, "section", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const faixa_r11 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    const versoes_r26 = \u0275\u0275storeLet(ctx_r0.versoesSelecionadas());
    \u0275\u0275advance();
    const versaoPrincipal_r27 = \u0275\u0275storeLet(ctx_r0.versaoPrincipalSelecionada());
    \u0275\u0275advance(5);
    \u0275\u0275classProp("com-imagem", faixa_r11.projeto.capa_caminho !== null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_10_0 = ctx_r0.dadosFaixas.capaUrl(faixa_r11.projeto)) ? 8 : 9, tmp_10_0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(faixa_r11.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", faixa_r11.projeto.nome, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.rotuloStatus(faixa_r11.status_producao), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(faixa_r11.bpm !== null ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(faixa_r11.tom ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", versoes_r26.length, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(versoes_r26.length === 1 ? 25 : 26);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(versaoPrincipal_r27 && ctx_r0.podeReproduzir(versaoPrincipal_r27) ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.enviandoFaixaId() !== null || ctx_r0.dadosVersoes.carregando() || ctx_r0.dadosVersoes.erro() !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.faixaUploadId() === faixa_r11.id ? 31 : 32);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.excluindoId() === faixa_r11.id)("title", ctx_r0.temVersoes(faixa_r11.id) ? "A faixa possui vers\xF5es armazenadas" : "Excluir faixa");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.excluindoId() === faixa_r11.id ? 36 : 37);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.faixaUploadId() === faixa_r11.id ? 40 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(versaoPrincipal_r27 ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(versaoPrincipal_r27 ? 50 : 51);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(faixa_r11.observacoes ? 59 : 60);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(faixa_r11.link_externo_audio ? 61 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r0.participantesDaFaixa().length, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.participantesDaFaixa().length === 1 ? 71 : 72);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.participantesDaFaixa());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(versoes_r26.length > 1 ? 76 : -1);
  }
}
function Faixas_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 116);
    \u0275\u0275text(2, " \u266B ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Selecione uma faixa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, " Os arquivos, vers\xF5es e a\xE7\xF5es aparecer\xE3o aqui. ");
    \u0275\u0275elementEnd()();
  }
}
function Faixas_Conditional_50_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Editar cat\xE1logo ");
  }
}
function Faixas_Conditional_50_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Adicionar ao cat\xE1logo ");
  }
}
function Faixas_Conditional_50_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Editar faixa ");
  }
}
function Faixas_Conditional_50_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Nova faixa ");
  }
}
function Faixas_Conditional_50_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "p");
    \u0275\u0275text(2, " Cadastre um projeto art\xEDstico antes de cadastrar uma faixa. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 134);
    \u0275\u0275text(4, " Ir para projetos ");
    \u0275\u0275elementEnd()();
  }
}
function Faixas_Conditional_50_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 126);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const projeto_r29 = ctx.$implicit;
    \u0275\u0275property("value", projeto_r29.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", projeto_r29.nome, " ");
  }
}
function Faixas_Conditional_50_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Selecione o projeto art\xEDstico. ");
    \u0275\u0275elementEnd();
  }
}
function Faixas_Conditional_50_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Informe o t\xEDtulo da faixa. ");
    \u0275\u0275elementEnd();
  }
}
function Faixas_Conditional_50_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 126);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opcao_r30 = ctx.$implicit;
    \u0275\u0275property("value", opcao_r30.valor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opcao_r30.rotulo, " ");
  }
}
function Faixas_Conditional_50_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.erroFormulario(), " ");
  }
}
function Faixas_Conditional_50_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvando... ");
  }
}
function Faixas_Conditional_50_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvar altera\xE7\xF5es ");
  }
}
function Faixas_Conditional_50_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Adicionar faixa ");
  }
}
function Faixas_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "button", 117);
    \u0275\u0275listener("click", function Faixas_Conditional_50_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharEditor());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "section", 118)(3, "header")(4, "div")(5, "p");
    \u0275\u0275conditionalCreate(6, Faixas_Conditional_50_Conditional_6_Template, 1, 0)(7, Faixas_Conditional_50_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2", 119);
    \u0275\u0275conditionalCreate(9, Faixas_Conditional_50_Conditional_9_Template, 1, 0)(10, Faixas_Conditional_50_Conditional_10_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 120);
    \u0275\u0275listener("click", function Faixas_Conditional_50_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharEditor());
    });
    \u0275\u0275text(12, " \xD7 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 121);
    \u0275\u0275conditionalCreate(14, Faixas_Conditional_50_Conditional_14_Template, 5, 0, "div", 122);
    \u0275\u0275elementStart(15, "form", 73);
    \u0275\u0275listener("ngSubmit", function Faixas_Conditional_50_Template_form_ngSubmit_15_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.salvar());
    });
    \u0275\u0275elementStart(16, "div", 123)(17, "label")(18, "span");
    \u0275\u0275text(19, "Projeto art\xEDstico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 124)(21, "option", 125);
    \u0275\u0275text(22, " Selecione um projeto ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(23, Faixas_Conditional_50_For_24_Template, 2, 2, "option", 126, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(25, Faixas_Conditional_50_Conditional_25_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "label")(27, "span");
    \u0275\u0275text(28, "T\xEDtulo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 127);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(30, Faixas_Conditional_50_Conditional_30_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "label")(32, "span");
    \u0275\u0275text(33, "Status de produ\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "select", 128);
    \u0275\u0275repeaterCreate(35, Faixas_Conditional_50_For_36_Template, 2, 2, "option", 126, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 129)(38, "label")(39, "span");
    \u0275\u0275text(40, "BPM");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 130);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "label")(43, "span");
    \u0275\u0275text(44, "Tom");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 131);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "label")(47, "span");
    \u0275\u0275text(48, "Link externo de \xE1udio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 132);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "label")(51, "span");
    \u0275\u0275text(52, "Observa\xE7\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "textarea", 133);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(54, Faixas_Conditional_50_Conditional_54_Template, 2, 1, "p", 80);
    \u0275\u0275elementStart(55, "div", 81)(56, "button", 82);
    \u0275\u0275listener("click", function Faixas_Conditional_50_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharEditor());
    });
    \u0275\u0275text(57, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 83);
    \u0275\u0275conditionalCreate(59, Faixas_Conditional_50_Conditional_59_Template, 1, 0)(60, Faixas_Conditional_50_Conditional_60_Template, 1, 0)(61, Faixas_Conditional_50_Conditional_61_Template, 1, 0);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.faixaEditandoId() ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.faixaEditandoId() ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.salvando());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.dadosFaixas.carregando() && ctx_r0.dadosFaixas.projetos().length === 0 ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.formulario);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.dadosFaixas.projetos());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.formulario.controls.projeto_id.touched && ctx_r0.formulario.controls.projeto_id.invalid ? 25 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.formulario.controls.titulo.touched && ctx_r0.formulario.controls.titulo.invalid ? 30 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.opcoesStatus);
    \u0275\u0275advance(6);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.erroFormulario() ? 54 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.salvando());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.salvando() || ctx_r0.dadosFaixas.projetos().length === 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.salvando() ? 59 : ctx_r0.faixaEditandoId() ? 60 : 61);
  }
}
function Faixas_Conditional_51_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Editar envio ");
  }
}
function Faixas_Conditional_51_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Montar envio ");
  }
}
function Faixas_Conditional_51_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Envio atualizado. ");
  }
}
function Faixas_Conditional_51_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Envio criado. ");
  }
}
function Faixas_Conditional_51_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "strong");
    \u0275\u0275conditionalCreate(2, Faixas_Conditional_51_Conditional_13_Conditional_2_Template, 1, 0)(3, Faixas_Conditional_51_Conditional_13_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, " Este link continuar\xE1 o mesmo quando o conte\xFAdo for editado. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 123)(7, "label")(8, "span");
    \u0275\u0275text(9, "Link n\xE3o listado");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 139);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 81)(12, "button", 140);
    \u0275\u0275listener("click", function Faixas_Conditional_51_Conditional_13_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.fecharMontadorEnvio());
    });
    \u0275\u0275text(13, " Fechar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 12);
    \u0275\u0275listener("click", function Faixas_Conditional_51_Conditional_13_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copiarLinkEnvioCriado());
    });
    \u0275\u0275text(15, " Copiar link ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.envioEditandoId() ? 2 : 3);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx);
  }
}
function Faixas_Conditional_51_Conditional_14_Conditional_0_For_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " arquivo ");
  }
}
function Faixas_Conditional_51_Conditional_14_Conditional_0_For_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " arquivos ");
  }
}
function Faixas_Conditional_51_Conditional_14_Conditional_0_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 110)(1, "div", 111)(2, "span")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275conditionalCreate(7, Faixas_Conditional_51_Conditional_14_Conditional_0_For_11_Conditional_7_Template, 1, 0)(8, Faixas_Conditional_51_Conditional_14_Conditional_0_For_11_Conditional_8_Template, 1, 0);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 114)(11, "button", 33);
    \u0275\u0275listener("click", function Faixas_Conditional_51_Conditional_14_Conditional_0_For_11_Template_button_click_11_listener() {
      const envio_r35 = \u0275\u0275restoreView(_r34).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.abrirMontadorEnvio(envio_r35));
    });
    \u0275\u0275text(12, " Editar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const envio_r35 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(envio_r35.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", envio_r35.faixas.length, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(envio_r35.faixas.length === 1 ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \xB7 ", envio_r35.projeto.nome, " ");
  }
}
function Faixas_Conditional_51_Conditional_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 70)(1, "header")(2, "div")(3, "p");
    \u0275\u0275text(4, "Compartilhamentos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Envios existentes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 109);
    \u0275\u0275repeaterCreate(10, Faixas_Conditional_51_Conditional_14_Conditional_0_For_11_Template, 13, 4, "article", 110, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.envios().length);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.envios());
  }
}
function Faixas_Conditional_51_Conditional_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Informe um nome para identificar o envio. ");
    \u0275\u0275elementEnd();
  }
}
function Faixas_Conditional_51_Conditional_14_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 126);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const projeto_r36 = ctx.$implicit;
    \u0275\u0275property("value", projeto_r36.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", projeto_r36.nome, " ");
  }
}
function Faixas_Conditional_51_Conditional_14_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label")(1, "span");
    \u0275\u0275text(2, "Texto p\xFAblico");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "textarea", 145);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 110);
    \u0275\u0275element(5, "input", 146);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(6, "span", 111)(7, "span")(8, "strong");
    \u0275\u0275text(9, "Permitir download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small");
    \u0275\u0275text(11, " A reprodu\xE7\xE3o permanece dispon\xEDvel na p\xE1gina. ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275control();
  }
}
function Faixas_Conditional_51_Conditional_14_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "strong");
    \u0275\u0275text(2, "Nenhum arquivo encontrado.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Tente buscar por outro termo.");
    \u0275\u0275elementEnd()();
  }
}
function Faixas_Conditional_51_Conditional_14_Conditional_47_For_2_For_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 110)(1, "input", 148);
    \u0275\u0275listener("change", function Faixas_Conditional_51_Conditional_14_Conditional_47_For_2_For_4_For_1_Template_input_change_1_listener() {
      const versao_r38 = \u0275\u0275restoreView(_r37).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r0.alternarVersaoEnvio(versao_r38.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 111)(3, "span")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const versao_r38 = ctx.$implicit;
    const faixa_r39 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.versaoEstaNoEnvio(versao_r38.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", faixa_r39.titulo, ".", versao_r38.versao, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", versao_r38.nome_arquivo, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatarBytes(versao_r38.tamanho_bytes), " ");
  }
}
function Faixas_Conditional_51_Conditional_14_Conditional_47_For_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, Faixas_Conditional_51_Conditional_14_Conditional_47_For_2_For_4_For_1_Template, 10, 5, "label", 110, _forTrack0);
  }
  if (rf & 2) {
    const faixa_r39 = ctx.$implicit;
    \u0275\u0275repeater(faixa_r39.versoes);
  }
}
function Faixas_Conditional_51_Conditional_14_Conditional_47_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(3, Faixas_Conditional_51_Conditional_14_Conditional_47_For_2_For_4_Template, 2, 0, null, null, _forTrack0);
  }
  if (rf & 2) {
    const projeto_r40 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(projeto_r40.nome);
    \u0275\u0275advance();
    \u0275\u0275repeater(projeto_r40.faixas);
  }
}
function Faixas_Conditional_51_Conditional_14_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275repeaterCreate(1, Faixas_Conditional_51_Conditional_14_Conditional_47_For_2_Template, 5, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.gruposEnvio());
  }
}
function Faixas_Conditional_51_Conditional_14_Conditional_48_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 110)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 111)(4, "span")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 114)(10, "button", 149);
    \u0275\u0275listener("click", function Faixas_Conditional_51_Conditional_14_Conditional_48_For_9_Template_button_click_10_listener() {
      const versao_r42 = \u0275\u0275restoreView(_r41).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.moverVersaoEnvio(versao_r42.id, -1));
    });
    \u0275\u0275text(11, " \u2191 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 150);
    \u0275\u0275listener("click", function Faixas_Conditional_51_Conditional_14_Conditional_48_For_9_Template_button_click_12_listener() {
      const versao_r42 = \u0275\u0275restoreView(_r41).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.moverVersaoEnvio(versao_r42.id, 1));
    });
    \u0275\u0275text(13, " \u2193 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 151);
    \u0275\u0275listener("click", function Faixas_Conditional_51_Conditional_14_Conditional_48_For_9_Template_button_click_14_listener() {
      const versao_r42 = \u0275\u0275restoreView(_r41).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.alternarVersaoEnvio(versao_r42.id));
    });
    \u0275\u0275text(15, " Remover ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const versao_r42 = ctx.$implicit;
    const \u0275$index_1058_r43 = ctx.$index;
    const \u0275$count_1058_r44 = ctx.$count;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_1058_r43 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", versao_r42.faixa.titulo, ".", versao_r42.versao, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", versao_r42.nome_arquivo, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", \u0275$index_1058_r43 === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", \u0275$index_1058_r43 === \u0275$count_1058_r44 - 1);
  }
}
function Faixas_Conditional_51_Conditional_14_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 70)(1, "header")(2, "div")(3, "p");
    \u0275\u0275text(4, "Sequ\xEAncia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Ordem do envio");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 109);
    \u0275\u0275repeaterCreate(8, Faixas_Conditional_51_Conditional_14_Conditional_48_For_9_Template, 16, 6, "article", 110, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r0.versoesEscolhidasEnvio());
  }
}
function Faixas_Conditional_51_Conditional_14_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.erroEnvio(), " ");
  }
}
function Faixas_Conditional_51_Conditional_14_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvando envio... ");
  }
}
function Faixas_Conditional_51_Conditional_14_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvar envio e copiar link ");
  }
}
function Faixas_Conditional_51_Conditional_14_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Criar envio e copiar link ");
  }
}
function Faixas_Conditional_51_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, Faixas_Conditional_51_Conditional_14_Conditional_0_Template, 12, 1, "section", 70);
    \u0275\u0275elementStart(1, "form", 73);
    \u0275\u0275listener("ngSubmit", function Faixas_Conditional_51_Conditional_14_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.criarEnvio());
    });
    \u0275\u0275elementStart(2, "div", 123)(3, "label")(4, "span");
    \u0275\u0275text(5, "Nome do envio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 141);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(7, Faixas_Conditional_51_Conditional_14_Conditional_7_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label")(9, "span");
    \u0275\u0275text(10, "Projeto principal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 124)(12, "option", 125);
    \u0275\u0275text(13, " Selecione um projeto ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(14, Faixas_Conditional_51_Conditional_14_For_15_Template, 2, 2, "option", 126, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(16, "small");
    \u0275\u0275text(17, " Serve como contexto e capa. N\xE3o limita os arquivos escolhidos. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label")(19, "span");
    \u0275\u0275text(20, "Observa\xE7\xF5es internas");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "textarea", 142);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label", 110);
    \u0275\u0275element(23, "input", 143);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(24, "span", 111)(25, "span")(26, "strong");
    \u0275\u0275text(27, "Publicar este envio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "small");
    \u0275\u0275text(29, " Torna o envio vis\xEDvel como trabalho p\xFAblico. Desmarcado, o acesso continua somente pelo link n\xE3o listado. ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(30, Faixas_Conditional_51_Conditional_14_Conditional_30_Template, 12, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "section", 70)(32, "header")(33, "div")(34, "p");
    \u0275\u0275text(35, "Acervo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "h3");
    \u0275\u0275text(37, "Escolher arquivos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "label", 21)(41, "span", 22);
    \u0275\u0275text(42, " \u2315 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 23);
    \u0275\u0275text(44, " Buscar arquivos para o envio ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 144);
    \u0275\u0275listener("input", function Faixas_Conditional_51_Conditional_14_Template_input_input_45_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.atualizarBuscaEnvio($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(46, Faixas_Conditional_51_Conditional_14_Conditional_46_Template, 5, 0, "div", 63)(47, Faixas_Conditional_51_Conditional_14_Conditional_47_Template, 3, 0, "div", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(48, Faixas_Conditional_51_Conditional_14_Conditional_48_Template, 10, 0, "section", 70);
    \u0275\u0275conditionalCreate(49, Faixas_Conditional_51_Conditional_14_Conditional_49_Template, 2, 1, "p", 80);
    \u0275\u0275elementStart(50, "div", 81)(51, "button", 82);
    \u0275\u0275listener("click", function Faixas_Conditional_51_Conditional_14_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.fecharMontadorEnvio());
    });
    \u0275\u0275text(52, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 83);
    \u0275\u0275conditionalCreate(54, Faixas_Conditional_51_Conditional_14_Conditional_54_Template, 1, 0)(55, Faixas_Conditional_51_Conditional_14_Conditional_55_Template, 1, 0)(56, Faixas_Conditional_51_Conditional_14_Conditional_56_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r0.envioEditandoId() && ctx_r0.envios().length > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.formularioEnvio);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.formularioEnvio.controls.nome.touched && ctx_r0.formularioEnvio.controls.nome.invalid ? 7 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.dadosFaixas.projetos());
    \u0275\u0275advance(7);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275control();
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.formularioEnvio.controls.publicar.value ? 30 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r0.versoesEnvioIds().length, " selecionados ");
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r0.termoBuscaEnvio());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.gruposEnvio().length === 0 ? 46 : 47);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.versoesEscolhidasEnvio().length > 0 ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.erroEnvio() ? 49 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.criandoEnvio());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.criandoEnvio() || ctx_r0.formularioEnvio.invalid || ctx_r0.versoesEnvioIds().length === 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.criandoEnvio() ? 54 : ctx_r0.envioEditandoId() ? 55 : 56);
  }
}
function Faixas_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "button", 135);
    \u0275\u0275listener("click", function Faixas_Conditional_51_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharMontadorEnvio());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "section", 136)(3, "header")(4, "div")(5, "p");
    \u0275\u0275text(6, "Compartilhamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2", 137);
    \u0275\u0275conditionalCreate(8, Faixas_Conditional_51_Conditional_8_Template, 1, 0)(9, Faixas_Conditional_51_Conditional_9_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 138);
    \u0275\u0275listener("click", function Faixas_Conditional_51_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharMontadorEnvio());
    });
    \u0275\u0275text(11, " \xD7 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 121);
    \u0275\u0275conditionalCreate(13, Faixas_Conditional_51_Conditional_13_Template, 16, 2)(14, Faixas_Conditional_51_Conditional_14_Template, 57, 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.envioEditandoId() ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.criandoEnvio());
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_3_0 = ctx_r0.linkEnvioCriado()) ? 13 : 14, tmp_3_0);
  }
}
function Faixas_Conditional_52_Conditional_0_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 42);
  }
  if (rf & 2) {
    const faixa_r46 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", "Capa de " + faixa_r46.projeto.nome);
  }
}
function Faixas_Conditional_52_Conditional_0_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const faixa_r46 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.iniciaisFaixa(faixa_r46), " ");
  }
}
function Faixas_Conditional_52_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 164);
    \u0275\u0275conditionalCreate(1, Faixas_Conditional_52_Conditional_0_Conditional_2_Conditional_1_Template, 1, 2, "img", 42)(2, Faixas_Conditional_52_Conditional_0_Conditional_2_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const faixa_r46 = ctx;
    const versao_r47 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("com-imagem", faixa_r46.projeto.capa_caminho !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_8_0 = ctx_r0.dadosFaixas.capaUrl(faixa_r46.projeto)) ? 1 : 2, tmp_8_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(faixa_r46.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", faixa_r46.projeto.nome, " \xB7 ", versao_r47.versao, " ");
  }
}
function Faixas_Conditional_52_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "\u2161");
    \u0275\u0275elementEnd();
  }
}
function Faixas_Conditional_52_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "\u25B6");
    \u0275\u0275elementEnd();
  }
}
function Faixas_Conditional_52_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 152)(1, "div", 153);
    \u0275\u0275conditionalCreate(2, Faixas_Conditional_52_Conditional_0_Conditional_2_Template, 8, 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 154)(4, "button", 155);
    \u0275\u0275listener("click", function Faixas_Conditional_52_Conditional_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.alternarReproducao());
    });
    \u0275\u0275conditionalCreate(5, Faixas_Conditional_52_Conditional_0_Conditional_5_Template, 2, 0, "span", 13)(6, Faixas_Conditional_52_Conditional_0_Conditional_6_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 156);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label", 157)(10, "span", 23);
    \u0275\u0275text(11, " Posi\xE7\xE3o da reprodu\xE7\xE3o ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 158);
    \u0275\u0275listener("input", function Faixas_Conditional_52_Conditional_0_Template_input_input_12_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.buscarNaFaixa($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 156);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 159)(16, "label", 160)(17, "span", 13);
    \u0275\u0275text(18, "\u25D6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 23);
    \u0275\u0275text(20, " Volume ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 161);
    \u0275\u0275listener("input", function Faixas_Conditional_52_Conditional_0_Template_input_input_21_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.alterarVolume($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 162);
    \u0275\u0275listener("click", function Faixas_Conditional_52_Conditional_0_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.fecharReprodutor());
    });
    \u0275\u0275text(23, " \xD7 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "audio", 163, 5);
    \u0275\u0275listener("play", function Faixas_Conditional_52_Conditional_0_Template_audio_play_24_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.atualizarEstadoReproducao(true));
    })("pause", function Faixas_Conditional_52_Conditional_0_Template_audio_pause_24_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.atualizarEstadoReproducao(false));
    })("timeupdate", function Faixas_Conditional_52_Conditional_0_Template_audio_timeupdate_24_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.atualizarDadosReproducao($event));
    })("loadedmetadata", function Faixas_Conditional_52_Conditional_0_Template_audio_loadedmetadata_24_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.atualizarDadosReproducao($event));
    })("durationchange", function Faixas_Conditional_52_Conditional_0_Template_audio_durationchange_24_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.atualizarDadosReproducao($event));
    })("ended", function Faixas_Conditional_52_Conditional_0_Template_audio_ended_24_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.atualizarEstadoReproducao(false));
    })("error", function Faixas_Conditional_52_Conditional_0_Template_audio_error_24_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.registrarErroReproducao());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const url_r48 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_5_0 = ctx_r0.faixaReproduzindo()) ? 2 : -1, tmp_5_0);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", ctx_r0.audioTocando() ? "Pausar reprodu\xE7\xE3o" : "Iniciar reprodu\xE7\xE3o");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.audioTocando() ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatarTempoAudio(ctx_r0.tempoAtualAudio()), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("max", ctx_r0.duracaoAudio() || 0)("value", ctx_r0.tempoAtualAudio());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatarTempoAudio(ctx_r0.duracaoAudio()), " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r0.volumeAudio());
    \u0275\u0275advance(3);
    \u0275\u0275property("src", url_r48);
  }
}
function Faixas_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Faixas_Conditional_52_Conditional_0_Template, 26, 9, "footer", 152);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_2_0 = ctx_r0.versaoReproduzindo()) ? 0 : -1, tmp_2_0);
  }
}
var Faixas = class _Faixas {
  dadosAlbuns = inject(DadosAlbuns);
  dadosFaixas = inject(DadosFaixas);
  dadosVersoes = inject(DadosVersoesFaixa);
  construtorFormulario = inject(FormBuilder);
  rota = inject(ActivatedRoute);
  destruirRef = inject(DestroyRef);
  quadroAnimacaoTrocaFaixa = null;
  reprodutor;
  capaHero;
  informacoesHero;
  acoesHero;
  rastroHero;
  conteudoFaixa;
  salvando = signal(
    false,
    ...ngDevMode ? [{ debugName: "salvando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  excluindoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "excluindoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  faixaEditandoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "faixaEditandoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  faixaUploadId = signal(
    null,
    ...ngDevMode ? [{ debugName: "faixaUploadId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  enviandoFaixaId = signal(
    null,
    ...ngDevMode ? [{ debugName: "enviandoFaixaId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  baixandoVersaoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "baixandoVersaoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroFormulario = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroFormulario" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroUpload = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroUpload" }] : (
      /* istanbul ignore next */
      []
    )
  );
  processandoLinkVersaoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "processandoLinkVersaoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  mensagemCompartilhamento = signal(
    null,
    ...ngDevMode ? [{ debugName: "mensagemCompartilhamento" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroCompartilhamento = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroCompartilhamento" }] : (
      /* istanbul ignore next */
      []
    )
  );
  termoBusca = signal(
    "",
    ...ngDevMode ? [{ debugName: "termoBusca" }] : (
      /* istanbul ignore next */
      []
    )
  );
  projetoFiltradoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "projetoFiltradoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  faixaSelecionadaId = signal(
    null,
    ...ngDevMode ? [{ debugName: "faixaSelecionadaId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editorAberto = signal(
    false,
    ...ngDevMode ? [{ debugName: "editorAberto" }] : (
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
  definindoVersaoPrincipalId = signal(
    null,
    ...ngDevMode ? [{ debugName: "definindoVersaoPrincipalId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroVersaoPrincipal = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroVersaoPrincipal" }] : (
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
  montadorEnvioAberto = signal(
    false,
    ...ngDevMode ? [{ debugName: "montadorEnvioAberto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  termoBuscaEnvio = signal(
    "",
    ...ngDevMode ? [{ debugName: "termoBuscaEnvio" }] : (
      /* istanbul ignore next */
      []
    )
  );
  versoesEnvioIds = signal(
    [],
    ...ngDevMode ? [{ debugName: "versoesEnvioIds" }] : (
      /* istanbul ignore next */
      []
    )
  );
  criandoEnvio = signal(
    false,
    ...ngDevMode ? [{ debugName: "criandoEnvio" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroEnvio = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroEnvio" }] : (
      /* istanbul ignore next */
      []
    )
  );
  linkEnvioCriado = signal(
    null,
    ...ngDevMode ? [{ debugName: "linkEnvioCriado" }] : (
      /* istanbul ignore next */
      []
    )
  );
  envioEditandoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "envioEditandoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dadosProjetos = inject(DadosProjetosArtisticos);
  dadosContatos = inject(DadosContatos);
  participanteExpandidoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "participanteExpandidoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  faixasVisiveis = computed(
    () => {
      const termo = this.termoBusca().trim().toLocaleLowerCase("pt-BR");
      const projetoId = this.projetoFiltradoId();
      const faixasDoProjeto = projetoId ? this.dadosFaixas.faixas().filter((faixa) => faixa.projeto_id === projetoId) : this.dadosFaixas.faixas();
      if (!termo) {
        return faixasDoProjeto;
      }
      return faixasDoProjeto.filter((faixa) => [
        faixa.titulo,
        faixa.projeto.nome,
        faixa.status_producao,
        faixa.tom ?? ""
      ].some((valor) => valor.toLocaleLowerCase("pt-BR").includes(termo)));
    },
    ...ngDevMode ? [{ debugName: "faixasVisiveis" }] : (
      /* istanbul ignore next */
      []
    )
  );
  projetoFiltrado = computed(
    () => {
      const projetoId = this.projetoFiltradoId();
      return this.dadosFaixas.projetos().find((projeto) => projeto.id === projetoId) ?? null;
    },
    ...ngDevMode ? [{ debugName: "projetoFiltrado" }] : (
      /* istanbul ignore next */
      []
    )
  );
  faixaSelecionada = computed(
    () => {
      const faixas = this.faixasVisiveis();
      const faixaId = this.faixaSelecionadaId();
      return faixas.find((faixa) => faixa.id === faixaId) ?? faixas[0] ?? null;
    },
    ...ngDevMode ? [{ debugName: "faixaSelecionada" }] : (
      /* istanbul ignore next */
      []
    )
  );
  versoesSelecionadas = computed(
    () => {
      const faixa = this.faixaSelecionada();
      return faixa ? this.dadosVersoes.versoesDaFaixa(faixa.id) : [];
    },
    ...ngDevMode ? [{ debugName: "versoesSelecionadas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  participantesDaFaixa = computed(
    () => {
      const faixa = this.faixaSelecionada();
      if (!faixa) {
        return [];
      }
      const projeto = this.dadosProjetos.projetos().find((item) => item.id === faixa.projeto_id);
      if (!projeto) {
        return [];
      }
      const versoes = this.dadosVersoes.versoesDaFaixa(faixa.id);
      return projeto.membros.map((membro) => {
        const contato = this.dadosContatos.contatos().find((item) => item.id === membro.contato_id);
        const versoesDoParticipante = versoes.filter((versao) => versao.criado_por === contato?.auth_user_id);
        return {
          membro,
          contato,
          versoes: versoesDoParticipante
        };
      });
    },
    ...ngDevMode ? [{ debugName: "participantesDaFaixa" }] : (
      /* istanbul ignore next */
      []
    )
  );
  nomeRemetenteVersao(versao) {
    const contato = this.dadosContatos.contatos().find((item) => item.auth_user_id === versao.criado_por);
    if (contato) {
      return contato.nome;
    }
    const faixa = this.dadosFaixas.faixas().find((item) => item.id === versao.faixa_id);
    if (!faixa) {
      return "Est\xFAdio";
    }
    const projeto = this.dadosProjetos.projetos().find((item) => item.id === faixa.projeto_id);
    if (projeto?.estudio_id === versao.criado_por) {
      return "Est\xFAdio";
    }
    return "Est\xFAdio";
  }
  versaoPrincipalSelecionada = computed(
    () => {
      const faixa = this.faixaSelecionada();
      const versoes = this.versoesSelecionadas();
      if (!faixa) {
        return null;
      }
      return versoes.find((versao) => versao.id === faixa.versao_principal_id) ?? versoes[0] ?? null;
    },
    ...ngDevMode ? [{ debugName: "versaoPrincipalSelecionada" }] : (
      /* istanbul ignore next */
      []
    )
  );
  versaoPrincipalEstaTocando = computed(
    () => {
      const versaoPrincipal = this.versaoPrincipalSelecionada();
      return versaoPrincipal !== null && this.versaoReproduzindo()?.id === versaoPrincipal.id && this.audioTocando();
    },
    ...ngDevMode ? [{ debugName: "versaoPrincipalEstaTocando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  faixaReproduzindo = computed(
    () => {
      const versao = this.versaoReproduzindo();
      return versao ? this.dadosFaixas.faixas().find((faixa) => faixa.id === versao.faixa_id) ?? null : null;
    },
    ...ngDevMode ? [{ debugName: "faixaReproduzindo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  versoesEscolhidasEnvio = computed(
    () => {
      const versoes = this.dadosAlbuns.versoesDisponiveis();
      return this.versoesEnvioIds().map((versaoId) => versoes.find((versao) => versao.id === versaoId)).filter((versao) => versao !== void 0);
    },
    ...ngDevMode ? [{ debugName: "versoesEscolhidasEnvio" }] : (
      /* istanbul ignore next */
      []
    )
  );
  envios = computed(
    () => this.dadosAlbuns.albuns().filter((album) => album.tipo_publico === TIPO_PUBLICO_ENVIO),
    ...ngDevMode ? [{ debugName: "envios" }] : (
      /* istanbul ignore next */
      []
    )
  );
  gruposEnvio = computed(
    () => {
      const termo = this.termoBuscaEnvio().trim().toLocaleLowerCase("pt-BR");
      const projetos = /* @__PURE__ */ new Map();
      for (const versao of this.dadosAlbuns.versoesDisponiveis()) {
        const projeto = this.dadosFaixas.projetos().find((item) => item.id === versao.faixa.projeto_id);
        const nomeProjeto = projeto?.nome ?? "Projeto n\xE3o encontrado";
        const valoresBusca = [
          nomeProjeto,
          versao.faixa.titulo,
          versao.versao,
          versao.nome_arquivo
        ];
        if (termo && !valoresBusca.some((valor) => valor.toLocaleLowerCase("pt-BR").includes(termo))) {
          continue;
        }
        let grupoProjeto = projetos.get(versao.faixa.projeto_id);
        if (!grupoProjeto) {
          grupoProjeto = {
            id: versao.faixa.projeto_id,
            nome: nomeProjeto,
            faixas: []
          };
          projetos.set(versao.faixa.projeto_id, grupoProjeto);
        }
        let grupoFaixa = grupoProjeto.faixas.find((item) => item.id === versao.faixa_id);
        if (!grupoFaixa) {
          grupoFaixa = {
            id: versao.faixa_id,
            titulo: versao.faixa.titulo,
            versoes: []
          };
          grupoProjeto.faixas.push(grupoFaixa);
        }
        grupoFaixa.versoes.push(versao);
      }
      return [...projetos.values()].map((projeto) => __spreadProps(__spreadValues({}, projeto), {
        faixas: projeto.faixas.sort((a, b) => a.titulo.localeCompare(b.titulo, "pt-BR"))
      })).sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
    },
    ...ngDevMode ? [{ debugName: "gruposEnvio" }] : (
      /* istanbul ignore next */
      []
    )
  );
  opcoesStatus = [
    {
      valor: "composicao",
      rotulo: "Composi\xE7\xE3o"
    },
    {
      valor: "arranjos",
      rotulo: "Arranjos"
    },
    {
      valor: "gravacao",
      rotulo: "Grava\xE7\xE3o"
    },
    {
      valor: "edicao",
      rotulo: "Edi\xE7\xE3o"
    },
    {
      valor: "mixagem",
      rotulo: "Mixagem"
    },
    {
      valor: "masterizacao",
      rotulo: "Masteriza\xE7\xE3o"
    },
    {
      valor: "concluido",
      rotulo: "Conclu\xEDdo"
    }
  ];
  formulario = this.construtorFormulario.group({
    projeto_id: this.construtorFormulario.nonNullable.control("", [
      Validators.required
    ]),
    titulo: this.construtorFormulario.nonNullable.control("", [
      Validators.required
    ]),
    bpm: this.construtorFormulario.control(null),
    tom: this.construtorFormulario.control(null),
    status_producao: this.construtorFormulario.nonNullable.control("composicao", [Validators.required]),
    link_externo_audio: this.construtorFormulario.control(null),
    observacoes: this.construtorFormulario.control(null)
  });
  formularioUpload = this.construtorFormulario.group({
    versao: this.construtorFormulario.nonNullable.control("", [
      Validators.required
    ]),
    observacoes: this.construtorFormulario.control(null),
    arquivo: this.construtorFormulario.control(null, [
      Validators.required
    ])
  });
  formularioEnvio = this.construtorFormulario.group({
    projeto_id: this.construtorFormulario.nonNullable.control("", [
      Validators.required
    ]),
    nome: this.construtorFormulario.nonNullable.control("", [
      Validators.required
    ]),
    observacoes: this.construtorFormulario.control(null),
    publicar: this.construtorFormulario.nonNullable.control(false),
    descricao_publica: this.construtorFormulario.control(null),
    download_publico: this.construtorFormulario.nonNullable.control(false)
  });
  alternarParticipante(participanteId) {
    this.participanteExpandidoId.update((id) => id === participanteId ? null : participanteId);
  }
  ngOnInit() {
    this.destruirRef.onDestroy(() => {
      if (typeof window !== "undefined" && this.quadroAnimacaoTrocaFaixa !== null) {
        window.cancelAnimationFrame(this.quadroAnimacaoTrocaFaixa);
      }
    });
    void this.inicializar();
  }
  async inicializar() {
    await this.carregarDados();
    this.rota.queryParamMap.pipe(takeUntilDestroyed(this.destruirRef)).subscribe((parametros) => {
      this.aplicarContextoDaRota(parametros);
    });
  }
  aplicarContextoDaRota(parametros) {
    const projetoId = parametros.get("projeto")?.trim();
    const faixaId = parametros.get("faixa")?.trim();
    const envioId = parametros.get("envio")?.trim();
    const projeto = this.dadosFaixas.projetos().find((item) => item.id === projetoId);
    this.projetoFiltradoId.set(projeto?.id ?? null);
    const envioSolicitado = this.envios().find((envio) => envio.id === envioId && (!projeto || envio.projeto_id === projeto.id));
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
    const faixaSolicitada = this.dadosFaixas.faixas().find((faixa) => faixa.id === faixaId && (!projeto || faixa.projeto_id === projeto.id));
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
    const primeiraFaixa = this.dadosFaixas.faixas().find((faixa) => faixa.projeto_id === projeto.id);
    this.faixaSelecionadaId.set(primeiraFaixa?.id ?? null);
  }
  async carregarDados() {
    await Promise.all([
      this.dadosFaixas.listar(),
      this.dadosVersoes.listar(),
      this.dadosAlbuns.listar(),
      this.dadosProjetos.listar(),
      this.dadosContatos.listar()
    ]);
  }
  abrirMontadorEnvio(envio) {
    const faixa = this.faixaSelecionada();
    this.formularioEnvio.reset({
      projeto_id: envio?.projeto_id ?? faixa?.projeto_id ?? this.projetoFiltradoId() ?? "",
      nome: envio?.nome ?? (faixa ? `Envio \u2014 ${faixa.titulo}` : ""),
      observacoes: envio?.observacoes ?? null,
      publicar: envio?.publico_na_landing ?? false,
      descricao_publica: envio?.descricao_publica ?? null,
      download_publico: envio?.download_publico ?? false
    });
    this.termoBuscaEnvio.set("");
    this.versoesEnvioIds.set(envio ? [...envio.faixas].sort((a, b) => a.ordem - b.ordem).map((item) => item.versao_id) : []);
    this.erroEnvio.set(null);
    this.linkEnvioCriado.set(null);
    this.envioEditandoId.set(envio?.id ?? null);
    this.montadorEnvioAberto.set(true);
  }
  fecharMontadorEnvio() {
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
      download_publico: false
    });
  }
  atualizarBuscaEnvio(evento) {
    const input = evento.target;
    this.termoBuscaEnvio.set(input.value);
  }
  versaoEstaNoEnvio(versaoId) {
    return this.versoesEnvioIds().includes(versaoId);
  }
  alternarVersaoEnvio(versaoId) {
    this.versoesEnvioIds.update((versoesIds) => versoesIds.includes(versaoId) ? versoesIds.filter((id) => id !== versaoId) : [...versoesIds, versaoId]);
    this.erroEnvio.set(null);
  }
  moverVersaoEnvio(versaoId, deslocamento) {
    this.versoesEnvioIds.update((versoesIds) => {
      const novaOrdem = [...versoesIds];
      const indiceAtual = novaOrdem.indexOf(versaoId);
      const novoIndice = indiceAtual + deslocamento;
      if (indiceAtual < 0 || novoIndice < 0 || novoIndice >= novaOrdem.length) {
        return versoesIds;
      }
      [novaOrdem[indiceAtual], novaOrdem[novoIndice]] = [
        novaOrdem[novoIndice],
        novaOrdem[indiceAtual]
      ];
      return novaOrdem;
    });
  }
  async criarEnvio() {
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
      const dados = {
        projeto_id: valor.projeto_id,
        nome: valor.nome,
        observacoes: this.normalizarTextoOpcional(valor.observacoes),
        versoes_ids: this.versoesEnvioIds()
      };
      const envioId = this.envioEditandoId();
      const envio = envioId ? await this.dadosAlbuns.atualizarEnvio(envioId, dados) : await this.dadosAlbuns.cadastrarEnvio(dados);
      if (valor.publicar) {
        const configuracaoPublicacao = {
          tipo_publico: TIPO_PUBLICO_ENVIO,
          descricao_publica: this.normalizarTextoOpcional(valor.descricao_publica),
          reproducao_publica: true,
          download_publico: valor.download_publico
        };
        await this.dadosAlbuns.publicar(envio.id, configuracaoPublicacao);
      } else if (envioId) {
        const envioAnterior = this.envios().find((item) => item.id === envioId);
        if (envioAnterior?.publico_na_landing) {
          await this.dadosAlbuns.despublicar(envio.id);
        }
      }
      const token = envio.token_compartilhamento ?? await this.dadosAlbuns.renovarTokenCompartilhamento(envio.id);
      const link = this.montarLinkEnvio(token);
      this.linkEnvioCriado.set(link);
      try {
        await navigator.clipboard.writeText(link);
        this.mensagemCompartilhamento.set(envioId ? "Envio atualizado e link copiado." : "Envio criado e link copiado.");
      } catch {
        this.mensagemCompartilhamento.set(envioId ? "Envio atualizado. Copie o link exibido no painel." : "Envio criado. Copie o link exibido no painel.");
      }
    } catch (erro) {
      this.erroEnvio.set(this.obterMensagemErro(erro));
    } finally {
      this.criandoEnvio.set(false);
    }
  }
  async copiarLinkEnvioCriado() {
    const link = this.linkEnvioCriado();
    if (!link) {
      return;
    }
    try {
      await navigator.clipboard.writeText(link);
      this.mensagemCompartilhamento.set("Link do envio copiado.");
    } catch {
      this.erroEnvio.set("N\xE3o foi poss\xEDvel copiar o link automaticamente.");
    }
  }
  atualizarBusca(evento) {
    const input = evento.target;
    this.termoBusca.set(input.value);
  }
  selecionarFaixa(faixaId) {
    if (this.faixaSelecionada()?.id !== faixaId) {
      this.faixaSelecionadaId.set(faixaId);
      this.agendarAnimacaoTrocaFaixa();
    }
    this.erroUpload.set(null);
    this.erroFormulario.set(null);
    this.erroVersaoPrincipal.set(null);
    this.limparRetornoCompartilhamento();
  }
  agendarAnimacaoTrocaFaixa() {
    if (typeof window === "undefined") {
      return;
    }
    if (this.quadroAnimacaoTrocaFaixa !== null) {
      window.cancelAnimationFrame(this.quadroAnimacaoTrocaFaixa);
    }
    this.quadroAnimacaoTrocaFaixa = window.requestAnimationFrame(() => {
      this.quadroAnimacaoTrocaFaixa = window.requestAnimationFrame(() => {
        this.quadroAnimacaoTrocaFaixa = null;
        this.executarAnimacaoTrocaFaixa();
      });
    });
  }
  executarAnimacaoTrocaFaixa() {
    const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const escalaDuracao = reduzirMovimento ? 0.45 : 1;
    const deslocamento = reduzirMovimento ? "0.12rem" : "0.48rem";
    const escalaInicial = reduzirMovimento ? 0.99 : 0.96;
    const curva = "cubic-bezier(0.16, 0.78, 0.22, 1)";
    const animar = (elemento, quadros, duracao, atraso = 0) => {
      if (!elemento) {
        return;
      }
      elemento.getAnimations().forEach((animacao) => animacao.cancel());
      elemento.animate(quadros, {
        duration: Math.round(duracao * escalaDuracao),
        delay: Math.round(atraso * escalaDuracao),
        easing: curva,
        fill: "both"
      });
    };
    animar(this.capaHero?.nativeElement, [
      {
        opacity: 0.5,
        filter: "saturate(0.72)",
        transform: `translate3d(-${deslocamento}, ${deslocamento}, 0) scale(${escalaInicial})`
      },
      {
        opacity: 1,
        filter: "saturate(1)",
        transform: "translate3d(0, 0, 0) scale(1)"
      }
    ], 360);
    const elementosInformacao = Array.from(this.informacoesHero?.nativeElement.children ?? []);
    elementosInformacao.forEach((elemento, indice) => {
      if (!(elemento instanceof HTMLElement)) {
        return;
      }
      animar(elemento, [
        { opacity: 0, transform: `translate3d(0, ${deslocamento}, 0)` },
        { opacity: 1, transform: "translate3d(0, 0, 0)" }
      ], 280, indice * 35);
    });
    animar(this.acoesHero?.nativeElement, [
      { opacity: 0, transform: `translate3d(${deslocamento}, 0, 0)` },
      { opacity: 1, transform: "translate3d(0, 0, 0)" }
    ], 280, 80);
    animar(this.conteudoFaixa?.nativeElement, [
      { opacity: 0.55, transform: `translate3d(0, ${deslocamento}, 0)` },
      { opacity: 1, transform: "translate3d(0, 0, 0)" }
    ], 300, 110);
    animar(this.rastroHero?.nativeElement, [
      {
        opacity: 0,
        transform: "skewX(-10deg) translate3d(-120%, 0, 0)"
      },
      { opacity: 0.68, offset: 0.24 },
      {
        opacity: 0,
        transform: "skewX(-10deg) translate3d(780%, 0, 0)"
      }
    ], 520);
  }
  abrirNovaFaixa(projetoId = "") {
    this.limparFormulario();
    this.formulario.controls.projeto_id.setValue(projetoId);
    this.editorAberto.set(true);
  }
  fecharEditor() {
    if (this.salvando()) {
      return;
    }
    this.limparFormulario();
    this.editorAberto.set(false);
  }
  async salvar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    this.salvando.set(true);
    this.erroFormulario.set(null);
    try {
      const valor = this.formulario.getRawValue();
      const dados = {
        projeto_id: valor.projeto_id,
        titulo: valor.titulo,
        bpm: valor.bpm,
        tom: this.normalizarTextoOpcional(valor.tom),
        status_producao: valor.status_producao,
        link_externo_audio: this.normalizarTextoOpcional(valor.link_externo_audio),
        observacoes: this.normalizarTextoOpcional(valor.observacoes)
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
  editar(faixa) {
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
      observacoes: faixa.observacoes
    });
  }
  cancelarEdicao() {
    this.fecharEditor();
  }
  async excluir(faixa) {
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
  abrirUpload(faixaId) {
    if (this.faixaUploadId() === faixaId) {
      this.cancelarUpload();
      return;
    }
    this.limparFormularioUpload();
    this.faixaUploadId.set(faixaId);
  }
  cancelarUpload() {
    if (this.enviandoFaixaId()) {
      return;
    }
    this.faixaUploadId.set(null);
    this.limparFormularioUpload();
  }
  selecionarArquivo(evento) {
    const input = evento.target;
    const arquivo = input.files?.item(0) ?? null;
    this.formularioUpload.controls.arquivo.setValue(arquivo);
    this.formularioUpload.controls.arquivo.markAsTouched();
    this.erroUpload.set(null);
  }
  async enviarVersao(faixaId) {
    if (this.formularioUpload.invalid) {
      this.formularioUpload.markAllAsTouched();
      return;
    }
    const valor = this.formularioUpload.getRawValue();
    if (!valor.arquivo) {
      this.formularioUpload.controls.arquivo.setErrors({
        required: true
      });
      return;
    }
    this.enviandoFaixaId.set(faixaId);
    this.erroUpload.set(null);
    try {
      await this.dadosVersoes.enviar({
        faixa_id: faixaId,
        versao: valor.versao,
        observacoes: this.normalizarTextoOpcional(valor.observacoes),
        arquivo: valor.arquivo
      });
      this.faixaUploadId.set(null);
      this.limparFormularioUpload();
    } catch (erro) {
      this.erroUpload.set(this.obterMensagemErro(erro));
    } finally {
      this.enviandoFaixaId.set(null);
    }
  }
  async baixarVersao(versao) {
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
  async definirVersaoPrincipal(faixa, versao) {
    if (this.definindoVersaoPrincipalId() !== null || faixa.versao_principal_id === versao.id) {
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
  versaoPrincipalDaFaixa(faixa) {
    const versoes = this.dadosVersoes.versoesDaFaixa(faixa.id);
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
    if (!audio) {
      return;
    }
    const tempo = Number(input.value);
    if (Number.isFinite(tempo)) {
      audio.currentTime = tempo;
      this.tempoAtualAudio.set(tempo);
    }
  }
  alterarVolume(evento) {
    const input = evento.target;
    const audio = this.reprodutor?.nativeElement;
    const volume = Number(input.value);
    if (!audio || !Number.isFinite(volume)) {
      return;
    }
    audio.volume = volume;
    this.volumeAudio.set(volume);
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
  iniciaisFaixa(faixa) {
    return faixa.titulo.trim().split(/\s+/).slice(0, 2).map((parte) => parte.charAt(0)).join("").toLocaleUpperCase("pt-BR");
  }
  async tentarIniciarReproducao() {
    try {
      await this.reprodutor?.nativeElement.play();
    } catch {
    }
  }
  async copiarLink(versao) {
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
  async compartilharWhatsApp(faixa, versao) {
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
        `Salve! Segue a vers\xE3o ${versao.versao} da faixa "${faixa.titulo}".`,
        `Projeto: ${faixa.projeto.nome}.`,
        versao.observacoes ? `Observa\xE7\xF5es: ${versao.observacoes}` : null,
        `Acesse ou baixe o arquivo: ${link}`
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
  async revogarLink(versao) {
    const confirmou = window.confirm("Revogar este link? Quem recebeu n\xE3o conseguir\xE1 mais acessar o arquivo.");
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
  async obterLinkCompartilhamento(versao) {
    const token = versao.token_compartilhamento ?? await this.dadosVersoes.criarLinkCompartilhamento(versao.id);
    const tokenSeguro = encodeURIComponent(token);
    const hostname = window.location.hostname.trim().toLocaleLowerCase();
    const dominioFleiva = hostname === "fleiva.com.br" || hostname.endsWith(".fleiva.com.br");
    if (dominioFleiva) {
      return `https://play.fleiva.com.br/t/${tokenSeguro}`;
    }
    const origem = window.location.origin.replace(/\/$/, "");
    return `${origem}/arquivo/${tokenSeguro}`;
  }
  montarLinkEnvio(token) {
    const tokenSeguro = encodeURIComponent(token);
    const hostname = window.location.hostname.trim().toLocaleLowerCase();
    const dominioFleiva = hostname === "fleiva.com.br" || hostname.endsWith(".fleiva.com.br");
    if (dominioFleiva) {
      return `https://play.fleiva.com.br/a/${tokenSeguro}`;
    }
    const origem = window.location.origin.replace(/\/$/, "");
    return `${origem}/album/${tokenSeguro}`;
  }
  limparRetornoCompartilhamento() {
    this.mensagemCompartilhamento.set(null);
    this.erroCompartilhamento.set(null);
  }
  versoesDaFaixa(faixaId) {
    return this.dadosVersoes.versoesDaFaixa(faixaId);
  }
  temVersoes(faixaId) {
    return this.versoesDaFaixa(faixaId).length > 0;
  }
  rotuloStatus(status) {
    return this.opcoesStatus.find((opcao) => opcao.valor === status)?.rotulo ?? status;
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
      dateStyle: "short",
      timeStyle: "short"
    }).format(new Date(data));
  }
  percentualUso() {
    const limite = this.dadosVersoes.limiteBytes();
    if (limite <= 0) {
      return 0;
    }
    return Math.min(this.dadosVersoes.usoBytes() / limite * 100, 100);
  }
  limparFormulario() {
    this.faixaEditandoId.set(null);
    this.erroFormulario.set(null);
    this.formulario.reset({
      projeto_id: "",
      titulo: "",
      bpm: null,
      tom: null,
      status_producao: "composicao",
      link_externo_audio: null,
      observacoes: null
    });
  }
  limparFormularioUpload() {
    this.erroUpload.set(null);
    this.formularioUpload.reset({
      versao: "",
      observacoes: null,
      arquivo: null
    });
  }
  normalizarTextoOpcional(valor) {
    const texto = valor?.trim();
    return texto ? texto : null;
  }
  obterMensagemErro(erro) {
    if (typeof erro === "object" && erro !== null && "message" in erro) {
      return String(erro.message);
    }
    return "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o.";
  }
  static \u0275fac = function Faixas_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Faixas)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Faixas, selectors: [["app-faixas"]], viewQuery: function Faixas_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5)(_c1, 5)(_c2, 5)(_c3, 5)(_c4, 5)(_c5, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.reprodutor = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.capaHero = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.informacoesHero = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.acoesHero = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rastroHero = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.conteudoFaixa = _t.first);
    }
  }, decls: 53, vars: 18, consts: [["rastroHero", ""], ["capaHero", ""], ["informacoesHero", ""], ["acoesHero", ""], ["conteudoFaixa", ""], ["reprodutor", ""], [1, "pagina-media"], [1, "barra-superior"], [1, "titulo-pagina"], [1, "acoes-superiores"], [1, "armazenamento"], ["type", "button", 1, "botao-fantasma", 3, "click", "disabled"], ["type", "button", 1, "botao-destaque", 3, "click"], ["aria-hidden", "true"], [1, "aviso-pagina", "aviso-erro"], [1, "aviso-pagina", "aviso-sucesso"], [1, "explorer"], [1, "biblioteca-faixas"], [1, "cabecalho-biblioteca"], [1, "titulo-biblioteca"], [1, "filtro-projeto"], [1, "busca"], ["aria-hidden", "true", 1, "icone-busca"], [1, "sr-only"], ["type", "search", "placeholder", "Buscar t\xEDtulo, projeto ou status", 3, "input", "value"], ["aria-hidden", "true", 1, "rotulos-lista"], [1, "estado-lista"], [1, "estado-lista", "estado-erro"], ["role", "listbox", "aria-label", "Faixas", 1, "lista-faixas"], [1, "painel-faixa"], [1, "nenhuma-selecao"], [1, "camada-editor"], ["role", "progressbar", "aria-label", "Uso do armazenamento", "aria-valuemin", "0", "aria-valuemax", "100", 1, "barra-armazenamento"], ["type", "button", 3, "click"], [1, "acoes-filtro"], [3, "routerLink"], ["routerLink", "/faixas"], [1, "carregador"], ["type", "button", "role", "option", 1, "linha-faixa", 3, "selecionada", "reproduzindo"], ["type", "button", "role", "option", 1, "linha-faixa", 3, "click"], ["aria-hidden", "true", 1, "indice-faixa"], [1, "mini-capa"], [3, "src", "alt"], ["aria-hidden", "true", 1, "sinal-audio"], [1, "identidade-linha"], [1, "etapa-linha"], [1, "cabecalho-faixa-ativa"], [1, "hero-faixa"], ["aria-hidden", "true", 1, "rastro-transicao"], [1, "capa-principal"], [1, "informacoes-hero"], [1, "projeto-hero"], [1, "metadados-hero"], [1, "barra-acoes-faixa"], ["type", "button", 1, "botao-reproduzir", 3, "tocando", "disabled"], ["type", "button", 1, "botao-destaque", 3, "click", "disabled"], ["type", "button", 1, "botao-fantasma", 3, "click"], ["type", "button", 1, "botao-fantasma", "botao-perigo", 3, "click", "disabled", "title"], [1, "conteudo-faixa"], [1, "painel-upload"], [1, "grade-resumo-faixa"], [1, "secao-detalhe", "versao-atual"], [1, "selo-atual"], [1, "vazio-detalhe"], [1, "secao-detalhe", "contexto-producao"], [1, "texto-vazio"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "secao-detalhe", "participantes"], [1, "lista-participantes"], [1, "linha-participante", 3, "expandida"], [1, "secao-detalhe", "historico"], ["type", "button", 1, "botao-reproduzir", 3, "click", "disabled"], [1, "carregador-claro"], [3, "ngSubmit", "formGroup"], [1, "campos-upload"], ["type", "text", "formControlName", "versao", "placeholder", "Ex.: V1, mix 03, master final"], ["type", "file", 3, "change"], [1, "campo-largo"], ["formControlName", "observacoes", "rows", "3", "placeholder", "Ex.: voz mais alta, vers\xE3o para aprova\xE7\xE3o..."], [1, "arquivo-selecionado"], [1, "erro-formulario"], [1, "acoes-formulario"], ["type", "button", 1, "botao-secundario", 3, "click", "disabled"], ["type", "submit", 1, "botao-destaque", 3, "disabled"], [1, "arquivo-destaque"], ["type", "button", 1, "mini-reproduzir", 3, "click", "disabled"], [1, "nome-arquivo"], [1, "dados-arquivo"], [1, "acoes-arquivo"], ["type", "button", 1, "botao-destaque", 3, "disabled"], ["type", "button", 3, "click", "disabled"], ["type", "button", 1, "acao-whatsapp", 3, "click", "disabled"], ["type", "button", 1, "botao-perigo", 3, "disabled"], [1, "observacoes-arquivo"], ["type", "button", 1, "botao-perigo", 3, "click", "disabled"], [1, "linha-participante"], ["type", "button", 1, "participante-cabecalho", 3, "click", "disabled"], [1, "participante-identidade"], [1, "participante-sem-versao"], [1, "participante-detalhes"], [1, "participante-versoes"], ["aria-hidden", "true", 1, "participante-indicador"], [1, "participante-versao"], [1, "participante-versao-info"], [1, "participante-versao-acoes"], ["type", "button", "title", "Reproduzir", "aria-label", "Reproduzir vers\xE3o", 3, "click", "disabled"], ["type", "button", "title", "Baixar", "aria-label", "Baixar vers\xE3o", 3, "click", "disabled"], [1, "spinner"], ["aria-hidden", "true", 1, "cabecalho-tabela"], [1, "lista-versoes"], [1, "linha-versao"], [1, "identidade-versao"], ["type", "button", 1, "botao-reproducao-versao", 3, "click", "disabled"], [1, "origem-versao"], [1, "acoes-versao"], [1, "observacoes-versao"], ["aria-hidden", "true", 1, "icone-vazio"], ["type", "button", "aria-label", "Fechar editor", 1, "fundo-editor", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "titulo-editor-faixa", 1, "editor-faixa"], ["id", "titulo-editor-faixa"], ["type", "button", "aria-label", "Fechar editor", 1, "fechar-editor", 3, "click", "disabled"], [1, "corpo-editor"], [1, "aviso-projeto"], [1, "campos-editor"], ["formControlName", "projeto_id"], ["value", ""], [3, "value"], ["type", "text", "formControlName", "titulo", "placeholder", "Ex.: Noite em S\xE3o Paulo"], ["formControlName", "status_producao"], [1, "campos-menores"], ["type", "number", "formControlName", "bpm", "placeholder", "Opcional", "step", "1"], ["type", "text", "formControlName", "tom", "placeholder", "Opcional"], ["type", "url", "formControlName", "link_externo_audio", "placeholder", "Drive, Dropbox, WeTransfer..."], ["formControlName", "observacoes", "rows", "5", "placeholder", "Informa\xE7\xF5es importantes sobre a produ\xE7\xE3o"], ["routerLink", "/projetos"], ["type", "button", "aria-label", "Fechar montagem do envio", 1, "fundo-editor", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "titulo-montador-envio", 1, "editor-faixa"], ["id", "titulo-montador-envio"], ["type", "button", "aria-label", "Fechar montagem do envio", 1, "fechar-editor", 3, "click", "disabled"], ["type", "text", "readonly", "", 3, "value"], ["type", "button", 1, "botao-secundario", 3, "click"], ["type", "text", "formControlName", "nome", "placeholder", "Ex.: Beats para testar com a voz"], ["formControlName", "observacoes", "rows", "3", "placeholder", "Opcional"], ["type", "checkbox", "formControlName", "publicar"], ["type", "search", "placeholder", "Buscar projeto, faixa, vers\xE3o ou arquivo", 3, "input", "value"], ["formControlName", "descricao_publica", "rows", "3", "placeholder", "Ex.: A trajet\xF3ria desta faixa, da primeira ideia \xE0 vers\xE3o final"], ["type", "checkbox", "formControlName", "download_publico"], [1, "contexto-producao"], ["type", "checkbox", 3, "change", "checked"], ["type", "button", "aria-label", "Mover arquivo para cima", 3, "click", "disabled"], ["type", "button", "aria-label", "Mover arquivo para baixo", 3, "click", "disabled"], ["type", "button", 1, "botao-perigo", 3, "click"], [1, "reprodutor-global"], [1, "musica-reprodutor"], [1, "controles-reprodutor"], ["type", "button", 1, "alternar-reproducao", 3, "click"], [1, "tempo-reprodutor"], [1, "progresso-reprodutor"], ["type", "range", "min", "0", "step", "0.1", 3, "input", "max", "value"], [1, "acoes-reprodutor"], [1, "volume-reprodutor"], ["type", "range", "min", "0", "max", "1", "step", "0.05", 3, "input", "value"], ["type", "button", "aria-label", "Fechar reprodutor", 1, "fechar-reprodutor", 3, "click"], ["preload", "metadata", 1, "audio-nativo", 3, "play", "pause", "timeupdate", "loadedmetadata", "durationchange", "ended", "error", "src"], [1, "capa-reprodutor"]], template: function Faixas_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 6)(1, "header", 7)(2, "div", 8)(3, "p");
      \u0275\u0275text(4, "Biblioteca");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "Faixas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 9);
      \u0275\u0275conditionalCreate(8, Faixas_Conditional_8_Template, 9, 5, "div", 10);
      \u0275\u0275elementStart(9, "button", 11);
      \u0275\u0275listener("click", function Faixas_Template_button_click_9_listener() {
        return ctx.abrirMontadorEnvio();
      });
      \u0275\u0275text(10, " Montar envio ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 12);
      \u0275\u0275listener("click", function Faixas_Template_button_click_11_listener() {
        return ctx.abrirNovaFaixa(ctx.projetoFiltradoId() ?? "");
      });
      \u0275\u0275elementStart(12, "span", 13);
      \u0275\u0275text(13, "+");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Nova faixa ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(15, Faixas_Conditional_15_Template, 5, 1, "div", 14);
      \u0275\u0275conditionalCreate(16, Faixas_Conditional_16_Template, 2, 1, "p", 14);
      \u0275\u0275conditionalCreate(17, Faixas_Conditional_17_Template, 2, 1, "p", 14);
      \u0275\u0275conditionalCreate(18, Faixas_Conditional_18_Template, 2, 1, "p", 15);
      \u0275\u0275conditionalCreate(19, Faixas_Conditional_19_Template, 2, 1, "p", 14);
      \u0275\u0275conditionalCreate(20, Faixas_Conditional_20_Template, 2, 1, "p", 14);
      \u0275\u0275elementStart(21, "section", 16)(22, "aside", 17)(23, "header", 18)(24, "div", 19)(25, "h2");
      \u0275\u0275text(26, "Seu cat\xE1logo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(29, Faixas_Conditional_29_Template, 10, 4, "div", 20);
      \u0275\u0275elementStart(30, "label", 21)(31, "span", 22);
      \u0275\u0275text(32, "\u2315");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span", 23);
      \u0275\u0275text(34, "Buscar faixas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "input", 24);
      \u0275\u0275listener("input", function Faixas_Template_input_input_35_listener($event) {
        return ctx.atualizarBusca($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 25)(37, "span");
      \u0275\u0275text(38, "N\xBA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span");
      \u0275\u0275text(40, "Faixa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275text(42, "Etapa");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(43, Faixas_Conditional_43_Template, 4, 0, "div", 26)(44, Faixas_Conditional_44_Template, 5, 1, "div", 27)(45, Faixas_Conditional_45_Template, 4, 1, "div", 26)(46, Faixas_Conditional_46_Template, 3, 0, "div", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "section", 29);
      \u0275\u0275conditionalCreate(48, Faixas_Conditional_48_Template, 77, 26)(49, Faixas_Conditional_49_Template, 7, 0, "div", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(50, Faixas_Conditional_50_Template, 62, 11, "div", 31);
      \u0275\u0275conditionalCreate(51, Faixas_Conditional_51_Template, 15, 3, "div", 31);
      \u0275\u0275conditionalCreate(52, Faixas_Conditional_52_Template, 1, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_10_0;
      let tmp_13_0;
      let tmp_16_0;
      \u0275\u0275classProp("com-reprodutor", ctx.urlReproducao() !== null);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(!ctx.dadosVersoes.carregando() && !ctx.dadosVersoes.erro() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.dadosAlbuns.versoesDisponiveis().length === 0);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.dadosVersoes.erro() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.erroUpload() && ctx.faixaUploadId() === null ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.erroFormulario() && !ctx.editorAberto() ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mensagemCompartilhamento() ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.erroCompartilhamento() ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.erroReproducao() ? 20 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.faixasVisiveis().length);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_10_0 = ctx.projetoFiltrado()) ? 29 : -1, tmp_10_0);
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.termoBusca());
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.dadosFaixas.carregando() ? 43 : ctx.dadosFaixas.erro() ? 44 : ctx.faixasVisiveis().length === 0 ? 45 : 46);
      \u0275\u0275advance(5);
      \u0275\u0275conditional((tmp_13_0 = ctx.faixaSelecionada()) ? 48 : 49, tmp_13_0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.editorAberto() ? 50 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.montadorEnvioAberto() ? 51 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_16_0 = ctx.urlReproducao()) ? 52 : -1, tmp_16_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['@charset "UTF-8";\n\n\n[_nghost-%COMP%] {\n  --fx-accent: var(--studio-brand, var(--primary));\n  --fx-on-accent: var(--studio-on-brand, #fff);\n  --fx-accent-deep: color-mix( in oklab, var(--fx-accent) 78%, var(--app-text, #1a1a18) );\n  --fx-accent-soft: color-mix( in oklab, var(--fx-accent) 10%, var(--app-surface, #fbfaf4) );\n  --fx-accent-subtle: color-mix( in oklab, var(--fx-accent) 4%, var(--app-surface, #fbfaf4) );\n  --fx-canvas: color-mix( in oklab, var(--fx-accent) 5%, var(--app-background, #f0efea) );\n  --fx-surface: var(--app-surface, #fbfaf4);\n  --fx-surface-muted: color-mix( in oklab, var(--fx-accent) 3%, var(--app-surface-muted, #f2f1e9) );\n  --fx-rule: color-mix( in oklab, var(--fx-accent) 18%, var(--app-border-strong, #d0cec4) );\n  --fx-rule-soft: color-mix( in oklab, var(--fx-accent) 6%, var(--app-border, #e4e2d8) );\n  --fx-text: var(--app-text, #1c1b18);\n  --fx-text-soft: var(--app-text-soft, #4d4b44);\n  --fx-text-muted: var(--app-text-muted, #8a877e);\n  --fx-text-subtle: color-mix( in oklab, var(--fx-text-muted) 60%, transparent );\n  display: block;\n  min-height: 100vh;\n  background: var(--fx-canvas);\n  color: var(--fx-text);\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  font: inherit;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition:\n    color 180ms cubic-bezier(0.25, 0.46, 0.45, 0.94),\n    background-color 180ms cubic-bezier(0.25, 0.46, 0.45, 0.94),\n    border-color 180ms cubic-bezier(0.25, 0.46, 0.45, 0.94),\n    opacity 180ms ease,\n    transform 180ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n.pagina-media[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 1.5rem max(1.2rem, (100vw - 96rem) / 2) 5rem;\n  background: var(--fx-canvas);\n}\n.pagina-media.com-reprodutor[_ngcontent-%COMP%] {\n  padding-bottom: 7.5rem;\n}\n.barra-superior[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 5.6rem;\n  grid-template-columns: minmax(10rem, 1fr) auto;\n  align-items: center;\n  gap: 2.5rem;\n  margin-bottom: 1.5rem;\n  padding: 0.6rem 0 1.2rem;\n  border-top: 1px solid var(--fx-rule-soft);\n  border-bottom: 1px solid var(--fx-rule-soft);\n  position: relative;\n}\n.barra-superior[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 4.5rem;\n  height: 2px;\n  background: var(--fx-accent);\n  opacity: 0.3;\n}\n.titulo-pagina[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 0;\n}\n.titulo-pagina[_ngcontent-%COMP%]::before {\n  display: none;\n}\n.titulo-pagina[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.1rem;\n  color: var(--fx-text-muted);\n  font-size: 0.55rem;\n  font-weight: 500;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  font-feature-settings: "cpsp" 1;\n}\n.titulo-pagina[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2rem, 3.6vw, 2.8rem);\n  font-weight: 350;\n  line-height: 1.04;\n  letter-spacing: -0.04em;\n  color: var(--fx-text);\n}\n.acoes-superiores[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.armazenamento[_ngcontent-%COMP%] {\n  display: grid;\n  width: 13rem;\n  gap: 0.2rem;\n  margin-right: 0.5rem;\n}\n.armazenamento[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--fx-text-muted);\n  font-size: 0.48rem;\n  font-weight: 500;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.armazenamento[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  font-variant-numeric: tabular-nums;\n  color: var(--fx-text);\n}\n.armazenamento[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--fx-text-muted);\n  font-weight: 400;\n}\n.barra-armazenamento[_ngcontent-%COMP%] {\n  height: 2px;\n  overflow: hidden;\n  background: var(--fx-rule-soft);\n}\n.barra-armazenamento[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  background: var(--fx-accent);\n  transition: width 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.botao-destaque[_ngcontent-%COMP%], \n.botao-secundario[_ngcontent-%COMP%], \n.botao-fantasma[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 2.4rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0.4rem 1.2rem;\n  border: 1px solid var(--fx-rule);\n  border-radius: 0.3rem;\n  font-size: 0.65rem;\n  font-weight: 500;\n  letter-spacing: 0.01em;\n  transition: all 180ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.botao-destaque[_ngcontent-%COMP%] {\n  background: var(--fx-accent);\n  color: var(--fx-on-accent);\n  border-color: var(--fx-accent);\n  box-shadow: 0 2px 8px color-mix(in oklab, var(--fx-accent) 15%, transparent);\n}\n.botao-destaque[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--fx-accent-deep);\n  border-color: var(--fx-accent-deep);\n  box-shadow: 0 4px 16px color-mix(in oklab, var(--fx-accent) 25%, transparent);\n  transform: translateY(-1px);\n}\n.botao-destaque[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 1px 4px color-mix(in oklab, var(--fx-accent) 10%, transparent);\n}\n.botao-secundario[_ngcontent-%COMP%] {\n  background: var(--fx-surface);\n  color: var(--fx-text-soft);\n}\n.botao-secundario[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--fx-accent-soft);\n  color: var(--fx-text);\n  border-color: var(--fx-accent);\n}\n.botao-fantasma[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--fx-text-muted);\n  border-color: transparent;\n}\n.botao-fantasma[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--fx-accent-subtle);\n  color: var(--fx-text);\n  border-color: var(--fx-rule);\n}\n.botao-perigo[_ngcontent-%COMP%] {\n  color: #b45353 !important;\n}\n.botao-perigo[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: color-mix(in oklab, #b45353 6%, transparent) !important;\n  border-color: #b45353 !important;\n}\n.aviso-pagina[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.8rem;\n  padding: 0.7rem 1.2rem;\n  border-left: 3px solid currentColor;\n  border-radius: 0.2rem;\n  font-size: 0.7rem;\n  line-height: 1.5;\n  background: var(--fx-surface);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02);\n}\n.aviso-pagina[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.aviso-pagina[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 1.8rem;\n  padding: 0.2rem 1rem;\n  background: transparent;\n  color: inherit;\n  border: 1px solid currentColor;\n  border-radius: 0.2rem;\n  font-size: 0.55rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  opacity: 0.6;\n  transition: all 180ms ease;\n}\n.aviso-pagina[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background: currentColor;\n  color: var(--fx-surface);\n}\n.aviso-sucesso[_ngcontent-%COMP%] {\n  color: #2d7a4a;\n  border-left-color: #2d7a4a;\n  background: color-mix(in oklab, #2d7a4a 4%, var(--fx-surface));\n}\n.aviso-erro[_ngcontent-%COMP%] {\n  color: #b45353;\n  border-left-color: #b45353;\n  background: color-mix(in oklab, #b45353 4%, var(--fx-surface));\n}\n.explorer[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: calc(100vh - 9rem);\n  grid-template-columns: minmax(20rem, 23rem) minmax(0, 1fr);\n  gap: 1.2rem;\n  overflow: visible;\n  background: transparent;\n  border: 0;\n  animation: _ngcontent-%COMP%_entrar-pagina 300ms cubic-bezier(0.2, 0.8, 0.2, 1) both;\n}\n.biblioteca-faixas[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  background: var(--fx-surface);\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 0.4rem 0.4rem 0.2rem 0.2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);\n  transition: box-shadow 240ms ease;\n}\n.biblioteca-faixas[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);\n}\n.cabecalho-biblioteca[_ngcontent-%COMP%] {\n  background: var(--fx-surface);\n  border-bottom: 1px solid var(--fx-rule-soft);\n}\n.cabecalho-biblioteca[_ngcontent-%COMP%]    > .titulo-biblioteca[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 3rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.6rem 1rem;\n  border-bottom: 1px solid var(--fx-rule-soft);\n}\n.cabecalho-biblioteca[_ngcontent-%COMP%]    > .titulo-biblioteca[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 1.8rem;\n  height: 1.6rem;\n  place-items: center;\n  color: var(--fx-accent-deep);\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 0.15rem;\n  font-size: 0.55rem;\n  font-weight: 500;\n  font-variant-numeric: tabular-nums;\n  background: var(--fx-accent-subtle);\n}\n.cabecalho-biblioteca[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  color: var(--fx-text);\n}\n.filtro-projeto[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.7rem;\n  padding: 0.5rem 1rem;\n  background: var(--fx-accent-subtle);\n  border-bottom: 1px solid var(--fx-rule-soft);\n  color: var(--fx-text-soft);\n  font-size: 0.6rem;\n}\n.filtro-projeto[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--fx-text);\n  font-weight: 500;\n}\n.filtro-projeto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--fx-accent-deep);\n  font-weight: 450;\n  text-decoration: none;\n  border-bottom: 1px solid transparent;\n  transition: border-color 140ms ease;\n}\n.filtro-projeto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-bottom-color: var(--fx-accent);\n}\n.acoes-filtro[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  gap: 0.8rem;\n}\n.busca[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 0.6rem 1rem;\n}\n.busca[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 2.4rem;\n  padding: 0.4rem 0.6rem 0.4rem 2.2rem;\n  background: var(--fx-surface-muted);\n  color: var(--fx-text);\n  border: 1px solid transparent;\n  border-radius: 0.3rem;\n  font-size: 0.7rem;\n  outline: none;\n  transition: all 180ms ease;\n}\n.busca[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--fx-text-muted);\n  font-weight: 350;\n}\n.busca[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background: var(--fx-surface);\n  border-color: var(--fx-accent);\n  box-shadow: inset 0 -2px 0 var(--fx-accent);\n}\n.icone-busca[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  left: 1.6rem;\n  color: var(--fx-text-muted);\n  font-size: 0.75rem;\n  transform: translateY(-50%);\n  opacity: 0.5;\n}\n.sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n}\n.rotulos-lista[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.35rem 2.75rem minmax(0, 1fr) auto;\n  gap: 0.65rem;\n  padding: 0.4rem 0.8rem;\n  background: transparent;\n  color: var(--fx-text-subtle);\n  font-size: 0.45rem;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  border-bottom: 1px solid var(--fx-rule-soft);\n}\n.rotulos-lista[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  grid-column: 2/4;\n}\n.rotulos-lista[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  grid-column: 4;\n}\n.lista-faixas[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 16rem);\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: var(--fx-rule-soft) transparent;\n}\n.lista-faixas[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.lista-faixas[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--fx-rule-soft);\n  border-radius: 2px;\n}\n.lista-faixas[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.linha-faixa[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  width: 100%;\n  min-height: 4.2rem;\n  grid-template-columns: 1.35rem 2.75rem minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.4rem 0.8rem;\n  background: transparent;\n  color: var(--fx-text);\n  border: 0;\n  border-bottom: 1px solid var(--fx-rule-soft);\n  text-align: left;\n  transition: background 140ms ease;\n}\n.linha-faixa[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0.3rem;\n  bottom: 0.3rem;\n  left: 0;\n  width: 2px;\n  background: var(--fx-accent);\n  opacity: 0;\n  transition: opacity 200ms ease;\n}\n.linha-faixa[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.linha-faixa[_ngcontent-%COMP%]:hover:not(.selecionada) {\n  background: var(--fx-accent-subtle);\n}\n.linha-faixa[_ngcontent-%COMP%]:hover:not(.selecionada)   .mini-capa[_ngcontent-%COMP%] {\n  transform: none;\n}\n.linha-faixa.selecionada[_ngcontent-%COMP%] {\n  background: var(--fx-accent-soft);\n}\n.linha-faixa.selecionada[_ngcontent-%COMP%]::before {\n  opacity: 1;\n}\n.linha-faixa.selecionada[_ngcontent-%COMP%]   .indice-faixa[_ngcontent-%COMP%], \n.linha-faixa.selecionada[_ngcontent-%COMP%]   .etapa-linha[_ngcontent-%COMP%] {\n  color: var(--fx-accent-deep);\n}\n.linha-faixa.reproduzindo[_ngcontent-%COMP%]   .identidade-linha[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--fx-accent-deep);\n}\n.linha-faixa.reproduzindo[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  background: var(--fx-accent);\n}\n.indice-faixa[_ngcontent-%COMP%] {\n  color: var(--fx-text-muted);\n  font-size: 0.5rem;\n  font-variant-numeric: tabular-nums;\n  text-align: center;\n  font-weight: 400;\n}\n.mini-capa[_ngcontent-%COMP%], \n.capa-principal[_ngcontent-%COMP%], \n.capa-reprodutor[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  overflow: hidden;\n  place-items: center;\n  isolation: isolate;\n  background: var(--fx-surface-muted);\n  color: var(--fx-accent-deep);\n}\n.mini-capa[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], \n.capa-principal[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], \n.capa-reprodutor[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  object-fit: scale-down;\n  object-position: center;\n}\n.mini-capa[_ngcontent-%COMP%] {\n  width: 2.75rem;\n  height: 2.75rem;\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 0.25rem;\n  font-size: 0.65rem;\n  transition: none;\n}\n.mini-capa.sem-imagem[data-ordem="1"][_ngcontent-%COMP%] {\n  filter: saturate(0.8) brightness(0.95);\n}\n.mini-capa.sem-imagem[data-ordem="2"][_ngcontent-%COMP%] {\n  filter: saturate(1.05) contrast(1.02);\n}\n.mini-capa.sem-imagem[data-ordem="3"][_ngcontent-%COMP%] {\n  filter: saturate(0.7) brightness(0.85);\n}\n.sinal-audio[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  display: grid;\n  inset: 0;\n  place-items: center;\n  background: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  font-size: 0.6rem;\n  opacity: 0;\n  transform: scale(0.9);\n  transition: opacity 160ms ease, transform 160ms ease;\n}\n.linha-faixa[_ngcontent-%COMP%]:hover   .sinal-audio[_ngcontent-%COMP%], \n.linha-faixa.selecionada[_ngcontent-%COMP%]   .sinal-audio[_ngcontent-%COMP%], \n.linha-faixa.reproduzindo[_ngcontent-%COMP%]   .sinal-audio[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.linha-faixa.reproduzindo[_ngcontent-%COMP%]   .identidade-linha[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--fx-accent-deep);\n}\n.identidade-linha[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.06rem;\n}\n.identidade-linha[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.identidade-linha[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.identidade-linha[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.identidade-linha[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  color: var(--fx-text);\n}\n.identidade-linha[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--fx-text-soft);\n  font-size: 0.62rem;\n  font-weight: 400;\n}\n.identidade-linha[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--fx-text-muted);\n  font-size: 0.52rem;\n  font-weight: 400;\n}\n.etapa-linha[_ngcontent-%COMP%] {\n  max-width: 5.8rem;\n  overflow: hidden;\n  color: var(--fx-text-muted);\n  font-size: 0.46rem;\n  font-weight: 500;\n  letter-spacing: 0.06em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.estado-lista[_ngcontent-%COMP%], \n.nenhuma-selecao[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 18rem;\n  place-content: center;\n  justify-items: center;\n  padding: 2rem;\n  color: var(--fx-text);\n  text-align: center;\n}\n.estado-lista[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.nenhuma-selecao[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 30rem;\n  margin: 0.3rem 0 0;\n  color: var(--fx-text-muted);\n  font-size: 0.75rem;\n  font-weight: 400;\n}\n.estado-lista[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 0.8rem;\n}\n.estado-erro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #b45353;\n}\n.carregador[_ngcontent-%COMP%], \n.carregador-claro[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0.9rem;\n  height: 0.9rem;\n  border: 2px solid var(--fx-rule-soft);\n  border-top-color: var(--fx-accent);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_girar 700ms linear infinite;\n}\n.carregador-claro[_ngcontent-%COMP%] {\n  border-color: color-mix(in oklab, var(--fx-on-accent) 25%, transparent);\n  border-top-color: var(--fx-on-accent);\n}\n.painel-faixa[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  background: var(--fx-surface);\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 0.4rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);\n}\n.cabecalho-faixa-ativa[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--fx-surface);\n  border-bottom: 1px solid var(--fx-rule-soft);\n}\n.hero-faixa[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-height: 14rem;\n  grid-template-columns: 9.75rem minmax(0, 1fr);\n  align-items: center;\n  gap: 2rem;\n  padding: 2rem 2.5rem 2rem 2rem;\n  overflow: hidden;\n  isolation: isolate;\n  background: var(--fx-surface);\n  color: var(--fx-text);\n  animation: _ngcontent-%COMP%_entrar-detalhe 280ms cubic-bezier(0.2, 0.8, 0.2, 1) both;\n}\n.hero-faixa[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.hero-faixa[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  z-index: 0;\n  top: 1.5rem;\n  right: 1.5rem;\n  width: 2rem;\n  height: 2rem;\n  border-top: 1px solid var(--fx-rule);\n  border-right: 1px solid var(--fx-rule);\n  opacity: 0.2;\n}\n.hero-faixa[_ngcontent-%COMP%]    > .rastro-transicao[_ngcontent-%COMP%] {\n  display: none;\n}\n.capa-principal[_ngcontent-%COMP%] {\n  width: 9.75rem;\n  height: 9.75rem;\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 0.35rem;\n  font-size: 1.8rem;\n  letter-spacing: -0.05em;\n  box-shadow: 0.5rem 0.5rem 0 color-mix(in oklab, var(--fx-accent) 8%, transparent);\n}\n.capa-principal[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.5rem;\n  bottom: 0.4rem;\n  left: 0.5rem;\n  overflow: hidden;\n  font-size: 0.48rem;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n  letter-spacing: 0.08em;\n  opacity: 0.6;\n}\n.informacoes-hero[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.informacoes-hero[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0 0 0.4rem;\n  color: var(--fx-text-muted);\n  font-size: 0.55rem;\n  font-weight: 500;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n}\n.informacoes-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 20ch;\n  margin: 0;\n  overflow-wrap: anywhere;\n  font-size: clamp(2.2rem, 4.5vw, 3.8rem);\n  font-weight: 350;\n  line-height: 1.02;\n  letter-spacing: -0.04em;\n  color: var(--fx-text);\n}\n.projeto-hero[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.5rem;\n  color: var(--fx-text-soft);\n  font-size: 0.8rem;\n  font-weight: 400;\n}\n.metadados-hero[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0;\n  margin-top: 1rem;\n  color: var(--fx-text-soft);\n  font-size: 0.6rem;\n  font-variant-numeric: tabular-nums;\n}\n.metadados-hero[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: auto;\n  align-items: center;\n  padding: 0;\n}\n.metadados-hero[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child)::after {\n  margin: 0 0.8rem;\n  color: var(--fx-rule);\n  content: "\\b7";\n  font-weight: 300;\n}\n.metadados-hero[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--fx-text);\n  font-weight: 500;\n}\n.barra-acoes-faixa[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  right: 1.8rem;\n  bottom: 1.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.4rem;\n  background: transparent;\n}\n.barra-acoes-faixa[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: auto;\n  min-height: 2.4rem;\n  padding: 0.4rem 0.9rem;\n  background: var(--fx-surface);\n  color: var(--fx-text-soft);\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 0.3rem;\n  font-size: 0.62rem;\n  font-weight: 450;\n  transition: all 160ms ease;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02);\n}\n.barra-acoes-faixa[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--fx-accent-soft);\n  color: var(--fx-text);\n  border-color: var(--fx-accent);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.barra-acoes-faixa[_ngcontent-%COMP%]    > .botao-destaque[_ngcontent-%COMP%] {\n  background: var(--fx-accent);\n  color: var(--fx-on-accent);\n  border-color: var(--fx-accent);\n  box-shadow: 0 2px 8px color-mix(in oklab, var(--fx-accent) 15%, transparent);\n}\n.barra-acoes-faixa[_ngcontent-%COMP%]    > .botao-destaque[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--fx-accent-deep);\n  border-color: var(--fx-accent-deep);\n  box-shadow: 0 4px 16px color-mix(in oklab, var(--fx-accent) 25%, transparent);\n  transform: translateY(-1px);\n}\n.barra-acoes-faixa[_ngcontent-%COMP%]   .botao-perigo[_ngcontent-%COMP%] {\n  color: #b45353 !important;\n}\n.botao-reproduzir[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.8rem !important;\n  min-height: 2.8rem !important;\n  place-items: center;\n  padding: 0 !important;\n  background: var(--fx-accent) !important;\n  color: var(--fx-on-accent) !important;\n  border: none !important;\n  border-radius: 50% !important;\n  font-size: 0.85rem !important;\n  box-shadow: 0 2px 12px color-mix(in oklab, var(--fx-accent) 20%, transparent) !important;\n  transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;\n}\n.botao-reproduzir[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px) scale(1.02);\n  box-shadow: 0 6px 24px color-mix(in oklab, var(--fx-accent) 30%, transparent) !important;\n}\n.botao-reproduzir.tocando[_ngcontent-%COMP%] {\n  background: var(--fx-surface) !important;\n  color: var(--fx-accent-deep) !important;\n  box-shadow: 0 0 0 2px var(--fx-accent-soft) !important;\n}\n.conteudo-faixa[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  padding: 0.8rem;\n  background: var(--fx-canvas);\n}\n.grade-resumo-faixa[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.45fr) minmax(17rem, 0.55fr);\n  gap: 0.8rem;\n  align-items: stretch;\n}\n.grade-resumo-faixa[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]    + section[_ngcontent-%COMP%] {\n  border-left: 0;\n}\n.secao-detalhe[_ngcontent-%COMP%], \n.painel-upload[_ngcontent-%COMP%] {\n  padding: 1.2rem 1.5rem;\n  background: var(--fx-surface);\n  color: var(--fx-text);\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 0.35rem;\n  transition: box-shadow 240ms ease;\n}\n.secao-detalhe[_ngcontent-%COMP%]:hover, \n.painel-upload[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.02);\n}\n.secao-detalhe[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%], \n.painel-upload[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 2.8rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin: 0 0 0.8rem;\n  padding: 0 0 0.6rem;\n  background: transparent;\n  border-bottom: 1px solid var(--fx-rule-soft);\n}\n.secao-detalhe[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.painel-upload[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--fx-text-muted);\n  font-size: 0.48rem;\n  font-weight: 500;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.secao-detalhe[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.painel-upload[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.06rem 0 0;\n  font-size: 0.88rem;\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  color: var(--fx-text);\n}\n.versao-atual[_ngcontent-%COMP%] {\n  position: relative;\n}\n.contexto-producao[_ngcontent-%COMP%] {\n  background: var(--fx-surface);\n}\n.contexto-producao[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 72ch;\n  margin: 0;\n  color: var(--fx-text-soft);\n  font-size: 0.75rem;\n  line-height: 1.6;\n  white-space: pre-wrap;\n}\n.contexto-producao[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0.6rem;\n  color: var(--fx-accent-deep);\n  font-size: 0.65rem;\n  font-weight: 450;\n  text-decoration: none;\n  border-bottom: 1px solid transparent;\n  transition: border-color 140ms ease;\n}\n.contexto-producao[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-bottom-color: var(--fx-accent);\n}\n.selo-atual[_ngcontent-%COMP%], \n.historico[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding: 0;\n  background: transparent;\n  color: var(--fx-accent-deep);\n  border: 0;\n  border-radius: 0;\n  font-size: 0.48rem;\n  font-weight: 500;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.arquivo-destaque[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 0.8rem;\n  padding: 0.15rem 0;\n}\n.mini-reproduzir[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.4rem;\n  height: 2.4rem;\n  min-height: 2.4rem;\n  place-items: center;\n  padding: 0;\n  background: var(--fx-accent);\n  color: var(--fx-on-accent);\n  border: none;\n  border-radius: 50%;\n  transition: all 180ms ease;\n  box-shadow: 0 2px 8px color-mix(in oklab, var(--fx-accent) 12%, transparent);\n}\n.mini-reproduzir[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.04);\n  box-shadow: 0 4px 16px color-mix(in oklab, var(--fx-accent) 20%, transparent);\n}\n.nome-arquivo[_ngcontent-%COMP%], \n.identidade-versao[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.06rem;\n}\n.nome-arquivo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.identidade-versao[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 500;\n}\n.nome-arquivo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.identidade-versao[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--fx-text-muted);\n  font-size: 0.55rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 400;\n}\n.dados-arquivo[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: end;\n  gap: 0.06rem;\n  color: var(--fx-text-muted);\n  font-size: 0.55rem;\n  font-variant-numeric: tabular-nums;\n}\n.acoes-arquivo[_ngcontent-%COMP%] {\n  display: flex;\n  grid-column: 2/-1;\n  flex-wrap: wrap;\n  gap: 0.2rem;\n  margin-top: 0.2rem;\n}\n.acoes-arquivo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.acoes-versao[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 1.8rem;\n  padding: 0.2rem 0.1rem;\n  background: transparent;\n  color: var(--fx-text-muted);\n  border: none;\n  border-bottom: 1px solid transparent;\n  font-size: 0.52rem;\n  font-weight: 450;\n  transition: all 140ms ease;\n}\n.acoes-arquivo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled), \n.acoes-versao[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: transparent;\n  color: var(--fx-text);\n  border-bottom-color: var(--fx-accent);\n}\n.acoes-arquivo[_ngcontent-%COMP%]   button.acao-whatsapp[_ngcontent-%COMP%], \n.acoes-versao[_ngcontent-%COMP%]   button.acao-whatsapp[_ngcontent-%COMP%] {\n  color: #2d7a4a;\n}\n.acoes-arquivo[_ngcontent-%COMP%]   button.acao-whatsapp[_ngcontent-%COMP%]:hover:not(:disabled), \n.acoes-versao[_ngcontent-%COMP%]   button.acao-whatsapp[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #1a5a32;\n  border-bottom-color: #2d7a4a;\n}\n.observacoes-arquivo[_ngcontent-%COMP%], \n.observacoes-versao[_ngcontent-%COMP%] {\n  margin: 0.6rem 0 0;\n  color: var(--fx-text-soft);\n  font-size: 0.7rem;\n  line-height: 1.6;\n  white-space: pre-wrap;\n}\n.texto-vazio[_ngcontent-%COMP%] {\n  color: var(--fx-text-muted) !important;\n  font-weight: 400;\n}\n.vazio-detalhe[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background: var(--fx-accent-subtle);\n  border: 1px dashed var(--fx-rule);\n  border-radius: 0.2rem;\n  text-align: center;\n}\n.vazio-detalhe[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: var(--fx-text-muted);\n  font-size: 0.7rem;\n  font-weight: 400;\n}\n.cabecalho-tabela[_ngcontent-%COMP%], \n.linha-versao[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(11rem, 1fr) 5rem 7.5rem minmax(12rem, auto);\n  align-items: center;\n  gap: 0.65rem;\n}\n.cabecalho-tabela[_ngcontent-%COMP%] {\n  padding: 0.4rem 0;\n  background: transparent;\n  color: var(--fx-text-subtle);\n  font-size: 0.45rem;\n  font-weight: 500;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  border-bottom: 1px solid var(--fx-rule-soft);\n}\n.lista-versoes[_ngcontent-%COMP%] {\n  display: grid;\n  border: 0;\n}\n.participantes[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.lista-participantes[_ngcontent-%COMP%] {\n  display: grid;\n}\n.linha-participante[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 0;\n  min-width: 0;\n  padding: 0.15rem 0;\n  border-bottom: 1px solid var(--fx-rule-soft);\n  transition: background 140ms ease;\n}\n.linha-participante[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.linha-participante[_ngcontent-%COMP%]:hover {\n  background: var(--fx-accent-subtle);\n}\n.linha-participante.expandida[_ngcontent-%COMP%] {\n  background: var(--fx-accent-subtle);\n}\n.participante-cabecalho[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  min-width: 0;\n  min-height: 3.7rem;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.55rem 0;\n  border: 0;\n  background: transparent;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.participante-cabecalho[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n.participante-identidade[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.15rem;\n}\n.participante-identidade[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--fx-text);\n  font-size: 0.72rem;\n  font-weight: 500;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.participante-identidade[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--fx-text-muted);\n  font-size: 0.52rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.participante-versoes[_ngcontent-%COMP%], \n.participante-sem-versao[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 7rem;\n  justify-items: end;\n  gap: 0.12rem;\n  text-align: right;\n}\n.participante-versoes[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--fx-accent-deep);\n  font-size: 0.62rem;\n  font-weight: 500;\n}\n.participante-versoes[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--fx-text-muted);\n  font-size: 0.52rem;\n  font-variant-numeric: tabular-nums;\n}\n.participante-sem-versao[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--fx-text-muted);\n  font-size: 0.8rem;\n  line-height: 1;\n}\n.participante-sem-versao[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--fx-text-subtle);\n  font-size: 0.5rem;\n  font-weight: 400;\n}\n.participante-detalhes[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  margin: 0 0 0.55rem 0.75rem;\n  padding-left: 0.75rem;\n  border-left: 1px solid var(--fx-rule-soft);\n}\n.participante-versao[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.55rem 0.65rem;\n  border-bottom: 1px solid var(--fx-rule-soft);\n}\n.participante-versao[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.participante-versao-info[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.12rem;\n}\n.participante-versao-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--fx-text);\n  font-size: 0.62rem;\n  font-weight: 500;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.participante-versao-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--fx-text-muted);\n  font-size: 0.5rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.participante-versao-info[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n  color: var(--fx-text-muted);\n  font-size: 0.5rem;\n  font-variant-numeric: tabular-nums;\n}\n.participante-versao-acoes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.participante-versao-acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 2rem;\n  height: 2rem;\n  min-width: 2rem;\n  min-height: 2rem;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 0.35rem;\n  background: var(--fx-surface);\n  color: var(--fx-text-muted);\n  cursor: pointer;\n  font-size: 0.72rem;\n  line-height: 1;\n  transition:\n    color 140ms ease,\n    background 140ms ease,\n    border-color 140ms ease,\n    transform 140ms ease;\n}\n.participante-versao-acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--fx-accent);\n  background: var(--fx-accent-subtle);\n  color: var(--fx-accent-deep);\n  transform: translateY(-1px);\n}\n.participante-versao-acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.participante-versao-acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 0.45;\n}\n.linha-versao[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 4rem;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid var(--fx-rule-soft);\n  font-size: 0.64rem;\n  transition: background 140ms ease;\n}\n.linha-versao[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.linha-versao[_ngcontent-%COMP%]:hover {\n  background: var(--fx-accent-subtle);\n}\n.linha-versao[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.linha-versao[_ngcontent-%COMP%]    > time[_ngcontent-%COMP%] {\n  color: var(--fx-text-muted);\n  font-size: 0.56rem;\n  font-variant-numeric: tabular-nums;\n}\narticle.linha-versao[_ngcontent-%COMP%]::before {\n  display: none;\n}\n.identidade-versao[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: center;\n  gap: 0.6rem;\n}\n.acoes-versao[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 0.2rem;\n}\n.observacoes-versao[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.painel-upload[_ngcontent-%COMP%] {\n  background: var(--fx-accent-subtle);\n  border-top: 2px solid var(--fx-accent);\n  transform-origin: top;\n  animation: _ngcontent-%COMP%_revelar-painel 280ms cubic-bezier(0.2, 0.8, 0.2, 1) both;\n}\n.painel-upload[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--fx-text-muted);\n  font-size: 0.6rem;\n  font-weight: 400;\n}\n.campos-upload[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.campo-largo[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: 0.25rem;\n}\nlabel[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  font-weight: 500;\n  color: var(--fx-text-soft);\n  letter-spacing: 0.02em;\n}\nlabel[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #b45353;\n  font-size: 0.55rem;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%]:not([type=search]):not([type=range]):not([type=checkbox]), \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem 0.7rem;\n  background: var(--fx-surface-muted);\n  color: var(--fx-text);\n  border: 1px solid transparent;\n  border-radius: 0.2rem;\n  font-size: 0.7rem;\n  outline: none;\n  transition: all 180ms ease;\n}\ninput[_ngcontent-%COMP%]:not([type=search]):not([type=range]):not([type=checkbox]):focus, \nselect[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus {\n  background: var(--fx-surface);\n  border-color: var(--fx-accent);\n  box-shadow: inset 0 -2px 0 var(--fx-accent);\n}\ninput[_ngcontent-%COMP%]:not([type=search]):not([type=range]):not([type=checkbox])::placeholder, \nselect[_ngcontent-%COMP%]::placeholder, \ntextarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--fx-text-muted);\n  font-weight: 350;\n}\ninput[_ngcontent-%COMP%]:not([type=search]):not([type=range]):not([type=checkbox]), \nselect[_ngcontent-%COMP%] {\n  min-height: 2.4rem;\n}\ninput[type=file][_ngcontent-%COMP%] {\n  padding: 0.3rem;\n}\ninput[type=file][_ngcontent-%COMP%]::file-selector-button {\n  min-height: 1.8rem;\n  margin-right: 0.6rem;\n  padding: 0.2rem 0.8rem;\n  background: var(--fx-accent-soft);\n  color: var(--fx-text);\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 0.15rem;\n  font: inherit;\n  font-size: 0.58rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 140ms ease;\n}\ninput[type=file][_ngcontent-%COMP%]::file-selector-button:hover {\n  background: var(--fx-accent);\n  color: var(--fx-on-accent);\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  accent-color: var(--fx-accent);\n}\ntextarea[_ngcontent-%COMP%] {\n  min-height: 5rem;\n  resize: vertical;\n}\n.arquivo-selecionado[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: 0.6rem;\n  padding: 0.5rem 0.7rem;\n  background: var(--fx-accent-soft);\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 0.2rem;\n  font-size: 0.65rem;\n}\n.arquivo-selecionado[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n  font-weight: 500;\n}\n.arquivo-selecionado[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: var(--fx-text-muted);\n}\n.erro-formulario[_ngcontent-%COMP%] {\n  margin: 0.6rem 0 0;\n  color: #b45353;\n  font-size: 0.65rem;\n}\n.acoes-formulario[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  margin-top: 0.9rem;\n}\nlabel.linha-versao[_ngcontent-%COMP%] {\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  cursor: pointer;\n}\n.icone-vazio[_ngcontent-%COMP%] {\n  display: grid;\n  width: 3.4rem;\n  height: 3.4rem;\n  margin-bottom: 0.8rem;\n  place-items: center;\n  color: var(--fx-accent-deep);\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 50%;\n  font-size: 1.2rem;\n  opacity: 0.4;\n}\n.camada-editor[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 80;\n  inset: 0;\n  display: flex;\n  justify-content: flex-end;\n}\n.fundo-editor[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  background: rgba(0, 0, 0, 0.45);\n  border: 0;\n  border-radius: 0;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.editor-faixa[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: min(38rem, 100%);\n  height: 100%;\n  overflow-y: auto;\n  background: var(--fx-surface);\n  color: var(--fx-text);\n  border-left: 1px solid var(--fx-rule-soft);\n  box-shadow: -0.5rem 0 2rem rgba(0, 0, 0, 0.04);\n  scrollbar-color: var(--fx-rule-soft) transparent;\n  animation: _ngcontent-%COMP%_entrar-editor 260ms cubic-bezier(0.2, 0.8, 0.2, 1) both;\n}\n.editor-faixa[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 2;\n  top: 0;\n  display: flex;\n  min-height: 4.5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.8rem 1.2rem;\n  background: color-mix(in oklab, var(--fx-surface) 92%, transparent);\n  border-bottom: 1px solid var(--fx-rule-soft);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.editor-faixa[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--fx-accent-deep);\n  font-size: 0.5rem;\n  font-weight: 500;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.editor-faixa[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.12rem 0 0;\n  font-size: 1.35rem;\n  font-weight: 400;\n  letter-spacing: -0.02em;\n}\n.fechar-editor[_ngcontent-%COMP%], \n.fechar-reprodutor[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.2rem;\n  height: 2.2rem;\n  min-height: 2.2rem;\n  place-items: center;\n  padding: 0;\n  background: transparent;\n  color: var(--fx-text-muted);\n  border: none;\n  border-radius: 0.1rem;\n  font-size: 1.2rem;\n  transition: all 140ms ease;\n}\n.fechar-editor[_ngcontent-%COMP%]:hover, \n.fechar-reprodutor[_ngcontent-%COMP%]:hover {\n  background: var(--fx-accent-soft);\n  color: var(--fx-text);\n}\n.corpo-editor[_ngcontent-%COMP%] {\n  padding: 1.2rem;\n}\n.campos-editor[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.9rem;\n}\n.campos-menores[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.aviso-projeto[_ngcontent-%COMP%] {\n  margin-bottom: 0.9rem;\n  padding: 0.8rem;\n  background: color-mix(in oklab, #d4a84a 6%, var(--fx-surface));\n  color: #8a6a2a;\n  border-left: 3px solid #d4a84a;\n  border-radius: 0.15rem;\n}\n.aviso-projeto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.4rem;\n}\n.aviso-projeto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  font-weight: 500;\n  text-decoration: none;\n  border-bottom: 1px solid transparent;\n}\n.aviso-projeto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-bottom-color: currentColor;\n}\n.reprodutor-global[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 70;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: grid;\n  min-height: 5rem;\n  grid-template-columns: minmax(13rem, 0.8fr) minmax(18rem, 1.4fr) auto;\n  align-items: center;\n  gap: 1.2rem;\n  padding: 0.5rem 1.2rem;\n  background: var(--fx-accent-deep);\n  color: var(--fx-on-accent);\n  border-top: 1px solid color-mix(in oklab, var(--fx-accent) 30%, transparent);\n  box-shadow: 0 -2px 16px rgba(0, 0, 0, 0.06);\n  animation: _ngcontent-%COMP%_subir-player 260ms cubic-bezier(0.2, 0.8, 0.2, 1) both;\n}\n.musica-reprodutor[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.8rem;\n}\n.musica-reprodutor[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  display: grid;\n  min-width: 0;\n  gap: 0.06rem;\n}\n.musica-reprodutor[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.musica-reprodutor[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.musica-reprodutor[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 500;\n}\n.musica-reprodutor[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  opacity: 0.6;\n  font-weight: 400;\n}\n.capa-reprodutor[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  flex: 0 0 auto;\n  border: 1px solid color-mix(in oklab, var(--fx-on-accent) 20%, transparent);\n  border-radius: 0.25rem;\n  font-size: 0.7rem;\n}\n.controles-reprodutor[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto minmax(8rem, 1fr) auto;\n  align-items: center;\n  gap: 0.6rem;\n}\n.alternar-reproducao[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.4rem;\n  height: 2.4rem;\n  min-height: 2.4rem;\n  place-items: center;\n  padding: 0;\n  background: var(--fx-on-accent);\n  color: var(--fx-accent-deep);\n  border: 0;\n  border-radius: 0.3rem;\n  transition: all 180ms ease;\n}\n.alternar-reproducao[_ngcontent-%COMP%]:hover {\n  transform: scale(1.04);\n}\n.tempo-reprodutor[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  font-variant-numeric: tabular-nums;\n  opacity: 0.6;\n}\n.progresso-reprodutor[_ngcontent-%COMP%], \n.volume-reprodutor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.progresso-reprodutor[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.volume-reprodutor[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: auto;\n  padding: 0;\n  background: transparent;\n  border: 0;\n  accent-color: var(--fx-accent);\n  box-shadow: none;\n}\n.acoes-reprodutor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n}\n.volume-reprodutor[_ngcontent-%COMP%] {\n  width: 6rem;\n  font-size: 0.7rem;\n  opacity: 0.5;\n}\n.fechar-reprodutor[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.fechar-reprodutor[_ngcontent-%COMP%]:hover {\n  background: color-mix(in oklab, var(--fx-on-accent) 8%, transparent);\n  color: var(--fx-on-accent);\n  opacity: 1;\n}\n.audio-nativo[_ngcontent-%COMP%] {\n  display: none;\n}\n@keyframes _ngcontent-%COMP%_entrar-pagina {\n  from {\n    opacity: 0;\n    transform: translateY(0.5rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_entrar-detalhe {\n  from {\n    opacity: 0;\n    transform: translateX(0.5rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_marcar-faixa {\n  from {\n    transform: translateX(-0.12rem);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_entrar-editor {\n  from {\n    opacity: 0;\n    transform: translateX(2rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_subir-player {\n  from {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_revelar-painel {\n  from {\n    opacity: 0;\n    transform: translateY(-0.4rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 74rem) {\n  .pagina-media[_ngcontent-%COMP%] {\n    padding-right: 1rem;\n    padding-left: 1rem;\n  }\n  .explorer[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(17rem, 20rem) minmax(0, 1fr);\n    gap: 0.75rem;\n  }\n  .hero-faixa[_ngcontent-%COMP%] {\n    grid-template-columns: 7.5rem minmax(0, 1fr);\n    gap: 1.25rem;\n    padding: 1.5rem 1.25rem 5rem;\n  }\n  .capa-principal[_ngcontent-%COMP%] {\n    width: 7.5rem;\n    height: 7.5rem;\n  }\n  .barra-acoes-faixa[_ngcontent-%COMP%] {\n    right: 1.25rem;\n    bottom: 1.25rem;\n  }\n  .grade-resumo-faixa[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 64rem) {\n  .barra-superior[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 1rem;\n  }\n  .acoes-superiores[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: flex-start;\n  }\n  .armazenamento[_ngcontent-%COMP%] {\n    width: min(20rem, 100%);\n    margin-right: auto;\n  }\n  .explorer[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .lista-faixas[_ngcontent-%COMP%] {\n    max-height: 24rem;\n  }\n  .pagina-media.com-reprodutor[_ngcontent-%COMP%] {\n    padding-bottom: 9rem;\n  }\n  .reprodutor-global[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) auto;\n    gap: 0.55rem 1rem;\n  }\n  .musica-reprodutor[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n  .controles-reprodutor[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    grid-row: 2;\n  }\n  .acoes-reprodutor[_ngcontent-%COMP%] {\n    grid-column: 2;\n    grid-row: 1;\n  }\n  .participante-versao[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) auto;\n  }\n}\n@media (max-width: 44rem) {\n  .pagina-media[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.75rem 4rem;\n  }\n  .pagina-media.com-reprodutor[_ngcontent-%COMP%] {\n    padding-bottom: 9rem;\n  }\n  .barra-superior[_ngcontent-%COMP%] {\n    margin-bottom: 0.75rem;\n  }\n  .acoes-superiores[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n  .hero-faixa[_ngcontent-%COMP%] {\n    min-height: auto;\n    grid-template-columns: minmax(0, 1fr);\n    gap: 1rem;\n    padding: 1.25rem;\n  }\n  .capa-principal[_ngcontent-%COMP%] {\n    width: 7rem;\n    height: 7rem;\n  }\n  .informacoes-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: clamp(1.8rem, 10vw, 2.6rem);\n  }\n  .barra-acoes-faixa[_ngcontent-%COMP%] {\n    position: static;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    padding: 0 1.25rem 1.25rem;\n  }\n  .conteudo-faixa[_ngcontent-%COMP%] {\n    padding: 0.6rem;\n  }\n  .secao-detalhe[_ngcontent-%COMP%], \n   .painel-upload[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .participante-cabecalho[_ngcontent-%COMP%] {\n    gap: 0.6rem;\n  }\n  .participante-versoes[_ngcontent-%COMP%], \n   .participante-sem-versao[_ngcontent-%COMP%] {\n    min-width: 5rem;\n  }\n  .participante-detalhes[_ngcontent-%COMP%] {\n    margin-left: 0.4rem;\n    padding-left: 0.55rem;\n  }\n  .participante-versao[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.5rem;\n  }\n  .participante-versao-acoes[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n  .reprodutor-global[_ngcontent-%COMP%] {\n    padding: 0.6rem 0.75rem;\n  }\n  .capa-reprodutor[_ngcontent-%COMP%] {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n  .controles-reprodutor[_ngcontent-%COMP%] {\n    grid-template-columns: auto auto minmax(0, 1fr) auto;\n    gap: 0.45rem;\n  }\n  .volume-reprodutor[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.origem-versao[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  min-width: 10rem;\n}\n.origem-versao[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.origem-versao[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  opacity: 0.55;\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Faixas, [{
    type: Component,
    args: [{ selector: "app-faixas", standalone: true, imports: [ReactiveFormsModule, RouterLink], template: `<main class="pagina-media" [class.com-reprodutor]="urlReproducao() !== null">
  <header class="barra-superior">
    <div class="titulo-pagina">
      <p>Biblioteca</p>
      <h1>Faixas</h1>
    </div>


<div class="acoes-superiores">
  @if (!dadosVersoes.carregando() && !dadosVersoes.erro()) {
  <div class="armazenamento">
    <span>Armazenamento</span>
    <strong>
      {{ formatarBytes(dadosVersoes.usoBytes()) }}
      <small>/ {{ formatarBytes(dadosVersoes.limiteBytes()) }}</small>
    </strong>

    <div
      class="barra-armazenamento"
      role="progressbar"
      aria-label="Uso do armazenamento"
      aria-valuemin="0"
      aria-valuemax="100"
      [attr.aria-valuenow]="percentualUso()"
    >
      <span [style.width.%]="percentualUso()"></span>
    </div>
  </div>
  }

  <button
    type="button"
    class="botao-fantasma"
    [disabled]="dadosAlbuns.versoesDisponiveis().length === 0"
    (click)="abrirMontadorEnvio()"
  >
    Montar envio
  </button>

  <button
    type="button"
    class="botao-destaque"
    (click)="abrirNovaFaixa(projetoFiltradoId() ?? '')"
  >
    <span aria-hidden="true">+</span>
    Nova faixa
  </button>
</div>


  </header>

@if (dadosVersoes.erro()) {

  <div class="aviso-pagina aviso-erro">
    <p>{{ dadosVersoes.erro() }}</p>
    <button type="button" (click)="dadosVersoes.listar()">
      Tentar novamente
    </button>
  </div>
  }

@if (erroUpload() && faixaUploadId() === null) {

  <p class="aviso-pagina aviso-erro">{{ erroUpload() }}</p>
  }

@if (erroFormulario() && !editorAberto()) {

  <p class="aviso-pagina aviso-erro">{{ erroFormulario() }}</p>
  }

@if (mensagemCompartilhamento()) {

  <p class="aviso-pagina aviso-sucesso">{{ mensagemCompartilhamento() }}</p>
  }

@if (erroCompartilhamento()) {

  <p class="aviso-pagina aviso-erro">{{ erroCompartilhamento() }}</p>
  }

@if (erroReproducao()) {

  <p class="aviso-pagina aviso-erro">{{ erroReproducao() }}</p>
  }

  <section class="explorer">
    <aside class="biblioteca-faixas">
      <header class="cabecalho-biblioteca">
        <div class="titulo-biblioteca">
          <h2>Seu cat\xE1logo</h2>
          <span>{{ faixasVisiveis().length }}</span>
        </div>


    @if (projetoFiltrado(); as projeto) {
    <div class="filtro-projeto">
      <span>
        Projeto: <strong>{{ projeto.nome }}</strong>
      </span>

      <span class="acoes-filtro">
        <a [routerLink]="['/projetos', projeto.id]">
          Voltar ao projeto
        </a>

        <a routerLink="/faixas">
          Ver todas
        </a>
      </span>
    </div>
    }

    <label class="busca">
      <span class="icone-busca" aria-hidden="true">\u2315</span>
      <span class="sr-only">Buscar faixas</span>

      <input
        type="search"
        placeholder="Buscar t\xEDtulo, projeto ou status"
        [value]="termoBusca()"
        (input)="atualizarBusca($event)"
      />
    </label>
  </header>

  <div class="rotulos-lista" aria-hidden="true">
    <span>N\xBA</span>
    <span>Faixa</span>
    <span>Etapa</span>
  </div>

  @if (dadosFaixas.carregando()) {
  <div class="estado-lista">
    <span class="carregador"></span>
    <p>Carregando cat\xE1logo...</p>
  </div>
  }

  @else if (dadosFaixas.erro()) {
  <div class="estado-lista estado-erro">
    <p>{{ dadosFaixas.erro() }}</p>

    <button type="button" (click)="carregarDados()">
      Tentar novamente
    </button>
  </div>
  }

  @else if (faixasVisiveis().length === 0) {
  <div class="estado-lista">
    @if (termoBusca()) {
    <strong>Nenhuma faixa encontrada.</strong>
    <p>Tente buscar por outro t\xEDtulo, projeto ou status.</p>
    }

    @else if (projetoFiltrado()) {
    <strong>Este projeto ainda n\xE3o tem faixas.</strong>
    <p>Cadastre a primeira faixa sem sair deste contexto.</p>
    }

    @else {
    <strong>Seu cat\xE1logo est\xE1 vazio.</strong>
    <p>Cadastre a primeira faixa para come\xE7ar.</p>
    }
  </div>
  }

  @else {
  <div
    class="lista-faixas"
    role="listbox"
    aria-label="Faixas"
  >
    @for (
      faixa of faixasVisiveis();
      track faixa.id;
      let indice = $index
    ) {
    @let versoes = versoesDaFaixa(faixa.id);
    @let versaoPrincipal = versaoPrincipalDaFaixa(faixa);

    <button
      type="button"
      class="linha-faixa"
      role="option"
      [class.selecionada]="faixaSelecionada().id === faixa.id"
      [class.reproduzindo]="
        faixaReproduzindo()?.id === faixa.id && audioTocando()
      "
      [attr.aria-selected]="faixaSelecionada().id === faixa.id"
      (click)="selecionarFaixa(faixa.id)"
    >
      <span
        class="indice-faixa"
        aria-hidden="true"
      >
        {{ indice + 1 }}
      </span>

      <span
        class="mini-capa"
        [class.com-imagem]="faixa.projeto.capa_caminho !== null"
        [class.sem-imagem]="faixa.projeto.capa_caminho === null"
        [attr.data-ordem]="indice % 4"
      >
        @if (dadosFaixas.capaUrl(faixa.projeto); as capaUrl) {
        <img
          [src]="capaUrl"
          [alt]="'Capa de ' + faixa.projeto.nome"
        />
        }

        @else {
        <span>{{ iniciaisFaixa(faixa) }}</span>
        }

        @if (versaoPrincipal && podeReproduzir(versaoPrincipal)) {
        <span
          class="sinal-audio"
          aria-hidden="true"
        >
          @if (
            versaoReproduzindo()?.id === versaoPrincipal.id &&
            audioTocando()
          ) {
          \u2161
          }

          @else {
          \u25B6
          }
        </span>
        }
      </span>

      <span class="identidade-linha">
        <strong>{{ faixa.titulo }}</strong>
        <span>{{ faixa.projeto.nome }}</span>

        @if (versaoPrincipal) {
        <small>{{ versaoPrincipal.versao }}</small>
        }

        @else {
        <small>Sem arquivo</small>
        }
      </span>

      <span class="etapa-linha">
        {{ rotuloStatus(faixa.status_producao) }}
      </span>
    </button>
    }
  </div>
  }
</aside>

<section class="painel-faixa">
  @if (faixaSelecionada(); as faixa) {
  @let versoes = versoesSelecionadas();
  @let versaoPrincipal = versaoPrincipalSelecionada();

  <div class="cabecalho-faixa-ativa">
    <header class="hero-faixa">
      <span
        #rastroHero
        class="rastro-transicao"
        aria-hidden="true"
      ></span>

      <div
        #capaHero
        class="capa-principal"
        [class.com-imagem]="faixa.projeto.capa_caminho !== null"
      >
        @if (dadosFaixas.capaUrl(faixa.projeto); as capaUrl) {
        <img
          [src]="capaUrl"
          [alt]="'Capa de ' + faixa.projeto.nome"
        />
        }

        @else {
        <span>{{ iniciaisFaixa(faixa) }}</span>
        <small>{{ faixa.projeto.nome }}</small>
        }
      </div>

      <div
        #informacoesHero
        class="informacoes-hero"
      >
        <p>Faixa</p>
        <h2>{{ faixa.titulo }}</h2>
        <span class="projeto-hero">
          {{ faixa.projeto.nome }}
        </span>

        <div class="metadados-hero">
          <strong>
            {{ rotuloStatus(faixa.status_producao) }}
          </strong>

          @if (faixa.bpm !== null) {
          <span>{{ faixa.bpm }} BPM</span>
          }

          @if (faixa.tom) {
          <span>Tom {{ faixa.tom }}</span>
          }

          <span>
            {{ versoes.length }}

            @if (versoes.length === 1) {
            vers\xE3o
            }

            @else {
            vers\xF5es
            }
          </span>
        </div>
      </div>
    </header>

    <div
      #acoesHero
      class="barra-acoes-faixa"
    >
      @if (versaoPrincipal && podeReproduzir(versaoPrincipal)) {
      <button
        type="button"
        class="botao-reproduzir"
        [class.tocando]="versaoPrincipalEstaTocando()"
        [disabled]="carregandoReproducaoId() !== null"
        (click)="reproduzirVersao(versaoPrincipal)"
        [attr.aria-label]="
          versaoPrincipalEstaTocando()
            ? 'Pausar ' + faixa.titulo
            : 'Reproduzir ' + faixa.titulo
        "
        [attr.aria-pressed]="versaoPrincipalEstaTocando()"
      >
        @if (carregandoReproducaoId() === versaoPrincipal.id) {
        <span class="carregador-claro"></span>
        }

        @else {
        <span aria-hidden="true">
          @if (versaoPrincipalEstaTocando()) {
          \u2161
          }

          @else {
          \u25B6
          }
        </span>
        }
      </button>
      }

      <button
        type="button"
        class="botao-destaque"
        [disabled]="
          enviandoFaixaId() !== null ||
          dadosVersoes.carregando() ||
          dadosVersoes.erro() !== null
        "
        (click)="abrirUpload(faixa.id)"
      >
        @if (faixaUploadId() === faixa.id) {
        Fechar envio
        }

        @else {
        Nova vers\xE3o
        }
      </button>

      <button
        type="button"
        class="botao-fantasma"
        (click)="editar(faixa)"
      >
        Editar
      </button>

      <button
        type="button"
        class="botao-fantasma botao-perigo"
        [disabled]="excluindoId() === faixa.id"
        [title]="
          temVersoes(faixa.id)
            ? 'A faixa possui vers\xF5es armazenadas'
            : 'Excluir faixa'
        "
        (click)="excluir(faixa)"
      >
        @if (excluindoId() === faixa.id) {
        Excluindo...
        }

        @else {
        Excluir
        }
      </button>
    </div>
  </div>

  <div
    #conteudoFaixa
    class="conteudo-faixa"
  >
    @if (faixaUploadId() === faixa.id) {
    <section class="painel-upload">
      <header>
        <div>
          <p>Novo arquivo</p>
          <h3>Enviar vers\xE3o</h3>
        </div>

        <span>
          {{ formatarBytes(dadosVersoes.espacoDisponivelBytes()) }}
          livres
        </span>
      </header>

      <form
        [formGroup]="formularioUpload"
        (ngSubmit)="enviarVersao(faixa.id)"
      >
        <div class="campos-upload">
          <label>
            <span>Nome da vers\xE3o</span>

            <input
              type="text"
              formControlName="versao"
              placeholder="Ex.: V1, mix 03, master final"
            />

            @if (
              formularioUpload.controls.versao.touched &&
              formularioUpload.controls.versao.invalid
            ) {
            <small>Informe a vers\xE3o.</small>
            }
          </label>

          <label>
            <span>Arquivo</span>

            <input
              type="file"
              (change)="selecionarArquivo($event)"
            />

            @if (
              formularioUpload.controls.arquivo.touched &&
              formularioUpload.controls.arquivo.invalid
            ) {
            <small>Selecione o arquivo.</small>
            }
          </label>

          <label class="campo-largo">
            <span>Observa\xE7\xF5es</span>

            <textarea
              formControlName="observacoes"
              rows="3"
              placeholder="Ex.: voz mais alta, vers\xE3o para aprova\xE7\xE3o..."
            ></textarea>
          </label>
        </div>

        @if (formularioUpload.controls.arquivo.value; as arquivo) {
        <div class="arquivo-selecionado">
          <strong>{{ arquivo.name }}</strong>
          <span>{{ formatarBytes(arquivo.size) }}</span>
        </div>
        }

        @if (erroUpload()) {
        <p class="erro-formulario">
          {{ erroUpload() }}
        </p>
        }

        <div class="acoes-formulario">
          <button
            type="button"
            class="botao-secundario"
            [disabled]="enviandoFaixaId() === faixa.id"
            (click)="cancelarUpload()"
          >
            Cancelar
          </button>

          <button
            type="submit"
            class="botao-destaque"
            [disabled]="enviandoFaixaId() === faixa.id"
          >
            @if (enviandoFaixaId() === faixa.id) {
            Enviando...
            }

            @else {
            Enviar arquivo
            }
          </button>
        </div>
      </form>
    </section>
    }

    <div class="grade-resumo-faixa">
      <section class="secao-detalhe versao-atual">
        <header>
          <div>
            <p>Em circula\xE7\xE3o</p>
            <h3>Vers\xE3o principal</h3>
          </div>

          @if (versaoPrincipal) {
          <span class="selo-atual">
            @if (faixa.versao_principal_id === versaoPrincipal.id) {
            Principal
            }

            @else {
            Mais recente \xB7 escolha provis\xF3ria
            }
          </span>
          }
        </header>

        @if (versaoPrincipal) {
        <article class="arquivo-destaque">
          <button
            type="button"
            class="mini-reproduzir"
            [disabled]="
              !podeReproduzir(versaoPrincipal) ||
              carregandoReproducaoId() !== null
            "
            (click)="reproduzirVersao(versaoPrincipal)"
            [attr.aria-label]="
              'Reproduzir ' + versaoPrincipal.versao
            "
          >
            @if (
              carregandoReproducaoId() === versaoPrincipal.id
            ) {
            <span class="carregador"></span>
            }

            @else {
            \u25B6
            }
          </button>

          <div class="nome-arquivo">
            <strong>{{ versaoPrincipal.versao }}</strong>
            <span>{{ versaoPrincipal.nome_arquivo }}</span>
          </div>

          <div class="dados-arquivo">
            <span>
              {{ formatarBytes(versaoPrincipal.tamanho_bytes) }}
            </span>

            <time
              [attr.datetime]="
                versaoPrincipal.confirmado_em ??
                versaoPrincipal.criado_em
              "
            >
              {{ formatarData(
                versaoPrincipal.confirmado_em ??
                versaoPrincipal.criado_em
              ) }}
            </time>
          </div>

          <div class="acoes-arquivo">
            @if (
              faixa.versao_principal_id !== versaoPrincipal.id
            ) {
            <button
              type="button"
              class="botao-destaque"
              [disabled]="
                definindoVersaoPrincipalId() !== null
              "
              (click)="
                definirVersaoPrincipal(
                  faixa,
                  versaoPrincipal
                )
              "
            >
              @if (
                definindoVersaoPrincipalId() ===
                versaoPrincipal.id
              ) {
              Definindo...
              }

              @else {
              Definir como principal
              }
            </button>
            }

            <button
              type="button"
              [disabled]="
                baixandoVersaoId() !== null ||
                processandoLinkVersaoId() !== null
              "
              (click)="baixarVersao(versaoPrincipal)"
            >
              @if (
                baixandoVersaoId() === versaoPrincipal.id
              ) {
              Preparando...
              }

              @else {
              Baixar
              }
            </button>

            <button
              type="button"
              class="acao-whatsapp"
              [disabled]="
                baixandoVersaoId() !== null ||
                processandoLinkVersaoId() !== null
              "
              (click)="
                compartilharWhatsApp(
                  faixa,
                  versaoPrincipal
                )
              "
            >
              WhatsApp
            </button>

            <button
              type="button"
              [disabled]="
                baixandoVersaoId() !== null ||
                processandoLinkVersaoId() !== null
              "
              (click)="copiarLink(versaoPrincipal)"
            >
              Copiar link
            </button>

            @if (versaoPrincipal.token_compartilhamento) {
            <button
              type="button"
              class="botao-perigo"
              [disabled]="
                processandoLinkVersaoId() !== null
              "
              (click)="revogarLink(versaoPrincipal)"
            >
              Revogar
            </button>
            }
          </div>
        </article>

        @if (versaoPrincipal.observacoes) {
        <p class="observacoes-arquivo">
          {{ versaoPrincipal.observacoes }}
        </p>
        }

        @if (erroVersaoPrincipal()) {
        <p class="erro-formulario">
          {{ erroVersaoPrincipal() }}
        </p>
        }
        }

        @else {
        <div class="vazio-detalhe">
          <strong>Nenhum arquivo enviado.</strong>
          <p>
            Envie uma vers\xE3o para iniciar o hist\xF3rico da faixa.
          </p>
        </div>
        }
      </section>

      <section class="secao-detalhe contexto-producao">
        <header>
          <div>
            <p>Informa\xE7\xF5es</p>
            <h3>Contexto da produ\xE7\xE3o</h3>
          </div>
        </header>

        @if (faixa.observacoes) {
        <p>{{ faixa.observacoes }}</p>
        }

        @else {
        <p class="texto-vazio">
          Sem observa\xE7\xF5es registradas.
        </p>
        }

        @if (faixa.link_externo_audio) {
        <a
          [href]="faixa.link_externo_audio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir \xE1udio externo
        </a>
        }
      </section>
    </div>

    <section class="secao-detalhe participantes">
      <header>
        <div>
          <p>Colabora\xE7\xE3o</p>
          <h3>Participantes</h3>
        </div>

        <span>
          {{ participantesDaFaixa().length }}

          @if (participantesDaFaixa().length === 1) {
          participante
          }

          @else {
          participantes
          }
        </span>
      </header>

      <div class="lista-participantes">
        @for (
          participante of participantesDaFaixa();
          track participante.membro.id
        ) {
        <article
          class="linha-participante"
          [class.expandida]="
            participanteExpandidoId() ===
            participante.membro.id
          "
        >
          <button
            type="button"
            class="participante-cabecalho"
            [disabled]="participante.versoes.length === 0"
            [attr.aria-expanded]="
              participanteExpandidoId() ===
              participante.membro.id
            "
            (click)="
              alternarParticipante(
                participante.membro.id
              )
            "
          >
            <div class="participante-identidade">
              <strong>
                {{
                  participante.contato?.nome ??
                  'Participante'
                }}
              </strong>

              <small>
                {{ participante.membro.papel }}
              </small>
            </div>

            @if (participante.versoes.length > 0) {
            <div class="participante-versoes">
              <strong>
                {{ participante.versoes.length }}

                {{
                  participante.versoes.length === 1
                    ? 'vers\xE3o'
                    : 'vers\xF5es'
                }}
              </strong>

              <small>
                {{ formatarData(
                  participante.versoes[0].confirmado_em ??
                  participante.versoes[0].criado_em
                ) }}
              </small>
            </div>

            <span
              class="participante-indicador"
              aria-hidden="true"
            >
              @if (
                participanteExpandidoId() ===
                participante.membro.id
              ) {
              \u2212
              }

              @else {
              +
              }
            </span>
            }

            @else {
            <div class="participante-sem-versao">
              <span>\u2014</span>
              <small>Sem vers\xE3o enviada</small>
            </div>
            }
          </button>

          @if (
            participante.versoes.length > 0 &&
            participanteExpandidoId() ===
            participante.membro.id
          ) {
          <div class="participante-detalhes">
            @for (
              versao of participante.versoes;
              track versao.id
            ) {
            <div class="participante-versao">
              <div class="participante-versao-info">
                <strong>{{ versao.versao }}</strong>

                <small>
                  {{ versao.nome_arquivo }}
                </small>

                <time>
                  {{ formatarData(
                    versao.confirmado_em ??
                    versao.criado_em
                  ) }}
                </time>
              </div>

              <div class="participante-versao-acoes">
                <button
                  type="button"
                  title="Reproduzir"
                  aria-label="Reproduzir vers\xE3o"
                  [disabled]="!podeReproduzir(versao)"
                  (click)="reproduzirVersao(versao)"
                >
                  \u25B6
                </button>

                <button
                  type="button"
                  title="Baixar"
                  aria-label="Baixar vers\xE3o"
                  [disabled]="
                    baixandoVersaoId() === versao.id
                  "
                  (click)="baixarVersao(versao)"
                >
                  @if (
                    baixandoVersaoId() === versao.id
                  ) {
                  <span class="spinner"></span>
                  }

                  @else {
                  \u2193
                  }
                </button>
              </div>
            </div>
            }
          </div>
          }
        </article>
        }
      </div>
    </section>

    @if (versoes.length > 1) {
<section class="secao-detalhe historico">
  <header>
    <div>
      <p>Arquivos</p>
      <h3>Outras vers\xF5es</h3>
    </div>

    <span>
      {{ versoes.length - 1 }}
    </span>
  </header>

  <div class="cabecalho-tabela" aria-hidden="true">
    <span>Vers\xE3o</span>
    <span>Enviada por</span>
    <span>Tamanho</span>
    <span>Enviada em</span>
    <span>A\xE7\xF5es</span>
  </div>

  <div class="lista-versoes">
    @for (versao of versoes; track versao.id) {
      @if (versao.id !== versaoPrincipal?.id) {
        <article class="linha-versao">

          <div class="identidade-versao">
            <button
              type="button"
              class="botao-reproducao-versao"
              [disabled]="
                carregandoReproducaoId() === versao.id ||
                !podeReproduzir(versao)
              "
              (click)="reproduzirVersao(versao)"
              [attr.aria-label]="
                'Reproduzir vers\xE3o ' + versao.versao
              "
            >
              @if (carregandoReproducaoId() === versao.id) {
                \u2026
              } @else if (
                versaoReproduzindo()?.id === versao.id &&
                audioTocando()
              ) {
                \u275A\u275A
              } @else {
                \u25B6
              }
            </button>

            <span>
              <strong>{{ versao.versao }}</strong>
              <small>{{ versao.nome_arquivo }}</small>
            </span>
          </div>

          <div class="origem-versao">
            <strong>
              {{ nomeRemetenteVersao(versao) }}
            </strong>

            @if (nomeRemetenteVersao(versao) === 'Est\xFAdio') {
  <small>Est\xFAdio</small>
} @else {
  <small>Participante</small>
}
          </div>

          <span>
            {{ formatarBytes(versao.tamanho_bytes) }}
          </span>

          <time [attr.datetime]="versao.confirmado_em ?? versao.criado_em">
            {{ formatarData(
              versao.confirmado_em ??
              versao.criado_em
            ) }}
          </time>

          <div class="acoes-versao">
            <button
              type="button"
              [disabled]="
                definindoVersaoPrincipalId() === versao.id
              "
              (click)="
                definirVersaoPrincipal(
                  faixaSelecionada()!,
                  versao
                )
              "
            >
              @if (
                definindoVersaoPrincipalId() === versao.id
              ) {
                \u2026
              } @else {
                Tornar principal
              }
            </button>

            <button
              type="button"
              [disabled]="baixandoVersaoId() === versao.id"
              (click)="baixarVersao(versao)"
            >
              @if (baixandoVersaoId() === versao.id) {
                \u2026
              } @else {
                \u2193
              }
            </button>

            <button
              type="button"
              [disabled]="
                processandoLinkVersaoId() === versao.id
              "
              (click)="
                compartilharWhatsApp(
                  faixaSelecionada()!,
                  versao
                )
              "
            >
              WhatsApp
            </button>

            <button
              type="button"
              [disabled]="
                processandoLinkVersaoId() === versao.id
              "
              (click)="copiarLink(versao)"
            >
              Link
            </button>

            <button
              type="button"
              [disabled]="
                processandoLinkVersaoId() === versao.id
              "
              (click)="revogarLink(versao)"
            >
              Revogar
            </button>
          </div>

          @if (versao.observacoes) {
            <p class="observacoes-versao">
              {{ versao.observacoes }}
            </p>
          }

        </article>
      }
    }
  </div>
</section>
}
  </div>
  }

  @else {
  <div class="nenhuma-selecao">
    <div
      class="icone-vazio"
      aria-hidden="true"
    >
      \u266B
    </div>

    <strong>Selecione uma faixa</strong>

    <p>
      Os arquivos, vers\xF5es e a\xE7\xF5es aparecer\xE3o aqui.
    </p>
  </div>
  }
</section>


  </section>

@if (editorAberto()) {

  <div class="camada-editor">
    <button
      type="button"
      class="fundo-editor"
      aria-label="Fechar editor"
      (click)="fecharEditor()"
    ></button>


<section
  class="editor-faixa"
  role="dialog"
  aria-modal="true"
  aria-labelledby="titulo-editor-faixa"
>
  <header>
    <div>
      <p>
        @if (faixaEditandoId()) {
        Editar cat\xE1logo
        }

        @else {
        Adicionar ao cat\xE1logo
        }
      </p>

      <h2 id="titulo-editor-faixa">
        @if (faixaEditandoId()) {
        Editar faixa
        }

        @else {
        Nova faixa
        }
      </h2>
    </div>

    <button
      type="button"
      class="fechar-editor"
      aria-label="Fechar editor"
      [disabled]="salvando()"
      (click)="fecharEditor()"
    >
      \xD7
    </button>
  </header>

  <div class="corpo-editor">
    @if (
      !dadosFaixas.carregando() &&
      dadosFaixas.projetos().length === 0
    ) {
    <div class="aviso-projeto">
      <p>
        Cadastre um projeto art\xEDstico antes de
        cadastrar uma faixa.
      </p>

      <a routerLink="/projetos">
        Ir para projetos
      </a>
    </div>
    }

    <form
      [formGroup]="formulario"
      (ngSubmit)="salvar()"
    >
      <div class="campos-editor">
        <label>
          <span>Projeto art\xEDstico</span>

          <select formControlName="projeto_id">
            <option value="">
              Selecione um projeto
            </option>

            @for (
              projeto of dadosFaixas.projetos();
              track projeto.id
            ) {
            <option [value]="projeto.id">
              {{ projeto.nome }}
            </option>
            }
          </select>

          @if (
            formulario.controls.projeto_id.touched &&
            formulario.controls.projeto_id.invalid
          ) {
          <small>
            Selecione o projeto art\xEDstico.
          </small>
          }
        </label>

        <label>
          <span>T\xEDtulo</span>

          <input
            type="text"
            formControlName="titulo"
            placeholder="Ex.: Noite em S\xE3o Paulo"
          />

          @if (
            formulario.controls.titulo.touched &&
            formulario.controls.titulo.invalid
          ) {
          <small>
            Informe o t\xEDtulo da faixa.
          </small>
          }
        </label>

        <label>
          <span>Status de produ\xE7\xE3o</span>

          <select formControlName="status_producao">
            @for (
              opcao of opcoesStatus;
              track opcao.valor
            ) {
            <option [value]="opcao.valor">
              {{ opcao.rotulo }}
            </option>
            }
          </select>
        </label>

        <div class="campos-menores">
          <label>
            <span>BPM</span>

            <input
              type="number"
              formControlName="bpm"
              placeholder="Opcional"
              step="1"
            />
          </label>

          <label>
            <span>Tom</span>

            <input
              type="text"
              formControlName="tom"
              placeholder="Opcional"
            />
          </label>
        </div>

        <label>
          <span>Link externo de \xE1udio</span>

          <input
            type="url"
            formControlName="link_externo_audio"
            placeholder="Drive, Dropbox, WeTransfer..."
          />
        </label>

        <label>
          <span>Observa\xE7\xF5es</span>

          <textarea
            formControlName="observacoes"
            rows="5"
            placeholder="Informa\xE7\xF5es importantes sobre a produ\xE7\xE3o"
          ></textarea>
        </label>
      </div>

      @if (erroFormulario()) {
      <p class="erro-formulario">
        {{ erroFormulario() }}
      </p>
      }

      <div class="acoes-formulario">
        <button
          type="button"
          class="botao-secundario"
          [disabled]="salvando()"
          (click)="fecharEditor()"
        >
          Cancelar
        </button>

        <button
          type="submit"
          class="botao-destaque"
          [disabled]="
            salvando() ||
            dadosFaixas.projetos().length === 0
          "
        >
          @if (salvando()) {
          Salvando...
          }

          @else if (faixaEditandoId()) {
          Salvar altera\xE7\xF5es
          }

          @else {
          Adicionar faixa
          }
        </button>
      </div>
    </form>
  </div>
</section>

  </div>
  }

@if (montadorEnvioAberto()) {

  <div class="camada-editor">
    <button
      type="button"
      class="fundo-editor"
      aria-label="Fechar montagem do envio"
      (click)="fecharMontadorEnvio()"
    ></button>


<section
  class="editor-faixa"
  role="dialog"
  aria-modal="true"
  aria-labelledby="titulo-montador-envio"
>
  <header>
    <div>
      <p>Compartilhamento</p>

      <h2 id="titulo-montador-envio">
        @if (envioEditandoId()) {
        Editar envio
        }

        @else {
        Montar envio
        }
      </h2>
    </div>

    <button
      type="button"
      class="fechar-editor"
      aria-label="Fechar montagem do envio"
      [disabled]="criandoEnvio()"
      (click)="fecharMontadorEnvio()"
    >
      \xD7
    </button>
  </header>

  <div class="corpo-editor">
    @if (linkEnvioCriado(); as link) {
    <div class="aviso-pagina aviso-sucesso">
      <strong>
        @if (envioEditandoId()) {
        Envio atualizado.
        }

        @else {
        Envio criado.
        }
      </strong>

      <p>
        Este link continuar\xE1 o mesmo quando o
        conte\xFAdo for editado.
      </p>
    </div>

    <div class="campos-editor">
      <label>
        <span>Link n\xE3o listado</span>

        <input
          type="text"
          readonly
          [value]="link"
        />
      </label>
    </div>

    <div class="acoes-formulario">
      <button
        type="button"
        class="botao-secundario"
        (click)="fecharMontadorEnvio()"
      >
        Fechar
      </button>

      <button
        type="button"
        class="botao-destaque"
        (click)="copiarLinkEnvioCriado()"
      >
        Copiar link
      </button>
    </div>
    }

    @else {
    @if (!envioEditandoId() && envios().length > 0) {
    <section class="secao-detalhe historico">
      <header>
        <div>
          <p>Compartilhamentos</p>
          <h3>Envios existentes</h3>
        </div>

        <span>{{ envios().length }}</span>
      </header>

      <div class="lista-versoes">
        @for (
          envio of envios();
          track envio.id
        ) {
        <article class="linha-versao">
          <div class="identidade-versao">
            <span>
              <strong>{{ envio.nome }}</strong>

              <small>
                {{ envio.faixas.length }}

                @if (envio.faixas.length === 1) {
                arquivo
                }

                @else {
                arquivos
                }

                \xB7 {{ envio.projeto.nome }}
              </small>
            </span>
          </div>

          <div class="acoes-versao">
            <button
              type="button"
              (click)="abrirMontadorEnvio(envio)"
            >
              Editar
            </button>
          </div>
        </article>
        }
      </div>
    </section>
    }

    <form
      [formGroup]="formularioEnvio"
      (ngSubmit)="criarEnvio()"
    >
      <div class="campos-editor">
        <label>
          <span>Nome do envio</span>

          <input
            type="text"
            formControlName="nome"
            placeholder="Ex.: Beats para testar com a voz"
          />

          @if (
            formularioEnvio.controls.nome.touched &&
            formularioEnvio.controls.nome.invalid
          ) {
          <small>
            Informe um nome para identificar o envio.
          </small>
          }
        </label>

        <label>
          <span>Projeto principal</span>

          <select formControlName="projeto_id">
            <option value="">
              Selecione um projeto
            </option>

            @for (
              projeto of dadosFaixas.projetos();
              track projeto.id
            ) {
            <option [value]="projeto.id">
              {{ projeto.nome }}
            </option>
            }
          </select>

          <small>
            Serve como contexto e capa. N\xE3o limita os
            arquivos escolhidos.
          </small>
        </label>

        <label>
          <span>Observa\xE7\xF5es internas</span>

          <textarea
            formControlName="observacoes"
            rows="3"
            placeholder="Opcional"
          ></textarea>
        </label>

        <label class="linha-versao">
          <input
            type="checkbox"
            formControlName="publicar"
          />

          <span class="identidade-versao">
            <span>
              <strong>Publicar este envio</strong>

              <small>
                Torna o envio vis\xEDvel como trabalho
                p\xFAblico. Desmarcado, o acesso continua
                somente pelo link n\xE3o listado.
              </small>
            </span>
          </span>
        </label>

        @if (formularioEnvio.controls.publicar.value) {
        <label>
          <span>Texto p\xFAblico</span>

          <textarea
            formControlName="descricao_publica"
            rows="3"
            placeholder="Ex.: A trajet\xF3ria desta faixa, da primeira ideia \xE0 vers\xE3o final"
          ></textarea>
        </label>

        <label class="linha-versao">
          <input
            type="checkbox"
            formControlName="download_publico"
          />

          <span class="identidade-versao">
            <span>
              <strong>Permitir download</strong>

              <small>
                A reprodu\xE7\xE3o permanece dispon\xEDvel na
                p\xE1gina.
              </small>
            </span>
          </span>
        </label>
        }
      </div>

      <section class="secao-detalhe historico">
        <header>
          <div>
            <p>Acervo</p>
            <h3>Escolher arquivos</h3>
          </div>

          <span>
            {{ versoesEnvioIds().length }}
            selecionados
          </span>
        </header>

        <label class="busca">
          <span
            class="icone-busca"
            aria-hidden="true"
          >
            \u2315
          </span>

          <span class="sr-only">
            Buscar arquivos para o envio
          </span>

          <input
            type="search"
            placeholder="Buscar projeto, faixa, vers\xE3o ou arquivo"
            [value]="termoBuscaEnvio()"
            (input)="atualizarBuscaEnvio($event)"
          />
        </label>

        @if (gruposEnvio().length === 0) {
        <div class="vazio-detalhe">
          <strong>Nenhum arquivo encontrado.</strong>
          <p>Tente buscar por outro termo.</p>
        </div>
        }

        @else {
        <div class="lista-versoes">
          @for (
            projeto of gruposEnvio();
            track projeto.id
          ) {
          <div class="contexto-producao">
            <strong>{{ projeto.nome }}</strong>
          </div>

          @for (
            faixa of projeto.faixas;
            track faixa.id
          ) {
          @for (
            versao of faixa.versoes;
            track versao.id
          ) {
          <label class="linha-versao">
            <input
              type="checkbox"
              [checked]="versaoEstaNoEnvio(versao.id)"
              (change)="
                alternarVersaoEnvio(versao.id)
              "
            />

            <span class="identidade-versao">
              <span>
                <strong>
                  {{ faixa.titulo }}.{{ versao.versao }}
                </strong>

                <small>
                  {{ versao.nome_arquivo }}
                </small>
              </span>
            </span>

            <span>
              {{ formatarBytes(versao.tamanho_bytes) }}
            </span>
          </label>
          }
          }
          }
        </div>
        }
      </section>

      @if (versoesEscolhidasEnvio().length > 0) {
      <section class="secao-detalhe historico">
        <header>
          <div>
            <p>Sequ\xEAncia</p>
            <h3>Ordem do envio</h3>
          </div>
        </header>

        <div class="lista-versoes">
          @for (
            versao of versoesEscolhidasEnvio();
            track versao.id;
            let primeiro = $first;
            let ultimo = $last;
            let indice = $index
          ) {
          <article class="linha-versao">
            <span>{{ indice + 1 }}</span>

            <div class="identidade-versao">
              <span>
                <strong>
                  {{ versao.faixa.titulo }}.{{ versao.versao }}
                </strong>

                <small>
                  {{ versao.nome_arquivo }}
                </small>
              </span>
            </div>

            <div class="acoes-versao">
              <button
                type="button"
                aria-label="Mover arquivo para cima"
                [disabled]="primeiro"
                (click)="
                  moverVersaoEnvio(
                    versao.id,
                    -1
                  )
                "
              >
                \u2191
              </button>

              <button
                type="button"
                aria-label="Mover arquivo para baixo"
                [disabled]="ultimo"
                (click)="
                  moverVersaoEnvio(
                    versao.id,
                    1
                  )
                "
              >
                \u2193
              </button>

              <button
                type="button"
                class="botao-perigo"
                (click)="
                  alternarVersaoEnvio(
                    versao.id
                  )
                "
              >
                Remover
              </button>
            </div>
          </article>
          }
        </div>
      </section>
      }

      @if (erroEnvio()) {
      <p class="erro-formulario">
        {{ erroEnvio() }}
      </p>
      }

      <div class="acoes-formulario">
        <button
          type="button"
          class="botao-secundario"
          [disabled]="criandoEnvio()"
          (click)="fecharMontadorEnvio()"
        >
          Cancelar
        </button>

        <button
          type="submit"
          class="botao-destaque"
          [disabled]="
            criandoEnvio() ||
            formularioEnvio.invalid ||
            versoesEnvioIds().length === 0
          "
        >
          @if (criandoEnvio()) {
          Salvando envio...
          }

          @else if (envioEditandoId()) {
          Salvar envio e copiar link
          }

          @else {
          Criar envio e copiar link
          }
        </button>
      </div>
    </form>
    }
  </div>
</section>

  </div>
  }

@if (urlReproducao(); as url) {
@if (versaoReproduzindo(); as versao) {

  <footer class="reprodutor-global">
    <div class="musica-reprodutor">
      @if (faixaReproduzindo(); as faixa) {
      <span
        class="capa-reprodutor"
        [class.com-imagem]="
          faixa.projeto.capa_caminho !== null
        "
      >
        @if (
          dadosFaixas.capaUrl(faixa.projeto);
          as capaUrl
        ) {
        <img
          [src]="capaUrl"
          [alt]="'Capa de ' + faixa.projeto.nome"
        />
        }

    @else {
    {{ iniciaisFaixa(faixa) }}
    }
  </span>

  <span>
    <strong>{{ faixa.titulo }}</strong>

    <small>
      {{ faixa.projeto.nome }} \xB7 {{ versao.versao }}
    </small>
  </span>
  }
</div>

<div class="controles-reprodutor">
  <button
    type="button"
    class="alternar-reproducao"
    [attr.aria-label]="
      audioTocando()
        ? 'Pausar reprodu\xE7\xE3o'
        : 'Iniciar reprodu\xE7\xE3o'
    "
    (click)="alternarReproducao()"
  >
    @if (audioTocando()) {
    <span aria-hidden="true">\u2161</span>
    }

    @else {
    <span aria-hidden="true">\u25B6</span>
    }
  </button>

  <span class="tempo-reprodutor">
    {{ formatarTempoAudio(tempoAtualAudio()) }}
  </span>

  <label class="progresso-reprodutor">
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

  <span class="tempo-reprodutor">
    {{ formatarTempoAudio(duracaoAudio()) }}
  </span>
</div>

<div class="acoes-reprodutor">
  <label class="volume-reprodutor">
    <span aria-hidden="true">\u25D6</span>

    <span class="sr-only">
      Volume
    </span>

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
    class="fechar-reprodutor"
    aria-label="Fechar reprodutor"
    (click)="fecharReprodutor()"
  >
    \xD7
  </button>
</div>

<audio
  #reprodutor
  class="audio-nativo"
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
`, styles: ['@charset "UTF-8";\n\n/* apps/studio-dash/src/app/paginas/faixas/faixas.scss */\n:host {\n  --fx-accent: var(--studio-brand, var(--primary));\n  --fx-on-accent: var(--studio-on-brand, #fff);\n  --fx-accent-deep: color-mix( in oklab, var(--fx-accent) 78%, var(--app-text, #1a1a18) );\n  --fx-accent-soft: color-mix( in oklab, var(--fx-accent) 10%, var(--app-surface, #fbfaf4) );\n  --fx-accent-subtle: color-mix( in oklab, var(--fx-accent) 4%, var(--app-surface, #fbfaf4) );\n  --fx-canvas: color-mix( in oklab, var(--fx-accent) 5%, var(--app-background, #f0efea) );\n  --fx-surface: var(--app-surface, #fbfaf4);\n  --fx-surface-muted: color-mix( in oklab, var(--fx-accent) 3%, var(--app-surface-muted, #f2f1e9) );\n  --fx-rule: color-mix( in oklab, var(--fx-accent) 18%, var(--app-border-strong, #d0cec4) );\n  --fx-rule-soft: color-mix( in oklab, var(--fx-accent) 6%, var(--app-border, #e4e2d8) );\n  --fx-text: var(--app-text, #1c1b18);\n  --fx-text-soft: var(--app-text-soft, #4d4b44);\n  --fx-text-muted: var(--app-text-muted, #8a877e);\n  --fx-text-subtle: color-mix( in oklab, var(--fx-text-muted) 60%, transparent );\n  display: block;\n  min-height: 100vh;\n  background: var(--fx-canvas);\n  color: var(--fx-text);\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n* {\n  box-sizing: border-box;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n}\nbutton {\n  cursor: pointer;\n  transition:\n    color 180ms cubic-bezier(0.25, 0.46, 0.45, 0.94),\n    background-color 180ms cubic-bezier(0.25, 0.46, 0.45, 0.94),\n    border-color 180ms cubic-bezier(0.25, 0.46, 0.45, 0.94),\n    opacity 180ms ease,\n    transform 180ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\nbutton:disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n.pagina-media {\n  min-height: 100vh;\n  padding: 1.5rem max(1.2rem, (100vw - 96rem) / 2) 5rem;\n  background: var(--fx-canvas);\n}\n.pagina-media.com-reprodutor {\n  padding-bottom: 7.5rem;\n}\n.barra-superior {\n  display: grid;\n  min-height: 5.6rem;\n  grid-template-columns: minmax(10rem, 1fr) auto;\n  align-items: center;\n  gap: 2.5rem;\n  margin-bottom: 1.5rem;\n  padding: 0.6rem 0 1.2rem;\n  border-top: 1px solid var(--fx-rule-soft);\n  border-bottom: 1px solid var(--fx-rule-soft);\n  position: relative;\n}\n.barra-superior::after {\n  content: "";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 4.5rem;\n  height: 2px;\n  background: var(--fx-accent);\n  opacity: 0.3;\n}\n.titulo-pagina {\n  position: relative;\n  padding-left: 0;\n}\n.titulo-pagina::before {\n  display: none;\n}\n.titulo-pagina p {\n  margin: 0 0 0.1rem;\n  color: var(--fx-text-muted);\n  font-size: 0.55rem;\n  font-weight: 500;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  font-feature-settings: "cpsp" 1;\n}\n.titulo-pagina h1 {\n  margin: 0;\n  font-size: clamp(2rem, 3.6vw, 2.8rem);\n  font-weight: 350;\n  line-height: 1.04;\n  letter-spacing: -0.04em;\n  color: var(--fx-text);\n}\n.acoes-superiores {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.armazenamento {\n  display: grid;\n  width: 13rem;\n  gap: 0.2rem;\n  margin-right: 0.5rem;\n}\n.armazenamento > span {\n  color: var(--fx-text-muted);\n  font-size: 0.48rem;\n  font-weight: 500;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.armazenamento strong {\n  font-size: 0.75rem;\n  font-weight: 500;\n  font-variant-numeric: tabular-nums;\n  color: var(--fx-text);\n}\n.armazenamento small {\n  color: var(--fx-text-muted);\n  font-weight: 400;\n}\n.barra-armazenamento {\n  height: 2px;\n  overflow: hidden;\n  background: var(--fx-rule-soft);\n}\n.barra-armazenamento span {\n  display: block;\n  height: 100%;\n  background: var(--fx-accent);\n  transition: width 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.botao-destaque,\n.botao-secundario,\n.botao-fantasma {\n  display: inline-flex;\n  min-height: 2.4rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0.4rem 1.2rem;\n  border: 1px solid var(--fx-rule);\n  border-radius: 0.3rem;\n  font-size: 0.65rem;\n  font-weight: 500;\n  letter-spacing: 0.01em;\n  transition: all 180ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.botao-destaque {\n  background: var(--fx-accent);\n  color: var(--fx-on-accent);\n  border-color: var(--fx-accent);\n  box-shadow: 0 2px 8px color-mix(in oklab, var(--fx-accent) 15%, transparent);\n}\n.botao-destaque:hover:not(:disabled) {\n  background: var(--fx-accent-deep);\n  border-color: var(--fx-accent-deep);\n  box-shadow: 0 4px 16px color-mix(in oklab, var(--fx-accent) 25%, transparent);\n  transform: translateY(-1px);\n}\n.botao-destaque:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 1px 4px color-mix(in oklab, var(--fx-accent) 10%, transparent);\n}\n.botao-secundario {\n  background: var(--fx-surface);\n  color: var(--fx-text-soft);\n}\n.botao-secundario:hover:not(:disabled) {\n  background: var(--fx-accent-soft);\n  color: var(--fx-text);\n  border-color: var(--fx-accent);\n}\n.botao-fantasma {\n  background: transparent;\n  color: var(--fx-text-muted);\n  border-color: transparent;\n}\n.botao-fantasma:hover:not(:disabled) {\n  background: var(--fx-accent-subtle);\n  color: var(--fx-text);\n  border-color: var(--fx-rule);\n}\n.botao-perigo {\n  color: #b45353 !important;\n}\n.botao-perigo:hover:not(:disabled) {\n  background: color-mix(in oklab, #b45353 6%, transparent) !important;\n  border-color: #b45353 !important;\n}\n.aviso-pagina {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.8rem;\n  padding: 0.7rem 1.2rem;\n  border-left: 3px solid currentColor;\n  border-radius: 0.2rem;\n  font-size: 0.7rem;\n  line-height: 1.5;\n  background: var(--fx-surface);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02);\n}\n.aviso-pagina p {\n  margin: 0;\n}\n.aviso-pagina button {\n  min-height: 1.8rem;\n  padding: 0.2rem 1rem;\n  background: transparent;\n  color: inherit;\n  border: 1px solid currentColor;\n  border-radius: 0.2rem;\n  font-size: 0.55rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  opacity: 0.6;\n  transition: all 180ms ease;\n}\n.aviso-pagina button:hover {\n  opacity: 1;\n  background: currentColor;\n  color: var(--fx-surface);\n}\n.aviso-sucesso {\n  color: #2d7a4a;\n  border-left-color: #2d7a4a;\n  background: color-mix(in oklab, #2d7a4a 4%, var(--fx-surface));\n}\n.aviso-erro {\n  color: #b45353;\n  border-left-color: #b45353;\n  background: color-mix(in oklab, #b45353 4%, var(--fx-surface));\n}\n.explorer {\n  display: grid;\n  min-height: calc(100vh - 9rem);\n  grid-template-columns: minmax(20rem, 23rem) minmax(0, 1fr);\n  gap: 1.2rem;\n  overflow: visible;\n  background: transparent;\n  border: 0;\n  animation: entrar-pagina 300ms cubic-bezier(0.2, 0.8, 0.2, 1) both;\n}\n.biblioteca-faixas {\n  min-width: 0;\n  overflow: hidden;\n  background: var(--fx-surface);\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 0.4rem 0.4rem 0.2rem 0.2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);\n  transition: box-shadow 240ms ease;\n}\n.biblioteca-faixas:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);\n}\n.cabecalho-biblioteca {\n  background: var(--fx-surface);\n  border-bottom: 1px solid var(--fx-rule-soft);\n}\n.cabecalho-biblioteca > .titulo-biblioteca {\n  display: flex;\n  min-height: 3rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.6rem 1rem;\n  border-bottom: 1px solid var(--fx-rule-soft);\n}\n.cabecalho-biblioteca > .titulo-biblioteca > span {\n  display: grid;\n  min-width: 1.8rem;\n  height: 1.6rem;\n  place-items: center;\n  color: var(--fx-accent-deep);\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 0.15rem;\n  font-size: 0.55rem;\n  font-weight: 500;\n  font-variant-numeric: tabular-nums;\n  background: var(--fx-accent-subtle);\n}\n.cabecalho-biblioteca h2 {\n  margin: 0;\n  font-size: 0.85rem;\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  color: var(--fx-text);\n}\n.filtro-projeto {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.7rem;\n  padding: 0.5rem 1rem;\n  background: var(--fx-accent-subtle);\n  border-bottom: 1px solid var(--fx-rule-soft);\n  color: var(--fx-text-soft);\n  font-size: 0.6rem;\n}\n.filtro-projeto strong {\n  color: var(--fx-text);\n  font-weight: 500;\n}\n.filtro-projeto a {\n  color: var(--fx-accent-deep);\n  font-weight: 450;\n  text-decoration: none;\n  border-bottom: 1px solid transparent;\n  transition: border-color 140ms ease;\n}\n.filtro-projeto a:hover {\n  border-bottom-color: var(--fx-accent);\n}\n.acoes-filtro {\n  display: flex;\n  flex: 0 0 auto;\n  gap: 0.8rem;\n}\n.busca {\n  position: relative;\n  display: block;\n  padding: 0.6rem 1rem;\n}\n.busca input {\n  width: 100%;\n  min-height: 2.4rem;\n  padding: 0.4rem 0.6rem 0.4rem 2.2rem;\n  background: var(--fx-surface-muted);\n  color: var(--fx-text);\n  border: 1px solid transparent;\n  border-radius: 0.3rem;\n  font-size: 0.7rem;\n  outline: none;\n  transition: all 180ms ease;\n}\n.busca input::placeholder {\n  color: var(--fx-text-muted);\n  font-weight: 350;\n}\n.busca input:focus {\n  background: var(--fx-surface);\n  border-color: var(--fx-accent);\n  box-shadow: inset 0 -2px 0 var(--fx-accent);\n}\n.icone-busca {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  left: 1.6rem;\n  color: var(--fx-text-muted);\n  font-size: 0.75rem;\n  transform: translateY(-50%);\n  opacity: 0.5;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n}\n.rotulos-lista {\n  display: grid;\n  grid-template-columns: 1.35rem 2.75rem minmax(0, 1fr) auto;\n  gap: 0.65rem;\n  padding: 0.4rem 0.8rem;\n  background: transparent;\n  color: var(--fx-text-subtle);\n  font-size: 0.45rem;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  border-bottom: 1px solid var(--fx-rule-soft);\n}\n.rotulos-lista span:nth-child(2) {\n  grid-column: 2/4;\n}\n.rotulos-lista span:last-child {\n  grid-column: 4;\n}\n.lista-faixas {\n  max-height: calc(100vh - 16rem);\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: var(--fx-rule-soft) transparent;\n}\n.lista-faixas::-webkit-scrollbar {\n  width: 4px;\n}\n.lista-faixas::-webkit-scrollbar-thumb {\n  background: var(--fx-rule-soft);\n  border-radius: 2px;\n}\n.lista-faixas::-webkit-scrollbar-track {\n  background: transparent;\n}\n.linha-faixa {\n  position: relative;\n  display: grid;\n  width: 100%;\n  min-height: 4.2rem;\n  grid-template-columns: 1.35rem 2.75rem minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.4rem 0.8rem;\n  background: transparent;\n  color: var(--fx-text);\n  border: 0;\n  border-bottom: 1px solid var(--fx-rule-soft);\n  text-align: left;\n  transition: background 140ms ease;\n}\n.linha-faixa::before {\n  content: "";\n  position: absolute;\n  top: 0.3rem;\n  bottom: 0.3rem;\n  left: 0;\n  width: 2px;\n  background: var(--fx-accent);\n  opacity: 0;\n  transition: opacity 200ms ease;\n}\n.linha-faixa::after {\n  display: none;\n}\n.linha-faixa:hover:not(.selecionada) {\n  background: var(--fx-accent-subtle);\n}\n.linha-faixa:hover:not(.selecionada) .mini-capa {\n  transform: none;\n}\n.linha-faixa.selecionada {\n  background: var(--fx-accent-soft);\n}\n.linha-faixa.selecionada::before {\n  opacity: 1;\n}\n.linha-faixa.selecionada .indice-faixa,\n.linha-faixa.selecionada .etapa-linha {\n  color: var(--fx-accent-deep);\n}\n.linha-faixa.reproduzindo .identidade-linha strong {\n  color: var(--fx-accent-deep);\n}\n.linha-faixa.reproduzindo::before {\n  opacity: 1;\n  background: var(--fx-accent);\n}\n.indice-faixa {\n  color: var(--fx-text-muted);\n  font-size: 0.5rem;\n  font-variant-numeric: tabular-nums;\n  text-align: center;\n  font-weight: 400;\n}\n.mini-capa,\n.capa-principal,\n.capa-reprodutor {\n  position: relative;\n  display: grid;\n  overflow: hidden;\n  place-items: center;\n  isolation: isolate;\n  background: var(--fx-surface-muted);\n  color: var(--fx-accent-deep);\n}\n.mini-capa > img,\n.capa-principal > img,\n.capa-reprodutor > img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  object-fit: scale-down;\n  object-position: center;\n}\n.mini-capa {\n  width: 2.75rem;\n  height: 2.75rem;\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 0.25rem;\n  font-size: 0.65rem;\n  transition: none;\n}\n.mini-capa.sem-imagem[data-ordem="1"] {\n  filter: saturate(0.8) brightness(0.95);\n}\n.mini-capa.sem-imagem[data-ordem="2"] {\n  filter: saturate(1.05) contrast(1.02);\n}\n.mini-capa.sem-imagem[data-ordem="3"] {\n  filter: saturate(0.7) brightness(0.85);\n}\n.sinal-audio {\n  position: absolute;\n  z-index: 1;\n  display: grid;\n  inset: 0;\n  place-items: center;\n  background: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  font-size: 0.6rem;\n  opacity: 0;\n  transform: scale(0.9);\n  transition: opacity 160ms ease, transform 160ms ease;\n}\n.linha-faixa:hover .sinal-audio,\n.linha-faixa.selecionada .sinal-audio,\n.linha-faixa.reproduzindo .sinal-audio {\n  opacity: 1;\n  transform: scale(1);\n}\n.linha-faixa.reproduzindo .identidade-linha strong {\n  color: var(--fx-accent-deep);\n}\n.identidade-linha {\n  display: grid;\n  min-width: 0;\n  gap: 0.06rem;\n}\n.identidade-linha strong,\n.identidade-linha > span,\n.identidade-linha small {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.identidade-linha strong {\n  font-size: 0.78rem;\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  color: var(--fx-text);\n}\n.identidade-linha > span {\n  color: var(--fx-text-soft);\n  font-size: 0.62rem;\n  font-weight: 400;\n}\n.identidade-linha small {\n  color: var(--fx-text-muted);\n  font-size: 0.52rem;\n  font-weight: 400;\n}\n.etapa-linha {\n  max-width: 5.8rem;\n  overflow: hidden;\n  color: var(--fx-text-muted);\n  font-size: 0.46rem;\n  font-weight: 500;\n  letter-spacing: 0.06em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.estado-lista,\n.nenhuma-selecao {\n  display: grid;\n  min-height: 18rem;\n  place-content: center;\n  justify-items: center;\n  padding: 2rem;\n  color: var(--fx-text);\n  text-align: center;\n}\n.estado-lista p,\n.nenhuma-selecao p {\n  max-width: 30rem;\n  margin: 0.3rem 0 0;\n  color: var(--fx-text-muted);\n  font-size: 0.75rem;\n  font-weight: 400;\n}\n.estado-lista button {\n  margin-top: 0.8rem;\n}\n.estado-erro p {\n  color: #b45353;\n}\n.carregador,\n.carregador-claro {\n  display: inline-block;\n  width: 0.9rem;\n  height: 0.9rem;\n  border: 2px solid var(--fx-rule-soft);\n  border-top-color: var(--fx-accent);\n  border-radius: 50%;\n  animation: girar 700ms linear infinite;\n}\n.carregador-claro {\n  border-color: color-mix(in oklab, var(--fx-on-accent) 25%, transparent);\n  border-top-color: var(--fx-on-accent);\n}\n.painel-faixa {\n  min-width: 0;\n  overflow: hidden;\n  background: var(--fx-surface);\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 0.4rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);\n}\n.cabecalho-faixa-ativa {\n  position: relative;\n  background: var(--fx-surface);\n  border-bottom: 1px solid var(--fx-rule-soft);\n}\n.hero-faixa {\n  position: relative;\n  display: grid;\n  min-height: 14rem;\n  grid-template-columns: 9.75rem minmax(0, 1fr);\n  align-items: center;\n  gap: 2rem;\n  padding: 2rem 2.5rem 2rem 2rem;\n  overflow: hidden;\n  isolation: isolate;\n  background: var(--fx-surface);\n  color: var(--fx-text);\n  animation: entrar-detalhe 280ms cubic-bezier(0.2, 0.8, 0.2, 1) both;\n}\n.hero-faixa > * {\n  position: relative;\n  z-index: 1;\n}\n.hero-faixa::after {\n  content: "";\n  position: absolute;\n  z-index: 0;\n  top: 1.5rem;\n  right: 1.5rem;\n  width: 2rem;\n  height: 2rem;\n  border-top: 1px solid var(--fx-rule);\n  border-right: 1px solid var(--fx-rule);\n  opacity: 0.2;\n}\n.hero-faixa > .rastro-transicao {\n  display: none;\n}\n.capa-principal {\n  width: 9.75rem;\n  height: 9.75rem;\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 0.35rem;\n  font-size: 1.8rem;\n  letter-spacing: -0.05em;\n  box-shadow: 0.5rem 0.5rem 0 color-mix(in oklab, var(--fx-accent) 8%, transparent);\n}\n.capa-principal small {\n  position: absolute;\n  right: 0.5rem;\n  bottom: 0.4rem;\n  left: 0.5rem;\n  overflow: hidden;\n  font-size: 0.48rem;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n  letter-spacing: 0.08em;\n  opacity: 0.6;\n}\n.informacoes-hero {\n  min-width: 0;\n}\n.informacoes-hero > p {\n  margin: 0 0 0.4rem;\n  color: var(--fx-text-muted);\n  font-size: 0.55rem;\n  font-weight: 500;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n}\n.informacoes-hero h2 {\n  max-width: 20ch;\n  margin: 0;\n  overflow-wrap: anywhere;\n  font-size: clamp(2.2rem, 4.5vw, 3.8rem);\n  font-weight: 350;\n  line-height: 1.02;\n  letter-spacing: -0.04em;\n  color: var(--fx-text);\n}\n.projeto-hero {\n  display: block;\n  margin-top: 0.5rem;\n  color: var(--fx-text-soft);\n  font-size: 0.8rem;\n  font-weight: 400;\n}\n.metadados-hero {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0;\n  margin-top: 1rem;\n  color: var(--fx-text-soft);\n  font-size: 0.6rem;\n  font-variant-numeric: tabular-nums;\n}\n.metadados-hero > * {\n  display: inline-flex;\n  min-height: auto;\n  align-items: center;\n  padding: 0;\n}\n.metadados-hero > *:not(:last-child)::after {\n  margin: 0 0.8rem;\n  color: var(--fx-rule);\n  content: "\\b7";\n  font-weight: 300;\n}\n.metadados-hero strong {\n  color: var(--fx-text);\n  font-weight: 500;\n}\n.barra-acoes-faixa {\n  position: absolute;\n  z-index: 2;\n  right: 1.8rem;\n  bottom: 1.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.4rem;\n  background: transparent;\n}\n.barra-acoes-faixa > button {\n  width: auto;\n  min-height: 2.4rem;\n  padding: 0.4rem 0.9rem;\n  background: var(--fx-surface);\n  color: var(--fx-text-soft);\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 0.3rem;\n  font-size: 0.62rem;\n  font-weight: 450;\n  transition: all 160ms ease;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02);\n}\n.barra-acoes-faixa > button:hover:not(:disabled) {\n  background: var(--fx-accent-soft);\n  color: var(--fx-text);\n  border-color: var(--fx-accent);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.barra-acoes-faixa > .botao-destaque {\n  background: var(--fx-accent);\n  color: var(--fx-on-accent);\n  border-color: var(--fx-accent);\n  box-shadow: 0 2px 8px color-mix(in oklab, var(--fx-accent) 15%, transparent);\n}\n.barra-acoes-faixa > .botao-destaque:hover:not(:disabled) {\n  background: var(--fx-accent-deep);\n  border-color: var(--fx-accent-deep);\n  box-shadow: 0 4px 16px color-mix(in oklab, var(--fx-accent) 25%, transparent);\n  transform: translateY(-1px);\n}\n.barra-acoes-faixa .botao-perigo {\n  color: #b45353 !important;\n}\n.botao-reproduzir {\n  display: grid;\n  width: 2.8rem !important;\n  min-height: 2.8rem !important;\n  place-items: center;\n  padding: 0 !important;\n  background: var(--fx-accent) !important;\n  color: var(--fx-on-accent) !important;\n  border: none !important;\n  border-radius: 50% !important;\n  font-size: 0.85rem !important;\n  box-shadow: 0 2px 12px color-mix(in oklab, var(--fx-accent) 20%, transparent) !important;\n  transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;\n}\n.botao-reproduzir:hover:not(:disabled) {\n  transform: translateY(-2px) scale(1.02);\n  box-shadow: 0 6px 24px color-mix(in oklab, var(--fx-accent) 30%, transparent) !important;\n}\n.botao-reproduzir.tocando {\n  background: var(--fx-surface) !important;\n  color: var(--fx-accent-deep) !important;\n  box-shadow: 0 0 0 2px var(--fx-accent-soft) !important;\n}\n.conteudo-faixa {\n  display: grid;\n  gap: 0.8rem;\n  padding: 0.8rem;\n  background: var(--fx-canvas);\n}\n.grade-resumo-faixa {\n  display: grid;\n  grid-template-columns: minmax(0, 1.45fr) minmax(17rem, 0.55fr);\n  gap: 0.8rem;\n  align-items: stretch;\n}\n.grade-resumo-faixa > section + section {\n  border-left: 0;\n}\n.secao-detalhe,\n.painel-upload {\n  padding: 1.2rem 1.5rem;\n  background: var(--fx-surface);\n  color: var(--fx-text);\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 0.35rem;\n  transition: box-shadow 240ms ease;\n}\n.secao-detalhe:hover,\n.painel-upload:hover {\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.02);\n}\n.secao-detalhe > header,\n.painel-upload > header {\n  display: flex;\n  min-height: 2.8rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin: 0 0 0.8rem;\n  padding: 0 0 0.6rem;\n  background: transparent;\n  border-bottom: 1px solid var(--fx-rule-soft);\n}\n.secao-detalhe > header p,\n.painel-upload > header p {\n  margin: 0;\n  color: var(--fx-text-muted);\n  font-size: 0.48rem;\n  font-weight: 500;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.secao-detalhe h3,\n.painel-upload h3 {\n  margin: 0.06rem 0 0;\n  font-size: 0.88rem;\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  color: var(--fx-text);\n}\n.versao-atual {\n  position: relative;\n}\n.contexto-producao {\n  background: var(--fx-surface);\n}\n.contexto-producao > p {\n  max-width: 72ch;\n  margin: 0;\n  color: var(--fx-text-soft);\n  font-size: 0.75rem;\n  line-height: 1.6;\n  white-space: pre-wrap;\n}\n.contexto-producao a {\n  display: inline-block;\n  margin-top: 0.6rem;\n  color: var(--fx-accent-deep);\n  font-size: 0.65rem;\n  font-weight: 450;\n  text-decoration: none;\n  border-bottom: 1px solid transparent;\n  transition: border-color 140ms ease;\n}\n.contexto-producao a:hover {\n  border-bottom-color: var(--fx-accent);\n}\n.selo-atual,\n.historico > header > span {\n  padding: 0;\n  background: transparent;\n  color: var(--fx-accent-deep);\n  border: 0;\n  border-radius: 0;\n  font-size: 0.48rem;\n  font-weight: 500;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.arquivo-destaque {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 0.8rem;\n  padding: 0.15rem 0;\n}\n.mini-reproduzir {\n  display: grid;\n  width: 2.4rem;\n  height: 2.4rem;\n  min-height: 2.4rem;\n  place-items: center;\n  padding: 0;\n  background: var(--fx-accent);\n  color: var(--fx-on-accent);\n  border: none;\n  border-radius: 50%;\n  transition: all 180ms ease;\n  box-shadow: 0 2px 8px color-mix(in oklab, var(--fx-accent) 12%, transparent);\n}\n.mini-reproduzir:hover:not(:disabled) {\n  transform: scale(1.04);\n  box-shadow: 0 4px 16px color-mix(in oklab, var(--fx-accent) 20%, transparent);\n}\n.nome-arquivo,\n.identidade-versao > span {\n  display: grid;\n  min-width: 0;\n  gap: 0.06rem;\n}\n.nome-arquivo strong,\n.identidade-versao strong {\n  font-size: 0.74rem;\n  font-weight: 500;\n}\n.nome-arquivo span,\n.identidade-versao small {\n  overflow: hidden;\n  color: var(--fx-text-muted);\n  font-size: 0.55rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 400;\n}\n.dados-arquivo {\n  display: grid;\n  justify-items: end;\n  gap: 0.06rem;\n  color: var(--fx-text-muted);\n  font-size: 0.55rem;\n  font-variant-numeric: tabular-nums;\n}\n.acoes-arquivo {\n  display: flex;\n  grid-column: 2/-1;\n  flex-wrap: wrap;\n  gap: 0.2rem;\n  margin-top: 0.2rem;\n}\n.acoes-arquivo button,\n.acoes-versao button {\n  min-height: 1.8rem;\n  padding: 0.2rem 0.1rem;\n  background: transparent;\n  color: var(--fx-text-muted);\n  border: none;\n  border-bottom: 1px solid transparent;\n  font-size: 0.52rem;\n  font-weight: 450;\n  transition: all 140ms ease;\n}\n.acoes-arquivo button:hover:not(:disabled),\n.acoes-versao button:hover:not(:disabled) {\n  background: transparent;\n  color: var(--fx-text);\n  border-bottom-color: var(--fx-accent);\n}\n.acoes-arquivo button.acao-whatsapp,\n.acoes-versao button.acao-whatsapp {\n  color: #2d7a4a;\n}\n.acoes-arquivo button.acao-whatsapp:hover:not(:disabled),\n.acoes-versao button.acao-whatsapp:hover:not(:disabled) {\n  color: #1a5a32;\n  border-bottom-color: #2d7a4a;\n}\n.observacoes-arquivo,\n.observacoes-versao {\n  margin: 0.6rem 0 0;\n  color: var(--fx-text-soft);\n  font-size: 0.7rem;\n  line-height: 1.6;\n  white-space: pre-wrap;\n}\n.texto-vazio {\n  color: var(--fx-text-muted) !important;\n  font-weight: 400;\n}\n.vazio-detalhe {\n  padding: 1.5rem;\n  background: var(--fx-accent-subtle);\n  border: 1px dashed var(--fx-rule);\n  border-radius: 0.2rem;\n  text-align: center;\n}\n.vazio-detalhe p {\n  margin: 0.25rem 0 0;\n  color: var(--fx-text-muted);\n  font-size: 0.7rem;\n  font-weight: 400;\n}\n.cabecalho-tabela,\n.linha-versao {\n  display: grid;\n  grid-template-columns: minmax(11rem, 1fr) 5rem 7.5rem minmax(12rem, auto);\n  align-items: center;\n  gap: 0.65rem;\n}\n.cabecalho-tabela {\n  padding: 0.4rem 0;\n  background: transparent;\n  color: var(--fx-text-subtle);\n  font-size: 0.45rem;\n  font-weight: 500;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  border-bottom: 1px solid var(--fx-rule-soft);\n}\n.lista-versoes {\n  display: grid;\n  border: 0;\n}\n.participantes {\n  overflow: hidden;\n}\n.lista-participantes {\n  display: grid;\n}\n.linha-participante {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 0;\n  min-width: 0;\n  padding: 0.15rem 0;\n  border-bottom: 1px solid var(--fx-rule-soft);\n  transition: background 140ms ease;\n}\n.linha-participante:last-child {\n  border-bottom: none;\n}\n.linha-participante:hover {\n  background: var(--fx-accent-subtle);\n}\n.linha-participante.expandida {\n  background: var(--fx-accent-subtle);\n}\n.participante-cabecalho {\n  display: grid;\n  width: 100%;\n  min-width: 0;\n  min-height: 3.7rem;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.55rem 0;\n  border: 0;\n  background: transparent;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.participante-cabecalho:disabled {\n  cursor: default;\n}\n.participante-identidade {\n  display: grid;\n  min-width: 0;\n  gap: 0.15rem;\n}\n.participante-identidade strong {\n  overflow: hidden;\n  color: var(--fx-text);\n  font-size: 0.72rem;\n  font-weight: 500;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.participante-identidade small {\n  overflow: hidden;\n  color: var(--fx-text-muted);\n  font-size: 0.52rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.participante-versoes,\n.participante-sem-versao {\n  display: grid;\n  min-width: 7rem;\n  justify-items: end;\n  gap: 0.12rem;\n  text-align: right;\n}\n.participante-versoes strong {\n  color: var(--fx-accent-deep);\n  font-size: 0.62rem;\n  font-weight: 500;\n}\n.participante-versoes small {\n  color: var(--fx-text-muted);\n  font-size: 0.52rem;\n  font-variant-numeric: tabular-nums;\n}\n.participante-sem-versao span {\n  color: var(--fx-text-muted);\n  font-size: 0.8rem;\n  line-height: 1;\n}\n.participante-sem-versao small {\n  color: var(--fx-text-subtle);\n  font-size: 0.5rem;\n  font-weight: 400;\n}\n.participante-detalhes {\n  display: grid;\n  min-width: 0;\n  margin: 0 0 0.55rem 0.75rem;\n  padding-left: 0.75rem;\n  border-left: 1px solid var(--fx-rule-soft);\n}\n.participante-versao {\n  display: grid;\n  min-width: 0;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.55rem 0.65rem;\n  border-bottom: 1px solid var(--fx-rule-soft);\n}\n.participante-versao:last-child {\n  border-bottom: none;\n}\n.participante-versao-info {\n  display: grid;\n  min-width: 0;\n  gap: 0.12rem;\n}\n.participante-versao-info strong {\n  overflow: hidden;\n  color: var(--fx-text);\n  font-size: 0.62rem;\n  font-weight: 500;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.participante-versao-info small {\n  overflow: hidden;\n  color: var(--fx-text-muted);\n  font-size: 0.5rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.participante-versao-info time {\n  color: var(--fx-text-muted);\n  font-size: 0.5rem;\n  font-variant-numeric: tabular-nums;\n}\n.participante-versao-acoes {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.participante-versao-acoes button {\n  display: inline-flex;\n  width: 2rem;\n  height: 2rem;\n  min-width: 2rem;\n  min-height: 2rem;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 0.35rem;\n  background: var(--fx-surface);\n  color: var(--fx-text-muted);\n  cursor: pointer;\n  font-size: 0.72rem;\n  line-height: 1;\n  transition:\n    color 140ms ease,\n    background 140ms ease,\n    border-color 140ms ease,\n    transform 140ms ease;\n}\n.participante-versao-acoes button:hover:not(:disabled) {\n  border-color: var(--fx-accent);\n  background: var(--fx-accent-subtle);\n  color: var(--fx-accent-deep);\n  transform: translateY(-1px);\n}\n.participante-versao-acoes button:active:not(:disabled) {\n  transform: translateY(0);\n}\n.participante-versao-acoes button:disabled {\n  cursor: default;\n  opacity: 0.45;\n}\n.linha-versao {\n  position: relative;\n  min-height: 4rem;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid var(--fx-rule-soft);\n  font-size: 0.64rem;\n  transition: background 140ms ease;\n}\n.linha-versao:last-child {\n  border-bottom: none;\n}\n.linha-versao:hover {\n  background: var(--fx-accent-subtle);\n}\n.linha-versao > span,\n.linha-versao > time {\n  color: var(--fx-text-muted);\n  font-size: 0.56rem;\n  font-variant-numeric: tabular-nums;\n}\narticle.linha-versao::before {\n  display: none;\n}\n.identidade-versao {\n  display: grid;\n  min-width: 0;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: center;\n  gap: 0.6rem;\n}\n.acoes-versao {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 0.2rem;\n}\n.observacoes-versao {\n  grid-column: 1/-1;\n}\n.painel-upload {\n  background: var(--fx-accent-subtle);\n  border-top: 2px solid var(--fx-accent);\n  transform-origin: top;\n  animation: revelar-painel 280ms cubic-bezier(0.2, 0.8, 0.2, 1) both;\n}\n.painel-upload > header > span {\n  color: var(--fx-text-muted);\n  font-size: 0.6rem;\n  font-weight: 400;\n}\n.campos-upload {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.campo-largo {\n  grid-column: 1/-1;\n}\nlabel {\n  display: grid;\n  align-content: start;\n  gap: 0.25rem;\n}\nlabel > span {\n  font-size: 0.62rem;\n  font-weight: 500;\n  color: var(--fx-text-soft);\n  letter-spacing: 0.02em;\n}\nlabel small {\n  color: #b45353;\n  font-size: 0.55rem;\n  font-weight: 400;\n}\ninput:not([type=search]):not([type=range]):not([type=checkbox]),\nselect,\ntextarea {\n  width: 100%;\n  padding: 0.5rem 0.7rem;\n  background: var(--fx-surface-muted);\n  color: var(--fx-text);\n  border: 1px solid transparent;\n  border-radius: 0.2rem;\n  font-size: 0.7rem;\n  outline: none;\n  transition: all 180ms ease;\n}\ninput:not([type=search]):not([type=range]):not([type=checkbox]):focus,\nselect:focus,\ntextarea:focus {\n  background: var(--fx-surface);\n  border-color: var(--fx-accent);\n  box-shadow: inset 0 -2px 0 var(--fx-accent);\n}\ninput:not([type=search]):not([type=range]):not([type=checkbox])::placeholder,\nselect::placeholder,\ntextarea::placeholder {\n  color: var(--fx-text-muted);\n  font-weight: 350;\n}\ninput:not([type=search]):not([type=range]):not([type=checkbox]),\nselect {\n  min-height: 2.4rem;\n}\ninput[type=file] {\n  padding: 0.3rem;\n}\ninput[type=file]::file-selector-button {\n  min-height: 1.8rem;\n  margin-right: 0.6rem;\n  padding: 0.2rem 0.8rem;\n  background: var(--fx-accent-soft);\n  color: var(--fx-text);\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 0.15rem;\n  font: inherit;\n  font-size: 0.58rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 140ms ease;\n}\ninput[type=file]::file-selector-button:hover {\n  background: var(--fx-accent);\n  color: var(--fx-on-accent);\n}\ninput[type=checkbox] {\n  width: 1rem;\n  height: 1rem;\n  accent-color: var(--fx-accent);\n}\ntextarea {\n  min-height: 5rem;\n  resize: vertical;\n}\n.arquivo-selecionado {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: 0.6rem;\n  padding: 0.5rem 0.7rem;\n  background: var(--fx-accent-soft);\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 0.2rem;\n  font-size: 0.65rem;\n}\n.arquivo-selecionado strong {\n  overflow-wrap: anywhere;\n  font-weight: 500;\n}\n.arquivo-selecionado span {\n  flex: 0 0 auto;\n  color: var(--fx-text-muted);\n}\n.erro-formulario {\n  margin: 0.6rem 0 0;\n  color: #b45353;\n  font-size: 0.65rem;\n}\n.acoes-formulario {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  margin-top: 0.9rem;\n}\nlabel.linha-versao {\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  cursor: pointer;\n}\n.icone-vazio {\n  display: grid;\n  width: 3.4rem;\n  height: 3.4rem;\n  margin-bottom: 0.8rem;\n  place-items: center;\n  color: var(--fx-accent-deep);\n  border: 1px solid var(--fx-rule-soft);\n  border-radius: 50%;\n  font-size: 1.2rem;\n  opacity: 0.4;\n}\n.camada-editor {\n  position: fixed;\n  z-index: 80;\n  inset: 0;\n  display: flex;\n  justify-content: flex-end;\n}\n.fundo-editor {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  background: rgba(0, 0, 0, 0.45);\n  border: 0;\n  border-radius: 0;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.editor-faixa {\n  position: relative;\n  z-index: 1;\n  width: min(38rem, 100%);\n  height: 100%;\n  overflow-y: auto;\n  background: var(--fx-surface);\n  color: var(--fx-text);\n  border-left: 1px solid var(--fx-rule-soft);\n  box-shadow: -0.5rem 0 2rem rgba(0, 0, 0, 0.04);\n  scrollbar-color: var(--fx-rule-soft) transparent;\n  animation: entrar-editor 260ms cubic-bezier(0.2, 0.8, 0.2, 1) both;\n}\n.editor-faixa > header {\n  position: sticky;\n  z-index: 2;\n  top: 0;\n  display: flex;\n  min-height: 4.5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.8rem 1.2rem;\n  background: color-mix(in oklab, var(--fx-surface) 92%, transparent);\n  border-bottom: 1px solid var(--fx-rule-soft);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.editor-faixa > header p {\n  margin: 0;\n  color: var(--fx-accent-deep);\n  font-size: 0.5rem;\n  font-weight: 500;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.editor-faixa h2 {\n  margin: 0.12rem 0 0;\n  font-size: 1.35rem;\n  font-weight: 400;\n  letter-spacing: -0.02em;\n}\n.fechar-editor,\n.fechar-reprodutor {\n  display: grid;\n  width: 2.2rem;\n  height: 2.2rem;\n  min-height: 2.2rem;\n  place-items: center;\n  padding: 0;\n  background: transparent;\n  color: var(--fx-text-muted);\n  border: none;\n  border-radius: 0.1rem;\n  font-size: 1.2rem;\n  transition: all 140ms ease;\n}\n.fechar-editor:hover,\n.fechar-reprodutor:hover {\n  background: var(--fx-accent-soft);\n  color: var(--fx-text);\n}\n.corpo-editor {\n  padding: 1.2rem;\n}\n.campos-editor {\n  display: grid;\n  gap: 0.9rem;\n}\n.campos-menores {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.aviso-projeto {\n  margin-bottom: 0.9rem;\n  padding: 0.8rem;\n  background: color-mix(in oklab, #d4a84a 6%, var(--fx-surface));\n  color: #8a6a2a;\n  border-left: 3px solid #d4a84a;\n  border-radius: 0.15rem;\n}\n.aviso-projeto p {\n  margin: 0 0 0.4rem;\n}\n.aviso-projeto a {\n  color: inherit;\n  font-weight: 500;\n  text-decoration: none;\n  border-bottom: 1px solid transparent;\n}\n.aviso-projeto a:hover {\n  border-bottom-color: currentColor;\n}\n.reprodutor-global {\n  position: fixed;\n  z-index: 70;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: grid;\n  min-height: 5rem;\n  grid-template-columns: minmax(13rem, 0.8fr) minmax(18rem, 1.4fr) auto;\n  align-items: center;\n  gap: 1.2rem;\n  padding: 0.5rem 1.2rem;\n  background: var(--fx-accent-deep);\n  color: var(--fx-on-accent);\n  border-top: 1px solid color-mix(in oklab, var(--fx-accent) 30%, transparent);\n  box-shadow: 0 -2px 16px rgba(0, 0, 0, 0.06);\n  animation: subir-player 260ms cubic-bezier(0.2, 0.8, 0.2, 1) both;\n}\n.musica-reprodutor {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.8rem;\n}\n.musica-reprodutor > span:last-child {\n  display: grid;\n  min-width: 0;\n  gap: 0.06rem;\n}\n.musica-reprodutor strong,\n.musica-reprodutor small {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.musica-reprodutor strong {\n  font-size: 0.76rem;\n  font-weight: 500;\n}\n.musica-reprodutor small {\n  font-size: 0.58rem;\n  opacity: 0.6;\n  font-weight: 400;\n}\n.capa-reprodutor {\n  width: 3rem;\n  height: 3rem;\n  flex: 0 0 auto;\n  border: 1px solid color-mix(in oklab, var(--fx-on-accent) 20%, transparent);\n  border-radius: 0.25rem;\n  font-size: 0.7rem;\n}\n.controles-reprodutor {\n  display: grid;\n  grid-template-columns: auto auto minmax(8rem, 1fr) auto;\n  align-items: center;\n  gap: 0.6rem;\n}\n.alternar-reproducao {\n  display: grid;\n  width: 2.4rem;\n  height: 2.4rem;\n  min-height: 2.4rem;\n  place-items: center;\n  padding: 0;\n  background: var(--fx-on-accent);\n  color: var(--fx-accent-deep);\n  border: 0;\n  border-radius: 0.3rem;\n  transition: all 180ms ease;\n}\n.alternar-reproducao:hover {\n  transform: scale(1.04);\n}\n.tempo-reprodutor {\n  font-size: 0.55rem;\n  font-variant-numeric: tabular-nums;\n  opacity: 0.6;\n}\n.progresso-reprodutor,\n.volume-reprodutor {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.progresso-reprodutor input,\n.volume-reprodutor input {\n  width: 100%;\n  min-height: auto;\n  padding: 0;\n  background: transparent;\n  border: 0;\n  accent-color: var(--fx-accent);\n  box-shadow: none;\n}\n.acoes-reprodutor {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n}\n.volume-reprodutor {\n  width: 6rem;\n  font-size: 0.7rem;\n  opacity: 0.5;\n}\n.fechar-reprodutor {\n  opacity: 0.4;\n}\n.fechar-reprodutor:hover {\n  background: color-mix(in oklab, var(--fx-on-accent) 8%, transparent);\n  color: var(--fx-on-accent);\n  opacity: 1;\n}\n.audio-nativo {\n  display: none;\n}\n@keyframes entrar-pagina {\n  from {\n    opacity: 0;\n    transform: translateY(0.5rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes entrar-detalhe {\n  from {\n    opacity: 0;\n    transform: translateX(0.5rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes marcar-faixa {\n  from {\n    transform: translateX(-0.12rem);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@keyframes entrar-editor {\n  from {\n    opacity: 0;\n    transform: translateX(2rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes subir-player {\n  from {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes revelar-painel {\n  from {\n    opacity: 0;\n    transform: translateY(-0.4rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 74rem) {\n  .pagina-media {\n    padding-right: 1rem;\n    padding-left: 1rem;\n  }\n  .explorer {\n    grid-template-columns: minmax(17rem, 20rem) minmax(0, 1fr);\n    gap: 0.75rem;\n  }\n  .hero-faixa {\n    grid-template-columns: 7.5rem minmax(0, 1fr);\n    gap: 1.25rem;\n    padding: 1.5rem 1.25rem 5rem;\n  }\n  .capa-principal {\n    width: 7.5rem;\n    height: 7.5rem;\n  }\n  .barra-acoes-faixa {\n    right: 1.25rem;\n    bottom: 1.25rem;\n  }\n  .grade-resumo-faixa {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 64rem) {\n  .barra-superior {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 1rem;\n  }\n  .acoes-superiores {\n    flex-wrap: wrap;\n    justify-content: flex-start;\n  }\n  .armazenamento {\n    width: min(20rem, 100%);\n    margin-right: auto;\n  }\n  .explorer {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .lista-faixas {\n    max-height: 24rem;\n  }\n  .pagina-media.com-reprodutor {\n    padding-bottom: 9rem;\n  }\n  .reprodutor-global {\n    grid-template-columns: minmax(0, 1fr) auto;\n    gap: 0.55rem 1rem;\n  }\n  .musica-reprodutor {\n    grid-column: 1;\n  }\n  .controles-reprodutor {\n    grid-column: 1/-1;\n    grid-row: 2;\n  }\n  .acoes-reprodutor {\n    grid-column: 2;\n    grid-row: 1;\n  }\n  .participante-versao {\n    grid-template-columns: minmax(0, 1fr) auto;\n  }\n}\n@media (max-width: 44rem) {\n  .pagina-media {\n    padding: 0.75rem 0.75rem 4rem;\n  }\n  .pagina-media.com-reprodutor {\n    padding-bottom: 9rem;\n  }\n  .barra-superior {\n    margin-bottom: 0.75rem;\n  }\n  .acoes-superiores {\n    gap: 0.5rem;\n  }\n  .hero-faixa {\n    min-height: auto;\n    grid-template-columns: minmax(0, 1fr);\n    gap: 1rem;\n    padding: 1.25rem;\n  }\n  .capa-principal {\n    width: 7rem;\n    height: 7rem;\n  }\n  .informacoes-hero h2 {\n    font-size: clamp(1.8rem, 10vw, 2.6rem);\n  }\n  .barra-acoes-faixa {\n    position: static;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    padding: 0 1.25rem 1.25rem;\n  }\n  .conteudo-faixa {\n    padding: 0.6rem;\n  }\n  .secao-detalhe,\n  .painel-upload {\n    padding: 1rem;\n  }\n  .participante-cabecalho {\n    gap: 0.6rem;\n  }\n  .participante-versoes,\n  .participante-sem-versao {\n    min-width: 5rem;\n  }\n  .participante-detalhes {\n    margin-left: 0.4rem;\n    padding-left: 0.55rem;\n  }\n  .participante-versao {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.5rem;\n  }\n  .participante-versao-acoes {\n    justify-content: flex-start;\n  }\n  .reprodutor-global {\n    padding: 0.6rem 0.75rem;\n  }\n  .capa-reprodutor {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n  .controles-reprodutor {\n    grid-template-columns: auto auto minmax(0, 1fr) auto;\n    gap: 0.45rem;\n  }\n  .volume-reprodutor {\n    display: none;\n  }\n}\n.origem-versao {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  min-width: 10rem;\n}\n.origem-versao strong {\n  font-weight: 600;\n}\n.origem-versao small {\n  font-size: 0.72rem;\n  opacity: 0.55;\n}\n'] }]
  }], null, { reprodutor: [{
    type: ViewChild,
    args: ["reprodutor"]
  }], capaHero: [{
    type: ViewChild,
    args: ["capaHero"]
  }], informacoesHero: [{
    type: ViewChild,
    args: ["informacoesHero"]
  }], acoesHero: [{
    type: ViewChild,
    args: ["acoesHero"]
  }], rastroHero: [{
    type: ViewChild,
    args: ["rastroHero"]
  }], conteudoFaixa: [{
    type: ViewChild,
    args: ["conteudoFaixa"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Faixas, { className: "Faixas", filePath: "apps/studio-dash/src/app/paginas/faixas/faixas.ts", lineNumber: 55 });
})();
export {
  Faixas
};
