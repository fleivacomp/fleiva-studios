import {
  Component,
  OnInit,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  DadosAlbuns,
  DadosProjetosArtisticos,
  type AlbumCompleto,
  type AlbumFaixaCompleta,
  type CadastroAlbum,
  type FaixaDisponivelAlbum,
  type ConfiguracaoPublicacaoAlbum,
} from '@fleiva-studios/shared-data-access';

@Component({
  selector: 'app-albuns',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './albuns.html',
  styleUrl: './albuns.scss',
})
export class Albuns implements OnInit {
  readonly dadosAlbuns = inject(DadosAlbuns);
  readonly dadosProjetos = inject(
    DadosProjetosArtisticos,
  );

  private readonly construtorFormulario =
    inject(FormBuilder);

  readonly formularioAberto = signal(false);
  readonly albumEditandoId = signal<string | null>(null);
  readonly albumAbertoId = signal<string | null>(null);
  readonly salvandoAlbum = signal(false);
  readonly excluindoAlbumId = signal<string | null>(null);
  readonly adicionandoFaixa = signal(false);
  readonly alterandoVersaoId = signal<string | null>(null);
  readonly removendoFaixaId = signal<string | null>(null);
  readonly ordenandoAlbumId = signal<string | null>(null);
  readonly copiandoLinkId = signal<string | null>(null);
  readonly enviandoCapaId = signal<string | null>(null);
  readonly removendoCapaId = signal<string | null>(null);
  readonly erroOperacao = signal<string | null>(null);
  readonly mensagemOperacao = signal<string | null>(null);
  readonly publicandoAlbumId = signal<string | null>(null);

readonly despublicandoAlbumId =
  signal<string | null>(null);

  readonly albumAberto = computed(() => {
    const albumId = this.albumAbertoId();

    return (
      this.dadosAlbuns
        .albuns()
        .find((album) => album.id === albumId) ?? null
    );
  });

  readonly formularioAlbum =
    this.construtorFormulario.group({
      projeto_id:
        this.construtorFormulario.nonNullable.control('', [
          Validators.required,
        ]),
      nome:
        this.construtorFormulario.nonNullable.control('', [
          Validators.required,
        ]),
      observacoes:
        this.construtorFormulario.control<string | null>(
          null,
        ),
    });

  readonly formularioFaixa =
    this.construtorFormulario.group({
      faixa_id:
        this.construtorFormulario.nonNullable.control('', [
          Validators.required,
        ]),
    });
  readonly formularioPublicacao =
  this.construtorFormulario.nonNullable.group({
    tipo_publico: '',
    descricao_publica: '',
    reproducao_publica: false,
    download_publico: false,
    confirmacao: [
      false,
      Validators.requiredTrue,
    ],
  });
  constructor() {
  effect(() => {
    const album = this.albumAberto();

    this.formularioPublicacao.reset(
      {
        tipo_publico:
          album?.tipo_publico ?? '',
        descricao_publica:
          album?.descricao_publica ?? '',
        reproducao_publica:
          album?.reproducao_publica ?? false,
        download_publico:
          album?.download_publico ?? false,
        confirmacao: false,
      },
      {
        emitEvent: false,
      },
    );
  });
}


  ngOnInit(): void {
    void this.carregarDados();
  }

  async carregarDados(): Promise<void> {
    this.erroOperacao.set(null);

    await Promise.all([
      this.dadosAlbuns.listar(),
      this.dadosProjetos.listar(),
    ]);
  }

  abrirNovoAlbum(): void {
    this.albumEditandoId.set(null);
    this.formularioAberto.set(true);
    this.limparRetorno();

    this.formularioAlbum.reset({
      projeto_id: '',
      nome: '',
      observacoes: null,
    });

    this.rolarPara('formulario-album');
  }

  editarAlbum(album: AlbumCompleto): void {
    this.albumEditandoId.set(album.id);
    this.formularioAberto.set(true);
    this.limparRetorno();

    this.formularioAlbum.setValue({
      projeto_id: album.projeto_id,
      nome: album.nome,
      observacoes: album.observacoes,
    });

    this.rolarPara('formulario-album');
  }

  cancelarFormulario(): void {
    this.formularioAberto.set(false);
    this.albumEditandoId.set(null);

    this.formularioAlbum.reset({
      projeto_id: '',
      nome: '',
      observacoes: null,
    });
  }

  async salvarAlbum(): Promise<void> {
    if (this.formularioAlbum.invalid) {
      this.formularioAlbum.markAllAsTouched();
      return;
    }

    this.salvandoAlbum.set(true);
    this.limparRetorno();

    try {
      const valor = this.formularioAlbum.getRawValue();

      const dados: CadastroAlbum = {
        projeto_id: valor.projeto_id,
        nome: valor.nome,
        observacoes:
          this.normalizarTextoOpcional(valor.observacoes),
      };

      const albumEditandoId = this.albumEditandoId();

      if (albumEditandoId) {
        await this.dadosAlbuns.atualizar(
          albumEditandoId,
          dados,
        );

        this.albumAbertoId.set(albumEditandoId);
        this.mensagemOperacao.set('Álbum atualizado.');
      } else {
        const album = await this.dadosAlbuns.cadastrar(dados);

        this.albumAbertoId.set(album.id);
        this.mensagemOperacao.set(
          'Álbum criado. Agora organize as faixas.',
        );
      }

      this.cancelarFormulario();

      window.setTimeout(() => {
        this.rolarPara('editor-sequencia');
      });
    } catch (erro) {
      this.erroOperacao.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.salvandoAlbum.set(false);
    }
  }

  abrirAlbum(albumId: string): void {
    this.albumAbertoId.set(albumId);
    this.formularioFaixa.reset({
      faixa_id: '',
    });
    this.limparRetorno();

    window.setTimeout(() => {
      this.rolarPara('editor-sequencia');
    });
  }

  fecharAlbum(): void {
    this.albumAbertoId.set(null);
    this.formularioFaixa.reset({
      faixa_id: '',
    });
  }

  linkPublico(album: AlbumCompleto): string {
    const origem = window.location.origin.replace(/\/$/, '');

    return `${origem}/album/${album.token_compartilhamento}`;
  }

  async copiarLink(album: AlbumCompleto): Promise<void> {
    if (this.copiandoLinkId()) {
      return;
    }

    this.copiandoLinkId.set(album.id);
    this.limparRetorno();

    try {
      await this.copiarTexto(this.linkPublico(album));

      this.mensagemOperacao.set(
        'Link do álbum copiado.',
      );
    } catch {
      this.erroOperacao.set(
        'Não foi possível copiar o link automaticamente.',
      );
    } finally {
      this.copiandoLinkId.set(null);
    }
  }

  enviarWhatsApp(album: AlbumCompleto): void {
    const mensagem = [
      `Olá! Separei o álbum "${album.nome}" de ${album.projeto.nome} para você ouvir:`,
      '',
      this.linkPublico(album),
    ].join('\n');

    const url =
      `https://wa.me/?text=${encodeURIComponent(mensagem)}`;

    window.open(
      url,
      '_blank',
      'noopener,noreferrer',
    );
  }

  async excluirAlbum(album: AlbumCompleto): Promise<void> {
    const confirmou = window.confirm(
      `Excluir o álbum "${album.nome}"? Os arquivos das faixas continuarão no acervo.`,
    );

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

      this.mensagemOperacao.set(
        'Álbum excluído. As faixas continuam no acervo.',
      );
    } catch (erro) {
      this.erroOperacao.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.excluindoAlbumId.set(null);
    }
  }

  async selecionarCapa(
    album: AlbumCompleto,
    evento: Event,
  ): Promise<void> {
    const input = evento.target as HTMLInputElement;
    const arquivo = input.files?.item(0) ?? null;

    if (!arquivo || this.enviandoCapaId()) {
      input.value = '';
      return;
    }

    this.enviandoCapaId.set(album.id);
    this.limparRetorno();

    try {
      await this.dadosAlbuns.enviarCapa(
        album.id,
        arquivo,
      );

      this.mensagemOperacao.set(
        'Capa do álbum atualizada.',
      );
    } catch (erro) {
      this.erroOperacao.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      input.value = '';
      this.enviandoCapaId.set(null);
    }
  }

  async usarCapaProjeto(
    album: AlbumCompleto,
  ): Promise<void> {
    if (!album.capa_caminho || this.removendoCapaId()) {
      return;
    }

    const destino = album.projeto.capa_caminho
      ? 'a capa do projeto'
      : 'a capa padrão do Fleiva';

    const confirmou = window.confirm(
      `Remover a capa própria deste álbum e usar ${destino}?`,
    );

    if (!confirmou) {
      return;
    }

    this.removendoCapaId.set(album.id);
    this.limparRetorno();

    try {
      await this.dadosAlbuns.removerCapa(album.id);

      this.mensagemOperacao.set(
        album.projeto.capa_caminho
          ? 'O álbum voltou a usar a capa do projeto.'
          : 'O álbum voltou a usar a capa padrão.',
      );
    } catch (erro) {
      this.erroOperacao.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.removendoCapaId.set(null);
    }
  }

  async adicionarFaixa(album: AlbumCompleto): Promise<void> {
    if (this.formularioFaixa.invalid) {
      this.formularioFaixa.markAllAsTouched();
      return;
    }

    this.adicionandoFaixa.set(true);
    this.limparRetorno();

    try {
      const valor = this.formularioFaixa.getRawValue();

      await this.dadosAlbuns.adicionarFaixa(
        album.id,
        valor.faixa_id,
      );

      this.formularioFaixa.reset({
        faixa_id: '',
      });

      this.mensagemOperacao.set(
        'Faixa adicionada com a versão mais recente.',
      );
    } catch (erro) {
      this.erroOperacao.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.adicionandoFaixa.set(false);
    }
  }

  async trocarVersao(
    item: AlbumFaixaCompleta,
    evento: Event,
  ): Promise<void> {
    const select = evento.target as HTMLSelectElement;
    const versaoId = select.value;

    if (!versaoId || versaoId === item.versao_id) {
      return;
    }

    this.alterandoVersaoId.set(item.id);
    this.limparRetorno();

    try {
      await this.dadosAlbuns.trocarVersao(
        item.id,
        versaoId,
      );

      this.mensagemOperacao.set('Versão atualizada.');
    } catch (erro) {
      select.value = item.versao_id;
      this.erroOperacao.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.alterandoVersaoId.set(null);
    }
  }

  async removerFaixa(
    item: AlbumFaixaCompleta,
  ): Promise<void> {
    this.removendoFaixaId.set(item.id);
    this.limparRetorno();

    try {
      await this.dadosAlbuns.removerFaixa(item.id);
      this.mensagemOperacao.set(
        'Faixa removida do álbum. O arquivo permanece no acervo.',
      );
    } catch (erro) {
      this.erroOperacao.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.removendoFaixaId.set(null);
    }
  }

  async moverFaixa(
    album: AlbumCompleto,
    itemId: string,
    deslocamento: -1 | 1,
  ): Promise<void> {
    const ids = album.faixas.map((item) => item.id);
    const indiceAtual = ids.indexOf(itemId);
    const novoIndice = indiceAtual + deslocamento;

    if (
      indiceAtual < 0 ||
      novoIndice < 0 ||
      novoIndice >= ids.length
    ) {
      return;
    }

    [ids[indiceAtual], ids[novoIndice]] = [
      ids[novoIndice],
      ids[indiceAtual],
    ];

    this.ordenandoAlbumId.set(album.id);
    this.limparRetorno();

    try {
      await this.dadosAlbuns.reordenar(album.id, ids);
    } catch (erro) {
      this.erroOperacao.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.ordenandoAlbumId.set(null);
    }
  }

  faixasDisponiveis(
    album: AlbumCompleto,
  ): FaixaDisponivelAlbum[] {
    return this.dadosAlbuns.faixasDisponiveisDoProjeto(
      album.projeto_id,
    );
  }

  capaAlbum(album: AlbumCompleto): string | null {
    return this.dadosAlbuns.capaUrl(album);
  }

  origemCapa(album: AlbumCompleto): string {
    if (album.capa_caminho) {
      return 'Capa própria do álbum';
    }

    if (album.projeto.capa_caminho) {
      return 'Usando a capa do projeto';
    }

    return 'Usando a capa padrão';
  }

  iniciaisProjeto(album: AlbumCompleto): string {
    const palavras = album.projeto.nome
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    return (
      palavras
        .slice(0, 2)
        .map((palavra) => palavra.charAt(0))
        .join('')
        .toLocaleUpperCase('pt-BR') || 'FL'
    );
  }
async publicarAlbum(
  album: AlbumCompleto,
): Promise<void> {
  if (
    this.formularioPublicacao.invalid ||
    this.publicandoAlbumId() ||
    this.despublicandoAlbumId()
  ) {
    this.formularioPublicacao.markAllAsTouched();
    return;
  }

  this.publicandoAlbumId.set(album.id);
  this.limparRetorno();

  try {
    const valor =
      this.formularioPublicacao.getRawValue();

    const configuracao:
      ConfiguracaoPublicacaoAlbum = {
        tipo_publico:
          this.normalizarTextoOpcional(
            valor.tipo_publico,
          ),
        descricao_publica:
          this.normalizarTextoOpcional(
            valor.descricao_publica,
          ),
        reproducao_publica:
          valor.reproducao_publica,
        download_publico:
          valor.download_publico,
      };

    await this.dadosAlbuns.publicar(
      album.id,
      configuracao,
    );

    this.mensagemOperacao.set(
      album.publico_na_landing
        ? 'Publicação do álbum atualizada.'
        : 'Álbum publicado na página do estúdio.',
    );
  } catch (erro) {
    this.erroOperacao.set(
      this.obterMensagemErro(erro),
    );
  } finally {
    this.publicandoAlbumId.set(null);
  }
}

async despublicarAlbum(
  album: AlbumCompleto,
): Promise<void> {
  if (
    this.publicandoAlbumId() ||
    this.despublicandoAlbumId()
  ) {
    return;
  }

  this.despublicandoAlbumId.set(album.id);
  this.limparRetorno();

  try {
    await this.dadosAlbuns.despublicar(
      album.id,
    );

    this.mensagemOperacao.set(
      'Álbum removido da página pública.',
    );
  } catch (erro) {
    this.erroOperacao.set(
      this.obterMensagemErro(erro),
    );
  } finally {
    this.despublicandoAlbumId.set(null);
  }
}
  rotuloQuantidadeFaixas(quantidade: number): string {
    return quantidade === 1
      ? '1 faixa'
      : `${quantidade} faixas`;
  }


  private normalizarTextoOpcional(
    valor: string | null,
  ): string | null {
    const texto = valor?.trim();

    return texto ? texto : null;
  }

  private limparRetorno(): void {
    this.erroOperacao.set(null);
    this.mensagemOperacao.set(null);
  }

  private async copiarTexto(texto: string): Promise<void> {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(texto);
      return;
    }

    const campoTemporario = document.createElement('textarea');

    campoTemporario.value = texto;
    campoTemporario.setAttribute('readonly', '');
    campoTemporario.style.position = 'fixed';
    campoTemporario.style.opacity = '0';

    document.body.appendChild(campoTemporario);
    campoTemporario.select();

    const copiado = document.execCommand('copy');

    campoTemporario.remove();

    if (!copiado) {
      throw new Error('Cópia não permitida.');
    }
  }

  private rolarPara(elementoId: string): void {
    window.setTimeout(() => {
      document.getElementById(elementoId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
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
