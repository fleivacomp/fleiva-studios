import {
  Component,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  DadosAlbumCompartilhado,
  type FaixaAlbumCompartilhado,
} from '@fleiva-studios/shared-data-access';

@Component({
  selector: 'app-album-compartilhado',
  standalone: true,
  imports: [],
  templateUrl: './album-compartilhado.html',
  styleUrl: './album-compartilhado.scss',
})
export class AlbumCompartilhado implements OnInit {
  readonly dados = inject(DadosAlbumCompartilhado);

  private readonly rota = inject(ActivatedRoute);

  readonly token = signal<string | null>(null);
  readonly faixaAtivaId = signal<string | null>(null);
  readonly baixandoFaixaId = signal<string | null>(null);
  readonly erroDownload = signal<string | null>(null);
  readonly erroReproducao = signal<string | null>(null);
  readonly erroLocal = signal<string | null>(null);

  readonly faixaAtiva = computed(() => {
    const faixaAtivaId = this.faixaAtivaId();

    return (
      this.dados
        .album()
        ?.faixas.find(
          (faixa) => faixa.item_id === faixaAtivaId,
        ) ?? null
    );
  });

  readonly primeiraFaixaReproduzivel = computed(() =>
    this.dados
      .album()
      ?.faixas.find((faixa) => this.podeReproduzir(faixa)) ??
    null,
  );

  readonly corPrincipal = computed(() => {
    const cor = this.dados.album()?.estudio.cor_principal;

    return this.normalizarCor(cor) ?? '#1ed760';
  });

  readonly corSobrePrincipal = computed(() =>
    this.obterCorContraste(this.corPrincipal()),
  );

  ngOnInit(): void {
    const token = this.rota.snapshot.paramMap.get('token');

    this.token.set(token);

    if (!token) {
      this.erroLocal.set('Link inválido ou indisponível.');
      return;
    }

    void this.carregar(token);
  }

  recarregar(): void {
    const token = this.token();

    if (!token) {
      return;
    }

    void this.carregar(token);
  }

  reproduzir(faixa: FaixaAlbumCompartilhado): void {
    if (!this.podeReproduzir(faixa)) {
      return;
    }

    this.erroReproducao.set(null);
    this.faixaAtivaId.set(faixa.item_id);
  }

  reproduzirProxima(): void {
    const album = this.dados.album();
    const faixaAtual = this.faixaAtiva();

    if (!album || !faixaAtual) {
      return;
    }

    const faixasReproduziveis = album.faixas.filter(
      (faixa) => this.podeReproduzir(faixa),
    );

    const indiceAtual = faixasReproduziveis.findIndex(
      (faixa) => faixa.item_id === faixaAtual.item_id,
    );

    const proximaFaixa = faixasReproduziveis[indiceAtual + 1];

    if (proximaFaixa) {
      this.faixaAtivaId.set(proximaFaixa.item_id);
    }
  }

  registrarErroReproducao(): void {
    this.erroReproducao.set(
      'A reprodução foi interrompida. Recarregue o álbum para renovar o acesso.',
    );
  }

  async baixar(
    faixa: FaixaAlbumCompartilhado,
  ): Promise<void> {
    const token = this.token();

    if (!token || this.baixandoFaixaId()) {
      return;
    }

    this.baixandoFaixaId.set(faixa.item_id);
    this.erroDownload.set(null);

    try {
      const download = await this.dados.obterDownload(
        token,
        faixa.item_id,
      );

      const link = document.createElement('a');

      link.href = download.url;
      link.download = download.nome_arquivo;
      link.rel = 'noopener noreferrer';

      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (erro) {
      this.erroDownload.set(
        this.obterMensagemErro(
          erro,
          'Não foi possível baixar a faixa.',
        ),
      );
    } finally {
      this.baixandoFaixaId.set(null);
    }
  }

  podeReproduzir(
    faixa: FaixaAlbumCompartilhado,
  ): boolean {
    if (faixa.tipo_mime?.startsWith('audio/')) {
      return true;
    }

    return /\.(aac|flac|m4a|mp3|ogg|wav|webm)$/i.test(
      faixa.nome_arquivo,
    );
  }

  inicialEstudio(): string {
    return (
      this.dados
        .album()
        ?.estudio.nome.trim()
        .charAt(0)
        .toLocaleUpperCase('pt-BR') || 'F'
    );
  }

  iniciaisProjeto(): string {
    const projeto = this.dados.album()?.projeto ?? '';
    const palavras = projeto.trim().split(/\s+/).filter(Boolean);

    return (
      palavras
        .slice(0, 2)
        .map((palavra) => palavra.charAt(0))
        .join('')
        .toLocaleUpperCase('pt-BR') || 'FL'
    );
  }

  rotuloQuantidadeFaixas(quantidade: number): string {
    return quantidade === 1
      ? '1 faixa'
      : `${quantidade} faixas`;
  }

  formatarOrdem(ordem: number): string {
    return String(ordem).padStart(2, '0');
  }

  formatarBytes(bytes: number): string {
    if (bytes < 1000) {
      return `${bytes} B`;
    }

    const unidades = ['KB', 'MB', 'GB', 'TB'];
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

  private async carregar(token: string): Promise<void> {
    this.erroLocal.set(null);
    this.erroDownload.set(null);
    this.erroReproducao.set(null);
    this.faixaAtivaId.set(null);

    await this.dados.carregar(token);
  }

  private normalizarCor(
    cor: string | null | undefined,
  ): string | null {
    const valor = cor?.trim();

    return valor && /^#[0-9a-f]{6}$/i.test(valor)
      ? valor
      : null;
  }

  private obterCorContraste(cor: string): string {
    const vermelho = Number.parseInt(cor.slice(1, 3), 16);
    const verde = Number.parseInt(cor.slice(3, 5), 16);
    const azul = Number.parseInt(cor.slice(5, 7), 16);
    const luminancia =
      (vermelho * 299 + verde * 587 + azul * 114) / 1000;

    return luminancia >= 150 ? '#111311' : '#ffffff';
  }

  private obterMensagemErro(
    erro: unknown,
    mensagemPadrao: string,
  ): string {
    if (
      typeof erro === 'object' &&
      erro !== null &&
      'message' in erro
    ) {
      return String(erro.message);
    }

    return mensagemPadrao;
  }
}
