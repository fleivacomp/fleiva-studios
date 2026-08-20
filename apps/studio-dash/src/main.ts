import { bootstrapApplication } from '@angular/platform-browser';
import { Aplicacao } from './app/app';
import { configuracaoAplicacao } from './app/app.config';

bootstrapApplication(Aplicacao, configuracaoAplicacao).catch(
  (erro: unknown) => console.error(erro),
);
