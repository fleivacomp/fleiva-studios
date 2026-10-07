import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
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
  DadosAcertos,
  DadosAgendamentos,
  DadosContatos,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-IMBOO5ID.js";

// apps/studio-dash/src/app/paginas/acertos/acertos.ts
var _forTrack0 = ($index, $item) => $item.id;
function Acertos_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Fechar cria\xE7\xE3o ");
  }
}
function Acertos_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Novo acerto ");
  }
}
function Acertos_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 6)(1, "span");
    \u0275\u0275text(2, "Cr\xE9dito de clientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatarMoeda(ctx_r0.dadosAcertos.totalEmCredito()), " ");
  }
}
function Acertos_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.mensagemPagina(), " ");
  }
}
function Acertos_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.erroPagina(), " ");
  }
}
function Acertos_Conditional_22_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Usar um agendamento ");
  }
}
function Acertos_Conditional_22_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Criar acerto livre ");
  }
}
function Acertos_Conditional_22_Conditional_16_For_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 j\xE1 inclu\xEDdo ");
  }
}
function Acertos_Conditional_22_Conditional_16_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, Acertos_Conditional_22_Conditional_16_For_10_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const agendamento_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", agendamento_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.resumirAgendamento(agendamento_r4), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.agendamentoJaIncluido(agendamento_r4.id) ? 2 : -1);
  }
}
function Acertos_Conditional_22_Conditional_16_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Selecione o agendamento.");
    \u0275\u0275elementEnd();
  }
}
function Acertos_Conditional_22_Conditional_16_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Gerando... ");
  }
}
function Acertos_Conditional_22_Conditional_16_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Gerar acerto ");
  }
}
function Acertos_Conditional_22_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, " Servi\xE7os, quantidades e pre\xE7os ser\xE3o preenchidos automaticamente. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "form", 23);
    \u0275\u0275listener("ngSubmit", function Acertos_Conditional_22_Conditional_16_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.gerarDoAgendamento());
    });
    \u0275\u0275elementStart(3, "label")(4, "span");
    \u0275\u0275text(5, "Agendamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 24)(7, "option", 25);
    \u0275\u0275text(8, " Selecione um agendamento ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, Acertos_Conditional_22_Conditional_16_For_10_Template, 3, 3, "option", 26, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(11, Acertos_Conditional_22_Conditional_16_Conditional_11_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 27);
    \u0275\u0275conditionalCreate(13, Acertos_Conditional_22_Conditional_16_Conditional_13_Template, 1, 0)(14, Acertos_Conditional_22_Conditional_16_Conditional_14_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r0.formularioAgendamento);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.dadosAgendamentos.agendamentos());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.formularioAgendamento.controls.agendamento_id.touched && ctx_r0.formularioAgendamento.controls.agendamento_id.invalid ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.salvandoAgendamento());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.salvandoAgendamento() ? 13 : 14);
  }
}
function Acertos_Conditional_22_Conditional_17_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const contato_r6 = ctx.$implicit;
    \u0275\u0275property("value", contato_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", contato_r6.nome, " ");
  }
}
function Acertos_Conditional_22_Conditional_17_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Criando... ");
  }
}
function Acertos_Conditional_22_Conditional_17_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Criar acerto ");
  }
}
function Acertos_Conditional_22_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, " Para pacote, produ\xE7\xE3o, desconto ou qualquer conta fora da agenda. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "form", 23);
    \u0275\u0275listener("ngSubmit", function Acertos_Conditional_22_Conditional_17_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.criarManual());
    });
    \u0275\u0275elementStart(3, "div", 28)(4, "label")(5, "span");
    \u0275\u0275text(6, "Contato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 29)(8, "option", 25);
    \u0275\u0275text(9, "Selecione o contato");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(10, Acertos_Conditional_22_Conditional_17_For_11_Template, 2, 2, "option", 26, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label")(13, "span");
    \u0275\u0275text(14, "O que est\xE1 sendo acertado");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 30);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label")(17, "span");
    \u0275\u0275text(18, "Quantidade");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 31);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "label")(21, "span");
    \u0275\u0275text(22, "Valor");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 32);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(24, "small", 33);
    \u0275\u0275text(25, " Use valor negativo para desconto. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "label")(27, "span");
    \u0275\u0275text(28, "Data combinada");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 34);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "label", 35)(31, "span");
    \u0275\u0275text(32, "Observa\xE7\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "textarea", 36);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "button", 27);
    \u0275\u0275conditionalCreate(35, Acertos_Conditional_22_Conditional_17_Conditional_35_Template, 1, 0)(36, Acertos_Conditional_22_Conditional_17_Conditional_36_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r0.formularioManual);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.dadosContatos.contatos());
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.salvandoManual());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.salvandoManual() ? 35 : 36);
  }
}
function Acertos_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 10)(1, "article", 18)(2, "div", 19)(3, "div")(4, "p");
    \u0275\u0275text(5, "Novo acerto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275conditionalCreate(7, Acertos_Conditional_22_Conditional_7_Template, 1, 0)(8, Acertos_Conditional_22_Conditional_8_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 20);
    \u0275\u0275listener("click", function Acertos_Conditional_22_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharCriacao());
    });
    \u0275\u0275text(10, " \xD7 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 21)(12, "button", 14);
    \u0275\u0275listener("click", function Acertos_Conditional_22_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selecionarTipoCriacao("agendamento"));
    });
    \u0275\u0275text(13, " Do agendamento ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 14);
    \u0275\u0275listener("click", function Acertos_Conditional_22_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selecionarTipoCriacao("manual"));
    });
    \u0275\u0275text(15, " Acerto livre ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, Acertos_Conditional_22_Conditional_16_Template, 15, 4)(17, Acertos_Conditional_22_Conditional_17_Template, 37, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tipo_r7 = ctx;
    \u0275\u0275advance(7);
    \u0275\u0275conditional(tipo_r7 === "agendamento" ? 7 : 8);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("ativo", tipo_r7 === "agendamento");
    \u0275\u0275attribute("aria-pressed", tipo_r7 === "agendamento");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ativo", tipo_r7 === "manual");
    \u0275\u0275attribute("aria-pressed", tipo_r7 === "manual");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(tipo_r7 === "agendamento" ? 16 : 17);
  }
}
function Acertos_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " O que precisa de aten\xE7\xE3o ");
  }
}
function Acertos_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Resolvidos ");
  }
}
function Acertos_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Valores a receber e cr\xE9ditos ainda em aberto. ");
  }
}
function Acertos_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Contas que j\xE1 foram totalmente acertadas. ");
  }
}
function Acertos_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "Carregando acertos...");
    \u0275\u0275elementEnd();
  }
}
function Acertos_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 37);
    \u0275\u0275listener("click", function Acertos_Conditional_42_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.carregarDados());
    });
    \u0275\u0275text(4, " Tentar novamente ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.dadosAcertos.erro() || ctx_r0.dadosContatos.erro() || ctx_r0.dadosAgendamentos.erro(), " ");
  }
}
function Acertos_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, " Nenhum acerto criado ainda. ");
    \u0275\u0275elementEnd();
  }
}
function Acertos_Conditional_44_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Nenhum acerto precisa de aten\xE7\xE3o. ");
  }
}
function Acertos_Conditional_44_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Nenhum acerto resolvido ainda. ");
  }
}
function Acertos_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275conditionalCreate(1, Acertos_Conditional_44_Conditional_1_Template, 1, 0)(2, Acertos_Conditional_44_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.filtroAcertos() === "abertos" ? 1 : 2);
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acerto_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(acerto_r10.observacoes);
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 47);
    \u0275\u0275text(1, " Nenhum item adicionado. ");
    \u0275\u0275elementEnd();
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Conditional_17_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Removendo... ");
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Conditional_17_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Remover ");
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Conditional_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 51)(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 52);
    \u0275\u0275listener("click", function Acertos_Conditional_45_For_2_Conditional_25_Conditional_17_For_2_Template_button_click_8_listener() {
      const item_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.excluirItem(item_r13.id));
    });
    \u0275\u0275conditionalCreate(9, Acertos_Conditional_45_For_2_Conditional_25_Conditional_17_For_2_Conditional_9_Template, 1, 0)(10, Acertos_Conditional_45_For_2_Conditional_25_Conditional_17_For_2_Conditional_10_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r13.descricao, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.formatarQuantidade(item_r13.quantidade), " \xD7 ", ctx_r0.formatarMoeda(item_r13.valor_unitario), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatarMoeda(item_r13.quantidade * item_r13.valor_unitario), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.excluindoItemId() === item_r13.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.excluindoItemId() === item_r13.id ? 9 : 10);
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275repeaterCreate(1, Acertos_Conditional_45_For_2_Conditional_25_Conditional_17_For_2_Template, 11, 6, "article", 51, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acerto_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(acerto_r10.itens);
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Conditional_18_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Adicionando... ");
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Conditional_18_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Adicionar ");
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 53);
    \u0275\u0275listener("ngSubmit", function Acertos_Conditional_45_For_2_Conditional_25_Conditional_18_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r14);
      const acerto_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.adicionarItem(acerto_r10.id));
    });
    \u0275\u0275elementStart(1, "div", 54)(2, "label")(3, "span");
    \u0275\u0275text(4, "Descri\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 55);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label")(7, "span");
    \u0275\u0275text(8, "Quantidade");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 31);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label")(11, "span");
    \u0275\u0275text(12, "Valor unit\xE1rio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 32);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 56)(15, "button", 37);
    \u0275\u0275listener("click", function Acertos_Conditional_45_For_2_Conditional_25_Conditional_18_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.fecharFormularios());
    });
    \u0275\u0275text(16, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 27);
    \u0275\u0275conditionalCreate(18, Acertos_Conditional_45_For_2_Conditional_25_Conditional_18_Conditional_18_Template, 1, 0)(19, Acertos_Conditional_45_For_2_Conditional_25_Conditional_18_Conditional_19_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("formGroup", ctx_r0.formularioItem);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.salvandoItem());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.salvandoItem() ? 18 : 19);
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function Acertos_Conditional_45_For_2_Conditional_25_Conditional_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const acerto_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.abrirPagamento(acerto_r10));
    });
    \u0275\u0275text(1, " Registrar pagamento ");
    \u0275\u0275elementEnd();
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 47);
    \u0275\u0275text(1, " Nenhum pagamento registrado. ");
    \u0275\u0275elementEnd();
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Conditional_28_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const pagamento_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", pagamento_r17.forma_pagamento, " ");
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Conditional_28_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Removendo... ");
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Conditional_28_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Remover ");
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Conditional_28_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 51)(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275conditionalCreate(6, Acertos_Conditional_45_For_2_Conditional_25_Conditional_28_For_2_Conditional_6_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "strong", 58);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 52);
    \u0275\u0275listener("click", function Acertos_Conditional_45_For_2_Conditional_25_Conditional_28_For_2_Template_button_click_9_listener() {
      const pagamento_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.excluirPagamento(pagamento_r17.id));
    });
    \u0275\u0275conditionalCreate(10, Acertos_Conditional_45_For_2_Conditional_25_Conditional_28_For_2_Conditional_10_Template, 1, 0)(11, Acertos_Conditional_45_For_2_Conditional_25_Conditional_28_For_2_Conditional_11_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pagamento_r17 = ctx.$implicit;
    const acerto_r10 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", pagamento_r17.pagador?.nome ?? acerto_r10.contato.nome, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatarData(pagamento_r17.pago_em), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(pagamento_r17.forma_pagamento ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatarMoeda(pagamento_r17.valor), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.excluindoPagamentoId() === pagamento_r17.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.excluindoPagamentoId() === pagamento_r17.id ? 10 : 11);
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275repeaterCreate(1, Acertos_Conditional_45_For_2_Conditional_25_Conditional_28_For_2_Template, 12, 6, "article", 51, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acerto_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(acerto_r10.pagamentos);
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Conditional_29_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const contato_r19 = ctx.$implicit;
    \u0275\u0275property("value", contato_r19.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", contato_r19.nome, " ");
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Conditional_29_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Registrando... ");
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Conditional_29_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Confirmar pagamento ");
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 53);
    \u0275\u0275listener("ngSubmit", function Acertos_Conditional_45_For_2_Conditional_25_Conditional_29_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r18);
      const acerto_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.registrarPagamento(acerto_r10.id));
    });
    \u0275\u0275elementStart(1, "div", 54)(2, "label")(3, "span");
    \u0275\u0275text(4, "Valor recebido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 59);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label")(7, "span");
    \u0275\u0275text(8, "Quem pagou");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 60)(10, "option", 25);
    \u0275\u0275text(11, " Mesmo contato do acerto ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(12, Acertos_Conditional_45_For_2_Conditional_25_Conditional_29_For_13_Template, 2, 2, "option", 26, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "label")(15, "span");
    \u0275\u0275text(16, "Como pagou");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 61);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label")(19, "span");
    \u0275\u0275text(20, "Quando pagou");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 62);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label", 35)(23, "span");
    \u0275\u0275text(24, "Observa\xE7\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "textarea", 63);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 56)(27, "button", 37);
    \u0275\u0275listener("click", function Acertos_Conditional_45_For_2_Conditional_25_Conditional_29_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.fecharFormularios());
    });
    \u0275\u0275text(28, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 64);
    \u0275\u0275conditionalCreate(30, Acertos_Conditional_45_For_2_Conditional_25_Conditional_29_Conditional_30_Template, 1, 0)(31, Acertos_Conditional_45_For_2_Conditional_25_Conditional_29_Conditional_31_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("formGroup", ctx_r0.formularioPagamento);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.dadosContatos.contatos());
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.salvandoPagamento());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.salvandoPagamento() ? 30 : 31);
  }
}
function Acertos_Conditional_45_For_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "span");
    \u0275\u0275text(3, " Data combinada: ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, Acertos_Conditional_45_For_2_Conditional_25_Conditional_6_Template, 2, 1, "p");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "section", 45)(8, "div", 46)(9, "div")(10, "h3");
    \u0275\u0275text(11, "O que entrou na conta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13, " Servi\xE7os, pacotes, extras e descontos. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 37);
    \u0275\u0275listener("click", function Acertos_Conditional_45_For_2_Conditional_25_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r11);
      const acerto_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.abrirNovoItem(acerto_r10.id));
    });
    \u0275\u0275text(15, " Adicionar item ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, Acertos_Conditional_45_For_2_Conditional_25_Conditional_16_Template, 2, 0, "p", 47)(17, Acertos_Conditional_45_For_2_Conditional_25_Conditional_17_Template, 3, 0, "div", 48);
    \u0275\u0275conditionalCreate(18, Acertos_Conditional_45_For_2_Conditional_25_Conditional_18_Template, 20, 3, "form", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "section", 45)(20, "div", 46)(21, "div")(22, "h3");
    \u0275\u0275text(23, "Pagamentos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p");
    \u0275\u0275text(25, " Pode registrar sinal, parte ou valor completo. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(26, Acertos_Conditional_45_For_2_Conditional_25_Conditional_26_Template, 2, 0, "button", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, Acertos_Conditional_45_For_2_Conditional_25_Conditional_27_Template, 2, 0, "p", 47)(28, Acertos_Conditional_45_For_2_Conditional_25_Conditional_28_Template, 3, 0, "div", 48);
    \u0275\u0275conditionalCreate(29, Acertos_Conditional_45_For_2_Conditional_25_Conditional_29_Template, 32, 3, "form", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const acerto_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatarDataOpcional(acerto_r10.vencimento_em), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(acerto_r10.observacoes ? 6 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(acerto_r10.itens.length === 0 ? 16 : 17);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.acertoItemId() === acerto_r10.id ? 18 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(acerto_r10.saldo > 0 ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(acerto_r10.pagamentos.length === 0 ? 27 : 28);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.acertoPagamentoId() === acerto_r10.id ? 29 : -1);
  }
}
function Acertos_Conditional_45_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 38)(1, "button", 39);
    \u0275\u0275listener("click", function Acertos_Conditional_45_For_2_Template_button_click_1_listener() {
      const acerto_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.alternarDetalhes(acerto_r10.id));
    });
    \u0275\u0275elementStart(2, "div", 40)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 41)(8, "div")(9, "span");
    \u0275\u0275text(10, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "span");
    \u0275\u0275text(15, "Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div")(19, "span");
    \u0275\u0275text(20, "Falta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "span", 42);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(25, Acertos_Conditional_45_For_2_Conditional_25_Template, 30, 7, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acerto_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", "acerto-" + acerto_r10.id);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r0.acertoAbertoId() === acerto_r10.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", acerto_r10.contato.nome, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Criado em ", ctx_r0.formatarData(acerto_r10.criado_em), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatarMoeda(acerto_r10.valor_total), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatarMoeda(acerto_r10.valor_pago), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatarMoeda(ctx_r0.valorFaltante(acerto_r10)), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("situacao-ok", acerto_r10.saldo === 0)("situacao-parcial", acerto_r10.saldo > 0 && acerto_r10.valor_pago > 0)("situacao-credito", acerto_r10.saldo < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.rotuloSituacao(acerto_r10), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.acertoAbertoId() === acerto_r10.id ? 25 : -1);
  }
}
function Acertos_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, Acertos_Conditional_45_For_2_Template, 26, 15, "article", 38, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.acertosVisiveis());
  }
}
var Acertos = class _Acertos {
  rota = inject(ActivatedRoute);
  dadosAcertos = inject(DadosAcertos);
  dadosContatos = inject(DadosContatos);
  dadosAgendamentos = inject(DadosAgendamentos);
  construtorFormulario = inject(FormBuilder);
  salvandoAgendamento = signal(
    false,
    ...ngDevMode ? [{ debugName: "salvandoAgendamento" }] : (
      /* istanbul ignore next */
      []
    )
  );
  salvandoManual = signal(
    false,
    ...ngDevMode ? [{ debugName: "salvandoManual" }] : (
      /* istanbul ignore next */
      []
    )
  );
  salvandoItem = signal(
    false,
    ...ngDevMode ? [{ debugName: "salvandoItem" }] : (
      /* istanbul ignore next */
      []
    )
  );
  salvandoPagamento = signal(
    false,
    ...ngDevMode ? [{ debugName: "salvandoPagamento" }] : (
      /* istanbul ignore next */
      []
    )
  );
  excluindoItemId = signal(
    null,
    ...ngDevMode ? [{ debugName: "excluindoItemId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  excluindoPagamentoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "excluindoPagamentoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  acertoAbertoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "acertoAbertoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  acertoItemId = signal(
    null,
    ...ngDevMode ? [{ debugName: "acertoItemId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  acertoPagamentoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "acertoPagamentoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filtroAcertos = signal(
    "abertos",
    ...ngDevMode ? [{ debugName: "filtroAcertos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tipoCriacao = signal(
    null,
    ...ngDevMode ? [{ debugName: "tipoCriacao" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroPagina = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroPagina" }] : (
      /* istanbul ignore next */
      []
    )
  );
  mensagemPagina = signal(
    null,
    ...ngDevMode ? [{ debugName: "mensagemPagina" }] : (
      /* istanbul ignore next */
      []
    )
  );
  acertosEmAberto = computed(
    () => [...this.dadosAcertos.acertos()].filter((acerto) => acerto.saldo !== 0).sort((primeiro, segundo) => segundo.saldo - primeiro.saldo),
    ...ngDevMode ? [{ debugName: "acertosEmAberto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  acertosResolvidos = computed(
    () => [...this.dadosAcertos.acertos()].filter((acerto) => acerto.saldo === 0).sort((primeiro, segundo) => Date.parse(segundo.criado_em) - Date.parse(primeiro.criado_em)),
    ...ngDevMode ? [{ debugName: "acertosResolvidos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  acertosVisiveis = computed(
    () => this.filtroAcertos() === "abertos" ? this.acertosEmAberto() : this.acertosResolvidos(),
    ...ngDevMode ? [{ debugName: "acertosVisiveis" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formularioAgendamento = this.construtorFormulario.group({
    agendamento_id: this.construtorFormulario.nonNullable.control("", [Validators.required])
  });
  formularioManual = this.construtorFormulario.group({
    contato_id: this.construtorFormulario.nonNullable.control("", [Validators.required]),
    descricao: this.construtorFormulario.nonNullable.control("", [Validators.required]),
    quantidade: this.construtorFormulario.nonNullable.control(1, [Validators.required, Validators.min(0.01)]),
    valor_unitario: this.construtorFormulario.nonNullable.control(0, [Validators.required]),
    vencimento_em: this.construtorFormulario.nonNullable.control(""),
    observacoes: this.construtorFormulario.control(null)
  });
  formularioItem = this.construtorFormulario.group({
    descricao: this.construtorFormulario.nonNullable.control("", [Validators.required]),
    quantidade: this.construtorFormulario.nonNullable.control(1, [Validators.required, Validators.min(0.01)]),
    valor_unitario: this.construtorFormulario.nonNullable.control(0, [Validators.required])
  });
  formularioPagamento = this.construtorFormulario.group({
    pagador_contato_id: this.construtorFormulario.nonNullable.control(""),
    valor: this.construtorFormulario.nonNullable.control(0, [Validators.required, Validators.min(0.01)]),
    forma_pagamento: this.construtorFormulario.nonNullable.control(""),
    pago_em: this.construtorFormulario.nonNullable.control(this.dataHoraLocalAtual(), [Validators.required]),
    observacoes: this.construtorFormulario.control(null)
  });
  ngOnInit() {
    void this.inicializar();
  }
  async inicializar() {
    await this.carregarDados();
    const acertoId = this.rota.snapshot.queryParamMap.get("abrir");
    const acerto = acertoId ? this.dadosAcertos.acertos().find((item) => item.id === acertoId) : void 0;
    if (!acerto) {
      return;
    }
    this.filtroAcertos.set(acerto.saldo === 0 ? "resolvidos" : "abertos");
    this.acertoAbertoId.set(acertoId);
    window.setTimeout(() => {
      document.getElementById(`acerto-${acertoId}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });
  }
  async carregarDados() {
    this.erroPagina.set(null);
    await Promise.all([
      this.dadosAcertos.listar(),
      this.dadosContatos.listar(),
      this.dadosAgendamentos.listar()
    ]);
  }
  carregandoPagina() {
    return this.dadosAcertos.carregando() || this.dadosContatos.carregando() || this.dadosAgendamentos.carregando();
  }
  alternarCriacao() {
    this.tipoCriacao.update((tipo) => tipo === null ? "agendamento" : null);
  }
  selecionarTipoCriacao(tipo) {
    this.tipoCriacao.set(tipo);
    this.limparRetorno();
  }
  fecharCriacao() {
    if (this.salvandoAgendamento() || this.salvandoManual()) {
      return;
    }
    this.tipoCriacao.set(null);
  }
  selecionarFiltro(filtro) {
    this.filtroAcertos.set(filtro);
    this.acertoAbertoId.set(null);
    this.fecharFormularios();
  }
  async gerarDoAgendamento() {
    if (this.formularioAgendamento.invalid) {
      this.formularioAgendamento.markAllAsTouched();
      return;
    }
    const agendamentoId = this.formularioAgendamento.controls.agendamento_id.value;
    if (this.agendamentoJaIncluido(agendamentoId)) {
      const confirmou = window.confirm("Este agendamento j\xE1 aparece em outro acerto. Deseja gerar mais um?");
      if (!confirmou) {
        return;
      }
    }
    this.salvandoAgendamento.set(true);
    this.limparRetorno();
    try {
      await this.dadosAcertos.criarDoAgendamento(agendamentoId);
      this.formularioAgendamento.reset({
        agendamento_id: ""
      });
      this.tipoCriacao.set(null);
      this.filtroAcertos.set("abertos");
      this.mensagemPagina.set("Acerto gerado a partir do agendamento.");
    } catch (erro) {
      this.erroPagina.set(this.obterMensagemErro(erro));
    } finally {
      this.salvandoAgendamento.set(false);
    }
  }
  async criarManual() {
    if (this.formularioManual.invalid) {
      this.formularioManual.markAllAsTouched();
      return;
    }
    this.salvandoManual.set(true);
    this.limparRetorno();
    let acertoCriadoId = null;
    try {
      const valor = this.formularioManual.getRawValue();
      const acerto = await this.dadosAcertos.criarManual({
        contato_id: valor.contato_id,
        vencimento_em: valor.vencimento_em || null,
        observacoes: this.normalizarTextoOpcional(valor.observacoes)
      });
      acertoCriadoId = acerto.id;
      await this.dadosAcertos.adicionarItem(acerto.id, {
        agendamento_id: null,
        descricao: valor.descricao,
        quantidade: Number(valor.quantidade),
        valor_unitario: Number(valor.valor_unitario)
      });
      this.formularioManual.reset({
        contato_id: "",
        descricao: "",
        quantidade: 1,
        valor_unitario: 0,
        vencimento_em: "",
        observacoes: null
      });
      this.acertoAbertoId.set(acerto.id);
      this.tipoCriacao.set(null);
      this.filtroAcertos.set("abertos");
      this.mensagemPagina.set("Acerto criado.");
    } catch (erro) {
      if (acertoCriadoId) {
        this.erroPagina.set("O acerto foi criado, mas o item n\xE3o foi adicionado. Abra o acerto e adicione o item novamente.");
      } else {
        this.erroPagina.set(this.obterMensagemErro(erro));
      }
    } finally {
      this.salvandoManual.set(false);
    }
  }
  alternarDetalhes(acertoId) {
    if (this.acertoAbertoId() === acertoId) {
      this.acertoAbertoId.set(null);
      this.fecharFormularios();
      return;
    }
    this.acertoAbertoId.set(acertoId);
    this.fecharFormularios();
  }
  abrirNovoItem(acertoId) {
    this.acertoItemId.set(acertoId);
    this.acertoPagamentoId.set(null);
    this.formularioItem.reset({
      descricao: "",
      quantidade: 1,
      valor_unitario: 0
    });
  }
  abrirPagamento(acerto) {
    this.acertoPagamentoId.set(acerto.id);
    this.acertoItemId.set(null);
    this.formularioPagamento.reset({
      pagador_contato_id: "",
      valor: Math.max(acerto.saldo, 0),
      forma_pagamento: "",
      pago_em: this.dataHoraLocalAtual(),
      observacoes: null
    });
  }
  fecharFormularios() {
    this.acertoItemId.set(null);
    this.acertoPagamentoId.set(null);
  }
  async adicionarItem(acertoId) {
    if (this.formularioItem.invalid) {
      this.formularioItem.markAllAsTouched();
      return;
    }
    this.salvandoItem.set(true);
    this.limparRetorno();
    try {
      const valor = this.formularioItem.getRawValue();
      await this.dadosAcertos.adicionarItem(acertoId, {
        agendamento_id: null,
        descricao: valor.descricao,
        quantidade: Number(valor.quantidade),
        valor_unitario: Number(valor.valor_unitario)
      });
      this.acertoItemId.set(null);
      this.mensagemPagina.set("Item adicionado.");
    } catch (erro) {
      this.erroPagina.set(this.obterMensagemErro(erro));
    } finally {
      this.salvandoItem.set(false);
    }
  }
  async registrarPagamento(acertoId) {
    if (this.formularioPagamento.invalid) {
      this.formularioPagamento.markAllAsTouched();
      return;
    }
    this.salvandoPagamento.set(true);
    this.limparRetorno();
    try {
      const valor = this.formularioPagamento.getRawValue();
      await this.dadosAcertos.registrarPagamento(acertoId, {
        pagador_contato_id: valor.pagador_contato_id || null,
        valor: Number(valor.valor),
        forma_pagamento: this.normalizarTextoOpcional(valor.forma_pagamento),
        pago_em: new Date(valor.pago_em).toISOString(),
        observacoes: this.normalizarTextoOpcional(valor.observacoes)
      });
      this.acertoPagamentoId.set(null);
      const acertoAtualizado = this.dadosAcertos.acertos().find((acerto) => acerto.id === acertoId);
      if (acertoAtualizado?.saldo === 0) {
        this.filtroAcertos.set("resolvidos");
        this.acertoAbertoId.set(acertoId);
      }
      this.mensagemPagina.set("Pagamento registrado.");
    } catch (erro) {
      this.erroPagina.set(this.obterMensagemErro(erro));
    } finally {
      this.salvandoPagamento.set(false);
    }
  }
  async excluirItem(itemId) {
    const confirmou = window.confirm("Remover este item do acerto?");
    if (!confirmou) {
      return;
    }
    this.excluindoItemId.set(itemId);
    this.limparRetorno();
    try {
      await this.dadosAcertos.excluirItem(itemId);
      this.mensagemPagina.set("Item removido.");
    } catch (erro) {
      this.erroPagina.set(this.obterMensagemErro(erro));
    } finally {
      this.excluindoItemId.set(null);
    }
  }
  async excluirPagamento(pagamentoId) {
    const confirmou = window.confirm("Remover este pagamento?");
    if (!confirmou) {
      return;
    }
    this.excluindoPagamentoId.set(pagamentoId);
    this.limparRetorno();
    try {
      await this.dadosAcertos.excluirPagamento(pagamentoId);
      this.mensagemPagina.set("Pagamento removido.");
    } catch (erro) {
      this.erroPagina.set(this.obterMensagemErro(erro));
    } finally {
      this.excluindoPagamentoId.set(null);
    }
  }
  agendamentoJaIncluido(agendamentoId) {
    return this.dadosAcertos.acertos().some((acerto) => acerto.itens.some((item) => item.agendamento_id === agendamentoId));
  }
  resumirAgendamento(agendamento) {
    const servicos = agendamento.agendamento_servicos.map((item) => `${item.servico.nome} ${this.formatarQuantidade(item.quantidade)}`).join(" + ");
    return `${this.formatarData(agendamento.inicio)} \u2014 ${agendamento.contato.nome} \u2014 ${servicos}`;
  }
  valorFaltante(acerto) {
    return Math.max(acerto.saldo, 0);
  }
  rotuloSituacao(acerto) {
    if (acerto.valor_total === 0 && acerto.valor_pago === 0) {
      return "Sem valor";
    }
    if (acerto.saldo < 0) {
      return "Com cr\xE9dito";
    }
    if (acerto.saldo === 0) {
      return "Acertado";
    }
    if (acerto.valor_pago > 0) {
      return "Pago em parte";
    }
    return "Falta receber";
  }
  formatarMoeda(valor) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(valor);
  }
  formatarData(data) {
    return new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "short",
      timeStyle: "short"
    }).format(new Date(data));
  }
  formatarDataOpcional(data) {
    if (!data) {
      return "Sem data combinada";
    }
    return new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "short"
    }).format(/* @__PURE__ */ new Date(`${data}T12:00:00`));
  }
  formatarQuantidade(quantidade) {
    return new Intl.NumberFormat("pt-BR", {
      maximumFractionDigits: 2
    }).format(quantidade);
  }
  dataHoraLocalAtual() {
    const agora = /* @__PURE__ */ new Date();
    const local = new Date(agora.getTime() - agora.getTimezoneOffset() * 6e4);
    return local.toISOString().slice(0, 16);
  }
  limparRetorno() {
    this.erroPagina.set(null);
    this.mensagemPagina.set(null);
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
  static \u0275fac = function Acertos_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Acertos)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Acertos, selectors: [["app-acertos"]], decls: 46, vars: 20, consts: [[1, "pagina"], [1, "cabecalho"], [1, "secao"], ["type", "button", "aria-controls", "criacao-acerto", 1, "botao-novo-acerto", 3, "click"], [1, "resumos"], [1, "resumo", "resumo-receber"], [1, "resumo", "resumo-credito"], [1, "retornos-pagina"], [1, "mensagem-sucesso"], [1, "mensagem-erro"], ["id", "criacao-acerto", 1, "grade-criacao"], [1, "painel", "lista-painel"], [1, "titulo-painel", "titulo-lista-acertos"], [1, "filtros-acertos"], ["type", "button", 3, "click"], [1, "estado"], [1, "estado", "estado-erro"], [1, "lista-acertos"], [1, "painel", "painel-criacao"], [1, "cabecalho-criacao"], ["type", "button", "aria-label", "Fechar cria\xE7\xE3o", 1, "botao-fechar-criacao", 3, "click"], ["aria-label", "Tipo de acerto", 1, "tipos-criacao"], [1, "ajuda-criacao"], [3, "ngSubmit", "formGroup"], ["formControlName", "agendamento_id"], ["value", ""], [3, "value"], ["type", "submit", 1, "botao-principal", 3, "disabled"], [1, "campos"], ["formControlName", "contato_id"], ["type", "text", "formControlName", "descricao", "placeholder", "Ex.: Produ\xE7\xF5es de agosto"], ["type", "number", "formControlName", "quantidade", "min", "0.01", "step", "0.01"], ["type", "number", "formControlName", "valor_unitario", "step", "0.01"], [1, "ajuda"], ["type", "date", "formControlName", "vencimento_em"], [1, "campo-largo"], ["formControlName", "observacoes", "rows", "3", "placeholder", "Opcional"], ["type", "button", 1, "botao-secundario", 3, "click"], [1, "acerto", 3, "id"], ["type", "button", 1, "cabecalho-acerto", 3, "click"], [1, "identificacao-acerto"], [1, "valores-acerto"], [1, "situacao"], [1, "detalhes-acerto"], [1, "informacoes-acerto"], [1, "bloco-detalhes"], [1, "cabecalho-bloco"], [1, "sem-registros"], [1, "lista-detalhes"], [1, "formulario-interno", 3, "formGroup"], ["type", "button", 1, "botao-receber"], [1, "linha-detalhe"], ["type", "button", 1, "botao-remover", 3, "click", "disabled"], [1, "formulario-interno", 3, "ngSubmit", "formGroup"], [1, "campos", "campos-internos"], ["type", "text", "formControlName", "descricao", "placeholder", "Ex.: Desconto do pacote"], [1, "acoes-formulario"], ["type", "button", 1, "botao-receber", 3, "click"], [1, "valor-recebido"], ["type", "number", "formControlName", "valor", "min", "0.01", "step", "0.01"], ["formControlName", "pagador_contato_id"], ["type", "text", "formControlName", "forma_pagamento", "placeholder", "Pix, dinheiro, cart\xE3o..."], ["type", "datetime-local", "formControlName", "pago_em"], ["formControlName", "observacoes", "rows", "2", "placeholder", "Opcional"], ["type", "submit", 1, "botao-receber", 3, "disabled"]], template: function Acertos_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "header", 1)(2, "div")(3, "p", 2);
      \u0275\u0275text(4, "DINHEIRO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "Acertos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, " Veja o que entrou, o que falta e fa\xE7a as contas do seu jeito. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 3);
      \u0275\u0275listener("click", function Acertos_Template_button_click_9_listener() {
        return ctx.alternarCriacao();
      });
      \u0275\u0275conditionalCreate(10, Acertos_Conditional_10_Template, 1, 0)(11, Acertos_Conditional_11_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 4)(13, "article", 5)(14, "span");
      \u0275\u0275text(15, "A receber");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "strong");
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(18, Acertos_Conditional_18_Template, 5, 1, "article", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 7);
      \u0275\u0275conditionalCreate(20, Acertos_Conditional_20_Template, 2, 1, "p", 8);
      \u0275\u0275conditionalCreate(21, Acertos_Conditional_21_Template, 2, 1, "p", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(22, Acertos_Conditional_22_Template, 18, 8, "aside", 10);
      \u0275\u0275elementStart(23, "section", 11)(24, "div", 12)(25, "div")(26, "h2");
      \u0275\u0275conditionalCreate(27, Acertos_Conditional_27_Template, 1, 0)(28, Acertos_Conditional_28_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p");
      \u0275\u0275conditionalCreate(30, Acertos_Conditional_30_Template, 1, 0)(31, Acertos_Conditional_31_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 13)(33, "button", 14);
      \u0275\u0275listener("click", function Acertos_Template_button_click_33_listener() {
        return ctx.selecionarFiltro("abertos");
      });
      \u0275\u0275text(34, " Em aberto ");
      \u0275\u0275elementStart(35, "span");
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "button", 14);
      \u0275\u0275listener("click", function Acertos_Template_button_click_37_listener() {
        return ctx.selecionarFiltro("resolvidos");
      });
      \u0275\u0275text(38, " Resolvidos ");
      \u0275\u0275elementStart(39, "span");
      \u0275\u0275text(40);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(41, Acertos_Conditional_41_Template, 2, 0, "p", 15)(42, Acertos_Conditional_42_Template, 5, 1, "div", 16)(43, Acertos_Conditional_43_Template, 2, 0, "p", 15)(44, Acertos_Conditional_44_Template, 3, 1, "p", 15)(45, Acertos_Conditional_45_Template, 3, 0, "div", 17);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_7_0;
      \u0275\u0275classProp("criacao-aberta", ctx.tipoCriacao() !== null);
      \u0275\u0275advance(9);
      \u0275\u0275attribute("aria-expanded", ctx.tipoCriacao() !== null);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tipoCriacao() ? 10 : 11);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.formatarMoeda(ctx.dadosAcertos.totalAReceber()), " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dadosAcertos.totalEmCredito() > 0 ? 18 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.mensagemPagina() ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.erroPagina() ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_7_0 = ctx.tipoCriacao()) ? 22 : -1, tmp_7_0);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.filtroAcertos() === "abertos" ? 27 : 28);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.filtroAcertos() === "abertos" ? 30 : 31);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("ativo", ctx.filtroAcertos() === "abertos");
      \u0275\u0275attribute("aria-pressed", ctx.filtroAcertos() === "abertos");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.acertosEmAberto().length);
      \u0275\u0275advance();
      \u0275\u0275classProp("ativo", ctx.filtroAcertos() === "resolvidos");
      \u0275\u0275attribute("aria-pressed", ctx.filtroAcertos() === "resolvidos");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.acertosResolvidos().length);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.carregandoPagina() ? 41 : ctx.dadosAcertos.erro() || ctx.dadosContatos.erro() || ctx.dadosAgendamentos.erro() ? 42 : ctx.dadosAcertos.acertos().length === 0 ? 43 : ctx.acertosVisiveis().length === 0 ? 44 : 45);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  color: var(--app-text);\n}\n.pagina[_ngcontent-%COMP%] {\n  display: grid;\n  width: min(100%, 100rem);\n  min-height: 100vh;\n  grid-template-columns: minmax(0, 1fr);\n  grid-template-areas: "cabecalho" "resumos" "retornos" "lista";\n  align-items: start;\n  gap: 1rem;\n  box-sizing: border-box;\n  margin: 0 auto;\n  padding: clamp(1rem, 2vw, 1.75rem);\n}\n.pagina.criacao-aberta[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) minmax(20rem, 24rem);\n  grid-template-areas: "cabecalho cabecalho" "resumos resumos" "retornos retornos" "lista criacao";\n}\n.cabecalho[_ngcontent-%COMP%] {\n  display: flex;\n  grid-area: cabecalho;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.cabecalho[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.28rem 0 0;\n  font-size: clamp(2rem, 4vw, 3.15rem);\n  font-weight: 720;\n  line-height: 0.92;\n  letter-spacing: -0.055em;\n}\n.cabecalho[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-child {\n  max-width: 44rem;\n  margin: 0.6rem 0 0;\n  color: var(--app-text-muted);\n  font-size: 0.78rem;\n}\n.cabecalho[_ngcontent-%COMP%]   .secao[_ngcontent-%COMP%], \n.titulo-painel[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.6rem;\n  font-weight: 760;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n.resumos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-area: resumos;\n  grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));\n  gap: 0.75rem;\n}\n.resumo[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-height: 6.4rem;\n  align-content: space-between;\n  gap: 0.75rem;\n  overflow: hidden;\n  padding: 0.9rem 1rem;\n  background: var(--app-surface);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-medium);\n  box-shadow: var(--shadow-small);\n}\n.resumo[_ngcontent-%COMP%]::before {\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 0.16rem;\n  content: "";\n}\n.resumo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.6rem;\n  font-weight: 720;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.resumo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: clamp(1.25rem, 3vw, 1.7rem);\n  font-weight: 720;\n  letter-spacing: -0.035em;\n  font-variant-numeric: tabular-nums;\n}\n.resumo-receber[_ngcontent-%COMP%]::before {\n  background: var(--color-danger);\n}\n.resumo-credito[_ngcontent-%COMP%]::before {\n  background: var(--color-warning);\n}\n.retornos-pagina[_ngcontent-%COMP%] {\n  display: grid;\n  grid-area: retornos;\n  gap: 0.5rem;\n}\n.retornos-pagina[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.mensagem-sucesso[_ngcontent-%COMP%], \n.mensagem-erro[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.7rem 0.8rem;\n  border-radius: var(--radius-small);\n  font-size: 0.68rem;\n}\n.mensagem-sucesso[_ngcontent-%COMP%] {\n  background: var(--color-success-soft);\n  color: var(--color-success);\n  border: 0.0625rem solid var(--color-success-border);\n}\n.mensagem-erro[_ngcontent-%COMP%] {\n  background: var(--color-danger-soft);\n  color: var(--color-danger);\n  border: 0.0625rem solid var(--color-danger-border);\n}\n.painel[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 1rem;\n  background: var(--app-surface);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-medium);\n  box-shadow: var(--shadow-medium);\n}\n.botao-novo-acerto[_ngcontent-%COMP%] {\n  min-height: 2.65rem;\n  padding-inline: 0.9rem;\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0.0625rem solid var(--studio-brand);\n}\n.grade-criacao[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 1rem;\n  display: grid;\n  grid-area: criacao;\n  grid-template-columns: 1fr;\n  gap: 0.75rem;\n}\n.painel-criacao[_ngcontent-%COMP%] {\n  padding: 0;\n  box-shadow: var(--shadow-small);\n}\n.cabecalho-criacao[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.9rem 1rem;\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.cabecalho-criacao[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.cabecalho-criacao[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.cabecalho-criacao[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.56rem;\n  font-weight: 760;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.cabecalho-criacao[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0.15rem;\n  font-size: 0.9rem;\n}\n.botao-fechar-criacao[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.2rem;\n  height: 2.2rem;\n  padding: 0;\n  place-items: center;\n  background: transparent;\n  color: var(--app-text-muted);\n  border: 0.0625rem solid var(--app-border);\n  font-size: 1rem;\n}\n.tipos-criacao[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.3rem;\n  padding: 0.65rem 1rem 0;\n}\n.tipos-criacao[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.filtros-acertos[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--app-text-muted);\n  border: 0.0625rem solid var(--app-border);\n}\n.tipos-criacao[_ngcontent-%COMP%]   button.ativo[_ngcontent-%COMP%], \n.filtros-acertos[_ngcontent-%COMP%]   button.ativo[_ngcontent-%COMP%] {\n  background: var(--app-surface-muted);\n  color: var(--app-text);\n  border-color: var(--studio-brand-border);\n  box-shadow: inset 0 -0.12rem var(--studio-brand);\n}\n.ajuda-criacao[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.65rem 1rem 0;\n  color: var(--app-text-muted);\n  font-size: 0.62rem;\n  line-height: 1.45;\n}\n.painel-criacao[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%] {\n  padding: 0.8rem 1rem 1rem;\n}\n.lista-painel[_ngcontent-%COMP%] {\n  grid-area: lista;\n  padding: 0;\n  overflow: hidden;\n}\n.titulo-painel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.9rem;\n}\n.titulo-lista-acertos[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n.filtros-acertos[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  gap: 0.35rem;\n}\n.filtros-acertos[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.filtros-acertos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 1.35rem;\n  min-height: 1.35rem;\n  place-items: center;\n  background: var(--app-surface-muted);\n  border-radius: 999rem;\n  font-size: 0.56rem;\n}\n.lista-painel[_ngcontent-%COMP%]    > .titulo-painel[_ngcontent-%COMP%] {\n  align-items: end;\n  margin: 0;\n  padding: 1rem 1.1rem;\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.titulo-painel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.92rem;\n  font-weight: 720;\n  letter-spacing: -0.015em;\n}\n.titulo-painel[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0;\n  letter-spacing: 0;\n  line-height: 1.4;\n  text-transform: none;\n}\n.contador[_ngcontent-%COMP%] {\n  min-width: 1.75rem;\n  padding: 0.28rem 0.45rem;\n  color: var(--app-text-muted);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: var(--radius-small);\n  font-size: 0.64rem;\n  font-weight: 750;\n  text-align: center;\n}\n.campos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.7rem;\n}\n.grade-criacao[_ngcontent-%COMP%]   .campos[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.campo-largo[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  align-content: start;\n  gap: 0.35rem;\n}\nlabel[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  font-weight: 700;\n}\nlabel[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n  font-size: 0.6rem;\n}\nlabel[_ngcontent-%COMP%]   .ajuda[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n}\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  box-sizing: border-box;\n  padding: 0.58rem 0.65rem;\n  background: var(--app-surface);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-small);\n  font: inherit;\n  font-size: 0.72rem;\n  outline: none;\n}\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  min-height: 2.5rem;\n}\ntextarea[_ngcontent-%COMP%] {\n  min-height: 4.75rem;\n  resize: vertical;\n}\ninput[_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--studio-brand);\n  box-shadow: 0 0 0 0.12rem var(--studio-brand-soft);\n}\nform[_ngcontent-%COMP%]    > .botao-principal[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.8rem;\n}\nbutton[_ngcontent-%COMP%], \n.acerto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font: inherit;\n}\nbutton[_ngcontent-%COMP%] {\n  min-height: 2.3rem;\n  box-sizing: border-box;\n  padding: 0.48rem 0.7rem;\n  border-radius: var(--radius-small);\n  font-size: 0.66rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition:\n    color 120ms ease,\n    background-color 120ms ease,\n    border-color 120ms ease,\n    transform 120ms ease;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.5;\n}\n.botao-principal[_ngcontent-%COMP%] {\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0.0625rem solid var(--studio-brand);\n}\n.botao-principal[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.96) saturate(1.08);\n  transform: translateY(-0.0625rem);\n}\n.botao-secundario[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n}\n.botao-secundario[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--app-surface-hover);\n}\n.botao-receber[_ngcontent-%COMP%] {\n  background: var(--color-success);\n  color: #fff;\n  border: 0.0625rem solid var(--color-success);\n}\n.botao-receber[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.92);\n}\n.botao-remover[_ngcontent-%COMP%] {\n  min-height: 1.9rem;\n  padding: 0.3rem 0.48rem;\n  background: transparent;\n  color: var(--color-danger);\n  border: 0.0625rem solid transparent;\n}\n.botao-remover[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-danger-soft);\n  border-color: var(--color-danger-border);\n}\n.lista-acertos[_ngcontent-%COMP%] {\n  display: grid;\n}\n.acerto[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: var(--app-surface);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.acerto[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.cabecalho-acerto[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  min-height: 5rem;\n  grid-template-columns: minmax(9rem, 0.8fr) minmax(18rem, 1.4fr) auto;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.85rem 1rem;\n  background: transparent;\n  color: var(--app-text);\n  border: 0;\n  border-radius: 0;\n  text-align: left;\n}\n.cabecalho-acerto[_ngcontent-%COMP%]:hover {\n  background: var(--app-surface-muted);\n}\n.cabecalho-acerto[aria-expanded=true][_ngcontent-%COMP%] {\n  background: var(--studio-brand-soft);\n  box-shadow: inset 0.16rem 0 var(--studio-brand);\n}\n.identificacao-acerto[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.2rem;\n}\n.identificacao-acerto[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-size: 0.82rem;\n  font-weight: 720;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.identificacao-acerto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.6rem;\n  font-variant-numeric: tabular-nums;\n}\n.valores-acerto[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.7rem;\n}\n.valores-acerto[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.16rem;\n}\n.valores-acerto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.54rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.valores-acerto[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-variant-numeric: tabular-nums;\n}\n.situacao[_ngcontent-%COMP%] {\n  padding: 0.28rem 0.45rem;\n  background: var(--color-danger-soft);\n  color: var(--color-danger);\n  border: 0.0625rem solid var(--color-danger-border);\n  border-radius: var(--radius-small);\n  font-size: 0.58rem;\n  font-weight: 720;\n  letter-spacing: 0.03em;\n  white-space: nowrap;\n}\n.situacao-ok[_ngcontent-%COMP%] {\n  background: var(--color-success-soft);\n  color: var(--color-success);\n  border-color: var(--color-success-border);\n}\n.situacao-parcial[_ngcontent-%COMP%] {\n  background: var(--color-warning-soft);\n  color: var(--color-warning);\n  border-color: var(--color-warning-border);\n}\n.situacao-credito[_ngcontent-%COMP%] {\n  background: var(--studio-brand-soft);\n  color: color-mix(in oklab, var(--studio-brand) 55%, #111311);\n  border-color: var(--studio-brand-border);\n}\n.detalhes-acerto[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n  padding: 0.85rem;\n  background: var(--app-surface-muted);\n  border-top: 0.0625rem solid var(--studio-brand-border);\n}\n.informacoes-acerto[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n  padding: 0 0.15rem;\n  color: var(--app-text-soft);\n  font-size: 0.68rem;\n}\n.informacoes-acerto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.55;\n  white-space: pre-wrap;\n}\n.bloco-detalhes[_ngcontent-%COMP%] {\n  padding: 0.9rem;\n  background: var(--app-surface);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: var(--radius-small);\n}\n.cabecalho-bloco[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.7rem;\n}\n.cabecalho-bloco[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.78rem;\n}\n.cabecalho-bloco[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.22rem 0 0;\n  color: var(--app-text-muted);\n  font-size: 0.62rem;\n}\n.lista-detalhes[_ngcontent-%COMP%] {\n  display: grid;\n  border: 0.0625rem solid var(--app-border);\n}\n.linha-detalhe[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto auto;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.6rem 0.65rem;\n  background: var(--app-surface);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.linha-detalhe[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.linha-detalhe[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.14rem;\n}\n.linha-detalhe[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n  font-size: 0.68rem;\n}\n.linha-detalhe[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.6rem;\n}\n.linha-detalhe[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n.valor-recebido[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.formulario-interno[_ngcontent-%COMP%] {\n  margin-top: 0.7rem;\n  padding: 0.75rem;\n  background: var(--app-surface-muted);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: var(--radius-small);\n}\n.campos-internos[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.acoes-formulario[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.45rem;\n  margin-top: 0.7rem;\n}\n.sem-registros[_ngcontent-%COMP%], \n.estado[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1.5rem;\n  color: var(--app-text-muted);\n  font-size: 0.7rem;\n  text-align: center;\n}\n.estado-erro[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%], \n   *[_ngcontent-%COMP%]::before, \n   *[_ngcontent-%COMP%]::after {\n    transition-duration: 0.01ms !important;\n  }\n}\n@media (max-width: 70rem) {\n  .pagina.criacao-aberta[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) 20rem;\n  }\n  .cabecalho-acerto[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) auto;\n  }\n  .valores-acerto[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    grid-row: 2;\n  }\n}\n@media (max-width: 58rem) {\n  .pagina[_ngcontent-%COMP%], \n   .pagina.criacao-aberta[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-areas: "cabecalho" "resumos" "retornos" "lista" "criacao";\n  }\n  .grade-criacao[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .grade-criacao[_ngcontent-%COMP%]   .campos[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 42rem) {\n  .pagina[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .resumos[_ngcontent-%COMP%], \n   .campos[_ngcontent-%COMP%], \n   .campos-internos[_ngcontent-%COMP%], \n   .grade-criacao[_ngcontent-%COMP%]   .campos[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .campo-largo[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .cabecalho-acerto[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .titulo-lista-acertos[_ngcontent-%COMP%], \n   .cabecalho[_ngcontent-%COMP%] {\n    align-items: stretch !important;\n    flex-direction: column;\n  }\n  .botao-novo-acerto[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .filtros-acertos[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .filtros-acertos[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n  .situacao[_ngcontent-%COMP%] {\n    justify-self: start;\n  }\n  .valores-acerto[_ngcontent-%COMP%] {\n    grid-column: auto;\n    grid-row: auto;\n  }\n  .cabecalho-bloco[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .linha-detalhe[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr auto;\n  }\n  .linha-detalhe[_ngcontent-%COMP%]   .botao-remover[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    justify-self: end;\n  }\n}\n@media (max-width: 32rem) {\n  .pagina[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .cabecalho[_ngcontent-%COMP%], \n   .resumos[_ngcontent-%COMP%] {\n    margin-right: 1rem;\n    margin-left: 1rem;\n  }\n  .cabecalho[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n  .resumos[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .painel[_ngcontent-%COMP%] {\n    border-right: 0;\n    border-left: 0;\n    border-radius: 0;\n    box-shadow: none;\n  }\n  .grade-criacao[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Acertos, [{
    type: Component,
    args: [{ selector: "app-acertos", standalone: true, imports: [ReactiveFormsModule], template: `<main
  class="pagina"
  [class.criacao-aberta]="tipoCriacao() !== null"
>
  <header class="cabecalho">
    <div>
      <p class="secao">DINHEIRO</p>
      <h1>Acertos</h1>
      <p>
        Veja o que entrou, o que falta e fa\xE7a as contas do seu
        jeito.
      </p>
    </div>

    <button
      type="button"
      class="botao-novo-acerto"
      [attr.aria-expanded]="tipoCriacao() !== null"
      aria-controls="criacao-acerto"
      (click)="alternarCriacao()"
    >
      @if (tipoCriacao()) {
        Fechar cria\xE7\xE3o
      } @else {
        Novo acerto
      }
    </button>
  </header>

  <section class="resumos">
    <article class="resumo resumo-receber">
      <span>A receber</span>
      <strong>
        {{
          formatarMoeda(
            dadosAcertos.totalAReceber()
          )
        }}
      </strong>
    </article>

    @if (dadosAcertos.totalEmCredito() > 0) {
      <article class="resumo resumo-credito">
        <span>Cr\xE9dito de clientes</span>
        <strong>
          {{
            formatarMoeda(
              dadosAcertos.totalEmCredito()
            )
          }}
        </strong>
      </article>
    }
  </section>

  <div class="retornos-pagina">
    @if (mensagemPagina()) {
      <p class="mensagem-sucesso">
        {{ mensagemPagina() }}
      </p>
    }

    @if (erroPagina()) {
      <p class="mensagem-erro">
        {{ erroPagina() }}
      </p>
    }
  </div>

  @if (tipoCriacao(); as tipo) {
    <aside
      id="criacao-acerto"
      class="grade-criacao"
    >
      <article class="painel painel-criacao">
        <div class="cabecalho-criacao">
          <div>
            <p>Novo acerto</p>
            <h2>
              @if (tipo === 'agendamento') {
                Usar um agendamento
              } @else {
                Criar acerto livre
              }
            </h2>
          </div>

          <button
            type="button"
            class="botao-fechar-criacao"
            aria-label="Fechar cria\xE7\xE3o"
            (click)="fecharCriacao()"
          >
            \xD7
          </button>
        </div>

        <div class="tipos-criacao" aria-label="Tipo de acerto">
          <button
            type="button"
            [class.ativo]="tipo === 'agendamento'"
            [attr.aria-pressed]="tipo === 'agendamento'"
            (click)="selecionarTipoCriacao('agendamento')"
          >
            Do agendamento
          </button>

          <button
            type="button"
            [class.ativo]="tipo === 'manual'"
            [attr.aria-pressed]="tipo === 'manual'"
            (click)="selecionarTipoCriacao('manual')"
          >
            Acerto livre
          </button>
        </div>

        @if (tipo === 'agendamento') {
          <p class="ajuda-criacao">
            Servi\xE7os, quantidades e pre\xE7os ser\xE3o preenchidos
            automaticamente.
          </p>

          <form
            [formGroup]="formularioAgendamento"
            (ngSubmit)="gerarDoAgendamento()"
          >
            <label>
              <span>Agendamento</span>

              <select formControlName="agendamento_id">
                <option value="">
                  Selecione um agendamento
                </option>

                @for (
                  agendamento of
                    dadosAgendamentos.agendamentos();
                  track agendamento.id
                ) {
                  <option [value]="agendamento.id">
                    {{ resumirAgendamento(agendamento) }}
                    @if (
                      agendamentoJaIncluido(
                        agendamento.id
                      )
                    ) {
                      \u2014 j\xE1 inclu\xEDdo
                    }
                  </option>
                }
              </select>

              @if (
                formularioAgendamento.controls
                  .agendamento_id.touched &&
                formularioAgendamento.controls
                  .agendamento_id.invalid
              ) {
                <small>Selecione o agendamento.</small>
              }
            </label>

            <button
              type="submit"
              class="botao-principal"
              [disabled]="salvandoAgendamento()"
            >
              @if (salvandoAgendamento()) {
                Gerando...
              } @else {
                Gerar acerto
              }
            </button>
          </form>
        } @else {
          <p class="ajuda-criacao">
            Para pacote, produ\xE7\xE3o, desconto ou qualquer conta
            fora da agenda.
          </p>

          <form
            [formGroup]="formularioManual"
            (ngSubmit)="criarManual()"
          >
            <div class="campos">
              <label>
                <span>Contato</span>
                <select formControlName="contato_id">
                  <option value="">Selecione o contato</option>
                  @for (
                    contato of dadosContatos.contatos();
                    track contato.id
                  ) {
                    <option [value]="contato.id">
                      {{ contato.nome }}
                    </option>
                  }
                </select>
              </label>

              <label>
                <span>O que est\xE1 sendo acertado</span>
                <input
                  type="text"
                  formControlName="descricao"
                  placeholder="Ex.: Produ\xE7\xF5es de agosto"
                />
              </label>

              <label>
                <span>Quantidade</span>
                <input
                  type="number"
                  formControlName="quantidade"
                  min="0.01"
                  step="0.01"
                />
              </label>

              <label>
                <span>Valor</span>
                <input
                  type="number"
                  formControlName="valor_unitario"
                  step="0.01"
                />
                <small class="ajuda">
                  Use valor negativo para desconto.
                </small>
              </label>

              <label>
                <span>Data combinada</span>
                <input
                  type="date"
                  formControlName="vencimento_em"
                />
              </label>

              <label class="campo-largo">
                <span>Observa\xE7\xF5es</span>
                <textarea
                  formControlName="observacoes"
                  rows="3"
                  placeholder="Opcional"
                ></textarea>
              </label>
            </div>

            <button
              type="submit"
              class="botao-principal"
              [disabled]="salvandoManual()"
            >
              @if (salvandoManual()) {
                Criando...
              } @else {
                Criar acerto
              }
            </button>
          </form>
        }
      </article>
    </aside>
  }

  <section class="painel lista-painel">
    <div class="titulo-painel titulo-lista-acertos">
      <div>
        <h2>
          @if (filtroAcertos() === 'abertos') {
            O que precisa de aten\xE7\xE3o
          } @else {
            Resolvidos
          }
        </h2>
        <p>
          @if (filtroAcertos() === 'abertos') {
            Valores a receber e cr\xE9ditos ainda em aberto.
          } @else {
            Contas que j\xE1 foram totalmente acertadas.
          }
        </p>
      </div>

      <div class="filtros-acertos">
        <button
          type="button"
          [class.ativo]="filtroAcertos() === 'abertos'"
          [attr.aria-pressed]="filtroAcertos() === 'abertos'"
          (click)="selecionarFiltro('abertos')"
        >
          Em aberto
          <span>{{ acertosEmAberto().length }}</span>
        </button>

        <button
          type="button"
          [class.ativo]="filtroAcertos() === 'resolvidos'"
          [attr.aria-pressed]="filtroAcertos() === 'resolvidos'"
          (click)="selecionarFiltro('resolvidos')"
        >
          Resolvidos
          <span>{{ acertosResolvidos().length }}</span>
        </button>
      </div>
    </div>

    @if (carregandoPagina()) {
      <p class="estado">Carregando acertos...</p>
    } @else if (
      dadosAcertos.erro() ||
      dadosContatos.erro() ||
      dadosAgendamentos.erro()
    ) {
      <div class="estado estado-erro">
        <p>
          {{
            dadosAcertos.erro() ||
              dadosContatos.erro() ||
              dadosAgendamentos.erro()
          }}
        </p>

        <button
          type="button"
          class="botao-secundario"
          (click)="carregarDados()"
        >
          Tentar novamente
        </button>
      </div>
    } @else if (
      dadosAcertos.acertos().length === 0
    ) {
      <p class="estado">
        Nenhum acerto criado ainda.
      </p>
    } @else if (acertosVisiveis().length === 0) {
      <p class="estado">
        @if (filtroAcertos() === 'abertos') {
          Nenhum acerto precisa de aten\xE7\xE3o.
        } @else {
          Nenhum acerto resolvido ainda.
        }
      </p>
    } @else {
      <div class="lista-acertos">
        @for (
          acerto of acertosVisiveis();
          track acerto.id
        ) {
          <article
  class="acerto"
  [id]="'acerto-' + acerto.id"
>
            <button
              type="button"
              class="cabecalho-acerto"
              [attr.aria-expanded]="
                acertoAbertoId() === acerto.id
              "
              (click)="alternarDetalhes(acerto.id)"
            >
              <div class="identificacao-acerto">
                <strong>
                  {{ acerto.contato.nome }}
                </strong>

                <span>
                  Criado em
                  {{ formatarData(acerto.criado_em) }}
                </span>
              </div>

              <div class="valores-acerto">
                <div>
                  <span>Total</span>
                  <strong>
                    {{
                      formatarMoeda(
                        acerto.valor_total
                      )
                    }}
                  </strong>
                </div>

                <div>
                  <span>Pago</span>
                  <strong>
                    {{
                      formatarMoeda(
                        acerto.valor_pago
                      )
                    }}
                  </strong>
                </div>

                <div>
                  <span>Falta</span>
                  <strong>
                    {{
  formatarMoeda(
    valorFaltante(acerto)
  )
}}
                  </strong>
                </div>
              </div>

              <span
                class="situacao"
                [class.situacao-ok]="
                  acerto.saldo === 0
                "
                [class.situacao-parcial]="
                  acerto.saldo > 0 &&
                  acerto.valor_pago > 0
                "
                [class.situacao-credito]="
                  acerto.saldo < 0
                "
              >
                {{ rotuloSituacao(acerto) }}
              </span>
            </button>

            @if (
              acertoAbertoId() === acerto.id
            ) {
              <div class="detalhes-acerto">
                <div class="informacoes-acerto">
                  <span>
                    Data combinada:
                    <strong>
                      {{
                        formatarDataOpcional(
                          acerto.vencimento_em
                        )
                      }}
                    </strong>
                  </span>

                  @if (acerto.observacoes) {
                    <p>{{ acerto.observacoes }}</p>
                  }
                </div>

                <section class="bloco-detalhes">
                  <div class="cabecalho-bloco">
                    <div>
                      <h3>O que entrou na conta</h3>
                      <p>
                        Servi\xE7os, pacotes, extras e descontos.
                      </p>
                    </div>

                    <button
                      type="button"
                      class="botao-secundario"
                      (click)="abrirNovoItem(acerto.id)"
                    >
                      Adicionar item
                    </button>
                  </div>

                  @if (acerto.itens.length === 0) {
                    <p class="sem-registros">
                      Nenhum item adicionado.
                    </p>
                  } @else {
                    <div class="lista-detalhes">
                      @for (
                        item of acerto.itens;
                        track item.id
                      ) {
                        <article class="linha-detalhe">
                          <div>
                            <strong>
                              {{ item.descricao }}
                            </strong>

                            <span>
                              {{
                                formatarQuantidade(
                                  item.quantidade
                                )
                              }}
                              \xD7
                              {{
                                formatarMoeda(
                                  item.valor_unitario
                                )
                              }}
                            </span>
                          </div>

                          <strong>
                            {{
                              formatarMoeda(
                                item.quantidade *
                                  item.valor_unitario
                              )
                            }}
                          </strong>

                          <button
                            type="button"
                            class="botao-remover"
                            [disabled]="
                              excluindoItemId() === item.id
                            "
                            (click)="excluirItem(item.id)"
                          >
                            @if (
                              excluindoItemId() === item.id
                            ) {
                              Removendo...
                            } @else {
                              Remover
                            }
                          </button>
                        </article>
                      }
                    </div>
                  }

                  @if (
                    acertoItemId() === acerto.id
                  ) {
                    <form
                      class="formulario-interno"
                      [formGroup]="formularioItem"
                      (ngSubmit)="adicionarItem(acerto.id)"
                    >
                      <div class="campos campos-internos">
                        <label>
                          <span>Descri\xE7\xE3o</span>

                          <input
                            type="text"
                            formControlName="descricao"
                            placeholder="Ex.: Desconto do pacote"
                          />
                        </label>

                        <label>
                          <span>Quantidade</span>

                          <input
                            type="number"
                            formControlName="quantidade"
                            min="0.01"
                            step="0.01"
                          />
                        </label>

                        <label>
                          <span>Valor unit\xE1rio</span>

                          <input
                            type="number"
                            formControlName="valor_unitario"
                            step="0.01"
                          />
                        </label>
                      </div>

                      <div class="acoes-formulario">
                        <button
                          type="button"
                          class="botao-secundario"
                          (click)="fecharFormularios()"
                        >
                          Cancelar
                        </button>

                        <button
                          type="submit"
                          class="botao-principal"
                          [disabled]="salvandoItem()"
                        >
                          @if (salvandoItem()) {
                            Adicionando...
                          } @else {
                            Adicionar
                          }
                        </button>
                      </div>
                    </form>
                  }
                </section>

                <section class="bloco-detalhes">
                  <div class="cabecalho-bloco">
                    <div>
                      <h3>Pagamentos</h3>
                      <p>
                        Pode registrar sinal, parte ou valor
                        completo.
                      </p>
                    </div>

                    @if (acerto.saldo > 0) {
                      <button
                        type="button"
                        class="botao-receber"
                        (click)="abrirPagamento(acerto)"
                      >
                        Registrar pagamento
                      </button>
                    }
                  </div>

                  @if (
                    acerto.pagamentos.length === 0
                  ) {
                    <p class="sem-registros">
                      Nenhum pagamento registrado.
                    </p>
                  } @else {
                    <div class="lista-detalhes">
                      @for (
                        pagamento of acerto.pagamentos;
                        track pagamento.id
                      ) {
                        <article class="linha-detalhe">
                          <div>
                            <strong>
                              {{
                                pagamento.pagador?.nome ??
                                  acerto.contato.nome
                              }}
                            </strong>

                            <span>
                              {{
                                formatarData(
                                  pagamento.pago_em
                                )
                              }}

                              @if (
                                pagamento.forma_pagamento
                              ) {
                                \xB7
                                {{
                                  pagamento.forma_pagamento
                                }}
                              }
                            </span>
                          </div>

                          <strong class="valor-recebido">
                            {{
                              formatarMoeda(
                                pagamento.valor
                              )
                            }}
                          </strong>

                          <button
                            type="button"
                            class="botao-remover"
                            [disabled]="
                              excluindoPagamentoId() ===
                              pagamento.id
                            "
                            (click)="
                              excluirPagamento(
                                pagamento.id
                              )
                            "
                          >
                            @if (
                              excluindoPagamentoId() ===
                              pagamento.id
                            ) {
                              Removendo...
                            } @else {
                              Remover
                            }
                          </button>
                        </article>
                      }
                    </div>
                  }

                  @if (
                    acertoPagamentoId() === acerto.id
                  ) {
                    <form
                      class="formulario-interno"
                      [formGroup]="formularioPagamento"
                      (ngSubmit)="
                        registrarPagamento(acerto.id)
                      "
                    >
                      <div class="campos campos-internos">
                        <label>
                          <span>Valor recebido</span>

                          <input
                            type="number"
                            formControlName="valor"
                            min="0.01"
                            step="0.01"
                          />
                        </label>

                        <label>
                          <span>Quem pagou</span>

                          <select
                            formControlName="pagador_contato_id"
                          >
                            <option value="">
                              Mesmo contato do acerto
                            </option>

                            @for (
                              contato of
                                dadosContatos.contatos();
                              track contato.id
                            ) {
                              <option [value]="contato.id">
                                {{ contato.nome }}
                              </option>
                            }
                          </select>
                        </label>

                        <label>
                          <span>Como pagou</span>

                          <input
                            type="text"
                            formControlName="forma_pagamento"
                            placeholder="Pix, dinheiro, cart\xE3o..."
                          />
                        </label>

                        <label>
                          <span>Quando pagou</span>

                          <input
                            type="datetime-local"
                            formControlName="pago_em"
                          />
                        </label>

                        <label class="campo-largo">
                          <span>Observa\xE7\xF5es</span>

                          <textarea
                            formControlName="observacoes"
                            rows="2"
                            placeholder="Opcional"
                          ></textarea>
                        </label>
                      </div>

                      <div class="acoes-formulario">
                        <button
                          type="button"
                          class="botao-secundario"
                          (click)="fecharFormularios()"
                        >
                          Cancelar
                        </button>

                        <button
                          type="submit"
                          class="botao-receber"
                          [disabled]="
                            salvandoPagamento()
                          "
                        >
                          @if (
                            salvandoPagamento()
                          ) {
                            Registrando...
                          } @else {
                            Confirmar pagamento
                          }
                        </button>
                      </div>
                    </form>
                  }
                </section>
              </div>
            }
          </article>
        }
      </div>
    }
  </section>
</main>
`, styles: ['/* apps/studio-dash/src/app/paginas/acertos/acertos.scss */\n:host {\n  display: block;\n  min-height: 100%;\n  color: var(--app-text);\n}\n.pagina {\n  display: grid;\n  width: min(100%, 100rem);\n  min-height: 100vh;\n  grid-template-columns: minmax(0, 1fr);\n  grid-template-areas: "cabecalho" "resumos" "retornos" "lista";\n  align-items: start;\n  gap: 1rem;\n  box-sizing: border-box;\n  margin: 0 auto;\n  padding: clamp(1rem, 2vw, 1.75rem);\n}\n.pagina.criacao-aberta {\n  grid-template-columns: minmax(0, 1fr) minmax(20rem, 24rem);\n  grid-template-areas: "cabecalho cabecalho" "resumos resumos" "retornos retornos" "lista criacao";\n}\n.cabecalho {\n  display: flex;\n  grid-area: cabecalho;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.cabecalho h1 {\n  margin: 0.28rem 0 0;\n  font-size: clamp(2rem, 4vw, 3.15rem);\n  font-weight: 720;\n  line-height: 0.92;\n  letter-spacing: -0.055em;\n}\n.cabecalho > div > p:last-child {\n  max-width: 44rem;\n  margin: 0.6rem 0 0;\n  color: var(--app-text-muted);\n  font-size: 0.78rem;\n}\n.cabecalho .secao,\n.titulo-painel > div > p {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.6rem;\n  font-weight: 760;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n.resumos {\n  display: grid;\n  grid-area: resumos;\n  grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));\n  gap: 0.75rem;\n}\n.resumo {\n  position: relative;\n  display: grid;\n  min-height: 6.4rem;\n  align-content: space-between;\n  gap: 0.75rem;\n  overflow: hidden;\n  padding: 0.9rem 1rem;\n  background: var(--app-surface);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-medium);\n  box-shadow: var(--shadow-small);\n}\n.resumo::before {\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 0.16rem;\n  content: "";\n}\n.resumo span {\n  color: var(--app-text-muted);\n  font-size: 0.6rem;\n  font-weight: 720;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.resumo strong {\n  font-size: clamp(1.25rem, 3vw, 1.7rem);\n  font-weight: 720;\n  letter-spacing: -0.035em;\n  font-variant-numeric: tabular-nums;\n}\n.resumo-receber::before {\n  background: var(--color-danger);\n}\n.resumo-credito::before {\n  background: var(--color-warning);\n}\n.retornos-pagina {\n  display: grid;\n  grid-area: retornos;\n  gap: 0.5rem;\n}\n.retornos-pagina:empty {\n  display: none;\n}\n.mensagem-sucesso,\n.mensagem-erro {\n  margin: 0;\n  padding: 0.7rem 0.8rem;\n  border-radius: var(--radius-small);\n  font-size: 0.68rem;\n}\n.mensagem-sucesso {\n  background: var(--color-success-soft);\n  color: var(--color-success);\n  border: 0.0625rem solid var(--color-success-border);\n}\n.mensagem-erro {\n  background: var(--color-danger-soft);\n  color: var(--color-danger);\n  border: 0.0625rem solid var(--color-danger-border);\n}\n.painel {\n  min-width: 0;\n  padding: 1rem;\n  background: var(--app-surface);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-medium);\n  box-shadow: var(--shadow-medium);\n}\n.botao-novo-acerto {\n  min-height: 2.65rem;\n  padding-inline: 0.9rem;\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0.0625rem solid var(--studio-brand);\n}\n.grade-criacao {\n  position: sticky;\n  top: 1rem;\n  display: grid;\n  grid-area: criacao;\n  grid-template-columns: 1fr;\n  gap: 0.75rem;\n}\n.painel-criacao {\n  padding: 0;\n  box-shadow: var(--shadow-small);\n}\n.cabecalho-criacao {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.9rem 1rem;\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.cabecalho-criacao p,\n.cabecalho-criacao h2 {\n  margin: 0;\n}\n.cabecalho-criacao p {\n  color: var(--app-text-muted);\n  font-size: 0.56rem;\n  font-weight: 760;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.cabecalho-criacao h2 {\n  margin-top: 0.15rem;\n  font-size: 0.9rem;\n}\n.botao-fechar-criacao {\n  display: grid;\n  width: 2.2rem;\n  height: 2.2rem;\n  padding: 0;\n  place-items: center;\n  background: transparent;\n  color: var(--app-text-muted);\n  border: 0.0625rem solid var(--app-border);\n  font-size: 1rem;\n}\n.tipos-criacao {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.3rem;\n  padding: 0.65rem 1rem 0;\n}\n.tipos-criacao button,\n.filtros-acertos button {\n  background: transparent;\n  color: var(--app-text-muted);\n  border: 0.0625rem solid var(--app-border);\n}\n.tipos-criacao button.ativo,\n.filtros-acertos button.ativo {\n  background: var(--app-surface-muted);\n  color: var(--app-text);\n  border-color: var(--studio-brand-border);\n  box-shadow: inset 0 -0.12rem var(--studio-brand);\n}\n.ajuda-criacao {\n  margin: 0;\n  padding: 0.65rem 1rem 0;\n  color: var(--app-text-muted);\n  font-size: 0.62rem;\n  line-height: 1.45;\n}\n.painel-criacao > form {\n  padding: 0.8rem 1rem 1rem;\n}\n.lista-painel {\n  grid-area: lista;\n  padding: 0;\n  overflow: hidden;\n}\n.titulo-painel {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.9rem;\n}\n.titulo-lista-acertos {\n  align-items: center !important;\n}\n.filtros-acertos {\n  display: flex;\n  flex: 0 0 auto;\n  gap: 0.35rem;\n}\n.filtros-acertos button {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.filtros-acertos span {\n  display: grid;\n  min-width: 1.35rem;\n  min-height: 1.35rem;\n  place-items: center;\n  background: var(--app-surface-muted);\n  border-radius: 999rem;\n  font-size: 0.56rem;\n}\n.lista-painel > .titulo-painel {\n  align-items: end;\n  margin: 0;\n  padding: 1rem 1.1rem;\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.titulo-painel h2 {\n  margin: 0;\n  font-size: 0.92rem;\n  font-weight: 720;\n  letter-spacing: -0.015em;\n}\n.titulo-painel > div > p {\n  margin: 0.3rem 0 0;\n  letter-spacing: 0;\n  line-height: 1.4;\n  text-transform: none;\n}\n.contador {\n  min-width: 1.75rem;\n  padding: 0.28rem 0.45rem;\n  color: var(--app-text-muted);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: var(--radius-small);\n  font-size: 0.64rem;\n  font-weight: 750;\n  text-align: center;\n}\n.campos {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.7rem;\n}\n.grade-criacao .campos {\n  grid-template-columns: 1fr;\n}\n.campo-largo {\n  grid-column: 1/-1;\n}\nlabel {\n  display: grid;\n  min-width: 0;\n  align-content: start;\n  gap: 0.35rem;\n}\nlabel > span {\n  font-size: 0.66rem;\n  font-weight: 700;\n}\nlabel small {\n  color: var(--color-danger);\n  font-size: 0.6rem;\n}\nlabel .ajuda {\n  color: var(--app-text-muted);\n}\ninput,\nselect,\ntextarea {\n  width: 100%;\n  min-width: 0;\n  box-sizing: border-box;\n  padding: 0.58rem 0.65rem;\n  background: var(--app-surface);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-small);\n  font: inherit;\n  font-size: 0.72rem;\n  outline: none;\n}\ninput,\nselect {\n  min-height: 2.5rem;\n}\ntextarea {\n  min-height: 4.75rem;\n  resize: vertical;\n}\ninput:focus,\nselect:focus,\ntextarea:focus {\n  border-color: var(--studio-brand);\n  box-shadow: 0 0 0 0.12rem var(--studio-brand-soft);\n}\nform > .botao-principal {\n  width: 100%;\n  margin-top: 0.8rem;\n}\nbutton,\n.acerto a {\n  font: inherit;\n}\nbutton {\n  min-height: 2.3rem;\n  box-sizing: border-box;\n  padding: 0.48rem 0.7rem;\n  border-radius: var(--radius-small);\n  font-size: 0.66rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition:\n    color 120ms ease,\n    background-color 120ms ease,\n    border-color 120ms ease,\n    transform 120ms ease;\n}\nbutton:disabled {\n  cursor: wait;\n  opacity: 0.5;\n}\n.botao-principal {\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0.0625rem solid var(--studio-brand);\n}\n.botao-principal:hover:not(:disabled) {\n  filter: brightness(0.96) saturate(1.08);\n  transform: translateY(-0.0625rem);\n}\n.botao-secundario {\n  background: transparent;\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n}\n.botao-secundario:hover:not(:disabled) {\n  background: var(--app-surface-hover);\n}\n.botao-receber {\n  background: var(--color-success);\n  color: #fff;\n  border: 0.0625rem solid var(--color-success);\n}\n.botao-receber:hover:not(:disabled) {\n  filter: brightness(0.92);\n}\n.botao-remover {\n  min-height: 1.9rem;\n  padding: 0.3rem 0.48rem;\n  background: transparent;\n  color: var(--color-danger);\n  border: 0.0625rem solid transparent;\n}\n.botao-remover:hover:not(:disabled) {\n  background: var(--color-danger-soft);\n  border-color: var(--color-danger-border);\n}\n.lista-acertos {\n  display: grid;\n}\n.acerto {\n  overflow: hidden;\n  background: var(--app-surface);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.acerto:last-child {\n  border-bottom: 0;\n}\n.cabecalho-acerto {\n  display: grid;\n  width: 100%;\n  min-height: 5rem;\n  grid-template-columns: minmax(9rem, 0.8fr) minmax(18rem, 1.4fr) auto;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.85rem 1rem;\n  background: transparent;\n  color: var(--app-text);\n  border: 0;\n  border-radius: 0;\n  text-align: left;\n}\n.cabecalho-acerto:hover {\n  background: var(--app-surface-muted);\n}\n.cabecalho-acerto[aria-expanded=true] {\n  background: var(--studio-brand-soft);\n  box-shadow: inset 0.16rem 0 var(--studio-brand);\n}\n.identificacao-acerto {\n  display: grid;\n  min-width: 0;\n  gap: 0.2rem;\n}\n.identificacao-acerto strong {\n  overflow: hidden;\n  font-size: 0.82rem;\n  font-weight: 720;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.identificacao-acerto span {\n  color: var(--app-text-muted);\n  font-size: 0.6rem;\n  font-variant-numeric: tabular-nums;\n}\n.valores-acerto {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.7rem;\n}\n.valores-acerto div {\n  display: grid;\n  gap: 0.16rem;\n}\n.valores-acerto span {\n  color: var(--app-text-muted);\n  font-size: 0.54rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.valores-acerto strong {\n  font-size: 0.74rem;\n  font-variant-numeric: tabular-nums;\n}\n.situacao {\n  padding: 0.28rem 0.45rem;\n  background: var(--color-danger-soft);\n  color: var(--color-danger);\n  border: 0.0625rem solid var(--color-danger-border);\n  border-radius: var(--radius-small);\n  font-size: 0.58rem;\n  font-weight: 720;\n  letter-spacing: 0.03em;\n  white-space: nowrap;\n}\n.situacao-ok {\n  background: var(--color-success-soft);\n  color: var(--color-success);\n  border-color: var(--color-success-border);\n}\n.situacao-parcial {\n  background: var(--color-warning-soft);\n  color: var(--color-warning);\n  border-color: var(--color-warning-border);\n}\n.situacao-credito {\n  background: var(--studio-brand-soft);\n  color: color-mix(in oklab, var(--studio-brand) 55%, #111311);\n  border-color: var(--studio-brand-border);\n}\n.detalhes-acerto {\n  display: grid;\n  gap: 0.75rem;\n  padding: 0.85rem;\n  background: var(--app-surface-muted);\n  border-top: 0.0625rem solid var(--studio-brand-border);\n}\n.informacoes-acerto {\n  display: grid;\n  gap: 0.45rem;\n  padding: 0 0.15rem;\n  color: var(--app-text-soft);\n  font-size: 0.68rem;\n}\n.informacoes-acerto p {\n  margin: 0;\n  line-height: 1.55;\n  white-space: pre-wrap;\n}\n.bloco-detalhes {\n  padding: 0.9rem;\n  background: var(--app-surface);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: var(--radius-small);\n}\n.cabecalho-bloco {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.7rem;\n}\n.cabecalho-bloco h3 {\n  margin: 0;\n  font-size: 0.78rem;\n}\n.cabecalho-bloco p {\n  margin: 0.22rem 0 0;\n  color: var(--app-text-muted);\n  font-size: 0.62rem;\n}\n.lista-detalhes {\n  display: grid;\n  border: 0.0625rem solid var(--app-border);\n}\n.linha-detalhe {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto auto;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.6rem 0.65rem;\n  background: var(--app-surface);\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.linha-detalhe:last-child {\n  border-bottom: 0;\n}\n.linha-detalhe > div {\n  display: grid;\n  min-width: 0;\n  gap: 0.14rem;\n}\n.linha-detalhe div > strong {\n  overflow-wrap: anywhere;\n  font-size: 0.68rem;\n}\n.linha-detalhe div > span {\n  color: var(--app-text-muted);\n  font-size: 0.6rem;\n}\n.linha-detalhe > strong {\n  font-size: 0.68rem;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n.valor-recebido {\n  color: var(--color-success);\n}\n.formulario-interno {\n  margin-top: 0.7rem;\n  padding: 0.75rem;\n  background: var(--app-surface-muted);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: var(--radius-small);\n}\n.campos-internos {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.acoes-formulario {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.45rem;\n  margin-top: 0.7rem;\n}\n.sem-registros,\n.estado {\n  margin: 0;\n  padding: 1.5rem;\n  color: var(--app-text-muted);\n  font-size: 0.7rem;\n  text-align: center;\n}\n.estado-erro {\n  color: var(--color-danger);\n}\n@media (prefers-reduced-motion: reduce) {\n  *,\n  *::before,\n  *::after {\n    transition-duration: 0.01ms !important;\n  }\n}\n@media (max-width: 70rem) {\n  .pagina.criacao-aberta {\n    grid-template-columns: minmax(0, 1fr) 20rem;\n  }\n  .cabecalho-acerto {\n    grid-template-columns: minmax(0, 1fr) auto;\n  }\n  .valores-acerto {\n    grid-column: 1/-1;\n    grid-row: 2;\n  }\n}\n@media (max-width: 58rem) {\n  .pagina,\n  .pagina.criacao-aberta {\n    grid-template-columns: 1fr;\n    grid-template-areas: "cabecalho" "resumos" "retornos" "lista" "criacao";\n  }\n  .grade-criacao {\n    position: static;\n  }\n  .grade-criacao .campos {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 42rem) {\n  .pagina {\n    padding: 1rem;\n  }\n  .resumos,\n  .campos,\n  .campos-internos,\n  .grade-criacao .campos {\n    grid-template-columns: 1fr;\n  }\n  .campo-largo {\n    grid-column: auto;\n  }\n  .cabecalho-acerto {\n    grid-template-columns: 1fr;\n  }\n  .titulo-lista-acertos,\n  .cabecalho {\n    align-items: stretch !important;\n    flex-direction: column;\n  }\n  .botao-novo-acerto {\n    width: 100%;\n  }\n  .filtros-acertos {\n    width: 100%;\n  }\n  .filtros-acertos button {\n    flex: 1;\n    justify-content: center;\n  }\n  .situacao {\n    justify-self: start;\n  }\n  .valores-acerto {\n    grid-column: auto;\n    grid-row: auto;\n  }\n  .cabecalho-bloco {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .linha-detalhe {\n    grid-template-columns: 1fr auto;\n  }\n  .linha-detalhe .botao-remover {\n    grid-column: 1/-1;\n    justify-self: end;\n  }\n}\n@media (max-width: 32rem) {\n  .pagina {\n    padding: 0;\n  }\n  .cabecalho,\n  .resumos {\n    margin-right: 1rem;\n    margin-left: 1rem;\n  }\n  .cabecalho {\n    margin-top: 1rem;\n  }\n  .resumos {\n    grid-template-columns: 1fr;\n  }\n  .painel {\n    border-right: 0;\n    border-left: 0;\n    border-radius: 0;\n    box-shadow: none;\n  }\n  .grade-criacao {\n    gap: 0.75rem;\n  }\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Acertos, { className: "Acertos", filePath: "apps/studio-dash/src/app/paginas/acertos/acertos.ts", lineNumber: 33 });
})();
export {
  Acertos
};
