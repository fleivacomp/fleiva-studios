import { inject, Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { CONFIGURACAO_SUPABASE } from './configuracao-supabase';
import { Database } from './tipos-banco';

@Injectable({
  providedIn: 'root',
})
export class ClienteSupabase {
  static from(arg0: string) {
    throw new Error('Method not implemented.');
  }
  private readonly configuracao = inject(CONFIGURACAO_SUPABASE);

  readonly cliente: SupabaseClient<Database> = createClient<Database>(
    this.configuracao.url,
    this.configuracao.chavePublicavel,
  );
}
