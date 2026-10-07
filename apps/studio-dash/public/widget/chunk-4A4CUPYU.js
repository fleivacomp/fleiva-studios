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
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-OOHEKRNK.js";
import {
  ActivatedRoute,
  Component,
  DadosContatos,
  DadosProjetosArtisticos,
  DestroyRef,
  RouterLink,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵtextInterpolate1
} from "./chunk-IMBOO5ID.js";

// apps/studio-dash/src/app/paginas/contatos/contatos.ts
var _c0 = (a0) => ["/projetos", a0];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.membro.id;
function Contatos_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " pessoa cadastrada ");
  }
}
function Contatos_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " pessoas cadastradas ");
  }
}
function Contatos_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " EDITANDO CONTATO ");
  }
}
function Contatos_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " CADASTRO R\xC1PIDO ");
  }
}
function Contatos_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Ajustar informa\xE7\xF5es ");
  }
}
function Contatos_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Adicionar uma pessoa ");
  }
}
function Contatos_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Informe o nome.");
    \u0275\u0275elementEnd();
  }
}
function Contatos_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Informe um e-mail v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function Contatos_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function Contatos_Conditional_51_Template_button_click_0_listener() {
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
function Contatos_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvando... ");
  }
}
function Contatos_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvar altera\xE7\xF5es ");
  }
}
function Contatos_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Adicionar contato ");
  }
}
function Contatos_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.erroFormulario());
  }
}
function Contatos_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "span", 26);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Carregando contatos...");
    \u0275\u0275elementEnd()();
  }
}
function Contatos_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 27);
    \u0275\u0275text(2, "!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "N\xE3o foi poss\xEDvel abrir os contatos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 28);
    \u0275\u0275listener("click", function Contatos_Conditional_67_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dadosContatos.listar());
    });
    \u0275\u0275text(8, " Tentar novamente ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.dadosContatos.erro());
  }
}
function Contatos_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 29);
    \u0275\u0275text(2, "\uFF0B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Sua rede come\xE7a aqui.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, " Cadastre a primeira pessoa para usar na agenda, nos projetos e nos acertos. ");
    \u0275\u0275elementEnd()();
  }
}
function Contatos_Conditional_69_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Cliente");
    \u0275\u0275elementEnd();
  }
}
function Contatos_Conditional_69_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "Contato");
    \u0275\u0275elementEnd();
  }
}
function Contatos_Conditional_69_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 36)(1, "span");
    \u0275\u0275text(2, "TELEFONE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const contato_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", "tel:" + contato_r5.telefone, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(contato_r5.telefone);
  }
}
function Contatos_Conditional_69_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2, "TELEFONE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 40);
    \u0275\u0275text(4, " N\xE3o informado ");
    \u0275\u0275elementEnd()();
  }
}
function Contatos_Conditional_69_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 36)(1, "span");
    \u0275\u0275text(2, "E-MAIL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const contato_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", "mailto:" + contato_r5.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(contato_r5.email);
  }
}
function Contatos_Conditional_69_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2, "E-MAIL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 40);
    \u0275\u0275text(4, " N\xE3o informado ");
    \u0275\u0275elementEnd()();
  }
}
function Contatos_Conditional_69_For_2_For_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 INATIVO ");
  }
}
function Contatos_Conditional_69_For_2_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 37)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, Contatos_Conditional_69_For_2_For_15_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vinculo_r6 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, vinculo_r6.projeto.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" PROJETO \xB7 ", vinculo_r6.membro.papel, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!vinculo_r6.membro.ativo ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vinculo_r6.projeto.nome);
  }
}
function Contatos_Conditional_69_For_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Excluindo... ");
  }
}
function Contatos_Conditional_69_For_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Excluir ");
  }
}
function Contatos_Conditional_69_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 30)(1, "div", 31)(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, Contatos_Conditional_69_For_2_Conditional_7_Template, 2, 0, "span")(8, Contatos_Conditional_69_For_2_Conditional_8_Template, 2, 0, "span", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 35);
    \u0275\u0275conditionalCreate(10, Contatos_Conditional_69_For_2_Conditional_10_Template, 5, 2, "a", 36)(11, Contatos_Conditional_69_For_2_Conditional_11_Template, 5, 0, "div");
    \u0275\u0275conditionalCreate(12, Contatos_Conditional_69_For_2_Conditional_12_Template, 5, 2, "a", 36)(13, Contatos_Conditional_69_For_2_Conditional_13_Template, 5, 0, "div");
    \u0275\u0275repeaterCreate(14, Contatos_Conditional_69_For_2_For_15_Template, 6, 6, "a", 37, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 25);
    \u0275\u0275listener("click", function Contatos_Conditional_69_For_2_Template_button_click_16_listener() {
      const contato_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.convidarContato(contato_r5));
    });
    \u0275\u0275text(17, " Enviar convite\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 38)(19, "button", 28);
    \u0275\u0275listener("click", function Contatos_Conditional_69_For_2_Template_button_click_19_listener() {
      const contato_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editar(contato_r5));
    });
    \u0275\u0275text(20, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 39);
    \u0275\u0275listener("click", function Contatos_Conditional_69_For_2_Template_button_click_21_listener() {
      const contato_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.excluir(contato_r5));
    });
    \u0275\u0275conditionalCreate(22, Contatos_Conditional_69_For_2_Conditional_22_Template, 1, 0)(23, Contatos_Conditional_69_For_2_Conditional_23_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const contato_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("id", "contato-" + contato_r5.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", contato_r5.nome.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(contato_r5.nome);
    \u0275\u0275advance();
    \u0275\u0275conditional(contato_r5.e_cliente ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(contato_r5.telefone ? 10 : 11);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(contato_r5.email ? 12 : 13);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.vinculosDoContato(contato_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !contato_r5.email);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.excluindoId() === contato_r5.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.excluindoId() === contato_r5.id ? 22 : 23);
  }
}
function Contatos_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, Contatos_Conditional_69_For_2_Template, 24, 9, "article", 30, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.dadosContatos.contatos());
  }
}
var Contatos = class _Contatos {
  dadosContatos = inject(DadosContatos);
  dadosProjetos = inject(DadosProjetosArtisticos);
  construtorFormulario = inject(FormBuilder);
  rota = inject(ActivatedRoute);
  destruirRef = inject(DestroyRef);
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
  contatoEditandoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "contatoEditandoId" }] : (
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
  vinculosPorContato = computed(
    () => {
      const vinculos = /* @__PURE__ */ new Map();
      for (const projeto of this.dadosProjetos.projetos()) {
        for (const membro of projeto.membros) {
          const lista = vinculos.get(membro.contato_id) ?? [];
          lista.push({ projeto, membro });
          vinculos.set(membro.contato_id, lista);
        }
      }
      return vinculos;
    },
    ...ngDevMode ? [{ debugName: "vinculosPorContato" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formulario = this.construtorFormulario.group({
    nome: this.construtorFormulario.nonNullable.control("", [
      Validators.required
    ]),
    telefone: this.construtorFormulario.nonNullable.control(""),
    email: this.construtorFormulario.nonNullable.control("", [
      Validators.email
    ]),
    e_cliente: this.construtorFormulario.nonNullable.control(true)
  });
  ngOnInit() {
    void this.inicializar();
  }
  async inicializar() {
    await Promise.all([
      this.dadosContatos.listar(),
      this.dadosProjetos.listar()
    ]);
    this.rota.queryParamMap.pipe(takeUntilDestroyed(this.destruirRef)).subscribe((parametros) => {
      this.aplicarContextoDaRota(parametros);
    });
  }
  aplicarContextoDaRota(parametros) {
    const contatoId = parametros.get("contato")?.trim();
    const contato = this.dadosContatos.contatos().find((item) => item.id === contatoId);
    if (!contato) {
      return;
    }
    window.setTimeout(() => {
      document.getElementById(`contato-${contato.id}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });
  }
  vinculosDoContato(contatoId) {
    return this.vinculosPorContato().get(contatoId) ?? [];
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
        telefone: this.normalizarTextoOpcional(valor.telefone),
        email: this.normalizarTextoOpcional(valor.email),
        e_cliente: valor.e_cliente
      };
      const contatoId = this.contatoEditandoId();
      if (contatoId) {
        await this.dadosContatos.atualizar(contatoId, dados);
      } else {
        await this.dadosContatos.cadastrar(dados);
      }
      this.limparFormulario();
    } catch (erro) {
      this.erroFormulario.set(this.obterMensagemErro(erro));
    } finally {
      this.salvando.set(false);
    }
  }
  async convidarContato(contato) {
    this.erroFormulario.set(null);
    try {
      await this.dadosContatos.convidar(contato.id);
      await this.dadosContatos.listar();
    } catch (erro) {
      this.erroFormulario.set(this.obterMensagemErro(erro));
    }
  }
  editar(contato) {
    this.contatoEditandoId.set(contato.id);
    this.erroFormulario.set(null);
    this.formulario.setValue({
      nome: contato.nome,
      telefone: contato.telefone ?? "",
      email: contato.email ?? "",
      e_cliente: contato.e_cliente
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  cancelarEdicao() {
    this.limparFormulario();
  }
  async excluir(contato) {
    const confirmou = window.confirm(`Excluir o contato "${contato.nome}"?`);
    if (!confirmou) {
      return;
    }
    this.excluindoId.set(contato.id);
    this.erroFormulario.set(null);
    try {
      await this.dadosContatos.excluir(contato.id);
      if (this.contatoEditandoId() === contato.id) {
        this.limparFormulario();
      }
    } catch (erro) {
      this.erroFormulario.set(this.obterMensagemErro(erro));
    } finally {
      this.excluindoId.set(null);
    }
  }
  limparFormulario() {
    this.contatoEditandoId.set(null);
    this.formulario.reset({
      nome: "",
      telefone: "",
      email: "",
      e_cliente: true
    });
  }
  normalizarTextoOpcional(valor) {
    const texto = valor.trim();
    return texto.length > 0 ? texto : null;
  }
  obterMensagemErro(erro) {
    if (typeof erro === "object" && erro !== null && "message" in erro) {
      return String(erro.message);
    }
    return "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o.";
  }
  static \u0275fac = function Contatos_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Contatos)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Contatos, selectors: [["app-contatos"]], decls: 70, vars: 13, consts: [[1, "pagina"], [1, "cabecalho-pagina"], [1, "secao"], [1, "resumo-cabecalho"], [1, "painel", "formulario-painel"], [1, "titulo-formulario"], [1, "rotulo-menor"], [3, "ngSubmit", "formGroup"], [1, "campos"], ["type", "text", "formControlName", "nome", "placeholder", "Nome da pessoa"], ["type", "tel", "formControlName", "telefone", "placeholder", "WhatsApp ou telefone"], ["type", "email", "formControlName", "email", "placeholder", "nome@exemplo.com"], [1, "rodape-formulario"], [1, "campo-marcacao"], ["type", "checkbox", "formControlName", "e_cliente"], [1, "acoes"], ["type", "button", 1, "secundario", 3, "disabled"], ["type", "submit", 1, "primario", 3, "disabled"], [1, "mensagem-erro"], [1, "catalogo-contatos"], [1, "titulo-lista"], [1, "estado"], [1, "estado", "estado-erro"], [1, "estado", "estado-vazio"], [1, "lista"], ["type", "button", 1, "secundario", 3, "click", "disabled"], ["aria-hidden", "true", 1, "carregador"], ["aria-hidden", "true", 1, "simbolo-estado"], ["type", "button", 1, "secundario", 3, "click"], ["aria-hidden", "true", 1, "avatar-vazio"], [1, "contato"], [1, "identidade-contato"], ["aria-hidden", "true", 1, "avatar-contato"], [1, "nome"], [1, "contato-simples"], [1, "informacoes-contato"], [3, "href"], [3, "routerLink"], [1, "acoes", "acoes-contato"], ["type", "button", 1, "excluir", 3, "click", "disabled"], [1, "informacao-ausente"]], template: function Contatos_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "header", 1)(2, "div")(3, "p", 2);
      \u0275\u0275text(4, "REDE DO EST\xDADIO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "Contatos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, " Artistas, clientes e pessoas que fazem parte do trabalho. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 3)(10, "strong");
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275conditionalCreate(13, Contatos_Conditional_13_Template, 1, 0)(14, Contatos_Conditional_14_Template, 1, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "section", 4)(16, "header", 5)(17, "div")(18, "p", 6);
      \u0275\u0275conditionalCreate(19, Contatos_Conditional_19_Template, 1, 0)(20, Contatos_Conditional_20_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "h2");
      \u0275\u0275conditionalCreate(22, Contatos_Conditional_22_Template, 1, 0)(23, Contatos_Conditional_23_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "p");
      \u0275\u0275text(25, " Somente o nome \xE9 obrigat\xF3rio. Complete o restante quando fizer sentido. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "form", 7);
      \u0275\u0275listener("ngSubmit", function Contatos_Template_form_ngSubmit_26_listener() {
        return ctx.salvar();
      });
      \u0275\u0275elementStart(27, "div", 8)(28, "label")(29, "span");
      \u0275\u0275text(30, "Nome");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 9);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(32, Contatos_Conditional_32_Template, 2, 0, "small");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "label")(34, "span");
      \u0275\u0275text(35, "Telefone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "input", 10);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "label")(38, "span");
      \u0275\u0275text(39, "E-mail");
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "input", 11);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(41, Contatos_Conditional_41_Template, 2, 0, "small");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 12)(43, "label", 13);
      \u0275\u0275element(44, "input", 14);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(45, "span")(46, "strong");
      \u0275\u0275text(47, "Cliente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "small");
      \u0275\u0275text(49, " Permite vincular cobran\xE7as e acertos a este contato. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 15);
      \u0275\u0275conditionalCreate(51, Contatos_Conditional_51_Template, 2, 1, "button", 16);
      \u0275\u0275elementStart(52, "button", 17);
      \u0275\u0275conditionalCreate(53, Contatos_Conditional_53_Template, 1, 0)(54, Contatos_Conditional_54_Template, 1, 0)(55, Contatos_Conditional_55_Template, 1, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(56, Contatos_Conditional_56_Template, 2, 1, "p", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "section", 19)(58, "header", 20)(59, "div")(60, "p", 6);
      \u0275\u0275text(61, "AGENDA DE CONTATOS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "h2");
      \u0275\u0275text(63, "Pessoas do est\xFAdio");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "span");
      \u0275\u0275text(65);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(66, Contatos_Conditional_66_Template, 4, 0, "div", 21)(67, Contatos_Conditional_67_Template, 9, 1, "div", 22)(68, Contatos_Conditional_68_Template, 7, 0, "div", 23)(69, Contatos_Conditional_69_Template, 3, 0, "div", 24);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.dadosContatos.contatos().length);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.dadosContatos.contatos().length === 1 ? 13 : 14);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.contatoEditandoId() ? 19 : 20);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.contatoEditandoId() ? 22 : 23);
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.formulario);
      \u0275\u0275advance(5);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.formulario.controls.nome.touched && ctx.formulario.controls.nome.invalid ? 32 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.formulario.controls.email.touched && ctx.formulario.controls.email.invalid ? 41 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275control();
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.contatoEditandoId() ? 51 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.salvando());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.salvando() ? 53 : ctx.contatoEditandoId() ? 54 : 55);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.erroFormulario() ? 56 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.dadosContatos.contatos().length);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dadosContatos.carregando() ? 66 : ctx.dadosContatos.erro() ? 67 : ctx.dadosContatos.contatos().length === 0 ? 68 : 69);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  color: var(--text);\n}\n.pagina[_ngcontent-%COMP%] {\n  width: min(78rem, 100% - 2rem);\n  margin: 0 auto;\n  padding: 2.5rem 0 5rem;\n}\n.cabecalho-pagina[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n.cabecalho-pagina[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0.45rem;\n  font-size: clamp(2.7rem, 7vw, 5.4rem);\n  font-weight: 760;\n  line-height: 0.88;\n  letter-spacing: -0.07em;\n}\n.cabecalho-pagina[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.secao) {\n  max-width: 38rem;\n  margin: 0;\n  color: var(--text-soft);\n  line-height: 1.5;\n}\n.secao[_ngcontent-%COMP%], \n.rotulo-menor[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--primary);\n  font-size: 0.65rem;\n  font-weight: 760;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.resumo-cabecalho[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 9rem;\n  gap: 0.15rem;\n  padding: 0 0 0.3rem 1.2rem;\n  border-left: 0.0625rem solid var(--border);\n}\n.resumo-cabecalho[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  line-height: 1;\n}\n.resumo-cabecalho[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.62rem;\n}\nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%] {\n  font: inherit;\n}\nbutton[_ngcontent-%COMP%], \na[_ngcontent-%COMP%], \nlabel[_ngcontent-%COMP%] {\n  -webkit-tap-highlight-color: transparent;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.52;\n}\n.painel[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-grande);\n  box-shadow: var(--shadow-soft);\n}\n.formulario-painel[_ngcontent-%COMP%] {\n  padding: clamp(1rem, 3vw, 1.4rem);\n  border-top: 0.22rem solid var(--primary);\n}\n.titulo-formulario[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n  margin-bottom: 1.15rem;\n}\n.titulo-formulario[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  font-size: 1.2rem;\n  letter-spacing: -0.025em;\n}\n.titulo-formulario[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 30rem;\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 0.67rem;\n  line-height: 1.45;\n  text-align: right;\n}\n.campos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.15fr 1fr 1fr;\n  gap: 0.8rem;\n}\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: 0.4rem;\n}\nlabel[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  font-weight: 720;\n}\nlabel[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-size: 0.65rem;\n}\ninput[_ngcontent-%COMP%]:not([type=checkbox]) {\n  width: 100%;\n  min-height: 2.7rem;\n  box-sizing: border-box;\n  padding: 0.65rem 0.72rem;\n  background: #ffffff;\n  color: var(--text);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n  outline: none;\n  transition: border-color 130ms ease, box-shadow 130ms ease;\n}\ninput[_ngcontent-%COMP%]:not([type=checkbox])::placeholder {\n  color: color-mix(in srgb, var(--text-muted) 68%, transparent);\n}\ninput[_ngcontent-%COMP%]:not([type=checkbox]):focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 0.18rem color-mix(in srgb, var(--primary) 13%, transparent);\n}\n.rodape-formulario[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: 0.9rem;\n  padding-top: 0.9rem;\n  border-top: 0.0625rem solid var(--border);\n}\n.campo-marcacao[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  cursor: pointer;\n}\n.campo-marcacao[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 1.05rem;\n  height: 1.05rem;\n  flex: 0 0 auto;\n  accent-color: var(--primary);\n}\n.campo-marcacao[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.12rem;\n}\n.campo-marcacao[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.campo-marcacao[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.58rem;\n  font-weight: 400;\n}\n.acoes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.primario[_ngcontent-%COMP%], \n.secundario[_ngcontent-%COMP%], \n.excluir[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 2.45rem;\n  align-items: center;\n  justify-content: center;\n  padding: 0.52rem 0.82rem;\n  border-radius: var(--radius);\n  font-size: 0.7rem;\n  font-weight: 740;\n}\n.primario[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #ffffff;\n  border: 0.0625rem solid var(--primary);\n  box-shadow: 0 0.5rem 1.25rem color-mix(in srgb, var(--primary) 18%, transparent);\n}\n.primario[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.92);\n}\n.secundario[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--text);\n  border: 0.0625rem solid var(--border);\n}\n.secundario[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--surface-muted);\n}\n.excluir[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--danger);\n  border: 0.0625rem solid transparent;\n}\n.excluir[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--danger) 7%, transparent);\n  border-color: color-mix(in srgb, var(--danger) 28%, transparent);\n}\n.mensagem-erro[_ngcontent-%COMP%] {\n  margin: 0.85rem 0 0;\n  padding: 0.7rem 0.8rem;\n  background: color-mix(in srgb, var(--danger) 7%, var(--surface));\n  color: var(--danger);\n  border: 0.0625rem solid color-mix(in srgb, var(--danger) 28%, var(--border));\n  border-radius: var(--radius);\n  font-size: 0.7rem;\n}\n.catalogo-contatos[_ngcontent-%COMP%] {\n  margin-top: 2.6rem;\n}\n.titulo-lista[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.titulo-lista[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0;\n  font-size: clamp(1.4rem, 4vw, 2rem);\n  letter-spacing: -0.04em;\n}\n.titulo-lista[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 2rem;\n  min-height: 2rem;\n  place-items: center;\n  background: var(--text);\n  color: var(--surface);\n  border-radius: 999rem;\n  font-size: 0.68rem;\n  font-weight: 740;\n}\n.lista[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n.contato[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 1rem;\n  padding: 1rem;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 100% 0,\n      color-mix(in srgb, var(--primary) 8%, transparent),\n      transparent 12rem),\n    var(--surface);\n  border: 0.0625rem solid var(--border);\n  border-radius: 0.35rem;\n  box-shadow: 0 0.35rem 1rem rgba(20, 24, 21, 0.04);\n  transition:\n    transform 150ms ease,\n    border-color 150ms ease,\n    box-shadow 150ms ease;\n}\n.contato[_ngcontent-%COMP%]:hover {\n  border-color: color-mix(in srgb, var(--primary) 38%, var(--border));\n  box-shadow: var(--shadow-soft);\n  transform: translateY(-0.12rem);\n}\n.identidade-contato[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.75rem;\n}\n.avatar-contato[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.85rem;\n  height: 2.85rem;\n  flex: 0 0 auto;\n  place-items: center;\n  background:\n    linear-gradient(\n      145deg,\n      color-mix(in srgb, var(--primary) 68%, #1b1f1b),\n      var(--primary));\n  color: #ffffff;\n  border-radius: 0.28rem;\n  font-size: 1rem;\n  font-weight: 780;\n  text-transform: uppercase;\n  box-shadow: 0.35rem 0.35rem 0 color-mix(in srgb, var(--primary) 10%, var(--surface-muted));\n}\n.nome[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  justify-items: start;\n  gap: 0.3rem;\n}\n.nome[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  max-width: 100%;\n  overflow: hidden;\n  margin: 0;\n  font-size: 0.9rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.nome[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding: 0.22rem 0.42rem;\n  background: color-mix(in srgb, var(--success) 10%, var(--surface));\n  color: var(--success);\n  border: 0.0625rem solid color-mix(in srgb, var(--success) 25%, var(--border));\n  border-radius: 999rem;\n  font-size: 0.54rem;\n  font-weight: 740;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.nome[_ngcontent-%COMP%]   .contato-simples[_ngcontent-%COMP%] {\n  background: var(--surface-muted);\n  color: var(--text-muted);\n  border-color: var(--border);\n}\n.informacoes-contato[_ngcontent-%COMP%] {\n  display: grid;\n  grid-column: 1/-1;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.6rem;\n  padding-top: 0.8rem;\n  border-top: 0.0625rem solid var(--border);\n}\n.informacoes-contato[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.informacoes-contato[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.2rem;\n  padding: 0.55rem 0.65rem;\n  background: color-mix(in srgb, var(--surface-muted) 70%, transparent);\n  border-radius: 0.22rem;\n}\n.informacoes-contato[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: background-color 130ms ease;\n}\n.informacoes-contato[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: var(--surface-muted);\n}\n.informacoes-contato[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   strong[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.informacoes-contato[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.52rem;\n  font-weight: 740;\n  letter-spacing: 0.08em;\n}\n.informacoes-contato[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  font-size: 0.66rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  transition: color 130ms ease;\n}\n.informacoes-contato[_ngcontent-%COMP%]   .informacao-ausente[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.acoes-contato[_ngcontent-%COMP%] {\n  align-self: start;\n}\n.acoes-contato[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 2rem;\n  padding: 0.35rem 0.52rem;\n  font-size: 0.6rem;\n}\n.estado[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 20rem;\n  place-content: center;\n  justify-items: center;\n  padding: 2rem;\n  background: var(--surface);\n  color: var(--text-muted);\n  border: 0.0625rem solid var(--border);\n  text-align: center;\n}\n.estado[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 0.35rem;\n  color: var(--text);\n}\n.estado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 30rem;\n  margin: 0 0 1rem;\n  font-size: 0.75rem;\n  line-height: 1.5;\n}\n.avatar-vazio[_ngcontent-%COMP%], \n.simbolo-estado[_ngcontent-%COMP%] {\n  display: grid;\n  width: 4rem;\n  height: 4rem;\n  place-items: center;\n  background: var(--primary);\n  color: #ffffff;\n  border-radius: 0.35rem;\n  box-shadow: 0.7rem 0.7rem 0 color-mix(in srgb, var(--primary) 10%, var(--surface-muted));\n  font-size: 1.4rem;\n  font-weight: 760;\n}\n.simbolo-estado[_ngcontent-%COMP%] {\n  background: var(--danger);\n  box-shadow: none;\n}\n.carregador[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  box-sizing: border-box;\n  margin-bottom: 0.8rem;\n  border: 0.14rem solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 999rem;\n  animation: _ngcontent-%COMP%_girar 650ms linear infinite;\n}\n@keyframes _ngcontent-%COMP%_girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .carregador[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .contato[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n@media (max-width: 58rem) {\n  .campos[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .campos[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child {\n    grid-column: 1/-1;\n  }\n  .lista[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 44rem) {\n  .pagina[_ngcontent-%COMP%] {\n    padding-top: 1.5rem;\n  }\n  .cabecalho-pagina[_ngcontent-%COMP%], \n   .titulo-formulario[_ngcontent-%COMP%], \n   .rodape-formulario[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .resumo-cabecalho[_ngcontent-%COMP%] {\n    padding: 0.75rem 0 0;\n    border-top: 0.0625rem solid var(--border);\n    border-left: 0;\n  }\n  .titulo-formulario[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    max-width: none;\n    text-align: left;\n  }\n  .campos[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .campos[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child {\n    grid-column: auto;\n  }\n  .rodape-formulario[_ngcontent-%COMP%], \n   .acoes[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n@media (max-width: 30rem) {\n  .contato[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .acoes-contato[_ngcontent-%COMP%] {\n    grid-row: 3;\n    width: 100%;\n  }\n  .acoes-contato[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .informacoes-contato[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Contatos, [{
    type: Component,
    args: [{ selector: "app-contatos", standalone: true, imports: [ReactiveFormsModule, RouterLink], template: `<main class="pagina">
  <header class="cabecalho-pagina">
    <div>
      <p class="secao">REDE DO EST\xDADIO</p>
      <h1>Contatos</h1>
      <p>
        Artistas, clientes e pessoas que fazem parte do trabalho.
      </p>
    </div>

    <div class="resumo-cabecalho">
      <strong>{{ dadosContatos.contatos().length }}</strong>
      <span>
        @if (dadosContatos.contatos().length === 1) {
          pessoa cadastrada
        } @else {
          pessoas cadastradas
        }
      </span>
    </div>
  </header>

  <section class="painel formulario-painel">
    <header class="titulo-formulario">
      <div>
        <p class="rotulo-menor">
          @if (contatoEditandoId()) {
            EDITANDO CONTATO
          } @else {
            CADASTRO R\xC1PIDO
          }
        </p>

        <h2>
          @if (contatoEditandoId()) {
            Ajustar informa\xE7\xF5es
          } @else {
            Adicionar uma pessoa
          }
        </h2>
      </div>

      <p>
        Somente o nome \xE9 obrigat\xF3rio. Complete o restante quando
        fizer sentido.
      </p>
    </header>

    <form [formGroup]="formulario" (ngSubmit)="salvar()">
      <div class="campos">
        <label>
          <span>Nome</span>

          <input
            type="text"
            formControlName="nome"
            placeholder="Nome da pessoa"
          />

          @if (
            formulario.controls.nome.touched &&
            formulario.controls.nome.invalid
          ) {
            <small>Informe o nome.</small>
          }
        </label>

        <label>
          <span>Telefone</span>

          <input
            type="tel"
            formControlName="telefone"
            placeholder="WhatsApp ou telefone"
          />
        </label>

        <label>
          <span>E-mail</span>

          <input
            type="email"
            formControlName="email"
            placeholder="nome@exemplo.com"
          />

          @if (
            formulario.controls.email.touched &&
            formulario.controls.email.invalid
          ) {
            <small>Informe um e-mail v\xE1lido.</small>
          }
        </label>
      </div>

      <div class="rodape-formulario">
        <label class="campo-marcacao">
          <input type="checkbox" formControlName="e_cliente" />

          <span>
            <strong>Cliente</strong>
            <small>
              Permite vincular cobran\xE7as e acertos a este contato.
            </small>
          </span>
        </label>

        <div class="acoes">
          @if (contatoEditandoId()) {
            <button
              type="button"
              class="secundario"
              [disabled]="salvando()"
              (click)="cancelarEdicao()"
            >
              Cancelar
            </button>
          }

          <button
            type="submit"
            class="primario"
            [disabled]="salvando()"
          >
            @if (salvando()) {
              Salvando...
            } @else if (contatoEditandoId()) {
              Salvar altera\xE7\xF5es
            } @else {
              Adicionar contato
            }
          </button>
        </div>
      </div>

      @if (erroFormulario()) {
        <p class="mensagem-erro">{{ erroFormulario() }}</p>
      }
    </form>
  </section>

  <section class="catalogo-contatos">
    <header class="titulo-lista">
      <div>
        <p class="rotulo-menor">AGENDA DE CONTATOS</p>
        <h2>Pessoas do est\xFAdio</h2>
      </div>

      <span>{{ dadosContatos.contatos().length }}</span>
    </header>

    @if (dadosContatos.carregando()) {
      <div class="estado">
        <span class="carregador" aria-hidden="true"></span>
        <p>Carregando contatos...</p>
      </div>
    } @else if (dadosContatos.erro()) {
      <div class="estado estado-erro">
        <span class="simbolo-estado" aria-hidden="true">!</span>
        <h3>N\xE3o foi poss\xEDvel abrir os contatos</h3>
        <p>{{ dadosContatos.erro() }}</p>

        <button
          type="button"
          class="secundario"
          (click)="dadosContatos.listar()"
        >
          Tentar novamente
        </button>
      </div>
    } @else if (dadosContatos.contatos().length === 0) {
      <div class="estado estado-vazio">
        <span class="avatar-vazio" aria-hidden="true">\uFF0B</span>
        <h3>Sua rede come\xE7a aqui.</h3>
        <p>
          Cadastre a primeira pessoa para usar na agenda, nos
          projetos e nos acertos.
        </p>
      </div>
    } @else {
      <div class="lista">
        @for (
          contato of dadosContatos.contatos();
          track contato.id
        ) {
          <article class="contato" [attr.id]="'contato-' + contato.id">
            <div class="identidade-contato">
              <span class="avatar-contato" aria-hidden="true">
                {{ contato.nome.charAt(0) }}
              </span>

              <div class="nome">
                <h3>{{ contato.nome }}</h3>

                @if (contato.e_cliente) {
                  <span>Cliente</span>
                } @else {
                  <span class="contato-simples">Contato</span>
                }
              </div>
            </div>

            <div class="informacoes-contato">
              @if (contato.telefone) {
                <a [href]="'tel:' + contato.telefone">
                  <span>TELEFONE</span>
                  <strong>{{ contato.telefone }}</strong>
                </a>
              } @else {
                <div>
                  <span>TELEFONE</span>
                  <strong class="informacao-ausente">
                    N\xE3o informado
                  </strong>
                </div>
              }

              @if (contato.email) {
                <a [href]="'mailto:' + contato.email">
                  <span>E-MAIL</span>
                  <strong>{{ contato.email }}</strong>
                </a>
              } @else {
                <div>
                  <span>E-MAIL</span>
                  <strong class="informacao-ausente">
                    N\xE3o informado
                  </strong>
                </div>
              }

              @for (
                vinculo of vinculosDoContato(contato.id);
                track vinculo.membro.id
              ) {
                <a [routerLink]="['/projetos', vinculo.projeto.id]">
                  <span>
                    PROJETO \xB7 {{ vinculo.membro.papel }}
                    @if (!vinculo.membro.ativo) {
                      \xB7 INATIVO
                    }
                  </span>
                  <strong>{{ vinculo.projeto.nome }}</strong>
                </a>
              }
            </div>
<button
  type="button"
  class="secundario"
  [disabled]="!contato.email"
  (click)="convidarContato(contato)"
>
  Enviar convite
</button>
            <div class="acoes acoes-contato">
              <button
                type="button"
                class="secundario"
                (click)="editar(contato)"
              >
                Editar
              </button>


              <button
                type="button"
                class="excluir"
                [disabled]="excluindoId() === contato.id"
                (click)="excluir(contato)"
              >
                @if (excluindoId() === contato.id) {
                  Excluindo...
                } @else {
                  Excluir
                }
              </button>
            </div>
          </article>
        }
      </div>
    }
  </section>
</main>
`, styles: ["/* apps/studio-dash/src/app/paginas/contatos/contatos.scss */\n:host {\n  display: block;\n  min-height: 100%;\n  color: var(--text);\n}\n.pagina {\n  width: min(78rem, 100% - 2rem);\n  margin: 0 auto;\n  padding: 2.5rem 0 5rem;\n}\n.cabecalho-pagina {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n.cabecalho-pagina h1 {\n  margin: 0.35rem 0 0.45rem;\n  font-size: clamp(2.7rem, 7vw, 5.4rem);\n  font-weight: 760;\n  line-height: 0.88;\n  letter-spacing: -0.07em;\n}\n.cabecalho-pagina p:not(.secao) {\n  max-width: 38rem;\n  margin: 0;\n  color: var(--text-soft);\n  line-height: 1.5;\n}\n.secao,\n.rotulo-menor {\n  margin: 0;\n  color: var(--primary);\n  font-size: 0.65rem;\n  font-weight: 760;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.resumo-cabecalho {\n  display: grid;\n  min-width: 9rem;\n  gap: 0.15rem;\n  padding: 0 0 0.3rem 1.2rem;\n  border-left: 0.0625rem solid var(--border);\n}\n.resumo-cabecalho strong {\n  font-size: 1.7rem;\n  line-height: 1;\n}\n.resumo-cabecalho span {\n  color: var(--text-muted);\n  font-size: 0.62rem;\n}\nbutton,\ninput {\n  font: inherit;\n}\nbutton,\na,\nlabel {\n  -webkit-tap-highlight-color: transparent;\n}\nbutton {\n  cursor: pointer;\n}\nbutton:disabled {\n  cursor: wait;\n  opacity: 0.52;\n}\n.painel {\n  background: var(--surface);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-grande);\n  box-shadow: var(--shadow-soft);\n}\n.formulario-painel {\n  padding: clamp(1rem, 3vw, 1.4rem);\n  border-top: 0.22rem solid var(--primary);\n}\n.titulo-formulario {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n  margin-bottom: 1.15rem;\n}\n.titulo-formulario h2 {\n  margin: 0.25rem 0 0;\n  font-size: 1.2rem;\n  letter-spacing: -0.025em;\n}\n.titulo-formulario > p {\n  max-width: 30rem;\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 0.67rem;\n  line-height: 1.45;\n  text-align: right;\n}\n.campos {\n  display: grid;\n  grid-template-columns: 1.15fr 1fr 1fr;\n  gap: 0.8rem;\n}\nlabel {\n  display: grid;\n  align-content: start;\n  gap: 0.4rem;\n}\nlabel > span {\n  font-size: 0.73rem;\n  font-weight: 720;\n}\nlabel > small {\n  color: var(--danger);\n  font-size: 0.65rem;\n}\ninput:not([type=checkbox]) {\n  width: 100%;\n  min-height: 2.7rem;\n  box-sizing: border-box;\n  padding: 0.65rem 0.72rem;\n  background: #ffffff;\n  color: var(--text);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n  outline: none;\n  transition: border-color 130ms ease, box-shadow 130ms ease;\n}\ninput:not([type=checkbox])::placeholder {\n  color: color-mix(in srgb, var(--text-muted) 68%, transparent);\n}\ninput:not([type=checkbox]):focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 0.18rem color-mix(in srgb, var(--primary) 13%, transparent);\n}\n.rodape-formulario {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: 0.9rem;\n  padding-top: 0.9rem;\n  border-top: 0.0625rem solid var(--border);\n}\n.campo-marcacao {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  cursor: pointer;\n}\n.campo-marcacao input {\n  width: 1.05rem;\n  height: 1.05rem;\n  flex: 0 0 auto;\n  accent-color: var(--primary);\n}\n.campo-marcacao > span {\n  display: grid;\n  gap: 0.12rem;\n}\n.campo-marcacao strong {\n  font-size: 0.7rem;\n}\n.campo-marcacao small {\n  color: var(--text-muted);\n  font-size: 0.58rem;\n  font-weight: 400;\n}\n.acoes {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.primario,\n.secundario,\n.excluir {\n  display: inline-flex;\n  min-height: 2.45rem;\n  align-items: center;\n  justify-content: center;\n  padding: 0.52rem 0.82rem;\n  border-radius: var(--radius);\n  font-size: 0.7rem;\n  font-weight: 740;\n}\n.primario {\n  background: var(--primary);\n  color: #ffffff;\n  border: 0.0625rem solid var(--primary);\n  box-shadow: 0 0.5rem 1.25rem color-mix(in srgb, var(--primary) 18%, transparent);\n}\n.primario:hover:not(:disabled) {\n  filter: brightness(0.92);\n}\n.secundario {\n  background: transparent;\n  color: var(--text);\n  border: 0.0625rem solid var(--border);\n}\n.secundario:hover:not(:disabled) {\n  background: var(--surface-muted);\n}\n.excluir {\n  background: transparent;\n  color: var(--danger);\n  border: 0.0625rem solid transparent;\n}\n.excluir:hover:not(:disabled) {\n  background: color-mix(in srgb, var(--danger) 7%, transparent);\n  border-color: color-mix(in srgb, var(--danger) 28%, transparent);\n}\n.mensagem-erro {\n  margin: 0.85rem 0 0;\n  padding: 0.7rem 0.8rem;\n  background: color-mix(in srgb, var(--danger) 7%, var(--surface));\n  color: var(--danger);\n  border: 0.0625rem solid color-mix(in srgb, var(--danger) 28%, var(--border));\n  border-radius: var(--radius);\n  font-size: 0.7rem;\n}\n.catalogo-contatos {\n  margin-top: 2.6rem;\n}\n.titulo-lista {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.titulo-lista h2 {\n  margin: 0.3rem 0 0;\n  font-size: clamp(1.4rem, 4vw, 2rem);\n  letter-spacing: -0.04em;\n}\n.titulo-lista > span {\n  display: grid;\n  min-width: 2rem;\n  min-height: 2rem;\n  place-items: center;\n  background: var(--text);\n  color: var(--surface);\n  border-radius: 999rem;\n  font-size: 0.68rem;\n  font-weight: 740;\n}\n.lista {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n.contato {\n  display: grid;\n  min-width: 0;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 1rem;\n  padding: 1rem;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 100% 0,\n      color-mix(in srgb, var(--primary) 8%, transparent),\n      transparent 12rem),\n    var(--surface);\n  border: 0.0625rem solid var(--border);\n  border-radius: 0.35rem;\n  box-shadow: 0 0.35rem 1rem rgba(20, 24, 21, 0.04);\n  transition:\n    transform 150ms ease,\n    border-color 150ms ease,\n    box-shadow 150ms ease;\n}\n.contato:hover {\n  border-color: color-mix(in srgb, var(--primary) 38%, var(--border));\n  box-shadow: var(--shadow-soft);\n  transform: translateY(-0.12rem);\n}\n.identidade-contato {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.75rem;\n}\n.avatar-contato {\n  display: grid;\n  width: 2.85rem;\n  height: 2.85rem;\n  flex: 0 0 auto;\n  place-items: center;\n  background:\n    linear-gradient(\n      145deg,\n      color-mix(in srgb, var(--primary) 68%, #1b1f1b),\n      var(--primary));\n  color: #ffffff;\n  border-radius: 0.28rem;\n  font-size: 1rem;\n  font-weight: 780;\n  text-transform: uppercase;\n  box-shadow: 0.35rem 0.35rem 0 color-mix(in srgb, var(--primary) 10%, var(--surface-muted));\n}\n.nome {\n  display: grid;\n  min-width: 0;\n  justify-items: start;\n  gap: 0.3rem;\n}\n.nome h3 {\n  max-width: 100%;\n  overflow: hidden;\n  margin: 0;\n  font-size: 0.9rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.nome > span {\n  padding: 0.22rem 0.42rem;\n  background: color-mix(in srgb, var(--success) 10%, var(--surface));\n  color: var(--success);\n  border: 0.0625rem solid color-mix(in srgb, var(--success) 25%, var(--border));\n  border-radius: 999rem;\n  font-size: 0.54rem;\n  font-weight: 740;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.nome .contato-simples {\n  background: var(--surface-muted);\n  color: var(--text-muted);\n  border-color: var(--border);\n}\n.informacoes-contato {\n  display: grid;\n  grid-column: 1/-1;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.6rem;\n  padding-top: 0.8rem;\n  border-top: 0.0625rem solid var(--border);\n}\n.informacoes-contato a,\n.informacoes-contato > div {\n  display: grid;\n  min-width: 0;\n  gap: 0.2rem;\n  padding: 0.55rem 0.65rem;\n  background: color-mix(in srgb, var(--surface-muted) 70%, transparent);\n  border-radius: 0.22rem;\n}\n.informacoes-contato a {\n  transition: background-color 130ms ease;\n}\n.informacoes-contato a:hover {\n  background: var(--surface-muted);\n}\n.informacoes-contato a:hover strong {\n  color: var(--primary);\n}\n.informacoes-contato span {\n  color: var(--text-muted);\n  font-size: 0.52rem;\n  font-weight: 740;\n  letter-spacing: 0.08em;\n}\n.informacoes-contato strong {\n  min-width: 0;\n  overflow: hidden;\n  font-size: 0.66rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  transition: color 130ms ease;\n}\n.informacoes-contato .informacao-ausente {\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.acoes-contato {\n  align-self: start;\n}\n.acoes-contato button {\n  min-height: 2rem;\n  padding: 0.35rem 0.52rem;\n  font-size: 0.6rem;\n}\n.estado {\n  display: grid;\n  min-height: 20rem;\n  place-content: center;\n  justify-items: center;\n  padding: 2rem;\n  background: var(--surface);\n  color: var(--text-muted);\n  border: 0.0625rem solid var(--border);\n  text-align: center;\n}\n.estado h3 {\n  margin: 0.75rem 0 0.35rem;\n  color: var(--text);\n}\n.estado p {\n  max-width: 30rem;\n  margin: 0 0 1rem;\n  font-size: 0.75rem;\n  line-height: 1.5;\n}\n.avatar-vazio,\n.simbolo-estado {\n  display: grid;\n  width: 4rem;\n  height: 4rem;\n  place-items: center;\n  background: var(--primary);\n  color: #ffffff;\n  border-radius: 0.35rem;\n  box-shadow: 0.7rem 0.7rem 0 color-mix(in srgb, var(--primary) 10%, var(--surface-muted));\n  font-size: 1.4rem;\n  font-weight: 760;\n}\n.simbolo-estado {\n  background: var(--danger);\n  box-shadow: none;\n}\n.carregador {\n  width: 1.25rem;\n  height: 1.25rem;\n  box-sizing: border-box;\n  margin-bottom: 0.8rem;\n  border: 0.14rem solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 999rem;\n  animation: girar 650ms linear infinite;\n}\n@keyframes girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .carregador {\n    animation: none;\n  }\n  .contato {\n    transition: none;\n  }\n}\n@media (max-width: 58rem) {\n  .campos {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .campos label:first-child {\n    grid-column: 1/-1;\n  }\n  .lista {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 44rem) {\n  .pagina {\n    padding-top: 1.5rem;\n  }\n  .cabecalho-pagina,\n  .titulo-formulario,\n  .rodape-formulario {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .resumo-cabecalho {\n    padding: 0.75rem 0 0;\n    border-top: 0.0625rem solid var(--border);\n    border-left: 0;\n  }\n  .titulo-formulario > p {\n    max-width: none;\n    text-align: left;\n  }\n  .campos {\n    grid-template-columns: 1fr;\n  }\n  .campos label:first-child {\n    grid-column: auto;\n  }\n  .rodape-formulario,\n  .acoes {\n    width: 100%;\n  }\n  .acoes button {\n    flex: 1;\n  }\n}\n@media (max-width: 30rem) {\n  .contato {\n    grid-template-columns: 1fr;\n  }\n  .acoes-contato {\n    grid-row: 3;\n    width: 100%;\n  }\n  .acoes-contato button {\n    flex: 1;\n  }\n  .informacoes-contato {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Contatos, { className: "Contatos", filePath: "apps/studio-dash/src/app/paginas/contatos/contatos.ts", lineNumber: 37 });
})();
export {
  Contatos
};
