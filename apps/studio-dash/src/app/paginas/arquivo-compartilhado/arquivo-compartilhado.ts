import {
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  DadosArquivoCompartilhado,
} from '@fleiva-studios/shared-data-access';

@Component({
  selector: 'app-arquivo-compartilhado',
  standalone: true,
  imports: [],
  templateUrl: './arquivo-compartilhado.html',
  styleUrl: './arquivo-compartilhado.scss',
})
export class ArquivoCompartilhado
  implements OnInit
{
  readonly dados =
    inject(DadosArquivoCompartilhado);

  private readonly rota = inject(ActivatedRoute);

  private readonly token =
    signal<string | null>(null);

  readonly baixando = signal(false);
  readonly erroDownload =
    signal<string | null>(null);

  ngOnInit(): void {
    const token =
      this.rota.snapshot.paramMap.get('token');

    this.token.set(token);

    if (token) {
      void this.dados.carregar(token);
    }
  }

  recarregar(): void {
    const token = this.token();

    if (token) {
      void this.dados.carregar(token);
    }
  }

  async baixar(): Promise<void> {
    const token = this.token();

    if (!token || this.baixando()) {
      return;
    }

    this.baixando.set(true);
    this.erroDownload.set(null);

    try {
      const download =
        await this.dados.obterDownload(token);

      const link = document.createElement('a');

      link.href = download.url;
      link.download = download.nome_arquivo;
      link.rel = 'noopener noreferrer';

      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (erro) {
      this.erroDownload.set(
        this.obterMensagemErro(erro),
      );
    } finally {
      this.baixando.set(false);
    }
  }

  formatarBytes(bytes: number): string {
    if (bytes < 1000) {
      return `${bytes} B`;
    }

    const unidades = [
      'KB',
      'MB',
      'GB',
      'TB',
    ];

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

  formatarData(data: string): string {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(new Date(data));
  }

  private obterMensagemErro(
    erro: unknown,
  ): string {
    if (
      typeof erro === 'object' &&
      erro !== null &&
      'message' in erro
    ) {
      return String(erro.message);
    }

    return 'Não foi possível baixar o arquivo.';
  }
}
