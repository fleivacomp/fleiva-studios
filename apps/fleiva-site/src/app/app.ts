import { HeroFleiva } from './components/hero-fleiva';
import {
  ChangeDetectionStrategy,
  Component,
  signal,
} from '@angular/core';
type ModuloId =
  | 'agenda'
  | 'contatos'
  | 'faixas'
  | 'albuns'
  | 'acertos';

interface Modulo {
  id: ModuloId;
  numero: string;
  nome: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroFleiva],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly anoAtual = new Date().getFullYear();

  readonly moduloAtivo = signal<ModuloId>('agenda');

  readonly modulos: Modulo[] = [
    {
      id: 'agenda',
      numero: '01',
      nome: 'Agenda',
    },
    {
      id: 'contatos',
      numero: '02',
      nome: 'Contatos',
    },
    {
      id: 'faixas',
      numero: '03',
      nome: 'Faixas',
    },
    {
      id: 'albuns',
      numero: '04',
      nome: 'Álbuns',
    },
    {
      id: 'acertos',
      numero: '05',
      nome: 'Acertos',
    },
  ];

  selecionarModulo(modulo: ModuloId): void {
    this.moduloAtivo.set(modulo);
  }
}
