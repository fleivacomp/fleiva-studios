import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-OOHEKRNK.js";
import {
  ExperienciaImersivaPublica,
  MotorAudioExperienciaImersiva
} from "./chunk-6OCD2JVM.js";
import {
  Component,
  DadosAcoesBlocoExperienciaImersiva,
  DadosBlocosExperienciaImersiva,
  DadosExperienciasImersivas,
  DadosRecursosExperienciaImersiva,
  ViewChild,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-IMBOO5ID.js";

// apps/studio-dash/src/app/paginas/experiencias-imersivas/experiencias-imersivas.ts
var _c0 = ["reprodutorEditor"];
var _forTrack0 = ($index, $item) => $item.id;
function ExperienciasImersivas_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_For_4_Template_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.abrirExperiencia(item_r2.id));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ativa", ctx_r2.experienciaSelecionadaId() === item_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.nome.charAt(0).toLocaleUpperCase("pt-BR"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.nome, " ");
  }
}
function ExperienciasImersivas_Conditional_7_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.erroExperiencia());
  }
}
function ExperienciasImersivas_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 10)(1, "form", 16);
    \u0275\u0275listener("ngSubmit", function ExperienciasImersivas_Conditional_7_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cadastrarExperiencia());
    });
    \u0275\u0275elementStart(2, "label")(3, "span");
    \u0275\u0275text(4, "NOVA PUBLICA\xC7\xC3O");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 17);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "button", 19);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_7_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelarCriacaoExperiencia());
    });
    \u0275\u0275text(8, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 20);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, ExperienciasImersivas_Conditional_7_Conditional_11_Template, 2, 1, "p", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.formularioExperiencia);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.salvandoExperiencia());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.salvandoExperiencia() ? "Criando..." : "Criar", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.erroExperiencia() ? 11 : -1);
  }
}
function ExperienciasImersivas_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11);
    \u0275\u0275element(1, "span", 22);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Carregando experi\xEAncias...");
    \u0275\u0275elementEnd()();
  }
}
function ExperienciasImersivas_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 12)(1, "p", 23);
    \u0275\u0275text(2, "EXPERI\xCANCIAS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4, "N\xE3o foi poss\xEDvel carregar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.inicializar());
    });
    \u0275\u0275text(8, "Tentar novamente");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.dadosExperiencias.erro());
  }
}
function ExperienciasImersivas_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 13)(1, "p", 23);
    \u0275\u0275text(2, "PUBLICA\xC7\xC3O MULTIM\xCDDIA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4, "Texto conduzindo m\xFAsica.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Crie uma sequ\xEAncia de cenas, escolha os trechos sonoros e decida como cada passagem acontece.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 24);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_10_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.abrirCriacaoExperiencia());
    });
    \u0275\u0275text(8, " Criar primeira experi\xEAncia ");
    \u0275\u0275elementEnd()();
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 37);
    \u0275\u0275listener("ngSubmit", function ExperienciasImersivas_Conditional_11_Conditional_6_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.salvarNomeExperiencia());
    });
    \u0275\u0275element(1, "input", 38);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(2, "div", 18)(3, "button", 19);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancelarRenomeacaoExperiencia());
    });
    \u0275\u0275text(4, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.formularioNomeExperiencia);
    \u0275\u0275advance();
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.salvandoNomeExperiencia());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.salvandoNomeExperiencia() ? "Salvando..." : "Salvar nome", " ");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_7_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.iniciarRenomeacaoExperiencia());
    });
    \u0275\u0275text(4, "Renomear");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const experienciaAtual_r10 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(experienciaAtual_r10.nome);
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.erroExperiencia());
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvando... ");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Retirar publica\xE7\xE3o ");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Publicar ");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.erroPublicacao());
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11);
    \u0275\u0275element(1, "span", 22);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Carregando editor...");
    \u0275\u0275elementEnd()();
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.erroBloco());
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 86);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Imagem opcional");
    \u0275\u0275elementEnd();
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_10_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.retirarImagemBloco());
    });
    \u0275\u0275text(1, "Remover");
    \u0275\u0275elementEnd();
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 84);
    \u0275\u0275listener("ngSubmit", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_10_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.salvarBloco());
    });
    \u0275\u0275elementStart(1, "div", 85);
    \u0275\u0275conditionalCreate(2, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_10_Conditional_2_Template, 1, 1, "img", 86)(3, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_10_Conditional_3_Template, 2, 0, "span");
    \u0275\u0275elementStart(4, "div")(5, "label", 87);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "input", 88, 1);
    \u0275\u0275listener("change", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_10_Template_input_change_7_listener() {
      \u0275\u0275restoreView(_r15);
      const imagemBloco_r16 = \u0275\u0275reference(8);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.selecionarImagemBloco(imagemBloco_r16));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_10_Conditional_9_Template, 2, 0, "button", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "textarea", 90);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(11, "div", 18)(12, "button", 19);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_10_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.cancelarEdicaoBloco());
    });
    \u0275\u0275text(13, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 20);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_19_0;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("formGroup", ctx_r2.formularioBloco);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_19_0 = ctx_r2.urlImagemBloco()) ? 2 : 3, tmp_19_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.urlImagemBloco() ? "Trocar imagem" : "Adicionar imagem", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.urlImagemBloco() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.salvandoBloco());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.salvandoBloco() ? "Salvando..." : "Salvar texto", " ");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 92);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bloco_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bloco_r14.conteudo);
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 93);
    \u0275\u0275text(1, "Cena visual, sem texto.");
    \u0275\u0275elementEnd();
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "p", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_11_Conditional_3_Template, 1, 1, "img", 92);
    \u0275\u0275conditionalCreate(4, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_11_Conditional_4_Template, 2, 1, "pre")(5, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_11_Conditional_5_Template, 2, 0, "p", 93);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_18_0;
    const bloco_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("CENA ", bloco_r14.ordem);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_18_0 = ctx_r2.imagemDoBloco(bloco_r14)) ? 3 : -1, tmp_18_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(bloco_r14.conteudo ? 4 : 5);
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Carregando \xE1udio... ");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Preparando... ");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u25A0 Parar cena ");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_16_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u25B6 Testar cena ");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 94);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const bloco_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.alternarPreviaCena(bloco_r14.id));
    });
    \u0275\u0275conditionalCreate(1, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_16_Conditional_1_Template, 1, 0)(2, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_16_Conditional_2_Template, 1, 0)(3, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_16_Conditional_3_Template, 1, 0)(4, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_16_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bloco_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ativo", ctx_r2.cenaEmPreviaId() === bloco_r14.id);
    \u0275\u0275property("disabled", ctx_r2.preparandoPrevia() || ctx_r2.preparandoRecursosPrevia());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.preparandoRecursosPrevia() ? 1 : ctx_r2.preparandoPrevia() && ctx_r2.cenaPreviaAlvoId() === bloco_r14.id ? 2 : ctx_r2.cenaEmPreviaId() === bloco_r14.id ? 3 : 4);
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 75)(1, "div")(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 95);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_For_18_Template_button_click_8_listener() {
      const acao_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.editarAcao(acao_r21));
    });
    \u0275\u0275text(9, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 91);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_For_18_Template_button_click_10_listener() {
      const acao_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.excluirAcao(acao_r21));
    });
    \u0275\u0275text(11, "Excluir");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const acao_r21 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.rotuloModo(acao_r21.acao));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.recursoNome(acao_r21.recurso_id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.resumoAcao(acao_r21));
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_ForEmpty_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 96);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_ForEmpty_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const bloco_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.abrirNovaAcao(bloco_r14.id));
    });
    \u0275\u0275elementStart(1, "i");
    \u0275\u0275text(2, "\uFF0B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5, "Nenhuma camada entra nesta cena");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "Ela pode ficar assim. O som anterior ainda obedece \xE0 passagem configurada na cena anterior.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "b");
    \u0275\u0275text(9, "Adicionar camada");
    \u0275\u0275elementEnd()();
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "span");
    \u0275\u0275element(2, "i");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 97);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_20_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.avancarPrevia());
    });
    \u0275\u0275text(5, " Pr\xF3xima cena \u2192 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_20_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.pararPrevia());
    });
    \u0275\u0275text(7, "Parar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bloco_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Cena ", bloco_r14.ordem, " tocando");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.temProximaCena(bloco_r14.id));
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.erroPrevia());
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 98);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const bloco_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.abrirNovaAcao(bloco_r14.id));
    });
    \u0275\u0275text(1, " + Adicionar camada sonora ");
    \u0275\u0275elementEnd();
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", ctx);
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const bloco_r14 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.abrirEdicaoTransicao(bloco_r14.id));
    });
    \u0275\u0275text(1, " Ajustar passagem ");
    \u0275\u0275elementEnd();
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106)(1, "span");
    \u0275\u0275text(2, "Dura\xE7\xE3o do fade-out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Conditional_46_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.ajustarDuracaoFadeOut(-0.5));
    });
    \u0275\u0275text(4, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Conditional_46_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.ajustarDuracaoFadeOut(0.5));
    });
    \u0275\u0275text(8, "+");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r2.duracaoFadeOut().toFixed(1), "s");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106)(1, "span");
    \u0275\u0275text(2, "Dura\xE7\xE3o do crossfade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Conditional_47_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.ajustarDuracaoCrossfade(-0.5));
    });
    \u0275\u0275text(4, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Conditional_47_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.ajustarDuracaoCrossfade(0.5));
    });
    \u0275\u0275text(8, "+");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r2.duracaoCrossfade().toFixed(1), "s");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.erroTransicao());
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 102)(2, "span");
    \u0275\u0275text(3, "1 \xB7 Quando o som sai");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 103)(5, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.transicaoAudio.set("terminar-loop"));
    });
    \u0275\u0275elementStart(6, "b");
    \u0275\u0275text(7, "Terminar ciclo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9, "espera o trecho chegar ao OUT antes de sair");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.transicaoAudio.set("corte"));
    });
    \u0275\u0275elementStart(11, "b");
    \u0275\u0275text(12, "Cortar agora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "small");
    \u0275\u0275text(14, "come\xE7a a sa\xEDda assim que a pr\xF3xima cena entra");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.transicaoAudio.set("continuar"));
    });
    \u0275\u0275elementStart(16, "b");
    \u0275\u0275text(17, "Continuar som");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "small");
    \u0275\u0275text(19, "mant\xE9m esta camada tocando sobre a pr\xF3xima cena");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.transicaoAudio.set("cauda"));
    });
    \u0275\u0275elementStart(21, "b");
    \u0275\u0275text(22, "Liberar cauda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "small");
    \u0275\u0275text(24, "para de repetir e deixa o restante do \xE1udio soar");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 102)(26, "span");
    \u0275\u0275text(27, "2 \xB7 Como a sa\xEDda soa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "small", 104);
    \u0275\u0275text(29, "Esta escolha funciona junto com a op\xE7\xE3o acima.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 105)(31, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.acabamentoAudio.set("direto"));
    });
    \u0275\u0275elementStart(32, "b");
    \u0275\u0275text(33, "Direto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "small");
    \u0275\u0275text(35, "sem curva adicional de volume");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.acabamentoAudio.set("fade-out"));
    });
    \u0275\u0275elementStart(37, "b");
    \u0275\u0275text(38, "Fade-out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "small");
    \u0275\u0275text(40, "abaixa esta camada durante a sa\xEDda");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.acabamentoAudio.set("crossfade"));
    });
    \u0275\u0275elementStart(42, "b");
    \u0275\u0275text(43, "Crossfade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "small");
    \u0275\u0275text(45, "mistura a sa\xEDda com a entrada da pr\xF3xima cena");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(46, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Conditional_46_Template, 9, 1, "div", 106);
    \u0275\u0275conditionalCreate(47, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Conditional_47_Template, 9, 1, "div", 106);
    \u0275\u0275conditionalCreate(48, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Conditional_48_Template, 2, 1, "p", 21);
    \u0275\u0275elementStart(49, "footer")(50, "button", 19);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.cancelarEdicaoTransicao());
    });
    \u0275\u0275text(51, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 32);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.salvarTransicaoCena());
    });
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("ativo", ctx_r2.transicaoAudio() === "terminar-loop");
    \u0275\u0275attribute("aria-pressed", ctx_r2.transicaoAudio() === "terminar-loop");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("ativo", ctx_r2.transicaoAudio() === "corte");
    \u0275\u0275attribute("aria-pressed", ctx_r2.transicaoAudio() === "corte");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("ativo", ctx_r2.transicaoAudio() === "continuar");
    \u0275\u0275attribute("aria-pressed", ctx_r2.transicaoAudio() === "continuar");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("ativo", ctx_r2.transicaoAudio() === "cauda");
    \u0275\u0275attribute("aria-pressed", ctx_r2.transicaoAudio() === "cauda");
    \u0275\u0275advance(11);
    \u0275\u0275classProp("ativo", ctx_r2.acabamentoAudio() === "direto");
    \u0275\u0275attribute("aria-pressed", ctx_r2.acabamentoAudio() === "direto");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("ativo", ctx_r2.acabamentoAudio() === "fade-out");
    \u0275\u0275attribute("aria-pressed", ctx_r2.acabamentoAudio() === "fade-out");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("ativo", ctx_r2.acabamentoAudio() === "crossfade");
    \u0275\u0275attribute("aria-pressed", ctx_r2.acabamentoAudio() === "crossfade");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.acabamentoAudio() === "fade-out" ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.acabamentoAudio() === "crossfade" ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.erroTransicao() ? 48 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.salvandoTransicao());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.salvandoTransicao() ? "Salvando..." : "Salvar passagem", " ");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 99)(1, "header")(2, "div")(3, "span");
    \u0275\u0275text(4, "AO AVAN\xC7AR PARA A PR\xD3XIMA CENA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275conditionalCreate(7, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_7_Template, 2, 1, "small");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_8_Template, 2, 0, "button", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Conditional_9_Template, 54, 26, "div", 101);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_19_0;
    const bloco_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("editando", ctx_r2.blocoEditandoTransicaoId() === bloco_r14.id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.rotuloTransicaoCena(bloco_r14.id), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_19_0 = ctx_r2.detalheTransicaoCena(bloco_r14.id)) ? 7 : -1, tmp_19_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.blocoEditandoTransicaoId() !== bloco_r14.id ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.blocoEditandoTransicaoId() === bloco_r14.id ? 9 : -1);
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "strong");
    \u0275\u0275text(2, "Adicione um arquivo em Sons antes de montar esta a\xE7\xE3o.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 35);
    \u0275\u0275text(4, "Ir para Sons \u2193");
    \u0275\u0275elementEnd()();
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_For_9_Template_button_click_0_listener() {
      const recurso_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.selecionarRecurso(recurso_r31.id));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const recurso_r31 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275classProp("ativo", ctx_r2.arquivoSelecionado(recurso_r31));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(recurso_r31.versao_id ? "FAIXA" : "ARQUIVO");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", recurso_r31.nome, " ");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 123);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275classProp("tocando", ctx_r2.testandoTrecho());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.testandoTrecho() ? "LOOP TOCANDO" : "LOOP", " \xB7 ", ctx_r2.formatarTempoPreciso(ctx_r2.duracaoTrecho()), " ");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Preparando \xE1udio...");
    \u0275\u0275elementEnd();
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const pico_r34 = ctx.$implicit;
    \u0275\u0275styleProp("height", pico_r34, "%");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 147);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275styleProp("left", ctx_r2.percentualTempo(ctx_r2.tempoAtual()), "%");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Conditional_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r2 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r2.mostrarFaixaInteira());
    });
    \u0275\u0275text(1, " Ver faixa inteira ");
    \u0275\u0275elementEnd();
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 97);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Conditional_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r2 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r2.ampliarRecorte());
    });
    \u0275\u0275text(1, " Ampliar recorte ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275property("disabled", !ctx_r2.podeAmpliarRecorte());
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 137);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.erroFormaOnda());
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124)(1, "button", 125);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.alternarAudio());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 126)(4, "div", 127, 2);
    \u0275\u0275listener("pointerdown", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_div_pointerdown_4_listener($event) {
      \u0275\u0275restoreView(_r32);
      const waveformArea_r33 = \u0275\u0275reference(5);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.buscarNaFormaOnda($event, waveformArea_r33));
    })("pointermove", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_div_pointermove_4_listener($event) {
      \u0275\u0275restoreView(_r32);
      const waveformArea_r33 = \u0275\u0275reference(5);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.arrastarMarcador($event, waveformArea_r33));
    })("pointerup", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_div_pointerup_4_listener($event) {
      \u0275\u0275restoreView(_r32);
      const waveformArea_r33 = \u0275\u0275reference(5);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.finalizarArrasteMarcador($event, waveformArea_r33));
    })("pointercancel", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_div_pointercancel_4_listener($event) {
      \u0275\u0275restoreView(_r32);
      const waveformArea_r33 = \u0275\u0275reference(5);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.finalizarArrasteMarcador($event, waveformArea_r33));
    });
    \u0275\u0275elementStart(6, "div", 128);
    \u0275\u0275repeaterCreate(7, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_For_8_Template, 1, 2, "i", 129, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div", 130);
    \u0275\u0275conditionalCreate(10, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Conditional_10_Template, 1, 2, "div", 131);
    \u0275\u0275elementStart(11, "button", 132);
    \u0275\u0275listener("pointerdown", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_button_pointerdown_11_listener($event) {
      \u0275\u0275restoreView(_r32);
      const waveformArea_r33 = \u0275\u0275reference(5);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.iniciarArrasteMarcador($event, "inicio", waveformArea_r33));
    })("keydown", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_button_keydown_11_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.ajustarMarcadorTeclado($event, "inicio"));
    });
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "IN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 133);
    \u0275\u0275listener("pointerdown", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_button_pointerdown_16_listener($event) {
      \u0275\u0275restoreView(_r32);
      const waveformArea_r33 = \u0275\u0275reference(5);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.iniciarArrasteMarcador($event, "fim", waveformArea_r33));
    })("keydown", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_button_keydown_16_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.ajustarMarcadorTeclado($event, "fim"));
    });
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "OUT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 134)(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "strong");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 135)(29, "span");
    \u0275\u0275text(30, " TRECHO ");
    \u0275\u0275elementStart(31, "strong");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(33, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Conditional_33_Template, 2, 0, "button", 100)(34, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Conditional_34_Template, 2, 1, "button", 136);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(35, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Conditional_35_Template, 2, 1, "p", 137);
    \u0275\u0275elementStart(36, "div", 138)(37, "span");
    \u0275\u0275text(38, "A waveform define o trecho. Use os controles abaixo somente para ajuste fino.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 139)(40, "b");
    \u0275\u0275text(41, "IN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 140);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.ajustarMarcador("inicio", -0.01));
    });
    \u0275\u0275text(43, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "strong");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 141);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.ajustarMarcador("inicio", 0.01));
    });
    \u0275\u0275text(47, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 142);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.marcarInicio());
    });
    \u0275\u0275text(49, "usar cursor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 139)(51, "b");
    \u0275\u0275text(52, "OUT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 143);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.ajustarMarcador("fim", -0.01));
    });
    \u0275\u0275text(54, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "strong");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 144);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.ajustarMarcador("fim", 0.01));
    });
    \u0275\u0275text(58, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 142);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.marcarFim());
    });
    \u0275\u0275text(60, "usar cursor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "button", 145);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.testarTrecho());
    });
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "audio", 146, 3);
    \u0275\u0275listener("loadedmetadata", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_audio_loadedmetadata_63_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.atualizarMetadados($event));
    })("durationchange", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_audio_durationchange_63_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.atualizarMetadados($event));
    })("timeupdate", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_audio_timeupdate_63_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.atualizarTempo($event));
    })("play", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_audio_play_63_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.audioTocando.set(true));
    })("pause", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_audio_pause_63_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.audioTocando.set(false));
    })("ended", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template_audio_ended_63_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.audioTocando.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.audioTocando() || ctx_r2.testandoTrecho() ? "\u2161" : "\u25B6", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("carregando", ctx_r2.carregandoFormaOnda())("arrastando", ctx_r2.marcadorArrastando())("loop-em-teste", ctx_r2.testandoTrecho() && ctx_r2.modoAudio() === "loop");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.formaOnda());
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("left", ctx_r2.percentualTempo(ctx_r2.inicioTrecho()), "%")("width", ctx_r2.larguraSelecao(), "%");
    \u0275\u0275classProp("em-reproducao", ctx_r2.testandoTrecho());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.tempoNaJanela(ctx_r2.tempoAtual()) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("left", ctx_r2.percentualTempo(ctx_r2.inicioTrecho()), "%");
    \u0275\u0275classProp("ativo", ctx_r2.marcadorArrastando() === "inicio");
    \u0275\u0275attribute("aria-label", "In\xEDcio do trecho em " + ctx_r2.formatarTempo(ctx_r2.inicioTrecho()));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.formatarTempoPreciso(ctx_r2.inicioTrecho()));
    \u0275\u0275advance();
    \u0275\u0275styleProp("left", ctx_r2.percentualTempo(ctx_r2.fimTrecho()), "%");
    \u0275\u0275classProp("ativo", ctx_r2.marcadorArrastando() === "fim");
    \u0275\u0275attribute("aria-label", "Fim do trecho em " + ctx_r2.formatarTempo(ctx_r2.fimTrecho()));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.formatarTempoPreciso(ctx_r2.fimTrecho()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatarTempo(ctx_r2.inicioJanelaFormaOnda()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatarTempo(ctx_r2.tempoAtual()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatarTempo(ctx_r2.fimJanelaFormaOnda() || ctx_r2.duracaoAudio()));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatarTempoPreciso(ctx_r2.duracaoTrecho()));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.waveformAmpliada() ? 33 : 34);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.erroFormaOnda() ? 35 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.formatarTempoPreciso(ctx_r2.inicioTrecho()));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.formatarTempoPreciso(ctx_r2.fimTrecho()));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r2.fimTrecho() <= ctx_r2.inicioTrecho());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.testandoTrecho() ? "\u25A0 Parar" : ctx_r2.modoAudio() === "loop" ? "\u21BB Ouvir loop" : "\u25B6 Ouvir trecho", " ");
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx);
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Escolha um \xE1udio para marcar o trecho.");
    \u0275\u0275elementEnd();
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106)(1, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_56_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.ajustarDuracaoFadeIn(-0.5));
    });
    \u0275\u0275text(2, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_56_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.ajustarDuracaoFadeIn(0.5));
    });
    \u0275\u0275text(6, "+");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.duracaoFadeIn().toFixed(1), "s");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.erroAcao());
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 109)(1, "div", 110)(2, "span", 111);
    \u0275\u0275text(3, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "strong");
    \u0275\u0275text(6, "Escolha o \xE1udio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 112);
    \u0275\u0275repeaterCreate(8, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_For_9_Template, 4, 4, "button", 113, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 110)(11, "span", 111);
    \u0275\u0275text(12, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "strong");
    \u0275\u0275text(15, "Escolha como toca");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 114)(17, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.definirModo("loop"));
    });
    \u0275\u0275elementStart(18, "b");
    \u0275\u0275text(19, "Loop");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "small");
    \u0275\u0275text(21, "repete o recorte enquanto a cena estiver ativa");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.definirModo("tocar"));
    });
    \u0275\u0275elementStart(23, "b");
    \u0275\u0275text(24, "Tocar uma vez");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "small");
    \u0275\u0275text(26, "linha, frase ou textura tocada uma vez");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.definirModo("one-shot"));
    });
    \u0275\u0275elementStart(28, "b");
    \u0275\u0275text(29, "One-shot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "small");
    \u0275\u0275text(31, "hit ou efeito curto disparado na entrada");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(32, "div", 110)(33, "span", 111);
    \u0275\u0275text(34, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 115)(36, "div", 116)(37, "div")(38, "strong");
    \u0275\u0275text(39, "Recorte diretamente na waveform");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "Arraste IN e OUT. Ou\xE7a o resultado sem precisar calcular segundos.");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(42, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_42_Template, 2, 4, "span", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(43, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_43_Template, 2, 0, "p")(44, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_44_Template, 65, 37)(45, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_45_Template, 2, 0, "p");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 118)(47, "div", 119)(48, "span");
    \u0275\u0275text(49, "Volume da camada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 120);
    \u0275\u0275listener("input", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Template_input_input_50_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.definirVolumeDb($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "strong");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "button", 121);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.fadeInAtivo.set(!ctx_r2.fadeInAtivo()));
    });
    \u0275\u0275element(54, "span");
    \u0275\u0275text(55, " Fade-in na entrada ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(56, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_56_Template, 7, 1, "div", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(57, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Conditional_57_Template, 2, 1, "p", 21);
    \u0275\u0275elementStart(58, "footer", 122)(59, "button", 19);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.fecharEditorAcao());
    });
    \u0275\u0275text(60, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 32);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.salvarAcao());
    });
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_26_0;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r2.dadosRecursos.recursos());
    \u0275\u0275advance(9);
    \u0275\u0275classProp("ativo", ctx_r2.modoAudio() === "loop");
    \u0275\u0275attribute("aria-pressed", ctx_r2.modoAudio() === "loop");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("ativo", ctx_r2.modoAudio() === "tocar");
    \u0275\u0275attribute("aria-pressed", ctx_r2.modoAudio() === "tocar");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("ativo", ctx_r2.modoAudio() === "one-shot");
    \u0275\u0275attribute("aria-pressed", ctx_r2.modoAudio() === "one-shot");
    \u0275\u0275advance(15);
    \u0275\u0275conditional(ctx_r2.modoAudio() === "loop" && ctx_r2.fimTrecho() > ctx_r2.inicioTrecho() ? 42 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.carregandoAudio() ? 43 : (tmp_26_0 = ctx_r2.urlAudio()) ? 44 : 45, tmp_26_0);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r2.volumeDb());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.rotuloVolumeDb());
    \u0275\u0275advance();
    \u0275\u0275classProp("ativo", ctx_r2.fadeInAtivo());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.fadeInAtivo() ? 56 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.erroAcao() ? 57 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.salvandoAcao());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.salvandoAcao() ? "Salvando..." : "Salvar a\xE7\xE3o sonora", " ");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 83)(1, "header")(2, "div")(3, "p", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 107);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.fecharEditorAcao());
    });
    \u0275\u0275text(8, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_9_Template, 5, 0, "div", 108)(10, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Conditional_10_Template, 63, 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bloco_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("DESIGN DE SOM \xB7 CENA ", bloco_r14.ordem);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.acaoEditandoId() ? "Editar a\xE7\xE3o" : "Nova a\xE7\xE3o");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.dadosRecursos.recursos().length === 0 ? 9 : 10);
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 64)(1, "aside", 65)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "button", 66);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Template_button_click_5_listener() {
      const bloco_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.moverBloco(bloco_r14.id, -1));
    });
    \u0275\u0275text(6, "\u2191");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 67);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Template_button_click_7_listener() {
      const bloco_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.moverBloco(bloco_r14.id, 1));
    });
    \u0275\u0275text(8, "\u2193");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 68);
    \u0275\u0275conditionalCreate(10, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_10_Template, 16, 6, "form", 69)(11, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_11_Template, 6, 3, "div", 70);
    \u0275\u0275elementStart(12, "div", 71)(13, "header", 72)(14, "span", 73);
    \u0275\u0275text(15, "AO APARECER");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_16_Template, 5, 4, "button", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(17, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_For_18_Template, 12, 3, "article", 75, _forTrack0, false, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_ForEmpty_19_Template, 10, 0, "button", 76);
    \u0275\u0275conditionalCreate(20, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_20_Template, 8, 2, "div", 77);
    \u0275\u0275conditionalCreate(21, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_21_Template, 2, 1, "p", 78);
    \u0275\u0275conditionalCreate(22, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_22_Template, 2, 0, "button", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_23_Template, 10, 6, "section", 80);
    \u0275\u0275elementStart(24, "footer", 81)(25, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Template_button_click_25_listener() {
      const bloco_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.iniciarEdicaoBloco(bloco_r14));
    });
    \u0275\u0275text(26, "Editar conte\xFAdo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 82);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Template_button_click_27_listener() {
      const bloco_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.excluirBloco(bloco_r14));
    });
    \u0275\u0275text(28, "Excluir bloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(29, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Conditional_29_Template, 11, 3, "section", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bloco_r14 = ctx.$implicit;
    const \u0275$index_203_r38 = ctx.$index;
    const \u0275$count_203_r39 = ctx.$count;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("com-editor", ctx_r2.blocoComEditorId() === bloco_r14.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(bloco_r14.ordem.toString().padStart(2, "0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", \u0275$index_203_r38 === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", \u0275$index_203_r38 === \u0275$count_203_r39 - 1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.blocoEditandoId() === bloco_r14.id ? 10 : 11);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.acoesDoBloco(bloco_r14.id).length > 0 ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.acoesDoBloco(bloco_r14.id));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.cenaEmPreviaId() === bloco_r14.id ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.erroPrevia() && ctx_r2.cenaPreviaAlvoId() === bloco_r14.id ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.acoesDoBloco(bloco_r14.id).length > 0 ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_203_r38 === \u0275$count_203_r39 - 1) && ctx_r2.acoesDoBloco(bloco_r14.id).length > 0 ? 23 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.blocoComEditorId() === bloco_r14.id ? 29 : -1);
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_ForEmpty_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "strong");
    \u0275\u0275text(2, "O roteiro ainda est\xE1 vazio.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Comece pela primeira cena. A ordem ser\xE1 montada automaticamente.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_ForEmpty_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.abrirNovoBloco());
    });
    \u0275\u0275text(6, " Criar primeira cena ");
    \u0275\u0275elementEnd()();
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_16_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 86);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_16_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Imagem opcional");
    \u0275\u0275elementEnd();
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_16_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_16_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.retirarImagemBloco());
    });
    \u0275\u0275text(1, "Remover");
    \u0275\u0275elementEnd();
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 44)(1, "p", 23);
    \u0275\u0275text(2, "NOVA CENA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 16);
    \u0275\u0275listener("ngSubmit", function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_16_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.salvarBloco());
    });
    \u0275\u0275elementStart(4, "div", 85);
    \u0275\u0275conditionalCreate(5, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_16_Conditional_5_Template, 1, 1, "img", 86)(6, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_16_Conditional_6_Template, 2, 0, "span");
    \u0275\u0275elementStart(7, "div")(8, "label", 87);
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "input", 88, 4);
    \u0275\u0275listener("change", function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_16_Template_input_change_10_listener() {
      \u0275\u0275restoreView(_r40);
      const imagemNovoBloco_r41 = \u0275\u0275reference(11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selecionarImagemBloco(imagemNovoBloco_r41));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_16_Conditional_12_Template, 2, 0, "button", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "textarea", 148);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(14, "div", 18)(15, "button", 19);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_16_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.cancelarEdicaoBloco());
    });
    \u0275\u0275text(16, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 20);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.formularioBloco);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_7_0 = ctx_r2.urlImagemBloco()) ? 5 : 6, tmp_7_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.urlImagemBloco() ? "Trocar imagem" : "Adicionar imagem", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.urlImagemBloco() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.salvandoBloco());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.salvandoBloco() ? "Criando..." : "Adicionar \xE0 sequ\xEAncia", " ");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.erroRecurso());
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_57_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Carregando vers\xF5es...");
    \u0275\u0275elementEnd();
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_57_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.dadosRecursos.erroVersoes());
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_57_Conditional_3_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Adicionada ");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_57_Conditional_3_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Adicionando... ");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_57_Conditional_3_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Usar ");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_57_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article")(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 97);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_57_Conditional_3_For_1_Template_button_click_6_listener() {
      const versao_r45 = \u0275\u0275restoreView(_r44).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.vincularVersao(versao_r45));
    });
    \u0275\u0275conditionalCreate(7, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_57_Conditional_3_For_1_Conditional_7_Template, 1, 0)(8, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_57_Conditional_3_For_1_Conditional_8_Template, 1, 0)(9, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_57_Conditional_3_For_1_Conditional_9_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const versao_r45 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(versao_r45.faixa_titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", versao_r45.versao, " \xB7 ", versao_r45.nome_arquivo);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.versaoJaVinculada(versao_r45.id) || ctx_r2.vinculandoVersaoId() === versao_r45.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.versaoJaVinculada(versao_r45.id) ? 7 : ctx_r2.vinculandoVersaoId() === versao_r45.id ? 8 : 9);
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_57_Conditional_3_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Nenhuma vers\xE3o de faixa confirmada.");
    \u0275\u0275elementEnd();
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_57_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_57_Conditional_3_For_1_Template, 10, 5, "article", null, _forTrack0, false, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_57_Conditional_3_ForEmpty_2_Template, 2, 0, "p");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275repeater(ctx_r2.dadosRecursos.versoesDisponiveis());
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275conditionalCreate(1, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_57_Conditional_1_Template, 2, 0, "p")(2, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_57_Conditional_2_Template, 2, 1, "p", 21)(3, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_57_Conditional_3_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.dadosRecursos.carregandoVersoes() ? 1 : ctx_r2.dadosRecursos.erroVersoes() ? 2 : 3);
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_For_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article")(1, "span", 149);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 150);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_For_60_Template_button_click_12_listener() {
      const recurso_r47 = \u0275\u0275restoreView(_r46).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.excluirRecurso(recurso_r47));
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const recurso_r47 = ctx.$implicit;
    const \u0275$index_914_r48 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((\u0275$index_914_r48 + 1).toString().padStart(2, "0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(recurso_r47.versao_id ? "VERS\xC3O DE FAIXA" : "ARQUIVO PR\xD3PRIO");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(recurso_r47.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(recurso_r47.nome_arquivo || "Arquivo vinculado \xE0 faixa");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", recurso_r47.confirmado_em || recurso_r47.versao_id ? "PRONTO" : "PROCESSANDO", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.excluindoRecursoId() === recurso_r47.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.excluindoRecursoId() === recurso_r47.id ? "Excluindo..." : "Excluir", " ");
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_ForEmpty_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "strong");
    \u0275\u0275text(2, "Nenhum som adicionado.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Os arquivos enviados aqui ficam dispon\xEDveis para todos os blocos desta experi\xEAncia.");
    \u0275\u0275elementEnd()();
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_80_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Carregando trabalhos...");
    \u0275\u0275elementEnd();
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_80_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.dadosExperiencias.erroAlbuns());
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_80_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 97);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_80_Conditional_8_For_1_Template_button_click_0_listener() {
      const album_r51 = \u0275\u0275restoreView(_r50).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.definirAlbum(album_r51.id));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const album_r51 = ctx.$implicit;
    const experienciaAtual_r10 = \u0275\u0275nextContext(4);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ativo", experienciaAtual_r10.album_id === album_r51.id);
    \u0275\u0275property("disabled", ctx_r2.salvandoAlbum());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(album_r51.tipo_publico || "TRABALHO");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(album_r51.nome);
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_80_Conditional_8_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Nenhum trabalho publicado dispon\xEDvel.");
    \u0275\u0275elementEnd();
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_80_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_80_Conditional_8_For_1_Template, 5, 5, "button", 151, _forTrack0, false, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_80_Conditional_8_ForEmpty_2_Template, 2, 0, "p");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275repeater(ctx_r2.dadosExperiencias.albunsDisponiveis());
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "button", 97);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_80_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.definirAlbum(null));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "INDEPENDENTE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "Sem trabalho vinculado");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_80_Conditional_6_Template, 2, 0, "p")(7, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_80_Conditional_7_Template, 2, 1, "p", 21)(8, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_80_Conditional_8_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const experienciaAtual_r10 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("ativo", !experienciaAtual_r10.album_id);
    \u0275\u0275property("disabled", ctx_r2.salvandoAlbum());
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.dadosExperiencias.carregandoAlbuns() ? 6 : ctx_r2.dadosExperiencias.erroAlbuns() ? 7 : 8);
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.erroExperiencia());
  }
}
function ExperienciasImersivas_Conditional_11_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 39)(1, "header", 40)(2, "div")(3, "p", 23);
    \u0275\u0275text(4, "SEQU\xCANCIA DE LEITURA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Roteiro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Cada bloco \xE9 uma cena. O scroll avan\xE7a o som junto com o texto.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 19);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.abrirNovoBloco());
    });
    \u0275\u0275text(10, " + Adicionar bloco ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_11_Template, 2, 1, "p", 21);
    \u0275\u0275elementStart(12, "div", 41);
    \u0275\u0275repeaterCreate(13, ExperienciasImersivas_Conditional_11_Conditional_42_For_14_Template, 30, 13, "article", 42, _forTrack0, false, ExperienciasImersivas_Conditional_11_Conditional_42_ForEmpty_15_Template, 7, 0, "div", 43);
    \u0275\u0275conditionalCreate(16, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_16_Template, 19, 6, "article", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "section", 45)(18, "header", 40)(19, "div")(20, "p", 23);
    \u0275\u0275text(21, "MAT\xC9RIA-PRIMA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "h2");
    \u0275\u0275text(23, "Sons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "Faixas completas, loops, ambi\xEAncias e efeitos usados no roteiro.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 46)(27, "div", 47)(28, "form", 48);
    \u0275\u0275listener("ngSubmit", function ExperienciasImersivas_Conditional_11_Conditional_42_Template_form_ngSubmit_28_listener() {
      \u0275\u0275restoreView(_r11);
      const arquivoRecurso_r43 = \u0275\u0275reference(44);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.enviarRecurso(arquivoRecurso_r43));
    });
    \u0275\u0275elementStart(29, "div")(30, "p", 23);
    \u0275\u0275text(31, "NOVO ARQUIVO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "h3");
    \u0275\u0275text(33, "Adicionar som");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35, "Use qualquer dura\xE7\xE3o. O recorte acontece depois, dentro da cena.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "label")(37, "span");
    \u0275\u0275text(38, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 49);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "label", 50)(41, "span");
    \u0275\u0275text(42, "Arquivo de \xE1udio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 51, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 20);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(47, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_47_Template, 2, 1, "p", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "section", 52)(49, "button", 53);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.alternarSelecaoVersao());
    });
    \u0275\u0275elementStart(50, "span")(51, "small");
    \u0275\u0275text(52, "SEM NOVO UPLOAD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "strong");
    \u0275\u0275text(54, "Usar vers\xE3o de faixa");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "b");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(57, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_57_Template, 4, 1, "div", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 55);
    \u0275\u0275repeaterCreate(59, ExperienciasImersivas_Conditional_11_Conditional_42_For_60_Template, 14, 7, "article", null, _forTrack0, false, ExperienciasImersivas_Conditional_11_Conditional_42_ForEmpty_61_Template, 5, 0, "div", 56);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "section", 57)(63, "header", 40)(64, "div")(65, "p", 23);
    \u0275\u0275text(66, "PLAY FL\xCAIVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "h2");
    \u0275\u0275text(68, "Publica\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span");
    \u0275\u0275text(70, "O leitor p\xFAblico mant\xE9m o texto simples e executa a sequ\xEAncia sonora no scroll.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "section", 58)(72, "button", 59);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.alternarEscolhaAlbum());
    });
    \u0275\u0275elementStart(73, "span")(74, "small");
    \u0275\u0275text(75, "TRABALHO RELACIONADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "strong");
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "b");
    \u0275\u0275text(79);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(80, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_80_Template, 9, 4, "div", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 61)(82, "div")(83, "span", 62);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "strong");
    \u0275\u0275text(86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "p");
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 18)(90, "button", 63);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_Template_button_click_90_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.excluirExperiencia());
    });
    \u0275\u0275text(91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "button", 19);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_Template_button_click_92_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.abrirTesteLeitura());
    });
    \u0275\u0275text(93, " Testar leitura ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "button", 32);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Conditional_42_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.alternarPublicacao());
    });
    \u0275\u0275text(95);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(96, ExperienciasImersivas_Conditional_11_Conditional_42_Conditional_96_Template, 2, 1, "p", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const experienciaAtual_r10 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r2.erroBloco() ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.dadosBlocos.blocos());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.criandoBloco() ? 16 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275property("formGroup", ctx_r2.formularioRecurso);
    \u0275\u0275advance(11);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r2.enviandoRecurso());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.enviandoRecurso() ? "Enviando..." : "Adicionar \xE0 biblioteca", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.erroRecurso() ? 47 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.selecionandoVersao() ? "\u2212" : "+");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selecionandoVersao() ? 57 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.dadosRecursos.recursos());
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate(ctx_r2.nomeAlbumVinculado());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.escolhendoAlbum() ? "\u2212" : "Alterar");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.escolhendoAlbum() ? 80 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("publicada", experienciaAtual_r10.publicada_em);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", experienciaAtual_r10.publicada_em ? "PUBLICADA" : "RASCUNHO", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(experienciaAtual_r10.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.dadosBlocos.blocos().length, " cenas \xB7 ", ctx_r2.dadosAcoes.acoes().length, " a\xE7\xF5es sonoras");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.excluindoExperiencia());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.excluindoExperiencia() ? "Excluindo..." : "Excluir experi\xEAncia", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.alterandoPublicacao());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", experienciaAtual_r10.publicada_em ? "Retirar publica\xE7\xE3o" : "Publicar experi\xEAncia", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.erroExperiencia() ? 96 : -1);
  }
}
function ExperienciasImersivas_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 25)(1, "div", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27)(4, "p", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ExperienciasImersivas_Conditional_11_Conditional_6_Template, 7, 3, "form", 28)(7, ExperienciasImersivas_Conditional_11_Conditional_7_Template, 5, 1, "div", 29);
    \u0275\u0275elementStart(8, "div", 30)(9, "span")(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " blocos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span")(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " recursos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span")(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " a\xE7\xF5es");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(21, ExperienciasImersivas_Conditional_11_Conditional_21_Template, 2, 1, "p", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 31)(23, "button", 19);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.abrirTesteLeitura());
    });
    \u0275\u0275text(24, " Testar leitura ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 32);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_11_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.alternarPublicacao());
    });
    \u0275\u0275conditionalCreate(26, ExperienciasImersivas_Conditional_11_Conditional_26_Template, 1, 0)(27, ExperienciasImersivas_Conditional_11_Conditional_27_Template, 1, 0)(28, ExperienciasImersivas_Conditional_11_Conditional_28_Template, 1, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "nav", 33)(30, "a", 34);
    \u0275\u0275text(31, "Roteiro ");
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "a", 35);
    \u0275\u0275text(35, "Sons ");
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "a", 36);
    \u0275\u0275text(39, "Publica\xE7\xE3o");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(40, ExperienciasImersivas_Conditional_11_Conditional_40_Template, 2, 1, "p", 21);
    \u0275\u0275conditionalCreate(41, ExperienciasImersivas_Conditional_11_Conditional_41_Template, 4, 0, "section", 11)(42, ExperienciasImersivas_Conditional_11_Conditional_42_Template, 97, 24);
  }
  if (rf & 2) {
    const experienciaAtual_r10 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", experienciaAtual_r10.nome.charAt(0).toLocaleUpperCase("pt-BR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" EXPERI\xCANCIA IMERSIVA \xB7 ", experienciaAtual_r10.publicada_em ? "PUBLICADA" : "RASCUNHO", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.renomeandoExperiencia() ? 6 : 7);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.dadosBlocos.blocos().length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.dadosRecursos.recursos().length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.dadosAcoes.acoes().length);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.erroExperiencia() ? 21 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.alterandoPublicacao());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.alterandoPublicacao() ? 26 : experienciaAtual_r10.publicada_em ? 27 : 28);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.dadosBlocos.blocos().length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.dadosRecursos.recursos().length);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.erroPublicacao() ? 40 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.dadosBlocos.carregando() || ctx_r2.dadosRecursos.carregando() || ctx_r2.dadosAcoes.carregando() ? 41 : 42);
  }
}
function ExperienciasImersivas_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 14)(1, "header", 152)(2, "div")(3, "span");
    \u0275\u0275text(4, "MODO DE TESTE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 15);
    \u0275\u0275listener("click", function ExperienciasImersivas_Conditional_12_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r52);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.fecharTesteLeitura());
    });
    \u0275\u0275text(8, " Voltar \xE0 edi\xE7\xE3o ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 153);
    \u0275\u0275element(10, "app-experiencia-imersiva-publica", 154);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const experienciaEmTeste_r53 = ctx;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(experienciaEmTeste_r53.nome);
    \u0275\u0275advance(4);
    \u0275\u0275property("experienciaIdEntrada", experienciaEmTeste_r53.id)("modoTesteEntrada", true)("integrado", true);
  }
}
var ExperienciasImersivas = class _ExperienciasImersivas {
  dadosExperiencias = inject(DadosExperienciasImersivas);
  dadosBlocos = inject(DadosBlocosExperienciaImersiva);
  dadosRecursos = inject(DadosRecursosExperienciaImersiva);
  dadosAcoes = inject(DadosAcoesBlocoExperienciaImersiva);
  motorPrevia = inject(MotorAudioExperienciaImersiva);
  formularios = inject(FormBuilder);
  reprodutor = viewChild(
    "reprodutorEditor",
    ...ngDevMode ? [{ debugName: "reprodutor" }] : (
      /* istanbul ignore next */
      []
    )
  );
  experienciaSelecionadaId = signal(
    "",
    ...ngDevMode ? [{ debugName: "experienciaSelecionadaId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  criandoExperiencia = signal(
    false,
    ...ngDevMode ? [{ debugName: "criandoExperiencia" }] : (
      /* istanbul ignore next */
      []
    )
  );
  criandoBloco = signal(
    false,
    ...ngDevMode ? [{ debugName: "criandoBloco" }] : (
      /* istanbul ignore next */
      []
    )
  );
  blocoEditandoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "blocoEditandoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  blocoComEditorId = signal(
    null,
    ...ngDevMode ? [{ debugName: "blocoComEditorId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  acaoEditandoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "acaoEditandoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  blocoEditandoTransicaoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "blocoEditandoTransicaoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  alterandoPublicacao = signal(
    false,
    ...ngDevMode ? [{ debugName: "alterandoPublicacao" }] : (
      /* istanbul ignore next */
      []
    )
  );
  salvandoExperiencia = signal(
    false,
    ...ngDevMode ? [{ debugName: "salvandoExperiencia" }] : (
      /* istanbul ignore next */
      []
    )
  );
  salvandoBloco = signal(
    false,
    ...ngDevMode ? [{ debugName: "salvandoBloco" }] : (
      /* istanbul ignore next */
      []
    )
  );
  enviandoRecurso = signal(
    false,
    ...ngDevMode ? [{ debugName: "enviandoRecurso" }] : (
      /* istanbul ignore next */
      []
    )
  );
  salvandoAcao = signal(
    false,
    ...ngDevMode ? [{ debugName: "salvandoAcao" }] : (
      /* istanbul ignore next */
      []
    )
  );
  salvandoTransicao = signal(
    false,
    ...ngDevMode ? [{ debugName: "salvandoTransicao" }] : (
      /* istanbul ignore next */
      []
    )
  );
  carregandoAudio = signal(
    false,
    ...ngDevMode ? [{ debugName: "carregandoAudio" }] : (
      /* istanbul ignore next */
      []
    )
  );
  excluindoRecursoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "excluindoRecursoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selecionandoVersao = signal(
    false,
    ...ngDevMode ? [{ debugName: "selecionandoVersao" }] : (
      /* istanbul ignore next */
      []
    )
  );
  vinculandoVersaoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "vinculandoVersaoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  excluindoExperiencia = signal(
    false,
    ...ngDevMode ? [{ debugName: "excluindoExperiencia" }] : (
      /* istanbul ignore next */
      []
    )
  );
  renomeandoExperiencia = signal(
    false,
    ...ngDevMode ? [{ debugName: "renomeandoExperiencia" }] : (
      /* istanbul ignore next */
      []
    )
  );
  salvandoNomeExperiencia = signal(
    false,
    ...ngDevMode ? [{ debugName: "salvandoNomeExperiencia" }] : (
      /* istanbul ignore next */
      []
    )
  );
  escolhendoAlbum = signal(
    false,
    ...ngDevMode ? [{ debugName: "escolhendoAlbum" }] : (
      /* istanbul ignore next */
      []
    )
  );
  salvandoAlbum = signal(
    false,
    ...ngDevMode ? [{ debugName: "salvandoAlbum" }] : (
      /* istanbul ignore next */
      []
    )
  );
  arquivoImagemBloco = signal(
    null,
    ...ngDevMode ? [{ debugName: "arquivoImagemBloco" }] : (
      /* istanbul ignore next */
      []
    )
  );
  urlImagemBloco = signal(
    null,
    ...ngDevMode ? [{ debugName: "urlImagemBloco" }] : (
      /* istanbul ignore next */
      []
    )
  );
  removerImagemBloco = signal(
    false,
    ...ngDevMode ? [{ debugName: "removerImagemBloco" }] : (
      /* istanbul ignore next */
      []
    )
  );
  imagensBlocos = signal(
    {},
    ...ngDevMode ? [{ debugName: "imagensBlocos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroExperiencia = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroExperiencia" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroBloco = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroBloco" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroPublicacao = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroPublicacao" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroRecurso = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroRecurso" }] : (
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
  erroTransicao = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroTransicao" }] : (
      /* istanbul ignore next */
      []
    )
  );
  recursoAcaoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "recursoAcaoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  modoAudio = signal(
    "loop",
    ...ngDevMode ? [{ debugName: "modoAudio" }] : (
      /* istanbul ignore next */
      []
    )
  );
  transicaoAudio = signal(
    "terminar-loop",
    ...ngDevMode ? [{ debugName: "transicaoAudio" }] : (
      /* istanbul ignore next */
      []
    )
  );
  acabamentoAudio = signal(
    "direto",
    ...ngDevMode ? [{ debugName: "acabamentoAudio" }] : (
      /* istanbul ignore next */
      []
    )
  );
  fadeInAtivo = signal(
    false,
    ...ngDevMode ? [{ debugName: "fadeInAtivo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  duracaoFadeIn = signal(
    2,
    ...ngDevMode ? [{ debugName: "duracaoFadeIn" }] : (
      /* istanbul ignore next */
      []
    )
  );
  volumeDb = signal(
    0,
    ...ngDevMode ? [{ debugName: "volumeDb" }] : (
      /* istanbul ignore next */
      []
    )
  );
  duracaoCrossfade = signal(
    2,
    ...ngDevMode ? [{ debugName: "duracaoCrossfade" }] : (
      /* istanbul ignore next */
      []
    )
  );
  duracaoFadeOut = signal(
    2,
    ...ngDevMode ? [{ debugName: "duracaoFadeOut" }] : (
      /* istanbul ignore next */
      []
    )
  );
  duracaoCauda = signal(
    null,
    ...ngDevMode ? [{ debugName: "duracaoCauda" }] : (
      /* istanbul ignore next */
      []
    )
  );
  inicioTrecho = signal(
    0,
    ...ngDevMode ? [{ debugName: "inicioTrecho" }] : (
      /* istanbul ignore next */
      []
    )
  );
  fimTrecho = signal(
    0,
    ...ngDevMode ? [{ debugName: "fimTrecho" }] : (
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
  duracaoAudio = signal(
    0,
    ...ngDevMode ? [{ debugName: "duracaoAudio" }] : (
      /* istanbul ignore next */
      []
    )
  );
  urlAudio = signal(
    null,
    ...ngDevMode ? [{ debugName: "urlAudio" }] : (
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
  testandoTrecho = signal(
    false,
    ...ngDevMode ? [{ debugName: "testandoTrecho" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formaOnda = signal(
    [],
    ...ngDevMode ? [{ debugName: "formaOnda" }] : (
      /* istanbul ignore next */
      []
    )
  );
  carregandoFormaOnda = signal(
    false,
    ...ngDevMode ? [{ debugName: "carregandoFormaOnda" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroFormaOnda = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroFormaOnda" }] : (
      /* istanbul ignore next */
      []
    )
  );
  marcadorArrastando = signal(
    null,
    ...ngDevMode ? [{ debugName: "marcadorArrastando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  inicioJanelaFormaOnda = signal(
    0,
    ...ngDevMode ? [{ debugName: "inicioJanelaFormaOnda" }] : (
      /* istanbul ignore next */
      []
    )
  );
  fimJanelaFormaOnda = signal(
    0,
    ...ngDevMode ? [{ debugName: "fimJanelaFormaOnda" }] : (
      /* istanbul ignore next */
      []
    )
  );
  waveformAmpliada = signal(
    false,
    ...ngDevMode ? [{ debugName: "waveformAmpliada" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cenaEmPreviaId = signal(
    null,
    ...ngDevMode ? [{ debugName: "cenaEmPreviaId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cenaPreviaAlvoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "cenaPreviaAlvoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  preparandoPrevia = signal(
    false,
    ...ngDevMode ? [{ debugName: "preparandoPrevia" }] : (
      /* istanbul ignore next */
      []
    )
  );
  preparandoRecursosPrevia = signal(
    false,
    ...ngDevMode ? [{ debugName: "preparandoRecursosPrevia" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroPrevia = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroPrevia" }] : (
      /* istanbul ignore next */
      []
    )
  );
  testandoLeitura = signal(
    false,
    ...ngDevMode ? [{ debugName: "testandoLeitura" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cargaFormaOndaAtual = 0;
  picosFormaOndaCompletos = [];
  contextoAudioEditor = null;
  bufferAudioEditor = null;
  fonteTesteTrecho = null;
  ganhoVolumeTesteTrecho = null;
  ganhoEnvelopeTesteTrecho = null;
  quadroTempoTeste = null;
  tempoBaseTeste = 0;
  contextoBaseTeste = 0;
  cargaRecursosPreviaAtual = 0;
  recursosPrevia = [];
  blocoTransicaoPreviaAtualId = null;
  transicaoPreviaAtual = "corte";
  duracaoCrossfadePreviaAtual = 0;
  duracaoFadeOutPreviaAtual = 0;
  duracaoCaudaPreviaAtual = null;
  transicaoPreviaPendente = null;
  urlImagemBlocoLocal = null;
  overflowCorpoAntesTeste = null;
  experiencia = computed(
    () => this.dadosExperiencias.experiencias().find((item) => item.id === this.experienciaSelecionadaId()) ?? null,
    ...ngDevMode ? [{ debugName: "experiencia" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formularioExperiencia = this.formularios.group({
    nome: this.formularios.nonNullable.control("", [Validators.required])
  });
  formularioNomeExperiencia = this.formularios.group({
    nome: this.formularios.nonNullable.control("", [Validators.required])
  });
  formularioBloco = this.formularios.group({
    conteudo: this.formularios.nonNullable.control("")
  });
  formularioRecurso = this.formularios.group({
    nome: this.formularios.nonNullable.control("", [Validators.required])
  });
  ngOnInit() {
    void this.inicializar();
  }
  ngOnDestroy() {
    this.restaurarRolagemDaPagina();
    this.liberarUrlImagemLocal();
    this.encerrarAudioEditor();
    void this.motorPrevia.encerrar();
  }
  async inicializar() {
    await this.dadosExperiencias.listar();
    const primeira = this.dadosExperiencias.experiencias()[0];
    if (primeira)
      await this.abrirExperiencia(primeira.id);
  }
  async abrirExperiencia(experienciaId) {
    this.fecharEditorAcao();
    this.cancelarEdicaoTransicao();
    this.cancelarEdicaoBloco();
    await this.encerrarPrevia();
    this.experienciaSelecionadaId.set(experienciaId);
    await this.carregarExperiencia();
  }
  async carregarExperiencia() {
    const experienciaId = this.experienciaSelecionadaId();
    if (!experienciaId)
      return;
    await Promise.all([
      this.dadosExperiencias.listar(),
      this.dadosExperiencias.listarAlbunsDisponiveis(),
      this.dadosBlocos.listar(experienciaId),
      this.dadosRecursos.listar(experienciaId),
      this.dadosAcoes.listarDaExperiencia(experienciaId)
    ]);
    await this.carregarImagensBlocos();
    void this.prepararRecursosPrevia().catch(() => void 0);
  }
  abrirCriacaoExperiencia() {
    this.criandoExperiencia.set(true);
    this.erroExperiencia.set(null);
  }
  cancelarCriacaoExperiencia() {
    this.criandoExperiencia.set(false);
    this.erroExperiencia.set(null);
    this.formularioExperiencia.reset({ nome: "" });
  }
  async cadastrarExperiencia() {
    if (this.formularioExperiencia.invalid) {
      this.formularioExperiencia.markAllAsTouched();
      return;
    }
    this.salvandoExperiencia.set(true);
    this.erroExperiencia.set(null);
    try {
      const experiencia = await this.dadosExperiencias.cadastrar({
        nome: this.formularioExperiencia.controls.nome.value,
        album_id: null
      });
      this.cancelarCriacaoExperiencia();
      await this.abrirExperiencia(experiencia.id);
    } catch (erro) {
      this.erroExperiencia.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel criar a experi\xEAncia."));
    } finally {
      this.salvandoExperiencia.set(false);
    }
  }
  async alternarPublicacao() {
    const experiencia = this.experiencia();
    if (!experiencia)
      return;
    this.alterandoPublicacao.set(true);
    this.erroPublicacao.set(null);
    try {
      if (experiencia.publicada_em) {
        await this.dadosExperiencias.retirarPublicacao(experiencia.id);
      } else {
        await this.dadosExperiencias.publicar(experiencia.id);
      }
    } catch (erro) {
      this.erroPublicacao.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel alterar a publica\xE7\xE3o."));
    } finally {
      this.alterandoPublicacao.set(false);
    }
  }
  async excluirExperiencia() {
    const experiencia = this.experiencia();
    if (!experiencia)
      return;
    if (!this.confirmar(`Excluir definitivamente \u201C${experiencia.nome}\u201D?`)) {
      return;
    }
    this.excluindoExperiencia.set(true);
    this.erroExperiencia.set(null);
    try {
      await this.dadosExperiencias.excluir(experiencia.id);
      this.fecharEditorAcao();
      this.cancelarEdicaoBloco();
      this.experienciaSelecionadaId.set("");
      const proxima = this.dadosExperiencias.experiencias()[0];
      if (proxima)
        await this.abrirExperiencia(proxima.id);
    } catch (erro) {
      this.erroExperiencia.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel excluir a experi\xEAncia."));
    } finally {
      this.excluindoExperiencia.set(false);
    }
  }
  iniciarRenomeacaoExperiencia() {
    const experiencia = this.experiencia();
    if (!experiencia)
      return;
    this.formularioNomeExperiencia.setValue({ nome: experiencia.nome });
    this.renomeandoExperiencia.set(true);
    this.erroExperiencia.set(null);
  }
  cancelarRenomeacaoExperiencia() {
    this.renomeandoExperiencia.set(false);
    this.formularioNomeExperiencia.reset({ nome: "" });
    this.erroExperiencia.set(null);
  }
  async salvarNomeExperiencia() {
    const experiencia = this.experiencia();
    if (!experiencia || this.formularioNomeExperiencia.invalid) {
      this.formularioNomeExperiencia.markAllAsTouched();
      return;
    }
    this.salvandoNomeExperiencia.set(true);
    this.erroExperiencia.set(null);
    try {
      await this.dadosExperiencias.atualizar(experiencia.id, {
        nome: this.formularioNomeExperiencia.controls.nome.value,
        album_id: experiencia.album_id
      });
      this.cancelarRenomeacaoExperiencia();
    } catch (erro) {
      this.erroExperiencia.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel renomear a experi\xEAncia."));
    } finally {
      this.salvandoNomeExperiencia.set(false);
    }
  }
  async alternarEscolhaAlbum() {
    const abrir = !this.escolhendoAlbum();
    this.escolhendoAlbum.set(abrir);
    if (abrir && this.dadosExperiencias.albunsDisponiveis().length === 0) {
      await this.dadosExperiencias.listarAlbunsDisponiveis();
    }
  }
  async definirAlbum(albumId) {
    const experiencia = this.experiencia();
    if (!experiencia || experiencia.album_id === albumId) {
      this.escolhendoAlbum.set(false);
      return;
    }
    this.salvandoAlbum.set(true);
    this.erroExperiencia.set(null);
    try {
      await this.dadosExperiencias.atualizar(experiencia.id, {
        nome: experiencia.nome,
        album_id: albumId
      });
      this.escolhendoAlbum.set(false);
    } catch (erro) {
      this.erroExperiencia.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel alterar o trabalho vinculado."));
    } finally {
      this.salvandoAlbum.set(false);
    }
  }
  nomeAlbumVinculado() {
    const albumId = this.experiencia()?.album_id;
    if (!albumId)
      return "Publica\xE7\xE3o independente";
    return this.dadosExperiencias.albunsDisponiveis().find((album) => album.id === albumId)?.nome ?? "Trabalho vinculado";
  }
  abrirNovoBloco() {
    this.limparImagemEditor();
    this.blocoEditandoId.set(null);
    this.formularioBloco.reset({ conteudo: "" });
    this.criandoBloco.set(true);
    this.erroBloco.set(null);
  }
  iniciarEdicaoBloco(bloco) {
    this.limparImagemEditor();
    this.criandoBloco.set(false);
    this.blocoEditandoId.set(bloco.id);
    this.formularioBloco.setValue({ conteudo: bloco.conteudo ?? "" });
    this.urlImagemBloco.set(this.imagemDoBloco(bloco));
    this.erroBloco.set(null);
  }
  cancelarEdicaoBloco() {
    this.limparImagemEditor();
    this.criandoBloco.set(false);
    this.blocoEditandoId.set(null);
    this.formularioBloco.reset({ conteudo: "" });
    this.erroBloco.set(null);
  }
  async salvarBloco() {
    const experienciaId = this.experienciaSelecionadaId();
    if (!experienciaId)
      return;
    this.salvandoBloco.set(true);
    this.erroBloco.set(null);
    let recursoNovoId = null;
    try {
      const bloco = this.dadosBlocos.blocos().find((item) => item.id === this.blocoEditandoId());
      const caminhoAnterior = bloco?.imagem_caminho ?? null;
      let imagemCaminho = this.removerImagemBloco() ? null : caminhoAnterior;
      const arquivoImagem = this.arquivoImagemBloco();
      if (arquivoImagem) {
        const recurso = await this.dadosRecursos.enviarImagem({
          experiencia_id: experienciaId,
          nome: `Imagem \xB7 ${arquivoImagem.name}`,
          arquivo: arquivoImagem
        });
        recursoNovoId = recurso.id;
        imagemCaminho = `recurso:${recurso.id}`;
      }
      const dados = {
        ordem: bloco?.ordem ?? this.dadosBlocos.blocos().reduce((maior, item) => Math.max(maior, item.ordem), 0) + 1,
        conteudo: this.formularioBloco.controls.conteudo.value || null,
        imagem_caminho: imagemCaminho,
        teto_temporal_segundos: bloco?.teto_temporal_segundos ?? null,
        hold_point_segundos: bloco?.hold_point_segundos ?? null
      };
      if (bloco) {
        await this.dadosBlocos.atualizar(experienciaId, bloco.id, dados);
      } else {
        await this.dadosBlocos.cadastrar(experienciaId, dados);
      }
      const recursoAnteriorId = this.extrairRecursoImagem(caminhoAnterior);
      if (recursoAnteriorId && recursoAnteriorId !== recursoNovoId && caminhoAnterior !== imagemCaminho) {
        await this.dadosRecursos.excluir(experienciaId, recursoAnteriorId).catch(() => void 0);
      }
      this.cancelarEdicaoBloco();
      await this.carregarImagensBlocos();
    } catch (erro) {
      if (recursoNovoId) {
        await this.dadosRecursos.excluir(experienciaId, recursoNovoId).catch(() => void 0);
      }
      this.erroBloco.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel salvar o bloco."));
    } finally {
      this.salvandoBloco.set(false);
    }
  }
  async excluirBloco(bloco) {
    if (!this.confirmar(`Excluir o bloco ${bloco.ordem}?`))
      return;
    try {
      await this.dadosBlocos.excluir(this.experienciaSelecionadaId(), bloco.id);
      const recursoImagemId = this.extrairRecursoImagem(bloco.imagem_caminho);
      if (recursoImagemId) {
        await this.dadosRecursos.excluir(this.experienciaSelecionadaId(), recursoImagemId).catch(() => void 0);
      }
      await this.carregarImagensBlocos();
      if (this.blocoComEditorId() === bloco.id)
        this.fecharEditorAcao();
    } catch (erro) {
      this.erroBloco.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel excluir o bloco."));
    }
  }
  selecionarImagemBloco(entrada) {
    const arquivo = entrada.files?.[0] ?? null;
    entrada.value = "";
    if (!arquivo)
      return;
    if (!arquivo.type.startsWith("image/")) {
      this.erroBloco.set("Selecione um arquivo de imagem v\xE1lido.");
      return;
    }
    this.liberarUrlImagemLocal();
    this.urlImagemBlocoLocal = URL.createObjectURL(arquivo);
    this.arquivoImagemBloco.set(arquivo);
    this.urlImagemBloco.set(this.urlImagemBlocoLocal);
    this.removerImagemBloco.set(false);
    this.erroBloco.set(null);
  }
  retirarImagemBloco() {
    this.liberarUrlImagemLocal();
    this.arquivoImagemBloco.set(null);
    this.urlImagemBloco.set(null);
    this.removerImagemBloco.set(true);
  }
  imagemDoBloco(bloco) {
    return this.imagensBlocos()[bloco.id] ?? null;
  }
  async carregarImagensBlocos() {
    const experienciaId = this.experienciaSelecionadaId();
    if (!experienciaId) {
      this.imagensBlocos.set({});
      return;
    }
    const recursosPorBloco = this.dadosBlocos.blocos().map((bloco) => ({
      blocoId: bloco.id,
      recursoId: this.extrairRecursoImagem(bloco.imagem_caminho)
    })).filter((item) => Boolean(item.recursoId));
    const urlsPorRecurso = /* @__PURE__ */ new Map();
    await Promise.all([...new Set(recursosPorBloco.map((item) => item.recursoId))].map(async (recursoId) => {
      try {
        urlsPorRecurso.set(recursoId, await this.dadosRecursos.obterUrlReproducao(experienciaId, recursoId));
      } catch {
      }
    }));
    const imagens = {};
    for (const { blocoId, recursoId } of recursosPorBloco) {
      const url = urlsPorRecurso.get(recursoId);
      if (url)
        imagens[blocoId] = url;
    }
    this.imagensBlocos.set(imagens);
  }
  extrairRecursoImagem(caminho) {
    const correspondencia = caminho?.match(/^recurso:([0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$/i);
    return correspondencia?.[1] ?? null;
  }
  limparImagemEditor() {
    this.liberarUrlImagemLocal();
    this.arquivoImagemBloco.set(null);
    this.urlImagemBloco.set(null);
    this.removerImagemBloco.set(false);
  }
  liberarUrlImagemLocal() {
    if (this.urlImagemBlocoLocal) {
      URL.revokeObjectURL(this.urlImagemBlocoLocal);
      this.urlImagemBlocoLocal = null;
    }
  }
  async moverBloco(blocoId, direcao) {
    try {
      await this.dadosBlocos.mover(this.experienciaSelecionadaId(), blocoId, direcao);
    } catch (erro) {
      this.erroBloco.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel mover o bloco."));
    }
  }
  async enviarRecurso(entradaArquivo) {
    const arquivo = entradaArquivo.files?.[0] ?? null;
    if (this.formularioRecurso.invalid || !arquivo) {
      this.formularioRecurso.markAllAsTouched();
      this.erroRecurso.set(arquivo ? null : "Selecione um arquivo de \xE1udio.");
      return;
    }
    this.enviandoRecurso.set(true);
    this.erroRecurso.set(null);
    try {
      await this.dadosRecursos.enviar({
        experiencia_id: this.experienciaSelecionadaId(),
        nome: this.formularioRecurso.controls.nome.value,
        arquivo
      });
      this.formularioRecurso.reset({ nome: "" });
      entradaArquivo.value = "";
    } catch (erro) {
      this.erroRecurso.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel enviar o recurso sonoro."));
    } finally {
      this.enviandoRecurso.set(false);
    }
  }
  async excluirRecurso(recurso) {
    if (!this.confirmar(`Excluir o recurso \u201C${recurso.nome}\u201D?`))
      return;
    this.excluindoRecursoId.set(recurso.id);
    this.erroRecurso.set(null);
    try {
      await this.dadosRecursos.excluir(this.experienciaSelecionadaId(), recurso.id);
      if (this.recursoAcaoId() === recurso.id)
        this.fecharEditorAcao();
    } catch (erro) {
      this.erroRecurso.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel excluir o recurso."));
    } finally {
      this.excluindoRecursoId.set(null);
    }
  }
  async alternarSelecaoVersao() {
    const abrir = !this.selecionandoVersao();
    this.selecionandoVersao.set(abrir);
    if (abrir && this.dadosRecursos.versoesDisponiveis().length === 0) {
      await this.dadosRecursos.listarVersoesDisponiveis();
    }
  }
  async vincularVersao(versao) {
    if (this.versaoJaVinculada(versao.id))
      return;
    this.vinculandoVersaoId.set(versao.id);
    this.erroRecurso.set(null);
    try {
      await this.dadosRecursos.vincularVersao(this.experienciaSelecionadaId(), {
        nome: versao.versao,
        versao_id: versao.id
      });
    } catch (erro) {
      this.erroRecurso.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel vincular a vers\xE3o."));
    } finally {
      this.vinculandoVersaoId.set(null);
    }
  }
  versaoJaVinculada(versaoId) {
    return this.dadosRecursos.recursos().some((recurso) => recurso.versao_id === versaoId);
  }
  acoesDoBloco(blocoId) {
    return this.dadosAcoes.acoes().filter((acao) => acao.bloco_id === blocoId);
  }
  async alternarPreviaCena(blocoId) {
    if (this.preparandoPrevia())
      return;
    if (this.cenaEmPreviaId() === blocoId) {
      this.pararPrevia();
      return;
    }
    this.preparandoPrevia.set(true);
    this.cenaPreviaAlvoId.set(blocoId);
    this.erroPrevia.set(null);
    try {
      if (this.recursosPrevia.length === 0) {
        await this.prepararRecursosPrevia();
      }
      if (this.recursosPrevia.length === 0) {
        throw new Error("Nenhum \xE1udio configurado para testar.");
      }
      await this.motorPrevia.iniciar(this.recursosPrevia);
      this.motorPrevia.pararTodos();
      this.transicaoPreviaAtual = "corte";
      this.duracaoCrossfadePreviaAtual = 0;
      this.duracaoFadeOutPreviaAtual = 0;
      this.duracaoCaudaPreviaAtual = null;
      this.transicaoPreviaPendente = null;
      this.blocoTransicaoPreviaAtualId = null;
      this.executarCenaPrevia(blocoId);
    } catch (erro) {
      this.pararPrevia();
      this.cenaPreviaAlvoId.set(blocoId);
      this.erroPrevia.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel testar esta cena."));
    } finally {
      this.preparandoPrevia.set(false);
    }
  }
  avancarPrevia() {
    const cenaAtualId = this.cenaEmPreviaId();
    if (!cenaAtualId)
      return;
    const blocos = [...this.dadosBlocos.blocos()].sort((primeiro, segundo) => primeiro.ordem - segundo.ordem);
    const indiceAtual = blocos.findIndex((bloco) => bloco.id === cenaAtualId);
    const proxima = blocos[indiceAtual + 1];
    if (proxima)
      this.executarCenaPrevia(proxima.id);
    else
      this.pararPrevia();
  }
  temProximaCena(blocoId) {
    const blocos = [...this.dadosBlocos.blocos()].sort((primeiro, segundo) => primeiro.ordem - segundo.ordem);
    const indice = blocos.findIndex((bloco) => bloco.id === blocoId);
    return indice >= 0 && indice < blocos.length - 1;
  }
  pararPrevia() {
    this.motorPrevia.pararTodos();
    this.cenaEmPreviaId.set(null);
    this.cenaPreviaAlvoId.set(null);
    this.transicaoPreviaAtual = "corte";
    this.duracaoCrossfadePreviaAtual = 0;
    this.duracaoFadeOutPreviaAtual = 0;
    this.duracaoCaudaPreviaAtual = null;
    this.transicaoPreviaPendente = null;
    this.blocoTransicaoPreviaAtualId = null;
  }
  abrirTesteLeitura() {
    if (!this.experienciaSelecionadaId() || this.testandoLeitura())
      return;
    this.pararPrevia();
    this.reprodutor()?.nativeElement.pause();
    if (this.testandoTrecho())
      this.pararTesteTrecho();
    if (typeof document !== "undefined") {
      this.overflowCorpoAntesTeste = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    this.testandoLeitura.set(true);
  }
  fecharTesteLeitura() {
    this.testandoLeitura.set(false);
    this.restaurarRolagemDaPagina();
  }
  async abrirNovaAcao(blocoId) {
    const acaoPrincipal = this.acaoPrincipalDoBloco(blocoId);
    this.pararPrevia();
    this.cancelarEdicaoTransicao();
    this.blocoComEditorId.set(blocoId);
    this.acaoEditandoId.set(null);
    this.redefinirEditorAcao();
    if (acaoPrincipal) {
      this.transicaoAudio.set(this.transicaoDosParametros(acaoPrincipal.parametros));
      this.acabamentoAudio.set(this.acabamentoDosParametros(acaoPrincipal.parametros));
      this.duracaoCrossfade.set(this.parametroNumero(acaoPrincipal.parametros, "duracao_crossfade_segundos") ?? 2);
      this.duracaoFadeOut.set(this.parametroNumero(acaoPrincipal.parametros, "duracao_fade_out_segundos") ?? 2);
      this.duracaoCauda.set(this.parametroNumero(acaoPrincipal.parametros, "duracao_cauda_segundos"));
    }
    const primeiroRecurso = this.dadosRecursos.recursos()[0];
    if (primeiroRecurso)
      await this.selecionarRecurso(primeiroRecurso.id);
  }
  async editarAcao(acao) {
    this.pararPrevia();
    this.cancelarEdicaoTransicao();
    this.blocoComEditorId.set(acao.bloco_id);
    this.acaoEditandoId.set(acao.id);
    this.modoAudio.set(this.modoValido(acao.acao));
    this.transicaoAudio.set(this.transicaoDosParametros(acao.parametros));
    this.acabamentoAudio.set(this.acabamentoDosParametros(acao.parametros));
    this.inicioTrecho.set(this.parametroNumero(acao.parametros, "inicio_trecho_segundos") ?? 0);
    this.fimTrecho.set(this.parametroNumero(acao.parametros, "fim_trecho_segundos") ?? 0);
    const fade = this.parametroNumero(acao.parametros, "fade_in_segundos") ?? 0;
    this.fadeInAtivo.set(fade > 0);
    this.duracaoFadeIn.set(fade || 2);
    this.volumeDb.set(this.normalizarVolumeDb(this.parametroNumero(acao.parametros, "volume_db") ?? 0));
    this.duracaoCrossfade.set(this.parametroNumero(acao.parametros, "duracao_crossfade_segundos") ?? 2);
    this.duracaoFadeOut.set(this.parametroNumero(acao.parametros, "duracao_fade_out_segundos") ?? 2);
    this.duracaoCauda.set(this.parametroNumero(acao.parametros, "duracao_cauda_segundos"));
    if (acao.recurso_id)
      await this.selecionarRecurso(acao.recurso_id, true);
  }
  fecharEditorAcao() {
    const audio = this.reprodutor()?.nativeElement;
    audio?.pause();
    this.encerrarAudioEditor();
    this.cargaFormaOndaAtual += 1;
    this.blocoComEditorId.set(null);
    this.acaoEditandoId.set(null);
    this.urlAudio.set(null);
    this.audioTocando.set(false);
    this.testandoTrecho.set(false);
    this.formaOnda.set([]);
    this.picosFormaOndaCompletos = [];
    this.carregandoFormaOnda.set(false);
    this.erroFormaOnda.set(null);
    this.marcadorArrastando.set(null);
    this.inicioJanelaFormaOnda.set(0);
    this.fimJanelaFormaOnda.set(0);
    this.waveformAmpliada.set(false);
    this.erroAcao.set(null);
  }
  async selecionarRecurso(recursoId, preservarTrecho = false) {
    const audio = this.reprodutor()?.nativeElement;
    audio?.pause();
    this.encerrarAudioEditor();
    this.recursoAcaoId.set(recursoId);
    this.carregandoAudio.set(true);
    this.erroAcao.set(null);
    this.urlAudio.set(null);
    this.formaOnda.set([]);
    this.picosFormaOndaCompletos = [];
    this.erroFormaOnda.set(null);
    this.inicioJanelaFormaOnda.set(0);
    this.fimJanelaFormaOnda.set(0);
    this.waveformAmpliada.set(false);
    if (!preservarTrecho) {
      this.inicioTrecho.set(0);
      this.fimTrecho.set(0);
    }
    try {
      const url = await this.dadosRecursos.obterUrlReproducao(this.experienciaSelecionadaId(), recursoId);
      this.urlAudio.set(url);
      void this.carregarFormaOnda(url);
    } catch (erro) {
      this.erroAcao.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel abrir o \xE1udio."));
    } finally {
      this.carregandoAudio.set(false);
    }
  }
  atualizarMetadados(evento) {
    const audio = evento.currentTarget;
    const duracao = Number.isFinite(audio.duration) ? audio.duration : 0;
    this.duracaoAudio.set(duracao);
    if (!this.waveformAmpliada()) {
      this.inicioJanelaFormaOnda.set(0);
      this.fimJanelaFormaOnda.set(duracao);
      this.atualizarFormaOndaVisivel();
    }
    if (this.fimTrecho() <= this.inicioTrecho() || this.fimTrecho() > duracao) {
      this.fimTrecho.set(duracao);
    }
  }
  atualizarTempo(evento) {
    const audio = evento.currentTarget;
    if (!this.testandoTrecho())
      this.tempoAtual.set(audio.currentTime);
  }
  buscarAudio(evento) {
    const audio = this.reprodutor()?.nativeElement;
    if (!audio)
      return;
    const valor = Number(evento.target.value);
    audio.currentTime = valor;
    this.tempoAtual.set(valor);
  }
  buscarNaFormaOnda(evento, area) {
    if (this.marcadorArrastando())
      return;
    this.definirPosicaoAudio(this.tempoPelaPosicao(evento.clientX, area));
  }
  iniciarArrasteMarcador(evento, marcador, area) {
    evento.preventDefault();
    evento.stopPropagation();
    this.marcadorArrastando.set(marcador);
    area.setPointerCapture(evento.pointerId);
    this.atualizarMarcadorPelaPosicao(evento.clientX, area);
  }
  arrastarMarcador(evento, area) {
    if (!this.marcadorArrastando())
      return;
    this.atualizarMarcadorPelaPosicao(evento.clientX, area);
  }
  finalizarArrasteMarcador(evento, area) {
    if (!this.marcadorArrastando())
      return;
    this.atualizarMarcadorPelaPosicao(evento.clientX, area);
    this.marcadorArrastando.set(null);
    if (area.hasPointerCapture(evento.pointerId)) {
      area.releasePointerCapture(evento.pointerId);
    }
  }
  ajustarMarcadorTeclado(evento, marcador) {
    if (evento.key !== "ArrowLeft" && evento.key !== "ArrowRight")
      return;
    evento.preventDefault();
    const direcao = evento.key === "ArrowRight" ? 1 : -1;
    const passo = evento.shiftKey ? 0.1 : 0.01;
    const atual = marcador === "inicio" ? this.inicioTrecho() : this.fimTrecho();
    this.definirMarcador(marcador, atual + direcao * passo);
  }
  percentualTempo(segundos) {
    const inicio = this.inicioJanelaFormaOnda();
    const fim = this.fimJanelaFormaOnda() || this.duracaoAudio();
    const duracao = fim - inicio;
    if (duracao <= 0)
      return 0;
    return (this.limitar(segundos, inicio, fim) - inicio) / duracao * 100;
  }
  larguraSelecao() {
    return Math.max(0, this.percentualTempo(this.fimTrecho()) - this.percentualTempo(this.inicioTrecho()));
  }
  tempoNaJanela(segundos) {
    return segundos >= this.inicioJanelaFormaOnda() && segundos <= (this.fimJanelaFormaOnda() || this.duracaoAudio());
  }
  duracaoTrecho() {
    return Math.max(0, this.fimTrecho() - this.inicioTrecho());
  }
  podeAmpliarRecorte() {
    const duracao = this.duracaoAudio();
    const trecho = this.duracaoTrecho();
    return duracao > 0 && trecho > 0 && trecho < duracao * 0.9;
  }
  ampliarRecorte() {
    if (!this.podeAmpliarRecorte())
      return;
    const duracaoTotal = this.duracaoAudio();
    const duracaoJanela = Math.min(duracaoTotal, Math.max(0.5, this.duracaoTrecho() * 1.5));
    const centro = (this.inicioTrecho() + this.fimTrecho()) / 2;
    let inicio = centro - duracaoJanela / 2;
    let fim = centro + duracaoJanela / 2;
    if (inicio < 0) {
      fim -= inicio;
      inicio = 0;
    }
    if (fim > duracaoTotal) {
      inicio -= fim - duracaoTotal;
      fim = duracaoTotal;
    }
    this.inicioJanelaFormaOnda.set(Math.max(0, inicio));
    this.fimJanelaFormaOnda.set(fim);
    this.waveformAmpliada.set(true);
    this.atualizarFormaOndaVisivel();
  }
  mostrarFaixaInteira() {
    this.inicioJanelaFormaOnda.set(0);
    this.fimJanelaFormaOnda.set(this.duracaoAudio());
    this.waveformAmpliada.set(false);
    this.atualizarFormaOndaVisivel();
  }
  ajustarMarcador(marcador, deltaSegundos) {
    const atual = marcador === "inicio" ? this.inicioTrecho() : this.fimTrecho();
    this.definirMarcador(marcador, atual + deltaSegundos);
  }
  async alternarAudio() {
    const audio = this.reprodutor()?.nativeElement;
    if (!audio)
      return;
    if (this.testandoTrecho()) {
      this.pararTesteTrecho();
      return;
    }
    if (audio.paused)
      await audio.play();
    else {
      audio.pause();
    }
  }
  marcarInicio() {
    const atual = this.reprodutor()?.nativeElement.currentTime ?? 0;
    this.definirMarcador("inicio", atual);
  }
  marcarFim() {
    const atual = this.reprodutor()?.nativeElement.currentTime ?? 0;
    this.definirMarcador("fim", atual);
  }
  async testarTrecho() {
    const audio = this.reprodutor()?.nativeElement;
    const contexto = this.contextoAudioEditor;
    const buffer = this.bufferAudioEditor;
    if (!audio || !contexto || !buffer || this.fimTrecho() <= this.inicioTrecho()) {
      return;
    }
    if (this.testandoTrecho()) {
      this.pararTesteTrecho();
      return;
    }
    audio.pause();
    try {
      if (contexto.state === "suspended")
        await contexto.resume();
      const inicio = this.inicioTrecho();
      const fim = this.fimTrecho();
      const fonte = contexto.createBufferSource();
      const ganhoVolume = contexto.createGain();
      const ganhoEnvelope = contexto.createGain();
      const inicioContexto = contexto.currentTime;
      const fade = this.fadeInAtivo() ? Math.min(this.duracaoFadeIn(), fim - inicio) : 0;
      fonte.buffer = buffer;
      fonte.loop = this.modoAudio() === "loop";
      fonte.loopStart = inicio;
      fonte.loopEnd = fim;
      fonte.connect(ganhoVolume);
      ganhoVolume.connect(ganhoEnvelope);
      ganhoEnvelope.connect(contexto.destination);
      ganhoVolume.gain.setValueAtTime(this.ganhoPorDb(this.volumeDb()), inicioContexto);
      ganhoEnvelope.gain.setValueAtTime(fade > 0 ? 0 : 1, inicioContexto);
      if (fade > 0) {
        ganhoEnvelope.gain.linearRampToValueAtTime(1, inicioContexto + fade);
      }
      this.fonteTesteTrecho = fonte;
      this.ganhoVolumeTesteTrecho = ganhoVolume;
      this.ganhoEnvelopeTesteTrecho = ganhoEnvelope;
      this.tempoBaseTeste = inicio;
      this.contextoBaseTeste = contexto.currentTime;
      this.tempoAtual.set(inicio);
      this.testandoTrecho.set(true);
      fonte.addEventListener("ended", () => {
        if (this.fonteTesteTrecho === fonte) {
          this.finalizarTesteTrecho();
        }
      }, { once: true });
      if (fonte.loop)
        fonte.start(inicioContexto, inicio);
      else
        fonte.start(inicioContexto, inicio, fim - inicio);
      this.atualizarTempoTeste();
    } catch (erro) {
      this.pararTesteTrecho();
      this.erroAcao.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel testar o trecho."));
    }
  }
  definirModo(modo) {
    if (this.testandoTrecho())
      this.pararTesteTrecho();
    this.modoAudio.set(modo);
  }
  ajustarDuracaoCrossfade(delta) {
    this.duracaoCrossfade.set(Math.max(0.1, Math.round((this.duracaoCrossfade() + delta) * 10) / 10));
  }
  ajustarDuracaoFadeOut(delta) {
    this.duracaoFadeOut.set(Math.max(0.1, Math.round((this.duracaoFadeOut() + delta) * 10) / 10));
  }
  ajustarDuracaoFadeIn(delta) {
    this.duracaoFadeIn.set(Math.max(0.1, Math.round((this.duracaoFadeIn() + delta) * 10) / 10));
  }
  definirVolumeDb(evento) {
    const alvo = evento.target;
    if (!(alvo instanceof HTMLInputElement))
      return;
    const volume = this.normalizarVolumeDb(Number(alvo.value));
    this.volumeDb.set(volume);
    const contexto = this.contextoAudioEditor;
    const ganho = this.ganhoVolumeTesteTrecho?.gain;
    if (!contexto || !ganho || !this.testandoTrecho())
      return;
    ganho.setTargetAtTime(this.ganhoPorDb(volume), contexto.currentTime, 0.015);
  }
  rotuloVolumeDb() {
    const volume = this.volumeDb();
    return `${volume > 0 ? "+" : ""}${volume.toFixed(1)} dB`;
  }
  abrirEdicaoTransicao(blocoId) {
    const acao = this.acaoPrincipalDoBloco(blocoId);
    if (!acao)
      return;
    this.pararPrevia();
    this.fecharEditorAcao();
    this.blocoEditandoTransicaoId.set(blocoId);
    this.erroTransicao.set(null);
    this.transicaoAudio.set(this.transicaoDosParametros(acao.parametros));
    this.acabamentoAudio.set(this.acabamentoDosParametros(acao.parametros));
    this.duracaoCrossfade.set(this.parametroNumero(acao.parametros, "duracao_crossfade_segundos") ?? 2);
    this.duracaoFadeOut.set(this.parametroNumero(acao.parametros, "duracao_fade_out_segundos") ?? 2);
    this.duracaoCauda.set(this.parametroNumero(acao.parametros, "duracao_cauda_segundos"));
  }
  cancelarEdicaoTransicao() {
    this.blocoEditandoTransicaoId.set(null);
    this.erroTransicao.set(null);
  }
  async salvarTransicaoCena() {
    const blocoId = this.blocoEditandoTransicaoId();
    const acoes = blocoId ? [...this.acoesDoBloco(blocoId)].sort((primeira, segunda) => primeira.ordem - segunda.ordem) : [];
    if (!blocoId || acoes.length === 0)
      return;
    this.salvandoTransicao.set(true);
    this.erroTransicao.set(null);
    try {
      const ordemDeAtualizacao = [...acoes.slice(1), acoes[0]];
      for (const acao of ordemDeAtualizacao) {
        const parametrosAtuais = this.parametrosComoObjeto(acao.parametros);
        const parametros = __spreadProps(__spreadValues({}, parametrosAtuais), {
          transicao_saida: this.transicaoAudio(),
          acabamento_saida: this.acabamentoAudio(),
          duracao_crossfade_segundos: this.acabamentoAudio() === "crossfade" ? this.duracaoCrossfade() : 0,
          duracao_fade_out_segundos: this.acabamentoAudio() === "fade-out" ? this.duracaoFadeOut() : 0,
          duracao_cauda_segundos: this.transicaoAudio() === "cauda" ? this.duracaoCauda() : null
        });
        await this.dadosAcoes.atualizar(this.experienciaSelecionadaId(), blocoId, acao.id, {
          recurso_id: acao.recurso_id,
          ordem: acao.ordem,
          acao: acao.acao,
          inicio_segundos: acao.inicio_segundos,
          parametros
        });
      }
      await this.encerrarPrevia();
      void this.prepararRecursosPrevia().catch(() => void 0);
      this.cancelarEdicaoTransicao();
    } catch (erro) {
      this.erroTransicao.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel salvar a passagem entre as cenas."));
    } finally {
      this.salvandoTransicao.set(false);
    }
  }
  async salvarAcao() {
    const blocoId = this.blocoComEditorId();
    const recursoId = this.recursoAcaoId();
    const experienciaId = this.experienciaSelecionadaId();
    if (!blocoId || !recursoId) {
      this.erroAcao.set("Escolha o \xE1udio desta a\xE7\xE3o.");
      return;
    }
    if (this.fimTrecho() <= this.inicioTrecho()) {
      this.erroAcao.set("Marque um trecho v\xE1lido no \xE1udio.");
      return;
    }
    this.salvandoAcao.set(true);
    this.erroAcao.set(null);
    try {
      const existentes = this.acoesDoBloco(blocoId);
      const acaoExistente = existentes.find((acao) => acao.id === this.acaoEditandoId());
      const parametrosAtuais = acaoExistente ? this.parametrosComoObjeto(acaoExistente.parametros) : {};
      const parametros = __spreadProps(__spreadValues({}, parametrosAtuais), {
        inicio_trecho_segundos: this.inicioTrecho(),
        fim_trecho_segundos: this.fimTrecho(),
        transicao_saida: this.transicaoAudio(),
        acabamento_saida: this.acabamentoAudio(),
        fade_in_segundos: this.fadeInAtivo() ? this.duracaoFadeIn() : 0,
        volume_db: this.volumeDb(),
        duracao_crossfade_segundos: this.acabamentoAudio() === "crossfade" ? this.duracaoCrossfade() : 0,
        duracao_fade_out_segundos: this.acabamentoAudio() === "fade-out" ? this.duracaoFadeOut() : 0,
        duracao_cauda_segundos: this.transicaoAudio() === "cauda" ? this.duracaoCauda() : null
      });
      const dados = {
        recurso_id: recursoId,
        ordem: acaoExistente?.ordem ?? existentes.reduce((maior, acao) => Math.max(maior, acao.ordem), 0) + 1,
        acao: this.modoAudio(),
        inicio_segundos: 0,
        parametros
      };
      if (acaoExistente) {
        await this.dadosAcoes.atualizar(experienciaId, blocoId, acaoExistente.id, dados);
      } else {
        await this.dadosAcoes.cadastrar(experienciaId, blocoId, dados);
      }
      await this.encerrarPrevia();
      void this.prepararRecursosPrevia().catch(() => void 0);
      this.fecharEditorAcao();
    } catch (erro) {
      this.erroAcao.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel salvar a a\xE7\xE3o."));
    } finally {
      this.salvandoAcao.set(false);
    }
  }
  async excluirAcao(acao) {
    if (!this.confirmar("Excluir esta a\xE7\xE3o sonora?"))
      return;
    try {
      await this.dadosAcoes.excluir(this.experienciaSelecionadaId(), acao.bloco_id, acao.id);
      await this.encerrarPrevia();
      void this.prepararRecursosPrevia().catch(() => void 0);
    } catch (erro) {
      this.erroAcao.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel excluir a a\xE7\xE3o."));
    }
  }
  recursoNome(recursoId) {
    return this.dadosRecursos.recursos().find((item) => item.id === recursoId)?.nome ?? "\xC1udio indispon\xEDvel";
  }
  rotuloModo(acao) {
    if (acao === "loop")
      return "Loop";
    if (acao === "one-shot")
      return "One-shot";
    return "Tocar uma vez";
  }
  rotuloTransicao(parametros) {
    const transicao = this.transicaoDosParametros(parametros);
    const acabamento = this.acabamentoDosParametros(parametros);
    const base = {
      "terminar-loop": "fecha o ciclo",
      corte: "corte direto",
      continuar: "continua na pr\xF3xima cena",
      cauda: "deixa a cauda seguir",
      silencio: "termina em sil\xEAncio"
    }[transicao];
    if (acabamento === "fade-out")
      return `${base} + fade-out`;
    if (acabamento === "crossfade")
      return `${base} + crossfade`;
    return base;
  }
  rotuloTransicaoCena(blocoId) {
    const acao = this.acaoPrincipalDoBloco(blocoId);
    return acao ? this.rotuloTransicao(acao.parametros) : "corte direto";
  }
  detalheTransicaoCena(blocoId) {
    const acao = this.acaoPrincipalDoBloco(blocoId);
    if (!acao)
      return null;
    const acabamento = this.acabamentoDosParametros(acao.parametros);
    if (acabamento === "crossfade") {
      const duracao = this.parametroNumero(acao.parametros, "duracao_crossfade_segundos") ?? 0;
      return `${duracao.toFixed(1)}s`;
    }
    if (acabamento === "fade-out") {
      const duracao = this.parametroNumero(acao.parametros, "duracao_fade_out_segundos") ?? 0;
      return `${duracao.toFixed(1)}s`;
    }
    if (this.transicaoDosParametros(acao.parametros) === "cauda") {
      const duracao = this.parametroNumero(acao.parametros, "duracao_cauda_segundos");
      return duracao === null ? "at\xE9 o fim" : `${duracao.toFixed(1)}s`;
    }
    return null;
  }
  trechoAcao(acao) {
    const inicio = this.parametroNumero(acao.parametros, "inicio_trecho_segundos") ?? 0;
    const fim = this.parametroNumero(acao.parametros, "fim_trecho_segundos");
    return fim === null ? `${this.formatarTempo(inicio)} \u2192 fim` : `${this.formatarTempo(inicio)} \u2192 ${this.formatarTempo(fim)}`;
  }
  resumoAcao(acao) {
    const volume = this.normalizarVolumeDb(this.parametroNumero(acao.parametros, "volume_db") ?? 0);
    const fadeIn = Math.max(0, this.parametroNumero(acao.parametros, "fade_in_segundos") ?? 0);
    const partes = [
      this.trechoAcao(acao),
      `${volume > 0 ? "+" : ""}${volume.toFixed(1)} dB`
    ];
    if (fadeIn > 0)
      partes.push(`fade-in ${fadeIn.toFixed(1)}s`);
    return partes.join(" \xB7 ");
  }
  formatarTempo(segundos) {
    if (!Number.isFinite(segundos))
      return "0:00.0";
    const minutos = Math.floor(segundos / 60);
    const restante = (segundos % 60).toFixed(1).padStart(4, "0");
    return `${minutos}:${restante}`;
  }
  formatarTempoPreciso(segundos) {
    if (!Number.isFinite(segundos))
      return "0:00.00";
    const minutos = Math.floor(segundos / 60);
    const restante = (segundos % 60).toFixed(2).padStart(5, "0");
    return `${minutos}:${restante}`;
  }
  arquivoSelecionado(recurso) {
    return this.recursoAcaoId() === recurso.id;
  }
  redefinirEditorAcao() {
    this.encerrarAudioEditor();
    this.recursoAcaoId.set(null);
    this.modoAudio.set("loop");
    this.transicaoAudio.set("terminar-loop");
    this.acabamentoAudio.set("direto");
    this.fadeInAtivo.set(false);
    this.duracaoFadeIn.set(2);
    this.volumeDb.set(0);
    this.duracaoCrossfade.set(2);
    this.duracaoFadeOut.set(2);
    this.duracaoCauda.set(null);
    this.inicioTrecho.set(0);
    this.fimTrecho.set(0);
    this.tempoAtual.set(0);
    this.duracaoAudio.set(0);
    this.urlAudio.set(null);
    this.formaOnda.set([]);
    this.picosFormaOndaCompletos = [];
    this.carregandoFormaOnda.set(false);
    this.erroFormaOnda.set(null);
    this.marcadorArrastando.set(null);
    this.inicioJanelaFormaOnda.set(0);
    this.fimJanelaFormaOnda.set(0);
    this.waveformAmpliada.set(false);
    this.erroAcao.set(null);
  }
  async carregarFormaOnda(url) {
    if (typeof window === "undefined")
      return;
    const carga = ++this.cargaFormaOndaAtual;
    this.carregandoFormaOnda.set(true);
    this.erroFormaOnda.set(null);
    let contexto = null;
    try {
      const resposta = await fetch(url);
      if (!resposta.ok)
        throw new Error("\xC1udio indispon\xEDvel.");
      const dados = await resposta.arrayBuffer();
      contexto = new AudioContext();
      const audio = await contexto.decodeAudioData(dados);
      const picos = this.extrairPicos(audio, 2400);
      if (carga === this.cargaFormaOndaAtual) {
        this.encerrarAudioEditor();
        this.contextoAudioEditor = contexto;
        this.bufferAudioEditor = audio;
        contexto = null;
        this.picosFormaOndaCompletos = picos;
        if (this.duracaoAudio() <= 0) {
          this.duracaoAudio.set(audio.duration);
          this.fimTrecho.set(audio.duration);
          this.fimJanelaFormaOnda.set(audio.duration);
        }
        this.atualizarFormaOndaVisivel();
      }
    } catch {
      if (carga === this.cargaFormaOndaAtual) {
        this.erroFormaOnda.set("A waveform n\xE3o p\xF4de ser desenhada, mas o \xE1udio continua dispon\xEDvel.");
      }
    } finally {
      await contexto?.close().catch(() => void 0);
      if (carga === this.cargaFormaOndaAtual) {
        this.carregandoFormaOnda.set(false);
      }
    }
  }
  extrairPicos(audio, quantidade) {
    const tamanhoFaixa = Math.max(1, Math.floor(audio.length / quantidade));
    const picos = Array.from({ length: quantidade }, () => 0);
    for (let canal = 0; canal < audio.numberOfChannels; canal += 1) {
      const amostras = audio.getChannelData(canal);
      for (let indice = 0; indice < quantidade; indice += 1) {
        const inicio = indice * tamanhoFaixa;
        const fim = Math.min(inicio + tamanhoFaixa, amostras.length);
        const passo = Math.max(1, Math.floor((fim - inicio) / 1e3));
        let pico = 0;
        for (let amostra = inicio; amostra < fim; amostra += passo) {
          pico = Math.max(pico, Math.abs(amostras[amostra]));
        }
        picos[indice] = Math.max(picos[indice], pico);
      }
    }
    const maiorPico = Math.max(...picos, 0.01);
    return picos.map((pico) => Math.max(0.06, pico / maiorPico) * 100);
  }
  atualizarMarcadorPelaPosicao(clientX, area) {
    const marcador = this.marcadorArrastando();
    if (!marcador)
      return;
    this.definirMarcador(marcador, this.tempoPelaPosicao(clientX, area));
  }
  definirMarcador(marcador, segundos) {
    const duracao = this.duracaoAudio();
    if (duracao <= 0)
      return;
    const distanciaMinima = Math.min(0.01, duracao);
    let valor;
    if (marcador === "inicio") {
      valor = this.limitar(segundos, 0, Math.max(0, this.fimTrecho() - distanciaMinima));
      this.inicioTrecho.set(valor);
    } else {
      valor = this.limitar(segundos, Math.min(duracao, this.inicioTrecho() + distanciaMinima), duracao);
      this.fimTrecho.set(valor);
    }
    this.definirPosicaoAudio(valor);
    this.atualizarLimitesTesteTrecho();
  }
  atualizarLimitesTesteTrecho() {
    const fonte = this.fonteTesteTrecho;
    const contexto = this.contextoAudioEditor;
    if (!fonte || !contexto || !fonte.loop)
      return;
    fonte.loopStart = this.inicioTrecho();
    fonte.loopEnd = this.fimTrecho();
    this.tempoBaseTeste = this.limitar(this.tempoAtual(), this.inicioTrecho(), this.fimTrecho());
    this.contextoBaseTeste = contexto.currentTime;
  }
  atualizarTempoTeste() {
    const contexto = this.contextoAudioEditor;
    const fonte = this.fonteTesteTrecho;
    if (!contexto || !fonte || !this.testandoTrecho())
      return;
    const inicio = this.inicioTrecho();
    const fim = this.fimTrecho();
    const duracao = fim - inicio;
    const decorrido = Math.max(0, contexto.currentTime - this.contextoBaseTeste);
    const bruto = this.tempoBaseTeste + decorrido;
    const atual = fonte.loop && duracao > 0 ? inicio + ((bruto - inicio) % duracao + duracao) % duracao : Math.min(fim, bruto);
    this.tempoAtual.set(atual);
    this.quadroTempoTeste = window.requestAnimationFrame(() => this.atualizarTempoTeste());
  }
  pararTesteTrecho() {
    const fonte = this.fonteTesteTrecho;
    const ganhoVolume = this.ganhoVolumeTesteTrecho;
    const ganhoEnvelope = this.ganhoEnvelopeTesteTrecho;
    this.fonteTesteTrecho = null;
    this.ganhoVolumeTesteTrecho = null;
    this.ganhoEnvelopeTesteTrecho = null;
    if (this.quadroTempoTeste !== null && typeof window !== "undefined") {
      window.cancelAnimationFrame(this.quadroTempoTeste);
      this.quadroTempoTeste = null;
    }
    if (fonte) {
      try {
        fonte.stop();
      } catch {
      }
    }
    this.desconectarNoAudio(fonte);
    this.desconectarNoAudio(ganhoVolume);
    this.desconectarNoAudio(ganhoEnvelope);
    this.testandoTrecho.set(false);
  }
  finalizarTesteTrecho() {
    const fonte = this.fonteTesteTrecho;
    const ganhoVolume = this.ganhoVolumeTesteTrecho;
    const ganhoEnvelope = this.ganhoEnvelopeTesteTrecho;
    this.fonteTesteTrecho = null;
    this.ganhoVolumeTesteTrecho = null;
    this.ganhoEnvelopeTesteTrecho = null;
    this.desconectarNoAudio(fonte);
    this.desconectarNoAudio(ganhoVolume);
    this.desconectarNoAudio(ganhoEnvelope);
    if (this.quadroTempoTeste !== null && typeof window !== "undefined") {
      window.cancelAnimationFrame(this.quadroTempoTeste);
      this.quadroTempoTeste = null;
    }
    this.testandoTrecho.set(false);
  }
  desconectarNoAudio(no) {
    if (!no)
      return;
    try {
      no.disconnect();
    } catch {
    }
  }
  encerrarAudioEditor() {
    this.pararTesteTrecho();
    this.bufferAudioEditor = null;
    const contexto = this.contextoAudioEditor;
    this.contextoAudioEditor = null;
    if (contexto && contexto.state !== "closed") {
      void contexto.close().catch(() => void 0);
    }
  }
  definirPosicaoAudio(segundos) {
    const valor = this.limitar(segundos, 0, this.duracaoAudio());
    const audio = this.reprodutor()?.nativeElement;
    if (audio)
      audio.currentTime = valor;
    this.tempoAtual.set(valor);
  }
  tempoPelaPosicao(clientX, area) {
    const limites = area.getBoundingClientRect();
    if (limites.width <= 0)
      return 0;
    const proporcao = this.limitar((clientX - limites.left) / limites.width, 0, 1);
    const inicio = this.inicioJanelaFormaOnda();
    const fim = this.fimJanelaFormaOnda() || this.duracaoAudio();
    return inicio + proporcao * (fim - inicio);
  }
  atualizarFormaOndaVisivel() {
    const picos = this.picosFormaOndaCompletos;
    const duracao = this.duracaoAudio();
    if (picos.length === 0 || duracao <= 0) {
      this.formaOnda.set([]);
      return;
    }
    const inicio = this.limitar(this.inicioJanelaFormaOnda(), 0, duracao);
    const fim = this.limitar(this.fimJanelaFormaOnda() || duracao, inicio, duracao);
    const indiceInicial = Math.floor(inicio / duracao * picos.length);
    const indiceFinal = Math.max(indiceInicial + 1, Math.ceil(fim / duracao * picos.length));
    const trecho = picos.slice(indiceInicial, indiceFinal);
    const quantidadeVisivel = Math.min(240, trecho.length);
    const resultado = [];
    for (let indice = 0; indice < quantidadeVisivel; indice += 1) {
      const inicioGrupo = Math.floor(indice / quantidadeVisivel * trecho.length);
      const fimGrupo = Math.max(inicioGrupo + 1, Math.ceil((indice + 1) / quantidadeVisivel * trecho.length));
      resultado.push(Math.max(...trecho.slice(inicioGrupo, fimGrupo)));
    }
    this.formaOnda.set(resultado);
  }
  limitar(valor, minimo, maximo) {
    return Math.min(maximo, Math.max(minimo, valor));
  }
  acaoPrincipalDoBloco(blocoId) {
    return [...this.acoesDoBloco(blocoId)].sort((primeira, segunda) => primeira.ordem - segunda.ordem)[0] ?? null;
  }
  parametrosComoObjeto(parametros) {
    if (!parametros || Array.isArray(parametros) || typeof parametros !== "object") {
      return {};
    }
    return parametros;
  }
  async prepararRecursosPrevia() {
    const carga = ++this.cargaRecursosPreviaAtual;
    this.preparandoRecursosPrevia.set(true);
    const idsUsados = [
      ...new Set(this.dadosAcoes.acoes().map((acao) => acao.recurso_id).filter((id) => Boolean(id)))
    ];
    if (idsUsados.length === 0) {
      this.recursosPrevia = [];
      this.preparandoRecursosPrevia.set(false);
      return;
    }
    const recursos = idsUsados.map((id) => this.dadosRecursos.recursos().find((recurso) => recurso.id === id));
    if (recursos.some((recurso) => !recurso)) {
      this.preparandoRecursosPrevia.set(false);
      throw new Error("Uma cena usa um \xE1udio que n\xE3o est\xE1 mais dispon\xEDvel.");
    }
    try {
      const urls = await Promise.all(idsUsados.map((id) => this.dadosRecursos.obterUrlReproducao(this.experienciaSelecionadaId(), id)));
      if (carga !== this.cargaRecursosPreviaAtual)
        return;
      this.recursosPrevia = recursos.map((recurso, indice) => ({
        id: recurso.id,
        nome: recurso.nome,
        versao_id: recurso.versao_id,
        nome_arquivo: recurso.nome_arquivo ?? recurso.nome,
        tamanho_bytes: recurso.tamanho_bytes ?? 0,
        tipo_mime: recurso.tipo_mime,
        reproducao_url: urls[indice],
        reproducao_expira_em: new Date(Date.now() + 60 * 60 * 1e3).toISOString()
      }));
    } finally {
      if (carga === this.cargaRecursosPreviaAtual) {
        this.preparandoRecursosPrevia.set(false);
      }
    }
  }
  executarCenaPrevia(blocoId) {
    const bloco = this.dadosBlocos.blocos().find((item) => item.id === blocoId);
    if (!bloco)
      return;
    try {
      this.atualizarTransicaoPreviaPendente();
      const acoes = [...this.acoesDoBloco(blocoId)].sort((primeira, segunda) => primeira.ordem - segunda.ordem);
      const comandos = acoes.filter((acao) => ["loop", "tocar", "one-shot"].includes(acao.acao.trim().toLocaleLowerCase())).map((acao) => {
        if (!acao.recurso_id) {
          throw new Error(`Uma a\xE7\xE3o da cena ${bloco.ordem} est\xE1 sem \xE1udio.`);
        }
        const inicioConfigurado = this.parametroNumero(acao.parametros, "inicio_trecho_segundos");
        const fimConfigurado = this.parametroNumero(acao.parametros, "fim_trecho_segundos");
        const inicioLegado = bloco.hold_point_segundos === null ? 0 : bloco.hold_point_segundos - acao.inicio_segundos;
        const fimLegado = bloco.teto_temporal_segundos === null ? null : bloco.teto_temporal_segundos - acao.inicio_segundos;
        return {
          acaoId: acao.id,
          blocoId: bloco.id,
          recursoId: acao.recurso_id,
          inicioTrechoSegundos: inicioConfigurado ?? inicioLegado,
          fimTrechoSegundos: fimConfigurado ?? fimLegado,
          repetir: acao.acao.trim().toLocaleLowerCase() === "loop",
          fadeInSegundos: this.parametroNumero(acao.parametros, "fade_in_segundos") ?? 0,
          volumeDb: this.normalizarVolumeDb(this.parametroNumero(acao.parametros, "volume_db") ?? 0)
        };
      });
      const resultado = this.motorPrevia.transicionar(comandos, this.transicaoPreviaAtual, {
        duracaoCrossfadeSegundos: this.duracaoCrossfadePreviaAtual,
        duracaoFadeOutSegundos: this.duracaoFadeOutPreviaAtual,
        duracaoCaudaSegundos: this.duracaoCaudaPreviaAtual
      }, this.blocoTransicaoPreviaAtualId, bloco.id);
      this.cenaEmPreviaId.set(blocoId);
      const principal = acoes[0];
      const proximaTransicao = principal ? this.transicaoDosParametros(principal.parametros) : "silencio";
      const proximoAcabamento = principal ? this.acabamentoDosParametros(principal.parametros) : "direto";
      const proximaDuracaoCrossfade = principal && proximoAcabamento === "crossfade" ? this.parametroNumero(principal.parametros, "duracao_crossfade_segundos") ?? 0 : 0;
      const proximaDuracaoFadeOut = principal && proximoAcabamento === "fade-out" ? this.parametroNumero(principal.parametros, "duracao_fade_out_segundos") ?? 0 : 0;
      const proximaDuracaoCauda = principal ? this.parametroNumero(principal.parametros, "duracao_cauda_segundos") : null;
      this.transicaoPreviaPendente = {
        inicioCenaContexto: resultado.inicioCenaContexto,
        blocoId: bloco.id,
        transicaoSaida: proximaTransicao,
        duracaoCrossfade: proximaDuracaoCrossfade,
        duracaoFadeOut: proximaDuracaoFadeOut,
        duracaoCauda: proximaDuracaoCauda
      };
      this.atualizarTransicaoPreviaPendente();
      this.erroPrevia.set(null);
    } catch (erro) {
      this.pararPrevia();
      this.cenaPreviaAlvoId.set(blocoId);
      this.erroPrevia.set(this.obterMensagemErro(erro, "N\xE3o foi poss\xEDvel executar esta cena."));
    }
  }
  async encerrarPrevia() {
    this.cargaRecursosPreviaAtual += 1;
    this.recursosPrevia = [];
    this.cenaEmPreviaId.set(null);
    this.cenaPreviaAlvoId.set(null);
    this.preparandoPrevia.set(false);
    this.preparandoRecursosPrevia.set(false);
    this.erroPrevia.set(null);
    this.transicaoPreviaAtual = "corte";
    this.duracaoCrossfadePreviaAtual = 0;
    this.duracaoFadeOutPreviaAtual = 0;
    this.duracaoCaudaPreviaAtual = null;
    this.transicaoPreviaPendente = null;
    this.blocoTransicaoPreviaAtualId = null;
    await this.motorPrevia.encerrar();
  }
  atualizarTransicaoPreviaPendente() {
    const pendente = this.transicaoPreviaPendente;
    const contexto = this.motorPrevia.obterContexto();
    if (!pendente || !contexto || contexto.currentTime + 5e-3 < pendente.inicioCenaContexto) {
      return;
    }
    this.transicaoPreviaAtual = pendente.transicaoSaida;
    this.duracaoCrossfadePreviaAtual = pendente.duracaoCrossfade;
    this.duracaoFadeOutPreviaAtual = pendente.duracaoFadeOut;
    this.duracaoCaudaPreviaAtual = pendente.duracaoCauda;
    this.blocoTransicaoPreviaAtualId = pendente.blocoId;
    this.transicaoPreviaPendente = null;
  }
  modoValido(valor) {
    return valor === "loop" || valor === "one-shot" ? valor : "tocar";
  }
  transicaoValida(valor) {
    return valor === "corte" || valor === "continuar" || valor === "cauda" || valor === "fade-out" || valor === "crossfade" || valor === "silencio" ? valor : "terminar-loop";
  }
  transicaoDosParametros(parametros) {
    const transicao = this.transicaoValida(this.parametroTexto(parametros, "transicao_saida"));
    return transicao === "fade-out" || transicao === "crossfade" ? "corte" : transicao;
  }
  acabamentoDosParametros(parametros) {
    const acabamento = this.parametroTexto(parametros, "acabamento_saida");
    if (acabamento === "direto" || acabamento === "fade-out" || acabamento === "crossfade") {
      return acabamento;
    }
    const transicaoLegada = this.transicaoValida(this.parametroTexto(parametros, "transicao_saida"));
    return transicaoLegada === "fade-out" || transicaoLegada === "crossfade" ? transicaoLegada : "direto";
  }
  parametroNumero(parametros, chave) {
    if (!parametros || Array.isArray(parametros) || typeof parametros !== "object") {
      return null;
    }
    const valor = parametros[chave];
    return typeof valor === "number" && Number.isFinite(valor) ? valor : null;
  }
  normalizarVolumeDb(valor) {
    if (!Number.isFinite(valor))
      return 0;
    return Math.round(Math.min(12, Math.max(-60, valor)) * 10) / 10;
  }
  ganhoPorDb(volumeDb) {
    return Math.pow(10, this.normalizarVolumeDb(volumeDb) / 20);
  }
  parametroTexto(parametros, chave) {
    if (!parametros || Array.isArray(parametros) || typeof parametros !== "object") {
      return null;
    }
    const valor = parametros[chave];
    return typeof valor === "string" ? valor : null;
  }
  restaurarRolagemDaPagina() {
    if (typeof document === "undefined")
      return;
    if (this.overflowCorpoAntesTeste !== null) {
      document.body.style.overflow = this.overflowCorpoAntesTeste;
      this.overflowCorpoAntesTeste = null;
    }
  }
  confirmar(mensagem) {
    return typeof window === "undefined" || window.confirm(mensagem);
  }
  obterMensagemErro(erro, mensagemPadrao) {
    return typeof erro === "object" && erro !== null && "message" in erro ? String(erro.message) : mensagemPadrao;
  }
  static \u0275fac = function ExperienciasImersivas_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExperienciasImersivas)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExperienciasImersivas, selectors: [["app-experiencias-imersivas"]], viewQuery: function ExperienciasImersivas_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.reprodutor, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, features: [\u0275\u0275ProvidersFeature([MotorAudioExperienciaImersiva])], decls: 13, vars: 3, consts: [["arquivoRecurso", ""], ["imagemBloco", ""], ["waveformArea", ""], ["reprodutorEditor", ""], ["imagemNovoBloco", ""], [1, "pagina-experiencias"], ["aria-label", "Experi\xEAncias imersivas", 1, "barra-experiencias"], [1, "lista-experiencias"], ["type", "button", 3, "ativa"], ["type", "button", 1, "nova-experiencia", 3, "click"], [1, "criacao-experiencia"], ["aria-live", "polite", 1, "estado-pagina"], ["role", "alert", 1, "estado-pagina", "estado-erro"], [1, "estado-pagina", "estado-vazio"], ["role", "dialog", "aria-modal", "true", "aria-label", "Teste da experi\xEAncia", 1, "teste-leitura-overlay"], ["type", "button", 3, "click"], [3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "nome", "placeholder", "Nome da experi\xEAncia", "autofocus", ""], [1, "acoes-inline"], ["type", "button", 1, "botao-neutro", 3, "click"], ["type", "submit", 1, "botao-principal", 3, "disabled"], [1, "mensagem-erro"], ["aria-hidden", "true", 1, "carregador"], [1, "sobretitulo"], ["type", "button", 1, "botao-principal", 3, "click"], [1, "hero-experiencia"], ["aria-hidden", "true", 1, "selo-experiencia"], [1, "identidade-experiencia"], [1, "renomear-experiencia", 3, "formGroup"], [1, "titulo-editavel"], [1, "numeros-experiencia"], [1, "acoes-experiencia"], ["type", "button", 1, "botao-principal", 3, "click", "disabled"], ["aria-label", "\xC1reas do editor", 1, "navegacao-editor"], ["href", "#roteiro"], ["href", "#sons"], ["href", "#publicacao"], [1, "renomear-experiencia", 3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "nome", "aria-label", "Nome da experi\xEAncia"], ["id", "roteiro", 1, "secao-editor"], [1, "cabecalho-secao"], [1, "sequencia-blocos"], [1, "bloco-editor", 3, "com-editor"], [1, "estado-vazio", "roteiro-vazio"], [1, "novo-bloco"], ["id", "sons", 1, "secao-editor"], [1, "biblioteca-sons"], [1, "entrada-sons"], [1, "upload-som", 3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "nome", "placeholder", "Ex.: loop de baixo"], [1, "arquivo-upload"], ["type", "file", "accept", "audio/*"], [1, "versoes-faixa"], ["type", "button", 1, "abrir-versoes", 3, "click"], [1, "lista-versoes"], [1, "lista-sons"], [1, "estado-vazio"], ["id", "publicacao", 1, "secao-editor", "secao-publicacao"], [1, "vinculo-trabalho"], ["type", "button", 1, "abrir-vinculo", 3, "click"], [1, "lista-albuns"], [1, "painel-publicacao"], [1, "status-publicacao"], ["type", "button", 1, "botao-perigo", 3, "click", "disabled"], [1, "bloco-editor"], [1, "ordem-bloco"], ["type", "button", "aria-label", "Mover bloco para cima", 3, "click", "disabled"], ["type", "button", "aria-label", "Mover bloco para baixo", 3, "click", "disabled"], [1, "conteudo-bloco"], [1, "editor-texto", 3, "formGroup"], [1, "texto-cena"], [1, "cadeia-sonora"], [1, "cabecalho-cadeia-sonora"], [1, "gatilho"], ["type", "button", 1, "testar-cena", 3, "ativo", "disabled"], [1, "acao-sonora"], ["type", "button", 1, "sem-som"], [1, "controle-previa-cena"], [1, "mensagem-erro", "erro-previa"], ["type", "button", 1, "adicionar-camada"], [1, "passagem-cena", 3, "editando"], [1, "acoes-bloco"], ["type", "button", 1, "perigo", 3, "click"], [1, "designer-som"], [1, "editor-texto", 3, "ngSubmit", "formGroup"], [1, "editor-imagem-cena"], ["alt", "Pr\xE9via da imagem da cena", 3, "src"], [1, "botao-arquivo-imagem"], ["type", "file", "accept", "image/*", 3, "change"], ["type", "button", 1, "acao-textual", "perigo"], ["rows", "8", "formControlName", "conteudo", "placeholder", "Escreva livremente: texto, poema, cr\xE9ditos..."], ["type", "button", 1, "acao-textual", "perigo", 3, "click"], ["alt", "", 1, "imagem-cena-editor", 3, "src"], [1, "texto-vazio"], ["type", "button", 1, "testar-cena", 3, "click", "disabled"], ["type", "button", 1, "acao-textual", 3, "click"], ["type", "button", 1, "sem-som", 3, "click"], ["type", "button", 3, "click", "disabled"], ["type", "button", 1, "adicionar-camada", 3, "click"], [1, "passagem-cena"], ["type", "button"], [1, "editor-passagem"], [1, "grupo-passagem"], ["role", "group", "aria-label", "Comportamento do som atual", 1, "opcoes-transicao"], [1, "dica-combinacao"], ["role", "group", "aria-label", "Acabamento da passagem", 1, "opcoes-transicao"], [1, "controle-duracao"], ["type", "button", "aria-label", "Fechar", 1, "fechar-editor", 3, "click"], [1, "aviso-sem-recurso"], [1, "configuracao-som-basica"], [1, "etapa-som"], [1, "numero-etapa"], [1, "escolha-recursos"], ["type", "button", 3, "ativo"], ["role", "group", "aria-label", "Modo de reprodu\xE7\xE3o da camada", 1, "opcoes-som"], [1, "recorte-audio"], [1, "cabecalho-recorte"], [1, "estado-loop", 3, "tocando"], [1, "entrada-audio"], [1, "controle-duracao", "controle-volume"], ["type", "range", "min", "-60", "max", "12", "step", "0.5", "aria-label", "Volume da camada em decib\xE9is", 3, "input", "value"], ["type", "button", 1, "interruptor", 3, "click"], [1, "rodape-designer"], [1, "estado-loop"], [1, "transporte-waveform"], ["type", "button", 1, "botao-play", 3, "click"], [1, "painel-waveform"], [1, "waveform", 3, "pointerdown", "pointermove", "pointerup", "pointercancel"], ["aria-hidden", "true", 1, "barras-waveform"], [3, "height"], ["aria-hidden", "true", 1, "selecao-waveform"], ["aria-hidden", "true", 1, "playhead-waveform", 3, "left"], ["type", "button", 1, "marcador-waveform", "marcador-inicio", 3, "pointerdown", "keydown"], ["type", "button", 1, "marcador-waveform", "marcador-fim", 3, "pointerdown", "keydown"], [1, "escala-waveform"], [1, "resumo-recorte"], ["type", "button", 3, "disabled"], [1, "aviso-waveform"], [1, "controles-recorte"], [1, "ajuste-fino"], ["type", "button", "aria-label", "Recuar in\xEDcio em 0,01 segundo", 3, "click"], ["type", "button", "aria-label", "Avan\xE7ar in\xEDcio em 0,01 segundo", 3, "click"], ["type", "button", 1, "usar-cursor", 3, "click"], ["type", "button", "aria-label", "Recuar fim em 0,01 segundo", 3, "click"], ["type", "button", "aria-label", "Avan\xE7ar fim em 0,01 segundo", 3, "click"], ["type", "button", 1, "testar-loop", 3, "click", "disabled"], ["preload", "metadata", 3, "loadedmetadata", "durationchange", "timeupdate", "play", "pause", "ended", "src"], ["aria-hidden", "true", 1, "playhead-waveform"], ["rows", "9", "formControlName", "conteudo", "placeholder", "Escreva livremente: texto, poema, cr\xE9ditos..."], [1, "indice-som"], ["type", "button", 1, "excluir-som", 3, "click", "disabled"], ["type", "button", 3, "ativo", "disabled"], [1, "barra-teste-leitura"], [1, "leitor-teste-integrado"], [3, "experienciaIdEntrada", "modoTesteEntrada", "integrado"]], template: function ExperienciasImersivas_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 5)(1, "nav", 6)(2, "div", 7);
      \u0275\u0275repeaterCreate(3, ExperienciasImersivas_For_4_Template, 4, 4, "button", 8, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 9);
      \u0275\u0275listener("click", function ExperienciasImersivas_Template_button_click_5_listener() {
        return ctx.abrirCriacaoExperiencia();
      });
      \u0275\u0275text(6, " + Nova experi\xEAncia ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, ExperienciasImersivas_Conditional_7_Template, 12, 4, "section", 10);
      \u0275\u0275conditionalCreate(8, ExperienciasImersivas_Conditional_8_Template, 4, 0, "section", 11)(9, ExperienciasImersivas_Conditional_9_Template, 9, 1, "section", 12)(10, ExperienciasImersivas_Conditional_10_Template, 9, 0, "section", 13)(11, ExperienciasImersivas_Conditional_11_Template, 43, 13);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, ExperienciasImersivas_Conditional_12_Template, 11, 4, "section", 14);
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.dadosExperiencias.experiencias());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.criandoExperiencia() ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dadosExperiencias.carregando() && !ctx.experiencia() ? 8 : ctx.dadosExperiencias.erro() ? 9 : !ctx.experiencia() ? 10 : (tmp_2_0 = ctx.experiencia()) ? 11 : -1, tmp_2_0);
      \u0275\u0275advance(4);
      \u0275\u0275conditional((tmp_3_0 = ctx.testandoLeitura() && ctx.experiencia()) ? 12 : -1, tmp_3_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ExperienciaImersivaPublica], styles: ['@charset "UTF-8";\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  font: inherit;\n}\nbutton[_ngcontent-%COMP%], \na[_ngcontent-%COMP%] {\n  color: inherit;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.pagina-experiencias[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 112rem;\n  margin: 0 auto;\n  padding: 1.35rem 1.5rem 6rem;\n  color: var(--app-text);\n}\n.barra-experiencias[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.2rem;\n}\n.lista-experiencias[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  gap: 0.4rem;\n  overflow-x: auto;\n  padding: 0.1rem 0;\n}\n.lista-experiencias[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.nova-experiencia[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 2.3rem;\n  flex: 0 0 auto;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.35rem 0.65rem;\n  background: transparent;\n  color: var(--app-text-soft);\n  border: 0.0625rem solid transparent;\n  border-radius: 999rem;\n  font-size: 0.62rem;\n  font-weight: 700;\n}\n.lista-experiencias[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 1.5rem;\n  height: 1.5rem;\n  place-items: center;\n  background: var(--app-surface-muted);\n  color: var(--studio-brand);\n  border-radius: 50%;\n  font-size: 0.55rem;\n}\n.lista-experiencias[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.lista-experiencias[_ngcontent-%COMP%]   button.ativa[_ngcontent-%COMP%] {\n  background: var(--app-surface);\n  color: var(--app-text);\n  border-color: var(--app-border);\n}\n.lista-experiencias[_ngcontent-%COMP%]   button.ativa[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n}\n.nova-experiencia[_ngcontent-%COMP%] {\n  color: var(--studio-brand);\n  border-color: var(--app-border);\n  border-radius: var(--radius-small);\n}\n.criacao-experiencia[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding: 1rem;\n  background: var(--app-surface);\n  border-top: 0.16rem solid var(--studio-brand);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.criacao-experiencia[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(12rem, 1fr) auto;\n  align-items: end;\n  gap: 1rem;\n}\n.criacao-experiencia[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.upload-som[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.35rem;\n}\n.criacao-experiencia[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.upload-som[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.53rem;\n  font-weight: 760;\n  letter-spacing: 0.12em;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--app-background);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-small);\n  outline: none;\n}\ninput[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--studio-brand);\n  box-shadow: 0 0 0 0.14rem var(--studio-brand-soft);\n}\ninput[_ngcontent-%COMP%] {\n  min-height: 2.65rem;\n  padding: 0 0.75rem;\n}\ntextarea[_ngcontent-%COMP%] {\n  min-height: 11rem;\n  padding: 1rem;\n  resize: vertical;\n  font-size: 0.78rem;\n  line-height: 1.65;\n}\n.hero-experiencia[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 14rem;\n  grid-template-columns: 10.5rem minmax(0, 1fr) auto;\n  align-items: end;\n  gap: 2rem;\n  overflow: hidden;\n  padding: 1.75rem;\n  background:\n    linear-gradient(\n      115deg,\n      var(--studio-brand-soft),\n      transparent 48%),\n    var(--app-surface);\n  border-top: 0.18rem solid var(--studio-brand);\n  border-bottom: 0.0625rem solid var(--app-border-strong);\n}\n.selo-experiencia[_ngcontent-%COMP%] {\n  display: grid;\n  width: 10.5rem;\n  aspect-ratio: 1;\n  place-items: center;\n  background:\n    linear-gradient(\n      145deg,\n      var(--studio-brand-soft),\n      var(--app-surface-muted));\n  color: var(--studio-brand);\n  border-radius: var(--radius-small);\n  box-shadow: 0 1.2rem 2.8rem rgba(0, 0, 0, 0.22);\n  font-size: 3rem;\n  font-weight: 820;\n}\n.identidade-experiencia[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.sobretitulo[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.57rem;\n  font-weight: 780;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.identidade-experiencia[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0.75rem;\n  font-size: clamp(2.8rem, 6vw, 5.4rem);\n  line-height: 0.92;\n  letter-spacing: -0.075em;\n}\n.titulo-editavel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  gap: 0.75rem;\n}\n.titulo-editavel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding: 0;\n  background: transparent;\n  color: var(--app-text-muted);\n  border: 0;\n  font-size: 0.55rem;\n  font-weight: 700;\n}\n.titulo-editavel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--studio-brand);\n}\n.renomear-experiencia[_ngcontent-%COMP%] {\n  display: grid;\n  max-width: 42rem;\n  gap: 0.6rem;\n  margin: 0.55rem 0 0.75rem;\n}\n.renomear-experiencia[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-height: 3.4rem;\n  font-size: clamp(1.5rem, 4vw, 3.2rem);\n  font-weight: 760;\n  letter-spacing: -0.055em;\n}\n.renomear-experiencia[_ngcontent-%COMP%]   .acoes-inline[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.numeros-experiencia[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.55rem 1rem;\n  color: var(--app-text-soft);\n  font-size: 0.68rem;\n}\n.numeros-experiencia[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]::before {\n  margin-right: 1rem;\n  color: var(--app-border-strong);\n  content: "\\2022";\n}\n.numeros-experiencia[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--app-text);\n}\n.acoes-experiencia[_ngcontent-%COMP%], \n.acoes-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.55rem;\n}\n.botao-principal[_ngcontent-%COMP%], \n.botao-neutro[_ngcontent-%COMP%], \n.estado-pagina[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 2.55rem;\n  align-items: center;\n  justify-content: center;\n  padding: 0.68rem 0.9rem;\n  border-radius: var(--radius-small);\n  font-size: 0.64rem;\n  font-weight: 720;\n}\n.botao-perigo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 2.55rem;\n  align-items: center;\n  justify-content: center;\n  padding: 0.68rem 0.9rem;\n  background: transparent;\n  color: #d9807a;\n  border: 0.0625rem solid color-mix(in srgb, #d9807a 55%, transparent);\n  border-radius: var(--radius-small);\n  font-size: 0.64rem;\n  font-weight: 720;\n}\n.botao-principal[_ngcontent-%COMP%] {\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0.0625rem solid var(--studio-brand);\n}\n.botao-neutro[_ngcontent-%COMP%], \n.estado-pagina[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0.0625rem solid var(--app-border-strong);\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.navegacao-editor[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 12;\n  top: 3.91rem;\n  display: flex;\n  gap: 1.5rem;\n  background: var(--app-background);\n  border-bottom: 0.0625rem solid var(--app-border);\n  -webkit-backdrop-filter: blur(0.7rem);\n  backdrop-filter: blur(0.7rem);\n}\n.navegacao-editor[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 3.25rem;\n  align-items: center;\n  gap: 0.35rem;\n  color: var(--app-text-soft);\n  font-size: 0.66rem;\n  font-weight: 700;\n}\n.navegacao-editor[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--studio-brand);\n}\n.navegacao-editor[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.55rem;\n}\n.secao-editor[_ngcontent-%COMP%] {\n  scroll-margin-top: 8rem;\n  padding-top: 4rem;\n}\n.cabecalho-secao[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.2rem;\n}\n.cabecalho-secao[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.28rem 0 0.2rem;\n  font-size: clamp(1.65rem, 3vw, 2.5rem);\n  letter-spacing: -0.055em;\n}\n.cabecalho-secao[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.65rem;\n}\n.sequencia-blocos[_ngcontent-%COMP%] {\n  border-top: 0.0625rem solid var(--app-border-strong);\n}\n.bloco-editor[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 5rem minmax(0, 1fr);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.bloco-editor.com-editor[_ngcontent-%COMP%] {\n  background: var(--app-surface);\n}\n.ordem-bloco[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  justify-items: center;\n  gap: 0.75rem;\n  padding: 1.3rem 0.7rem;\n  border-right: 0.0625rem solid var(--app-border);\n}\n.ordem-bloco[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.65rem;\n  font-variant-numeric: tabular-nums;\n}\n.ordem-bloco[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.25rem;\n}\n.ordem-bloco[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n  padding: 0;\n  background: transparent;\n  color: var(--app-text-muted);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: 50%;\n  font-size: 0.62rem;\n}\n.conteudo-bloco[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 1.3rem 1.1rem 1rem;\n}\n.texto-cena[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  max-width: 54rem;\n  margin: 0.65rem 0 1.4rem;\n  overflow: auto;\n  font: inherit;\n  font-size: 0.78rem;\n  line-height: 1.75;\n  white-space: pre-wrap;\n}\n.texto-vazio[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.68rem;\n  font-style: italic;\n}\n.editor-texto[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n  margin-bottom: 1.1rem;\n}\n.editor-imagem-cena[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 9rem;\n  grid-template-columns: minmax(9rem, 15rem) minmax(0, 1fr);\n  align-items: center;\n  gap: 1rem;\n  padding: 0.75rem;\n  background: var(--app-surface-muted);\n  border: 0.0625rem solid var(--app-border);\n}\n.editor-imagem-cena[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], \n.imagem-cena-editor[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-height: 18rem;\n  object-fit: cover;\n}\n.editor-imagem-cena[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 7rem;\n  place-items: center;\n  color: var(--app-text-muted);\n  border: 0.0625rem dashed var(--app-border-strong);\n  font-size: 0.62rem;\n}\n.editor-imagem-cena[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.botao-arquivo-imagem[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 2.35rem;\n  align-items: center;\n  padding: 0.6rem 0.8rem;\n  background: var(--app-text);\n  color: var(--app-surface);\n  font-size: 0.62rem;\n  font-weight: 750;\n  cursor: pointer;\n}\n.botao-arquivo-imagem[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  opacity: 0;\n}\n.imagem-cena-editor[_ngcontent-%COMP%] {\n  max-width: 38rem;\n  margin: 0.65rem 0 1rem;\n}\n.cadeia-sonora[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n  padding-top: 0.9rem;\n  border-top: 0.0625rem solid var(--app-border);\n}\n.cabecalho-cadeia-sonora[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 1.9rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.gatilho[_ngcontent-%COMP%] {\n  color: var(--studio-brand);\n  font-size: 0.49rem;\n  font-weight: 800;\n  letter-spacing: 0.14em;\n}\n.acao-sonora[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 4.2rem;\n  grid-template-columns: minmax(0, 1fr) auto auto;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.55rem 0.7rem;\n  background: var(--app-surface-muted);\n  border-left: 0.14rem solid var(--studio-brand);\n}\n.testar-cena[_ngcontent-%COMP%] {\n  min-height: 1.9rem;\n  padding: 0.32rem 0.58rem;\n  background: transparent;\n  color: var(--studio-brand);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 999rem;\n  font-size: 0.52rem;\n  font-weight: 750;\n}\n.testar-cena.ativo[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--studio-brand) 13%, transparent);\n  border-color: var(--studio-brand);\n}\n.controle-previa-cena[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.55rem 0.7rem;\n  background: color-mix(in srgb, var(--studio-brand) 8%, var(--app-surface));\n  border: 0.0625rem solid color-mix(in srgb, var(--studio-brand) 32%, var(--app-border));\n}\n.controle-previa-cena[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin-right: auto;\n  color: var(--app-text-soft);\n  font-size: 0.54rem;\n  font-weight: 720;\n}\n.controle-previa-cena[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 0.48rem;\n  height: 0.48rem;\n  background: var(--studio-brand);\n  border-radius: 50%;\n  box-shadow: 0 0 0 0 color-mix(in srgb, var(--studio-brand) 45%, transparent);\n  animation: _ngcontent-%COMP%_pulso-previa 1.4s ease-out infinite;\n}\n.controle-previa-cena[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 1.9rem;\n  padding: 0.32rem 0.55rem;\n  background: transparent;\n  color: var(--app-text-soft);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-small);\n  font-size: 0.51rem;\n  font-weight: 700;\n}\n.erro-previa[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_pulso-previa {\n  70% {\n    box-shadow: 0 0 0 0.45rem transparent;\n  }\n  100% {\n    box-shadow: 0 0 0 0 transparent;\n  }\n}\n.play-mini[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.35rem;\n  height: 2.35rem;\n  place-items: center;\n  padding: 0;\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0;\n  border-radius: 50%;\n  font-size: 0.55rem;\n}\n.acao-sonora[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.08rem;\n}\n.acao-sonora[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.lista-sons[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.48rem;\n  font-weight: 760;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.acao-sonora[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-size: 0.71rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.acao-sonora[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.54rem;\n  line-height: 1.4;\n}\n.acao-textual[_ngcontent-%COMP%], \n.acoes-bloco[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.adicionar-camada[_ngcontent-%COMP%] {\n  padding: 0;\n  background: transparent;\n  color: var(--app-text-soft);\n  border: 0;\n  font-size: 0.57rem;\n  font-weight: 700;\n}\n.perigo[_ngcontent-%COMP%] {\n  color: #d9807a !important;\n}\n.sem-som[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 3.8rem;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.65rem 0.75rem;\n  background: transparent;\n  color: var(--app-text-muted);\n  border: 0.0625rem dashed var(--app-border-strong);\n  border-radius: var(--radius-small);\n  font-size: 0.62rem;\n  text-align: left;\n}\n.sem-som[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  background: var(--app-surface-muted);\n  color: var(--studio-brand);\n  border-radius: 50%;\n  font-size: 0.9rem;\n  font-style: normal;\n}\n.sem-som[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.15rem;\n}\n.sem-som[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--app-text-soft);\n  font-size: 0.6rem;\n}\n.sem-som[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  max-width: 34rem;\n  color: var(--app-text-muted);\n  font-size: 0.5rem;\n  line-height: 1.4;\n}\n.sem-som[_ngcontent-%COMP%]    > b[_ngcontent-%COMP%] {\n  color: var(--studio-brand);\n  font-size: 0.54rem;\n  white-space: nowrap;\n}\n.adicionar-camada[_ngcontent-%COMP%] {\n  justify-self: start;\n  color: var(--studio-brand);\n}\n.passagem-cena[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 1rem;\n  padding: 0.8rem 0.9rem;\n  background: color-mix(in srgb, var(--studio-brand) 5%, var(--app-background));\n  border: 0.0625rem solid var(--app-border);\n  border-left: 0.16rem solid var(--studio-brand);\n}\n.passagem-cena[_ngcontent-%COMP%]::after {\n  position: absolute;\n  bottom: -1.05rem;\n  left: 1.1rem;\n  color: var(--studio-brand);\n  font-size: 0.7rem;\n  content: "\\2193";\n}\n.passagem-cena[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.passagem-cena[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.18rem;\n}\n.passagem-cena[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.43rem;\n  font-weight: 800;\n  letter-spacing: 0.11em;\n}\n.passagem-cena[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  text-transform: capitalize;\n}\n.passagem-cena[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.52rem;\n  font-weight: 600;\n}\n.passagem-cena[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0;\n  background: transparent;\n  color: var(--studio-brand);\n  border: 0;\n  font-size: 0.53rem;\n  font-weight: 720;\n}\n.passagem-cena.editando[_ngcontent-%COMP%] {\n  background: var(--app-surface);\n  border-color: color-mix(in srgb, var(--studio-brand) 42%, var(--app-border));\n}\n.editor-passagem[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  margin-top: 0.8rem;\n  padding-top: 0.8rem;\n  border-top: 0.0625rem solid var(--app-border);\n}\n.grupo-passagem[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n}\n.grupo-passagem[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--app-text);\n  font-size: 0.55rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.grupo-passagem[_ngcontent-%COMP%]    > .dica-combinacao[_ngcontent-%COMP%] {\n  margin-top: -0.2rem;\n  color: var(--app-text-muted);\n  font-size: 0.5rem;\n}\n.passagem-cena[_ngcontent-%COMP%]   .opcoes-transicao[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 10rem;\n  flex: 1 1 10rem;\n  gap: 0.18rem;\n  background: var(--app-background);\n  color: var(--app-text-soft);\n  border-color: var(--app-border-strong);\n}\n.passagem-cena[_ngcontent-%COMP%]   .opcoes-transicao[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: 0.59rem;\n}\n.passagem-cena[_ngcontent-%COMP%]   .opcoes-transicao[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  max-width: 15rem;\n  color: var(--app-text-muted);\n  font-size: 0.49rem;\n  line-height: 1.35;\n}\n.passagem-cena[_ngcontent-%COMP%]   .opcoes-transicao[_ngcontent-%COMP%]   button.ativo[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--studio-brand) 12%, var(--app-background));\n  color: var(--app-text);\n}\n.passagem-cena[_ngcontent-%COMP%]   .controle-duracao[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n}\n.passagem-cena[_ngcontent-%COMP%]   .controle-duracao[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: var(--app-background);\n  color: var(--app-text);\n  border-color: var(--app-border-strong);\n}\n.passagem-cena[_ngcontent-%COMP%]   .controle-duracao[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--app-text);\n}\n.editor-passagem[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.acoes-bloco[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.9rem;\n  margin-top: 0.9rem;\n}\n.designer-som[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  padding: 1.35rem;\n  background: #100d0f;\n  color: #f4f0f2;\n  border-top: 0.12rem solid var(--studio-brand);\n}\n.designer-som[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n}\n.designer-som[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.22rem 0 0;\n  font-size: 1.25rem;\n  letter-spacing: -0.035em;\n}\n.configuracao-som-basica[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(15rem, 0.8fr) minmax(24rem, 1.2fr);\n  gap: 0.65rem;\n  margin-bottom: 0.65rem;\n}\n.configuracao-som-basica[_ngcontent-%COMP%]   .etapa-som[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 0.9rem;\n  background: #181316;\n  border: 0.0625rem solid #352d32;\n}\n.fechar-editor[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  padding: 0;\n  background: transparent;\n  color: #a89da3;\n  border: 0.0625rem solid #352d32;\n  border-radius: 50%;\n  font-size: 1rem;\n}\n.etapa-som[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2rem minmax(0, 1fr);\n  gap: 0.8rem;\n  padding: 1rem 0;\n  border-top: 0.0625rem solid #352d32;\n}\n.numero-etapa[_ngcontent-%COMP%] {\n  display: grid;\n  width: 1.6rem;\n  height: 1.6rem;\n  place-items: center;\n  background: #221b1f;\n  color: var(--studio-brand);\n  border-radius: 50%;\n  font-size: 0.55rem;\n  font-weight: 780;\n}\n.etapa-som[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%], \n.recorte-audio[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.7rem;\n  font-size: 0.68rem;\n}\n.cabecalho-recorte[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.8rem;\n}\n.cabecalho-recorte[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.2rem;\n}\n.cabecalho-recorte[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n}\n.cabecalho-recorte[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #8e8389;\n  font-size: 0.52rem;\n}\n.estado-loop[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  padding: 0.4rem 0.55rem;\n  background: #221b1f;\n  color: var(--studio-brand);\n  border: 0.0625rem solid #4b3e45;\n  font-size: 0.47rem;\n  font-weight: 800;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: 0.08em;\n}\n.estado-loop.tocando[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--studio-brand) 18%, #181316);\n  border-color: var(--studio-brand);\n}\n.escolha-recursos[_ngcontent-%COMP%], \n.opcoes-som[_ngcontent-%COMP%], \n.opcoes-transicao[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.45rem;\n}\n.escolha-recursos[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.opcoes-som[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.opcoes-transicao[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 2.75rem;\n  padding: 0.55rem 0.7rem;\n  background: #181316;\n  color: #c9c0c5;\n  border: 0.0625rem solid #352d32;\n  border-radius: 0.3rem;\n  font-size: 0.59rem;\n  text-align: left;\n}\n.escolha-recursos[_ngcontent-%COMP%]   button.ativo[_ngcontent-%COMP%], \n.opcoes-som[_ngcontent-%COMP%]   button.ativo[_ngcontent-%COMP%], \n.opcoes-transicao[_ngcontent-%COMP%]   button.ativo[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--studio-brand) 15%, #181316);\n  color: #fff;\n  border-color: var(--studio-brand);\n}\n.escolha-recursos[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.15rem;\n  color: #80747a;\n  font-size: 0.44rem;\n  letter-spacing: 0.1em;\n}\n.opcoes-som[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 9rem;\n  gap: 0.15rem;\n}\n.opcoes-som[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 0.64rem;\n}\n.opcoes-som[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #8e8389;\n  font-size: 0.5rem;\n}\n.transporte-waveform[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2.5rem minmax(0, 1fr);\n  align-items: center;\n  gap: 0.65rem;\n  padding: 1rem;\n  background: #181316;\n  border: 0.0625rem solid #352d32;\n}\n.botao-play[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.35rem;\n  height: 2.35rem;\n  place-items: center;\n  padding: 0;\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0;\n  border-radius: 50%;\n  font-size: 0.58rem;\n}\n.painel-waveform[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.waveform[_ngcontent-%COMP%] {\n  position: relative;\n  height: 9rem;\n  margin: 1.7rem 2.6rem 0;\n  background:\n    linear-gradient(#2f272c 0 0) center/100% 0.0625rem no-repeat,\n    repeating-linear-gradient(\n      90deg,\n      transparent 0,\n      transparent calc(10% - 0.0625rem),\n      rgba(255, 255, 255, 0.045) calc(10% - 0.0625rem),\n      rgba(255, 255, 255, 0.045) 10%);\n  border-block: 0.0625rem solid #2f272c;\n  cursor: crosshair;\n  touch-action: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.waveform.loop-em-teste[_ngcontent-%COMP%] {\n  border-block-color: color-mix(in srgb, var(--studio-brand) 70%, #2f272c);\n}\n.waveform.arrastando[_ngcontent-%COMP%] {\n  cursor: ew-resize;\n}\n.barras-waveform[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.0625rem;\n  overflow: hidden;\n  pointer-events: none;\n}\n.barras-waveform[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 0.14rem;\n  background: #8d8188;\n  border-radius: 999rem;\n  opacity: 0.75;\n}\n.waveform.carregando[_ngcontent-%COMP%]::after {\n  position: absolute;\n  inset: 38% 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      color-mix(in srgb, var(--studio-brand) 55%, transparent),\n      transparent);\n  content: "";\n  animation: _ngcontent-%COMP%_carregar-waveform 1.1s ease-in-out infinite;\n}\n.selecao-waveform[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  inset-block: 0;\n  background: color-mix(in srgb, var(--studio-brand) 24%, transparent);\n  border-inline: 0.0625rem solid var(--studio-brand);\n  pointer-events: none;\n}\n.selecao-waveform.em-reproducao[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--studio-brand) 34%, transparent);\n  box-shadow: inset 0 0 0 0.0625rem var(--studio-brand);\n}\n.playhead-waveform[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  inset-block: 0;\n  width: 0.0625rem;\n  background: #f4f0f2;\n  box-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.45);\n  pointer-events: none;\n}\n.marcador-waveform[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 4;\n  top: -1.55rem;\n  display: flex;\n  min-width: 4.8rem;\n  min-height: 1.35rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.28rem;\n  padding: 0.22rem 0.36rem;\n  background: #241d21;\n  color: #f4f0f2;\n  border: 0.0625rem solid var(--studio-brand);\n  border-radius: 0.22rem;\n  font-variant-numeric: tabular-nums;\n  transform: translateX(-50%);\n  cursor: ew-resize;\n}\n.marcador-waveform[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  width: 0.12rem;\n  height: 9.05rem;\n  background: var(--studio-brand);\n  content: "";\n  transform: translateX(-50%);\n}\n.marcador-waveform.ativo[_ngcontent-%COMP%] {\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n}\n.marcador-waveform[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--studio-brand);\n  font-size: 0.4rem;\n  font-weight: 820;\n  letter-spacing: 0.08em;\n}\n.marcador-waveform.ativo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.marcador-waveform[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.49rem;\n}\n.escala-waveform[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0.38rem 2.6rem 0;\n  color: #766a71;\n  font-size: 0.47rem;\n  font-variant-numeric: tabular-nums;\n}\n.escala-waveform[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #b9afb4;\n  font-weight: 650;\n}\n.resumo-recorte[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  margin: 0.55rem 2.6rem 0;\n}\n.resumo-recorte[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.42rem;\n  color: #766a71;\n  font-size: 0.42rem;\n  font-weight: 800;\n  letter-spacing: 0.11em;\n}\n.resumo-recorte[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #d6cdd1;\n  font-size: 0.58rem;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: 0;\n}\n.resumo-recorte[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0;\n  background: transparent;\n  color: var(--studio-brand);\n  border: 0;\n  font-size: 0.5rem;\n  font-weight: 720;\n}\n.controles-recorte[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(13rem, 1fr)) auto;\n  align-items: center;\n  gap: 0.45rem;\n  margin-top: 0.6rem;\n}\n.controles-recorte[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  color: #81767c;\n  font-size: 0.5rem;\n}\n.controles-recorte[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 2.25rem;\n  padding: 0.45rem 0.65rem;\n  background: #181316;\n  color: #c9c0c5;\n  border: 0.0625rem solid #40363c;\n  border-radius: 0.25rem;\n  font-size: 0.52rem;\n  font-weight: 700;\n}\n.controles-recorte[_ngcontent-%COMP%]   .testar-loop[_ngcontent-%COMP%] {\n  color: var(--studio-brand);\n  border-color: var(--studio-brand);\n}\n.ajuste-fino[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1.9rem minmax(4.2rem, auto) 1.9rem auto;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.28rem;\n  background: #181316;\n  border: 0.0625rem solid #352d32;\n  border-radius: 0.25rem;\n}\n.ajuste-fino[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  padding-inline: 0.25rem;\n  color: var(--studio-brand);\n  font-size: 0.43rem;\n  letter-spacing: 0.08em;\n}\n.ajuste-fino[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #e0d8dc;\n  font-size: 0.57rem;\n  font-variant-numeric: tabular-nums;\n  text-align: center;\n}\n.ajuste-fino[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 1.75rem;\n  padding: 0;\n}\n.ajuste-fino[_ngcontent-%COMP%]   .usar-cursor[_ngcontent-%COMP%] {\n  padding-inline: 0.45rem;\n  color: #8e8389;\n  font-size: 0.46rem;\n  font-weight: 650;\n}\n.aviso-waveform[_ngcontent-%COMP%] {\n  margin: 0.45rem 0 0;\n  color: #ba9b79;\n  font-size: 0.5rem;\n}\n@keyframes _ngcontent-%COMP%_carregar-waveform {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n.designer-som[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%] {\n  display: none;\n}\n.controle-duracao[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 24rem;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 0.7rem;\n  color: #a89da3;\n  font-size: 0.55rem;\n}\n.controle-duracao[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  padding: 0;\n  background: #181316;\n  color: #d7cfd3;\n  border: 0.0625rem solid #51454c;\n  border-radius: 50%;\n}\n.controle-duracao[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  min-width: 3rem;\n  color: #f4f0f2;\n  font-size: 0.62rem;\n  text-align: center;\n}\n.entrada-audio[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 0 0.2rem 2.8rem;\n}\n.interruptor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0;\n  background: transparent;\n  color: #a89da3;\n  border: 0;\n  font-size: 0.57rem;\n}\n.interruptor[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  width: 2rem;\n  height: 1.05rem;\n  background: #352d32;\n  border-radius: 999rem;\n}\n.interruptor[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 0.15rem;\n  left: 0.15rem;\n  width: 0.75rem;\n  height: 0.75rem;\n  background: #8e8389;\n  border-radius: 50%;\n  content: "";\n  transition: transform 120ms ease;\n}\n.interruptor.ativo[_ngcontent-%COMP%] {\n  color: #f4f0f2;\n}\n.interruptor.ativo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--studio-brand);\n}\n.interruptor.ativo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  background: var(--studio-on-brand);\n  transform: translateX(0.95rem);\n}\n.rodape-designer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.55rem;\n  margin-top: 1.2rem;\n  padding-top: 1rem;\n  border-top: 0.0625rem solid #352d32;\n}\n.designer-som[_ngcontent-%COMP%]   .botao-neutro[_ngcontent-%COMP%] {\n  color: #d7cfd3;\n  border-color: #51454c;\n}\n.aviso-sem-recurso[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem;\n  background: #181316;\n  border: 0.0625rem solid #352d32;\n  font-size: 0.62rem;\n}\n.aviso-sem-recurso[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--studio-brand);\n}\n.novo-bloco[_ngcontent-%COMP%] {\n  padding: 1.3rem;\n  background: var(--app-surface);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.novo-bloco[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n  margin-top: 0.65rem;\n}\n.biblioteca-sons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(16rem, 0.7fr) minmax(22rem, 1.3fr);\n  gap: 1.5rem;\n  border-top: 0.0625rem solid var(--app-border-strong);\n}\n.entrada-sons[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: 0.75rem;\n}\n.upload-som[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: 0.8rem;\n  padding: 1.25rem;\n  background: var(--app-surface);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.versoes-faixa[_ngcontent-%COMP%] {\n  background: var(--app-surface);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.abrir-versoes[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  min-height: 4rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  background: transparent;\n  color: var(--app-text);\n  border: 0;\n  text-align: left;\n}\n.abrir-versoes[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.2rem;\n}\n.abrir-versoes[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.46rem;\n  font-weight: 760;\n  letter-spacing: 0.12em;\n}\n.abrir-versoes[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n}\n.abrir-versoes[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--studio-brand);\n  font-size: 1rem;\n}\n.lista-versoes[_ngcontent-%COMP%] {\n  max-height: 20rem;\n  overflow-y: auto;\n  border-top: 0.0625rem solid var(--app-border);\n}\n.lista-versoes[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.7rem 1rem;\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.lista-versoes[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.12rem;\n}\n.lista-versoes[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-size: 0.64rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.lista-versoes[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.lista-versoes[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--app-text-muted);\n  font-size: 0.5rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.lista-versoes[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.85rem 1rem;\n}\n.lista-versoes[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.42rem 0.58rem;\n  background: transparent;\n  color: var(--studio-brand);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-small);\n  font-size: 0.53rem;\n  font-weight: 720;\n}\n.upload-som[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n  font-size: 1rem;\n}\n.upload-som[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.59rem;\n  line-height: 1.5;\n}\n.arquivo-upload[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.55rem;\n  font-size: 0.58rem;\n}\n.lista-sons[_ngcontent-%COMP%] {\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.lista-sons[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 5.2rem;\n  grid-template-columns: 2rem minmax(0, 1fr) auto auto;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 0 0.75rem;\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.lista-sons[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.indice-som[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.55rem;\n}\n.lista-sons[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.17rem 0;\n  font-size: 0.78rem;\n}\n.lista-sons[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  color: var(--app-text-muted);\n  font-size: 0.53rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.lista-sons[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  color: var(--studio-brand);\n  font-size: 0.5rem;\n  letter-spacing: 0.08em;\n}\n.excluir-som[_ngcontent-%COMP%] {\n  padding: 0;\n  background: transparent;\n  color: #d9807a;\n  border: 0;\n  font-size: 0.55rem;\n  font-weight: 700;\n}\n.painel-publicacao[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 7rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: var(--app-surface);\n  border-top: 0.0625rem solid var(--app-border-strong);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.vinculo-trabalho[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n  background: var(--app-surface);\n  border-top: 0.0625rem solid var(--app-border-strong);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.abrir-vinculo[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  min-height: 4.5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.8rem 1rem;\n  background: transparent;\n  color: var(--app-text);\n  border: 0;\n  text-align: left;\n}\n.abrir-vinculo[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.2rem;\n}\n.abrir-vinculo[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.lista-albuns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.47rem;\n  font-weight: 760;\n  letter-spacing: 0.12em;\n}\n.abrir-vinculo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.lista-albuns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n}\n.abrir-vinculo[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--studio-brand);\n  font-size: 0.55rem;\n}\n.lista-albuns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));\n  gap: 0.45rem;\n  padding: 0.75rem;\n  border-top: 0.0625rem solid var(--app-border);\n}\n.lista-albuns[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 4rem;\n  align-content: center;\n  justify-items: start;\n  gap: 0.18rem;\n  padding: 0.65rem;\n  background: var(--app-background);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: var(--radius-small);\n  text-align: left;\n}\n.lista-albuns[_ngcontent-%COMP%]    > button.ativo[_ngcontent-%COMP%] {\n  background: var(--studio-brand-soft);\n  border-color: var(--studio-brand);\n}\n.lista-albuns[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.65rem;\n  color: var(--app-text-muted);\n  font-size: 0.58rem;\n}\n.painel-publicacao[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  display: grid;\n  gap: 0.25rem;\n}\n.painel-publicacao[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.painel-publicacao[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.58rem;\n}\n.status-publicacao[_ngcontent-%COMP%] {\n  justify-self: start;\n  padding: 0.22rem 0.38rem;\n  background: var(--app-surface-muted);\n  color: var(--app-text-muted);\n  border-radius: 0.2rem;\n  font-size: 0.48rem;\n  font-weight: 760;\n  letter-spacing: 0.1em;\n}\n.status-publicacao.publicada[_ngcontent-%COMP%] {\n  background: var(--studio-brand-soft);\n  color: var(--studio-brand);\n}\n.estado-pagina[_ngcontent-%COMP%], \n.estado-vazio[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: start;\n  gap: 0.65rem;\n  padding: 2rem;\n  background: var(--app-surface-muted);\n  border-top: 0.0625rem solid var(--app-border);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.estado-pagina[_ngcontent-%COMP%] {\n  min-height: 22rem;\n  align-content: center;\n}\n.estado-pagina[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.estado-vazio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.estado-pagina[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], \n.estado-vazio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 38rem;\n  color: var(--app-text-muted);\n  font-size: 0.67rem;\n  line-height: 1.55;\n}\n.roteiro-vazio[_ngcontent-%COMP%] {\n  min-height: 10rem;\n  align-content: center;\n}\n.mensagem-erro[_ngcontent-%COMP%] {\n  margin: 0.75rem 0;\n  padding: 0.7rem 0.85rem;\n  background: #2b1a1b;\n  color: #f09a94;\n  border-radius: var(--radius-small);\n  font-size: 0.62rem;\n}\n.carregador[_ngcontent-%COMP%] {\n  width: 1.2rem;\n  height: 1.2rem;\n  border: 0.12rem solid var(--app-border-strong);\n  border-top-color: var(--studio-brand);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_girar 700ms linear infinite;\n}\n@keyframes _ngcontent-%COMP%_girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 64rem) {\n  .configuracao-som-basica[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero-experiencia[_ngcontent-%COMP%] {\n    grid-template-columns: 8rem minmax(0, 1fr);\n  }\n  .selo-experiencia[_ngcontent-%COMP%] {\n    width: 8rem;\n  }\n  .acoes-experiencia[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n  .biblioteca-sons[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 48rem) {\n  .pagina-experiencias[_ngcontent-%COMP%] {\n    padding: 1rem 0.85rem 4rem;\n  }\n  .barra-experiencias[_ngcontent-%COMP%] {\n    align-items: start;\n  }\n  .nova-experiencia[_ngcontent-%COMP%] {\n    max-width: 7rem;\n    text-align: center;\n  }\n  .criacao-experiencia[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero-experiencia[_ngcontent-%COMP%] {\n    min-height: auto;\n    grid-template-columns: 5.5rem minmax(0, 1fr);\n    align-items: center;\n    gap: 1rem;\n    padding: 1rem;\n  }\n  .selo-experiencia[_ngcontent-%COMP%] {\n    width: 5.5rem;\n    font-size: 1.8rem;\n  }\n  .identidade-experiencia[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(2.2rem, 13vw, 3.6rem);\n  }\n  .acoes-experiencia[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .acoes-experiencia[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .navegacao-editor[_ngcontent-%COMP%] {\n    top: 3.81rem;\n    overflow-x: auto;\n  }\n  .navegacao-editor[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n  }\n  .secao-editor[_ngcontent-%COMP%] {\n    padding-top: 3rem;\n  }\n  .cabecalho-secao[_ngcontent-%COMP%] {\n    align-items: start;\n  }\n  .bloco-editor[_ngcontent-%COMP%] {\n    grid-template-columns: 3.2rem minmax(0, 1fr);\n  }\n  .ordem-bloco[_ngcontent-%COMP%] {\n    padding-inline: 0.35rem;\n  }\n  .conteudo-bloco[_ngcontent-%COMP%] {\n    padding-inline: 0.75rem;\n  }\n  .editor-imagem-cena[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .acao-sonora[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) auto;\n  }\n  .acao-sonora[_ngcontent-%COMP%]   .perigo[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sem-som[_ngcontent-%COMP%] {\n    grid-template-columns: auto minmax(0, 1fr);\n  }\n  .sem-som[_ngcontent-%COMP%]    > b[_ngcontent-%COMP%] {\n    grid-column: 2;\n  }\n  .passagem-cena[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n    align-items: start;\n    flex-direction: column;\n  }\n  .passagem-cena[_ngcontent-%COMP%]   .opcoes-transicao[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .editor-passagem[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .designer-som[_ngcontent-%COMP%] {\n    padding: 1rem 0.75rem;\n  }\n  .cabecalho-recorte[_ngcontent-%COMP%] {\n    align-items: start;\n    flex-direction: column;\n  }\n  .etapa-som[_ngcontent-%COMP%] {\n    grid-template-columns: 1.6rem minmax(0, 1fr);\n  }\n  .opcoes-som[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n  .transporte-waveform[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .transporte-waveform[_ngcontent-%COMP%]   .botao-play[_ngcontent-%COMP%] {\n    justify-self: start;\n  }\n  .waveform[_ngcontent-%COMP%] {\n    height: 6rem;\n    margin-inline: 2rem;\n  }\n  .marcador-waveform[_ngcontent-%COMP%]::after {\n    height: 6.05rem;\n  }\n  .escala-waveform[_ngcontent-%COMP%] {\n    margin-inline: 2rem;\n  }\n  .resumo-recorte[_ngcontent-%COMP%] {\n    margin-inline: 2rem;\n  }\n  .controles-recorte[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .controles-recorte[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .ajuste-fino[_ngcontent-%COMP%] {\n    grid-template-columns: auto 1.9rem minmax(4.2rem, 1fr) 1.9rem auto;\n  }\n  .entrada-audio[_ngcontent-%COMP%] {\n    align-items: start;\n    padding-left: 2.4rem;\n  }\n  .painel-publicacao[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}\n.teste-leitura-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  inset: 0;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  background: var(--app-background);\n}\n.barra-teste-leitura[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 10;\n  top: 0;\n  display: flex;\n  min-height: 3.75rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.65rem 1rem;\n  background: color-mix(in srgb, var(--app-background) 92%, transparent);\n  border-bottom: 0.0625rem solid var(--app-border);\n  -webkit-backdrop-filter: blur(1rem);\n  backdrop-filter: blur(1rem);\n}\n.barra-teste-leitura[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.12rem;\n}\n.barra-teste-leitura[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--studio-brand);\n  font-size: 0.52rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n}\n.barra-teste-leitura[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--app-text);\n  font-size: 0.78rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.barra-teste-leitura[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 2.35rem;\n  flex: 0 0 auto;\n  padding: 0.45rem 0.75rem;\n  background: var(--app-surface);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-small);\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.barra-teste-leitura[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: var(--studio-brand);\n}\n.leitor-teste-integrado[_ngcontent-%COMP%], \n.leitor-teste-integrado[_ngcontent-%COMP%]    > app-experiencia-imersiva-publica[_ngcontent-%COMP%] {\n  display: block;\n  min-height: calc(100dvh - 3.75rem);\n}\n@media (max-width: 36rem) {\n  .barra-teste-leitura[_ngcontent-%COMP%] {\n    min-height: 3.35rem;\n    padding-inline: 0.75rem;\n  }\n  .barra-teste-leitura[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    max-width: 52vw;\n  }\n  .barra-teste-leitura[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-height: 2.15rem;\n    padding-inline: 0.55rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%], \n   *[_ngcontent-%COMP%]::before, \n   *[_ngcontent-%COMP%]::after {\n    transition-duration: 0.01ms !important;\n  }\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExperienciasImersivas, [{
    type: Component,
    args: [{ selector: "app-experiencias-imersivas", standalone: true, imports: [ReactiveFormsModule, ExperienciaImersivaPublica], providers: [MotorAudioExperienciaImersiva], template: `<main class="pagina-experiencias">
  <nav class="barra-experiencias" aria-label="Experi\xEAncias imersivas">
    <div class="lista-experiencias">
      @for (item of dadosExperiencias.experiencias(); track item.id) {
        <button
          type="button"
          [class.ativa]="experienciaSelecionadaId() === item.id"
          (click)="abrirExperiencia(item.id)"
        >
          <span>{{ item.nome.charAt(0).toLocaleUpperCase('pt-BR') }}</span>
          {{ item.nome }}
        </button>
      }
    </div>

    <button type="button" class="nova-experiencia" (click)="abrirCriacaoExperiencia()">
      + Nova experi\xEAncia
    </button>
  </nav>

  @if (criandoExperiencia()) {
    <section class="criacao-experiencia">
      <form [formGroup]="formularioExperiencia" (ngSubmit)="cadastrarExperiencia()">
        <label>
          <span>NOVA PUBLICA\xC7\xC3O</span>
          <input
            type="text"
            formControlName="nome"
            placeholder="Nome da experi\xEAncia"
            autofocus
          />
        </label>
        <div class="acoes-inline">
          <button type="button" class="botao-neutro" (click)="cancelarCriacaoExperiencia()">
            Cancelar
          </button>
          <button type="submit" class="botao-principal" [disabled]="salvandoExperiencia()">
            {{ salvandoExperiencia() ? 'Criando...' : 'Criar' }}
          </button>
        </div>
      </form>
      @if (erroExperiencia()) {
        <p class="mensagem-erro">{{ erroExperiencia() }}</p>
      }
    </section>
  }

  @if (dadosExperiencias.carregando() && !experiencia()) {
    <section class="estado-pagina" aria-live="polite">
      <span class="carregador" aria-hidden="true"></span>
      <p>Carregando experi\xEAncias...</p>
    </section>
  } @else if (dadosExperiencias.erro()) {
    <section class="estado-pagina estado-erro" role="alert">
      <p class="sobretitulo">EXPERI\xCANCIAS</p>
      <h1>N\xE3o foi poss\xEDvel carregar</h1>
      <p>{{ dadosExperiencias.erro() }}</p>
      <button type="button" (click)="inicializar()">Tentar novamente</button>
    </section>
  } @else if (!experiencia()) {
    <section class="estado-pagina estado-vazio">
      <p class="sobretitulo">PUBLICA\xC7\xC3O MULTIM\xCDDIA</p>
      <h1>Texto conduzindo m\xFAsica.</h1>
      <p>Crie uma sequ\xEAncia de cenas, escolha os trechos sonoros e decida como cada passagem acontece.</p>
      <button type="button" class="botao-principal" (click)="abrirCriacaoExperiencia()">
        Criar primeira experi\xEAncia
      </button>
    </section>
  } @else if (experiencia(); as experienciaAtual) {
    <header class="hero-experiencia">
      <div class="selo-experiencia" aria-hidden="true">
        {{ experienciaAtual.nome.charAt(0).toLocaleUpperCase('pt-BR') }}
      </div>

      <div class="identidade-experiencia">
        <p class="sobretitulo">
          EXPERI\xCANCIA IMERSIVA \xB7
          {{ experienciaAtual.publicada_em ? 'PUBLICADA' : 'RASCUNHO' }}
        </p>
        @if (renomeandoExperiencia()) {
          <form
            class="renomear-experiencia"
            [formGroup]="formularioNomeExperiencia"
            (ngSubmit)="salvarNomeExperiencia()"
          >
            <input type="text" formControlName="nome" aria-label="Nome da experi\xEAncia" />
            <div class="acoes-inline">
              <button type="button" class="botao-neutro" (click)="cancelarRenomeacaoExperiencia()">
                Cancelar
              </button>
              <button type="submit" class="botao-principal" [disabled]="salvandoNomeExperiencia()">
                {{ salvandoNomeExperiencia() ? 'Salvando...' : 'Salvar nome' }}
              </button>
            </div>
          </form>
        } @else {
          <div class="titulo-editavel">
            <h1>{{ experienciaAtual.nome }}</h1>
            <button type="button" (click)="iniciarRenomeacaoExperiencia()">Renomear</button>
          </div>
        }
        <div class="numeros-experiencia">
          <span><strong>{{ dadosBlocos.blocos().length }}</strong> blocos</span>
          <span><strong>{{ dadosRecursos.recursos().length }}</strong> recursos</span>
          <span><strong>{{ dadosAcoes.acoes().length }}</strong> a\xE7\xF5es</span>
        </div>
        @if (erroExperiencia()) {
          <p class="mensagem-erro">{{ erroExperiencia() }}</p>
        }
      </div>

      <div class="acoes-experiencia">
        <button
          type="button"
          class="botao-neutro"
          (click)="abrirTesteLeitura()"
        >
          Testar leitura
        </button>
        <button
          type="button"
          class="botao-principal"
          [disabled]="alterandoPublicacao()"
          (click)="alternarPublicacao()"
        >
          @if (alterandoPublicacao()) {
            Salvando...
          } @else if (experienciaAtual.publicada_em) {
            Retirar publica\xE7\xE3o
          } @else {
            Publicar
          }
        </button>
      </div>
    </header>

    <nav class="navegacao-editor" aria-label="\xC1reas do editor">
      <a href="#roteiro">Roteiro <span>{{ dadosBlocos.blocos().length }}</span></a>
      <a href="#sons">Sons <span>{{ dadosRecursos.recursos().length }}</span></a>
      <a href="#publicacao">Publica\xE7\xE3o</a>
    </nav>

    @if (erroPublicacao()) {
      <p class="mensagem-erro">{{ erroPublicacao() }}</p>
    }

    @if (
      dadosBlocos.carregando() ||
      dadosRecursos.carregando() ||
      dadosAcoes.carregando()
    ) {
      <section class="estado-pagina" aria-live="polite">
        <span class="carregador" aria-hidden="true"></span>
        <p>Carregando editor...</p>
      </section>
    } @else {
      <section id="roteiro" class="secao-editor">
        <header class="cabecalho-secao">
          <div>
            <p class="sobretitulo">SEQU\xCANCIA DE LEITURA</p>
            <h2>Roteiro</h2>
            <span>Cada bloco \xE9 uma cena. O scroll avan\xE7a o som junto com o texto.</span>
          </div>
          <button type="button" class="botao-neutro" (click)="abrirNovoBloco()">
            + Adicionar bloco
          </button>
        </header>

        @if (erroBloco()) {
          <p class="mensagem-erro">{{ erroBloco() }}</p>
        }

        <div class="sequencia-blocos">
          @for (
            bloco of dadosBlocos.blocos();
            track bloco.id;
            let primeiro = $first;
            let ultimo = $last
          ) {
            <article class="bloco-editor" [class.com-editor]="blocoComEditorId() === bloco.id">
              <aside class="ordem-bloco">
                <strong>{{ bloco.ordem.toString().padStart(2, '0') }}</strong>
                <div>
                  <button
                    type="button"
                    aria-label="Mover bloco para cima"
                    [disabled]="primeiro"
                    (click)="moverBloco(bloco.id, -1)"
                  >\u2191</button>
                  <button
                    type="button"
                    aria-label="Mover bloco para baixo"
                    [disabled]="ultimo"
                    (click)="moverBloco(bloco.id, 1)"
                  >\u2193</button>
                </div>
              </aside>

              <div class="conteudo-bloco">
                @if (blocoEditandoId() === bloco.id) {
                  <form class="editor-texto" [formGroup]="formularioBloco" (ngSubmit)="salvarBloco()">
                    <div class="editor-imagem-cena">
                      @if (urlImagemBloco(); as imagemUrl) {
                        <img [src]="imagemUrl" alt="Pr\xE9via da imagem da cena" />
                      } @else {
                        <span>Imagem opcional</span>
                      }
                      <div>
                        <label class="botao-arquivo-imagem">
                          {{ urlImagemBloco() ? 'Trocar imagem' : 'Adicionar imagem' }}
                          <input #imagemBloco type="file" accept="image/*" (change)="selecionarImagemBloco(imagemBloco)" />
                        </label>
                        @if (urlImagemBloco()) {
                          <button type="button" class="acao-textual perigo" (click)="retirarImagemBloco()">Remover</button>
                        }
                      </div>
                    </div>
                    <textarea
                      rows="8"
                      formControlName="conteudo"
                      placeholder="Escreva livremente: texto, poema, cr\xE9ditos..."
                    ></textarea>
                    <div class="acoes-inline">
                      <button type="button" class="botao-neutro" (click)="cancelarEdicaoBloco()">
                        Cancelar
                      </button>
                      <button type="submit" class="botao-principal" [disabled]="salvandoBloco()">
                        {{ salvandoBloco() ? 'Salvando...' : 'Salvar texto' }}
                      </button>
                    </div>
                  </form>
                } @else {
                  <div class="texto-cena">
                    <p class="sobretitulo">CENA {{ bloco.ordem }}</p>
                    @if (imagemDoBloco(bloco); as imagemUrl) {
                      <img class="imagem-cena-editor" [src]="imagemUrl" alt="" />
                    }
                    @if (bloco.conteudo) {
                      <pre>{{ bloco.conteudo }}</pre>
                    } @else {
                      <p class="texto-vazio">Cena visual, sem texto.</p>
                    }
                  </div>
                }

                <div class="cadeia-sonora">
                  <header class="cabecalho-cadeia-sonora">
                    <span class="gatilho">AO APARECER</span>
                    @if (acoesDoBloco(bloco.id).length > 0) {
                      <button
                        type="button"
                        class="testar-cena"
                        [class.ativo]="cenaEmPreviaId() === bloco.id"
                        [disabled]="preparandoPrevia() || preparandoRecursosPrevia()"
                        (click)="alternarPreviaCena(bloco.id)"
                      >
                        @if (preparandoRecursosPrevia()) {
                          Carregando \xE1udio...
                        } @else if (preparandoPrevia() && cenaPreviaAlvoId() === bloco.id) {
                          Preparando...
                        } @else if (cenaEmPreviaId() === bloco.id) {
                          \u25A0 Parar cena
                        } @else {
                          \u25B6 Testar cena
                        }
                      </button>
                    }
                  </header>

                  @for (acao of acoesDoBloco(bloco.id); track acao.id) {
                    <article class="acao-sonora">
                      <div>
                        <span>{{ rotuloModo(acao.acao) }}</span>
                        <strong>{{ recursoNome(acao.recurso_id) }}</strong>
                        <small>{{ resumoAcao(acao) }}</small>
                      </div>
                      <button type="button" class="acao-textual" (click)="editarAcao(acao)">Editar</button>
                      <button type="button" class="acao-textual perigo" (click)="excluirAcao(acao)">Excluir</button>
                    </article>
                  } @empty {
                    <button type="button" class="sem-som" (click)="abrirNovaAcao(bloco.id)">
                      <i>\uFF0B</i>
                      <span>
                        <strong>Nenhuma camada entra nesta cena</strong>
                        <small>Ela pode ficar assim. O som anterior ainda obedece \xE0 passagem configurada na cena anterior.</small>
                      </span>
                      <b>Adicionar camada</b>
                    </button>
                  }

                  @if (cenaEmPreviaId() === bloco.id) {
                    <div class="controle-previa-cena">
                      <span><i></i> Cena {{ bloco.ordem }} tocando</span>
                      <button
                        type="button"
                        [disabled]="!temProximaCena(bloco.id)"
                        (click)="avancarPrevia()"
                      >
                        Pr\xF3xima cena \u2192
                      </button>
                      <button type="button" (click)="pararPrevia()">Parar</button>
                    </div>
                  }

                  @if (erroPrevia() && cenaPreviaAlvoId() === bloco.id) {
                    <p class="mensagem-erro erro-previa">{{ erroPrevia() }}</p>
                  }

                  @if (acoesDoBloco(bloco.id).length > 0) {
                    <button type="button" class="adicionar-camada" (click)="abrirNovaAcao(bloco.id)">
                      + Adicionar camada sonora
                    </button>
                  }
                </div>

                @if (!ultimo && acoesDoBloco(bloco.id).length > 0) {
                  <section
                    class="passagem-cena"
                    [class.editando]="blocoEditandoTransicaoId() === bloco.id"
                  >
                    <header>
                      <div>
                        <span>AO AVAN\xC7AR PARA A PR\xD3XIMA CENA</span>
                        <strong>
                          {{ rotuloTransicaoCena(bloco.id) }}
                          @if (detalheTransicaoCena(bloco.id); as detalhe) {
                            <small>\xB7 {{ detalhe }}</small>
                          }
                        </strong>
                      </div>
                      @if (blocoEditandoTransicaoId() !== bloco.id) {
                        <button type="button" (click)="abrirEdicaoTransicao(bloco.id)">
                          Ajustar passagem
                        </button>
                      }
                    </header>

                    @if (blocoEditandoTransicaoId() === bloco.id) {
                      <div class="editor-passagem">
                        <div class="grupo-passagem">
                          <span>1 \xB7 Quando o som sai</span>
                          <div class="opcoes-transicao" role="group" aria-label="Comportamento do som atual">
                            <button type="button" [class.ativo]="transicaoAudio() === 'terminar-loop'" [attr.aria-pressed]="transicaoAudio() === 'terminar-loop'" (click)="transicaoAudio.set('terminar-loop')">
                              <b>Terminar ciclo</b>
                              <small>espera o trecho chegar ao OUT antes de sair</small>
                            </button>
                            <button type="button" [class.ativo]="transicaoAudio() === 'corte'" [attr.aria-pressed]="transicaoAudio() === 'corte'" (click)="transicaoAudio.set('corte')">
                              <b>Cortar agora</b>
                              <small>come\xE7a a sa\xEDda assim que a pr\xF3xima cena entra</small>
                            </button>
                            <button type="button" [class.ativo]="transicaoAudio() === 'continuar'" [attr.aria-pressed]="transicaoAudio() === 'continuar'" (click)="transicaoAudio.set('continuar')">
                              <b>Continuar som</b>
                              <small>mant\xE9m esta camada tocando sobre a pr\xF3xima cena</small>
                            </button>
                            <button type="button" [class.ativo]="transicaoAudio() === 'cauda'" [attr.aria-pressed]="transicaoAudio() === 'cauda'" (click)="transicaoAudio.set('cauda')">
                              <b>Liberar cauda</b>
                              <small>para de repetir e deixa o restante do \xE1udio soar</small>
                            </button>
                          </div>
                        </div>

                        <div class="grupo-passagem">
                          <span>2 \xB7 Como a sa\xEDda soa</span>
                          <small class="dica-combinacao">Esta escolha funciona junto com a op\xE7\xE3o acima.</small>
                          <div class="opcoes-transicao" role="group" aria-label="Acabamento da passagem">
                            <button type="button" [class.ativo]="acabamentoAudio() === 'direto'" [attr.aria-pressed]="acabamentoAudio() === 'direto'" (click)="acabamentoAudio.set('direto')">
                              <b>Direto</b>
                              <small>sem curva adicional de volume</small>
                            </button>
                            <button type="button" [class.ativo]="acabamentoAudio() === 'fade-out'" [attr.aria-pressed]="acabamentoAudio() === 'fade-out'" (click)="acabamentoAudio.set('fade-out')">
                              <b>Fade-out</b>
                              <small>abaixa esta camada durante a sa\xEDda</small>
                            </button>
                            <button type="button" [class.ativo]="acabamentoAudio() === 'crossfade'" [attr.aria-pressed]="acabamentoAudio() === 'crossfade'" (click)="acabamentoAudio.set('crossfade')">
                              <b>Crossfade</b>
                              <small>mistura a sa\xEDda com a entrada da pr\xF3xima cena</small>
                            </button>
                          </div>
                        </div>

                        @if (acabamentoAudio() === 'fade-out') {
                          <div class="controle-duracao">
                            <span>Dura\xE7\xE3o do fade-out</span>
                            <button type="button" (click)="ajustarDuracaoFadeOut(-0.5)">\u2212</button>
                            <strong>{{ duracaoFadeOut().toFixed(1) }}s</strong>
                            <button type="button" (click)="ajustarDuracaoFadeOut(0.5)">+</button>
                          </div>
                        }

                        @if (acabamentoAudio() === 'crossfade') {
                          <div class="controle-duracao">
                            <span>Dura\xE7\xE3o do crossfade</span>
                            <button type="button" (click)="ajustarDuracaoCrossfade(-0.5)">\u2212</button>
                            <strong>{{ duracaoCrossfade().toFixed(1) }}s</strong>
                            <button type="button" (click)="ajustarDuracaoCrossfade(0.5)">+</button>
                          </div>
                        }

                        @if (erroTransicao()) {
                          <p class="mensagem-erro">{{ erroTransicao() }}</p>
                        }

                        <footer>
                          <button type="button" class="botao-neutro" (click)="cancelarEdicaoTransicao()">Cancelar</button>
                          <button
                            type="button"
                            class="botao-principal"
                            [disabled]="salvandoTransicao()"
                            (click)="salvarTransicaoCena()"
                          >
                            {{ salvandoTransicao() ? 'Salvando...' : 'Salvar passagem' }}
                          </button>
                        </footer>
                      </div>
                    }
                  </section>
                }

                <footer class="acoes-bloco">
                  <button type="button" (click)="iniciarEdicaoBloco(bloco)">Editar conte\xFAdo</button>
                  <button type="button" class="perigo" (click)="excluirBloco(bloco)">Excluir bloco</button>
                </footer>
              </div>

              @if (blocoComEditorId() === bloco.id) {
                <section class="designer-som">
                  <header>
                    <div>
                      <p class="sobretitulo">DESIGN DE SOM \xB7 CENA {{ bloco.ordem }}</p>
                      <h3>{{ acaoEditandoId() ? 'Editar a\xE7\xE3o' : 'Nova a\xE7\xE3o' }}</h3>
                    </div>
                    <button type="button" class="fechar-editor" (click)="fecharEditorAcao()" aria-label="Fechar">\xD7</button>
                  </header>

                  @if (dadosRecursos.recursos().length === 0) {
                    <div class="aviso-sem-recurso">
                      <strong>Adicione um arquivo em Sons antes de montar esta a\xE7\xE3o.</strong>
                      <a href="#sons">Ir para Sons \u2193</a>
                    </div>
                  } @else {
                    <div class="configuracao-som-basica">
                      <div class="etapa-som">
                        <span class="numero-etapa">1</span>
                        <div>
                          <strong>Escolha o \xE1udio</strong>
                          <div class="escolha-recursos">
                            @for (recurso of dadosRecursos.recursos(); track recurso.id) {
                              <button
                                type="button"
                                [class.ativo]="arquivoSelecionado(recurso)"
                                (click)="selecionarRecurso(recurso.id)"
                              >
                                <span>{{ recurso.versao_id ? 'FAIXA' : 'ARQUIVO' }}</span>
                                {{ recurso.nome }}
                              </button>
                            }
                          </div>
                        </div>
                      </div>

                      <div class="etapa-som">
                        <span class="numero-etapa">2</span>
                        <div>
                          <strong>Escolha como toca</strong>
                          <div class="opcoes-som" role="group" aria-label="Modo de reprodu\xE7\xE3o da camada">
                            <button type="button" [class.ativo]="modoAudio() === 'loop'" [attr.aria-pressed]="modoAudio() === 'loop'" (click)="definirModo('loop')">
                              <b>Loop</b><small>repete o recorte enquanto a cena estiver ativa</small>
                            </button>
                            <button type="button" [class.ativo]="modoAudio() === 'tocar'" [attr.aria-pressed]="modoAudio() === 'tocar'" (click)="definirModo('tocar')">
                              <b>Tocar uma vez</b><small>linha, frase ou textura tocada uma vez</small>
                            </button>
                            <button type="button" [class.ativo]="modoAudio() === 'one-shot'" [attr.aria-pressed]="modoAudio() === 'one-shot'" (click)="definirModo('one-shot')">
                              <b>One-shot</b><small>hit ou efeito curto disparado na entrada</small>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="etapa-som">
                      <span class="numero-etapa">3</span>
                      <div class="recorte-audio">
                        <div class="cabecalho-recorte">
                          <div>
                            <strong>Recorte diretamente na waveform</strong>
                            <span>Arraste IN e OUT. Ou\xE7a o resultado sem precisar calcular segundos.</span>
                          </div>
                          @if (modoAudio() === 'loop' && fimTrecho() > inicioTrecho()) {
                            <span class="estado-loop" [class.tocando]="testandoTrecho()">
                              {{ testandoTrecho() ? 'LOOP TOCANDO' : 'LOOP' }} \xB7 {{ formatarTempoPreciso(duracaoTrecho()) }}
                            </span>
                          }
                        </div>
                        @if (carregandoAudio()) {
                          <p>Preparando \xE1udio...</p>
                        } @else if (urlAudio(); as url) {
                          <div class="transporte-waveform">
                            <button type="button" class="botao-play" (click)="alternarAudio()">
                              {{ audioTocando() || testandoTrecho() ? '\u2161' : '\u25B6' }}
                            </button>

                            <div class="painel-waveform">
                              <div
                                #waveformArea
                                class="waveform"
                                [class.carregando]="carregandoFormaOnda()"
                                [class.arrastando]="marcadorArrastando()"
                                [class.loop-em-teste]="testandoTrecho() && modoAudio() === 'loop'"
                                (pointerdown)="buscarNaFormaOnda($event, waveformArea)"
                                (pointermove)="arrastarMarcador($event, waveformArea)"
                                (pointerup)="finalizarArrasteMarcador($event, waveformArea)"
                                (pointercancel)="finalizarArrasteMarcador($event, waveformArea)"
                              >
                                <div class="barras-waveform" aria-hidden="true">
                                  @for (pico of formaOnda(); track $index) {
                                    <i [style.height.%]="pico"></i>
                                  }
                                </div>

                                <div
                                  class="selecao-waveform"
                                  [class.em-reproducao]="testandoTrecho()"
                                  [style.left.%]="percentualTempo(inicioTrecho())"
                                  [style.width.%]="larguraSelecao()"
                                  aria-hidden="true"
                                ></div>

                                @if (tempoNaJanela(tempoAtual())) {
                                  <div
                                    class="playhead-waveform"
                                    [style.left.%]="percentualTempo(tempoAtual())"
                                    aria-hidden="true"
                                  ></div>
                                }

                                <button
                                  type="button"
                                  class="marcador-waveform marcador-inicio"
                                  [class.ativo]="marcadorArrastando() === 'inicio'"
                                  [style.left.%]="percentualTempo(inicioTrecho())"
                                  (pointerdown)="iniciarArrasteMarcador($event, 'inicio', waveformArea)"
                                  (keydown)="ajustarMarcadorTeclado($event, 'inicio')"
                                  [attr.aria-label]="'In\xEDcio do trecho em ' + formatarTempo(inicioTrecho())"
                                >
                                  <span>IN</span>
                                  <strong>{{ formatarTempoPreciso(inicioTrecho()) }}</strong>
                                </button>

                                <button
                                  type="button"
                                  class="marcador-waveform marcador-fim"
                                  [class.ativo]="marcadorArrastando() === 'fim'"
                                  [style.left.%]="percentualTempo(fimTrecho())"
                                  (pointerdown)="iniciarArrasteMarcador($event, 'fim', waveformArea)"
                                  (keydown)="ajustarMarcadorTeclado($event, 'fim')"
                                  [attr.aria-label]="'Fim do trecho em ' + formatarTempo(fimTrecho())"
                                >
                                  <span>OUT</span>
                                  <strong>{{ formatarTempoPreciso(fimTrecho()) }}</strong>
                                </button>
                              </div>

                              <div class="escala-waveform">
                                <span>{{ formatarTempo(inicioJanelaFormaOnda()) }}</span>
                                <strong>{{ formatarTempo(tempoAtual()) }}</strong>
                                <span>{{ formatarTempo(fimJanelaFormaOnda() || duracaoAudio()) }}</span>
                              </div>

                              <div class="resumo-recorte">
                                <span>
                                  TRECHO
                                  <strong>{{ formatarTempoPreciso(duracaoTrecho()) }}</strong>
                                </span>
                                @if (waveformAmpliada()) {
                                  <button type="button" (click)="mostrarFaixaInteira()">
                                    Ver faixa inteira
                                  </button>
                                } @else {
                                  <button
                                    type="button"
                                    [disabled]="!podeAmpliarRecorte()"
                                    (click)="ampliarRecorte()"
                                  >
                                    Ampliar recorte
                                  </button>
                                }
                              </div>
                            </div>
                          </div>

                          @if (erroFormaOnda()) {
                            <p class="aviso-waveform">{{ erroFormaOnda() }}</p>
                          }

                          <div class="controles-recorte">
                            <span>A waveform define o trecho. Use os controles abaixo somente para ajuste fino.</span>

                            <div class="ajuste-fino">
                              <b>IN</b>
                              <button type="button" (click)="ajustarMarcador('inicio', -0.01)" aria-label="Recuar in\xEDcio em 0,01 segundo">\u2212</button>
                              <strong>{{ formatarTempoPreciso(inicioTrecho()) }}</strong>
                              <button type="button" (click)="ajustarMarcador('inicio', 0.01)" aria-label="Avan\xE7ar in\xEDcio em 0,01 segundo">+</button>
                              <button type="button" class="usar-cursor" (click)="marcarInicio()">usar cursor</button>
                            </div>

                            <div class="ajuste-fino">
                              <b>OUT</b>
                              <button type="button" (click)="ajustarMarcador('fim', -0.01)" aria-label="Recuar fim em 0,01 segundo">\u2212</button>
                              <strong>{{ formatarTempoPreciso(fimTrecho()) }}</strong>
                              <button type="button" (click)="ajustarMarcador('fim', 0.01)" aria-label="Avan\xE7ar fim em 0,01 segundo">+</button>
                              <button type="button" class="usar-cursor" (click)="marcarFim()">usar cursor</button>
                            </div>

                            <button
                              type="button"
                              class="testar-loop"
                              [disabled]="fimTrecho() <= inicioTrecho()"
                              (click)="testarTrecho()"
                            >
                              {{ testandoTrecho() ? '\u25A0 Parar' : modoAudio() === 'loop' ? '\u21BB Ouvir loop' : '\u25B6 Ouvir trecho' }}
                            </button>
                          </div>

                          <audio
                            #reprodutorEditor
                            [src]="url"
                            preload="metadata"
                            (loadedmetadata)="atualizarMetadados($event)"
                            (durationchange)="atualizarMetadados($event)"
                            (timeupdate)="atualizarTempo($event)"
                            (play)="audioTocando.set(true)"
                            (pause)="audioTocando.set(false)"
                            (ended)="audioTocando.set(false)"
                          ></audio>
                        } @else {
                          <p>Escolha um \xE1udio para marcar o trecho.</p>
                        }
                      </div>
                    </div>

                    <div class="entrada-audio">
                      <div class="controle-duracao controle-volume">
                        <span>Volume da camada</span>
                        <input
                          type="range"
                          min="-60"
                          max="12"
                          step="0.5"
                          [value]="volumeDb()"
                          aria-label="Volume da camada em decib\xE9is"
                          (input)="definirVolumeDb($event)"
                        />
                        <strong>{{ rotuloVolumeDb() }}</strong>
                      </div>

                      <button
                        type="button"
                        class="interruptor"
                        [class.ativo]="fadeInAtivo()"
                        (click)="fadeInAtivo.set(!fadeInAtivo())"
                      >
                        <span></span> Fade-in na entrada
                      </button>
                      @if (fadeInAtivo()) {
                        <div class="controle-duracao">
                          <button type="button" (click)="ajustarDuracaoFadeIn(-0.5)">\u2212</button>
                          <strong>{{ duracaoFadeIn().toFixed(1) }}s</strong>
                          <button type="button" (click)="ajustarDuracaoFadeIn(0.5)">+</button>
                        </div>
                      }
                    </div>

                    @if (erroAcao()) {
                      <p class="mensagem-erro">{{ erroAcao() }}</p>
                    }

                    <footer class="rodape-designer">
                      <button type="button" class="botao-neutro" (click)="fecharEditorAcao()">Cancelar</button>
                      <button type="button" class="botao-principal" [disabled]="salvandoAcao()" (click)="salvarAcao()">
                        {{ salvandoAcao() ? 'Salvando...' : 'Salvar a\xE7\xE3o sonora' }}
                      </button>
                    </footer>
                  }
                </section>
              }
            </article>
          } @empty {
            <div class="estado-vazio roteiro-vazio">
              <strong>O roteiro ainda est\xE1 vazio.</strong>
              <p>Comece pela primeira cena. A ordem ser\xE1 montada automaticamente.</p>
              <button type="button" class="botao-principal" (click)="abrirNovoBloco()">
                Criar primeira cena
              </button>
            </div>
          }

          @if (criandoBloco()) {
            <article class="novo-bloco">
              <p class="sobretitulo">NOVA CENA</p>
              <form [formGroup]="formularioBloco" (ngSubmit)="salvarBloco()">
                <div class="editor-imagem-cena">
                  @if (urlImagemBloco(); as imagemUrl) {
                    <img [src]="imagemUrl" alt="Pr\xE9via da imagem da cena" />
                  } @else {
                    <span>Imagem opcional</span>
                  }
                  <div>
                    <label class="botao-arquivo-imagem">
                      {{ urlImagemBloco() ? 'Trocar imagem' : 'Adicionar imagem' }}
                      <input #imagemNovoBloco type="file" accept="image/*" (change)="selecionarImagemBloco(imagemNovoBloco)" />
                    </label>
                    @if (urlImagemBloco()) {
                      <button type="button" class="acao-textual perigo" (click)="retirarImagemBloco()">Remover</button>
                    }
                  </div>
                </div>
                <textarea
                  rows="9"
                  formControlName="conteudo"
                  placeholder="Escreva livremente: texto, poema, cr\xE9ditos..."
                ></textarea>
                <div class="acoes-inline">
                  <button type="button" class="botao-neutro" (click)="cancelarEdicaoBloco()">Cancelar</button>
                  <button type="submit" class="botao-principal" [disabled]="salvandoBloco()">
                    {{ salvandoBloco() ? 'Criando...' : 'Adicionar \xE0 sequ\xEAncia' }}
                  </button>
                </div>
              </form>
            </article>
          }
        </div>
      </section>

      <section id="sons" class="secao-editor">
        <header class="cabecalho-secao">
          <div>
            <p class="sobretitulo">MAT\xC9RIA-PRIMA</p>
            <h2>Sons</h2>
            <span>Faixas completas, loops, ambi\xEAncias e efeitos usados no roteiro.</span>
          </div>
        </header>

        <div class="biblioteca-sons">
          <div class="entrada-sons">
            <form class="upload-som" [formGroup]="formularioRecurso" (ngSubmit)="enviarRecurso(arquivoRecurso)">
              <div>
                <p class="sobretitulo">NOVO ARQUIVO</p>
                <h3>Adicionar som</h3>
                <p>Use qualquer dura\xE7\xE3o. O recorte acontece depois, dentro da cena.</p>
              </div>
              <label>
                <span>Nome</span>
                <input type="text" formControlName="nome" placeholder="Ex.: loop de baixo" />
              </label>
              <label class="arquivo-upload">
                <span>Arquivo de \xE1udio</span>
                <input #arquivoRecurso type="file" accept="audio/*" />
              </label>
              <button type="submit" class="botao-principal" [disabled]="enviandoRecurso()">
                {{ enviandoRecurso() ? 'Enviando...' : 'Adicionar \xE0 biblioteca' }}
              </button>
              @if (erroRecurso()) {
                <p class="mensagem-erro">{{ erroRecurso() }}</p>
              }
            </form>

            <section class="versoes-faixa">
              <button type="button" class="abrir-versoes" (click)="alternarSelecaoVersao()">
                <span>
                  <small>SEM NOVO UPLOAD</small>
                  <strong>Usar vers\xE3o de faixa</strong>
                </span>
                <b>{{ selecionandoVersao() ? '\u2212' : '+' }}</b>
              </button>

              @if (selecionandoVersao()) {
                <div class="lista-versoes">
                  @if (dadosRecursos.carregandoVersoes()) {
                    <p>Carregando vers\xF5es...</p>
                  } @else if (dadosRecursos.erroVersoes()) {
                    <p class="mensagem-erro">{{ dadosRecursos.erroVersoes() }}</p>
                  } @else {
                    @for (versao of dadosRecursos.versoesDisponiveis(); track versao.id) {
                      <article>
                        <div>
                          <strong>{{ versao.faixa_titulo }}</strong>
                          <span>{{ versao.versao }} \xB7 {{ versao.nome_arquivo }}</span>
                        </div>
                        <button
                          type="button"
                          [disabled]="versaoJaVinculada(versao.id) || vinculandoVersaoId() === versao.id"
                          (click)="vincularVersao(versao)"
                        >
                          @if (versaoJaVinculada(versao.id)) {
                            Adicionada
                          } @else if (vinculandoVersaoId() === versao.id) {
                            Adicionando...
                          } @else {
                            Usar
                          }
                        </button>
                      </article>
                    } @empty {
                      <p>Nenhuma vers\xE3o de faixa confirmada.</p>
                    }
                  }
                </div>
              }
            </section>
          </div>

          <div class="lista-sons">
            @for (recurso of dadosRecursos.recursos(); track recurso.id; let indice = $index) {
              <article>
                <span class="indice-som">{{ (indice + 1).toString().padStart(2, '0') }}</span>
                <div>
                  <p>{{ recurso.versao_id ? 'VERS\xC3O DE FAIXA' : 'ARQUIVO PR\xD3PRIO' }}</p>
                  <h3>{{ recurso.nome }}</h3>
                  <small>{{ recurso.nome_arquivo || 'Arquivo vinculado \xE0 faixa' }}</small>
                </div>
                <strong>
                  {{ recurso.confirmado_em || recurso.versao_id ? 'PRONTO' : 'PROCESSANDO' }}
                </strong>
                <button
                  type="button"
                  class="excluir-som"
                  [disabled]="excluindoRecursoId() === recurso.id"
                  (click)="excluirRecurso(recurso)"
                >
                  {{ excluindoRecursoId() === recurso.id ? 'Excluindo...' : 'Excluir' }}
                </button>
              </article>
            } @empty {
              <div class="estado-vazio">
                <strong>Nenhum som adicionado.</strong>
                <p>Os arquivos enviados aqui ficam dispon\xEDveis para todos os blocos desta experi\xEAncia.</p>
              </div>
            }
          </div>
        </div>
      </section>

      <section id="publicacao" class="secao-editor secao-publicacao">
        <header class="cabecalho-secao">
          <div>
            <p class="sobretitulo">PLAY FL\xCAIVA</p>
            <h2>Publica\xE7\xE3o</h2>
            <span>O leitor p\xFAblico mant\xE9m o texto simples e executa a sequ\xEAncia sonora no scroll.</span>
          </div>
        </header>

        <section class="vinculo-trabalho">
          <button type="button" class="abrir-vinculo" (click)="alternarEscolhaAlbum()">
            <span>
              <small>TRABALHO RELACIONADO</small>
              <strong>{{ nomeAlbumVinculado() }}</strong>
            </span>
            <b>{{ escolhendoAlbum() ? '\u2212' : 'Alterar' }}</b>
          </button>

          @if (escolhendoAlbum()) {
            <div class="lista-albuns">
              <button
                type="button"
                [class.ativo]="!experienciaAtual.album_id"
                [disabled]="salvandoAlbum()"
                (click)="definirAlbum(null)"
              >
                <span>INDEPENDENTE</span>
                <strong>Sem trabalho vinculado</strong>
              </button>

              @if (dadosExperiencias.carregandoAlbuns()) {
                <p>Carregando trabalhos...</p>
              } @else if (dadosExperiencias.erroAlbuns()) {
                <p class="mensagem-erro">{{ dadosExperiencias.erroAlbuns() }}</p>
              } @else {
                @for (album of dadosExperiencias.albunsDisponiveis(); track album.id) {
                  <button
                    type="button"
                    [class.ativo]="experienciaAtual.album_id === album.id"
                    [disabled]="salvandoAlbum()"
                    (click)="definirAlbum(album.id)"
                  >
                    <span>{{ album.tipo_publico || 'TRABALHO' }}</span>
                    <strong>{{ album.nome }}</strong>
                  </button>
                } @empty {
                  <p>Nenhum trabalho publicado dispon\xEDvel.</p>
                }
              }
            </div>
          }
        </section>

        <div class="painel-publicacao">
          <div>
            <span class="status-publicacao" [class.publicada]="experienciaAtual.publicada_em">
              {{ experienciaAtual.publicada_em ? 'PUBLICADA' : 'RASCUNHO' }}
            </span>
            <strong>{{ experienciaAtual.nome }}</strong>
            <p>{{ dadosBlocos.blocos().length }} cenas \xB7 {{ dadosAcoes.acoes().length }} a\xE7\xF5es sonoras</p>
          </div>
          <div class="acoes-inline">
            <button
              type="button"
              class="botao-perigo"
              [disabled]="excluindoExperiencia()"
              (click)="excluirExperiencia()"
            >
              {{ excluindoExperiencia() ? 'Excluindo...' : 'Excluir experi\xEAncia' }}
            </button>
            <button
              type="button"
              class="botao-neutro"
              (click)="abrirTesteLeitura()"
            >
              Testar leitura
            </button>
            <button type="button" class="botao-principal" [disabled]="alterandoPublicacao()" (click)="alternarPublicacao()">
              {{ experienciaAtual.publicada_em ? 'Retirar publica\xE7\xE3o' : 'Publicar experi\xEAncia' }}
            </button>
          </div>
        </div>
        @if (erroExperiencia()) {
          <p class="mensagem-erro">{{ erroExperiencia() }}</p>
        }
      </section>
    }
  }
</main>

@if (testandoLeitura() && experiencia(); as experienciaEmTeste) {
  <section
    class="teste-leitura-overlay"
    role="dialog"
    aria-modal="true"
    aria-label="Teste da experi\xEAncia"
  >
    <header class="barra-teste-leitura">
      <div>
        <span>MODO DE TESTE</span>
        <strong>{{ experienciaEmTeste.nome }}</strong>
      </div>
      <button type="button" (click)="fecharTesteLeitura()">
        Voltar \xE0 edi\xE7\xE3o
      </button>
    </header>

    <div class="leitor-teste-integrado">
      <app-experiencia-imersiva-publica
        [experienciaIdEntrada]="experienciaEmTeste.id"
        [modoTesteEntrada]="true"
        [integrado]="true"
      />
    </div>
  </section>
}
`, styles: ['@charset "UTF-8";\n\n/* apps/studio-dash/src/app/paginas/experiencias-imersivas/experiencias-imersivas.scss */\n:host {\n  display: block;\n}\n* {\n  box-sizing: border-box;\n}\nbutton,\ninput,\ntextarea {\n  font: inherit;\n}\nbutton,\na {\n  color: inherit;\n}\nbutton {\n  cursor: pointer;\n}\na {\n  text-decoration: none;\n}\n.pagina-experiencias {\n  width: 100%;\n  max-width: 112rem;\n  margin: 0 auto;\n  padding: 1.35rem 1.5rem 6rem;\n  color: var(--app-text);\n}\n.barra-experiencias {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.2rem;\n}\n.lista-experiencias {\n  display: flex;\n  min-width: 0;\n  gap: 0.4rem;\n  overflow-x: auto;\n  padding: 0.1rem 0;\n}\n.lista-experiencias button,\n.nova-experiencia {\n  display: flex;\n  min-height: 2.3rem;\n  flex: 0 0 auto;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.35rem 0.65rem;\n  background: transparent;\n  color: var(--app-text-soft);\n  border: 0.0625rem solid transparent;\n  border-radius: 999rem;\n  font-size: 0.62rem;\n  font-weight: 700;\n}\n.lista-experiencias button span {\n  display: grid;\n  width: 1.5rem;\n  height: 1.5rem;\n  place-items: center;\n  background: var(--app-surface-muted);\n  color: var(--studio-brand);\n  border-radius: 50%;\n  font-size: 0.55rem;\n}\n.lista-experiencias button:hover,\n.lista-experiencias button.ativa {\n  background: var(--app-surface);\n  color: var(--app-text);\n  border-color: var(--app-border);\n}\n.lista-experiencias button.ativa span {\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n}\n.nova-experiencia {\n  color: var(--studio-brand);\n  border-color: var(--app-border);\n  border-radius: var(--radius-small);\n}\n.criacao-experiencia {\n  margin-bottom: 1rem;\n  padding: 1rem;\n  background: var(--app-surface);\n  border-top: 0.16rem solid var(--studio-brand);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.criacao-experiencia form {\n  display: grid;\n  grid-template-columns: minmax(12rem, 1fr) auto;\n  align-items: end;\n  gap: 1rem;\n}\n.criacao-experiencia label,\n.upload-som label {\n  display: grid;\n  gap: 0.35rem;\n}\n.criacao-experiencia label span,\n.upload-som label span {\n  color: var(--app-text-muted);\n  font-size: 0.53rem;\n  font-weight: 760;\n  letter-spacing: 0.12em;\n}\ninput,\ntextarea {\n  width: 100%;\n  background: var(--app-background);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-small);\n  outline: none;\n}\ninput:focus,\ntextarea:focus {\n  border-color: var(--studio-brand);\n  box-shadow: 0 0 0 0.14rem var(--studio-brand-soft);\n}\ninput {\n  min-height: 2.65rem;\n  padding: 0 0.75rem;\n}\ntextarea {\n  min-height: 11rem;\n  padding: 1rem;\n  resize: vertical;\n  font-size: 0.78rem;\n  line-height: 1.65;\n}\n.hero-experiencia {\n  display: grid;\n  min-height: 14rem;\n  grid-template-columns: 10.5rem minmax(0, 1fr) auto;\n  align-items: end;\n  gap: 2rem;\n  overflow: hidden;\n  padding: 1.75rem;\n  background:\n    linear-gradient(\n      115deg,\n      var(--studio-brand-soft),\n      transparent 48%),\n    var(--app-surface);\n  border-top: 0.18rem solid var(--studio-brand);\n  border-bottom: 0.0625rem solid var(--app-border-strong);\n}\n.selo-experiencia {\n  display: grid;\n  width: 10.5rem;\n  aspect-ratio: 1;\n  place-items: center;\n  background:\n    linear-gradient(\n      145deg,\n      var(--studio-brand-soft),\n      var(--app-surface-muted));\n  color: var(--studio-brand);\n  border-radius: var(--radius-small);\n  box-shadow: 0 1.2rem 2.8rem rgba(0, 0, 0, 0.22);\n  font-size: 3rem;\n  font-weight: 820;\n}\n.identidade-experiencia {\n  align-self: center;\n}\n.sobretitulo {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.57rem;\n  font-weight: 780;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.identidade-experiencia h1 {\n  margin: 0.35rem 0 0.75rem;\n  font-size: clamp(2.8rem, 6vw, 5.4rem);\n  line-height: 0.92;\n  letter-spacing: -0.075em;\n}\n.titulo-editavel {\n  display: flex;\n  align-items: end;\n  gap: 0.75rem;\n}\n.titulo-editavel button {\n  margin-bottom: 1rem;\n  padding: 0;\n  background: transparent;\n  color: var(--app-text-muted);\n  border: 0;\n  font-size: 0.55rem;\n  font-weight: 700;\n}\n.titulo-editavel button:hover {\n  color: var(--studio-brand);\n}\n.renomear-experiencia {\n  display: grid;\n  max-width: 42rem;\n  gap: 0.6rem;\n  margin: 0.55rem 0 0.75rem;\n}\n.renomear-experiencia input {\n  min-height: 3.4rem;\n  font-size: clamp(1.5rem, 4vw, 3.2rem);\n  font-weight: 760;\n  letter-spacing: -0.055em;\n}\n.renomear-experiencia .acoes-inline {\n  justify-content: flex-start;\n}\n.numeros-experiencia {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.55rem 1rem;\n  color: var(--app-text-soft);\n  font-size: 0.68rem;\n}\n.numeros-experiencia span + span::before {\n  margin-right: 1rem;\n  color: var(--app-border-strong);\n  content: "\\2022";\n}\n.numeros-experiencia strong {\n  color: var(--app-text);\n}\n.acoes-experiencia,\n.acoes-inline {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.55rem;\n}\n.botao-principal,\n.botao-neutro,\n.estado-pagina button {\n  display: inline-flex;\n  min-height: 2.55rem;\n  align-items: center;\n  justify-content: center;\n  padding: 0.68rem 0.9rem;\n  border-radius: var(--radius-small);\n  font-size: 0.64rem;\n  font-weight: 720;\n}\n.botao-perigo {\n  display: inline-flex;\n  min-height: 2.55rem;\n  align-items: center;\n  justify-content: center;\n  padding: 0.68rem 0.9rem;\n  background: transparent;\n  color: #d9807a;\n  border: 0.0625rem solid color-mix(in srgb, #d9807a 55%, transparent);\n  border-radius: var(--radius-small);\n  font-size: 0.64rem;\n  font-weight: 720;\n}\n.botao-principal {\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0.0625rem solid var(--studio-brand);\n}\n.botao-neutro,\n.estado-pagina button {\n  background: transparent;\n  border: 0.0625rem solid var(--app-border-strong);\n}\nbutton:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.navegacao-editor {\n  position: sticky;\n  z-index: 12;\n  top: 3.91rem;\n  display: flex;\n  gap: 1.5rem;\n  background: var(--app-background);\n  border-bottom: 0.0625rem solid var(--app-border);\n  -webkit-backdrop-filter: blur(0.7rem);\n  backdrop-filter: blur(0.7rem);\n}\n.navegacao-editor a {\n  display: flex;\n  min-height: 3.25rem;\n  align-items: center;\n  gap: 0.35rem;\n  color: var(--app-text-soft);\n  font-size: 0.66rem;\n  font-weight: 700;\n}\n.navegacao-editor a:hover {\n  color: var(--studio-brand);\n}\n.navegacao-editor span {\n  color: var(--app-text-muted);\n  font-size: 0.55rem;\n}\n.secao-editor {\n  scroll-margin-top: 8rem;\n  padding-top: 4rem;\n}\n.cabecalho-secao {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.2rem;\n}\n.cabecalho-secao h2 {\n  margin: 0.28rem 0 0.2rem;\n  font-size: clamp(1.65rem, 3vw, 2.5rem);\n  letter-spacing: -0.055em;\n}\n.cabecalho-secao > div > span {\n  color: var(--app-text-muted);\n  font-size: 0.65rem;\n}\n.sequencia-blocos {\n  border-top: 0.0625rem solid var(--app-border-strong);\n}\n.bloco-editor {\n  display: grid;\n  grid-template-columns: 5rem minmax(0, 1fr);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.bloco-editor.com-editor {\n  background: var(--app-surface);\n}\n.ordem-bloco {\n  display: grid;\n  align-content: start;\n  justify-items: center;\n  gap: 0.75rem;\n  padding: 1.3rem 0.7rem;\n  border-right: 0.0625rem solid var(--app-border);\n}\n.ordem-bloco strong {\n  color: var(--app-text-muted);\n  font-size: 0.65rem;\n  font-variant-numeric: tabular-nums;\n}\n.ordem-bloco div {\n  display: grid;\n  gap: 0.25rem;\n}\n.ordem-bloco button {\n  width: 1.75rem;\n  height: 1.75rem;\n  padding: 0;\n  background: transparent;\n  color: var(--app-text-muted);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: 50%;\n  font-size: 0.62rem;\n}\n.conteudo-bloco {\n  min-width: 0;\n  padding: 1.3rem 1.1rem 1rem;\n}\n.texto-cena pre {\n  max-width: 54rem;\n  margin: 0.65rem 0 1.4rem;\n  overflow: auto;\n  font: inherit;\n  font-size: 0.78rem;\n  line-height: 1.75;\n  white-space: pre-wrap;\n}\n.texto-vazio {\n  color: var(--app-text-muted);\n  font-size: 0.68rem;\n  font-style: italic;\n}\n.editor-texto {\n  display: grid;\n  gap: 0.65rem;\n  margin-bottom: 1.1rem;\n}\n.editor-imagem-cena {\n  display: grid;\n  min-height: 9rem;\n  grid-template-columns: minmax(9rem, 15rem) minmax(0, 1fr);\n  align-items: center;\n  gap: 1rem;\n  padding: 0.75rem;\n  background: var(--app-surface-muted);\n  border: 0.0625rem solid var(--app-border);\n}\n.editor-imagem-cena > img,\n.imagem-cena-editor {\n  display: block;\n  width: 100%;\n  max-height: 18rem;\n  object-fit: cover;\n}\n.editor-imagem-cena > span {\n  display: grid;\n  min-height: 7rem;\n  place-items: center;\n  color: var(--app-text-muted);\n  border: 0.0625rem dashed var(--app-border-strong);\n  font-size: 0.62rem;\n}\n.editor-imagem-cena > div {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.botao-arquivo-imagem {\n  display: inline-flex;\n  min-height: 2.35rem;\n  align-items: center;\n  padding: 0.6rem 0.8rem;\n  background: var(--app-text);\n  color: var(--app-surface);\n  font-size: 0.62rem;\n  font-weight: 750;\n  cursor: pointer;\n}\n.botao-arquivo-imagem input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  opacity: 0;\n}\n.imagem-cena-editor {\n  max-width: 38rem;\n  margin: 0.65rem 0 1rem;\n}\n.cadeia-sonora {\n  display: grid;\n  gap: 0.5rem;\n  padding-top: 0.9rem;\n  border-top: 0.0625rem solid var(--app-border);\n}\n.cabecalho-cadeia-sonora {\n  display: flex;\n  min-height: 1.9rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.gatilho {\n  color: var(--studio-brand);\n  font-size: 0.49rem;\n  font-weight: 800;\n  letter-spacing: 0.14em;\n}\n.acao-sonora {\n  display: grid;\n  min-height: 4.2rem;\n  grid-template-columns: minmax(0, 1fr) auto auto;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.55rem 0.7rem;\n  background: var(--app-surface-muted);\n  border-left: 0.14rem solid var(--studio-brand);\n}\n.testar-cena {\n  min-height: 1.9rem;\n  padding: 0.32rem 0.58rem;\n  background: transparent;\n  color: var(--studio-brand);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 999rem;\n  font-size: 0.52rem;\n  font-weight: 750;\n}\n.testar-cena.ativo {\n  background: color-mix(in srgb, var(--studio-brand) 13%, transparent);\n  border-color: var(--studio-brand);\n}\n.controle-previa-cena {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.55rem 0.7rem;\n  background: color-mix(in srgb, var(--studio-brand) 8%, var(--app-surface));\n  border: 0.0625rem solid color-mix(in srgb, var(--studio-brand) 32%, var(--app-border));\n}\n.controle-previa-cena > span {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin-right: auto;\n  color: var(--app-text-soft);\n  font-size: 0.54rem;\n  font-weight: 720;\n}\n.controle-previa-cena i {\n  width: 0.48rem;\n  height: 0.48rem;\n  background: var(--studio-brand);\n  border-radius: 50%;\n  box-shadow: 0 0 0 0 color-mix(in srgb, var(--studio-brand) 45%, transparent);\n  animation: pulso-previa 1.4s ease-out infinite;\n}\n.controle-previa-cena button {\n  min-height: 1.9rem;\n  padding: 0.32rem 0.55rem;\n  background: transparent;\n  color: var(--app-text-soft);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-small);\n  font-size: 0.51rem;\n  font-weight: 700;\n}\n.erro-previa {\n  margin: 0;\n}\n@keyframes pulso-previa {\n  70% {\n    box-shadow: 0 0 0 0.45rem transparent;\n  }\n  100% {\n    box-shadow: 0 0 0 0 transparent;\n  }\n}\n.play-mini {\n  display: grid;\n  width: 2.35rem;\n  height: 2.35rem;\n  place-items: center;\n  padding: 0;\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0;\n  border-radius: 50%;\n  font-size: 0.55rem;\n}\n.acao-sonora > div {\n  display: grid;\n  min-width: 0;\n  gap: 0.08rem;\n}\n.acao-sonora span,\n.lista-sons article p {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.48rem;\n  font-weight: 760;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.acao-sonora strong {\n  overflow: hidden;\n  font-size: 0.71rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.acao-sonora small {\n  color: var(--app-text-muted);\n  font-size: 0.54rem;\n  line-height: 1.4;\n}\n.acao-textual,\n.acoes-bloco button,\n.adicionar-camada {\n  padding: 0;\n  background: transparent;\n  color: var(--app-text-soft);\n  border: 0;\n  font-size: 0.57rem;\n  font-weight: 700;\n}\n.perigo {\n  color: #d9807a !important;\n}\n.sem-som {\n  display: grid;\n  min-height: 3.8rem;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.65rem 0.75rem;\n  background: transparent;\n  color: var(--app-text-muted);\n  border: 0.0625rem dashed var(--app-border-strong);\n  border-radius: var(--radius-small);\n  font-size: 0.62rem;\n  text-align: left;\n}\n.sem-som > i {\n  display: grid;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  background: var(--app-surface-muted);\n  color: var(--studio-brand);\n  border-radius: 50%;\n  font-size: 0.9rem;\n  font-style: normal;\n}\n.sem-som > span {\n  display: grid;\n  min-width: 0;\n  gap: 0.15rem;\n}\n.sem-som strong {\n  color: var(--app-text-soft);\n  font-size: 0.6rem;\n}\n.sem-som small {\n  max-width: 34rem;\n  color: var(--app-text-muted);\n  font-size: 0.5rem;\n  line-height: 1.4;\n}\n.sem-som > b {\n  color: var(--studio-brand);\n  font-size: 0.54rem;\n  white-space: nowrap;\n}\n.adicionar-camada {\n  justify-self: start;\n  color: var(--studio-brand);\n}\n.passagem-cena {\n  position: relative;\n  margin-top: 1rem;\n  padding: 0.8rem 0.9rem;\n  background: color-mix(in srgb, var(--studio-brand) 5%, var(--app-background));\n  border: 0.0625rem solid var(--app-border);\n  border-left: 0.16rem solid var(--studio-brand);\n}\n.passagem-cena::after {\n  position: absolute;\n  bottom: -1.05rem;\n  left: 1.1rem;\n  color: var(--studio-brand);\n  font-size: 0.7rem;\n  content: "\\2193";\n}\n.passagem-cena > header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.passagem-cena > header > div {\n  display: grid;\n  gap: 0.18rem;\n}\n.passagem-cena > header span {\n  color: var(--app-text-muted);\n  font-size: 0.43rem;\n  font-weight: 800;\n  letter-spacing: 0.11em;\n}\n.passagem-cena > header strong {\n  font-size: 0.66rem;\n  text-transform: capitalize;\n}\n.passagem-cena > header small {\n  color: var(--app-text-muted);\n  font-size: 0.52rem;\n  font-weight: 600;\n}\n.passagem-cena > header button {\n  padding: 0;\n  background: transparent;\n  color: var(--studio-brand);\n  border: 0;\n  font-size: 0.53rem;\n  font-weight: 720;\n}\n.passagem-cena.editando {\n  background: var(--app-surface);\n  border-color: color-mix(in srgb, var(--studio-brand) 42%, var(--app-border));\n}\n.editor-passagem {\n  display: grid;\n  gap: 1rem;\n  margin-top: 0.8rem;\n  padding-top: 0.8rem;\n  border-top: 0.0625rem solid var(--app-border);\n}\n.grupo-passagem {\n  display: grid;\n  gap: 0.45rem;\n}\n.grupo-passagem > span {\n  color: var(--app-text);\n  font-size: 0.55rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.grupo-passagem > .dica-combinacao {\n  margin-top: -0.2rem;\n  color: var(--app-text-muted);\n  font-size: 0.5rem;\n}\n.passagem-cena .opcoes-transicao button {\n  display: grid;\n  min-width: 10rem;\n  flex: 1 1 10rem;\n  gap: 0.18rem;\n  background: var(--app-background);\n  color: var(--app-text-soft);\n  border-color: var(--app-border-strong);\n}\n.passagem-cena .opcoes-transicao b {\n  color: inherit;\n  font-size: 0.59rem;\n}\n.passagem-cena .opcoes-transicao small {\n  max-width: 15rem;\n  color: var(--app-text-muted);\n  font-size: 0.49rem;\n  line-height: 1.35;\n}\n.passagem-cena .opcoes-transicao button.ativo {\n  background: color-mix(in srgb, var(--studio-brand) 12%, var(--app-background));\n  color: var(--app-text);\n}\n.passagem-cena .controle-duracao {\n  color: var(--app-text-muted);\n}\n.passagem-cena .controle-duracao button {\n  background: var(--app-background);\n  color: var(--app-text);\n  border-color: var(--app-border-strong);\n}\n.passagem-cena .controle-duracao strong {\n  color: var(--app-text);\n}\n.editor-passagem > footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.acoes-bloco {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.9rem;\n  margin-top: 0.9rem;\n}\n.designer-som {\n  grid-column: 1/-1;\n  padding: 1.35rem;\n  background: #100d0f;\n  color: #f4f0f2;\n  border-top: 0.12rem solid var(--studio-brand);\n}\n.designer-som > header {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n}\n.designer-som h3 {\n  margin: 0.22rem 0 0;\n  font-size: 1.25rem;\n  letter-spacing: -0.035em;\n}\n.configuracao-som-basica {\n  display: grid;\n  grid-template-columns: minmax(15rem, 0.8fr) minmax(24rem, 1.2fr);\n  gap: 0.65rem;\n  margin-bottom: 0.65rem;\n}\n.configuracao-som-basica .etapa-som {\n  height: 100%;\n  padding: 0.9rem;\n  background: #181316;\n  border: 0.0625rem solid #352d32;\n}\n.fechar-editor {\n  display: grid;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  padding: 0;\n  background: transparent;\n  color: #a89da3;\n  border: 0.0625rem solid #352d32;\n  border-radius: 50%;\n  font-size: 1rem;\n}\n.etapa-som {\n  display: grid;\n  grid-template-columns: 2rem minmax(0, 1fr);\n  gap: 0.8rem;\n  padding: 1rem 0;\n  border-top: 0.0625rem solid #352d32;\n}\n.numero-etapa {\n  display: grid;\n  width: 1.6rem;\n  height: 1.6rem;\n  place-items: center;\n  background: #221b1f;\n  color: var(--studio-brand);\n  border-radius: 50%;\n  font-size: 0.55rem;\n  font-weight: 780;\n}\n.etapa-som > div > strong,\n.recorte-audio > strong {\n  display: block;\n  margin-bottom: 0.7rem;\n  font-size: 0.68rem;\n}\n.cabecalho-recorte {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.8rem;\n}\n.cabecalho-recorte > div {\n  display: grid;\n  gap: 0.2rem;\n}\n.cabecalho-recorte strong {\n  font-size: 0.72rem;\n}\n.cabecalho-recorte > div span {\n  color: #8e8389;\n  font-size: 0.52rem;\n}\n.estado-loop {\n  flex: 0 0 auto;\n  padding: 0.4rem 0.55rem;\n  background: #221b1f;\n  color: var(--studio-brand);\n  border: 0.0625rem solid #4b3e45;\n  font-size: 0.47rem;\n  font-weight: 800;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: 0.08em;\n}\n.estado-loop.tocando {\n  background: color-mix(in srgb, var(--studio-brand) 18%, #181316);\n  border-color: var(--studio-brand);\n}\n.escolha-recursos,\n.opcoes-som,\n.opcoes-transicao {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.45rem;\n}\n.escolha-recursos button,\n.opcoes-som button,\n.opcoes-transicao button {\n  min-height: 2.75rem;\n  padding: 0.55rem 0.7rem;\n  background: #181316;\n  color: #c9c0c5;\n  border: 0.0625rem solid #352d32;\n  border-radius: 0.3rem;\n  font-size: 0.59rem;\n  text-align: left;\n}\n.escolha-recursos button.ativo,\n.opcoes-som button.ativo,\n.opcoes-transicao button.ativo {\n  background: color-mix(in srgb, var(--studio-brand) 15%, #181316);\n  color: #fff;\n  border-color: var(--studio-brand);\n}\n.escolha-recursos button span {\n  display: block;\n  margin-bottom: 0.15rem;\n  color: #80747a;\n  font-size: 0.44rem;\n  letter-spacing: 0.1em;\n}\n.opcoes-som button {\n  display: grid;\n  min-width: 9rem;\n  gap: 0.15rem;\n}\n.opcoes-som b {\n  font-size: 0.64rem;\n}\n.opcoes-som small {\n  color: #8e8389;\n  font-size: 0.5rem;\n}\n.transporte-waveform {\n  display: grid;\n  grid-template-columns: 2.5rem minmax(0, 1fr);\n  align-items: center;\n  gap: 0.65rem;\n  padding: 1rem;\n  background: #181316;\n  border: 0.0625rem solid #352d32;\n}\n.botao-play {\n  display: grid;\n  width: 2.35rem;\n  height: 2.35rem;\n  place-items: center;\n  padding: 0;\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0;\n  border-radius: 50%;\n  font-size: 0.58rem;\n}\n.painel-waveform {\n  min-width: 0;\n}\n.waveform {\n  position: relative;\n  height: 9rem;\n  margin: 1.7rem 2.6rem 0;\n  background:\n    linear-gradient(#2f272c 0 0) center/100% 0.0625rem no-repeat,\n    repeating-linear-gradient(\n      90deg,\n      transparent 0,\n      transparent calc(10% - 0.0625rem),\n      rgba(255, 255, 255, 0.045) calc(10% - 0.0625rem),\n      rgba(255, 255, 255, 0.045) 10%);\n  border-block: 0.0625rem solid #2f272c;\n  cursor: crosshair;\n  touch-action: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.waveform.loop-em-teste {\n  border-block-color: color-mix(in srgb, var(--studio-brand) 70%, #2f272c);\n}\n.waveform.arrastando {\n  cursor: ew-resize;\n}\n.barras-waveform {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.0625rem;\n  overflow: hidden;\n  pointer-events: none;\n}\n.barras-waveform i {\n  width: 100%;\n  min-height: 0.14rem;\n  background: #8d8188;\n  border-radius: 999rem;\n  opacity: 0.75;\n}\n.waveform.carregando::after {\n  position: absolute;\n  inset: 38% 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      color-mix(in srgb, var(--studio-brand) 55%, transparent),\n      transparent);\n  content: "";\n  animation: carregar-waveform 1.1s ease-in-out infinite;\n}\n.selecao-waveform {\n  position: absolute;\n  z-index: 1;\n  inset-block: 0;\n  background: color-mix(in srgb, var(--studio-brand) 24%, transparent);\n  border-inline: 0.0625rem solid var(--studio-brand);\n  pointer-events: none;\n}\n.selecao-waveform.em-reproducao {\n  background: color-mix(in srgb, var(--studio-brand) 34%, transparent);\n  box-shadow: inset 0 0 0 0.0625rem var(--studio-brand);\n}\n.playhead-waveform {\n  position: absolute;\n  z-index: 2;\n  inset-block: 0;\n  width: 0.0625rem;\n  background: #f4f0f2;\n  box-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.45);\n  pointer-events: none;\n}\n.marcador-waveform {\n  position: absolute;\n  z-index: 4;\n  top: -1.55rem;\n  display: flex;\n  min-width: 4.8rem;\n  min-height: 1.35rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.28rem;\n  padding: 0.22rem 0.36rem;\n  background: #241d21;\n  color: #f4f0f2;\n  border: 0.0625rem solid var(--studio-brand);\n  border-radius: 0.22rem;\n  font-variant-numeric: tabular-nums;\n  transform: translateX(-50%);\n  cursor: ew-resize;\n}\n.marcador-waveform::after {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  width: 0.12rem;\n  height: 9.05rem;\n  background: var(--studio-brand);\n  content: "";\n  transform: translateX(-50%);\n}\n.marcador-waveform.ativo {\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n}\n.marcador-waveform span {\n  color: var(--studio-brand);\n  font-size: 0.4rem;\n  font-weight: 820;\n  letter-spacing: 0.08em;\n}\n.marcador-waveform.ativo span {\n  color: inherit;\n}\n.marcador-waveform strong {\n  font-size: 0.49rem;\n}\n.escala-waveform {\n  display: flex;\n  justify-content: space-between;\n  margin: 0.38rem 2.6rem 0;\n  color: #766a71;\n  font-size: 0.47rem;\n  font-variant-numeric: tabular-nums;\n}\n.escala-waveform strong {\n  color: #b9afb4;\n  font-weight: 650;\n}\n.resumo-recorte {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  margin: 0.55rem 2.6rem 0;\n}\n.resumo-recorte > span {\n  display: flex;\n  align-items: baseline;\n  gap: 0.42rem;\n  color: #766a71;\n  font-size: 0.42rem;\n  font-weight: 800;\n  letter-spacing: 0.11em;\n}\n.resumo-recorte strong {\n  color: #d6cdd1;\n  font-size: 0.58rem;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: 0;\n}\n.resumo-recorte button {\n  padding: 0;\n  background: transparent;\n  color: var(--studio-brand);\n  border: 0;\n  font-size: 0.5rem;\n  font-weight: 720;\n}\n.controles-recorte {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(13rem, 1fr)) auto;\n  align-items: center;\n  gap: 0.45rem;\n  margin-top: 0.6rem;\n}\n.controles-recorte > span {\n  grid-column: 1/-1;\n  color: #81767c;\n  font-size: 0.5rem;\n}\n.controles-recorte button {\n  min-height: 2.25rem;\n  padding: 0.45rem 0.65rem;\n  background: #181316;\n  color: #c9c0c5;\n  border: 0.0625rem solid #40363c;\n  border-radius: 0.25rem;\n  font-size: 0.52rem;\n  font-weight: 700;\n}\n.controles-recorte .testar-loop {\n  color: var(--studio-brand);\n  border-color: var(--studio-brand);\n}\n.ajuste-fino {\n  display: grid;\n  grid-template-columns: auto 1.9rem minmax(4.2rem, auto) 1.9rem auto;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.28rem;\n  background: #181316;\n  border: 0.0625rem solid #352d32;\n  border-radius: 0.25rem;\n}\n.ajuste-fino b {\n  padding-inline: 0.25rem;\n  color: var(--studio-brand);\n  font-size: 0.43rem;\n  letter-spacing: 0.08em;\n}\n.ajuste-fino strong {\n  color: #e0d8dc;\n  font-size: 0.57rem;\n  font-variant-numeric: tabular-nums;\n  text-align: center;\n}\n.ajuste-fino button {\n  min-height: 1.75rem;\n  padding: 0;\n}\n.ajuste-fino .usar-cursor {\n  padding-inline: 0.45rem;\n  color: #8e8389;\n  font-size: 0.46rem;\n  font-weight: 650;\n}\n.aviso-waveform {\n  margin: 0.45rem 0 0;\n  color: #ba9b79;\n  font-size: 0.5rem;\n}\n@keyframes carregar-waveform {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n.designer-som audio {\n  display: none;\n}\n.controle-duracao {\n  display: flex;\n  max-width: 24rem;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 0.7rem;\n  color: #a89da3;\n  font-size: 0.55rem;\n}\n.controle-duracao button {\n  display: grid;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  padding: 0;\n  background: #181316;\n  color: #d7cfd3;\n  border: 0.0625rem solid #51454c;\n  border-radius: 50%;\n}\n.controle-duracao strong {\n  min-width: 3rem;\n  color: #f4f0f2;\n  font-size: 0.62rem;\n  text-align: center;\n}\n.entrada-audio {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 0 0.2rem 2.8rem;\n}\n.interruptor {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0;\n  background: transparent;\n  color: #a89da3;\n  border: 0;\n  font-size: 0.57rem;\n}\n.interruptor span {\n  position: relative;\n  width: 2rem;\n  height: 1.05rem;\n  background: #352d32;\n  border-radius: 999rem;\n}\n.interruptor span::after {\n  position: absolute;\n  top: 0.15rem;\n  left: 0.15rem;\n  width: 0.75rem;\n  height: 0.75rem;\n  background: #8e8389;\n  border-radius: 50%;\n  content: "";\n  transition: transform 120ms ease;\n}\n.interruptor.ativo {\n  color: #f4f0f2;\n}\n.interruptor.ativo span {\n  background: var(--studio-brand);\n}\n.interruptor.ativo span::after {\n  background: var(--studio-on-brand);\n  transform: translateX(0.95rem);\n}\n.rodape-designer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.55rem;\n  margin-top: 1.2rem;\n  padding-top: 1rem;\n  border-top: 0.0625rem solid #352d32;\n}\n.designer-som .botao-neutro {\n  color: #d7cfd3;\n  border-color: #51454c;\n}\n.aviso-sem-recurso {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem;\n  background: #181316;\n  border: 0.0625rem solid #352d32;\n  font-size: 0.62rem;\n}\n.aviso-sem-recurso a {\n  color: var(--studio-brand);\n}\n.novo-bloco {\n  padding: 1.3rem;\n  background: var(--app-surface);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.novo-bloco form {\n  display: grid;\n  gap: 0.65rem;\n  margin-top: 0.65rem;\n}\n.biblioteca-sons {\n  display: grid;\n  grid-template-columns: minmax(16rem, 0.7fr) minmax(22rem, 1.3fr);\n  gap: 1.5rem;\n  border-top: 0.0625rem solid var(--app-border-strong);\n}\n.entrada-sons {\n  display: grid;\n  align-content: start;\n  gap: 0.75rem;\n}\n.upload-som {\n  display: grid;\n  align-content: start;\n  gap: 0.8rem;\n  padding: 1.25rem;\n  background: var(--app-surface);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.versoes-faixa {\n  background: var(--app-surface);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.abrir-versoes {\n  display: flex;\n  width: 100%;\n  min-height: 4rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  background: transparent;\n  color: var(--app-text);\n  border: 0;\n  text-align: left;\n}\n.abrir-versoes > span {\n  display: grid;\n  gap: 0.2rem;\n}\n.abrir-versoes small {\n  color: var(--app-text-muted);\n  font-size: 0.46rem;\n  font-weight: 760;\n  letter-spacing: 0.12em;\n}\n.abrir-versoes strong {\n  font-size: 0.68rem;\n}\n.abrir-versoes b {\n  color: var(--studio-brand);\n  font-size: 1rem;\n}\n.lista-versoes {\n  max-height: 20rem;\n  overflow-y: auto;\n  border-top: 0.0625rem solid var(--app-border);\n}\n.lista-versoes article {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.7rem 1rem;\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.lista-versoes article > div {\n  display: grid;\n  min-width: 0;\n  gap: 0.12rem;\n}\n.lista-versoes article strong {\n  overflow: hidden;\n  font-size: 0.64rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.lista-versoes article span,\n.lista-versoes > p {\n  overflow: hidden;\n  color: var(--app-text-muted);\n  font-size: 0.5rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.lista-versoes > p {\n  margin: 0;\n  padding: 0.85rem 1rem;\n}\n.lista-versoes article button {\n  padding: 0.42rem 0.58rem;\n  background: transparent;\n  color: var(--studio-brand);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-small);\n  font-size: 0.53rem;\n  font-weight: 720;\n}\n.upload-som h3 {\n  margin: 0.25rem 0;\n  font-size: 1rem;\n}\n.upload-som p {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.59rem;\n  line-height: 1.5;\n}\n.arquivo-upload input {\n  padding: 0.55rem;\n  font-size: 0.58rem;\n}\n.lista-sons {\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.lista-sons article {\n  display: grid;\n  min-height: 5.2rem;\n  grid-template-columns: 2rem minmax(0, 1fr) auto auto;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 0 0.75rem;\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.lista-sons article:last-child {\n  border-bottom: 0;\n}\n.indice-som {\n  color: var(--app-text-muted);\n  font-size: 0.55rem;\n}\n.lista-sons h3 {\n  margin: 0.17rem 0;\n  font-size: 0.78rem;\n}\n.lista-sons small {\n  display: block;\n  overflow: hidden;\n  color: var(--app-text-muted);\n  font-size: 0.53rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.lista-sons article > strong {\n  color: var(--studio-brand);\n  font-size: 0.5rem;\n  letter-spacing: 0.08em;\n}\n.excluir-som {\n  padding: 0;\n  background: transparent;\n  color: #d9807a;\n  border: 0;\n  font-size: 0.55rem;\n  font-weight: 700;\n}\n.painel-publicacao {\n  display: flex;\n  min-height: 7rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: var(--app-surface);\n  border-top: 0.0625rem solid var(--app-border-strong);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.vinculo-trabalho {\n  margin-bottom: 0.75rem;\n  background: var(--app-surface);\n  border-top: 0.0625rem solid var(--app-border-strong);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.abrir-vinculo {\n  display: flex;\n  width: 100%;\n  min-height: 4.5rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.8rem 1rem;\n  background: transparent;\n  color: var(--app-text);\n  border: 0;\n  text-align: left;\n}\n.abrir-vinculo > span {\n  display: grid;\n  gap: 0.2rem;\n}\n.abrir-vinculo small,\n.lista-albuns button span {\n  color: var(--app-text-muted);\n  font-size: 0.47rem;\n  font-weight: 760;\n  letter-spacing: 0.12em;\n}\n.abrir-vinculo strong,\n.lista-albuns button strong {\n  font-size: 0.68rem;\n}\n.abrir-vinculo b {\n  color: var(--studio-brand);\n  font-size: 0.55rem;\n}\n.lista-albuns {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));\n  gap: 0.45rem;\n  padding: 0.75rem;\n  border-top: 0.0625rem solid var(--app-border);\n}\n.lista-albuns > button {\n  display: grid;\n  min-height: 4rem;\n  align-content: center;\n  justify-items: start;\n  gap: 0.18rem;\n  padding: 0.65rem;\n  background: var(--app-background);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: var(--radius-small);\n  text-align: left;\n}\n.lista-albuns > button.ativo {\n  background: var(--studio-brand-soft);\n  border-color: var(--studio-brand);\n}\n.lista-albuns > p {\n  margin: 0;\n  padding: 0.65rem;\n  color: var(--app-text-muted);\n  font-size: 0.58rem;\n}\n.painel-publicacao > div:first-child {\n  display: grid;\n  gap: 0.25rem;\n}\n.painel-publicacao > div > strong {\n  font-size: 0.85rem;\n}\n.painel-publicacao p {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.58rem;\n}\n.status-publicacao {\n  justify-self: start;\n  padding: 0.22rem 0.38rem;\n  background: var(--app-surface-muted);\n  color: var(--app-text-muted);\n  border-radius: 0.2rem;\n  font-size: 0.48rem;\n  font-weight: 760;\n  letter-spacing: 0.1em;\n}\n.status-publicacao.publicada {\n  background: var(--studio-brand-soft);\n  color: var(--studio-brand);\n}\n.estado-pagina,\n.estado-vazio {\n  display: grid;\n  justify-items: start;\n  gap: 0.65rem;\n  padding: 2rem;\n  background: var(--app-surface-muted);\n  border-top: 0.0625rem solid var(--app-border);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.estado-pagina {\n  min-height: 22rem;\n  align-content: center;\n}\n.estado-pagina h1,\n.estado-vazio p {\n  margin: 0;\n}\n.estado-pagina > p,\n.estado-vazio p {\n  max-width: 38rem;\n  color: var(--app-text-muted);\n  font-size: 0.67rem;\n  line-height: 1.55;\n}\n.roteiro-vazio {\n  min-height: 10rem;\n  align-content: center;\n}\n.mensagem-erro {\n  margin: 0.75rem 0;\n  padding: 0.7rem 0.85rem;\n  background: #2b1a1b;\n  color: #f09a94;\n  border-radius: var(--radius-small);\n  font-size: 0.62rem;\n}\n.carregador {\n  width: 1.2rem;\n  height: 1.2rem;\n  border: 0.12rem solid var(--app-border-strong);\n  border-top-color: var(--studio-brand);\n  border-radius: 50%;\n  animation: girar 700ms linear infinite;\n}\n@keyframes girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 64rem) {\n  .configuracao-som-basica {\n    grid-template-columns: 1fr;\n  }\n  .hero-experiencia {\n    grid-template-columns: 8rem minmax(0, 1fr);\n  }\n  .selo-experiencia {\n    width: 8rem;\n  }\n  .acoes-experiencia {\n    grid-column: 1/-1;\n  }\n  .biblioteca-sons {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 48rem) {\n  .pagina-experiencias {\n    padding: 1rem 0.85rem 4rem;\n  }\n  .barra-experiencias {\n    align-items: start;\n  }\n  .nova-experiencia {\n    max-width: 7rem;\n    text-align: center;\n  }\n  .criacao-experiencia form {\n    grid-template-columns: 1fr;\n  }\n  .hero-experiencia {\n    min-height: auto;\n    grid-template-columns: 5.5rem minmax(0, 1fr);\n    align-items: center;\n    gap: 1rem;\n    padding: 1rem;\n  }\n  .selo-experiencia {\n    width: 5.5rem;\n    font-size: 1.8rem;\n  }\n  .identidade-experiencia h1 {\n    font-size: clamp(2.2rem, 13vw, 3.6rem);\n  }\n  .acoes-experiencia {\n    justify-content: stretch;\n  }\n  .acoes-experiencia > * {\n    flex: 1;\n  }\n  .navegacao-editor {\n    top: 3.81rem;\n    overflow-x: auto;\n  }\n  .navegacao-editor a {\n    flex: 0 0 auto;\n  }\n  .secao-editor {\n    padding-top: 3rem;\n  }\n  .cabecalho-secao {\n    align-items: start;\n  }\n  .bloco-editor {\n    grid-template-columns: 3.2rem minmax(0, 1fr);\n  }\n  .ordem-bloco {\n    padding-inline: 0.35rem;\n  }\n  .conteudo-bloco {\n    padding-inline: 0.75rem;\n  }\n  .editor-imagem-cena {\n    grid-template-columns: 1fr;\n  }\n  .acao-sonora {\n    grid-template-columns: minmax(0, 1fr) auto;\n  }\n  .acao-sonora .perigo {\n    display: none;\n  }\n  .sem-som {\n    grid-template-columns: auto minmax(0, 1fr);\n  }\n  .sem-som > b {\n    grid-column: 2;\n  }\n  .passagem-cena > header {\n    align-items: start;\n    flex-direction: column;\n  }\n  .passagem-cena .opcoes-transicao {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .editor-passagem > footer > * {\n    flex: 1;\n  }\n  .designer-som {\n    padding: 1rem 0.75rem;\n  }\n  .cabecalho-recorte {\n    align-items: start;\n    flex-direction: column;\n  }\n  .etapa-som {\n    grid-template-columns: 1.6rem minmax(0, 1fr);\n  }\n  .opcoes-som {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n  .transporte-waveform {\n    grid-template-columns: 1fr;\n  }\n  .transporte-waveform .botao-play {\n    justify-self: start;\n  }\n  .waveform {\n    height: 6rem;\n    margin-inline: 2rem;\n  }\n  .marcador-waveform::after {\n    height: 6.05rem;\n  }\n  .escala-waveform {\n    margin-inline: 2rem;\n  }\n  .resumo-recorte {\n    margin-inline: 2rem;\n  }\n  .controles-recorte {\n    grid-template-columns: 1fr;\n  }\n  .controles-recorte > span {\n    grid-column: auto;\n  }\n  .ajuste-fino {\n    grid-template-columns: auto 1.9rem minmax(4.2rem, 1fr) 1.9rem auto;\n  }\n  .entrada-audio {\n    align-items: start;\n    padding-left: 2.4rem;\n  }\n  .painel-publicacao {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}\n.teste-leitura-overlay {\n  position: fixed;\n  z-index: 1000;\n  inset: 0;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  background: var(--app-background);\n}\n.barra-teste-leitura {\n  position: sticky;\n  z-index: 10;\n  top: 0;\n  display: flex;\n  min-height: 3.75rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.65rem 1rem;\n  background: color-mix(in srgb, var(--app-background) 92%, transparent);\n  border-bottom: 0.0625rem solid var(--app-border);\n  -webkit-backdrop-filter: blur(1rem);\n  backdrop-filter: blur(1rem);\n}\n.barra-teste-leitura > div {\n  display: grid;\n  min-width: 0;\n  gap: 0.12rem;\n}\n.barra-teste-leitura span {\n  color: var(--studio-brand);\n  font-size: 0.52rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n}\n.barra-teste-leitura strong {\n  overflow: hidden;\n  color: var(--app-text);\n  font-size: 0.78rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.barra-teste-leitura button {\n  min-height: 2.35rem;\n  flex: 0 0 auto;\n  padding: 0.45rem 0.75rem;\n  background: var(--app-surface);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-small);\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.barra-teste-leitura button:hover {\n  border-color: var(--studio-brand);\n}\n.leitor-teste-integrado,\n.leitor-teste-integrado > app-experiencia-imersiva-publica {\n  display: block;\n  min-height: calc(100dvh - 3.75rem);\n}\n@media (max-width: 36rem) {\n  .barra-teste-leitura {\n    min-height: 3.35rem;\n    padding-inline: 0.75rem;\n  }\n  .barra-teste-leitura strong {\n    max-width: 52vw;\n  }\n  .barra-teste-leitura button {\n    min-height: 2.15rem;\n    padding-inline: 0.55rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *,\n  *::before,\n  *::after {\n    transition-duration: 0.01ms !important;\n  }\n}\n'] }]
  }], null, { reprodutor: [{ type: ViewChild, args: ["reprodutorEditor", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExperienciasImersivas, { className: "ExperienciasImersivas", filePath: "apps/studio-dash/src/app/paginas/experiencias-imersivas/experiencias-imersivas.ts", lineNumber: 59 });
})();
export {
  ExperienciasImersivas
};
