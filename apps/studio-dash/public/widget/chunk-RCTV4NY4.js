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
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-OOHEKRNK.js";
import {
  ActivatedRoute,
  ClienteSupabase,
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
  ɵɵtextInterpolate1
} from "./chunk-IMBOO5ID.js";

// apps/studio-dash/src/app/paginas/projetos-artisticos/projetos-artisticos.ts
var _c0 = (a0) => ({ projeto: a0, novo: 1 });
var _c1 = (a0) => ["/projetos", a0];
var _c2 = (a0) => ({ contato: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function ProjetosArtisticos_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "CAT\xC1LOGO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h1");
    \u0275\u0275text(3, "Projetos art\xEDsticos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, " Escolha um projeto para acessar sua central ou gerenciar sua identidade. ");
    \u0275\u0275elementEnd();
  }
}
function ProjetosArtisticos_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "MEUS ACESSOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h1");
    \u0275\u0275text(3, "Projetos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, " Acesse os projetos aos quais voc\xEA foi autorizado. ");
    \u0275\u0275elementEnd();
  }
}
function ProjetosArtisticos_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " projeto ");
  }
}
function ProjetosArtisticos_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " projetos ");
  }
}
function ProjetosArtisticos_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ProjetosArtisticos_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.abrirNovoProjeto());
    });
    \u0275\u0275text(1, " + Novo projeto ");
    \u0275\u0275elementEnd();
  }
}
function ProjetosArtisticos_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.erroOperacao(), " ");
  }
}
function ProjetosArtisticos_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Editar projeto ");
  }
}
function ProjetosArtisticos_Conditional_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Novo projeto ");
  }
}
function ProjetosArtisticos_Conditional_12_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Informe o nome do projeto.");
    \u0275\u0275elementEnd();
  }
}
function ProjetosArtisticos_Conditional_12_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Informe o tipo do projeto.");
    \u0275\u0275elementEnd();
  }
}
function ProjetosArtisticos_Conditional_12_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvando... ");
  }
}
function ProjetosArtisticos_Conditional_12_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvar altera\xE7\xF5es ");
  }
}
function ProjetosArtisticos_Conditional_12_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Criar projeto ");
  }
}
function ProjetosArtisticos_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 5)(1, "header")(2, "div")(3, "p", 8);
    \u0275\u0275text(4, "IDENTIDADE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275conditionalCreate(6, ProjetosArtisticos_Conditional_12_Conditional_6_Template, 1, 0)(7, ProjetosArtisticos_Conditional_12_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 16);
    \u0275\u0275listener("click", function ProjetosArtisticos_Conditional_12_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelarEdicaoProjeto());
    });
    \u0275\u0275text(9, " \xD7 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 17);
    \u0275\u0275listener("ngSubmit", function ProjetosArtisticos_Conditional_12_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.salvarProjeto());
    });
    \u0275\u0275elementStart(11, "div", 18)(12, "label")(13, "span");
    \u0275\u0275text(14, "Nome art\xEDstico");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 19);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(16, ProjetosArtisticos_Conditional_12_Conditional_16_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "label")(18, "span");
    \u0275\u0275text(19, "Forma\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 20);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(21, ProjetosArtisticos_Conditional_12_Conditional_21_Template, 2, 0, "small");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 21)(23, "button", 22);
    \u0275\u0275listener("click", function ProjetosArtisticos_Conditional_12_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelarEdicaoProjeto());
    });
    \u0275\u0275text(24, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 23);
    \u0275\u0275conditionalCreate(26, ProjetosArtisticos_Conditional_12_Conditional_26_Template, 1, 0)(27, ProjetosArtisticos_Conditional_12_Conditional_27_Template, 1, 0)(28, ProjetosArtisticos_Conditional_12_Conditional_28_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.projetoEditandoId() ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.salvandoProjeto());
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.formularioProjeto);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.formularioProjeto.controls.nome.touched && ctx_r1.formularioProjeto.controls.nome.invalid ? 16 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.formularioProjeto.controls.tipo.touched && ctx_r1.formularioProjeto.controls.tipo.invalid ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.salvandoProjeto());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.salvandoProjeto());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.salvandoProjeto() ? 26 : ctx_r1.projetoEditandoId() ? 27 : 28);
  }
}
function ProjetosArtisticos_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " ACESSO R\xC1PIDO ");
  }
}
function ProjetosArtisticos_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " SEUS ACESSOS ");
  }
}
function ProjetosArtisticos_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Seus projetos ");
  }
}
function ProjetosArtisticos_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Projetos dispon\xEDveis ");
  }
}
function ProjetosArtisticos_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Selecione um projeto para atualizar o painel abaixo. ");
  }
}
function ProjetosArtisticos_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Selecione um projeto para acessar sua central. ");
  }
}
function ProjetosArtisticos_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, " Carregando projetos... ");
    \u0275\u0275elementEnd();
  }
}
function ProjetosArtisticos_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 24);
    \u0275\u0275listener("click", function ProjetosArtisticos_Conditional_26_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dadosProjetos.listar());
    });
    \u0275\u0275text(4, " Tentar novamente ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dadosProjetos.erro());
  }
}
function ProjetosArtisticos_Conditional_27_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "PRIMEIRO PROJETO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "Seu cat\xE1logo ainda est\xE1 vazio.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, " Cadastre um artista, banda, dupla ou coletivo para come\xE7ar. ");
    \u0275\u0275elementEnd();
  }
}
function ProjetosArtisticos_Conditional_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "SEM ACESSOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "Nenhum projeto dispon\xEDvel.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, " Voc\xEA ainda n\xE3o possui acesso a nenhum projeto. ");
    \u0275\u0275elementEnd();
  }
}
function ProjetosArtisticos_Conditional_27_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ProjetosArtisticos_Conditional_27_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.abrirNovoProjeto());
    });
    \u0275\u0275text(1, " Criar projeto ");
    \u0275\u0275elementEnd();
  }
}
function ProjetosArtisticos_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div");
    \u0275\u0275conditionalCreate(2, ProjetosArtisticos_Conditional_27_Conditional_2_Template, 6, 0)(3, ProjetosArtisticos_Conditional_27_Conditional_3_Template, 6, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ProjetosArtisticos_Conditional_27_Conditional_4_Template, 2, 0, "button", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.modoEstudio() ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.modoEstudio() ? 4 : -1);
  }
}
function ProjetosArtisticos_Conditional_28_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 28);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", "");
  }
}
function ProjetosArtisticos_Conditional_28_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const projeto_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", projeto_r7.nome.charAt(0).toLocaleUpperCase("pt-BR"), " ");
  }
}
function ProjetosArtisticos_Conditional_28_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " pessoa ");
  }
}
function ProjetosArtisticos_Conditional_28_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " pessoas ");
  }
}
function ProjetosArtisticos_Conditional_28_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function ProjetosArtisticos_Conditional_28_For_2_Template_button_click_0_listener() {
      const projeto_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selecionarProjeto(projeto_r7.id));
    });
    \u0275\u0275elementStart(1, "span", 27);
    \u0275\u0275conditionalCreate(2, ProjetosArtisticos_Conditional_28_For_2_Conditional_2_Template, 1, 2, "img", 28)(3, ProjetosArtisticos_Conditional_28_For_2_Conditional_3_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 31);
    \u0275\u0275text(10);
    \u0275\u0275conditionalCreate(11, ProjetosArtisticos_Conditional_28_For_2_Conditional_11_Template, 1, 0)(12, ProjetosArtisticos_Conditional_28_For_2_Conditional_12_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 32);
    \u0275\u0275text(14, " \u2192 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const projeto_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selecionado", ctx_r1.projetoSelecionadoId() === projeto_r7.id);
    \u0275\u0275attribute("aria-pressed", ctx_r1.projetoSelecionadoId() === projeto_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_13_0 = ctx_r1.dadosProjetos.capaUrl(projeto_r7)) ? 2 : 3, tmp_13_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(projeto_r7.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(projeto_r7.tipo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", projeto_r7.membros.length, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(projeto_r7.membros.length === 1 ? 11 : 12);
  }
}
function ProjetosArtisticos_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, ProjetosArtisticos_Conditional_28_For_2_Template, 15, 8, "button", 25, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.dadosProjetos.projetos());
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 28);
  }
  if (rf & 2) {
    const projeto_r8 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", "Capa de " + projeto_r8.nome);
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const projeto_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", projeto_r8.nome.charAt(0).toLocaleUpperCase("pt-BR"), " ");
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Enviando...");
    \u0275\u0275elementEnd();
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Removendo...");
    \u0275\u0275elementEnd();
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " PROJETO ATUAL ");
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " PROJETO ");
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " participante vinculado ");
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " participantes vinculados ");
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Trocar capa ");
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Adicionar capa ");
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const projeto_r8 = \u0275\u0275nextContext(2);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removerCapa(projeto_r8));
    });
    \u0275\u0275text(1, " Remover capa ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.enviandoCapaId() !== null || ctx_r1.removendoCapaId() !== null);
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Excluindo... ");
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Excluir projeto ");
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "p");
    \u0275\u0275text(2, " Nenhum contato vinculado a este projeto. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 41);
    \u0275\u0275listener("click", function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_21_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const projeto_r8 = \u0275\u0275nextContext(2);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.abrirNovoMembro(projeto_r8.id));
    });
    \u0275\u0275text(4, " Adicionar o primeiro ");
    \u0275\u0275elementEnd()();
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_22_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 inativo ");
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_22_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Removendo... ");
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_22_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Remover ");
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 53)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275conditionalCreate(8, ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_22_For_2_Conditional_8_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 54);
    \u0275\u0275text(10, " Ver contato ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 41);
    \u0275\u0275listener("click", function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_22_For_2_Template_button_click_11_listener() {
      const membro_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const projeto_r8 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editarMembro(projeto_r8.id, membro_r13));
    });
    \u0275\u0275text(12, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 49);
    \u0275\u0275listener("click", function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_22_For_2_Template_button_click_13_listener() {
      const membro_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removerMembro(membro_r13));
    });
    \u0275\u0275conditionalCreate(14, ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_22_For_2_Conditional_14_Template, 1, 0)(15, ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_22_For_2_Conditional_15_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const membro_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("inativo", !membro_r13.ativo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", membro_r13.contato.nome.charAt(0).toLocaleUpperCase("pt-BR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", membro_r13.contato.nome, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", membro_r13.papel, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!membro_r13.ativo ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(9, _c2, membro_r13.contato.id));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.excluindoMembroId() === membro_r13.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.excluindoMembroId() === membro_r13.id ? 14 : 15);
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275repeaterCreate(1, ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_22_For_2_Template, 16, 11, "div", 50, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const projeto_r8 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(projeto_r8.membros);
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_23_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Editar participante ");
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_23_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Novo participante ");
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_23_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const contato_r15 = ctx.$implicit;
    \u0275\u0275property("value", contato_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", contato_r15.nome, " ");
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_23_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvando... ");
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_23_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvar v\xEDnculo ");
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_23_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Adicionar ");
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 55);
    \u0275\u0275listener("ngSubmit", function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_23_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r14);
      const projeto_r8 = \u0275\u0275nextContext(2);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.salvarMembro(projeto_r8.id));
    });
    \u0275\u0275elementStart(1, "header")(2, "div")(3, "p", 8);
    \u0275\u0275text(4, " V\xCDNCULO ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275conditionalCreate(6, ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_23_Conditional_6_Template, 1, 0)(7, ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_23_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 16);
    \u0275\u0275listener("click", function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_23_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fecharFormularioMembro());
    });
    \u0275\u0275text(9, " \xD7 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 56)(11, "label")(12, "span");
    \u0275\u0275text(13, "Contato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 57)(15, "option", 58);
    \u0275\u0275text(16, " Selecione um contato ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(17, ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_23_For_18_Template, 2, 2, "option", 59, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "label")(20, "span");
    \u0275\u0275text(21, "Papel");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 60);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "label", 61);
    \u0275\u0275element(24, "input", 62);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "V\xEDnculo ativo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 21)(28, "button", 22);
    \u0275\u0275listener("click", function ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_23_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fecharFormularioMembro());
    });
    \u0275\u0275text(29, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 23);
    \u0275\u0275conditionalCreate(31, ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_23_Conditional_31_Template, 1, 0)(32, ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_23_Conditional_32_Template, 1, 0)(33, ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_23_Conditional_33_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r1.formularioMembro);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.membroEditandoId() ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.salvandoMembro());
    \u0275\u0275advance(6);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.dadosContatos.contatos());
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.salvandoMembro());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.salvandoMembro());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.salvandoMembro() ? 31 : ctx_r1.membroEditandoId() ? 32 : 33);
  }
}
function ProjetosArtisticos_Conditional_29_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "button", 41);
    \u0275\u0275listener("click", function ProjetosArtisticos_Conditional_29_Conditional_25_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const projeto_r8 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editarProjeto(projeto_r8));
    });
    \u0275\u0275text(2, " Editar identidade ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label")(4, "input", 42);
    \u0275\u0275listener("change", function ProjetosArtisticos_Conditional_29_Conditional_25_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const projeto_r8 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enviarCapa(projeto_r8, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275conditionalCreate(6, ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_6_Template, 1, 0)(7, ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_8_Template, 2, 1, "button", 43);
    \u0275\u0275elementStart(9, "button", 44);
    \u0275\u0275listener("click", function ProjetosArtisticos_Conditional_29_Conditional_25_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const projeto_r8 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.excluirProjeto(projeto_r8));
    });
    \u0275\u0275conditionalCreate(10, ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_10_Template, 1, 0)(11, ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_11_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "section", 45)(13, "header")(14, "div")(15, "p", 8);
    \u0275\u0275text(16, " IDENTIDADE COLETIVA ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h3");
    \u0275\u0275text(18, "Participantes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 24);
    \u0275\u0275listener("click", function ProjetosArtisticos_Conditional_29_Conditional_25_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r9);
      const projeto_r8 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.abrirNovoMembro(projeto_r8.id));
    });
    \u0275\u0275text(20, " + Participante ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(21, ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_21_Template, 5, 0, "div", 46)(22, ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_22_Template, 3, 0, "div", 47);
    \u0275\u0275conditionalCreate(23, ProjetosArtisticos_Conditional_29_Conditional_25_Conditional_23_Template, 34, 6, "form", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const projeto_r8 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("desabilitado", ctx_r1.enviandoCapaId() !== null || ctx_r1.removendoCapaId() !== null);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.enviandoCapaId() !== null || ctx_r1.removendoCapaId() !== null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(projeto_r8.capa_caminho ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(projeto_r8.capa_caminho ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.excluindoProjetoId() === projeto_r8.id || ctx_r1.enviandoCapaId() === projeto_r8.id || ctx_r1.removendoCapaId() === projeto_r8.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.excluindoProjetoId() === projeto_r8.id ? 10 : 11);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(projeto_r8.membros.length === 0 ? 21 : 22);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.projetoMembroId() === projeto_r8.id ? 23 : -1);
  }
}
function ProjetosArtisticos_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "header", 33)(2, "div", 34);
    \u0275\u0275conditionalCreate(3, ProjetosArtisticos_Conditional_29_Conditional_3_Template, 1, 2, "img", 28)(4, ProjetosArtisticos_Conditional_29_Conditional_4_Template, 2, 1, "span", 29);
    \u0275\u0275conditionalCreate(5, ProjetosArtisticos_Conditional_29_Conditional_5_Template, 2, 0, "small")(6, ProjetosArtisticos_Conditional_29_Conditional_6_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35)(8, "p", 8);
    \u0275\u0275conditionalCreate(9, ProjetosArtisticos_Conditional_29_Conditional_9_Template, 1, 0)(10, ProjetosArtisticos_Conditional_29_Conditional_10_Template, 1, 0);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h2");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275conditionalCreate(16, ProjetosArtisticos_Conditional_29_Conditional_16_Template, 1, 0)(17, ProjetosArtisticos_Conditional_29_Conditional_17_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 36)(19, "a", 37);
    \u0275\u0275text(20, " Nova faixa ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 38);
    \u0275\u0275text(22, " Montar trabalho ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "a", 39);
    \u0275\u0275text(24, " Abrir central \u2192 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(25, ProjetosArtisticos_Conditional_29_Conditional_25_Template, 24, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const projeto_r8 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("processando", ctx_r1.enviandoCapaId() === projeto_r8.id || ctx_r1.removendoCapaId() === projeto_r8.id);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.dadosProjetos.capaUrl(projeto_r8)) ? 3 : 4, tmp_3_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.enviandoCapaId() === projeto_r8.id ? 5 : ctx_r1.removendoCapaId() === projeto_r8.id ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.modoEstudio() ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \xB7 ", projeto_r8.tipo, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(projeto_r8.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", projeto_r8.membros.length, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(projeto_r8.membros.length === 1 ? 16 : 17);
    \u0275\u0275advance(3);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(13, _c0, projeto_r8.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(15, _c0, projeto_r8.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c1, projeto_r8.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.modoEstudio() ? 25 : -1);
  }
}
var ProjetosArtisticos = class _ProjetosArtisticos {
  dadosProjetos = inject(DadosProjetosArtisticos);
  dadosContatos = inject(DadosContatos);
  modoEstudio = signal(
    false,
    ...ngDevMode ? [{ debugName: "modoEstudio" }] : (
      /* istanbul ignore next */
      []
    )
  );
  clienteSupabase = inject(ClienteSupabase);
  construtorFormulario = inject(FormBuilder);
  rota = inject(ActivatedRoute);
  destruirRef = inject(DestroyRef);
  projetoEditandoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "projetoEditandoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formularioProjetoVisivel = signal(
    false,
    ...ngDevMode ? [{ debugName: "formularioProjetoVisivel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  projetoSelecionadoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "projetoSelecionadoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  projetoMembroId = signal(
    null,
    ...ngDevMode ? [{ debugName: "projetoMembroId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  membroEditandoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "membroEditandoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  salvandoProjeto = signal(
    false,
    ...ngDevMode ? [{ debugName: "salvandoProjeto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  salvandoMembro = signal(
    false,
    ...ngDevMode ? [{ debugName: "salvandoMembro" }] : (
      /* istanbul ignore next */
      []
    )
  );
  excluindoProjetoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "excluindoProjetoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  excluindoMembroId = signal(
    null,
    ...ngDevMode ? [{ debugName: "excluindoMembroId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  enviandoCapaId = signal(
    null,
    ...ngDevMode ? [{ debugName: "enviandoCapaId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  removendoCapaId = signal(
    null,
    ...ngDevMode ? [{ debugName: "removendoCapaId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroOperacao = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroOperacao" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formularioProjeto = this.construtorFormulario.group({
    nome: this.construtorFormulario.nonNullable.control("", [
      Validators.required
    ]),
    tipo: this.construtorFormulario.nonNullable.control("solo", [
      Validators.required
    ])
  });
  formularioMembro = this.construtorFormulario.group({
    contato_id: this.construtorFormulario.nonNullable.control("", [
      Validators.required
    ]),
    papel: this.construtorFormulario.nonNullable.control("", [
      Validators.required
    ]),
    ativo: this.construtorFormulario.nonNullable.control(true)
  });
  projetoSelecionado = computed(
    () => {
      const projetoId = this.projetoSelecionadoId();
      return this.dadosProjetos.projetos().find((projeto) => projeto.id === projetoId) ?? null;
    },
    ...ngDevMode ? [{ debugName: "projetoSelecionado" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    void this.inicializar();
  }
  async inicializar() {
    await this.carregarDados();
    if (!this.projetoSelecionadoId()) {
      this.projetoSelecionadoId.set(this.dadosProjetos.projetos()[0]?.id ?? null);
    }
    this.rota.queryParamMap.pipe(takeUntilDestroyed(this.destruirRef)).subscribe((parametros) => {
      this.aplicarContextoDaRota(parametros);
    });
  }
  aplicarContextoDaRota(parametros) {
    const projetoId = parametros.get("projeto")?.trim();
    const projeto = this.dadosProjetos.projetos().find((item) => item.id === projetoId);
    if (!projeto) {
      return;
    }
    this.projetoSelecionadoId.set(projeto.id);
    if (parametros.get("novoMembro") === "1") {
      this.abrirNovoMembro(projeto.id);
    }
    if (parametros.get("editar") === "1") {
      this.editarProjeto(projeto);
      return;
    }
    window.setTimeout(() => {
      document.getElementById("projeto-selecionado")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
  async carregarDados() {
    const { data: { user } } = await this.clienteSupabase.cliente.auth.getUser();
    if (!user) {
      return;
    }
    const { data: estudio } = await this.clienteSupabase.cliente.from("estudios").select("id").eq("id", user.id).maybeSingle();
    this.modoEstudio.set(!!estudio);
    await this.dadosProjetos.listar();
    if (estudio) {
      await this.dadosContatos.listar();
    }
  }
  async salvarProjeto() {
    if (this.formularioProjeto.invalid) {
      this.formularioProjeto.markAllAsTouched();
      return;
    }
    this.salvandoProjeto.set(true);
    this.erroOperacao.set(null);
    try {
      const valor = this.formularioProjeto.getRawValue();
      const dados = {
        nome: valor.nome,
        tipo: valor.tipo
      };
      const projetoId = this.projetoEditandoId();
      if (projetoId) {
        await this.dadosProjetos.atualizarProjeto(projetoId, dados);
      } else {
        await this.dadosProjetos.cadastrarProjeto(dados);
      }
      this.limparFormularioProjeto();
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.salvandoProjeto.set(false);
    }
  }
  abrirNovoProjeto() {
    this.limparFormularioProjeto();
    this.formularioProjetoVisivel.set(true);
    window.setTimeout(() => {
      document.getElementById("formulario-projeto")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
  editarProjeto(projeto) {
    this.projetoEditandoId.set(projeto.id);
    this.formularioProjetoVisivel.set(true);
    this.erroOperacao.set(null);
    this.formularioProjeto.setValue({
      nome: projeto.nome,
      tipo: projeto.tipo
    });
    window.setTimeout(() => {
      document.getElementById("formulario-projeto")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
  cancelarEdicaoProjeto() {
    this.limparFormularioProjeto();
    this.formularioProjetoVisivel.set(false);
  }
  selecionarProjeto(projetoId) {
    if (this.projetoSelecionadoId() === projetoId) {
      return;
    }
    this.projetoSelecionadoId.set(projetoId);
    this.fecharFormularioMembro();
    this.erroOperacao.set(null);
  }
  async excluirProjeto(projeto) {
    const confirmou = window.confirm(`Excluir o projeto "${projeto.nome}"? Os v\xEDnculos de membros e as faixas desse projeto tamb\xE9m ser\xE3o exclu\xEDdos.`);
    if (!confirmou) {
      return;
    }
    this.excluindoProjetoId.set(projeto.id);
    this.erroOperacao.set(null);
    try {
      await this.dadosProjetos.excluirProjeto(projeto.id);
      if (this.projetoEditandoId() === projeto.id) {
        this.limparFormularioProjeto();
      }
      if (this.projetoMembroId() === projeto.id) {
        this.fecharFormularioMembro();
      }
      if (this.projetoSelecionadoId() === projeto.id) {
        this.projetoSelecionadoId.set(this.dadosProjetos.projetos()[0]?.id ?? null);
      }
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.excluindoProjetoId.set(null);
    }
  }
  async enviarCapa(projeto, evento) {
    const input = evento.target;
    const arquivo = input.files?.item(0) ?? null;
    if (!arquivo) {
      return;
    }
    this.enviandoCapaId.set(projeto.id);
    this.erroOperacao.set(null);
    try {
      await this.dadosProjetos.enviarCapa(projeto.id, arquivo);
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      input.value = "";
      this.enviandoCapaId.set(null);
    }
  }
  async removerCapa(projeto) {
    if (!projeto.capa_caminho) {
      return;
    }
    const confirmou = window.confirm(`Remover a capa de "${projeto.nome}"?`);
    if (!confirmou) {
      return;
    }
    this.removendoCapaId.set(projeto.id);
    this.erroOperacao.set(null);
    try {
      await this.dadosProjetos.removerCapa(projeto.id);
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.removendoCapaId.set(null);
    }
  }
  abrirNovoMembro(projetoId) {
    this.projetoSelecionadoId.set(projetoId);
    this.projetoMembroId.set(projetoId);
    this.membroEditandoId.set(null);
    this.erroOperacao.set(null);
    this.formularioMembro.reset({
      contato_id: "",
      papel: "",
      ativo: true
    });
  }
  editarMembro(projetoId, membro) {
    this.projetoSelecionadoId.set(projetoId);
    this.projetoMembroId.set(projetoId);
    this.membroEditandoId.set(membro.id);
    this.erroOperacao.set(null);
    this.formularioMembro.setValue({
      contato_id: membro.contato_id,
      papel: membro.papel,
      ativo: membro.ativo
    });
  }
  async salvarMembro(projetoId) {
    if (this.formularioMembro.invalid) {
      this.formularioMembro.markAllAsTouched();
      return;
    }
    this.salvandoMembro.set(true);
    this.erroOperacao.set(null);
    try {
      const valor = this.formularioMembro.getRawValue();
      const dados = {
        contato_id: valor.contato_id,
        papel: valor.papel,
        ativo: valor.ativo
      };
      const membroId = this.membroEditandoId();
      if (membroId) {
        await this.dadosProjetos.atualizarMembro(membroId, dados);
      } else {
        await this.dadosProjetos.adicionarMembro(projetoId, dados);
      }
      this.fecharFormularioMembro();
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.salvandoMembro.set(false);
    }
  }
  fecharFormularioMembro() {
    this.projetoMembroId.set(null);
    this.membroEditandoId.set(null);
    this.formularioMembro.reset({
      contato_id: "",
      papel: "",
      ativo: true
    });
  }
  async removerMembro(membro) {
    const confirmou = window.confirm(`Remover "${membro.contato.nome}" deste projeto?`);
    if (!confirmou) {
      return;
    }
    this.excluindoMembroId.set(membro.id);
    this.erroOperacao.set(null);
    try {
      await this.dadosProjetos.removerMembro(membro.id);
      if (this.membroEditandoId() === membro.id) {
        this.fecharFormularioMembro();
      }
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.excluindoMembroId.set(null);
    }
  }
  limparFormularioProjeto() {
    this.projetoEditandoId.set(null);
    this.formularioProjetoVisivel.set(false);
    this.formularioProjeto.reset({
      nome: "",
      tipo: "solo"
    });
  }
  obterMensagemErro(erro) {
    if (typeof erro === "object" && erro !== null && "message" in erro) {
      return String(erro.message);
    }
    return "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o.";
  }
  static \u0275fac = function ProjetosArtisticos_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjetosArtisticos)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjetosArtisticos, selectors: [["app-projetos-artisticos"]], decls: 30, vars: 11, consts: [[1, "pagina"], [1, "cabecalho-pagina"], [1, "acoes-cabecalho"], ["type", "button", 1, "botao", "primario"], ["role", "alert", 1, "alerta"], ["id", "formulario-projeto", 1, "editor-projeto"], ["aria-labelledby", "titulo-seletor", 1, "seletor-projetos"], [1, "cabecalho-secao"], [1, "sobretitulo"], ["id", "titulo-seletor"], [1, "estado"], [1, "estado", "estado-erro"], [1, "estado-vazio"], [1, "lista-projetos"], ["id", "projeto-selecionado", 1, "central-projeto"], ["type", "button", 1, "botao", "primario", 3, "click"], ["type", "button", "aria-label", "Fechar formul\xE1rio", 1, "fechar", 3, "click", "disabled"], [3, "ngSubmit", "formGroup"], [1, "campos-projeto"], ["type", "text", "formControlName", "nome", "placeholder", "Nome do artista, banda ou coletivo"], ["type", "text", "formControlName", "tipo", "placeholder", "Solo, banda, dupla, coletivo..."], [1, "acoes-formulario"], ["type", "button", 1, "botao", "secundario", 3, "click", "disabled"], ["type", "submit", 1, "botao", "primario", 3, "disabled"], ["type", "button", 1, "botao", "secundario", 3, "click"], ["type", "button", 1, "item-projeto", 3, "selecionado"], ["type", "button", 1, "item-projeto", 3, "click"], [1, "miniatura"], [3, "src", "alt"], ["aria-hidden", "true"], [1, "dados-item"], [1, "quantidade-membros"], ["aria-hidden", "true", 1, "seta"], [1, "resumo-projeto"], [1, "capa-projeto"], [1, "identidade"], [1, "acoes-principais"], ["routerLink", "/faixas", 1, "botao", "secundario", 3, "queryParams"], ["routerLink", "/albuns", 1, "botao", "secundario", 3, "queryParams"], [1, "botao", "primario", 3, "routerLink"], [1, "barra-identidade"], ["type", "button", 3, "click"], ["type", "file", "accept", ".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp", 3, "change", "disabled"], ["type", "button", 1, "perigo", 3, "disabled"], ["type", "button", 1, "perigo", "excluir-projeto", 3, "click", "disabled"], [1, "participantes"], [1, "sem-participantes"], [1, "lista-participantes"], [1, "formulario-membro", 3, "formGroup"], ["type", "button", 1, "perigo", 3, "click", "disabled"], [1, "participante", 3, "inativo"], [1, "participante"], ["aria-hidden", "true", 1, "avatar"], [1, "dados-participante"], ["routerLink", "/contatos", 3, "queryParams"], [1, "formulario-membro", 3, "ngSubmit", "formGroup"], [1, "campos-membro"], ["formControlName", "contato_id"], ["value", ""], [3, "value"], ["type", "text", "formControlName", "papel", "placeholder", "Vocalista, produtor, empres\xE1rio..."], [1, "campo-ativo"], ["type", "checkbox", "formControlName", "ativo"]], template: function ProjetosArtisticos_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "header", 1)(2, "div");
      \u0275\u0275conditionalCreate(3, ProjetosArtisticos_Conditional_3_Template, 6, 0)(4, ProjetosArtisticos_Conditional_4_Template, 6, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 2)(6, "span");
      \u0275\u0275text(7);
      \u0275\u0275conditionalCreate(8, ProjetosArtisticos_Conditional_8_Template, 1, 0)(9, ProjetosArtisticos_Conditional_9_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, ProjetosArtisticos_Conditional_10_Template, 2, 0, "button", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(11, ProjetosArtisticos_Conditional_11_Template, 2, 1, "div", 4);
      \u0275\u0275conditionalCreate(12, ProjetosArtisticos_Conditional_12_Template, 29, 8, "section", 5);
      \u0275\u0275elementStart(13, "section", 6)(14, "header", 7)(15, "div")(16, "p", 8);
      \u0275\u0275conditionalCreate(17, ProjetosArtisticos_Conditional_17_Template, 1, 0)(18, ProjetosArtisticos_Conditional_18_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "h2", 9);
      \u0275\u0275conditionalCreate(20, ProjetosArtisticos_Conditional_20_Template, 1, 0)(21, ProjetosArtisticos_Conditional_21_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "p");
      \u0275\u0275conditionalCreate(23, ProjetosArtisticos_Conditional_23_Template, 1, 0)(24, ProjetosArtisticos_Conditional_24_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(25, ProjetosArtisticos_Conditional_25_Template, 2, 0, "div", 10)(26, ProjetosArtisticos_Conditional_26_Template, 5, 1, "div", 11)(27, ProjetosArtisticos_Conditional_27_Template, 5, 2, "div", 12)(28, ProjetosArtisticos_Conditional_28_Template, 3, 0, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(29, ProjetosArtisticos_Conditional_29_Template, 26, 19, "section", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_10_0;
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.modoEstudio() ? 3 : 4);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.dadosProjetos.projetos().length, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dadosProjetos.projetos().length === 1 ? 8 : 9);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.modoEstudio() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.erroOperacao() ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modoEstudio() && ctx.formularioProjetoVisivel() ? 12 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.modoEstudio() ? 17 : 18);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.modoEstudio() ? 20 : 21);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.modoEstudio() ? 23 : 24);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.dadosProjetos.carregando() ? 25 : ctx.dadosProjetos.erro() ? 26 : ctx.dadosProjetos.projetos().length === 0 ? 27 : 28);
      \u0275\u0275advance(4);
      \u0275\u0275conditional((tmp_10_0 = ctx.projetoSelecionado()) ? 29 : -1, tmp_10_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  color: var(--app-text);\n}\n.pagina[_ngcontent-%COMP%] {\n  width: min(100%, 90rem);\n  margin: 0 auto;\n  padding: clamp(1rem, 2.5vw, 2rem);\n}\n.cabecalho-pagina[_ngcontent-%COMP%], \n.cabecalho-secao[_ngcontent-%COMP%], \n.resumo-projeto[_ngcontent-%COMP%], \n.participantes[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%], \n.editor-projeto[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%], \n.formulario-membro[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.cabecalho-pagina[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n  border-bottom: 0.0625rem solid var(--app-border-strong);\n}\n.cabecalho-pagina[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0;\n  font-size: clamp(1.8rem, 4vw, 3rem);\n  font-weight: 770;\n  line-height: 0.95;\n  letter-spacing: -0.06em;\n}\n.cabecalho-pagina[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-child, \n.cabecalho-secao[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], \n.identidade[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-child {\n  margin: 0.48rem 0 0;\n  color: var(--app-text-muted);\n  font-size: 0.67rem;\n  line-height: 1.45;\n}\n.sobretitulo[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.56rem;\n  font-weight: 800;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.acoes-cabecalho[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  gap: 0.8rem;\n}\n.acoes-cabecalho[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.62rem;\n  font-weight: 720;\n}\n.botao[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 2.45rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: var(--radius-small);\n  font: inherit;\n  font-size: 0.64rem;\n  font-weight: 760;\n  text-decoration: none;\n  cursor: pointer;\n  transition: 140ms ease;\n}\n.botao[_ngcontent-%COMP%]:disabled, \nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.52;\n}\n.primario[_ngcontent-%COMP%] {\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0.0625rem solid var(--studio-brand);\n}\n.primario[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.secundario[_ngcontent-%COMP%] {\n  background: var(--app-surface-muted);\n  color: var(--app-text-soft);\n  border: 0.0625rem solid var(--app-border-strong);\n}\n.secundario[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--app-surface-hover);\n  color: var(--app-text);\n}\n.alerta[_ngcontent-%COMP%] {\n  margin-top: 0.8rem;\n  padding: 0.7rem 0.85rem;\n  background: var(--color-danger-soft);\n  color: var(--color-danger);\n  border: 0.0625rem solid var(--color-danger-border);\n  border-radius: var(--radius-small);\n  font-size: 0.66rem;\n}\n.editor-projeto[_ngcontent-%COMP%] {\n  margin-top: 0.8rem;\n  padding: 1rem;\n  background: var(--studio-brand-soft);\n  border: 0.0625rem solid var(--studio-brand-border);\n  border-radius: var(--radius-medium);\n  scroll-margin-top: 1rem;\n}\n.editor-projeto[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.cabecalho-secao[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.identidade[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.28rem 0 0;\n  font-size: 1.15rem;\n  font-weight: 760;\n  letter-spacing: -0.04em;\n}\n.editor-projeto[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: end;\n  gap: 1rem;\n  margin-top: 0.8rem;\n}\n.campos-projeto[_ngcontent-%COMP%], \n.campos-membro[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n}\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: 0.35rem;\n}\nlabel[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--app-text-soft);\n  font-size: 0.62rem;\n  font-weight: 740;\n}\nlabel[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n  font-size: 0.58rem;\n}\ninput[_ngcontent-%COMP%]:not([type=checkbox]), \nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 2.55rem;\n  padding: 0.55rem 0.68rem;\n  background: var(--app-surface);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-small);\n  font: inherit;\n  font-size: 0.7rem;\n  outline: none;\n}\ninput[_ngcontent-%COMP%]:not([type=checkbox]):focus, \nselect[_ngcontent-%COMP%]:focus {\n  border-color: var(--studio-brand);\n  box-shadow: 0 0 0 0.15rem var(--studio-brand-soft);\n}\n.acoes-formulario[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.45rem;\n}\n.fechar[_ngcontent-%COMP%] {\n  display: grid;\n  width: 1.9rem;\n  height: 1.9rem;\n  place-items: center;\n  padding: 0;\n  background: transparent;\n  color: var(--app-text-muted);\n  border: 0;\n  border-radius: 50%;\n  font: inherit;\n  font-size: 1.05rem;\n  cursor: pointer;\n}\n.fechar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--app-surface);\n  color: var(--app-text);\n}\n.seletor-projetos[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.cabecalho-secao[_ngcontent-%COMP%] {\n  align-items: end;\n  margin-bottom: 0.7rem;\n}\n.cabecalho-secao[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.lista-projetos[_ngcontent-%COMP%] {\n  display: grid;\n  max-height: 13.9rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.55rem;\n  overflow-y: auto;\n  padding-right: 0.2rem;\n}\n.item-projeto[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  min-height: 4.25rem;\n  grid-template-columns: 3rem minmax(0, 1fr) auto auto;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.52rem;\n  background: var(--app-surface);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: var(--radius-small);\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n  transition: 140ms ease;\n}\n.item-projeto[_ngcontent-%COMP%]:hover {\n  background: var(--app-surface-hover);\n  border-color: var(--app-border-strong);\n}\n.item-projeto.selecionado[_ngcontent-%COMP%] {\n  background: var(--studio-brand-soft);\n  border-color: var(--studio-brand-border);\n  box-shadow: inset 0.2rem 0 0 var(--studio-brand);\n}\n.miniatura[_ngcontent-%COMP%] {\n  display: grid;\n  width: 3rem;\n  height: 3rem;\n  place-items: center;\n  overflow: hidden;\n  background: var(--app-surface-strong);\n  color: var(--studio-brand);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: calc(var(--radius-small) - 0.1rem);\n  font-size: 0.85rem;\n  font-weight: 800;\n}\n.miniatura[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.dados-item[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.14rem;\n}\n.dados-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dados-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dados-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.dados-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.quantidade-membros[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.56rem;\n}\n.quantidade-membros[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.seta[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.78rem;\n}\n.selecionado[_ngcontent-%COMP%]   .seta[_ngcontent-%COMP%] {\n  color: var(--studio-brand);\n}\n.central-projeto[_ngcontent-%COMP%] {\n  margin-top: 0.8rem;\n  overflow: hidden;\n  background: var(--app-surface);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-medium);\n  box-shadow: var(--shadow-small);\n  scroll-margin-top: 1rem;\n}\n.resumo-projeto[_ngcontent-%COMP%] {\n  min-height: 8rem;\n  padding: 0.9rem;\n}\n.capa-projeto[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  width: 6.2rem;\n  height: 6.2rem;\n  flex: 0 0 auto;\n  place-items: center;\n  overflow: hidden;\n  background: var(--app-surface-strong);\n  color: var(--studio-brand);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-small);\n  font-size: 1.65rem;\n  font-weight: 800;\n}\n.capa-projeto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.capa-projeto.processando[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.capa-projeto.processando[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  opacity: 0.28;\n}\n.capa-projeto[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  background: rgba(10, 10, 11, 0.62);\n  color: #fff;\n  font-size: 0.54rem;\n}\n.identidade[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1 1 auto;\n}\n.identidade[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-size: clamp(1.45rem, 3vw, 2.25rem);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.acoes-principais[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.45rem;\n}\n.barra-identidade[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.18rem;\n  min-height: 2.65rem;\n  padding: 0.38rem 0.8rem;\n  background: var(--app-surface-muted);\n  border-block: 0.0625rem solid var(--app-border);\n}\n.barra-identidade[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.barra-identidade[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 1.9rem;\n  align-items: center;\n  padding: 0.3rem 0.5rem;\n  background: transparent;\n  color: var(--app-text-muted);\n  border: 0;\n  border-radius: var(--radius-small);\n  font: inherit;\n  font-size: 0.57rem;\n  font-weight: 720;\n  cursor: pointer;\n}\n.barra-identidade[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled), \n.barra-identidade[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  background: var(--app-surface);\n  color: var(--app-text);\n}\n.barra-identidade[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  opacity: 0;\n  pointer-events: none;\n}\n.barra-identidade[_ngcontent-%COMP%]   .desabilitado[_ngcontent-%COMP%] {\n  cursor: wait;\n  opacity: 0.5;\n}\n.barra-identidade[_ngcontent-%COMP%]   .perigo[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.barra-identidade[_ngcontent-%COMP%]   .excluir-projeto[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.participantes[_ngcontent-%COMP%] {\n  padding: 0.9rem;\n}\n.participantes[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  font-size: 0.95rem;\n}\n.lista-participantes[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.4rem;\n  margin-top: 0.7rem;\n}\n.participante[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  min-height: 3.25rem;\n  grid-template-columns: auto minmax(0, 1fr) auto auto auto;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  background: var(--app-surface-muted);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: var(--radius-small);\n}\n.participante.inativo[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  background: var(--studio-brand-soft);\n  color: var(--studio-brand);\n  border: 0.0625rem solid var(--studio-brand-border);\n  border-radius: 50%;\n  font-size: 0.58rem;\n  font-weight: 800;\n}\n.dados-participante[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.12rem;\n}\n.dados-participante[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dados-participante[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dados-participante[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n}\n.dados-participante[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.55rem;\n}\n.participante[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], \n.participante[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], \n.sem-participantes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.28rem;\n  background: transparent;\n  color: var(--app-text-muted);\n  border: 0;\n  font: inherit;\n  font-size: 0.54rem;\n  font-weight: 700;\n  text-decoration: none;\n  cursor: pointer;\n}\n.participante[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, \n.participante[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover:not(:disabled), \n.sem-participantes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--app-text);\n}\n.participante[_ngcontent-%COMP%]    > button.perigo[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.sem-participantes[_ngcontent-%COMP%], \n.estado-vazio[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: 0.7rem;\n  padding: 0.85rem;\n  background: var(--app-surface-muted);\n  border: 0.0625rem dashed var(--app-border-strong);\n  border-radius: var(--radius-small);\n}\n.sem-participantes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.62rem;\n}\n.sem-participantes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: var(--studio-brand);\n}\n.formulario-membro[_ngcontent-%COMP%] {\n  margin-top: 0.7rem;\n  padding: 0.85rem;\n  background: var(--studio-brand-soft);\n  border: 0.0625rem solid var(--studio-brand-border);\n  border-radius: var(--radius-small);\n}\n.formulario-membro[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0.22rem 0 0;\n  font-size: 0.78rem;\n}\n.campos-membro[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;\n  margin-top: 0.7rem;\n}\n.campo-ativo[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 2.55rem;\n  align-items: center;\n  align-self: end;\n  flex-direction: row;\n  padding: 0 0.65rem;\n  background: var(--app-surface);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-small);\n}\n.campo-ativo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--studio-brand);\n}\n.formulario-membro[_ngcontent-%COMP%]   .acoes-formulario[_ngcontent-%COMP%] {\n  margin-top: 0.7rem;\n}\n.estado[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n  color: var(--app-text-muted);\n  text-align: center;\n}\n.estado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.7rem;\n}\n.estado-erro[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.estado-vazio[_ngcontent-%COMP%] {\n  margin-top: 0;\n  background: var(--app-surface);\n}\n.estado-vazio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0;\n  font-size: 0.9rem;\n}\n.estado-vazio[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-child {\n  margin: 0.35rem 0 0;\n  color: var(--app-text-muted);\n  font-size: 0.62rem;\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%], \n   *[_ngcontent-%COMP%]::before, \n   *[_ngcontent-%COMP%]::after {\n    transition-duration: 0.01ms !important;\n  }\n}\n@media (max-width: 68rem) {\n  .lista-projetos[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .resumo-projeto[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n  .acoes-principais[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 7.2rem;\n    justify-content: flex-start;\n  }\n  .lista-participantes[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 46rem) {\n  .pagina[_ngcontent-%COMP%] {\n    padding: 0.8rem 0.7rem 2rem;\n  }\n  .cabecalho-pagina[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .acoes-cabecalho[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .editor-projeto[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .lista-projetos[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .resumo-projeto[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 4.8rem minmax(0, 1fr);\n  }\n  .capa-projeto[_ngcontent-%COMP%] {\n    width: 4.8rem;\n    height: 4.8rem;\n  }\n  .acoes-principais[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    width: auto;\n    padding-left: 0;\n    flex-wrap: wrap;\n  }\n  .barra-identidade[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .barra-identidade[_ngcontent-%COMP%]   .excluir-projeto[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .campos-projeto[_ngcontent-%COMP%], \n   .campos-membro[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .campo-ativo[_ngcontent-%COMP%] {\n    width: max-content;\n  }\n}\n@media (max-width: 31rem) {\n  .item-projeto[_ngcontent-%COMP%] {\n    grid-template-columns: 3rem minmax(0, 1fr) auto;\n  }\n  .quantidade-membros[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .acoes-principais[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n  .participante[_ngcontent-%COMP%] {\n    grid-template-columns: auto minmax(0, 1fr);\n  }\n  .participante[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], \n   .participante[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    justify-self: start;\n  }\n  .participantes[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .acoes-formulario[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    align-items: stretch;\n  }\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjetosArtisticos, [{
    type: Component,
    args: [{ selector: "app-projetos-artisticos", standalone: true, imports: [ReactiveFormsModule, RouterLink], template: `<main class="pagina">
  <header class="cabecalho-pagina">
    <div>
      @if (modoEstudio()) {
        <p class="sobretitulo">CAT\xC1LOGO</p>
        <h1>Projetos art\xEDsticos</h1>
        <p>
          Escolha um projeto para acessar sua central ou gerenciar sua
          identidade.
        </p>
      } @else {
        <p class="sobretitulo">MEUS ACESSOS</p>
        <h1>Projetos</h1>
        <p>
          Acesse os projetos aos quais voc\xEA foi autorizado.
        </p>
      }
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

      @if (modoEstudio()) {
        <button
          type="button"
          class="botao primario"
          (click)="abrirNovoProjeto()"
        >
          + Novo projeto
        </button>
      }
    </div>
  </header>

  @if (erroOperacao()) {
    <div class="alerta" role="alert">
      {{ erroOperacao() }}
    </div>
  }

  @if (modoEstudio() && formularioProjetoVisivel()) {
    <section id="formulario-projeto" class="editor-projeto">
      <header>
        <div>
          <p class="sobretitulo">IDENTIDADE</p>
          <h2>
            @if (projetoEditandoId()) {
              Editar projeto
            } @else {
              Novo projeto
            }
          </h2>
        </div>

        <button
          type="button"
          class="fechar"
          aria-label="Fechar formul\xE1rio"
          [disabled]="salvandoProjeto()"
          (click)="cancelarEdicaoProjeto()"
        >
          \xD7
        </button>
      </header>

      <form
        [formGroup]="formularioProjeto"
        (ngSubmit)="salvarProjeto()"
      >
        <div class="campos-projeto">
          <label>
            <span>Nome art\xEDstico</span>
            <input
              type="text"
              formControlName="nome"
              placeholder="Nome do artista, banda ou coletivo"
            />

            @if (
              formularioProjeto.controls.nome.touched &&
              formularioProjeto.controls.nome.invalid
            ) {
              <small>Informe o nome do projeto.</small>
            }
          </label>

          <label>
            <span>Forma\xE7\xE3o</span>
            <input
              type="text"
              formControlName="tipo"
              placeholder="Solo, banda, dupla, coletivo..."
            />

            @if (
              formularioProjeto.controls.tipo.touched &&
              formularioProjeto.controls.tipo.invalid
            ) {
              <small>Informe o tipo do projeto.</small>
            }
          </label>
        </div>

        <div class="acoes-formulario">
          <button
            type="button"
            class="botao secundario"
            [disabled]="salvandoProjeto()"
            (click)="cancelarEdicaoProjeto()"
          >
            Cancelar
          </button>

          <button
            type="submit"
            class="botao primario"
            [disabled]="salvandoProjeto()"
          >
            @if (salvandoProjeto()) {
              Salvando...
            } @else if (projetoEditandoId()) {
              Salvar altera\xE7\xF5es
            } @else {
              Criar projeto
            }
          </button>
        </div>
      </form>
    </section>
  }

  <section
    class="seletor-projetos"
    aria-labelledby="titulo-seletor"
  >
    <header class="cabecalho-secao">
      <div>
        <p class="sobretitulo">
          @if (modoEstudio()) {
            ACESSO R\xC1PIDO
          } @else {
            SEUS ACESSOS
          }
        </p>

        <h2 id="titulo-seletor">
          @if (modoEstudio()) {
            Seus projetos
          } @else {
            Projetos dispon\xEDveis
          }
        </h2>
      </div>

      <p>
        @if (modoEstudio()) {
          Selecione um projeto para atualizar o painel abaixo.
        } @else {
          Selecione um projeto para acessar sua central.
        }
      </p>
    </header>

    @if (dadosProjetos.carregando()) {
      <div class="estado">
        Carregando projetos...
      </div>
    } @else if (dadosProjetos.erro()) {
      <div class="estado estado-erro">
        <p>{{ dadosProjetos.erro() }}</p>

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
          @if (modoEstudio()) {
            <p class="sobretitulo">PRIMEIRO PROJETO</p>

            <h3>Seu cat\xE1logo ainda est\xE1 vazio.</h3>

            <p>
              Cadastre um artista, banda, dupla ou coletivo para come\xE7ar.
            </p>
          } @else {
            <p class="sobretitulo">SEM ACESSOS</p>

            <h3>Nenhum projeto dispon\xEDvel.</h3>

            <p>
              Voc\xEA ainda n\xE3o possui acesso a nenhum projeto.
            </p>
          }
        </div>

        @if (modoEstudio()) {
          <button
            type="button"
            class="botao primario"
            (click)="abrirNovoProjeto()"
          >
            Criar projeto
          </button>
        }
      </div>
    } @else {
      <div class="lista-projetos">
        @for (
          projeto of dadosProjetos.projetos();
          track projeto.id
        ) {
          <button
            type="button"
            class="item-projeto"
            [class.selecionado]="
              projetoSelecionadoId() === projeto.id
            "
            [attr.aria-pressed]="
              projetoSelecionadoId() === projeto.id
            "
            (click)="selecionarProjeto(projeto.id)"
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
              <strong>{{ projeto.nome }}</strong>
              <small>{{ projeto.tipo }}</small>
            </span>

            <span class="quantidade-membros">
              {{ projeto.membros.length }}

              @if (projeto.membros.length === 1) {
                pessoa
              } @else {
                pessoas
              }
            </span>

            <span
              class="seta"
              aria-hidden="true"
            >
              \u2192
            </span>
          </button>
        }
      </div>
    }
  </section>

  @if (projetoSelecionado(); as projeto) {
    <section
      id="projeto-selecionado"
      class="central-projeto"
    >
      <header class="resumo-projeto">
        <div
          class="capa-projeto"
          [class.processando]="
            enviandoCapaId() === projeto.id ||
            removendoCapaId() === projeto.id
          "
        >
          @if (
            dadosProjetos.capaUrl(projeto);
            as capaUrl
          ) {
            <img
              [src]="capaUrl"
              [alt]="'Capa de ' + projeto.nome"
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

          @if (enviandoCapaId() === projeto.id) {
            <small>Enviando...</small>
          } @else if (
            removendoCapaId() === projeto.id
          ) {
            <small>Removendo...</small>
          }
        </div>

        <div class="identidade">
          <p class="sobretitulo">
            @if (modoEstudio()) {
              PROJETO ATUAL
            } @else {
              PROJETO
            }

            \xB7 {{ projeto.tipo }}
          </p>

          <h2>{{ projeto.nome }}</h2>

          <p>
            {{ projeto.membros.length }}

            @if (projeto.membros.length === 1) {
              participante vinculado
            } @else {
              participantes vinculados
            }
          </p>
        </div>

        <div class="acoes-principais">
          <a
            class="botao secundario"
            routerLink="/faixas"
            [queryParams]="{
              projeto: projeto.id,
              novo: 1
            }"
          >
            Nova faixa
          </a>

          <a
            class="botao secundario"
            routerLink="/albuns"
            [queryParams]="{
              projeto: projeto.id,
              novo: 1
            }"
          >
            Montar trabalho
          </a>

          <a
            class="botao primario"
            [routerLink]="[
              '/projetos',
              projeto.id
            ]"
          >
            Abrir central \u2192
          </a>
        </div>
      </header>

      @if (modoEstudio()) {
        <div class="barra-identidade">
          <button
            type="button"
            (click)="editarProjeto(projeto)"
          >
            Editar identidade
          </button>

          <label
            [class.desabilitado]="
              enviandoCapaId() !== null ||
              removendoCapaId() !== null
            "
          >
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
              [disabled]="
                enviandoCapaId() !== null ||
                removendoCapaId() !== null
              "
              (change)="enviarCapa(projeto, $event)"
            />

            <span>
              @if (projeto.capa_caminho) {
                Trocar capa
              } @else {
                Adicionar capa
              }
            </span>
          </label>

          @if (projeto.capa_caminho) {
            <button
              type="button"
              class="perigo"
              [disabled]="
                enviandoCapaId() !== null ||
                removendoCapaId() !== null
              "
              (click)="removerCapa(projeto)"
            >
              Remover capa
            </button>
          }

          <button
            type="button"
            class="perigo excluir-projeto"
            [disabled]="
              excluindoProjetoId() === projeto.id ||
              enviandoCapaId() === projeto.id ||
              removendoCapaId() === projeto.id
            "
            (click)="excluirProjeto(projeto)"
          >
            @if (
              excluindoProjetoId() === projeto.id
            ) {
              Excluindo...
            } @else {
              Excluir projeto
            }
          </button>
        </div>

        <section class="participantes">
          <header>
            <div>
              <p class="sobretitulo">
                IDENTIDADE COLETIVA
              </p>

              <h3>Participantes</h3>
            </div>

            <button
              type="button"
              class="botao secundario"
              (click)="abrirNovoMembro(projeto.id)"
            >
              + Participante
            </button>
          </header>

          @if (projeto.membros.length === 0) {
            <div class="sem-participantes">
              <p>
                Nenhum contato vinculado a este projeto.
              </p>

              <button
                type="button"
                (click)="abrirNovoMembro(projeto.id)"
              >
                Adicionar o primeiro
              </button>
            </div>
          } @else {
            <div class="lista-participantes">
              @for (
                membro of projeto.membros;
                track membro.id
              ) {
                <div
                  class="participante"
                  [class.inativo]="!membro.ativo"
                >
                  <span
                    class="avatar"
                    aria-hidden="true"
                  >
                    {{
                      membro.contato.nome
                        .charAt(0)
                        .toLocaleUpperCase('pt-BR')
                    }}
                  </span>

                  <span class="dados-participante">
                    <strong>
                      {{ membro.contato.nome }}
                    </strong>

                    <small>
                      {{ membro.papel }}

                      @if (!membro.ativo) {
                        \xB7 inativo
                      }
                    </small>
                  </span>

                  <a
                    routerLink="/contatos"
                    [queryParams]="{
                      contato: membro.contato.id
                    }"
                  >
                    Ver contato
                  </a>

                  <button
                    type="button"
                    (click)="
                      editarMembro(
                        projeto.id,
                        membro
                      )
                    "
                  >
                    Editar
                  </button>

                  <button
                    type="button"
                    class="perigo"
                    [disabled]="
                      excluindoMembroId() === membro.id
                    "
                    (click)="removerMembro(membro)"
                  >
                    @if (
                      excluindoMembroId() === membro.id
                    ) {
                      Removendo...
                    } @else {
                      Remover
                    }
                  </button>
                </div>
              }
            </div>
          }

          @if (
            projetoMembroId() === projeto.id
          ) {
            <form
              class="formulario-membro"
              [formGroup]="formularioMembro"
              (ngSubmit)="
                salvarMembro(projeto.id)
              "
            >
              <header>
                <div>
                  <p class="sobretitulo">
                    V\xCDNCULO
                  </p>

                  <h4>
                    @if (membroEditandoId()) {
                      Editar participante
                    } @else {
                      Novo participante
                    }
                  </h4>
                </div>

                <button
                  type="button"
                  class="fechar"
                  aria-label="Fechar formul\xE1rio"
                  [disabled]="salvandoMembro()"
                  (click)="fecharFormularioMembro()"
                >
                  \xD7
                </button>
              </header>

              <div class="campos-membro">
                <label>
                  <span>Contato</span>

                  <select
                    formControlName="contato_id"
                  >
                    <option value="">
                      Selecione um contato
                    </option>

                    @for (
                      contato of dadosContatos.contatos();
                      track contato.id
                    ) {
                      <option
                        [value]="contato.id"
                      >
                        {{ contato.nome }}
                      </option>
                    }
                  </select>
                </label>

                <label>
                  <span>Papel</span>

                  <input
                    type="text"
                    formControlName="papel"
                    placeholder="Vocalista, produtor, empres\xE1rio..."
                  />
                </label>

                <label class="campo-ativo">
                  <input
                    type="checkbox"
                    formControlName="ativo"
                  />

                  <span>V\xEDnculo ativo</span>
                </label>
              </div>

              <div class="acoes-formulario">
                <button
                  type="button"
                  class="botao secundario"
                  [disabled]="salvandoMembro()"
                  (click)="fecharFormularioMembro()"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  class="botao primario"
                  [disabled]="salvandoMembro()"
                >
                  @if (salvandoMembro()) {
                    Salvando...
                  } @else if (membroEditandoId()) {
                    Salvar v\xEDnculo
                  } @else {
                    Adicionar
                  }
                </button>
              </div>
            </form>
          }
        </section>
      }
    </section>
  }
</main>
`, styles: ["/* apps/studio-dash/src/app/paginas/projetos-artisticos/projetos-artisticos.scss */\n:host {\n  display: block;\n  min-height: 100%;\n  color: var(--app-text);\n}\n.pagina {\n  width: min(100%, 90rem);\n  margin: 0 auto;\n  padding: clamp(1rem, 2.5vw, 2rem);\n}\n.cabecalho-pagina,\n.cabecalho-secao,\n.resumo-projeto,\n.participantes > header,\n.editor-projeto > header,\n.formulario-membro > header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.cabecalho-pagina {\n  padding-bottom: 1rem;\n  border-bottom: 0.0625rem solid var(--app-border-strong);\n}\n.cabecalho-pagina h1 {\n  margin: 0.3rem 0 0;\n  font-size: clamp(1.8rem, 4vw, 3rem);\n  font-weight: 770;\n  line-height: 0.95;\n  letter-spacing: -0.06em;\n}\n.cabecalho-pagina > div > p:last-child,\n.cabecalho-secao > p,\n.identidade > p:last-child {\n  margin: 0.48rem 0 0;\n  color: var(--app-text-muted);\n  font-size: 0.67rem;\n  line-height: 1.45;\n}\n.sobretitulo {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.56rem;\n  font-weight: 800;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.acoes-cabecalho {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  gap: 0.8rem;\n}\n.acoes-cabecalho > span {\n  color: var(--app-text-muted);\n  font-size: 0.62rem;\n  font-weight: 720;\n}\n.botao {\n  display: inline-flex;\n  min-height: 2.45rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: var(--radius-small);\n  font: inherit;\n  font-size: 0.64rem;\n  font-weight: 760;\n  text-decoration: none;\n  cursor: pointer;\n  transition: 140ms ease;\n}\n.botao:disabled,\nbutton:disabled {\n  cursor: wait;\n  opacity: 0.52;\n}\n.primario {\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0.0625rem solid var(--studio-brand);\n}\n.primario:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.secundario {\n  background: var(--app-surface-muted);\n  color: var(--app-text-soft);\n  border: 0.0625rem solid var(--app-border-strong);\n}\n.secundario:hover:not(:disabled) {\n  background: var(--app-surface-hover);\n  color: var(--app-text);\n}\n.alerta {\n  margin-top: 0.8rem;\n  padding: 0.7rem 0.85rem;\n  background: var(--color-danger-soft);\n  color: var(--color-danger);\n  border: 0.0625rem solid var(--color-danger-border);\n  border-radius: var(--radius-small);\n  font-size: 0.66rem;\n}\n.editor-projeto {\n  margin-top: 0.8rem;\n  padding: 1rem;\n  background: var(--studio-brand-soft);\n  border: 0.0625rem solid var(--studio-brand-border);\n  border-radius: var(--radius-medium);\n  scroll-margin-top: 1rem;\n}\n.editor-projeto h2,\n.cabecalho-secao h2,\n.identidade h2 {\n  margin: 0.28rem 0 0;\n  font-size: 1.15rem;\n  font-weight: 760;\n  letter-spacing: -0.04em;\n}\n.editor-projeto form {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: end;\n  gap: 1rem;\n  margin-top: 0.8rem;\n}\n.campos-projeto,\n.campos-membro {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n}\nlabel {\n  display: grid;\n  align-content: start;\n  gap: 0.35rem;\n}\nlabel > span {\n  color: var(--app-text-soft);\n  font-size: 0.62rem;\n  font-weight: 740;\n}\nlabel small {\n  color: var(--color-danger);\n  font-size: 0.58rem;\n}\ninput:not([type=checkbox]),\nselect {\n  width: 100%;\n  min-height: 2.55rem;\n  padding: 0.55rem 0.68rem;\n  background: var(--app-surface);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-small);\n  font: inherit;\n  font-size: 0.7rem;\n  outline: none;\n}\ninput:not([type=checkbox]):focus,\nselect:focus {\n  border-color: var(--studio-brand);\n  box-shadow: 0 0 0 0.15rem var(--studio-brand-soft);\n}\n.acoes-formulario {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.45rem;\n}\n.fechar {\n  display: grid;\n  width: 1.9rem;\n  height: 1.9rem;\n  place-items: center;\n  padding: 0;\n  background: transparent;\n  color: var(--app-text-muted);\n  border: 0;\n  border-radius: 50%;\n  font: inherit;\n  font-size: 1.05rem;\n  cursor: pointer;\n}\n.fechar:hover:not(:disabled) {\n  background: var(--app-surface);\n  color: var(--app-text);\n}\n.seletor-projetos {\n  margin-top: 1.5rem;\n}\n.cabecalho-secao {\n  align-items: end;\n  margin-bottom: 0.7rem;\n}\n.cabecalho-secao > p {\n  margin: 0;\n}\n.lista-projetos {\n  display: grid;\n  max-height: 13.9rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.55rem;\n  overflow-y: auto;\n  padding-right: 0.2rem;\n}\n.item-projeto {\n  display: grid;\n  min-width: 0;\n  min-height: 4.25rem;\n  grid-template-columns: 3rem minmax(0, 1fr) auto auto;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.52rem;\n  background: var(--app-surface);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: var(--radius-small);\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n  transition: 140ms ease;\n}\n.item-projeto:hover {\n  background: var(--app-surface-hover);\n  border-color: var(--app-border-strong);\n}\n.item-projeto.selecionado {\n  background: var(--studio-brand-soft);\n  border-color: var(--studio-brand-border);\n  box-shadow: inset 0.2rem 0 0 var(--studio-brand);\n}\n.miniatura {\n  display: grid;\n  width: 3rem;\n  height: 3rem;\n  place-items: center;\n  overflow: hidden;\n  background: var(--app-surface-strong);\n  color: var(--studio-brand);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: calc(var(--radius-small) - 0.1rem);\n  font-size: 0.85rem;\n  font-weight: 800;\n}\n.miniatura img {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.dados-item {\n  display: grid;\n  min-width: 0;\n  gap: 0.14rem;\n}\n.dados-item strong,\n.dados-item small {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dados-item strong {\n  font-size: 0.7rem;\n}\n.dados-item small,\n.quantidade-membros {\n  color: var(--app-text-muted);\n  font-size: 0.56rem;\n}\n.quantidade-membros {\n  white-space: nowrap;\n}\n.seta {\n  color: var(--app-text-muted);\n  font-size: 0.78rem;\n}\n.selecionado .seta {\n  color: var(--studio-brand);\n}\n.central-projeto {\n  margin-top: 0.8rem;\n  overflow: hidden;\n  background: var(--app-surface);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-medium);\n  box-shadow: var(--shadow-small);\n  scroll-margin-top: 1rem;\n}\n.resumo-projeto {\n  min-height: 8rem;\n  padding: 0.9rem;\n}\n.capa-projeto {\n  position: relative;\n  display: grid;\n  width: 6.2rem;\n  height: 6.2rem;\n  flex: 0 0 auto;\n  place-items: center;\n  overflow: hidden;\n  background: var(--app-surface-strong);\n  color: var(--studio-brand);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-small);\n  font-size: 1.65rem;\n  font-weight: 800;\n}\n.capa-projeto img {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.capa-projeto.processando img,\n.capa-projeto.processando > span {\n  opacity: 0.28;\n}\n.capa-projeto small {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  background: rgba(10, 10, 11, 0.62);\n  color: #fff;\n  font-size: 0.54rem;\n}\n.identidade {\n  min-width: 0;\n  flex: 1 1 auto;\n}\n.identidade h2 {\n  overflow: hidden;\n  font-size: clamp(1.45rem, 3vw, 2.25rem);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.acoes-principais {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.45rem;\n}\n.barra-identidade {\n  display: flex;\n  align-items: center;\n  gap: 0.18rem;\n  min-height: 2.65rem;\n  padding: 0.38rem 0.8rem;\n  background: var(--app-surface-muted);\n  border-block: 0.0625rem solid var(--app-border);\n}\n.barra-identidade button,\n.barra-identidade label {\n  display: inline-flex;\n  min-height: 1.9rem;\n  align-items: center;\n  padding: 0.3rem 0.5rem;\n  background: transparent;\n  color: var(--app-text-muted);\n  border: 0;\n  border-radius: var(--radius-small);\n  font: inherit;\n  font-size: 0.57rem;\n  font-weight: 720;\n  cursor: pointer;\n}\n.barra-identidade button:hover:not(:disabled),\n.barra-identidade label:hover {\n  background: var(--app-surface);\n  color: var(--app-text);\n}\n.barra-identidade label input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  opacity: 0;\n  pointer-events: none;\n}\n.barra-identidade .desabilitado {\n  cursor: wait;\n  opacity: 0.5;\n}\n.barra-identidade .perigo {\n  color: var(--color-danger);\n}\n.barra-identidade .excluir-projeto {\n  margin-left: auto;\n}\n.participantes {\n  padding: 0.9rem;\n}\n.participantes h3 {\n  margin: 0.25rem 0 0;\n  font-size: 0.95rem;\n}\n.lista-participantes {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.4rem;\n  margin-top: 0.7rem;\n}\n.participante {\n  display: grid;\n  min-width: 0;\n  min-height: 3.25rem;\n  grid-template-columns: auto minmax(0, 1fr) auto auto auto;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  background: var(--app-surface-muted);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: var(--radius-small);\n}\n.participante.inativo {\n  opacity: 0.55;\n}\n.avatar {\n  display: grid;\n  width: 2rem;\n  height: 2rem;\n  place-items: center;\n  background: var(--studio-brand-soft);\n  color: var(--studio-brand);\n  border: 0.0625rem solid var(--studio-brand-border);\n  border-radius: 50%;\n  font-size: 0.58rem;\n  font-weight: 800;\n}\n.dados-participante {\n  display: grid;\n  min-width: 0;\n  gap: 0.12rem;\n}\n.dados-participante strong,\n.dados-participante small {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dados-participante strong {\n  font-size: 0.66rem;\n}\n.dados-participante small {\n  color: var(--app-text-muted);\n  font-size: 0.55rem;\n}\n.participante > a,\n.participante > button,\n.sem-participantes button {\n  padding: 0.28rem;\n  background: transparent;\n  color: var(--app-text-muted);\n  border: 0;\n  font: inherit;\n  font-size: 0.54rem;\n  font-weight: 700;\n  text-decoration: none;\n  cursor: pointer;\n}\n.participante > a:hover,\n.participante > button:hover:not(:disabled),\n.sem-participantes button:hover {\n  color: var(--app-text);\n}\n.participante > button.perigo {\n  color: var(--color-danger);\n}\n.sem-participantes,\n.estado-vazio {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: 0.7rem;\n  padding: 0.85rem;\n  background: var(--app-surface-muted);\n  border: 0.0625rem dashed var(--app-border-strong);\n  border-radius: var(--radius-small);\n}\n.sem-participantes p {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.62rem;\n}\n.sem-participantes button {\n  color: var(--studio-brand);\n}\n.formulario-membro {\n  margin-top: 0.7rem;\n  padding: 0.85rem;\n  background: var(--studio-brand-soft);\n  border: 0.0625rem solid var(--studio-brand-border);\n  border-radius: var(--radius-small);\n}\n.formulario-membro h4 {\n  margin: 0.22rem 0 0;\n  font-size: 0.78rem;\n}\n.campos-membro {\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;\n  margin-top: 0.7rem;\n}\n.campo-ativo {\n  display: flex;\n  min-height: 2.55rem;\n  align-items: center;\n  align-self: end;\n  flex-direction: row;\n  padding: 0 0.65rem;\n  background: var(--app-surface);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: var(--radius-small);\n}\n.campo-ativo input {\n  accent-color: var(--studio-brand);\n}\n.formulario-membro .acoes-formulario {\n  margin-top: 0.7rem;\n}\n.estado {\n  padding: 2rem 1rem;\n  color: var(--app-text-muted);\n  text-align: center;\n}\n.estado p {\n  margin: 0 0 0.7rem;\n}\n.estado-erro {\n  color: var(--color-danger);\n}\n.estado-vazio {\n  margin-top: 0;\n  background: var(--app-surface);\n}\n.estado-vazio h3 {\n  margin: 0.3rem 0 0;\n  font-size: 0.9rem;\n}\n.estado-vazio div > p:last-child {\n  margin: 0.35rem 0 0;\n  color: var(--app-text-muted);\n  font-size: 0.62rem;\n}\n@media (prefers-reduced-motion: reduce) {\n  *,\n  *::before,\n  *::after {\n    transition-duration: 0.01ms !important;\n  }\n}\n@media (max-width: 68rem) {\n  .lista-projetos {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .resumo-projeto {\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n  .acoes-principais {\n    width: 100%;\n    padding-left: 7.2rem;\n    justify-content: flex-start;\n  }\n  .lista-participantes {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 46rem) {\n  .pagina {\n    padding: 0.8rem 0.7rem 2rem;\n  }\n  .cabecalho-pagina {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .acoes-cabecalho {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .editor-projeto form {\n    grid-template-columns: 1fr;\n  }\n  .lista-projetos {\n    grid-template-columns: 1fr;\n  }\n  .resumo-projeto {\n    display: grid;\n    grid-template-columns: 4.8rem minmax(0, 1fr);\n  }\n  .capa-projeto {\n    width: 4.8rem;\n    height: 4.8rem;\n  }\n  .acoes-principais {\n    grid-column: 1/-1;\n    width: auto;\n    padding-left: 0;\n    flex-wrap: wrap;\n  }\n  .barra-identidade {\n    flex-wrap: wrap;\n  }\n  .barra-identidade .excluir-projeto {\n    margin-left: 0;\n  }\n  .campos-projeto,\n  .campos-membro {\n    grid-template-columns: 1fr;\n  }\n  .campo-ativo {\n    width: max-content;\n  }\n}\n@media (max-width: 31rem) {\n  .item-projeto {\n    grid-template-columns: 3rem minmax(0, 1fr) auto;\n  }\n  .quantidade-membros {\n    display: none;\n  }\n  .acoes-principais {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n  .participante {\n    grid-template-columns: auto minmax(0, 1fr);\n  }\n  .participante > a,\n  .participante > button {\n    justify-self: start;\n  }\n  .participantes > header {\n    align-items: flex-start;\n  }\n  .acoes-formulario {\n    flex-direction: column-reverse;\n    align-items: stretch;\n  }\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjetosArtisticos, { className: "ProjetosArtisticos", filePath: "apps/studio-dash/src/app/paginas/projetos-artisticos/projetos-artisticos.ts", lineNumber: 29 });
})();
export {
  ProjetosArtisticos
};
