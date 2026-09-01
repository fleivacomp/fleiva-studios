import {
  computed,
  DestroyRef,
  inject,
  Injectable,
  signal,
} from '@angular/core';
import type { Session, User } from '@supabase/supabase-js';
import { ClienteSupabase } from './cliente-supabase';
export interface ResultadoCadastro {
  confirmacaoEmailNecessaria: boolean;
}
@Injectable({
  providedIn: 'root',
})

export class Autenticacao {
  private readonly cliente = inject(ClienteSupabase).cliente;
  private readonly destroyRef = inject(DestroyRef);
  private readonly sessaoInterna = signal<Session | null>(null);
  private readonly carregandoInterno = signal(true);

  readonly sessao = this.sessaoInterna.asReadonly();
  readonly usuario = computed(() => this.sessaoInterna()?.user ?? null);
  readonly autenticado = computed(() => this.usuario() !== null);
  readonly carregando = this.carregandoInterno.asReadonly();

  constructor() {
    const {
      data: { subscription },
    } = this.cliente.auth.onAuthStateChange((_evento, sessao) => {
      this.sessaoInterna.set(sessao);
      this.carregandoInterno.set(false);
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());

    void this.carregarSessao();
  }

  async entrar(email: string, senha: string): Promise<void> {
    const { error } = await this.cliente.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      throw error;
    }
  }
  async cadastrar(
  nome: string,
  email: string,
  senha: string,
): Promise<ResultadoCadastro> {
  const nomeNormalizado = nome.trim();
  const emailNormalizado = email
    .trim()
    .toLocaleLowerCase();

  if (!nomeNormalizado) {
    throw new Error('Informe o nome do estúdio.');
  }

  const { data, error } =
    await this.cliente.auth.signUp({
      email: emailNormalizado,
      password: senha,
      options: {
        data: {
          nome: nomeNormalizado,
        },
      },
    });

  if (error) {
    throw error;
  }

  return {
    confirmacaoEmailNecessaria:
      data.session === null,
  };
}

  async sair(): Promise<void> {
    const { error } = await this.cliente.auth.signOut();

    if (error) {
      throw error;
    }
  }

  async obterUsuarioValidado(): Promise<User | null> {
    const {
      data: { user },
      error,
    } = await this.cliente.auth.getUser();

    return error ? null : user;
  }

  private async carregarSessao(): Promise<void> {
    const {
      data: { session },
    } = await this.cliente.auth.getSession();

    this.sessaoInterna.set(session);
    this.carregandoInterno.set(false);
  }
}
