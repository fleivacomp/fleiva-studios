import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { fornecerConfiguracaoSupabase } from '@fleiva-studios/shared-data-access';
import { ambiente } from '../environments/ambiente';
import { rotasAplicacao } from './app.routes';

export const configuracaoAplicacao: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(rotasAplicacao),
    fornecerConfiguracaoSupabase(ambiente.supabase),
  ],
};
