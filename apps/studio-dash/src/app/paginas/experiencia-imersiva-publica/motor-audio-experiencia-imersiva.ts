import { Injectable, signal } from '@angular/core';
import type {
  RecursoExperienciaImersivaPublica,
} from '@fleiva-studios/shared-data-access';

export type TransicaoBlocoAudio =
  | 'terminar-loop'
  | 'corte'
  | 'continuar'
  | 'cauda'
  | 'fade-out'
  | 'crossfade'
  | 'silencio';

export interface ConfiguracaoTransicaoBlocoAudio {
  duracaoCrossfadeSegundos?: number;
  duracaoFadeOutSegundos?: number;
  duracaoCaudaSegundos?: number | null;
}

export interface ComandoBlocoAudio {
  acaoId: string;
  blocoId: string;
  recursoId: string;
  inicioTrechoSegundos: number;
  fimTrechoSegundos: number | null;
  repetir: boolean;
  fadeInSegundos: number;
  volumeDb?: number;
}

export interface ResultadoTransicaoBlocoAudio {
  inicioCenaContexto: number;
}

interface FonteAtiva {
  acaoId: string;
  blocoId: string;
  recursoId: string;
  fonte: AudioBufferSourceNode;
  ganhoVolume: GainNode;
  ganho: GainNode;
  inicioContexto: number;
  inicioLoop: number;
  fimLoop: number;
  repetir: boolean;
  duracaoBuffer: number;
  fimNaturalContexto: number | null;
  paradaAgendadaContexto: number | null;
  emSaida: boolean;
  encerrada: boolean;
}

@Injectable()
export class MotorAudioExperienciaImersiva {
  private contexto: AudioContext | null = null;
  private readonly buffers = new Map<string, AudioBuffer>();
  private readonly fontesAtivas = new Set<FonteAtiva>();
  private controladorAbort: AbortController | null = null;
  private inicializacao: Promise<void> | null = null;
  private sequenciaManual = 0;

  private readonly iniciadoInterno = signal(false);
  private readonly carregandoInterno = signal(false);
  private readonly erroInterno = signal<string | null>(null);

  readonly iniciado = this.iniciadoInterno.asReadonly();
  readonly carregando = this.carregandoInterno.asReadonly();
  readonly erro = this.erroInterno.asReadonly();

  iniciar(recursos: RecursoExperienciaImersivaPublica[]): Promise<void> {
    if (this.iniciadoInterno()) return this.retomarContexto();
    if (this.inicializacao) return this.inicializacao;

    this.inicializacao = this.inicializar(recursos).finally(() => {
      this.inicializacao = null;
    });
    return this.inicializacao;
  }

  obterContexto(): AudioContext | null {
    return this.contexto;
  }

  obterBuffer(recursoId: string): AudioBuffer | null {
    return this.buffers.get(recursoId) ?? null;
  }

  reproduzir(recursoId: string): AudioBufferSourceNode {
    const id = `manual-${++this.sequenciaManual}`;
    return this.iniciarComando(
      {
        acaoId: id,
        blocoId: 'manual',
        recursoId,
        inicioTrechoSegundos: 0,
        fimTrechoSegundos: null,
        repetir: false,
        fadeInSegundos: 0,
      },
      this.exigirContexto().currentTime,
    ).fonte;
  }

  reproduzirComLoop(
    recursoId: string,
    atrasoSegundos: number,
    inicioLoopSegundos: number,
    fimLoopSegundos: number,
  ): AudioBufferSourceNode {
    const contexto = this.exigirContexto();
    const id = `manual-${++this.sequenciaManual}`;
    return this.iniciarComando(
      {
        acaoId: id,
        blocoId: 'manual',
        recursoId,
        inicioTrechoSegundos: inicioLoopSegundos,
        fimTrechoSegundos: fimLoopSegundos,
        repetir: true,
        fadeInSegundos: 0,
      },
      contexto.currentTime + atrasoSegundos,
    ).fonte;
  }

  transicionar(
    comandos: ComandoBlocoAudio[],
    transicaoAnterior: TransicaoBlocoAudio,
    configuracao: ConfiguracaoTransicaoBlocoAudio = {},
    blocoSaidaId: string | null = null,
    blocoEntradaId: string | null = comandos[0]?.blocoId ?? null,
  ): ResultadoTransicaoBlocoAudio {
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

    const fontesEmCurso = ativas.filter(
      (ativa) =>
        ativa.inicioContexto <= agora &&
        !ativa.encerrada &&
        !ativa.emSaida &&
        (blocoSaidaId === null || ativa.blocoId === blocoSaidaId) &&
        (
          ativa.paradaAgendadaContexto === null ||
          ativa.paradaAgendadaContexto > agora
        ),
    );
    let inicioProximo = agora;
    const transicaoBase =
      transicaoAnterior === 'fade-out' || transicaoAnterior === 'crossfade'
        ? 'corte'
        : transicaoAnterior;
    const crossfade = this.duracaoValida(
      configuracao.duracaoCrossfadeSegundos,
    );
    const fadeOut = crossfade > 0
      ? 0
      : this.duracaoValida(configuracao.duracaoFadeOutSegundos);
    const duracaoSaida = crossfade > 0 ? crossfade : fadeOut;
    const finaisSaida = new Map<FonteAtiva, number>();

    if (transicaoBase === 'terminar-loop') {
      for (const ativa of fontesEmCurso) {
        // Sem repetição, fechar o ciclo significa concluir o trecho atual.
        const fimCiclo = ativa.repetir
          ? this.proximoFimCiclo(ativa, agora)
          : Math.max(agora, ativa.fimNaturalContexto ?? agora);
        const parada =
          ativa.paradaAgendadaContexto !== null &&
          ativa.paradaAgendadaContexto > agora
            ? Math.min(ativa.paradaAgendadaContexto, fimCiclo)
            : fimCiclo;

        this.pararFonte(ativa, parada);
        finaisSaida.set(ativa, parada);
        inicioProximo = Math.max(inicioProximo, parada);
      }
    } else if (transicaoBase === 'continuar') {
      this.transferirFontes(fontesEmCurso, blocoEntradaId);
    } else if (transicaoBase === 'cauda') {
      for (const ativa of fontesEmCurso) {
        this.iniciarCauda(
          ativa,
          agora,
          configuracao.duracaoCaudaSegundos ?? null,
          blocoEntradaId,
        );
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
          const fimDisponivel = ativa.paradaAgendadaContexto !== null
            ? ativa.paradaAgendadaContexto
            : ativa.fimNaturalContexto;
          const parada = fimDisponivel !== null
            ? Math.min(limiteEfeito, fimDisponivel)
            : limiteEfeito;

          this.pararFonte(ativa, parada);
          finaisSaida.set(ativa, parada);
        }

        const fimSaida = finaisSaida.get(ativa)!;
        this.agendarFadeSaida(
          ativa,
          Math.max(agora, fimSaida - duracaoSaida),
          fimSaida,
        );
        ativa.emSaida = true;
      }
    }

    const inicioEntrada = crossfade > 0
      ? Math.max(agora, inicioProximo - crossfade)
      : inicioProximo;

    for (const comando of comandos) {
      this.iniciarComando(
        {
          ...comando,
          fadeInSegundos: Math.max(comando.fadeInSegundos, crossfade),
        },
        inicioEntrada,
      );
    }

    return {
      inicioCenaContexto: inicioEntrada,
    };
  }

  pararRecurso(recursoId: string): void {
    for (const ativa of [...this.fontesAtivas]) {
      if (ativa.recursoId === recursoId) this.pararFonte(ativa);
    }
  }

  pararTodos(): void {
    for (const ativa of [...this.fontesAtivas]) this.pararFonte(ativa);
  }

  async encerrar(): Promise<void> {
    this.controladorAbort?.abort();
    this.controladorAbort = null;
    this.pararTodos();
    this.buffers.clear();

    const contexto = this.contexto;
    this.contexto = null;
    if (contexto && contexto.state !== 'closed') await contexto.close();

    this.iniciadoInterno.set(false);
    this.carregandoInterno.set(false);
    this.erroInterno.set(null);
  }

  private iniciarComando(
    comando: ComandoBlocoAudio,
    quando: number,
  ): FonteAtiva {
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

    ganhoVolume.gain.setValueAtTime(
      this.dbParaGanho(comando.volumeDb ?? 0),
      quando,
    );

    const fade = Math.max(0, comando.fadeInSegundos);
    ganho.gain.setValueAtTime(fade > 0 ? 0 : 1, quando);
    if (fade > 0) ganho.gain.linearRampToValueAtTime(1, quando + fade);

    const ativa: FonteAtiva = {
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
      fimNaturalContexto: comando.repetir
        ? null
        : quando + (fim - inicio),
      paradaAgendadaContexto: null,
      emSaida: false,
      encerrada: false,
    };

    this.fontesAtivas.add(ativa);
    fonte.addEventListener('ended', () => this.removerFonte(ativa), {
      once: true,
    });

    fonte.start(quando, inicio);
    if (!comando.repetir && ativa.fimNaturalContexto !== null) {
      this.pararFonte(ativa, ativa.fimNaturalContexto);
    }

    return ativa;
  }

  private pararFonte(
    ativa: FonteAtiva,
    quando?: number,
    permitirAdiar = false,
  ): void {
    if (ativa.encerrada) return;

    const contexto = this.contexto;
    const instante = Math.max(
      contexto?.currentTime ?? 0,
      quando ?? contexto?.currentTime ?? 0,
    );

    if (
      ativa.paradaAgendadaContexto !== null &&
      ativa.paradaAgendadaContexto <= instante &&
      !permitirAdiar
    ) {
      return;
    }

    try {
      ativa.fonte.stop(instante);
      ativa.paradaAgendadaContexto = instante;
    } catch {
      this.removerFonte(ativa);
    }
  }

  private removerFonte(ativa: FonteAtiva): void {
    if (ativa.encerrada) return;
    ativa.encerrada = true;

    try {
      ativa.fonte.disconnect();
    } catch {
      // A fonte já estava desconectada.
    }

    try {
      ativa.ganhoVolume.disconnect();
    } catch {
      // O ganho de volume já estava desconectado.
    }

    try {
      ativa.ganho.disconnect();
    } catch {
      // O ganho já estava desconectado.
    }

    this.fontesAtivas.delete(ativa);
  }

  private validarComando(comando: ComandoBlocoAudio): {
    buffer: AudioBuffer;
    inicio: number;
    fim: number;
  } {
    const buffer = this.buffers.get(comando.recursoId);

    if (!buffer) throw new Error('O recurso sonoro não está disponível.');

    const inicio = comando.inicioTrechoSegundos;
    const fim = Math.min(
      comando.fimTrechoSegundos ?? buffer.duration,
      buffer.duration,
    );

    if (
      !Number.isFinite(inicio) ||
      inicio < 0 ||
      inicio >= buffer.duration ||
      !Number.isFinite(fim) ||
      fim <= inicio
    ) {
      throw new Error('O trecho escolhido não cabe no recurso sonoro.');
    }

    return { buffer, inicio, fim };
  }

  private proximoFimCiclo(ativa: FonteAtiva, agora: number): number {
    const duracaoLoop = ativa.fimLoop - ativa.inicioLoop;

    if (!Number.isFinite(duracaoLoop) || duracaoLoop <= 0) {
      return agora;
    }

    const decorrido = Math.max(0, agora - ativa.inicioContexto);
    const ciclosCompletos = Math.floor(decorrido / duracaoLoop);
    const fimAtual =
      ativa.inicioContexto + (ciclosCompletos + 1) * duracaoLoop;

    return Math.max(agora, fimAtual);
  }

  private transferirFontes(
    fontes: FonteAtiva[],
    blocoEntradaId: string | null,
  ): void {
    if (!blocoEntradaId) return;

    for (const fonte of fontes) {
      fonte.blocoId = blocoEntradaId;
    }
  }

  private iniciarCauda(
    ativa: FonteAtiva,
    agora: number,
    duracaoLimite: number | null,
    blocoEntradaId: string | null,
  ): void {
    if (ativa.repetir) {
      const posicao = this.posicaoAtualFonte(ativa, agora);
      ativa.fonte.loop = false;
      ativa.repetir = false;
      ativa.fimNaturalContexto =
        agora + Math.max(0, ativa.duracaoBuffer - posicao);
    } else {
      ativa.fimNaturalContexto =
        ativa.inicioContexto +
        Math.max(0, ativa.duracaoBuffer - ativa.inicioLoop);
    }

    if (blocoEntradaId) ativa.blocoId = blocoEntradaId;

    const parada = duracaoLimite === null
      ? ativa.fimNaturalContexto
      : Math.min(
          agora + duracaoLimite,
          ativa.fimNaturalContexto ?? agora + duracaoLimite,
        );

    if (parada !== null) this.pararFonte(ativa, parada, true);
  }

  private posicaoAtualFonte(ativa: FonteAtiva, agora: number): number {
    const decorrido = Math.max(0, agora - ativa.inicioContexto);

    if (!ativa.repetir) {
      return Math.min(
        ativa.duracaoBuffer,
        ativa.inicioLoop + decorrido,
      );
    }

    const duracaoLoop = ativa.fimLoop - ativa.inicioLoop;
    if (duracaoLoop <= 0) return ativa.inicioLoop;

    return ativa.inicioLoop + decorrido % duracaoLoop;
  }

  private duracaoValida(valor: number | undefined): number {
    return typeof valor === 'number' && Number.isFinite(valor)
      ? Math.max(0, valor)
      : 0;
  }

  private dbParaGanho(valor: number): number {
    const db = Number.isFinite(valor)
      ? Math.min(12, Math.max(-60, valor))
      : 0;
    return Math.pow(10, db / 20);
  }

  private agendarFadeSaida(
    ativa: FonteAtiva,
    inicio: number,
    fim: number,
  ): void {
    if (fim <= inicio) return;

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

  private fixarGanhoAtual(parametro: AudioParam, agora: number): void {
    try {
      parametro.cancelAndHoldAtTime(agora);
    } catch {
      const valorAtual = parametro.value;
      parametro.cancelScheduledValues(agora);
      parametro.setValueAtTime(valorAtual, agora);
    }
  }

  private exigirContexto(): AudioContext {
    if (!this.contexto || !this.iniciadoInterno()) {
      throw new Error('A experiência sonora ainda não foi iniciada.');
    }
    return this.contexto;
  }

  private async inicializar(
    recursos: RecursoExperienciaImersivaPublica[],
  ): Promise<void> {
    this.carregandoInterno.set(true);
    this.erroInterno.set(null);

    try {
      if (typeof window === 'undefined') {
        throw new Error('A experiência sonora não está disponível neste ambiente.');
      }

      const contexto = new AudioContext();
      const controladorAbort = new AbortController();
      this.contexto = contexto;
      this.controladorAbort = controladorAbort;
      if (contexto.state === 'suspended') await contexto.resume();

      const carregados = await Promise.all(
        recursos.map(async (recurso) => ({
          id: recurso.id,
          buffer: await this.carregarBuffer(
            contexto,
            recurso,
            controladorAbort.signal,
          ),
        })),
      );

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
      if (contexto && contexto.state !== 'closed') await contexto.close();

      const erroNormalizado = new Error(this.obterMensagemErro(erro));
      this.erroInterno.set(erroNormalizado.message);
      throw erroNormalizado;
    } finally {
      this.carregandoInterno.set(false);
    }
  }

  private async carregarBuffer(
    contexto: AudioContext,
    recurso: RecursoExperienciaImersivaPublica,
    sinal: AbortSignal,
  ): Promise<AudioBuffer> {
    const resposta = await fetch(recurso.reproducao_url, { signal: sinal });
    if (!resposta.ok) {
      throw new Error(`Não foi possível carregar o recurso “${recurso.nome}”.`);
    }
    return await contexto.decodeAudioData(await resposta.arrayBuffer());
  }

  private async retomarContexto(): Promise<void> {
    if (this.contexto?.state === 'suspended') await this.contexto.resume();
  }

  private obterMensagemErro(erro: unknown): string {
    return typeof erro === 'object' && erro !== null && 'message' in erro
      ? String(erro.message)
      : 'Não foi possível iniciar a experiência sonora.';
  }
}
