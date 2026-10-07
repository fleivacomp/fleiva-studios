import {
  Component,
  DadosProjetosExternos,
  RouterLink,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵtextInterpolate1
} from "./chunk-IMBOO5ID.js";

// apps/studio-dash/src/app/paginas/projetos-externos/projetos-externos.ts
var _c0 = (a0) => ["/projetos-externos", a0];
var _forTrack0 = ($index, $item) => $item.id;
function ProjetosExternos_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " projeto ");
  }
}
function ProjetosExternos_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " projetos ");
  }
}
function ProjetosExternos_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, " Carregando projetos... ");
    \u0275\u0275elementEnd();
  }
}
function ProjetosExternos_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function ProjetosExternos_Conditional_24_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dadosProjetos.listar());
    });
    \u0275\u0275text(4, " Tentar novamente ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.dadosProjetos.erro(), " ");
  }
}
function ProjetosExternos_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div")(2, "p", 2);
    \u0275\u0275text(3, " SEM ACESSOS ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, " Nenhum projeto dispon\xEDvel. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, " Voc\xEA ainda n\xE3o possui acesso a nenhum projeto. ");
    \u0275\u0275elementEnd()()();
  }
}
function ProjetosExternos_Conditional_26_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", "");
  }
}
function ProjetosExternos_Conditional_26_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const projeto_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", projeto_r3.nome.charAt(0).toLocaleUpperCase("pt-BR"), " ");
  }
}
function ProjetosExternos_Conditional_26_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const projeto_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", projeto_r3.estudio.nome, " ");
  }
}
function ProjetosExternos_Conditional_26_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const projeto_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", projeto_r3.tipo, " ");
  }
}
function ProjetosExternos_Conditional_26_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12)(1, "span", 13);
    \u0275\u0275conditionalCreate(2, ProjetosExternos_Conditional_26_For_2_Conditional_2_Template, 1, 2, "img", 14)(3, ProjetosExternos_Conditional_26_For_2_Conditional_3_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 16)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ProjetosExternos_Conditional_26_For_2_Conditional_7_Template, 2, 1, "small");
    \u0275\u0275conditionalCreate(8, ProjetosExternos_Conditional_26_For_2_Conditional_8_Template, 2, 1, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 17);
    \u0275\u0275text(10, " \u2192 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const projeto_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, projeto_r3.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_12_0 = ctx_r1.dadosProjetos.capaUrl(projeto_r3)) ? 2 : 3, tmp_12_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", projeto_r3.nome, "\n");
    \u0275\u0275advance();
    \u0275\u0275conditional(projeto_r3.estudio ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(projeto_r3.tipo ? 8 : -1);
  }
}
function ProjetosExternos_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, ProjetosExternos_Conditional_26_For_2_Template, 11, 7, "a", 12, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.dadosProjetos.projetos());
  }
}
var ProjetosExternos = class _ProjetosExternos {
  dadosProjetos = inject(DadosProjetosExternos);
  ngOnInit() {
    void this.dadosProjetos.listar();
  }
  static \u0275fac = function ProjetosExternos_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjetosExternos)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjetosExternos, selectors: [["app-projetos-externos"]], decls: 27, vars: 3, consts: [[1, "pagina"], [1, "cabecalho-pagina"], [1, "sobretitulo"], [1, "acoes-cabecalho"], ["aria-labelledby", "titulo-seletor", 1, "seletor-projetos"], [1, "cabecalho-secao"], ["id", "titulo-seletor"], [1, "estado"], [1, "estado", "estado-erro"], [1, "estado-vazio"], [1, "lista-projetos"], ["type", "button", 1, "botao", "secundario", 3, "click"], [1, "item-projeto", 3, "routerLink"], [1, "miniatura"], [3, "src", "alt"], ["aria-hidden", "true"], [1, "dados-item"], ["aria-hidden", "true", 1, "seta"]], template: function ProjetosExternos_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "header", 1)(2, "div")(3, "p", 2);
      \u0275\u0275text(4, "MEUS ACESSOS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "Projetos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, " Acesse os projetos aos quais voc\xEA foi autorizado. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 3)(10, "span");
      \u0275\u0275text(11);
      \u0275\u0275conditionalCreate(12, ProjetosExternos_Conditional_12_Template, 1, 0)(13, ProjetosExternos_Conditional_13_Template, 1, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "section", 4)(15, "header", 5)(16, "div")(17, "p", 2);
      \u0275\u0275text(18, " SEUS ACESSOS ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "h2", 6);
      \u0275\u0275text(20, " Projetos dispon\xEDveis ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "p");
      \u0275\u0275text(22, " Selecione um projeto para acessar sua central. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(23, ProjetosExternos_Conditional_23_Template, 2, 0, "div", 7)(24, ProjetosExternos_Conditional_24_Template, 5, 1, "div", 8)(25, ProjetosExternos_Conditional_25_Template, 8, 0, "div", 9)(26, ProjetosExternos_Conditional_26_Template, 3, 0, "div", 10);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1(" ", ctx.dadosProjetos.projetos().length, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dadosProjetos.projetos().length === 1 ? 12 : 13);
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.dadosProjetos.carregando() ? 23 : ctx.dadosProjetos.erro() ? 24 : ctx.dadosProjetos.projetos().length === 0 ? 25 : 26);
    }
  }, dependencies: [RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  color: var(--app-text);\n}\n.pagina[_ngcontent-%COMP%] {\n  width: min(100%, 90rem);\n  margin: 0 auto;\n  padding: clamp(1rem, 2.5vw, 2rem);\n}\n.cabecalho-pagina[_ngcontent-%COMP%], \n.cabecalho-secao[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.cabecalho-pagina[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n  border-bottom: 0.0625rem solid var(--app-border-strong);\n}\n.cabecalho-pagina[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0;\n  font-size: clamp(1.8rem, 4vw, 3rem);\n  font-weight: 770;\n  line-height: 0.95;\n  letter-spacing: -0.06em;\n}\n.cabecalho-pagina[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-child, \n.cabecalho-secao[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0.48rem 0 0;\n  color: var(--app-text-muted);\n  font-size: 0.67rem;\n  line-height: 1.45;\n}\n.sobretitulo[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.56rem;\n  font-weight: 800;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.acoes-cabecalho[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  gap: 0.8rem;\n}\n.acoes-cabecalho[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.62rem;\n  font-weight: 720;\n}\n.botao[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 2.45rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: var(--radius-small);\n  font: inherit;\n  font-size: 0.64rem;\n  font-weight: 760;\n  text-decoration: none;\n  cursor: pointer;\n  transition: 140ms ease;\n}\n.botao[_ngcontent-%COMP%]:disabled, \nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.52;\n}\n.primario[_ngcontent-%COMP%] {\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0.0625rem solid var(--studio-brand);\n}\n.secundario[_ngcontent-%COMP%] {\n  background: var(--app-surface-muted);\n  color: var(--app-text-soft);\n  border: 0.0625rem solid var(--app-border-strong);\n}\n.secundario[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--app-surface-hover);\n  color: var(--app-text);\n}\n.seletor-projetos[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.cabecalho-secao[_ngcontent-%COMP%] {\n  align-items: end;\n  margin-bottom: 0.7rem;\n}\n.cabecalho-secao[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.lista-projetos[_ngcontent-%COMP%] {\n  display: grid;\n  max-height: 13.9rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.55rem;\n  overflow-y: auto;\n  padding-right: 0.2rem;\n}\n.item-projeto[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  min-height: 4.25rem;\n  grid-template-columns: 3rem minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.52rem;\n  background: var(--app-surface);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: var(--radius-small);\n  font: inherit;\n  text-align: left;\n  text-decoration: none;\n  cursor: pointer;\n  transition: 140ms ease;\n}\n.item-projeto[_ngcontent-%COMP%]:hover {\n  background: var(--app-surface-hover);\n  border-color: var(--app-border-strong);\n}\n.miniatura[_ngcontent-%COMP%] {\n  display: grid;\n  width: 3rem;\n  height: 3rem;\n  place-items: center;\n  overflow: hidden;\n  background: var(--app-surface-strong);\n  color: var(--studio-brand);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: calc(var(--radius-small) - 0.1rem);\n  font-size: 0.85rem;\n  font-weight: 800;\n}\n.miniatura[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.dados-item[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.14rem;\n}\n.dados-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dados-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dados-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.dados-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.56rem;\n}\n.seta[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.78rem;\n}\n.item-projeto[_ngcontent-%COMP%]:hover   .seta[_ngcontent-%COMP%] {\n  color: var(--studio-brand);\n}\n.estado[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n  color: var(--app-text-muted);\n  text-align: center;\n}\n.estado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.7rem;\n}\n.estado-erro[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.estado-vazio[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: 0;\n  padding: 0.85rem;\n  background: var(--app-surface);\n  border: 0.0625rem dashed var(--app-border-strong);\n  border-radius: var(--radius-small);\n}\n.estado-vazio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0;\n  font-size: 0.9rem;\n}\n.estado-vazio[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-child {\n  margin: 0.35rem 0 0;\n  color: var(--app-text-muted);\n  font-size: 0.62rem;\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%], \n   *[_ngcontent-%COMP%]::before, \n   *[_ngcontent-%COMP%]::after {\n    transition-duration: 0.01ms !important;\n  }\n}\n@media (max-width: 68rem) {\n  .lista-projetos[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 46rem) {\n  .pagina[_ngcontent-%COMP%] {\n    padding: 0.8rem 0.7rem 2rem;\n  }\n  .cabecalho-pagina[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .acoes-cabecalho[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .lista-projetos[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 31rem) {\n  .item-projeto[_ngcontent-%COMP%] {\n    grid-template-columns: 3rem minmax(0, 1fr) auto;\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjetosExternos, [{
    type: Component,
    args: [{ selector: "app-projetos-externos", standalone: true, imports: [RouterLink], template: `<main class="pagina">

  <header class="cabecalho-pagina">

    <div>

      <p class="sobretitulo">MEUS ACESSOS</p>

      <h1>Projetos</h1>

      <p>
        Acesse os projetos aos quais voc\xEA foi autorizado.
      </p>

    </div>

    <div class="acoes-cabecalho">

      <span>
        {{ dadosProjetos.projetos().length }}

        @if (dadosProjetos.projetos().length === 1) {
          projeto
        } @else {
          projetos
        }
      </span>

    </div>

  </header>

  <section
    class="seletor-projetos"
    aria-labelledby="titulo-seletor"
  >

    <header class="cabecalho-secao">

      <div>

        <p class="sobretitulo">
          SEUS ACESSOS
        </p>

        <h2 id="titulo-seletor">
          Projetos dispon\xEDveis
        </h2>

      </div>

      <p>
        Selecione um projeto para acessar sua central.
      </p>

    </header>

    @if (dadosProjetos.carregando()) {

      <div class="estado">
        Carregando projetos...
      </div>

    } @else if (dadosProjetos.erro()) {

      <div class="estado estado-erro">

        <p>
          {{ dadosProjetos.erro() }}
        </p>

        <button
          type="button"
          class="botao secundario"
          (click)="dadosProjetos.listar()"
        >
          Tentar novamente
        </button>

      </div>

    } @else if (dadosProjetos.projetos().length === 0) {

      <div class="estado-vazio">

        <div>

          <p class="sobretitulo">
            SEM ACESSOS
          </p>

          <h3>
            Nenhum projeto dispon\xEDvel.
          </h3>

          <p>
            Voc\xEA ainda n\xE3o possui acesso a nenhum projeto.
          </p>

        </div>

      </div>

    } @else {

      <div class="lista-projetos">

        @for (
          projeto of dadosProjetos.projetos();
          track projeto.id


        ) {

          <a
            class="item-projeto"
            [routerLink]="[
              '/projetos-externos',
              projeto.id
            ]"
          >

            <span class="miniatura">

              @if (
                dadosProjetos.capaUrl(projeto);
                as capaUrl
              ) {

                <img
                  [src]="capaUrl"
                  [alt]="''"
                />

              } @else {

                <span aria-hidden="true">
                  {{
                    projeto.nome
                      .charAt(0)
                      .toLocaleUpperCase('pt-BR')
                  }}

                </span>

              }

            </span>

            <span class="dados-item">

             <strong>
  {{ projeto.nome }}
</strong>

@if (projeto.estudio) {

  <small>
    {{ projeto.estudio.nome }}
  </small>

}

@if (projeto.tipo) {

  <small>
    {{ projeto.tipo }}
  </small>

}

            </span>

            <span
              class="seta"
              aria-hidden="true"
            >
              \u2192
            </span>

          </a>

        }

      </div>

    }

  </section>

</main>

`, styles: ["/* apps/studio-dash/src/app/paginas/projetos-externos/projetos-externos.scss */\n:host {\n  display: block;\n  min-height: 100%;\n  color: var(--app-text);\n}\n.pagina {\n  width: min(100%, 90rem);\n  margin: 0 auto;\n  padding: clamp(1rem, 2.5vw, 2rem);\n}\n.cabecalho-pagina,\n.cabecalho-secao {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.cabecalho-pagina {\n  padding-bottom: 1rem;\n  border-bottom: 0.0625rem solid var(--app-border-strong);\n}\n.cabecalho-pagina h1 {\n  margin: 0.3rem 0 0;\n  font-size: clamp(1.8rem, 4vw, 3rem);\n  font-weight: 770;\n  line-height: 0.95;\n  letter-spacing: -0.06em;\n}\n.cabecalho-pagina > div > p:last-child,\n.cabecalho-secao > p {\n  margin: 0.48rem 0 0;\n  color: var(--app-text-muted);\n  font-size: 0.67rem;\n  line-height: 1.45;\n}\n.sobretitulo {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.56rem;\n  font-weight: 800;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.acoes-cabecalho {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  gap: 0.8rem;\n}\n.acoes-cabecalho > span {\n  color: var(--app-text-muted);\n  font-size: 0.62rem;\n  font-weight: 720;\n}\n.botao {\n  display: inline-flex;\n  min-height: 2.45rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: var(--radius-small);\n  font: inherit;\n  font-size: 0.64rem;\n  font-weight: 760;\n  text-decoration: none;\n  cursor: pointer;\n  transition: 140ms ease;\n}\n.botao:disabled,\nbutton:disabled {\n  cursor: wait;\n  opacity: 0.52;\n}\n.primario {\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0.0625rem solid var(--studio-brand);\n}\n.secundario {\n  background: var(--app-surface-muted);\n  color: var(--app-text-soft);\n  border: 0.0625rem solid var(--app-border-strong);\n}\n.secundario:hover:not(:disabled) {\n  background: var(--app-surface-hover);\n  color: var(--app-text);\n}\n.seletor-projetos {\n  margin-top: 1.5rem;\n}\n.cabecalho-secao {\n  align-items: end;\n  margin-bottom: 0.7rem;\n}\n.cabecalho-secao > p {\n  margin: 0;\n}\n.lista-projetos {\n  display: grid;\n  max-height: 13.9rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.55rem;\n  overflow-y: auto;\n  padding-right: 0.2rem;\n}\n.item-projeto {\n  display: grid;\n  min-width: 0;\n  min-height: 4.25rem;\n  grid-template-columns: 3rem minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.52rem;\n  background: var(--app-surface);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: var(--radius-small);\n  font: inherit;\n  text-align: left;\n  text-decoration: none;\n  cursor: pointer;\n  transition: 140ms ease;\n}\n.item-projeto:hover {\n  background: var(--app-surface-hover);\n  border-color: var(--app-border-strong);\n}\n.miniatura {\n  display: grid;\n  width: 3rem;\n  height: 3rem;\n  place-items: center;\n  overflow: hidden;\n  background: var(--app-surface-strong);\n  color: var(--studio-brand);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: calc(var(--radius-small) - 0.1rem);\n  font-size: 0.85rem;\n  font-weight: 800;\n}\n.miniatura img {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.dados-item {\n  display: grid;\n  min-width: 0;\n  gap: 0.14rem;\n}\n.dados-item strong,\n.dados-item small {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dados-item strong {\n  font-size: 0.7rem;\n}\n.dados-item small {\n  color: var(--app-text-muted);\n  font-size: 0.56rem;\n}\n.seta {\n  color: var(--app-text-muted);\n  font-size: 0.78rem;\n}\n.item-projeto:hover .seta {\n  color: var(--studio-brand);\n}\n.estado {\n  padding: 2rem 1rem;\n  color: var(--app-text-muted);\n  text-align: center;\n}\n.estado p {\n  margin: 0 0 0.7rem;\n}\n.estado-erro {\n  color: var(--color-danger);\n}\n.estado-vazio {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: 0;\n  padding: 0.85rem;\n  background: var(--app-surface);\n  border: 0.0625rem dashed var(--app-border-strong);\n  border-radius: var(--radius-small);\n}\n.estado-vazio h3 {\n  margin: 0.3rem 0 0;\n  font-size: 0.9rem;\n}\n.estado-vazio div > p:last-child {\n  margin: 0.35rem 0 0;\n  color: var(--app-text-muted);\n  font-size: 0.62rem;\n}\n@media (prefers-reduced-motion: reduce) {\n  *,\n  *::before,\n  *::after {\n    transition-duration: 0.01ms !important;\n  }\n}\n@media (max-width: 68rem) {\n  .lista-projetos {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 46rem) {\n  .pagina {\n    padding: 0.8rem 0.7rem 2rem;\n  }\n  .cabecalho-pagina {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .acoes-cabecalho {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .lista-projetos {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 31rem) {\n  .item-projeto {\n    grid-template-columns: 3rem minmax(0, 1fr) auto;\n  }\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjetosExternos, { className: "ProjetosExternos", filePath: "apps/studio-dash/src/app/paginas/projetos-externos/projetos-externos.ts", lineNumber: 13 });
})();
export {
  ProjetosExternos
};
