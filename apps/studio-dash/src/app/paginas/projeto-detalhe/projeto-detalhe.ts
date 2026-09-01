import { Component, OnInit, computed, inject, signal } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import {
  DadosAlbuns,
  DadosFaixas,
  DadosProjetosArtisticos,
  type AlbumCompleto,
  type FaixaCompleta,
  type VersaoAlbum,
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

  private readonly rota = inject(ActivatedRoute);

  readonly projetoId = signal("");
  readonly carregandoPagina = signal(true);

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
      .filter((album) => album.projeto_id === this.projetoId()),
  );

  readonly totalVersoes = computed(() =>
    this.faixas().reduce(
      (total, faixa) => total + this.versoesDaFaixa(faixa.id).length,
      0,
    ),
  );

  readonly erroPagina = computed(
    () =>
      this.dadosProjetos.erro() ??
      this.dadosFaixas.erro() ??
      this.dadosAlbuns.erro(),
  );

  async ngOnInit(): Promise<void> {
    this.projetoId.set(this.rota.snapshot.paramMap.get("id")?.trim() ?? "");

    try {
      await Promise.all([
        this.dadosProjetos.listar(),
        this.dadosFaixas.listar(),
        this.dadosAlbuns.listar(),
      ]);
    } finally {
      this.carregandoPagina.set(false);
    }
  }

  async recarregar(): Promise<void> {
    this.carregandoPagina.set(true);

    try {
      await Promise.all([
        this.dadosProjetos.listar(),
        this.dadosFaixas.listar(),
        this.dadosAlbuns.listar(),
      ]);
    } finally {
      this.carregandoPagina.set(false);
    }
  }

  versoesDaFaixa(faixaId: string): VersaoAlbum[] {
    return this.dadosAlbuns
      .versoesDisponiveis()
      .filter((versao) => versao.faixa_id === faixaId);
  }

  ultimaVersao(faixaId: string): VersaoAlbum | null {
    return this.versoesDaFaixa(faixaId)[0] ?? null;
  }

  formatarStatus(status: string): string {
    return status
      .replace(/_/g, " ")
      .replace(/^./, (inicio: string) => inicio.toLocaleUpperCase("pt-BR"));
  }

  tipoTrabalho(album: AlbumCompleto): string {
    return album.tipo_publico?.trim() || "Trabalho";
  }

  totalFaixasTrabalho(album: AlbumCompleto): string {
    const total = album.faixas.length;

    return total === 1 ? "1 faixa" : `${total} faixas`;
  }

  identificarFaixa(_indice: number, faixa: FaixaCompleta): string {
    return faixa.id;
  }
}
