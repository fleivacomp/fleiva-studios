import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-OOHEKRNK.js";
import {
  Component,
  DadosAcertos,
  DadosAgendamentos,
  DadosContatos,
  DadosServicos,
  RESULTADOS_AGENDAMENTO,
  RouterLink,
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-IMBOO5ID.js";

// apps/studio-dash/src/app/paginas/agendamentos/agendamentos.ts
var _c0 = (a0) => ({ abrir: a0 });
var _forTrack0 = ($index, $item) => $item.servico.id;
var _forTrack1 = ($index, $item) => $item.tipo;
var _forTrack2 = ($index, $item) => $item.chave;
var _forTrack3 = ($index, $item) => $item.id;
var _forTrack4 = ($index, $item) => $item.valor;
function Agendamentos_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function Agendamentos_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.abrirFormulario());
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Novo agendamento ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-expanded", ctx_r1.formularioAberto());
  }
}
function Agendamentos_Conditional_11_Conditional_2_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.servico.nome);
  }
}
function Agendamentos_Conditional_11_Conditional_2_Conditional_13_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275text(1, " Confirmar pelo WhatsApp ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("href", ctx, \u0275\u0275sanitizeUrl);
  }
}
function Agendamentos_Conditional_11_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 25)(1, "p");
    \u0275\u0275text(2, "Depois");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, Agendamentos_Conditional_11_Conditional_2_Conditional_13_Conditional_7_Template, 2, 1, "a", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const proximo_r6 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(proximo_r6.contato.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatarReferenciaData(proximo_r6.inicio), " \xB7 ", ctx_r1.formatarHorario(proximo_r6.inicio), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_7_0 = ctx_r1.criarUrlConfirmacaoWhatsApp(proximo_r6)) ? 7 : -1, tmp_7_0);
  }
}
function Agendamentos_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 20)(1, "p", 21);
    \u0275\u0275element(2, "span");
    \u0275\u0275text(3, " Sess\xE3o em andamento ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 23);
    \u0275\u0275repeaterCreate(9, Agendamentos_Conditional_11_Conditional_2_For_10_Template, 2, 1, "span", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 24);
    \u0275\u0275listener("click", function Agendamentos_Conditional_11_Conditional_2_Template_button_click_11_listener() {
      const atual_r5 = \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.abrirFechamento(atual_r5));
    });
    \u0275\u0275text(12, " Encerrar sess\xE3o ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, Agendamentos_Conditional_11_Conditional_2_Conditional_13_Template, 8, 4, "aside", 25);
  }
  if (rf & 2) {
    let tmp_6_0;
    const atual_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(atual_r5.contato.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatarHorario(atual_r5.inicio), "\u2013", ctx_r1.formatarHorario(atual_r5.fim), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(atual_r5.agendamento_servicos);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_6_0 = ctx_r1.proximoAgendamento()) ? 13 : -1, tmp_6_0);
  }
}
function Agendamentos_Conditional_11_Conditional_3_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r7.servico.nome);
  }
}
function Agendamentos_Conditional_11_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275text(1, " Confirmar pelo WhatsApp ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("href", ctx, \u0275\u0275sanitizeUrl);
  }
}
function Agendamentos_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 19)(1, "p", 21);
    \u0275\u0275text(2, " Pr\xF3ximo agendamento ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 23);
    \u0275\u0275repeaterCreate(8, Agendamentos_Conditional_11_Conditional_3_For_9_Template, 2, 1, "span", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, Agendamentos_Conditional_11_Conditional_3_Conditional_10_Template, 2, 1, "a", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const proximo_r8 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(proximo_r8.contato.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r1.formatarReferenciaData(proximo_r8.inicio), ", ", ctx_r1.formatarHorario(proximo_r8.inicio), "\u2013", ctx_r1.formatarHorario(proximo_r8.fim), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(proximo_r8.agendamento_servicos);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_6_0 = ctx_r1.criarUrlConfirmacaoWhatsApp(proximo_r8)) ? 10 : -1, tmp_6_0);
  }
}
function Agendamentos_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 18);
    \u0275\u0275conditionalCreate(2, Agendamentos_Conditional_11_Conditional_2_Template, 14, 4)(3, Agendamentos_Conditional_11_Conditional_3_Template, 11, 5, "article", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.agendamentoAtual()) ? 2 : (tmp_1_0 = ctx_r1.proximoAgendamento()) ? 3 : -1, tmp_1_0);
  }
}
function Agendamentos_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.mensagemAcerto(), " ");
  }
}
function Agendamentos_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.erroAgenda() || ctx_r1.erroAcerto() || ctx_r1.dadosAcertos.erro(), " ");
  }
}
function Agendamentos_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "span", 28);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Carregando agendamentos...");
    \u0275\u0275elementEnd()();
  }
}
function Agendamentos_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "strong");
    \u0275\u0275text(2, "N\xE3o foi poss\xEDvel carregar a agenda.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function Agendamentos_Conditional_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dadosAgendamentos.listar());
    });
    \u0275\u0275text(6, " Tentar novamente ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.dadosAgendamentos.erro());
  }
}
function Agendamentos_Conditional_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function Agendamentos_Conditional_18_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.abrirFormulario());
    });
    \u0275\u0275text(1, " Novo agendamento ");
    \u0275\u0275elementEnd();
  }
}
function Agendamentos_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "strong");
    \u0275\u0275text(2, "Nenhum hor\xE1rio registrado.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Crie o primeiro agendamento para iniciar a agenda. ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, Agendamentos_Conditional_18_Conditional_5_Template, 2, 0, "button", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r1.formularioAberto() ? 5 : -1);
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const secao_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", secao_r11.mensagemVazia, " ");
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function Agendamentos_Conditional_19_For_2_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.alternarPendencias());
    });
    \u0275\u0275elementStart(1, "span")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5, " Fora da agenda principal at\xE9 receberem um desfecho. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Ver anteriores");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const secao_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-expanded", ctx_r1.pendenciasAbertas());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", secao_r11.quantidade, " ", secao_r11.quantidade === 1 ? "hor\xE1rio anterior" : "hor\xE1rios anteriores", " ");
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function Agendamentos_Conditional_19_For_2_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.alternarHistorico());
    });
    \u0275\u0275elementStart(1, "span")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5, " Conclu\xEDdos, cancelados, reagendados e aus\xEAncias. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Ver hist\xF3rico");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const secao_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-expanded", ctx_r1.historicoAberto());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", secao_r11.quantidade, " ", secao_r11.quantidade === 1 ? "registro finalizado" : "registros finalizados", " ");
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "button", 46);
    \u0275\u0275listener("click", function Agendamentos_Conditional_19_For_2_Conditional_14_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.alternarPendencias());
    });
    \u0275\u0275text(2, " Ocultar anteriores ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r1.pendenciasAbertas());
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 47);
    \u0275\u0275listener("click", function Agendamentos_Conditional_19_For_2_Conditional_14_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.alternarHistorico());
    });
    \u0275\u0275text(2, " Ocultar hist\xF3rico ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r1.historicoAberto());
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 56);
    \u0275\u0275text(1, " +1 dia ");
    \u0275\u0275elementEnd();
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const agendamento_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("resultado-concluido", agendamento_r17.resultado === "concluido")("resultado-cancelado", agendamento_r17.resultado === "cancelado")("resultado-reagendado", agendamento_r17.resultado === "reagendado")("resultado-ausencia", agendamento_r17.resultado === "nao_compareceu");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.rotuloResultado(agendamento_r17.resultado), " ");
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r18.servico.nome, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r18.quantidade, " ", item_r18.servico.tipo_cobranca, " ");
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "span");
    \u0275\u0275text(2, "Fechamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const agendamento_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", agendamento_r17.observacoes_fechamento, " ");
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_27_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275text(1, " Confirmar pelo WhatsApp ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("href", ctx, \u0275\u0275sanitizeUrl);
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_27_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_27_Conditional_0_Conditional_0_Template, 2, 1, "a", 27);
  }
  if (rf & 2) {
    let tmp_34_0;
    const agendamento_r17 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275conditional((tmp_34_0 = ctx_r1.criarUrlConfirmacaoWhatsApp(agendamento_r17)) ? 0 : -1, tmp_34_0);
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_27_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Encerrar sess\xE3o ");
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_27_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Resolver pend\xEAncia ");
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_27_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const agendamento_r17 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.abrirFechamento(agendamento_r17));
    });
    \u0275\u0275conditionalCreate(1, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_27_Conditional_1_Conditional_1_Template, 1, 0)(2, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_27_Conditional_1_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const secao_r11 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.fechandoId() !== null || ctx_r1.reabrindoId() !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(secao_r11.tipo === "agora" ? 1 : 2);
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_27_Conditional_0_Template, 1, 1)(1, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_27_Conditional_1_Template, 3, 2, "button", 75);
  }
  if (rf & 2) {
    const secao_r11 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275conditional(secao_r11.tipo === "proximos" ? 0 : 1);
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 69);
    \u0275\u0275text(1, " Acerto gerado ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(1, _c0, ctx.id));
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_37_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Gerando acerto... ");
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_37_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Gerar acerto ");
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const agendamento_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.gerarAcerto(agendamento_r17));
    });
    \u0275\u0275conditionalCreate(1, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_37_Conditional_1_Template, 1, 0)(2, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_37_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const agendamento_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("disabled", ctx_r1.dadosAcertos.carregando() || ctx_r1.gerandoAcertoId() !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.gerandoAcertoId() === agendamento_r17.id ? 1 : 2);
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const agendamento_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.abrirFechamento(agendamento_r17, "reagendado"));
    });
    \u0275\u0275text(1, " Reagendar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 78);
    \u0275\u0275listener("click", function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_38_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r21);
      const agendamento_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.abrirFechamento(agendamento_r17, "cancelado"));
    });
    \u0275\u0275text(3, " Cancelar hor\xE1rio ");
    \u0275\u0275elementEnd();
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_39_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Reabrindo... ");
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_39_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Reabrir agendamento ");
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const agendamento_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.reabrir(agendamento_r17));
    });
    \u0275\u0275conditionalCreate(1, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_39_Conditional_1_Template, 1, 0)(2, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_39_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const agendamento_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("disabled", ctx_r1.reabrindoId() !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.reabrindoId() === agendamento_r17.id ? 1 : 2);
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Excluindo... ");
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Excluir agendamento ");
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 50)(1, "div", 51)(2, "time", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 53);
    \u0275\u0275elementStart(5, "time", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 55);
    \u0275\u0275conditionalCreate(8, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_8_Template, 2, 0, "small", 56);
    \u0275\u0275elementStart(9, "small", 57);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 58)(12, "header", 59)(13, "div")(14, "p", 60);
    \u0275\u0275text(15, " Sess\xE3o ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "h3");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 61);
    \u0275\u0275conditionalCreate(19, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_19_Template, 2, 9, "span", 62);
    \u0275\u0275elementStart(20, "strong", 63);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 64);
    \u0275\u0275repeaterCreate(23, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_For_24_Template, 5, 3, "span", 65, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_25_Template, 5, 1, "div", 66);
    \u0275\u0275elementStart(26, "footer", 67);
    \u0275\u0275conditionalCreate(27, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_27_Template, 2, 1);
    \u0275\u0275elementStart(28, "div", 68);
    \u0275\u0275conditionalCreate(29, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_29_Template, 2, 3, "a", 69);
    \u0275\u0275elementStart(30, "details", 70)(31, "summary")(32, "span");
    \u0275\u0275text(33, "Mais");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 17);
    \u0275\u0275text(35, "\u2022\u2022\u2022");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 71);
    \u0275\u0275conditionalCreate(37, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_37_Template, 3, 2, "button", 72);
    \u0275\u0275conditionalCreate(38, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_38_Template, 4, 0);
    \u0275\u0275conditionalCreate(39, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_39_Template, 3, 2, "button", 72);
    \u0275\u0275elementStart(40, "button", 73);
    \u0275\u0275listener("click", function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Template_button_click_40_listener() {
      const agendamento_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.excluir(agendamento_r17));
    });
    \u0275\u0275conditionalCreate(41, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_41_Template, 1, 0)(42, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Conditional_42_Template, 1, 0);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    let tmp_44_0;
    const agendamento_r17 = ctx.$implicit;
    const secao_r11 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("datetime", agendamento_r17.inicio);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatarHorario(agendamento_r17.inicio), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("datetime", agendamento_r17.fim);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatarHorario(agendamento_r17.fim), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.terminaNoDiaSeguinte(agendamento_r17) ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatarDuracao(agendamento_r17), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", agendamento_r17.contato.nome, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(agendamento_r17.resultado ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatarPreco(ctx_r1.dadosAgendamentos.calcularValor(agendamento_r17)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(agendamento_r17.agendamento_servicos);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(agendamento_r17.observacoes_fechamento ? 25 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!agendamento_r17.resultado ? 27 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_44_0 = ctx_r1.acertoDoAgendamento(agendamento_r17.id)) ? 29 : -1, tmp_44_0);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!ctx_r1.acertoDoAgendamento(agendamento_r17.id) ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!agendamento_r17.resultado && secao_r11.tipo === "proximos" ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(agendamento_r17.resultado ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.excluindoId() === agendamento_r17.id || ctx_r1.gerandoAcertoId() === agendamento_r17.id || ctx_r1.fechandoId() !== null || ctx_r1.reabrindoId() !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.excluindoId() === agendamento_r17.id ? 41 : 42);
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 45)(1, "header", 48)(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "small");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 49);
    \u0275\u0275repeaterCreate(10, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_For_11_Template, 43, 17, "article", 50, _forTrack3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const grupo_r23 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(grupo_r23.rotulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(grupo_r23.dataCompleta);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", grupo_r23.agendamentos.length, " ", grupo_r23.agendamentos.length === 1 ? "hor\xE1rio" : "hor\xE1rios", " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(grupo_r23.agendamentos);
  }
}
function Agendamentos_Conditional_19_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Agendamentos_Conditional_19_For_2_Conditional_14_Conditional_0_Template, 3, 1, "div", 42);
    \u0275\u0275conditionalCreate(1, Agendamentos_Conditional_19_For_2_Conditional_14_Conditional_1_Template, 3, 1, "div", 43);
    \u0275\u0275elementStart(2, "div", 44);
    \u0275\u0275repeaterCreate(3, Agendamentos_Conditional_19_For_2_Conditional_14_For_4_Template, 12, 4, "section", 45, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const secao_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(secao_r11.tipo === "pendentes" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(secao_r11.tipo === "historico" ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(secao_r11.grupos);
  }
}
function Agendamentos_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 33)(1, "header", 34)(2, "div");
    \u0275\u0275element(3, "span", 35);
    \u0275\u0275elementStart(4, "span")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "span", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, Agendamentos_Conditional_19_For_2_Conditional_11_Template, 2, 1, "p", 37)(12, Agendamentos_Conditional_19_For_2_Conditional_12_Template, 8, 3, "button", 38)(13, Agendamentos_Conditional_19_For_2_Conditional_13_Template, 8, 3, "button", 39)(14, Agendamentos_Conditional_19_For_2_Conditional_14_Template, 5, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const secao_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("secao-agora", secao_r11.tipo === "agora")("secao-proximos", secao_r11.tipo === "proximos")("secao-pendentes", secao_r11.tipo === "pendentes")("secao-historico", secao_r11.tipo === "historico");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(secao_r11.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(secao_r11.descricao);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", secao_r11.quantidade, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(secao_r11.quantidade === 0 ? 11 : secao_r11.tipo === "pendentes" && !ctx_r1.pendenciasAbertas() ? 12 : secao_r11.tipo === "historico" && !ctx_r1.historicoAberto() ? 13 : 14);
  }
}
function Agendamentos_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, Agendamentos_Conditional_19_For_2_Template, 15, 12, "section", 32, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.secoesAgenda());
  }
}
function Agendamentos_Conditional_20_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Reagendamento ");
  }
}
function Agendamentos_Conditional_20_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Novo hor\xE1rio ");
  }
}
function Agendamentos_Conditional_20_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Escolha o novo hor\xE1rio ");
  }
}
function Agendamentos_Conditional_20_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Criar agendamento ");
  }
}
function Agendamentos_Conditional_20_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 81);
    \u0275\u0275text(1, " Contato e servi\xE7os de ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " foram mantidos. Informe somente a nova data e o hor\xE1rio. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.contato.nome);
  }
}
function Agendamentos_Conditional_20_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const contato_r25 = ctx.$implicit;
    \u0275\u0275property("value", contato_r25.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", contato_r25.nome, " ");
  }
}
function Agendamentos_Conditional_20_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Selecione um contato.");
    \u0275\u0275elementEnd();
  }
}
function Agendamentos_Conditional_20_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Informe o in\xEDcio.");
    \u0275\u0275elementEnd();
  }
}
function Agendamentos_Conditional_20_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Informe o hor\xE1rio de t\xE9rmino.");
    \u0275\u0275elementEnd();
  }
}
function Agendamentos_Conditional_20_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 92);
    \u0275\u0275text(1, " Carregando servi\xE7os... ");
    \u0275\u0275elementEnd();
  }
}
function Agendamentos_Conditional_20_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 92);
    \u0275\u0275text(1, " Nenhum servi\xE7o cadastrado. ");
    \u0275\u0275elementEnd();
  }
}
function Agendamentos_Conditional_20_Conditional_44_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 103)(1, "span");
    \u0275\u0275text(2, "Qtd.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 104);
    \u0275\u0275listener("input", function Agendamentos_Conditional_20_Conditional_44_For_2_Conditional_8_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r28);
      const servico_r27 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.alterarQuantidade(servico_r27.id, $event.target.valueAsNumber));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const servico_r27 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.obterQuantidade(servico_r27.id));
  }
}
function Agendamentos_Conditional_20_Conditional_44_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 100)(1, "label", 101)(2, "input", 102);
    \u0275\u0275listener("change", function Agendamentos_Conditional_20_Conditional_44_For_2_Template_input_change_2_listener($event) {
      const servico_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.alternarServico(servico_r27.id, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, Agendamentos_Conditional_20_Conditional_44_For_2_Conditional_8_Template, 4, 1, "label", 103);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const servico_r27 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selecionado", ctx_r1.servicoEstaSelecionado(servico_r27.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.servicoEstaSelecionado(servico_r27.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(servico_r27.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatarPreco(servico_r27.preco), " / ", servico_r27.tipo_cobranca, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.servicoEstaSelecionado(servico_r27.id) ? 8 : -1);
  }
}
function Agendamentos_Conditional_20_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275repeaterCreate(1, Agendamentos_Conditional_20_Conditional_44_For_2_Template, 9, 7, "article", 99, _forTrack3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.dadosServicos.servicos());
  }
}
function Agendamentos_Conditional_20_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.erroFormulario(), " ");
  }
}
function Agendamentos_Conditional_20_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvando... ");
  }
}
function Agendamentos_Conditional_20_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Criar novo hor\xE1rio ");
  }
}
function Agendamentos_Conditional_20_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Criar agendamento ");
  }
}
function Agendamentos_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 15)(1, "header", 79)(2, "div")(3, "p");
    \u0275\u0275conditionalCreate(4, Agendamentos_Conditional_20_Conditional_4_Template, 1, 0)(5, Agendamentos_Conditional_20_Conditional_5_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275conditionalCreate(7, Agendamentos_Conditional_20_Conditional_7_Template, 1, 0)(8, Agendamentos_Conditional_20_Conditional_8_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 80);
    \u0275\u0275listener("click", function Agendamentos_Conditional_20_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fecharFormulario());
    });
    \u0275\u0275text(10, " \xD7 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, Agendamentos_Conditional_20_Conditional_11_Template, 5, 1, "p", 81);
    \u0275\u0275elementStart(12, "form", 82);
    \u0275\u0275listener("ngSubmit", function Agendamentos_Conditional_20_Template_form_ngSubmit_12_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.salvar());
    });
    \u0275\u0275elementStart(13, "div", 83)(14, "label")(15, "span");
    \u0275\u0275text(16, "Contato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 84)(18, "option", 85);
    \u0275\u0275text(19, "Selecione um contato");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, Agendamentos_Conditional_20_For_21_Template, 2, 2, "option", 86, _forTrack3);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(22, Agendamentos_Conditional_20_Conditional_22_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 87)(24, "label")(25, "span");
    \u0275\u0275text(26, "In\xEDcio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 88);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(28, Agendamentos_Conditional_20_Conditional_28_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "label")(30, "span");
    \u0275\u0275text(31, "T\xE9rmino");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 89);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(33, "p", 90);
    \u0275\u0275text(34, " Um hor\xE1rio anterior ao in\xEDcio ser\xE1 considerado no dia seguinte. ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(35, Agendamentos_Conditional_20_Conditional_35_Template, 2, 0, "small");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "section", 91)(37, "header")(38, "h3");
    \u0275\u0275text(39, "Servi\xE7os");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(42, Agendamentos_Conditional_20_Conditional_42_Template, 2, 0, "p", 92)(43, Agendamentos_Conditional_20_Conditional_43_Template, 2, 0, "p", 92)(44, Agendamentos_Conditional_20_Conditional_44_Template, 3, 0, "div", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 94)(46, "span");
    \u0275\u0275text(47, "Valor estimado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "strong");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(50, Agendamentos_Conditional_20_Conditional_50_Template, 2, 1, "p", 95);
    \u0275\u0275elementStart(51, "div", 96)(52, "button", 97);
    \u0275\u0275listener("click", function Agendamentos_Conditional_20_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fecharFormulario());
    });
    \u0275\u0275text(53, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 98);
    \u0275\u0275conditionalCreate(55, Agendamentos_Conditional_20_Conditional_55_Template, 1, 0)(56, Agendamentos_Conditional_20_Conditional_56_Template, 1, 0)(57, Agendamentos_Conditional_20_Conditional_57_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.reagendamentoOrigem() ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.reagendamentoOrigem() ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.salvando());
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_4_0 = ctx_r1.reagendamentoOrigem()) ? 11 : -1, tmp_4_0);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.formulario);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.dadosContatos.contatos());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.formulario.controls.contato_id.touched && ctx_r1.formulario.controls.contato_id.invalid ? 22 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.formulario.controls.inicio.touched && ctx_r1.formulario.controls.inicio.invalid ? 28 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.formulario.controls.fim.touched && ctx_r1.formulario.controls.fim.invalid ? 35 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.servicosSelecionados().length, " selecionados ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dadosServicos.carregando() ? 42 : ctx_r1.dadosServicos.servicos().length === 0 ? 43 : 44);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatarPreco(ctx_r1.valorEstimado()), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.erroFormulario() ? 50 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.salvando());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.salvando());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.salvando() ? 55 : ctx_r1.reagendamentoOrigem() ? 56 : 57);
  }
}
function Agendamentos_Conditional_21_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 121);
    \u0275\u0275listener("click", function Agendamentos_Conditional_21_For_28_Template_button_click_0_listener() {
      const resultado_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selecionarResultado(resultado_r31.valor));
    });
    \u0275\u0275element(1, "span", 122);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const resultado_r31 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selecionada", ctx_r1.formularioFechamento.controls.resultado.value === resultado_r31.valor);
    \u0275\u0275property("disabled", ctx_r1.fechandoId() !== null);
    \u0275\u0275attribute("aria-pressed", ctx_r1.formularioFechamento.controls.resultado.value === resultado_r31.valor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", resultado_r31.rotulo, " ");
  }
}
function Agendamentos_Conditional_21_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 115);
    \u0275\u0275text(1, " Ao confirmar, o novo agendamento abrir\xE1 com contato e servi\xE7os j\xE1 preenchidos. ");
    \u0275\u0275elementEnd();
  }
}
function Agendamentos_Conditional_21_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 118);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.erroFechamento(), " ");
  }
}
function Agendamentos_Conditional_21_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvando... ");
  }
}
function Agendamentos_Conditional_21_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Confirmar desfecho ");
  }
}
function Agendamentos_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 105);
    \u0275\u0275listener("click", function Agendamentos_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fecharFormularioFechamento());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "section", 106)(2, "header", 107)(3, "div")(4, "p");
    \u0275\u0275text(5, "Fechar hor\xE1rio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2", 108);
    \u0275\u0275text(7, " Registrar desfecho ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 109);
    \u0275\u0275listener("click", function Agendamentos_Conditional_21_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fecharFormularioFechamento());
    });
    \u0275\u0275text(9, " \xD7 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 110)(11, "div")(12, "span");
    \u0275\u0275text(13, "Contato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "span");
    \u0275\u0275text(18, "Hor\xE1rio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "form", 82);
    \u0275\u0275listener("ngSubmit", function Agendamentos_Conditional_21_Template_form_ngSubmit_21_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmarFechamento());
    });
    \u0275\u0275element(22, "input", 111);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(23, "fieldset", 112)(24, "legend");
    \u0275\u0275text(25, "O que aconteceu?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 113);
    \u0275\u0275repeaterCreate(27, Agendamentos_Conditional_21_For_28_Template, 3, 5, "button", 114, _forTrack4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(29, Agendamentos_Conditional_21_Conditional_29_Template, 2, 0, "p", 115);
    \u0275\u0275elementStart(30, "label", 116)(31, "span");
    \u0275\u0275text(32, "Observa\xE7\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "textarea", 117);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(34, Agendamentos_Conditional_21_Conditional_34_Template, 2, 1, "p", 118);
    \u0275\u0275elementStart(35, "footer", 119)(36, "button", 97);
    \u0275\u0275listener("click", function Agendamentos_Conditional_21_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fecharFormularioFechamento());
    });
    \u0275\u0275text(37, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 120);
    \u0275\u0275conditionalCreate(39, Agendamentos_Conditional_21_Conditional_39_Template, 1, 0)(40, Agendamentos_Conditional_21_Conditional_40_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const agendamentoFechamento_r32 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.fechandoId() !== null);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.fechandoId() !== null);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", agendamentoFechamento_r32.contato.nome, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatarHorario(agendamentoFechamento_r32.inicio), " \u2013 ", ctx_r1.formatarHorario(agendamentoFechamento_r32.fim), " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.formularioFechamento);
    \u0275\u0275advance();
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.resultadosAgendamento);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.formularioFechamento.controls.resultado.value === "reagendado" ? 29 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.erroFechamento() ? 34 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.fechandoId() !== null);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.formularioFechamento.invalid || ctx_r1.fechandoId() !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fechandoId() === agendamentoFechamento_r32.id ? 39 : 40);
  }
}
var Agendamentos = class _Agendamentos {
  dadosAgendamentos = inject(DadosAgendamentos);
  dadosContatos = inject(DadosContatos);
  dadosServicos = inject(DadosServicos);
  dadosAcertos = inject(DadosAcertos);
  construtorFormulario = inject(FormBuilder);
  agora = signal(
    Date.now(),
    ...ngDevMode ? [{ debugName: "agora" }] : (
      /* istanbul ignore next */
      []
    )
  );
  atualizadorTempo = null;
  formularioAberto = signal(
    false,
    ...ngDevMode ? [{ debugName: "formularioAberto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pendenciasAbertas = signal(
    false,
    ...ngDevMode ? [{ debugName: "pendenciasAbertas" }] : (
      /* istanbul ignore next */
      []
    )
  );
  historicoAberto = signal(
    false,
    ...ngDevMode ? [{ debugName: "historicoAberto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  salvando = signal(
    false,
    ...ngDevMode ? [{ debugName: "salvando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  fechandoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "fechandoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  reabrindoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "reabrindoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  agendamentoEmFechamento = signal(
    null,
    ...ngDevMode ? [{ debugName: "agendamentoEmFechamento" }] : (
      /* istanbul ignore next */
      []
    )
  );
  reagendamentoOrigem = signal(
    null,
    ...ngDevMode ? [{ debugName: "reagendamentoOrigem" }] : (
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
  gerandoAcertoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "gerandoAcertoId" }] : (
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
  erroFechamento = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroFechamento" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroAgenda = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroAgenda" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroAcerto = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroAcerto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  mensagemAcerto = signal(
    null,
    ...ngDevMode ? [{ debugName: "mensagemAcerto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  servicosSelecionados = signal(
    [],
    ...ngDevMode ? [{ debugName: "servicosSelecionados" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resultadosAgendamento = RESULTADOS_AGENDAMENTO;
  agendamentoAtual = computed(
    () => {
      const agora = this.agora();
      return this.dadosAgendamentos.agendamentos().filter((agendamento) => !agendamento.resultado && Date.parse(agendamento.inicio) <= agora && Date.parse(agendamento.fim) > agora).sort((primeiro, segundo) => Date.parse(primeiro.fim) - Date.parse(segundo.fim))[0] ?? null;
    },
    ...ngDevMode ? [{ debugName: "agendamentoAtual" }] : (
      /* istanbul ignore next */
      []
    )
  );
  proximoAgendamento = computed(
    () => {
      const agora = this.agora();
      return this.dadosAgendamentos.agendamentos().filter((agendamento) => !agendamento.resultado && Date.parse(agendamento.inicio) > agora).sort((primeiro, segundo) => Date.parse(primeiro.inicio) - Date.parse(segundo.inicio))[0] ?? null;
    },
    ...ngDevMode ? [{ debugName: "proximoAgendamento" }] : (
      /* istanbul ignore next */
      []
    )
  );
  valorEstimado = computed(
    () => this.servicosSelecionados().reduce((total, itemSelecionado) => {
      const servico = this.dadosServicos.servicos().find((item) => item.id === itemSelecionado.servico_id);
      if (!servico) {
        return total;
      }
      return total + servico.preco * itemSelecionado.quantidade;
    }, 0),
    ...ngDevMode ? [{ debugName: "valorEstimado" }] : (
      /* istanbul ignore next */
      []
    )
  );
  secoesAgenda = computed(
    () => {
      const agora = this.agora();
      const agendamentos = this.dadosAgendamentos.agendamentos().filter((agendamento) => {
        const inicio = Date.parse(agendamento.inicio);
        const fim = Date.parse(agendamento.fim);
        return Number.isFinite(inicio) && Number.isFinite(fim);
      });
      const abertos = agendamentos.filter((agendamento) => !agendamento.resultado);
      const historico = agendamentos.filter((agendamento) => Boolean(agendamento.resultado));
      const emAndamento = abertos.filter((agendamento) => Date.parse(agendamento.inicio) <= agora && Date.parse(agendamento.fim) > agora);
      const proximos = abertos.filter((agendamento) => Date.parse(agendamento.inicio) > agora);
      const pendentes = abertos.filter((agendamento) => Date.parse(agendamento.fim) <= agora);
      return [
        {
          tipo: "agora",
          titulo: "Agora",
          descricao: "Sess\xF5es que est\xE3o acontecendo neste momento.",
          mensagemVazia: "Nenhuma sess\xE3o em andamento.",
          quantidade: emAndamento.length,
          grupos: this.agruparAgendamentos(emAndamento, "ascendente")
        },
        {
          tipo: "pendentes",
          titulo: "Aguardando fechamento",
          descricao: "Hor\xE1rios encerrados que ainda precisam de um desfecho.",
          mensagemVazia: "Nenhum agendamento aguardando fechamento.",
          quantidade: pendentes.length,
          grupos: this.agruparAgendamentos(pendentes, "descendente")
        },
        {
          tipo: "proximos",
          titulo: "Pr\xF3ximos hor\xE1rios",
          descricao: "O que ainda vai acontecer no est\xFAdio.",
          mensagemVazia: "Nenhum pr\xF3ximo hor\xE1rio agendado.",
          quantidade: proximos.length,
          grupos: this.agruparAgendamentos(proximos, "ascendente")
        },
        {
          tipo: "historico",
          titulo: "Hist\xF3rico",
          descricao: "Agendamentos que j\xE1 receberam um desfecho.",
          mensagemVazia: "Nenhum agendamento finalizado.",
          quantidade: historico.length,
          grupos: this.agruparAgendamentos(historico, "descendente")
        }
      ];
    },
    ...ngDevMode ? [{ debugName: "secoesAgenda" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formulario = this.construtorFormulario.group({
    contato_id: this.construtorFormulario.nonNullable.control("", [
      Validators.required
    ]),
    inicio: this.construtorFormulario.nonNullable.control("", [
      Validators.required
    ]),
    fim: this.construtorFormulario.nonNullable.control("", [
      Validators.required
    ])
  });
  formularioFechamento = this.construtorFormulario.group({
    resultado: this.construtorFormulario.nonNullable.control("concluido", [Validators.required]),
    observacoes_fechamento: this.construtorFormulario.nonNullable.control("")
  });
  ngOnInit() {
    void this.carregarDados();
    this.atualizadorTempo = window.setInterval(() => this.agora.set(Date.now()), 6e4);
  }
  ngOnDestroy() {
    if (this.atualizadorTempo !== null) {
      window.clearInterval(this.atualizadorTempo);
    }
  }
  async carregarDados() {
    await Promise.all([
      this.dadosContatos.listar(),
      this.dadosServicos.listar(),
      this.dadosAgendamentos.listar(),
      this.dadosAcertos.listar()
    ]);
  }
  abrirFormulario() {
    this.reagendamentoOrigem.set(null);
    this.formularioAberto.set(true);
    this.erroFormulario.set(null);
  }
  fecharFormulario() {
    if (this.salvando()) {
      return;
    }
    this.limparFormulario();
    this.formularioAberto.set(false);
  }
  alternarPendencias() {
    this.pendenciasAbertas.update((abertas) => !abertas);
  }
  alternarHistorico() {
    this.historicoAberto.update((aberto) => !aberto);
  }
  abrirFechamento(agendamento, resultado = "concluido") {
    this.agendamentoEmFechamento.set(agendamento);
    this.erroFechamento.set(null);
    this.formularioFechamento.reset({
      resultado,
      observacoes_fechamento: ""
    });
  }
  selecionarResultado(resultado) {
    this.formularioFechamento.controls.resultado.setValue(resultado);
    this.erroFechamento.set(null);
  }
  fecharFormularioFechamento() {
    if (this.fechandoId() !== null) {
      return;
    }
    this.agendamentoEmFechamento.set(null);
    this.erroFechamento.set(null);
    this.formularioFechamento.reset({
      resultado: "concluido",
      observacoes_fechamento: ""
    });
  }
  async confirmarFechamento() {
    const agendamento = this.agendamentoEmFechamento();
    if (!agendamento || this.formularioFechamento.invalid) {
      this.formularioFechamento.markAllAsTouched();
      return;
    }
    this.fechandoId.set(agendamento.id);
    this.erroFechamento.set(null);
    this.erroAgenda.set(null);
    try {
      const valor = this.formularioFechamento.getRawValue();
      const dados = {
        resultado: valor.resultado,
        observacoes_fechamento: valor.observacoes_fechamento.trim() || null
      };
      const prepararNovoHorario = valor.resultado === "reagendado";
      const oferecerGeracaoAcerto = valor.resultado === "concluido" && !this.acertoDoAgendamento(agendamento.id);
      await this.dadosAgendamentos.fechar(agendamento.id, dados);
      this.fechandoId.set(null);
      this.fecharFormularioFechamento();
      if (prepararNovoHorario) {
        this.prepararReagendamento(agendamento);
      } else if (oferecerGeracaoAcerto && window.confirm("Sess\xE3o conclu\xEDda. Deseja gerar o acerto agora?")) {
        await this.gerarAcerto(agendamento);
      }
    } catch (erro) {
      this.erroFechamento.set(this.obterMensagemErro(erro));
    } finally {
      this.fechandoId.set(null);
    }
  }
  async reabrir(agendamento) {
    const confirmou = window.confirm(`Reabrir o agendamento de "${agendamento.contato.nome}"?`);
    if (!confirmou) {
      return;
    }
    this.reabrindoId.set(agendamento.id);
    this.erroAgenda.set(null);
    try {
      await this.dadosAgendamentos.reabrir(agendamento.id);
    } catch (erro) {
      this.erroAgenda.set(this.obterMensagemErro(erro));
    } finally {
      this.reabrindoId.set(null);
    }
  }
  rotuloResultado(resultado) {
    return RESULTADOS_AGENDAMENTO.find((item) => item.valor === resultado)?.rotulo ?? resultado ?? "Sem resultado";
  }
  servicoEstaSelecionado(servicoId) {
    return this.servicosSelecionados().some((item) => item.servico_id === servicoId);
  }
  obterQuantidade(servicoId) {
    return this.servicosSelecionados().find((item) => item.servico_id === servicoId)?.quantidade ?? 1;
  }
  alternarServico(servicoId, selecionado) {
    this.erroFormulario.set(null);
    if (selecionado) {
      if (this.servicoEstaSelecionado(servicoId)) {
        return;
      }
      this.servicosSelecionados.update((servicos) => [
        ...servicos,
        {
          servico_id: servicoId,
          quantidade: 1
        }
      ]);
      return;
    }
    this.servicosSelecionados.update((servicos) => servicos.filter((servico) => servico.servico_id !== servicoId));
  }
  alterarQuantidade(servicoId, quantidade) {
    const quantidadeValida = Number.isFinite(quantidade) && quantidade > 0 ? quantidade : 1;
    this.servicosSelecionados.update((servicos) => servicos.map((servico) => servico.servico_id === servicoId ? __spreadProps(__spreadValues({}, servico), {
      quantidade: quantidadeValida
    }) : servico));
  }
  async salvar() {
    this.erroFormulario.set(null);
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    if (this.servicosSelecionados().length === 0) {
      this.erroFormulario.set("Selecione pelo menos um servi\xE7o.");
      return;
    }
    const valor = this.formulario.getRawValue();
    const inicio = new Date(valor.inicio);
    if (Number.isNaN(inicio.getTime())) {
      this.erroFormulario.set("Informe uma data e um hor\xE1rio de in\xEDcio v\xE1lidos.");
      return;
    }
    const fim = this.criarFimAgendamento(inicio, valor.fim);
    if (fim === null) {
      this.erroFormulario.set("Informe um hor\xE1rio de t\xE9rmino v\xE1lido.");
      return;
    }
    if (fim.getTime() === inicio.getTime()) {
      this.erroFormulario.set("O t\xE9rmino n\xE3o pode ser igual ao in\xEDcio.");
      return;
    }
    const conflito = this.encontrarConflito(inicio, fim);
    if (conflito) {
      const criarMesmoAssim = window.confirm(`J\xE1 existe um agendamento de "${conflito.contato.nome}" entre ${this.formatarHorario(conflito.inicio)} e ${this.formatarHorario(conflito.fim)}. Criar este hor\xE1rio mesmo assim?`);
      if (!criarMesmoAssim) {
        return;
      }
    }
    this.salvando.set(true);
    try {
      const dados = {
        contato_id: valor.contato_id,
        inicio: inicio.toISOString(),
        fim: fim.toISOString(),
        servicos: this.servicosSelecionados()
      };
      await this.dadosAgendamentos.cadastrar(dados);
      this.limparFormulario();
      this.formularioAberto.set(false);
    } catch (erro) {
      this.erroFormulario.set(this.obterMensagemErro(erro));
    } finally {
      this.salvando.set(false);
    }
  }
  acertoDoAgendamento(agendamentoId) {
    return this.dadosAcertos.acertos().find((acerto) => acerto.itens.some((item) => item.agendamento_id === agendamentoId));
  }
  async gerarAcerto(agendamento) {
    if (this.acertoDoAgendamento(agendamento.id)) {
      return;
    }
    this.gerandoAcertoId.set(agendamento.id);
    this.erroAcerto.set(null);
    this.mensagemAcerto.set(null);
    try {
      await this.dadosAcertos.criarDoAgendamento(agendamento.id);
      this.mensagemAcerto.set(`Acerto de "${agendamento.contato.nome}" gerado.`);
    } catch (erro) {
      this.erroAcerto.set(this.obterMensagemErro(erro));
    } finally {
      this.gerandoAcertoId.set(null);
    }
  }
  async excluir(agendamento) {
    const confirmou = window.confirm(`Excluir o agendamento de "${agendamento.contato.nome}"?`);
    if (!confirmou) {
      return;
    }
    this.excluindoId.set(agendamento.id);
    this.erroAgenda.set(null);
    try {
      await this.dadosAgendamentos.excluir(agendamento.id);
    } catch (erro) {
      this.erroAgenda.set(this.obterMensagemErro(erro));
    } finally {
      this.excluindoId.set(null);
    }
  }
  formatarHorario(data) {
    return new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date(data));
  }
  formatarDuracaoMinutos(duracaoMinutos) {
    if (duracaoMinutos <= 0) {
      return "0h";
    }
    const horas = Math.floor(duracaoMinutos / 60);
    const minutos = duracaoMinutos % 60;
    if (horas === 0) {
      return `${minutos} min`;
    }
    return minutos > 0 ? `${horas}h ${minutos}min` : `${horas}h`;
  }
  formatarReferenciaData(data) {
    const dataAgendamento = new Date(data);
    const hoje = new Date(this.agora());
    const amanha = new Date(hoje);
    amanha.setDate(amanha.getDate() + 1);
    const chave = this.criarChaveData(dataAgendamento);
    if (chave === this.criarChaveData(hoje)) {
      return "Hoje";
    }
    if (chave === this.criarChaveData(amanha)) {
      return "Amanh\xE3";
    }
    return new Intl.DateTimeFormat("pt-BR", {
      weekday: "short",
      day: "2-digit",
      month: "short"
    }).format(dataAgendamento);
  }
  formatarDuracao(agendamento) {
    const duracaoMinutos = Math.round((Date.parse(agendamento.fim) - Date.parse(agendamento.inicio)) / 6e4);
    if (!Number.isFinite(duracaoMinutos) || duracaoMinutos <= 0) {
      return "";
    }
    const horas = Math.floor(duracaoMinutos / 60);
    const minutos = duracaoMinutos % 60;
    if (horas === 0) {
      return `${minutos} min`;
    }
    return minutos > 0 ? `${horas}h ${minutos}min` : `${horas}h`;
  }
  terminaNoDiaSeguinte(agendamento) {
    return this.criarChaveData(new Date(agendamento.inicio)) !== this.criarChaveData(new Date(agendamento.fim));
  }
  formatarPreco(valor) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(valor);
  }
  criarUrlConfirmacaoWhatsApp(agendamento) {
    let telefone = this.dadosContatos.contatos().find((contato) => contato.id === agendamento.contato_id)?.telefone?.replace(/\D/g, "");
    if (!telefone) {
      return null;
    }
    if (telefone.startsWith("0") && (telefone.length === 11 || telefone.length === 12)) {
      telefone = telefone.slice(1);
    }
    const numero = telefone.length === 10 || telefone.length === 11 ? `55${telefone}` : telefone;
    if (numero.length < 12 || numero.length > 15) {
      return null;
    }
    const mensagem = `Oi, ${agendamento.contato.nome}! Confirmando nosso hor\xE1rio no est\xFAdio: ${this.formatarReferenciaData(agendamento.inicio)}, \xE0s ${this.formatarHorario(agendamento.inicio)}.`;
    return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  }
  identificarServico(servicoId) {
    return this.dadosServicos.servicos().find((servico) => servico.id === servicoId);
  }
  criarFimAgendamento(inicio, horarioFim) {
    const correspondencia = /^(\d{2}):(\d{2})$/.exec(horarioFim);
    if (!correspondencia) {
      return null;
    }
    const horas = Number(correspondencia[1]);
    const minutos = Number(correspondencia[2]);
    if (!Number.isInteger(horas) || !Number.isInteger(minutos) || horas < 0 || horas > 23 || minutos < 0 || minutos > 59) {
      return null;
    }
    const fim = new Date(inicio);
    fim.setHours(horas, minutos, 0, 0);
    if (fim < inicio) {
      fim.setDate(fim.getDate() + 1);
    }
    return fim;
  }
  encontrarConflito(inicio, fim) {
    const inicioNovo = inicio.getTime();
    const fimNovo = fim.getTime();
    return this.dadosAgendamentos.agendamentos().filter((agendamento) => !agendamento.resultado).find((agendamento) => {
      const inicioExistente = Date.parse(agendamento.inicio);
      const fimExistente = Date.parse(agendamento.fim);
      return Number.isFinite(inicioExistente) && Number.isFinite(fimExistente) && inicioNovo < fimExistente && fimNovo > inicioExistente;
    }) ?? null;
  }
  agruparAgendamentos(itens, ordem) {
    const grupos = /* @__PURE__ */ new Map();
    const agendamentos = [...itens].sort((primeiro, segundo) => {
      const diferenca = Date.parse(primeiro.inicio) - Date.parse(segundo.inicio);
      return ordem === "ascendente" ? diferenca : -diferenca;
    });
    for (const agendamento of agendamentos) {
      const inicio = new Date(agendamento.inicio);
      const chave = this.criarChaveData(inicio);
      const grupo = grupos.get(chave) ?? [];
      grupo.push(agendamento);
      grupos.set(chave, grupo);
    }
    return Array.from(grupos.entries()).map(([chave, agendamentosGrupo]) => {
      const data = new Date(agendamentosGrupo[0].inicio);
      return {
        chave,
        rotulo: this.criarRotuloData(data),
        dataCompleta: this.formatarDataCompleta(data),
        agendamentos: agendamentosGrupo
      };
    });
  }
  criarChaveData(data) {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
  }
  criarRotuloData(data) {
    const hoje = /* @__PURE__ */ new Date();
    const amanha = new Date(hoje);
    amanha.setDate(amanha.getDate() + 1);
    const chave = this.criarChaveData(data);
    if (chave === this.criarChaveData(hoje)) {
      return "Hoje";
    }
    if (chave === this.criarChaveData(amanha)) {
      return "Amanh\xE3";
    }
    const rotulo = new Intl.DateTimeFormat("pt-BR", {
      weekday: "long"
    }).format(data);
    return rotulo.charAt(0).toLocaleUpperCase("pt-BR") + rotulo.slice(1);
  }
  formatarDataCompleta(data) {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    }).format(data);
  }
  limparFormulario() {
    this.formulario.reset({
      contato_id: "",
      inicio: "",
      fim: ""
    });
    this.servicosSelecionados.set([]);
    this.reagendamentoOrigem.set(null);
    this.erroFormulario.set(null);
  }
  prepararReagendamento(agendamento) {
    this.formulario.reset({
      contato_id: agendamento.contato_id,
      inicio: "",
      fim: ""
    });
    this.servicosSelecionados.set(agendamento.agendamento_servicos.map((item) => ({
      servico_id: item.servico.id,
      quantidade: item.quantidade
    })));
    this.reagendamentoOrigem.set(agendamento);
    this.erroFormulario.set(null);
    this.formularioAberto.set(true);
    window.setTimeout(() => {
      document.getElementById("novo-agendamento")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
  obterMensagemErro(erro) {
    if (typeof erro === "object" && erro !== null && "message" in erro) {
      return String(erro.message);
    }
    return "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o.";
  }
  static \u0275fac = function Agendamentos_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Agendamentos)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Agendamentos, selectors: [["app-agendamentos"]], decls: 22, vars: 9, consts: [[1, "pagina-agenda"], [1, "cabecalho-pagina"], [1, "secao"], [1, "descricao"], [1, "acoes-cabecalho"], ["type", "button", "aria-controls", "novo-agendamento", 1, "botao-novo"], ["aria-label", "Pr\xF3ximo passo da agenda", 1, "central-dia"], [1, "estrutura-agenda"], ["aria-label", "Linha do tempo da agenda", 1, "agenda-painel"], [1, "mensagem-acerto"], [1, "erro-acerto"], [1, "estado"], [1, "estado", "estado-erro"], [1, "estado", "estado-vazio"], [1, "secoes-agenda"], ["id", "novo-agendamento", 1, "cadastro-painel"], ["type", "button", "aria-controls", "novo-agendamento", 1, "botao-novo", 3, "click"], ["aria-hidden", "true"], [1, "conteudo-central-dia"], [1, "destaque-dia", "proximo-destaque"], [1, "destaque-dia"], [1, "estado-destaque"], [1, "horario-destaque"], [1, "servicos-destaque"], ["type", "button", 1, "acao-central", 3, "click"], [1, "proximo-central"], ["target", "_blank", "rel", "noopener noreferrer", 1, "confirmar-whatsapp", "confirmar-whatsapp-central", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "confirmar-whatsapp", 3, "href"], [1, "carregador"], ["type", "button", 1, "secundario", 3, "click"], ["type", "button", 1, "botao-novo"], ["type", "button", 1, "botao-novo", 3, "click"], [1, "secao-temporal", 3, "secao-agora", "secao-proximos", "secao-pendentes", "secao-historico"], [1, "secao-temporal"], [1, "cabecalho-secao-temporal"], [1, "indicador-secao"], [1, "contador-secao"], [1, "secao-vazia"], ["type", "button", 1, "resumo-pendencias"], ["type", "button", 1, "resumo-historico"], ["type", "button", 1, "resumo-pendencias", 3, "click"], ["type", "button", 1, "resumo-historico", 3, "click"], [1, "acoes-pendencias"], [1, "acoes-historico"], [1, "grupos-agenda"], [1, "grupo-dia"], ["type", "button", 1, "botao-recolher-pendencias", 3, "click"], ["type", "button", 1, "botao-recolher-historico", 3, "click"], [1, "cabecalho-dia"], [1, "lista-agendamentos"], [1, "agendamento"], [1, "eixo-horario"], [1, "horario-inicio"], ["aria-hidden", "true", 1, "trilho-horario"], [1, "horario-fim"], [1, "metadados-horario"], [1, "dia-seguinte"], [1, "duracao-agendamento"], [1, "bloco-agendamento"], [1, "topo-agendamento"], [1, "rotulo-agendamento"], [1, "situacao-agendamento"], [1, "resultado-agendamento", 3, "resultado-concluido", "resultado-cancelado", "resultado-reagendado", "resultado-ausencia"], [1, "valor-agendamento"], [1, "itens"], [1, "item-servico"], [1, "observacao-fechamento"], [1, "acoes-agendamento"], [1, "acoes-apoio"], ["routerLink", "/acertos", 1, "acerto-gerado", 3, "queryParams"], [1, "menu-agendamento"], [1, "menu-agendamento-conteudo"], ["type", "button", 3, "disabled"], ["type", "button", 1, "acao-perigosa", 3, "click", "disabled"], [1, "resultado-agendamento"], ["type", "button", 1, "registrar-desfecho", 3, "disabled"], ["type", "button", 1, "registrar-desfecho", 3, "click", "disabled"], ["type", "button", 3, "click", "disabled"], ["type", "button", 3, "click"], [1, "cabecalho-cadastro"], ["type", "button", "aria-label", "Fechar formul\xE1rio", 1, "botao-fechar", 3, "click", "disabled"], [1, "aviso-reagendamento-formulario"], [3, "ngSubmit", "formGroup"], [1, "campos-principais"], ["formControlName", "contato_id"], ["value", ""], [3, "value"], [1, "campos-data"], ["type", "datetime-local", "formControlName", "inicio"], ["type", "time", "formControlName", "fim", "step", "60"], [1, "ajuda-campo"], [1, "selecao-servicos"], [1, "estado-servicos"], [1, "lista-servicos"], [1, "resumo-formulario"], [1, "erro-formulario"], [1, "acoes-formulario"], ["type", "button", 1, "secundario", 3, "click", "disabled"], ["type", "submit", 1, "primario", 3, "disabled"], [1, "servico", 3, "selecionado"], [1, "servico"], [1, "marcacao-servico"], ["type", "checkbox", 3, "change", "checked"], [1, "quantidade"], ["type", "number", "min", "0.01", "step", "0.01", 3, "input", "value"], ["type", "button", "aria-label", "Fechar registro de desfecho", 1, "fundo-fechamento", 3, "click", "disabled"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "titulo-fechamento", 1, "painel-fechamento"], [1, "cabecalho-fechamento"], ["id", "titulo-fechamento"], ["type", "button", "aria-label", "Fechar", 1, "botao-fechar", 3, "click", "disabled"], [1, "resumo-fechamento"], ["type", "hidden", "formControlName", "resultado"], [1, "campo-resultado"], [1, "opcoes-resultado"], ["type", "button", 1, "opcao-resultado", 3, "selecionada", "disabled"], [1, "aviso-reagendamento"], [1, "campo-observacao-fechamento"], ["rows", "4", "formControlName", "observacoes_fechamento", "placeholder", "Opcional. Ex.: sess\xE3o conclu\xEDda sem altera\xE7\xF5es, cliente avisou com anteced\xEAncia..."], ["role", "alert", 1, "erro-fechamento"], [1, "acoes-formulario-fechamento"], ["type", "submit", 1, "confirmar-fechamento", 3, "disabled"], ["type", "button", 1, "opcao-resultado", 3, "click", "disabled"], [1, "marcador-resultado"]], template: function Agendamentos_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "header", 1)(2, "div")(3, "p", 2);
      \u0275\u0275text(4, "Agenda do est\xFAdio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "Agendamentos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 3);
      \u0275\u0275text(8, " Hor\xE1rios, servi\xE7os e acertos em um s\xF3 lugar. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4);
      \u0275\u0275conditionalCreate(10, Agendamentos_Conditional_10_Template, 4, 1, "button", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(11, Agendamentos_Conditional_11_Template, 4, 1, "section", 6);
      \u0275\u0275elementStart(12, "div", 7)(13, "section", 8);
      \u0275\u0275conditionalCreate(14, Agendamentos_Conditional_14_Template, 2, 1, "p", 9);
      \u0275\u0275conditionalCreate(15, Agendamentos_Conditional_15_Template, 2, 1, "p", 10);
      \u0275\u0275conditionalCreate(16, Agendamentos_Conditional_16_Template, 4, 0, "div", 11)(17, Agendamentos_Conditional_17_Template, 7, 1, "div", 12)(18, Agendamentos_Conditional_18_Template, 6, 1, "div", 13)(19, Agendamentos_Conditional_19_Template, 3, 0, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(20, Agendamentos_Conditional_20_Template, 58, 15, "aside", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, Agendamentos_Conditional_21_Template, 41, 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_7_0;
      \u0275\u0275advance(10);
      \u0275\u0275conditional(!ctx.formularioAberto() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.dadosAgendamentos.carregando() && !ctx.dadosAgendamentos.erro() && (ctx.agendamentoAtual() || ctx.proximoAgendamento()) ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("formulario-aberto", ctx.formularioAberto());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.mensagemAcerto() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.erroAgenda() || ctx.erroAcerto() || ctx.dadosAcertos.erro() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dadosAgendamentos.carregando() ? 16 : ctx.dadosAgendamentos.erro() ? 17 : ctx.dadosAgendamentos.agendamentos().length === 0 ? 18 : 19);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.formularioAberto() ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_7_0 = ctx.agendamentoEmFechamento()) ? 21 : -1, tmp_7_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['\n[_nghost-%COMP%] {\n  --studio-accent: var(--studio-brand);\n  --studio-on-accent: var(--studio-on-brand);\n  --agenda-surface: var(--app-surface);\n  --agenda-soft: var(--app-surface-muted);\n  --agenda-hover: var(--app-surface-hover);\n  --agenda-ink: var(--app-text);\n  --agenda-muted: var(--app-text-muted);\n  --agenda-line: var(--app-border);\n  --agenda-line-strong: var(--app-border-strong);\n  --agenda-success: var(--color-success);\n  --agenda-success-soft: var(--color-success-soft);\n  --agenda-success-line: var(--color-success-border);\n  --agenda-danger: var(--color-danger);\n  --agenda-danger-soft: var(--color-danger-soft);\n  --agenda-danger-line: var(--color-danger-border);\n  display: block;\n  min-height: 100%;\n  color: var(--agenda-ink);\n}\n.pagina-agenda[_ngcontent-%COMP%] {\n  width: min(100%, 100rem);\n  min-height: 100vh;\n  margin: 0 auto;\n  padding: clamp(1rem, 2vw, 1.75rem);\n}\n.cabecalho-pagina[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 1.15rem;\n}\n.cabecalho-pagina[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.28rem 0 0;\n  font-size: clamp(2rem, 4vw, 3.15rem);\n  font-weight: 720;\n  line-height: 0.92;\n  letter-spacing: -0.055em;\n}\n.secao[_ngcontent-%COMP%], \n.cabecalho-cadastro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.cabecalho-fechamento[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--agenda-muted);\n  font-size: 0.6rem;\n  font-weight: 760;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n.descricao[_ngcontent-%COMP%] {\n  margin: 0.6rem 0 0;\n  color: var(--agenda-muted);\n  font-size: 0.78rem;\n}\n.acoes-cabecalho[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  gap: 1rem;\n}\n.central-dia[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin-bottom: 1rem;\n  background: var(--agenda-surface);\n  color: var(--agenda-ink);\n  border: 0.0625rem solid var(--agenda-line-strong);\n  border-top: 0.2rem solid var(--studio-accent);\n  border-radius: 0.5rem;\n  box-shadow: var(--shadow-soft);\n}\n.conteudo-central-dia[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n}\n.conteudo-central-dia[_ngcontent-%COMP%]:has(.proximo-central) {\n  grid-template-columns: minmax(0, 1.65fr) minmax(14rem, 0.8fr);\n}\n.conteudo-central-dia[_ngcontent-%COMP%]:has(.proximo-central)   .destaque-dia[_ngcontent-%COMP%] {\n  border-right: 0.0625rem solid var(--agenda-line);\n}\n.destaque-dia[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 1.15rem;\n}\n.destaque-dia[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.3rem 0;\n  color: inherit;\n  font-size: clamp(1.3rem, 3vw, 2rem);\n}\n.destaque-dia[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n  color: var(--agenda-muted);\n  font-size: 0.68rem;\n}\n.estado-destaque[_ngcontent-%COMP%], \n.horario-destaque[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--agenda-muted);\n  font-size: 0.64rem;\n}\n.estado-destaque[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-weight: 720;\n  text-transform: uppercase;\n}\n.estado-destaque[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 0.45rem;\n  height: 0.45rem;\n  background: var(--studio-accent);\n  border-radius: 50%;\n  box-shadow: 0 0 0 0.2rem color-mix(in oklab, var(--studio-accent) 18%, transparent);\n}\n.servicos-destaque[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  margin-top: 0.75rem;\n}\n.servicos-destaque[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.4rem;\n  background: var(--agenda-soft);\n  border: 0.0625rem solid var(--agenda-line);\n  font-size: 0.58rem;\n}\n.acao-central[_ngcontent-%COMP%] {\n  margin-top: 0.85rem;\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border: 0.0625rem solid var(--studio-accent);\n}\n.proximo-central[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: center;\n  gap: 0.25rem;\n  padding: 1.15rem;\n  background: var(--agenda-soft);\n}\n.proximo-central[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.proximo-central[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--agenda-muted);\n  font-size: 0.6rem;\n}\n.proximo-central[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 760;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.proximo-central[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.estrutura-agenda[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  align-items: start;\n  gap: 1rem;\n}\n.estrutura-agenda.formulario-aberto[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) minmax(21rem, 24rem);\n}\n.agenda-painel[_ngcontent-%COMP%], \n.cadastro-painel[_ngcontent-%COMP%], \n.painel-fechamento[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: var(--agenda-surface);\n  border: 0.0625rem solid var(--agenda-line-strong);\n  border-radius: 0.45rem;\n  box-shadow: var(--shadow-soft, 0 1rem 2.5rem rgba(13, 16, 13, 0.07));\n}\n.agenda-painel[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.cabecalho-cadastro[_ngcontent-%COMP%], \n.cabecalho-fechamento[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem 1.1rem;\n  border-bottom: 0.0625rem solid var(--agenda-line);\n}\n.cabecalho-cadastro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.cabecalho-fechamento[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.18rem 0 0;\n  font-size: 0.94rem;\n  font-weight: 720;\n  letter-spacing: -0.015em;\n}\n.aviso-reagendamento-formulario[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.7rem 1.1rem;\n  background: var(--agenda-soft);\n  color: var(--agenda-muted);\n  border-bottom: 0.0625rem solid var(--agenda-line);\n  font-size: 0.62rem;\n  line-height: 1.5;\n}\n.aviso-reagendamento-formulario[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--agenda-ink);\n}\n.secoes-agenda[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  background: var(--agenda-soft);\n}\n.secao-temporal[_ngcontent-%COMP%] {\n  overflow: visible;\n  background: var(--agenda-surface);\n  border: 0.0625rem solid var(--agenda-line);\n  border-radius: 0.38rem;\n  box-shadow: 0 0.2rem 0.55rem rgba(13, 16, 13, 0.04);\n}\n.cabecalho-secao-temporal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.9rem 1.1rem;\n  background: var(--agenda-surface);\n}\n.cabecalho-secao-temporal[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.7rem;\n}\n.cabecalho-secao-temporal[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  display: grid;\n  min-width: 0;\n  gap: 0.12rem;\n}\n.cabecalho-secao-temporal[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n}\n.cabecalho-secao-temporal[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--agenda-muted);\n  font-size: 0.62rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.indicador-secao[_ngcontent-%COMP%] {\n  width: 0.55rem;\n  height: 0.55rem;\n  flex: 0 0 auto;\n  background: var(--agenda-line-strong);\n  border-radius: 50%;\n}\n.contador-secao[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 1.75rem;\n  min-height: 1.75rem;\n  flex: 0 0 auto;\n  place-items: center;\n  background: var(--agenda-soft);\n  color: var(--agenda-muted);\n  border-radius: 999rem;\n  font-size: 0.62rem;\n  font-weight: 760;\n}\n.secao-agora[_ngcontent-%COMP%]   .cabecalho-secao-temporal[_ngcontent-%COMP%] {\n  background: var(--agenda-surface);\n}\n.secao-agora[_ngcontent-%COMP%]   .indicador-secao[_ngcontent-%COMP%] {\n  background: var(--studio-accent);\n  box-shadow: 0 0 0 0.25rem color-mix(in oklab, var(--studio-accent) 16%, transparent);\n}\n.secao-agora[_ngcontent-%COMP%]   .contador-secao[_ngcontent-%COMP%] {\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n}\n.secao-agora[_ngcontent-%COMP%]   .bloco-agendamento[_ngcontent-%COMP%] {\n  box-shadow: 0 0.7rem 1.8rem rgba(13, 16, 13, 0.09);\n}\n.secao-proximos[_ngcontent-%COMP%]   .indicador-secao[_ngcontent-%COMP%] {\n  background: color-mix(in oklab, var(--studio-accent) 65%, var(--agenda-line-strong));\n}\n.secao-pendentes[_ngcontent-%COMP%] {\n  background: var(--agenda-surface);\n  border-color: color-mix(in oklab, var(--color-warning, #976407) 28%, var(--agenda-line));\n}\n.secao-pendentes[_ngcontent-%COMP%]   .cabecalho-secao-temporal[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.secao-pendentes[_ngcontent-%COMP%]   .indicador-secao[_ngcontent-%COMP%] {\n  background: var(--color-warning, #976407);\n}\n.secao-historico[_ngcontent-%COMP%]   .indicador-secao[_ngcontent-%COMP%] {\n  background: var(--agenda-muted);\n}\n.secao-vazia[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 1.1rem 1rem 2.35rem;\n  color: var(--agenda-muted);\n  font-size: 0.66rem;\n}\n.resumo-pendencias[_ngcontent-%COMP%], \n.resumo-historico[_ngcontent-%COMP%] {\n  display: flex;\n  width: calc(100% - 2rem);\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 1rem 1rem;\n  padding: 0.75rem 0.9rem;\n  background: var(--agenda-surface);\n  color: var(--agenda-ink);\n  border: 0.0625rem solid var(--agenda-line);\n  border-radius: 0.3rem;\n  text-align: left;\n}\n.resumo-pendencias[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child, \n.resumo-historico[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  display: grid;\n}\n.resumo-pendencias[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child   small[_ngcontent-%COMP%], \n.resumo-historico[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child   small[_ngcontent-%COMP%] {\n  color: var(--agenda-muted);\n  font-size: 0.6rem;\n}\n.resumo-pendencias[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child, \n.resumo-historico[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  color: var(--agenda-muted);\n  font-size: 0.62rem;\n}\n.acoes-pendencias[_ngcontent-%COMP%], \n.acoes-historico[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 0 1rem 0.65rem;\n}\n.botao-recolher-pendencias[_ngcontent-%COMP%], \n.botao-recolher-historico[_ngcontent-%COMP%] {\n  min-height: 2rem;\n  padding: 0.35rem;\n  background: transparent;\n  color: var(--agenda-muted);\n  border: 0;\n  font-size: 0.6rem;\n}\n.grupos-agenda[_ngcontent-%COMP%] {\n  display: grid;\n}\n.grupo-dia[_ngcontent-%COMP%]    + .grupo-dia[_ngcontent-%COMP%] {\n  border-top: 0.0625rem solid var(--agenda-line-strong);\n}\n.cabecalho-dia[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.75rem 1.1rem;\n  background: var(--agenda-soft);\n  border-bottom: 0.0625rem solid var(--agenda-line);\n}\n.cabecalho-dia[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.55rem;\n}\n.cabecalho-dia[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n}\n.cabecalho-dia[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.cabecalho-dia[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--agenda-muted);\n  font-size: 0.62rem;\n}\n.lista-agendamentos[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n  padding: 0.9rem 1rem 1rem;\n}\n.agendamento[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 4.3rem minmax(0, 1fr);\n  align-items: stretch;\n  gap: 1rem;\n}\n.eixo-horario[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 7.5rem;\n  grid-template-rows: auto minmax(1.5rem, 1fr) auto auto;\n  justify-items: end;\n  gap: 0.25rem;\n  padding: 0.75rem 0;\n  font-variant-numeric: tabular-nums;\n}\n.horario-inicio[_ngcontent-%COMP%], \n.horario-fim[_ngcontent-%COMP%] {\n  color: var(--agenda-ink);\n  font-size: 0.7rem;\n  font-weight: 760;\n}\n.horario-fim[_ngcontent-%COMP%] {\n  color: var(--agenda-muted);\n  font-weight: 650;\n}\n.trilho-horario[_ngcontent-%COMP%] {\n  position: relative;\n  width: 0.0625rem;\n  height: 100%;\n  margin-right: 0.3rem;\n  background: var(--agenda-line-strong);\n}\n.trilho-horario[_ngcontent-%COMP%]::before, \n.trilho-horario[_ngcontent-%COMP%]::after {\n  position: absolute;\n  left: 50%;\n  width: 0.45rem;\n  height: 0.45rem;\n  box-sizing: border-box;\n  background: var(--agenda-surface);\n  border: 0.1rem solid var(--studio-accent);\n  border-radius: 50%;\n  content: "";\n  transform: translateX(-50%);\n}\n.trilho-horario[_ngcontent-%COMP%]::before {\n  top: -0.2rem;\n}\n.trilho-horario[_ngcontent-%COMP%]::after {\n  bottom: -0.2rem;\n  border-color: var(--agenda-line-strong);\n}\n.dia-seguinte[_ngcontent-%COMP%], \n.duracao-agendamento[_ngcontent-%COMP%] {\n  color: var(--agenda-muted);\n  font-size: 0.55rem;\n  line-height: 1.2;\n  white-space: nowrap;\n}\n.metadados-horario[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: end;\n  gap: 0.1rem;\n}\n.dia-seguinte[_ngcontent-%COMP%] {\n  color: var(--studio-accent);\n  font-weight: 740;\n}\n.bloco-agendamento[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 1rem;\n  background: var(--agenda-surface);\n  border: 0.0625rem solid var(--agenda-line);\n  border-left: 0.16rem solid var(--studio-accent);\n  border-radius: 0.38rem;\n  box-shadow: 0 0.2rem 0.6rem rgba(13, 16, 13, 0.05);\n}\n.bloco-agendamento[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0.7rem;\n  font-size: 1.05rem;\n  font-weight: 720;\n  letter-spacing: -0.025em;\n}\n.topo-agendamento[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.rotulo-agendamento[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--agenda-muted);\n  font-size: 0.55rem;\n  font-weight: 760;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.valor-agendamento[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  font-size: 0.78rem;\n  font-variant-numeric: tabular-nums;\n}\n.situacao-agendamento[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: end;\n  gap: 0.35rem;\n}\n.resultado-agendamento[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.45rem;\n  background: var(--agenda-soft);\n  color: var(--agenda-muted);\n  border: 0.0625rem solid var(--agenda-line);\n  border-radius: 999rem;\n  font-size: 0.56rem;\n  font-weight: 760;\n}\n.resultado-concluido[_ngcontent-%COMP%] {\n  color: var(--agenda-success);\n}\n.resultado-cancelado[_ngcontent-%COMP%] {\n  color: var(--agenda-danger);\n}\n.resultado-reagendado[_ngcontent-%COMP%] {\n  color: var(--color-warning, #976407);\n}\n.itens[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.item-servico[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: baseline;\n  gap: 0.35rem;\n  padding: 0.3rem 0.45rem;\n  background: var(--agenda-soft);\n  border: 0.0625rem solid var(--agenda-line);\n  border-radius: 0.22rem;\n}\n.item-servico[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 680;\n}\n.item-servico[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--agenda-muted);\n  font-size: 0.6rem;\n}\n.observacao-fechamento[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.2rem;\n  margin-top: 0.7rem;\n  padding: 0.65rem;\n  background: var(--agenda-soft);\n  border-left: 0.15rem solid var(--agenda-line-strong);\n}\n.observacao-fechamento[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--agenda-muted);\n  font-size: 0.54rem;\n}\n.observacao-fechamento[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.65rem;\n  line-height: 1.5;\n  white-space: pre-wrap;\n}\n.acoes-agendamento[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.4rem;\n  margin-top: 0.8rem;\n  padding-top: 0.7rem;\n  border-top: 0.0625rem solid color-mix(in oklab, var(--studio-accent) 10%, var(--agenda-line));\n}\nbutton[_ngcontent-%COMP%], \n.acerto-gerado[_ngcontent-%COMP%], \n.confirmar-whatsapp[_ngcontent-%COMP%] {\n  min-height: 2.25rem;\n  box-sizing: border-box;\n  padding: 0.45rem 0.7rem;\n  border-radius: 0.25rem;\n  font: inherit;\n  font-size: 0.66rem;\n  font-weight: 700;\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:disabled, \n.acerto-gerado[_ngcontent-%COMP%]:disabled, \n.confirmar-whatsapp[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.5;\n}\n.confirmar-whatsapp[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  color: var(--agenda-ink);\n  border: 0.0625rem solid var(--agenda-line-strong);\n  text-decoration: none;\n}\n.confirmar-whatsapp-central[_ngcontent-%COMP%] {\n  justify-self: start;\n  margin-top: 0.4rem;\n}\n.botao-novo[_ngcontent-%COMP%], \n.primario[_ngcontent-%COMP%] {\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border: 0.0625rem solid var(--studio-accent);\n}\n.botao-novo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 2.65rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.45rem;\n  padding-inline: 0.9rem;\n}\n.botao-novo[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 450;\n  line-height: 1;\n}\n.acerto-gerado[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--agenda-success-soft);\n  color: var(--agenda-success);\n  border: 0.0625rem solid var(--agenda-success-line);\n  text-decoration: none;\n}\n.registrar-desfecho[_ngcontent-%COMP%], \n.confirmar-fechamento[_ngcontent-%COMP%] {\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border: 0.0625rem solid var(--studio-accent);\n}\n.secundario[_ngcontent-%COMP%], \n.botao-fechar[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--agenda-ink);\n  border: 0.0625rem solid var(--agenda-line-strong);\n}\n.acoes-apoio[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin-left: auto;\n}\n.menu-agendamento[_ngcontent-%COMP%] {\n  position: relative;\n}\n.menu-agendamento[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.45rem 0.65rem;\n  color: var(--agenda-muted);\n  border: 0.0625rem solid var(--agenda-line);\n  border-radius: 0.25rem;\n  font-size: 0.62rem;\n  cursor: pointer;\n  list-style: none;\n}\n.menu-agendamento[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n.menu-agendamento[open][_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  background: var(--agenda-soft);\n  color: var(--agenda-ink);\n}\n.menu-agendamento-conteudo[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 25;\n  top: calc(100% + 0.25rem);\n  right: 0;\n  display: grid;\n  width: 12.5rem;\n  padding: 0.3rem;\n  background: var(--agenda-surface);\n  border: 0.0625rem solid var(--agenda-line-strong);\n  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.16);\n}\n.menu-agendamento-conteudo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  background: transparent;\n  color: var(--agenda-ink);\n  border: 0;\n  text-align: left;\n}\n.menu-agendamento-conteudo[_ngcontent-%COMP%]   .acao-perigosa[_ngcontent-%COMP%] {\n  color: var(--agenda-danger);\n}\n.cadastro-painel[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 1rem;\n  scroll-margin-top: 1rem;\n}\n.cadastro-painel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.botao-fechar[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.25rem;\n  height: 2.25rem;\n  padding: 0;\n  place-items: center;\n  font-size: 1.1rem;\n  font-weight: 400;\n}\n.campos-principais[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n}\n.campos-data[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.65rem;\n}\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  align-content: start;\n  gap: 0.35rem;\n}\nlabel[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  font-weight: 700;\n}\nlabel[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  color: var(--agenda-danger);\n  font-size: 0.61rem;\n}\n.ajuda-campo[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--agenda-muted);\n  font-size: 0.6rem;\n  line-height: 1.4;\n}\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  min-height: 2.5rem;\n  padding: 0.58rem 0.65rem;\n  background: var(--agenda-surface);\n  color: var(--agenda-ink);\n  border: 0.0625rem solid var(--agenda-line-strong);\n  border-radius: 0.25rem;\n  font: inherit;\n  font-size: 0.72rem;\n  outline: none;\n}\ninput[_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--studio-accent);\n  box-shadow: 0 0 0 0.12rem color-mix(in oklab, var(--studio-accent) 16%, transparent);\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.selecao-servicos[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-top: 0.9rem;\n  border-top: 0.0625rem solid var(--agenda-line);\n}\n.selecao-servicos[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.6rem;\n}\n.selecao-servicos[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--agenda-muted);\n  font-size: 0.58rem;\n}\n.selecao-servicos[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.76rem;\n}\n.lista-servicos[_ngcontent-%COMP%] {\n  display: grid;\n  max-height: 18rem;\n  overflow-y: auto;\n  border: 0.0625rem solid var(--agenda-line);\n  scrollbar-color: var(--agenda-line-strong) transparent;\n  scrollbar-width: thin;\n}\n.servico[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.6rem;\n  padding: 0.6rem;\n  background: var(--agenda-surface);\n  border-bottom: 0.0625rem solid var(--agenda-line);\n}\n.servico[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.servico.selecionado[_ngcontent-%COMP%] {\n  background: color-mix(in oklab, var(--studio-accent) 9%, var(--agenda-surface));\n  box-shadow: inset 0.15rem 0 var(--studio-accent);\n}\n.marcacao-servico[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  gap: 0.55rem;\n  cursor: pointer;\n}\n.marcacao-servico[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 0.95rem;\n  min-height: 0.95rem;\n  flex: 0 0 auto;\n  padding: 0;\n  accent-color: var(--studio-accent);\n}\n.marcacao-servico[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.12rem;\n}\n.marcacao-servico[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-size: 0.67rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.marcacao-servico[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--agenda-muted);\n  font-size: 0.6rem;\n}\n.quantidade[_ngcontent-%COMP%] {\n  width: 4.2rem;\n}\n.quantidade[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-height: 2rem;\n  padding: 0.35rem 0.45rem;\n}\n.estado-servicos[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1rem;\n  color: var(--agenda-muted);\n  border: 0.0625rem solid var(--agenda-line);\n  font-size: 0.6rem;\n  text-align: center;\n}\n.resumo-formulario[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: 0.9rem;\n  padding: 0.75rem 0;\n  border-top: 0.0625rem solid var(--agenda-line);\n  border-bottom: 0.0625rem solid var(--agenda-line);\n}\n.resumo-formulario[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--agenda-muted);\n  font-size: 0.65rem;\n}\n.resumo-formulario[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-variant-numeric: tabular-nums;\n}\n.erro-formulario[_ngcontent-%COMP%] {\n  margin: 0.7rem 0 0;\n  color: var(--agenda-danger);\n  font-size: 0.68rem;\n}\n.acoes-formulario[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.55rem;\n  margin-top: 0.8rem;\n}\n.acoes-formulario[_ngcontent-%COMP%]   .primario[_ngcontent-%COMP%] {\n  min-height: 2.65rem;\n}\n.fundo-fechamento[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 80;\n  inset: 0;\n  padding: 0;\n  background: rgba(5, 7, 6, 0.66);\n  border: 0;\n  border-radius: 0;\n}\n.fundo-fechamento[_ngcontent-%COMP%]:disabled {\n  opacity: 1;\n}\n.painel-fechamento[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 90;\n  top: 50%;\n  left: 50%;\n  width: min(34rem, 100% - 2rem);\n  max-height: calc(100dvh - 2rem);\n  overflow-y: auto;\n  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.28);\n  transform: translate(-50%, -50%);\n}\n.painel-fechamento[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.resumo-fechamento[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n  padding: 0.85rem 1rem;\n  background: var(--agenda-soft);\n  border-bottom: 0.0625rem solid var(--agenda-line);\n}\n.resumo-fechamento[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--agenda-muted);\n  font-size: 0.55rem;\n}\n.resumo-fechamento[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.campo-resultado[_ngcontent-%COMP%] {\n  min-width: 0;\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n.campo-resultado[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-size: 0.66rem;\n  font-weight: 700;\n}\n.opcoes-resultado[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.45rem;\n}\n.opcao-resultado[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.45rem;\n  background: var(--agenda-surface);\n  color: var(--agenda-ink);\n  border: 0.0625rem solid var(--agenda-line);\n  text-align: left;\n}\n.opcao-resultado.selecionada[_ngcontent-%COMP%] {\n  background: var(--agenda-soft);\n  border-color: var(--studio-accent);\n}\n.marcador-resultado[_ngcontent-%COMP%] {\n  display: none;\n}\n.aviso-reagendamento[_ngcontent-%COMP%], \n.erro-fechamento[_ngcontent-%COMP%] {\n  margin: 0.65rem 0 0;\n  padding: 0.6rem;\n  font-size: 0.62rem;\n  line-height: 1.45;\n}\n.aviso-reagendamento[_ngcontent-%COMP%] {\n  background: var(--color-warning-soft, #fbf3df);\n  color: var(--color-warning, #976407);\n  border: 0.0625rem solid var(--color-warning-border, #d9bf82);\n}\n.erro-fechamento[_ngcontent-%COMP%] {\n  background: var(--agenda-danger-soft);\n  color: var(--agenda-danger);\n  border: 0.0625rem solid var(--agenda-danger-line);\n}\n.campo-observacao-fechamento[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n.acoes-formulario-fechamento[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  margin-top: 0.85rem;\n  padding-top: 0.75rem;\n  border-top: 0.0625rem solid var(--agenda-line);\n}\n.mensagem-acerto[_ngcontent-%COMP%], \n.erro-acerto[_ngcontent-%COMP%] {\n  margin: 0.8rem 1rem 0;\n  padding: 0.7rem 0.8rem;\n  border-radius: 0.25rem;\n  font-size: 0.68rem;\n}\n.mensagem-acerto[_ngcontent-%COMP%] {\n  background: var(--agenda-success-soft);\n  color: var(--agenda-success);\n  border: 0.0625rem solid var(--agenda-success-line);\n}\n.erro-acerto[_ngcontent-%COMP%] {\n  background: var(--agenda-danger-soft);\n  color: var(--agenda-danger);\n  border: 0.0625rem solid var(--agenda-danger-line);\n}\n.estado[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 18rem;\n  place-content: center;\n  justify-items: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n.estado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 28rem;\n  margin: 0.35rem 0 0;\n  color: var(--agenda-muted);\n  font-size: 0.72rem;\n  line-height: 1.5;\n}\n.estado[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 0.8rem;\n}\n.estado-erro[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.estado-erro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--agenda-danger);\n}\n.carregador[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  border: 0.12rem solid var(--agenda-line-strong);\n  border-top-color: var(--studio-accent);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_girar 650ms linear infinite;\n}\n@keyframes _ngcontent-%COMP%_girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 74rem) {\n  .estrutura-agenda.formulario-aberto[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) 20rem;\n  }\n  .campos-data[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 58rem) {\n  .estrutura-agenda.formulario-aberto[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cadastro-painel[_ngcontent-%COMP%] {\n    position: static;\n    grid-row: 1;\n  }\n  .campos-data[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 38rem) {\n  .pagina-agenda[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .conteudo-central-dia[_ngcontent-%COMP%]:has(.proximo-central) {\n    grid-template-columns: 1fr;\n  }\n  .conteudo-central-dia[_ngcontent-%COMP%]:has(.proximo-central)   .destaque-dia[_ngcontent-%COMP%] {\n    border-right: 0;\n  }\n  .proximo-central[_ngcontent-%COMP%] {\n    border-top: 0.0625rem solid var(--agenda-line);\n  }\n  .cabecalho-pagina[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n  }\n  .acoes-cabecalho[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .resumo-agenda[_ngcontent-%COMP%] {\n    justify-items: start;\n  }\n  .botao-novo[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .agenda-painel[_ngcontent-%COMP%], \n   .cadastro-painel[_ngcontent-%COMP%] {\n    border-right: 0;\n    border-left: 0;\n    border-radius: 0;\n    box-shadow: none;\n  }\n  .estrutura-agenda[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .cabecalho-dia[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .cabecalho-dia[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 0.1rem;\n  }\n  .lista-agendamentos[_ngcontent-%COMP%] {\n    gap: 0.65rem;\n    padding: 0.75rem;\n  }\n  .agendamento[_ngcontent-%COMP%] {\n    grid-template-columns: 3.4rem minmax(0, 1fr);\n    gap: 0.65rem;\n  }\n  .eixo-horario[_ngcontent-%COMP%] {\n    min-height: 8rem;\n  }\n  .bloco-agendamento[_ngcontent-%COMP%] {\n    padding: 0.8rem;\n  }\n  .topo-agendamento[_ngcontent-%COMP%] {\n    align-items: start;\n    flex-direction: column;\n    gap: 0.45rem;\n  }\n  .campos-data[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .servico[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .quantidade[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .acoes-formulario[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .acoes-formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .resumo-fechamento[_ngcontent-%COMP%], \n   .opcoes-resultado[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .acoes-formulario-fechamento[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Agendamentos, [{
    type: Component,
    args: [{ selector: "app-agendamentos", standalone: true, imports: [ReactiveFormsModule, RouterLink], template: `<main class="pagina-agenda">
  <header class="cabecalho-pagina">
    <div>
      <p class="secao">Agenda do est\xFAdio</p>
      <h1>Agendamentos</h1>
      <p class="descricao">
        Hor\xE1rios, servi\xE7os e acertos em um s\xF3 lugar.
      </p>
    </div>

    <div class="acoes-cabecalho">
      @if (!formularioAberto()) {
        <button
          type="button"
          class="botao-novo"
          aria-controls="novo-agendamento"
          [attr.aria-expanded]="formularioAberto()"
          (click)="abrirFormulario()"
        >
          <span aria-hidden="true">+</span>
          Novo agendamento
        </button>
      }
    </div>
  </header>

  @if (
    !dadosAgendamentos.carregando() &&
    !dadosAgendamentos.erro() &&
    (agendamentoAtual() || proximoAgendamento())
  ) {
    <section
      class="central-dia"
      aria-label="Pr\xF3ximo passo da agenda"
    >
      <div class="conteudo-central-dia">
        @if (agendamentoAtual(); as atual) {
          <article class="destaque-dia">
            <p class="estado-destaque">
              <span></span>
              Sess\xE3o em andamento
            </p>

            <h3>{{ atual.contato.nome }}</h3>

            <p class="horario-destaque">
              {{ formatarHorario(atual.inicio) }}\u2013{{
                formatarHorario(atual.fim)
              }}
            </p>

            <div class="servicos-destaque">
              @for (
                item of atual.agendamento_servicos;
                track item.servico.id
              ) {
                <span>{{ item.servico.nome }}</span>
              }
            </div>

            <button
              type="button"
              class="acao-central"
              (click)="abrirFechamento(atual)"
            >
              Encerrar sess\xE3o
            </button>
          </article>

          @if (proximoAgendamento(); as proximo) {
            <aside class="proximo-central">
              <p>Depois</p>
              <strong>{{ proximo.contato.nome }}</strong>
              <span>
                {{ formatarReferenciaData(proximo.inicio) }} \xB7
                {{ formatarHorario(proximo.inicio) }}
              </span>

              @if (
                criarUrlConfirmacaoWhatsApp(proximo);
                as urlWhatsApp
              ) {
                <a
                  class="confirmar-whatsapp confirmar-whatsapp-central"
                  [href]="urlWhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Confirmar pelo WhatsApp
                </a>
              }
            </aside>
          }
        } @else if (
          proximoAgendamento();
          as proximo
        ) {
          <article class="destaque-dia proximo-destaque">
            <p class="estado-destaque">
              Pr\xF3ximo agendamento
            </p>

            <h3>{{ proximo.contato.nome }}</h3>

            <p class="horario-destaque">
              {{ formatarReferenciaData(proximo.inicio) }},
              {{ formatarHorario(proximo.inicio) }}\u2013{{
                formatarHorario(proximo.fim)
              }}
            </p>

            <div class="servicos-destaque">
              @for (
                item of proximo.agendamento_servicos;
                track item.servico.id
              ) {
                <span>{{ item.servico.nome }}</span>
              }
            </div>

            @if (
              criarUrlConfirmacaoWhatsApp(proximo);
              as urlWhatsApp
            ) {
              <a
                class="confirmar-whatsapp"
                [href]="urlWhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Confirmar pelo WhatsApp
              </a>
            }
          </article>
        }
      </div>
    </section>
  }

  <div
    class="estrutura-agenda"
    [class.formulario-aberto]="formularioAberto()"
  >
    <section
      class="agenda-painel"
      aria-label="Linha do tempo da agenda"
    >

      @if (mensagemAcerto()) {
        <p class="mensagem-acerto">
          {{ mensagemAcerto() }}
        </p>
      }

      @if (
        erroAgenda() ||
        erroAcerto() ||
        dadosAcertos.erro()
      ) {
        <p class="erro-acerto">
          {{
            erroAgenda() ||
              erroAcerto() ||
              dadosAcertos.erro()
          }}
        </p>
      }

      @if (dadosAgendamentos.carregando()) {
        <div class="estado">
          <span class="carregador"></span>
          <p>Carregando agendamentos...</p>
        </div>
      } @else if (dadosAgendamentos.erro()) {
        <div class="estado estado-erro">
          <strong>N\xE3o foi poss\xEDvel carregar a agenda.</strong>
          <p>{{ dadosAgendamentos.erro() }}</p>

          <button
            type="button"
            class="secundario"
            (click)="dadosAgendamentos.listar()"
          >
            Tentar novamente
          </button>
        </div>
      } @else if (
        dadosAgendamentos.agendamentos().length === 0
      ) {
        <div class="estado estado-vazio">
          <strong>Nenhum hor\xE1rio registrado.</strong>
          <p>
            Crie o primeiro agendamento para iniciar a agenda.
          </p>

          @if (!formularioAberto()) {
            <button
              type="button"
              class="botao-novo"
              (click)="abrirFormulario()"
            >
              Novo agendamento
            </button>
          }
        </div>
      } @else {
        <div class="secoes-agenda">
          @for (secao of secoesAgenda(); track secao.tipo) {
            <section
              class="secao-temporal"
              [class.secao-agora]="secao.tipo === 'agora'"
              [class.secao-proximos]="
                secao.tipo === 'proximos'
              "
              [class.secao-pendentes]="
                secao.tipo === 'pendentes'
              "
              [class.secao-historico]="
                secao.tipo === 'historico'
              "
            >
              <header class="cabecalho-secao-temporal">
                <div>
                  <span class="indicador-secao"></span>

                  <span>
                    <strong>{{ secao.titulo }}</strong>
                    <small>{{ secao.descricao }}</small>
                  </span>
                </div>

                <span class="contador-secao">
                  {{ secao.quantidade }}
                </span>
              </header>

              @if (secao.quantidade === 0) {
                <p class="secao-vazia">
                  {{ secao.mensagemVazia }}
                </p>
              } @else if (
                secao.tipo === 'pendentes' &&
                !pendenciasAbertas()
              ) {
                <button
                  type="button"
                  class="resumo-pendencias"
                  [attr.aria-expanded]="pendenciasAbertas()"
                  (click)="alternarPendencias()"
                >
                  <span>
                    <strong>
                      {{ secao.quantidade }}
                      {{
                        secao.quantidade === 1
                          ? 'hor\xE1rio anterior'
                          : 'hor\xE1rios anteriores'
                      }}
                    </strong>
                    <small>
                      Fora da agenda principal at\xE9 receberem um
                      desfecho.
                    </small>
                  </span>

                  <span>Ver anteriores</span>
                </button>
              } @else if (
                secao.tipo === 'historico' &&
                !historicoAberto()
              ) {
                <button
                  type="button"
                  class="resumo-historico"
                  [attr.aria-expanded]="historicoAberto()"
                  (click)="alternarHistorico()"
                >
                  <span>
                    <strong>
                      {{ secao.quantidade }}
                      {{
                        secao.quantidade === 1
                          ? 'registro finalizado'
                          : 'registros finalizados'
                      }}
                    </strong>
                    <small>
                      Conclu\xEDdos, cancelados, reagendados e
                      aus\xEAncias.
                    </small>
                  </span>

                  <span>Ver hist\xF3rico</span>
                </button>
              } @else {
                @if (secao.tipo === 'pendentes') {
                  <div class="acoes-pendencias">
                    <button
                      type="button"
                      class="botao-recolher-pendencias"
                      [attr.aria-expanded]="
                        pendenciasAbertas()
                      "
                      (click)="alternarPendencias()"
                    >
                      Ocultar anteriores
                    </button>
                  </div>
                }

                @if (secao.tipo === 'historico') {
                  <div class="acoes-historico">
                    <button
                      type="button"
                      class="botao-recolher-historico"
                      [attr.aria-expanded]="historicoAberto()"
                      (click)="alternarHistorico()"
                    >
                      Ocultar hist\xF3rico
                    </button>
                  </div>
                }

                <div class="grupos-agenda">
                  @for (
                    grupo of secao.grupos;
                    track grupo.chave
                  ) {
                    <section class="grupo-dia">
              <header class="cabecalho-dia">
                <div>
                  <strong>{{ grupo.rotulo }}</strong>
                  <span>{{ grupo.dataCompleta }}</span>
                </div>

                <small>
                  {{ grupo.agendamentos.length }}
                  {{
                    grupo.agendamentos.length === 1
                      ? 'hor\xE1rio'
                      : 'hor\xE1rios'
                  }}
                </small>
              </header>

              <div class="lista-agendamentos">
                @for (
                  agendamento of grupo.agendamentos;
                  track agendamento.id
                ) {
                  <article class="agendamento">
                    <div class="eixo-horario">
                      <time
                        class="horario-inicio"
                        [attr.datetime]="agendamento.inicio"
                      >
                        {{
                          formatarHorario(agendamento.inicio)
                        }}
                      </time>

                      <span
                        class="trilho-horario"
                        aria-hidden="true"
                      ></span>

                      <time
                        class="horario-fim"
                        [attr.datetime]="agendamento.fim"
                      >
                        {{ formatarHorario(agendamento.fim) }}
                      </time>

                      <div class="metadados-horario">
                        @if (
                          terminaNoDiaSeguinte(agendamento)
                        ) {
                          <small class="dia-seguinte">
                            +1 dia
                          </small>
                        }

                        <small class="duracao-agendamento">
                          {{ formatarDuracao(agendamento) }}
                        </small>
                      </div>
                    </div>

                    <div class="bloco-agendamento">
                      <header class="topo-agendamento">
                        <div>
                          <p class="rotulo-agendamento">
                            Sess\xE3o
                          </p>
                          <h3>
                            {{ agendamento.contato.nome }}
                          </h3>
                        </div>

                        <div class="situacao-agendamento">
                          @if (agendamento.resultado) {
                            <span
                              class="resultado-agendamento"
                              [class.resultado-concluido]="
                                agendamento.resultado ===
                                'concluido'
                              "
                              [class.resultado-cancelado]="
                                agendamento.resultado ===
                                'cancelado'
                              "
                              [class.resultado-reagendado]="
                                agendamento.resultado ===
                                'reagendado'
                              "
                              [class.resultado-ausencia]="
                                agendamento.resultado ===
                                'nao_compareceu'
                              "
                            >
                              {{
                                rotuloResultado(
                                  agendamento.resultado
                                )
                              }}
                            </span>
                          }

                          <strong class="valor-agendamento">
                            {{
                              formatarPreco(
                                dadosAgendamentos.calcularValor(
                                  agendamento
                                )
                              )
                            }}
                          </strong>
                        </div>
                      </header>

                      <div class="itens">
                        @for (
                          item of
                            agendamento.agendamento_servicos;
                          track item.servico.id
                        ) {
                          <span class="item-servico">
                            <strong>
                              {{ item.servico.nome }}
                            </strong>
                            <small>
                              {{ item.quantidade }}
                              {{ item.servico.tipo_cobranca }}
                            </small>
                          </span>
                        }
                      </div>

                      @if (
                        agendamento.observacoes_fechamento
                      ) {
                        <div class="observacao-fechamento">
                          <span>Fechamento</span>
                          <p>
                            {{
                              agendamento.observacoes_fechamento
                            }}
                          </p>
                        </div>
                      }

                      <footer class="acoes-agendamento">
                        @if (!agendamento.resultado) {
                          @if (secao.tipo === 'proximos') {
                            @if (
                              criarUrlConfirmacaoWhatsApp(
                                agendamento
                              );
                              as urlWhatsApp
                            ) {
                              <a
                                class="confirmar-whatsapp"
                                [href]="urlWhatsApp"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Confirmar pelo WhatsApp
                              </a>
                            }
                          } @else {
                            <button
                              type="button"
                              class="registrar-desfecho"
                              [disabled]="
                                fechandoId() !== null ||
                                reabrindoId() !== null
                              "
                              (click)="abrirFechamento(agendamento)"
                            >
                              @if (secao.tipo === 'agora') {
                                Encerrar sess\xE3o
                              } @else {
                                Resolver pend\xEAncia
                              }
                            </button>
                          }
                        }

                        <div class="acoes-apoio">
                          @if (
                            acertoDoAgendamento(
                              agendamento.id
                            );
                            as acerto
                          ) {
                            <a
                              class="acerto-gerado"
                              routerLink="/acertos"
                              [queryParams]="{
                                abrir: acerto.id
                              }"
                            >
                              Acerto gerado
                            </a>
                          }

                          <details class="menu-agendamento">
                            <summary>
                              <span>Mais</span>
                              <span aria-hidden="true">\u2022\u2022\u2022</span>
                            </summary>

                            <div class="menu-agendamento-conteudo">
                              @if (
                                !acertoDoAgendamento(
                                  agendamento.id
                                )
                              ) {
                                <button
                                  type="button"
                                  [disabled]="
                                    dadosAcertos.carregando() ||
                                    gerandoAcertoId() !== null
                                  "
                                  (click)="
                                    gerarAcerto(agendamento)
                                  "
                                >
                                  @if (
                                    gerandoAcertoId() ===
                                    agendamento.id
                                  ) {
                                    Gerando acerto...
                                  } @else {
                                    Gerar acerto
                                  }
                                </button>
                              }

                              @if (
                                !agendamento.resultado &&
                                secao.tipo === 'proximos'
                              ) {
                                <button
                                  type="button"
                                  (click)="
                                    abrirFechamento(
                                      agendamento,
                                      'reagendado'
                                    )
                                  "
                                >
                                  Reagendar
                                </button>

                                <button
                                  type="button"
                                  (click)="
                                    abrirFechamento(
                                      agendamento,
                                      'cancelado'
                                    )
                                  "
                                >
                                  Cancelar hor\xE1rio
                                </button>
                              }

                              @if (agendamento.resultado) {
                                <button
                                  type="button"
                                  [disabled]="
                                    reabrindoId() !== null
                                  "
                                  (click)="reabrir(agendamento)"
                                >
                                  @if (
                                    reabrindoId() ===
                                    agendamento.id
                                  ) {
                                    Reabrindo...
                                  } @else {
                                    Reabrir agendamento
                                  }
                                </button>
                              }

                              <button
                                type="button"
                                class="acao-perigosa"
                                [disabled]="
                                  excluindoId() ===
                                    agendamento.id ||
                                  gerandoAcertoId() ===
                                    agendamento.id ||
                                  fechandoId() !== null ||
                                  reabrindoId() !== null
                                "
                                (click)="excluir(agendamento)"
                              >
                                @if (
                                  excluindoId() ===
                                  agendamento.id
                                ) {
                                  Excluindo...
                                } @else {
                                  Excluir agendamento
                                }
                              </button>
                            </div>
                          </details>
                        </div>
                      </footer>
                    </div>
                  </article>
                }
              </div>
            </section>
          }
                </div>
              }
            </section>
          }
        </div>
      }
    </section>

    @if (formularioAberto()) {
      <aside
        id="novo-agendamento"
        class="cadastro-painel"
      >
        <header class="cabecalho-cadastro">
          <div>
            <p>
              @if (reagendamentoOrigem()) {
                Reagendamento
              } @else {
                Novo hor\xE1rio
              }
            </p>
            <h2>
              @if (reagendamentoOrigem()) {
                Escolha o novo hor\xE1rio
              } @else {
                Criar agendamento
              }
            </h2>
          </div>

          <button
            type="button"
            class="botao-fechar"
            aria-label="Fechar formul\xE1rio"
            [disabled]="salvando()"
            (click)="fecharFormulario()"
          >
            \xD7
          </button>
        </header>

        @if (reagendamentoOrigem(); as origem) {
          <p class="aviso-reagendamento-formulario">
            Contato e servi\xE7os de
            <strong>{{ origem.contato.nome }}</strong>
            foram mantidos. Informe somente a nova data e o
            hor\xE1rio.
          </p>
        }

        <form [formGroup]="formulario" (ngSubmit)="salvar()">
          <div class="campos-principais">
            <label>
              <span>Contato</span>

              <select formControlName="contato_id">
                <option value="">Selecione um contato</option>

                @for (
                  contato of dadosContatos.contatos();
                  track contato.id
                ) {
                  <option [value]="contato.id">
                    {{ contato.nome }}
                  </option>
                }
              </select>

              @if (
                formulario.controls.contato_id.touched &&
                formulario.controls.contato_id.invalid
              ) {
                <small>Selecione um contato.</small>
              }
            </label>

            <div class="campos-data">
              <label>
                <span>In\xEDcio</span>

                <input
                  type="datetime-local"
                  formControlName="inicio"
                />

                @if (
                  formulario.controls.inicio.touched &&
                  formulario.controls.inicio.invalid
                ) {
                  <small>Informe o in\xEDcio.</small>
                }
              </label>

              <label>
                <span>T\xE9rmino</span>

                <input
                  type="time"
                  formControlName="fim"
                  step="60"
                />

                <p class="ajuda-campo">
                  Um hor\xE1rio anterior ao in\xEDcio ser\xE1
                  considerado no dia seguinte.
                </p>

                @if (
                  formulario.controls.fim.touched &&
                  formulario.controls.fim.invalid
                ) {
                  <small>Informe o hor\xE1rio de t\xE9rmino.</small>
                }
              </label>
            </div>
          </div>

          <section class="selecao-servicos">
            <header>
              <h3>Servi\xE7os</h3>
              <span>
                {{ servicosSelecionados().length }} selecionados
              </span>
            </header>

            @if (dadosServicos.carregando()) {
              <p class="estado-servicos">
                Carregando servi\xE7os...
              </p>
            } @else if (
              dadosServicos.servicos().length === 0
            ) {
              <p class="estado-servicos">
                Nenhum servi\xE7o cadastrado.
              </p>
            } @else {
              <div class="lista-servicos">
                @for (
                  servico of dadosServicos.servicos();
                  track servico.id
                ) {
                  <article
                    class="servico"
                    [class.selecionado]="
                      servicoEstaSelecionado(servico.id)
                    "
                  >
                    <label class="marcacao-servico">
                      <input
                        type="checkbox"
                        [checked]="
                          servicoEstaSelecionado(servico.id)
                        "
                        (change)="
                          alternarServico(
                            servico.id,
                            $any($event.target).checked
                          )
                        "
                      />

                      <span>
                        <strong>{{ servico.nome }}</strong>
                        <small>
                          {{ formatarPreco(servico.preco) }}
                          / {{ servico.tipo_cobranca }}
                        </small>
                      </span>
                    </label>

                    @if (
                      servicoEstaSelecionado(servico.id)
                    ) {
                      <label class="quantidade">
                        <span>Qtd.</span>

                        <input
                          type="number"
                          min="0.01"
                          step="0.01"
                          [value]="
                            obterQuantidade(servico.id)
                          "
                          (input)="
                            alterarQuantidade(
                              servico.id,
                              $any($event.target).valueAsNumber
                            )
                          "
                        />
                      </label>
                    }
                  </article>
                }
              </div>
            }
          </section>

          <div class="resumo-formulario">
            <span>Valor estimado</span>
            <strong>
              {{ formatarPreco(valorEstimado()) }}
            </strong>
          </div>

          @if (erroFormulario()) {
            <p class="erro-formulario">
              {{ erroFormulario() }}
            </p>
          }

          <div class="acoes-formulario">
            <button
              type="button"
              class="secundario"
              [disabled]="salvando()"
              (click)="fecharFormulario()"
            >
              Cancelar
            </button>

            <button
              type="submit"
              class="primario"
              [disabled]="salvando()"
            >
              @if (salvando()) {
                Salvando...
              } @else if (reagendamentoOrigem()) {
                Criar novo hor\xE1rio
              } @else {
                Criar agendamento
              }
            </button>
          </div>
        </form>
      </aside>
    }
  </div>

  @if (
    agendamentoEmFechamento();
    as agendamentoFechamento
  ) {
    <button
      type="button"
      class="fundo-fechamento"
      aria-label="Fechar registro de desfecho"
      [disabled]="fechandoId() !== null"
      (click)="fecharFormularioFechamento()"
    ></button>

    <section
      class="painel-fechamento"
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-fechamento"
    >
      <header class="cabecalho-fechamento">
        <div>
          <p>Fechar hor\xE1rio</p>
          <h2 id="titulo-fechamento">
            Registrar desfecho
          </h2>
        </div>

        <button
          type="button"
          class="botao-fechar"
          aria-label="Fechar"
          [disabled]="fechandoId() !== null"
          (click)="fecharFormularioFechamento()"
        >
          \xD7
        </button>
      </header>

      <div class="resumo-fechamento">
        <div>
          <span>Contato</span>
          <strong>
            {{ agendamentoFechamento.contato.nome }}
          </strong>
        </div>

        <div>
          <span>Hor\xE1rio</span>
          <strong>
            {{
              formatarHorario(
                agendamentoFechamento.inicio
              )
            }}
            \u2013
            {{
              formatarHorario(
                agendamentoFechamento.fim
              )
            }}
          </strong>
        </div>
      </div>

      <form
        [formGroup]="formularioFechamento"
        (ngSubmit)="confirmarFechamento()"
      >
        <input
          type="hidden"
          formControlName="resultado"
        />

        <fieldset class="campo-resultado">
          <legend>O que aconteceu?</legend>

          <div class="opcoes-resultado">
            @for (
              resultado of resultadosAgendamento;
              track resultado.valor
            ) {
              <button
                type="button"
                class="opcao-resultado"
                [class.selecionada]="
                  formularioFechamento.controls.resultado
                    .value === resultado.valor
                "
                [attr.aria-pressed]="
                  formularioFechamento.controls.resultado
                    .value === resultado.valor
                "
                [disabled]="fechandoId() !== null"
                (click)="
                  selecionarResultado(resultado.valor)
                "
              >
                <span class="marcador-resultado"></span>
                {{ resultado.rotulo }}
              </button>
            }
          </div>
        </fieldset>

        @if (
          formularioFechamento.controls.resultado.value ===
          'reagendado'
        ) {
          <p class="aviso-reagendamento">
            Ao confirmar, o novo agendamento abrir\xE1 com contato
            e servi\xE7os j\xE1 preenchidos.
          </p>
        }

        <label class="campo-observacao-fechamento">
          <span>Observa\xE7\xF5es</span>

          <textarea
            rows="4"
            formControlName="observacoes_fechamento"
            placeholder="Opcional. Ex.: sess\xE3o conclu\xEDda sem altera\xE7\xF5es, cliente avisou com anteced\xEAncia..."
          ></textarea>
        </label>

        @if (erroFechamento()) {
          <p class="erro-fechamento" role="alert">
            {{ erroFechamento() }}
          </p>
        }

        <footer class="acoes-formulario-fechamento">
          <button
            type="button"
            class="secundario"
            [disabled]="fechandoId() !== null"
            (click)="fecharFormularioFechamento()"
          >
            Cancelar
          </button>

          <button
            type="submit"
            class="confirmar-fechamento"
            [disabled]="
              formularioFechamento.invalid ||
              fechandoId() !== null
            "
          >
            @if (
              fechandoId() === agendamentoFechamento.id
            ) {
              Salvando...
            } @else {
              Confirmar desfecho
            }
          </button>
        </footer>
      </form>
    </section>
  }
</main>
`, styles: ['/* apps/studio-dash/src/app/paginas/agendamentos/agendamentos.scss */\n:host {\n  --studio-accent: var(--studio-brand);\n  --studio-on-accent: var(--studio-on-brand);\n  --agenda-surface: var(--app-surface);\n  --agenda-soft: var(--app-surface-muted);\n  --agenda-hover: var(--app-surface-hover);\n  --agenda-ink: var(--app-text);\n  --agenda-muted: var(--app-text-muted);\n  --agenda-line: var(--app-border);\n  --agenda-line-strong: var(--app-border-strong);\n  --agenda-success: var(--color-success);\n  --agenda-success-soft: var(--color-success-soft);\n  --agenda-success-line: var(--color-success-border);\n  --agenda-danger: var(--color-danger);\n  --agenda-danger-soft: var(--color-danger-soft);\n  --agenda-danger-line: var(--color-danger-border);\n  display: block;\n  min-height: 100%;\n  color: var(--agenda-ink);\n}\n.pagina-agenda {\n  width: min(100%, 100rem);\n  min-height: 100vh;\n  margin: 0 auto;\n  padding: clamp(1rem, 2vw, 1.75rem);\n}\n.cabecalho-pagina {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 1.15rem;\n}\n.cabecalho-pagina h1 {\n  margin: 0.28rem 0 0;\n  font-size: clamp(2rem, 4vw, 3.15rem);\n  font-weight: 720;\n  line-height: 0.92;\n  letter-spacing: -0.055em;\n}\n.secao,\n.cabecalho-cadastro p,\n.cabecalho-fechamento p {\n  margin: 0;\n  color: var(--agenda-muted);\n  font-size: 0.6rem;\n  font-weight: 760;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n.descricao {\n  margin: 0.6rem 0 0;\n  color: var(--agenda-muted);\n  font-size: 0.78rem;\n}\n.acoes-cabecalho {\n  display: flex;\n  align-items: end;\n  gap: 1rem;\n}\n.central-dia {\n  overflow: hidden;\n  margin-bottom: 1rem;\n  background: var(--agenda-surface);\n  color: var(--agenda-ink);\n  border: 0.0625rem solid var(--agenda-line-strong);\n  border-top: 0.2rem solid var(--studio-accent);\n  border-radius: 0.5rem;\n  box-shadow: var(--shadow-soft);\n}\n.conteudo-central-dia {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n}\n.conteudo-central-dia:has(.proximo-central) {\n  grid-template-columns: minmax(0, 1.65fr) minmax(14rem, 0.8fr);\n}\n.conteudo-central-dia:has(.proximo-central) .destaque-dia {\n  border-right: 0.0625rem solid var(--agenda-line);\n}\n.destaque-dia {\n  min-width: 0;\n  padding: 1.15rem;\n}\n.destaque-dia h3 {\n  margin: 0.3rem 0;\n  color: inherit;\n  font-size: clamp(1.3rem, 3vw, 2rem);\n}\n.destaque-dia > p:last-child {\n  margin-bottom: 0;\n  color: var(--agenda-muted);\n  font-size: 0.68rem;\n}\n.estado-destaque,\n.horario-destaque {\n  margin: 0;\n  color: var(--agenda-muted);\n  font-size: 0.64rem;\n}\n.estado-destaque {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-weight: 720;\n  text-transform: uppercase;\n}\n.estado-destaque span {\n  width: 0.45rem;\n  height: 0.45rem;\n  background: var(--studio-accent);\n  border-radius: 50%;\n  box-shadow: 0 0 0 0.2rem color-mix(in oklab, var(--studio-accent) 18%, transparent);\n}\n.servicos-destaque {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  margin-top: 0.75rem;\n}\n.servicos-destaque span {\n  padding: 0.25rem 0.4rem;\n  background: var(--agenda-soft);\n  border: 0.0625rem solid var(--agenda-line);\n  font-size: 0.58rem;\n}\n.acao-central {\n  margin-top: 0.85rem;\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border: 0.0625rem solid var(--studio-accent);\n}\n.proximo-central {\n  display: grid;\n  align-content: center;\n  gap: 0.25rem;\n  padding: 1.15rem;\n  background: var(--agenda-soft);\n}\n.proximo-central p,\n.proximo-central span {\n  margin: 0;\n  color: var(--agenda-muted);\n  font-size: 0.6rem;\n}\n.proximo-central p {\n  font-weight: 760;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.proximo-central strong {\n  font-size: 0.9rem;\n}\n.estrutura-agenda {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  align-items: start;\n  gap: 1rem;\n}\n.estrutura-agenda.formulario-aberto {\n  grid-template-columns: minmax(0, 1fr) minmax(21rem, 24rem);\n}\n.agenda-painel,\n.cadastro-painel,\n.painel-fechamento {\n  overflow: hidden;\n  background: var(--agenda-surface);\n  border: 0.0625rem solid var(--agenda-line-strong);\n  border-radius: 0.45rem;\n  box-shadow: var(--shadow-soft, 0 1rem 2.5rem rgba(13, 16, 13, 0.07));\n}\n.agenda-painel {\n  overflow: visible;\n}\n.cabecalho-cadastro,\n.cabecalho-fechamento {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem 1.1rem;\n  border-bottom: 0.0625rem solid var(--agenda-line);\n}\n.cabecalho-cadastro h2,\n.cabecalho-fechamento h2 {\n  margin: 0.18rem 0 0;\n  font-size: 0.94rem;\n  font-weight: 720;\n  letter-spacing: -0.015em;\n}\n.aviso-reagendamento-formulario {\n  margin: 0;\n  padding: 0.7rem 1.1rem;\n  background: var(--agenda-soft);\n  color: var(--agenda-muted);\n  border-bottom: 0.0625rem solid var(--agenda-line);\n  font-size: 0.62rem;\n  line-height: 1.5;\n}\n.aviso-reagendamento-formulario strong {\n  color: var(--agenda-ink);\n}\n.secoes-agenda {\n  display: grid;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  background: var(--agenda-soft);\n}\n.secao-temporal {\n  overflow: visible;\n  background: var(--agenda-surface);\n  border: 0.0625rem solid var(--agenda-line);\n  border-radius: 0.38rem;\n  box-shadow: 0 0.2rem 0.55rem rgba(13, 16, 13, 0.04);\n}\n.cabecalho-secao-temporal {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.9rem 1.1rem;\n  background: var(--agenda-surface);\n}\n.cabecalho-secao-temporal > div {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.7rem;\n}\n.cabecalho-secao-temporal > div > span:last-child {\n  display: grid;\n  min-width: 0;\n  gap: 0.12rem;\n}\n.cabecalho-secao-temporal strong {\n  font-size: 0.82rem;\n}\n.cabecalho-secao-temporal small {\n  overflow: hidden;\n  color: var(--agenda-muted);\n  font-size: 0.62rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.indicador-secao {\n  width: 0.55rem;\n  height: 0.55rem;\n  flex: 0 0 auto;\n  background: var(--agenda-line-strong);\n  border-radius: 50%;\n}\n.contador-secao {\n  display: grid;\n  min-width: 1.75rem;\n  min-height: 1.75rem;\n  flex: 0 0 auto;\n  place-items: center;\n  background: var(--agenda-soft);\n  color: var(--agenda-muted);\n  border-radius: 999rem;\n  font-size: 0.62rem;\n  font-weight: 760;\n}\n.secao-agora .cabecalho-secao-temporal {\n  background: var(--agenda-surface);\n}\n.secao-agora .indicador-secao {\n  background: var(--studio-accent);\n  box-shadow: 0 0 0 0.25rem color-mix(in oklab, var(--studio-accent) 16%, transparent);\n}\n.secao-agora .contador-secao {\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n}\n.secao-agora .bloco-agendamento {\n  box-shadow: 0 0.7rem 1.8rem rgba(13, 16, 13, 0.09);\n}\n.secao-proximos .indicador-secao {\n  background: color-mix(in oklab, var(--studio-accent) 65%, var(--agenda-line-strong));\n}\n.secao-pendentes {\n  background: var(--agenda-surface);\n  border-color: color-mix(in oklab, var(--color-warning, #976407) 28%, var(--agenda-line));\n}\n.secao-pendentes .cabecalho-secao-temporal {\n  background: transparent;\n}\n.secao-pendentes .indicador-secao {\n  background: var(--color-warning, #976407);\n}\n.secao-historico .indicador-secao {\n  background: var(--agenda-muted);\n}\n.secao-vazia {\n  margin: 0;\n  padding: 0 1.1rem 1rem 2.35rem;\n  color: var(--agenda-muted);\n  font-size: 0.66rem;\n}\n.resumo-pendencias,\n.resumo-historico {\n  display: flex;\n  width: calc(100% - 2rem);\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 1rem 1rem;\n  padding: 0.75rem 0.9rem;\n  background: var(--agenda-surface);\n  color: var(--agenda-ink);\n  border: 0.0625rem solid var(--agenda-line);\n  border-radius: 0.3rem;\n  text-align: left;\n}\n.resumo-pendencias > span:first-child,\n.resumo-historico > span:first-child {\n  display: grid;\n}\n.resumo-pendencias > span:first-child small,\n.resumo-historico > span:first-child small {\n  color: var(--agenda-muted);\n  font-size: 0.6rem;\n}\n.resumo-pendencias > span:last-child,\n.resumo-historico > span:last-child {\n  color: var(--agenda-muted);\n  font-size: 0.62rem;\n}\n.acoes-pendencias,\n.acoes-historico {\n  display: flex;\n  justify-content: flex-end;\n  padding: 0 1rem 0.65rem;\n}\n.botao-recolher-pendencias,\n.botao-recolher-historico {\n  min-height: 2rem;\n  padding: 0.35rem;\n  background: transparent;\n  color: var(--agenda-muted);\n  border: 0;\n  font-size: 0.6rem;\n}\n.grupos-agenda {\n  display: grid;\n}\n.grupo-dia + .grupo-dia {\n  border-top: 0.0625rem solid var(--agenda-line-strong);\n}\n.cabecalho-dia {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.75rem 1.1rem;\n  background: var(--agenda-soft);\n  border-bottom: 0.0625rem solid var(--agenda-line);\n}\n.cabecalho-dia > div {\n  display: flex;\n  align-items: baseline;\n  gap: 0.55rem;\n}\n.cabecalho-dia strong {\n  font-size: 0.78rem;\n}\n.cabecalho-dia span,\n.cabecalho-dia small {\n  color: var(--agenda-muted);\n  font-size: 0.62rem;\n}\n.lista-agendamentos {\n  display: grid;\n  gap: 0.75rem;\n  padding: 0.9rem 1rem 1rem;\n}\n.agendamento {\n  display: grid;\n  grid-template-columns: 4.3rem minmax(0, 1fr);\n  align-items: stretch;\n  gap: 1rem;\n}\n.eixo-horario {\n  display: grid;\n  min-height: 7.5rem;\n  grid-template-rows: auto minmax(1.5rem, 1fr) auto auto;\n  justify-items: end;\n  gap: 0.25rem;\n  padding: 0.75rem 0;\n  font-variant-numeric: tabular-nums;\n}\n.horario-inicio,\n.horario-fim {\n  color: var(--agenda-ink);\n  font-size: 0.7rem;\n  font-weight: 760;\n}\n.horario-fim {\n  color: var(--agenda-muted);\n  font-weight: 650;\n}\n.trilho-horario {\n  position: relative;\n  width: 0.0625rem;\n  height: 100%;\n  margin-right: 0.3rem;\n  background: var(--agenda-line-strong);\n}\n.trilho-horario::before,\n.trilho-horario::after {\n  position: absolute;\n  left: 50%;\n  width: 0.45rem;\n  height: 0.45rem;\n  box-sizing: border-box;\n  background: var(--agenda-surface);\n  border: 0.1rem solid var(--studio-accent);\n  border-radius: 50%;\n  content: "";\n  transform: translateX(-50%);\n}\n.trilho-horario::before {\n  top: -0.2rem;\n}\n.trilho-horario::after {\n  bottom: -0.2rem;\n  border-color: var(--agenda-line-strong);\n}\n.dia-seguinte,\n.duracao-agendamento {\n  color: var(--agenda-muted);\n  font-size: 0.55rem;\n  line-height: 1.2;\n  white-space: nowrap;\n}\n.metadados-horario {\n  display: grid;\n  justify-items: end;\n  gap: 0.1rem;\n}\n.dia-seguinte {\n  color: var(--studio-accent);\n  font-weight: 740;\n}\n.bloco-agendamento {\n  min-width: 0;\n  padding: 1rem;\n  background: var(--agenda-surface);\n  border: 0.0625rem solid var(--agenda-line);\n  border-left: 0.16rem solid var(--studio-accent);\n  border-radius: 0.38rem;\n  box-shadow: 0 0.2rem 0.6rem rgba(13, 16, 13, 0.05);\n}\n.bloco-agendamento h3 {\n  margin: 0.2rem 0 0.7rem;\n  font-size: 1.05rem;\n  font-weight: 720;\n  letter-spacing: -0.025em;\n}\n.topo-agendamento {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.rotulo-agendamento {\n  margin: 0;\n  color: var(--agenda-muted);\n  font-size: 0.55rem;\n  font-weight: 760;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.valor-agendamento {\n  flex: 0 0 auto;\n  font-size: 0.78rem;\n  font-variant-numeric: tabular-nums;\n}\n.situacao-agendamento {\n  display: grid;\n  justify-items: end;\n  gap: 0.35rem;\n}\n.resultado-agendamento {\n  padding: 0.25rem 0.45rem;\n  background: var(--agenda-soft);\n  color: var(--agenda-muted);\n  border: 0.0625rem solid var(--agenda-line);\n  border-radius: 999rem;\n  font-size: 0.56rem;\n  font-weight: 760;\n}\n.resultado-concluido {\n  color: var(--agenda-success);\n}\n.resultado-cancelado {\n  color: var(--agenda-danger);\n}\n.resultado-reagendado {\n  color: var(--color-warning, #976407);\n}\n.itens {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.item-servico {\n  display: inline-flex;\n  align-items: baseline;\n  gap: 0.35rem;\n  padding: 0.3rem 0.45rem;\n  background: var(--agenda-soft);\n  border: 0.0625rem solid var(--agenda-line);\n  border-radius: 0.22rem;\n}\n.item-servico strong {\n  font-size: 0.65rem;\n  font-weight: 680;\n}\n.item-servico small {\n  color: var(--agenda-muted);\n  font-size: 0.6rem;\n}\n.observacao-fechamento {\n  display: grid;\n  gap: 0.2rem;\n  margin-top: 0.7rem;\n  padding: 0.65rem;\n  background: var(--agenda-soft);\n  border-left: 0.15rem solid var(--agenda-line-strong);\n}\n.observacao-fechamento span {\n  color: var(--agenda-muted);\n  font-size: 0.54rem;\n}\n.observacao-fechamento p {\n  margin: 0;\n  font-size: 0.65rem;\n  line-height: 1.5;\n  white-space: pre-wrap;\n}\n.acoes-agendamento {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.4rem;\n  margin-top: 0.8rem;\n  padding-top: 0.7rem;\n  border-top: 0.0625rem solid color-mix(in oklab, var(--studio-accent) 10%, var(--agenda-line));\n}\nbutton,\n.acerto-gerado,\n.confirmar-whatsapp {\n  min-height: 2.25rem;\n  box-sizing: border-box;\n  padding: 0.45rem 0.7rem;\n  border-radius: 0.25rem;\n  font: inherit;\n  font-size: 0.66rem;\n  font-weight: 700;\n  cursor: pointer;\n}\nbutton:disabled,\n.acerto-gerado:disabled,\n.confirmar-whatsapp:disabled {\n  cursor: wait;\n  opacity: 0.5;\n}\n.confirmar-whatsapp {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  color: var(--agenda-ink);\n  border: 0.0625rem solid var(--agenda-line-strong);\n  text-decoration: none;\n}\n.confirmar-whatsapp-central {\n  justify-self: start;\n  margin-top: 0.4rem;\n}\n.botao-novo,\n.primario {\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border: 0.0625rem solid var(--studio-accent);\n}\n.botao-novo {\n  display: inline-flex;\n  min-height: 2.65rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.45rem;\n  padding-inline: 0.9rem;\n}\n.botao-novo > span {\n  font-size: 1rem;\n  font-weight: 450;\n  line-height: 1;\n}\n.acerto-gerado {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--agenda-success-soft);\n  color: var(--agenda-success);\n  border: 0.0625rem solid var(--agenda-success-line);\n  text-decoration: none;\n}\n.registrar-desfecho,\n.confirmar-fechamento {\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border: 0.0625rem solid var(--studio-accent);\n}\n.secundario,\n.botao-fechar {\n  background: transparent;\n  color: var(--agenda-ink);\n  border: 0.0625rem solid var(--agenda-line-strong);\n}\n.acoes-apoio {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin-left: auto;\n}\n.menu-agendamento {\n  position: relative;\n}\n.menu-agendamento summary {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.45rem 0.65rem;\n  color: var(--agenda-muted);\n  border: 0.0625rem solid var(--agenda-line);\n  border-radius: 0.25rem;\n  font-size: 0.62rem;\n  cursor: pointer;\n  list-style: none;\n}\n.menu-agendamento summary::-webkit-details-marker {\n  display: none;\n}\n.menu-agendamento[open] summary {\n  background: var(--agenda-soft);\n  color: var(--agenda-ink);\n}\n.menu-agendamento-conteudo {\n  position: absolute;\n  z-index: 25;\n  top: calc(100% + 0.25rem);\n  right: 0;\n  display: grid;\n  width: 12.5rem;\n  padding: 0.3rem;\n  background: var(--agenda-surface);\n  border: 0.0625rem solid var(--agenda-line-strong);\n  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.16);\n}\n.menu-agendamento-conteudo button {\n  width: 100%;\n  background: transparent;\n  color: var(--agenda-ink);\n  border: 0;\n  text-align: left;\n}\n.menu-agendamento-conteudo .acao-perigosa {\n  color: var(--agenda-danger);\n}\n.cadastro-painel {\n  position: sticky;\n  top: 1rem;\n  scroll-margin-top: 1rem;\n}\n.cadastro-painel form {\n  padding: 1rem;\n}\n.botao-fechar {\n  display: grid;\n  width: 2.25rem;\n  height: 2.25rem;\n  padding: 0;\n  place-items: center;\n  font-size: 1.1rem;\n  font-weight: 400;\n}\n.campos-principais {\n  display: grid;\n  gap: 0.8rem;\n}\n.campos-data {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.65rem;\n}\nlabel {\n  display: grid;\n  min-width: 0;\n  align-content: start;\n  gap: 0.35rem;\n}\nlabel > span {\n  font-size: 0.66rem;\n  font-weight: 700;\n}\nlabel > small {\n  color: var(--agenda-danger);\n  font-size: 0.61rem;\n}\n.ajuda-campo {\n  margin: 0;\n  color: var(--agenda-muted);\n  font-size: 0.6rem;\n  line-height: 1.4;\n}\ninput,\nselect,\ntextarea {\n  width: 100%;\n  min-width: 0;\n  min-height: 2.5rem;\n  padding: 0.58rem 0.65rem;\n  background: var(--agenda-surface);\n  color: var(--agenda-ink);\n  border: 0.0625rem solid var(--agenda-line-strong);\n  border-radius: 0.25rem;\n  font: inherit;\n  font-size: 0.72rem;\n  outline: none;\n}\ninput:focus,\nselect:focus,\ntextarea:focus {\n  border-color: var(--studio-accent);\n  box-shadow: 0 0 0 0.12rem color-mix(in oklab, var(--studio-accent) 16%, transparent);\n}\ntextarea {\n  resize: vertical;\n}\n.selecao-servicos {\n  margin-top: 1rem;\n  padding-top: 0.9rem;\n  border-top: 0.0625rem solid var(--agenda-line);\n}\n.selecao-servicos > header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.6rem;\n}\n.selecao-servicos > header > span {\n  color: var(--agenda-muted);\n  font-size: 0.58rem;\n}\n.selecao-servicos h3 {\n  margin: 0;\n  font-size: 0.76rem;\n}\n.lista-servicos {\n  display: grid;\n  max-height: 18rem;\n  overflow-y: auto;\n  border: 0.0625rem solid var(--agenda-line);\n  scrollbar-color: var(--agenda-line-strong) transparent;\n  scrollbar-width: thin;\n}\n.servico {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.6rem;\n  padding: 0.6rem;\n  background: var(--agenda-surface);\n  border-bottom: 0.0625rem solid var(--agenda-line);\n}\n.servico:last-child {\n  border-bottom: 0;\n}\n.servico.selecionado {\n  background: color-mix(in oklab, var(--studio-accent) 9%, var(--agenda-surface));\n  box-shadow: inset 0.15rem 0 var(--studio-accent);\n}\n.marcacao-servico {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  gap: 0.55rem;\n  cursor: pointer;\n}\n.marcacao-servico input {\n  width: 0.95rem;\n  min-height: 0.95rem;\n  flex: 0 0 auto;\n  padding: 0;\n  accent-color: var(--studio-accent);\n}\n.marcacao-servico > span {\n  display: grid;\n  min-width: 0;\n  gap: 0.12rem;\n}\n.marcacao-servico strong {\n  overflow: hidden;\n  font-size: 0.67rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.marcacao-servico small {\n  color: var(--agenda-muted);\n  font-size: 0.6rem;\n}\n.quantidade {\n  width: 4.2rem;\n}\n.quantidade input {\n  min-height: 2rem;\n  padding: 0.35rem 0.45rem;\n}\n.estado-servicos {\n  margin: 0;\n  padding: 1rem;\n  color: var(--agenda-muted);\n  border: 0.0625rem solid var(--agenda-line);\n  font-size: 0.6rem;\n  text-align: center;\n}\n.resumo-formulario {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: 0.9rem;\n  padding: 0.75rem 0;\n  border-top: 0.0625rem solid var(--agenda-line);\n  border-bottom: 0.0625rem solid var(--agenda-line);\n}\n.resumo-formulario span {\n  color: var(--agenda-muted);\n  font-size: 0.65rem;\n}\n.resumo-formulario strong {\n  font-size: 1rem;\n  font-variant-numeric: tabular-nums;\n}\n.erro-formulario {\n  margin: 0.7rem 0 0;\n  color: var(--agenda-danger);\n  font-size: 0.68rem;\n}\n.acoes-formulario {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.55rem;\n  margin-top: 0.8rem;\n}\n.acoes-formulario .primario {\n  min-height: 2.65rem;\n}\n.fundo-fechamento {\n  position: fixed;\n  z-index: 80;\n  inset: 0;\n  padding: 0;\n  background: rgba(5, 7, 6, 0.66);\n  border: 0;\n  border-radius: 0;\n}\n.fundo-fechamento:disabled {\n  opacity: 1;\n}\n.painel-fechamento {\n  position: fixed;\n  z-index: 90;\n  top: 50%;\n  left: 50%;\n  width: min(34rem, 100% - 2rem);\n  max-height: calc(100dvh - 2rem);\n  overflow-y: auto;\n  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.28);\n  transform: translate(-50%, -50%);\n}\n.painel-fechamento form {\n  padding: 1rem;\n}\n.resumo-fechamento {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n  padding: 0.85rem 1rem;\n  background: var(--agenda-soft);\n  border-bottom: 0.0625rem solid var(--agenda-line);\n}\n.resumo-fechamento span {\n  display: block;\n  color: var(--agenda-muted);\n  font-size: 0.55rem;\n}\n.resumo-fechamento strong {\n  font-size: 0.7rem;\n}\n.campo-resultado {\n  min-width: 0;\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n.campo-resultado legend {\n  margin-bottom: 0.5rem;\n  font-size: 0.66rem;\n  font-weight: 700;\n}\n.opcoes-resultado {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.45rem;\n}\n.opcao-resultado {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.45rem;\n  background: var(--agenda-surface);\n  color: var(--agenda-ink);\n  border: 0.0625rem solid var(--agenda-line);\n  text-align: left;\n}\n.opcao-resultado.selecionada {\n  background: var(--agenda-soft);\n  border-color: var(--studio-accent);\n}\n.marcador-resultado {\n  display: none;\n}\n.aviso-reagendamento,\n.erro-fechamento {\n  margin: 0.65rem 0 0;\n  padding: 0.6rem;\n  font-size: 0.62rem;\n  line-height: 1.45;\n}\n.aviso-reagendamento {\n  background: var(--color-warning-soft, #fbf3df);\n  color: var(--color-warning, #976407);\n  border: 0.0625rem solid var(--color-warning-border, #d9bf82);\n}\n.erro-fechamento {\n  background: var(--agenda-danger-soft);\n  color: var(--agenda-danger);\n  border: 0.0625rem solid var(--agenda-danger-line);\n}\n.campo-observacao-fechamento {\n  margin-top: 0.75rem;\n}\n.acoes-formulario-fechamento {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  margin-top: 0.85rem;\n  padding-top: 0.75rem;\n  border-top: 0.0625rem solid var(--agenda-line);\n}\n.mensagem-acerto,\n.erro-acerto {\n  margin: 0.8rem 1rem 0;\n  padding: 0.7rem 0.8rem;\n  border-radius: 0.25rem;\n  font-size: 0.68rem;\n}\n.mensagem-acerto {\n  background: var(--agenda-success-soft);\n  color: var(--agenda-success);\n  border: 0.0625rem solid var(--agenda-success-line);\n}\n.erro-acerto {\n  background: var(--agenda-danger-soft);\n  color: var(--agenda-danger);\n  border: 0.0625rem solid var(--agenda-danger-line);\n}\n.estado {\n  display: grid;\n  min-height: 18rem;\n  place-content: center;\n  justify-items: center;\n  padding: 1.5rem;\n  text-align: center;\n}\n.estado p {\n  max-width: 28rem;\n  margin: 0.35rem 0 0;\n  color: var(--agenda-muted);\n  font-size: 0.72rem;\n  line-height: 1.5;\n}\n.estado button {\n  margin-top: 0.8rem;\n}\n.estado-erro strong,\n.estado-erro p {\n  color: var(--agenda-danger);\n}\n.carregador {\n  width: 1rem;\n  height: 1rem;\n  border: 0.12rem solid var(--agenda-line-strong);\n  border-top-color: var(--studio-accent);\n  border-radius: 50%;\n  animation: girar 650ms linear infinite;\n}\n@keyframes girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 74rem) {\n  .estrutura-agenda.formulario-aberto {\n    grid-template-columns: minmax(0, 1fr) 20rem;\n  }\n  .campos-data {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 58rem) {\n  .estrutura-agenda.formulario-aberto {\n    grid-template-columns: 1fr;\n  }\n  .cadastro-painel {\n    position: static;\n    grid-row: 1;\n  }\n  .campos-data {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 38rem) {\n  .pagina-agenda {\n    padding: 0;\n  }\n  .conteudo-central-dia:has(.proximo-central) {\n    grid-template-columns: 1fr;\n  }\n  .conteudo-central-dia:has(.proximo-central) .destaque-dia {\n    border-right: 0;\n  }\n  .proximo-central {\n    border-top: 0.0625rem solid var(--agenda-line);\n  }\n  .cabecalho-pagina {\n    align-items: stretch;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n  }\n  .acoes-cabecalho {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .resumo-agenda {\n    justify-items: start;\n  }\n  .botao-novo {\n    width: 100%;\n  }\n  .agenda-painel,\n  .cadastro-painel {\n    border-right: 0;\n    border-left: 0;\n    border-radius: 0;\n    box-shadow: none;\n  }\n  .estrutura-agenda {\n    gap: 0.75rem;\n  }\n  .cabecalho-dia {\n    align-items: flex-start;\n  }\n  .cabecalho-dia > div {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 0.1rem;\n  }\n  .lista-agendamentos {\n    gap: 0.65rem;\n    padding: 0.75rem;\n  }\n  .agendamento {\n    grid-template-columns: 3.4rem minmax(0, 1fr);\n    gap: 0.65rem;\n  }\n  .eixo-horario {\n    min-height: 8rem;\n  }\n  .bloco-agendamento {\n    padding: 0.8rem;\n  }\n  .topo-agendamento {\n    align-items: start;\n    flex-direction: column;\n    gap: 0.45rem;\n  }\n  .campos-data {\n    grid-template-columns: 1fr;\n  }\n  .servico {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .quantidade {\n    width: 100%;\n  }\n  .acoes-formulario {\n    flex-direction: column-reverse;\n  }\n  .acoes-formulario button {\n    width: 100%;\n  }\n  .resumo-fechamento,\n  .opcoes-resultado {\n    grid-template-columns: 1fr;\n  }\n  .acoes-formulario-fechamento button {\n    flex: 1;\n  }\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Agendamentos, { className: "Agendamentos", filePath: "apps/studio-dash/src/app/paginas/agendamentos/agendamentos.ts", lineNumber: 59 });
})();
export {
  Agendamentos
};
