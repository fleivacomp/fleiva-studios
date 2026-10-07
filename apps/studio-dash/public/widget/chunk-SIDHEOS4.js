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
  Autenticacao,
  COR_PADRAO_ESTUDIO,
  Component,
  DadosEstudio,
  DadosVersoesFaixa,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  computed,
  inject,
  normalizarCorEstudio,
  normalizarSlugEstudio,
  normalizarTemaPaginaPublica,
  normalizarUrlEmbedPublico,
  obterCorContrasteEstudio,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-IMBOO5ID.js";

// apps/studio-dash/src/app/paginas/perfil/cropper-logo.ts
var _c0 = ["canvas"];
var CropperLogo = class _CropperLogo {
  arquivo;
  confirmado = new EventEmitter();
  cancelado = new EventEmitter();
  canvasRef;
  zoom = signal(
    1,
    ...ngDevMode ? [{ debugName: "zoom" }] : (
      /* istanbul ignore next */
      []
    )
  );
  imagem = null;
  offsetX = 0;
  offsetY = 0;
  arrastando = false;
  inicioX = 0;
  inicioY = 0;
  offsetInicialX = 0;
  offsetInicialY = 0;
  ngOnChanges(changes) {
    if (changes["arquivo"] && this.arquivo) {
      void this.carregar(this.arquivo);
    }
  }
  async carregar(file) {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.src = url;
    try {
      await img.decode();
    } finally {
      URL.revokeObjectURL(url);
    }
    this.imagem = img;
    this.zoom.set(1);
    this.offsetX = 0;
    this.offsetY = 0;
    this.desenhar();
  }
  iniciarArraste(evento) {
    if (!this.imagem)
      return;
    evento.preventDefault();
    this.arrastando = true;
    this.inicioX = evento.clientX;
    this.inicioY = evento.clientY;
    this.offsetInicialX = this.offsetX;
    this.offsetInicialY = this.offsetY;
    const alvo = evento.currentTarget;
    alvo.setPointerCapture(evento.pointerId);
    const mover = (e) => this.mover(e);
    const soltar = (e) => {
      this.arrastando = false;
      alvo.releasePointerCapture(e.pointerId);
      alvo.removeEventListener("pointermove", mover);
      alvo.removeEventListener("pointerup", soltar);
      alvo.removeEventListener("pointercancel", soltar);
    };
    alvo.addEventListener("pointermove", mover);
    alvo.addEventListener("pointerup", soltar);
    alvo.addEventListener("pointercancel", soltar);
  }
  mover(evento) {
    if (!this.arrastando)
      return;
    const canvas = this.canvasRef.nativeElement;
    const escala = canvas.width / canvas.clientWidth;
    this.offsetX = this.offsetInicialX + (evento.clientX - this.inicioX) * escala;
    this.offsetY = this.offsetInicialY + (evento.clientY - this.inicioY) * escala;
    this.desenhar();
  }
  atualizarZoom(evento) {
    const valor = Number(evento.target.value);
    if (!Number.isFinite(valor))
      return;
    this.zoom.set(valor);
    this.desenhar();
  }
  calcularGeometria() {
    const canvas = this.canvasRef?.nativeElement;
    const img = this.imagem;
    if (!canvas || !img)
      return null;
    const lado = canvas.width;
    const escalaBase = Math.max(lado / img.width, lado / img.height);
    const escala = escalaBase * this.zoom();
    const largura = img.width * escala;
    const altura = img.height * escala;
    const maxX = Math.max(0, (largura - lado) / 2);
    const maxY = Math.max(0, (altura - lado) / 2);
    const offsetX = Math.max(-maxX, Math.min(maxX, this.offsetX));
    const offsetY = Math.max(-maxY, Math.min(maxY, this.offsetY));
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    return { largura, altura, offsetX, offsetY };
  }
  desenhar() {
    const canvas = this.canvasRef.nativeElement;
    const img = this.imagem;
    if (!img)
      return;
    const ctx = canvas.getContext("2d");
    const geo = this.calcularGeometria();
    if (!ctx || !geo)
      return;
    const lado = canvas.width;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, lado, lado);
    const x = (lado - geo.largura) / 2 + geo.offsetX;
    const y = (lado - geo.altura) / 2 + geo.offsetY;
    ctx.drawImage(img, x, y, geo.largura, geo.altura);
  }
  confirmar() {
    const canvas = this.canvasRef.nativeElement;
    const img = this.imagem;
    if (!img)
      return;
    const lado = canvas.width;
    const escalaBase = Math.max(lado / img.width, lado / img.height);
    const escala = escalaBase * this.zoom();
    const largura = img.width * escala;
    const altura = img.height * escala;
    const maxX = Math.max(0, (largura - lado) / 2);
    const maxY = Math.max(0, (altura - lado) / 2);
    const offsetX = Math.max(-maxX, Math.min(maxX, this.offsetX));
    const offsetY = Math.max(-maxY, Math.min(maxY, this.offsetY));
    const x = (lado - largura) / 2 + offsetX;
    const y = (lado - altura) / 2 + offsetY;
    const tamanhoFinal = 1024;
    const fator = tamanhoFinal / lado;
    const exportacao = document.createElement("canvas");
    exportacao.width = tamanhoFinal;
    exportacao.height = tamanhoFinal;
    const ctx = exportacao.getContext("2d");
    if (!ctx)
      return;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, x * fator, y * fator, largura * fator, altura * fator);
    exportacao.toBlob((blob) => {
      if (blob) {
        this.confirmado.emit(blob);
      }
    }, "image/webp", 0.92);
  }
  static \u0275fac = function CropperLogo_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CropperLogo)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CropperLogo, selectors: [["app-cropper-logo"]], viewQuery: function CropperLogo_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasRef = _t.first);
    }
  }, inputs: { arquivo: "arquivo" }, outputs: { confirmado: "confirmado", cancelado: "cancelado" }, features: [\u0275\u0275NgOnChangesFeature], decls: 21, vars: 1, consts: [["area", ""], ["canvas", ""], [1, "cropper-fundo", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "cropper"], [1, "area-cropper", 3, "pointerdown"], ["width", "600", "height", "600"], ["aria-hidden", "true", 1, "guia"], [1, "zoom"], ["type", "range", "min", "1", "max", "4", "step", "0.01", 3, "input", "value"], ["type", "button", 1, "botao-secundario", 3, "click"], ["type", "button", 1, "botao-principal", 3, "click"]], template: function CropperLogo_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 2);
      \u0275\u0275domListener("click", function CropperLogo_Template_div_click_0_listener() {
        return ctx.cancelado.emit();
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1, "div", 3)(2, "header")(3, "h3");
      \u0275\u0275text(4, "Enquadrar logo");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p");
      \u0275\u0275text(6, "Arraste para posicionar e use o zoom para ajustar.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 4, 0);
      \u0275\u0275domListener("pointerdown", function CropperLogo_Template_div_pointerdown_7_listener($event) {
        return ctx.iniciarArraste($event);
      });
      \u0275\u0275domElement(9, "canvas", 5, 1)(11, "span", 6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "label", 7)(13, "span");
      \u0275\u0275text(14, "Zoom");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "input", 8);
      \u0275\u0275domListener("input", function CropperLogo_Template_input_input_15_listener($event) {
        return ctx.atualizarZoom($event);
      });
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(16, "footer")(17, "button", 9);
      \u0275\u0275domListener("click", function CropperLogo_Template_button_click_17_listener() {
        return ctx.cancelado.emit();
      });
      \u0275\u0275text(18, " Cancelar ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "button", 10);
      \u0275\u0275domListener("click", function CropperLogo_Template_button_click_19_listener() {
        return ctx.confirmar();
      });
      \u0275\u0275text(20, " Aplicar ");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275domProperty("value", ctx.zoom());
    }
  }, styles: ["\n.cropper-fundo[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.68);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.cropper[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1001;\n  top: 50%;\n  left: 50%;\n  display: grid;\n  width: min(28rem, 100% - 2rem);\n  gap: 1rem;\n  padding: 1.25rem;\n  transform: translate(-50%, -50%);\n  background: var(--app-surface);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 0.5rem;\n  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.45);\n}\n.cropper[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.25rem;\n}\n.cropper[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  letter-spacing: -0.01em;\n}\n.cropper[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.7rem;\n}\n.cropper[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.area-cropper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 1;\n  overflow: hidden;\n  background: #000;\n  border-radius: 0.35rem;\n  cursor: grab;\n  touch-action: none;\n}\n.area-cropper[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.area-cropper[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.area-cropper[_ngcontent-%COMP%]   .guia[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  border: 0.0625rem solid rgba(255, 255, 255, 0.35);\n  border-radius: 0.35rem;\n}\n.zoom[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  gap: 0.75rem;\n}\n.zoom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--app-text-soft);\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.zoom[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  accent-color: var(--studio-brand);\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CropperLogo, [{
    type: Component,
    args: [{ selector: "app-cropper-logo", standalone: true, template: `
    <div class="cropper-fundo" (click)="cancelado.emit()"></div>

    <div class="cropper" role="dialog" aria-modal="true">
      <header>
        <h3>Enquadrar logo</h3>
        <p>Arraste para posicionar e use o zoom para ajustar.</p>
      </header>

      <div
        class="area-cropper"
        #area
        (pointerdown)="iniciarArraste($event)"
      >
        <canvas #canvas width="600" height="600"></canvas>
        <span class="guia" aria-hidden="true"></span>
      </div>

      <label class="zoom">
        <span>Zoom</span>
        <input
          type="range"
          min="1"
          max="4"
          step="0.01"
          [value]="zoom()"
          (input)="atualizarZoom($event)"
        />
      </label>

      <footer>
        <button
          type="button"
          class="botao-secundario"
          (click)="cancelado.emit()"
        >
          Cancelar
        </button>
        <button
          type="button"
          class="botao-principal"
          (click)="confirmar()"
        >
          Aplicar
        </button>
      </footer>
    </div>
  `, styles: ["/* apps/studio-dash/src/app/paginas/perfil/cropper-logo.scss */\n.cropper-fundo {\n  position: fixed;\n  z-index: 1000;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.68);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.cropper {\n  position: fixed;\n  z-index: 1001;\n  top: 50%;\n  left: 50%;\n  display: grid;\n  width: min(28rem, 100% - 2rem);\n  gap: 1rem;\n  padding: 1.25rem;\n  transform: translate(-50%, -50%);\n  background: var(--app-surface);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 0.5rem;\n  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.45);\n}\n.cropper header {\n  display: grid;\n  gap: 0.25rem;\n}\n.cropper header h3 {\n  margin: 0;\n  font-size: 1rem;\n  letter-spacing: -0.01em;\n}\n.cropper header p {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.7rem;\n}\n.cropper footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.area-cropper {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 1;\n  overflow: hidden;\n  background: #000;\n  border-radius: 0.35rem;\n  cursor: grab;\n  touch-action: none;\n}\n.area-cropper:active {\n  cursor: grabbing;\n}\n.area-cropper canvas {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.area-cropper .guia {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  border: 0.0625rem solid rgba(255, 255, 255, 0.35);\n  border-radius: 0.35rem;\n}\n.zoom {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  gap: 0.75rem;\n}\n.zoom span {\n  color: var(--app-text-soft);\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.zoom input {\n  width: 100%;\n  accent-color: var(--studio-brand);\n}\n"] }]
  }], null, { arquivo: [{
    type: Input,
    args: [{ required: true }]
  }], confirmado: [{
    type: Output
  }], cancelado: [{
    type: Output
  }], canvasRef: [{
    type: ViewChild,
    args: ["canvas", { static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CropperLogo, { className: "CropperLogo", filePath: "apps/studio-dash/src/app/paginas/perfil/cropper-logo.ts", lineNumber: 66 });
})();

// apps/studio-dash/src/app/paginas/perfil/perfil.ts
var _forTrack0 = ($index, $item) => $item.valor;
var _forTrack1 = ($index, $item) => $item.provedor + ":" + $item.url;
function Perfil_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " IDENTIDADE DO EST\xDADIO ");
  }
}
function Perfil_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " CASA FL\xCAIVA ");
  }
}
function Perfil_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Perfil ");
  }
}
function Perfil_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Minha p\xE1gina ");
  }
}
function Perfil_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " A marca que aparece no Fl\xEAiva e nos materiais compartilhados. ");
  }
}
function Perfil_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Crie e publique a presen\xE7a digital do seu est\xFAdio. ");
  }
}
function Perfil_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5);
    \u0275\u0275element(1, "span", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Carregando perfil...");
    \u0275\u0275elementEnd()();
  }
}
function Perfil_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 6)(1, "span", 9);
    \u0275\u0275text(2, "!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "N\xE3o foi poss\xEDvel abrir o perfil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 10);
    \u0275\u0275listener("click", function Perfil_Conditional_19_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.carregarDados());
    });
    \u0275\u0275text(8, " Tentar novamente ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.dadosEstudio.erro());
  }
}
function Perfil_Conditional_20_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
  if (rf & 2) {
    const estudio_r4 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.dadosEstudio.logoUrl(), \u0275\u0275sanitizeUrl)("alt", "Logo de " + estudio_r4.nome);
  }
}
function Perfil_Conditional_20_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.inicialEstudio());
  }
}
function Perfil_Conditional_20_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "i", 4);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const estudio_r4 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatarPlano(estudio_r4.status_plano));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", estudio_r4.modulos.length, " m\xF3dulos");
  }
}
function Perfil_Conditional_20_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Plano gratuito");
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "i", 4);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Casa Fl\xEAiva");
    \u0275\u0275elementEnd();
  }
}
function Perfil_Conditional_20_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.name);
  }
}
function Perfil_Conditional_20_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "JPG, PNG ou WebP de at\xE9 5 MB.");
    \u0275\u0275elementEnd();
  }
}
function Perfil_Conditional_20_Conditional_26_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Removendo... ");
  }
}
function Perfil_Conditional_20_Conditional_26_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Remover ");
  }
}
function Perfil_Conditional_20_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 96);
    \u0275\u0275listener("click", function Perfil_Conditional_20_Conditional_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removerLogo());
    });
    \u0275\u0275conditionalCreate(1, Perfil_Conditional_20_Conditional_26_Conditional_1_Template, 1, 0)(2, Perfil_Conditional_20_Conditional_26_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.removendoLogo() || ctx_r1.enviandoLogo());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.removendoLogo() ? 1 : 2);
  }
}
function Perfil_Conditional_20_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.erroOperacao(), " ");
  }
}
function Perfil_Conditional_20_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.mensagemOperacao(), " ");
  }
}
function Perfil_Conditional_20_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1, " Selecione uma cor hexadecimal v\xE1lida. ");
    \u0275\u0275elementEnd();
  }
}
function Perfil_Conditional_20_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 97);
    \u0275\u0275listener("click", function Perfil_Conditional_20_Conditional_56_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.restaurarCorPadrao());
    });
    \u0275\u0275text(1, " Restaurar padr\xE3o ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.salvandoCor());
  }
}
function Perfil_Conditional_20_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvando... ");
  }
}
function Perfil_Conditional_20_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Aplicar identidade ");
  }
}
function Perfil_Conditional_20_For_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 98);
    \u0275\u0275listener("click", function Perfil_Conditional_20_For_108_Template_button_click_0_listener() {
      const tema_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selecionarTemaPaginaPublica(tema_r8.valor));
    });
    \u0275\u0275elementStart(1, "span", 99);
    \u0275\u0275element(2, "i", 100)(3, "i", 101)(4, "i", 102)(5, "i", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 104)(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "i", 105);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tema_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selecionada", ctx_r1.temaPaginaPublicaPrevia() === tema_r8.valor);
    \u0275\u0275attribute("aria-checked", ctx_r1.temaPaginaPublicaPrevia() === tema_r8.valor);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-tema", tema_r8.valor);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(tema_r8.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tema_r8.descricao);
  }
}
function Perfil_Conditional_20_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvando... ");
  }
}
function Perfil_Conditional_20_Conditional_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvar ambiente ");
  }
}
function Perfil_Conditional_20_Conditional_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Publicada ");
  }
}
function Perfil_Conditional_20_Conditional_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Rascunho ");
  }
}
function Perfil_Conditional_20_Conditional_161_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvando... ");
  }
}
function Perfil_Conditional_20_Conditional_162_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvar p\xE1gina p\xFAblica ");
  }
}
function Perfil_Conditional_20_Conditional_191_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1, " Cole o endere\xE7o. ");
    \u0275\u0275elementEnd();
  }
}
function Perfil_Conditional_20_Conditional_192_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.erroEmbeds(), " ");
  }
}
function Perfil_Conditional_20_Conditional_193_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.mensagemEmbeds(), " ");
  }
}
function Perfil_Conditional_20_Conditional_194_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 106)(1, "span", 107);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 108)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 109);
    \u0275\u0275text(9, " Abrir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 110);
    \u0275\u0275listener("click", function Perfil_Conditional_20_Conditional_194_For_2_Template_button_click_10_listener() {
      const \u0275$index_461_r10 = \u0275\u0275restoreView(_r9).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removerEmbed(\u0275$index_461_r10));
    });
    \u0275\u0275text(11, " Remover ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const embed_r11 = ctx.$implicit;
    const \u0275$index_461_r10 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275$index_461_r10 + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatarProvedorEmbed(embed_r11.provedor), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(embed_r11.url);
    \u0275\u0275advance();
    \u0275\u0275property("href", embed_r11.url, \u0275\u0275sanitizeUrl);
  }
}
function Perfil_Conditional_20_Conditional_194_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275repeaterCreate(1, Perfil_Conditional_20_Conditional_194_For_2_Template, 12, 4, "article", 106, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.embedsPrevia());
  }
}
function Perfil_Conditional_20_Conditional_195_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "span", 4);
    \u0275\u0275text(2, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Nenhum conte\xFAdo externo adicionado. ");
    \u0275\u0275elementEnd()();
  }
}
function Perfil_Conditional_20_Conditional_200_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvando... ");
  }
}
function Perfil_Conditional_20_Conditional_201_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvar conte\xFAdos ");
  }
}
function Perfil_Conditional_20_Conditional_217_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Informe o nome que ser\xE1 exibido na p\xE1gina.");
    \u0275\u0275elementEnd();
  }
}
function Perfil_Conditional_20_Conditional_222_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvando... ");
  }
}
function Perfil_Conditional_20_Conditional_223_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvar nome ");
  }
}
function Perfil_Conditional_20_Conditional_232_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Informe um endere\xE7o v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function Perfil_Conditional_20_Conditional_236_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 93);
    \u0275\u0275text(1, " Abrir p\xE1gina ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.urlPaginaPublica(), \u0275\u0275sanitizeUrl);
  }
}
function Perfil_Conditional_20_Conditional_238_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvando... ");
  }
}
function Perfil_Conditional_20_Conditional_239_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Salvar endere\xE7o ");
  }
}
function Perfil_Conditional_20_Conditional_240_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const modulo_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatarModulo(modulo_r12));
  }
}
function Perfil_Conditional_20_Conditional_240_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 94)(1, "header", 58)(2, "div")(3, "p");
    \u0275\u0275text(4, "ASSINATURA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Conta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 4);
    \u0275\u0275text(8, "03");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "dl", 111)(10, "div")(11, "dt");
    \u0275\u0275text(12, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "dd");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "dt");
    \u0275\u0275text(17, "Plano");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dd")(19, "span", 112);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div")(22, "dt");
    \u0275\u0275text(23, "Endere\xE7o interno");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "dd", 113);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 114)(27, "span", 115);
    \u0275\u0275text(28, "M\xF3dulos dispon\xEDveis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 116);
    \u0275\u0275repeaterCreate(30, Perfil_Conditional_20_Conditional_240_For_31_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const estudio_r4 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.autenticacao.usuario()?.email);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatarPlano(estudio_r4.status_plano), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(estudio_r4.slug);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(estudio_r4.modulos);
  }
}
function Perfil_Conditional_20_Conditional_241_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117);
    \u0275\u0275element(1, "span", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Calculando armazenamento...");
    \u0275\u0275elementEnd()();
  }
}
function Perfil_Conditional_20_Conditional_241_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 10);
    \u0275\u0275listener("click", function Perfil_Conditional_20_Conditional_241_Conditional_10_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.dadosVersoes.listar());
    });
    \u0275\u0275text(4, " Tentar novamente ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dadosVersoes.erro());
  }
}
function Perfil_Conditional_20_Conditional_241_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "utilizados");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "dispon\xEDveis");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 120);
    \u0275\u0275element(12, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 121)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatarBytes(ctx_r1.dadosVersoes.usoBytes()), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatarBytes(ctx_r1.dadosVersoes.espacoDisponivelBytes()), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-valuenow", ctx_r1.percentualUso());
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r1.percentualUso(), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.percentualUso(), "% ocupado");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Limite de ", ctx_r1.formatarBytes(ctx_r1.dadosVersoes.limiteBytes()), " ");
  }
}
function Perfil_Conditional_20_Conditional_241_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 95)(1, "header", 58)(2, "div")(3, "p");
    \u0275\u0275text(4, "ACERVO DIGITAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Armazenamento");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 4);
    \u0275\u0275text(8, "04");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, Perfil_Conditional_20_Conditional_241_Conditional_9_Template, 4, 0, "div", 117)(10, Perfil_Conditional_20_Conditional_241_Conditional_10_Template, 5, 1, "div", 118)(11, Perfil_Conditional_20_Conditional_241_Conditional_11_Template, 18, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.dadosVersoes.carregando() ? 9 : ctx_r1.dadosVersoes.erro() ? 10 : 11);
  }
}
function Perfil_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 11)(1, "div", 12)(2, "div", 13);
    \u0275\u0275conditionalCreate(3, Perfil_Conditional_20_Conditional_3_Template, 1, 2, "img", 14)(4, Perfil_Conditional_20_Conditional_4_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15)(6, "p");
    \u0275\u0275text(7, "PERFIL ATIVO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 16);
    \u0275\u0275conditionalCreate(13, Perfil_Conditional_20_Conditional_13_Template, 5, 2)(14, Perfil_Conditional_20_Conditional_14_Template, 5, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 17)(16, "div")(17, "strong");
    \u0275\u0275text(18, "Logo do est\xFAdio");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, Perfil_Conditional_20_Conditional_19_Template, 2, 1, "small")(20, Perfil_Conditional_20_Conditional_20_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18)(22, "label", 19)(23, "span");
    \u0275\u0275text(24, "Escolher arquivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 20);
    \u0275\u0275listener("change", function Perfil_Conditional_20_Template_input_change_25_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selecionarLogo($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(26, Perfil_Conditional_20_Conditional_26_Template, 3, 2, "button", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(27, Perfil_Conditional_20_Conditional_27_Template, 2, 1, "p", 22);
    \u0275\u0275conditionalCreate(28, Perfil_Conditional_20_Conditional_28_Template, 2, 1, "p", 23);
    \u0275\u0275elementStart(29, "section", 24)(30, "header", 25)(31, "div")(32, "p", 26);
    \u0275\u0275text(33, "DIRE\xC7\xC3O DE ARTE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "h2");
    \u0275\u0275text(35, "Cores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, " Uma cor principal gera os tons usados pela interface. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "span", 27);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 28)(41, "form", 29);
    \u0275\u0275listener("ngSubmit", function Perfil_Conditional_20_Template_form_ngSubmit_41_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.salvarCor());
    });
    \u0275\u0275elementStart(42, "div", 30)(43, "span", 31);
    \u0275\u0275text(44, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "h3");
    \u0275\u0275text(46, "Escolha a cor principal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "label", 32)(48, "input", 33);
    \u0275\u0275listener("input", function Perfil_Conditional_20_Template_input_input_48_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selecionarCor($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(49, "span")(50, "strong");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "small");
    \u0275\u0275text(53, "Clique na amostra para alterar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(54, Perfil_Conditional_20_Conditional_54_Template, 2, 0, "small", 34);
    \u0275\u0275elementStart(55, "div", 35);
    \u0275\u0275conditionalCreate(56, Perfil_Conditional_20_Conditional_56_Template, 2, 1, "button", 36);
    \u0275\u0275elementStart(57, "button", 37);
    \u0275\u0275conditionalCreate(58, Perfil_Conditional_20_Conditional_58_Template, 1, 0)(59, Perfil_Conditional_20_Conditional_59_Template, 1, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 38)(61, "header", 39)(62, "span")(63, "small");
    \u0275\u0275text(64, "PR\xC9VIA DA MARCA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "strong");
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(67, "i", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 40)(69, "div", 41)(70, "span", 42);
    \u0275\u0275element(71, "i");
    \u0275\u0275text(72, " Principal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 43);
    \u0275\u0275element(74, "i");
    \u0275\u0275text(75, " Superf\xEDcie ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "span", 44);
    \u0275\u0275element(77, "i");
    \u0275\u0275text(78, " Sele\xE7\xE3o ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span", 45);
    \u0275\u0275element(80, "i");
    \u0275\u0275text(81, " Contraste ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 46);
    \u0275\u0275element(83, "span", 47);
    \u0275\u0275elementStart(84, "span")(85, "strong");
    \u0275\u0275text(86, "Item selecionado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "small");
    \u0275\u0275text(88, " A identidade aparece nos destaques e a\xE7\xF5es. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "button", 48);
    \u0275\u0275text(90, " A\xE7\xE3o ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 49);
    \u0275\u0275element(92, "span")(93, "span")(94, "span");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(95, "section", 50)(96, "header", 51)(97, "div")(98, "p", 26);
    \u0275\u0275text(99, "CASA FL\xCAIVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "h3");
    \u0275\u0275text(101, "Tema");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "span");
    \u0275\u0275text(103, " Escolha um tema base. A cor e a logo do est\xFAdio continuam sendo as protagonistas. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "span", 52);
    \u0275\u0275text(105);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div", 53);
    \u0275\u0275repeaterCreate(107, Perfil_Conditional_20_For_108_Template, 12, 6, "button", 54, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "div", 55)(110, "span");
    \u0275\u0275text(111, " A altera\xE7\xE3o afeta somente a p\xE1gina p\xFAblica. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "button", 56);
    \u0275\u0275listener("click", function Perfil_Conditional_20_Template_button_click_112_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.salvarTema());
    });
    \u0275\u0275conditionalCreate(113, Perfil_Conditional_20_Conditional_113_Template, 1, 0)(114, Perfil_Conditional_20_Conditional_114_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(115, "section", 57)(116, "header", 58)(117, "div")(118, "p");
    \u0275\u0275text(119, "Presen\xE7a digital");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "h2");
    \u0275\u0275text(121, "Informa\xE7\xF5es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "span", 59);
    \u0275\u0275conditionalCreate(123, Perfil_Conditional_20_Conditional_123_Template, 1, 0)(124, Perfil_Conditional_20_Conditional_124_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(125, "form", 60);
    \u0275\u0275listener("ngSubmit", function Perfil_Conditional_20_Template_form_ngSubmit_125_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.salvarPaginaPublica());
    });
    \u0275\u0275elementStart(126, "div", 61)(127, "label", 62)(128, "span");
    \u0275\u0275text(129, "Bio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(130, "textarea", 63);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(131, "small", 64);
    \u0275\u0275text(132, " Esse texto aparecer\xE1 na p\xE1gina p\xFAblica. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "label", 65)(134, "span");
    \u0275\u0275text(135, "Endere\xE7o");
    \u0275\u0275elementEnd();
    \u0275\u0275element(136, "input", 66);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "label", 65)(138, "span");
    \u0275\u0275text(139, "WhatsApp");
    \u0275\u0275elementEnd();
    \u0275\u0275element(140, "input", 67);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "label", 65)(142, "span");
    \u0275\u0275text(143, "Instagram");
    \u0275\u0275elementEnd();
    \u0275\u0275element(144, "input", 68);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(145, "label", 69);
    \u0275\u0275element(146, "input", 70);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(147, "span")(148, "strong");
    \u0275\u0275text(149, "Publicar p\xE1gina do est\xFAdio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "small");
    \u0275\u0275text(151, " Quando desativada, as informa\xE7\xF5es permanecem salvas como rascunho. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(152, "label", 69);
    \u0275\u0275element(153, "input", 71);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(154, "span")(155, "strong");
    \u0275\u0275text(156, "Aparecer na Casa Fl\xEAiva");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "small");
    \u0275\u0275text(158, " Quando ativada, sua p\xE1gina poder\xE1 aparecer na \xE1rea de descoberta da Casa Fl\xEAiva enquanto estiver publicada. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(159, "div", 35)(160, "button", 37);
    \u0275\u0275conditionalCreate(161, Perfil_Conditional_20_Conditional_161_Template, 1, 0)(162, Perfil_Conditional_20_Conditional_162_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(163, "section", 72)(164, "header", 58)(165, "div")(166, "p");
    \u0275\u0275text(167, "CONTE\xDADO EXTERNO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "h2");
    \u0275\u0275text(169, "Trabalhos em destaque");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(170, "span", 73);
    \u0275\u0275text(171);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(172, "p", 74);
    \u0275\u0275text(173, " Adicione trabalhos publicados no Spotify, YouTube ou SoundCloud. Cole apenas o endere\xE7o original do conte\xFAdo. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(174, "form", 75);
    \u0275\u0275listener("ngSubmit", function Perfil_Conditional_20_Template_form_ngSubmit_174_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.adicionarEmbed());
    });
    \u0275\u0275elementStart(175, "label")(176, "span");
    \u0275\u0275text(177, "Plataforma");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "select", 76)(179, "option", 77);
    \u0275\u0275text(180, "Spotify");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(181, "option", 78);
    \u0275\u0275text(182, "YouTube");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(183, "option", 79);
    \u0275\u0275text(184, " SoundCloud ");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(185, "label", 80)(186, "span");
    \u0275\u0275text(187, "Endere\xE7o");
    \u0275\u0275elementEnd();
    \u0275\u0275element(188, "input", 81);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(189, "button", 82);
    \u0275\u0275text(190, " Adicionar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(191, Perfil_Conditional_20_Conditional_191_Template, 2, 0, "small", 34);
    \u0275\u0275conditionalCreate(192, Perfil_Conditional_20_Conditional_192_Template, 2, 1, "p", 22);
    \u0275\u0275conditionalCreate(193, Perfil_Conditional_20_Conditional_193_Template, 2, 1, "p", 23);
    \u0275\u0275conditionalCreate(194, Perfil_Conditional_20_Conditional_194_Template, 3, 0, "div", 83)(195, Perfil_Conditional_20_Conditional_195_Template, 5, 0, "div", 84);
    \u0275\u0275elementStart(196, "footer", 85)(197, "p");
    \u0275\u0275text(198, " Os embeds s\xF3 aparecer\xE3o na p\xE1gina quando ela estiver publicada. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(199, "button", 56);
    \u0275\u0275listener("click", function Perfil_Conditional_20_Template_button_click_199_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.salvarEmbeds());
    });
    \u0275\u0275conditionalCreate(200, Perfil_Conditional_20_Conditional_200_Template, 1, 0)(201, Perfil_Conditional_20_Conditional_201_Template, 1, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(202, "div", 86)(203, "section", 87)(204, "header", 58)(205, "div")(206, "p");
    \u0275\u0275text(207, "INFORMA\xC7\xD5ES P\xDABLICAS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(208, "h2");
    \u0275\u0275text(209, "Nome exibido");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(210, "span", 4);
    \u0275\u0275text(211, "02");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(212, "form", 60);
    \u0275\u0275listener("ngSubmit", function Perfil_Conditional_20_Template_form_ngSubmit_212_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.salvarNome());
    });
    \u0275\u0275elementStart(213, "label", 65)(214, "span");
    \u0275\u0275text(215, "Nome exibido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(216, "input", 88);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(217, Perfil_Conditional_20_Conditional_217_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(218, "p", 64);
    \u0275\u0275text(219, " Aparece no menu, na p\xE1gina p\xFAblica e nos links compartilhados. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(220, "div", 35)(221, "button", 37);
    \u0275\u0275conditionalCreate(222, Perfil_Conditional_20_Conditional_222_Template, 1, 0)(223, Perfil_Conditional_20_Conditional_223_Template, 1, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(224, "form", 89);
    \u0275\u0275listener("ngSubmit", function Perfil_Conditional_20_Template_form_ngSubmit_224_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.salvarSlug());
    });
    \u0275\u0275elementStart(225, "label", 65)(226, "span");
    \u0275\u0275text(227, "Endere\xE7o da p\xE1gina");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(228, "div", 90)(229, "span");
    \u0275\u0275text(230, "card.fleiva.com.br/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(231, "input", 91);
    \u0275\u0275listener("blur", function Perfil_Conditional_20_Template_input_blur_231_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.normalizarSlugFormulario());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(232, Perfil_Conditional_20_Conditional_232_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(233, "p", 64);
    \u0275\u0275text(234, " Use um endere\xE7o curto e f\xE1cil de compartilhar. Ao alter\xE1-lo, o endere\xE7o anterior deixa de funcionar. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(235, "div", 92);
    \u0275\u0275conditionalCreate(236, Perfil_Conditional_20_Conditional_236_Template, 2, 1, "a", 93);
    \u0275\u0275elementStart(237, "button", 37);
    \u0275\u0275conditionalCreate(238, Perfil_Conditional_20_Conditional_238_Template, 1, 0)(239, Perfil_Conditional_20_Conditional_239_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(240, Perfil_Conditional_20_Conditional_240_Template, 32, 3, "section", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(241, Perfil_Conditional_20_Conditional_241_Template, 12, 1, "section", 95);
  }
  if (rf & 2) {
    let tmp_7_0;
    const estudio_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("tem-logo", ctx_r1.dadosEstudio.logoUrl());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dadosEstudio.logoUrl() ? 3 : 4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(estudio_r4.nome);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.autenticacao.usuario()?.email);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.dadosEstudio.possuiModulos() ? 13 : 14);
    \u0275\u0275advance(6);
    \u0275\u0275conditional((tmp_7_0 = ctx_r1.arquivoSelecionado()) ? 19 : 20, tmp_7_0);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.enviandoLogo() || ctx_r1.removendoLogo());
    \u0275\u0275advance();
    \u0275\u0275conditional(estudio_r4.logo_caminho ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.erroOperacao() ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mensagemOperacao() ? 28 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.corPrevia());
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.formularioCor);
    \u0275\u0275advance(7);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.corPrevia());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.formularioCor.controls.cor_principal.touched && ctx_r1.formularioCor.controls.cor_principal.invalid ? 54 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(estudio_r4.cor_principal ? 56 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.salvandoCor());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.salvandoCor() ? 58 : 59);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(estudio_r4.nome);
    \u0275\u0275advance(39);
    \u0275\u0275textInterpolate1(" ", ctx_r1.temaPaginaPublicaPrevia(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.opcoesTemaPaginaPublica);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.salvandoTemaPaginaPublica() || !ctx_r1.temaPaginaPublicaAlterado());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.salvandoTemaPaginaPublica() ? 113 : 114);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("publicada", ctx_r1.formularioPaginaPublica.controls.landing_publicada.value);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.formularioPaginaPublica.controls.landing_publicada.value ? 123 : 124);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.formularioPaginaPublica);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275control();
    \u0275\u0275advance(7);
    \u0275\u0275control();
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.salvandoPaginaPublica());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.salvandoPaginaPublica() ? 161 : 162);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", ctx_r1.embedsPrevia().length, " / 4 ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.formularioEmbed);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(10);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.limiteEmbedsAtingido());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.formularioEmbed.controls.url.touched && ctx_r1.formularioEmbed.controls.url.invalid ? 191 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.erroEmbeds() ? 192 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mensagemEmbeds() ? 193 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.embedsPrevia().length > 0 ? 194 : 195);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.salvandoEmbeds() || !ctx_r1.embedsAlterados());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.salvandoEmbeds() ? 200 : 201);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("apenas-identificacao", !ctx_r1.dadosEstudio.possuiModulos());
    \u0275\u0275advance(10);
    \u0275\u0275property("formGroup", ctx_r1.formulario);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.formulario.controls.nome.touched && ctx_r1.formulario.controls.nome.invalid ? 217 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.salvandoNome());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.salvandoNome() ? 222 : 223);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.formularioSlug);
    \u0275\u0275advance(7);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.formularioSlug.controls.slug.touched && ctx_r1.formularioSlug.controls.slug.invalid ? 232 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.formularioPaginaPublica.controls.landing_publicada.value ? 236 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.salvandoSlug());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.salvandoSlug() ? 238 : 239);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.dadosEstudio.possuiModulos() ? 240 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dadosEstudio.possuiModulos() ? 241 : -1);
  }
}
function Perfil_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-cropper-logo", 122);
    \u0275\u0275listener("confirmado", function Perfil_Conditional_21_Template_app_cropper_logo_confirmado_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.aplicarCropper($event));
    })("cancelado", function Perfil_Conditional_21_Template_app_cropper_logo_cancelado_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelarCropper());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("arquivo", ctx);
  }
}
var Perfil = class _Perfil {
  autenticacao = inject(Autenticacao);
  dadosEstudio = inject(DadosEstudio);
  dadosVersoes = inject(DadosVersoesFaixa);
  construtorFormulario = inject(FormBuilder);
  salvandoNome = signal(
    false,
    ...ngDevMode ? [{ debugName: "salvandoNome" }] : (
      /* istanbul ignore next */
      []
    )
  );
  salvandoCor = signal(
    false,
    ...ngDevMode ? [{ debugName: "salvandoCor" }] : (
      /* istanbul ignore next */
      []
    )
  );
  salvandoTemaPaginaPublica = signal(
    false,
    ...ngDevMode ? [{ debugName: "salvandoTemaPaginaPublica" }] : (
      /* istanbul ignore next */
      []
    )
  );
  salvandoPaginaPublica = signal(
    false,
    ...ngDevMode ? [{ debugName: "salvandoPaginaPublica" }] : (
      /* istanbul ignore next */
      []
    )
  );
  enviandoLogo = signal(
    false,
    ...ngDevMode ? [{ debugName: "enviandoLogo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  removendoLogo = signal(
    false,
    ...ngDevMode ? [{ debugName: "removendoLogo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  arquivoSelecionado = signal(
    null,
    ...ngDevMode ? [{ debugName: "arquivoSelecionado" }] : (
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
  corPrevia = signal(
    COR_PADRAO_ESTUDIO,
    ...ngDevMode ? [{ debugName: "corPrevia" }] : (
      /* istanbul ignore next */
      []
    )
  );
  salvandoSlug = signal(
    false,
    ...ngDevMode ? [{ debugName: "salvandoSlug" }] : (
      /* istanbul ignore next */
      []
    )
  );
  salvandoEmbeds = signal(
    false,
    ...ngDevMode ? [{ debugName: "salvandoEmbeds" }] : (
      /* istanbul ignore next */
      []
    )
  );
  embedsPrevia = signal(
    [],
    ...ngDevMode ? [{ debugName: "embedsPrevia" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroEmbeds = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroEmbeds" }] : (
      /* istanbul ignore next */
      []
    )
  );
  arquivoParaRecortar = signal(
    null,
    ...ngDevMode ? [{ debugName: "arquivoParaRecortar" }] : (
      /* istanbul ignore next */
      []
    )
  );
  mensagemEmbeds = signal(
    null,
    ...ngDevMode ? [{ debugName: "mensagemEmbeds" }] : (
      /* istanbul ignore next */
      []
    )
  );
  temaPaginaPublicaPrevia = signal(
    "grafite",
    ...ngDevMode ? [{ debugName: "temaPaginaPublicaPrevia" }] : (
      /* istanbul ignore next */
      []
    )
  );
  opcoesTemaPaginaPublica = [
    {
      valor: "grafite",
      nome: "Grafite",
      descricao: "Creme e grafite t\xE9cnico."
    },
    {
      valor: "creme",
      nome: "Creme",
      descricao: "Claro, editorial e direto."
    },
    {
      valor: "ameixa",
      nome: "Ameixa",
      descricao: "Escuro, art\xEDstico e noturno."
    }
  ];
  temaPaginaPublicaAlterado = computed(
    () => this.temaPaginaPublicaPrevia() !== this.dadosEstudio.temaPaginaPublica(),
    ...ngDevMode ? [{ debugName: "temaPaginaPublicaAlterado" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formulario = this.construtorFormulario.group({
    nome: this.construtorFormulario.nonNullable.control("", [
      Validators.required
    ])
  });
  formularioCor = this.construtorFormulario.group({
    cor_principal: this.construtorFormulario.nonNullable.control(COR_PADRAO_ESTUDIO, [
      Validators.required,
      Validators.pattern(/^#[0-9a-fA-F]{6}$/)
    ])
  });
  formularioPaginaPublica = this.construtorFormulario.nonNullable.group({
    descricao_publica: [""],
    cidade: [""],
    whatsapp_publico: [""],
    instagram: [""],
    landing_publicada: [false],
    participar_da_casa: [false]
  });
  formularioSlug = this.construtorFormulario.nonNullable.group({
    slug: [
      "",
      [
        Validators.required,
        Validators.maxLength(120)
      ]
    ]
  });
  limiteEmbedsAtingido = computed(
    () => this.embedsPrevia().length >= 4,
    ...ngDevMode ? [{ debugName: "limiteEmbedsAtingido" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formularioEmbed = this.construtorFormulario.group({
    provedor: this.construtorFormulario.nonNullable.control("spotify"),
    url: this.construtorFormulario.nonNullable.control("", Validators.required)
  });
  embedsAlterados = computed(
    () => JSON.stringify(this.embedsPrevia()) !== JSON.stringify(this.dadosEstudio.embedsPublicos()),
    ...ngDevMode ? [{ debugName: "embedsAlterados" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    void this.carregarDados();
  }
  async carregarDados() {
    this.erroOperacao.set(null);
    await this.dadosEstudio.carregar();
    if (this.dadosEstudio.possuiModulos()) {
      void this.dadosVersoes.listar();
    }
    const estudio = this.dadosEstudio.estudio();
    if (!estudio) {
      return;
    }
    this.formulario.controls.nome.setValue(estudio.nome);
    this.formularioSlug.controls.slug.setValue(estudio.slug);
    this.formularioPaginaPublica.setValue({
      descricao_publica: estudio.descricao_publica ?? "",
      cidade: estudio.cidade ?? "",
      whatsapp_publico: estudio.whatsapp_publico ?? "",
      instagram: estudio.instagram ?? "",
      landing_publicada: estudio.landing_publicada,
      participar_da_casa: estudio.participar_da_casa ?? false
    });
    const cor = normalizarCorEstudio(estudio.cor_principal) ?? COR_PADRAO_ESTUDIO;
    this.formularioCor.controls.cor_principal.setValue(cor);
    this.corPrevia.set(cor);
    this.temaPaginaPublicaPrevia.set(normalizarTemaPaginaPublica(estudio.tema_pagina_publica));
    this.embedsPrevia.set([
      ...this.dadosEstudio.embedsPublicos()
    ]);
  }
  async salvarNome() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    this.salvandoNome.set(true);
    this.limparRetornoOperacao();
    try {
      const valor = this.formulario.getRawValue();
      await this.dadosEstudio.atualizarNome(valor.nome);
      this.mensagemOperacao.set("Nome atualizado.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.salvandoNome.set(false);
    }
  }
  normalizarSlugFormulario() {
    const controle = this.formularioSlug.controls.slug;
    controle.setValue(normalizarSlugEstudio(controle.value));
  }
  async salvarSlug() {
    this.normalizarSlugFormulario();
    if (this.formularioSlug.invalid || this.salvandoSlug()) {
      this.formularioSlug.markAllAsTouched();
      return;
    }
    this.salvandoSlug.set(true);
    this.limparRetornoOperacao();
    try {
      const { slug } = this.formularioSlug.getRawValue();
      const estudio = await this.dadosEstudio.atualizarSlug(slug);
      this.formularioSlug.controls.slug.setValue(estudio.slug);
      this.mensagemOperacao.set("Endere\xE7o da p\xE1gina atualizado.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.salvandoSlug.set(false);
    }
  }
  urlPaginaPublica() {
    const slug = normalizarSlugEstudio(this.formularioSlug.controls.slug.value);
    return `https://card.fleiva.com.br/${slug}`;
  }
  selecionarCor(evento) {
    const input = evento.target;
    const cor = normalizarCorEstudio(input.value);
    if (cor) {
      this.corPrevia.set(cor);
    }
    this.limparRetornoOperacao();
  }
  async salvarCor() {
    if (this.formularioCor.invalid) {
      this.formularioCor.markAllAsTouched();
      return;
    }
    this.salvandoCor.set(true);
    this.limparRetornoOperacao();
    try {
      const valor = this.formularioCor.getRawValue();
      const estudio = await this.dadosEstudio.atualizarCorPrincipal(valor.cor_principal);
      const cor = normalizarCorEstudio(estudio.cor_principal) ?? COR_PADRAO_ESTUDIO;
      this.formularioCor.controls.cor_principal.setValue(cor);
      this.corPrevia.set(cor);
      this.mensagemOperacao.set("Cores Atualizadas.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.salvandoCor.set(false);
    }
  }
  async restaurarCorPadrao() {
    this.salvandoCor.set(true);
    this.limparRetornoOperacao();
    try {
      await this.dadosEstudio.atualizarCorPrincipal(null);
      this.formularioCor.controls.cor_principal.setValue(COR_PADRAO_ESTUDIO);
      this.corPrevia.set(COR_PADRAO_ESTUDIO);
      this.mensagemOperacao.set("Cor padr\xE3o restaurada.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.salvandoCor.set(false);
    }
  }
  corContrastePrevia() {
    return obterCorContrasteEstudio(this.corPrevia());
  }
  selecionarTemaPaginaPublica(tema) {
    this.temaPaginaPublicaPrevia.set(tema);
    this.limparRetornoOperacao();
  }
  async salvarTema() {
    if (this.salvandoTemaPaginaPublica() || !this.temaPaginaPublicaAlterado()) {
      return;
    }
    this.salvandoTemaPaginaPublica.set(true);
    this.limparRetornoOperacao();
    try {
      const estudio = await this.dadosEstudio.atualizarTemaPaginaPublica(this.temaPaginaPublicaPrevia());
      this.temaPaginaPublicaPrevia.set(normalizarTemaPaginaPublica(estudio.tema_pagina_publica));
      this.mensagemOperacao.set("P\xE1gina p\xFAblica atualizada.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.salvandoTemaPaginaPublica.set(false);
    }
  }
  selecionarLogo(evento) {
    const input = evento.target;
    const arquivo = input.files?.item(0) ?? null;
    if (!arquivo) {
      return;
    }
    this.arquivoParaRecortar.set(arquivo);
    this.arquivoSelecionado.set(arquivo);
    this.limparRetornoOperacao();
  }
  cancelarCropper() {
    this.arquivoParaRecortar.set(null);
    this.arquivoSelecionado.set(null);
  }
  async aplicarCropper(blob) {
    if (this.enviandoLogo()) {
      return;
    }
    this.enviandoLogo.set(true);
    this.limparRetornoOperacao();
    try {
      const arquivo = new File([blob], "logo.webp", {
        type: "image/webp"
      });
      await this.dadosEstudio.enviarLogo(arquivo);
      this.arquivoParaRecortar.set(null);
      this.arquivoSelecionado.set(null);
      this.mensagemOperacao.set("Logo do est\xFAdio atualizada.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.enviandoLogo.set(false);
    }
  }
  async removerLogo() {
    const confirmou = window.confirm("Remover a logo do est\xFAdio?");
    if (!confirmou) {
      return;
    }
    this.removendoLogo.set(true);
    this.limparRetornoOperacao();
    try {
      await this.dadosEstudio.removerLogo();
      this.mensagemOperacao.set("Logo do est\xFAdio removido.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.removendoLogo.set(false);
    }
  }
  async salvarPaginaPublica() {
    if (this.salvandoPaginaPublica()) {
      return;
    }
    this.salvandoPaginaPublica.set(true);
    this.limparRetornoOperacao();
    try {
      const valor = this.formularioPaginaPublica.getRawValue();
      const configuracao = {
        descricao_publica: valor.descricao_publica,
        cidade: valor.cidade,
        whatsapp_publico: valor.whatsapp_publico,
        instagram: valor.instagram,
        landing_publicada: valor.landing_publicada,
        participar_da_casa: valor.participar_da_casa
      };
      const estudio = await this.dadosEstudio.atualizarConfiguracaoPublica(configuracao);
      this.formularioPaginaPublica.setValue({
        descricao_publica: estudio.descricao_publica ?? "",
        cidade: estudio.cidade ?? "",
        whatsapp_publico: estudio.whatsapp_publico ?? "",
        instagram: estudio.instagram ?? "",
        landing_publicada: estudio.landing_publicada,
        participar_da_casa: estudio.participar_da_casa ?? false
      });
      this.mensagemOperacao.set(estudio.landing_publicada ? "P\xE1gina p\xFAblica atualizada e publicada." : "Configura\xE7\xF5es salvas. A p\xE1gina continua em rascunho.");
    } catch (erro) {
      this.erroOperacao.set(this.obterMensagemErro(erro));
    } finally {
      this.salvandoPaginaPublica.set(false);
    }
  }
  inicialEstudio() {
    const nome = this.dadosEstudio.estudio()?.nome.trim();
    return nome?.charAt(0).toUpperCase() || "F";
  }
  formatarModulo(modulo) {
    const rotulos = {
      agenda: "Agenda",
      artistas: "Projetos",
      faixas: "Faixas",
      financeiro: "Acertos"
    };
    return rotulos[modulo] ?? this.formatarTexto(modulo);
  }
  formatarPlano(plano) {
    return this.formatarTexto(plano);
  }
  formatarBytes(bytes) {
    if (bytes < 1e3) {
      return `${bytes} B`;
    }
    const unidades = ["KB", "MB", "GB", "TB"];
    let valor = bytes / 1e3;
    let indice = 0;
    while (valor >= 1e3 && indice < unidades.length - 1) {
      valor /= 1e3;
      indice += 1;
    }
    return `${new Intl.NumberFormat("pt-BR", {
      maximumFractionDigits: 1
    }).format(valor)} ${unidades[indice]}`;
  }
  percentualUso() {
    const limite = this.dadosVersoes.limiteBytes();
    if (limite <= 0) {
      return 0;
    }
    return Math.min(this.dadosVersoes.usoBytes() / limite * 100, 100);
  }
  formatarTexto(valor) {
    const texto = valor.replace(/_/g, " ").trim().toLocaleLowerCase("pt-BR");
    return texto ? texto.charAt(0).toLocaleUpperCase("pt-BR") + texto.slice(1) : valor;
  }
  limparRetornoOperacao() {
    this.erroOperacao.set(null);
    this.mensagemOperacao.set(null);
  }
  obterMensagemErro(erro) {
    if (typeof erro === "object" && erro !== null && "message" in erro) {
      return String(erro.message);
    }
    return "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o.";
  }
  adicionarEmbed() {
    if (this.formularioEmbed.invalid || this.limiteEmbedsAtingido()) {
      this.formularioEmbed.markAllAsTouched();
      return;
    }
    this.erroEmbeds.set(null);
    this.mensagemEmbeds.set(null);
    const { provedor, url: urlRecebida } = this.formularioEmbed.getRawValue();
    const url = normalizarUrlEmbedPublico(provedor, urlRecebida);
    if (!url) {
      this.erroEmbeds.set(`O endere\xE7o informado para ${this.formatarProvedorEmbed(provedor)} n\xE3o \xE9 v\xE1lido.`);
      return;
    }
    const duplicado = this.embedsPrevia().some((embed) => embed.provedor === provedor && embed.url === url);
    if (duplicado) {
      this.erroEmbeds.set("Este conte\xFAdo j\xE1 foi adicionado.");
      return;
    }
    this.embedsPrevia.update((embeds) => [
      ...embeds,
      {
        provedor,
        url
      }
    ]);
    this.formularioEmbed.controls.url.setValue("");
    this.formularioEmbed.controls.url.markAsUntouched();
  }
  removerEmbed(indice) {
    this.embedsPrevia.update((embeds) => embeds.filter((_, indiceAtual) => indiceAtual !== indice));
    this.erroEmbeds.set(null);
    this.mensagemEmbeds.set(null);
  }
  async salvarEmbeds() {
    if (this.salvandoEmbeds() || !this.embedsAlterados()) {
      return;
    }
    this.salvandoEmbeds.set(true);
    this.erroEmbeds.set(null);
    this.mensagemEmbeds.set(null);
    try {
      await this.dadosEstudio.atualizarEmbedsPublicos(this.embedsPrevia());
      this.embedsPrevia.set([
        ...this.dadosEstudio.embedsPublicos()
      ]);
      this.mensagemEmbeds.set("Conte\xFAdos externos atualizados.");
    } catch (erro) {
      this.erroEmbeds.set(this.obterMensagemErro(erro));
    } finally {
      this.salvandoEmbeds.set(false);
    }
  }
  formatarProvedorEmbed(provedor) {
    const nomes = {
      spotify: "Spotify",
      youtube: "YouTube",
      soundcloud: "SoundCloud"
    };
    return nomes[provedor];
  }
  static \u0275fac = function Perfil_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Perfil)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Perfil, selectors: [["app-perfil"]], decls: 22, vars: 9, consts: [[1, "pagina-perfil", "tema-estudio"], [1, "cabecalho-pagina"], [1, "secao"], ["aria-label", "Fleiva Studios", 1, "assinatura-fleiva"], ["aria-hidden", "true"], [1, "estado", "estado-carregando"], [1, "estado", "estado-erro"], [3, "arquivo"], ["aria-hidden", "true", 1, "carregador"], ["aria-hidden", "true", 1, "simbolo-estado"], ["type", "button", 1, "botao-secundario", 3, "click"], [1, "identidade"], [1, "marca-estudio"], [1, "logo-atual"], [3, "src", "alt"], [1, "identificacao"], [1, "estado-conta"], [1, "edicao-logo"], [1, "acoes-logo"], [1, "seletor-arquivo"], ["type", "file", "accept", ".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp", 3, "change", "disabled"], ["type", "button", 1, "botao-remover-logo", 3, "disabled"], [1, "retorno", "retorno-erro"], [1, "retorno", "retorno-sucesso"], [1, "aparencia"], [1, "titulo-secao"], [1, "rotulo-menor"], [1, "codigo-cor"], [1, "conteudo-aparencia"], [1, "formulario-cor", 3, "ngSubmit", "formGroup"], [1, "introducao-cor"], [1, "numero-etapa"], [1, "seletor-cor"], ["type", "color", "formControlName", "cor_principal", "aria-label", "Cor principal do est\xFAdio", 3, "input"], [1, "erro-campo"], [1, "acoes-formulario"], ["type", "button", 1, "botao-secundario", 3, "disabled"], ["type", "submit", 1, "botao-principal", 3, "disabled"], [1, "previa-paleta"], [1, "faixa-previa"], [1, "corpo-previa"], [1, "amostras"], [1, "amostra", "amostra-principal"], [1, "amostra", "amostra-suave"], [1, "amostra", "amostra-borda"], [1, "amostra", "amostra-escura"], [1, "componente-previa"], [1, "marcador-previa"], ["type", "button", "tabindex", "-1"], ["aria-hidden", "true", 1, "linha-decorativa"], [1, "ambiente-publico"], [1, "cabecalho-ambiente"], [1, "tema-selecionado"], ["role", "radiogroup", "aria-label", "P\xE1gina p\xFAblica", 1, "opcoes-ambiente"], ["type", "button", "role", "radio", 1, "opcao-ambiente", 3, "selecionada"], [1, "acoes-ambiente"], ["type", "button", 1, "botao-principal", 3, "click", "disabled"], [1, "painel", "configuracao-publica"], [1, "titulo-painel"], [1, "estado-publicacao"], [3, "ngSubmit", "formGroup"], [1, "campos-publicos"], [1, "campo-texto", "campo-publico-largo"], ["rows", "5", "formControlName", "descricao_publica", "placeholder", "Conte brevemente sobre o est\xFAdio, sua proposta e o tipo de trabalho realizado."], [1, "ajuda-campo"], [1, "campo-texto"], ["type", "text", "formControlName", "cidade", "placeholder", "Ex.: S\xE3o Paulo, SP"], ["type", "tel", "inputmode", "tel", "formControlName", "whatsapp_publico", "placeholder", "Ex.: +55 11 99999-9999"], ["type", "text", "formControlName", "instagram", "placeholder", "Ex.: @nomedoestudio"], [1, "controle-publicacao"], ["type", "checkbox", "formControlName", "landing_publicada"], ["type", "checkbox", "formControlName", "participar_da_casa"], [1, "painel", "configuracao-embeds"], [1, "contador-embeds"], [1, "introducao-embeds"], [1, "editor-embed", 3, "ngSubmit", "formGroup"], ["formControlName", "provedor"], ["value", "spotify"], ["value", "youtube"], ["value", "soundcloud"], [1, "campo-url-embed"], ["type", "url", "formControlName", "url", "inputmode", "url", "autocomplete", "url", "placeholder", "https://..."], ["type", "submit", 1, "botao-secundario", "botao-adicionar-embed", 3, "disabled"], [1, "lista-embeds"], [1, "estado-embeds-vazio"], [1, "rodape-embeds"], [1, "grade-informacoes"], [1, "painel", "identificacao-painel"], ["type", "text", "formControlName", "nome", "placeholder", "Nome exibido"], [1, "formulario-endereco", 3, "ngSubmit", "formGroup"], [1, "controle-slug"], ["type", "text", "formControlName", "slug", "autocomplete", "off", "spellcheck", "false", "placeholder", "nome-do-estudio", 3, "blur"], [1, "acoes-endereco"], ["target", "_blank", "rel", "noopener noreferrer", 1, "botao-secundario", 3, "href"], [1, "painel", "conta-painel"], [1, "painel", "armazenamento"], ["type", "button", 1, "botao-remover-logo", 3, "click", "disabled"], ["type", "button", 1, "botao-secundario", 3, "click", "disabled"], ["type", "button", "role", "radio", 1, "opcao-ambiente", 3, "click"], ["aria-hidden", "true", 1, "miniatura-ambiente"], [1, "miniatura-topo"], [1, "miniatura-titulo"], [1, "miniatura-texto"], [1, "miniatura-cartao"], [1, "descricao-ambiente"], ["aria-hidden", "true", 1, "marcador-ambiente"], [1, "item-embed"], [1, "numero-embed"], [1, "dados-embed"], ["target", "_blank", "rel", "noopener noreferrer", 1, "acao-embed", 3, "href"], ["type", "button", 1, "acao-embed", "acao-remover-embed", 3, "click"], [1, "informacoes"], [1, "plano"], [1, "texto-mono"], [1, "modulos"], [1, "rotulo"], [1, "lista-modulos"], [1, "estado", "estado-menor"], [1, "estado", "estado-menor", "estado-erro"], [1, "cabecalho-armazenamento"], ["role", "progressbar", "aria-label", "Armazenamento utilizado", "aria-valuemin", "0", "aria-valuemax", "100", 1, "barra-armazenamento"], [1, "resumo-armazenamento"], [3, "confirmado", "cancelado", "arquivo"]], template: function Perfil_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "header", 1)(2, "div")(3, "p", 2);
      \u0275\u0275conditionalCreate(4, Perfil_Conditional_4_Template, 1, 0)(5, Perfil_Conditional_5_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275conditionalCreate(7, Perfil_Conditional_7_Template, 1, 0)(8, Perfil_Conditional_8_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275conditionalCreate(10, Perfil_Conditional_10_Template, 1, 0)(11, Perfil_Conditional_11_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 3);
      \u0275\u0275element(13, "span", 4);
      \u0275\u0275elementStart(14, "strong");
      \u0275\u0275text(15, "FLEIVA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "small");
      \u0275\u0275text(17, "STUDIOS");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(18, Perfil_Conditional_18_Template, 4, 0, "section", 5)(19, Perfil_Conditional_19_Template, 9, 1, "section", 6)(20, Perfil_Conditional_20_Template, 242, 50);
      \u0275\u0275conditionalCreate(21, Perfil_Conditional_21_Template, 1, 1, "app-cropper-logo", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_5_0;
      let tmp_6_0;
      \u0275\u0275styleProp("--studio-brand", ctx.corPrevia())("--studio-on-brand", ctx.corContrastePrevia());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.dadosEstudio.possuiModulos() ? 4 : 5);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.dadosEstudio.possuiModulos() ? 7 : 8);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.dadosEstudio.possuiModulos() ? 10 : 11);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.dadosEstudio.carregando() ? 18 : ctx.dadosEstudio.erro() ? 19 : (tmp_5_0 = ctx.dadosEstudio.estudio()) ? 20 : -1, tmp_5_0);
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_6_0 = ctx.arquivoParaRecortar()) ? 21 : -1, tmp_6_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CropperLogo], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  color: var(--app-text);\n}\n.pagina-perfil[_ngcontent-%COMP%] {\n  width: min(78rem, 100% - 2rem);\n  margin: 0 auto;\n  padding: 2.5rem 0 5rem;\n}\n.cabecalho-pagina[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n.cabecalho-pagina[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0.45rem;\n  font-size: clamp(2.7rem, 7vw, 5.4rem);\n  font-weight: 760;\n  line-height: 0.88;\n  letter-spacing: -0.07em;\n}\n.cabecalho-pagina[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.secao) {\n  max-width: 42rem;\n  margin: 0;\n  color: var(--app-text-soft);\n  line-height: 1.5;\n}\n.secao[_ngcontent-%COMP%], \n.rotulo-menor[_ngcontent-%COMP%], \n.titulo-painel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--studio-brand);\n  font-size: 0.62rem;\n  font-weight: 760;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.assinatura-fleiva[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto;\n  align-items: center;\n  gap: 0 0.35rem;\n  padding-bottom: 0.25rem;\n}\n.assinatura-fleiva[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 0.62rem;\n  height: 0.62rem;\n  grid-row: 1/3;\n  background: var(--studio-brand);\n  border-radius: 999rem;\n}\n.assinatura-fleiva[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  letter-spacing: 0.14em;\n}\n.assinatura-fleiva[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.48rem;\n  letter-spacing: 0.18em;\n}\nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%] {\n  font: inherit;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.5;\n}\n.identidade[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) minmax(17rem, 0.6fr);\n  align-items: center;\n  gap: clamp(1.5rem, 4vw, 3rem);\n  min-height: 14rem;\n  overflow: hidden;\n  padding: clamp(1.25rem, 4vw, 2.2rem);\n  background:\n    radial-gradient(\n      circle at 12% 0,\n      color-mix(in srgb, var(--studio-brand) 42%, transparent),\n      transparent 22rem),\n    linear-gradient(\n      125deg,\n      #161916,\n      #0d0f0d);\n  color: #f4f6f2;\n  border: 0.0625rem solid #2e322e;\n  border-radius: 0.4rem;\n  box-shadow: 0 1.6rem 4rem rgba(13, 16, 13, 0.18);\n}\n.identidade[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: -7rem;\n  right: -5rem;\n  width: 17rem;\n  height: 17rem;\n  border: 0.0625rem solid color-mix(in srgb, var(--studio-brand) 35%, transparent);\n  border-radius: 999rem;\n  content: "";\n}\n.marca-estudio[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: clamp(1rem, 3vw, 1.6rem);\n}\n.logo-atual[_ngcontent-%COMP%] {\n  display: grid;\n  width: clamp(6rem, 12vw, 8.5rem);\n  aspect-ratio: 1;\n  flex: 0 0 auto;\n  place-items: center;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.16),\n      transparent),\n    var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0.0625rem solid color-mix(in srgb, var(--studio-brand) 60%, #ffffff);\n  border-radius: 0.25rem;\n  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.28), 0.8rem 0.8rem 0 color-mix(in srgb, var(--studio-brand) 22%, transparent);\n}\n.logo-atual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.logo-atual[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 5vw, 3.5rem);\n  font-weight: 800;\n}\n.logo-atual.tem-logo[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: rgba(255, 255, 255, 0.18);\n  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.28);\n}\n.logo-atual.tem-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: contain;\n}\n.identificacao[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.identificacao[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: color-mix(in srgb, var(--studio-brand) 65%, #ffffff);\n  font-size: 0.55rem;\n  font-weight: 760;\n  letter-spacing: 0.14em;\n}\n.identificacao[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0.35rem 0 0.4rem;\n  font-size: clamp(1.8rem, 5vw, 3.4rem);\n  line-height: 0.95;\n  letter-spacing: -0.06em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.identificacao[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  color: #9ca29c;\n  font-size: 0.68rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.estado-conta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  color: #aeb3ae;\n  font-size: 0.58rem;\n  text-transform: uppercase;\n}\n.estado-conta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 0.25rem;\n  height: 0.25rem;\n  background: var(--studio-brand);\n  border-radius: 999rem;\n}\n.edicao-logo[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  gap: 0.8rem;\n  padding: 1rem;\n  background: rgba(255, 255, 255, 0.05);\n  border: 0.0625rem solid rgba(255, 255, 255, 0.12);\n  -webkit-backdrop-filter: blur(0.5rem);\n  backdrop-filter: blur(0.5rem);\n}\n.edicao-logo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  display: grid;\n  gap: 0.2rem;\n}\n.edicao-logo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.edicao-logo[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: #8d938d;\n  font-size: 0.57rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.acoes-logo[_ngcontent-%COMP%], \n.acoes-formulario[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.45rem;\n}\n.seletor-arquivo[_ngcontent-%COMP%] {\n  display: block;\n}\n.seletor-arquivo[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 2.35rem;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 0.68rem;\n  background: transparent;\n  color: #e5e8e5;\n  border: 0.0625rem solid #454a45;\n  border-radius: 0.2rem;\n  font-size: 0.61rem;\n  font-weight: 720;\n  cursor: pointer;\n}\n.seletor-arquivo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  opacity: 0;\n}\n.botao-principal[_ngcontent-%COMP%], \n.botao-secundario[_ngcontent-%COMP%], \n.botao-claro[_ngcontent-%COMP%], \n.botao-remover-logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 2.4rem;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.2rem;\n  font-size: 0.64rem;\n  font-weight: 720;\n}\n.botao-principal[_ngcontent-%COMP%] {\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0.0625rem solid var(--studio-brand);\n  box-shadow: 0 0.5rem 1.25rem color-mix(in srgb, var(--studio-brand) 20%, transparent);\n}\n.botao-principal[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94) saturate(1.08);\n}\n.botao-secundario[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n}\n.botao-secundario[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--app-surface-muted);\n}\n.botao-claro[_ngcontent-%COMP%] {\n  background: #f0f2ef;\n  color: #161916;\n  border: 0.0625rem solid #f0f2ef;\n}\n.botao-remover-logo[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #ff8e87;\n  border: 0.0625rem solid transparent;\n}\n.botao-remover-logo[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(180, 58, 51, 0.15);\n  border-color: rgba(255, 142, 135, 0.35);\n}\n.retorno[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  padding: 0.75rem 0.85rem;\n  border-radius: 0.25rem;\n  font-size: 0.7rem;\n}\n.retorno-sucesso[_ngcontent-%COMP%] {\n  background: var(--color-success-soft);\n  color: var(--color-success);\n  border: 0.0625rem solid var(--color-success-border);\n}\n.retorno-erro[_ngcontent-%COMP%] {\n  background: var(--color-danger-soft);\n  color: var(--color-danger);\n  border: 0.0625rem solid var(--color-danger-border);\n}\n.aparencia[_ngcontent-%COMP%] {\n  margin-top: 2.7rem;\n}\n.titulo-secao[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.titulo-secao[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0.25rem;\n  font-size: clamp(1.5rem, 4vw, 2.2rem);\n  letter-spacing: -0.045em;\n}\n.titulo-secao[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.68rem;\n}\n.codigo-cor[_ngcontent-%COMP%] {\n  padding: 0.32rem 0.5rem;\n  background: var(--app-text);\n  color: var(--app-surface);\n  border-radius: 999rem;\n  font-family: var(--font-mono);\n  font-size: 0.62rem;\n  text-transform: uppercase;\n}\n.conteudo-aparencia[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(17rem, 0.72fr) minmax(24rem, 1.28fr);\n  gap: 1rem;\n}\n.formulario-endereco[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  padding-top: 1.25rem;\n  border-top: 0.0625rem solid var(--app-border);\n}\n.controle-slug[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: stretch;\n  background: var(--app-surface-muted);\n  border: 0.0625rem solid var(--app-border-strong);\n}\n.controle-slug[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  padding: 0 0.65rem;\n  color: var(--app-text-muted);\n  border-right: 0.0625rem solid var(--app-border);\n  font-family: var(--font-mono);\n  font-size: 0.62rem;\n}\n.controle-slug[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-width: 0;\n  border: 0;\n  border-radius: 0;\n  font-family: var(--font-mono);\n}\n.controle-slug[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: inset 0 0 0 0.1rem var(--studio-brand);\n}\n.controle-slug[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--studio-brand);\n}\n.acoes-endereco[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n.acoes-endereco[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-decoration: none;\n}\n@media (max-width: 38rem) {\n  .controle-slug[_ngcontent-%COMP%] {\n    display: grid;\n  }\n  .controle-slug[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    min-height: 2.2rem;\n    border-right: 0;\n    border-bottom: 0.0625rem solid var(--app-border);\n  }\n  .acoes-endereco[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}\n.formulario-cor[_ngcontent-%COMP%], \n.previa-paleta[_ngcontent-%COMP%], \n.painel[_ngcontent-%COMP%] {\n  background: var(--app-surface);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 0.35rem;\n  box-shadow: var(--shadow-medium);\n}\n.formulario-cor[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  padding: 1.1rem;\n}\n.introducao-cor[_ngcontent-%COMP%] {\n  margin-bottom: 1.35rem;\n}\n.introducao-cor[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0.4rem;\n  font-size: 1rem;\n}\n.introducao-cor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.66rem;\n  line-height: 1.5;\n}\n.numero-etapa[_ngcontent-%COMP%] {\n  color: var(--studio-brand);\n  font-family: var(--font-mono);\n  font-size: 0.58rem;\n  font-weight: 760;\n}\n.seletor-cor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  padding: 0.75rem;\n  background: var(--app-surface-muted);\n  border: 0.0625rem solid var(--app-border);\n  cursor: pointer;\n}\n.seletor-cor[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 4.5rem;\n  height: 4.5rem;\n  flex: 0 0 auto;\n  padding: 0.25rem;\n  background: #ffffff;\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 0.15rem;\n  cursor: pointer;\n}\n.seletor-cor[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n.seletor-cor[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-color-swatch, \n.seletor-cor[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-color-swatch {\n  border: 0;\n  border-radius: 0.08rem;\n}\n.seletor-cor[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.18rem;\n}\n.seletor-cor[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  font-size: 0.78rem;\n  text-transform: uppercase;\n}\n.seletor-cor[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.6rem;\n}\n.erro-campo[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  color: var(--color-danger);\n  font-size: 0.62rem;\n}\n.formulario-cor[_ngcontent-%COMP%]   .acoes-formulario[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 1rem;\n}\n.previa-paleta[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n}\n.faixa-previa[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 7.5rem;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      115deg,\n      rgba(255, 255, 255, 0.1),\n      transparent),\n    var(--studio-brand-dark);\n  color: #ffffff;\n}\n.faixa-previa[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.3rem;\n}\n.faixa-previa[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.55);\n  font-size: 0.52rem;\n  letter-spacing: 0.12em;\n}\n.faixa-previa[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  max-width: 24ch;\n  overflow: hidden;\n  font-size: clamp(1.3rem, 4vw, 2.4rem);\n  letter-spacing: -0.055em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.faixa-previa[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  background: var(--studio-brand);\n  border: 0.15rem solid rgba(255, 255, 255, 0.35);\n  border-radius: 999rem;\n}\n.corpo-previa[_ngcontent-%COMP%] {\n  padding: 0.9rem;\n}\n.amostras[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.45rem;\n}\n.amostra[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.4rem;\n  color: var(--app-text-muted);\n  font-size: 0.55rem;\n}\n.amostra[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  height: 2.5rem;\n  border: 0.0625rem solid var(--app-border);\n  border-radius: 0.15rem;\n}\n.amostra-principal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: var(--studio-brand);\n}\n.amostra-suave[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: var(--studio-brand-soft);\n}\n.amostra-borda[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: var(--studio-brand-muted);\n}\n.amostra-escura[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: var(--studio-brand-dark);\n}\n.componente-previa[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 0.7rem;\n  margin-top: 0.9rem;\n  padding: 0.75rem;\n  background: var(--studio-brand-soft);\n  border: 0.0625rem solid var(--studio-brand-border);\n  border-radius: 0.2rem;\n  box-shadow: inset 0.16rem 0 var(--studio-brand);\n}\n.componente-previa[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2) {\n  display: grid;\n  gap: 0.15rem;\n}\n.componente-previa[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n}\n.componente-previa[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.56rem;\n}\n.componente-previa[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 2rem;\n  padding: 0.35rem 0.55rem;\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0.0625rem solid var(--studio-brand);\n  border-radius: 0.15rem;\n  font-size: 0.58rem;\n  font-weight: 720;\n  pointer-events: none;\n}\n.marcador-previa[_ngcontent-%COMP%] {\n  width: 0.55rem;\n  height: 0.55rem;\n  background: var(--studio-brand);\n  border-radius: 999rem;\n}\n.linha-decorativa[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.35rem;\n  margin-top: 0.9rem;\n}\n.linha-decorativa[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 0.18rem;\n  flex: 1;\n  background: var(--app-surface-strong);\n}\n.linha-decorativa[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  background: var(--studio-brand);\n}\n.ambiente-publico[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 1.1rem;\n  background: var(--app-surface);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 0.35rem;\n  box-shadow: var(--shadow-medium);\n}\n.cabecalho-ambiente[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.cabecalho-ambiente[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0.25rem;\n  font-size: 1rem;\n}\n.cabecalho-ambiente[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.66rem;\n}\n.tema-selecionado[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.5rem;\n  background: var(--studio-brand-soft);\n  color: var(--app-text-soft);\n  border: 0.0625rem solid var(--studio-brand-border);\n  border-radius: 999rem;\n  font-family: var(--font-mono);\n  font-size: 0.56rem;\n  text-transform: uppercase;\n}\n.opcoes-ambiente[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.65rem;\n}\n.opcao-ambiente[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-width: 0;\n  gap: 0.7rem;\n  padding: 0.7rem;\n  background: var(--app-surface-muted);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: 0.25rem;\n  text-align: left;\n  transition:\n    border-color 150ms ease,\n    box-shadow 150ms ease,\n    transform 150ms ease;\n}\n.opcao-ambiente[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--app-border-strong);\n  transform: translateY(-0.08rem);\n}\n.opcao-ambiente.selecionada[_ngcontent-%COMP%] {\n  border-color: var(--studio-brand);\n  box-shadow: inset 0 0 0 0.0625rem var(--studio-brand), 0 0.7rem 1.6rem color-mix(in srgb, var(--studio-brand) 10%, transparent);\n}\n.miniatura-ambiente[_ngcontent-%COMP%] {\n  --mini-fundo: #101210;\n  --mini-texto: #151815;\n  --mini-superficie: #191c19;\n  position: relative;\n  display: block;\n  width: 100%;\n  aspect-ratio: 1.75;\n  overflow: hidden;\n  background: var(--mini-fundo);\n  border: 0.0625rem solid rgba(20, 23, 20, 0.16);\n}\n.miniatura-ambiente[data-tema=grafite][_ngcontent-%COMP%] {\n  --mini-fundo:\n    linear-gradient(\n      \n      180deg,\n      #f1efe5 0 59%,\n      #101210 59% );\n  --mini-texto: #151815;\n  --mini-superficie: #191c19;\n}\n.miniatura-ambiente[data-tema=creme][_ngcontent-%COMP%] {\n  --mini-fundo: #f1efe5;\n  --mini-texto: #151815;\n  --mini-superficie: #ffffff;\n}\n.miniatura-ambiente[data-tema=ameixa][_ngcontent-%COMP%] {\n  --mini-fundo: #2a1d25;\n  --mini-texto: #f1efe5;\n  --mini-superficie: #382832;\n}\n.miniatura-ambiente[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n}\n.miniatura-topo[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 0.32rem;\n  background: var(--studio-brand);\n}\n.miniatura-titulo[_ngcontent-%COMP%] {\n  top: 27%;\n  left: 8%;\n  width: 42%;\n  height: 0.38rem;\n  background: var(--mini-texto);\n}\n.miniatura-texto[_ngcontent-%COMP%] {\n  top: 39%;\n  left: 8%;\n  width: 28%;\n  height: 0.17rem;\n  background: var(--mini-texto);\n  opacity: 0.45;\n}\n.miniatura-cartao[_ngcontent-%COMP%] {\n  right: 7%;\n  bottom: 9%;\n  width: 34%;\n  height: 45%;\n  background: var(--mini-superficie);\n  border: 0.0625rem solid color-mix(in srgb, var(--studio-brand) 45%, transparent);\n  box-shadow: 0.18rem 0.18rem 0 var(--studio-brand);\n}\n.descricao-ambiente[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.15rem;\n}\n.descricao-ambiente[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.descricao-ambiente[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.58rem;\n  line-height: 1.4;\n}\n.marcador-ambiente[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.65rem;\n  bottom: 0.65rem;\n  width: 0.7rem;\n  height: 0.7rem;\n  background: transparent;\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 999rem;\n}\n.opcao-ambiente.selecionada[_ngcontent-%COMP%]   .marcador-ambiente[_ngcontent-%COMP%] {\n  background: var(--studio-brand);\n  border-color: var(--studio-brand);\n  box-shadow: inset 0 0 0 0.14rem var(--app-surface);\n}\n.acoes-ambiente[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 0.0625rem solid var(--app-border);\n}\n.acoes-ambiente[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.59rem;\n}\n.grade-informacoes[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n  margin-top: 1rem;\n}\n.painel[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 1.1rem;\n}\n.titulo-painel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.titulo-painel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  font-size: 1rem;\n  letter-spacing: -0.025em;\n}\n.titulo-painel[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-family: var(--font-mono);\n  font-size: 0.58rem;\n}\n.campo-texto[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.38rem;\n}\n.campo-texto[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 0.67rem;\n  font-weight: 720;\n}\n.campo-texto[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n  font-size: 0.61rem;\n}\n.campo-texto[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 2.6rem;\n  box-sizing: border-box;\n  padding: 0.6rem 0.68rem;\n  background: #ffffff;\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 0.2rem;\n  outline: none;\n}\n.campo-texto[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--studio-brand);\n  box-shadow: 0 0 0 0.15rem var(--studio-brand-soft);\n}\n.ajuda-campo[_ngcontent-%COMP%] {\n  margin: 0.45rem 0 0;\n  color: var(--app-text-muted);\n  font-size: 0.58rem;\n}\n.identificacao-painel[_ngcontent-%COMP%]   .acoes-formulario[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.informacoes[_ngcontent-%COMP%] {\n  display: grid;\n  margin: 0;\n}\n.informacoes[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 7rem minmax(0, 1fr);\n  gap: 1rem;\n  padding: 0.65rem 0;\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.informacoes[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], \n.informacoes[_ngcontent-%COMP%]   .modulos[_ngcontent-%COMP%]   .rotulo[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.64rem;\n}\n.informacoes[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  min-width: 0;\n  margin: 0;\n  overflow-wrap: anywhere;\n  font-size: 0.68rem;\n  font-weight: 680;\n}\n.plano[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.22rem 0.4rem;\n  background: var(--color-warning-soft);\n  color: var(--color-warning);\n  border: 0.0625rem solid var(--color-warning-border);\n  border-radius: 999rem;\n  font-size: 0.57rem;\n  text-transform: uppercase;\n}\n.modulos[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n  margin-top: 0.9rem;\n}\n.modulos[_ngcontent-%COMP%]   .rotulo[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.64rem;\n}\n.lista-modulos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n}\n.lista-modulos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.45rem;\n  background: var(--studio-brand-soft);\n  color: var(--app-text-soft);\n  border: 0.0625rem solid var(--studio-brand-border);\n  border-radius: 999rem;\n  font-size: 0.58rem;\n  font-weight: 680;\n}\n.armazenamento[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.cabecalho-armazenamento[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.cabecalho-armazenamento[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.15rem;\n}\n.cabecalho-armazenamento[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: clamp(1.15rem, 3vw, 1.55rem);\n  letter-spacing: -0.04em;\n}\n.cabecalho-armazenamento[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  font-size: 0.6rem;\n}\n.barra-armazenamento[_ngcontent-%COMP%] {\n  height: 0.45rem;\n  overflow: hidden;\n  background: var(--app-surface-strong);\n  border-radius: 999rem;\n}\n.barra-armazenamento[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  background: var(--studio-brand);\n  border-radius: inherit;\n  transition: width 180ms ease;\n}\n.resumo-armazenamento[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: 0.55rem;\n  color: var(--app-text-muted);\n  font-size: 0.58rem;\n}\n.estado[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 20rem;\n  place-content: center;\n  justify-items: center;\n  padding: 2rem;\n  background: var(--app-surface);\n  color: var(--app-text-muted);\n  border: 0.0625rem solid var(--app-border-strong);\n  text-align: center;\n}\n.estado[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 0.35rem;\n  color: var(--app-text);\n}\n.estado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 30rem;\n  margin: 0 0 1rem;\n  font-size: 0.72rem;\n}\n.estado-menor[_ngcontent-%COMP%] {\n  min-height: 9rem;\n  padding: 1rem;\n  border: 0;\n}\n.simbolo-estado[_ngcontent-%COMP%] {\n  display: grid;\n  width: 3.5rem;\n  height: 3.5rem;\n  place-items: center;\n  background: var(--color-danger);\n  color: #ffffff;\n  border-radius: 0.3rem;\n  font-size: 1.2rem;\n  font-weight: 780;\n}\n.carregador[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  box-sizing: border-box;\n  margin-bottom: 0.8rem;\n  border: 0.14rem solid var(--app-border);\n  border-top-color: var(--studio-brand);\n  border-radius: 999rem;\n  animation: _ngcontent-%COMP%_girar 650ms linear infinite;\n}\n@keyframes _ngcontent-%COMP%_girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .carregador[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 62rem) {\n  .identidade[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .edicao-logo[_ngcontent-%COMP%] {\n    max-width: 34rem;\n  }\n  .conteudo-aparencia[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 48rem) {\n  .pagina-perfil[_ngcontent-%COMP%] {\n    padding-top: 1.5rem;\n  }\n  .cabecalho-pagina[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .grade-informacoes[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .opcoes-ambiente[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .marca-estudio[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n}\n@media (max-width: 34rem) {\n  .identidade[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .marca-estudio[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .logo-atual[_ngcontent-%COMP%] {\n    width: 5.5rem;\n  }\n  .identificacao[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .acoes-logo[_ngcontent-%COMP%], \n   .acoes-formulario[_ngcontent-%COMP%], \n   .acoes-ambiente[_ngcontent-%COMP%] {\n    width: 100%;\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .acoes-logo[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n   .acoes-formulario[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n   .acoes-ambiente[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .amostras[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .componente-previa[_ngcontent-%COMP%] {\n    grid-template-columns: auto minmax(0, 1fr);\n  }\n  .componente-previa[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n  .informacoes[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.2rem;\n  }\n  .cabecalho-armazenamento[_ngcontent-%COMP%], \n   .resumo-armazenamento[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    flex-direction: column;\n    gap: 0.4rem;\n  }\n}\n.configuracao-publica[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.estado-publicacao[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.65rem;\n  background: var(--color-warning-soft);\n  color: var(--color-warning);\n  border: 0.0625rem solid var(--color-warning-border);\n  border-radius: var(--radius-round);\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.estado-publicacao.publicada[_ngcontent-%COMP%] {\n  background: var(--color-success-soft);\n  color: var(--color-success);\n  border-color: var(--color-success-border);\n}\n.campos-publicos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n.campo-publico-largo[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.campo-texto[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 8rem;\n  padding: 0.75rem;\n  resize: vertical;\n  background: var(--app-surface);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: var(--radius-medium);\n  outline: none;\n}\n.campo-texto[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--studio-brand);\n  box-shadow: 0 0 0 0.18rem color-mix(in srgb, var(--studio-brand) 14%, transparent);\n}\n.ajuda-campo[_ngcontent-%COMP%] {\n  color: var(--app-text-muted) !important;\n}\n.controle-publicacao[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n  padding: 1rem;\n  background: var(--app-surface-muted);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: var(--radius-medium);\n}\n.controle-publicacao[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n  flex: 0 0 auto;\n  margin-top: 0.15rem;\n  accent-color: var(--studio-brand);\n}\n.controle-publicacao[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.2rem;\n}\n.controle-publicacao[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.controle-publicacao[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--app-text-muted);\n  line-height: 1.45;\n}\n@media (max-width: 44rem) {\n  .campos-publicos[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .campo-publico-largo[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n}\n.grade-informacoes.apenas-identificacao[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.configuracao-embeds[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.contador-embeds[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.5rem;\n  background: var(--studio-brand-soft);\n  color: var(--app-text-soft);\n  border: 0.0625rem solid var(--studio-brand-border);\n  border-radius: 999rem;\n}\n.introducao-embeds[_ngcontent-%COMP%] {\n  max-width: 42rem;\n  margin: -0.25rem 0 1.15rem;\n  color: var(--app-text-muted);\n  font-size: 0.68rem;\n  line-height: 1.55;\n}\n.editor-embed[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(8rem, 0.35fr) minmax(14rem, 1fr) auto;\n  align-items: end;\n  gap: 0.65rem;\n}\n.editor-embed[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.4rem;\n}\n.editor-embed[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 0.67rem;\n  font-weight: 720;\n}\n.editor-embed[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.editor-embed[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  min-height: 2.7rem;\n  box-sizing: border-box;\n  padding: 0.6rem 0.7rem;\n  background: var(--app-surface-muted);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 0.2rem;\n  outline: none;\n}\n.editor-embed[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.editor-embed[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--studio-brand);\n  box-shadow: 0 0 0 0.15rem var(--studio-brand-soft);\n}\n.botao-adicionar-embed[_ngcontent-%COMP%] {\n  min-height: 2.7rem;\n}\n.lista-embeds[_ngcontent-%COMP%] {\n  display: grid;\n  margin-top: 1rem;\n  border-top: 0.0625rem solid var(--app-border);\n}\n.item-embed[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto auto;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.85rem 0;\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.numero-embed[_ngcontent-%COMP%] {\n  display: grid;\n  width: 1.7rem;\n  height: 1.7rem;\n  place-items: center;\n  background: var(--studio-brand-soft);\n  color: var(--studio-brand);\n  border: 0.0625rem solid var(--studio-brand-border);\n  font-family: var(--font-mono);\n  font-size: 0.58rem;\n  font-weight: 760;\n}\n.dados-embed[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 0.18rem;\n}\n.dados-embed[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n}\n.dados-embed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--app-text-muted);\n  font-family: var(--font-mono);\n  font-size: 0.56rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.acao-embed[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.45rem;\n  background: transparent;\n  color: var(--app-text-soft);\n  border: 0;\n  font-size: 0.6rem;\n  font-weight: 720;\n  text-decoration: none;\n}\n.acao-embed[_ngcontent-%COMP%]:hover {\n  color: var(--studio-brand);\n}\n.acao-remover-embed[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.acao-remover-embed[_ngcontent-%COMP%]:hover {\n  color: var(--color-danger);\n  text-decoration: underline;\n}\n.estado-embeds-vazio[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 6rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.65rem;\n  margin-top: 1rem;\n  background: var(--app-surface-muted);\n  border: 0.0625rem dashed var(--app-border-strong);\n}\n.estado-embeds-vazio[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 1.5rem;\n  height: 1.5rem;\n  place-items: center;\n  color: var(--studio-brand);\n  border: 0.0625rem solid var(--studio-brand-border);\n  font-size: 1rem;\n}\n.estado-embeds-vazio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.66rem;\n}\n.rodape-embeds[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n.rodape-embeds[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 30rem;\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.6rem;\n}\n@media (max-width: 44rem) {\n  .editor-embed[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .item-embed[_ngcontent-%COMP%] {\n    grid-template-columns: auto minmax(0, 1fr) auto;\n  }\n  .item-embed[_ngcontent-%COMP%]   .acao-remover-embed[_ngcontent-%COMP%] {\n    grid-column: 2/-1;\n    justify-self: start;\n  }\n  .rodape-embeds[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .rodape-embeds[_ngcontent-%COMP%]   .botao-principal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Perfil, [{
    type: Component,
    args: [{ selector: "app-perfil", standalone: true, imports: [ReactiveFormsModule, CropperLogo], template: `<main
  class="pagina-perfil tema-estudio"
  [style.--studio-brand]="corPrevia()"
  [style.--studio-on-brand]="corContrastePrevia()"
>
  <header class="cabecalho-pagina">
    <div>
     <p class="secao">
  @if (dadosEstudio.possuiModulos()) {
    IDENTIDADE DO EST\xDADIO
  } @else {
    CASA FL\xCAIVA
  }
</p>

<h1>
  @if (dadosEstudio.possuiModulos()) {
    Perfil
  } @else {
    Minha p\xE1gina
  }
</h1>

<p>
  @if (dadosEstudio.possuiModulos()) {
    A marca que aparece no Fl\xEAiva e nos materiais compartilhados.
  } @else {
    Crie e publique a presen\xE7a digital do seu est\xFAdio.
  }
</p>
    </div>

    <div class="assinatura-fleiva" aria-label="Fleiva Studios">
      <span aria-hidden="true"></span>
      <strong>FLEIVA</strong>
      <small>STUDIOS</small>
    </div>
  </header>

  @if (dadosEstudio.carregando()) {
    <section class="estado estado-carregando">
      <span class="carregador" aria-hidden="true"></span>
      <p>Carregando perfil...</p>
    </section>
  } @else if (dadosEstudio.erro()) {
    <section class="estado estado-erro">
      <span class="simbolo-estado" aria-hidden="true">!</span>
      <h2>N\xE3o foi poss\xEDvel abrir o perfil</h2>
      <p>{{ dadosEstudio.erro() }}</p>

      <button
        type="button"
        class="botao-secundario"
        (click)="carregarDados()"
      >
        Tentar novamente
      </button>
    </section>
  } @else if (dadosEstudio.estudio(); as estudio) {
    <section class="identidade">
      <div class="marca-estudio">
        <div
          class="logo-atual"
          [class.tem-logo]="dadosEstudio.logoUrl()"
        >
          @if (dadosEstudio.logoUrl()) {
            <img
              [src]="dadosEstudio.logoUrl()"
              [alt]="'Logo de ' + estudio.nome"
            />
          } @else {
            <span>{{ inicialEstudio() }}</span>
          }
        </div>

        <div class="identificacao">
          <p>PERFIL ATIVO</p>
          <h2>{{ estudio.nome }}</h2>
          <span>{{ autenticacao.usuario()?.email }}</span>

          <div class="estado-conta">
  @if (dadosEstudio.possuiModulos()) {
    <span>{{ formatarPlano(estudio.status_plano) }}</span>
    <i aria-hidden="true"></i>
    <span>{{ estudio.modulos.length }} m\xF3dulos</span>
  } @else {
    <span>Plano gratuito</span>
    <i aria-hidden="true"></i>
    <span>Casa Fl\xEAiva</span>
  }
</div>
        </div>
      </div>

      <div class="edicao-logo">
        <div>
          <strong>Logo do est\xFAdio</strong>

          @if (arquivoSelecionado(); as arquivo) {
            <small>{{ arquivo.name }}</small>
          } @else {
            <small>JPG, PNG ou WebP de at\xE9 5 MB.</small>
          }
        </div>

        <div class="acoes-logo">
          <label class="seletor-arquivo">
            <span>Escolher arquivo</span>

            <input
              type="file"
              accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
              [disabled]="enviandoLogo() || removendoLogo()"
              (change)="selecionarLogo($event)"
            />
          </label>

          @if (estudio.logo_caminho) {
            <button
              type="button"
              class="botao-remover-logo"
              [disabled]="
                removendoLogo() || enviandoLogo()
              "
              (click)="removerLogo()"
            >
              @if (removendoLogo()) {
                Removendo...
              } @else {
                Remover
              }
            </button>
          }
        </div>
      </div>
    </section>

    @if (erroOperacao()) {
      <p class="retorno retorno-erro">
        {{ erroOperacao() }}
      </p>
    }

    @if (mensagemOperacao()) {
      <p class="retorno retorno-sucesso">
        {{ mensagemOperacao() }}
      </p>
    }

    <section class="aparencia">
      <header class="titulo-secao">
        <div>
          <p class="rotulo-menor">DIRE\xC7\xC3O DE ARTE</p>
          <h2>Cores</h2>
          <span>
            Uma cor principal gera os tons usados pela interface.
          </span>
        </div>

        <span class="codigo-cor">{{ corPrevia() }}</span>
      </header>

      <div class="conteudo-aparencia">
        <form
          class="formulario-cor"
          [formGroup]="formularioCor"
          (ngSubmit)="salvarCor()"
        >
          <div class="introducao-cor">
            <span class="numero-etapa">01</span>
            <h3>Escolha a cor principal</h3>

          </div>

          <label class="seletor-cor">
            <input
              type="color"
              formControlName="cor_principal"
              aria-label="Cor principal do est\xFAdio"
              (input)="selecionarCor($event)"
            />

            <span>
              <strong>{{ corPrevia() }}</strong>
              <small>Clique na amostra para alterar</small>
            </span>
          </label>

          @if (
            formularioCor.controls.cor_principal.touched &&
            formularioCor.controls.cor_principal.invalid
          ) {
            <small class="erro-campo">
              Selecione uma cor hexadecimal v\xE1lida.
            </small>
          }

          <div class="acoes-formulario">
            @if (estudio.cor_principal) {
              <button
                type="button"
                class="botao-secundario"
                [disabled]="salvandoCor()"
                (click)="restaurarCorPadrao()"
              >
                Restaurar padr\xE3o
              </button>
            }

            <button
              type="submit"
              class="botao-principal"
              [disabled]="salvandoCor()"
            >
              @if (salvandoCor()) {
                Salvando...
              } @else {
                Aplicar identidade
              }
            </button>
          </div>
        </form>

        <div class="previa-paleta">
          <header class="faixa-previa">
            <span>
              <small>PR\xC9VIA DA MARCA</small>
              <strong>{{ estudio.nome }}</strong>
            </span>

            <i aria-hidden="true"></i>
          </header>

          <div class="corpo-previa">
            <div class="amostras">
              <span class="amostra amostra-principal">
                <i></i>
                Principal
              </span>

              <span class="amostra amostra-suave">
                <i></i>
                Superf\xEDcie
              </span>

              <span class="amostra amostra-borda">
                <i></i>
                Sele\xE7\xE3o
              </span>

              <span class="amostra amostra-escura">
                <i></i>
                Contraste
              </span>
            </div>

            <div class="componente-previa">
              <span class="marcador-previa"></span>

              <span>
                <strong>Item selecionado</strong>
                <small>
                  A identidade aparece nos destaques e a\xE7\xF5es.
                </small>
              </span>

              <button type="button" tabindex="-1">
                A\xE7\xE3o
              </button>
            </div>

            <div class="linha-decorativa" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <section class="ambiente-publico">
        <header class="cabecalho-ambiente">
          <div>
            <p class="rotulo-menor">CASA FL\xCAIVA</p>
            <h3>Tema</h3>
            <span>
              Escolha um tema base. A cor e a logo do est\xFAdio
              continuam sendo as protagonistas.
            </span>
          </div>

          <span class="tema-selecionado">
            {{ temaPaginaPublicaPrevia() }}
          </span>
        </header>

        <div
          class="opcoes-ambiente"
          role="radiogroup"
          aria-label="P\xE1gina p\xFAblica"
        >
          @for (
            tema of opcoesTemaPaginaPublica;
            track tema.valor
          ) {
            <button
              type="button"
              class="opcao-ambiente"
              [class.selecionada]="
                temaPaginaPublicaPrevia() === tema.valor
              "
              [attr.aria-checked]="
                temaPaginaPublicaPrevia() === tema.valor
              "
              role="radio"
              (click)="
                selecionarTemaPaginaPublica(tema.valor)
              "
            >
              <span
                class="miniatura-ambiente"
                [attr.data-tema]="tema.valor"
                aria-hidden="true"
              >
                <i class="miniatura-topo"></i>
                <i class="miniatura-titulo"></i>
                <i class="miniatura-texto"></i>
                <i class="miniatura-cartao"></i>
              </span>

              <span class="descricao-ambiente">
                <strong>{{ tema.nome }}</strong>
                <small>{{ tema.descricao }}</small>
              </span>

              <i class="marcador-ambiente" aria-hidden="true"></i>
            </button>
          }
        </div>

        <div class="acoes-ambiente">
          <span>
            A altera\xE7\xE3o afeta somente a p\xE1gina p\xFAblica.
          </span>

          <button
            type="button"
            class="botao-principal"
            [disabled]="
              salvandoTemaPaginaPublica() ||
              !temaPaginaPublicaAlterado()
            "
            (click)="salvarTema()"
          >
            @if (salvandoTemaPaginaPublica()) {
              Salvando...
            } @else {
              Salvar ambiente
            }
          </button>
        </div>
      </section>
    </section>
    <section class="painel configuracao-publica">
  <header class="titulo-painel">
    <div>
      <p>Presen\xE7a digital</p>
      <h2>Informa\xE7\xF5es</h2>
    </div>

    <span
      class="estado-publicacao"
      [class.publicada]="
        formularioPaginaPublica.controls
          .landing_publicada.value
      "
    >
      @if (
        formularioPaginaPublica.controls
          .landing_publicada.value
      ) {
        Publicada
      } @else {
        Rascunho
      }
    </span>
  </header>

  <form
    [formGroup]="formularioPaginaPublica"
    (ngSubmit)="salvarPaginaPublica()"
  >
    <div class="campos-publicos">
      <label class="campo-texto campo-publico-largo">
        <span>Bio</span>

        <textarea
          rows="5"
          formControlName="descricao_publica"
          placeholder="Conte brevemente sobre o est\xFAdio, sua proposta e o tipo de trabalho realizado."
        ></textarea>

        <small class="ajuda-campo">
          Esse texto aparecer\xE1 na p\xE1gina p\xFAblica.
        </small>
      </label>

      <label class="campo-texto">
        <span>Endere\xE7o</span>

        <input
          type="text"
          formControlName="cidade"
          placeholder="Ex.: S\xE3o Paulo, SP"
        />
      </label>

      <label class="campo-texto">
        <span>WhatsApp</span>

        <input
          type="tel"
          inputmode="tel"
          formControlName="whatsapp_publico"
          placeholder="Ex.: +55 11 99999-9999"
        />
      </label>

      <label class="campo-texto">
        <span>Instagram</span>

        <input
          type="text"
          formControlName="instagram"
          placeholder="Ex.: @nomedoestudio"
        />
      </label>
    </div>

    <label class="controle-publicacao">
      <input
        type="checkbox"
        formControlName="landing_publicada"
      />

      <span>
        <strong>Publicar p\xE1gina do est\xFAdio</strong>

        <small>
          Quando desativada, as informa\xE7\xF5es permanecem
          salvas como rascunho.
        </small>
      </span>
    </label>

    <label class="controle-publicacao">
      <input
        type="checkbox"
        formControlName="participar_da_casa"
      />

      <span>
        <strong>Aparecer na Casa Fl\xEAiva</strong>

        <small>
          Quando ativada, sua p\xE1gina poder\xE1 aparecer na \xE1rea de
          descoberta da Casa Fl\xEAiva enquanto estiver publicada.
        </small>
      </span>
    </label>

    <div class="acoes-formulario">
      <button
        type="submit"
        class="botao-principal"
        [disabled]="salvandoPaginaPublica()"
      >
        @if (salvandoPaginaPublica()) {
          Salvando...
        } @else {
          Salvar p\xE1gina p\xFAblica
        }
      </button>
    </div>
  </form>
</section>
<section class="painel configuracao-embeds">
  <header class="titulo-painel">
    <div>
      <p>CONTE\xDADO EXTERNO</p>
      <h2>Trabalhos em destaque</h2>
    </div>

    <span class="contador-embeds">
      {{ embedsPrevia().length }} / 4
    </span>
  </header>

  <p class="introducao-embeds">
    Adicione trabalhos publicados no Spotify, YouTube ou
    SoundCloud. Cole apenas o endere\xE7o original do conte\xFAdo.
  </p>

  <form
    class="editor-embed"
    [formGroup]="formularioEmbed"
    (ngSubmit)="adicionarEmbed()"
  >
    <label>
      <span>Plataforma</span>

      <select formControlName="provedor">
        <option value="spotify">Spotify</option>
        <option value="youtube">YouTube</option>
        <option value="soundcloud">
          SoundCloud
        </option>
      </select>
    </label>

    <label class="campo-url-embed">
      <span>Endere\xE7o</span>

      <input
        type="url"
        formControlName="url"
        inputmode="url"
        autocomplete="url"
        placeholder="https://..."
      />
    </label>

    <button
      type="submit"
      class="botao-secundario botao-adicionar-embed"
      [disabled]="limiteEmbedsAtingido()"
    >
      Adicionar
    </button>
  </form>

  @if (
    formularioEmbed.controls.url.touched &&
    formularioEmbed.controls.url.invalid
  ) {
    <small class="erro-campo">
      Cole o endere\xE7o.
    </small>
  }

  @if (erroEmbeds()) {
    <p class="retorno retorno-erro">
      {{ erroEmbeds() }}
    </p>
  }

  @if (mensagemEmbeds()) {
    <p class="retorno retorno-sucesso">
      {{ mensagemEmbeds() }}
    </p>
  }

  @if (embedsPrevia().length > 0) {
    <div class="lista-embeds">
      @for (
        embed of embedsPrevia();
        track embed.provedor + ':' + embed.url;
        let indice = $index
      ) {
        <article class="item-embed">
          <span class="numero-embed">
            {{ indice + 1 }}
          </span>

          <div class="dados-embed">
            <strong>
              {{ formatarProvedorEmbed(embed.provedor) }}
            </strong>

            <span>{{ embed.url }}</span>
          </div>

          <a
            class="acao-embed"
            [href]="embed.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir
          </a>

          <button
            type="button"
            class="acao-embed acao-remover-embed"
            (click)="removerEmbed(indice)"
          >
            Remover
          </button>
        </article>
      }
    </div>
  } @else {
    <div class="estado-embeds-vazio">
      <span aria-hidden="true">+</span>

      <p>
        Nenhum conte\xFAdo externo adicionado.
      </p>
    </div>
  }

  <footer class="rodape-embeds">
    <p>
      Os embeds s\xF3 aparecer\xE3o na p\xE1gina quando ela estiver
      publicada.
    </p>

    <button
      type="button"
      class="botao-principal"
      [disabled]="
        salvandoEmbeds() ||
        !embedsAlterados()
      "
      (click)="salvarEmbeds()"
    >
      @if (salvandoEmbeds()) {
        Salvando...
      } @else {
        Salvar conte\xFAdos
      }
    </button>
  </footer>
</section>

<div
  class="grade-informacoes"
  [class.apenas-identificacao]="
    !dadosEstudio.possuiModulos()
  "
>
  <section class="painel identificacao-painel">
    <header class="titulo-painel">
      <div>
        <p>INFORMA\xC7\xD5ES P\xDABLICAS</p>
        <h2>Nome exibido</h2>
      </div>

      <span aria-hidden="true">02</span>
    </header>

    <form
      [formGroup]="formulario"
      (ngSubmit)="salvarNome()"
    >
      <label class="campo-texto">
        <span>Nome exibido</span>

        <input
          type="text"
          formControlName="nome"
          placeholder="Nome exibido"
        />

        @if (
          formulario.controls.nome.touched &&
          formulario.controls.nome.invalid
        ) {
          <small>Informe o nome que ser\xE1 exibido na p\xE1gina.</small>
        }
      </label>

      <p class="ajuda-campo">
        Aparece no menu, na p\xE1gina p\xFAblica e nos links
        compartilhados.
      </p>

      <div class="acoes-formulario">
        <button
          type="submit"
          class="botao-principal"
          [disabled]="salvandoNome()"
        >
          @if (salvandoNome()) {
            Salvando...
          } @else {
            Salvar nome
          }
        </button>
      </div>
    </form>
    <form
  class="formulario-endereco"
  [formGroup]="formularioSlug"
  (ngSubmit)="salvarSlug()"
>
  <label class="campo-texto">
    <span>Endere\xE7o da p\xE1gina</span>

    <div class="controle-slug">
      <span>card.fleiva.com.br/</span>

      <input
        type="text"
        formControlName="slug"
        autocomplete="off"
        spellcheck="false"
        placeholder="nome-do-estudio"
        (blur)="normalizarSlugFormulario()"
      />
    </div>

    @if (
      formularioSlug.controls.slug.touched &&
      formularioSlug.controls.slug.invalid
    ) {
      <small>Informe um endere\xE7o v\xE1lido.</small>
    }
  </label>

  <p class="ajuda-campo">
    Use um endere\xE7o curto e f\xE1cil de compartilhar. Ao alter\xE1-lo,
    o endere\xE7o anterior deixa de funcionar.
  </p>

  <div class="acoes-endereco">
    @if (
      formularioPaginaPublica.controls
        .landing_publicada.value
    ) {
      <a
        class="botao-secundario"
        [href]="urlPaginaPublica()"
        target="_blank"
        rel="noopener noreferrer"
      >
        Abrir p\xE1gina
      </a>
    }

    <button
      type="submit"
      class="botao-principal"
      [disabled]="salvandoSlug()"
    >
      @if (salvandoSlug()) {
        Salvando...
      } @else {
        Salvar endere\xE7o
      }
    </button>
  </div>
</form>
  </section>

  @if (dadosEstudio.possuiModulos()) {
    <section class="painel conta-painel">
      <header class="titulo-painel">
        <div>
          <p>ASSINATURA</p>
          <h2>Conta</h2>
        </div>

        <span aria-hidden="true">03</span>
      </header>

      <dl class="informacoes">
        <div>
          <dt>E-mail</dt>
          <dd>{{ autenticacao.usuario()?.email }}</dd>
        </div>

        <div>
          <dt>Plano</dt>
          <dd>
            <span class="plano">
              {{ formatarPlano(estudio.status_plano) }}
            </span>
          </dd>
        </div>

        <div>
          <dt>Endere\xE7o interno</dt>
          <dd class="texto-mono">{{ estudio.slug }}</dd>
        </div>
      </dl>

      <div class="modulos">
        <span class="rotulo">M\xF3dulos dispon\xEDveis</span>

        <div class="lista-modulos">
          @for (
            modulo of estudio.modulos;
            track modulo
          ) {
            <span>{{ formatarModulo(modulo) }}</span>
          }
        </div>
      </div>
    </section>
  }
</div>

@if (dadosEstudio.possuiModulos()) {
  <section class="painel armazenamento">
    <header class="titulo-painel">
      <div>
        <p>ACERVO DIGITAL</p>
        <h2>Armazenamento</h2>
      </div>

      <span aria-hidden="true">04</span>
    </header>

    @if (dadosVersoes.carregando()) {
      <div class="estado estado-menor">
        <span class="carregador" aria-hidden="true"></span>
        <p>Calculando armazenamento...</p>
      </div>
    } @else if (dadosVersoes.erro()) {
      <div class="estado estado-menor estado-erro">
        <p>{{ dadosVersoes.erro() }}</p>

        <button
          type="button"
          class="botao-secundario"
          (click)="dadosVersoes.listar()"
        >
          Tentar novamente
        </button>
      </div>
    } @else {
      <div class="cabecalho-armazenamento">
        <div>
          <strong>
            {{ formatarBytes(dadosVersoes.usoBytes()) }}
          </strong>
          <span>utilizados</span>
        </div>

        <div>
          <strong>
            {{
              formatarBytes(
                dadosVersoes.espacoDisponivelBytes()
              )
            }}
          </strong>
          <span>dispon\xEDveis</span>
        </div>
      </div>

      <div
        class="barra-armazenamento"
        role="progressbar"
        aria-label="Armazenamento utilizado"
        aria-valuemin="0"
        aria-valuemax="100"
        [attr.aria-valuenow]="percentualUso()"
      >
        <span [style.width.%]="percentualUso()"></span>
      </div>

      <div class="resumo-armazenamento">
        <span>{{ percentualUso() }}% ocupado</span>
        <span>
          Limite de
          {{ formatarBytes(dadosVersoes.limiteBytes()) }}
        </span>
      </div>
    }
  </section>
}
  }

  @if (arquivoParaRecortar(); as arquivo) {
    <app-cropper-logo
      [arquivo]="arquivo"
      (confirmado)="aplicarCropper($event)"
      (cancelado)="cancelarCropper()"
    />
  }
</main>
`, styles: ['/* apps/studio-dash/src/app/paginas/perfil/perfil.scss */\n:host {\n  display: block;\n  min-height: 100%;\n  color: var(--app-text);\n}\n.pagina-perfil {\n  width: min(78rem, 100% - 2rem);\n  margin: 0 auto;\n  padding: 2.5rem 0 5rem;\n}\n.cabecalho-pagina {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n.cabecalho-pagina h1 {\n  margin: 0.35rem 0 0.45rem;\n  font-size: clamp(2.7rem, 7vw, 5.4rem);\n  font-weight: 760;\n  line-height: 0.88;\n  letter-spacing: -0.07em;\n}\n.cabecalho-pagina p:not(.secao) {\n  max-width: 42rem;\n  margin: 0;\n  color: var(--app-text-soft);\n  line-height: 1.5;\n}\n.secao,\n.rotulo-menor,\n.titulo-painel p {\n  margin: 0;\n  color: var(--studio-brand);\n  font-size: 0.62rem;\n  font-weight: 760;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.assinatura-fleiva {\n  display: grid;\n  grid-template-columns: auto auto;\n  align-items: center;\n  gap: 0 0.35rem;\n  padding-bottom: 0.25rem;\n}\n.assinatura-fleiva > span {\n  width: 0.62rem;\n  height: 0.62rem;\n  grid-row: 1/3;\n  background: var(--studio-brand);\n  border-radius: 999rem;\n}\n.assinatura-fleiva strong {\n  font-size: 0.65rem;\n  letter-spacing: 0.14em;\n}\n.assinatura-fleiva small {\n  color: var(--app-text-muted);\n  font-size: 0.48rem;\n  letter-spacing: 0.18em;\n}\nbutton,\ninput {\n  font: inherit;\n}\nbutton {\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\nbutton:disabled {\n  cursor: wait;\n  opacity: 0.5;\n}\n.identidade {\n  position: relative;\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) minmax(17rem, 0.6fr);\n  align-items: center;\n  gap: clamp(1.5rem, 4vw, 3rem);\n  min-height: 14rem;\n  overflow: hidden;\n  padding: clamp(1.25rem, 4vw, 2.2rem);\n  background:\n    radial-gradient(\n      circle at 12% 0,\n      color-mix(in srgb, var(--studio-brand) 42%, transparent),\n      transparent 22rem),\n    linear-gradient(\n      125deg,\n      #161916,\n      #0d0f0d);\n  color: #f4f6f2;\n  border: 0.0625rem solid #2e322e;\n  border-radius: 0.4rem;\n  box-shadow: 0 1.6rem 4rem rgba(13, 16, 13, 0.18);\n}\n.identidade::after {\n  position: absolute;\n  top: -7rem;\n  right: -5rem;\n  width: 17rem;\n  height: 17rem;\n  border: 0.0625rem solid color-mix(in srgb, var(--studio-brand) 35%, transparent);\n  border-radius: 999rem;\n  content: "";\n}\n.marca-estudio {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: clamp(1rem, 3vw, 1.6rem);\n}\n.logo-atual {\n  display: grid;\n  width: clamp(6rem, 12vw, 8.5rem);\n  aspect-ratio: 1;\n  flex: 0 0 auto;\n  place-items: center;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.16),\n      transparent),\n    var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0.0625rem solid color-mix(in srgb, var(--studio-brand) 60%, #ffffff);\n  border-radius: 0.25rem;\n  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.28), 0.8rem 0.8rem 0 color-mix(in srgb, var(--studio-brand) 22%, transparent);\n}\n.logo-atual img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.logo-atual > span {\n  font-size: clamp(2rem, 5vw, 3.5rem);\n  font-weight: 800;\n}\n.logo-atual.tem-logo {\n  background: transparent;\n  border-color: rgba(255, 255, 255, 0.18);\n  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.28);\n}\n.logo-atual.tem-logo img {\n  object-fit: contain;\n}\n.identificacao {\n  min-width: 0;\n}\n.identificacao > p {\n  margin: 0;\n  color: color-mix(in srgb, var(--studio-brand) 65%, #ffffff);\n  font-size: 0.55rem;\n  font-weight: 760;\n  letter-spacing: 0.14em;\n}\n.identificacao h2 {\n  overflow: hidden;\n  margin: 0.35rem 0 0.4rem;\n  font-size: clamp(1.8rem, 5vw, 3.4rem);\n  line-height: 0.95;\n  letter-spacing: -0.06em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.identificacao > span {\n  display: block;\n  overflow: hidden;\n  color: #9ca29c;\n  font-size: 0.68rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.estado-conta {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  color: #aeb3ae;\n  font-size: 0.58rem;\n  text-transform: uppercase;\n}\n.estado-conta i {\n  width: 0.25rem;\n  height: 0.25rem;\n  background: var(--studio-brand);\n  border-radius: 999rem;\n}\n.edicao-logo {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  gap: 0.8rem;\n  padding: 1rem;\n  background: rgba(255, 255, 255, 0.05);\n  border: 0.0625rem solid rgba(255, 255, 255, 0.12);\n  -webkit-backdrop-filter: blur(0.5rem);\n  backdrop-filter: blur(0.5rem);\n}\n.edicao-logo > div:first-child {\n  display: grid;\n  gap: 0.2rem;\n}\n.edicao-logo strong {\n  font-size: 0.7rem;\n}\n.edicao-logo small {\n  overflow: hidden;\n  color: #8d938d;\n  font-size: 0.57rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.acoes-logo,\n.acoes-formulario {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.45rem;\n}\n.seletor-arquivo {\n  display: block;\n}\n.seletor-arquivo > span {\n  display: inline-flex;\n  min-height: 2.35rem;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 0.68rem;\n  background: transparent;\n  color: #e5e8e5;\n  border: 0.0625rem solid #454a45;\n  border-radius: 0.2rem;\n  font-size: 0.61rem;\n  font-weight: 720;\n  cursor: pointer;\n}\n.seletor-arquivo input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  opacity: 0;\n}\n.botao-principal,\n.botao-secundario,\n.botao-claro,\n.botao-remover-logo {\n  display: inline-flex;\n  min-height: 2.4rem;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.2rem;\n  font-size: 0.64rem;\n  font-weight: 720;\n}\n.botao-principal {\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0.0625rem solid var(--studio-brand);\n  box-shadow: 0 0.5rem 1.25rem color-mix(in srgb, var(--studio-brand) 20%, transparent);\n}\n.botao-principal:hover:not(:disabled) {\n  filter: brightness(0.94) saturate(1.08);\n}\n.botao-secundario {\n  background: transparent;\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n}\n.botao-secundario:hover:not(:disabled) {\n  background: var(--app-surface-muted);\n}\n.botao-claro {\n  background: #f0f2ef;\n  color: #161916;\n  border: 0.0625rem solid #f0f2ef;\n}\n.botao-remover-logo {\n  background: transparent;\n  color: #ff8e87;\n  border: 0.0625rem solid transparent;\n}\n.botao-remover-logo:hover:not(:disabled) {\n  background: rgba(180, 58, 51, 0.15);\n  border-color: rgba(255, 142, 135, 0.35);\n}\n.retorno {\n  margin: 1rem 0 0;\n  padding: 0.75rem 0.85rem;\n  border-radius: 0.25rem;\n  font-size: 0.7rem;\n}\n.retorno-sucesso {\n  background: var(--color-success-soft);\n  color: var(--color-success);\n  border: 0.0625rem solid var(--color-success-border);\n}\n.retorno-erro {\n  background: var(--color-danger-soft);\n  color: var(--color-danger);\n  border: 0.0625rem solid var(--color-danger-border);\n}\n.aparencia {\n  margin-top: 2.7rem;\n}\n.titulo-secao {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.titulo-secao h2 {\n  margin: 0.3rem 0 0.25rem;\n  font-size: clamp(1.5rem, 4vw, 2.2rem);\n  letter-spacing: -0.045em;\n}\n.titulo-secao div > span {\n  color: var(--app-text-muted);\n  font-size: 0.68rem;\n}\n.codigo-cor {\n  padding: 0.32rem 0.5rem;\n  background: var(--app-text);\n  color: var(--app-surface);\n  border-radius: 999rem;\n  font-family: var(--font-mono);\n  font-size: 0.62rem;\n  text-transform: uppercase;\n}\n.conteudo-aparencia {\n  display: grid;\n  grid-template-columns: minmax(17rem, 0.72fr) minmax(24rem, 1.28fr);\n  gap: 1rem;\n}\n.formulario-endereco {\n  margin-top: 1.25rem;\n  padding-top: 1.25rem;\n  border-top: 0.0625rem solid var(--app-border);\n}\n.controle-slug {\n  display: flex;\n  min-width: 0;\n  align-items: stretch;\n  background: var(--app-surface-muted);\n  border: 0.0625rem solid var(--app-border-strong);\n}\n.controle-slug > span {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  padding: 0 0.65rem;\n  color: var(--app-text-muted);\n  border-right: 0.0625rem solid var(--app-border);\n  font-family: var(--font-mono);\n  font-size: 0.62rem;\n}\n.controle-slug input {\n  min-width: 0;\n  border: 0;\n  border-radius: 0;\n  font-family: var(--font-mono);\n}\n.controle-slug input:focus {\n  box-shadow: inset 0 0 0 0.1rem var(--studio-brand);\n}\n.controle-slug:focus-within {\n  border-color: var(--studio-brand);\n}\n.acoes-endereco {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n.acoes-endereco a {\n  box-sizing: border-box;\n  text-decoration: none;\n}\n@media (max-width: 38rem) {\n  .controle-slug {\n    display: grid;\n  }\n  .controle-slug > span {\n    min-height: 2.2rem;\n    border-right: 0;\n    border-bottom: 0.0625rem solid var(--app-border);\n  }\n  .acoes-endereco {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}\n.formulario-cor,\n.previa-paleta,\n.painel {\n  background: var(--app-surface);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 0.35rem;\n  box-shadow: var(--shadow-medium);\n}\n.formulario-cor {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  padding: 1.1rem;\n}\n.introducao-cor {\n  margin-bottom: 1.35rem;\n}\n.introducao-cor h3 {\n  margin: 0.5rem 0 0.4rem;\n  font-size: 1rem;\n}\n.introducao-cor p {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.66rem;\n  line-height: 1.5;\n}\n.numero-etapa {\n  color: var(--studio-brand);\n  font-family: var(--font-mono);\n  font-size: 0.58rem;\n  font-weight: 760;\n}\n.seletor-cor {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  padding: 0.75rem;\n  background: var(--app-surface-muted);\n  border: 0.0625rem solid var(--app-border);\n  cursor: pointer;\n}\n.seletor-cor input {\n  width: 4.5rem;\n  height: 4.5rem;\n  flex: 0 0 auto;\n  padding: 0.25rem;\n  background: #ffffff;\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 0.15rem;\n  cursor: pointer;\n}\n.seletor-cor input::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n.seletor-cor input::-webkit-color-swatch,\n.seletor-cor input::-moz-color-swatch {\n  border: 0;\n  border-radius: 0.08rem;\n}\n.seletor-cor > span {\n  display: grid;\n  gap: 0.18rem;\n}\n.seletor-cor strong {\n  font-family: var(--font-mono);\n  font-size: 0.78rem;\n  text-transform: uppercase;\n}\n.seletor-cor small {\n  color: var(--app-text-muted);\n  font-size: 0.6rem;\n}\n.erro-campo {\n  margin-top: 0.5rem;\n  color: var(--color-danger);\n  font-size: 0.62rem;\n}\n.formulario-cor .acoes-formulario {\n  margin-top: auto;\n  padding-top: 1rem;\n}\n.previa-paleta {\n  min-width: 0;\n  overflow: hidden;\n}\n.faixa-previa {\n  display: flex;\n  min-height: 7.5rem;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      115deg,\n      rgba(255, 255, 255, 0.1),\n      transparent),\n    var(--studio-brand-dark);\n  color: #ffffff;\n}\n.faixa-previa > span {\n  display: grid;\n  gap: 0.3rem;\n}\n.faixa-previa small {\n  color: rgba(255, 255, 255, 0.55);\n  font-size: 0.52rem;\n  letter-spacing: 0.12em;\n}\n.faixa-previa strong {\n  max-width: 24ch;\n  overflow: hidden;\n  font-size: clamp(1.3rem, 4vw, 2.4rem);\n  letter-spacing: -0.055em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.faixa-previa > i {\n  width: 1rem;\n  height: 1rem;\n  background: var(--studio-brand);\n  border: 0.15rem solid rgba(255, 255, 255, 0.35);\n  border-radius: 999rem;\n}\n.corpo-previa {\n  padding: 0.9rem;\n}\n.amostras {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.45rem;\n}\n.amostra {\n  display: grid;\n  gap: 0.4rem;\n  color: var(--app-text-muted);\n  font-size: 0.55rem;\n}\n.amostra i {\n  display: block;\n  height: 2.5rem;\n  border: 0.0625rem solid var(--app-border);\n  border-radius: 0.15rem;\n}\n.amostra-principal i {\n  background: var(--studio-brand);\n}\n.amostra-suave i {\n  background: var(--studio-brand-soft);\n}\n.amostra-borda i {\n  background: var(--studio-brand-muted);\n}\n.amostra-escura i {\n  background: var(--studio-brand-dark);\n}\n.componente-previa {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 0.7rem;\n  margin-top: 0.9rem;\n  padding: 0.75rem;\n  background: var(--studio-brand-soft);\n  border: 0.0625rem solid var(--studio-brand-border);\n  border-radius: 0.2rem;\n  box-shadow: inset 0.16rem 0 var(--studio-brand);\n}\n.componente-previa > span:nth-child(2) {\n  display: grid;\n  gap: 0.15rem;\n}\n.componente-previa strong {\n  font-size: 0.66rem;\n}\n.componente-previa small {\n  color: var(--app-text-muted);\n  font-size: 0.56rem;\n}\n.componente-previa button {\n  min-height: 2rem;\n  padding: 0.35rem 0.55rem;\n  background: var(--studio-brand);\n  color: var(--studio-on-brand);\n  border: 0.0625rem solid var(--studio-brand);\n  border-radius: 0.15rem;\n  font-size: 0.58rem;\n  font-weight: 720;\n  pointer-events: none;\n}\n.marcador-previa {\n  width: 0.55rem;\n  height: 0.55rem;\n  background: var(--studio-brand);\n  border-radius: 999rem;\n}\n.linha-decorativa {\n  display: flex;\n  gap: 0.35rem;\n  margin-top: 0.9rem;\n}\n.linha-decorativa span {\n  height: 0.18rem;\n  flex: 1;\n  background: var(--app-surface-strong);\n}\n.linha-decorativa span:first-child {\n  background: var(--studio-brand);\n}\n.ambiente-publico {\n  margin-top: 1rem;\n  padding: 1.1rem;\n  background: var(--app-surface);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 0.35rem;\n  box-shadow: var(--shadow-medium);\n}\n.cabecalho-ambiente {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.cabecalho-ambiente h3 {\n  margin: 0.3rem 0 0.25rem;\n  font-size: 1rem;\n}\n.cabecalho-ambiente div > span {\n  color: var(--app-text-muted);\n  font-size: 0.66rem;\n}\n.tema-selecionado {\n  padding: 0.3rem 0.5rem;\n  background: var(--studio-brand-soft);\n  color: var(--app-text-soft);\n  border: 0.0625rem solid var(--studio-brand-border);\n  border-radius: 999rem;\n  font-family: var(--font-mono);\n  font-size: 0.56rem;\n  text-transform: uppercase;\n}\n.opcoes-ambiente {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.65rem;\n}\n.opcao-ambiente {\n  position: relative;\n  display: grid;\n  min-width: 0;\n  gap: 0.7rem;\n  padding: 0.7rem;\n  background: var(--app-surface-muted);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: 0.25rem;\n  text-align: left;\n  transition:\n    border-color 150ms ease,\n    box-shadow 150ms ease,\n    transform 150ms ease;\n}\n.opcao-ambiente:hover:not(:disabled) {\n  border-color: var(--app-border-strong);\n  transform: translateY(-0.08rem);\n}\n.opcao-ambiente.selecionada {\n  border-color: var(--studio-brand);\n  box-shadow: inset 0 0 0 0.0625rem var(--studio-brand), 0 0.7rem 1.6rem color-mix(in srgb, var(--studio-brand) 10%, transparent);\n}\n.miniatura-ambiente {\n  --mini-fundo: #101210;\n  --mini-texto: #151815;\n  --mini-superficie: #191c19;\n  position: relative;\n  display: block;\n  width: 100%;\n  aspect-ratio: 1.75;\n  overflow: hidden;\n  background: var(--mini-fundo);\n  border: 0.0625rem solid rgba(20, 23, 20, 0.16);\n}\n.miniatura-ambiente[data-tema=grafite] {\n  --mini-fundo:\n    linear-gradient(\n      \n      180deg,\n      #f1efe5 0 59%,\n      #101210 59% );\n  --mini-texto: #151815;\n  --mini-superficie: #191c19;\n}\n.miniatura-ambiente[data-tema=creme] {\n  --mini-fundo: #f1efe5;\n  --mini-texto: #151815;\n  --mini-superficie: #ffffff;\n}\n.miniatura-ambiente[data-tema=ameixa] {\n  --mini-fundo: #2a1d25;\n  --mini-texto: #f1efe5;\n  --mini-superficie: #382832;\n}\n.miniatura-ambiente i {\n  position: absolute;\n  display: block;\n}\n.miniatura-topo {\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 0.32rem;\n  background: var(--studio-brand);\n}\n.miniatura-titulo {\n  top: 27%;\n  left: 8%;\n  width: 42%;\n  height: 0.38rem;\n  background: var(--mini-texto);\n}\n.miniatura-texto {\n  top: 39%;\n  left: 8%;\n  width: 28%;\n  height: 0.17rem;\n  background: var(--mini-texto);\n  opacity: 0.45;\n}\n.miniatura-cartao {\n  right: 7%;\n  bottom: 9%;\n  width: 34%;\n  height: 45%;\n  background: var(--mini-superficie);\n  border: 0.0625rem solid color-mix(in srgb, var(--studio-brand) 45%, transparent);\n  box-shadow: 0.18rem 0.18rem 0 var(--studio-brand);\n}\n.descricao-ambiente {\n  display: grid;\n  min-width: 0;\n  gap: 0.15rem;\n}\n.descricao-ambiente strong {\n  font-size: 0.7rem;\n}\n.descricao-ambiente small {\n  color: var(--app-text-muted);\n  font-size: 0.58rem;\n  line-height: 1.4;\n}\n.marcador-ambiente {\n  position: absolute;\n  right: 0.65rem;\n  bottom: 0.65rem;\n  width: 0.7rem;\n  height: 0.7rem;\n  background: transparent;\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 999rem;\n}\n.opcao-ambiente.selecionada .marcador-ambiente {\n  background: var(--studio-brand);\n  border-color: var(--studio-brand);\n  box-shadow: inset 0 0 0 0.14rem var(--app-surface);\n}\n.acoes-ambiente {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 0.0625rem solid var(--app-border);\n}\n.acoes-ambiente > span {\n  color: var(--app-text-muted);\n  font-size: 0.59rem;\n}\n.grade-informacoes {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n  margin-top: 1rem;\n}\n.painel {\n  min-width: 0;\n  padding: 1.1rem;\n}\n.titulo-painel {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.titulo-painel h2 {\n  margin: 0.25rem 0 0;\n  font-size: 1rem;\n  letter-spacing: -0.025em;\n}\n.titulo-painel > span {\n  color: var(--app-text-muted);\n  font-family: var(--font-mono);\n  font-size: 0.58rem;\n}\n.campo-texto {\n  display: grid;\n  gap: 0.38rem;\n}\n.campo-texto > span {\n  font-size: 0.67rem;\n  font-weight: 720;\n}\n.campo-texto > small {\n  color: var(--color-danger);\n  font-size: 0.61rem;\n}\n.campo-texto input {\n  width: 100%;\n  min-height: 2.6rem;\n  box-sizing: border-box;\n  padding: 0.6rem 0.68rem;\n  background: #ffffff;\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 0.2rem;\n  outline: none;\n}\n.campo-texto input:focus {\n  border-color: var(--studio-brand);\n  box-shadow: 0 0 0 0.15rem var(--studio-brand-soft);\n}\n.ajuda-campo {\n  margin: 0.45rem 0 0;\n  color: var(--app-text-muted);\n  font-size: 0.58rem;\n}\n.identificacao-painel .acoes-formulario {\n  margin-top: 1rem;\n}\n.informacoes {\n  display: grid;\n  margin: 0;\n}\n.informacoes > div {\n  display: grid;\n  grid-template-columns: 7rem minmax(0, 1fr);\n  gap: 1rem;\n  padding: 0.65rem 0;\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.informacoes dt,\n.informacoes .modulos .rotulo {\n  color: var(--app-text-muted);\n  font-size: 0.64rem;\n}\n.informacoes dd {\n  min-width: 0;\n  margin: 0;\n  overflow-wrap: anywhere;\n  font-size: 0.68rem;\n  font-weight: 680;\n}\n.plano {\n  display: inline-block;\n  padding: 0.22rem 0.4rem;\n  background: var(--color-warning-soft);\n  color: var(--color-warning);\n  border: 0.0625rem solid var(--color-warning-border);\n  border-radius: 999rem;\n  font-size: 0.57rem;\n  text-transform: uppercase;\n}\n.modulos {\n  display: grid;\n  gap: 0.55rem;\n  margin-top: 0.9rem;\n}\n.modulos .rotulo {\n  color: var(--app-text-muted);\n  font-size: 0.64rem;\n}\n.lista-modulos {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n}\n.lista-modulos span {\n  padding: 0.25rem 0.45rem;\n  background: var(--studio-brand-soft);\n  color: var(--app-text-soft);\n  border: 0.0625rem solid var(--studio-brand-border);\n  border-radius: 999rem;\n  font-size: 0.58rem;\n  font-weight: 680;\n}\n.armazenamento {\n  margin-top: 1rem;\n}\n.cabecalho-armazenamento {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.cabecalho-armazenamento > div {\n  display: grid;\n  gap: 0.15rem;\n}\n.cabecalho-armazenamento strong {\n  font-size: clamp(1.15rem, 3vw, 1.55rem);\n  letter-spacing: -0.04em;\n}\n.cabecalho-armazenamento span {\n  color: var(--app-text-muted);\n  font-size: 0.6rem;\n}\n.barra-armazenamento {\n  height: 0.45rem;\n  overflow: hidden;\n  background: var(--app-surface-strong);\n  border-radius: 999rem;\n}\n.barra-armazenamento span {\n  display: block;\n  height: 100%;\n  background: var(--studio-brand);\n  border-radius: inherit;\n  transition: width 180ms ease;\n}\n.resumo-armazenamento {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: 0.55rem;\n  color: var(--app-text-muted);\n  font-size: 0.58rem;\n}\n.estado {\n  display: grid;\n  min-height: 20rem;\n  place-content: center;\n  justify-items: center;\n  padding: 2rem;\n  background: var(--app-surface);\n  color: var(--app-text-muted);\n  border: 0.0625rem solid var(--app-border-strong);\n  text-align: center;\n}\n.estado h2 {\n  margin: 0.75rem 0 0.35rem;\n  color: var(--app-text);\n}\n.estado p {\n  max-width: 30rem;\n  margin: 0 0 1rem;\n  font-size: 0.72rem;\n}\n.estado-menor {\n  min-height: 9rem;\n  padding: 1rem;\n  border: 0;\n}\n.simbolo-estado {\n  display: grid;\n  width: 3.5rem;\n  height: 3.5rem;\n  place-items: center;\n  background: var(--color-danger);\n  color: #ffffff;\n  border-radius: 0.3rem;\n  font-size: 1.2rem;\n  font-weight: 780;\n}\n.carregador {\n  width: 1.25rem;\n  height: 1.25rem;\n  box-sizing: border-box;\n  margin-bottom: 0.8rem;\n  border: 0.14rem solid var(--app-border);\n  border-top-color: var(--studio-brand);\n  border-radius: 999rem;\n  animation: girar 650ms linear infinite;\n}\n@keyframes girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .carregador {\n    animation: none;\n  }\n}\n@media (max-width: 62rem) {\n  .identidade {\n    grid-template-columns: 1fr;\n  }\n  .edicao-logo {\n    max-width: 34rem;\n  }\n  .conteudo-aparencia {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 48rem) {\n  .pagina-perfil {\n    padding-top: 1.5rem;\n  }\n  .cabecalho-pagina {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .grade-informacoes {\n    grid-template-columns: 1fr;\n  }\n  .opcoes-ambiente {\n    grid-template-columns: 1fr;\n  }\n  .marca-estudio {\n    align-items: flex-start;\n  }\n}\n@media (max-width: 34rem) {\n  .identidade {\n    padding: 1rem;\n  }\n  .marca-estudio {\n    flex-direction: column;\n  }\n  .logo-atual {\n    width: 5.5rem;\n  }\n  .identificacao h2 {\n    white-space: normal;\n  }\n  .acoes-logo,\n  .acoes-formulario,\n  .acoes-ambiente {\n    width: 100%;\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .acoes-logo > *,\n  .acoes-formulario > *,\n  .acoes-ambiente > * {\n    width: 100%;\n  }\n  .amostras {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .componente-previa {\n    grid-template-columns: auto minmax(0, 1fr);\n  }\n  .componente-previa button {\n    grid-column: 1/-1;\n  }\n  .informacoes > div {\n    grid-template-columns: 1fr;\n    gap: 0.2rem;\n  }\n  .cabecalho-armazenamento,\n  .resumo-armazenamento {\n    grid-template-columns: 1fr;\n    flex-direction: column;\n    gap: 0.4rem;\n  }\n}\n.configuracao-publica {\n  margin-top: 1rem;\n}\n.estado-publicacao {\n  padding: 0.35rem 0.65rem;\n  background: var(--color-warning-soft);\n  color: var(--color-warning);\n  border: 0.0625rem solid var(--color-warning-border);\n  border-radius: var(--radius-round);\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.estado-publicacao.publicada {\n  background: var(--color-success-soft);\n  color: var(--color-success);\n  border-color: var(--color-success-border);\n}\n.campos-publicos {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n.campo-publico-largo {\n  grid-column: 1/-1;\n}\n.campo-texto textarea {\n  width: 100%;\n  min-height: 8rem;\n  padding: 0.75rem;\n  resize: vertical;\n  background: var(--app-surface);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: var(--radius-medium);\n  outline: none;\n}\n.campo-texto textarea:focus {\n  border-color: var(--studio-brand);\n  box-shadow: 0 0 0 0.18rem color-mix(in srgb, var(--studio-brand) 14%, transparent);\n}\n.ajuda-campo {\n  color: var(--app-text-muted) !important;\n}\n.controle-publicacao {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n  padding: 1rem;\n  background: var(--app-surface-muted);\n  border: 0.0625rem solid var(--app-border);\n  border-radius: var(--radius-medium);\n}\n.controle-publicacao input {\n  width: 1.1rem;\n  height: 1.1rem;\n  flex: 0 0 auto;\n  margin-top: 0.15rem;\n  accent-color: var(--studio-brand);\n}\n.controle-publicacao > span {\n  display: grid;\n  gap: 0.2rem;\n}\n.controle-publicacao strong {\n  font-size: 0.85rem;\n}\n.controle-publicacao small {\n  color: var(--app-text-muted);\n  line-height: 1.45;\n}\n@media (max-width: 44rem) {\n  .campos-publicos {\n    grid-template-columns: 1fr;\n  }\n  .campo-publico-largo {\n    grid-column: auto;\n  }\n}\n.grade-informacoes.apenas-identificacao {\n  grid-template-columns: 1fr;\n}\n.configuracao-embeds {\n  margin-top: 1rem;\n}\n.contador-embeds {\n  padding: 0.3rem 0.5rem;\n  background: var(--studio-brand-soft);\n  color: var(--app-text-soft);\n  border: 0.0625rem solid var(--studio-brand-border);\n  border-radius: 999rem;\n}\n.introducao-embeds {\n  max-width: 42rem;\n  margin: -0.25rem 0 1.15rem;\n  color: var(--app-text-muted);\n  font-size: 0.68rem;\n  line-height: 1.55;\n}\n.editor-embed {\n  display: grid;\n  grid-template-columns: minmax(8rem, 0.35fr) minmax(14rem, 1fr) auto;\n  align-items: end;\n  gap: 0.65rem;\n}\n.editor-embed label {\n  display: grid;\n  min-width: 0;\n  gap: 0.4rem;\n}\n.editor-embed label > span {\n  font-size: 0.67rem;\n  font-weight: 720;\n}\n.editor-embed select,\n.editor-embed input {\n  width: 100%;\n  min-width: 0;\n  min-height: 2.7rem;\n  box-sizing: border-box;\n  padding: 0.6rem 0.7rem;\n  background: var(--app-surface-muted);\n  color: var(--app-text);\n  border: 0.0625rem solid var(--app-border-strong);\n  border-radius: 0.2rem;\n  outline: none;\n}\n.editor-embed select:focus,\n.editor-embed input:focus {\n  border-color: var(--studio-brand);\n  box-shadow: 0 0 0 0.15rem var(--studio-brand-soft);\n}\n.botao-adicionar-embed {\n  min-height: 2.7rem;\n}\n.lista-embeds {\n  display: grid;\n  margin-top: 1rem;\n  border-top: 0.0625rem solid var(--app-border);\n}\n.item-embed {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto auto;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.85rem 0;\n  border-bottom: 0.0625rem solid var(--app-border);\n}\n.numero-embed {\n  display: grid;\n  width: 1.7rem;\n  height: 1.7rem;\n  place-items: center;\n  background: var(--studio-brand-soft);\n  color: var(--studio-brand);\n  border: 0.0625rem solid var(--studio-brand-border);\n  font-family: var(--font-mono);\n  font-size: 0.58rem;\n  font-weight: 760;\n}\n.dados-embed {\n  display: grid;\n  min-width: 0;\n  gap: 0.18rem;\n}\n.dados-embed strong {\n  font-size: 0.68rem;\n}\n.dados-embed span {\n  overflow: hidden;\n  color: var(--app-text-muted);\n  font-family: var(--font-mono);\n  font-size: 0.56rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.acao-embed {\n  padding: 0.35rem 0.45rem;\n  background: transparent;\n  color: var(--app-text-soft);\n  border: 0;\n  font-size: 0.6rem;\n  font-weight: 720;\n  text-decoration: none;\n}\n.acao-embed:hover {\n  color: var(--studio-brand);\n}\n.acao-remover-embed {\n  color: var(--color-danger);\n}\n.acao-remover-embed:hover {\n  color: var(--color-danger);\n  text-decoration: underline;\n}\n.estado-embeds-vazio {\n  display: flex;\n  min-height: 6rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.65rem;\n  margin-top: 1rem;\n  background: var(--app-surface-muted);\n  border: 0.0625rem dashed var(--app-border-strong);\n}\n.estado-embeds-vazio > span {\n  display: grid;\n  width: 1.5rem;\n  height: 1.5rem;\n  place-items: center;\n  color: var(--studio-brand);\n  border: 0.0625rem solid var(--studio-brand-border);\n  font-size: 1rem;\n}\n.estado-embeds-vazio p {\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.66rem;\n}\n.rodape-embeds {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n.rodape-embeds p {\n  max-width: 30rem;\n  margin: 0;\n  color: var(--app-text-muted);\n  font-size: 0.6rem;\n}\n@media (max-width: 44rem) {\n  .editor-embed {\n    grid-template-columns: 1fr;\n  }\n  .item-embed {\n    grid-template-columns: auto minmax(0, 1fr) auto;\n  }\n  .item-embed .acao-remover-embed {\n    grid-column: 2/-1;\n    justify-self: start;\n  }\n  .rodape-embeds {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .rodape-embeds .botao-principal {\n    width: 100%;\n  }\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Perfil, { className: "Perfil", filePath: "apps/studio-dash/src/app/paginas/perfil/perfil.ts", lineNumber: 37 });
})();
export {
  Perfil
};
