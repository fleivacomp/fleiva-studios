import {
  Component,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
} from '@angular/router';
import {
  DadosAlbumPublico,
  type FaixaAlbumPublico,
} from '@fleiva-studios/shared-data-access';

@Component({
  selector: 'app-album-publico',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './album-publico.html',
  styleUrl: './album-publico.scss',
})
export class AlbumPublico implements OnInit {
  readonly dados = inject(DadosAlbumPublico);

  private readonly rota = inject(ActivatedRoute);

  private slug = '';
  private albumId = '';

  readonly faixaAtivaId = signal<string | null>(null);
  readonly carregandoAudioId = signal<string | null>(null);
  readonly baixandoId = signal<string | null>(null);
  readonly reproduzindo = signal(false);
  readonly tempoAtual = signal(0);
  readonly duracao = signal(0);
  readonly erroAcao = signal<string | null>(null);

  readonly faixaAtiva = computed(() => {
    const faixaId = this.faixaAtivaId();

    return (
      this.dados
        .album()
        ?.faixas.find((faixa) => faixa.id === faixaId) ??
      null
    );
  });

  readonly inicialEstudio = computed(() => {
    const nome = this.dados.estudio()?.nome.trim();

    return (
      nome
        ?.charAt(0)
        .toLocaleUpperCase('pt-BR') || 'F'
    );
  });

  readonly iniciaisProjeto = computed(() => {
    const projeto = this.dados.album()?.projeto ?? '';

    return (
      projeto
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((palavra) => palavra.charAt(0))
        .join('')
        .toLocaleUpperCase('pt-BR') || 'FL'
    );
  });

  ngOnInit(): void {
    this.slug =
      this.rota.snapshot.paramMap.get('slug') ?? '';

    this.albumId =
      this.rota.snapshot.paramMap.get('albumId') ?? '';

    void this.carregar();
  }

  async carregar(): Promise<void> {
    this.pararEstadoPlayer();

    await this.dados.carregar(
      this.slug,
      this.albumId,
    );
  }

  async reproduzir(
    faixa: FaixaAlbumPublico,
    audio: HTMLAudioElement,
  ): Promise<void> {
    if (this.carregandoAudioId()) {
      return;
    }

    this.erroAcao.set(null);

    if (this.faixaAtivaId() === faixa.id && audio.src) {
      if (audio.paused) {
        try {
          await audio.play();
        } catch {
          this.erroAcao.set(
            'Não foi possível iniciar a reprodução.',
          );
        }
      } else {
        audio.pause();
      }

      return;
    }

    this.carregandoAudioId.set(faixa.id);
    this.reproduzindo.set(false);

    try {
      const url =
        await this.dados.obterUrlReproducao(
          this.slug,
          this.albumId,
          faixa.id,
        );

      audio.pause();
      audio.src = url;
      audio.load();

      this.faixaAtivaId.set(faixa.id);
      this.tempoAtual.set(0);
      this.duracao.set(0);

      await audio.play();
    } catch (erro) {
      this.erroAcao.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.carregandoAudioId.set(null);
    }
  }

  async baixar(
    faixa: FaixaAlbumPublico,
  ): Promise<void> {
    if (this.baixandoId()) {
      return;
    }

    this.baixandoId.set(faixa.id);
    this.erroAcao.set(null);

    try {
      const download =
        await this.dados.obterDownload(
          this.slug,
          this.albumId,
          faixa.id,
        );

      const link = document.createElement('a');

      link.href = download.url;
      link.download = download.nome_arquivo;
      link.rel = 'noopener noreferrer';

      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (erro) {
      this.erroAcao.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.baixandoId.set(null);
    }
  }

  aoReproduzir(): void {
    this.reproduzindo.set(true);
  }

  aoPausar(): void {
    this.reproduzindo.set(false);
  }

  aoAtualizarTempo(audio: HTMLAudioElement): void {
    this.tempoAtual.set(
      Number.isFinite(audio.currentTime)
        ? audio.currentTime
        : 0,
    );
  }

  aoCarregarMetadados(audio: HTMLAudioElement): void {
    this.duracao.set(
      Number.isFinite(audio.duration)
        ? audio.duration
        : 0,
    );
  }

  alterarTempo(
    evento: Event,
    audio: HTMLAudioElement,
  ): void {
    const input = evento.target as HTMLInputElement;
    const tempo = Number(input.value);

    if (!Number.isFinite(tempo)) {
      return;
    }

    audio.currentTime = tempo;
    this.tempoAtual.set(tempo);
  }

  aoEncerrar(): void {
    this.reproduzindo.set(false);
    this.tempoAtual.set(0);
  }

  formatarOrdem(ordem: number): string {
    return String(ordem).padStart(2, '0');
  }

  formatarBytes(bytes: number): string {
    if (bytes < 1000) {
      return `${bytes} B`;
    }

    const unidades = ['KB', 'MB', 'GB'];
    let valor = bytes / 1000;
    let indice = 0;

    while (
      valor >= 1000 &&
      indice < unidades.length - 1
    ) {
      valor /= 1000;
      indice += 1;
    }

    return `${new Intl.NumberFormat('pt-BR', {
      maximumFractionDigits: 1,
    }).format(valor)} ${unidades[indice]}`;
  }

  formatarTempo(segundos: number): string {
    if (!Number.isFinite(segundos) || segundos < 0) {
      return '0:00';
    }

    const minutos = Math.floor(segundos / 60);
    const restante = Math.floor(segundos % 60);

    return `${minutos}:${String(restante).padStart(2, '0')}`;
  }

  private pararEstadoPlayer(): void {
    this.faixaAtivaId.set(null);
    this.carregandoAudioId.set(null);
    this.reproduzindo.set(false);
    this.tempoAtual.set(0);
    this.duracao.set(0);
    this.erroAcao.set(null);
  }

  private obterMensagemErro(erro: unknown): string {
    if (
      typeof erro === 'object' &&
      erro !== null &&
      'message' in erro
    ) {
      return String(erro.message);
    }

    return 'Não foi possível concluir a operação.';
  }
}
