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
  ChangeDetectionStrategy,
  ClienteSupabase,
  Component,
  Router,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-IMBOO5ID.js";

// apps/studio-dash/src/app/paginas/convite/convite.ts
function Convite_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 10)(1, "span", 13);
    \u0275\u0275text(2, " \u2713 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 14);
    \u0275\u0275text(4, " CONTA ATIVADA ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1");
    \u0275\u0275text(6, " Tudo certo. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, " Sua senha foi criada. Voc\xEA ser\xE1 direcionado para o Fl\xEAiva. ");
    \u0275\u0275elementEnd()();
  }
}
function Convite_Conditional_13_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " A senha precisa ter pelo menos 8 caracteres. ");
    \u0275\u0275elementEnd();
  }
}
function Convite_Conditional_13_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " As senhas precisam ser iguais. ");
    \u0275\u0275elementEnd();
  }
}
function Convite_Conditional_13_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22)(1, "span", 24);
    \u0275\u0275text(2, " ! ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.mensagemErro(), " ");
  }
}
function Convite_Conditional_13_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Ativando conta... ");
  }
}
function Convite_Conditional_13_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Ativar minha conta \u2192 ");
  }
}
function Convite_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 11)(1, "header", 15)(2, "p", 14);
    \u0275\u0275text(3, " CONVITE ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5, " Seu acesso ao Fl\xEAiva ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, " Voc\xEA recebeu acesso a um projeto no Fl\xEAiva Studios. Crie uma senha para ativar sua conta. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "form", 16);
    \u0275\u0275listener("ngSubmit", function Convite_Conditional_13_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.criarSenha());
    });
    \u0275\u0275elementStart(9, "div", 17)(10, "label", 18);
    \u0275\u0275text(11, " Nova senha ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 19);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(13, Convite_Conditional_13_Conditional_13_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 17)(15, "label", 20);
    \u0275\u0275text(16, " Confirmar senha ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 21);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(18, Convite_Conditional_13_Conditional_18_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, Convite_Conditional_13_Conditional_19_Template, 4, 1, "p", 22);
    \u0275\u0275elementStart(20, "button", 23);
    \u0275\u0275conditionalCreate(21, Convite_Conditional_13_Conditional_21_Template, 1, 0)(22, Convite_Conditional_13_Conditional_22_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx_r1.formulario);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.formulario.controls.senha.touched && ctx_r1.formulario.controls.senha.invalid ? 13 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.formulario.controls.confirmarSenha.touched && ctx_r1.formulario.hasError("senhasDiferentes") ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mensagemErro() ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.formulario.invalid || ctx_r1.enviando());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.enviando() ? 21 : 22);
  }
}
var Convite = class _Convite {
  clienteSupabase = inject(ClienteSupabase);
  construtorFormulario = inject(FormBuilder);
  roteador = inject(Router);
  enviando = signal(
    false,
    ...ngDevMode ? [{ debugName: "enviando" }] : (
      /* istanbul ignore next */
      []
    )
  );
  mensagemErro = signal(
    "",
    ...ngDevMode ? [{ debugName: "mensagemErro" }] : (
      /* istanbul ignore next */
      []
    )
  );
  concluido = signal(
    false,
    ...ngDevMode ? [{ debugName: "concluido" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formulario = this.construtorFormulario.nonNullable.group({
    senha: [
      "",
      [
        Validators.required,
        Validators.minLength(8)
      ]
    ],
    confirmarSenha: [
      "",
      Validators.required
    ]
  }, {
    validators: (formulario) => {
      const senha = formulario.get("senha")?.value;
      const confirmarSenha = formulario.get("confirmarSenha")?.value;
      return senha === confirmarSenha ? null : { senhasDiferentes: true };
    }
  });
  async criarSenha() {
    if (this.formulario.invalid || this.enviando()) {
      this.formulario.markAllAsTouched();
      return;
    }
    this.enviando.set(true);
    this.mensagemErro.set("");
    try {
      const { senha } = this.formulario.getRawValue();
      const { error } = await this.clienteSupabase.cliente.auth.updateUser({
        password: senha
      });
      if (error) {
        throw error;
      }
      this.concluido.set(true);
      setTimeout(() => {
        window.location.replace("/");
      }, 1200);
    } catch (erro) {
      console.error(erro);
      this.mensagemErro.set("N\xE3o foi poss\xEDvel ativar sua conta. O convite pode ter expirado ou j\xE1 ter sido utilizado.");
    } finally {
      this.enviando.set(false);
    }
  }
  static \u0275fac = function Convite_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Convite)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Convite, selectors: [["app-convite"]], decls: 19, vars: 1, consts: [[1, "pagina-convite"], [1, "cartao-convite"], [1, "cabecalho"], [1, "marca-fleiva"], ["role", "img", "aria-label", "Fl\xEAiva Studios", 1, "fleiva-wordmark"], ["aria-hidden", "true", 1, "fleiva-camada", "fleiva-camada-clara"], ["aria-hidden", "true", 1, "fleiva-camada", "fleiva-camada-roxa"], ["aria-hidden", "true", 1, "fleiva-camada", "fleiva-camada-verde"], [1, "marca-complemento"], [1, "identificador"], [1, "estado-sucesso"], [1, "conteudo"], [1, "rodape"], [1, "icone-sucesso"], [1, "sobretitulo"], [1, "cabecalho-formulario"], [1, "formulario", 3, "ngSubmit", "formGroup"], [1, "campo"], ["for", "senha"], ["id", "senha", "type", "password", "formControlName", "senha", "autocomplete", "new-password", "placeholder", "M\xEDnimo de 8 caracteres"], ["for", "confirmarSenha"], ["id", "confirmarSenha", "type", "password", "formControlName", "confirmarSenha", "autocomplete", "new-password", "placeholder", "Digite novamente"], ["role", "alert", 1, "erro"], ["type", "submit", 1, "botao", 3, "disabled"], ["aria-hidden", "true"]], template: function Convite_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "section", 1)(2, "header", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275element(5, "span", 5)(6, "span", 6)(7, "span", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 8);
      \u0275\u0275text(9, " STUDIOS ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "span", 9);
      \u0275\u0275text(11, " FLV \xB7 001 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, Convite_Conditional_12_Template, 9, 0, "section", 10)(13, Convite_Conditional_13_Template, 23, 6, "section", 11);
      \u0275\u0275elementStart(14, "footer", 12)(15, "span");
      \u0275\u0275text(16, "FL\xCAIVA STUDIOS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18, "SISTEMA SEGURO");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.concluido() ? 12 : 13);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Convite, [{
    type: Component,
    args: [{ selector: "app-convite", imports: [ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="pagina-convite">
  <section class="cartao-convite">
    <header class="cabecalho">
      <div class="marca-fleiva">
        <span
          class="fleiva-wordmark"
          role="img"
          aria-label="Fl\xEAiva Studios"
        >
          <span
            class="fleiva-camada fleiva-camada-clara"
            aria-hidden="true"
          ></span>

          <span
            class="fleiva-camada fleiva-camada-roxa"
            aria-hidden="true"
          ></span>

          <span
            class="fleiva-camada fleiva-camada-verde"
            aria-hidden="true"
          ></span>
        </span>

        <span class="marca-complemento">
          STUDIOS
        </span>
      </div>

      <span class="identificador">
        FLV \xB7 001
      </span>
    </header>

    @if (concluido()) {
      <section class="estado-sucesso">
        <span class="icone-sucesso">
          \u2713
        </span>

        <p class="sobretitulo">
          CONTA ATIVADA
        </p>

        <h1>
          Tudo certo.
        </h1>

        <p>
          Sua senha foi criada. Voc\xEA ser\xE1
          direcionado para o Fl\xEAiva.
        </p>
      </section>
    } @else {
      <section class="conteudo">
        <header class="cabecalho-formulario">
          <p class="sobretitulo">
            CONVITE
          </p>

          <h1>
            Seu acesso ao Fl\xEAiva
          </h1>

          <p>
            Voc\xEA recebeu acesso a um projeto no
            Fl\xEAiva Studios. Crie uma senha para
            ativar sua conta.
          </p>
        </header>

        <form
          class="formulario"
          [formGroup]="formulario"
          (ngSubmit)="criarSenha()"
        >
          <div class="campo">
            <label for="senha">
              Nova senha
            </label>

            <input
              id="senha"
              type="password"
              formControlName="senha"
              autocomplete="new-password"
              placeholder="M\xEDnimo de 8 caracteres"
            />

            @if (
              formulario.controls.senha.touched &&
              formulario.controls.senha.invalid
            ) {
              <small>
                A senha precisa ter pelo menos
                8 caracteres.
              </small>
            }
          </div>

          <div class="campo">
            <label for="confirmarSenha">
              Confirmar senha
            </label>

            <input
              id="confirmarSenha"
              type="password"
              formControlName="confirmarSenha"
              autocomplete="new-password"
              placeholder="Digite novamente"
            />

            @if (
              formulario.controls.confirmarSenha.touched &&
              formulario.hasError('senhasDiferentes')
            ) {
              <small>
                As senhas precisam ser iguais.
              </small>
            }
          </div>

          @if (mensagemErro()) {
            <p
              class="erro"
              role="alert"
            >
              <span aria-hidden="true">
                !
              </span>

              {{ mensagemErro() }}
            </p>
          }

          <button
            type="submit"
            class="botao"
            [disabled]="
              formulario.invalid ||
              enviando()
            "
          >
            @if (enviando()) {
              Ativando conta...
            } @else {
              Ativar minha conta \u2192
            }
          </button>
        </form>
      </section>
    }

    <footer class="rodape">
      <span>FL\xCAIVA STUDIOS</span>
      <span>SISTEMA SEGURO</span>
    </footer>
  </section>
</main>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Convite, { className: "Convite", filePath: "apps/studio-dash/src/app/paginas/convite/convite.ts", lineNumber: 22 });
})();
export {
  Convite
};
