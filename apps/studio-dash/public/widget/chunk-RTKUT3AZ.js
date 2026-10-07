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
  ActivatedRoute,
  Autenticacao,
  ChangeDetectionStrategy,
  Component,
  RouterLink,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-IMBOO5ID.js";

// apps/studio-dash/src/app/paginas/login/login.ts
function PaginaLogin_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Informe um e-mail v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function PaginaLogin_Conditional_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Informe sua senha.");
    \u0275\u0275elementEnd();
  }
}
function PaginaLogin_Conditional_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51)(1, "span", 35);
    \u0275\u0275text(2, "!");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.mensagemErro(), " ");
  }
}
function PaginaLogin_Conditional_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 53);
  }
}
function PaginaLogin_Conditional_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 42);
    \u0275\u0275element(1, "path", 57);
    \u0275\u0275elementEnd();
  }
}
var PaginaLogin = class _PaginaLogin {
  autenticacao = inject(Autenticacao);
  construtorFormulario = inject(FormBuilder);
  rota = inject(ActivatedRoute);
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
  formulario = this.construtorFormulario.nonNullable.group({
    email: ["", [Validators.required, Validators.email]],
    senha: ["", Validators.required]
  });
  async entrar() {
    if (this.formulario.invalid || this.enviando()) {
      this.formulario.markAllAsTouched();
      return;
    }
    this.enviando.set(true);
    this.mensagemErro.set("");
    try {
      const { email, senha } = this.formulario.getRawValue();
      await this.autenticacao.entrar(email.trim(), senha);
      const retorno = this.rota.snapshot.queryParamMap.get("retorno");
      const destino = retorno?.startsWith("/") && !retorno.startsWith("//") ? retorno : "/";
      window.location.replace(destino);
    } catch {
      this.mensagemErro.set("E-mail ou senha inv\xE1lidos.");
    } finally {
      this.enviando.set(false);
    }
  }
  static \u0275fac = function PaginaLogin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginaLogin)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginaLogin, selectors: [["app-login"]], decls: 135, vars: 11, consts: [[1, "pagina-login"], ["aria-labelledby", "titulo-apresentacao", 1, "apresentacao"], ["aria-hidden", "true", 1, "textura"], [1, "cabecalho-marca"], [1, "marca-fleiva"], ["role", "img", "aria-label", "Fl\xEAiva Studios", 1, "fleiva-wordmark"], ["aria-hidden", "true", 1, "fleiva-camada", "fleiva-camada-clara"], ["aria-hidden", "true", 1, "fleiva-camada", "fleiva-camada-roxa"], ["aria-hidden", "true", 1, "fleiva-camada", "fleiva-camada-verde"], [1, "marca-complemento"], [1, "identificador"], [1, "conteudo-apresentacao"], [1, "manifesto"], [1, "sobretitulo"], ["id", "titulo-apresentacao"], [1, "texto-manifesto"], ["aria-label", "Recursos do Fleiva", 1, "areas-produto"], ["aria-hidden", "true", 1, "modulo-visual"], [1, "topo-modulo"], [1, "status-modulo"], [1, "centro-modulo"], [1, "selo-fleiva"], [1, "fleiva-monograma"], [1, "fleiva-camada", "fleiva-camada-clara"], [1, "fleiva-camada", "fleiva-camada-roxa"], [1, "fleiva-camada", "fleiva-camada-verde"], [1, "leitura"], [1, "cabecalho-leitura"], [1, "onda"], [1, "linha-leitura"], [1, "rodape-modulo"], [1, "rodape-apresentacao"], ["aria-label", "Acesso ao sistema", 1, "acesso"], [1, "cabecalho-acesso"], [1, "status-acesso"], ["aria-hidden", "true"], [1, "numero-acesso"], [1, "formulario-login", 3, "ngSubmit", "formGroup"], [1, "cabecalho-formulario"], [1, "campo"], ["for", "email"], [1, "controle"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["x", "3", "y", "5", "width", "18", "height", "14", "rx", "2"], ["d", "m4 7 8 6 8-6"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "inputmode", "email", "placeholder", "voce@estudio.com"], ["for", "senha"], ["x", "5", "y", "10", "width", "14", "height", "11", "rx", "2"], ["d", "M8 10V7a4 4 0 0 1 8 0v3"], ["d", "M12 14v3"], ["id", "senha", "type", "password", "formControlName", "senha", "autocomplete", "current-password", "placeholder", "Sua senha"], ["role", "alert", 1, "erro"], ["type", "submit", 1, "botao-entrar", 3, "disabled"], ["aria-hidden", "true", 1, "carregador"], [1, "aviso-acesso"], ["routerLink", "/cadastro"], [1, "rodape-acesso"], ["d", "M5 12h14M13 6l6 6-6 6"]], template: function PaginaLogin_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "section", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "header", 3)(4, "div", 4)(5, "span", 5);
      \u0275\u0275element(6, "span", 6)(7, "span", 7)(8, "span", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 9);
      \u0275\u0275text(10, "STUDIOS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "span", 10);
      \u0275\u0275text(12, "FLV \xB7 001");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "p", 13);
      \u0275\u0275text(16, " GEST\xC3O PARA EST\xDADIOS INDEPENDENTES ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "h1", 14);
      \u0275\u0275text(18, " Seu est\xFAdio. ");
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20, "Seu fluxo.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "p", 15);
      \u0275\u0275text(22, " Agenda, trabalhos, arquivos e acertos organizados sem transformar seu est\xFAdio em um escrit\xF3rio. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 16)(24, "span");
      \u0275\u0275text(25, "AGENDA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span");
      \u0275\u0275text(27, "ACERVO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29, "ACERTOS");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 17)(31, "header", 18)(32, "span");
      \u0275\u0275text(33, "FL\xCAIVA / CONTROL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 19);
      \u0275\u0275element(35, "i");
      \u0275\u0275text(36, " SISTEMA ATIVO ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 20)(38, "div", 21)(39, "span", 22);
      \u0275\u0275element(40, "span", 23)(41, "span", 24)(42, "span", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "small");
      \u0275\u0275text(44, "INDEPENDENT SOUND SYSTEM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 26)(46, "div", 27)(47, "span");
      \u0275\u0275text(48, "EST\xDADIO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "strong");
      \u0275\u0275text(50, "ON AIR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 28);
      \u0275\u0275element(52, "i")(53, "i")(54, "i")(55, "i")(56, "i")(57, "i")(58, "i")(59, "i")(60, "i")(61, "i")(62, "i")(63, "i")(64, "i")(65, "i")(66, "i")(67, "i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 29)(69, "span");
      \u0275\u0275text(70, "FLUXO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "strong");
      \u0275\u0275text(72, "ORGANIZADO");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(73, "footer", 30)(74, "span");
      \u0275\u0275text(75, "01 / AGENDA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span");
      \u0275\u0275text(77, "02 / ACERVO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "span");
      \u0275\u0275text(79, "03 / FINANCEIRO");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(80, "footer", 31)(81, "span");
      \u0275\u0275text(82, "FEITO PARA QUEM FAZ M\xDASICA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "span");
      \u0275\u0275text(84, "BRASIL \xB7 2026");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(85, "section", 32)(86, "div", 33)(87, "div", 34);
      \u0275\u0275element(88, "span", 35);
      \u0275\u0275elementStart(89, "strong");
      \u0275\u0275text(90, "ACESSO PRIVADO");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "span", 36);
      \u0275\u0275text(92, "01");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "form", 37);
      \u0275\u0275listener("ngSubmit", function PaginaLogin_Template_form_ngSubmit_93_listener() {
        return ctx.entrar();
      });
      \u0275\u0275elementStart(94, "header", 38)(95, "p");
      \u0275\u0275text(96, "Bem-vindo de volta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "h2");
      \u0275\u0275text(98, "Entre no seu est\xFAdio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "span");
      \u0275\u0275text(100, " Use os dados de acesso vinculados ao seu perfil. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 39)(102, "label", 40);
      \u0275\u0275text(103, "E-mail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div", 41);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(105, "svg", 42);
      \u0275\u0275element(106, "rect", 43)(107, "path", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(108, "input", 45);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(109, PaginaLogin_Conditional_109_Template, 2, 0, "small");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 39)(111, "label", 46);
      \u0275\u0275text(112, "Senha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 41);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(114, "svg", 42);
      \u0275\u0275element(115, "rect", 47)(116, "path", 48)(117, "path", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(118, "input", 50);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(119, PaginaLogin_Conditional_119_Template, 2, 0, "small");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(120, PaginaLogin_Conditional_120_Template, 4, 1, "p", 51);
      \u0275\u0275elementStart(121, "button", 52)(122, "span");
      \u0275\u0275text(123);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(124, PaginaLogin_Conditional_124_Template, 1, 0, "i", 53)(125, PaginaLogin_Conditional_125_Template, 2, 0, ":svg:svg", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "p", 54);
      \u0275\u0275text(127, " Ainda n\xE3o tem uma conta? ");
      \u0275\u0275elementStart(128, "a", 55);
      \u0275\u0275text(129, " Criar p\xE1gina gratuita ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(130, "footer", 56)(131, "span");
      \u0275\u0275text(132, "FL\xCAIVA STUDIOS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "span");
      \u0275\u0275text(134, "SISTEMA SEGURO");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(93);
      \u0275\u0275property("formGroup", ctx.formulario);
      \u0275\u0275advance(11);
      \u0275\u0275classProp("controle-invalido", ctx.formulario.controls.email.touched && ctx.formulario.controls.email.invalid);
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.formulario.controls.email.touched && ctx.formulario.controls.email.invalid ? 109 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("controle-invalido", ctx.formulario.controls.senha.touched && ctx.formulario.controls.senha.invalid);
      \u0275\u0275advance(5);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.formulario.controls.senha.touched && ctx.formulario.controls.senha.invalid ? 119 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mensagemErro() ? 120 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.formulario.invalid || ctx.enviando());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.enviando() ? "Entrando..." : "Entrar no Fl\xEAiva", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.enviando() ? 124 : 125);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['@charset "UTF-8";\n\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100dvh;\n}\n.pagina-login[_ngcontent-%COMP%] {\n  --fleiva-verde: #5e886f;\n  --fleiva-verde-claro: #91b09d;\n  --fleiva-roxo: #885f74;\n  --fleiva-creme: #f7f2e0;\n  --fleiva-creme-escuro: #e6deca;\n  --preto: #0b0d0c;\n  --preto-suave: #121512;\n  --texto-suave: #6f756f;\n  --borda-escura: rgb(247 242 224 / 14%);\n  --mascara-wordmark: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png);\n  --mascara-monograma: url(/fleiva-brand-kit/mask/fleiva-monogram-mask.png);\n  display: grid;\n  min-height: 100dvh;\n  grid-template-columns: minmax(31rem, 1.2fr) minmax(25rem, 0.8fr);\n  background: var(--preto);\n  color: var(--app-background);\n}\n.apresentacao[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-width: 0;\n  min-height: 100dvh;\n  grid-template-rows: auto 1fr auto;\n  overflow: hidden;\n  padding: clamp(1.5rem, 4vw, 3.5rem) clamp(1.5rem, 5vw, 4.5rem) 1.75rem;\n  background:\n    radial-gradient(\n      circle at 76% 26%,\n      rgba(94, 136, 111, 0.18),\n      transparent 26rem),\n    radial-gradient(\n      circle at 8% 88%,\n      rgba(136, 95, 116, 0.14),\n      transparent 24rem),\n    var(--preto);\n  isolation: isolate;\n}\n.apresentacao[_ngcontent-%COMP%]::before {\n  position: absolute;\n  z-index: -2;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(247, 242, 224, 0.03) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(247, 242, 224, 0.03) 1px,\n      transparent 1px);\n  background-size: 4rem 4rem;\n  content: "";\n  -webkit-mask-image:\n    linear-gradient(\n      to bottom,\n      transparent,\n      black 15%,\n      black 85%,\n      transparent);\n  mask-image:\n    linear-gradient(\n      to bottom,\n      transparent,\n      black 15%,\n      black 85%,\n      transparent);\n}\n.apresentacao[_ngcontent-%COMP%]::after {\n  position: absolute;\n  z-index: -1;\n  right: -13rem;\n  bottom: -16rem;\n  width: 34rem;\n  height: 34rem;\n  border: 1px solid rgba(247, 242, 224, 0.05);\n  border-radius: 50%;\n  content: "";\n}\n.textura[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  inset: 0;\n  opacity: 0.14;\n  pointer-events: none;\n  background-image:\n    repeating-linear-gradient(\n      115deg,\n      transparent 0,\n      transparent 4px,\n      rgba(255, 255, 255, 0.015) 5px);\n}\n.cabecalho-marca[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 2rem;\n}\n.marca-fleiva[_ngcontent-%COMP%] {\n  display: flex;\n  width: fit-content;\n  align-items: flex-end;\n  gap: 0.65rem;\n}\n.fleiva-wordmark[_ngcontent-%COMP%], \n.fleiva-monograma[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  isolation: isolate;\n}\n.fleiva-wordmark[_ngcontent-%COMP%] {\n  --fleiva-mascara: var(--mascara-wordmark);\n  width: clamp(8.75rem, 13vw, 11.5rem);\n  aspect-ratio: 1256/596;\n  animation: _ngcontent-%COMP%_entrada-logo 700ms cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.fleiva-monograma[_ngcontent-%COMP%] {\n  --fleiva-mascara: var(--mascara-monograma);\n  width: clamp(4.75rem, 7vw, 6.5rem);\n  aspect-ratio: 495/554;\n}\n.fleiva-camada[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: currentColor;\n  mask: var(--fleiva-mascara) center/contain no-repeat;\n  -webkit-mask: var(--fleiva-mascara) center/contain no-repeat;\n  pointer-events: none;\n  will-change: transform;\n}\n.fleiva-camada-clara[_ngcontent-%COMP%] {\n  color: var(--fleiva-creme);\n  transform: translate(-1px, -1px);\n}\n.fleiva-camada-roxa[_ngcontent-%COMP%] {\n  color: var(--fleiva-roxo);\n  transform: translate(3px, 4px);\n}\n.fleiva-camada-verde[_ngcontent-%COMP%] {\n  color: var(--fleiva-verde);\n}\n.marca-complemento[_ngcontent-%COMP%] {\n  margin-bottom: 0.8rem;\n  color: rgba(247, 242, 224, 0.62);\n  font-size: 0.53rem;\n  font-weight: 800;\n  letter-spacing: 0.26em;\n  writing-mode: vertical-rl;\n  transform: rotate(180deg);\n}\n.identificador[_ngcontent-%COMP%] {\n  padding-top: 0.4rem;\n  color: rgba(247, 242, 224, 0.3);\n  font-family: monospace;\n  font-size: 0.6rem;\n  letter-spacing: 0.12em;\n}\n.conteudo-apresentacao[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(17rem, 0.9fr) minmax(20rem, 1.1fr);\n  align-items: center;\n  gap: clamp(2.5rem, 5vw, 5rem);\n  padding: 3rem 0;\n}\n.manifesto[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.sobretitulo[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  color: var(--fleiva-verde-claro);\n  font-size: 0.62rem;\n  font-weight: 800;\n  letter-spacing: 0.16em;\n}\n.manifesto[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 36rem;\n  margin: 0;\n  color: var(--fleiva-creme);\n  font-size: clamp(3.3rem, 6vw, 6.5rem);\n  font-weight: 680;\n  line-height: 0.85;\n  letter-spacing: -0.075em;\n}\n.manifesto[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--fleiva-verde);\n}\n.texto-manifesto[_ngcontent-%COMP%] {\n  max-width: 31rem;\n  margin: 1.75rem 0 0;\n  color: rgba(247, 242, 224, 0.6);\n  font-size: clamp(0.88rem, 1.2vw, 1.02rem);\n  line-height: 1.65;\n}\n.areas-produto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.45rem;\n  margin-top: 2rem;\n}\n.areas-produto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.42rem 0.62rem;\n  color: rgba(247, 242, 224, 0.48);\n  border: 1px solid var(--borda-escura);\n  font-size: 0.54rem;\n  font-weight: 750;\n  letter-spacing: 0.13em;\n}\n.modulo-visual[_ngcontent-%COMP%] {\n  width: min(100%, 34rem);\n  justify-self: end;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(255, 255, 255, 0.03),\n      transparent 50%),\n    rgba(18, 21, 18, 0.86);\n  border: 1px solid var(--borda-escura);\n  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.28), inset 0 1px rgba(255, 255, 255, 0.04);\n  -webkit-backdrop-filter: blur(0.75rem);\n  backdrop-filter: blur(0.75rem);\n  transition: border-color 180ms ease, transform 180ms ease;\n}\n.modulo-visual[_ngcontent-%COMP%]:hover {\n  border-color: rgba(94, 136, 111, 0.45);\n  transform: translateY(-0.15rem);\n}\n.topo-modulo[_ngcontent-%COMP%], \n.rodape-modulo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.8rem 1rem;\n  color: rgba(247, 242, 224, 0.4);\n  font-family: monospace;\n  font-size: 0.52rem;\n  letter-spacing: 0.09em;\n}\n.topo-modulo[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--borda-escura);\n}\n.rodape-modulo[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--borda-escura);\n}\n.status-modulo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: var(--fleiva-verde-claro);\n}\n.status-modulo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 0.4rem;\n  height: 0.4rem;\n  background: var(--fleiva-verde-claro);\n  border-radius: 50%;\n  box-shadow: 0 0 0.65rem var(--fleiva-verde);\n}\n.centro-modulo[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 16rem;\n  grid-template-columns: minmax(8.5rem, 0.75fr) minmax(11rem, 1.25fr);\n}\n.selo-fleiva[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  align-content: center;\n  justify-items: center;\n  gap: 1.25rem;\n  padding: 1.5rem;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(94, 136, 111, 0.09),\n      transparent 65%);\n  border-right: 1px solid var(--borda-escura);\n}\n.selo-fleiva[_ngcontent-%COMP%]::before {\n  position: absolute;\n  inset: 1rem;\n  border: 1px solid rgba(247, 242, 224, 0.05);\n  content: "";\n  pointer-events: none;\n}\n.selo-fleiva[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  color: rgba(247, 242, 224, 0.3);\n  font-family: monospace;\n  font-size: 0.43rem;\n  letter-spacing: 0.11em;\n  line-height: 1.5;\n  text-align: center;\n}\n.leitura[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: space-between;\n  gap: 1rem;\n  padding: 1.4rem;\n}\n.cabecalho-leitura[_ngcontent-%COMP%], \n.linha-leitura[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.cabecalho-leitura[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.linha-leitura[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(247, 242, 224, 0.36);\n  font-family: monospace;\n  font-size: 0.5rem;\n  letter-spacing: 0.1em;\n}\n.cabecalho-leitura[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--fleiva-verde-claro);\n  font-family: monospace;\n  font-size: 0.63rem;\n  letter-spacing: 0.09em;\n}\n.linha-leitura[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--fleiva-creme);\n  font-size: 0.58rem;\n  letter-spacing: 0.07em;\n}\n.onda[_ngcontent-%COMP%] {\n  display: flex;\n  height: 5.5rem;\n  align-items: center;\n  justify-content: center;\n  gap: clamp(0.16rem, 0.5vw, 0.32rem);\n  padding: 0.75rem;\n  background: rgba(0, 0, 0, 0.16);\n  border: 1px solid rgba(247, 242, 224, 0.06);\n}\n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 0.18rem;\n  height: var(--altura, 45%);\n  background:\n    linear-gradient(\n      to top,\n      var(--fleiva-roxo),\n      var(--fleiva-verde-claro));\n  opacity: 0.78;\n  transform-origin: center;\n}\n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(1), \n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(16) {\n  --altura: 16%;\n}\n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2), \n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(15) {\n  --altura: 31%;\n}\n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3), \n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(14) {\n  --altura: 54%;\n}\n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(4), \n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(13) {\n  --altura: 36%;\n}\n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(5), \n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(12) {\n  --altura: 74%;\n}\n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(6), \n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(11) {\n  --altura: 48%;\n}\n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(7), \n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(10) {\n  --altura: 86%;\n}\n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(8), \n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(9) {\n  --altura: 62%;\n}\n.modulo-visual[_ngcontent-%COMP%]:hover   .onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulso-onda 650ms ease-in-out calc(var(--indice, 0) * 30ms) 2 alternate;\n}\n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  --indice: 1;\n}\n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  --indice: 2;\n}\n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(4) {\n  --indice: 3;\n}\n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(5) {\n  --indice: 4;\n}\n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(6) {\n  --indice: 5;\n}\n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(7) {\n  --indice: 6;\n}\n.onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(8) {\n  --indice: 7;\n}\n.marca-fleiva[_ngcontent-%COMP%]:hover   .fleiva-camada-clara[_ngcontent-%COMP%], \n.selo-fleiva[_ngcontent-%COMP%]:hover   .fleiva-camada-clara[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_jitter-claro 340ms steps(2, end);\n}\n.marca-fleiva[_ngcontent-%COMP%]:hover   .fleiva-camada-roxa[_ngcontent-%COMP%], \n.selo-fleiva[_ngcontent-%COMP%]:hover   .fleiva-camada-roxa[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_jitter-roxo 340ms steps(2, end);\n}\n.marca-fleiva[_ngcontent-%COMP%]:hover   .fleiva-camada-verde[_ngcontent-%COMP%], \n.selo-fleiva[_ngcontent-%COMP%]:hover   .fleiva-camada-verde[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_jitter-verde 340ms steps(2, end);\n}\n.rodape-apresentacao[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  color: rgba(247, 242, 224, 0.26);\n  font-family: monospace;\n  font-size: 0.51rem;\n  letter-spacing: 0.1em;\n}\n.acesso[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 100dvh;\n  grid-template-rows: auto 1fr auto;\n  padding: clamp(1.5rem, 4vw, 3rem) clamp(1.5rem, 5vw, 4.5rem) 1.75rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.42),\n      transparent 13rem),\n    var(--app-background);\n  color: var(--preto);\n}\n.cabecalho-acesso[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.status-acesso[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  color: #4f574f;\n  font-size: 0.57rem;\n  letter-spacing: 0.13em;\n}\n.status-acesso[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 0.44rem;\n  height: 0.44rem;\n  background: var(--fleiva-verde);\n  border-radius: 50%;\n  box-shadow: 0 0 0 0.25rem rgba(94, 136, 111, 0.12);\n}\n.numero-acesso[_ngcontent-%COMP%] {\n  color: rgba(11, 13, 12, 0.17);\n  font-size: 0.7rem;\n  font-weight: 800;\n}\n.formulario-login[_ngcontent-%COMP%] {\n  display: grid;\n  width: min(75%, 28rem);\n  align-self: center;\n  justify-self: center;\n  gap: 1.1rem;\n  padding: 3rem 0;\n}\n.cabecalho-formulario[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.cabecalho-formulario[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.6rem;\n  color: var(--fleiva-verde);\n  font-size: 0.65rem;\n  font-weight: 800;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n.cabecalho-formulario[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--preto);\n  font-size: clamp(2rem, 4vw, 3.15rem);\n  font-weight: 680;\n  line-height: 0.95;\n  letter-spacing: -0.055em;\n}\n.cabecalho-formulario[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 23rem;\n  margin-top: 1rem;\n  color: var(--texto-suave);\n  font-size: 0.84rem;\n  line-height: 1.55;\n}\n.campo[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n}\n.campo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #383e39;\n  font-size: 0.7rem;\n  font-weight: 750;\n}\n.campo[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #a23d37;\n  font-size: 0.69rem;\n}\n.controle[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 3.25rem;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  gap: 0.7rem;\n  padding: 0 0.9rem;\n  background: rgba(255, 255, 255, 0.45);\n  border: 1px solid #cec7b5;\n  transition:\n    border-color 160ms ease,\n    background 160ms ease,\n    box-shadow 160ms ease,\n    transform 160ms ease;\n}\n.controle[_ngcontent-%COMP%]:focus-within {\n  background: rgba(255, 255, 255, 0.68);\n  border-color: var(--fleiva-verde);\n  box-shadow: 0 0 0 0.2rem rgba(94, 136, 111, 0.13), 0 0.9rem 2rem rgba(28, 36, 30, 0.06);\n  transform: translateY(-1px);\n}\n.controle-invalido[_ngcontent-%COMP%] {\n  border-color: #b64a43;\n}\n.controle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.05rem;\n  height: 1.05rem;\n  color: #747a74;\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.6;\n}\n.controle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  min-height: 3.15rem;\n  padding: 0;\n  background: transparent;\n  color: var(--preto);\n  border: 0;\n  outline: none;\n  font: inherit;\n  font-size: 0.84rem;\n}\n.controle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #999b92;\n}\n.erro[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin: 0;\n  padding: 0.8rem 0.9rem;\n  background: rgba(180, 58, 51, 0.08);\n  color: #963b35;\n  border: 1px solid rgba(180, 58, 51, 0.22);\n  font-size: 0.74rem;\n}\n.erro[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 1.25rem;\n  height: 1.25rem;\n  flex: 0 0 auto;\n  place-items: center;\n  background: #a9433c;\n  color: white;\n  border-radius: 50%;\n  font-size: 0.64rem;\n  font-weight: 800;\n}\n.botao-entrar[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  min-height: 3.3rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: 0.4rem;\n  padding: 0.75rem 1rem 0.75rem 1.15rem;\n  background: var(--fleiva-verde);\n  color: #0c110e;\n  border: 1px solid var(--fleiva-verde);\n  font: inherit;\n  font-size: 0.78rem;\n  font-weight: 800;\n  cursor: pointer;\n  box-shadow: 0 1rem 2rem rgba(94, 136, 111, 0.17);\n  transition:\n    background 160ms ease,\n    box-shadow 160ms ease,\n    transform 160ms ease;\n}\n.botao-entrar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #6f9c80;\n  box-shadow: 0 1.2rem 2.5rem rgba(94, 136, 111, 0.24);\n  transform: translateY(-2px);\n}\n.botao-entrar[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.botao-entrar[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.52;\n}\n.botao-entrar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.15rem;\n  height: 1.15rem;\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.7;\n  transition: transform 160ms ease;\n}\n.botao-entrar[_ngcontent-%COMP%]:hover:not(:disabled)   svg[_ngcontent-%COMP%] {\n  transform: translateX(0.2rem);\n}\n.carregador[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  border: 0.12rem solid rgba(11, 13, 12, 0.25);\n  border-top-color: var(--preto);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_girar 700ms linear infinite;\n}\n.aviso-acesso[_ngcontent-%COMP%] {\n  max-width: 25rem;\n  margin: 0.2rem auto 0;\n  color: #777b71;\n  font-size: 0.67rem;\n  line-height: 1.55;\n  text-align: center;\n}\n.rodape-acesso[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  color: rgba(11, 13, 12, 0.3);\n  font-family: monospace;\n  font-size: 0.5rem;\n  letter-spacing: 0.1em;\n}\n@keyframes _ngcontent-%COMP%_entrada-logo {\n  from {\n    clip-path: inset(0 100% 0 0);\n    opacity: 0;\n    transform: translateX(-0.75rem);\n  }\n  to {\n    clip-path: inset(0);\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_jitter-claro {\n  0%, 100% {\n    transform: translate(-1px, -1px);\n  }\n  25% {\n    transform: translate(-4px, 1px);\n  }\n  50% {\n    transform: translate(2px, -2px);\n  }\n  75% {\n    transform: translate(-2px, 2px);\n  }\n}\n@keyframes _ngcontent-%COMP%_jitter-roxo {\n  0%, 100% {\n    transform: translate(3px, 4px);\n  }\n  25% {\n    transform: translate(6px, 1px);\n  }\n  50% {\n    transform: translate(0, 6px);\n  }\n  75% {\n    transform: translate(5px, 5px);\n  }\n}\n@keyframes _ngcontent-%COMP%_jitter-verde {\n  0%, 100% {\n    transform: translate(0);\n  }\n  25% {\n    transform: translate(1px, -1px);\n  }\n  50% {\n    transform: translate(-1px, 1px);\n  }\n  75% {\n    transform: translate(1px, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulso-onda {\n  from {\n    transform: scaleY(0.65);\n  }\n  to {\n    transform: scaleY(1.12);\n  }\n}\n@keyframes _ngcontent-%COMP%_girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 70rem) {\n  .pagina-login[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(27rem, 1fr) minmax(23rem, 0.82fr);\n  }\n  .conteudo-apresentacao[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n  .modulo-visual[_ngcontent-%COMP%] {\n    width: min(100%, 31rem);\n    justify-self: start;\n  }\n  .manifesto[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(3.6rem, 8vw, 5.5rem);\n  }\n}\n@media (max-width: 52rem) {\n  .pagina-login[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .apresentacao[_ngcontent-%COMP%] {\n    min-height: auto;\n    padding-bottom: 2.5rem;\n  }\n  .conteudo-apresentacao[_ngcontent-%COMP%] {\n    padding: 4rem 0 2rem;\n  }\n  .manifesto[_ngcontent-%COMP%] {\n    max-width: 38rem;\n  }\n  .modulo-visual[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .acesso[_ngcontent-%COMP%] {\n    min-height: auto;\n    padding-top: 2rem;\n  }\n  .formulario-login[_ngcontent-%COMP%] {\n    min-height: 35rem;\n  }\n}\n@media (max-width: 34rem) {\n  .apresentacao[_ngcontent-%COMP%], \n   .acesso[_ngcontent-%COMP%] {\n    padding-right: 1.25rem;\n    padding-left: 1.25rem;\n  }\n  .identificador[_ngcontent-%COMP%], \n   .numero-acesso[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .manifesto[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(3rem, 18vw, 4.5rem);\n  }\n  .texto-manifesto[_ngcontent-%COMP%] {\n    font-size: 0.84rem;\n  }\n  .centro-modulo[_ngcontent-%COMP%] {\n    min-height: 13rem;\n    grid-template-columns: minmax(7rem, 0.8fr) minmax(9rem, 1.2fr);\n  }\n  .selo-fleiva[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .selo-fleiva[_ngcontent-%COMP%]::before {\n    inset: 0.65rem;\n  }\n  .fleiva-monograma[_ngcontent-%COMP%] {\n    width: 4rem;\n  }\n  .selo-fleiva[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .leitura[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .onda[_ngcontent-%COMP%] {\n    height: 4.5rem;\n    gap: 0.15rem;\n    padding: 0.5rem;\n  }\n  .rodape-modulo[_ngcontent-%COMP%] {\n    overflow: hidden;\n    white-space: nowrap;\n  }\n  .rodape-apresentacao[_ngcontent-%COMP%], \n   .rodape-acesso[_ngcontent-%COMP%] {\n    font-size: 0.46rem;\n  }\n  .formulario-login[_ngcontent-%COMP%] {\n    min-height: 33rem;\n    padding: 3rem 0;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .fleiva-wordmark[_ngcontent-%COMP%], \n   .fleiva-camada[_ngcontent-%COMP%], \n   .onda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n   .carregador[_ngcontent-%COMP%] {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n  }\n  .modulo-visual[_ngcontent-%COMP%], \n   .controle[_ngcontent-%COMP%], \n   .botao-entrar[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.aviso-acesso[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  font-weight: 750;\n  text-decoration: underline;\n  text-underline-offset: 0.18rem;\n}\n.aviso-acesso[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--studio-brand);\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginaLogin, [{
    type: Component,
    args: [{ selector: "app-login", imports: [ReactiveFormsModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="pagina-login">
  <section
    class="apresentacao"
    aria-labelledby="titulo-apresentacao"
  >
    <div class="textura" aria-hidden="true"></div>

    <header class="cabecalho-marca">
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

        <span class="marca-complemento">STUDIOS</span>
      </div>

      <span class="identificador">FLV \xB7 001</span>
    </header>

    <div class="conteudo-apresentacao">
      <div class="manifesto">
        <p class="sobretitulo">
          GEST\xC3O PARA EST\xDADIOS INDEPENDENTES
        </p>

        <h1 id="titulo-apresentacao">
          Seu est\xFAdio.
          <span>Seu fluxo.</span>
        </h1>

        <p class="texto-manifesto">
          Agenda, trabalhos, arquivos e acertos organizados
          sem transformar seu est\xFAdio em um escrit\xF3rio.
        </p>

        <div class="areas-produto" aria-label="Recursos do Fleiva">
          <span>AGENDA</span>
          <span>ACERVO</span>
          <span>ACERTOS</span>
        </div>
      </div>

      <div class="modulo-visual" aria-hidden="true">
        <header class="topo-modulo">
          <span>FL\xCAIVA / CONTROL</span>

          <span class="status-modulo">
            <i></i>
            SISTEMA ATIVO
          </span>
        </header>

        <div class="centro-modulo">
          <div class="selo-fleiva">
            <span class="fleiva-monograma">
              <span
                class="fleiva-camada fleiva-camada-clara"
              ></span>

              <span
                class="fleiva-camada fleiva-camada-roxa"
              ></span>

              <span
                class="fleiva-camada fleiva-camada-verde"
              ></span>
            </span>

            <small>INDEPENDENT SOUND SYSTEM</small>
          </div>

          <div class="leitura">
            <div class="cabecalho-leitura">
              <span>EST\xDADIO</span>
              <strong>ON AIR</strong>
            </div>

            <div class="onda">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>

            <div class="linha-leitura">
              <span>FLUXO</span>
              <strong>ORGANIZADO</strong>
            </div>
          </div>
        </div>

        <footer class="rodape-modulo">
          <span>01 / AGENDA</span>
          <span>02 / ACERVO</span>
          <span>03 / FINANCEIRO</span>
        </footer>
      </div>
    </div>

    <footer class="rodape-apresentacao">
      <span>FEITO PARA QUEM FAZ M\xDASICA</span>
      <span>BRASIL \xB7 2026</span>
    </footer>
  </section>

  <section class="acesso" aria-label="Acesso ao sistema">
    <div class="cabecalho-acesso">
      <div class="status-acesso">
        <span aria-hidden="true"></span>
        <strong>ACESSO PRIVADO</strong>
      </div>

      <span class="numero-acesso">01</span>
    </div>

    <form
      class="formulario-login"
      [formGroup]="formulario"
      (ngSubmit)="entrar()"
    >
      <header class="cabecalho-formulario">
        <p>Bem-vindo de volta</p>
        <h2>Entre no seu est\xFAdio</h2>

        <span>
          Use os dados de acesso vinculados ao seu perfil.
        </span>
      </header>

      <div class="campo">
        <label for="email">E-mail</label>

        <div
          class="controle"
          [class.controle-invalido]="
            formulario.controls.email.touched &&
            formulario.controls.email.invalid
          "
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="2"
            />
            <path d="m4 7 8 6 8-6" />
          </svg>

          <input
            id="email"
            type="email"
            formControlName="email"
            autocomplete="email"
            inputmode="email"
            placeholder="voce@estudio.com"
          />
        </div>

        @if (
          formulario.controls.email.touched &&
          formulario.controls.email.invalid
        ) {
          <small>Informe um e-mail v\xE1lido.</small>
        }
      </div>

      <div class="campo">
        <label for="senha">Senha</label>

        <div
          class="controle"
          [class.controle-invalido]="
            formulario.controls.senha.touched &&
            formulario.controls.senha.invalid
          "
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect
              x="5"
              y="10"
              width="14"
              height="11"
              rx="2"
            />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            <path d="M12 14v3" />
          </svg>

          <input
            id="senha"
            type="password"
            formControlName="senha"
            autocomplete="current-password"
            placeholder="Sua senha"
          />
        </div>

        @if (
          formulario.controls.senha.touched &&
          formulario.controls.senha.invalid
        ) {
          <small>Informe sua senha.</small>
        }
      </div>

      @if (mensagemErro()) {
        <p class="erro" role="alert">
          <span aria-hidden="true">!</span>
          {{ mensagemErro() }}
        </p>
      }

      <button
        type="submit"
        class="botao-entrar"
        [disabled]="formulario.invalid || enviando()"
      >
        <span>
          {{ enviando() ? 'Entrando...' : 'Entrar no Fl\xEAiva' }}
        </span>

        @if (enviando()) {
          <i class="carregador" aria-hidden="true"></i>
        } @else {
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        }
      </button>

      <p class="aviso-acesso">
  Ainda n\xE3o tem uma conta?

  <a routerLink="/cadastro">
    Criar p\xE1gina gratuita
  </a>
</p>
    </form>

    <footer class="rodape-acesso">
      <span>FL\xCAIVA STUDIOS</span>
      <span>SISTEMA SEGURO</span>
    </footer>
  </section>
</main>
`, styles: ['@charset "UTF-8";\n\n/* apps/studio-dash/src/app/paginas/login/login.scss */\n:host {\n  display: block;\n  min-height: 100dvh;\n}\n.pagina-login {\n  --fleiva-verde: #5e886f;\n  --fleiva-verde-claro: #91b09d;\n  --fleiva-roxo: #885f74;\n  --fleiva-creme: #f7f2e0;\n  --fleiva-creme-escuro: #e6deca;\n  --preto: #0b0d0c;\n  --preto-suave: #121512;\n  --texto-suave: #6f756f;\n  --borda-escura: rgb(247 242 224 / 14%);\n  --mascara-wordmark: url(/fleiva-brand-kit/mask/fleiva-wordmark-mask.png);\n  --mascara-monograma: url(/fleiva-brand-kit/mask/fleiva-monogram-mask.png);\n  display: grid;\n  min-height: 100dvh;\n  grid-template-columns: minmax(31rem, 1.2fr) minmax(25rem, 0.8fr);\n  background: var(--preto);\n  color: var(--app-background);\n}\n.apresentacao {\n  position: relative;\n  display: grid;\n  min-width: 0;\n  min-height: 100dvh;\n  grid-template-rows: auto 1fr auto;\n  overflow: hidden;\n  padding: clamp(1.5rem, 4vw, 3.5rem) clamp(1.5rem, 5vw, 4.5rem) 1.75rem;\n  background:\n    radial-gradient(\n      circle at 76% 26%,\n      rgba(94, 136, 111, 0.18),\n      transparent 26rem),\n    radial-gradient(\n      circle at 8% 88%,\n      rgba(136, 95, 116, 0.14),\n      transparent 24rem),\n    var(--preto);\n  isolation: isolate;\n}\n.apresentacao::before {\n  position: absolute;\n  z-index: -2;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(247, 242, 224, 0.03) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(247, 242, 224, 0.03) 1px,\n      transparent 1px);\n  background-size: 4rem 4rem;\n  content: "";\n  -webkit-mask-image:\n    linear-gradient(\n      to bottom,\n      transparent,\n      black 15%,\n      black 85%,\n      transparent);\n  mask-image:\n    linear-gradient(\n      to bottom,\n      transparent,\n      black 15%,\n      black 85%,\n      transparent);\n}\n.apresentacao::after {\n  position: absolute;\n  z-index: -1;\n  right: -13rem;\n  bottom: -16rem;\n  width: 34rem;\n  height: 34rem;\n  border: 1px solid rgba(247, 242, 224, 0.05);\n  border-radius: 50%;\n  content: "";\n}\n.textura {\n  position: absolute;\n  z-index: -1;\n  inset: 0;\n  opacity: 0.14;\n  pointer-events: none;\n  background-image:\n    repeating-linear-gradient(\n      115deg,\n      transparent 0,\n      transparent 4px,\n      rgba(255, 255, 255, 0.015) 5px);\n}\n.cabecalho-marca {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 2rem;\n}\n.marca-fleiva {\n  display: flex;\n  width: fit-content;\n  align-items: flex-end;\n  gap: 0.65rem;\n}\n.fleiva-wordmark,\n.fleiva-monograma {\n  position: relative;\n  display: block;\n  isolation: isolate;\n}\n.fleiva-wordmark {\n  --fleiva-mascara: var(--mascara-wordmark);\n  width: clamp(8.75rem, 13vw, 11.5rem);\n  aspect-ratio: 1256/596;\n  animation: entrada-logo 700ms cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n.fleiva-monograma {\n  --fleiva-mascara: var(--mascara-monograma);\n  width: clamp(4.75rem, 7vw, 6.5rem);\n  aspect-ratio: 495/554;\n}\n.fleiva-camada {\n  position: absolute;\n  inset: 0;\n  background: currentColor;\n  mask: var(--fleiva-mascara) center/contain no-repeat;\n  -webkit-mask: var(--fleiva-mascara) center/contain no-repeat;\n  pointer-events: none;\n  will-change: transform;\n}\n.fleiva-camada-clara {\n  color: var(--fleiva-creme);\n  transform: translate(-1px, -1px);\n}\n.fleiva-camada-roxa {\n  color: var(--fleiva-roxo);\n  transform: translate(3px, 4px);\n}\n.fleiva-camada-verde {\n  color: var(--fleiva-verde);\n}\n.marca-complemento {\n  margin-bottom: 0.8rem;\n  color: rgba(247, 242, 224, 0.62);\n  font-size: 0.53rem;\n  font-weight: 800;\n  letter-spacing: 0.26em;\n  writing-mode: vertical-rl;\n  transform: rotate(180deg);\n}\n.identificador {\n  padding-top: 0.4rem;\n  color: rgba(247, 242, 224, 0.3);\n  font-family: monospace;\n  font-size: 0.6rem;\n  letter-spacing: 0.12em;\n}\n.conteudo-apresentacao {\n  display: grid;\n  grid-template-columns: minmax(17rem, 0.9fr) minmax(20rem, 1.1fr);\n  align-items: center;\n  gap: clamp(2.5rem, 5vw, 5rem);\n  padding: 3rem 0;\n}\n.manifesto {\n  position: relative;\n  z-index: 2;\n}\n.sobretitulo {\n  margin: 0 0 1.25rem;\n  color: var(--fleiva-verde-claro);\n  font-size: 0.62rem;\n  font-weight: 800;\n  letter-spacing: 0.16em;\n}\n.manifesto h1 {\n  max-width: 36rem;\n  margin: 0;\n  color: var(--fleiva-creme);\n  font-size: clamp(3.3rem, 6vw, 6.5rem);\n  font-weight: 680;\n  line-height: 0.85;\n  letter-spacing: -0.075em;\n}\n.manifesto h1 span {\n  display: block;\n  color: var(--fleiva-verde);\n}\n.texto-manifesto {\n  max-width: 31rem;\n  margin: 1.75rem 0 0;\n  color: rgba(247, 242, 224, 0.6);\n  font-size: clamp(0.88rem, 1.2vw, 1.02rem);\n  line-height: 1.65;\n}\n.areas-produto {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.45rem;\n  margin-top: 2rem;\n}\n.areas-produto span {\n  padding: 0.42rem 0.62rem;\n  color: rgba(247, 242, 224, 0.48);\n  border: 1px solid var(--borda-escura);\n  font-size: 0.54rem;\n  font-weight: 750;\n  letter-spacing: 0.13em;\n}\n.modulo-visual {\n  width: min(100%, 34rem);\n  justify-self: end;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(255, 255, 255, 0.03),\n      transparent 50%),\n    rgba(18, 21, 18, 0.86);\n  border: 1px solid var(--borda-escura);\n  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.28), inset 0 1px rgba(255, 255, 255, 0.04);\n  -webkit-backdrop-filter: blur(0.75rem);\n  backdrop-filter: blur(0.75rem);\n  transition: border-color 180ms ease, transform 180ms ease;\n}\n.modulo-visual:hover {\n  border-color: rgba(94, 136, 111, 0.45);\n  transform: translateY(-0.15rem);\n}\n.topo-modulo,\n.rodape-modulo {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.8rem 1rem;\n  color: rgba(247, 242, 224, 0.4);\n  font-family: monospace;\n  font-size: 0.52rem;\n  letter-spacing: 0.09em;\n}\n.topo-modulo {\n  border-bottom: 1px solid var(--borda-escura);\n}\n.rodape-modulo {\n  border-top: 1px solid var(--borda-escura);\n}\n.status-modulo {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: var(--fleiva-verde-claro);\n}\n.status-modulo i {\n  width: 0.4rem;\n  height: 0.4rem;\n  background: var(--fleiva-verde-claro);\n  border-radius: 50%;\n  box-shadow: 0 0 0.65rem var(--fleiva-verde);\n}\n.centro-modulo {\n  display: grid;\n  min-height: 16rem;\n  grid-template-columns: minmax(8.5rem, 0.75fr) minmax(11rem, 1.25fr);\n}\n.selo-fleiva {\n  position: relative;\n  display: grid;\n  align-content: center;\n  justify-items: center;\n  gap: 1.25rem;\n  padding: 1.5rem;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(94, 136, 111, 0.09),\n      transparent 65%);\n  border-right: 1px solid var(--borda-escura);\n}\n.selo-fleiva::before {\n  position: absolute;\n  inset: 1rem;\n  border: 1px solid rgba(247, 242, 224, 0.05);\n  content: "";\n  pointer-events: none;\n}\n.selo-fleiva small {\n  position: relative;\n  z-index: 1;\n  color: rgba(247, 242, 224, 0.3);\n  font-family: monospace;\n  font-size: 0.43rem;\n  letter-spacing: 0.11em;\n  line-height: 1.5;\n  text-align: center;\n}\n.leitura {\n  display: grid;\n  align-content: space-between;\n  gap: 1rem;\n  padding: 1.4rem;\n}\n.cabecalho-leitura,\n.linha-leitura {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.cabecalho-leitura span,\n.linha-leitura span {\n  color: rgba(247, 242, 224, 0.36);\n  font-family: monospace;\n  font-size: 0.5rem;\n  letter-spacing: 0.1em;\n}\n.cabecalho-leitura strong {\n  color: var(--fleiva-verde-claro);\n  font-family: monospace;\n  font-size: 0.63rem;\n  letter-spacing: 0.09em;\n}\n.linha-leitura strong {\n  color: var(--fleiva-creme);\n  font-size: 0.58rem;\n  letter-spacing: 0.07em;\n}\n.onda {\n  display: flex;\n  height: 5.5rem;\n  align-items: center;\n  justify-content: center;\n  gap: clamp(0.16rem, 0.5vw, 0.32rem);\n  padding: 0.75rem;\n  background: rgba(0, 0, 0, 0.16);\n  border: 1px solid rgba(247, 242, 224, 0.06);\n}\n.onda i {\n  width: 0.18rem;\n  height: var(--altura, 45%);\n  background:\n    linear-gradient(\n      to top,\n      var(--fleiva-roxo),\n      var(--fleiva-verde-claro));\n  opacity: 0.78;\n  transform-origin: center;\n}\n.onda i:nth-child(1),\n.onda i:nth-child(16) {\n  --altura: 16%;\n}\n.onda i:nth-child(2),\n.onda i:nth-child(15) {\n  --altura: 31%;\n}\n.onda i:nth-child(3),\n.onda i:nth-child(14) {\n  --altura: 54%;\n}\n.onda i:nth-child(4),\n.onda i:nth-child(13) {\n  --altura: 36%;\n}\n.onda i:nth-child(5),\n.onda i:nth-child(12) {\n  --altura: 74%;\n}\n.onda i:nth-child(6),\n.onda i:nth-child(11) {\n  --altura: 48%;\n}\n.onda i:nth-child(7),\n.onda i:nth-child(10) {\n  --altura: 86%;\n}\n.onda i:nth-child(8),\n.onda i:nth-child(9) {\n  --altura: 62%;\n}\n.modulo-visual:hover .onda i {\n  animation: pulso-onda 650ms ease-in-out calc(var(--indice, 0) * 30ms) 2 alternate;\n}\n.onda i:nth-child(2) {\n  --indice: 1;\n}\n.onda i:nth-child(3) {\n  --indice: 2;\n}\n.onda i:nth-child(4) {\n  --indice: 3;\n}\n.onda i:nth-child(5) {\n  --indice: 4;\n}\n.onda i:nth-child(6) {\n  --indice: 5;\n}\n.onda i:nth-child(7) {\n  --indice: 6;\n}\n.onda i:nth-child(8) {\n  --indice: 7;\n}\n.marca-fleiva:hover .fleiva-camada-clara,\n.selo-fleiva:hover .fleiva-camada-clara {\n  animation: jitter-claro 340ms steps(2, end);\n}\n.marca-fleiva:hover .fleiva-camada-roxa,\n.selo-fleiva:hover .fleiva-camada-roxa {\n  animation: jitter-roxo 340ms steps(2, end);\n}\n.marca-fleiva:hover .fleiva-camada-verde,\n.selo-fleiva:hover .fleiva-camada-verde {\n  animation: jitter-verde 340ms steps(2, end);\n}\n.rodape-apresentacao {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  color: rgba(247, 242, 224, 0.26);\n  font-family: monospace;\n  font-size: 0.51rem;\n  letter-spacing: 0.1em;\n}\n.acesso {\n  display: grid;\n  min-height: 100dvh;\n  grid-template-rows: auto 1fr auto;\n  padding: clamp(1.5rem, 4vw, 3rem) clamp(1.5rem, 5vw, 4.5rem) 1.75rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.42),\n      transparent 13rem),\n    var(--app-background);\n  color: var(--preto);\n}\n.cabecalho-acesso {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.status-acesso {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  color: #4f574f;\n  font-size: 0.57rem;\n  letter-spacing: 0.13em;\n}\n.status-acesso > span {\n  width: 0.44rem;\n  height: 0.44rem;\n  background: var(--fleiva-verde);\n  border-radius: 50%;\n  box-shadow: 0 0 0 0.25rem rgba(94, 136, 111, 0.12);\n}\n.numero-acesso {\n  color: rgba(11, 13, 12, 0.17);\n  font-size: 0.7rem;\n  font-weight: 800;\n}\n.formulario-login {\n  display: grid;\n  width: min(75%, 28rem);\n  align-self: center;\n  justify-self: center;\n  gap: 1.1rem;\n  padding: 3rem 0;\n}\n.cabecalho-formulario {\n  margin-bottom: 1rem;\n}\n.cabecalho-formulario p {\n  margin: 0 0 0.6rem;\n  color: var(--fleiva-verde);\n  font-size: 0.65rem;\n  font-weight: 800;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n.cabecalho-formulario h2 {\n  margin: 0;\n  color: var(--preto);\n  font-size: clamp(2rem, 4vw, 3.15rem);\n  font-weight: 680;\n  line-height: 0.95;\n  letter-spacing: -0.055em;\n}\n.cabecalho-formulario > span {\n  display: block;\n  max-width: 23rem;\n  margin-top: 1rem;\n  color: var(--texto-suave);\n  font-size: 0.84rem;\n  line-height: 1.55;\n}\n.campo {\n  display: grid;\n  gap: 0.45rem;\n}\n.campo label {\n  color: #383e39;\n  font-size: 0.7rem;\n  font-weight: 750;\n}\n.campo small {\n  color: #a23d37;\n  font-size: 0.69rem;\n}\n.controle {\n  display: grid;\n  min-height: 3.25rem;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  gap: 0.7rem;\n  padding: 0 0.9rem;\n  background: rgba(255, 255, 255, 0.45);\n  border: 1px solid #cec7b5;\n  transition:\n    border-color 160ms ease,\n    background 160ms ease,\n    box-shadow 160ms ease,\n    transform 160ms ease;\n}\n.controle:focus-within {\n  background: rgba(255, 255, 255, 0.68);\n  border-color: var(--fleiva-verde);\n  box-shadow: 0 0 0 0.2rem rgba(94, 136, 111, 0.13), 0 0.9rem 2rem rgba(28, 36, 30, 0.06);\n  transform: translateY(-1px);\n}\n.controle-invalido {\n  border-color: #b64a43;\n}\n.controle svg {\n  width: 1.05rem;\n  height: 1.05rem;\n  color: #747a74;\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.6;\n}\n.controle input {\n  width: 100%;\n  min-width: 0;\n  min-height: 3.15rem;\n  padding: 0;\n  background: transparent;\n  color: var(--preto);\n  border: 0;\n  outline: none;\n  font: inherit;\n  font-size: 0.84rem;\n}\n.controle input::placeholder {\n  color: #999b92;\n}\n.erro {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin: 0;\n  padding: 0.8rem 0.9rem;\n  background: rgba(180, 58, 51, 0.08);\n  color: #963b35;\n  border: 1px solid rgba(180, 58, 51, 0.22);\n  font-size: 0.74rem;\n}\n.erro > span {\n  display: grid;\n  width: 1.25rem;\n  height: 1.25rem;\n  flex: 0 0 auto;\n  place-items: center;\n  background: #a9433c;\n  color: white;\n  border-radius: 50%;\n  font-size: 0.64rem;\n  font-weight: 800;\n}\n.botao-entrar {\n  display: flex;\n  width: 100%;\n  min-height: 3.3rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: 0.4rem;\n  padding: 0.75rem 1rem 0.75rem 1.15rem;\n  background: var(--fleiva-verde);\n  color: #0c110e;\n  border: 1px solid var(--fleiva-verde);\n  font: inherit;\n  font-size: 0.78rem;\n  font-weight: 800;\n  cursor: pointer;\n  box-shadow: 0 1rem 2rem rgba(94, 136, 111, 0.17);\n  transition:\n    background 160ms ease,\n    box-shadow 160ms ease,\n    transform 160ms ease;\n}\n.botao-entrar:hover:not(:disabled) {\n  background: #6f9c80;\n  box-shadow: 0 1.2rem 2.5rem rgba(94, 136, 111, 0.24);\n  transform: translateY(-2px);\n}\n.botao-entrar:active:not(:disabled) {\n  transform: translateY(0);\n}\n.botao-entrar:disabled {\n  cursor: wait;\n  opacity: 0.52;\n}\n.botao-entrar svg {\n  width: 1.15rem;\n  height: 1.15rem;\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.7;\n  transition: transform 160ms ease;\n}\n.botao-entrar:hover:not(:disabled) svg {\n  transform: translateX(0.2rem);\n}\n.carregador {\n  width: 1rem;\n  height: 1rem;\n  border: 0.12rem solid rgba(11, 13, 12, 0.25);\n  border-top-color: var(--preto);\n  border-radius: 50%;\n  animation: girar 700ms linear infinite;\n}\n.aviso-acesso {\n  max-width: 25rem;\n  margin: 0.2rem auto 0;\n  color: #777b71;\n  font-size: 0.67rem;\n  line-height: 1.55;\n  text-align: center;\n}\n.rodape-acesso {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  color: rgba(11, 13, 12, 0.3);\n  font-family: monospace;\n  font-size: 0.5rem;\n  letter-spacing: 0.1em;\n}\n@keyframes entrada-logo {\n  from {\n    clip-path: inset(0 100% 0 0);\n    opacity: 0;\n    transform: translateX(-0.75rem);\n  }\n  to {\n    clip-path: inset(0);\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes jitter-claro {\n  0%, 100% {\n    transform: translate(-1px, -1px);\n  }\n  25% {\n    transform: translate(-4px, 1px);\n  }\n  50% {\n    transform: translate(2px, -2px);\n  }\n  75% {\n    transform: translate(-2px, 2px);\n  }\n}\n@keyframes jitter-roxo {\n  0%, 100% {\n    transform: translate(3px, 4px);\n  }\n  25% {\n    transform: translate(6px, 1px);\n  }\n  50% {\n    transform: translate(0, 6px);\n  }\n  75% {\n    transform: translate(5px, 5px);\n  }\n}\n@keyframes jitter-verde {\n  0%, 100% {\n    transform: translate(0);\n  }\n  25% {\n    transform: translate(1px, -1px);\n  }\n  50% {\n    transform: translate(-1px, 1px);\n  }\n  75% {\n    transform: translate(1px, 0);\n  }\n}\n@keyframes pulso-onda {\n  from {\n    transform: scaleY(0.65);\n  }\n  to {\n    transform: scaleY(1.12);\n  }\n}\n@keyframes girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 70rem) {\n  .pagina-login {\n    grid-template-columns: minmax(27rem, 1fr) minmax(23rem, 0.82fr);\n  }\n  .conteudo-apresentacao {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n  .modulo-visual {\n    width: min(100%, 31rem);\n    justify-self: start;\n  }\n  .manifesto h1 {\n    font-size: clamp(3.6rem, 8vw, 5.5rem);\n  }\n}\n@media (max-width: 52rem) {\n  .pagina-login {\n    grid-template-columns: 1fr;\n  }\n  .apresentacao {\n    min-height: auto;\n    padding-bottom: 2.5rem;\n  }\n  .conteudo-apresentacao {\n    padding: 4rem 0 2rem;\n  }\n  .manifesto {\n    max-width: 38rem;\n  }\n  .modulo-visual {\n    width: 100%;\n  }\n  .acesso {\n    min-height: auto;\n    padding-top: 2rem;\n  }\n  .formulario-login {\n    min-height: 35rem;\n  }\n}\n@media (max-width: 34rem) {\n  .apresentacao,\n  .acesso {\n    padding-right: 1.25rem;\n    padding-left: 1.25rem;\n  }\n  .identificador,\n  .numero-acesso {\n    display: none;\n  }\n  .manifesto h1 {\n    font-size: clamp(3rem, 18vw, 4.5rem);\n  }\n  .texto-manifesto {\n    font-size: 0.84rem;\n  }\n  .centro-modulo {\n    min-height: 13rem;\n    grid-template-columns: minmax(7rem, 0.8fr) minmax(9rem, 1.2fr);\n  }\n  .selo-fleiva {\n    padding: 1rem;\n  }\n  .selo-fleiva::before {\n    inset: 0.65rem;\n  }\n  .fleiva-monograma {\n    width: 4rem;\n  }\n  .selo-fleiva small {\n    display: none;\n  }\n  .leitura {\n    padding: 1rem;\n  }\n  .onda {\n    height: 4.5rem;\n    gap: 0.15rem;\n    padding: 0.5rem;\n  }\n  .rodape-modulo {\n    overflow: hidden;\n    white-space: nowrap;\n  }\n  .rodape-apresentacao,\n  .rodape-acesso {\n    font-size: 0.46rem;\n  }\n  .formulario-login {\n    min-height: 33rem;\n    padding: 3rem 0;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .fleiva-wordmark,\n  .fleiva-camada,\n  .onda i,\n  .carregador {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n  }\n  .modulo-visual,\n  .controle,\n  .botao-entrar {\n    transition: none;\n  }\n}\n.aviso-acesso a {\n  color: inherit;\n  font-weight: 750;\n  text-decoration: underline;\n  text-underline-offset: 0.18rem;\n}\n.aviso-acesso a:hover {\n  color: var(--studio-brand);\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginaLogin, { className: "PaginaLogin", filePath: "apps/studio-dash/src/app/paginas/login/login.ts", lineNumber: 17 });
})();
export {
  PaginaLogin
};
