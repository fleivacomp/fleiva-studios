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
  Component,
  DadosAlbuns,
  DadosEstudio,
  DadosProjetosArtisticos,
  DestroyRef,
  RouterLink,
  TIPO_PUBLICO_ENVIO,
  computed,
  effect,
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
  ɵɵtextInterpolate2
} from "./chunk-IMBOO5ID.js";

// apps/studio-dash/src/app/paginas/albuns/albuns.ts
var _c0 = (a0) => ["/projetos", a0];
var _forTrack0 = ($index, $item) => $item.id;
function Albuns_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
  if (rf & 2) {
    const album_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", "Capa de " + album_r3.nome);
  }
}
function Albuns_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const album_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r1.iniciaisProjeto(album_r3), " ");
  }
}
function Albuns_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Publicado ");
  }
}
function Albuns_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Rascunho ");
  }
}
function Albuns_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Na Casa");
    \u0275\u0275elementEnd();
  }
}
function Albuns_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 1)(1, "button", 7);
    \u0275\u0275listener("click", function Albuns_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fecharAlbum());
    });
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3, "\u2190");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Voltar aos \xE1lbuns ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10);
    \u0275\u0275conditionalCreate(7, Albuns_Conditional_1_Conditional_7_Template, 1, 2, "img", 11)(8, Albuns_Conditional_1_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 12)(10, "p", 13);
    \u0275\u0275text(11, "EDITANDO TRABALHO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h1");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 14)(17, "div", 15)(18, "span", 16);
    \u0275\u0275conditionalCreate(19, Albuns_Conditional_1_Conditional_19_Template, 1, 0)(20, Albuns_Conditional_1_Conditional_20_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, Albuns_Conditional_1_Conditional_21_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 18);
    \u0275\u0275listener("click", function Albuns_Conditional_1_Template_button_click_22_listener() {
      const album_r3 = \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editarAlbum(album_r3));
    });
    \u0275\u0275text(23, " Editar informa\xE7\xF5es ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const album_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.capaAlbum(album_r3)) ? 7 : 8, tmp_2_0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(album_r3.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", album_r3.projeto.nome, " \xB7 ", ctx_r1.rotuloQuantidadeFaixas(album_r3.faixas.length), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("estado-publicado", album_r3.publico_na_landing);
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r3.publico_na_landing ? 19 : 20);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(album_r3.publico_na_casa ? 21 : -1);
  }
}
function Albuns_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 2)(1, "div")(2, "p", 19);
    \u0275\u0275text(3, "CAT\xC1LOGO MUSICAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5, "\xC1lbuns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Monte sequ\xEAncias com as vers\xF5es que j\xE1 est\xE3o no acervo.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 20);
    \u0275\u0275listener("click", function Albuns_Conditional_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.abrirNovoAlbum(ctx_r1.projetoFiltradoId() ?? ""));
    });
    \u0275\u0275elementStart(9, "span", 8);
    \u0275\u0275text(10, "\uFF0B");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Novo \xE1lbum ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.dadosProjetos.projetos().length === 0);
  }
}
function Albuns_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " EDITANDO \xC1LBUM ");
  }
}
function Albuns_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " NOVA SEQU\xCANCIA ");
  }
}
function Albuns_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Ajustar informa\xE7\xF5es ");
  }
}
function Albuns_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Criar \xE1lbum ");
  }
}
function Albuns_Conditional_3_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const projeto_r6 = ctx.$implicit;
    \u0275\u0275property("value", projeto_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(projeto_r6.nome);
  }
}
function Albuns_Conditional_3_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Selecione o projeto art\xEDstico.");
    \u0275\u0275elementEnd();
  }
}
function Albuns_Conditional_3_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Informe o nome do \xE1lbum.");
    \u0275\u0275elementEnd();
  }
}
function Albuns_Conditional_3_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvando... ");
  }
}
function Albuns_Conditional_3_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvar altera\xE7\xF5es ");
  }
}
function Albuns_Conditional_3_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Criar \xE1lbum ");
  }
}
function Albuns_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 3)(1, "header", 21)(2, "div")(3, "p", 13);
    \u0275\u0275conditionalCreate(4, Albuns_Conditional_3_Conditional_4_Template, 1, 0)(5, Albuns_Conditional_3_Conditional_5_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275conditionalCreate(7, Albuns_Conditional_3_Conditional_7_Template, 1, 0)(8, Albuns_Conditional_3_Conditional_8_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 22);
    \u0275\u0275listener("click", function Albuns_Conditional_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelarFormulario());
    });
    \u0275\u0275text(10, " \xD7 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "form", 23);
    \u0275\u0275listener("ngSubmit", function Albuns_Conditional_3_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.salvarAlbum());
    });
    \u0275\u0275elementStart(12, "div", 24)(13, "label")(14, "span");
    \u0275\u0275text(15, "Projeto art\xEDstico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 25)(17, "option", 26);
    \u0275\u0275text(18, "Selecione um projeto");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, Albuns_Conditional_3_For_20_Template, 2, 2, "option", 27, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(21, Albuns_Conditional_3_Conditional_21_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label")(23, "span");
    \u0275\u0275text(24, "Nome do \xE1lbum");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 28);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(26, Albuns_Conditional_3_Conditional_26_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "label", 29)(28, "span");
    \u0275\u0275text(29, "Observa\xE7\xF5es internas");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "textarea", 30);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 31)(32, "button", 32);
    \u0275\u0275listener("click", function Albuns_Conditional_3_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelarFormulario());
    });
    \u0275\u0275text(33, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 33);
    \u0275\u0275conditionalCreate(35, Albuns_Conditional_3_Conditional_35_Template, 1, 0)(36, Albuns_Conditional_3_Conditional_36_Template, 1, 0)(37, Albuns_Conditional_3_Conditional_37_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.albumEditandoId() ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.albumEditandoId() ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.salvandoAlbum());
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.formularioAlbum);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.dadosProjetos.projetos());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.formularioAlbum.controls.projeto_id.touched && ctx_r1.formularioAlbum.controls.projeto_id.invalid ? 21 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.formularioAlbum.controls.nome.touched && ctx_r1.formularioAlbum.controls.nome.invalid ? 26 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.salvandoAlbum());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.salvandoAlbum());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.salvandoAlbum() ? 35 : ctx_r1.albumEditandoId() ? 36 : 37);
  }
}
function Albuns_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.erroOperacao());
  }
}
function Albuns_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.mensagemOperacao());
  }
}
function Albuns_Conditional_6_Conditional_23_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enviando... ");
  }
}
function Albuns_Conditional_6_Conditional_23_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Trocar capa ");
  }
}
function Albuns_Conditional_6_Conditional_23_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Adicionar capa ");
  }
}
function Albuns_Conditional_6_Conditional_23_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Removendo... ");
  }
}
function Albuns_Conditional_6_Conditional_23_Conditional_27_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Usar capa do projeto ");
  }
}
function Albuns_Conditional_6_Conditional_23_Conditional_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Usar capa padr\xE3o ");
  }
}
function Albuns_Conditional_6_Conditional_23_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function Albuns_Conditional_6_Conditional_23_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const album_r9 = \u0275\u0275nextContext(2);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.usarCapaProjeto(album_r9));
    });
    \u0275\u0275conditionalCreate(1, Albuns_Conditional_6_Conditional_23_Conditional_27_Conditional_1_Template, 1, 0)(2, Albuns_Conditional_6_Conditional_23_Conditional_27_Conditional_2_Template, 1, 0)(3, Albuns_Conditional_6_Conditional_23_Conditional_27_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const album_r9 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.enviandoCapaId() !== null || ctx_r1.removendoCapaId() !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.removendoCapaId() === album_r9.id ? 1 : album_r9.projeto.capa_caminho ? 2 : 3);
  }
}
function Albuns_Conditional_6_Conditional_23_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "span");
    \u0275\u0275text(2, "Observa\xE7\xF5es internas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const album_r9 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(album_r9.observacoes);
  }
}
function Albuns_Conditional_6_Conditional_23_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 8);
    \u0275\u0275text(2, "\u266A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Este trabalho ainda n\xE3o tem faixas.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Adicione a primeira faixa do projeto para come\xE7ar a sequ\xEAncia.");
    \u0275\u0275elementEnd()();
  }
}
function Albuns_Conditional_6_Conditional_23_Conditional_30_For_11_For_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 Principal ");
  }
}
function Albuns_Conditional_6_Conditional_23_Conditional_30_For_11_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, Albuns_Conditional_6_Conditional_23_Conditional_30_For_11_For_13_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const versao_r13 = ctx.$implicit;
    const item_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", versao_r13.id)("selected", versao_r13.id === item_r12.versao_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", versao_r13.versao, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(versao_r13.id === item_r12.versao.faixa.versao_principal_id ? 2 : -1);
  }
}
function Albuns_Conditional_6_Conditional_23_Conditional_30_For_11_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " ... ");
  }
}
function Albuns_Conditional_6_Conditional_23_Conditional_30_For_11_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Remover ");
  }
}
function Albuns_Conditional_6_Conditional_23_Conditional_30_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "span", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 57)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "label", 58)(9, "span", 59);
    \u0275\u0275text(10, "Vers\xE3o usada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 60);
    \u0275\u0275listener("change", function Albuns_Conditional_6_Conditional_23_Conditional_30_For_11_Template_select_change_11_listener($event) {
      const item_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.trocarVersao(item_r12, $event));
    });
    \u0275\u0275repeaterCreate(12, Albuns_Conditional_6_Conditional_23_Conditional_30_For_11_For_13_Template, 3, 4, "option", 61, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 62)(15, "button", 63);
    \u0275\u0275listener("click", function Albuns_Conditional_6_Conditional_23_Conditional_30_For_11_Template_button_click_15_listener() {
      const item_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const album_r9 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moverFaixa(album_r9, item_r12.id, -1));
    });
    \u0275\u0275text(16, "\u2191");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 64);
    \u0275\u0275listener("click", function Albuns_Conditional_6_Conditional_23_Conditional_30_For_11_Template_button_click_17_listener() {
      const item_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const album_r9 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moverFaixa(album_r9, item_r12.id, 1));
    });
    \u0275\u0275text(18, "\u2193");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 65);
    \u0275\u0275listener("click", function Albuns_Conditional_6_Conditional_23_Conditional_30_For_11_Template_button_click_19_listener() {
      const item_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removerFaixa(item_r12));
    });
    \u0275\u0275conditionalCreate(20, Albuns_Conditional_6_Conditional_23_Conditional_30_For_11_Conditional_20_Template, 1, 0)(21, Albuns_Conditional_6_Conditional_23_Conditional_30_For_11_Conditional_21_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const \u0275$index_285_r14 = ctx.$index;
    const \u0275$count_285_r15 = ctx.$count;
    const album_r9 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r12.ordem);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r12.versao.faixa.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r12.versao.versao, " \xB7 ", item_r12.versao.nome_arquivo, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.alterandoVersaoId() === item_r12.id);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.dadosAlbuns.versoesDaFaixa(item_r12.versao.faixa_id));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", \u0275$index_285_r14 === 0 || ctx_r1.ordenandoAlbumId() === album_r9.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", \u0275$index_285_r14 === \u0275$count_285_r15 - 1 || ctx_r1.ordenandoAlbumId() === album_r9.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.removendoFaixaId() === item_r12.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.removendoFaixaId() === item_r12.id ? 20 : 21);
  }
}
function Albuns_Conditional_6_Conditional_23_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span");
    \u0275\u0275text(2, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Faixa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Vers\xE3o usada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "A\xE7\xF5es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "ol", 55);
    \u0275\u0275repeaterCreate(10, Albuns_Conditional_6_Conditional_23_Conditional_30_For_11_Template, 22, 9, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const album_r9 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275repeater(album_r9.faixas);
  }
}
function Albuns_Conditional_6_Conditional_23_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const versao_r16 = ctx.$implicit;
    \u0275\u0275property("value", versao_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", versao_r16.faixa.titulo, " \xB7 ", versao_r16.versao, " ");
  }
}
function Albuns_Conditional_6_Conditional_23_Conditional_43_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Adicionando... ");
  }
}
function Albuns_Conditional_6_Conditional_23_Conditional_43_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Adicionar \xE0 sequ\xEAncia ");
  }
}
function Albuns_Conditional_6_Conditional_23_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275conditionalCreate(1, Albuns_Conditional_6_Conditional_23_Conditional_43_Conditional_1_Template, 1, 0)(2, Albuns_Conditional_6_Conditional_23_Conditional_43_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.adicionandoFaixa());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.adicionandoFaixa() ? 1 : 2);
  }
}
function Albuns_Conditional_6_Conditional_23_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, " Todas as vers\xF5es dispon\xEDveis j\xE1 est\xE3o neste trabalho. ");
    \u0275\u0275elementEnd();
  }
}
function Albuns_Conditional_6_Conditional_23_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 52);
    \u0275\u0275text(1, "Enviar primeira vers\xE3o");
    \u0275\u0275elementEnd();
  }
}
function Albuns_Conditional_6_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 36)(1, "header", 39)(2, "div")(3, "p", 13);
    \u0275\u0275text(4, "CONTE\xDADO DO TRABALHO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Organize as faixas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, " Escolha a sequ\xEAncia e a vers\xE3o que representa cada faixa neste trabalho. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 40)(12, "div", 41)(13, "span", 8);
    \u0275\u0275text(14, "\u25A3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "small");
    \u0275\u0275text(19, " Sem uma capa pr\xF3pria, o Fleiva usa a capa do projeto automaticamente. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 42)(21, "label", 43)(22, "input", 44);
    \u0275\u0275listener("change", function Albuns_Conditional_6_Conditional_23_Template_input_change_22_listener($event) {
      \u0275\u0275restoreView(_r8);
      const album_r9 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selecionarCapa(album_r9, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275conditionalCreate(24, Albuns_Conditional_6_Conditional_23_Conditional_24_Template, 1, 0)(25, Albuns_Conditional_6_Conditional_23_Conditional_25_Template, 1, 0)(26, Albuns_Conditional_6_Conditional_23_Conditional_26_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(27, Albuns_Conditional_6_Conditional_23_Conditional_27_Template, 4, 2, "button", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(28, Albuns_Conditional_6_Conditional_23_Conditional_28_Template, 5, 1, "div", 46);
    \u0275\u0275conditionalCreate(29, Albuns_Conditional_6_Conditional_23_Conditional_29_Template, 7, 0, "div", 47)(30, Albuns_Conditional_6_Conditional_23_Conditional_30_Template, 12, 0);
    \u0275\u0275elementStart(31, "form", 48);
    \u0275\u0275listener("ngSubmit", function Albuns_Conditional_6_Conditional_23_Template_form_ngSubmit_31_listener() {
      \u0275\u0275restoreView(_r8);
      const album_r9 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.adicionarFaixa(album_r9));
    });
    \u0275\u0275elementStart(32, "div")(33, "label")(34, "span");
    \u0275\u0275text(35, "Adicionar vers\xE3o do projeto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "select", 49)(37, "option", 26);
    \u0275\u0275text(38, "Selecione uma vers\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(39, Albuns_Conditional_6_Conditional_23_For_40_Template, 2, 3, "option", 27, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "small");
    \u0275\u0275text(42, " A mesma faixa pode aparecer mais de uma vez com vers\xF5es diferentes. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(43, Albuns_Conditional_6_Conditional_23_Conditional_43_Template, 3, 2, "button", 50)(44, Albuns_Conditional_6_Conditional_23_Conditional_44_Template, 2, 0, "span", 51)(45, Albuns_Conditional_6_Conditional_23_Conditional_45_Template, 2, 0, "a", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const album_r9 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.rotuloQuantidadeFaixas(album_r9.faixas.length));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.origemCapa(album_r9));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("desativado", ctx_r1.enviandoCapaId() !== null || ctx_r1.removendoCapaId() !== null);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.enviandoCapaId() !== null || ctx_r1.removendoCapaId() !== null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.enviandoCapaId() === album_r9.id ? 24 : album_r9.capa_caminho ? 25 : 26);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(album_r9.capa_caminho ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r9.observacoes ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r9.faixas.length === 0 ? 29 : 30);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.formularioFaixa);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.versoesDisponiveis(album_r9));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.versoesDisponiveis(album_r9).length > 0 ? 43 : album_r9.faixas.length > 0 ? 44 : 45);
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Publicando... ");
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Publicar na minha p\xE1gina ");
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div")(2, "p", 13);
    \u0275\u0275text(3, "SUA P\xC1GINA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "Publicar este trabalho na sua p\xE1gina");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, " Este trabalho foi criado por outro usu\xE1rio do projeto. Voc\xEA pode public\xE1-lo na sua p\xE1gina p\xFAblica tamb\xE9m. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 101);
    \u0275\u0275listener("click", function Albuns_Conditional_6_Conditional_24_Conditional_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r18);
      const album_r9 = \u0275\u0275nextContext(2);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.publicarNaMinhaPagina(album_r9));
    });
    \u0275\u0275conditionalCreate(9, Albuns_Conditional_6_Conditional_24_Conditional_2_Conditional_9_Template, 1, 0)(10, Albuns_Conditional_6_Conditional_24_Conditional_2_Conditional_10_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const album_r9 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.publicandoNaMinhaPaginaId() === album_r9.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.publicandoNaMinhaPaginaId() === album_r9.id ? 9 : 10);
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Publicado ");
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Rascunho ");
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
  if (rf & 2) {
    const album_r9 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", "Capa de " + album_r9.nome);
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const album_r9 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.iniciaisProjeto(album_r9));
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_24_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Este trabalho est\xE1 na Casa ");
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_24_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Exibir este trabalho na Casa ");
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_24_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvando... ");
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_24_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Remover da Casa ");
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_24_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Exibir na Casa ");
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_24_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Remova outro trabalho da Casa para selecionar este.");
    \u0275\u0275elementEnd();
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div")(2, "p", 13);
    \u0275\u0275text(3, "CASA FL\xCAIVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275conditionalCreate(5, Albuns_Conditional_6_Conditional_24_Conditional_24_Conditional_5_Template, 1, 0)(6, Albuns_Conditional_6_Conditional_24_Conditional_24_Conditional_6_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 101);
    \u0275\u0275listener("click", function Albuns_Conditional_6_Conditional_24_Conditional_24_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r19);
      const album_r9 = \u0275\u0275nextContext(2);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.alternarExibicaoNaCasa(album_r9));
    });
    \u0275\u0275conditionalCreate(10, Albuns_Conditional_6_Conditional_24_Conditional_24_Conditional_10_Template, 1, 0)(11, Albuns_Conditional_6_Conditional_24_Conditional_24_Conditional_11_Template, 1, 0)(12, Albuns_Conditional_6_Conditional_24_Conditional_24_Conditional_12_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, Albuns_Conditional_6_Conditional_24_Conditional_24_Conditional_13_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const album_r9 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("na-casa", album_r9.publico_na_casa);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(album_r9.publico_na_casa ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.dadosAlbuns.totalTrabalhosNaCasa(), " de ", ctx_r1.dadosAlbuns.limiteTrabalhosCasa(), " trabalhos selecionados. ");
    \u0275\u0275advance();
    \u0275\u0275classProp("remover-da-casa", album_r9.publico_na_casa);
    \u0275\u0275property("disabled", ctx_r1.alterandoCasaAlbumId() !== null || ctx_r1.publicandoAlbumId() !== null || ctx_r1.despublicandoAlbumId() !== null || !album_r9.publico_na_casa && !ctx_r1.dadosAlbuns.podeAdicionarTrabalhoNaCasa());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.alterandoCasaAlbumId() === album_r9.id ? 10 : album_r9.publico_na_casa ? 11 : 12);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!album_r9.publico_na_casa && !ctx_r1.dadosAlbuns.podeAdicionarTrabalhoNaCasa() ? 13 : -1);
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "strong");
    \u0275\u0275text(2, "O trabalho ainda n\xE3o pode ser publicado.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Adicione pelo menos uma faixa na \xE1rea Conte\xFAdo.");
    \u0275\u0275elementEnd()();
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 94);
    \u0275\u0275text(1, " \xC1udio reproduzido publicamente pode ser capturado por ferramentas externas. Para materiais protegidos, use uma pr\xE9via ou vers\xE3o com tag. ");
    \u0275\u0275elementEnd();
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 95);
    \u0275\u0275text(1, " O download permitir\xE1 acesso ao arquivo selecionado em cada faixa. ");
    \u0275\u0275elementEnd();
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_79_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Despublicando... ");
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_79_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Despublicar ");
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 102);
    \u0275\u0275listener("click", function Albuns_Conditional_6_Conditional_24_Conditional_79_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const album_r9 = \u0275\u0275nextContext(2);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.despublicarAlbum(album_r9));
    });
    \u0275\u0275conditionalCreate(1, Albuns_Conditional_6_Conditional_24_Conditional_79_Conditional_1_Template, 1, 0)(2, Albuns_Conditional_6_Conditional_24_Conditional_79_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const album_r9 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.publicandoAlbumId() !== null || ctx_r1.despublicandoAlbumId() !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.despublicandoAlbumId() === album_r9.id ? 1 : 2);
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Publicando... ");
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Atualizar publica\xE7\xE3o ");
  }
}
function Albuns_Conditional_6_Conditional_24_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Publicar no site ");
  }
}
function Albuns_Conditional_6_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 66)(1, "header", 67);
    \u0275\u0275conditionalCreate(2, Albuns_Conditional_6_Conditional_24_Conditional_2_Template, 11, 2, "div", 68);
    \u0275\u0275elementStart(3, "div")(4, "p", 13);
    \u0275\u0275text(5, "P\xC1GINA P\xDABLICA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7, "Apresente este trabalho");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Defina o que aparece e quais a\xE7\xF5es ser\xE3o permitidas.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 69);
    \u0275\u0275conditionalCreate(11, Albuns_Conditional_6_Conditional_24_Conditional_11_Template, 1, 0)(12, Albuns_Conditional_6_Conditional_24_Conditional_12_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 70)(14, "div", 71);
    \u0275\u0275conditionalCreate(15, Albuns_Conditional_6_Conditional_24_Conditional_15_Template, 1, 2, "img", 11)(16, Albuns_Conditional_6_Conditional_24_Conditional_16_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div")(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "small");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(24, Albuns_Conditional_6_Conditional_24_Conditional_24_Template, 14, 10, "div", 72);
    \u0275\u0275conditionalCreate(25, Albuns_Conditional_6_Conditional_24_Conditional_25_Template, 5, 0, "div", 73);
    \u0275\u0275elementStart(26, "form", 74);
    \u0275\u0275listener("ngSubmit", function Albuns_Conditional_6_Conditional_24_Template_form_ngSubmit_26_listener() {
      \u0275\u0275restoreView(_r17);
      const album_r9 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.publicarAlbum(album_r9));
    });
    \u0275\u0275elementStart(27, "div", 75)(28, "label")(29, "span");
    \u0275\u0275text(30, "Tipo de trabalho");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 76);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(32, "small");
    \u0275\u0275text(33, "Use o nome que faz sentido para este material.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "datalist", 77);
    \u0275\u0275element(35, "option", 78)(36, "option", 79)(37, "option", 80)(38, "option", 81)(39, "option", 82)(40, "option", 83)(41, "option", 84)(42, "option", 85)(43, "option", 86)(44, "option", 87)(45, "option", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "label")(47, "span");
    \u0275\u0275text(48, "Descri\xE7\xE3o p\xFAblica");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "textarea", 89);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(50, "small");
    \u0275\u0275text(51, "As observa\xE7\xF5es internas nunca aparecem no site.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 90)(53, "strong");
    \u0275\u0275text(54, "Permiss\xF5es dos arquivos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span");
    \u0275\u0275text(56, " A capa, os nomes e a ordem podem ser publicados sem liberar \xE1udio ou download. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 91)(58, "label");
    \u0275\u0275element(59, "input", 92);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(60, "span")(61, "strong");
    \u0275\u0275text(62, "Permitir reprodu\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "small");
    \u0275\u0275text(64, "Visitantes poder\xE3o ouvir os arquivos escolhidos.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "label");
    \u0275\u0275element(66, "input", 93);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(67, "span")(68, "strong");
    \u0275\u0275text(69, "Permitir download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "small");
    \u0275\u0275text(71, "Visitantes poder\xE3o baixar os arquivos selecionados.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(72, Albuns_Conditional_6_Conditional_24_Conditional_72_Template, 2, 0, "p", 94);
    \u0275\u0275conditionalCreate(73, Albuns_Conditional_6_Conditional_24_Conditional_73_Template, 2, 0, "p", 95);
    \u0275\u0275elementStart(74, "label", 96);
    \u0275\u0275element(75, "input", 97);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(76, "span");
    \u0275\u0275text(77, "Revisei o conte\xFAdo e as permiss\xF5es deste trabalho.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "footer", 98);
    \u0275\u0275conditionalCreate(79, Albuns_Conditional_6_Conditional_24_Conditional_79_Template, 3, 2, "button", 99);
    \u0275\u0275elementStart(80, "button", 100);
    \u0275\u0275conditionalCreate(81, Albuns_Conditional_6_Conditional_24_Conditional_81_Template, 1, 0)(82, Albuns_Conditional_6_Conditional_24_Conditional_82_Template, 1, 0)(83, Albuns_Conditional_6_Conditional_24_Conditional_83_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const album_r9 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("publicado", album_r9.publico_na_landing);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.albumPertenceAoUsuario(album_r9) ? 2 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("publicada", album_r9.publico_na_landing);
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r9.publico_na_landing ? 11 : 12);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_7_0 = ctx_r1.capaAlbum(album_r9)) ? 15 : 16, tmp_7_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(album_r9.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(album_r9.projeto.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.rotuloQuantidadeFaixas(album_r9.faixas.length));
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r9.publico_na_landing ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r9.faixas.length === 0 ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.formularioPublicacao);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", album_r9.faixas.length === 0 || ctx_r1.publicandoAlbumId() !== null || ctx_r1.despublicandoAlbumId() !== null);
    \u0275\u0275control();
    \u0275\u0275advance(18);
    \u0275\u0275property("disabled", album_r9.faixas.length === 0 || ctx_r1.publicandoAlbumId() !== null || ctx_r1.despublicandoAlbumId() !== null);
    \u0275\u0275control();
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", album_r9.faixas.length === 0 || ctx_r1.publicandoAlbumId() !== null || ctx_r1.despublicandoAlbumId() !== null);
    \u0275\u0275control();
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", album_r9.faixas.length === 0 || ctx_r1.publicandoAlbumId() !== null || ctx_r1.despublicandoAlbumId() !== null);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.formularioPublicacao.controls.reproducao_publica.value ? 72 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.formularioPublicacao.controls.download_publico.value ? 73 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", album_r9.faixas.length === 0 || ctx_r1.publicandoAlbumId() !== null || ctx_r1.despublicandoAlbumId() !== null);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(album_r9.publico_na_landing ? 79 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", album_r9.faixas.length === 0 || ctx_r1.formularioPublicacao.invalid || ctx_r1.publicandoAlbumId() !== null || ctx_r1.despublicandoAlbumId() !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.publicandoAlbumId() === album_r9.id ? 81 : album_r9.publico_na_landing ? 82 : 83);
  }
}
function Albuns_Conditional_6_Conditional_25_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Link ativo ");
  }
}
function Albuns_Conditional_6_Conditional_25_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " N\xE3o gerado ");
  }
}
function Albuns_Conditional_6_Conditional_25_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Preparando... ");
  }
}
function Albuns_Conditional_6_Conditional_25_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enviar pelo WhatsApp ");
  }
}
function Albuns_Conditional_6_Conditional_25_Conditional_32_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Renovando... ");
  }
}
function Albuns_Conditional_6_Conditional_25_Conditional_32_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Renovar link ");
  }
}
function Albuns_Conditional_6_Conditional_25_Conditional_32_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Desativando... ");
  }
}
function Albuns_Conditional_6_Conditional_25_Conditional_32_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Desativar link ");
  }
}
function Albuns_Conditional_6_Conditional_25_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 116);
    \u0275\u0275listener("click", function Albuns_Conditional_6_Conditional_25_Conditional_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const album_r9 = \u0275\u0275nextContext(2);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.renovarLinkNaoListado(album_r9));
    });
    \u0275\u0275conditionalCreate(1, Albuns_Conditional_6_Conditional_25_Conditional_32_Conditional_1_Template, 1, 0)(2, Albuns_Conditional_6_Conditional_25_Conditional_32_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 110);
    \u0275\u0275listener("click", function Albuns_Conditional_6_Conditional_25_Conditional_32_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r22);
      const album_r9 = \u0275\u0275nextContext(2);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.desativarLinkNaoListado(album_r9));
    });
    \u0275\u0275conditionalCreate(4, Albuns_Conditional_6_Conditional_25_Conditional_32_Conditional_4_Template, 1, 0)(5, Albuns_Conditional_6_Conditional_25_Conditional_32_Conditional_5_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const album_r9 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.copiandoLinkNaoListadoId() !== null || ctx_r1.renovandoLinkNaoListadoId() !== null || ctx_r1.desativandoLinkNaoListadoId() !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.renovandoLinkNaoListadoId() === album_r9.id ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.copiandoLinkNaoListadoId() !== null || ctx_r1.renovandoLinkNaoListadoId() !== null || ctx_r1.desativandoLinkNaoListadoId() !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.desativandoLinkNaoListadoId() === album_r9.id ? 4 : 5);
  }
}
function Albuns_Conditional_6_Conditional_25_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 111);
    \u0275\u0275text(1, " Adicione pelo menos uma faixa antes de compartilhar. ");
    \u0275\u0275elementEnd();
  }
}
function Albuns_Conditional_6_Conditional_25_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Publicado ");
  }
}
function Albuns_Conditional_6_Conditional_25_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Indispon\xEDvel ");
  }
}
function Albuns_Conditional_6_Conditional_25_Conditional_48_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Copiando... ");
  }
}
function Albuns_Conditional_6_Conditional_25_Conditional_48_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Copiar link ");
  }
}
function Albuns_Conditional_6_Conditional_25_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 114)(1, "button", 117);
    \u0275\u0275listener("click", function Albuns_Conditional_6_Conditional_25_Conditional_48_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r23);
      const album_r9 = \u0275\u0275nextContext(2);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.abrirPaginaPublica(album_r9));
    });
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3, "\u2197");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Abrir p\xE1gina ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 118);
    \u0275\u0275listener("click", function Albuns_Conditional_6_Conditional_25_Conditional_48_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r23);
      const album_r9 = \u0275\u0275nextContext(2);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copiarLink(album_r9));
    });
    \u0275\u0275elementStart(6, "span", 8);
    \u0275\u0275text(7, "\u29C9");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, Albuns_Conditional_6_Conditional_25_Conditional_48_Conditional_8_Template, 1, 0)(9, Albuns_Conditional_6_Conditional_25_Conditional_48_Conditional_9_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 119);
    \u0275\u0275listener("click", function Albuns_Conditional_6_Conditional_25_Conditional_48_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r23);
      const album_r9 = \u0275\u0275nextContext(2);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enviarWhatsAppPublico(album_r9));
    });
    \u0275\u0275text(11, "WhatsApp");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const album_r9 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.copiandoLinkId() !== null);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.copiandoLinkId() === album_r9.id ? 8 : 9);
  }
}
function Albuns_Conditional_6_Conditional_25_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115)(1, "p");
    \u0275\u0275text(2, "Publique o trabalho antes de compartilhar o endere\xE7o p\xFAblico.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 18);
    \u0275\u0275listener("click", function Albuns_Conditional_6_Conditional_25_Conditional_49_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selecionarAba("publicacao"));
    });
    \u0275\u0275text(4, " Configurar p\xE1gina p\xFAblica ");
    \u0275\u0275elementEnd()();
  }
}
function Albuns_Conditional_6_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 38)(1, "header", 39)(2, "div")(3, "p", 13);
    \u0275\u0275text(4, "DISTRIBUI\xC7\xC3O");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Compartilhe o trabalho");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Escolha entre um envio reservado e a p\xE1gina p\xFAblica.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 103)(10, "section", 104)(11, "div", 105)(12, "span", 106);
    \u0275\u0275text(13, "\u2197");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "p", 13);
    \u0275\u0275text(16, "LINK PRIVADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h3");
    \u0275\u0275text(18, "Enviar para cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20, "Somente quem receber o endere\xE7o poder\xE1 acessar o trabalho.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "span", 107);
    \u0275\u0275conditionalCreate(22, Albuns_Conditional_6_Conditional_25_Conditional_22_Template, 1, 0)(23, Albuns_Conditional_6_Conditional_25_Conditional_23_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 108)(25, "button", 109);
    \u0275\u0275listener("click", function Albuns_Conditional_6_Conditional_25_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r21);
      const album_r9 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enviarParaCliente(album_r9));
    });
    \u0275\u0275conditionalCreate(26, Albuns_Conditional_6_Conditional_25_Conditional_26_Template, 1, 0)(27, Albuns_Conditional_6_Conditional_25_Conditional_27_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 110);
    \u0275\u0275listener("click", function Albuns_Conditional_6_Conditional_25_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r21);
      const album_r9 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copiarLinkNaoListado(album_r9));
    });
    \u0275\u0275elementStart(29, "span", 8);
    \u0275\u0275text(30, "\u29C9");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Copiar link privado ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(32, Albuns_Conditional_6_Conditional_25_Conditional_32_Template, 6, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, Albuns_Conditional_6_Conditional_25_Conditional_33_Template, 2, 0, "small", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "section", 112)(35, "div", 105)(36, "span", 113);
    \u0275\u0275text(37, "\u25CE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div")(39, "p", 13);
    \u0275\u0275text(40, "P\xC1GINA P\xDABLICA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "h3");
    \u0275\u0275text(42, "Compartilhar publica\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p");
    \u0275\u0275text(44, "Use o endere\xE7o p\xFAblico do trabalho no Fleiva e na Casa.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "span", 69);
    \u0275\u0275conditionalCreate(46, Albuns_Conditional_6_Conditional_25_Conditional_46_Template, 1, 0)(47, Albuns_Conditional_6_Conditional_25_Conditional_47_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(48, Albuns_Conditional_6_Conditional_25_Conditional_48_Template, 12, 2, "div", 114)(49, Albuns_Conditional_6_Conditional_25_Conditional_49_Template, 5, 0, "div", 115);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const album_r9 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275classProp("link-ativo", album_r9.token_compartilhamento);
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r9.token_compartilhamento ? 22 : 23);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", album_r9.faixas.length === 0 || ctx_r1.copiandoLinkNaoListadoId() !== null || ctx_r1.renovandoLinkNaoListadoId() !== null || ctx_r1.desativandoLinkNaoListadoId() !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.copiandoLinkNaoListadoId() === album_r9.id ? 26 : 27);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", album_r9.faixas.length === 0 || ctx_r1.copiandoLinkNaoListadoId() !== null || ctx_r1.renovandoLinkNaoListadoId() !== null || ctx_r1.desativandoLinkNaoListadoId() !== null);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(album_r9.token_compartilhamento ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r9.faixas.length === 0 ? 33 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275classProp("publicada", album_r9.publico_na_landing);
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r9.publico_na_landing ? 46 : 47);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(album_r9.publico_na_landing ? 48 : 49);
  }
}
function Albuns_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 6)(1, "nav", 34)(2, "button", 35);
    \u0275\u0275listener("click", function Albuns_Conditional_6_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selecionarAba("conteudo"));
    });
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Conte\xFAdo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small");
    \u0275\u0275text(8, "Faixas, vers\xF5es e capa");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 35);
    \u0275\u0275listener("click", function Albuns_Conditional_6_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selecionarAba("publicacao"));
    });
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13, "P\xE1gina p\xFAblica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "small");
    \u0275\u0275text(15, "Apresenta\xE7\xE3o e permiss\xF5es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 35);
    \u0275\u0275listener("click", function Albuns_Conditional_6_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selecionarAba("compartilhar"));
    });
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20, "Compartilhar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "small");
    \u0275\u0275text(22, "Links privados e p\xFAblicos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(23, Albuns_Conditional_6_Conditional_23_Template, 46, 11, "section", 36);
    \u0275\u0275conditionalCreate(24, Albuns_Conditional_6_Conditional_24_Template, 84, 23, "section", 37);
    \u0275\u0275conditionalCreate(25, Albuns_Conditional_6_Conditional_25_Template, 50, 12, "section", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ativa", ctx_r1.abaEditor() === "conteudo");
    \u0275\u0275attribute("aria-current", ctx_r1.abaEditor() === "conteudo" ? "page" : null);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("ativa", ctx_r1.abaEditor() === "publicacao");
    \u0275\u0275attribute("aria-current", ctx_r1.abaEditor() === "publicacao" ? "page" : null);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("ativa", ctx_r1.abaEditor() === "compartilhar");
    \u0275\u0275attribute("aria-current", ctx_r1.abaEditor() === "compartilhar" ? "page" : null);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.abaEditor() === "conteudo" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.abaEditor() === "publicacao" ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.abaEditor() === "compartilhar" ? 25 : -1);
  }
}
function Albuns_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 120)(1, "div")(2, "strong");
    \u0275\u0275text(3, "Comece por um projeto art\xEDstico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Todo \xE1lbum pertence a um artista, banda ou projeto.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a", 125);
    \u0275\u0275text(7, "Ir para projetos");
    \u0275\u0275elementEnd()();
  }
}
function Albuns_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 121);
    \u0275\u0275element(1, "span", 126);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Organizando o cat\xE1logo...");
    \u0275\u0275elementEnd()();
  }
}
function Albuns_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 122)(1, "h2");
    \u0275\u0275text(2, "N\xE3o foi poss\xEDvel abrir os \xE1lbuns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 18);
    \u0275\u0275listener("click", function Albuns_Conditional_7_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.carregarDados());
    });
    \u0275\u0275text(6, " Tentar novamente ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.dadosAlbuns.erro());
  }
}
function Albuns_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 123)(1, "div", 127)(2, "span");
    \u0275\u0275text(3, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "i");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "FLEIVA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "p", 13);
    \u0275\u0275text(9, "PRIMEIRA SEQU\xCANCIA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h2");
    \u0275\u0275text(11, "Transforme faixas soltas em um trabalho.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13, " Use os arquivos que j\xE1 est\xE3o no Fleiva para testar a ordem de um \xE1lbum, EP, demo ou mixtape. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 20);
    \u0275\u0275listener("click", function Albuns_Conditional_7_Conditional_3_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.abrirNovoAlbum(ctx_r1.projetoFiltradoId() ?? ""));
    });
    \u0275\u0275text(15, "Criar primeiro \xE1lbum");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("disabled", ctx_r1.dadosProjetos.projetos().length === 0);
  }
}
function Albuns_Conditional_7_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" Trabalhos de ", ctx.nome, " ");
  }
}
function Albuns_Conditional_7_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Trabalhos em constru\xE7\xE3o ");
  }
}
function Albuns_Conditional_7_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 129)(1, "a", 132);
    \u0275\u0275text(2, "Voltar ao projeto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 133);
    \u0275\u0275text(4, "Ver todos os trabalhos");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, ctx.id));
  }
}
function Albuns_Conditional_7_Conditional_4_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 130)(1, "strong");
    \u0275\u0275text(2, "Nenhum trabalho montado para este projeto.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Crie um \xE1lbum, EP, mixtape ou colet\xE2nea para este projeto.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 134);
    \u0275\u0275listener("click", function Albuns_Conditional_7_Conditional_4_Conditional_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.abrirNovoAlbum(ctx_r1.projetoFiltradoId() ?? ""));
    });
    \u0275\u0275text(6, "Montar primeiro trabalho");
    \u0275\u0275elementEnd()();
  }
}
function Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
  if (rf & 2) {
    const album_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", "Capa de " + album_r29.nome);
  }
}
function Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "small");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const album_r29 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.iniciaisProjeto(album_r29));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(album_r29.projeto.nome);
  }
}
function Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " P\xFAblico ");
  }
}
function Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Rascunho ");
  }
}
function Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "em");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const album_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(album_r29.tipo_publico);
  }
}
function Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "em", 141);
    \u0275\u0275text(1, "Na Casa");
    \u0275\u0275elementEnd();
  }
}
function Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Excluindo... ");
  }
}
function Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Excluir ");
  }
}
function Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 135)(1, "div", 136);
    \u0275\u0275conditionalCreate(2, Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Conditional_2_Template, 1, 2, "img", 11)(3, Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Conditional_3_Template, 4, 2);
    \u0275\u0275elementStart(4, "span", 137);
    \u0275\u0275conditionalCreate(5, Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Conditional_5_Template, 1, 0)(6, Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Conditional_6_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 138)(8, "div", 139)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 140)(14, "em");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Conditional_16_Template, 2, 1, "em");
    \u0275\u0275conditionalCreate(17, Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Conditional_17_Template, 2, 0, "em", 141);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 142);
    \u0275\u0275listener("click", function Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Template_button_click_18_listener() {
      const album_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.abrirAlbum(album_r29.id));
    });
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Abrir edi\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 8);
    \u0275\u0275text(22, "\u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 143)(24, "button", 144);
    \u0275\u0275listener("click", function Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Template_button_click_24_listener() {
      const album_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editarAlbum(album_r29));
    });
    \u0275\u0275elementStart(25, "span", 8);
    \u0275\u0275text(26, "\u270E");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Editar informa\xE7\xF5es ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 145);
    \u0275\u0275listener("click", function Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Template_button_click_28_listener() {
      const album_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.excluirAlbum(album_r29));
    });
    \u0275\u0275conditionalCreate(29, Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Conditional_29_Template, 1, 0)(30, Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Conditional_30_Template, 3, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const album_r29 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_13_0 = ctx_r1.capaAlbum(album_r29)) ? 2 : 3, tmp_13_0);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("estado-publicado", album_r29.publico_na_landing);
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r29.publico_na_landing ? 5 : 6);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(album_r29.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(album_r29.projeto.nome);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.rotuloQuantidadeFaixas(album_r29.faixas.length));
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r29.tipo_publico ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(album_r29.publico_na_casa ? 17 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275property("disabled", ctx_r1.excluindoAlbumId() === album_r29.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.excluindoAlbumId() === album_r29.id ? 29 : 30);
  }
}
function Albuns_Conditional_7_Conditional_4_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275repeaterCreate(1, Albuns_Conditional_7_Conditional_4_Conditional_12_For_2_Template, 31, 11, "article", 135, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.albunsVisiveis());
  }
}
function Albuns_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 124)(1, "header", 128)(2, "div")(3, "p", 13);
    \u0275\u0275text(4, "DISCOGRAFIA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275conditionalCreate(6, Albuns_Conditional_7_Conditional_4_Conditional_6_Template, 1, 1)(7, Albuns_Conditional_7_Conditional_4_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, Albuns_Conditional_7_Conditional_4_Conditional_8_Template, 5, 3, "span", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, Albuns_Conditional_7_Conditional_4_Conditional_11_Template, 7, 0, "section", 130)(12, Albuns_Conditional_7_Conditional_4_Conditional_12_Template, 3, 0, "div", 131);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.projetoFiltrado()) ? 6 : 7, tmp_2_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.projetoFiltrado()) ? 8 : -1, tmp_3_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.albunsVisiveis().length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.albunsVisiveis().length === 0 ? 11 : 12);
  }
}
function Albuns_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Albuns_Conditional_7_Conditional_0_Template, 8, 0, "section", 120);
    \u0275\u0275conditionalCreate(1, Albuns_Conditional_7_Conditional_1_Template, 4, 0, "section", 121)(2, Albuns_Conditional_7_Conditional_2_Template, 7, 1, "section", 122)(3, Albuns_Conditional_7_Conditional_3_Template, 16, 1, "section", 123)(4, Albuns_Conditional_7_Conditional_4_Template, 13, 4, "section", 124);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r1.dadosProjetos.carregando() && ctx_r1.dadosProjetos.projetos().length === 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dadosAlbuns.carregando() ? 1 : ctx_r1.dadosAlbuns.erro() ? 2 : ctx_r1.dadosAlbuns.albuns().length === 0 ? 3 : 4);
  }
}
var Albuns = class _Albuns {
  dadosAlbuns = inject(DadosAlbuns);
  dadosEstudio = inject(DadosEstudio);
  dadosProjetos = inject(DadosProjetosArtisticos);
  construtorFormulario = inject(FormBuilder);
  rota = inject(ActivatedRoute);
  destruirRef = inject(DestroyRef);
  formularioAberto = signal(
    false,
    ...ngDevMode ? [{ debugName: "formularioAberto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  albumEditandoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "albumEditandoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  albumAbertoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "albumAbertoId" }] : (
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
  excluindoAlbumId = signal(
    null,
    ...ngDevMode ? [{ debugName: "excluindoAlbumId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  adicionandoFaixa = signal(
    false,
    ...ngDevMode ? [{ debugName: "adicionandoFaixa" }] : (
      /* istanbul ignore next */
      []
    )
  );
  alterandoVersaoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "alterandoVersaoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  removendoFaixaId = signal(
    null,
    ...ngDevMode ? [{ debugName: "removendoFaixaId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ordenandoAlbumId = signal(
    null,
    ...ngDevMode ? [{ debugName: "ordenandoAlbumId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  copiandoLinkId = signal(
    null,
    ...ngDevMode ? [{ debugName: "copiandoLinkId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  copiandoLinkNaoListadoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "copiandoLinkNaoListadoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  renovandoLinkNaoListadoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "renovandoLinkNaoListadoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  desativandoLinkNaoListadoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "desativandoLinkNaoListadoId" }] : (
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
  mensagemOperacao = signal(
    null,
    ...ngDevMode ? [{ debugName: "mensagemOperacao" }] : (
      /* istanbul ignore next */
      []
    )
  );
  publicandoAlbumId = signal(
    null,
    ...ngDevMode ? [{ debugName: "publicandoAlbumId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  despublicandoAlbumId = signal(
    null,
    ...ngDevMode ? [{ debugName: "despublicandoAlbumId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  alterandoCasaAlbumId = signal(
    null,
    ...ngDevMode ? [{ debugName: "alterandoCasaAlbumId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  projetoFiltradoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "projetoFiltradoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  abaEditor = signal(
    "conteudo",
    ...ngDevMode ? [{ debugName: "abaEditor" }] : (
      /* istanbul ignore next */
      []
    )
  );
  albumAberto = computed(
    () => {
      const albumId = this.albumAbertoId();
      return this.dadosAlbuns.albuns().find((album) => album.id === albumId) ?? null;
    },
    ...ngDevMode ? [{ debugName: "albumAberto" }] : (
      /* istanbul ignore next */
      []
    )
  );
  projetoFiltrado = computed(
    () => {
      const projetoId = this.projetoFiltradoId();
      return this.dadosProjetos.projetos().find((projeto) => projeto.id === projetoId) ?? null;
    },
    ...ngDevMode ? [{ debugName: "projetoFiltrado" }] : (
      /* istanbul ignore next */
      []
    )
  );
  albunsVisiveis = computed(
    () => {
      const projetoId = this.projetoFiltradoId();
      const albuns = this.dadosAlbuns.albuns().filter((album) => album.tipo_publico !== TIPO_PUBLICO_ENVIO || album.publico_na_landing);
      return projetoId ? albuns.filter((album) => album.projeto_id === projetoId) : albuns;
    },
    ...ngDevMode ? [{ debugName: "albunsVisiveis" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formularioAlbum = this.construtorFormulario.group({
    projeto_id: this.construtorFormulario.nonNullable.control("", [
      Validators.required
    ]),
    nome: this.construtorFormulario.nonNullable.control("", [
      Validators.required
    ]),
    observacoes: this.construtorFormulario.control(null)
  });
  formularioFaixa = this.construtorFormulario.group({
    versao_id: this.construtorFormulario.nonNullable.control("", [
      Validators.required
    ])
  });
  formularioPublicacao = this.construtorFormulario.nonNullable.group({
    tipo_publico: "",
    descricao_publica: "",
    reproducao_publica: false,
    download_publico: false,
    confirmacao: [false, Validators.requiredTrue]
  });
  constructor() {
    effect(() => {
      const album = this.albumAberto();
      this.formularioPublicacao.reset({
        tipo_publico: album?.tipo_publico ?? "",
        descricao_publica: album?.descricao_publica ?? "",
        reproducao_publica: album?.reproducao_publica ?? false,
        download_publico: album?.download_publico ?? false,
        confirmacao: false
      }, {
        emitEvent: false
      });
    });
  }
  ngOnInit() {
    void this.inicializar();
  }
  async inicializar() {
    await this.carregarDados();
    this.rota.queryParamMap.pipe(takeUntilDestroyed(this.destruirRef)).subscribe((parametros) => {
      this.aplicarContextoDaRota(parametros);
    });
  }
  aplicarContextoDaRota(parametros) {
    const projetoId = parametros.get("projeto")?.trim();
    const albumId = parametros.get("album")?.trim();
    const projeto = this.dadosProjetos.projetos().find((item) => item.id === projetoId);
    this.projetoFiltradoId.set(projeto?.id ?? null);
    if (projeto && parametros.get("novo") === "1") {
      this.abrirNovoAlbum(projeto.id);
      return;
    }
    const album = this.dadosAlbuns.albuns().find((item) => item.id === albumId && (!projeto || item.projeto_id === projeto.id));
    if (album) {
      this.abrirAlbum(album.id);
    }
  }
  async carregarDados() {
    this.erroOperacao.set(null);
    const carregarEstudio = this.dadosEstudio.estudio() ? Promise.resolve() : this.dadosEstudio.carregar();
    await Promise.all([
      this.dadosAlbuns.listar(),
      carregarEstudio,
      this.dadosProjetos.listar()
    ]);
  }
  abrirNovoAlbum(projetoId = "") {
    this.albumEditandoId.set(null);
    this.formularioAberto.set(true);
    this.limparRetorno();
    this.formularioAlbum.reset({
      projeto_id: projetoId,
      nome: "",
      observacoes: null
    });
    this.rolarPara("formulario-album");
  }
  editarAlbum(album) {
    this.albumEditandoId.set(album.id);
    this.formularioAberto.set(true);
    this.limparRetorno();
    this.formularioAlbum.setValue({
      projeto_id: album.projeto_id,
      nome: album.nome,
      observacoes: album.observacoes
    });
    this.rolarPara("formulario-album");
  }
  cancelarFormulario() {
    this.formularioAberto.set(false);
    this.albumEditandoId.set(null);
    this.formularioAlbum.reset({
      projeto_id: "",
      nome: "",
      observacoes: null
    });
  }
  async salvarAlbum() {
    if (this.formularioAlbum.invalid) {
      this.formularioAlbum.markAllAsTouched();
      return;
    }
    this.salvandoAlbum.set(true);
    this.limparRetorno();
    try {
      const valor = this.formularioAlbum.getRawValue();
      const dados = {
        projeto_id: valor.projeto_id,
        nome: valor.nome,
        observacoes: this.normalizarTextoOpcional(valor.observacoes)
      };
      const albumEditandoId = this.albumEditandoId();
      if (albumEditandoId) {
        await this.dadosAlbuns.atualizar(albumEditandoId, dados);
        this.albumAbertoId.set(albumEditandoId);
        this.mensagemOperacao.set("\xC1lbum atualizado.");
      } else {
        const album = await this.dadosAlbuns.cadastrar(dados);
        this.albumAbertoId.set(album.id);
        this.mensagemOperacao.set("\xC1lbum criado. Agora organize as faixas.");
      }
      this.cancelarFormulario();
      window.setTimeout(() => {
        this.rolarPara("editor-sequencia");
      });
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.salvandoAlbum.set(false);
    }
  }
  abrirAlbum(albumId) {
    this.albumAbertoId.set(albumId);
    this.abaEditor.set("conteudo");
    this.formularioFaixa.reset({
      versao_id: ""
    });
    this.limparRetorno();
    window.setTimeout(() => {
      this.rolarPara("editor-sequencia");
    });
  }
  fecharAlbum() {
    this.albumAbertoId.set(null);
    this.abaEditor.set("conteudo");
    this.formularioFaixa.reset({
      versao_id: ""
    });
  }
  linkPublico(album) {
    const slug = this.dadosEstudio.estudio()?.slug;
    if (!slug) {
      throw new Error("O perfil do est\xFAdio ainda n\xE3o foi carregado.");
    }
    const slugSeguro = encodeURIComponent(slug);
    const albumIdSeguro = encodeURIComponent(album.id);
    if (this.usarDominiosFleiva()) {
      return `https://play.fleiva.com.br/${slugSeguro}/trabalho/${albumIdSeguro}`;
    }
    const origem = window.location.origin.replace(/\/$/, "");
    return `${origem}/estudio/${slugSeguro}/trabalho/${albumIdSeguro}`;
  }
  linkNaoListado(album, tokenRecebido) {
    const token = tokenRecebido ?? album.token_compartilhamento;
    if (!token) {
      throw new Error("Gere um link n\xE3o listado para este \xE1lbum.");
    }
    const tokenSeguro = encodeURIComponent(token);
    if (this.usarDominiosFleiva()) {
      return `https://play.fleiva.com.br/a/${tokenSeguro}`;
    }
    const origem = window.location.origin.replace(/\/$/, "");
    return `${origem}/album/${tokenSeguro}`;
  }
  abrirPaginaPublica(album) {
    if (!album.publico_na_landing) {
      this.erroOperacao.set("Publique o \xE1lbum antes de abrir a p\xE1gina p\xFAblica.");
      return;
    }
    this.limparRetorno();
    try {
      window.open(this.linkPublico(album), "_blank", "noopener,noreferrer");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    }
  }
  publicandoNaMinhaPaginaId = signal(
    null,
    ...ngDevMode ? [{ debugName: "publicandoNaMinhaPaginaId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  albumPertenceAoUsuario(album) {
    const estudioId = this.dadosEstudio.estudio()?.id;
    return !!estudioId && album.estudio_id === estudioId;
  }
  async publicarNaMinhaPagina(album) {
    if (this.publicandoNaMinhaPaginaId()) {
      return;
    }
    if (album.faixas.length === 0) {
      this.erroOperacao.set("Adicione pelo menos uma faixa antes de publicar.");
      return;
    }
    this.publicandoNaMinhaPaginaId.set(album.id);
    this.limparRetorno();
    try {
      const valor = this.formularioPublicacao.getRawValue();
      const configuracao = {
        tipo_publico: this.normalizarTextoOpcional(valor.tipo_publico),
        descricao_publica: this.normalizarTextoOpcional(valor.descricao_publica),
        reproducao_publica: valor.reproducao_publica,
        download_publico: valor.download_publico
      };
      await this.dadosAlbuns.publicarNaMinhaPagina(album.id, configuracao);
      this.mensagemOperacao.set("Trabalho publicado na sua p\xE1gina.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.publicandoNaMinhaPaginaId.set(null);
    }
  }
  async copiarLink(album) {
    if (!album.publico_na_landing || this.copiandoLinkId()) {
      if (!album.publico_na_landing) {
        this.erroOperacao.set("Publique o \xE1lbum antes de copiar o link.");
      }
      return;
    }
    this.copiandoLinkId.set(album.id);
    this.limparRetorno();
    try {
      await this.copiarTexto(this.linkPublico(album));
      this.mensagemOperacao.set("Link do \xE1lbum copiado.");
    } catch {
      this.erroOperacao.set("N\xE3o foi poss\xEDvel copiar o link automaticamente.");
    } finally {
      this.copiandoLinkId.set(null);
    }
  }
  async copiarLinkNaoListado(album) {
    if (album.faixas.length === 0 || this.copiandoLinkNaoListadoId() || this.renovandoLinkNaoListadoId() || this.desativandoLinkNaoListadoId()) {
      return;
    }
    this.copiandoLinkNaoListadoId.set(album.id);
    this.limparRetorno();
    try {
      const tokenExistente = album.token_compartilhamento;
      const token = tokenExistente ?? await this.dadosAlbuns.renovarTokenCompartilhamento(album.id);
      await this.copiarTexto(this.linkNaoListado(album, token));
      this.mensagemOperacao.set(tokenExistente ? "Link para o cliente copiado." : "Link para o cliente gerado e copiado.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.copiandoLinkNaoListadoId.set(null);
    }
  }
  async renovarLinkNaoListado(album) {
    if (album.faixas.length === 0 || this.copiandoLinkNaoListadoId() || this.renovandoLinkNaoListadoId() || this.desativandoLinkNaoListadoId()) {
      return;
    }
    if (album.token_compartilhamento) {
      const confirmou = window.confirm("Gerar um novo link n\xE3o listado? O link anterior deixar\xE1 de funcionar.");
      if (!confirmou) {
        return;
      }
    }
    this.renovandoLinkNaoListadoId.set(album.id);
    this.limparRetorno();
    try {
      await this.dadosAlbuns.renovarTokenCompartilhamento(album.id);
      this.mensagemOperacao.set(album.token_compartilhamento ? "Novo link gerado. O link anterior foi revogado." : "Link n\xE3o listado gerado.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.renovandoLinkNaoListadoId.set(null);
    }
  }
  async desativarLinkNaoListado(album) {
    if (!album.token_compartilhamento || this.copiandoLinkNaoListadoId() || this.renovandoLinkNaoListadoId() || this.desativandoLinkNaoListadoId()) {
      return;
    }
    const confirmou = window.confirm("Desativar o link privado? O endere\xE7o enviado anteriormente deixar\xE1 de funcionar.");
    if (!confirmou) {
      return;
    }
    this.desativandoLinkNaoListadoId.set(album.id);
    this.limparRetorno();
    try {
      await this.dadosAlbuns.desativarTokenCompartilhamento(album.id);
      this.mensagemOperacao.set("Link privado desativado.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.desativandoLinkNaoListadoId.set(null);
    }
  }
  enviarWhatsAppPublico(album) {
    if (!album.publico_na_landing) {
      this.erroOperacao.set("Publique o \xE1lbum antes de compartilhar.");
      return;
    }
    this.limparRetorno();
    const mensagem = [
      `Ol\xE1! Separei o \xE1lbum "${album.nome}" de ${album.projeto.nome} para voc\xEA ouvir:`,
      "",
      this.linkPublico(album)
    ].join("\n");
    const url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }
  async enviarParaCliente(album) {
    if (album.faixas.length === 0 || this.copiandoLinkNaoListadoId() || this.renovandoLinkNaoListadoId() || this.desativandoLinkNaoListadoId()) {
      return;
    }
    const janelaWhatsApp = window.open("about:blank", "_blank");
    this.copiandoLinkNaoListadoId.set(album.id);
    this.limparRetorno();
    try {
      const token = album.token_compartilhamento ?? await this.dadosAlbuns.renovarTokenCompartilhamento(album.id);
      const mensagem = [
        `Ol\xE1! Separei o \xE1lbum "${album.nome}" de ${album.projeto.nome} para voc\xEA ouvir:`,
        "",
        this.linkNaoListado(album, token)
      ].join("\n");
      const url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;
      if (janelaWhatsApp) {
        janelaWhatsApp.opener = null;
        janelaWhatsApp.location.replace(url);
      } else {
        await this.copiarTexto(this.linkNaoListado(album, token));
        this.mensagemOperacao.set("O navegador bloqueou o WhatsApp. O link privado foi copiado.");
      }
    } catch (erro) {
      janelaWhatsApp?.close();
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.copiandoLinkNaoListadoId.set(null);
    }
  }
  async excluirAlbum(album) {
    const confirmou = window.confirm(`Excluir o \xE1lbum "${album.nome}"? Os arquivos das faixas continuar\xE3o no acervo.`);
    if (!confirmou) {
      return;
    }
    this.excluindoAlbumId.set(album.id);
    this.limparRetorno();
    try {
      await this.dadosAlbuns.excluir(album.id);
      if (this.albumAbertoId() === album.id) {
        this.fecharAlbum();
      }
      if (this.albumEditandoId() === album.id) {
        this.cancelarFormulario();
      }
      this.mensagemOperacao.set("\xC1lbum exclu\xEDdo. As faixas continuam no acervo.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.excluindoAlbumId.set(null);
    }
  }
  async selecionarCapa(album, evento) {
    const input = evento.target;
    const arquivo = input.files?.item(0) ?? null;
    if (!arquivo || this.enviandoCapaId()) {
      input.value = "";
      return;
    }
    this.enviandoCapaId.set(album.id);
    this.limparRetorno();
    try {
      await this.dadosAlbuns.enviarCapa(album.id, arquivo);
      this.mensagemOperacao.set("Capa do \xE1lbum atualizada.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      input.value = "";
      this.enviandoCapaId.set(null);
    }
  }
  async usarCapaProjeto(album) {
    if (!album.capa_caminho || this.removendoCapaId()) {
      return;
    }
    const destino = album.projeto.capa_caminho ? "a capa do projeto" : "a capa padr\xE3o do Fleiva";
    const confirmou = window.confirm(`Remover a capa pr\xF3pria deste \xE1lbum e usar ${destino}?`);
    if (!confirmou) {
      return;
    }
    this.removendoCapaId.set(album.id);
    this.limparRetorno();
    try {
      await this.dadosAlbuns.removerCapa(album.id);
      this.mensagemOperacao.set(album.projeto.capa_caminho ? "O \xE1lbum voltou a usar a capa do projeto." : "O \xE1lbum voltou a usar a capa padr\xE3o.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.removendoCapaId.set(null);
    }
  }
  async adicionarFaixa(album) {
    if (this.formularioFaixa.invalid) {
      this.formularioFaixa.markAllAsTouched();
      return;
    }
    this.adicionandoFaixa.set(true);
    this.limparRetorno();
    try {
      const valor = this.formularioFaixa.getRawValue();
      const versao = this.dadosAlbuns.versoesDisponiveis().find((item) => item.id === valor.versao_id);
      if (!versao || versao.faixa.projeto_id !== album.projeto_id) {
        throw new Error("Selecione uma vers\xE3o v\xE1lida deste projeto.");
      }
      await this.dadosAlbuns.adicionarFaixa(album.id, versao.faixa_id, versao.id);
      this.formularioFaixa.reset({
        versao_id: ""
      });
      this.mensagemOperacao.set("Vers\xE3o adicionada ao trabalho.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.adicionandoFaixa.set(false);
    }
  }
  async trocarVersao(item, evento) {
    const select = evento.target;
    const versaoId = select.value;
    if (!versaoId || versaoId === item.versao_id) {
      return;
    }
    this.alterandoVersaoId.set(item.id);
    this.limparRetorno();
    try {
      await this.dadosAlbuns.trocarVersao(item.id, versaoId);
      this.mensagemOperacao.set("Vers\xE3o atualizada.");
    } catch (erro) {
      select.value = item.versao_id;
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.alterandoVersaoId.set(null);
    }
  }
  async removerFaixa(item) {
    this.removendoFaixaId.set(item.id);
    this.limparRetorno();
    try {
      await this.dadosAlbuns.removerFaixa(item.id);
      this.mensagemOperacao.set("Faixa removida do \xE1lbum. O arquivo permanece no acervo.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.removendoFaixaId.set(null);
    }
  }
  async moverFaixa(album, itemId, deslocamento) {
    const ids = album.faixas.map((item) => item.id);
    const indiceAtual = ids.indexOf(itemId);
    const novoIndice = indiceAtual + deslocamento;
    if (indiceAtual < 0 || novoIndice < 0 || novoIndice >= ids.length) {
      return;
    }
    [ids[indiceAtual], ids[novoIndice]] = [ids[novoIndice], ids[indiceAtual]];
    this.ordenandoAlbumId.set(album.id);
    this.limparRetorno();
    try {
      await this.dadosAlbuns.reordenar(album.id, ids);
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.ordenandoAlbumId.set(null);
    }
  }
  versoesDisponiveis(album) {
    const versoesJaAdicionadas = new Set(album.faixas.map((item) => item.versao_id));
    return this.dadosAlbuns.faixasDisponiveisDoProjeto(album.projeto_id).flatMap((item) => item.versoes).filter((versao) => !versoesJaAdicionadas.has(versao.id));
  }
  selecionarAba(aba) {
    this.abaEditor.set(aba);
  }
  capaAlbum(album) {
    return this.dadosAlbuns.capaUrl(album);
  }
  origemCapa(album) {
    if (album.capa_caminho) {
      return "Capa pr\xF3pria do \xE1lbum";
    }
    if (album.projeto.capa_caminho) {
      return "Usando a capa do projeto";
    }
    return "Usando a capa padr\xE3o";
  }
  iniciaisProjeto(album) {
    const palavras = album.projeto.nome.trim().split(/\s+/).filter(Boolean);
    return palavras.slice(0, 2).map((palavra) => palavra.charAt(0)).join("").toLocaleUpperCase("pt-BR") || "FL";
  }
  async publicarAlbum(album) {
    if (this.formularioPublicacao.invalid || this.publicandoAlbumId() || this.despublicandoAlbumId()) {
      this.formularioPublicacao.markAllAsTouched();
      return;
    }
    this.publicandoAlbumId.set(album.id);
    this.limparRetorno();
    try {
      const valor = this.formularioPublicacao.getRawValue();
      const configuracao = {
        tipo_publico: this.normalizarTextoOpcional(valor.tipo_publico),
        descricao_publica: this.normalizarTextoOpcional(valor.descricao_publica),
        reproducao_publica: valor.reproducao_publica,
        download_publico: valor.download_publico
      };
      await this.dadosAlbuns.publicar(album.id, configuracao);
      this.mensagemOperacao.set(album.publico_na_landing ? "Publica\xE7\xE3o do \xE1lbum atualizada." : "\xC1lbum publicado na p\xE1gina do est\xFAdio.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.publicandoAlbumId.set(null);
    }
  }
  async despublicarAlbum(album) {
    if (this.publicandoAlbumId() || this.despublicandoAlbumId()) {
      return;
    }
    this.despublicandoAlbumId.set(album.id);
    this.limparRetorno();
    try {
      await this.dadosAlbuns.despublicar(album.id);
      this.mensagemOperacao.set(album.publico_na_casa ? "\xC1lbum removido da p\xE1gina p\xFAblica e da Casa." : "\xC1lbum removido da p\xE1gina p\xFAblica.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.despublicandoAlbumId.set(null);
    }
  }
  async alternarExibicaoNaCasa(album) {
    if (!album.publico_na_landing || this.alterandoCasaAlbumId()) {
      return;
    }
    const exibir = !album.publico_na_casa;
    this.alterandoCasaAlbumId.set(album.id);
    this.limparRetorno();
    try {
      await this.dadosAlbuns.definirExibicaoNaCasa(album.id, exibir);
      this.mensagemOperacao.set(exibir ? "Trabalho adicionado \xE0 Casa Fl\xEAiva." : "Trabalho removido da Casa Fl\xEAiva.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.alterandoCasaAlbumId.set(null);
    }
  }
  rotuloQuantidadeFaixas(quantidade) {
    return quantidade === 1 ? "1 faixa" : `${quantidade} faixas`;
  }
  usarDominiosFleiva() {
    if (typeof window === "undefined") {
      return false;
    }
    const hostname = window.location.hostname.trim().toLocaleLowerCase();
    return hostname === "fleiva.com.br" || hostname.endsWith(".fleiva.com.br");
  }
  normalizarTextoOpcional(valor) {
    const texto = valor?.trim();
    return texto ? texto : null;
  }
  limparRetorno() {
    this.erroOperacao.set(null);
    this.mensagemOperacao.set(null);
  }
  async copiarTexto(texto) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(texto);
      return;
    }
    const campoTemporario = document.createElement("textarea");
    campoTemporario.value = texto;
    campoTemporario.setAttribute("readonly", "");
    campoTemporario.style.position = "fixed";
    campoTemporario.style.opacity = "0";
    document.body.appendChild(campoTemporario);
    campoTemporario.select();
    const copiado = document.execCommand("copy");
    campoTemporario.remove();
    if (!copiado) {
      throw new Error("C\xF3pia n\xE3o permitida.");
    }
  }
  rolarPara(elementoId) {
    window.setTimeout(() => {
      document.getElementById(elementoId)?.scrollIntoView({
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
  static \u0275fac = function Albuns_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Albuns)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Albuns, selectors: [["app-albuns"]], decls: 8, vars: 5, consts: [[1, "pagina"], [1, "topo-editor", "topo-editor-focado"], [1, "cabecalho-pagina"], ["id", "formulario-album", 1, "painel", "formulario-album"], [1, "mensagem", "mensagem-erro"], [1, "mensagem", "mensagem-sucesso"], ["id", "editor-sequencia", 1, "editor-sequencia", "editor-focado"], ["type", "button", 1, "voltar-catalogo", 3, "click"], ["aria-hidden", "true"], [1, "resumo-editor-focado"], [1, "miniatura-editor"], [3, "src", "alt"], [1, "identificacao-editor"], [1, "rotulo-menor"], [1, "acoes-resumo-editor"], ["aria-label", "Estado do trabalho", 1, "estados-editor"], [1, "estado-editor"], [1, "estado-editor", "estado-casa"], ["type", "button", 1, "botao-secundario", 3, "click"], [1, "secao"], ["type", "button", 1, "botao-principal", 3, "click", "disabled"], [1, "titulo-formulario"], ["type", "button", "aria-label", "Fechar formul\xE1rio", 1, "botao-icone", 3, "click", "disabled"], [3, "ngSubmit", "formGroup"], [1, "campos-album"], ["formControlName", "projeto_id"], ["value", ""], [3, "value"], ["type", "text", "formControlName", "nome", "placeholder", "Ex.: Depois da Meia-Noite"], [1, "campo-largo"], ["formControlName", "observacoes", "rows", "3", "placeholder", "Conceito, momento do projeto ou alguma refer\xEAncia opcional"], [1, "acoes-formulario"], ["type", "button", 1, "botao-secundario", 3, "click", "disabled"], ["type", "submit", 1, "botao-principal", 3, "disabled"], ["aria-label", "\xC1reas da edi\xE7\xE3o", 1, "navegacao-editor"], ["type", "button", 3, "click"], [1, "aba-editor", "painel-conteudo"], [1, "aba-editor", "painel-publicacao", 3, "publicado"], [1, "aba-editor", "area-compartilhamento"], [1, "cabecalho-secao-editor"], [1, "gerenciador-capa"], [1, "estado-capa"], [1, "acoes-capa"], [1, "seletor-capa"], ["type", "file", "accept", ".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp", 3, "change", "disabled"], ["type", "button", 1, "botao-herdar-capa", 3, "disabled"], [1, "observacoes-album"], [1, "sequencia-vazia"], [1, "adicionar-faixa", 3, "ngSubmit", "formGroup"], ["formControlName", "versao_id"], ["type", "submit", 1, "botao-claro", 3, "disabled"], [1, "todas-faixas-adicionadas"], ["routerLink", "/faixas"], ["type", "button", 1, "botao-herdar-capa", 3, "click", "disabled"], ["aria-hidden", "true", 1, "cabecalho-faixas"], [1, "lista-faixas"], [1, "numero-faixa"], [1, "identificacao-faixa"], [1, "seletor-versao"], [1, "rotulo-acessivel"], [3, "change", "disabled"], [3, "value", "selected"], [1, "acoes-faixa"], ["type", "button", "aria-label", "Mover faixa para cima", 3, "click", "disabled"], ["type", "button", "aria-label", "Mover faixa para baixo", 3, "click", "disabled"], ["type", "button", 1, "remover-faixa", 3, "click", "disabled"], [1, "aba-editor", "painel-publicacao"], [1, "cabecalho-publicacao"], [1, "controle-casa"], [1, "situacao-publicacao"], [1, "resumo-publicacao"], [1, "capa-publicacao"], [1, "controle-casa", 3, "na-casa"], [1, "aviso-publicacao"], [1, "formulario-publicacao", 3, "ngSubmit", "formGroup"], [1, "campos-publicacao"], ["type", "text", "formControlName", "tipo_publico", "list", "tipos-trabalho", "placeholder", "Ex.: \xC1lbum, beat tape, sample pack", 3, "disabled"], ["id", "tipos-trabalho"], ["value", "\xC1lbum"], ["value", "EP"], ["value", "Single"], ["value", "Mixtape"], ["value", "Beat tape"], ["value", "Cat\xE1logo de beats"], ["value", "Sample pack"], ["value", "Loop pack"], ["value", "Stem pack"], ["value", "Acapella pack"], ["value", "Demo"], ["formControlName", "descricao_publica", "rows", "4", "placeholder", "Apresente o trabalho para quem visitar a p\xE1gina", 3, "disabled"], [1, "titulo-permissoes"], [1, "opcoes-publicacao"], ["type", "checkbox", "formControlName", "reproducao_publica", 3, "disabled"], ["type", "checkbox", "formControlName", "download_publico", 3, "disabled"], [1, "alerta-exposicao"], [1, "alerta-download"], [1, "confirmacao-publicacao"], ["type", "checkbox", "formControlName", "confirmacao", 3, "disabled"], [1, "acoes-publicacao"], ["type", "button", 1, "botao-despublicar", 3, "disabled"], ["type", "submit", 1, "botao-publicar", 3, "disabled"], ["type", "button", 3, "click", "disabled"], ["type", "button", 1, "botao-despublicar", 3, "click", "disabled"], [1, "grade-compartilhamento"], [1, "painel-cliente"], [1, "identificacao-envio-cliente"], ["aria-hidden", "true", 1, "icone-envio-cliente"], [1, "situacao-link-cliente"], [1, "acoes-cliente"], ["type", "button", 1, "botao-enviar-cliente", 3, "click", "disabled"], ["type", "button", 1, "botao-link-cliente", 3, "click", "disabled"], [1, "aviso-envio-cliente"], [1, "painel-compartilhamento-publico"], ["aria-hidden", "true", 1, "icone-envio-publico"], [1, "acoes-compartilhamento-publico"], [1, "publicacao-indisponivel"], ["type", "button", 1, "botao-renovar-link", 3, "click", "disabled"], ["type", "button", 1, "botao-copiar-link", 3, "click"], ["type", "button", 1, "botao-copiar-link", 3, "click", "disabled"], ["type", "button", 1, "botao-whatsapp", 3, "click"], [1, "aviso-projetos"], [1, "estado"], [1, "estado", "estado-erro"], [1, "vazio-catalogo"], [1, "catalogo"], ["routerLink", "/projetos"], ["aria-hidden", "true", 1, "carregador"], ["aria-hidden", "true", 1, "capa-vazia"], [1, "cabecalho-catalogo"], [1, "acoes-filtro"], [1, "filtro-vazio"], [1, "grade-albuns"], [3, "routerLink"], ["routerLink", "/albuns"], ["type", "button", 1, "botao-principal", 3, "click"], [1, "cartao-album"], [1, "capa-album"], [1, "estado-cartao"], [1, "corpo-cartao"], [1, "dados-album"], [1, "metadados-cartao"], [1, "marcador-casa"], ["type", "button", 1, "botao-abrir-album", 3, "click"], [1, "acoes-cartao"], ["type", "button", 1, "acao-editar", 3, "click"], ["type", "button", "aria-label", "Excluir \xE1lbum", 1, "acao-perigo", 3, "click", "disabled"]], template: function Albuns_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0);
      \u0275\u0275conditionalCreate(1, Albuns_Conditional_1_Template, 24, 8, "header", 1)(2, Albuns_Conditional_2_Template, 12, 1, "header", 2);
      \u0275\u0275conditionalCreate(3, Albuns_Conditional_3_Template, 38, 9, "section", 3);
      \u0275\u0275conditionalCreate(4, Albuns_Conditional_4_Template, 2, 1, "p", 4);
      \u0275\u0275conditionalCreate(5, Albuns_Conditional_5_Template, 2, 1, "p", 5);
      \u0275\u0275conditionalCreate(6, Albuns_Conditional_6_Template, 26, 12, "section", 6)(7, Albuns_Conditional_7_Template, 5, 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_4_0;
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_0_0 = ctx.albumAberto()) ? 1 : 2, tmp_0_0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.formularioAberto() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.erroOperacao() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mensagemOperacao() ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_4_0 = ctx.albumAberto()) ? 6 : 7, tmp_4_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  color: var(--text);\n}\n.pagina[_ngcontent-%COMP%] {\n  width: min(78rem, 100% - 2rem);\n  margin: 0 auto;\n  padding: 2.25rem 0 5rem;\n}\n.cabecalho-pagina[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n.cabecalho-pagina[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.45rem 0 0.6rem;\n  font-size: clamp(2.7rem, 6vw, 4.8rem);\n  font-weight: 680;\n  line-height: 0.92;\n  letter-spacing: -0.065em;\n}\n.cabecalho-pagina[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.secao) {\n  max-width: 38rem;\n  margin: 0;\n  color: var(--text-soft);\n}\n.secao[_ngcontent-%COMP%], \n.rotulo-menor[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--primary);\n  font-size: 0.64rem;\n  font-weight: 780;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  font: inherit;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: 150ms ease;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.52;\n}\n.botao-principal[_ngcontent-%COMP%], \n.botao-secundario[_ngcontent-%COMP%], \n.botao-claro[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.45rem;\n  padding: 0.62rem 1rem;\n  border-radius: var(--radius);\n  font-size: 0.76rem;\n  font-weight: 760;\n}\n.botao-principal[_ngcontent-%COMP%], \n.botao-claro[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: var(--studio-on-brand, #fff);\n  border: 0.0625rem solid var(--primary);\n  box-shadow: 0 0.55rem 1.3rem color-mix(in srgb, var(--primary) 18%, transparent);\n}\n.botao-principal[_ngcontent-%COMP%]:hover:not(:disabled), \n.botao-claro[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.95);\n  transform: translateY(-0.0625rem);\n}\n.botao-secundario[_ngcontent-%COMP%] {\n  background: var(--surface);\n  color: var(--text);\n  border: 0.0625rem solid var(--border);\n}\n.botao-secundario[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--surface-muted);\n}\n.painel[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding: clamp(1rem, 3vw, 1.5rem);\n  background: var(--surface);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-grande);\n  box-shadow: var(--shadow-soft);\n}\n.formulario-album[_ngcontent-%COMP%] {\n  scroll-margin-top: 1rem;\n  border-top: 0.2rem solid var(--primary);\n}\n.titulo-formulario[_ngcontent-%COMP%], \n.cabecalho-catalogo[_ngcontent-%COMP%], \n.topo-editor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.titulo-formulario[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.titulo-formulario[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  font-size: 1.25rem;\n}\n.botao-icone[_ngcontent-%COMP%], \n.botao-fechar-editor[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.5rem;\n  height: 2.5rem;\n  flex: 0 0 auto;\n  place-items: center;\n  padding: 0;\n  background: var(--surface);\n  color: var(--text-soft);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-round);\n  font-size: 1.2rem;\n}\n.botao-icone[_ngcontent-%COMP%]:hover:not(:disabled), \n.botao-fechar-editor[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--surface-muted);\n  color: var(--text);\n}\n.campos-album[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n.campo-largo[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.4rem;\n}\nlabel[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 730;\n}\nlabel[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0.68rem 0.75rem;\n  background: var(--surface);\n  color: var(--text);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n  outline: none;\n}\ninput[_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 0.18rem color-mix(in srgb, var(--primary) 13%, transparent);\n}\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  min-height: 2.75rem;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.acoes-formulario[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.65rem;\n  margin-top: 1rem;\n}\n.aviso-projetos[_ngcontent-%COMP%], \n.mensagem[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding: 0.9rem 1rem;\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n}\n.aviso-projetos[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  background: var(--color-warning-soft);\n  border-color: var(--color-warning-border);\n}\n.aviso-projetos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: var(--text-soft);\n  font-size: 0.78rem;\n}\n.aviso-projetos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 0.76rem;\n  font-weight: 760;\n}\n.mensagem[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n}\n.mensagem-sucesso[_ngcontent-%COMP%] {\n  background: var(--color-success-soft);\n  color: var(--color-success);\n  border-color: var(--color-success-border);\n}\n.mensagem-erro[_ngcontent-%COMP%] {\n  background: var(--color-danger-soft);\n  color: var(--danger);\n  border-color: var(--color-danger-border);\n}\n.estado[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 20rem;\n  place-content: center;\n  justify-items: center;\n  color: var(--text-muted);\n  text-align: center;\n}\n.estado[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n  color: var(--text);\n}\n.estado-erro[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.carregador[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  margin-bottom: 0.8rem;\n  border: 0.14rem solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: var(--radius-round);\n  animation: _ngcontent-%COMP%_girar 650ms linear infinite;\n}\n.catalogo[_ngcontent-%COMP%] {\n  margin-top: 2.25rem;\n}\n.cabecalho-catalogo[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  margin-bottom: 1rem;\n}\n.cabecalho-catalogo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0;\n  font-size: clamp(1.4rem, 4vw, 2rem);\n  letter-spacing: -0.035em;\n}\n.cabecalho-catalogo[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 2rem;\n  min-height: 2rem;\n  place-items: center;\n  background: var(--primary);\n  color: var(--studio-on-brand, #fff);\n  border-radius: var(--radius-round);\n  font-size: 0.68rem;\n  font-weight: 760;\n}\n.acoes-filtro[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.7rem;\n  margin-top: 0.45rem;\n}\n.acoes-filtro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 0.72rem;\n  font-weight: 760;\n  text-decoration: none;\n}\n.filtro-vazio[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: start;\n  gap: 0.6rem;\n  padding: clamp(1.25rem, 4vw, 2.5rem);\n  background: var(--surface);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-grande);\n}\n.filtro-vazio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 34rem;\n  margin: 0;\n  color: var(--text-soft);\n  font-size: 0.78rem;\n}\n.filtro-vazio[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 0.35rem;\n}\n.grade-albuns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: clamp(1rem, 2vw, 1.35rem);\n}\n.cartao-album[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  min-width: 0;\n  overflow: hidden;\n  background: var(--surface);\n  border: 0.0625rem solid var(--border);\n  border-radius: calc(var(--radius-grande) + 0.1rem);\n  box-shadow: var(--shadow-small);\n  transition: 170ms ease;\n}\n.cartao-album[_ngcontent-%COMP%]:hover {\n  border-color: color-mix(in srgb, var(--primary) 28%, var(--border));\n  box-shadow: var(--shadow-medium);\n  transform: translateY(-0.18rem);\n}\n.cartao-album.album-selecionado[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--primary) 58%, var(--border));\n  box-shadow: 0 0 0 0.12rem color-mix(in srgb, var(--primary) 13%, transparent);\n}\n.capa-album[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  aspect-ratio: 1;\n  place-items: center;\n  overflow: hidden;\n  isolation: isolate;\n  background:\n    linear-gradient(\n      145deg,\n      color-mix(in srgb, var(--primary) 55%, var(--app-dark, #151715)),\n      var(--primary));\n  color: var(--studio-on-brand, #fff);\n}\n.capa-album[_ngcontent-%COMP%]::before {\n  position: absolute;\n  z-index: -1;\n  width: 46%;\n  height: 46%;\n  border: 0.0625rem solid currentColor;\n  content: "";\n  opacity: 0.22;\n  transform: rotate(45deg);\n}\n.capa-album[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.capa-album[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  font-size: clamp(2.2rem, 6vw, 4rem);\n  letter-spacing: -0.08em;\n}\n.capa-album[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.9rem;\n  bottom: 0.8rem;\n  left: 0.9rem;\n  overflow: hidden;\n  font-size: 0.55rem;\n  font-weight: 760;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.estado-cartao[_ngcontent-%COMP%], \n.indicador-aberto[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  display: inline-flex;\n  min-height: 1.6rem;\n  align-items: center;\n  padding: 0.28rem 0.55rem;\n  background: rgba(10, 12, 10, 0.72);\n  color: #f8faf6;\n  border: 0.0625rem solid rgba(255, 255, 255, 0.24);\n  border-radius: var(--radius-round);\n  -webkit-backdrop-filter: blur(0.45rem);\n  backdrop-filter: blur(0.45rem);\n  font-size: 0.55rem;\n  font-weight: 780;\n  text-transform: uppercase;\n}\n.estado-cartao[_ngcontent-%COMP%] {\n  left: 0.75rem;\n}\n.estado-cartao.estado-publicado[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: var(--studio-on-brand, #fff);\n}\n.indicador-aberto[_ngcontent-%COMP%] {\n  right: 0.75rem;\n  background: var(--surface);\n  color: var(--primary);\n  border-color: color-mix(in srgb, var(--primary) 35%, var(--border));\n}\n.corpo-cartao[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: space-between;\n  gap: 1rem;\n  padding: 1rem;\n}\n.dados-album[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.28rem;\n}\n.dados-album[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%], \n.dados-album[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dados-album[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  font-size: 1.02rem;\n}\n.dados-album[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  color: var(--text-soft);\n  font-size: 0.7rem;\n}\n.metadados-cartao[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  margin-top: 0.45rem;\n}\n.metadados-cartao[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.45rem;\n  background: var(--surface-muted);\n  color: var(--text-muted);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-round);\n  font-size: 0.58rem;\n  font-style: normal;\n}\n.metadados-cartao[_ngcontent-%COMP%]   .marcador-casa[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--primary) 12%, var(--surface));\n  color: var(--primary);\n  border-color: color-mix(in srgb, var(--primary) 35%, var(--border));\n}\n.botao-abrir-album[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  min-height: 2.65rem;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.62rem 0.75rem;\n  background: var(--surface-muted);\n  color: var(--text);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n  font-size: 0.68rem;\n  font-weight: 760;\n}\n.botao-abrir-album[_ngcontent-%COMP%]:hover:not(:disabled), \n.botao-abrir-album[aria-pressed=true][_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--primary) 10%, var(--surface));\n  color: var(--primary);\n  border-color: color-mix(in srgb, var(--primary) 38%, var(--border));\n}\n.acoes-cartao[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr auto;\n  gap: 0.45rem;\n  padding: 0.75rem 1rem 1rem;\n  background: var(--surface-muted);\n  border-top: 0.0625rem solid var(--border);\n}\n.acoes-cartao[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 2.3rem;\n  padding: 0.45rem 0.55rem;\n  background: var(--surface);\n  color: var(--text-soft);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n  font-size: 0.65rem;\n  font-weight: 740;\n}\n.acoes-cartao[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 0.2rem;\n}\n.acoes-cartao[_ngcontent-%COMP%]   .acao-editar[_ngcontent-%COMP%]:first-child {\n  background: color-mix(in srgb, var(--primary) 9%, var(--surface));\n  color: var(--primary);\n  border-color: color-mix(in srgb, var(--primary) 28%, var(--border));\n}\n.acoes-cartao[_ngcontent-%COMP%]   .acao-editar[_ngcontent-%COMP%]:first-child:hover:not(:disabled) {\n  background: var(--primary);\n  color: var(--studio-on-brand, #fff);\n}\n.acoes-cartao[_ngcontent-%COMP%]   .acao-perigo[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-danger-soft);\n  color: var(--danger);\n  border-color: var(--color-danger-border);\n}\n.editor-sequencia[_ngcontent-%COMP%] {\n  scroll-margin-top: 1rem;\n  margin-top: 2rem;\n  overflow: hidden;\n  background: var(--surface);\n  color: var(--text);\n  border: 0.0625rem solid var(--border);\n  border-radius: calc(var(--radius-grande) + 0.15rem);\n  box-shadow: var(--shadow);\n}\n.topo-editor[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  padding: clamp(1rem, 3vw, 1.5rem);\n  background: var(--surface-muted);\n  border-bottom: 0.0625rem solid var(--border);\n}\n.miniatura-editor[_ngcontent-%COMP%], \n.capa-publicacao[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 auto;\n  place-items: center;\n  overflow: hidden;\n  background: var(--primary);\n  color: var(--studio-on-brand, #fff);\n  border-radius: var(--radius);\n  font-weight: 780;\n}\n.miniatura-editor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.capa-publicacao[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.miniatura-editor[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n  font-size: 1.2rem;\n}\n.identificacao-editor[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.identificacao-editor[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0.25rem 0;\n  font-size: clamp(1.5rem, 5vw, 2.7rem);\n  line-height: 1;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.identificacao-editor[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.68rem;\n}\n.acoes-topo-editor[_ngcontent-%COMP%], \n.acoes-compartilhamento[_ngcontent-%COMP%], \n.acoes-capa[_ngcontent-%COMP%], \n.acoes-cliente[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.acoes-topo-editor[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.acoes-compartilhamento[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.acoes-cliente[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.seletor-capa[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.botao-herdar-capa[_ngcontent-%COMP%] {\n  min-height: 2.4rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: var(--radius);\n  font-size: 0.67rem;\n  font-weight: 750;\n}\n.botao-copiar-link[_ngcontent-%COMP%], \n.botao-link-cliente[_ngcontent-%COMP%], \n.botao-renovar-link[_ngcontent-%COMP%], \n.botao-herdar-capa[_ngcontent-%COMP%], \n.seletor-capa[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: var(--surface);\n  color: var(--text-soft);\n  border: 0.0625rem solid var(--border);\n}\n.botao-copiar-link[_ngcontent-%COMP%]:hover:not(:disabled), \n.botao-link-cliente[_ngcontent-%COMP%]:hover:not(:disabled), \n.botao-renovar-link[_ngcontent-%COMP%]:hover:not(:disabled), \n.botao-herdar-capa[_ngcontent-%COMP%]:hover:not(:disabled), \n.seletor-capa[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--surface-muted);\n  color: var(--text);\n}\n.botao-whatsapp[_ngcontent-%COMP%] {\n  background: var(--color-success);\n  color: #fff;\n  border: 0.0625rem solid var(--color-success);\n}\n.gerenciador-capa[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin: 1rem;\n  padding: 0.9rem 1rem;\n  background: var(--surface-muted);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-grande);\n}\n.estado-capa[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.75rem;\n}\n.estado-capa[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.25rem;\n  height: 2.25rem;\n  flex: 0 0 auto;\n  place-items: center;\n  background: var(--surface);\n  color: var(--primary);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n}\n.estado-capa[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.15rem;\n}\n.estado-capa[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.estado-capa[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.62rem;\n}\n.seletor-capa[_ngcontent-%COMP%] {\n  display: block;\n}\n.seletor-capa[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  opacity: 0;\n}\n.seletor-capa[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n}\n.seletor-capa.desativado[_ngcontent-%COMP%] {\n  opacity: 0.52;\n}\n.painel-cliente[_ngcontent-%COMP%], \n.painel-publicacao[_ngcontent-%COMP%] {\n  margin: 1rem;\n  background: var(--surface);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-grande);\n}\n.painel-cliente[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 1rem 1.5rem;\n  padding: 1rem;\n  background: color-mix(in srgb, var(--primary) 5%, var(--surface));\n  border-color: color-mix(in srgb, var(--primary) 25%, var(--border));\n}\n.identificacao-envio-cliente[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.8rem;\n}\n.identificacao-envio-cliente[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0.3rem;\n  font-size: 1rem;\n}\n.identificacao-envio-cliente[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n  color: var(--text-soft);\n  font-size: 0.7rem;\n}\n.icone-envio-cliente[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.5rem;\n  height: 2.5rem;\n  flex: 0 0 auto;\n  place-items: center;\n  background: var(--primary);\n  color: var(--studio-on-brand, #fff);\n  border-radius: var(--radius);\n}\n.situacao-link-cliente[_ngcontent-%COMP%], \n.situacao-publicacao[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.58rem;\n  background: var(--surface);\n  color: var(--text-muted);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-round);\n  font-size: 0.62rem;\n  font-weight: 760;\n  white-space: nowrap;\n}\n.situacao-link-cliente.link-ativo[_ngcontent-%COMP%] {\n  background: var(--color-success-soft);\n  color: var(--color-success);\n  border-color: var(--color-success-border);\n}\n.acoes-cliente[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  flex-wrap: wrap;\n  padding-top: 0.85rem;\n  border-top: 0.0625rem solid var(--border);\n}\n.botao-enviar-cliente[_ngcontent-%COMP%], \n.botao-publicar[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: var(--studio-on-brand, #fff);\n  border: 0.0625rem solid var(--primary);\n}\n.botao-renovar-link[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.botao-renovar-link[_ngcontent-%COMP%]    + .botao-link-cliente[_ngcontent-%COMP%] {\n  color: var(--danger);\n  border-color: var(--color-danger-border);\n}\n.botao-renovar-link[_ngcontent-%COMP%]    + .botao-link-cliente[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-danger-soft);\n}\n.aviso-envio-cliente[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  color: var(--color-warning);\n  font-size: 0.66rem;\n}\n.painel-publicacao[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.painel-publicacao.publicado[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--primary) 38%, var(--border));\n  box-shadow: inset 0.18rem 0 var(--primary);\n}\n.cabecalho-publicacao[_ngcontent-%COMP%], \n.resumo-publicacao[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  border-bottom: 0.0625rem solid var(--border);\n}\n.cabecalho-publicacao[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  background: var(--surface-muted);\n}\n.cabecalho-publicacao[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  font-size: 1rem;\n}\n.situacao-publicacao.publicada[_ngcontent-%COMP%] {\n  color: var(--primary);\n  border-color: color-mix(in srgb, var(--primary) 30%, var(--border));\n}\n.capa-publicacao[_ngcontent-%COMP%] {\n  width: 4.5rem;\n  height: 4.5rem;\n}\n.resumo-publicacao[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  display: grid;\n  min-width: 0;\n  gap: 0.2rem;\n}\n.resumo-publicacao[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child    > span[_ngcontent-%COMP%], \n.resumo-publicacao[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child    > small[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.controle-casa[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 0.75rem 1rem;\n  margin: 1rem;\n  padding: 1rem;\n  background: var(--surface-muted);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n}\n.controle-casa.na-casa[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--primary) 7%, var(--surface));\n  border-color: color-mix(in srgb, var(--primary) 34%, var(--border));\n}\n.controle-casa[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.25rem;\n}\n.controle-casa[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.86rem;\n}\n.controle-casa[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.controle-casa[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.64rem;\n}\n.controle-casa[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.controle-casa[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 2.5rem;\n  padding: 0.55rem 0.85rem;\n  background: var(--primary);\n  color: var(--studio-on-brand, #fff);\n  border: 0.0625rem solid var(--primary);\n  border-radius: var(--radius);\n  font-size: 0.68rem;\n  font-weight: 760;\n}\n.controle-casa[_ngcontent-%COMP%]   .remover-da-casa[_ngcontent-%COMP%] {\n  background: var(--surface);\n  color: var(--text-soft);\n  border-color: var(--border);\n}\n.aviso-publicacao[_ngcontent-%COMP%], \n.alerta-exposicao[_ngcontent-%COMP%], \n.alerta-download[_ngcontent-%COMP%] {\n  margin: 1rem;\n  padding: 0.8rem;\n  border-radius: var(--radius);\n  font-size: 0.68rem;\n}\n.aviso-publicacao[_ngcontent-%COMP%], \n.alerta-exposicao[_ngcontent-%COMP%] {\n  background: var(--color-warning-soft);\n  color: var(--color-warning);\n  border: 0.0625rem solid var(--color-warning-border);\n}\n.alerta-download[_ngcontent-%COMP%] {\n  background: var(--color-danger-soft);\n  color: var(--danger);\n  border: 0.0625rem solid var(--color-danger-border);\n}\n.revisao-publicacao[_ngcontent-%COMP%], \n.formulario-publicacao[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.revisao-publicacao[_ngcontent-%COMP%] {\n  border-bottom: 0.0625rem solid var(--border);\n}\n.revisao-publicacao[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.2rem;\n  margin-bottom: 0.75rem;\n}\n.revisao-publicacao[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.65rem;\n}\n.revisao-publicacao[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.4rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.revisao-publicacao[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.5rem minmax(0, 1fr);\n  gap: 0.65rem;\n  padding: 0.65rem;\n  background: var(--surface-muted);\n  border-radius: var(--radius);\n}\n.revisao-publicacao[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 760;\n}\n.revisao-publicacao[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n}\n.revisao-publicacao[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.6rem;\n}\n.campos-publicacao[_ngcontent-%COMP%], \n.opcoes-publicacao[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n.campos-publicacao[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 6.4rem;\n}\n.titulo-permissoes[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.2rem;\n  margin: 1rem 0 0.65rem;\n}\n.titulo-permissoes[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.63rem;\n}\n.opcoes-publicacao[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.65rem;\n  padding: 0.8rem;\n  background: var(--surface-muted);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n}\n.opcoes-publicacao[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:has(input:checked) {\n  background: color-mix(in srgb, var(--primary) 7%, var(--surface));\n  border-color: color-mix(in srgb, var(--primary) 35%, var(--border));\n}\n.opcoes-publicacao[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  flex: 0 0 auto;\n}\n.opcoes-publicacao[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.2rem;\n}\n.opcoes-publicacao[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.61rem;\n}\n.confirmacao-publicacao[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin-top: 1rem;\n  color: var(--text-soft);\n  font-size: 0.67rem;\n}\n.confirmacao-publicacao[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.acoes-publicacao[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.6rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 0.0625rem solid var(--border);\n}\n.botao-publicar[_ngcontent-%COMP%], \n.botao-despublicar[_ngcontent-%COMP%] {\n  min-height: 2.5rem;\n  padding: 0.55rem 0.85rem;\n  border-radius: var(--radius);\n  font-size: 0.68rem;\n  font-weight: 760;\n}\n.botao-despublicar[_ngcontent-%COMP%] {\n  background: var(--surface);\n  color: var(--danger);\n  border: 0.0625rem solid var(--color-danger-border);\n}\n.observacoes-album[_ngcontent-%COMP%] {\n  margin: 1rem;\n  padding: 0.9rem 1rem;\n  background: var(--surface-muted);\n  color: var(--text-soft);\n  border-radius: var(--radius);\n  font-size: 0.76rem;\n}\n.cabecalho-faixas[_ngcontent-%COMP%], \n.lista-faixas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2.5rem minmax(10rem, 1fr) minmax(10rem, 14rem) auto;\n  align-items: center;\n  gap: 0.8rem;\n}\n.cabecalho-faixas[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n  padding: 0.75rem 0.8rem;\n  color: var(--text-muted);\n  border-bottom: 0.0625rem solid var(--border);\n  font-size: 0.56rem;\n  text-transform: uppercase;\n}\n.lista-faixas[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n  margin: 0;\n  padding: 0.65rem 1rem 1rem;\n  list-style: none;\n}\n.lista-faixas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  min-height: 4.25rem;\n  padding: 0.65rem 0.8rem;\n  background: var(--surface-muted);\n  border: 0.0625rem solid transparent;\n  border-radius: var(--radius);\n}\n.lista-faixas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  border-color: var(--border);\n}\n.numero-faixa[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 0.72rem;\n  font-weight: 760;\n  text-align: center;\n}\n.identificacao-faixa[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.22rem;\n}\n.identificacao-faixa[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.identificacao-faixa[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.identificacao-faixa[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.identificacao-faixa[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.61rem;\n}\n.seletor-versao[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-height: 2.35rem;\n  padding: 0.45rem 0.6rem;\n  font-size: 0.68rem;\n}\n.rotulo-acessivel[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n}\n.acoes-faixa[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.3rem;\n}\n.acoes-faixa[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 2rem;\n  min-height: 2rem;\n  padding: 0.3rem;\n  background: var(--surface);\n  color: var(--text-soft);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n}\n.acoes-faixa[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: var(--primary);\n  border-color: color-mix(in srgb, var(--primary) 30%, var(--border));\n}\n.acoes-faixa[_ngcontent-%COMP%]   .remover-faixa[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-danger-soft);\n  color: var(--danger);\n  border-color: var(--color-danger-border);\n}\n.adicionar-faixa[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: end;\n  gap: 1rem;\n  padding: 1rem;\n  background: var(--surface-muted);\n  border-top: 0.0625rem solid var(--border);\n}\n.adicionar-faixa[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.4rem;\n}\n.adicionar-faixa[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.61rem;\n}\n.adicionar-faixa[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 0.7rem;\n  font-weight: 740;\n}\n.sequencia-vazia[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 10rem;\n  place-content: center;\n  justify-items: center;\n  color: var(--text-muted);\n}\n.vazio-catalogo[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(12rem, 20rem) minmax(0, 1fr);\n  align-items: center;\n  gap: clamp(2rem, 7vw, 6rem);\n  min-height: 29rem;\n  padding: clamp(1.25rem, 4vw, 3rem);\n  background: var(--surface);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-grande);\n}\n.vazio-catalogo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 15ch;\n  margin: 0.4rem 0 0.75rem;\n  font-size: clamp(1.8rem, 5vw, 3.2rem);\n}\n.vazio-catalogo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.rotulo-menor) {\n  color: var(--text-soft);\n}\n.capa-vazia[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  aspect-ratio: 1;\n  place-items: center;\n  background: var(--primary);\n  color: var(--studio-on-brand, #fff);\n  border-radius: var(--radius);\n  box-shadow: 1.2rem 1.2rem 0 color-mix(in srgb, var(--primary) 13%, var(--surface-muted));\n}\n.capa-vazia[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.capa-vazia[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 0.58rem;\n}\n.capa-vazia[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  top: 1rem;\n  left: 1rem;\n}\n.capa-vazia[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  right: 1rem;\n  bottom: 1rem;\n}\n.topo-editor-focado[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  margin-bottom: 1rem;\n  padding: clamp(1rem, 3vw, 1.4rem);\n  background: var(--surface);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-grande);\n  box-shadow: var(--shadow-small);\n}\n.voltar-catalogo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: 0 0 100%;\n  align-items: center;\n  gap: 0.4rem;\n  width: max-content;\n  padding: 0;\n  background: transparent;\n  color: var(--text-muted);\n  border: 0;\n  font-size: 0.7rem;\n  font-weight: 740;\n}\n.voltar-catalogo[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.resumo-editor-focado[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 1rem;\n}\n.identificacao-editor[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0.25rem 0;\n  font-size: clamp(1.6rem, 5vw, 2.8rem);\n  line-height: 1;\n  letter-spacing: -0.045em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.acoes-resumo-editor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-left: auto;\n}\n.estados-editor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 0.35rem;\n}\n.estado-editor[_ngcontent-%COMP%] {\n  padding: 0.32rem 0.58rem;\n  background: var(--surface-muted);\n  color: var(--text-muted);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-round);\n  font-size: 0.58rem;\n  font-weight: 780;\n  text-transform: uppercase;\n}\n.estado-editor.estado-publicado[_ngcontent-%COMP%], \n.estado-editor.estado-casa[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--primary) 10%, var(--surface));\n  color: var(--primary);\n  border-color: color-mix(in srgb, var(--primary) 34%, var(--border));\n}\n.editor-focado[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.navegacao-editor[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.5rem;\n  padding: 0.75rem;\n  background: var(--surface-muted);\n  border-bottom: 0.0625rem solid var(--border);\n}\n.navegacao-editor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.7rem minmax(0, 1fr);\n  gap: 0.08rem 0.6rem;\n  min-width: 0;\n  padding: 0.72rem;\n  background: transparent;\n  color: var(--text-soft);\n  border: 0.0625rem solid transparent;\n  border-radius: var(--radius);\n  text-align: left;\n}\n.navegacao-editor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  grid-row: 1/3;\n  width: 1.7rem;\n  height: 1.7rem;\n  place-items: center;\n  background: var(--surface);\n  color: var(--text-muted);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-round);\n  font-size: 0.62rem;\n  font-weight: 780;\n}\n.navegacao-editor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-size: 0.73rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.navegacao-editor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--text-muted);\n  font-size: 0.58rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.navegacao-editor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.navegacao-editor[_ngcontent-%COMP%]   button.ativa[_ngcontent-%COMP%] {\n  background: var(--surface);\n  color: var(--text);\n  border-color: var(--border);\n}\n.navegacao-editor[_ngcontent-%COMP%]   button.ativa[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-small);\n}\n.navegacao-editor[_ngcontent-%COMP%]   button.ativa[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: var(--studio-on-brand, #fff);\n  border-color: var(--primary);\n}\n.aba-editor[_ngcontent-%COMP%] {\n  min-height: 24rem;\n}\n.painel-conteudo[_ngcontent-%COMP%], \n.area-compartilhamento[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n}\n.cabecalho-secao-editor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem 1rem 1rem;\n}\n.cabecalho-secao-editor[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0.35rem;\n  font-size: clamp(1.25rem, 3vw, 1.7rem);\n}\n.cabecalho-secao-editor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  max-width: 38rem;\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 0.7rem;\n}\n.cabecalho-secao-editor[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.68rem;\n  white-space: nowrap;\n}\n.painel-conteudo[_ngcontent-%COMP%]   .gerenciador-capa[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.observacoes-album[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.3rem;\n}\n.observacoes-album[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 0.58rem;\n  font-weight: 780;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.observacoes-album[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.sequencia-vazia[_ngcontent-%COMP%] {\n  gap: 0.35rem;\n}\n.sequencia-vazia[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text);\n}\n.sequencia-vazia[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.7rem;\n}\n.todas-faixas-adicionadas[_ngcontent-%COMP%] {\n  max-width: 15rem;\n  color: var(--text-muted);\n  font-size: 0.65rem;\n  text-align: right;\n}\n.aba-editor.painel-publicacao[_ngcontent-%COMP%] {\n  margin: 0;\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.cabecalho-publicacao[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.cabecalho-publicacao[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0.35rem;\n  font-size: clamp(1.25rem, 3vw, 1.7rem);\n}\n.cabecalho-publicacao[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 0.7rem;\n}\n.grade-compartilhamento[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n  padding: 0 1rem;\n}\n.grade-compartilhamento[_ngcontent-%COMP%]   .painel-cliente[_ngcontent-%COMP%], \n.painel-compartilhamento-publico[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-content: start;\n  align-items: start;\n  gap: 1rem;\n  margin: 0;\n  padding: 1rem;\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-grande);\n}\n.painel-compartilhamento-publico[_ngcontent-%COMP%] {\n  background: var(--surface);\n}\n.icone-envio-publico[_ngcontent-%COMP%] {\n  display: grid;\n  width: 2.5rem;\n  height: 2.5rem;\n  flex: 0 0 auto;\n  place-items: center;\n  background: var(--surface-muted);\n  color: var(--primary);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n}\n.acoes-compartilhamento-publico[_ngcontent-%COMP%], \n.publicacao-indisponivel[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  padding-top: 0.85rem;\n  border-top: 0.0625rem solid var(--border);\n}\n.acoes-compartilhamento-publico[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.acoes-compartilhamento-publico[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 2.4rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: var(--radius);\n  font-size: 0.67rem;\n  font-weight: 750;\n}\n.publicacao-indisponivel[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: start;\n  gap: 0.7rem;\n}\n.publicacao-indisponivel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 0.68rem;\n}\n.acoes-cartao[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) auto;\n}\n@keyframes _ngcontent-%COMP%_girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 64rem) {\n  .grade-compartilhamento[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cabecalho-faixas[_ngcontent-%COMP%], \n   .lista-faixas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    grid-template-columns: 2rem minmax(9rem, 1fr) minmax(8rem, 12rem);\n  }\n  .acoes-faixa[_ngcontent-%COMP%] {\n    grid-column: 2/-1;\n  }\n}\n@media (max-width: 52rem) {\n  .grade-albuns[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .painel-cliente[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .botao-renovar-link[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n@media (max-width: 48rem) {\n  .cabecalho-pagina[_ngcontent-%COMP%], \n   .gerenciador-capa[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .cabecalho-pagina[_ngcontent-%COMP%]   .botao-principal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .campos-album[_ngcontent-%COMP%], \n   .campos-publicacao[_ngcontent-%COMP%], \n   .opcoes-publicacao[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .campo-largo[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .topo-editor[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .topo-editor-focado[_ngcontent-%COMP%] {\n    align-items: stretch;\n  }\n  .resumo-editor-focado[_ngcontent-%COMP%], \n   .acoes-resumo-editor[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .acoes-resumo-editor[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    margin-left: 0;\n  }\n  .navegacao-editor[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(10rem, 1fr));\n    overflow-x: auto;\n  }\n  .acoes-topo-editor[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n  }\n  .cabecalho-faixas[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .lista-faixas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    grid-template-columns: 2rem minmax(0, 1fr);\n  }\n  .seletor-versao[_ngcontent-%COMP%], \n   .acoes-faixa[_ngcontent-%COMP%] {\n    grid-column: 2;\n  }\n  .acoes-faixa[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 36rem) {\n  .grade-albuns[_ngcontent-%COMP%], \n   .vazio-catalogo[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .acoes-cartao[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) auto;\n  }\n  .acoes-cartao[_ngcontent-%COMP%]   .acao-perigo[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .acoes-resumo-editor[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .estados-editor[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n  .grade-compartilhamento[_ngcontent-%COMP%]   .painel-cliente[_ngcontent-%COMP%], \n   .painel-compartilhamento-publico[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .acoes-cliente[_ngcontent-%COMP%], \n   .acoes-compartilhamento[_ngcontent-%COMP%], \n   .acoes-compartilhamento-publico[_ngcontent-%COMP%], \n   .acoes-capa[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .acoes-cliente[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .acoes-cliente[_ngcontent-%COMP%]   .seletor-capa[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n   .acoes-compartilhamento[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .acoes-compartilhamento[_ngcontent-%COMP%]   .seletor-capa[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n   .acoes-compartilhamento-publico[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .acoes-compartilhamento-publico[_ngcontent-%COMP%]   .seletor-capa[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n   .acoes-capa[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .acoes-capa[_ngcontent-%COMP%]   .seletor-capa[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .adicionar-faixa[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .controle-casa[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .controle-casa[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .acoes-formulario[_ngcontent-%COMP%], \n   .acoes-publicacao[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .acoes-formulario[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .acoes-publicacao[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%] {\n    transition-duration: 0.01ms !important;\n  }\n  .carregador[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Albuns, [{
    type: Component,
    args: [{ selector: "app-albuns", standalone: true, imports: [ReactiveFormsModule, RouterLink], template: `<main class="pagina">
  @if (albumAberto(); as album) {
  <header class="topo-editor topo-editor-focado">
    <button type="button" class="voltar-catalogo" (click)="fecharAlbum()">
      <span aria-hidden="true">\u2190</span>
      Voltar aos \xE1lbuns
    </button>

    <div class="resumo-editor-focado">
      <div class="miniatura-editor">
        @if (capaAlbum(album); as capa) {
        <img [src]="capa" [alt]="'Capa de ' + album.nome" />
        } @else { {{ iniciaisProjeto(album) }} }
      </div>

      <div class="identificacao-editor">
        <p class="rotulo-menor">EDITANDO TRABALHO</p>
        <h1>{{ album.nome }}</h1>
        <span>
          {{ album.projeto.nome }} \xB7
          {{ rotuloQuantidadeFaixas(album.faixas.length) }}
        </span>
      </div>
    </div>

    <div class="acoes-resumo-editor">
      <div class="estados-editor" aria-label="Estado do trabalho">
        <span
          class="estado-editor"
          [class.estado-publicado]="album.publico_na_landing"
        >
          @if (album.publico_na_landing) { Publicado } @else { Rascunho }
        </span>

        @if (album.publico_na_casa) {
        <span class="estado-editor estado-casa">Na Casa</span>
        }
      </div>

      <button
        type="button"
        class="botao-secundario"
        (click)="editarAlbum(album)"
      >
        Editar informa\xE7\xF5es
      </button>
    </div>
  </header>
  } @else {
  <header class="cabecalho-pagina">
    <div>
      <p class="secao">CAT\xC1LOGO MUSICAL</p>
      <h1>\xC1lbuns</h1>
      <p>Monte sequ\xEAncias com as vers\xF5es que j\xE1 est\xE3o no acervo.</p>
    </div>

    <button
      type="button"
      class="botao-principal"
      [disabled]="dadosProjetos.projetos().length === 0"
      (click)="abrirNovoAlbum(projetoFiltradoId() ?? '')"
    >
      <span aria-hidden="true">\uFF0B</span>
      Novo \xE1lbum
    </button>
  </header>
  }

  @if (formularioAberto()) {
  <section id="formulario-album" class="painel formulario-album">
    <header class="titulo-formulario">
      <div>
        <p class="rotulo-menor">
          @if (albumEditandoId()) { EDITANDO \xC1LBUM } @else { NOVA SEQU\xCANCIA }
        </p>
        <h2>
          @if (albumEditandoId()) { Ajustar informa\xE7\xF5es } @else { Criar \xE1lbum }
        </h2>
      </div>

      <button
        type="button"
        class="botao-icone"
        aria-label="Fechar formul\xE1rio"
        [disabled]="salvandoAlbum()"
        (click)="cancelarFormulario()"
      >
        \xD7
      </button>
    </header>

    <form [formGroup]="formularioAlbum" (ngSubmit)="salvarAlbum()">
      <div class="campos-album">
        <label>
          <span>Projeto art\xEDstico</span>
          <select formControlName="projeto_id">
            <option value="">Selecione um projeto</option>
            @for (projeto of dadosProjetos.projetos(); track projeto.id) {
            <option [value]="projeto.id">{{ projeto.nome }}</option>
            }
          </select>
          @if (
            formularioAlbum.controls.projeto_id.touched &&
            formularioAlbum.controls.projeto_id.invalid
          ) {
          <small>Selecione o projeto art\xEDstico.</small>
          }
        </label>

        <label>
          <span>Nome do \xE1lbum</span>
          <input
            type="text"
            formControlName="nome"
            placeholder="Ex.: Depois da Meia-Noite"
          />
          @if (
            formularioAlbum.controls.nome.touched &&
            formularioAlbum.controls.nome.invalid
          ) {
          <small>Informe o nome do \xE1lbum.</small>
          }
        </label>

        <label class="campo-largo">
          <span>Observa\xE7\xF5es internas</span>
          <textarea
            formControlName="observacoes"
            rows="3"
            placeholder="Conceito, momento do projeto ou alguma refer\xEAncia opcional"
          ></textarea>
        </label>
      </div>

      <div class="acoes-formulario">
        <button
          type="button"
          class="botao-secundario"
          [disabled]="salvandoAlbum()"
          (click)="cancelarFormulario()"
        >
          Cancelar
        </button>
        <button
          type="submit"
          class="botao-principal"
          [disabled]="salvandoAlbum()"
        >
          @if (salvandoAlbum()) { Salvando... } @else if (albumEditandoId()) {
          Salvar altera\xE7\xF5es } @else { Criar \xE1lbum }
        </button>
      </div>
    </form>
  </section>
  }

  @if (erroOperacao()) {
  <p class="mensagem mensagem-erro">{{ erroOperacao() }}</p>
  }
  @if (mensagemOperacao()) {
  <p class="mensagem mensagem-sucesso">{{ mensagemOperacao() }}</p>
  }

  @if (albumAberto(); as album) {
  <section id="editor-sequencia" class="editor-sequencia editor-focado">
    <nav class="navegacao-editor" aria-label="\xC1reas da edi\xE7\xE3o">
      <button
        type="button"
        [class.ativa]="abaEditor() === 'conteudo'"
        [attr.aria-current]="abaEditor() === 'conteudo' ? 'page' : null"
        (click)="selecionarAba('conteudo')"
      >
        <span>1</span>
        <strong>Conte\xFAdo</strong>
        <small>Faixas, vers\xF5es e capa</small>
      </button>

      <button
        type="button"
        [class.ativa]="abaEditor() === 'publicacao'"
        [attr.aria-current]="abaEditor() === 'publicacao' ? 'page' : null"
        (click)="selecionarAba('publicacao')"
      >
        <span>2</span>
        <strong>P\xE1gina p\xFAblica</strong>
        <small>Apresenta\xE7\xE3o e permiss\xF5es</small>
      </button>

      <button
        type="button"
        [class.ativa]="abaEditor() === 'compartilhar'"
        [attr.aria-current]="abaEditor() === 'compartilhar' ? 'page' : null"
        (click)="selecionarAba('compartilhar')"
      >
        <span>3</span>
        <strong>Compartilhar</strong>
        <small>Links privados e p\xFAblicos</small>
      </button>
    </nav>

    @if (abaEditor() === 'conteudo') {
    <section class="aba-editor painel-conteudo">
      <header class="cabecalho-secao-editor">
        <div>
          <p class="rotulo-menor">CONTE\xDADO DO TRABALHO</p>
          <h2>Organize as faixas</h2>
          <p>
            Escolha a sequ\xEAncia e a vers\xE3o que representa cada faixa neste
            trabalho.
          </p>
        </div>
        <span>{{ rotuloQuantidadeFaixas(album.faixas.length) }}</span>
      </header>

      <div class="gerenciador-capa">
        <div class="estado-capa">
          <span aria-hidden="true">\u25A3</span>
          <div>
            <strong>{{ origemCapa(album) }}</strong>
            <small>
              Sem uma capa pr\xF3pria, o Fleiva usa a capa do projeto
              automaticamente.
            </small>
          </div>
        </div>

        <div class="acoes-capa">
          <label
            class="seletor-capa"
            [class.desativado]="
              enviandoCapaId() !== null || removendoCapaId() !== null
            "
          >
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
              [disabled]="
                enviandoCapaId() !== null || removendoCapaId() !== null
              "
              (change)="selecionarCapa(album, $event)"
            />
            <span>
              @if (enviandoCapaId() === album.id) { Enviando... } @else if
              (album.capa_caminho) { Trocar capa } @else { Adicionar capa }
            </span>
          </label>

          @if (album.capa_caminho) {
          <button
            type="button"
            class="botao-herdar-capa"
            [disabled]="
              enviandoCapaId() !== null || removendoCapaId() !== null
            "
            (click)="usarCapaProjeto(album)"
          >
            @if (removendoCapaId() === album.id) { Removendo... } @else if
            (album.projeto.capa_caminho) { Usar capa do projeto } @else { Usar
            capa padr\xE3o }
          </button>
          }
        </div>
      </div>

      @if (album.observacoes) {
      <div class="observacoes-album">
        <span>Observa\xE7\xF5es internas</span>
        <p>{{ album.observacoes }}</p>
      </div>
      }

      @if (album.faixas.length === 0) {
      <div class="sequencia-vazia">
        <span aria-hidden="true">\u266A</span>
        <strong>Este trabalho ainda n\xE3o tem faixas.</strong>
        <p>Adicione a primeira faixa do projeto para come\xE7ar a sequ\xEAncia.</p>
      </div>
      } @else {
      <div class="cabecalho-faixas" aria-hidden="true">
        <span>#</span>
        <span>Faixa</span>
        <span>Vers\xE3o usada</span>
        <span>A\xE7\xF5es</span>
      </div>

      <ol class="lista-faixas">
        @for (
          item of album.faixas;
          track item.id;
          let primeiro = $first;
          let ultimo = $last
        ) {
        <li>
          <span class="numero-faixa">{{ item.ordem }}</span>
          <div class="identificacao-faixa">
            <strong>{{ item.versao.faixa.titulo }}</strong>
            <span>
              {{ item.versao.versao }} \xB7 {{ item.versao.nome_arquivo }}
            </span>
          </div>

          <label class="seletor-versao">
            <span class="rotulo-acessivel">Vers\xE3o usada</span>
            <select
              [disabled]="alterandoVersaoId() === item.id"
              (change)="trocarVersao(item, $event)"
            >
              @for (
                versao of dadosAlbuns.versoesDaFaixa(item.versao.faixa_id);
                track versao.id
              ) {
              <option
                [value]="versao.id"
                [selected]="versao.id === item.versao_id"
              >
                {{ versao.versao }}
                @if (versao.id === item.versao.faixa.versao_principal_id) {
                \xB7 Principal }
              </option>
              }
            </select>
          </label>

          <div class="acoes-faixa">
            <button
              type="button"
              aria-label="Mover faixa para cima"
              [disabled]="primeiro || ordenandoAlbumId() === album.id"
              (click)="moverFaixa(album, item.id, -1)"
            >\u2191</button>
            <button
              type="button"
              aria-label="Mover faixa para baixo"
              [disabled]="ultimo || ordenandoAlbumId() === album.id"
              (click)="moverFaixa(album, item.id, 1)"
            >\u2193</button>
            <button
              type="button"
              class="remover-faixa"
              [disabled]="removendoFaixaId() === item.id"
              (click)="removerFaixa(item)"
            >
              @if (removendoFaixaId() === item.id) { ... } @else { Remover }
            </button>
          </div>
        </li>
        }
      </ol>
      }

      <form
        class="adicionar-faixa"
        [formGroup]="formularioFaixa"
        (ngSubmit)="adicionarFaixa(album)"
      >
        <div>
          <label>
            <span>Adicionar vers\xE3o do projeto</span>
            <select formControlName="versao_id">
              <option value="">Selecione uma vers\xE3o</option>
              @for (versao of versoesDisponiveis(album); track versao.id) {
              <option [value]="versao.id">
                {{ versao.faixa.titulo }} \xB7 {{ versao.versao }}
              </option>
              }
            </select>
          </label>
          <small>
            A mesma faixa pode aparecer mais de uma vez com vers\xF5es diferentes.
          </small>
        </div>

        @if (versoesDisponiveis(album).length > 0) {
        <button
          type="submit"
          class="botao-claro"
          [disabled]="adicionandoFaixa()"
        >
          @if (adicionandoFaixa()) { Adicionando... } @else { Adicionar \xE0
          sequ\xEAncia }
        </button>
        } @else if (album.faixas.length > 0) {
        <span class="todas-faixas-adicionadas">
          Todas as vers\xF5es dispon\xEDveis j\xE1 est\xE3o neste trabalho.
        </span>
        } @else {
        <a routerLink="/faixas">Enviar primeira vers\xE3o</a>
        }
      </form>
    </section>
    }

    @if (abaEditor() === 'publicacao') {
    <section
      class="aba-editor painel-publicacao"
      [class.publicado]="album.publico_na_landing"
    >
      <header class="cabecalho-publicacao">
        @if (!albumPertenceAoUsuario(album)) {
<div class="controle-casa">
  <div>
    <p class="rotulo-menor">SUA P\xC1GINA</p>
    <strong>Publicar este trabalho na sua p\xE1gina</strong>
    <span>
      Este trabalho foi criado por outro usu\xE1rio do projeto.
      Voc\xEA pode public\xE1-lo na sua p\xE1gina p\xFAblica tamb\xE9m.
    </span>
  </div>
  <button
    type="button"
    [disabled]="publicandoNaMinhaPaginaId() === album.id"
    (click)="publicarNaMinhaPagina(album)"
  >
    @if (publicandoNaMinhaPaginaId() === album.id) { Publicando... }
    @else { Publicar na minha p\xE1gina }
  </button>
</div>
}
        <div>
          <p class="rotulo-menor">P\xC1GINA P\xDABLICA</p>
          <h2>Apresente este trabalho</h2>
          <p>Defina o que aparece e quais a\xE7\xF5es ser\xE3o permitidas.</p>
        </div>
        <span
          class="situacao-publicacao"
          [class.publicada]="album.publico_na_landing"
        >
          @if (album.publico_na_landing) { Publicado } @else { Rascunho }
        </span>
      </header>

      <div class="resumo-publicacao">
        <div class="capa-publicacao">
          @if (capaAlbum(album); as capa) {
          <img [src]="capa" [alt]="'Capa de ' + album.nome" />
          } @else { <span>{{ iniciaisProjeto(album) }}</span> }
        </div>
        <div>
          <strong>{{ album.nome }}</strong>
          <span>{{ album.projeto.nome }}</span>
          <small>{{ rotuloQuantidadeFaixas(album.faixas.length) }}</small>
        </div>
      </div>

      @if (album.publico_na_landing) {
      <div class="controle-casa" [class.na-casa]="album.publico_na_casa">
        <div>
          <p class="rotulo-menor">CASA FL\xCAIVA</p>
          <strong>
            @if (album.publico_na_casa) { Este trabalho est\xE1 na Casa } @else {
            Exibir este trabalho na Casa }
          </strong>
          <span>
            {{ dadosAlbuns.totalTrabalhosNaCasa() }} de
            {{ dadosAlbuns.limiteTrabalhosCasa() }} trabalhos selecionados.
          </span>
        </div>
        <button
          type="button"
          [class.remover-da-casa]="album.publico_na_casa"
          [disabled]="
            alterandoCasaAlbumId() !== null ||
            publicandoAlbumId() !== null ||
            despublicandoAlbumId() !== null ||
            (!album.publico_na_casa &&
              !dadosAlbuns.podeAdicionarTrabalhoNaCasa())
          "
          (click)="alternarExibicaoNaCasa(album)"
        >
          @if (alterandoCasaAlbumId() === album.id) { Salvando... } @else if
          (album.publico_na_casa) { Remover da Casa } @else { Exibir na Casa }
        </button>
        @if (
          !album.publico_na_casa &&
          !dadosAlbuns.podeAdicionarTrabalhoNaCasa()
        ) {
        <small>Remova outro trabalho da Casa para selecionar este.</small>
        }
      </div>
      }

      @if (album.faixas.length === 0) {
      <div class="aviso-publicacao">
        <strong>O trabalho ainda n\xE3o pode ser publicado.</strong>
        <p>Adicione pelo menos uma faixa na \xE1rea Conte\xFAdo.</p>
      </div>
      }

      <form
        class="formulario-publicacao"
        [formGroup]="formularioPublicacao"
        (ngSubmit)="publicarAlbum(album)"
      >
        <div class="campos-publicacao">
          <label>
            <span>Tipo de trabalho</span>
            <input
              type="text"
              formControlName="tipo_publico"
              list="tipos-trabalho"
              placeholder="Ex.: \xC1lbum, beat tape, sample pack"
              [disabled]="
                album.faixas.length === 0 ||
                publicandoAlbumId() !== null ||
                despublicandoAlbumId() !== null
              "
            />
            <small>Use o nome que faz sentido para este material.</small>
            <datalist id="tipos-trabalho">
              <option value="\xC1lbum"></option>
              <option value="EP"></option>
              <option value="Single"></option>
              <option value="Mixtape"></option>
              <option value="Beat tape"></option>
              <option value="Cat\xE1logo de beats"></option>
              <option value="Sample pack"></option>
              <option value="Loop pack"></option>
              <option value="Stem pack"></option>
              <option value="Acapella pack"></option>
              <option value="Demo"></option>
            </datalist>
          </label>

          <label>
            <span>Descri\xE7\xE3o p\xFAblica</span>
            <textarea
              formControlName="descricao_publica"
              rows="4"
              placeholder="Apresente o trabalho para quem visitar a p\xE1gina"
              [disabled]="
                album.faixas.length === 0 ||
                publicandoAlbumId() !== null ||
                despublicandoAlbumId() !== null
              "
            ></textarea>
            <small>As observa\xE7\xF5es internas nunca aparecem no site.</small>
          </label>
        </div>

        <div class="titulo-permissoes">
          <strong>Permiss\xF5es dos arquivos</strong>
          <span>
            A capa, os nomes e a ordem podem ser publicados sem liberar \xE1udio
            ou download.
          </span>
        </div>

        <div class="opcoes-publicacao">
          <label>
            <input
              type="checkbox"
              formControlName="reproducao_publica"
              [disabled]="
                album.faixas.length === 0 ||
                publicandoAlbumId() !== null ||
                despublicandoAlbumId() !== null
              "
            />
            <span>
              <strong>Permitir reprodu\xE7\xE3o</strong>
              <small>Visitantes poder\xE3o ouvir os arquivos escolhidos.</small>
            </span>
          </label>
          <label>
            <input
              type="checkbox"
              formControlName="download_publico"
              [disabled]="
                album.faixas.length === 0 ||
                publicandoAlbumId() !== null ||
                despublicandoAlbumId() !== null
              "
            />
            <span>
              <strong>Permitir download</strong>
              <small>Visitantes poder\xE3o baixar os arquivos selecionados.</small>
            </span>
          </label>
        </div>

        @if (formularioPublicacao.controls.reproducao_publica.value) {
        <p class="alerta-exposicao">
          \xC1udio reproduzido publicamente pode ser capturado por ferramentas
          externas. Para materiais protegidos, use uma pr\xE9via ou vers\xE3o com tag.
        </p>
        }
        @if (formularioPublicacao.controls.download_publico.value) {
        <p class="alerta-download">
          O download permitir\xE1 acesso ao arquivo selecionado em cada faixa.
        </p>
        }

        <label class="confirmacao-publicacao">
          <input
            type="checkbox"
            formControlName="confirmacao"
            [disabled]="
              album.faixas.length === 0 ||
              publicandoAlbumId() !== null ||
              despublicandoAlbumId() !== null
            "
          />
          <span>Revisei o conte\xFAdo e as permiss\xF5es deste trabalho.</span>
        </label>

        <footer class="acoes-publicacao">
          @if (album.publico_na_landing) {
          <button
            type="button"
            class="botao-despublicar"
            [disabled]="
              publicandoAlbumId() !== null || despublicandoAlbumId() !== null
            "
            (click)="despublicarAlbum(album)"
          >
            @if (despublicandoAlbumId() === album.id) { Despublicando... }
            @else { Despublicar }
          </button>
          }
          <button
            type="submit"
            class="botao-publicar"
            [disabled]="
              album.faixas.length === 0 ||
              formularioPublicacao.invalid ||
              publicandoAlbumId() !== null ||
              despublicandoAlbumId() !== null
            "
          >
            @if (publicandoAlbumId() === album.id) { Publicando... } @else if
            (album.publico_na_landing) { Atualizar publica\xE7\xE3o } @else { Publicar
            no site }
          </button>
        </footer>
      </form>
    </section>
    }

    @if (abaEditor() === 'compartilhar') {
    <section class="aba-editor area-compartilhamento">
      <header class="cabecalho-secao-editor">
        <div>
          <p class="rotulo-menor">DISTRIBUI\xC7\xC3O</p>
          <h2>Compartilhe o trabalho</h2>
          <p>Escolha entre um envio reservado e a p\xE1gina p\xFAblica.</p>
        </div>
      </header>

      <div class="grade-compartilhamento">
        <section class="painel-cliente">
          <div class="identificacao-envio-cliente">
            <span class="icone-envio-cliente" aria-hidden="true">\u2197</span>
            <div>
              <p class="rotulo-menor">LINK PRIVADO</p>
              <h3>Enviar para cliente</h3>
              <p>Somente quem receber o endere\xE7o poder\xE1 acessar o trabalho.</p>
            </div>
          </div>
          <span
            class="situacao-link-cliente"
            [class.link-ativo]="album.token_compartilhamento"
          >
            @if (album.token_compartilhamento) { Link ativo } @else { N\xE3o gerado }
          </span>

          <div class="acoes-cliente">
            <button
              type="button"
              class="botao-enviar-cliente"
              [disabled]="
                album.faixas.length === 0 ||
                copiandoLinkNaoListadoId() !== null ||
                renovandoLinkNaoListadoId() !== null ||
                desativandoLinkNaoListadoId() !== null
              "
              (click)="enviarParaCliente(album)"
            >
              @if (copiandoLinkNaoListadoId() === album.id) { Preparando... }
              @else { Enviar pelo WhatsApp }
            </button>
            <button
              type="button"
              class="botao-link-cliente"
              [disabled]="
                album.faixas.length === 0 ||
                copiandoLinkNaoListadoId() !== null ||
                renovandoLinkNaoListadoId() !== null ||
                desativandoLinkNaoListadoId() !== null
              "
              (click)="copiarLinkNaoListado(album)"
            >
              <span aria-hidden="true">\u29C9</span>
              Copiar link privado
            </button>

            @if (album.token_compartilhamento) {
            <button
              type="button"
              class="botao-renovar-link"
              [disabled]="
                copiandoLinkNaoListadoId() !== null ||
                renovandoLinkNaoListadoId() !== null ||
                desativandoLinkNaoListadoId() !== null
              "
              (click)="renovarLinkNaoListado(album)"
            >
              @if (renovandoLinkNaoListadoId() === album.id) { Renovando... }
              @else { Renovar link }
            </button>
            <button
              type="button"
              class="botao-link-cliente"
              [disabled]="
                copiandoLinkNaoListadoId() !== null ||
                renovandoLinkNaoListadoId() !== null ||
                desativandoLinkNaoListadoId() !== null
              "
              (click)="desativarLinkNaoListado(album)"
            >
              @if (desativandoLinkNaoListadoId() === album.id) { Desativando...
              } @else { Desativar link }
            </button>
            }
          </div>

          @if (album.faixas.length === 0) {
          <small class="aviso-envio-cliente">
            Adicione pelo menos uma faixa antes de compartilhar.
          </small>
          }
        </section>

        <section class="painel-compartilhamento-publico">
          <div class="identificacao-envio-cliente">
            <span class="icone-envio-publico" aria-hidden="true">\u25CE</span>
            <div>
              <p class="rotulo-menor">P\xC1GINA P\xDABLICA</p>
              <h3>Compartilhar publica\xE7\xE3o</h3>
              <p>Use o endere\xE7o p\xFAblico do trabalho no Fleiva e na Casa.</p>
            </div>
          </div>
          <span
            class="situacao-publicacao"
            [class.publicada]="album.publico_na_landing"
          >
            @if (album.publico_na_landing) { Publicado } @else { Indispon\xEDvel }
          </span>

          @if (album.publico_na_landing) {
          <div class="acoes-compartilhamento-publico">
            <button
              type="button"
              class="botao-copiar-link"
              (click)="abrirPaginaPublica(album)"
            >
              <span aria-hidden="true">\u2197</span>
              Abrir p\xE1gina
            </button>
            <button
              type="button"
              class="botao-copiar-link"
              [disabled]="copiandoLinkId() !== null"
              (click)="copiarLink(album)"
            >
              <span aria-hidden="true">\u29C9</span>
              @if (copiandoLinkId() === album.id) { Copiando... } @else { Copiar
              link }
            </button>
            <button
              type="button"
              class="botao-whatsapp"
              (click)="enviarWhatsAppPublico(album)"
            >WhatsApp</button>
          </div>
          } @else {
          <div class="publicacao-indisponivel">
            <p>Publique o trabalho antes de compartilhar o endere\xE7o p\xFAblico.</p>
            <button
              type="button"
              class="botao-secundario"
              (click)="selecionarAba('publicacao')"
            >
              Configurar p\xE1gina p\xFAblica
            </button>
          </div>
          }
        </section>
      </div>
    </section>
    }
  </section>
  } @else {
  @if (!dadosProjetos.carregando() && dadosProjetos.projetos().length === 0) {
  <section class="aviso-projetos">
    <div>
      <strong>Comece por um projeto art\xEDstico</strong>
      <p>Todo \xE1lbum pertence a um artista, banda ou projeto.</p>
    </div>
    <a routerLink="/projetos">Ir para projetos</a>
  </section>
  }

  @if (dadosAlbuns.carregando()) {
  <section class="estado">
    <span class="carregador" aria-hidden="true"></span>
    <p>Organizando o cat\xE1logo...</p>
  </section>
  } @else if (dadosAlbuns.erro()) {
  <section class="estado estado-erro">
    <h2>N\xE3o foi poss\xEDvel abrir os \xE1lbuns</h2>
    <p>{{ dadosAlbuns.erro() }}</p>
    <button type="button" class="botao-secundario" (click)="carregarDados()">
      Tentar novamente
    </button>
  </section>
  } @else if (dadosAlbuns.albuns().length === 0) {
  <section class="vazio-catalogo">
    <div class="capa-vazia" aria-hidden="true">
      <span>01</span><i></i><strong>FLEIVA</strong>
    </div>
    <div>
      <p class="rotulo-menor">PRIMEIRA SEQU\xCANCIA</p>
      <h2>Transforme faixas soltas em um trabalho.</h2>
      <p>
        Use os arquivos que j\xE1 est\xE3o no Fleiva para testar a ordem de um \xE1lbum,
        EP, demo ou mixtape.
      </p>
      <button
        type="button"
        class="botao-principal"
        [disabled]="dadosProjetos.projetos().length === 0"
        (click)="abrirNovoAlbum(projetoFiltradoId() ?? '')"
      >Criar primeiro \xE1lbum</button>
    </div>
  </section>
  } @else {
  <section class="catalogo">
    <header class="cabecalho-catalogo">
      <div>
        <p class="rotulo-menor">DISCOGRAFIA</p>
        <h2>
          @if (projetoFiltrado(); as projeto) { Trabalhos de {{ projeto.nome }}
          } @else { Trabalhos em constru\xE7\xE3o }
        </h2>
        @if (projetoFiltrado(); as projeto) {
        <span class="acoes-filtro">
          <a [routerLink]="['/projetos', projeto.id]">Voltar ao projeto</a>
          <a routerLink="/albuns">Ver todos os trabalhos</a>
        </span>
        }
      </div>
      <span>{{ albunsVisiveis().length }}</span>
    </header>

    @if (albunsVisiveis().length === 0) {
    <section class="filtro-vazio">
      <strong>Nenhum trabalho montado para este projeto.</strong>
      <p>Crie um \xE1lbum, EP, mixtape ou colet\xE2nea para este projeto.</p>
      <button
        type="button"
        class="botao-principal"
        (click)="abrirNovoAlbum(projetoFiltradoId() ?? '')"
      >Montar primeiro trabalho</button>
    </section>
    } @else {
    <div class="grade-albuns">
      @for (album of albunsVisiveis(); track album.id) {
      <article class="cartao-album">
        <div class="capa-album">
          @if (capaAlbum(album); as capa) {
          <img [src]="capa" [alt]="'Capa de ' + album.nome" />
          } @else {
          <strong>{{ iniciaisProjeto(album) }}</strong>
          <small>{{ album.projeto.nome }}</small>
          }
          <span
            class="estado-cartao"
            [class.estado-publicado]="album.publico_na_landing"
          >
            @if (album.publico_na_landing) { P\xFAblico } @else { Rascunho }
          </span>
        </div>

        <div class="corpo-cartao">
          <div class="dados-album">
            <strong>{{ album.nome }}</strong>
            <small>{{ album.projeto.nome }}</small>
            <span class="metadados-cartao">
              <em>{{ rotuloQuantidadeFaixas(album.faixas.length) }}</em>
              @if (album.tipo_publico) { <em>{{ album.tipo_publico }}</em> }
              @if (album.publico_na_casa) {
              <em class="marcador-casa">Na Casa</em>
              }
            </span>
          </div>
          <button
            type="button"
            class="botao-abrir-album"
            (click)="abrirAlbum(album.id)"
          >
            <span>Abrir edi\xE7\xE3o</span><span aria-hidden="true">\u2192</span>
          </button>
        </div>

        <div class="acoes-cartao">
          <button
            type="button"
            class="acao-editar"
            (click)="editarAlbum(album)"
          >
            <span aria-hidden="true">\u270E</span>
            Editar informa\xE7\xF5es
          </button>
          <button
            type="button"
            class="acao-perigo"
            aria-label="Excluir \xE1lbum"
            [disabled]="excluindoAlbumId() === album.id"
            (click)="excluirAlbum(album)"
          >
            @if (excluindoAlbumId() === album.id) { Excluindo... } @else {
            <span aria-hidden="true">\xD7</span> Excluir }
          </button>
        </div>
      </article>
      }
    </div>
    }
  </section>
  }
  }
</main>
`, styles: ['/* apps/studio-dash/src/app/paginas/albuns/albuns.scss */\n:host {\n  display: block;\n  min-height: 100%;\n  color: var(--text);\n}\n.pagina {\n  width: min(78rem, 100% - 2rem);\n  margin: 0 auto;\n  padding: 2.25rem 0 5rem;\n}\n.cabecalho-pagina {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n.cabecalho-pagina h1 {\n  margin: 0.45rem 0 0.6rem;\n  font-size: clamp(2.7rem, 6vw, 4.8rem);\n  font-weight: 680;\n  line-height: 0.92;\n  letter-spacing: -0.065em;\n}\n.cabecalho-pagina p:not(.secao) {\n  max-width: 38rem;\n  margin: 0;\n  color: var(--text-soft);\n}\n.secao,\n.rotulo-menor {\n  margin: 0;\n  color: var(--primary);\n  font-size: 0.64rem;\n  font-weight: 780;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n}\nbutton {\n  cursor: pointer;\n  transition: 150ms ease;\n}\nbutton:disabled {\n  cursor: wait;\n  opacity: 0.52;\n}\n.botao-principal,\n.botao-secundario,\n.botao-claro {\n  display: inline-flex;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.45rem;\n  padding: 0.62rem 1rem;\n  border-radius: var(--radius);\n  font-size: 0.76rem;\n  font-weight: 760;\n}\n.botao-principal,\n.botao-claro {\n  background: var(--primary);\n  color: var(--studio-on-brand, #fff);\n  border: 0.0625rem solid var(--primary);\n  box-shadow: 0 0.55rem 1.3rem color-mix(in srgb, var(--primary) 18%, transparent);\n}\n.botao-principal:hover:not(:disabled),\n.botao-claro:hover:not(:disabled) {\n  filter: brightness(0.95);\n  transform: translateY(-0.0625rem);\n}\n.botao-secundario {\n  background: var(--surface);\n  color: var(--text);\n  border: 0.0625rem solid var(--border);\n}\n.botao-secundario:hover:not(:disabled) {\n  background: var(--surface-muted);\n}\n.painel {\n  margin-bottom: 1rem;\n  padding: clamp(1rem, 3vw, 1.5rem);\n  background: var(--surface);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-grande);\n  box-shadow: var(--shadow-soft);\n}\n.formulario-album {\n  scroll-margin-top: 1rem;\n  border-top: 0.2rem solid var(--primary);\n}\n.titulo-formulario,\n.cabecalho-catalogo,\n.topo-editor {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.titulo-formulario {\n  margin-bottom: 1.25rem;\n}\n.titulo-formulario h2 {\n  margin: 0.25rem 0 0;\n  font-size: 1.25rem;\n}\n.botao-icone,\n.botao-fechar-editor {\n  display: grid;\n  width: 2.5rem;\n  height: 2.5rem;\n  flex: 0 0 auto;\n  place-items: center;\n  padding: 0;\n  background: var(--surface);\n  color: var(--text-soft);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-round);\n  font-size: 1.2rem;\n}\n.botao-icone:hover:not(:disabled),\n.botao-fechar-editor:hover:not(:disabled) {\n  background: var(--surface-muted);\n  color: var(--text);\n}\n.campos-album {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n.campo-largo {\n  grid-column: 1/-1;\n}\nlabel {\n  display: grid;\n  gap: 0.4rem;\n}\nlabel > span {\n  font-size: 0.76rem;\n  font-weight: 730;\n}\nlabel small {\n  color: var(--danger);\n}\ninput,\nselect,\ntextarea {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0.68rem 0.75rem;\n  background: var(--surface);\n  color: var(--text);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n  outline: none;\n}\ninput:focus,\nselect:focus,\ntextarea:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 0.18rem color-mix(in srgb, var(--primary) 13%, transparent);\n}\ninput,\nselect {\n  min-height: 2.75rem;\n}\ntextarea {\n  resize: vertical;\n}\n.acoes-formulario {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.65rem;\n  margin-top: 1rem;\n}\n.aviso-projetos,\n.mensagem {\n  margin-bottom: 1rem;\n  padding: 0.9rem 1rem;\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n}\n.aviso-projetos {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  background: var(--color-warning-soft);\n  border-color: var(--color-warning-border);\n}\n.aviso-projetos p {\n  margin: 0.25rem 0 0;\n  color: var(--text-soft);\n  font-size: 0.78rem;\n}\n.aviso-projetos a {\n  color: var(--primary);\n  font-size: 0.76rem;\n  font-weight: 760;\n}\n.mensagem {\n  font-size: 0.78rem;\n}\n.mensagem-sucesso {\n  background: var(--color-success-soft);\n  color: var(--color-success);\n  border-color: var(--color-success-border);\n}\n.mensagem-erro {\n  background: var(--color-danger-soft);\n  color: var(--danger);\n  border-color: var(--color-danger-border);\n}\n.estado {\n  display: grid;\n  min-height: 20rem;\n  place-content: center;\n  justify-items: center;\n  color: var(--text-muted);\n  text-align: center;\n}\n.estado h2 {\n  margin-bottom: 0.4rem;\n  color: var(--text);\n}\n.estado-erro {\n  color: var(--danger);\n}\n.carregador {\n  width: 1.25rem;\n  height: 1.25rem;\n  margin-bottom: 0.8rem;\n  border: 0.14rem solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: var(--radius-round);\n  animation: girar 650ms linear infinite;\n}\n.catalogo {\n  margin-top: 2.25rem;\n}\n.cabecalho-catalogo {\n  align-items: flex-end;\n  margin-bottom: 1rem;\n}\n.cabecalho-catalogo h2 {\n  margin: 0.3rem 0 0;\n  font-size: clamp(1.4rem, 4vw, 2rem);\n  letter-spacing: -0.035em;\n}\n.cabecalho-catalogo > span {\n  display: grid;\n  min-width: 2rem;\n  min-height: 2rem;\n  place-items: center;\n  background: var(--primary);\n  color: var(--studio-on-brand, #fff);\n  border-radius: var(--radius-round);\n  font-size: 0.68rem;\n  font-weight: 760;\n}\n.acoes-filtro {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.7rem;\n  margin-top: 0.45rem;\n}\n.acoes-filtro a {\n  color: var(--primary);\n  font-size: 0.72rem;\n  font-weight: 760;\n  text-decoration: none;\n}\n.filtro-vazio {\n  display: grid;\n  justify-items: start;\n  gap: 0.6rem;\n  padding: clamp(1.25rem, 4vw, 2.5rem);\n  background: var(--surface);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-grande);\n}\n.filtro-vazio p {\n  max-width: 34rem;\n  margin: 0;\n  color: var(--text-soft);\n  font-size: 0.78rem;\n}\n.filtro-vazio button {\n  margin-top: 0.35rem;\n}\n.grade-albuns {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: clamp(1rem, 2vw, 1.35rem);\n}\n.cartao-album {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  min-width: 0;\n  overflow: hidden;\n  background: var(--surface);\n  border: 0.0625rem solid var(--border);\n  border-radius: calc(var(--radius-grande) + 0.1rem);\n  box-shadow: var(--shadow-small);\n  transition: 170ms ease;\n}\n.cartao-album:hover {\n  border-color: color-mix(in srgb, var(--primary) 28%, var(--border));\n  box-shadow: var(--shadow-medium);\n  transform: translateY(-0.18rem);\n}\n.cartao-album.album-selecionado {\n  border-color: color-mix(in srgb, var(--primary) 58%, var(--border));\n  box-shadow: 0 0 0 0.12rem color-mix(in srgb, var(--primary) 13%, transparent);\n}\n.capa-album {\n  position: relative;\n  display: grid;\n  aspect-ratio: 1;\n  place-items: center;\n  overflow: hidden;\n  isolation: isolate;\n  background:\n    linear-gradient(\n      145deg,\n      color-mix(in srgb, var(--primary) 55%, var(--app-dark, #151715)),\n      var(--primary));\n  color: var(--studio-on-brand, #fff);\n}\n.capa-album::before {\n  position: absolute;\n  z-index: -1;\n  width: 46%;\n  height: 46%;\n  border: 0.0625rem solid currentColor;\n  content: "";\n  opacity: 0.22;\n  transform: rotate(45deg);\n}\n.capa-album img {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.capa-album > strong {\n  font-size: clamp(2.2rem, 6vw, 4rem);\n  letter-spacing: -0.08em;\n}\n.capa-album > small {\n  position: absolute;\n  right: 0.9rem;\n  bottom: 0.8rem;\n  left: 0.9rem;\n  overflow: hidden;\n  font-size: 0.55rem;\n  font-weight: 760;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.estado-cartao,\n.indicador-aberto {\n  position: absolute;\n  top: 0.75rem;\n  display: inline-flex;\n  min-height: 1.6rem;\n  align-items: center;\n  padding: 0.28rem 0.55rem;\n  background: rgba(10, 12, 10, 0.72);\n  color: #f8faf6;\n  border: 0.0625rem solid rgba(255, 255, 255, 0.24);\n  border-radius: var(--radius-round);\n  -webkit-backdrop-filter: blur(0.45rem);\n  backdrop-filter: blur(0.45rem);\n  font-size: 0.55rem;\n  font-weight: 780;\n  text-transform: uppercase;\n}\n.estado-cartao {\n  left: 0.75rem;\n}\n.estado-cartao.estado-publicado {\n  background: var(--primary);\n  color: var(--studio-on-brand, #fff);\n}\n.indicador-aberto {\n  right: 0.75rem;\n  background: var(--surface);\n  color: var(--primary);\n  border-color: color-mix(in srgb, var(--primary) 35%, var(--border));\n}\n.corpo-cartao {\n  display: grid;\n  align-content: space-between;\n  gap: 1rem;\n  padding: 1rem;\n}\n.dados-album {\n  display: grid;\n  min-width: 0;\n  gap: 0.28rem;\n}\n.dados-album > strong,\n.dados-album > small {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dados-album > strong {\n  font-size: 1.02rem;\n}\n.dados-album > small {\n  color: var(--text-soft);\n  font-size: 0.7rem;\n}\n.metadados-cartao {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  margin-top: 0.45rem;\n}\n.metadados-cartao em {\n  padding: 0.25rem 0.45rem;\n  background: var(--surface-muted);\n  color: var(--text-muted);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-round);\n  font-size: 0.58rem;\n  font-style: normal;\n}\n.metadados-cartao .marcador-casa {\n  background: color-mix(in srgb, var(--primary) 12%, var(--surface));\n  color: var(--primary);\n  border-color: color-mix(in srgb, var(--primary) 35%, var(--border));\n}\n.botao-abrir-album {\n  display: flex;\n  width: 100%;\n  min-height: 2.65rem;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.62rem 0.75rem;\n  background: var(--surface-muted);\n  color: var(--text);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n  font-size: 0.68rem;\n  font-weight: 760;\n}\n.botao-abrir-album:hover:not(:disabled),\n.botao-abrir-album[aria-pressed=true] {\n  background: color-mix(in srgb, var(--primary) 10%, var(--surface));\n  color: var(--primary);\n  border-color: color-mix(in srgb, var(--primary) 38%, var(--border));\n}\n.acoes-cartao {\n  display: grid;\n  grid-template-columns: 1fr 1fr auto;\n  gap: 0.45rem;\n  padding: 0.75rem 1rem 1rem;\n  background: var(--surface-muted);\n  border-top: 0.0625rem solid var(--border);\n}\n.acoes-cartao button {\n  min-height: 2.3rem;\n  padding: 0.45rem 0.55rem;\n  background: var(--surface);\n  color: var(--text-soft);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n  font-size: 0.65rem;\n  font-weight: 740;\n}\n.acoes-cartao button span {\n  margin-right: 0.2rem;\n}\n.acoes-cartao .acao-editar:first-child {\n  background: color-mix(in srgb, var(--primary) 9%, var(--surface));\n  color: var(--primary);\n  border-color: color-mix(in srgb, var(--primary) 28%, var(--border));\n}\n.acoes-cartao .acao-editar:first-child:hover:not(:disabled) {\n  background: var(--primary);\n  color: var(--studio-on-brand, #fff);\n}\n.acoes-cartao .acao-perigo:hover:not(:disabled) {\n  background: var(--color-danger-soft);\n  color: var(--danger);\n  border-color: var(--color-danger-border);\n}\n.editor-sequencia {\n  scroll-margin-top: 1rem;\n  margin-top: 2rem;\n  overflow: hidden;\n  background: var(--surface);\n  color: var(--text);\n  border: 0.0625rem solid var(--border);\n  border-radius: calc(var(--radius-grande) + 0.15rem);\n  box-shadow: var(--shadow);\n}\n.topo-editor {\n  justify-content: flex-start;\n  padding: clamp(1rem, 3vw, 1.5rem);\n  background: var(--surface-muted);\n  border-bottom: 0.0625rem solid var(--border);\n}\n.miniatura-editor,\n.capa-publicacao {\n  display: grid;\n  flex: 0 0 auto;\n  place-items: center;\n  overflow: hidden;\n  background: var(--primary);\n  color: var(--studio-on-brand, #fff);\n  border-radius: var(--radius);\n  font-weight: 780;\n}\n.miniatura-editor img,\n.capa-publicacao img {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}\n.miniatura-editor {\n  width: 5rem;\n  height: 5rem;\n  font-size: 1.2rem;\n}\n.identificacao-editor {\n  min-width: 0;\n}\n.identificacao-editor h2 {\n  overflow: hidden;\n  margin: 0.25rem 0;\n  font-size: clamp(1.5rem, 5vw, 2.7rem);\n  line-height: 1;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.identificacao-editor > span {\n  color: var(--text-muted);\n  font-size: 0.68rem;\n}\n.acoes-topo-editor,\n.acoes-compartilhamento,\n.acoes-capa,\n.acoes-cliente {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.acoes-topo-editor {\n  margin-left: auto;\n}\n.acoes-compartilhamento button,\n.acoes-cliente button,\n.seletor-capa > span,\n.botao-herdar-capa {\n  min-height: 2.4rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: var(--radius);\n  font-size: 0.67rem;\n  font-weight: 750;\n}\n.botao-copiar-link,\n.botao-link-cliente,\n.botao-renovar-link,\n.botao-herdar-capa,\n.seletor-capa > span {\n  background: var(--surface);\n  color: var(--text-soft);\n  border: 0.0625rem solid var(--border);\n}\n.botao-copiar-link:hover:not(:disabled),\n.botao-link-cliente:hover:not(:disabled),\n.botao-renovar-link:hover:not(:disabled),\n.botao-herdar-capa:hover:not(:disabled),\n.seletor-capa > span:hover:not(:disabled) {\n  background: var(--surface-muted);\n  color: var(--text);\n}\n.botao-whatsapp {\n  background: var(--color-success);\n  color: #fff;\n  border: 0.0625rem solid var(--color-success);\n}\n.gerenciador-capa {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin: 1rem;\n  padding: 0.9rem 1rem;\n  background: var(--surface-muted);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-grande);\n}\n.estado-capa {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 0.75rem;\n}\n.estado-capa > span {\n  display: grid;\n  width: 2.25rem;\n  height: 2.25rem;\n  flex: 0 0 auto;\n  place-items: center;\n  background: var(--surface);\n  color: var(--primary);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n}\n.estado-capa > div {\n  display: grid;\n  gap: 0.15rem;\n}\n.estado-capa strong {\n  font-size: 0.75rem;\n}\n.estado-capa small {\n  color: var(--text-muted);\n  font-size: 0.62rem;\n}\n.seletor-capa {\n  display: block;\n}\n.seletor-capa input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  opacity: 0;\n}\n.seletor-capa > span {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n}\n.seletor-capa.desativado {\n  opacity: 0.52;\n}\n.painel-cliente,\n.painel-publicacao {\n  margin: 1rem;\n  background: var(--surface);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-grande);\n}\n.painel-cliente {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 1rem 1.5rem;\n  padding: 1rem;\n  background: color-mix(in srgb, var(--primary) 5%, var(--surface));\n  border-color: color-mix(in srgb, var(--primary) 25%, var(--border));\n}\n.identificacao-envio-cliente {\n  display: flex;\n  gap: 0.8rem;\n}\n.identificacao-envio-cliente h3 {\n  margin: 0.15rem 0 0.3rem;\n  font-size: 1rem;\n}\n.identificacao-envio-cliente p:last-child {\n  margin: 0;\n  color: var(--text-soft);\n  font-size: 0.7rem;\n}\n.icone-envio-cliente {\n  display: grid;\n  width: 2.5rem;\n  height: 2.5rem;\n  flex: 0 0 auto;\n  place-items: center;\n  background: var(--primary);\n  color: var(--studio-on-brand, #fff);\n  border-radius: var(--radius);\n}\n.situacao-link-cliente,\n.situacao-publicacao {\n  padding: 0.3rem 0.58rem;\n  background: var(--surface);\n  color: var(--text-muted);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-round);\n  font-size: 0.62rem;\n  font-weight: 760;\n  white-space: nowrap;\n}\n.situacao-link-cliente.link-ativo {\n  background: var(--color-success-soft);\n  color: var(--color-success);\n  border-color: var(--color-success-border);\n}\n.acoes-cliente {\n  grid-column: 1/-1;\n  flex-wrap: wrap;\n  padding-top: 0.85rem;\n  border-top: 0.0625rem solid var(--border);\n}\n.botao-enviar-cliente,\n.botao-publicar {\n  background: var(--primary);\n  color: var(--studio-on-brand, #fff);\n  border: 0.0625rem solid var(--primary);\n}\n.botao-renovar-link {\n  margin-left: auto;\n}\n.botao-renovar-link + .botao-link-cliente {\n  color: var(--danger);\n  border-color: var(--color-danger-border);\n}\n.botao-renovar-link + .botao-link-cliente:hover:not(:disabled) {\n  background: var(--color-danger-soft);\n}\n.aviso-envio-cliente {\n  grid-column: 1/-1;\n  color: var(--color-warning);\n  font-size: 0.66rem;\n}\n.painel-publicacao {\n  overflow: hidden;\n}\n.painel-publicacao.publicado {\n  border-color: color-mix(in srgb, var(--primary) 38%, var(--border));\n  box-shadow: inset 0.18rem 0 var(--primary);\n}\n.cabecalho-publicacao,\n.resumo-publicacao {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  border-bottom: 0.0625rem solid var(--border);\n}\n.cabecalho-publicacao {\n  justify-content: space-between;\n  background: var(--surface-muted);\n}\n.cabecalho-publicacao h3 {\n  margin: 0.25rem 0 0;\n  font-size: 1rem;\n}\n.situacao-publicacao.publicada {\n  color: var(--primary);\n  border-color: color-mix(in srgb, var(--primary) 30%, var(--border));\n}\n.capa-publicacao {\n  width: 4.5rem;\n  height: 4.5rem;\n}\n.resumo-publicacao > div:last-child {\n  display: grid;\n  min-width: 0;\n  gap: 0.2rem;\n}\n.resumo-publicacao > div:last-child > span,\n.resumo-publicacao > div:last-child > small {\n  color: var(--text-muted);\n}\n.controle-casa {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 0.75rem 1rem;\n  margin: 1rem;\n  padding: 1rem;\n  background: var(--surface-muted);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n}\n.controle-casa.na-casa {\n  background: color-mix(in srgb, var(--primary) 7%, var(--surface));\n  border-color: color-mix(in srgb, var(--primary) 34%, var(--border));\n}\n.controle-casa > div {\n  display: grid;\n  gap: 0.25rem;\n}\n.controle-casa strong {\n  font-size: 0.86rem;\n}\n.controle-casa span,\n.controle-casa > small {\n  color: var(--text-muted);\n  font-size: 0.64rem;\n}\n.controle-casa > small {\n  grid-column: 1/-1;\n}\n.controle-casa button {\n  min-height: 2.5rem;\n  padding: 0.55rem 0.85rem;\n  background: var(--primary);\n  color: var(--studio-on-brand, #fff);\n  border: 0.0625rem solid var(--primary);\n  border-radius: var(--radius);\n  font-size: 0.68rem;\n  font-weight: 760;\n}\n.controle-casa .remover-da-casa {\n  background: var(--surface);\n  color: var(--text-soft);\n  border-color: var(--border);\n}\n.aviso-publicacao,\n.alerta-exposicao,\n.alerta-download {\n  margin: 1rem;\n  padding: 0.8rem;\n  border-radius: var(--radius);\n  font-size: 0.68rem;\n}\n.aviso-publicacao,\n.alerta-exposicao {\n  background: var(--color-warning-soft);\n  color: var(--color-warning);\n  border: 0.0625rem solid var(--color-warning-border);\n}\n.alerta-download {\n  background: var(--color-danger-soft);\n  color: var(--danger);\n  border: 0.0625rem solid var(--color-danger-border);\n}\n.revisao-publicacao,\n.formulario-publicacao {\n  padding: 1rem;\n}\n.revisao-publicacao {\n  border-bottom: 0.0625rem solid var(--border);\n}\n.revisao-publicacao > header {\n  display: grid;\n  gap: 0.2rem;\n  margin-bottom: 0.75rem;\n}\n.revisao-publicacao > header span {\n  color: var(--text-muted);\n  font-size: 0.65rem;\n}\n.revisao-publicacao ol {\n  display: grid;\n  gap: 0.4rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.revisao-publicacao li {\n  display: grid;\n  grid-template-columns: 1.5rem minmax(0, 1fr);\n  gap: 0.65rem;\n  padding: 0.65rem;\n  background: var(--surface-muted);\n  border-radius: var(--radius);\n}\n.revisao-publicacao li > span {\n  color: var(--primary);\n  font-weight: 760;\n}\n.revisao-publicacao li > div {\n  display: grid;\n  min-width: 0;\n}\n.revisao-publicacao li small {\n  color: var(--text-muted);\n  font-size: 0.6rem;\n}\n.campos-publicacao,\n.opcoes-publicacao {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n.campos-publicacao textarea {\n  min-height: 6.4rem;\n}\n.titulo-permissoes {\n  display: grid;\n  gap: 0.2rem;\n  margin: 1rem 0 0.65rem;\n}\n.titulo-permissoes span {\n  color: var(--text-muted);\n  font-size: 0.63rem;\n}\n.opcoes-publicacao label {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.65rem;\n  padding: 0.8rem;\n  background: var(--surface-muted);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n}\n.opcoes-publicacao label:has(input:checked) {\n  background: color-mix(in srgb, var(--primary) 7%, var(--surface));\n  border-color: color-mix(in srgb, var(--primary) 35%, var(--border));\n}\n.opcoes-publicacao label input {\n  width: 1rem;\n  height: 1rem;\n  flex: 0 0 auto;\n}\n.opcoes-publicacao label > span {\n  display: grid;\n  gap: 0.2rem;\n}\n.opcoes-publicacao label small {\n  color: var(--text-muted);\n  font-size: 0.61rem;\n}\n.confirmacao-publicacao {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin-top: 1rem;\n  color: var(--text-soft);\n  font-size: 0.67rem;\n}\n.confirmacao-publicacao input {\n  width: 1rem;\n  height: 1rem;\n}\n.acoes-publicacao {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.6rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 0.0625rem solid var(--border);\n}\n.botao-publicar,\n.botao-despublicar {\n  min-height: 2.5rem;\n  padding: 0.55rem 0.85rem;\n  border-radius: var(--radius);\n  font-size: 0.68rem;\n  font-weight: 760;\n}\n.botao-despublicar {\n  background: var(--surface);\n  color: var(--danger);\n  border: 0.0625rem solid var(--color-danger-border);\n}\n.observacoes-album {\n  margin: 1rem;\n  padding: 0.9rem 1rem;\n  background: var(--surface-muted);\n  color: var(--text-soft);\n  border-radius: var(--radius);\n  font-size: 0.76rem;\n}\n.cabecalho-faixas,\n.lista-faixas li {\n  display: grid;\n  grid-template-columns: 2.5rem minmax(10rem, 1fr) minmax(10rem, 14rem) auto;\n  align-items: center;\n  gap: 0.8rem;\n}\n.cabecalho-faixas {\n  margin: 0 1rem;\n  padding: 0.75rem 0.8rem;\n  color: var(--text-muted);\n  border-bottom: 0.0625rem solid var(--border);\n  font-size: 0.56rem;\n  text-transform: uppercase;\n}\n.lista-faixas {\n  display: grid;\n  gap: 0.45rem;\n  margin: 0;\n  padding: 0.65rem 1rem 1rem;\n  list-style: none;\n}\n.lista-faixas li {\n  min-height: 4.25rem;\n  padding: 0.65rem 0.8rem;\n  background: var(--surface-muted);\n  border: 0.0625rem solid transparent;\n  border-radius: var(--radius);\n}\n.lista-faixas li:hover {\n  border-color: var(--border);\n}\n.numero-faixa {\n  color: var(--primary);\n  font-size: 0.72rem;\n  font-weight: 760;\n  text-align: center;\n}\n.identificacao-faixa {\n  display: grid;\n  min-width: 0;\n  gap: 0.22rem;\n}\n.identificacao-faixa strong,\n.identificacao-faixa span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.identificacao-faixa strong {\n  font-size: 0.8rem;\n}\n.identificacao-faixa span {\n  color: var(--text-muted);\n  font-size: 0.61rem;\n}\n.seletor-versao select {\n  min-height: 2.35rem;\n  padding: 0.45rem 0.6rem;\n  font-size: 0.68rem;\n}\n.rotulo-acessivel {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n}\n.acoes-faixa {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.3rem;\n}\n.acoes-faixa button {\n  min-width: 2rem;\n  min-height: 2rem;\n  padding: 0.3rem;\n  background: var(--surface);\n  color: var(--text-soft);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n}\n.acoes-faixa button:hover:not(:disabled) {\n  color: var(--primary);\n  border-color: color-mix(in srgb, var(--primary) 30%, var(--border));\n}\n.acoes-faixa .remover-faixa:hover:not(:disabled) {\n  background: var(--color-danger-soft);\n  color: var(--danger);\n  border-color: var(--color-danger-border);\n}\n.adicionar-faixa {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: end;\n  gap: 1rem;\n  padding: 1rem;\n  background: var(--surface-muted);\n  border-top: 0.0625rem solid var(--border);\n}\n.adicionar-faixa > div {\n  display: grid;\n  gap: 0.4rem;\n}\n.adicionar-faixa small {\n  color: var(--text-muted);\n  font-size: 0.61rem;\n}\n.adicionar-faixa > a {\n  color: var(--primary);\n  font-size: 0.7rem;\n  font-weight: 740;\n}\n.sequencia-vazia {\n  display: grid;\n  min-height: 10rem;\n  place-content: center;\n  justify-items: center;\n  color: var(--text-muted);\n}\n.vazio-catalogo {\n  display: grid;\n  grid-template-columns: minmax(12rem, 20rem) minmax(0, 1fr);\n  align-items: center;\n  gap: clamp(2rem, 7vw, 6rem);\n  min-height: 29rem;\n  padding: clamp(1.25rem, 4vw, 3rem);\n  background: var(--surface);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-grande);\n}\n.vazio-catalogo h2 {\n  max-width: 15ch;\n  margin: 0.4rem 0 0.75rem;\n  font-size: clamp(1.8rem, 5vw, 3.2rem);\n}\n.vazio-catalogo p:not(.rotulo-menor) {\n  color: var(--text-soft);\n}\n.capa-vazia {\n  position: relative;\n  display: grid;\n  aspect-ratio: 1;\n  place-items: center;\n  background: var(--primary);\n  color: var(--studio-on-brand, #fff);\n  border-radius: var(--radius);\n  box-shadow: 1.2rem 1.2rem 0 color-mix(in srgb, var(--primary) 13%, var(--surface-muted));\n}\n.capa-vazia > span,\n.capa-vazia > strong {\n  position: absolute;\n  font-size: 0.58rem;\n}\n.capa-vazia > span {\n  top: 1rem;\n  left: 1rem;\n}\n.capa-vazia > strong {\n  right: 1rem;\n  bottom: 1rem;\n}\n.topo-editor-focado {\n  flex-wrap: wrap;\n  margin-bottom: 1rem;\n  padding: clamp(1rem, 3vw, 1.4rem);\n  background: var(--surface);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-grande);\n  box-shadow: var(--shadow-small);\n}\n.voltar-catalogo {\n  display: inline-flex;\n  flex: 0 0 100%;\n  align-items: center;\n  gap: 0.4rem;\n  width: max-content;\n  padding: 0;\n  background: transparent;\n  color: var(--text-muted);\n  border: 0;\n  font-size: 0.7rem;\n  font-weight: 740;\n}\n.voltar-catalogo:hover {\n  color: var(--primary);\n}\n.resumo-editor-focado {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 1rem;\n}\n.identificacao-editor h1 {\n  overflow: hidden;\n  margin: 0.25rem 0;\n  font-size: clamp(1.6rem, 5vw, 2.8rem);\n  line-height: 1;\n  letter-spacing: -0.045em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.acoes-resumo-editor {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-left: auto;\n}\n.estados-editor {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 0.35rem;\n}\n.estado-editor {\n  padding: 0.32rem 0.58rem;\n  background: var(--surface-muted);\n  color: var(--text-muted);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-round);\n  font-size: 0.58rem;\n  font-weight: 780;\n  text-transform: uppercase;\n}\n.estado-editor.estado-publicado,\n.estado-editor.estado-casa {\n  background: color-mix(in srgb, var(--primary) 10%, var(--surface));\n  color: var(--primary);\n  border-color: color-mix(in srgb, var(--primary) 34%, var(--border));\n}\n.editor-focado {\n  margin-top: 0;\n}\n.navegacao-editor {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.5rem;\n  padding: 0.75rem;\n  background: var(--surface-muted);\n  border-bottom: 0.0625rem solid var(--border);\n}\n.navegacao-editor button {\n  display: grid;\n  grid-template-columns: 1.7rem minmax(0, 1fr);\n  gap: 0.08rem 0.6rem;\n  min-width: 0;\n  padding: 0.72rem;\n  background: transparent;\n  color: var(--text-soft);\n  border: 0.0625rem solid transparent;\n  border-radius: var(--radius);\n  text-align: left;\n}\n.navegacao-editor button > span {\n  display: grid;\n  grid-row: 1/3;\n  width: 1.7rem;\n  height: 1.7rem;\n  place-items: center;\n  background: var(--surface);\n  color: var(--text-muted);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-round);\n  font-size: 0.62rem;\n  font-weight: 780;\n}\n.navegacao-editor button strong {\n  overflow: hidden;\n  font-size: 0.73rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.navegacao-editor button small {\n  overflow: hidden;\n  color: var(--text-muted);\n  font-size: 0.58rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.navegacao-editor button:hover,\n.navegacao-editor button.ativa {\n  background: var(--surface);\n  color: var(--text);\n  border-color: var(--border);\n}\n.navegacao-editor button.ativa {\n  box-shadow: var(--shadow-small);\n}\n.navegacao-editor button.ativa > span {\n  background: var(--primary);\n  color: var(--studio-on-brand, #fff);\n  border-color: var(--primary);\n}\n.aba-editor {\n  min-height: 24rem;\n}\n.painel-conteudo,\n.area-compartilhamento {\n  padding-bottom: 1rem;\n}\n.cabecalho-secao-editor {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem 1rem 1rem;\n}\n.cabecalho-secao-editor h2 {\n  margin: 0.25rem 0 0.35rem;\n  font-size: clamp(1.25rem, 3vw, 1.7rem);\n}\n.cabecalho-secao-editor p:last-child {\n  max-width: 38rem;\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 0.7rem;\n}\n.cabecalho-secao-editor > span {\n  color: var(--text-muted);\n  font-size: 0.68rem;\n  white-space: nowrap;\n}\n.painel-conteudo .gerenciador-capa {\n  margin-top: 0;\n}\n.observacoes-album {\n  display: grid;\n  gap: 0.3rem;\n}\n.observacoes-album > span {\n  color: var(--primary);\n  font-size: 0.58rem;\n  font-weight: 780;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.observacoes-album p {\n  margin: 0;\n}\n.sequencia-vazia {\n  gap: 0.35rem;\n}\n.sequencia-vazia strong {\n  color: var(--text);\n}\n.sequencia-vazia p {\n  margin: 0;\n  font-size: 0.7rem;\n}\n.todas-faixas-adicionadas {\n  max-width: 15rem;\n  color: var(--text-muted);\n  font-size: 0.65rem;\n  text-align: right;\n}\n.aba-editor.painel-publicacao {\n  margin: 0;\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.cabecalho-publicacao {\n  align-items: flex-end;\n}\n.cabecalho-publicacao h2 {\n  margin: 0.25rem 0 0.35rem;\n  font-size: clamp(1.25rem, 3vw, 1.7rem);\n}\n.cabecalho-publicacao p:last-child {\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 0.7rem;\n}\n.grade-compartilhamento {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n  padding: 0 1rem;\n}\n.grade-compartilhamento .painel-cliente,\n.painel-compartilhamento-publico {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-content: start;\n  align-items: start;\n  gap: 1rem;\n  margin: 0;\n  padding: 1rem;\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius-grande);\n}\n.painel-compartilhamento-publico {\n  background: var(--surface);\n}\n.icone-envio-publico {\n  display: grid;\n  width: 2.5rem;\n  height: 2.5rem;\n  flex: 0 0 auto;\n  place-items: center;\n  background: var(--surface-muted);\n  color: var(--primary);\n  border: 0.0625rem solid var(--border);\n  border-radius: var(--radius);\n}\n.acoes-compartilhamento-publico,\n.publicacao-indisponivel {\n  grid-column: 1/-1;\n  padding-top: 0.85rem;\n  border-top: 0.0625rem solid var(--border);\n}\n.acoes-compartilhamento-publico {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.acoes-compartilhamento-publico button {\n  min-height: 2.4rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: var(--radius);\n  font-size: 0.67rem;\n  font-weight: 750;\n}\n.publicacao-indisponivel {\n  display: grid;\n  justify-items: start;\n  gap: 0.7rem;\n}\n.publicacao-indisponivel p {\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 0.68rem;\n}\n.acoes-cartao {\n  grid-template-columns: minmax(0, 1fr) auto;\n}\n@keyframes girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 64rem) {\n  .grade-compartilhamento {\n    grid-template-columns: 1fr;\n  }\n  .cabecalho-faixas,\n  .lista-faixas li {\n    grid-template-columns: 2rem minmax(9rem, 1fr) minmax(8rem, 12rem);\n  }\n  .acoes-faixa {\n    grid-column: 2/-1;\n  }\n}\n@media (max-width: 52rem) {\n  .grade-albuns {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .painel-cliente {\n    grid-template-columns: 1fr;\n  }\n  .botao-renovar-link {\n    margin-left: 0;\n  }\n}\n@media (max-width: 48rem) {\n  .cabecalho-pagina,\n  .gerenciador-capa {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .cabecalho-pagina .botao-principal {\n    width: 100%;\n  }\n  .campos-album,\n  .campos-publicacao,\n  .opcoes-publicacao {\n    grid-template-columns: 1fr;\n  }\n  .campo-largo {\n    grid-column: auto;\n  }\n  .topo-editor {\n    flex-wrap: wrap;\n  }\n  .topo-editor-focado {\n    align-items: stretch;\n  }\n  .resumo-editor-focado,\n  .acoes-resumo-editor {\n    width: 100%;\n  }\n  .acoes-resumo-editor {\n    justify-content: space-between;\n    margin-left: 0;\n  }\n  .navegacao-editor {\n    grid-template-columns: repeat(3, minmax(10rem, 1fr));\n    overflow-x: auto;\n  }\n  .acoes-topo-editor {\n    width: 100%;\n    margin-left: 0;\n  }\n  .cabecalho-faixas {\n    display: none;\n  }\n  .lista-faixas li {\n    grid-template-columns: 2rem minmax(0, 1fr);\n  }\n  .seletor-versao,\n  .acoes-faixa {\n    grid-column: 2;\n  }\n  .acoes-faixa {\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 36rem) {\n  .grade-albuns,\n  .vazio-catalogo {\n    grid-template-columns: 1fr;\n  }\n  .acoes-cartao {\n    grid-template-columns: minmax(0, 1fr) auto;\n  }\n  .acoes-cartao .acao-perigo {\n    grid-column: auto;\n  }\n  .acoes-resumo-editor {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .estados-editor {\n    justify-content: flex-start;\n  }\n  .grade-compartilhamento .painel-cliente,\n  .painel-compartilhamento-publico {\n    grid-template-columns: 1fr;\n  }\n  .acoes-cliente,\n  .acoes-compartilhamento,\n  .acoes-compartilhamento-publico,\n  .acoes-capa {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .acoes-cliente button,\n  .acoes-cliente .seletor-capa > span,\n  .acoes-compartilhamento button,\n  .acoes-compartilhamento .seletor-capa > span,\n  .acoes-compartilhamento-publico button,\n  .acoes-compartilhamento-publico .seletor-capa > span,\n  .acoes-capa button,\n  .acoes-capa .seletor-capa > span {\n    width: 100%;\n  }\n  .adicionar-faixa {\n    grid-template-columns: 1fr;\n  }\n  .controle-casa {\n    grid-template-columns: 1fr;\n  }\n  .controle-casa button {\n    width: 100%;\n  }\n  .acoes-formulario,\n  .acoes-publicacao {\n    flex-direction: column-reverse;\n  }\n  .acoes-formulario button,\n  .acoes-publicacao button {\n    width: 100%;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  * {\n    transition-duration: 0.01ms !important;\n  }\n  .carregador {\n    animation: none;\n  }\n}\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Albuns, { className: "Albuns", filePath: "apps/studio-dash/src/app/paginas/albuns/albuns.ts", lineNumber: 34 });
})();
export {
  Albuns
};
