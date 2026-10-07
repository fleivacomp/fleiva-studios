import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-OOHEKRNK.js";
import {
  Component,
  DadosServicos,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtextInterpolate1
} from "./chunk-IMBOO5ID.js";

// apps/studio-dash/src/app/paginas/servicos/servicos.ts
var _forTrack0 = ($index, $item) => $item.id;
function Servicos_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " servi\xE7o dispon\xEDvel ");
  }
}
function Servicos_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " servi\xE7os dispon\xEDveis ");
  }
}
function Servicos_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " EDITANDO SERVI\xC7O ");
  }
}
function Servicos_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " NOVO SERVI\xC7O ");
  }
}
function Servicos_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Ajustar servi\xE7o ");
  }
}
function Servicos_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Adicionar ao cat\xE1logo ");
  }
}
function Servicos_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Informe o nome do servi\xE7o.");
    \u0275\u0275elementEnd();
  }
}
function Servicos_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Informe um pre\xE7o v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function Servicos_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Informe o tipo de cobran\xE7a.");
    \u0275\u0275elementEnd();
  }
}
function Servicos_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "A dura\xE7\xE3o deve ser maior que zero.");
    \u0275\u0275elementEnd();
  }
}
function Servicos_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function Servicos_Conditional_65_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelarEdicao());
    });
    \u0275\u0275text(1, " Cancelar ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.salvando());
  }
}
function Servicos_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvando... ");
  }
}
function Servicos_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvar altera\xE7\xF5es ");
  }
}
function Servicos_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Adicionar servi\xE7o ");
  }
}
function Servicos_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.erroFormulario());
  }
}
function Servicos_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "span", 30);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Carregando servi\xE7os...");
    \u0275\u0275elementEnd()();
  }
}
function Servicos_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 31);
    \u0275\u0275text(2, "!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "N\xE3o foi poss\xEDvel abrir os servi\xE7os");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 32);
    \u0275\u0275listener("click", function Servicos_Conditional_81_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dadosServicos.listar());
    });
    \u0275\u0275text(8, " Tentar novamente ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.dadosServicos.erro());
  }
}
function Servicos_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 33);
    \u0275\u0275text(2, "R$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "O cat\xE1logo ainda est\xE1 vazio.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, " Cadastre o primeiro servi\xE7o para us\xE1-lo nos agendamentos e acertos. ");
    \u0275\u0275elementEnd()();
  }
}
function Servicos_Conditional_83_For_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Excluindo... ");
  }
}
function Servicos_Conditional_83_For_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Excluir ");
  }
}
function Servicos_Conditional_83_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 34)(1, "header", 35)(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 38)(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 39)(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "footer", 40)(15, "button", 32);
    \u0275\u0275listener("click", function Servicos_Conditional_83_For_2_Template_button_click_15_listener() {
      const servico_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editar(servico_r5));
    });
    \u0275\u0275text(16, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 41);
    \u0275\u0275listener("click", function Servicos_Conditional_83_For_2_Template_button_click_17_listener() {
      const servico_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.excluir(servico_r5));
    });
    \u0275\u0275conditionalCreate(18, Servicos_Conditional_83_For_2_Conditional_18_Template, 1, 0)(19, Servicos_Conditional_83_For_2_Conditional_19_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const servico_r5 = ctx.$implicit;
    const \u0275$index_194_r6 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275$index_194_r6 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatarDuracao(servico_r5.duracao_minutos), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(servico_r5.nome);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatarPreco(servico_r5.preco));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", servico_r5.tipo_cobranca);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.excluindoId() === servico_r5.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.excluindoId() === servico_r5.id ? 18 : 19);
  }
}
function Servicos_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275repeaterCreate(1, Servicos_Conditional_83_For_2_Template, 20, 7, "article", 34, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.dadosServicos.servicos());
  }
}
var Servicos = class _Servicos {
  dadosServicos = inject(DadosServicos);
  construtorFormulario = inject(FormBuilder);
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
  servicoEditandoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "servicoEditandoId" }] : (
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
  formulario = this.construtorFormulario.group({
    nome: this.construtorFormulario.nonNullable.control("", [Validators.required]),
    preco: this.construtorFormulario.control(null, [
      Validators.required,
      Validators.min(0)
    ]),
    tipo_cobranca: this.construtorFormulario.nonNullable.control("", [Validators.required]),
    duracao_minutos: this.construtorFormulario.control(null, [Validators.min(1)]),
    publico_na_landing: this.construtorFormulario.nonNullable.control(true)
  });
  ngOnInit() {
    void this.dadosServicos.listar();
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
        nome: valor.nome,
        preco: Number(valor.preco),
        tipo_cobranca: valor.tipo_cobranca,
        duracao_minutos: valor.duracao_minutos,
        publico_na_landing: valor.publico_na_landing
      };
      const servicoId = this.servicoEditandoId();
      if (servicoId) {
        await this.dadosServicos.atualizar(servicoId, dados);
      } else {
        await this.dadosServicos.cadastrar(dados);
      }
      this.limparFormulario();
    } catch (erro) {
      this.erroFormulario.set(this.obterMensagemErro(erro));
    } finally {
      this.salvando.set(false);
    }
  }
  editar(servico) {
    this.servicoEditandoId.set(servico.id);
    this.erroFormulario.set(null);
    this.formulario.setValue({
      nome: servico.nome,
      preco: servico.preco,
      tipo_cobranca: servico.tipo_cobranca,
      duracao_minutos: servico.duracao_minutos,
      publico_na_landing: servico.publico_na_landing
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  cancelarEdicao() {
    this.limparFormulario();
  }
  async excluir(servico) {
    const confirmou = window.confirm(`Excluir o servi\xE7o "${servico.nome}"?`);
    if (!confirmou) {
      return;
    }
    this.excluindoId.set(servico.id);
    this.erroFormulario.set(null);
    try {
      await this.dadosServicos.excluir(servico.id);
      if (this.servicoEditandoId() === servico.id) {
        this.limparFormulario();
      }
    } catch (erro) {
      this.erroFormulario.set(this.obterMensagemErro(erro));
    } finally {
      this.excluindoId.set(null);
    }
  }
  formatarPreco(preco) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(preco);
  }
  formatarDuracao(duracaoMinutos) {
    if (duracaoMinutos === null) {
      return "N\xE3o informada";
    }
    if (duracaoMinutos < 60) {
      return `${duracaoMinutos} min`;
    }
    const horas = Math.floor(duracaoMinutos / 60);
    const minutos = duracaoMinutos % 60;
    return minutos > 0 ? `${horas}h ${minutos}min` : `${horas}h`;
  }
  limparFormulario() {
    this.servicoEditandoId.set(null);
    this.formulario.reset({
      nome: "",
      preco: null,
      tipo_cobranca: "",
      duracao_minutos: null,
      publico_na_landing: false
    });
  }
  obterMensagemErro(erro) {
    if (typeof erro === "object" && erro !== null && "message" in erro) {
      return String(erro.message);
    }
    return "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o.";
  }
  static \u0275fac = function Servicos_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Servicos)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Servicos, selectors: [["app-servicos"]], decls: 84, vars: 15, consts: [[1, "pagina"], [1, "cabecalho-pagina"], [1, "secao"], [1, "resumo-cabecalho"], [1, "painel", "formulario-painel"], [1, "titulo-formulario"], [1, "rotulo-menor"], [3, "ngSubmit", "formGroup"], [1, "campos"], [1, "campo-nome"], ["type", "text", "formControlName", "nome", "placeholder", "Ex.: Grava\xE7\xE3o de voz"], [1, "campo-preco"], ["type", "number", "formControlName", "preco", "placeholder", "0,00", "min", "0", "step", "0.01"], ["type", "text", "formControlName", "tipo_cobranca", "placeholder", "Hora, faixa, di\xE1ria..."], [1, "campo-duracao"], ["type", "number", "formControlName", "duracao_minutos", "placeholder", "Opcional", "min", "1", "step", "1"], [1, "campo-publicacao"], ["type", "checkbox", "formControlName", "publico_na_landing"], [1, "rodape-formulario"], [1, "acoes-formulario"], ["type", "button", 1, "botao-secundario", 3, "disabled"], ["type", "submit", 1, "botao-principal", 3, "disabled"], [1, "mensagem-erro"], [1, "catalogo-servicos"], [1, "titulo-catalogo"], [1, "estado"], [1, "estado", "estado-erro"], [1, "estado", "estado-vazio"], [1, "lista"], ["type", "button", 1, "botao-secundario", 3, "click", "disabled"], ["aria-hidden", "true", 1, "carregador"], ["aria-hidden", "true", 1, "simbolo-estado"], ["type", "button", 1, "botao-secundario", 3, "click"], ["aria-hidden", "true", 1, "simbolo-vazio"], [1, "servico"], [1, "cabecalho-servico"], [1, "numero-servico"], [1, "duracao"], [1, "dados-servico"], [1, "preco-servico"], [1, "acoes-servico"], ["type", "button", 1, "botao-excluir", 3, "click", "disabled"]], template: function Servicos_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "header", 1)(2, "div")(3, "p", 2);
      \u0275\u0275text(4, "CAT\xC1LOGO DE TRABALHO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "Servi\xE7os");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, " O que o est\xFAdio oferece, quanto custa e como \xE9 cobrado. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 3)(10, "strong");
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275conditionalCreate(13, Servicos_Conditional_13_Template, 1, 0)(14, Servicos_Conditional_14_Template, 1, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "section", 4)(16, "header", 5)(17, "div")(18, "p", 6);
      \u0275\u0275conditionalCreate(19, Servicos_Conditional_19_Template, 1, 0)(20, Servicos_Conditional_20_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "h2");
      \u0275\u0275conditionalCreate(22, Servicos_Conditional_22_Template, 1, 0)(23, Servicos_Conditional_23_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "p");
      \u0275\u0275text(25, " A forma de cobran\xE7a \xE9 livre: hora, faixa, di\xE1ria ou o que funcionar para o est\xFAdio. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "form", 7);
      \u0275\u0275listener("ngSubmit", function Servicos_Template_form_ngSubmit_26_listener() {
        return ctx.salvar();
      });
      \u0275\u0275elementStart(27, "div", 8)(28, "label", 9)(29, "span");
      \u0275\u0275text(30, "Nome");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 10);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(32, Servicos_Conditional_32_Template, 2, 0, "small");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "label")(34, "span");
      \u0275\u0275text(35, "Pre\xE7o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 11)(37, "span");
      \u0275\u0275text(38, "R$");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "input", 12);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(40, Servicos_Conditional_40_Template, 2, 0, "small");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "label")(42, "span");
      \u0275\u0275text(43, "Forma de cobran\xE7a");
      \u0275\u0275elementEnd();
      \u0275\u0275element(44, "input", 13);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(45, Servicos_Conditional_45_Template, 2, 0, "small");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "label")(47, "span");
      \u0275\u0275text(48, "Dura\xE7\xE3o sugerida");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 14);
      \u0275\u0275element(50, "input", 15);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(51, "span");
      \u0275\u0275text(52, "min");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(53, Servicos_Conditional_53_Template, 2, 0, "small");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "label", 16);
      \u0275\u0275element(55, "input", 17);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(56, "span")(57, "strong");
      \u0275\u0275text(58, "Exibir na p\xE1gina p\xFAblica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "small");
      \u0275\u0275text(60, " O nome, o pre\xE7o e a forma de cobran\xE7a ficar\xE3o vis\xEDveis na landing do est\xFAdio. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "div", 18)(62, "p");
      \u0275\u0275text(63, " A dura\xE7\xE3o \xE9 apenas uma refer\xEAncia para o agendamento e pode ficar vazia. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 19);
      \u0275\u0275conditionalCreate(65, Servicos_Conditional_65_Template, 2, 1, "button", 20);
      \u0275\u0275elementStart(66, "button", 21);
      \u0275\u0275conditionalCreate(67, Servicos_Conditional_67_Template, 1, 0)(68, Servicos_Conditional_68_Template, 1, 0)(69, Servicos_Conditional_69_Template, 1, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(70, Servicos_Conditional_70_Template, 2, 1, "p", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "section", 23)(72, "header", 24)(73, "div")(74, "p", 6);
      \u0275\u0275text(75, "TABELA DO EST\xDADIO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "h2");
      \u0275\u0275text(77, "Servi\xE7os dispon\xEDveis");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "span");
      \u0275\u0275text(79);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(80, Servicos_Conditional_80_Template, 4, 0, "div", 25)(81, Servicos_Conditional_81_Template, 9, 1, "div", 26)(82, Servicos_Conditional_82_Template, 7, 0, "div", 27)(83, Servicos_Conditional_83_Template, 3, 0, "div", 28);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.dadosServicos.servicos().length);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.dadosServicos.servicos().length === 1 ? 13 : 14);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.servicoEditandoId() ? 19 : 20);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.servicoEditandoId() ? 22 : 23);
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.formulario);
      \u0275\u0275advance(5);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.formulario.controls.nome.touched && ctx.formulario.controls.nome.invalid ? 32 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.formulario.controls.preco.touched && ctx.formulario.controls.preco.invalid ? 40 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.formulario.controls.tipo_cobranca.touched && ctx.formulario.controls.tipo_cobranca.invalid ? 45 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.formulario.controls.duracao_minutos.touched && ctx.formulario.controls.duracao_minutos.invalid ? 53 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275control();
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.servicoEditandoId() ? 65 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.salvando());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.salvando() ? 67 : ctx.servicoEditandoId() ? 68 : 69);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.erroFormulario() ? 70 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.dadosServicos.servicos().length);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dadosServicos.carregando() ? 80 : ctx.dadosServicos.erro() ? 81 : ctx.dadosServicos.servicos().length === 0 ? 82 : 83);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: ['@charset "UTF-8";\n\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  color: var(--text);\n}\n.pagina[_ngcontent-%COMP%] {\n  width: min(78rem, 100% - 2rem);\n  margin: 0 auto;\n  padding: 2.5rem 0 5rem;\n}\n.cabecalho-pagina[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n.cabecalho-pagina[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0.45rem;\n  font-size: clamp(2.7rem, 7vw, 5.4rem);\n  font-weight: 760;\n  line-height: 0.88;\n  letter-spacing: -0.07em;\n}\n.cabecalho-pagina[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.secao) {\n  max-width: 40rem;\n  margin: 0;\n  color: var(--text-soft);\n  line-height: 1.5;\n}\n.secao[_ngcontent-%COMP%], \n.rotulo-menor[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--primary);\n  font-size: 0.65rem;\n  font-weight: 760;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.resumo-cabecalho[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 9rem;\n  gap: 0.15rem;\n  padding: 0 0 0.3rem 1.2rem;\n  border-left: 0.0625rem solid var(--border);\n}\n.resumo-cabecalho[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  line-height: 1;\n}\n.resumo-cabecalho[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.62rem;\n}\nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%] {\n  font: inherit;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.52;\n}\n.painel[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-grande);\n  box-shadow: var(--shadow-soft);\n}\n.formulario-painel[_ngcontent-%COMP%] {\n  padding: clamp(1rem, 3vw, 1.4rem);\n  border-top: 0.22rem solid var(--primary);\n}\n.titulo-formulario[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n  margin-bottom: 1.15rem;\n}\n.titulo-formulario[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  font-size: 1.2rem;\n  letter-spacing: -0.025em;\n}\n.titulo-formulario[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 32rem;\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 0.67rem;\n  line-height: 1.45;\n  text-align: right;\n}\n.campos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.35fr 0.8fr 1fr 0.72fr;\n  gap: 0.75rem;\n}\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: 0.4rem;\n}\nlabel[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 720;\n}\nlabel[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-size: 0.63rem;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 2.7rem;\n  box-sizing: border-box;\n  padding: 0.65rem 0.72rem;\n  background: #ffffff;\n  color: var(--text);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n  outline: none;\n  transition: border-color 130ms ease, box-shadow 130ms ease;\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  color: color-mix(in srgb, var(--text-muted) 68%, transparent);\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 0.18rem color-mix(in srgb, var(--primary) 13%, transparent);\n}\n.campo-preco[_ngcontent-%COMP%], \n.campo-duracao[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: center;\n  overflow: hidden;\n  background: #ffffff;\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n}\n.campo-preco[_ngcontent-%COMP%]:focus-within, \n.campo-duracao[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 0.18rem color-mix(in srgb, var(--primary) 13%, transparent);\n}\n.campo-preco[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.campo-duracao[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding-left: 0.7rem;\n  color: var(--text-muted);\n  font-size: 0.7rem;\n  font-weight: 720;\n}\n.campo-preco[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.campo-duracao[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-width: 0;\n  border: 0;\n}\n.campo-preco[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.campo-duracao[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.campo-duracao[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) auto;\n}\n.campo-duracao[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding-right: 0.7rem;\n  padding-left: 0;\n}\n.rodape-formulario[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: 0.9rem;\n  padding-top: 0.9rem;\n  border-top: 0.0625rem solid var(--border);\n}\n.rodape-formulario[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 32rem;\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 0.6rem;\n  line-height: 1.45;\n}\n.acoes-formulario[_ngcontent-%COMP%], \n.acoes-servico[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.botao-principal[_ngcontent-%COMP%], \n.botao-secundario[_ngcontent-%COMP%], \n.botao-excluir[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 2.45rem;\n  align-items: center;\n  justify-content: center;\n  padding: 0.52rem 0.82rem;\n  border-radius: var(--radius);\n  font-size: 0.7rem;\n  font-weight: 740;\n}\n.botao-principal[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #ffffff;\n  border: 0.0625rem solid var(--primary);\n  box-shadow: 0 0.5rem 1.25rem color-mix(in srgb, var(--primary) 18%, transparent);\n}\n.botao-principal[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.92);\n}\n.campo-publicacao[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n  padding: 1rem;\n  background: var(--app-surface-muted);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: var(--radius-medium);\n}\n.campo-publicacao[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n  flex: 0 0 auto;\n  margin-top: 0.15rem;\n  accent-color: var(--studio-brand);\n}\n.campo-publicacao[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.2rem;\n}\n.campo-publicacao[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.campo-publicacao[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  line-height: 1.45;\n}\n.botao-secundario[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--text);\n  border: 0.0625rem solid var(--border);\n}\n.botao-secundario[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--surface-muted);\n}\n.botao-excluir[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--danger);\n  border: 0.0625rem solid transparent;\n}\n.botao-excluir[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--danger) 7%, transparent);\n  border-color: color-mix(in srgb, var(--danger) 28%, transparent);\n}\n.mensagem-erro[_ngcontent-%COMP%] {\n  margin: 0.85rem 0 0;\n  padding: 0.7rem 0.8rem;\n  background: color-mix(in srgb, var(--danger) 7%, var(--surface));\n  color: var(--danger);\n  border: 0.0625rem solid color-mix(in srgb, var(--danger) 28%, var(--border));\n  border-radius: var(--radius);\n  font-size: 0.7rem;\n}\n.catalogo-servicos[_ngcontent-%COMP%] {\n  margin-top: clamp(3rem, 6vw, 5rem);\n}\n.titulo-catalogo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.15rem;\n  padding-bottom: 1rem;\n  border-bottom: 0.0625rem solid var(--border);\n}\n.titulo-catalogo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0;\n  font-size: clamp(1.65rem, 4vw, 2.65rem);\n  letter-spacing: -0.05em;\n}\n.titulo-catalogo[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 2.25rem;\n  min-height: 2.1rem;\n  place-items: center;\n  padding: 0.2rem 0.55rem;\n  background: color-mix(in srgb, var(--primary) 10%, var(--surface));\n  color: var(--text);\n  border: 0.0625rem solid color-mix(in srgb, var(--primary) 34%, var(--border));\n  border-radius: 0;\n  font-size: 0.68rem;\n  font-weight: 780;\n}\n.lista[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n.servico[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-width: 0;\n  min-height: 14rem;\n  grid-template-rows: auto 1fr auto;\n  overflow: hidden;\n  background: var(--surface);\n  border: 0.0625rem solid var(--border);\n  border-top: 0.22rem solid var(--primary);\n  border-radius: 0;\n  box-shadow: none;\n  transition: border-color 150ms ease, background-color 150ms ease;\n}\n.servico[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 0.9rem;\n  right: 1rem;\n  width: 2.8rem;\n  height: 0.0625rem;\n  background: var(--primary);\n  content: "";\n  opacity: 0.45;\n}\n.servico[_ngcontent-%COMP%]:hover {\n  border-color: color-mix(in srgb, var(--primary) 54%, var(--border));\n  border-top-color: var(--primary);\n  background: color-mix(in srgb, var(--primary) 3%, var(--surface));\n}\n.cabecalho-servico[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  min-height: 3rem;\n  padding: 0.75rem 4.5rem 0.75rem 1rem;\n  border-bottom: 0.0625rem solid var(--border);\n}\n.numero-servico[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.6rem;\n  font-weight: 780;\n  letter-spacing: 0.1em;\n}\n.numero-servico[_ngcontent-%COMP%]::before {\n  content: "SERVI\\c7O / ";\n  opacity: 0.62;\n}\n.duracao[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.42rem;\n  background: var(--surface-muted);\n  color: var(--text-muted);\n  border: 0.0625rem solid var(--border);\n  border-radius: 0;\n  font-size: 0.57rem;\n  font-weight: 720;\n  white-space: nowrap;\n}\n.dados-servico[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: end;\n  gap: 1.5rem;\n  padding: clamp(1.2rem, 3vw, 1.75rem) 1rem;\n}\n.dados-servico[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  max-width: 20ch;\n  margin: 0;\n  font-size: clamp(1.25rem, 2.8vw, 1.8rem);\n  font-weight: 760;\n  line-height: 1.02;\n  letter-spacing: -0.05em;\n}\n.preco-servico[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 8.5rem;\n  justify-items: end;\n  gap: 0.25rem;\n  text-align: right;\n}\n.preco-servico[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: clamp(1.45rem, 3vw, 2.1rem);\n  font-weight: 770;\n  line-height: 0.95;\n  letter-spacing: -0.06em;\n  font-variant-numeric: tabular-nums;\n}\n.preco-servico[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.62rem;\n}\n.acoes-servico[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.75rem;\n  background: var(--surface-muted);\n  border-top: 0.0625rem solid var(--border);\n}\n.acoes-servico[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 2.1rem;\n  padding: 0.36rem 0.62rem;\n  border-radius: 0;\n  font-size: 0.6rem;\n}\n.estado[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 20rem;\n  place-content: center;\n  justify-items: center;\n  padding: 2rem;\n  background: var(--surface);\n  color: var(--text-muted);\n  border: 0.0625rem solid var(--border);\n  text-align: center;\n}\n.estado[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 0.35rem;\n  color: var(--text);\n}\n.estado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 30rem;\n  margin: 0 0 1rem;\n  font-size: 0.75rem;\n  line-height: 1.5;\n}\n.simbolo-vazio[_ngcontent-%COMP%], \n.simbolo-estado[_ngcontent-%COMP%] {\n  display: grid;\n  width: 4rem;\n  height: 4rem;\n  place-items: center;\n  background: var(--primary);\n  color: #ffffff;\n  border-radius: 0.35rem;\n  box-shadow: 0.7rem 0.7rem 0 color-mix(in srgb, var(--primary) 10%, var(--surface-muted));\n  font-size: 0.85rem;\n  font-weight: 780;\n}\n.simbolo-estado[_ngcontent-%COMP%] {\n  background: var(--danger);\n  box-shadow: none;\n  font-size: 1.4rem;\n}\n.carregador[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  box-sizing: border-box;\n  margin-bottom: 0.8rem;\n  border: 0.14rem solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 999rem;\n  animation: _ngcontent-%COMP%_girar 650ms linear infinite;\n}\n@keyframes _ngcontent-%COMP%_girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .carregador[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .servico[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n@media (max-width: 66rem) {\n  .campos[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .lista[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 44rem) {\n  .pagina[_ngcontent-%COMP%] {\n    padding-top: 1.5rem;\n  }\n  .cabecalho-pagina[_ngcontent-%COMP%], \n   .titulo-formulario[_ngcontent-%COMP%], \n   .rodape-formulario[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .resumo-cabecalho[_ngcontent-%COMP%] {\n    padding: 0.75rem 0 0;\n    border-top: 0.0625rem solid var(--border);\n    border-left: 0;\n  }\n  .titulo-formulario[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    max-width: none;\n    text-align: left;\n  }\n  .campos[_ngcontent-%COMP%], \n   .lista[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .rodape-formulario[_ngcontent-%COMP%], \n   .acoes-formulario[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .acoes-formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .servico[_ngcontent-%COMP%] {\n    min-height: 14rem;\n  }\n}\n@media (max-width: 28rem) {\n  .dados-servico[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    align-items: start;\n    gap: 1rem;\n  }\n  .preco-servico[_ngcontent-%COMP%] {\n    min-width: 0;\n    justify-items: start;\n    text-align: left;\n  }\n  .acoes-formulario[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .acoes-formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Servicos, [{
    type: Component,
    args: [{ selector: "app-servicos", standalone: true, imports: [ReactiveFormsModule], template: '<main class="pagina">\n  <header class="cabecalho-pagina">\n    <div>\n      <p class="secao">CAT\xC1LOGO DE TRABALHO</p>\n      <h1>Servi\xE7os</h1>\n      <p>\n        O que o est\xFAdio oferece, quanto custa e como \xE9 cobrado.\n      </p>\n    </div>\n\n    <div class="resumo-cabecalho">\n      <strong>{{ dadosServicos.servicos().length }}</strong>\n      <span>\n        @if (dadosServicos.servicos().length === 1) {\n          servi\xE7o dispon\xEDvel\n        } @else {\n          servi\xE7os dispon\xEDveis\n        }\n      </span>\n    </div>\n  </header>\n\n  <section class="painel formulario-painel">\n    <header class="titulo-formulario">\n      <div>\n        <p class="rotulo-menor">\n          @if (servicoEditandoId()) {\n            EDITANDO SERVI\xC7O\n          } @else {\n            NOVO SERVI\xC7O\n          }\n        </p>\n\n        <h2>\n          @if (servicoEditandoId()) {\n            Ajustar servi\xE7o\n          } @else {\n            Adicionar ao cat\xE1logo\n          }\n        </h2>\n      </div>\n\n      <p>\n        A forma de cobran\xE7a \xE9 livre: hora, faixa, di\xE1ria ou o que\n        funcionar para o est\xFAdio.\n      </p>\n    </header>\n\n    <form [formGroup]="formulario" (ngSubmit)="salvar()">\n      <div class="campos">\n        <label class="campo-nome">\n          <span>Nome</span>\n\n          <input\n            type="text"\n            formControlName="nome"\n            placeholder="Ex.: Grava\xE7\xE3o de voz"\n          />\n\n          @if (\n            formulario.controls.nome.touched &&\n            formulario.controls.nome.invalid\n          ) {\n            <small>Informe o nome do servi\xE7o.</small>\n          }\n        </label>\n\n        <label>\n          <span>Pre\xE7o</span>\n\n          <div class="campo-preco">\n            <span>R$</span>\n\n            <input\n              type="number"\n              formControlName="preco"\n              placeholder="0,00"\n              min="0"\n              step="0.01"\n            />\n          </div>\n\n          @if (\n            formulario.controls.preco.touched &&\n            formulario.controls.preco.invalid\n          ) {\n            <small>Informe um pre\xE7o v\xE1lido.</small>\n          }\n        </label>\n\n        <label>\n          <span>Forma de cobran\xE7a</span>\n\n          <input\n            type="text"\n            formControlName="tipo_cobranca"\n            placeholder="Hora, faixa, di\xE1ria..."\n          />\n\n          @if (\n            formulario.controls.tipo_cobranca.touched &&\n            formulario.controls.tipo_cobranca.invalid\n          ) {\n            <small>Informe o tipo de cobran\xE7a.</small>\n          }\n        </label>\n\n        <label>\n          <span>Dura\xE7\xE3o sugerida</span>\n\n          <div class="campo-duracao">\n            <input\n              type="number"\n              formControlName="duracao_minutos"\n              placeholder="Opcional"\n              min="1"\n              step="1"\n            />\n\n            <span>min</span>\n          </div>\n\n          @if (\n            formulario.controls.duracao_minutos.touched &&\n            formulario.controls.duracao_minutos.invalid\n          ) {\n            <small>A dura\xE7\xE3o deve ser maior que zero.</small>\n          }\n        </label>\n\n      </div>\n            <label class="campo-publicacao">\n        <input\n          type="checkbox"\n          formControlName="publico_na_landing"\n        />\n\n        <span>\n          <strong>Exibir na p\xE1gina p\xFAblica</strong>\n\n          <small>\n            O nome, o pre\xE7o e a forma de cobran\xE7a ficar\xE3o vis\xEDveis\n            na landing do est\xFAdio.\n          </small>\n        </span>\n      </label>\n\n      <div class="rodape-formulario">\n        <p>\n          A dura\xE7\xE3o \xE9 apenas uma refer\xEAncia para o agendamento e\n          pode ficar vazia.\n        </p>\n\n        <div class="acoes-formulario">\n          @if (servicoEditandoId()) {\n            <button\n              type="button"\n              class="botao-secundario"\n              [disabled]="salvando()"\n              (click)="cancelarEdicao()"\n            >\n              Cancelar\n            </button>\n          }\n\n          <button\n            type="submit"\n            class="botao-principal"\n            [disabled]="salvando()"\n          >\n            @if (salvando()) {\n              Salvando...\n            } @else if (servicoEditandoId()) {\n              Salvar altera\xE7\xF5es\n            } @else {\n              Adicionar servi\xE7o\n            }\n          </button>\n        </div>\n      </div>\n\n      @if (erroFormulario()) {\n        <p class="mensagem-erro">{{ erroFormulario() }}</p>\n      }\n    </form>\n  </section>\n\n  <section class="catalogo-servicos">\n    <header class="titulo-catalogo">\n      <div>\n        <p class="rotulo-menor">TABELA DO EST\xDADIO</p>\n        <h2>Servi\xE7os dispon\xEDveis</h2>\n      </div>\n\n      <span>{{ dadosServicos.servicos().length }}</span>\n    </header>\n\n    @if (dadosServicos.carregando()) {\n      <div class="estado">\n        <span class="carregador" aria-hidden="true"></span>\n        <p>Carregando servi\xE7os...</p>\n      </div>\n    } @else if (dadosServicos.erro()) {\n      <div class="estado estado-erro">\n        <span class="simbolo-estado" aria-hidden="true">!</span>\n        <h3>N\xE3o foi poss\xEDvel abrir os servi\xE7os</h3>\n        <p>{{ dadosServicos.erro() }}</p>\n\n        <button\n          type="button"\n          class="botao-secundario"\n          (click)="dadosServicos.listar()"\n        >\n          Tentar novamente\n        </button>\n      </div>\n    } @else if (dadosServicos.servicos().length === 0) {\n      <div class="estado estado-vazio">\n        <span class="simbolo-vazio" aria-hidden="true">R$</span>\n        <h3>O cat\xE1logo ainda est\xE1 vazio.</h3>\n        <p>\n          Cadastre o primeiro servi\xE7o para us\xE1-lo nos agendamentos\n          e acertos.\n        </p>\n      </div>\n    } @else {\n      <div class="lista">\n        @for (\n          servico of dadosServicos.servicos();\n          track servico.id;\n          let indice = $index\n        ) {\n          <article class="servico">\n            <header class="cabecalho-servico">\n              <span class="numero-servico">\n                {{ indice + 1 }}\n              </span>\n\n              <span class="duracao">\n                {{ formatarDuracao(servico.duracao_minutos) }}\n              </span>\n            </header>\n\n            <div class="dados-servico">\n              <h3>{{ servico.nome }}</h3>\n\n              <div class="preco-servico">\n                <strong>{{ formatarPreco(servico.preco) }}</strong>\n                <span>/ {{ servico.tipo_cobranca }}</span>\n              </div>\n            </div>\n\n            <footer class="acoes-servico">\n              <button\n                type="button"\n                class="botao-secundario"\n                (click)="editar(servico)"\n              >\n                Editar\n              </button>\n\n              <button\n                type="button"\n                class="botao-excluir"\n                [disabled]="excluindoId() === servico.id"\n                (click)="excluir(servico)"\n              >\n                @if (excluindoId() === servico.id) {\n                  Excluindo...\n                } @else {\n                  Excluir\n                }\n              </button>\n            </footer>\n          </article>\n        }\n      </div>\n    }\n  </section>\n</main>\n', styles: ['@charset "UTF-8";\n\n/* apps/studio-dash/src/app/paginas/servicos/servicos.scss */\n:host {\n  display: block;\n  min-height: 100%;\n  color: var(--text);\n}\n.pagina {\n  width: min(78rem, 100% - 2rem);\n  margin: 0 auto;\n  padding: 2.5rem 0 5rem;\n}\n.cabecalho-pagina {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n.cabecalho-pagina h1 {\n  margin: 0.35rem 0 0.45rem;\n  font-size: clamp(2.7rem, 7vw, 5.4rem);\n  font-weight: 760;\n  line-height: 0.88;\n  letter-spacing: -0.07em;\n}\n.cabecalho-pagina p:not(.secao) {\n  max-width: 40rem;\n  margin: 0;\n  color: var(--text-soft);\n  line-height: 1.5;\n}\n.secao,\n.rotulo-menor {\n  margin: 0;\n  color: var(--primary);\n  font-size: 0.65rem;\n  font-weight: 760;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.resumo-cabecalho {\n  display: grid;\n  min-width: 9rem;\n  gap: 0.15rem;\n  padding: 0 0 0.3rem 1.2rem;\n  border-left: 0.0625rem solid var(--border);\n}\n.resumo-cabecalho strong {\n  font-size: 1.7rem;\n  line-height: 1;\n}\n.resumo-cabecalho span {\n  color: var(--text-muted);\n  font-size: 0.62rem;\n}\nbutton,\ninput {\n  font: inherit;\n}\nbutton {\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\nbutton:disabled {\n  cursor: wait;\n  opacity: 0.52;\n}\n.painel {\n  background: var(--surface);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-grande);\n  box-shadow: var(--shadow-soft);\n}\n.formulario-painel {\n  padding: clamp(1rem, 3vw, 1.4rem);\n  border-top: 0.22rem solid var(--primary);\n}\n.titulo-formulario {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n  margin-bottom: 1.15rem;\n}\n.titulo-formulario h2 {\n  margin: 0.25rem 0 0;\n  font-size: 1.2rem;\n  letter-spacing: -0.025em;\n}\n.titulo-formulario > p {\n  max-width: 32rem;\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 0.67rem;\n  line-height: 1.45;\n  text-align: right;\n}\n.campos {\n  display: grid;\n  grid-template-columns: 1.35fr 0.8fr 1fr 0.72fr;\n  gap: 0.75rem;\n}\nlabel {\n  display: grid;\n  align-content: start;\n  gap: 0.4rem;\n}\nlabel > span {\n  font-size: 0.72rem;\n  font-weight: 720;\n}\nlabel > small {\n  color: var(--danger);\n  font-size: 0.63rem;\n}\ninput {\n  width: 100%;\n  min-height: 2.7rem;\n  box-sizing: border-box;\n  padding: 0.65rem 0.72rem;\n  background: #ffffff;\n  color: var(--text);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n  outline: none;\n  transition: border-color 130ms ease, box-shadow 130ms ease;\n}\ninput::placeholder {\n  color: color-mix(in srgb, var(--text-muted) 68%, transparent);\n}\ninput:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 0.18rem color-mix(in srgb, var(--primary) 13%, transparent);\n}\n.campo-preco,\n.campo-duracao {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: center;\n  overflow: hidden;\n  background: #ffffff;\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n}\n.campo-preco:focus-within,\n.campo-duracao:focus-within {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 0.18rem color-mix(in srgb, var(--primary) 13%, transparent);\n}\n.campo-preco > span,\n.campo-duracao > span {\n  padding-left: 0.7rem;\n  color: var(--text-muted);\n  font-size: 0.7rem;\n  font-weight: 720;\n}\n.campo-preco input,\n.campo-duracao input {\n  min-width: 0;\n  border: 0;\n}\n.campo-preco input:focus,\n.campo-duracao input:focus {\n  box-shadow: none;\n}\n.campo-duracao {\n  grid-template-columns: minmax(0, 1fr) auto;\n}\n.campo-duracao > span {\n  padding-right: 0.7rem;\n  padding-left: 0;\n}\n.rodape-formulario {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: 0.9rem;\n  padding-top: 0.9rem;\n  border-top: 0.0625rem solid var(--border);\n}\n.rodape-formulario > p {\n  max-width: 32rem;\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 0.6rem;\n  line-height: 1.45;\n}\n.acoes-formulario,\n.acoes-servico {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.botao-principal,\n.botao-secundario,\n.botao-excluir {\n  display: inline-flex;\n  min-height: 2.45rem;\n  align-items: center;\n  justify-content: center;\n  padding: 0.52rem 0.82rem;\n  border-radius: var(--radius);\n  font-size: 0.7rem;\n  font-weight: 740;\n}\n.botao-principal {\n  background: var(--primary);\n  color: #ffffff;\n  border: 0.0625rem solid var(--primary);\n  box-shadow: 0 0.5rem 1.25rem color-mix(in srgb, var(--primary) 18%, transparent);\n}\n.botao-principal:hover:not(:disabled) {\n  filter: brightness(0.92);\n}\n.campo-publicacao {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n  padding: 1rem;\n  background: var(--app-surface-muted);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: var(--radius-medium);\n}\n.campo-publicacao input {\n  width: 1.1rem;\n  height: 1.1rem;\n  flex: 0 0 auto;\n  margin-top: 0.15rem;\n  accent-color: var(--studio-brand);\n}\n.campo-publicacao > span {\n  display: grid;\n  gap: 0.2rem;\n}\n.campo-publicacao strong {\n  font-size: 0.85rem;\n}\n.campo-publicacao small {\n  color: var(--app-text-muted);\n  line-height: 1.45;\n}\n.botao-secundario {\n  background: transparent;\n  color: var(--text);\n  border: 0.0625rem solid var(--border);\n}\n.botao-secundario:hover:not(:disabled) {\n  background: var(--surface-muted);\n}\n.botao-excluir {\n  background: transparent;\n  color: var(--danger);\n  border: 0.0625rem solid transparent;\n}\n.botao-excluir:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--danger) 7%, transparent);\n  border-color: color-mix(in srgb, var(--danger) 28%, transparent);\n}\n.mensagem-erro {\n  margin: 0.85rem 0 0;\n  padding: 0.7rem 0.8rem;\n  background: color-mix(in srgb, var(--danger) 7%, var(--surface));\n  color: var(--danger);\n  border: 0.0625rem solid color-mix(in srgb, var(--danger) 28%, var(--border));\n  border-radius: var(--radius);\n  font-size: 0.7rem;\n}\n.catalogo-servicos {\n  margin-top: clamp(3rem, 6vw, 5rem);\n}\n.titulo-catalogo {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.15rem;\n  padding-bottom: 1rem;\n  border-bottom: 0.0625rem solid var(--border);\n}\n.titulo-catalogo h2 {\n  margin: 0.3rem 0 0;\n  font-size: clamp(1.65rem, 4vw, 2.65rem);\n  letter-spacing: -0.05em;\n}\n.titulo-catalogo > span {\n  display: grid;\n  min-width: 2.25rem;\n  min-height: 2.1rem;\n  place-items: center;\n  padding: 0.2rem 0.55rem;\n  background: color-mix(in srgb, var(--primary) 10%, var(--surface));\n  color: var(--text);\n  border: 0.0625rem solid color-mix(in srgb, var(--primary) 34%, var(--border));\n  border-radius: 0;\n  font-size: 0.68rem;\n  font-weight: 780;\n}\n.lista {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n.servico {\n  position: relative;\n  display: grid;\n  min-width: 0;\n  min-height: 14rem;\n  grid-template-rows: auto 1fr auto;\n  overflow: hidden;\n  background: var(--surface);\n  border: 0.0625rem solid var(--border);\n  border-top: 0.22rem solid var(--primary);\n  border-radius: 0;\n  box-shadow: none;\n  transition: border-color 150ms ease, background-color 150ms ease;\n}\n.servico::before {\n  position: absolute;\n  top: 0.9rem;\n  right: 1rem;\n  width: 2.8rem;\n  height: 0.0625rem;\n  background: var(--primary);\n  content: "";\n  opacity: 0.45;\n}\n.servico:hover {\n  border-color: color-mix(in srgb, var(--primary) 54%, var(--border));\n  border-top-color: var(--primary);\n  background: color-mix(in srgb, var(--primary) 3%, var(--surface));\n}\n.cabecalho-servico {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  min-height: 3rem;\n  padding: 0.75rem 4.5rem 0.75rem 1rem;\n  border-bottom: 0.0625rem solid var(--border);\n}\n.numero-servico {\n  color: var(--primary);\n  font-family: var(--font-mono, monospace);\n  font-size: 0.6rem;\n  font-weight: 780;\n  letter-spacing: 0.1em;\n}\n.numero-servico::before {\n  content: "SERVI\\c7O / ";\n  opacity: 0.62;\n}\n.duracao {\n  padding: 0.25rem 0.42rem;\n  background: var(--surface-muted);\n  color: var(--text-muted);\n  border: 0.0625rem solid var(--border);\n  border-radius: 0;\n  font-size: 0.57rem;\n  font-weight: 720;\n  white-space: nowrap;\n}\n.dados-servico {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: end;\n  gap: 1.5rem;\n  padding: clamp(1.2rem, 3vw, 1.75rem) 1rem;\n}\n.dados-servico h3 {\n  max-width: 20ch;\n  margin: 0;\n  font-size: clamp(1.25rem, 2.8vw, 1.8rem);\n  font-weight: 760;\n  line-height: 1.02;\n  letter-spacing: -0.05em;\n}\n.preco-servico {\n  display: grid;\n  min-width: 8.5rem;\n  justify-items: end;\n  gap: 0.25rem;\n  text-align: right;\n}\n.preco-servico strong {\n  color: var(--primary);\n  font-size: clamp(1.45rem, 3vw, 2.1rem);\n  font-weight: 770;\n  line-height: 0.95;\n  letter-spacing: -0.06em;\n  font-variant-numeric: tabular-nums;\n}\n.preco-servico span {\n  color: var(--text-muted);\n  font-size: 0.62rem;\n}\n.acoes-servico {\n  padding: 0.65rem 0.75rem;\n  background: var(--surface-muted);\n  border-top: 0.0625rem solid var(--border);\n}\n.acoes-servico button {\n  min-height: 2.1rem;\n  padding: 0.36rem 0.62rem;\n  border-radius: 0;\n  font-size: 0.6rem;\n}\n.estado {\n  display: grid;\n  min-height: 20rem;\n  place-content: center;\n  justify-items: center;\n  padding: 2rem;\n  background: var(--surface);\n  color: var(--text-muted);\n  border: 0.0625rem solid var(--border);\n  text-align: center;\n}\n.estado h3 {\n  margin: 0.75rem 0 0.35rem;\n  color: var(--text);\n}\n.estado p {\n  max-width: 30rem;\n  margin: 0 0 1rem;\n  font-size: 0.75rem;\n  line-height: 1.5;\n}\n.simbolo-vazio,\n.simbolo-estado {\n  display: grid;\n  width: 4rem;\n  height: 4rem;\n  place-items: center;\n  background: var(--primary);\n  color: #ffffff;\n  border-radius: 0.35rem;\n  box-shadow: 0.7rem 0.7rem 0 color-mix(in srgb, var(--primary) 10%, var(--surface-muted));\n  font-size: 0.85rem;\n  font-weight: 780;\n}\n.simbolo-estado {\n  background: var(--danger);\n  box-shadow: none;\n  font-size: 1.4rem;\n}\n.carregador {\n  width: 1.25rem;\n  height: 1.25rem;\n  box-sizing: border-box;\n  margin-bottom: 0.8rem;\n  border: 0.14rem solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 999rem;\n  animation: girar 650ms linear infinite;\n}\n@keyframes girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .carregador {\n    animation: none;\n  }\n  .servico {\n    transition: none;\n  }\n}\n@media (max-width: 66rem) {\n  .campos {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .lista {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 44rem) {\n  .pagina {\n    padding-top: 1.5rem;\n  }\n  .cabecalho-pagina,\n  .titulo-formulario,\n  .rodape-formulario {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .resumo-cabecalho {\n    padding: 0.75rem 0 0;\n    border-top: 0.0625rem solid var(--border);\n    border-left: 0;\n  }\n  .titulo-formulario > p {\n    max-width: none;\n    text-align: left;\n  }\n  .campos,\n  .lista {\n    grid-template-columns: 1fr;\n  }\n  .rodape-formulario,\n  .acoes-formulario {\n    width: 100%;\n  }\n  .acoes-formulario button {\n    flex: 1;\n  }\n  .servico {\n    min-height: 14rem;\n  }\n}\n@media (max-width: 28rem) {\n  .dados-servico {\n    grid-template-columns: 1fr;\n    align-items: start;\n    gap: 1rem;\n  }\n  .preco-servico {\n    min-width: 0;\n    justify-items: start;\n    text-align: left;\n  }\n  .acoes-formulario {\n    flex-direction: column-reverse;\n  }\n  .acoes-formulario button {\n    width: 100%;\n  }\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Servicos, { className: "Servicos", filePath: "apps/studio-dash/src/app/paginas/servicos/servicos.ts", lineNumber: 27 });
})();
export {
  Servicos
};
