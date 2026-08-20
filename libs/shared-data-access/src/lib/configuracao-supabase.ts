import { InjectionToken, Provider } from '@angular/core';

export interface ConfiguracaoSupabase {
  url: string;
  chavePublicavel: string;
}

export const CONFIGURACAO_SUPABASE =
  new InjectionToken<ConfiguracaoSupabase>('CONFIGURACAO_SUPABASE');

export function fornecerConfiguracaoSupabase(
  configuracao: ConfiguracaoSupabase,
): Provider {
  return {
    provide: CONFIGURACAO_SUPABASE,
    useValue: configuracao,
  };
}
