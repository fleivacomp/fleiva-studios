import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-cropper-logo',
  standalone: true,
  template: `
    <div class="cropper-fundo" (click)="cancelado.emit()"></div>

    <div class="cropper" role="dialog" aria-modal="true">
      <header>
        <h3>Enquadrar logo</h3>
        <p>Arraste para posicionar e use o zoom para ajustar.</p>
      </header>

      <div
        class="area-cropper"
        #area
        (pointerdown)="iniciarArraste($event)"
      >
        <canvas #canvas width="600" height="600"></canvas>
        <span class="guia" aria-hidden="true"></span>
      </div>

      <label class="zoom">
        <span>Zoom</span>
        <input
          type="range"
          min="1"
          max="4"
          step="0.01"
          [value]="zoom()"
          (input)="atualizarZoom($event)"
        />
      </label>

      <footer>
        <button
          type="button"
          class="botao-secundario"
          (click)="cancelado.emit()"
        >
          Cancelar
        </button>
        <button
          type="button"
          class="botao-principal"
          (click)="confirmar()"
        >
          Aplicar
        </button>
      </footer>
    </div>
  `,
  styleUrl: './cropper-logo.scss',
})
export class CropperLogo implements OnChanges {
  @Input({ required: true }) arquivo!: File;
  @Output() confirmado = new EventEmitter<Blob>();
  @Output() cancelado = new EventEmitter<void>();

  @ViewChild('canvas', { static: true })
  private canvasRef!: ElementRef<HTMLCanvasElement>;

  readonly zoom = signal(1);

  private imagem: HTMLImageElement | null = null;
  private offsetX = 0;
  private offsetY = 0;
  private arrastando = false;
  private inicioX = 0;
  private inicioY = 0;
  private offsetInicialX = 0;
  private offsetInicialY = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['arquivo'] && this.arquivo) {
      void this.carregar(this.arquivo);
    }
  }

  private async carregar(file: File): Promise<void> {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.src = url;

    try {
      await img.decode();
    } finally {
      URL.revokeObjectURL(url);
    }

    this.imagem = img;
    this.zoom.set(1);
    this.offsetX = 0;
    this.offsetY = 0;
    this.desenhar();
  }

  iniciarArraste(evento: PointerEvent): void {
    if (!this.imagem) return;

    evento.preventDefault();

    this.arrastando = true;
    this.inicioX = evento.clientX;
    this.inicioY = evento.clientY;
    this.offsetInicialX = this.offsetX;
    this.offsetInicialY = this.offsetY;

    const alvo = evento.currentTarget as HTMLElement;
    alvo.setPointerCapture(evento.pointerId);

    const mover = (e: PointerEvent) => this.mover(e);

    const soltar = (e: PointerEvent) => {
      this.arrastando = false;
      alvo.releasePointerCapture(e.pointerId);
      alvo.removeEventListener('pointermove', mover);
      alvo.removeEventListener('pointerup', soltar);
      alvo.removeEventListener('pointercancel', soltar);
    };

    alvo.addEventListener('pointermove', mover);
    alvo.addEventListener('pointerup', soltar);
    alvo.addEventListener('pointercancel', soltar);
  }

  private mover(evento: PointerEvent): void {
    if (!this.arrastando) return;

    const canvas = this.canvasRef.nativeElement;
    const escala = canvas.width / canvas.clientWidth;

    this.offsetX =
      this.offsetInicialX + (evento.clientX - this.inicioX) * escala;
    this.offsetY =
      this.offsetInicialY + (evento.clientY - this.inicioY) * escala;

    this.desenhar();
  }

  atualizarZoom(evento: Event): void {
    const valor = Number((evento.target as HTMLInputElement).value);

    if (!Number.isFinite(valor)) return;

    this.zoom.set(valor);
    this.desenhar();
  }

  private calcularGeometria(): {
    largura: number;
    altura: number;
    offsetX: number;
    offsetY: number;
  } | null {
    const canvas = this.canvasRef?.nativeElement;
    const img = this.imagem;

    if (!canvas || !img) return null;

    const lado = canvas.width;
    const escalaBase = Math.max(lado / img.width, lado / img.height);
    const escala = escalaBase * this.zoom();

    const largura = img.width * escala;
    const altura = img.height * escala;

    const maxX = Math.max(0, (largura - lado) / 2);
    const maxY = Math.max(0, (altura - lado) / 2);

    const offsetX = Math.max(-maxX, Math.min(maxX, this.offsetX));
    const offsetY = Math.max(-maxY, Math.min(maxY, this.offsetY));

    this.offsetX = offsetX;
    this.offsetY = offsetY;

    return { largura, altura, offsetX, offsetY };
  }

  private desenhar(): void {
    const canvas = this.canvasRef.nativeElement;
    const img = this.imagem;

    if (!img) return;

    const ctx = canvas.getContext('2d');
    const geo = this.calcularGeometria();

    if (!ctx || !geo) return;

    const lado = canvas.width;

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, lado, lado);

    const x = (lado - geo.largura) / 2 + geo.offsetX;
    const y = (lado - geo.altura) / 2 + geo.offsetY;

    ctx.drawImage(img, x, y, geo.largura, geo.altura);
  }

  confirmar(): void {
    const canvas = this.canvasRef.nativeElement;
    const img = this.imagem;

    if (!img) return;

    const lado = canvas.width;
    const escalaBase = Math.max(lado / img.width, lado / img.height);
    const escala = escalaBase * this.zoom();

    const largura = img.width * escala;
    const altura = img.height * escala;

    const maxX = Math.max(0, (largura - lado) / 2);
    const maxY = Math.max(0, (altura - lado) / 2);

    const offsetX = Math.max(-maxX, Math.min(maxX, this.offsetX));
    const offsetY = Math.max(-maxY, Math.min(maxY, this.offsetY));

    const x = (lado - largura) / 2 + offsetX;
    const y = (lado - altura) / 2 + offsetY;

    const tamanhoFinal = 1024;
    const fator = tamanhoFinal / lado;

    const exportacao = document.createElement('canvas');
    exportacao.width = tamanhoFinal;
    exportacao.height = tamanhoFinal;

    const ctx = exportacao.getContext('2d');

    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(
      img,
      x * fator,
      y * fator,
      largura * fator,
      altura * fator,
    );

    exportacao.toBlob(
      (blob) => {
        if (blob) {
          this.confirmado.emit(blob);
        }
      },
      'image/webp',
      0.92,
    );
  }
}
