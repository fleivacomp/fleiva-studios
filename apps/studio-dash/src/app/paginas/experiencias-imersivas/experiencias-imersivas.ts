import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  type AcaoBlocoExperienciaImersiva,
  type BlocoExperienciaImersiva,
  DadosAcoesBlocoExperienciaImersiva,
  DadosBlocosExperienciaImersiva,
  DadosExperienciasImersivas,
  DadosRecursosExperienciaImersiva,
  type Json,
  type RecursoExperienciaImersiva,
  type RecursoExperienciaImersivaPublica,
  type VersaoDisponivelExperienciaImersiva,
} from '@fleiva-studios/shared-data-access';
import {
  type ComandoBlocoAudio,
  MotorAudioExperienciaImersiva,
  type TransicaoBlocoAudio,
} from '../experiencia-imersiva-publica/motor-audio-experiencia-imersiva';

type ModoAudio = 'loop' | 'tocar' | 'one-shot';
type TransicaoAudio =
  | 'terminar-loop'
  | 'corte'
  | 'crossfade'
  | 'silencio';
type MarcadorTrecho = 'inicio' | 'fim';

@Component({
  selector: 'app-experiencias-imersivas',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './experiencias-imersivas.html',
  styleUrl: './experiencias-imersivas.scss',
  providers: [MotorAudioExperienciaImersiva],
})
export class ExperienciasImersivas implements OnInit, OnDestroy {
  readonly dadosExperiencias = inject(DadosExperienciasImersivas);
  readonly dadosBlocos = inject(DadosBlocosExperienciaImersiva);
  readonly dadosRecursos = inject(DadosRecursosExperienciaImersiva);
  readonly dadosAcoes = inject(DadosAcoesBlocoExperienciaImersiva);
  readonly motorPrevia = inject(MotorAudioExperienciaImersiva);

  private readonly formularios = inject(FormBuilder);
  private readonly reprodutor =
    viewChild<ElementRef<HTMLAudioElement>>('reprodutorEditor');

  readonly experienciaSelecionadaId = signal('');
  readonly criandoExperiencia = signal(false);
  readonly criandoBloco = signal(false);
  readonly blocoEditandoId = signal<string | null>(null);
  readonly blocoComEditorId = signal<string | null>(null);
  readonly acaoEditandoId = signal<string | null>(null);
  readonly blocoEditandoTransicaoId = signal<string | null>(null);

  readonly alterandoPublicacao = signal(false);
  readonly salvandoExperiencia = signal(false);
  readonly salvandoBloco = signal(false);
  readonly enviandoRecurso = signal(false);
  readonly salvandoAcao = signal(false);
  readonly salvandoTransicao = signal(false);
  readonly carregandoAudio = signal(false);
  readonly excluindoRecursoId = signal<string | null>(null);
  readonly selecionandoVersao = signal(false);
  readonly vinculandoVersaoId = signal<string | null>(null);
  readonly excluindoExperiencia = signal(false);
  readonly renomeandoExperiencia = signal(false);
  readonly salvandoNomeExperiencia = signal(false);
  readonly escolhendoAlbum = signal(false);
  readonly salvandoAlbum = signal(false);
  readonly arquivoImagemBloco = signal<File | null>(null);
  readonly urlImagemBloco = signal<string | null>(null);
  readonly removerImagemBloco = signal(false);
  readonly imagensBlocos = signal<Record<string, string>>({});

  readonly erroExperiencia = signal<string | null>(null);
  readonly erroBloco = signal<string | null>(null);
  readonly erroPublicacao = signal<string | null>(null);
  readonly erroRecurso = signal<string | null>(null);
  readonly erroAcao = signal<string | null>(null);
  readonly erroTransicao = signal<string | null>(null);

  readonly recursoAcaoId = signal<string | null>(null);
  readonly modoAudio = signal<ModoAudio>('loop');
  readonly transicaoAudio = signal<TransicaoAudio>('terminar-loop');
  readonly fadeInAtivo = signal(false);
  readonly duracaoFadeIn = signal(2);
  readonly duracaoCrossfade = signal(2);
  readonly inicioTrecho = signal(0);
  readonly fimTrecho = signal(0);
  readonly tempoAtual = signal(0);
  readonly duracaoAudio = signal(0);
  readonly urlAudio = signal<string | null>(null);
  readonly audioTocando = signal(false);
  readonly testandoTrecho = signal(false);
  readonly formaOnda = signal<number[]>([]);
  readonly carregandoFormaOnda = signal(false);
  readonly erroFormaOnda = signal<string | null>(null);
  readonly marcadorArrastando = signal<MarcadorTrecho | null>(null);
  readonly inicioJanelaFormaOnda = signal(0);
  readonly fimJanelaFormaOnda = signal(0);
  readonly waveformAmpliada = signal(false);
  readonly cenaEmPreviaId = signal<string | null>(null);
  readonly cenaPreviaAlvoId = signal<string | null>(null);
  readonly preparandoPrevia = signal(false);
  readonly preparandoRecursosPrevia = signal(false);
  readonly erroPrevia = signal<string | null>(null);

  private cargaFormaOndaAtual = 0;
  private picosFormaOndaCompletos: number[] = [];
  private contextoAudioEditor: AudioContext | null = null;
  private bufferAudioEditor: AudioBuffer | null = null;
  private fonteTesteTrecho: AudioBufferSourceNode | null = null;
  private quadroTempoTeste: number | null = null;
  private tempoBaseTeste = 0;
  private contextoBaseTeste = 0;
  private cargaRecursosPreviaAtual = 0;
  private recursosPrevia: RecursoExperienciaImersivaPublica[] = [];
  private transicaoPreviaAtual: TransicaoBlocoAudio = 'corte';
  private duracaoCrossfadePreviaAtual = 0;
  private urlImagemBlocoLocal: string | null = null;

  readonly experiencia = computed(() =>
    this.dadosExperiencias
      .experiencias()
      .find((item) => item.id === this.experienciaSelecionadaId()) ?? null,
  );

  readonly formularioExperiencia = this.formularios.group({
    nome: this.formularios.nonNullable.control('', [Validators.required]),
  });

  readonly formularioNomeExperiencia = this.formularios.group({
    nome: this.formularios.nonNullable.control('', [Validators.required]),
  });

  readonly formularioBloco = this.formularios.group({
    conteudo: this.formularios.nonNullable.control(''),
  });

  readonly formularioRecurso = this.formularios.group({
    nome: this.formularios.nonNullable.control('', [Validators.required]),
  });

  ngOnInit(): void {
    void this.inicializar();
  }

  ngOnDestroy(): void {
    this.liberarUrlImagemLocal();
    this.encerrarAudioEditor();
    void this.motorPrevia.encerrar();
  }

  async inicializar(): Promise<void> {
    await this.dadosExperiencias.listar();

    const primeira = this.dadosExperiencias.experiencias()[0];
    if (primeira) await this.abrirExperiencia(primeira.id);
  }

  async abrirExperiencia(experienciaId: string): Promise<void> {
    this.fecharEditorAcao();
    this.cancelarEdicaoTransicao();
    this.cancelarEdicaoBloco();
    await this.encerrarPrevia();
    this.experienciaSelecionadaId.set(experienciaId);
    await this.carregarExperiencia();
  }

  async carregarExperiencia(): Promise<void> {
    const experienciaId = this.experienciaSelecionadaId();
    if (!experienciaId) return;

    await Promise.all([
      this.dadosExperiencias.listar(),
      this.dadosExperiencias.listarAlbunsDisponiveis(),
      this.dadosBlocos.listar(experienciaId),
      this.dadosRecursos.listar(experienciaId),
      this.dadosAcoes.listarDaExperiencia(experienciaId),
    ]);

    await this.carregarImagensBlocos();

    void this.prepararRecursosPrevia().catch(() => undefined);
  }

  abrirCriacaoExperiencia(): void {
    this.criandoExperiencia.set(true);
    this.erroExperiencia.set(null);
  }

  cancelarCriacaoExperiencia(): void {
    this.criandoExperiencia.set(false);
    this.erroExperiencia.set(null);
    this.formularioExperiencia.reset({ nome: '' });
  }

  async cadastrarExperiencia(): Promise<void> {
    if (this.formularioExperiencia.invalid) {
      this.formularioExperiencia.markAllAsTouched();
      return;
    }

    this.salvandoExperiencia.set(true);
    this.erroExperiencia.set(null);

    try {
      const experiencia = await this.dadosExperiencias.cadastrar({
        nome: this.formularioExperiencia.controls.nome.value,
        album_id: null,
      });

      this.cancelarCriacaoExperiencia();
      await this.abrirExperiencia(experiencia.id);
    } catch (erro) {
      this.erroExperiencia.set(
        this.obterMensagemErro(erro, 'Não foi possível criar a experiência.'),
      );
    } finally {
      this.salvandoExperiencia.set(false);
    }
  }

  async alternarPublicacao(): Promise<void> {
    const experiencia = this.experiencia();
    if (!experiencia) return;

    this.alterandoPublicacao.set(true);
    this.erroPublicacao.set(null);

    try {
      if (experiencia.publicada_em) {
        await this.dadosExperiencias.retirarPublicacao(experiencia.id);
      } else {
        await this.dadosExperiencias.publicar(experiencia.id);
      }
    } catch (erro) {
      this.erroPublicacao.set(
        this.obterMensagemErro(erro, 'Não foi possível alterar a publicação.'),
      );
    } finally {
      this.alterandoPublicacao.set(false);
    }
  }

  async excluirExperiencia(): Promise<void> {
    const experiencia = this.experiencia();
    if (!experiencia) return;

    if (!this.confirmar(`Excluir definitivamente “${experiencia.nome}”?`)) {
      return;
    }

    this.excluindoExperiencia.set(true);
    this.erroExperiencia.set(null);

    try {
      await this.dadosExperiencias.excluir(experiencia.id);
      this.fecharEditorAcao();
      this.cancelarEdicaoBloco();
      this.experienciaSelecionadaId.set('');

      const proxima = this.dadosExperiencias.experiencias()[0];
      if (proxima) await this.abrirExperiencia(proxima.id);
    } catch (erro) {
      this.erroExperiencia.set(
        this.obterMensagemErro(
          erro,
          'Não foi possível excluir a experiência.',
        ),
      );
    } finally {
      this.excluindoExperiencia.set(false);
    }
  }

  iniciarRenomeacaoExperiencia(): void {
    const experiencia = this.experiencia();
    if (!experiencia) return;

    this.formularioNomeExperiencia.setValue({ nome: experiencia.nome });
    this.renomeandoExperiencia.set(true);
    this.erroExperiencia.set(null);
  }

  cancelarRenomeacaoExperiencia(): void {
    this.renomeandoExperiencia.set(false);
    this.formularioNomeExperiencia.reset({ nome: '' });
    this.erroExperiencia.set(null);
  }

  async salvarNomeExperiencia(): Promise<void> {
    const experiencia = this.experiencia();
    if (!experiencia || this.formularioNomeExperiencia.invalid) {
      this.formularioNomeExperiencia.markAllAsTouched();
      return;
    }

    this.salvandoNomeExperiencia.set(true);
    this.erroExperiencia.set(null);

    try {
      await this.dadosExperiencias.atualizar(experiencia.id, {
        nome: this.formularioNomeExperiencia.controls.nome.value,
        album_id: experiencia.album_id,
      });
      this.cancelarRenomeacaoExperiencia();
    } catch (erro) {
      this.erroExperiencia.set(
        this.obterMensagemErro(
          erro,
          'Não foi possível renomear a experiência.',
        ),
      );
    } finally {
      this.salvandoNomeExperiencia.set(false);
    }
  }

  async alternarEscolhaAlbum(): Promise<void> {
    const abrir = !this.escolhendoAlbum();
    this.escolhendoAlbum.set(abrir);

    if (
      abrir &&
      this.dadosExperiencias.albunsDisponiveis().length === 0
    ) {
      await this.dadosExperiencias.listarAlbunsDisponiveis();
    }
  }

  async definirAlbum(albumId: string | null): Promise<void> {
    const experiencia = this.experiencia();
    if (!experiencia || experiencia.album_id === albumId) {
      this.escolhendoAlbum.set(false);
      return;
    }

    this.salvandoAlbum.set(true);
    this.erroExperiencia.set(null);

    try {
      await this.dadosExperiencias.atualizar(experiencia.id, {
        nome: experiencia.nome,
        album_id: albumId,
      });
      this.escolhendoAlbum.set(false);
    } catch (erro) {
      this.erroExperiencia.set(
        this.obterMensagemErro(
          erro,
          'Não foi possível alterar o trabalho vinculado.',
        ),
      );
    } finally {
      this.salvandoAlbum.set(false);
    }
  }

  nomeAlbumVinculado(): string {
    const albumId = this.experiencia()?.album_id;
    if (!albumId) return 'Publicação independente';

    return (
      this.dadosExperiencias
        .albunsDisponiveis()
        .find((album) => album.id === albumId)?.nome ??
      'Trabalho vinculado'
    );
  }

  abrirNovoBloco(): void {
    this.limparImagemEditor();
    this.blocoEditandoId.set(null);
    this.formularioBloco.reset({ conteudo: '' });
    this.criandoBloco.set(true);
    this.erroBloco.set(null);
  }

  iniciarEdicaoBloco(bloco: BlocoExperienciaImersiva): void {
    this.limparImagemEditor();
    this.criandoBloco.set(false);
    this.blocoEditandoId.set(bloco.id);
    this.formularioBloco.setValue({ conteudo: bloco.conteudo ?? '' });
    this.urlImagemBloco.set(this.imagemDoBloco(bloco));
    this.erroBloco.set(null);
  }

  cancelarEdicaoBloco(): void {
    this.limparImagemEditor();
    this.criandoBloco.set(false);
    this.blocoEditandoId.set(null);
    this.formularioBloco.reset({ conteudo: '' });
    this.erroBloco.set(null);
  }

  async salvarBloco(): Promise<void> {
    const experienciaId = this.experienciaSelecionadaId();
    if (!experienciaId) return;

    this.salvandoBloco.set(true);
    this.erroBloco.set(null);

    let recursoNovoId: string | null = null;

    try {
      const bloco = this.dadosBlocos
        .blocos()
        .find((item) => item.id === this.blocoEditandoId());

      const caminhoAnterior = bloco?.imagem_caminho ?? null;
      let imagemCaminho = this.removerImagemBloco()
        ? null
        : caminhoAnterior;
      const arquivoImagem = this.arquivoImagemBloco();

      if (arquivoImagem) {
        const recurso = await this.dadosRecursos.enviarImagem({
          experiencia_id: experienciaId,
          nome: `Imagem · ${arquivoImagem.name}`,
          arquivo: arquivoImagem,
        });

        recursoNovoId = recurso.id;
        imagemCaminho = `recurso:${recurso.id}`;
      }

      const dados = {
        ordem:
          bloco?.ordem ??
          this.dadosBlocos.blocos().reduce(
            (maior, item) => Math.max(maior, item.ordem),
            0,
          ) + 1,
        conteudo: this.formularioBloco.controls.conteudo.value || null,
        imagem_caminho: imagemCaminho,
        teto_temporal_segundos: bloco?.teto_temporal_segundos ?? null,
        hold_point_segundos: bloco?.hold_point_segundos ?? null,
      };

      if (bloco) {
        await this.dadosBlocos.atualizar(experienciaId, bloco.id, dados);
      } else {
        await this.dadosBlocos.cadastrar(experienciaId, dados);
      }

      const recursoAnteriorId = this.extrairRecursoImagem(caminhoAnterior);
      if (
        recursoAnteriorId &&
        recursoAnteriorId !== recursoNovoId &&
        caminhoAnterior !== imagemCaminho
      ) {
        await this.dadosRecursos
          .excluir(experienciaId, recursoAnteriorId)
          .catch(() => undefined);
      }

      this.cancelarEdicaoBloco();
      await this.carregarImagensBlocos();
    } catch (erro) {
      if (recursoNovoId) {
        await this.dadosRecursos
          .excluir(experienciaId, recursoNovoId)
          .catch(() => undefined);
      }
      this.erroBloco.set(
        this.obterMensagemErro(erro, 'Não foi possível salvar o bloco.'),
      );
    } finally {
      this.salvandoBloco.set(false);
    }
  }

  async excluirBloco(bloco: BlocoExperienciaImersiva): Promise<void> {
    if (!this.confirmar(`Excluir o bloco ${bloco.ordem}?`)) return;

    try {
      await this.dadosBlocos.excluir(this.experienciaSelecionadaId(), bloco.id);
      const recursoImagemId = this.extrairRecursoImagem(bloco.imagem_caminho);
      if (recursoImagemId) {
        await this.dadosRecursos
          .excluir(this.experienciaSelecionadaId(), recursoImagemId)
          .catch(() => undefined);
      }
      await this.carregarImagensBlocos();
      if (this.blocoComEditorId() === bloco.id) this.fecharEditorAcao();
    } catch (erro) {
      this.erroBloco.set(
        this.obterMensagemErro(erro, 'Não foi possível excluir o bloco.'),
      );
    }
  }

  selecionarImagemBloco(entrada: HTMLInputElement): void {
    const arquivo = entrada.files?.[0] ?? null;
    entrada.value = '';

    if (!arquivo) return;
    if (!arquivo.type.startsWith('image/')) {
      this.erroBloco.set('Selecione um arquivo de imagem válido.');
      return;
    }

    this.liberarUrlImagemLocal();
    this.urlImagemBlocoLocal = URL.createObjectURL(arquivo);
    this.arquivoImagemBloco.set(arquivo);
    this.urlImagemBloco.set(this.urlImagemBlocoLocal);
    this.removerImagemBloco.set(false);
    this.erroBloco.set(null);
  }

  retirarImagemBloco(): void {
    this.liberarUrlImagemLocal();
    this.arquivoImagemBloco.set(null);
    this.urlImagemBloco.set(null);
    this.removerImagemBloco.set(true);
  }

  imagemDoBloco(bloco: BlocoExperienciaImersiva): string | null {
    return this.imagensBlocos()[bloco.id] ?? null;
  }

  private async carregarImagensBlocos(): Promise<void> {
    const experienciaId = this.experienciaSelecionadaId();
    if (!experienciaId) {
      this.imagensBlocos.set({});
      return;
    }

    const recursosPorBloco = this.dadosBlocos
      .blocos()
      .map((bloco) => ({
        blocoId: bloco.id,
        recursoId: this.extrairRecursoImagem(bloco.imagem_caminho),
      }))
      .filter(
        (item): item is { blocoId: string; recursoId: string } =>
          Boolean(item.recursoId),
      );

    const urlsPorRecurso = new Map<string, string>();
    await Promise.all(
      [...new Set(recursosPorBloco.map((item) => item.recursoId))].map(
        async (recursoId) => {
          try {
            urlsPorRecurso.set(
              recursoId,
              await this.dadosRecursos.obterUrlReproducao(
                experienciaId,
                recursoId,
              ),
            );
          } catch {
            // Uma imagem ausente não impede a edição do restante da experiência.
          }
        },
      ),
    );

    const imagens: Record<string, string> = {};
    for (const { blocoId, recursoId } of recursosPorBloco) {
      const url = urlsPorRecurso.get(recursoId);
      if (url) imagens[blocoId] = url;
    }
    this.imagensBlocos.set(imagens);
  }

  private extrairRecursoImagem(caminho: string | null): string | null {
    const correspondencia = caminho?.match(
      /^recurso:([0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$/i,
    );
    return correspondencia?.[1] ?? null;
  }

  private limparImagemEditor(): void {
    this.liberarUrlImagemLocal();
    this.arquivoImagemBloco.set(null);
    this.urlImagemBloco.set(null);
    this.removerImagemBloco.set(false);
  }

  private liberarUrlImagemLocal(): void {
    if (this.urlImagemBlocoLocal) {
      URL.revokeObjectURL(this.urlImagemBlocoLocal);
      this.urlImagemBlocoLocal = null;
    }
  }

  async moverBloco(blocoId: string, direcao: -1 | 1): Promise<void> {
    try {
      await this.dadosBlocos.mover(
        this.experienciaSelecionadaId(),
        blocoId,
        direcao,
      );
    } catch (erro) {
      this.erroBloco.set(
        this.obterMensagemErro(erro, 'Não foi possível mover o bloco.'),
      );
    }
  }

  async enviarRecurso(entradaArquivo: HTMLInputElement): Promise<void> {
    const arquivo = entradaArquivo.files?.[0] ?? null;

    if (this.formularioRecurso.invalid || !arquivo) {
      this.formularioRecurso.markAllAsTouched();
      this.erroRecurso.set(arquivo ? null : 'Selecione um arquivo de áudio.');
      return;
    }

    this.enviandoRecurso.set(true);
    this.erroRecurso.set(null);

    try {
      await this.dadosRecursos.enviar({
        experiencia_id: this.experienciaSelecionadaId(),
        nome: this.formularioRecurso.controls.nome.value,
        arquivo,
      });
      this.formularioRecurso.reset({ nome: '' });
      entradaArquivo.value = '';
    } catch (erro) {
      this.erroRecurso.set(
        this.obterMensagemErro(erro, 'Não foi possível enviar o recurso sonoro.'),
      );
    } finally {
      this.enviandoRecurso.set(false);
    }
  }

  async excluirRecurso(recurso: RecursoExperienciaImersiva): Promise<void> {
    if (!this.confirmar(`Excluir o recurso “${recurso.nome}”?`)) return;

    this.excluindoRecursoId.set(recurso.id);
    this.erroRecurso.set(null);

    try {
      await this.dadosRecursos.excluir(
        this.experienciaSelecionadaId(),
        recurso.id,
      );

      if (this.recursoAcaoId() === recurso.id) this.fecharEditorAcao();
    } catch (erro) {
      this.erroRecurso.set(
        this.obterMensagemErro(erro, 'Não foi possível excluir o recurso.'),
      );
    } finally {
      this.excluindoRecursoId.set(null);
    }
  }

  async alternarSelecaoVersao(): Promise<void> {
    const abrir = !this.selecionandoVersao();
    this.selecionandoVersao.set(abrir);

    if (abrir && this.dadosRecursos.versoesDisponiveis().length === 0) {
      await this.dadosRecursos.listarVersoesDisponiveis();
    }
  }

  async vincularVersao(
    versao: VersaoDisponivelExperienciaImersiva,
  ): Promise<void> {
    if (this.versaoJaVinculada(versao.id)) return;

    this.vinculandoVersaoId.set(versao.id);
    this.erroRecurso.set(null);

    try {
      await this.dadosRecursos.vincularVersao(
        this.experienciaSelecionadaId(),
        {
          nome: versao.versao,
          versao_id: versao.id,
        },
      );
    } catch (erro) {
      this.erroRecurso.set(
        this.obterMensagemErro(
          erro,
          'Não foi possível vincular a versão.',
        ),
      );
    } finally {
      this.vinculandoVersaoId.set(null);
    }
  }

  versaoJaVinculada(versaoId: string): boolean {
    return this.dadosRecursos
      .recursos()
      .some((recurso) => recurso.versao_id === versaoId);
  }

  acoesDoBloco(blocoId: string): AcaoBlocoExperienciaImersiva[] {
    return this.dadosAcoes.acoes().filter((acao) => acao.bloco_id === blocoId);
  }

  async alternarPreviaCena(blocoId: string): Promise<void> {
    if (this.preparandoPrevia()) return;

    if (this.cenaEmPreviaId() === blocoId) {
      this.pararPrevia();
      return;
    }

    this.preparandoPrevia.set(true);
    this.cenaPreviaAlvoId.set(blocoId);
    this.erroPrevia.set(null);

    try {
      if (this.recursosPrevia.length === 0) {
        await this.prepararRecursosPrevia();
      }

      if (this.recursosPrevia.length === 0) {
        throw new Error('Nenhum áudio configurado para testar.');
      }

      await this.motorPrevia.iniciar(this.recursosPrevia);
      this.motorPrevia.pararTodos();
      this.transicaoPreviaAtual = 'corte';
      this.duracaoCrossfadePreviaAtual = 0;
      this.executarCenaPrevia(blocoId);
    } catch (erro) {
      this.pararPrevia();
      this.cenaPreviaAlvoId.set(blocoId);
      this.erroPrevia.set(
        this.obterMensagemErro(erro, 'Não foi possível testar esta cena.'),
      );
    } finally {
      this.preparandoPrevia.set(false);
    }
  }

  avancarPrevia(): void {
    const cenaAtualId = this.cenaEmPreviaId();
    if (!cenaAtualId) return;

    const blocos = [...this.dadosBlocos.blocos()].sort(
      (primeiro, segundo) => primeiro.ordem - segundo.ordem,
    );
    const indiceAtual = blocos.findIndex((bloco) => bloco.id === cenaAtualId);
    const proxima = blocos[indiceAtual + 1];

    if (proxima) this.executarCenaPrevia(proxima.id);
    else this.pararPrevia();
  }

  temProximaCena(blocoId: string): boolean {
    const blocos = [...this.dadosBlocos.blocos()].sort(
      (primeiro, segundo) => primeiro.ordem - segundo.ordem,
    );
    const indice = blocos.findIndex((bloco) => bloco.id === blocoId);
    return indice >= 0 && indice < blocos.length - 1;
  }

  pararPrevia(): void {
    this.motorPrevia.pararTodos();
    this.cenaEmPreviaId.set(null);
    this.cenaPreviaAlvoId.set(null);
    this.transicaoPreviaAtual = 'corte';
    this.duracaoCrossfadePreviaAtual = 0;
  }

  async abrirNovaAcao(blocoId: string): Promise<void> {
    this.pararPrevia();
    this.cancelarEdicaoTransicao();
    this.blocoComEditorId.set(blocoId);
    this.acaoEditandoId.set(null);
    this.redefinirEditorAcao();

    const primeiroRecurso = this.dadosRecursos.recursos()[0];
    if (primeiroRecurso) await this.selecionarRecurso(primeiroRecurso.id);
  }

  async editarAcao(acao: AcaoBlocoExperienciaImersiva): Promise<void> {
    this.pararPrevia();
    this.cancelarEdicaoTransicao();
    this.blocoComEditorId.set(acao.bloco_id);
    this.acaoEditandoId.set(acao.id);
    this.modoAudio.set(this.modoValido(acao.acao));
    this.transicaoAudio.set(
      this.transicaoValida(
        this.parametroTexto(acao.parametros, 'transicao_saida'),
      ),
    );
    this.inicioTrecho.set(
      this.parametroNumero(acao.parametros, 'inicio_trecho_segundos') ?? 0,
    );
    this.fimTrecho.set(
      this.parametroNumero(acao.parametros, 'fim_trecho_segundos') ?? 0,
    );
    const fade =
      this.parametroNumero(acao.parametros, 'fade_in_segundos') ?? 0;
    this.fadeInAtivo.set(fade > 0);
    this.duracaoFadeIn.set(fade || 2);
    this.duracaoCrossfade.set(
      this.parametroNumero(
        acao.parametros,
        'duracao_crossfade_segundos',
      ) ?? 2,
    );

    if (acao.recurso_id) await this.selecionarRecurso(acao.recurso_id, true);
  }

  fecharEditorAcao(): void {
    const audio = this.reprodutor()?.nativeElement;
    audio?.pause();
    this.encerrarAudioEditor();
    this.cargaFormaOndaAtual += 1;
    this.blocoComEditorId.set(null);
    this.acaoEditandoId.set(null);
    this.urlAudio.set(null);
    this.audioTocando.set(false);
    this.testandoTrecho.set(false);
    this.formaOnda.set([]);
    this.picosFormaOndaCompletos = [];
    this.carregandoFormaOnda.set(false);
    this.erroFormaOnda.set(null);
    this.marcadorArrastando.set(null);
    this.inicioJanelaFormaOnda.set(0);
    this.fimJanelaFormaOnda.set(0);
    this.waveformAmpliada.set(false);
    this.erroAcao.set(null);
  }

  async selecionarRecurso(
    recursoId: string,
    preservarTrecho = false,
  ): Promise<void> {
    const audio = this.reprodutor()?.nativeElement;
    audio?.pause();
    this.encerrarAudioEditor();
    this.recursoAcaoId.set(recursoId);
    this.carregandoAudio.set(true);
    this.erroAcao.set(null);
    this.urlAudio.set(null);
    this.formaOnda.set([]);
    this.picosFormaOndaCompletos = [];
    this.erroFormaOnda.set(null);
    this.inicioJanelaFormaOnda.set(0);
    this.fimJanelaFormaOnda.set(0);
    this.waveformAmpliada.set(false);

    if (!preservarTrecho) {
      this.inicioTrecho.set(0);
      this.fimTrecho.set(0);
    }

    try {
      const url = await this.dadosRecursos.obterUrlReproducao(
        this.experienciaSelecionadaId(),
        recursoId,
      );
      this.urlAudio.set(url);
      void this.carregarFormaOnda(url);
    } catch (erro) {
      this.erroAcao.set(
        this.obterMensagemErro(erro, 'Não foi possível abrir o áudio.'),
      );
    } finally {
      this.carregandoAudio.set(false);
    }
  }

  atualizarMetadados(evento: Event): void {
    const audio = evento.currentTarget as HTMLAudioElement;
    const duracao = Number.isFinite(audio.duration) ? audio.duration : 0;
    this.duracaoAudio.set(duracao);
    if (!this.waveformAmpliada()) {
      this.inicioJanelaFormaOnda.set(0);
      this.fimJanelaFormaOnda.set(duracao);
      this.atualizarFormaOndaVisivel();
    }
    if (
      this.fimTrecho() <= this.inicioTrecho() ||
      this.fimTrecho() > duracao
    ) {
      this.fimTrecho.set(duracao);
    }
  }

  atualizarTempo(evento: Event): void {
    const audio = evento.currentTarget as HTMLAudioElement;
    if (!this.testandoTrecho()) this.tempoAtual.set(audio.currentTime);
  }

  buscarAudio(evento: Event): void {
    const audio = this.reprodutor()?.nativeElement;
    if (!audio) return;
    const valor = Number((evento.target as HTMLInputElement).value);
    audio.currentTime = valor;
    this.tempoAtual.set(valor);
  }

  buscarNaFormaOnda(
    evento: PointerEvent,
    area: HTMLElement,
  ): void {
    if (this.marcadorArrastando()) return;
    this.definirPosicaoAudio(
      this.tempoPelaPosicao(evento.clientX, area),
    );
  }

  iniciarArrasteMarcador(
    evento: PointerEvent,
    marcador: MarcadorTrecho,
    area: HTMLElement,
  ): void {
    evento.preventDefault();
    evento.stopPropagation();
    this.marcadorArrastando.set(marcador);
    area.setPointerCapture(evento.pointerId);
    this.atualizarMarcadorPelaPosicao(evento.clientX, area);
  }

  arrastarMarcador(
    evento: PointerEvent,
    area: HTMLElement,
  ): void {
    if (!this.marcadorArrastando()) return;
    this.atualizarMarcadorPelaPosicao(evento.clientX, area);
  }

  finalizarArrasteMarcador(
    evento: PointerEvent,
    area: HTMLElement,
  ): void {
    if (!this.marcadorArrastando()) return;
    this.atualizarMarcadorPelaPosicao(evento.clientX, area);
    this.marcadorArrastando.set(null);

    if (area.hasPointerCapture(evento.pointerId)) {
      area.releasePointerCapture(evento.pointerId);
    }
  }

  ajustarMarcadorTeclado(
    evento: KeyboardEvent,
    marcador: MarcadorTrecho,
  ): void {
    if (evento.key !== 'ArrowLeft' && evento.key !== 'ArrowRight') return;

    evento.preventDefault();
    const direcao = evento.key === 'ArrowRight' ? 1 : -1;
    const passo = evento.shiftKey ? 0.1 : 0.01;
    const atual = marcador === 'inicio' ? this.inicioTrecho() : this.fimTrecho();
    this.definirMarcador(marcador, atual + direcao * passo);
  }

  percentualTempo(segundos: number): number {
    const inicio = this.inicioJanelaFormaOnda();
    const fim = this.fimJanelaFormaOnda() || this.duracaoAudio();
    const duracao = fim - inicio;
    if (duracao <= 0) return 0;
    return (this.limitar(segundos, inicio, fim) - inicio) / duracao * 100;
  }

  larguraSelecao(): number {
    return Math.max(
      0,
      this.percentualTempo(this.fimTrecho()) -
        this.percentualTempo(this.inicioTrecho()),
    );
  }

  tempoNaJanela(segundos: number): boolean {
    return segundos >= this.inicioJanelaFormaOnda() &&
      segundos <= (this.fimJanelaFormaOnda() || this.duracaoAudio());
  }

  duracaoTrecho(): number {
    return Math.max(0, this.fimTrecho() - this.inicioTrecho());
  }

  podeAmpliarRecorte(): boolean {
    const duracao = this.duracaoAudio();
    const trecho = this.duracaoTrecho();
    return duracao > 0 && trecho > 0 && trecho < duracao * 0.9;
  }

  ampliarRecorte(): void {
    if (!this.podeAmpliarRecorte()) return;

    const duracaoTotal = this.duracaoAudio();
    const duracaoJanela = Math.min(
      duracaoTotal,
      Math.max(0.5, this.duracaoTrecho() * 1.5),
    );
    const centro = (this.inicioTrecho() + this.fimTrecho()) / 2;
    let inicio = centro - duracaoJanela / 2;
    let fim = centro + duracaoJanela / 2;

    if (inicio < 0) {
      fim -= inicio;
      inicio = 0;
    }
    if (fim > duracaoTotal) {
      inicio -= fim - duracaoTotal;
      fim = duracaoTotal;
    }

    this.inicioJanelaFormaOnda.set(Math.max(0, inicio));
    this.fimJanelaFormaOnda.set(fim);
    this.waveformAmpliada.set(true);
    this.atualizarFormaOndaVisivel();
  }

  mostrarFaixaInteira(): void {
    this.inicioJanelaFormaOnda.set(0);
    this.fimJanelaFormaOnda.set(this.duracaoAudio());
    this.waveformAmpliada.set(false);
    this.atualizarFormaOndaVisivel();
  }

  ajustarMarcador(
    marcador: MarcadorTrecho,
    deltaSegundos: number,
  ): void {
    const atual = marcador === 'inicio' ? this.inicioTrecho() : this.fimTrecho();
    this.definirMarcador(marcador, atual + deltaSegundos);
  }

  async alternarAudio(): Promise<void> {
    const audio = this.reprodutor()?.nativeElement;
    if (!audio) return;

    if (this.testandoTrecho()) {
      this.pararTesteTrecho();
      return;
    }

    if (audio.paused) await audio.play();
    else {
      audio.pause();
    }
  }

  marcarInicio(): void {
    const atual = this.reprodutor()?.nativeElement.currentTime ?? 0;
    this.definirMarcador('inicio', atual);
  }

  marcarFim(): void {
    const atual = this.reprodutor()?.nativeElement.currentTime ?? 0;
    this.definirMarcador('fim', atual);
  }

  async testarTrecho(): Promise<void> {
    const audio = this.reprodutor()?.nativeElement;
    const contexto = this.contextoAudioEditor;
    const buffer = this.bufferAudioEditor;

    if (
      !audio ||
      !contexto ||
      !buffer ||
      this.fimTrecho() <= this.inicioTrecho()
    ) {
      return;
    }

    if (this.testandoTrecho()) {
      this.pararTesteTrecho();
      return;
    }

    audio.pause();

    try {
      if (contexto.state === 'suspended') await contexto.resume();

      const inicio = this.inicioTrecho();
      const fim = this.fimTrecho();
      const fonte = contexto.createBufferSource();
      fonte.buffer = buffer;
      fonte.loop = this.modoAudio() === 'loop';
      fonte.loopStart = inicio;
      fonte.loopEnd = fim;
      fonte.connect(contexto.destination);

      this.fonteTesteTrecho = fonte;
      this.tempoBaseTeste = inicio;
      this.contextoBaseTeste = contexto.currentTime;
      this.tempoAtual.set(inicio);
      this.testandoTrecho.set(true);

      fonte.addEventListener(
        'ended',
        () => {
          if (this.fonteTesteTrecho === fonte) {
            this.finalizarTesteTrecho();
          }
        },
        { once: true },
      );

      if (fonte.loop) fonte.start(0, inicio);
      else fonte.start(0, inicio, fim - inicio);

      this.atualizarTempoTeste();
    } catch (erro) {
      this.pararTesteTrecho();
      this.erroAcao.set(
        this.obterMensagemErro(erro, 'Não foi possível testar o trecho.'),
      );
    }
  }

  definirModo(modo: ModoAudio): void {
    if (this.testandoTrecho()) this.pararTesteTrecho();
    this.modoAudio.set(modo);
  }

  ajustarDuracaoCrossfade(delta: number): void {
    this.duracaoCrossfade.set(
      Math.max(0.1, Math.round((this.duracaoCrossfade() + delta) * 10) / 10),
    );
  }

  ajustarDuracaoFadeIn(delta: number): void {
    this.duracaoFadeIn.set(
      Math.max(0.1, Math.round((this.duracaoFadeIn() + delta) * 10) / 10),
    );
  }

  abrirEdicaoTransicao(blocoId: string): void {
    const acao = this.acaoPrincipalDoBloco(blocoId);
    if (!acao) return;

    this.pararPrevia();
    this.fecharEditorAcao();
    this.blocoEditandoTransicaoId.set(blocoId);
    this.erroTransicao.set(null);
    this.transicaoAudio.set(
      this.transicaoValida(
        this.parametroTexto(acao.parametros, 'transicao_saida'),
      ),
    );
    this.duracaoCrossfade.set(
      this.parametroNumero(
        acao.parametros,
        'duracao_crossfade_segundos',
      ) ?? 2,
    );
  }

  cancelarEdicaoTransicao(): void {
    this.blocoEditandoTransicaoId.set(null);
    this.erroTransicao.set(null);
  }

  async salvarTransicaoCena(): Promise<void> {
    const blocoId = this.blocoEditandoTransicaoId();
    const acao = blocoId ? this.acaoPrincipalDoBloco(blocoId) : null;
    if (!blocoId || !acao) return;

    this.salvandoTransicao.set(true);
    this.erroTransicao.set(null);

    try {
      const parametrosAtuais = this.parametrosComoObjeto(acao.parametros);
      const parametros: Json = {
        ...parametrosAtuais,
        transicao_saida: this.transicaoAudio(),
        duracao_crossfade_segundos:
          this.transicaoAudio() === 'crossfade'
            ? this.duracaoCrossfade()
            : 0,
      };

      await this.dadosAcoes.atualizar(
        this.experienciaSelecionadaId(),
        blocoId,
        acao.id,
        {
          recurso_id: acao.recurso_id,
          ordem: acao.ordem,
          acao: acao.acao,
          inicio_segundos: acao.inicio_segundos,
          parametros,
        },
      );

      await this.encerrarPrevia();
      void this.prepararRecursosPrevia().catch(() => undefined);
      this.cancelarEdicaoTransicao();
    } catch (erro) {
      this.erroTransicao.set(
        this.obterMensagemErro(
          erro,
          'Não foi possível salvar a passagem entre as cenas.',
        ),
      );
    } finally {
      this.salvandoTransicao.set(false);
    }
  }

  async salvarAcao(): Promise<void> {
    const blocoId = this.blocoComEditorId();
    const recursoId = this.recursoAcaoId();
    const experienciaId = this.experienciaSelecionadaId();

    if (!blocoId || !recursoId) {
      this.erroAcao.set('Escolha o áudio desta ação.');
      return;
    }

    if (this.fimTrecho() <= this.inicioTrecho()) {
      this.erroAcao.set('Marque um trecho válido no áudio.');
      return;
    }

    this.salvandoAcao.set(true);
    this.erroAcao.set(null);

    try {
      const existentes = this.acoesDoBloco(blocoId);
      const acaoExistente = existentes.find(
        (acao) => acao.id === this.acaoEditandoId(),
      );
      const parametros: Json = {
        inicio_trecho_segundos: this.inicioTrecho(),
        fim_trecho_segundos: this.fimTrecho(),
        transicao_saida: this.transicaoAudio(),
        fade_in_segundos: this.fadeInAtivo() ? this.duracaoFadeIn() : 0,
        duracao_crossfade_segundos:
          this.transicaoAudio() === 'crossfade'
            ? this.duracaoCrossfade()
            : 0,
      };

      const dados = {
        recurso_id: recursoId,
        ordem:
          acaoExistente?.ordem ??
          existentes.reduce(
            (maior, acao) => Math.max(maior, acao.ordem),
            0,
          ) + 1,
        acao: this.modoAudio(),
        inicio_segundos: 0,
        parametros,
      };

      if (acaoExistente) {
        await this.dadosAcoes.atualizar(
          experienciaId,
          blocoId,
          acaoExistente.id,
          dados,
        );
      } else {
        await this.dadosAcoes.cadastrar(experienciaId, blocoId, dados);
      }

      await this.encerrarPrevia();
      void this.prepararRecursosPrevia().catch(() => undefined);
      this.fecharEditorAcao();
    } catch (erro) {
      this.erroAcao.set(
        this.obterMensagemErro(erro, 'Não foi possível salvar a ação.'),
      );
    } finally {
      this.salvandoAcao.set(false);
    }
  }

  async excluirAcao(acao: AcaoBlocoExperienciaImersiva): Promise<void> {
    if (!this.confirmar('Excluir esta ação sonora?')) return;

    try {
      await this.dadosAcoes.excluir(
        this.experienciaSelecionadaId(),
        acao.bloco_id,
        acao.id,
      );
      await this.encerrarPrevia();
      void this.prepararRecursosPrevia().catch(() => undefined);
    } catch (erro) {
      this.erroAcao.set(
        this.obterMensagemErro(erro, 'Não foi possível excluir a ação.'),
      );
    }
  }

  recursoNome(recursoId: string | null): string {
    return (
      this.dadosRecursos.recursos().find((item) => item.id === recursoId)
        ?.nome ?? 'Áudio indisponível'
    );
  }

  rotuloModo(acao: string): string {
    if (acao === 'loop') return 'Loop';
    if (acao === 'one-shot') return 'One-shot';
    return 'Tocar uma vez';
  }

  rotuloTransicao(parametros: Json): string {
    const transicao = this.transicaoValida(
      this.parametroTexto(parametros, 'transicao_saida'),
    );
    return {
      'terminar-loop': 'fecha o ciclo',
      corte: 'corte direto',
      crossfade: 'crossfade',
      silencio: 'termina em silêncio',
    }[transicao];
  }

  rotuloTransicaoCena(blocoId: string): string {
    const acao = this.acaoPrincipalDoBloco(blocoId);
    return acao ? this.rotuloTransicao(acao.parametros) : 'corte direto';
  }

  detalheTransicaoCena(blocoId: string): string | null {
    const acao = this.acaoPrincipalDoBloco(blocoId);
    if (!acao) return null;

    const transicao = this.transicaoValida(
      this.parametroTexto(acao.parametros, 'transicao_saida'),
    );
    if (transicao !== 'crossfade') return null;

    const duracao =
      this.parametroNumero(
        acao.parametros,
        'duracao_crossfade_segundos',
      ) ?? 0;
    return `${duracao.toFixed(1)}s`;
  }

  trechoAcao(acao: AcaoBlocoExperienciaImersiva): string {
    const inicio =
      this.parametroNumero(acao.parametros, 'inicio_trecho_segundos') ?? 0;
    const fim = this.parametroNumero(
      acao.parametros,
      'fim_trecho_segundos',
    );
    return fim === null
      ? `${this.formatarTempo(inicio)} → fim`
      : `${this.formatarTempo(inicio)} → ${this.formatarTempo(fim)}`;
  }

  formatarTempo(segundos: number): string {
    if (!Number.isFinite(segundos)) return '0:00.0';
    const minutos = Math.floor(segundos / 60);
    const restante = (segundos % 60).toFixed(1).padStart(4, '0');
    return `${minutos}:${restante}`;
  }

  formatarTempoPreciso(segundos: number): string {
    if (!Number.isFinite(segundos)) return '0:00.00';
    const minutos = Math.floor(segundos / 60);
    const restante = (segundos % 60).toFixed(2).padStart(5, '0');
    return `${minutos}:${restante}`;
  }

  arquivoSelecionado(recurso: RecursoExperienciaImersiva): boolean {
    return this.recursoAcaoId() === recurso.id;
  }

  private redefinirEditorAcao(): void {
    this.encerrarAudioEditor();
    this.recursoAcaoId.set(null);
    this.modoAudio.set('loop');
    this.transicaoAudio.set('terminar-loop');
    this.fadeInAtivo.set(false);
    this.duracaoFadeIn.set(2);
    this.duracaoCrossfade.set(2);
    this.inicioTrecho.set(0);
    this.fimTrecho.set(0);
    this.tempoAtual.set(0);
    this.duracaoAudio.set(0);
    this.urlAudio.set(null);
    this.formaOnda.set([]);
    this.picosFormaOndaCompletos = [];
    this.carregandoFormaOnda.set(false);
    this.erroFormaOnda.set(null);
    this.marcadorArrastando.set(null);
    this.inicioJanelaFormaOnda.set(0);
    this.fimJanelaFormaOnda.set(0);
    this.waveformAmpliada.set(false);
    this.erroAcao.set(null);
  }

  private async carregarFormaOnda(url: string): Promise<void> {
    if (typeof window === 'undefined') return;

    const carga = ++this.cargaFormaOndaAtual;
    this.carregandoFormaOnda.set(true);
    this.erroFormaOnda.set(null);

    let contexto: AudioContext | null = null;

    try {
      const resposta = await fetch(url);
      if (!resposta.ok) throw new Error('Áudio indisponível.');

      const dados = await resposta.arrayBuffer();
      contexto = new AudioContext();
      const audio = await contexto.decodeAudioData(dados);
      const picos = this.extrairPicos(audio, 2400);

      if (carga === this.cargaFormaOndaAtual) {
        this.encerrarAudioEditor();
        this.contextoAudioEditor = contexto;
        this.bufferAudioEditor = audio;
        contexto = null;
        this.picosFormaOndaCompletos = picos;
        if (this.duracaoAudio() <= 0) {
          this.duracaoAudio.set(audio.duration);
          this.fimTrecho.set(audio.duration);
          this.fimJanelaFormaOnda.set(audio.duration);
        }
        this.atualizarFormaOndaVisivel();
      }
    } catch {
      if (carga === this.cargaFormaOndaAtual) {
        this.erroFormaOnda.set(
          'A waveform não pôde ser desenhada, mas o áudio continua disponível.',
        );
      }
    } finally {
      await contexto?.close().catch(() => undefined);
      if (carga === this.cargaFormaOndaAtual) {
        this.carregandoFormaOnda.set(false);
      }
    }
  }

  private extrairPicos(audio: AudioBuffer, quantidade: number): number[] {
    const tamanhoFaixa = Math.max(1, Math.floor(audio.length / quantidade));
    const picos = Array.from({ length: quantidade }, () => 0);

    for (let canal = 0; canal < audio.numberOfChannels; canal += 1) {
      const amostras = audio.getChannelData(canal);

      for (let indice = 0; indice < quantidade; indice += 1) {
        const inicio = indice * tamanhoFaixa;
        const fim = Math.min(inicio + tamanhoFaixa, amostras.length);
        const passo = Math.max(1, Math.floor((fim - inicio) / 1000));
        let pico = 0;

        for (let amostra = inicio; amostra < fim; amostra += passo) {
          pico = Math.max(pico, Math.abs(amostras[amostra]));
        }

        picos[indice] = Math.max(picos[indice], pico);
      }
    }

    const maiorPico = Math.max(...picos, 0.01);
    return picos.map((pico) => Math.max(0.06, pico / maiorPico) * 100);
  }

  private atualizarMarcadorPelaPosicao(
    clientX: number,
    area: HTMLElement,
  ): void {
    const marcador = this.marcadorArrastando();
    if (!marcador) return;
    this.definirMarcador(marcador, this.tempoPelaPosicao(clientX, area));
  }

  private definirMarcador(
    marcador: MarcadorTrecho,
    segundos: number,
  ): void {
    const duracao = this.duracaoAudio();
    if (duracao <= 0) return;

    const distanciaMinima = Math.min(0.01, duracao);
    let valor: number;

    if (marcador === 'inicio') {
      valor = this.limitar(
        segundos,
        0,
        Math.max(0, this.fimTrecho() - distanciaMinima),
      );
      this.inicioTrecho.set(valor);
    } else {
      valor = this.limitar(
        segundos,
        Math.min(duracao, this.inicioTrecho() + distanciaMinima),
        duracao,
      );
      this.fimTrecho.set(valor);
    }

    this.definirPosicaoAudio(valor);
    this.atualizarLimitesTesteTrecho();
  }

  private atualizarLimitesTesteTrecho(): void {
    const fonte = this.fonteTesteTrecho;
    const contexto = this.contextoAudioEditor;

    if (!fonte || !contexto || !fonte.loop) return;

    fonte.loopStart = this.inicioTrecho();
    fonte.loopEnd = this.fimTrecho();
    this.tempoBaseTeste = this.limitar(
      this.tempoAtual(),
      this.inicioTrecho(),
      this.fimTrecho(),
    );
    this.contextoBaseTeste = contexto.currentTime;
  }

  private atualizarTempoTeste(): void {
    const contexto = this.contextoAudioEditor;
    const fonte = this.fonteTesteTrecho;

    if (!contexto || !fonte || !this.testandoTrecho()) return;

    const inicio = this.inicioTrecho();
    const fim = this.fimTrecho();
    const duracao = fim - inicio;
    const decorrido = Math.max(
      0,
      contexto.currentTime - this.contextoBaseTeste,
    );
    const bruto = this.tempoBaseTeste + decorrido;
    const atual = fonte.loop && duracao > 0
      ? inicio + ((bruto - inicio) % duracao + duracao) % duracao
      : Math.min(fim, bruto);

    this.tempoAtual.set(atual);
    this.quadroTempoTeste = window.requestAnimationFrame(
      () => this.atualizarTempoTeste(),
    );
  }

  private pararTesteTrecho(): void {
    const fonte = this.fonteTesteTrecho;
    this.fonteTesteTrecho = null;

    if (this.quadroTempoTeste !== null && typeof window !== 'undefined') {
      window.cancelAnimationFrame(this.quadroTempoTeste);
      this.quadroTempoTeste = null;
    }

    if (fonte) {
      try {
        fonte.stop();
      } catch {
        // A fonte já terminou.
      }
      fonte.disconnect();
    }

    this.testandoTrecho.set(false);
  }

  private finalizarTesteTrecho(): void {
    const fonte = this.fonteTesteTrecho;
    this.fonteTesteTrecho = null;
    fonte?.disconnect();

    if (this.quadroTempoTeste !== null && typeof window !== 'undefined') {
      window.cancelAnimationFrame(this.quadroTempoTeste);
      this.quadroTempoTeste = null;
    }

    this.testandoTrecho.set(false);
  }

  private encerrarAudioEditor(): void {
    this.pararTesteTrecho();
    this.bufferAudioEditor = null;

    const contexto = this.contextoAudioEditor;
    this.contextoAudioEditor = null;

    if (contexto && contexto.state !== 'closed') {
      void contexto.close().catch(() => undefined);
    }
  }

  private definirPosicaoAudio(segundos: number): void {
    const valor = this.limitar(segundos, 0, this.duracaoAudio());
    const audio = this.reprodutor()?.nativeElement;
    if (audio) audio.currentTime = valor;
    this.tempoAtual.set(valor);
  }

  private tempoPelaPosicao(clientX: number, area: HTMLElement): number {
    const limites = area.getBoundingClientRect();
    if (limites.width <= 0) return 0;
    const proporcao = this.limitar(
      (clientX - limites.left) / limites.width,
      0,
      1,
    );
    const inicio = this.inicioJanelaFormaOnda();
    const fim = this.fimJanelaFormaOnda() || this.duracaoAudio();
    return inicio + proporcao * (fim - inicio);
  }

  private atualizarFormaOndaVisivel(): void {
    const picos = this.picosFormaOndaCompletos;
    const duracao = this.duracaoAudio();

    if (picos.length === 0 || duracao <= 0) {
      this.formaOnda.set([]);
      return;
    }

    const inicio = this.limitar(this.inicioJanelaFormaOnda(), 0, duracao);
    const fim = this.limitar(
      this.fimJanelaFormaOnda() || duracao,
      inicio,
      duracao,
    );
    const indiceInicial = Math.floor(inicio / duracao * picos.length);
    const indiceFinal = Math.max(
      indiceInicial + 1,
      Math.ceil(fim / duracao * picos.length),
    );
    const trecho = picos.slice(indiceInicial, indiceFinal);
    const quantidadeVisivel = Math.min(240, trecho.length);
    const resultado: number[] = [];

    for (let indice = 0; indice < quantidadeVisivel; indice += 1) {
      const inicioGrupo = Math.floor(indice / quantidadeVisivel * trecho.length);
      const fimGrupo = Math.max(
        inicioGrupo + 1,
        Math.ceil((indice + 1) / quantidadeVisivel * trecho.length),
      );
      resultado.push(Math.max(...trecho.slice(inicioGrupo, fimGrupo)));
    }

    this.formaOnda.set(resultado);
  }

  private limitar(valor: number, minimo: number, maximo: number): number {
    return Math.min(maximo, Math.max(minimo, valor));
  }

  private acaoPrincipalDoBloco(
    blocoId: string,
  ): AcaoBlocoExperienciaImersiva | null {
    return [...this.acoesDoBloco(blocoId)].sort(
      (primeira, segunda) => primeira.ordem - segunda.ordem,
    )[0] ?? null;
  }

  private parametrosComoObjeto(
    parametros: Json,
  ): Record<string, Json | undefined> {
    if (
      !parametros ||
      Array.isArray(parametros) ||
      typeof parametros !== 'object'
    ) {
      return {};
    }

    return parametros;
  }

  private async prepararRecursosPrevia(): Promise<void> {
    const carga = ++this.cargaRecursosPreviaAtual;
    this.preparandoRecursosPrevia.set(true);
    const idsUsados = [
      ...new Set(
        this.dadosAcoes
          .acoes()
          .map((acao) => acao.recurso_id)
          .filter((id): id is string => Boolean(id)),
      ),
    ];

    if (idsUsados.length === 0) {
      this.recursosPrevia = [];
      this.preparandoRecursosPrevia.set(false);
      return;
    }

    const recursos = idsUsados.map((id) =>
      this.dadosRecursos.recursos().find((recurso) => recurso.id === id),
    );

    if (recursos.some((recurso) => !recurso)) {
      this.preparandoRecursosPrevia.set(false);
      throw new Error('Uma cena usa um áudio que não está mais disponível.');
    }

    try {
      const urls = await Promise.all(
        idsUsados.map((id) =>
          this.dadosRecursos.obterUrlReproducao(
            this.experienciaSelecionadaId(),
            id,
          ),
        ),
      );

      if (carga !== this.cargaRecursosPreviaAtual) return;

      this.recursosPrevia = recursos.map((recurso, indice) => ({
        id: recurso!.id,
        nome: recurso!.nome,
        versao_id: recurso!.versao_id,
        nome_arquivo: recurso!.nome_arquivo ?? recurso!.nome,
        tamanho_bytes: recurso!.tamanho_bytes ?? 0,
        tipo_mime: recurso!.tipo_mime,
        reproducao_url: urls[indice],
        reproducao_expira_em: new Date(
          Date.now() + 60 * 60 * 1000,
        ).toISOString(),
      }));
    } finally {
      if (carga === this.cargaRecursosPreviaAtual) {
        this.preparandoRecursosPrevia.set(false);
      }
    }
  }

  private executarCenaPrevia(blocoId: string): void {
    const bloco = this.dadosBlocos.blocos().find((item) => item.id === blocoId);
    if (!bloco) return;

    try {
      const acoes = this.acoesDoBloco(blocoId);
      const comandos: ComandoBlocoAudio[] = acoes
        .filter((acao) =>
          ['loop', 'tocar', 'one-shot'].includes(
            acao.acao.trim().toLocaleLowerCase(),
          ),
        )
        .map((acao) => {
          if (!acao.recurso_id) {
            throw new Error(`Uma ação da cena ${bloco.ordem} está sem áudio.`);
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

      this.motorPrevia.transicionar(
        comandos,
        this.transicaoPreviaAtual,
        this.duracaoCrossfadePreviaAtual,
      );
      this.cenaEmPreviaId.set(blocoId);

      const principal = acoes[0];
      this.transicaoPreviaAtual = principal
        ? this.transicaoValida(
            this.parametroTexto(principal.parametros, 'transicao_saida'),
          )
        : 'silencio';
      this.duracaoCrossfadePreviaAtual = principal
        ? this.parametroNumero(
            principal.parametros,
            'duracao_crossfade_segundos',
          ) ?? 0
        : 0;
      this.erroPrevia.set(null);
    } catch (erro) {
      this.pararPrevia();
      this.cenaPreviaAlvoId.set(blocoId);
      this.erroPrevia.set(
        this.obterMensagemErro(erro, 'Não foi possível executar esta cena.'),
      );
    }
  }

  private async encerrarPrevia(): Promise<void> {
    this.cargaRecursosPreviaAtual += 1;
    this.recursosPrevia = [];
    this.cenaEmPreviaId.set(null);
    this.cenaPreviaAlvoId.set(null);
    this.preparandoPrevia.set(false);
    this.preparandoRecursosPrevia.set(false);
    this.erroPrevia.set(null);
    this.transicaoPreviaAtual = 'corte';
    this.duracaoCrossfadePreviaAtual = 0;
    await this.motorPrevia.encerrar();
  }

  private modoValido(valor: string): ModoAudio {
    return valor === 'loop' || valor === 'one-shot' ? valor : 'tocar';
  }

  private transicaoValida(valor: string | null): TransicaoAudio {
    return valor === 'corte' ||
      valor === 'crossfade' ||
      valor === 'silencio'
      ? valor
      : 'terminar-loop';
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
    return typeof valor === 'number' && Number.isFinite(valor) ? valor : null;
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

  private confirmar(mensagem: string): boolean {
    return typeof window === 'undefined' || window.confirm(mensagem);
  }

  private obterMensagemErro(erro: unknown, mensagemPadrao: string): string {
    return typeof erro === 'object' && erro !== null && 'message' in erro
      ? String(erro.message)
      : mensagemPadrao;
  }
}
