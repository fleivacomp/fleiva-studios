import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';


@Component({
  selector: 'app-hero-fleiva',
  standalone: true,
  imports: [],
  templateUrl: './hero-fleiva.html',
  styleUrl: './hero-fleiva.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroFleiva {
  readonly anoAtual = new Date().getFullYear();
}
