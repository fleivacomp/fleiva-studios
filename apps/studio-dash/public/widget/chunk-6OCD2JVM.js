import {
  ActivatedRoute,
  Component,
  DadosExperienciaImersivaPublica,
  Injectable,
  Input,
  RouterLink,
  Title,
  ViewChildren,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-IMBOO5ID.js";

// apps/studio-dash/src/app/paginas/experiencia-imersiva-publica/motor-audio-experiencia-imersiva.ts
var MotorAudioExperienciaImersiva = class _MotorAudioExperienciaImersiva {
  contexto = null;
  buffers = /* @__PURE__ */ new Map();
  fontesAtivas = /* @__PURE__ */ new Set();
  controladorAbort = null;
  inicializacao = null;
  sequenciaManual = 0;
  iniciadoInterno = signal(
    false,
    ...ngDevMode ? [{ debugName: "iniciadoInterno" }] : (
      /* istanbul ignore next */
      []
    )
  );
  carregandoInterno = signal(
    false,
    ...ngDevMode ? [{ debugName: "carregandoInterno" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroInterno = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroInterno" }] : (
      /* istanbul ignore next */
      []
    )
  );
  iniciado = this.iniciadoInterno.asReadonly();
  carregando = this.carregandoInterno.asReadonly();
  erro = this.erroInterno.asReadonly();
  iniciar(recursos) {
    if (this.iniciadoInterno())
      return this.retomarContexto();
    if (this.inicializacao)
      return this.inicializacao;
    this.inicializacao = this.inicializar(recursos).finally(() => {
      this.inicializacao = null;
    });
    return this.inicializacao;
  }
  obterContexto() {
    return this.contexto;
  }
  obterBuffer(recursoId) {
    return this.buffers.get(recursoId) ?? null;
  }
  reproduzir(recursoId) {
    const id = `manual-${++this.sequenciaManual}`;
    return this.iniciarComando({
      acaoId: id,
      blocoId: "manual",
      recursoId,
      inicioTrechoSegundos: 0,
      fimTrechoSegundos: null,
      repetir: false,
      fadeInSegundos: 0
    }, this.exigirContexto().currentTime).fonte;
  }
  reproduzirComLoop(recursoId, atrasoSegundos, inicioLoopSegundos, fimLoopSegundos) {
    const contexto = this.exigirContexto();
    const id = `manual-${++this.sequenciaManual}`;
    return this.iniciarComando({
      acaoId: id,
      blocoId: "manual",
      recursoId,
      inicioTrechoSegundos: inicioLoopSegundos,
      fimTrechoSegundos: fimLoopSegundos,
      repetir: true,
      fadeInSegundos: 0
    }, contexto.currentTime + atrasoSegundos).fonte;
  }
  transicionar(comandos, transicaoAnterior, configuracao = {}, blocoSaidaId = null, blocoEntradaId = comandos[0]?.blocoId ?? null) {
    const contexto = this.exigirContexto();
    const agora = contexto.currentTime;
    const ativas = [...this.fontesAtivas];
    for (const comando of comandos) {
      this.validarComando(comando);
    }
    for (const ativa of ativas) {
      if (ativa.inicioContexto > agora) {
        this.pararFonte(ativa, agora);
      }
    }
    const fontesEmCurso = ativas.filter((ativa) => ativa.inicioContexto <= agora && !ativa.encerrada && !ativa.emSaida && (blocoSaidaId === null || ativa.blocoId === blocoSaidaId) && (ativa.paradaAgendadaContexto === null || ativa.paradaAgendadaContexto > agora));
    let inicioProximo = agora;
    const transicaoBase = transicaoAnterior === "fade-out" || transicaoAnterior === "crossfade" ? "corte" : transicaoAnterior;
    const crossfade = this.duracaoValida(configuracao.duracaoCrossfadeSegundos);
    const fadeOut = crossfade > 0 ? 0 : this.duracaoValida(configuracao.duracaoFadeOutSegundos);
    const duracaoSaida = crossfade > 0 ? crossfade : fadeOut;
    const finaisSaida = /* @__PURE__ */ new Map();
    if (transicaoBase === "terminar-loop") {
      for (const ativa of fontesEmCurso) {
        const fimCiclo = ativa.repetir ? this.proximoFimCiclo(ativa, agora) : Math.max(agora, ativa.fimNaturalContexto ?? agora);
        const parada = ativa.paradaAgendadaContexto !== null && ativa.paradaAgendadaContexto > agora ? Math.min(ativa.paradaAgendadaContexto, fimCiclo) : fimCiclo;
        this.pararFonte(ativa, parada);
        finaisSaida.set(ativa, parada);
        inicioProximo = Math.max(inicioProximo, parada);
      }
    } else if (transicaoBase === "continuar") {
      this.transferirFontes(fontesEmCurso, blocoEntradaId);
    } else if (transicaoBase === "cauda") {
      for (const ativa of fontesEmCurso) {
        this.iniciarCauda(ativa, agora, configuracao.duracaoCaudaSegundos ?? null, blocoEntradaId);
      }
    } else if (duracaoSaida <= 0) {
      for (const ativa of fontesEmCurso) {
        this.pararFonte(ativa, agora);
      }
    }
    if (duracaoSaida > 0) {
      for (const ativa of fontesEmCurso) {
        if (!finaisSaida.has(ativa)) {
          const limiteEfeito = agora + duracaoSaida;
          const fimDisponivel = ativa.paradaAgendadaContexto !== null ? ativa.paradaAgendadaContexto : ativa.fimNaturalContexto;
          const parada = fimDisponivel !== null ? Math.min(limiteEfeito, fimDisponivel) : limiteEfeito;
          this.pararFonte(ativa, parada);
          finaisSaida.set(ativa, parada);
        }
        const fimSaida = finaisSaida.get(ativa);
        this.agendarFadeSaida(ativa, Math.max(agora, fimSaida - duracaoSaida), fimSaida);
        ativa.emSaida = true;
      }
    }
    const inicioEntrada = crossfade > 0 ? Math.max(agora, inicioProximo - crossfade) : inicioProximo;
    for (const comando of comandos) {
      this.iniciarComando(__spreadProps(__spreadValues({}, comando), {
        fadeInSegundos: Math.max(comando.fadeInSegundos, crossfade)
      }), inicioEntrada);
    }
    return {
      inicioCenaContexto: inicioEntrada
    };
  }
  pararRecurso(recursoId) {
    for (const ativa of [...this.fontesAtivas]) {
      if (ativa.recursoId === recursoId)
        this.pararFonte(ativa);
    }
  }
  pararTodos() {
    for (const ativa of [...this.fontesAtivas])
      this.pararFonte(ativa);
  }
  async encerrar() {
    this.controladorAbort?.abort();
    this.controladorAbort = null;
    this.pararTodos();
    this.buffers.clear();
    const contexto = this.contexto;
    this.contexto = null;
    if (contexto && contexto.state !== "closed")
      await contexto.close();
    this.iniciadoInterno.set(false);
    this.carregandoInterno.set(false);
    this.erroInterno.set(null);
  }
  iniciarComando(comando, quando) {
    const contexto = this.exigirContexto();
    const { buffer, inicio, fim } = this.validarComando(comando);
    const fonte = contexto.createBufferSource();
    const ganhoVolume = contexto.createGain();
    const ganho = contexto.createGain();
    fonte.buffer = buffer;
    fonte.loop = comando.repetir;
    fonte.loopStart = inicio;
    fonte.loopEnd = fim;
    fonte.connect(ganhoVolume);
    ganhoVolume.connect(ganho);
    ganho.connect(contexto.destination);
    ganhoVolume.gain.setValueAtTime(this.dbParaGanho(comando.volumeDb ?? 0), quando);
    const fade = Math.max(0, comando.fadeInSegundos);
    ganho.gain.setValueAtTime(fade > 0 ? 0 : 1, quando);
    if (fade > 0)
      ganho.gain.linearRampToValueAtTime(1, quando + fade);
    const ativa = {
      acaoId: comando.acaoId,
      blocoId: comando.blocoId,
      recursoId: comando.recursoId,
      fonte,
      ganhoVolume,
      ganho,
      inicioContexto: quando,
      inicioLoop: inicio,
      fimLoop: fim,
      repetir: comando.repetir,
      duracaoBuffer: buffer.duration,
      fimNaturalContexto: comando.repetir ? null : quando + (fim - inicio),
      paradaAgendadaContexto: null,
      emSaida: false,
      encerrada: false
    };
    this.fontesAtivas.add(ativa);
    fonte.addEventListener("ended", () => this.removerFonte(ativa), {
      once: true
    });
    fonte.start(quando, inicio);
    if (!comando.repetir && ativa.fimNaturalContexto !== null) {
      this.pararFonte(ativa, ativa.fimNaturalContexto);
    }
    return ativa;
  }
  pararFonte(ativa, quando, permitirAdiar = false) {
    if (ativa.encerrada)
      return;
    const contexto = this.contexto;
    const instante = Math.max(contexto?.currentTime ?? 0, quando ?? contexto?.currentTime ?? 0);
    if (ativa.paradaAgendadaContexto !== null && ativa.paradaAgendadaContexto <= instante && !permitirAdiar) {
      return;
    }
    try {
      ativa.fonte.stop(instante);
      ativa.paradaAgendadaContexto = instante;
    } catch {
      this.removerFonte(ativa);
    }
  }
  removerFonte(ativa) {
    if (ativa.encerrada)
      return;
    ativa.encerrada = true;
    try {
      ativa.fonte.disconnect();
    } catch {
    }
    try {
      ativa.ganhoVolume.disconnect();
    } catch {
    }
    try {
      ativa.ganho.disconnect();
    } catch {
    }
    this.fontesAtivas.delete(ativa);
  }
  validarComando(comando) {
    const buffer = this.buffers.get(comando.recursoId);
    if (!buffer)
      throw new Error("O recurso sonoro n\xE3o est\xE1 dispon\xEDvel.");
    const inicio = comando.inicioTrechoSegundos;
    const fim = Math.min(comando.fimTrechoSegundos ?? buffer.duration, buffer.duration);
    if (!Number.isFinite(inicio) || inicio < 0 || inicio >= buffer.duration || !Number.isFinite(fim) || fim <= inicio) {
      throw new Error("O trecho escolhido n\xE3o cabe no recurso sonoro.");
    }
    return { buffer, inicio, fim };
  }
  proximoFimCiclo(ativa, agora) {
    const duracaoLoop = ativa.fimLoop - ativa.inicioLoop;
    if (!Number.isFinite(duracaoLoop) || duracaoLoop <= 0) {
      return agora;
    }
    const decorrido = Math.max(0, agora - ativa.inicioContexto);
    const ciclosCompletos = Math.floor(decorrido / duracaoLoop);
    const fimAtual = ativa.inicioContexto + (ciclosCompletos + 1) * duracaoLoop;
    return Math.max(agora, fimAtual);
  }
  transferirFontes(fontes, blocoEntradaId) {
    if (!blocoEntradaId)
      return;
    for (const fonte of fontes) {
      fonte.blocoId = blocoEntradaId;
    }
  }
  iniciarCauda(ativa, agora, duracaoLimite, blocoEntradaId) {
    if (ativa.repetir) {
      const posicao = this.posicaoAtualFonte(ativa, agora);
      ativa.fonte.loop = false;
      ativa.repetir = false;
      ativa.fimNaturalContexto = agora + Math.max(0, ativa.duracaoBuffer - posicao);
    } else {
      ativa.fimNaturalContexto = ativa.inicioContexto + Math.max(0, ativa.duracaoBuffer - ativa.inicioLoop);
    }
    if (blocoEntradaId)
      ativa.blocoId = blocoEntradaId;
    const parada = duracaoLimite === null ? ativa.fimNaturalContexto : Math.min(agora + duracaoLimite, ativa.fimNaturalContexto ?? agora + duracaoLimite);
    if (parada !== null)
      this.pararFonte(ativa, parada, true);
  }
  posicaoAtualFonte(ativa, agora) {
    const decorrido = Math.max(0, agora - ativa.inicioContexto);
    if (!ativa.repetir) {
      return Math.min(ativa.duracaoBuffer, ativa.inicioLoop + decorrido);
    }
    const duracaoLoop = ativa.fimLoop - ativa.inicioLoop;
    if (duracaoLoop <= 0)
      return ativa.inicioLoop;
    return ativa.inicioLoop + decorrido % duracaoLoop;
  }
  duracaoValida(valor) {
    return typeof valor === "number" && Number.isFinite(valor) ? Math.max(0, valor) : 0;
  }
  dbParaGanho(valor) {
    const db = Number.isFinite(valor) ? Math.min(12, Math.max(-60, valor)) : 0;
    return Math.pow(10, db / 20);
  }
  agendarFadeSaida(ativa, inicio, fim) {
    if (fim <= inicio)
      return;
    const parametro = ativa.ganho.gain;
    const agora = this.contexto?.currentTime ?? inicio;
    if (inicio <= agora) {
      this.fixarGanhoAtual(parametro, agora);
    } else {
      parametro.cancelScheduledValues(inicio);
      parametro.setValueAtTime(1, inicio);
    }
    parametro.linearRampToValueAtTime(0, fim);
  }
  fixarGanhoAtual(parametro, agora) {
    try {
      parametro.cancelAndHoldAtTime(agora);
    } catch {
      const valorAtual = parametro.value;
      parametro.cancelScheduledValues(agora);
      parametro.setValueAtTime(valorAtual, agora);
    }
  }
  exigirContexto() {
    if (!this.contexto || !this.iniciadoInterno()) {
      throw new Error("A experi\xEAncia sonora ainda n\xE3o foi iniciada.");
    }
    return this.contexto;
  }
  async inicializar(recursos) {
    this.carregandoInterno.set(true);
    this.erroInterno.set(null);
    try {
      if (typeof window === "undefined") {
        throw new Error("A experi\xEAncia sonora n\xE3o est\xE1 dispon\xEDvel neste ambiente.");
      }
      const contexto = new AudioContext();
      const controladorAbort = new AbortController();
      this.contexto = contexto;
      this.controladorAbort = controladorAbort;
      if (contexto.state === "suspended")
        await contexto.resume();
      const carregados = await Promise.all(recursos.map(async (recurso) => ({
        id: recurso.id,
        buffer: await this.carregarBuffer(contexto, recurso, controladorAbort.signal)
      })));
      this.buffers.clear();
      for (const recurso of carregados) {
        this.buffers.set(recurso.id, recurso.buffer);
      }
      this.iniciadoInterno.set(true);
    } catch (erro) {
      const contexto = this.contexto;
      this.contexto = null;
      this.controladorAbort = null;
      this.buffers.clear();
      this.iniciadoInterno.set(false);
      if (contexto && contexto.state !== "closed")
        await contexto.close();
      const erroNormalizado = new Error(this.obterMensagemErro(erro));
      this.erroInterno.set(erroNormalizado.message);
      throw erroNormalizado;
    } finally {
      this.carregandoInterno.set(false);
    }
  }
  async carregarBuffer(contexto, recurso, sinal) {
    const resposta = await fetch(recurso.reproducao_url, { signal: sinal });
    if (!resposta.ok) {
      throw new Error(`N\xE3o foi poss\xEDvel carregar o recurso \u201C${recurso.nome}\u201D.`);
    }
    return await contexto.decodeAudioData(await resposta.arrayBuffer());
  }
  async retomarContexto() {
    if (this.contexto?.state === "suspended")
      await this.contexto.resume();
  }
  obterMensagemErro(erro) {
    return typeof erro === "object" && erro !== null && "message" in erro ? String(erro.message) : "N\xE3o foi poss\xEDvel iniciar a experi\xEAncia sonora.";
  }
  static \u0275fac = function MotorAudioExperienciaImersiva_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MotorAudioExperienciaImersiva)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MotorAudioExperienciaImersiva, factory: _MotorAudioExperienciaImersiva.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotorAudioExperienciaImersiva, [{
    type: Injectable
  }], null, null);
})();

// apps/studio-dash/src/app/paginas/experiencia-imersiva-publica/experiencia-imersiva-publica.ts
var _c0 = ["blocoExperiencia"];
var _c1 = (a0) => ["/", a0];
var _forTrack0 = ($index, $item) => $item.id;
function ExperienciaImersivaPublica_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2);
    \u0275\u0275element(1, "span", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Abrindo publica\xE7\xE3o...");
    \u0275\u0275elementEnd()();
  }
}
function ExperienciaImersivaPublica_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 3)(1, "span");
    \u0275\u0275text(2, "404");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4, "P\xE1gina indispon\xEDvel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 5);
    \u0275\u0275listener("click", function ExperienciaImersivaPublica_Conditional_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.carregar());
    });
    \u0275\u0275text(8, "Tentar novamente");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.dados.erro());
  }
}
function ExperienciaImersivaPublica_Conditional_3_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const estudio_r3 = ctx;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c1, estudio_r3.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", estudio_r3.nome, " ");
  }
}
function ExperienciaImersivaPublica_Conditional_3_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275text(1, "FLEIVA");
    \u0275\u0275elementEnd();
  }
}
function ExperienciaImersivaPublica_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 6);
    \u0275\u0275conditionalCreate(1, ExperienciaImersivaPublica_Conditional_3_Conditional_0_Conditional_1_Template, 2, 4, "a", 10)(2, ExperienciaImersivaPublica_Conditional_3_Conditional_0_Conditional_2_Template, 2, 0, "a", 11);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const experiencia_r4 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = experiencia_r4.estudio) ? 1 : 2, tmp_3_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.modoTeste() ? "MODO DE TESTE" : ctx_r1.leituraSimples() ? "LEITURA" : ctx_r1.motor.iniciado() ? "EM CURSO" : "EXPERI\xCANCIA");
  }
}
function ExperienciaImersivaPublica_Conditional_3_Conditional_1_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ExperienciaImersivaPublica_Conditional_3_Conditional_1_For_15_Template_button_click_0_listener() {
      const bloco_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.irParaCenaTeste(bloco_r7.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bloco_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("em-tela", ctx_r1.blocoEmFocoId() === bloco_r7.id)("com-audio", ctx_r1.blocoSonoroId() === bloco_r7.id);
    \u0275\u0275property("disabled", !ctx_r1.motor.iniciado());
    \u0275\u0275attribute("aria-label", "Ir para cena " + bloco_r7.ordem);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bloco_r7.ordem, " ");
  }
}
function ExperienciaImersivaPublica_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 7)(1, "span", 12);
    \u0275\u0275text(2, "TESTE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "EM TELA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "small");
    \u0275\u0275text(10, "\xC1UDIO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "nav", 13);
    \u0275\u0275repeaterCreate(14, ExperienciaImersivaPublica_Conditional_3_Conditional_1_For_15_Template, 2, 7, "button", 14, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 15);
    \u0275\u0275listener("click", function ExperienciaImersivaPublica_Conditional_3_Conditional_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.repetirCenaTeste());
    });
    \u0275\u0275text(17, " Repetir cena ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 5);
    \u0275\u0275listener("click", function ExperienciaImersivaPublica_Conditional_3_Conditional_1_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reiniciarTeste());
    });
    \u0275\u0275text(19, "Reiniciar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const experiencia_r4 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r1.numeroCena(ctx_r1.blocoEmFocoId()) ?? "\u2014", "/", experiencia_r4.blocos.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.numeroCena(ctx_r1.blocoSonoroId()) ?? "\u2014", "/", experiencia_r4.blocos.length);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(experiencia_r4.blocos);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.motor.iniciado() || !ctx_r1.blocoSonoroId());
  }
}
function ExperienciaImersivaPublica_Conditional_3_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.motor.erro());
  }
}
function ExperienciaImersivaPublica_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 8)(1, "p", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "p", 17);
    \u0275\u0275elementStart(6, "div", 18)(7, "button", 19);
    \u0275\u0275listener("click", function ExperienciaImersivaPublica_Conditional_3_Conditional_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.iniciar());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 20);
    \u0275\u0275listener("click", function ExperienciaImersivaPublica_Conditional_3_Conditional_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.lerSemExperiencia());
    });
    \u0275\u0275text(10, " Ler sem \xE1udio ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, ExperienciaImersivaPublica_Conditional_3_Conditional_2_Conditional_11_Template, 2, 1, "p", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const experiencia_r4 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.modoTeste() ? "MODO DE TESTE" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(experiencia_r4.nome);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.motor.carregando());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.motor.carregando() ? "Preparando \xE1udio..." : ctx_r1.modoTeste() ? "Iniciar teste" : "Iniciar experi\xEAncia", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.motor.erro() ? 11 : -1);
  }
}
function ExperienciaImersivaPublica_Conditional_3_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 22)(1, "p", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const experiencia_r4 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.leituraSimples() ? "SEM \xC1UDIO" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(experiencia_r4.nome);
  }
}
function ExperienciaImersivaPublica_Conditional_3_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.erroExecucao());
  }
}
function ExperienciaImersivaPublica_Conditional_3_Conditional_3_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 \xC1UDIO ");
  }
}
function ExperienciaImersivaPublica_Conditional_3_Conditional_3_For_5_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 EM TELA ");
  }
}
function ExperienciaImersivaPublica_Conditional_3_Conditional_3_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ExperienciaImersivaPublica_Conditional_3_Conditional_3_For_5_Conditional_2_Conditional_2_Template, 1, 0)(3, ExperienciaImersivaPublica_Conditional_3_Conditional_3_For_5_Conditional_2_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bloco_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("visual-ativa", ctx_r1.blocoEmFocoId() === bloco_r9.id)("sonora-ativa", ctx_r1.blocoSonoroId() === bloco_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" CENA ", bloco_r9.ordem, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.blocoSonoroId() === bloco_r9.id ? 2 : ctx_r1.blocoEmFocoId() === bloco_r9.id ? 3 : -1);
  }
}
function ExperienciaImersivaPublica_Conditional_3_Conditional_3_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "figure", 29);
    \u0275\u0275element(1, "img", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bloco_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", bloco_r9.imagem_url, \u0275\u0275sanitizeUrl);
  }
}
function ExperienciaImersivaPublica_Conditional_3_Conditional_3_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bloco_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bloco_r9.conteudo);
  }
}
function ExperienciaImersivaPublica_Conditional_3_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 27, 0);
    \u0275\u0275conditionalCreate(2, ExperienciaImersivaPublica_Conditional_3_Conditional_3_For_5_Conditional_2_Template, 4, 6, "span", 28);
    \u0275\u0275conditionalCreate(3, ExperienciaImersivaPublica_Conditional_3_Conditional_3_For_5_Conditional_3_Template, 2, 1, "figure", 29);
    \u0275\u0275conditionalCreate(4, ExperienciaImersivaPublica_Conditional_3_Conditional_3_For_5_Conditional_4_Template, 2, 1, "pre");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bloco_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("em-foco", ctx_r1.blocoEmFocoId() === bloco_r9.id);
    \u0275\u0275attribute("data-bloco-id", bloco_r9.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.modoTeste() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(bloco_r9.imagem_url ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(bloco_r9.conteudo ? 4 : -1);
  }
}
function ExperienciaImersivaPublica_Conditional_3_Conditional_3_ForEmpty_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1, "Esta publica\xE7\xE3o ainda n\xE3o possui conte\xFAdo.");
    \u0275\u0275elementEnd();
  }
}
function ExperienciaImersivaPublica_Conditional_3_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer", 26)(1, "span");
    \u0275\u0275text(2, "FIM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const experiencia_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(experiencia_r4.nome);
  }
}
function ExperienciaImersivaPublica_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 9);
    \u0275\u0275conditionalCreate(1, ExperienciaImersivaPublica_Conditional_3_Conditional_3_Conditional_1_Template, 5, 2, "header", 22);
    \u0275\u0275conditionalCreate(2, ExperienciaImersivaPublica_Conditional_3_Conditional_3_Conditional_2_Template, 2, 1, "p", 21);
    \u0275\u0275elementStart(3, "div", 23);
    \u0275\u0275repeaterCreate(4, ExperienciaImersivaPublica_Conditional_3_Conditional_3_For_5_Template, 5, 6, "section", 24, _forTrack0, false, ExperienciaImersivaPublica_Conditional_3_Conditional_3_ForEmpty_6_Template, 2, 0, "p", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ExperienciaImersivaPublica_Conditional_3_Conditional_3_Conditional_7_Template, 5, 1, "footer", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const experiencia_r4 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.integrado() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.erroExecucao() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(experiencia_r4.blocos);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.integrado() ? 7 : -1);
  }
}
function ExperienciaImersivaPublica_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ExperienciaImersivaPublica_Conditional_3_Conditional_0_Template, 5, 2, "header", 6);
    \u0275\u0275conditionalCreate(1, ExperienciaImersivaPublica_Conditional_3_Conditional_1_Template, 20, 5, "aside", 7);
    \u0275\u0275conditionalCreate(2, ExperienciaImersivaPublica_Conditional_3_Conditional_2_Template, 12, 5, "section", 8)(3, ExperienciaImersivaPublica_Conditional_3_Conditional_3_Template, 8, 4, "article", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r1.integrado() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.modoTeste() && !ctx_r1.integrado() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.motor.iniciado() && !ctx_r1.leituraSimples() ? 2 : 3);
  }
}
var ExperienciaImersivaPublica = class _ExperienciaImersivaPublica {
  dados = inject(DadosExperienciaImersivaPublica);
  leituraSimples = signal(
    false,
    ...ngDevMode ? [{ debugName: "leituraSimples" }] : (
      /* istanbul ignore next */
      []
    )
  );
  modoTeste = signal(
    false,
    ...ngDevMode ? [{ debugName: "modoTeste" }] : (
      /* istanbul ignore next */
      []
    )
  );
  experienciaIdEntrada = input(
    null,
    ...ngDevMode ? [{ debugName: "experienciaIdEntrada" }] : (
      /* istanbul ignore next */
      []
    )
  );
  modoTesteEntrada = input(
    false,
    ...ngDevMode ? [{ debugName: "modoTesteEntrada" }] : (
      /* istanbul ignore next */
      []
    )
  );
  integrado = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "integrado" } : (
    /* istanbul ignore next */
    {}
  )), { transform: booleanAttribute }));
  blocoEmFocoId = signal(
    null,
    ...ngDevMode ? [{ debugName: "blocoEmFocoId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  blocoSonoroId = signal(
    null,
    ...ngDevMode ? [{ debugName: "blocoSonoroId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  erroExecucao = signal(
    null,
    ...ngDevMode ? [{ debugName: "erroExecucao" }] : (
      /* istanbul ignore next */
      []
    )
  );
  motor = inject(MotorAudioExperienciaImersiva);
  rota = inject(ActivatedRoute);
  tituloPagina = inject(Title);
  elementosBloco = viewChildren(
    "blocoExperiencia",
    ...ngDevMode ? [{ debugName: "elementosBloco" }] : (
      /* istanbul ignore next */
      []
    )
  );
  observador = null;
  blocosNaLinhaDeLeitura = /* @__PURE__ */ new Set();
  maiorOrdemSonora = null;
  experienciaId = "";
  blocoTransicaoAtualId = null;
  transicaoSaidaAtual = "corte";
  duracaoCrossfadeAtual = 0;
  duracaoFadeOutAtual = 0;
  duracaoCaudaAtual = null;
  transicaoPendente = null;
  constructor() {
    effect(() => {
      if (this.integrado())
        return;
      const experiencia = this.dados.experiencia();
      this.tituloPagina.setTitle(experiencia ? `${experiencia.nome} \u2014 Play Fl\xEAiva` : "Play Fl\xEAiva");
    });
    effect(() => {
      const elementos = this.elementosBloco();
      const iniciado = this.motor.iniciado();
      const leituraSimples = this.leituraSimples();
      this.configurarObservador(iniciado && !leituraSimples ? elementos : []);
    });
    effect(() => {
      const blocoId = this.blocoSonoroId();
      const iniciado = this.motor.iniciado();
      const leituraSimples = this.leituraSimples();
      if (blocoId && iniciado && !leituraSimples) {
        this.executarBloco(blocoId);
      }
    });
  }
  ngOnInit() {
    this.modoTeste.set(this.modoTesteEntrada() || this.rota.snapshot.queryParamMap.get("teste") === "1");
    this.experienciaId = this.experienciaIdEntrada()?.trim() || this.rota.snapshot.paramMap.get("experienciaId") || "";
    void this.carregar();
  }
  ngOnDestroy() {
    this.desligarObservador();
    void this.motor.encerrar();
  }
  async carregar() {
    await this.motor.encerrar();
    this.leituraSimples.set(false);
    this.reiniciarFoco();
    await this.dados.carregar(this.experienciaId);
  }
  async iniciar() {
    const experiencia = this.dados.experiencia();
    if (!experiencia) {
      return;
    }
    this.reiniciarFoco();
    try {
      await this.motor.iniciar(experiencia.recursos);
    } catch {
    }
  }
  async lerSemExperiencia() {
    await this.motor.encerrar();
    this.reiniciarFoco();
    this.leituraSimples.set(true);
  }
  numeroCena(blocoId) {
    if (!blocoId) {
      return null;
    }
    return this.dados.experiencia()?.blocos.find((bloco) => bloco.id === blocoId)?.ordem ?? null;
  }
  async reiniciarTeste() {
    await this.motor.encerrar();
    this.leituraSimples.set(false);
    this.reiniciarFoco();
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
  irParaCenaTeste(blocoId) {
    if (!this.modoTeste() || !this.motor.iniciado()) {
      return;
    }
    const bloco = this.dados.experiencia()?.blocos.find((item) => item.id === blocoId);
    const elemento = this.elementosBloco().find((item) => item.nativeElement.dataset["blocoId"] === blocoId);
    if (!bloco || !elemento) {
      return;
    }
    this.transicaoSaidaAtual = "corte";
    this.duracaoCrossfadeAtual = 0;
    this.duracaoFadeOutAtual = 0;
    this.duracaoCaudaAtual = null;
    this.transicaoPendente = null;
    this.motor.pararTodos();
    this.blocoTransicaoAtualId = null;
    this.maiorOrdemSonora = bloco.ordem;
    this.blocoEmFocoId.set(bloco.id);
    if (this.blocoSonoroId() === bloco.id) {
      this.executarBloco(bloco.id);
    } else {
      this.blocoSonoroId.set(bloco.id);
    }
    elemento.nativeElement.scrollIntoView({
      behavior: "auto",
      block: "center"
    });
  }
  repetirCenaTeste() {
    const blocoId = this.blocoSonoroId();
    if (!this.modoTeste() || !this.motor.iniciado() || !blocoId) {
      return;
    }
    this.transicaoSaidaAtual = "corte";
    this.duracaoCrossfadeAtual = 0;
    this.duracaoFadeOutAtual = 0;
    this.duracaoCaudaAtual = null;
    this.transicaoPendente = null;
    this.motor.pararTodos();
    this.blocoTransicaoAtualId = null;
    this.executarBloco(blocoId);
  }
  configurarObservador(elementos) {
    this.desligarObservador();
    if (elementos.length === 0 || typeof IntersectionObserver === "undefined") {
      return;
    }
    this.observador = new IntersectionObserver((entradas) => {
      for (const entrada of entradas) {
        if (entrada.isIntersecting) {
          this.blocosNaLinhaDeLeitura.add(entrada.target);
        } else {
          this.blocosNaLinhaDeLeitura.delete(entrada.target);
        }
      }
      const elementoEmFoco = [...this.blocosNaLinhaDeLeitura].sort((primeiro, segundo) => this.distanciaDaLinhaDeLeitura(primeiro) - this.distanciaDaLinhaDeLeitura(segundo))[0];
      if (elementoEmFoco) {
        this.assumirFoco(elementoEmFoco);
      }
    }, {
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0
    });
    for (const elemento of elementos) {
      this.observador.observe(elemento.nativeElement);
    }
  }
  assumirFoco(elemento) {
    const blocoId = elemento.dataset["blocoId"];
    const experiencia = this.dados.experiencia();
    if (!blocoId || !experiencia) {
      return;
    }
    const bloco = experiencia.blocos.find((item) => item.id === blocoId);
    if (!bloco) {
      return;
    }
    this.blocoEmFocoId.set(bloco.id);
    if (this.maiorOrdemSonora === null || bloco.ordem > this.maiorOrdemSonora) {
      this.maiorOrdemSonora = bloco.ordem;
      this.blocoSonoroId.set(bloco.id);
    }
  }
  reiniciarFoco() {
    this.blocoEmFocoId.set(null);
    this.blocoSonoroId.set(null);
    this.erroExecucao.set(null);
    this.maiorOrdemSonora = null;
    this.blocoTransicaoAtualId = null;
    this.transicaoSaidaAtual = "corte";
    this.duracaoCrossfadeAtual = 0;
    this.duracaoFadeOutAtual = 0;
    this.duracaoCaudaAtual = null;
    this.transicaoPendente = null;
    this.blocosNaLinhaDeLeitura.clear();
  }
  executarBloco(blocoId) {
    const experiencia = this.dados.experiencia();
    const bloco = experiencia?.blocos.find((item) => item.id === blocoId);
    if (!bloco) {
      return;
    }
    this.erroExecucao.set(null);
    try {
      this.atualizarTransicaoPendente();
      const acoesOrdenadas = [...bloco.acoes].sort((primeira, segunda) => primeira.ordem - segunda.ordem);
      const comandos = acoesOrdenadas.filter((acao) => ["loop", "tocar", "one-shot"].includes(acao.acao.trim().toLocaleLowerCase())).map((acao) => {
        if (!acao.recurso_id) {
          throw new Error(`Uma a\xE7\xE3o do bloco ${bloco.ordem} n\xE3o possui recurso sonoro.`);
        }
        const inicioConfigurado = this.parametroNumero(acao.parametros, "inicio_trecho_segundos");
        const fimConfigurado = this.parametroNumero(acao.parametros, "fim_trecho_segundos");
        const inicioLegado = bloco.hold_point_segundos === null ? 0 : bloco.hold_point_segundos - acao.inicio_segundos;
        const fimLegado = bloco.teto_temporal_segundos === null ? null : bloco.teto_temporal_segundos - acao.inicio_segundos;
        return {
          acaoId: acao.id,
          blocoId: bloco.id,
          recursoId: acao.recurso_id,
          inicioTrechoSegundos: inicioConfigurado ?? inicioLegado,
          fimTrechoSegundos: fimConfigurado ?? fimLegado,
          repetir: acao.acao.trim().toLocaleLowerCase() === "loop",
          fadeInSegundos: this.parametroNumero(acao.parametros, "fade_in_segundos") ?? 0,
          volumeDb: this.normalizarVolumeDb(this.parametroNumero(acao.parametros, "volume_db") ?? 0)
        };
      });
      const resultado = this.motor.transicionar(comandos, this.transicaoSaidaAtual, {
        duracaoCrossfadeSegundos: this.duracaoCrossfadeAtual,
        duracaoFadeOutSegundos: this.duracaoFadeOutAtual,
        duracaoCaudaSegundos: this.duracaoCaudaAtual
      }, this.blocoTransicaoAtualId, bloco.id);
      const acaoPrincipal = acoesOrdenadas[0];
      const proximaTransicao = acaoPrincipal ? this.transicaoDosParametros(acaoPrincipal.parametros) : "silencio";
      const proximoAcabamento = acaoPrincipal ? this.acabamentoDosParametros(acaoPrincipal.parametros) : "direto";
      const proximaDuracaoCrossfade = acaoPrincipal && proximoAcabamento === "crossfade" ? this.parametroNumero(acaoPrincipal.parametros, "duracao_crossfade_segundos") ?? 0 : 0;
      const proximaDuracaoFadeOut = acaoPrincipal && proximoAcabamento === "fade-out" ? this.parametroNumero(acaoPrincipal.parametros, "duracao_fade_out_segundos") ?? 0 : 0;
      const proximaDuracaoCauda = acaoPrincipal ? this.parametroNumero(acaoPrincipal.parametros, "duracao_cauda_segundos") : null;
      this.transicaoPendente = {
        inicioCenaContexto: resultado.inicioCenaContexto,
        blocoId: bloco.id,
        transicaoSaida: proximaTransicao,
        duracaoCrossfade: proximaDuracaoCrossfade,
        duracaoFadeOut: proximaDuracaoFadeOut,
        duracaoCauda: proximaDuracaoCauda
      };
      this.atualizarTransicaoPendente();
    } catch (erro) {
      this.motor.pararTodos();
      this.blocoTransicaoAtualId = null;
      this.transicaoPendente = null;
      this.transicaoSaidaAtual = "corte";
      this.duracaoCrossfadeAtual = 0;
      this.duracaoFadeOutAtual = 0;
      this.duracaoCaudaAtual = null;
      this.erroExecucao.set(this.obterMensagemErroExecucao(erro));
    }
  }
  transicaoValida(valor) {
    return valor === "terminar-loop" || valor === "continuar" || valor === "cauda" || valor === "fade-out" || valor === "crossfade" || valor === "silencio" ? valor : "terminar-loop";
  }
  transicaoDosParametros(parametros) {
    const transicao = this.transicaoValida(this.parametroTexto(parametros, "transicao_saida"));
    return transicao === "fade-out" || transicao === "crossfade" ? "corte" : transicao;
  }
  acabamentoDosParametros(parametros) {
    const acabamento = this.parametroTexto(parametros, "acabamento_saida");
    if (acabamento === "direto" || acabamento === "fade-out" || acabamento === "crossfade") {
      return acabamento;
    }
    const transicaoLegada = this.transicaoValida(this.parametroTexto(parametros, "transicao_saida"));
    return transicaoLegada === "fade-out" || transicaoLegada === "crossfade" ? transicaoLegada : "direto";
  }
  parametroNumero(parametros, chave) {
    if (!parametros || Array.isArray(parametros) || typeof parametros !== "object") {
      return null;
    }
    const valor = parametros[chave];
    return typeof valor === "number" && Number.isFinite(valor) ? valor : null;
  }
  normalizarVolumeDb(valor) {
    if (!Number.isFinite(valor))
      return 0;
    return Math.min(12, Math.max(-60, valor));
  }
  parametroTexto(parametros, chave) {
    if (!parametros || Array.isArray(parametros) || typeof parametros !== "object") {
      return null;
    }
    const valor = parametros[chave];
    return typeof valor === "string" ? valor : null;
  }
  obterMensagemErroExecucao(erro) {
    if (typeof erro === "object" && erro !== null && "message" in erro) {
      return String(erro.message);
    }
    return "N\xE3o foi poss\xEDvel executar o \xE1udio deste bloco.";
  }
  desligarObservador() {
    this.observador?.disconnect();
    this.observador = null;
    this.blocosNaLinhaDeLeitura.clear();
  }
  atualizarTransicaoPendente() {
    const pendente = this.transicaoPendente;
    const contexto = this.motor.obterContexto();
    if (!pendente || !contexto || contexto.currentTime + 5e-3 < pendente.inicioCenaContexto) {
      return;
    }
    this.transicaoSaidaAtual = pendente.transicaoSaida;
    this.duracaoCrossfadeAtual = pendente.duracaoCrossfade;
    this.duracaoFadeOutAtual = pendente.duracaoFadeOut;
    this.duracaoCaudaAtual = pendente.duracaoCauda;
    this.blocoTransicaoAtualId = pendente.blocoId;
    this.transicaoPendente = null;
  }
  distanciaDaLinhaDeLeitura(elemento) {
    const limites = elemento.getBoundingClientRect();
    const centroElemento = limites.top + limites.height / 2;
    const centroJanela = typeof window === "undefined" ? 0 : window.innerHeight / 2;
    return Math.abs(centroElemento - centroJanela);
  }
  static \u0275fac = function ExperienciaImersivaPublica_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExperienciaImersivaPublica)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExperienciaImersivaPublica, selectors: [["app-experiencia-imersiva-publica"]], viewQuery: function ExperienciaImersivaPublica_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.elementosBloco, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { experienciaIdEntrada: [1, "experienciaIdEntrada"], modoTesteEntrada: [1, "modoTesteEntrada"], integrado: [1, "integrado"] }, features: [\u0275\u0275ProvidersFeature([MotorAudioExperienciaImersiva])], decls: 4, vars: 9, consts: [["blocoExperiencia", ""], [1, "leitor"], [1, "estado-leitor"], [1, "estado-leitor", "erro"], ["aria-hidden", "true", 1, "carregador"], ["type", "button", 3, "click"], [1, "barra-leitor"], ["aria-label", "Estado do teste da experi\xEAncia", 1, "painel-teste"], [1, "abertura"], [1, "publicacao"], [1, "marca", 3, "routerLink"], ["routerLink", "/", 1, "marca"], [1, "rotulo-painel"], ["aria-label", "Pular para cena", 1, "navegacao-cenas-teste"], ["type", "button", 3, "disabled", "em-tela", "com-audio"], ["type", "button", 3, "click", "disabled"], [1, "rotulo"], [1, "introducao"], [1, "acoes-abertura"], ["type", "button", 1, "iniciar", 3, "click", "disabled"], ["type", "button", 1, "ler", 3, "click"], ["role", "alert", 1, "mensagem-erro"], [1, "titulo-publicacao"], [1, "blocos-leitura"], [1, "bloco-leitura", 3, "em-foco"], [1, "sem-conteudo"], [1, "fim-publicacao"], [1, "bloco-leitura"], [1, "marcador-cena-teste", 3, "visual-ativa", "sonora-ativa"], [1, "imagem-cena"], [1, "marcador-cena-teste"], ["alt", "", "loading", "lazy", 3, "src"]], template: function ExperienciaImersivaPublica_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 1);
      \u0275\u0275conditionalCreate(1, ExperienciaImersivaPublica_Conditional_1_Template, 4, 0, "section", 2)(2, ExperienciaImersivaPublica_Conditional_2_Template, 9, 1, "section", 3)(3, ExperienciaImersivaPublica_Conditional_3_Template, 4, 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275styleProp("--accent", ctx.integrado() ? null : ctx.dados.corPrincipal())("--on-accent", ctx.integrado() ? null : ctx.dados.corContraste());
      \u0275\u0275classProp("modo-teste", ctx.modoTeste())("is-integrado", ctx.integrado());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dados.carregando() ? 1 : ctx.dados.erro() ? 2 : (tmp_4_0 = ctx.dados.experiencia()) ? 3 : -1, tmp_4_0);
    }
  }, dependencies: [RouterLink], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n}\n.leitor[_ngcontent-%COMP%] {\n  --public-brand: var(--accent, var(--app-text-soft, #505650));\n  --public-on-brand: var(--on-accent, var(--app-text-inverse, #f8f7f0));\n  --public-background: color-mix( in oklab, var(--public-brand) 2%, var(--app-background, #edeee8) );\n  --public-surface: color-mix( in oklab, var(--public-brand) 3%, var(--app-surface, #fbfaf4) );\n  --public-brand-muted: color-mix( in oklab, var(--public-brand) 20%, var(--app-surface-strong, #dedfd5) );\n  --public-brand-border: color-mix( in oklab, var(--public-brand) 26%, var(--app-border, #d5d6cc) );\n  --public-brand-dark: color-mix( in oklab, var(--public-brand) 68%, #101310 );\n  --public-ink: var(--app-text, #171916);\n  --public-ink-soft: var(--app-text-soft, #505650);\n  --public-ink-muted: var(--app-text-muted, #767d76);\n  --public-paper: var(--app-surface, #fbfaf4);\n  --public-paper-inverse: var(--app-text-inverse, #f8f7f0);\n  --public-dark: var(--app-dark, #111411);\n  --public-danger-soft: var(--color-danger-soft, #f8edec);\n  --public-danger: var(--color-danger, #b43a33);\n  background: var(--public-background);\n  color: var(--public-ink);\n}\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\nbutton[_ngcontent-%COMP%] {\n  font: inherit;\n  cursor: pointer;\n}\n.painel-teste[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 30;\n  right: 1rem;\n  bottom: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  max-width: calc(100vw - 2rem);\n  padding: 0.7rem;\n  background: var(--public-dark);\n  box-shadow: var(--shadow-medium, 0 0.5rem 2rem rgba(15, 19, 15, 0.12));\n  color: var(--public-paper-inverse);\n}\n.painel-teste[_ngcontent-%COMP%]   .rotulo-painel[_ngcontent-%COMP%] {\n  padding: 0 0.35rem;\n  font-size: 0.54rem;\n  font-weight: 850;\n  letter-spacing: 0.16em;\n}\n.painel-teste[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.1rem;\n  min-width: 3.8rem;\n}\n.painel-teste[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: color-mix(in oklab, var(--public-paper-inverse) 62%, transparent);\n  font-size: 0.48rem;\n  font-weight: 760;\n  letter-spacing: 0.12em;\n}\n.painel-teste[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 720;\n}\n.painel-teste[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 2.2rem;\n  padding: 0.5rem 0.7rem;\n  background: transparent;\n  border: 1px solid color-mix(in oklab, var(--public-paper-inverse) 40%, transparent);\n  color: inherit;\n  font-size: 0.58rem;\n  font-weight: 720;\n}\n.painel-teste[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 0.36;\n}\n.navegacao-cenas-teste[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: min(22rem, 34vw);\n  gap: 0.25rem;\n  overflow-x: auto;\n  padding: 0.1rem 0 0.25rem;\n  scrollbar-color: color-mix(in oklab, var(--public-paper-inverse) 35%, transparent) transparent;\n  scrollbar-width: thin;\n}\n.navegacao-cenas-teste[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 0 0 2.2rem;\n  min-height: 2.2rem;\n  padding: 0;\n}\n.navegacao-cenas-teste[_ngcontent-%COMP%]   button.em-tela[_ngcontent-%COMP%] {\n  border-color: var(--public-paper-inverse);\n}\n.navegacao-cenas-teste[_ngcontent-%COMP%]   button.com-audio[_ngcontent-%COMP%] {\n  background: var(--public-brand);\n  border-color: var(--public-brand);\n  color: var(--public-on-brand);\n}\n.barra-leitor[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 10;\n  top: 0;\n  display: flex;\n  min-height: 3.5rem;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1.25rem;\n  background: color-mix(in oklab, var(--public-surface) 92%, transparent);\n  border-bottom: 1px solid var(--public-brand-border);\n  -webkit-backdrop-filter: blur(0.75rem);\n  backdrop-filter: blur(0.75rem);\n}\n.barra-leitor[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--public-brand-dark);\n  font-size: 0.65rem;\n  font-weight: 850;\n  letter-spacing: 0.14em;\n  text-decoration: none;\n}\n.barra-leitor[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.rotulo[_ngcontent-%COMP%] {\n  color: var(--public-brand-dark);\n  font-size: 0.54rem;\n  font-weight: 760;\n  letter-spacing: 0.16em;\n}\n.abertura[_ngcontent-%COMP%], \n.estado-leitor[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: calc(100vh - 3.5rem);\n  align-content: center;\n  justify-items: center;\n  padding: 4rem 1.25rem;\n  text-align: center;\n}\n.abertura[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 58rem;\n  margin: 0.8rem 0 1rem;\n  font-family:\n    Georgia,\n    "Times New Roman",\n    serif;\n  font-size: clamp(3.2rem, 10vw, 8.5rem);\n  font-weight: 500;\n  line-height: 0.92;\n  letter-spacing: -0.06em;\n}\n.introducao[_ngcontent-%COMP%] {\n  max-width: 28rem;\n  margin: 0;\n  color: var(--public-ink-soft);\n  font-family:\n    Georgia,\n    "Times New Roman",\n    serif;\n  font-size: 1rem;\n  line-height: 1.6;\n}\n.acoes-abertura[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.65rem;\n  margin-top: 2rem;\n}\n.acoes-abertura[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.estado-leitor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 2.8rem;\n  padding: 0.75rem 1rem;\n  border: 1px solid var(--public-brand-dark);\n  border-radius: 0;\n  font-size: 0.66rem;\n  font-weight: 720;\n}\n.iniciar[_ngcontent-%COMP%], \n.estado-leitor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: var(--public-brand);\n  border-color: var(--public-brand);\n  color: var(--public-on-brand);\n}\n.ler[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--public-brand-dark);\n}\n.publicacao[_ngcontent-%COMP%] {\n  width: min(100%, 58rem);\n  margin: 0 auto;\n  padding: 10vh 1.25rem 20vh;\n}\n.titulo-publicacao[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 60vh;\n  align-content: center;\n  border-bottom: 1px solid var(--public-brand-border);\n}\n.titulo-publicacao[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 52rem;\n  margin: 0.7rem 0 0;\n  font-family:\n    Georgia,\n    "Times New Roman",\n    serif;\n  font-size: clamp(3rem, 9vw, 7rem);\n  font-weight: 500;\n  line-height: 0.95;\n  letter-spacing: -0.055em;\n}\n.bloco-leitura[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-height: 82vh;\n  align-content: center;\n  padding: 12vh clamp(0rem, 5vw, 4rem);\n  opacity: 0.62;\n  border-bottom: 1px solid var(--public-brand-border);\n  transition: opacity 240ms ease;\n}\n.marcador-cena-teste[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.25rem;\n  left: 0;\n  padding: 0.35rem 0.5rem;\n  background: color-mix(in oklab, var(--public-brand) 7%, transparent);\n  color: var(--public-ink-soft);\n  font-size: 0.5rem;\n  font-weight: 780;\n  letter-spacing: 0.12em;\n}\n.marcador-cena-teste.visual-ativa[_ngcontent-%COMP%] {\n  background: var(--public-brand-muted);\n  color: var(--public-ink);\n}\n.marcador-cena-teste.sonora-ativa[_ngcontent-%COMP%] {\n  background: var(--public-brand);\n  color: var(--public-on-brand);\n}\n.bloco-leitura.em-foco[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.imagem-cena[_ngcontent-%COMP%] {\n  width: min(100%, 48rem);\n  margin: 0 0 clamp(2rem, 7vh, 5rem);\n}\n.imagem-cena[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-height: 76vh;\n  object-fit: contain;\n}\n.bloco-leitura[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow: visible;\n  font-family:\n    Georgia,\n    "Times New Roman",\n    serif;\n  font-size: clamp(1.15rem, 2.2vw, 1.65rem);\n  line-height: 1.8;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n.fim-publicacao[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 45vh;\n  align-content: center;\n  justify-items: center;\n  gap: 0.45rem;\n  text-align: center;\n}\n.fim-publicacao[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--public-brand-dark);\n  font-size: 0.52rem;\n  font-weight: 760;\n  letter-spacing: 0.2em;\n}\n.fim-publicacao[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family:\n    Georgia,\n    "Times New Roman",\n    serif;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.mensagem-erro[_ngcontent-%COMP%] {\n  max-width: 36rem;\n  margin: 1rem auto;\n  padding: 0.8rem;\n  background: var(--public-danger-soft);\n  color: var(--public-danger);\n  font-size: 0.7rem;\n  text-align: center;\n}\n.estado-leitor[_ngcontent-%COMP%] {\n  gap: 0.7rem;\n}\n.estado-leitor[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.estado-leitor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.estado-leitor[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family:\n    Georgia,\n    "Times New Roman",\n    serif;\n  font-size: clamp(2rem, 7vw, 4rem);\n  font-weight: 500;\n}\n.estado-leitor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.sem-conteudo[_ngcontent-%COMP%] {\n  color: var(--public-ink-soft);\n  font-size: 0.78rem;\n}\n.carregador[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  border: 0.12rem solid var(--public-brand-border);\n  border-top-color: var(--public-brand);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_girar 700ms linear infinite;\n}\n@keyframes _ngcontent-%COMP%_girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 40rem) {\n  .painel-teste[_ngcontent-%COMP%] {\n    right: 0.6rem;\n    bottom: 0.6rem;\n    left: 0.6rem;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n  .painel-teste[_ngcontent-%COMP%]   .rotulo-painel[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .navegacao-cenas-teste[_ngcontent-%COMP%] {\n    order: -1;\n    width: 100%;\n    max-width: none;\n  }\n  .publicacao[_ngcontent-%COMP%] {\n    padding-top: 4vh;\n  }\n  .titulo-publicacao[_ngcontent-%COMP%] {\n    min-height: 52vh;\n  }\n  .bloco-leitura[_ngcontent-%COMP%] {\n    min-height: 75vh;\n    padding-block: 9vh;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%], \n   *[_ngcontent-%COMP%]::before, \n   *[_ngcontent-%COMP%]::after {\n    transition-duration: 0.01ms !important;\n  }\n}\nmain.leitor.is-integrado[_ngcontent-%COMP%] {\n  background: transparent !important;\n  font-family: inherit !important;\n  color: inherit !important;\n  box-shadow: none !important;\n  height: auto;\n  min-height: 100%;\n  width: 100%;\n  position: relative;\n}\nmain.leitor.is-integrado[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \nmain.leitor.is-integrado[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \nmain.leitor.is-integrado[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \nmain.leitor.is-integrado[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \nmain.leitor.is-integrado[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], \nmain.leitor.is-integrado[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], \nmain.leitor.is-integrado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \nmain.leitor.is-integrado[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \nmain.leitor.is-integrado[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \nmain.leitor.is-integrado[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \nmain.leitor.is-integrado[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-family: inherit !important;\n  color: inherit !important;\n  background: transparent !important;\n}\nmain.leitor.is-integrado[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: inherit !important;\n  background: transparent !important;\n  color: inherit !important;\n  border: 1px solid currentColor !important;\n}\nmain.leitor.is-integrado[_ngcontent-%COMP%]   .abertura[_ngcontent-%COMP%], \nmain.leitor.is-integrado[_ngcontent-%COMP%]   .publicacao[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  min-height: auto;\n  background: transparent !important;\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExperienciaImersivaPublica, [{
    type: Component,
    args: [{ selector: "app-experiencia-imersiva-publica", standalone: true, imports: [RouterLink], providers: [MotorAudioExperienciaImersiva], template: `<main
  class="leitor"
  [class.modo-teste]="modoTeste()"
  [class.is-integrado]="integrado()"
  [style.--accent]="integrado() ? null : dados.corPrincipal()"
  [style.--on-accent]="integrado() ? null : dados.corContraste()"
>
  @if (dados.carregando()) {
    <section class="estado-leitor">
      <span class="carregador" aria-hidden="true"></span>
      <p>Abrindo publica\xE7\xE3o...</p>
    </section>
  } @else if (dados.erro()) {
    <section class="estado-leitor erro">
      <span>404</span>
      <h1>P\xE1gina indispon\xEDvel</h1>
      <p>{{ dados.erro() }}</p>
      <button type="button" (click)="carregar()">Tentar novamente</button>
    </section>
  } @else if (dados.experiencia(); as experiencia) {

    <!-- Esconde a barra superior do Fl\xEAiva no Widget -->
    @if (!integrado()) {
      <header class="barra-leitor">
        @if (experiencia.estudio; as estudio) {
          <a
            [routerLink]="['/', estudio.slug]"
            class="marca"
          >
            {{ estudio.nome }}
          </a>
        } @else {
          <a routerLink="/" class="marca">FLEIVA</a>
        }
        <span>{{ modoTeste() ? 'MODO DE TESTE' : leituraSimples() ? 'LEITURA' : motor.iniciado() ? 'EM CURSO' : 'EXPERI\xCANCIA' }}</span>
      </header>
    }

    <!-- Esconde o painel de testes no Widget para n\xE3o vazar pro cliente -->
    @if (modoTeste() && !integrado()) {
      <aside class="painel-teste" aria-label="Estado do teste da experi\xEAncia">
        <span class="rotulo-painel">TESTE</span>
        <div>
          <small>EM TELA</small>
          <strong>{{ numeroCena(blocoEmFocoId()) ?? '\u2014' }}/{{ experiencia.blocos.length }}</strong>
        </div>
        <div>
          <small>\xC1UDIO</small>
          <strong>{{ numeroCena(blocoSonoroId()) ?? '\u2014' }}/{{ experiencia.blocos.length }}</strong>
        </div>
        <nav class="navegacao-cenas-teste" aria-label="Pular para cena">
          @for (bloco of experiencia.blocos; track bloco.id) {
            <button
              type="button"
              [disabled]="!motor.iniciado()"
              [class.em-tela]="blocoEmFocoId() === bloco.id"
              [class.com-audio]="blocoSonoroId() === bloco.id"
              [attr.aria-label]="'Ir para cena ' + bloco.ordem"
              (click)="irParaCenaTeste(bloco.id)"
            >
              {{ bloco.ordem }}
            </button>
          }
        </nav>
        <button
          type="button"
          [disabled]="!motor.iniciado() || !blocoSonoroId()"
          (click)="repetirCenaTeste()"
        >
          Repetir cena
        </button>
        <button type="button" (click)="reiniciarTeste()">Reiniciar</button>
      </aside>
    }

    @if (!motor.iniciado() && !leituraSimples()) {
      <section class="abertura">
        <p class="rotulo">{{ modoTeste() ? 'MODO DE TESTE' : '' }}</p>
        <h1>{{ experiencia.nome }}</h1>
        <p class="introducao">
        </p>
        <div class="acoes-abertura">
          <button type="button" class="iniciar" [disabled]="motor.carregando()" (click)="iniciar()">
            {{ motor.carregando() ? 'Preparando \xE1udio...' : modoTeste() ? 'Iniciar teste' : 'Iniciar experi\xEAncia' }}
          </button>
          <button type="button" class="ler" (click)="lerSemExperiencia()">
            Ler sem \xE1udio
          </button>
        </div>
        @if (motor.erro()) {
          <p class="mensagem-erro" role="alert">{{ motor.erro() }}</p>
        }
      </section>
    } @else {
      <article class="publicacao">

        <!-- Esconde o t\xEDtulo gigante no Widget -->
        @if (!integrado()) {
          <header class="titulo-publicacao">
            <p class="rotulo">{{ leituraSimples() ? 'SEM \xC1UDIO' : '' }}</p>
            <h1>{{ experiencia.nome }}</h1>
          </header>
        }

        @if (erroExecucao()) {
          <p class="mensagem-erro" role="alert">{{ erroExecucao() }}</p>
        }

        <div class="blocos-leitura">
          @for (bloco of experiencia.blocos; track bloco.id) {
            <section
              #blocoExperiencia
              class="bloco-leitura"
              [attr.data-bloco-id]="bloco.id"
              [class.em-foco]="blocoEmFocoId() === bloco.id"
            >
              @if (modoTeste()) {
                <span
                  class="marcador-cena-teste"
                  [class.visual-ativa]="blocoEmFocoId() === bloco.id"
                  [class.sonora-ativa]="blocoSonoroId() === bloco.id"
                >
                  CENA {{ bloco.ordem }}
                  @if (blocoSonoroId() === bloco.id) {
                    \xB7 \xC1UDIO
                  } @else if (blocoEmFocoId() === bloco.id) {
                    \xB7 EM TELA
                  }
                </span>
              }
              @if (bloco.imagem_url) {
                <figure class="imagem-cena">
                  <img [src]="bloco.imagem_url" alt="" loading="lazy" />
                </figure>
              }
              @if (bloco.conteudo) {
                <pre>{{ bloco.conteudo }}</pre>
              }
            </section>
          } @empty {
            <p class="sem-conteudo">Esta publica\xE7\xE3o ainda n\xE3o possui conte\xFAdo.</p>
          }
        </div>

        <!-- Esconde o rodap\xE9 no Widget -->
        @if (!integrado()) {
          <footer class="fim-publicacao">
            <span>FIM</span>
            <strong>{{ experiencia.nome }}</strong>
          </footer>
        }
      </article>
    }
  }
</main>
`, styles: ['/* apps/studio-dash/src/app/paginas/experiencia-imersiva-publica/experiencia-imersiva-publica.scss */\n:host {\n  display: block;\n  min-height: 100vh;\n}\n.leitor {\n  --public-brand: var(--accent, var(--app-text-soft, #505650));\n  --public-on-brand: var(--on-accent, var(--app-text-inverse, #f8f7f0));\n  --public-background: color-mix( in oklab, var(--public-brand) 2%, var(--app-background, #edeee8) );\n  --public-surface: color-mix( in oklab, var(--public-brand) 3%, var(--app-surface, #fbfaf4) );\n  --public-brand-muted: color-mix( in oklab, var(--public-brand) 20%, var(--app-surface-strong, #dedfd5) );\n  --public-brand-border: color-mix( in oklab, var(--public-brand) 26%, var(--app-border, #d5d6cc) );\n  --public-brand-dark: color-mix( in oklab, var(--public-brand) 68%, #101310 );\n  --public-ink: var(--app-text, #171916);\n  --public-ink-soft: var(--app-text-soft, #505650);\n  --public-ink-muted: var(--app-text-muted, #767d76);\n  --public-paper: var(--app-surface, #fbfaf4);\n  --public-paper-inverse: var(--app-text-inverse, #f8f7f0);\n  --public-dark: var(--app-dark, #111411);\n  --public-danger-soft: var(--color-danger-soft, #f8edec);\n  --public-danger: var(--color-danger, #b43a33);\n  background: var(--public-background);\n  color: var(--public-ink);\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbutton {\n  font: inherit;\n  cursor: pointer;\n}\n.painel-teste {\n  position: fixed;\n  z-index: 30;\n  right: 1rem;\n  bottom: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  max-width: calc(100vw - 2rem);\n  padding: 0.7rem;\n  background: var(--public-dark);\n  box-shadow: var(--shadow-medium, 0 0.5rem 2rem rgba(15, 19, 15, 0.12));\n  color: var(--public-paper-inverse);\n}\n.painel-teste .rotulo-painel {\n  padding: 0 0.35rem;\n  font-size: 0.54rem;\n  font-weight: 850;\n  letter-spacing: 0.16em;\n}\n.painel-teste div {\n  display: grid;\n  gap: 0.1rem;\n  min-width: 3.8rem;\n}\n.painel-teste small {\n  color: color-mix(in oklab, var(--public-paper-inverse) 62%, transparent);\n  font-size: 0.48rem;\n  font-weight: 760;\n  letter-spacing: 0.12em;\n}\n.painel-teste strong {\n  font-size: 0.78rem;\n  font-weight: 720;\n}\n.painel-teste button {\n  min-height: 2.2rem;\n  padding: 0.5rem 0.7rem;\n  background: transparent;\n  border: 1px solid color-mix(in oklab, var(--public-paper-inverse) 40%, transparent);\n  color: inherit;\n  font-size: 0.58rem;\n  font-weight: 720;\n}\n.painel-teste button:disabled {\n  cursor: default;\n  opacity: 0.36;\n}\n.navegacao-cenas-teste {\n  display: flex;\n  max-width: min(22rem, 34vw);\n  gap: 0.25rem;\n  overflow-x: auto;\n  padding: 0.1rem 0 0.25rem;\n  scrollbar-color: color-mix(in oklab, var(--public-paper-inverse) 35%, transparent) transparent;\n  scrollbar-width: thin;\n}\n.navegacao-cenas-teste button {\n  flex: 0 0 2.2rem;\n  min-height: 2.2rem;\n  padding: 0;\n}\n.navegacao-cenas-teste button.em-tela {\n  border-color: var(--public-paper-inverse);\n}\n.navegacao-cenas-teste button.com-audio {\n  background: var(--public-brand);\n  border-color: var(--public-brand);\n  color: var(--public-on-brand);\n}\n.barra-leitor {\n  position: sticky;\n  z-index: 10;\n  top: 0;\n  display: flex;\n  min-height: 3.5rem;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1.25rem;\n  background: color-mix(in oklab, var(--public-surface) 92%, transparent);\n  border-bottom: 1px solid var(--public-brand-border);\n  -webkit-backdrop-filter: blur(0.75rem);\n  backdrop-filter: blur(0.75rem);\n}\n.barra-leitor a {\n  color: var(--public-brand-dark);\n  font-size: 0.65rem;\n  font-weight: 850;\n  letter-spacing: 0.14em;\n  text-decoration: none;\n}\n.barra-leitor span,\n.rotulo {\n  color: var(--public-brand-dark);\n  font-size: 0.54rem;\n  font-weight: 760;\n  letter-spacing: 0.16em;\n}\n.abertura,\n.estado-leitor {\n  display: grid;\n  min-height: calc(100vh - 3.5rem);\n  align-content: center;\n  justify-items: center;\n  padding: 4rem 1.25rem;\n  text-align: center;\n}\n.abertura h1 {\n  max-width: 58rem;\n  margin: 0.8rem 0 1rem;\n  font-family:\n    Georgia,\n    "Times New Roman",\n    serif;\n  font-size: clamp(3.2rem, 10vw, 8.5rem);\n  font-weight: 500;\n  line-height: 0.92;\n  letter-spacing: -0.06em;\n}\n.introducao {\n  max-width: 28rem;\n  margin: 0;\n  color: var(--public-ink-soft);\n  font-family:\n    Georgia,\n    "Times New Roman",\n    serif;\n  font-size: 1rem;\n  line-height: 1.6;\n}\n.acoes-abertura {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.65rem;\n  margin-top: 2rem;\n}\n.acoes-abertura button,\n.estado-leitor button {\n  min-height: 2.8rem;\n  padding: 0.75rem 1rem;\n  border: 1px solid var(--public-brand-dark);\n  border-radius: 0;\n  font-size: 0.66rem;\n  font-weight: 720;\n}\n.iniciar,\n.estado-leitor button {\n  background: var(--public-brand);\n  border-color: var(--public-brand);\n  color: var(--public-on-brand);\n}\n.ler {\n  background: transparent;\n  color: var(--public-brand-dark);\n}\n.publicacao {\n  width: min(100%, 58rem);\n  margin: 0 auto;\n  padding: 10vh 1.25rem 20vh;\n}\n.titulo-publicacao {\n  display: grid;\n  min-height: 60vh;\n  align-content: center;\n  border-bottom: 1px solid var(--public-brand-border);\n}\n.titulo-publicacao h1 {\n  max-width: 52rem;\n  margin: 0.7rem 0 0;\n  font-family:\n    Georgia,\n    "Times New Roman",\n    serif;\n  font-size: clamp(3rem, 9vw, 7rem);\n  font-weight: 500;\n  line-height: 0.95;\n  letter-spacing: -0.055em;\n}\n.bloco-leitura {\n  position: relative;\n  display: grid;\n  min-height: 82vh;\n  align-content: center;\n  padding: 12vh clamp(0rem, 5vw, 4rem);\n  opacity: 0.62;\n  border-bottom: 1px solid var(--public-brand-border);\n  transition: opacity 240ms ease;\n}\n.marcador-cena-teste {\n  position: absolute;\n  top: 1.25rem;\n  left: 0;\n  padding: 0.35rem 0.5rem;\n  background: color-mix(in oklab, var(--public-brand) 7%, transparent);\n  color: var(--public-ink-soft);\n  font-size: 0.5rem;\n  font-weight: 780;\n  letter-spacing: 0.12em;\n}\n.marcador-cena-teste.visual-ativa {\n  background: var(--public-brand-muted);\n  color: var(--public-ink);\n}\n.marcador-cena-teste.sonora-ativa {\n  background: var(--public-brand);\n  color: var(--public-on-brand);\n}\n.bloco-leitura.em-foco {\n  opacity: 1;\n}\n.imagem-cena {\n  width: min(100%, 48rem);\n  margin: 0 0 clamp(2rem, 7vh, 5rem);\n}\n.imagem-cena img {\n  display: block;\n  width: 100%;\n  max-height: 76vh;\n  object-fit: contain;\n}\n.bloco-leitura pre {\n  margin: 0;\n  overflow: visible;\n  font-family:\n    Georgia,\n    "Times New Roman",\n    serif;\n  font-size: clamp(1.15rem, 2.2vw, 1.65rem);\n  line-height: 1.8;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n.fim-publicacao {\n  display: grid;\n  min-height: 45vh;\n  align-content: center;\n  justify-items: center;\n  gap: 0.45rem;\n  text-align: center;\n}\n.fim-publicacao span {\n  color: var(--public-brand-dark);\n  font-size: 0.52rem;\n  font-weight: 760;\n  letter-spacing: 0.2em;\n}\n.fim-publicacao strong {\n  font-family:\n    Georgia,\n    "Times New Roman",\n    serif;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.mensagem-erro {\n  max-width: 36rem;\n  margin: 1rem auto;\n  padding: 0.8rem;\n  background: var(--public-danger-soft);\n  color: var(--public-danger);\n  font-size: 0.7rem;\n  text-align: center;\n}\n.estado-leitor {\n  gap: 0.7rem;\n}\n.estado-leitor h1,\n.estado-leitor p {\n  margin: 0;\n}\n.estado-leitor h1 {\n  font-family:\n    Georgia,\n    "Times New Roman",\n    serif;\n  font-size: clamp(2rem, 7vw, 4rem);\n  font-weight: 500;\n}\n.estado-leitor p,\n.sem-conteudo {\n  color: var(--public-ink-soft);\n  font-size: 0.78rem;\n}\n.carregador {\n  width: 1.25rem;\n  height: 1.25rem;\n  border: 0.12rem solid var(--public-brand-border);\n  border-top-color: var(--public-brand);\n  border-radius: 50%;\n  animation: girar 700ms linear infinite;\n}\n@keyframes girar {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 40rem) {\n  .painel-teste {\n    right: 0.6rem;\n    bottom: 0.6rem;\n    left: 0.6rem;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n  .painel-teste .rotulo-painel {\n    display: none;\n  }\n  .navegacao-cenas-teste {\n    order: -1;\n    width: 100%;\n    max-width: none;\n  }\n  .publicacao {\n    padding-top: 4vh;\n  }\n  .titulo-publicacao {\n    min-height: 52vh;\n  }\n  .bloco-leitura {\n    min-height: 75vh;\n    padding-block: 9vh;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *,\n  *::before,\n  *::after {\n    transition-duration: 0.01ms !important;\n  }\n}\nmain.leitor.is-integrado {\n  background: transparent !important;\n  font-family: inherit !important;\n  color: inherit !important;\n  box-shadow: none !important;\n  height: auto;\n  min-height: 100%;\n  width: 100%;\n  position: relative;\n}\nmain.leitor.is-integrado h1,\nmain.leitor.is-integrado h2,\nmain.leitor.is-integrado h3,\nmain.leitor.is-integrado h4,\nmain.leitor.is-integrado h5,\nmain.leitor.is-integrado h6,\nmain.leitor.is-integrado p,\nmain.leitor.is-integrado span,\nmain.leitor.is-integrado pre,\nmain.leitor.is-integrado strong,\nmain.leitor.is-integrado small {\n  font-family: inherit !important;\n  color: inherit !important;\n  background: transparent !important;\n}\nmain.leitor.is-integrado button {\n  font-family: inherit !important;\n  background: transparent !important;\n  color: inherit !important;\n  border: 1px solid currentColor !important;\n}\nmain.leitor.is-integrado .abertura,\nmain.leitor.is-integrado .publicacao {\n  padding-top: 1rem;\n  min-height: auto;\n  background: transparent !important;\n}\n'] }]
  }], () => [], { experienciaIdEntrada: [{ type: Input, args: [{ isSignal: true, alias: "experienciaIdEntrada", required: false }] }], modoTesteEntrada: [{ type: Input, args: [{ isSignal: true, alias: "modoTesteEntrada", required: false }] }], integrado: [{ type: Input, args: [{ isSignal: true, alias: "integrado", required: false }] }], elementosBloco: [{ type: ViewChildren, args: ["blocoExperiencia", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExperienciaImersivaPublica, { className: "ExperienciaImersivaPublica", filePath: "apps/studio-dash/src/app/paginas/experiencia-imersiva-publica/experiencia-imersiva-publica.ts", lineNumber: 38 });
})();

export {
  MotorAudioExperienciaImersiva,
  ExperienciaImersivaPublica
};
