import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  effect,
  inject,
  signal,
  viewChildren,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {
  DadosExperienciaImersivaPublica,
  type Json,
} from '@fleiva-studios/shared-data-access';
import {
  type ComandoBlocoAudio,
  MotorAudioExperienciaImersiva,
  type TransicaoBlocoAudio,
} from './motor-audio-experiencia-imersiva';

@Component({
  selector: 'app-experiencia-imersiva-publica',
  standalone: true,
  imports: [],
  templateUrl: './experiencia-imersiva-publica.html',
  styleUrl: './experiencia-imersiva-publica.scss',
  providers: [MotorAudioExperienciaImersiva],
})
export class ExperienciaImersivaPublica
  implements OnInit, OnDestroy
{
  readonly dados = inject(
    DadosExperienciaImersivaPublica,
  );

  readonly leituraSimples = signal(false);
  readonly modoTeste = signal(false);

  readonly blocoEmFocoId = signal<string | null>(null);
  readonly blocoSonoroId = signal<string | null>(null);
  readonly erroExecucao = signal<string | null>(null);

  readonly motor = inject(
    MotorAudioExperienciaImersiva,
  );

  private readonly rota = inject(ActivatedRoute);
  private readonly tituloPagina = inject(Title);
  private readonly elementosBloco =
    viewChildren<ElementRef<HTMLElement>>(
      'blocoExperiencia',
    );

  private observador: IntersectionObserver | null = null;
  private readonly proporcoesVisiveis =
    new Map<Element, number>();
  private maiorOrdemSonora: number | null = null;
  private experienciaId = '';
  private transicaoSaidaAtual: TransicaoBlocoAudio = 'corte';
  private duracaoCrossfadeAtual = 0;

  constructor() {
    effect(() => {
      const experiencia = this.dados.experiencia();

      this.tituloPagina.setTitle(
        experiencia
          ? `${experiencia.nome} — Play Flêiva`
          : 'Play Flêiva',
      );
    });

    effect(() => {
      const elementos = this.elementosBloco();
      const iniciado = this.motor.iniciado();
      const leituraSimples = this.leituraSimples();

      this.configurarObservador(
        iniciado && !leituraSimples
          ? elementos
          : [],
      );
    });

    effect(() => {
      const blocoId = this.blocoSonoroId();
      const iniciado = this.motor.iniciado();
      const leituraSimples = this.leituraSimples();

      if (
        blocoId &&
        iniciado &&
        !leituraSimples
      ) {
        this.executarBloco(blocoId);
      }
    });
  }

  ngOnInit(): void {
    this.modoTeste.set(
      this.rota.snapshot.queryParamMap.get('teste') === '1',
    );

    this.experienciaId =
      this.rota.snapshot.paramMap.get(
        'experienciaId',
      ) ?? '';

    void this.carregar();
  }

  ngOnDestroy(): void {
    this.desligarObservador();
    void this.motor.encerrar();
  }

  async carregar(): Promise<void> {
    await this.motor.encerrar();
    this.leituraSimples.set(false);
    this.reiniciarFoco();

    await this.dados.carregar(
      this.experienciaId,
    );
  }

  async iniciar(): Promise<void> {
    const experiencia = this.dados.experiencia();

    if (!experiencia) {
      return;
    }

    this.reiniciarFoco();

    try {
      await this.motor.iniciar(
        experiencia.recursos,
      );
    } catch {
      // A mensagem é mantida pelo próprio motor.
    }
  }

  async lerSemExperiencia(): Promise<void> {
    await this.motor.encerrar();
    this.reiniciarFoco();
    this.leituraSimples.set(true);
  }

  numeroCena(blocoId: string | null): number | null {
    if (!blocoId) {
      return null;
    }

    return this.dados
      .experiencia()
      ?.blocos.find((bloco) => bloco.id === blocoId)
      ?.ordem ?? null;
  }

  async reiniciarTeste(): Promise<void> {
    await this.motor.encerrar();
    this.leituraSimples.set(false);
    this.reiniciarFoco();

    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  irParaCenaTeste(blocoId: string): void {
    if (!this.modoTeste() || !this.motor.iniciado()) {
      return;
    }

    const bloco = this.dados
      .experiencia()
      ?.blocos.find((item) => item.id === blocoId);
    const elemento = this.elementosBloco().find(
      (item) => item.nativeElement.dataset['blocoId'] === blocoId,
    );

    if (!bloco || !elemento) {
      return;
    }

    this.transicaoSaidaAtual = 'corte';
    this.duracaoCrossfadeAtual = 0;
    this.maiorOrdemSonora = bloco.ordem;
    this.blocoEmFocoId.set(bloco.id);

    if (this.blocoSonoroId() === bloco.id) {
      this.executarBloco(bloco.id);
    } else {
      this.blocoSonoroId.set(bloco.id);
    }

    elemento.nativeElement.scrollIntoView({
      behavior: 'auto',
      block: 'center',
    });
  }

  repetirCenaTeste(): void {
    const blocoId = this.blocoSonoroId();

    if (!this.modoTeste() || !this.motor.iniciado() || !blocoId) {
      return;
    }

    this.transicaoSaidaAtual = 'corte';
    this.duracaoCrossfadeAtual = 0;
    this.executarBloco(blocoId);
  }

  private configurarObservador(
    elementos: readonly ElementRef<HTMLElement>[],
  ): void {
    this.desligarObservador();

    if (
      elementos.length === 0 ||
      typeof IntersectionObserver === 'undefined'
    ) {
      return;
    }

    this.observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            this.proporcoesVisiveis.set(
              entrada.target,
              entrada.intersectionRatio,
            );
          } else {
            this.proporcoesVisiveis.delete(
              entrada.target,
            );
          }
        }

        const elementoEmFoco =
          [...this.proporcoesVisiveis.entries()]
            .sort(
              (primeiro, segundo) =>
                segundo[1] - primeiro[1],
            )[0]?.[0] as HTMLElement | undefined;

        if (elementoEmFoco) {
          this.assumirFoco(elementoEmFoco);
        }
      },
      {
        threshold: [0.35, 0.6, 0.85],
      },
    );

    for (const elemento of elementos) {
      this.observador.observe(
        elemento.nativeElement,
      );
    }
  }

  private assumirFoco(elemento: HTMLElement): void {
    const blocoId = elemento.dataset['blocoId'];
    const experiencia = this.dados.experiencia();

    if (!blocoId || !experiencia) {
      return;
    }

    const bloco = experiencia.blocos.find(
      (item) => item.id === blocoId,
    );

    if (!bloco) {
      return;
    }

    this.blocoEmFocoId.set(bloco.id);

    if (
      this.maiorOrdemSonora === null ||
      bloco.ordem > this.maiorOrdemSonora
    ) {
      this.maiorOrdemSonora = bloco.ordem;
      this.blocoSonoroId.set(bloco.id);
    }
  }

  private reiniciarFoco(): void {
    this.blocoEmFocoId.set(null);
    this.blocoSonoroId.set(null);
    this.erroExecucao.set(null);
    this.maiorOrdemSonora = null;
    this.transicaoSaidaAtual = 'corte';
    this.duracaoCrossfadeAtual = 0;
    this.proporcoesVisiveis.clear();
  }

  private executarBloco(blocoId: string): void {
    const experiencia = this.dados.experiencia();
    const bloco = experiencia?.blocos.find(
      (item) => item.id === blocoId,
    );

    if (!bloco) {
      return;
    }

    this.erroExecucao.set(null);

    try {
      const comandos: ComandoBlocoAudio[] = bloco.acoes
        .filter((acao) =>
          ['loop', 'tocar', 'one-shot'].includes(
            acao.acao.trim().toLocaleLowerCase(),
          ),
        )
        .map((acao) => {
          if (!acao.recurso_id) {
            throw new Error(
              `Uma ação do bloco ${bloco.ordem} não possui recurso sonoro.`,
            );
          }

          const inicioConfigurado = this.parametroNumero(
            acao.parametros,
            'inicio_trecho_segundos',
          );
          const fimConfigurado = this.parametroNumero(
            acao.parametros,
            'fim_trecho_segundos',
          );
          const inicioLegado =
            bloco.hold_point_segundos === null
              ? 0
              : bloco.hold_point_segundos - acao.inicio_segundos;
          const fimLegado =
            bloco.teto_temporal_segundos === null
              ? null
              : bloco.teto_temporal_segundos - acao.inicio_segundos;

          return {
            recursoId: acao.recurso_id,
            inicioTrechoSegundos: inicioConfigurado ?? inicioLegado,
            fimTrechoSegundos: fimConfigurado ?? fimLegado,
            repetir: acao.acao.trim().toLocaleLowerCase() === 'loop',
            fadeInSegundos:
              this.parametroNumero(acao.parametros, 'fade_in_segundos') ?? 0,
          };
        });

      this.motor.transicionar(
        comandos,
        this.transicaoSaidaAtual,
        this.duracaoCrossfadeAtual,
      );

      const acaoPrincipal = bloco.acoes[0];
      this.transicaoSaidaAtual = acaoPrincipal
        ? this.transicaoValida(
            this.parametroTexto(
              acaoPrincipal.parametros,
              'transicao_saida',
            ),
          )
        : 'silencio';
      this.duracaoCrossfadeAtual = acaoPrincipal
        ? this.parametroNumero(
            acaoPrincipal.parametros,
            'duracao_crossfade_segundos',
          ) ?? 0
        : 0;
    } catch (erro) {
      this.motor.pararTodos();
      this.erroExecucao.set(
        this.obterMensagemErroExecucao(erro),
      );
    }
  }

  private transicaoValida(valor: string | null): TransicaoBlocoAudio {
    return valor === 'terminar-loop' ||
      valor === 'crossfade' ||
      valor === 'silencio'
      ? valor
      : 'corte';
  }

  private parametroNumero(parametros: Json, chave: string): number | null {
    if (
      !parametros ||
      Array.isArray(parametros) ||
      typeof parametros !== 'object'
    ) {
      return null;
    }

    const valor = parametros[chave];
    return typeof valor === 'number' && Number.isFinite(valor)
      ? valor
      : null;
  }

  private parametroTexto(parametros: Json, chave: string): string | null {
    if (
      !parametros ||
      Array.isArray(parametros) ||
      typeof parametros !== 'object'
    ) {
      return null;
    }

    const valor = parametros[chave];
    return typeof valor === 'string' ? valor : null;
  }

  private obterMensagemErroExecucao(
    erro: unknown,
  ): string {
    if (
      typeof erro === 'object' &&
      erro !== null &&
      'message' in erro
    ) {
      return String(erro.message);
    }

    return 'Não foi possível executar o áudio deste bloco.';
  }

  private desligarObservador(): void {
    this.observador?.disconnect();
    this.observador = null;
    this.proporcoesVisiveis.clear();
  }
}
