import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';

@Component({
  selector: 'app-fleiva-logo',
  standalone: true,
  templateUrl: './fleiva-logo.html',
  styleUrl: './fleiva-logo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.logo-compacta]': 'compacta()',
    '[class.logo-com-entrada]': 'entrada()',
    '[class.logo-sem-jitter]': '!jitter()',
  },
})
export class FleivaLogo {
  readonly compacta = input(false);
  readonly entrada = input(false);
  readonly jitter = input(true);
  readonly rotulo = input('Flêiva');
}
