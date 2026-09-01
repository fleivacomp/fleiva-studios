import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  computed,
  inject,
  signal,
} from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import {
  DadosAlbuns,
  DadosEstudio,
  DadosFaixas,
  DadosProjetosArtisticos,
  DadosVersoesFaixa,
  TIPO_PUBLICO_ENVIO,
  type AlbumCompleto,
  type FaixaCompleta,
  type VersaoFaixa,
} from "@fleiva-studios/shared-data-access";

@Component({
  selector: "app-projeto-detalhe",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./projeto-detalhe.html",
  styleUrl: "./projeto-detalhe.scss",
})
export class ProjetoDetalhe implements OnInit {
  readonly dadosProjetos = inject(DadosProjetosArtisticos);
  readonly dadosFaixas = inject(DadosFaixas);
  readonly dadosAlbuns = inject(DadosAlbuns);
  readonly dadosEstudio = inject(DadosEstudio);
  readonly dadosVersoes = inject(DadosVersoesFaixa);

  private readonly rota = inject(ActivatedRoute);

  @ViewChild("reprodutor")
  private reprodutor?: ElementRef<HTMLAudioElement>;

  readonly projetoId = signal("");
  readonly carregandoPagina = signal(true);
  readonly versaoReproduzindo = signal<VersaoFaixa | null>(null);
  readonly urlReproducao = signal<string | null>(null);
  readonly carregandoReproducaoId = signal<string | null>(null);
  readonly erroReproducao = signal<string | null>(null);
  readonly audioTocando = signal(false);
  readonly tempoAtualAudio = signal(0);
  readonly duracaoAudio = signal(0);
  readonly volumeAudio = signal(1);

  readonly projeto = computed(
    () =>
      this.dadosProjetos
        .projetos()
        .find((projeto) => projeto.id === this.projetoId()) ?? null,
  );

  readonly faixas = computed(() =>
    this.dadosFaixas
      .faixas()
      .filter((faixa) => faixa.projeto_id === this.projetoId()),
  );

  readonly trabalhos = computed(() =>
    this.dadosAlbuns
      .albuns()
      .filter(
        (album) =>
          album.projeto_id === this.projetoId() &&
          album.tipo_publico !== TIPO_PUBLICO_ENVIO,
      ),
  );

  readonly envios = computed(() =>
    this.dadosAlbuns
      .albuns()
      .filter(
        (album) =>
          album.projeto_id === this.projetoId() &&
          album.tipo_publico === TIPO_PUBLICO_ENVIO,
      ),
  );

  readonly totalVersoes = computed(() =>
    this.faixas().reduce(
      (total, faixa) => total + this.versoesDaFaixa(faixa.id).length,
      0,
    ),
  );

  readonly faixaReproduzindo = computed(() => {
    const versao = this.versaoReproduzindo();

    return versao
      ? this.faixas().find((faixa) => faixa.id === versao.faixa_id) ?? null
      : null;
  });

  readonly membrosAtivos = computed(
    () => this.projeto()?.membros.filter((membro) => membro.ativo) ?? [],
  );

  readonly faixasSemVersao = computed(() =>
    this.faixas().filter((faixa) => this.versoesDaFaixa(faixa.id).length === 0),
  );

  readonly trabalhosPublicados = computed(() =>
    this.trabalhos().filter((trabalho) => trabalho.publico_na_landing),
  );

  readonly trabalhosNaCasa = computed(() =>
    this.trabalhos().filter((trabalho) => trabalho.publico_na_casa),
  );

  readonly trabalhosComLink = computed(() =>
    this.trabalhos().filter(
      (trabalho) =>
        !trabalho.publico_na_landing && Boolean(trabalho.token_compartilhamento),
    ),
  );

  readonly trabalhosPrivados = computed(() =>
    this.trabalhos().filter(
      (trabalho) =>
        !trabalho.publico_na_landing && !trabalho.token_compartilhamento,
    ),
  );

  readonly erroPagina = computed(
    () =>
      this.dadosProjetos.erro() ??
      this.dadosFaixas.erro() ??
      this.dadosAlbuns.erro() ??
      this.dadosVersoes.erro(),
  );

  async ngOnInit(): Promise<void> {
    this.projetoId.set(this.rota.snapshot.paramMap.get("id")?.trim() ?? "");

    try {
      const carregarEstudio = this.dadosEstudio.estudio()
        ? Promise.resolve()
        : this.dadosEstudio.carregar();

      await Promise.all([
        this.dadosProjetos.listar(),
        this.dadosFaixas.listar(),
        this.dadosAlbuns.listar(),
        this.dadosVersoes.listar(),
        carregarEstudio,
      ]);
    } finally {
      this.carregandoPagina.set(false);
    }
  }

  async recarregar(): Promise<void> {
    this.carregandoPagina.set(true);

    try {
      const carregarEstudio = this.dadosEstudio.estudio()
        ? Promise.resolve()
        : this.dadosEstudio.carregar();

      await Promise.all([
        this.dadosProjetos.listar(),
        this.dadosFaixas.listar(),
        this.dadosAlbuns.listar(),
        this.dadosVersoes.listar(),
        carregarEstudio,
      ]);
    } finally {
      this.carregandoPagina.set(false);
    }
  }

  versoesDaFaixa(faixaId: string): VersaoFaixa[] {
    return this.dadosVersoes.versoesDaFaixa(faixaId);
  }

  versaoPrincipal(faixa: FaixaCompleta): VersaoFaixa | null {
    const versoes = this.versoesDaFaixa(faixa.id);

    return (
      versoes.find((versao) => versao.id === faixa.versao_principal_id) ??
      versoes[0] ??
      null
    );
  }

  async reproduzirVersao(versao: VersaoFaixa): Promise<void> {
    if (this.carregandoReproducaoId() || !this.podeReproduzir(versao)) {
      return;
    }

    if (this.versaoReproduzindo()?.id === versao.id && this.urlReproducao()) {
      await this.alternarReproducao();
      return;
    }

    this.carregandoReproducaoId.set(versao.id);
    this.erroReproducao.set(null);

    try {
      const arquivo = await this.dadosVersoes.obterReproducao(versao.id);

      this.versaoReproduzindo.set(versao);
      this.urlReproducao.set(arquivo.url);

      window.setTimeout(() => {
        void this.tentarIniciarReproducao();
      });
    } catch (erro) {
      this.erroReproducao.set(this.obterMensagemErro(erro));
    } finally {
      this.carregandoReproducaoId.set(null);
    }
  }

  async alternarReproducao(): Promise<void> {
    const audio = this.reprodutor?.nativeElement;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        this.audioTocando.set(false);
      }
    } else {
      audio.pause();
    }
  }

  fecharReprodutor(): void {
    const audio = this.reprodutor?.nativeElement;

    if (audio) {
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
    }

    this.versaoReproduzindo.set(null);
    this.urlReproducao.set(null);
    this.erroReproducao.set(null);
    this.audioTocando.set(false);
    this.tempoAtualAudio.set(0);
    this.duracaoAudio.set(0);
  }

  registrarErroReproducao(): void {
    this.audioTocando.set(false);
    this.erroReproducao.set(
      "Não foi possível reproduzir este formato no navegador.",
    );
  }

  atualizarEstadoReproducao(tocando: boolean): void {
    this.audioTocando.set(tocando);
  }

  atualizarDadosReproducao(evento: Event): void {
    const audio = evento.target as HTMLAudioElement;

    this.tempoAtualAudio.set(
      Number.isFinite(audio.currentTime) ? audio.currentTime : 0,
    );
    this.duracaoAudio.set(Number.isFinite(audio.duration) ? audio.duration : 0);
  }

  buscarNaFaixa(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    const audio = this.reprodutor?.nativeElement;
    const tempo = Number(input.value);

    if (audio && Number.isFinite(tempo)) {
      audio.currentTime = tempo;
      this.tempoAtualAudio.set(tempo);
    }
  }

  alterarVolume(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    const audio = this.reprodutor?.nativeElement;
    const volume = Number(input.value);

    if (audio && Number.isFinite(volume)) {
      audio.volume = volume;
      this.volumeAudio.set(volume);
    }
  }

  formatarTempoAudio(segundos: number): string {
    if (!Number.isFinite(segundos) || segundos < 0) {
      return "0:00";
    }

    const minutosInteiros = Math.floor(segundos / 60);
    const segundosInteiros = Math.floor(segundos % 60);

    return `${minutosInteiros}:${String(segundosInteiros).padStart(2, "0")}`;
  }

  podeReproduzir(versao: VersaoFaixa): boolean {
    if (versao.tipo_mime?.startsWith("audio/")) {
      return true;
    }

    return /\.(aac|flac|m4a|mp3|ogg|wav)$/i.test(versao.nome_arquivo);
  }

  formatarStatus(status: string): string {
    return status
      .replace(/_/g, " ")
      .replace(/^./, (inicio: string) => inicio.toLocaleUpperCase("pt-BR"));
  }

  formatarOrdem(indice: number): string {
    return String(indice + 1).padStart(2, "0");
  }

  tipoTrabalho(album: AlbumCompleto): string {
    return album.tipo_publico?.trim() || "Trabalho";
  }

  totalFaixasTrabalho(album: AlbumCompleto): string {
    const total = album.faixas.length;

    return total === 1 ? "1 faixa" : `${total} faixas`;
  }

  totalArquivosEnvio(envio: AlbumCompleto): string {
    const total = envio.faixas.length;

    return total === 1 ? "1 arquivo" : `${total} arquivos`;
  }

  situacaoEnvio(envio: AlbumCompleto): string {
    if (envio.publico_na_casa) {
      return "Publicado · Casa Flêiva";
    }

    if (envio.publico_na_landing) {
      return "Publicado no Card";
    }

    if (envio.token_compartilhamento) {
      return "Link ativo";
    }

    return "Sem link ativo";
  }

  situacaoTrabalho(album: AlbumCompleto): string {
    if (album.publico_na_casa) {
      return "Publicado · Casa Flêiva";
    }

    if (album.publico_na_landing) {
      return "Publicado no Card";
    }

    if (album.token_compartilhamento) {
      return "Link privado ativo";
    }

    return "Privado";
  }

  linkPublico(album: AlbumCompleto): string | null {
    if (!album.publico_na_landing) {
      return null;
    }

    const slug = this.dadosEstudio.estudio()?.slug;

    if (!slug) {
      return null;
    }

    const slugSeguro = encodeURIComponent(slug);
    const albumIdSeguro = encodeURIComponent(album.id);

    if (this.usarDominiosFleiva()) {
      return `https://play.fleiva.com.br/${slugSeguro}/trabalho/${albumIdSeguro}`;
    }

    const origem = window.location.origin.replace(/\/$/, "");

    return `${origem}/estudio/${slugSeguro}/trabalho/${albumIdSeguro}`;
  }

  private usarDominiosFleiva(): boolean {
    if (typeof window === "undefined") {
      return false;
    }

    const hostname = window.location.hostname.trim().toLocaleLowerCase();

    return hostname === "fleiva.com.br" || hostname.endsWith(".fleiva.com.br");
  }

  private async tentarIniciarReproducao(): Promise<void> {
    try {
      await this.reprodutor?.nativeElement.play();
    } catch {
      // O player permanece disponível quando o navegador bloqueia o autoplay.
    }
  }

  private obterMensagemErro(erro: unknown): string {
    if (typeof erro === "object" && erro !== null && "message" in erro) {
      return String(erro.message);
    }

    return "Não foi possível concluir a operação.";
  }

  identificarFaixa(_indice: number, faixa: FaixaCompleta): string {
    return faixa.id;
  }
}
