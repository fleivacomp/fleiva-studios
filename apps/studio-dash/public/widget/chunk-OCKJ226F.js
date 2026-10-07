import {
  Autenticacao,
  ClienteSupabase,
  Component,
  DadosEstudio,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IMBOO5ID.js";

// apps/studio-dash/src/app/layout/layout-principal/layout-principal.ts
function LayoutPrincipal_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.dadosEstudio.logoUrl(), \u0275\u0275sanitizeUrl)("alt", "Logo de " + ctx_r0.nomeEstudio());
  }
}
function LayoutPrincipal_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.inicialEstudio(), " ");
  }
}
function LayoutPrincipal_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 35);
    \u0275\u0275listener("click", function LayoutPrincipal_Conditional_13_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharMenusFlutuantes());
    });
    \u0275\u0275text(1, "Projetos");
    \u0275\u0275elementEnd();
  }
}
function LayoutPrincipal_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 36);
    \u0275\u0275listener("click", function LayoutPrincipal_Conditional_14_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharMenusFlutuantes());
    });
    \u0275\u0275text(1, "Projetos externos");
    \u0275\u0275elementEnd();
  }
}
function LayoutPrincipal_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 37);
    \u0275\u0275listener("click", function LayoutPrincipal_Conditional_15_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharMenusFlutuantes());
    });
    \u0275\u0275text(1, "Faixas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 38);
    \u0275\u0275listener("click", function LayoutPrincipal_Conditional_15_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharMenusFlutuantes());
    });
    \u0275\u0275text(3, "\xC1lbuns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 39);
    \u0275\u0275listener("click", function LayoutPrincipal_Conditional_15_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharMenusFlutuantes());
    });
    \u0275\u0275text(5, "Experi\xEAncias");
    \u0275\u0275elementEnd();
  }
}
function LayoutPrincipal_Conditional_16_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 41);
    \u0275\u0275listener("click", function LayoutPrincipal_Conditional_16_Conditional_6_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.fecharMenusFlutuantes());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Agenda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4, "Sess\xF5es e compromissos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 42);
    \u0275\u0275listener("click", function LayoutPrincipal_Conditional_16_Conditional_6_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.fecharMenusFlutuantes());
    });
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Contatos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9, "Pessoas e v\xEDnculos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "a", 43);
    \u0275\u0275listener("click", function LayoutPrincipal_Conditional_16_Conditional_6_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.fecharMenusFlutuantes());
    });
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Servi\xE7os");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "small");
    \u0275\u0275text(14, "Configura\xE7\xE3o do est\xFAdio");
    \u0275\u0275elementEnd()();
  }
}
function LayoutPrincipal_Conditional_16_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 44);
    \u0275\u0275listener("click", function LayoutPrincipal_Conditional_16_Conditional_7_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.fecharMenusFlutuantes());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Acertos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4, "Financeiro");
    \u0275\u0275elementEnd()();
  }
}
function LayoutPrincipal_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details", 10)(1, "summary");
    \u0275\u0275text(2, " Est\xFAdio ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 17);
    \u0275\u0275element(4, "path", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 40);
    \u0275\u0275conditionalCreate(6, LayoutPrincipal_Conditional_16_Conditional_6_Template, 15, 0);
    \u0275\u0275conditionalCreate(7, LayoutPrincipal_Conditional_16_Conditional_7_Template, 5, 0, "a", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.dadosEstudio.possuiModulo("agenda") ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.dadosEstudio.possuiModulo("financeiro") ? 7 : -1);
  }
}
function LayoutPrincipal_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275text(1, " Conhecer o Fl\xEAiva ");
    \u0275\u0275elementEnd();
  }
}
function LayoutPrincipal_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Perfil do est\xFAdio ");
  }
}
function LayoutPrincipal_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Minha p\xE1gina p\xFAblica ");
  }
}
function LayoutPrincipal_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Tema claro ");
  }
}
function LayoutPrincipal_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Tema escuro ");
  }
}
function LayoutPrincipal_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Restaurar luz ");
  }
}
function LayoutPrincipal_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Luz baixa ");
  }
}
function LayoutPrincipal_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.erroSaida());
  }
}
function LayoutPrincipal_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Saindo... ");
  }
}
function LayoutPrincipal_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Sair ");
  }
}
function LayoutPrincipal_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function LayoutPrincipal_Conditional_50_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharMenu());
    });
    \u0275\u0275elementEnd();
  }
}
function LayoutPrincipal_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 35);
    \u0275\u0275listener("click", function LayoutPrincipal_Conditional_58_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharMenu());
    });
    \u0275\u0275text(1, " Projetos ");
    \u0275\u0275elementEnd();
  }
}
function LayoutPrincipal_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 36);
    \u0275\u0275listener("click", function LayoutPrincipal_Conditional_59_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharMenu());
    });
    \u0275\u0275text(1, " Projetos externos ");
    \u0275\u0275elementEnd();
  }
}
function LayoutPrincipal_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 37);
    \u0275\u0275listener("click", function LayoutPrincipal_Conditional_60_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharMenu());
    });
    \u0275\u0275text(1, " Faixas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 38);
    \u0275\u0275listener("click", function LayoutPrincipal_Conditional_60_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharMenu());
    });
    \u0275\u0275text(3, " \xC1lbuns ");
    \u0275\u0275elementEnd();
  }
}
function LayoutPrincipal_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Est\xFAdio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 41);
    \u0275\u0275listener("click", function LayoutPrincipal_Conditional_61_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharMenu());
    });
    \u0275\u0275text(3, " Agenda ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 42);
    \u0275\u0275listener("click", function LayoutPrincipal_Conditional_61_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharMenu());
    });
    \u0275\u0275text(5, " Contatos ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 43);
    \u0275\u0275listener("click", function LayoutPrincipal_Conditional_61_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharMenu());
    });
    \u0275\u0275text(7, " Servi\xE7os ");
    \u0275\u0275elementEnd();
  }
}
function LayoutPrincipal_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 44);
    \u0275\u0275listener("click", function LayoutPrincipal_Conditional_62_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fecharMenu());
    });
    \u0275\u0275text(1, " Acertos ");
    \u0275\u0275elementEnd();
  }
}
function LayoutPrincipal_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Tema claro ");
  }
}
function LayoutPrincipal_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Tema escuro ");
  }
}
function LayoutPrincipal_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Restaurar luz ");
  }
}
function LayoutPrincipal_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Luz baixa ");
  }
}
function LayoutPrincipal_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Saindo... ");
  }
}
function LayoutPrincipal_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Sair ");
  }
}
var CHAVE_TEMA_ESCURO = "fleiva-tema-escuro";
var CHAVE_LUZ_BAIXA = "fleiva-luz-baixa";
var CHAVE_MODO_NOTURNO_ANTIGA = "fleiva-modo-noturno";
var LayoutPrincipal = class _LayoutPrincipal {
  autenticacao = inject(Autenticacao);
  dadosEstudio = inject(DadosEstudio);
  temAcessoComoContato = signal(
    false,
    ...ngDevMode ? [{ debugName: "temAcessoComoContato" }] : (
      /* istanbul ignore next */
      []
    )
  );
  clienteSupabase = inject(ClienteSupabase);
  roteador = inject(Router);
  menuAberto = signal(
    false,
    ...ngDevMode ? [{ debugName: "menuAberto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  saindo = signal(
    false,
    ...ngDevMode ? [{ debugName: "saindo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroSaida = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroSaida" }] : (
      /* istanbul ignore next */
      []
    )
  );
  temaEscuro = signal(
    this.carregarPreferencia(CHAVE_TEMA_ESCURO),
    ...ngDevMode ? [{ debugName: "temaEscuro" }] : (
      /* istanbul ignore next */
      []
    )
  );
  luzBaixa = signal(
    this.carregarPreferencia(CHAVE_LUZ_BAIXA, CHAVE_MODO_NOTURNO_ANTIGA),
    ...ngDevMode ? [{ debugName: "luzBaixa" }] : (
      /* istanbul ignore next */
      []
    )
  );
  nomeEstudio = computed(
    () => this.dadosEstudio.estudio()?.nome ?? "Fl\xEAiva",
    ...ngDevMode ? [{ debugName: "nomeEstudio" }] : (
      /* istanbul ignore next */
      []
    )
  );
  inicialEstudio = computed(
    () => this.nomeEstudio().trim().charAt(0).toLocaleUpperCase("pt-BR") || "F",
    ...ngDevMode ? [{ debugName: "inicialEstudio" }] : (
      /* istanbul ignore next */
      []
    )
  );
  destinoInicial = computed(
    () => {
      if (this.dadosEstudio.estudio()) {
        if (this.dadosEstudio.possuiModulo("agenda")) {
          return "/agendamentos";
        }
        if (this.dadosEstudio.possuiModulo("artistas")) {
          return "/projetos";
        }
        if (this.dadosEstudio.possuiModulo("faixas")) {
          return "/faixas";
        }
        if (this.dadosEstudio.possuiModulo("financeiro")) {
          return "/acertos";
        }
        return "/perfil";
      }
      return "/projetos";
    },
    ...ngDevMode ? [{ debugName: "destinoInicial" }] : (
      /* istanbul ignore next */
      []
    )
  );
  async ngOnInit() {
    if (!this.dadosEstudio.estudio()) {
      await this.dadosEstudio.carregar();
    }
    const { data, error } = await this.clienteSupabase.cliente.rpc("usuario_tem_acesso_como_contato");
    this.temAcessoComoContato.set(!error && data === true);
  }
  alternarMenu() {
    this.menuAberto.update((aberto) => !aberto);
  }
  fecharMenu() {
    this.menuAberto.set(false);
  }
  fecharMenusFlutuantes() {
    if (typeof document === "undefined") {
      return;
    }
    document.querySelectorAll("details.menu-desdobravel[open]").forEach((menu) => menu.removeAttribute("open"));
  }
  alternarTemaEscuro() {
    const ativo = !this.temaEscuro();
    this.temaEscuro.set(ativo);
    this.salvarPreferencia(CHAVE_TEMA_ESCURO, ativo);
  }
  alternarLuzBaixa() {
    const ativo = !this.luzBaixa();
    this.luzBaixa.set(ativo);
    this.salvarPreferencia(CHAVE_LUZ_BAIXA, ativo);
  }
  async sair() {
    this.saindo.set(true);
    this.erroSaida.set(null);
    try {
      await this.autenticacao.sair();
      await this.roteador.navigate(["/login"]);
    } catch (erro) {
      this.erroSaida.set(erro instanceof Error ? erro.message : "N\xE3o foi poss\xEDvel sair.");
    } finally {
      this.saindo.set(false);
    }
  }
  carregarPreferencia(chave, chaveLegada) {
    try {
      const valor = localStorage.getItem(chave);
      if (valor !== null) {
        return valor === "ativo";
      }
      return chaveLegada ? localStorage.getItem(chaveLegada) === "ativo" : false;
    } catch {
      return false;
    }
  }
  salvarPreferencia(chave, ativa) {
    try {
      localStorage.setItem(chave, ativa ? "ativo" : "inativo");
    } catch {
    }
  }
  static \u0275fac = function LayoutPrincipal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutPrincipal)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutPrincipal, selectors: [["app-layout-principal"]], decls: 79, vars: 48, consts: [[1, "estrutura", "tema-estudio"], [1, "barra-superior"], [1, "barra-conteudo"], ["aria-label", "Ir para o in\xEDcio", 1, "marca", 3, "click", "routerLink"], [1, "marca-simbolo"], [3, "src", "alt"], [1, "marca-texto"], ["aria-label", "Navega\xE7\xE3o principal", 1, "navegacao-principal"], ["routerLink", "/projetos", "routerLinkActive", "ativo"], ["routerLink", "/projetos-externos", "routerLinkActive", "ativo"], ["name", "menus-topo", 1, "menu-desdobravel"], [1, "acoes-barra"], ["href", "https://fleiva.com.br", "target", "_blank", "rel", "noopener noreferrer", 1, "conhecer-fleiva"], ["name", "menus-topo", 1, "menu-desdobravel", "menu-conta"], ["aria-label", "Abrir menu da conta"], [1, "avatar-conta"], [1, "nome-conta"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "m7 10 5 5 5-5"], [1, "menu-flutuante", "painel-conta"], [1, "identidade-conta"], ["routerLink", "/perfil", 1, "item-conta", 3, "click"], [1, "aparencia-conta"], ["type", "button", 3, "click"], [1, "erro-saida"], ["type", "button", 1, "botao-sair", 3, "click", "disabled"], ["type", "button", 1, "botao-menu-movel", 3, "click"], ["aria-hidden", "true"], ["type", "button", "aria-label", "Fechar menu", 1, "fundo-menu"], ["aria-label", "Menu m\xF3vel", 1, "painel-movel"], ["type", "button", "aria-label", "Fechar menu", 3, "click"], ["routerLink", "/acertos", "routerLinkActive", "ativo"], ["routerLink", "/perfil", 3, "click"], [1, "area-principal"], [1, "conteudo"], ["routerLink", "/projetos", "routerLinkActive", "ativo", 3, "click"], ["routerLink", "/projetos-externos", "routerLinkActive", "ativo", 3, "click"], ["routerLink", "/faixas", "routerLinkActive", "ativo", 3, "click"], ["routerLink", "/albuns", "routerLinkActive", "ativo", 3, "click"], ["routerLink", "/experiencias", "routerLinkActive", "ativo", 3, "click"], [1, "menu-flutuante", "menu-estudio"], ["routerLink", "/agendamentos", "routerLinkActive", "ativo", 3, "click"], ["routerLink", "/contatos", "routerLinkActive", "ativo", 3, "click"], ["routerLink", "/servicos", "routerLinkActive", "ativo", 3, "click"], ["routerLink", "/acertos", "routerLinkActive", "ativo", 3, "click"], ["type", "button", "aria-label", "Fechar menu", 1, "fundo-menu", 3, "click"]], template: function LayoutPrincipal_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "a", 3);
      \u0275\u0275listener("click", function LayoutPrincipal_Template_a_click_3_listener() {
        return ctx.fecharMenusFlutuantes();
      });
      \u0275\u0275elementStart(4, "span", 4);
      \u0275\u0275conditionalCreate(5, LayoutPrincipal_Conditional_5_Template, 1, 2, "img", 5)(6, LayoutPrincipal_Conditional_6_Template, 1, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 6)(8, "strong");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "small");
      \u0275\u0275text(11, "FL\xCAIVA");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "nav", 7);
      \u0275\u0275conditionalCreate(13, LayoutPrincipal_Conditional_13_Template, 2, 0, "a", 8);
      \u0275\u0275conditionalCreate(14, LayoutPrincipal_Conditional_14_Template, 2, 0, "a", 9);
      \u0275\u0275conditionalCreate(15, LayoutPrincipal_Conditional_15_Template, 6, 0);
      \u0275\u0275conditionalCreate(16, LayoutPrincipal_Conditional_16_Template, 8, 2, "details", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 11);
      \u0275\u0275conditionalCreate(18, LayoutPrincipal_Conditional_18_Template, 2, 0, "a", 12);
      \u0275\u0275elementStart(19, "details", 13)(20, "summary", 14)(21, "span", 15);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 16);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(25, "svg", 17);
      \u0275\u0275element(26, "path", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "div", 19)(28, "div", 20)(29, "strong");
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span");
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "a", 21);
      \u0275\u0275listener("click", function LayoutPrincipal_Template_a_click_33_listener() {
        return ctx.fecharMenusFlutuantes();
      });
      \u0275\u0275conditionalCreate(34, LayoutPrincipal_Conditional_34_Template, 1, 0)(35, LayoutPrincipal_Conditional_35_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 22)(37, "button", 23);
      \u0275\u0275listener("click", function LayoutPrincipal_Template_button_click_37_listener() {
        return ctx.alternarTemaEscuro();
      });
      \u0275\u0275conditionalCreate(38, LayoutPrincipal_Conditional_38_Template, 1, 0)(39, LayoutPrincipal_Conditional_39_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "button", 23);
      \u0275\u0275listener("click", function LayoutPrincipal_Template_button_click_40_listener() {
        return ctx.alternarLuzBaixa();
      });
      \u0275\u0275conditionalCreate(41, LayoutPrincipal_Conditional_41_Template, 1, 0)(42, LayoutPrincipal_Conditional_42_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(43, LayoutPrincipal_Conditional_43_Template, 2, 1, "p", 24);
      \u0275\u0275elementStart(44, "button", 25);
      \u0275\u0275listener("click", function LayoutPrincipal_Template_button_click_44_listener() {
        return ctx.sair();
      });
      \u0275\u0275conditionalCreate(45, LayoutPrincipal_Conditional_45_Template, 1, 0)(46, LayoutPrincipal_Conditional_46_Template, 1, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "button", 26);
      \u0275\u0275listener("click", function LayoutPrincipal_Template_button_click_47_listener() {
        return ctx.alternarMenu();
      });
      \u0275\u0275element(48, "span", 27)(49, "span", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(50, LayoutPrincipal_Conditional_50_Template, 1, 0, "button", 28);
      \u0275\u0275elementStart(51, "aside", 29)(52, "header")(53, "span");
      \u0275\u0275text(54, "Navega\xE7\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "button", 30);
      \u0275\u0275listener("click", function LayoutPrincipal_Template_button_click_55_listener() {
        return ctx.fecharMenu();
      });
      \u0275\u0275text(56, " \xD7 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "nav");
      \u0275\u0275conditionalCreate(58, LayoutPrincipal_Conditional_58_Template, 2, 0, "a", 8);
      \u0275\u0275conditionalCreate(59, LayoutPrincipal_Conditional_59_Template, 2, 0, "a", 9);
      \u0275\u0275conditionalCreate(60, LayoutPrincipal_Conditional_60_Template, 4, 0);
      \u0275\u0275conditionalCreate(61, LayoutPrincipal_Conditional_61_Template, 8, 0);
      \u0275\u0275conditionalCreate(62, LayoutPrincipal_Conditional_62_Template, 2, 0, "a", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "footer")(64, "a", 32);
      \u0275\u0275listener("click", function LayoutPrincipal_Template_a_click_64_listener() {
        return ctx.fecharMenu();
      });
      \u0275\u0275text(65, "Perfil do est\xFAdio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div")(67, "button", 23);
      \u0275\u0275listener("click", function LayoutPrincipal_Template_button_click_67_listener() {
        return ctx.alternarTemaEscuro();
      });
      \u0275\u0275conditionalCreate(68, LayoutPrincipal_Conditional_68_Template, 1, 0)(69, LayoutPrincipal_Conditional_69_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "button", 23);
      \u0275\u0275listener("click", function LayoutPrincipal_Template_button_click_70_listener() {
        return ctx.alternarLuzBaixa();
      });
      \u0275\u0275conditionalCreate(71, LayoutPrincipal_Conditional_71_Template, 1, 0)(72, LayoutPrincipal_Conditional_72_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "button", 25);
      \u0275\u0275listener("click", function LayoutPrincipal_Template_button_click_73_listener() {
        return ctx.sair();
      });
      \u0275\u0275conditionalCreate(74, LayoutPrincipal_Conditional_74_Template, 1, 0)(75, LayoutPrincipal_Conditional_75_Template, 1, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "main", 33)(77, "div", 34);
      \u0275\u0275element(78, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("--studio-brand", ctx.dadosEstudio.corPrincipal())("--studio-on-brand", ctx.dadosEstudio.corTextoPrincipal());
      \u0275\u0275classProp("menu-aberto", ctx.menuAberto())("tema-escuro", ctx.temaEscuro())("luz-baixa", ctx.luzBaixa());
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.destinoInicial());
      \u0275\u0275advance();
      \u0275\u0275classProp("tem-logo", ctx.dadosEstudio.logoUrl());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dadosEstudio.logoUrl() ? 5 : 6);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.nomeEstudio());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.dadosEstudio.possuiModulo("artistas") ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.temAcessoComoContato() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dadosEstudio.possuiModulo("faixas") ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dadosEstudio.possuiModulo("agenda") || ctx.dadosEstudio.possuiModulo("financeiro") ? 16 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.dadosEstudio.carregando() && !ctx.dadosEstudio.possuiModulos() ? 18 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.inicialEstudio());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.nomeEstudio());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.nomeEstudio());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.autenticacao.usuario()?.email);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.dadosEstudio.possuiModulos() ? 34 : 35);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("ativo", ctx.temaEscuro());
      \u0275\u0275attribute("aria-pressed", ctx.temaEscuro());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.temaEscuro() ? 38 : 39);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("ativo", ctx.luzBaixa());
      \u0275\u0275attribute("aria-pressed", ctx.luzBaixa());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.luzBaixa() ? 41 : 42);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.erroSaida() ? 43 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.saindo());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saindo() ? 45 : 46);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", ctx.menuAberto() ? "Fechar menu" : "Abrir menu")("aria-expanded", ctx.menuAberto());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.menuAberto() ? 50 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.dadosEstudio.possuiModulo("artistas") ? 58 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.temAcessoComoContato() ? 59 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dadosEstudio.possuiModulo("faixas") ? 60 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dadosEstudio.possuiModulo("agenda") ? 61 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dadosEstudio.possuiModulo("financeiro") ? 62 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.temaEscuro() ? 68 : 69);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.luzBaixa() ? 71 : 72);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saindo());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saindo() ? 74 : 75);
    }
  }, dependencies: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ], styles: ['\n[_nghost-%COMP%] {\n  --studio-accent: var(--studio-brand);\n  --studio-on-accent: var(--studio-on-brand);\n  --chrome: #120f11;\n  --chrome-elevated: #1b171a;\n  --chrome-hover: #241e22;\n  --chrome-line: #352d32;\n  --chrome-text: #f4f0f2;\n  --chrome-soft: #c4bbc0;\n  --chrome-muted: #8e8389;\n  display: block;\n  min-height: 100vh;\n  min-height: 100dvh;\n}\n.estrutura[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100dvh;\n}\n.barra-superior[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 30;\n  top: 0;\n  background: color-mix(in srgb, var(--studio-accent) 93%, transparent);\n  color: var(--chrome-text);\n  border-top: 0.16rem solid var(--studio-accent);\n  border-bottom: 0.0625rem solid var(--chrome-line);\n  -webkit-backdrop-filter: blur(0.8rem);\n  backdrop-filter: blur(0.8rem);\n}\n.barra-conteudo[_ngcontent-%COMP%] {\n  display: grid;\n  width: min(100%, 112rem);\n  min-height: 3.75rem;\n  box-sizing: border-box;\n  grid-template-columns: minmax(11rem, auto) minmax(0, 1fr) auto;\n  align-items: stretch;\n  margin: 0 auto;\n  padding: 0 1.25rem;\n}\n.marca[_ngcontent-%COMP%], \n.navegacao-principal[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], \n.menu-flutuante[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.conhecer-fleiva[_ngcontent-%COMP%], \n.painel-movel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.marca[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.65rem;\n  color: inherit;\n}\n.marca-simbolo[_ngcontent-%COMP%], \n.avatar-conta[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 auto;\n  place-items: center;\n  overflow: hidden;\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border: 0.0625rem solid rgba(255, 255, 255, 0.14);\n  font-weight: 800;\n}\n.marca-simbolo[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.36rem;\n  font-size: 0.72rem;\n}\n.marca-simbolo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.marca-simbolo.tem-logo[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: transparent;\n}\n.marca-texto[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.08rem;\n}\n.marca-texto[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  max-width: 12rem;\n  overflow: hidden;\n  font-size: 0.72rem;\n  font-weight: 720;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.marca-texto[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--chrome-muted);\n  font-size: 0.48rem;\n  font-weight: 780;\n  letter-spacing: 0.14em;\n}\n.navegacao-principal[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: stretch;\n  gap: 0.2rem;\n}\n.navegacao-principal[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], \n.menu-desdobravel[_ngcontent-%COMP%]    > summary[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-height: 3.75rem;\n  box-sizing: border-box;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0 0.8rem;\n  color: var(--chrome-soft);\n  font-size: 0.68rem;\n  font-weight: 650;\n  cursor: pointer;\n  list-style: none;\n}\n.navegacao-principal[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]::after {\n  position: absolute;\n  inset: auto 0.8rem -0.0625rem;\n  height: 0.13rem;\n  background: transparent;\n  content: "";\n}\n.navegacao-principal[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, \n.navegacao-principal[_ngcontent-%COMP%]    > a.ativo[_ngcontent-%COMP%], \n.menu-desdobravel[_ngcontent-%COMP%]    > summary[_ngcontent-%COMP%]:hover, \n.menu-desdobravel[open][_ngcontent-%COMP%]    > summary[_ngcontent-%COMP%] {\n  color: var(--chrome-text);\n}\n.navegacao-principal[_ngcontent-%COMP%]    > a.ativo[_ngcontent-%COMP%]::after {\n  background: var(--studio-accent);\n}\n.menu-desdobravel[_ngcontent-%COMP%] {\n  position: relative;\n}\n.menu-desdobravel[_ngcontent-%COMP%]    > summary[_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n.menu-desdobravel[_ngcontent-%COMP%]    > summary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.8rem;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  transition: transform 120ms ease;\n}\n.menu-desdobravel[open][_ngcontent-%COMP%]    > summary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.menu-flutuante[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 50;\n  top: calc(100% + 0.5rem);\n  display: grid;\n  min-width: 15rem;\n  padding: 0.45rem;\n  background: var(--chrome-elevated);\n  border: 0.0625rem solid var(--chrome-line);\n  border-radius: 0.55rem;\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.35);\n}\n.menu-estudio[_ngcontent-%COMP%] {\n  left: 0;\n}\n.menu-flutuante[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.12rem;\n  padding: 0.65rem 0.7rem;\n  color: var(--chrome-soft);\n  border-radius: 0.36rem;\n}\n.menu-flutuante[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.menu-flutuante[_ngcontent-%COMP%]   a.ativo[_ngcontent-%COMP%] {\n  background: var(--chrome-hover);\n  color: var(--chrome-text);\n}\n.menu-flutuante[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 720;\n}\n.menu-flutuante[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--chrome-muted);\n  font-size: 0.56rem;\n}\n.acoes-barra[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  justify-content: flex-end;\n  gap: 0.45rem;\n}\n.conhecer-fleiva[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: var(--studio-accent);\n  font-size: 0.62rem;\n  font-weight: 720;\n}\n.menu-conta[_ngcontent-%COMP%]    > summary[_ngcontent-%COMP%] {\n  max-width: 14rem;\n  padding-right: 0;\n}\n.avatar-conta[_ngcontent-%COMP%] {\n  width: 1.8rem;\n  height: 1.8rem;\n  border-radius: 50%;\n  font-size: 0.62rem;\n}\n.nome-conta[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.painel-conta[_ngcontent-%COMP%] {\n  right: 0;\n  min-width: 17rem;\n}\n.identidade-conta[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.15rem;\n  padding: 0.65rem 0.7rem 0.8rem;\n  border-bottom: 0.0625rem solid var(--chrome-line);\n}\n.identidade-conta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n}\n.identidade-conta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--chrome-muted);\n  font-size: 0.58rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.item-conta[_ngcontent-%COMP%] {\n  margin-top: 0.35rem;\n  font-size: 0.66rem;\n  font-weight: 680;\n}\n.aparencia-conta[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.4rem;\n  padding: 0.45rem 0;\n}\n.aparencia-conta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.botao-sair[_ngcontent-%COMP%], \n.painel-movel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 2.2rem;\n  padding: 0.45rem 0.6rem;\n  background: transparent;\n  color: var(--chrome-muted);\n  border: 0.0625rem solid var(--chrome-line);\n  border-radius: 0.34rem;\n  font: inherit;\n  font-size: 0.59rem;\n  font-weight: 680;\n  cursor: pointer;\n}\n.aparencia-conta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.aparencia-conta[_ngcontent-%COMP%]   button.ativo[_ngcontent-%COMP%] {\n  background: var(--chrome-hover);\n  color: var(--studio-accent);\n}\n.botao-sair[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.botao-sair[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #251a1b;\n  color: #f09a94;\n  border-color: #613633;\n}\n.botao-sair[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.5;\n}\n.erro-saida[_ngcontent-%COMP%] {\n  margin: 0.35rem 0;\n  padding: 0.55rem 0.65rem;\n  background: #2b1a1b;\n  color: #f09a94;\n  border-radius: 0.34rem;\n  font-size: 0.58rem;\n}\n.area-principal[_ngcontent-%COMP%], \n.conteudo[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.area-principal[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 3.91rem);\n  min-height: calc(100dvh - 3.91rem);\n  background: var(--app-background);\n  transition: background-color 180ms ease, filter 180ms ease;\n}\n.luz-baixa[_ngcontent-%COMP%]   .area-principal[_ngcontent-%COMP%] {\n  filter: brightness(0.68) saturate(0.88);\n}\n.botao-menu-movel[_ngcontent-%COMP%], \n.painel-movel[_ngcontent-%COMP%], \n.fundo-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n.marca[_ngcontent-%COMP%]:focus-visible, \n.navegacao-principal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible, \n.menu-desdobravel[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]:focus-visible, \n.menu-flutuante[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible, \n.botao-menu-movel[_ngcontent-%COMP%]:focus-visible, \n.painel-movel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible, \n.painel-movel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  outline: 0.125rem solid var(--studio-accent);\n  outline-offset: -0.125rem;\n}\n@media (max-width: 64rem) {\n  .barra-conteudo[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(9rem, auto) minmax(0, 1fr) auto;\n    padding: 0 0.8rem;\n  }\n  .navegacao-principal[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], \n   .menu-desdobravel[_ngcontent-%COMP%]    > summary[_ngcontent-%COMP%] {\n    padding-inline: 0.58rem;\n  }\n  .nome-conta[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 48rem) {\n  .barra-conteudo[_ngcontent-%COMP%] {\n    display: flex;\n    min-height: 3.65rem;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .navegacao-principal[_ngcontent-%COMP%], \n   .menu-conta[_ngcontent-%COMP%], \n   .conhecer-fleiva[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .marca-texto[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    max-width: 11rem;\n  }\n  .botao-menu-movel[_ngcontent-%COMP%] {\n    display: grid;\n    width: 2.5rem;\n    height: 2.5rem;\n    place-content: center;\n    gap: 0.32rem;\n    padding: 0;\n    background: transparent;\n    color: var(--chrome-soft);\n    border: 0;\n    cursor: pointer;\n  }\n  .botao-menu-movel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    width: 1.15rem;\n    height: 0.0625rem;\n    background: currentColor;\n    transition: transform 160ms ease;\n  }\n  .menu-aberto[_ngcontent-%COMP%]   .botao-menu-movel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n    transform: translateY(0.195rem) rotate(45deg);\n  }\n  .menu-aberto[_ngcontent-%COMP%]   .botao-menu-movel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n    transform: translateY(-0.195rem) rotate(-45deg);\n  }\n  .painel-movel[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 45;\n    inset: 0 0 0 auto;\n    display: grid;\n    width: min(20rem, 88vw);\n    grid-template-rows: auto minmax(0, 1fr) auto;\n    background: var(--chrome);\n    color: var(--chrome-text);\n    border-left: 0.0625rem solid var(--chrome-line);\n    transform: translateX(100%);\n    transition: transform 180ms ease;\n  }\n  .menu-aberto[_ngcontent-%COMP%]   .painel-movel[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .painel-movel[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n    display: flex;\n    min-height: 3.8rem;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 1rem;\n    border-bottom: 0.0625rem solid var(--chrome-line);\n  }\n  .painel-movel[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: var(--chrome-muted);\n    font-size: 0.56rem;\n    font-weight: 780;\n    letter-spacing: 0.14em;\n    text-transform: uppercase;\n  }\n  .painel-movel[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 2.2rem;\n    padding: 0;\n    border: 0;\n    font-size: 1.25rem;\n  }\n  .painel-movel[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    display: grid;\n    align-content: start;\n    gap: 0.12rem;\n    overflow-y: auto;\n    padding: 0.8rem;\n  }\n  .painel-movel[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 1rem 0 0.35rem;\n    padding: 0 0.65rem;\n    color: var(--chrome-muted);\n    font-size: 0.54rem;\n    font-weight: 780;\n    letter-spacing: 0.13em;\n    text-transform: uppercase;\n  }\n  .painel-movel[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n   .painel-movel[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    padding: 0.72rem 0.65rem;\n    color: var(--chrome-soft);\n    border-radius: 0.35rem;\n    font-size: 0.74rem;\n    font-weight: 650;\n  }\n  .painel-movel[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n   .painel-movel[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a.ativo[_ngcontent-%COMP%], \n   .painel-movel[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n    background: var(--chrome-hover);\n    color: var(--chrome-text);\n  }\n  .painel-movel[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a.ativo[_ngcontent-%COMP%] {\n    box-shadow: inset 0.14rem 0 var(--studio-accent);\n  }\n  .painel-movel[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n    display: grid;\n    gap: 0.45rem;\n    padding: 0.8rem;\n    border-top: 0.0625rem solid var(--chrome-line);\n  }\n  .painel-movel[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 0.4rem;\n  }\n  .fundo-menu[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 40;\n    inset: 0;\n    display: block;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    background: rgba(8, 6, 7, 0.72);\n    border: 0;\n    -webkit-backdrop-filter: blur(0.2rem);\n    backdrop-filter: blur(0.2rem);\n  }\n  .area-principal[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 3.81rem);\n    min-height: calc(100dvh - 3.81rem);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%], \n   *[_ngcontent-%COMP%]::before, \n   *[_ngcontent-%COMP%]::after {\n    transition-duration: 0.01ms !important;\n  }\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutPrincipal, [{
    type: Component,
    args: [{ selector: "app-layout-principal", standalone: true, imports: [
      RouterOutlet,
      RouterLink,
      RouterLinkActive
    ], template: `<div
  class="estrutura tema-estudio"
  [class.menu-aberto]="menuAberto()"
  [class.tema-escuro]="temaEscuro()"
  [class.luz-baixa]="luzBaixa()"
  [style.--studio-brand]="dadosEstudio.corPrincipal()"
  [style.--studio-on-brand]="dadosEstudio.corTextoPrincipal()"
>
  <header class="barra-superior">
    <div class="barra-conteudo">
      <a
        class="marca"
        [routerLink]="destinoInicial()"
        aria-label="Ir para o in\xEDcio"
        (click)="fecharMenusFlutuantes()"
      >
        <span class="marca-simbolo" [class.tem-logo]="dadosEstudio.logoUrl()">
          @if (dadosEstudio.logoUrl()) {
          <img
            [src]="dadosEstudio.logoUrl()"
            [alt]="'Logo de ' + nomeEstudio()"
          />
          } @else {
          {{ inicialEstudio() }}
          }
        </span>

        <span class="marca-texto">
          <strong>{{ nomeEstudio() }}</strong>
          <small>FL\xCAIVA</small>
        </span>
      </a>

      <nav class="navegacao-principal" aria-label="Navega\xE7\xE3o principal">

        @if (dadosEstudio.possuiModulo('artistas')) {
        <a
          routerLink="/projetos"
          routerLinkActive="ativo"
          (click)="fecharMenusFlutuantes()"
        >Projetos</a>
        }

        @if (temAcessoComoContato()) {
        <a
          routerLink="/projetos-externos"
          routerLinkActive="ativo"
          (click)="fecharMenusFlutuantes()"
        >Projetos externos</a>
        }

        @if (dadosEstudio.possuiModulo('faixas')) {
        <a
          routerLink="/faixas"
          routerLinkActive="ativo"
          (click)="fecharMenusFlutuantes()"
        >Faixas</a>
        <a
          routerLink="/albuns"
          routerLinkActive="ativo"
          (click)="fecharMenusFlutuantes()"
        >\xC1lbuns</a>
         <a
          routerLink="/experiencias"
          routerLinkActive="ativo"
          (click)="fecharMenusFlutuantes()"
        >Experi\xEAncias</a>
        }

        @if (
          dadosEstudio.possuiModulo('agenda') ||
          dadosEstudio.possuiModulo('financeiro')
        ) {
        <details class="menu-desdobravel" name="menus-topo">
          <summary>
            Est\xFAdio
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m7 10 5 5 5-5" />
            </svg>
          </summary>

          <div class="menu-flutuante menu-estudio">
            @if (dadosEstudio.possuiModulo('agenda')) {
            <a
              routerLink="/agendamentos"
              routerLinkActive="ativo"
              (click)="fecharMenusFlutuantes()"
            >
              <span>Agenda</span>
              <small>Sess\xF5es e compromissos</small>
            </a>
            <a
              routerLink="/contatos"
              routerLinkActive="ativo"
              (click)="fecharMenusFlutuantes()"
            >
              <span>Contatos</span>
              <small>Pessoas e v\xEDnculos</small>
            </a>
            <a
              routerLink="/servicos"
              routerLinkActive="ativo"
              (click)="fecharMenusFlutuantes()"
            >
              <span>Servi\xE7os</span>
              <small>Configura\xE7\xE3o do est\xFAdio</small>
            </a>
            }

            @if (dadosEstudio.possuiModulo('financeiro')) {
            <a
              routerLink="/acertos"
              routerLinkActive="ativo"
              (click)="fecharMenusFlutuantes()"
            >
              <span>Acertos</span>
              <small>Financeiro</small>
            </a>
            }
          </div>
        </details>
        }
      </nav>

      <div class="acoes-barra">
        @if (
          !dadosEstudio.carregando() &&
          !dadosEstudio.possuiModulos()
        ) {
        <a
          class="conhecer-fleiva"
          href="https://fleiva.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conhecer o Fl\xEAiva
        </a>
        }

        <details class="menu-desdobravel menu-conta" name="menus-topo">
          <summary aria-label="Abrir menu da conta">
            <span class="avatar-conta">{{ inicialEstudio() }}</span>
            <span class="nome-conta">{{ nomeEstudio() }}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m7 10 5 5 5-5" />
            </svg>
          </summary>

          <div class="menu-flutuante painel-conta">
            <div class="identidade-conta">
              <strong>{{ nomeEstudio() }}</strong>
              <span>{{ autenticacao.usuario()?.email }}</span>
            </div>

            <a
              class="item-conta"
              routerLink="/perfil"
              (click)="fecharMenusFlutuantes()"
            >
              @if (dadosEstudio.possuiModulos()) {
              Perfil do est\xFAdio
              } @else {
              Minha p\xE1gina p\xFAblica
              }
            </a>

            <div class="aparencia-conta">
              <button
                type="button"
                [class.ativo]="temaEscuro()"
                [attr.aria-pressed]="temaEscuro()"
                (click)="alternarTemaEscuro()"
              >
                @if (temaEscuro()) { Tema claro } @else { Tema escuro }
              </button>

              <button
                type="button"
                [class.ativo]="luzBaixa()"
                [attr.aria-pressed]="luzBaixa()"
                (click)="alternarLuzBaixa()"
              >
                @if (luzBaixa()) { Restaurar luz } @else { Luz baixa }
              </button>
            </div>

            @if (erroSaida()) {
            <p class="erro-saida">{{ erroSaida() }}</p>
            }

            <button
              type="button"
              class="botao-sair"
              [disabled]="saindo()"
              (click)="sair()"
            >
              @if (saindo()) { Saindo... } @else { Sair }
            </button>
          </div>
        </details>

        <button
          type="button"
          class="botao-menu-movel"
          [attr.aria-label]="menuAberto() ? 'Fechar menu' : 'Abrir menu'"
          [attr.aria-expanded]="menuAberto()"
          (click)="alternarMenu()"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </header>

  @if (menuAberto()) {
  <button
    type="button"
    class="fundo-menu"
    aria-label="Fechar menu"
    (click)="fecharMenu()"
  ></button>
  }

  <aside class="painel-movel" aria-label="Menu m\xF3vel">
    <header>
      <span>Navega\xE7\xE3o</span>
      <button type="button" aria-label="Fechar menu" (click)="fecharMenu()">
        \xD7
      </button>
    </header>

    <nav>
      @if (dadosEstudio.possuiModulo('artistas')) {
      <a routerLink="/projetos" routerLinkActive="ativo" (click)="fecharMenu()">
        Projetos
      </a>
      }

      @if (temAcessoComoContato()) {
      <a
        routerLink="/projetos-externos"
        routerLinkActive="ativo"
        (click)="fecharMenu()"
      >
        Projetos externos
      </a>
      }

      @if (dadosEstudio.possuiModulo('faixas')) {
      <a routerLink="/faixas" routerLinkActive="ativo" (click)="fecharMenu()">
        Faixas
      </a>
      <a routerLink="/albuns" routerLinkActive="ativo" (click)="fecharMenu()">
        \xC1lbuns
      </a>
      }

      @if (dadosEstudio.possuiModulo('agenda')) {
      <p>Est\xFAdio</p>
      <a
        routerLink="/agendamentos"
        routerLinkActive="ativo"
        (click)="fecharMenu()"
      >
        Agenda
      </a>
      <a routerLink="/contatos" routerLinkActive="ativo" (click)="fecharMenu()">
        Contatos
      </a>
      <a routerLink="/servicos" routerLinkActive="ativo" (click)="fecharMenu()">
        Servi\xE7os
      </a>
      }

      @if (dadosEstudio.possuiModulo('financeiro')) {
      <a routerLink="/acertos" routerLinkActive="ativo" (click)="fecharMenu()">
        Acertos
      </a>
      }

    </nav>

    <footer>
      <a routerLink="/perfil" (click)="fecharMenu()">Perfil do est\xFAdio</a>

      <div>
        <button type="button" (click)="alternarTemaEscuro()">
          @if (temaEscuro()) { Tema claro } @else { Tema escuro }
        </button>
        <button type="button" (click)="alternarLuzBaixa()">
          @if (luzBaixa()) { Restaurar luz } @else { Luz baixa }
        </button>
      </div>

      <button
        type="button"
        class="botao-sair"
        [disabled]="saindo()"
        (click)="sair()"
      >
        @if (saindo()) { Saindo... } @else { Sair }
      </button>
    </footer>
  </aside>

  <main class="area-principal">
    <div class="conteudo">
      <router-outlet />
    </div>
  </main>
</div>

`, styles: ['/* apps/studio-dash/src/app/layout/layout-principal/layout-principal.scss */\n:host {\n  --studio-accent: var(--studio-brand);\n  --studio-on-accent: var(--studio-on-brand);\n  --chrome: #120f11;\n  --chrome-elevated: #1b171a;\n  --chrome-hover: #241e22;\n  --chrome-line: #352d32;\n  --chrome-text: #f4f0f2;\n  --chrome-soft: #c4bbc0;\n  --chrome-muted: #8e8389;\n  display: block;\n  min-height: 100vh;\n  min-height: 100dvh;\n}\n.estrutura {\n  min-height: 100vh;\n  min-height: 100dvh;\n}\n.barra-superior {\n  position: sticky;\n  z-index: 30;\n  top: 0;\n  background: color-mix(in srgb, var(--studio-accent) 93%, transparent);\n  color: var(--chrome-text);\n  border-top: 0.16rem solid var(--studio-accent);\n  border-bottom: 0.0625rem solid var(--chrome-line);\n  -webkit-backdrop-filter: blur(0.8rem);\n  backdrop-filter: blur(0.8rem);\n}\n.barra-conteudo {\n  display: grid;\n  width: min(100%, 112rem);\n  min-height: 3.75rem;\n  box-sizing: border-box;\n  grid-template-columns: minmax(11rem, auto) minmax(0, 1fr) auto;\n  align-items: stretch;\n  margin: 0 auto;\n  padding: 0 1.25rem;\n}\n.marca,\n.navegacao-principal > a,\n.menu-flutuante a,\n.conhecer-fleiva,\n.painel-movel a {\n  text-decoration: none;\n}\n.marca {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.65rem;\n  color: inherit;\n}\n.marca-simbolo,\n.avatar-conta {\n  display: grid;\n  flex: 0 0 auto;\n  place-items: center;\n  overflow: hidden;\n  background: var(--studio-accent);\n  color: var(--studio-on-accent);\n  border: 0.0625rem solid rgba(255, 255, 255, 0.14);\n  font-weight: 800;\n}\n.marca-simbolo {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.36rem;\n  font-size: 0.72rem;\n}\n.marca-simbolo img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.marca-simbolo.tem-logo {\n  background: transparent;\n  border-color: transparent;\n}\n.marca-texto {\n  display: grid;\n  min-width: 0;\n  gap: 0.08rem;\n}\n.marca-texto strong {\n  max-width: 12rem;\n  overflow: hidden;\n  font-size: 0.72rem;\n  font-weight: 720;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.marca-texto small {\n  color: var(--chrome-muted);\n  font-size: 0.48rem;\n  font-weight: 780;\n  letter-spacing: 0.14em;\n}\n.navegacao-principal {\n  display: flex;\n  min-width: 0;\n  align-items: stretch;\n  gap: 0.2rem;\n}\n.navegacao-principal > a,\n.menu-desdobravel > summary {\n  position: relative;\n  display: flex;\n  min-height: 3.75rem;\n  box-sizing: border-box;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0 0.8rem;\n  color: var(--chrome-soft);\n  font-size: 0.68rem;\n  font-weight: 650;\n  cursor: pointer;\n  list-style: none;\n}\n.navegacao-principal > a::after {\n  position: absolute;\n  inset: auto 0.8rem -0.0625rem;\n  height: 0.13rem;\n  background: transparent;\n  content: "";\n}\n.navegacao-principal > a:hover,\n.navegacao-principal > a.ativo,\n.menu-desdobravel > summary:hover,\n.menu-desdobravel[open] > summary {\n  color: var(--chrome-text);\n}\n.navegacao-principal > a.ativo::after {\n  background: var(--studio-accent);\n}\n.menu-desdobravel {\n  position: relative;\n}\n.menu-desdobravel > summary::-webkit-details-marker {\n  display: none;\n}\n.menu-desdobravel > summary svg {\n  width: 0.8rem;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  transition: transform 120ms ease;\n}\n.menu-desdobravel[open] > summary svg {\n  transform: rotate(180deg);\n}\n.menu-flutuante {\n  position: absolute;\n  z-index: 50;\n  top: calc(100% + 0.5rem);\n  display: grid;\n  min-width: 15rem;\n  padding: 0.45rem;\n  background: var(--chrome-elevated);\n  border: 0.0625rem solid var(--chrome-line);\n  border-radius: 0.55rem;\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.35);\n}\n.menu-estudio {\n  left: 0;\n}\n.menu-flutuante a {\n  display: grid;\n  gap: 0.12rem;\n  padding: 0.65rem 0.7rem;\n  color: var(--chrome-soft);\n  border-radius: 0.36rem;\n}\n.menu-flutuante a:hover,\n.menu-flutuante a.ativo {\n  background: var(--chrome-hover);\n  color: var(--chrome-text);\n}\n.menu-flutuante a span {\n  font-size: 0.68rem;\n  font-weight: 720;\n}\n.menu-flutuante a small {\n  color: var(--chrome-muted);\n  font-size: 0.56rem;\n}\n.acoes-barra {\n  display: flex;\n  align-items: stretch;\n  justify-content: flex-end;\n  gap: 0.45rem;\n}\n.conhecer-fleiva {\n  display: flex;\n  align-items: center;\n  color: var(--studio-accent);\n  font-size: 0.62rem;\n  font-weight: 720;\n}\n.menu-conta > summary {\n  max-width: 14rem;\n  padding-right: 0;\n}\n.avatar-conta {\n  width: 1.8rem;\n  height: 1.8rem;\n  border-radius: 50%;\n  font-size: 0.62rem;\n}\n.nome-conta {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.painel-conta {\n  right: 0;\n  min-width: 17rem;\n}\n.identidade-conta {\n  display: grid;\n  gap: 0.15rem;\n  padding: 0.65rem 0.7rem 0.8rem;\n  border-bottom: 0.0625rem solid var(--chrome-line);\n}\n.identidade-conta strong {\n  font-size: 0.72rem;\n}\n.identidade-conta span {\n  overflow: hidden;\n  color: var(--chrome-muted);\n  font-size: 0.58rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.item-conta {\n  margin-top: 0.35rem;\n  font-size: 0.66rem;\n  font-weight: 680;\n}\n.aparencia-conta {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.4rem;\n  padding: 0.45rem 0;\n}\n.aparencia-conta button,\n.botao-sair,\n.painel-movel button {\n  min-height: 2.2rem;\n  padding: 0.45rem 0.6rem;\n  background: transparent;\n  color: var(--chrome-muted);\n  border: 0.0625rem solid var(--chrome-line);\n  border-radius: 0.34rem;\n  font: inherit;\n  font-size: 0.59rem;\n  font-weight: 680;\n  cursor: pointer;\n}\n.aparencia-conta button:hover,\n.aparencia-conta button.ativo {\n  background: var(--chrome-hover);\n  color: var(--studio-accent);\n}\n.botao-sair {\n  width: 100%;\n}\n.botao-sair:hover:not(:disabled) {\n  background: #251a1b;\n  color: #f09a94;\n  border-color: #613633;\n}\n.botao-sair:disabled {\n  cursor: wait;\n  opacity: 0.5;\n}\n.erro-saida {\n  margin: 0.35rem 0;\n  padding: 0.55rem 0.65rem;\n  background: #2b1a1b;\n  color: #f09a94;\n  border-radius: 0.34rem;\n  font-size: 0.58rem;\n}\n.area-principal,\n.conteudo {\n  min-width: 0;\n}\n.area-principal {\n  min-height: calc(100vh - 3.91rem);\n  min-height: calc(100dvh - 3.91rem);\n  background: var(--app-background);\n  transition: background-color 180ms ease, filter 180ms ease;\n}\n.luz-baixa .area-principal {\n  filter: brightness(0.68) saturate(0.88);\n}\n.botao-menu-movel,\n.painel-movel,\n.fundo-menu {\n  display: none;\n}\n.marca:focus-visible,\n.navegacao-principal a:focus-visible,\n.menu-desdobravel summary:focus-visible,\n.menu-flutuante button:focus-visible,\n.botao-menu-movel:focus-visible,\n.painel-movel a:focus-visible,\n.painel-movel button:focus-visible {\n  outline: 0.125rem solid var(--studio-accent);\n  outline-offset: -0.125rem;\n}\n@media (max-width: 64rem) {\n  .barra-conteudo {\n    grid-template-columns: minmax(9rem, auto) minmax(0, 1fr) auto;\n    padding: 0 0.8rem;\n  }\n  .navegacao-principal > a,\n  .menu-desdobravel > summary {\n    padding-inline: 0.58rem;\n  }\n  .nome-conta {\n    display: none;\n  }\n}\n@media (max-width: 48rem) {\n  .barra-conteudo {\n    display: flex;\n    min-height: 3.65rem;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .navegacao-principal,\n  .menu-conta,\n  .conhecer-fleiva {\n    display: none;\n  }\n  .marca-texto strong {\n    max-width: 11rem;\n  }\n  .botao-menu-movel {\n    display: grid;\n    width: 2.5rem;\n    height: 2.5rem;\n    place-content: center;\n    gap: 0.32rem;\n    padding: 0;\n    background: transparent;\n    color: var(--chrome-soft);\n    border: 0;\n    cursor: pointer;\n  }\n  .botao-menu-movel span {\n    display: block;\n    width: 1.15rem;\n    height: 0.0625rem;\n    background: currentColor;\n    transition: transform 160ms ease;\n  }\n  .menu-aberto .botao-menu-movel span:first-child {\n    transform: translateY(0.195rem) rotate(45deg);\n  }\n  .menu-aberto .botao-menu-movel span:last-child {\n    transform: translateY(-0.195rem) rotate(-45deg);\n  }\n  .painel-movel {\n    position: fixed;\n    z-index: 45;\n    inset: 0 0 0 auto;\n    display: grid;\n    width: min(20rem, 88vw);\n    grid-template-rows: auto minmax(0, 1fr) auto;\n    background: var(--chrome);\n    color: var(--chrome-text);\n    border-left: 0.0625rem solid var(--chrome-line);\n    transform: translateX(100%);\n    transition: transform 180ms ease;\n  }\n  .menu-aberto .painel-movel {\n    transform: translateX(0);\n  }\n  .painel-movel > header {\n    display: flex;\n    min-height: 3.8rem;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 1rem;\n    border-bottom: 0.0625rem solid var(--chrome-line);\n  }\n  .painel-movel > header span {\n    color: var(--chrome-muted);\n    font-size: 0.56rem;\n    font-weight: 780;\n    letter-spacing: 0.14em;\n    text-transform: uppercase;\n  }\n  .painel-movel > header button {\n    min-width: 2.2rem;\n    padding: 0;\n    border: 0;\n    font-size: 1.25rem;\n  }\n  .painel-movel nav {\n    display: grid;\n    align-content: start;\n    gap: 0.12rem;\n    overflow-y: auto;\n    padding: 0.8rem;\n  }\n  .painel-movel nav p {\n    margin: 1rem 0 0.35rem;\n    padding: 0 0.65rem;\n    color: var(--chrome-muted);\n    font-size: 0.54rem;\n    font-weight: 780;\n    letter-spacing: 0.13em;\n    text-transform: uppercase;\n  }\n  .painel-movel nav a,\n  .painel-movel footer > a {\n    padding: 0.72rem 0.65rem;\n    color: var(--chrome-soft);\n    border-radius: 0.35rem;\n    font-size: 0.74rem;\n    font-weight: 650;\n  }\n  .painel-movel nav a:hover,\n  .painel-movel nav a.ativo,\n  .painel-movel footer > a:hover {\n    background: var(--chrome-hover);\n    color: var(--chrome-text);\n  }\n  .painel-movel nav a.ativo {\n    box-shadow: inset 0.14rem 0 var(--studio-accent);\n  }\n  .painel-movel footer {\n    display: grid;\n    gap: 0.45rem;\n    padding: 0.8rem;\n    border-top: 0.0625rem solid var(--chrome-line);\n  }\n  .painel-movel footer > div {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 0.4rem;\n  }\n  .fundo-menu {\n    position: fixed;\n    z-index: 40;\n    inset: 0;\n    display: block;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    background: rgba(8, 6, 7, 0.72);\n    border: 0;\n    -webkit-backdrop-filter: blur(0.2rem);\n    backdrop-filter: blur(0.2rem);\n  }\n  .area-principal {\n    min-height: calc(100vh - 3.81rem);\n    min-height: calc(100dvh - 3.81rem);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *,\n  *::before,\n  *::after {\n    transition-duration: 0.01ms !important;\n  }\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutPrincipal, { className: "LayoutPrincipal", filePath: "apps/studio-dash/src/app/layout/layout-principal/layout-principal.ts", lineNumber: 36 });
})();
export {
  LayoutPrincipal
};
