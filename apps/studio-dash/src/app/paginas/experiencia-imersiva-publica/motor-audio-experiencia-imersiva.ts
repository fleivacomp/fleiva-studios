import { Injectable, signal } from '@angular/core';
import type {
  RecursoExperienciaImersivaPublica,
} from '@fleiva-studios/shared-data-access';

export type TransicaoBlocoAudio =
  | 'terminar-loop'
  | 'corte'
  | 'crossfade'
  | 'silencio';

export interface ComandoBlocoAudio {
  recursoId: string;
  inicioTrechoSegundos: number;
  fimTrechoSegundos: number | null;
  repetir: boolean;
  fadeInSegundos: number;
}

interface FonteAtiva {
  recursoId: string;
  fonte: AudioBufferSourceNode;
  ganho: GainNode;
  inicioContexto: number;
  inicioLoop: number;
  fimLoop: number;
  repetir: boolean;
}

@Injectable()
export class MotorAudioExperienciaImersiva {
  private contexto: AudioContext | null = null;
  private readonly buffers = new Map<string, AudioBuffer>();
  private readonly fontesAtivas = new Set<FonteAtiva>();
  private controladorAbort: AbortController | null = null;
  private inicializacao: Promise<void> | null = null;

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
    return this.iniciarComando(
      {
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
    return this.iniciarComando(
      {
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
    duracaoCrossfadeSegundos = 0,
  ): void {
    const contexto = this.exigirContexto();
    const agora = contexto.currentTime;
    const ativas = [...this.fontesAtivas];

    for (const ativa of ativas) {
      if (ativa.inicioContexto > agora) {
        this.pararFonte(ativa, agora);
      }
    }

    const fontesEmCurso = ativas.filter(
      (ativa) => ativa.inicioContexto <= agora,
    );
    let inicioProximo = agora;

    if (transicaoAnterior === 'terminar-loop') {
      const loopPrincipal = fontesEmCurso.find((item) => item.repetir);
      if (loopPrincipal) {
        const duracaoLoop = loopPrincipal.fimLoop - loopPrincipal.inicioLoop;
        const decorrido = Math.max(0, agora - loopPrincipal.inicioContexto);
        const ciclos = Math.ceil(decorrido / duracaoLoop);
        inicioProximo = Math.max(
          agora,
          loopPrincipal.inicioContexto + ciclos * duracaoLoop,
        );
      }
    }

    const crossfade =
      transicaoAnterior === 'crossfade'
        ? Math.max(0, duracaoCrossfadeSegundos)
        : 0;

    if (transicaoAnterior === 'silencio') {
      for (const ativa of fontesEmCurso) {
        this.pararFonte(ativa, agora);
      }
      return;
    }

    if (crossfade > 0) {
      for (const ativa of fontesEmCurso) {
        ativa.ganho.gain.cancelScheduledValues(agora);
        ativa.ganho.gain.setValueAtTime(ativa.ganho.gain.value, agora);
        ativa.ganho.gain.linearRampToValueAtTime(0, agora + crossfade);
        this.pararFonte(ativa, agora + crossfade);
      }
    } else {
      for (const ativa of fontesEmCurso) {
        this.pararFonte(ativa, inicioProximo);
      }
    }

    for (const comando of comandos) {
      this.iniciarComando(
        {
          ...comando,
          fadeInSegundos: Math.max(comando.fadeInSegundos, crossfade),
        },
        crossfade > 0 ? agora : inicioProximo,
      );
    }
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

    const fonte = contexto.createBufferSource();
    const ganho = contexto.createGain();
    fonte.buffer = buffer;
    fonte.loop = comando.repetir;
    fonte.loopStart = inicio;
    fonte.loopEnd = fim;
    fonte.connect(ganho);
    ganho.connect(contexto.destination);

    const fade = Math.max(0, comando.fadeInSegundos);
    ganho.gain.setValueAtTime(fade > 0 ? 0 : 1, quando);
    if (fade > 0) ganho.gain.linearRampToValueAtTime(1, quando + fade);

    const ativa: FonteAtiva = {
      recursoId: comando.recursoId,
      fonte,
      ganho,
      inicioContexto: quando,
      inicioLoop: inicio,
      fimLoop: fim,
      repetir: comando.repetir,
    };

    this.fontesAtivas.add(ativa);
    fonte.addEventListener('ended', () => this.removerFonte(ativa), {
      once: true,
    });

    if (comando.repetir) fonte.start(quando, inicio);
    else fonte.start(quando, inicio, fim - inicio);

    return ativa;
  }

  private pararFonte(ativa: FonteAtiva, quando?: number): void {
    try {
      ativa.fonte.stop(quando);
    } catch {
      this.removerFonte(ativa);
    }
  }

  private removerFonte(ativa: FonteAtiva): void {
    ativa.fonte.disconnect();
    ativa.ganho.disconnect();
    this.fontesAtivas.delete(ativa);
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
