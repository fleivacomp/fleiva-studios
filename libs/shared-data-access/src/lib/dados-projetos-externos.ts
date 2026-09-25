
import { Injectable, inject, signal } from '@angular/core';

import { ClienteSupabase } from './cliente-supabase';

const URL_PUBLICA_IMAGENS =
  'https://pub-b1d515cf725c469ea3d43e6cdc3546a7.r2.dev';


@Injectable({
  providedIn: 'root',
})
export class DadosProjetosExternos {

  private readonly clienteSupabase = inject(ClienteSupabase);

  private readonly listaInterna = signal<any[]>([]);

  private readonly carregandoInterno = signal(false);

  private readonly erroInterno = signal<string | null>(null);

  readonly projetos = this.listaInterna.asReadonly();

  readonly carregando = this.carregandoInterno.asReadonly();

  readonly erro = this.erroInterno.asReadonly();

  capaUrl(
    projeto: Pick<any, 'capa_caminho'>,
  ): string | null {

    if (!projeto.capa_caminho) {

      return null;

    }

    const caminhoSeguro = projeto.capa_caminho
      .split('/')
      .map((parte: string) => encodeURIComponent(parte))
      .join('/');

    return `${URL_PUBLICA_IMAGENS}/${caminhoSeguro}`;

  }

  async listar(): Promise<void> {

    this.carregandoInterno.set(true);

    this.erroInterno.set(null);

    try {

      const {
        data: { user },
        error: erroUsuario,
      } = await this.clienteSupabase.cliente.auth.getUser();

      if (erroUsuario || !user) {

        throw new Error('Usuário não autenticado.');

      }

      const { data, error } =
        await this.clienteSupabase.cliente
          .from('projetos_artisticos')
          .select(`
            id,
            estudio_id,
            nome,
            tipo,
            capa_caminho,
            criado_em,
            atualizado_em,
            membros:membros_projeto (
              contato_id,
              ativo,
              pode_acessar,
              contato:contatos!inner (
                auth_user_id
              )
            )
          `)
          .eq('membros.ativo', true)
          .eq('membros.pode_acessar', true)
          .eq(
            'membros.contato.auth_user_id',
            user.id,
          )
          .neq('estudio_id', user.id)
          .order('nome');

      if (error) {

        throw error;

      }

      const idsEstudios = [
        ...new Set(
          (data ?? [])
            .map((projeto) => projeto.estudio_id)
            .filter(Boolean),
        ),
      ];

      let estudios: any[] = [];

      if (idsEstudios.length > 0) {

        const {
          data: dadosEstudios,
          error: erroEstudios,
        } = await this.clienteSupabase.cliente
          .from('estudios')
          .select('id, nome')
          .in('id', idsEstudios);

        if (erroEstudios) {

          throw erroEstudios;

        }

        estudios = dadosEstudios ?? [];

      }

      const projetosComEstudio = (data ?? []).map(
        (projeto) => ({
          ...projeto,
          estudio: estudios.find(
            (estudio) =>
              estudio.id === projeto.estudio_id,
          ) ?? null,
        }),
      );

      console.log(
        'PROJETOS EXTERNOS:',
        JSON.stringify(
          projetosComEstudio,
          null,
          2,
        ),
      );

      console.log(
        'TOTAL PROJETOS EXTERNOS:',
        projetosComEstudio.length,
      );

      this.listaInterna.set(
        projetosComEstudio,
      );

    } catch (erro) {

      this.erroInterno.set(
        erro instanceof Error
          ? erro.message
          : 'Não foi possível carregar os projetos externos.',
      );

    } finally {

      this.carregandoInterno.set(false);

    }

  }

          }
