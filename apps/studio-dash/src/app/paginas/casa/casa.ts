import {
  Component,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import {
  Router,
  RouterLink,
} from '@angular/router';
import {
  DadosCasa,
  type EstudioCasa,
  type TrabalhoCasa,
} from '@fleiva-studios/shared-data-access';

@Component({
  selector: 'app-casa',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './casa.html',
  styleUrl: './casa.scss',
})
export class Casa implements OnInit {
  readonly dadosCasa = inject(DadosCasa);
  private readonly roteador = inject(Router);
  private readonly chaveUltimaPorta =
    'casa-fleiva:ultima-porta';

  readonly anoAtual = new Date().getFullYear();
  readonly termoBusca = signal('');

  readonly buscaAtiva = computed(
    () => this.normalizarBusca(this.termoBusca()).length > 0,
  );

  readonly trabalhosFiltrados = computed(() => {
    const termo = this.normalizarBusca(this.termoBusca());

    if (!termo) {
      return this.dadosCasa.trabalhos();
    }

    return this.dadosCasa.trabalhos().filter((trabalho) =>
      this.correspondeBusca(
        [
          trabalho.album_nome,
          trabalho.album_tipo,
          trabalho.album_descricao,
          trabalho.projeto_nome,
          trabalho.estudio_nome,
        ],
        termo,
      ),
    );
  });

  readonly estudiosFiltrados = computed(() => {
    const termo = this.normalizarBusca(this.termoBusca());

    if (!termo) {
      return this.dadosCasa.estudios();
    }

    return this.dadosCasa.estudios().filter((estudio) =>
      this.correspondeBusca(
        [
          estudio.nome,
          estudio.cidade,
          estudio.descricao_publica,
          ...estudio.servicos,
        ],
        termo,
      ),
    );
  });

  readonly possuiResultadosBusca = computed(
    () =>
      this.trabalhosFiltrados().length > 0 ||
      this.estudiosFiltrados().length > 0,
  );

  ngOnInit(): void {
    void this.dadosCasa.listar();
  }

  atualizarBusca(evento: Event): void {
    const campo = evento.target as HTMLInputElement;

    this.termoBusca.set(campo.value);
  }

  limparBusca(): void {
    this.termoBusca.set('');
  }

  abrirPorta(evento: MouseEvent): void {
    const estudios = this.dadosCasa.estudios();

    if (estudios.length === 0) {
      return;
    }

    evento.preventDefault();

    const ultimaPortaId = this.obterUltimaPortaId();
    const estudiosDisponiveis = estudios.length > 1
      ? estudios.filter(
        (estudio) => estudio.id !== ultimaPortaId,
      )
      : estudios;
    const indice = Math.floor(
      Math.random() * estudiosDisponiveis.length,
    );
    const estudio = estudiosDisponiveis[indice];

    if (!estudio) {
      return;
    }

    this.salvarUltimaPortaId(estudio.id);
    void this.roteador.navigate(['/', estudio.slug]);
  }

  inicialEstudio(nome: string): string {
    return nome.trim().charAt(0).toLocaleUpperCase('pt-BR') ||
      'F';
  }

  corEstudio(estudio: EstudioCasa): string {
    return this.normalizarCor(estudio.cor_principal);
  }

  corTrabalho(trabalho: TrabalhoCasa): string {
    return this.normalizarCor(
      trabalho.estudio_cor_principal,
    );
  }

  private normalizarCor(corOriginal: string | null): string {
    const cor = corOriginal?.trim();

    return cor && /^#[0-9a-fA-F]{6}$/.test(cor)
      ? cor
      : '#4f7b61';
  }

  private obterUltimaPortaId(): string | null {
    if (typeof window === 'undefined') {
      return null;
    }

    try {
      return window.sessionStorage.getItem(
        this.chaveUltimaPorta,
      );
    } catch {
      return null;
    }
  }

  private salvarUltimaPortaId(estudioId: string): void {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      window.sessionStorage.setItem(
        this.chaveUltimaPorta,
        estudioId,
      );
    } catch {
      return;
    }
  }

  private correspondeBusca(
    valores: Array<string | null>,
    termo: string,
  ): boolean {
    return valores.some((valor) =>
      this.normalizarBusca(valor ?? '').includes(termo),
    );
  }

  private normalizarBusca(valor: string): string {
    return valor
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim()
      .toLocaleLowerCase('pt-BR');
  }
}
