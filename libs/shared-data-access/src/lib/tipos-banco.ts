export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }

  graphql_public: {
    Tables: {
      [_ in never]: never
    }

    Views: {
      [_ in never]: never
    }

    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }

        Returns: Json
      }
    }

    Enums: {
      [_ in never]: never
    }

    CompositeTypes: {
      [_ in never]: never
    }
  }

  public: {
    Tables: {
      acoes_bloco_experiencia_imersiva: {
        Row: {
          acao: string
          atualizado_em: string
          bloco_id: string
          criado_em: string
          estudio_id: string
          experiencia_id: string
          id: string
          inicio_segundos: number
          ordem: number
          parametros: Json
          recurso_id: string | null
        }

        Insert: {
          acao: string
          atualizado_em?: string
          bloco_id: string
          criado_em?: string
          estudio_id: string
          experiencia_id: string
          id?: string
          inicio_segundos?: number
          ordem: number
          parametros?: Json
          recurso_id?: string | null
        }

        Update: {
          acao?: string
          atualizado_em?: string
          bloco_id?: string
          criado_em?: string
          estudio_id?: string
          experiencia_id?: string
          id?: string
          inicio_segundos?: number
          ordem?: number
          parametros?: Json
          recurso_id?: string | null
        }

        Relationships: [
          {
            foreignKeyName: "acoes_bloco_experiencia_imersiva_bloco_fkey"
            columns: ["bloco_id", "experiencia_id", "estudio_id"]
            isOneToOne: false
            referencedRelation: "blocos_experiencia_imersiva"
            referencedColumns: ["id", "experiencia_id", "estudio_id"]
          },
          {
            foreignKeyName: "acoes_bloco_experiencia_imersiva_recurso_fkey"
            columns: ["recurso_id", "experiencia_id", "estudio_id"]
            isOneToOne: false
            referencedRelation: "recursos_experiencia_imersiva"
            referencedColumns: ["id", "experiencia_id", "estudio_id"]
          },
        ]
      }

      agendamento_servicos: {
        Row: {
          agendamento_id: string
          estudio_id: string
          quantidade: number
          servico_id: string
        }

        Insert: {
          agendamento_id: string
          estudio_id: string
          quantidade?: number
          servico_id: string
        }

        Update: {
          agendamento_id?: string
          estudio_id?: string
          quantidade?: number
          servico_id?: string
        }

        Relationships: [
          {
            foreignKeyName: "agendamento_servicos_agendamento_id_estudio_id_fkey"
            columns: ["agendamento_id", "estudio_id"]
            isOneToOne: false
            referencedRelation: "agendamentos"
            referencedColumns: ["id", "estudio_id"]
          },
          {
            foreignKeyName: "agendamento_servicos_estudio_id_fkey"
            columns: ["estudio_id"]
            isOneToOne: false
            referencedRelation: "estudios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agendamento_servicos_servico_id_estudio_id_fkey"
            columns: ["servico_id", "estudio_id"]
            isOneToOne: false
            referencedRelation: "servicos"
            referencedColumns: ["id", "estudio_id"]
          },
        ]
      }

      agendamentos: {
        Row: {
          contato_id: string
          estudio_id: string
          fechado_em: string | null
          fim: string
          id: string
          inicio: string
          observacoes_fechamento: string | null
          resultado: string | null
        }

        Insert: {
          contato_id: string
          estudio_id: string
          fechado_em?: string | null
          fim: string
          id?: string
          inicio: string
          observacoes_fechamento?: string | null
          resultado?: string | null
        }

        Update: {
          contato_id?: string
          estudio_id?: string
          fechado_em?: string | null
          fim?: string
          id?: string
          inicio?: string
          observacoes_fechamento?: string | null
          resultado?: string | null
        }

        Relationships: [
          {
            foreignKeyName: "agendamentos_contato_id_estudio_id_fkey"
            columns: ["contato_id", "estudio_id"]
            isOneToOne: false
            referencedRelation: "contatos"
            referencedColumns: ["id", "estudio_id"]
          },
          {
            foreignKeyName: "agendamentos_estudio_id_fkey"
            columns: ["estudio_id"]
            isOneToOne: false
            referencedRelation: "estudios"
            referencedColumns: ["id"]
          },
        ]
      }

      album_faixas: {
        Row: {
          album_id: string
          criado_em: string
          id: string
          ordem: number
          versao_id: string
        }

        Insert: {
          album_id: string
          criado_em?: string
          id?: string
          ordem: number
          versao_id: string
        }

        Update: {
          album_id?: string
          criado_em?: string
          id?: string
          ordem?: number
          versao_id?: string
        }

        Relationships: [
          {
            foreignKeyName: "album_faixas_album_id_fkey"
            columns: ["album_id"]
            isOneToOne: false
            referencedRelation: "albuns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "album_faixas_versao_id_fkey"
            columns: ["versao_id"]
            isOneToOne: false
            referencedRelation: "versoes_faixa"
            referencedColumns: ["id"]
          },
        ]
      }

      albuns: {
        Row: {
          atualizado_em: string
          capa_caminho: string | null
          criado_em: string
          descricao_publica: string | null
          download_publico: boolean
          estudio_id: string
          id: string
          nome: string
          observacoes: string | null
          projeto_id: string
          publico_na_casa: boolean
          publico_na_landing: boolean
          reproducao_publica: boolean
          selecionado_para_casa_em: string | null
          tipo_publico: string | null
          token_compartilhamento: string | null
        }

        Insert: {
          atualizado_em?: string
          capa_caminho?: string | null
          criado_em?: string
          descricao_publica?: string | null
          download_publico?: boolean
          estudio_id: string
          id?: string
          nome: string
          observacoes?: string | null
          projeto_id: string
          publico_na_casa?: boolean
          publico_na_landing?: boolean
          reproducao_publica?: boolean
          selecionado_para_casa_em?: string | null
          tipo_publico?: string | null
          token_compartilhamento?: string | null
        }

        Update: {
          atualizado_em?: string
          capa_caminho?: string | null
          criado_em?: string
          descricao_publica?: string | null
          download_publico?: boolean
          estudio_id?: string
          id?: string
          nome?: string
          observacoes?: string | null
          projeto_id?: string
          publico_na_casa?: boolean
          publico_na_landing?: boolean
          reproducao_publica?: boolean
          selecionado_para_casa_em?: string | null
          tipo_publico?: string | null
          token_compartilhamento?: string | null
        }

        Relationships: [
          {
            foreignKeyName: "albuns_estudio_id_fkey"
            columns: ["estudio_id"]
            isOneToOne: false
            referencedRelation: "estudios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "albuns_projeto_id_fkey"
            columns: ["projeto_id"]
            isOneToOne: false
            referencedRelation: "projetos_artisticos"
            referencedColumns: ["id"]
          },
        ]
      }

      armazenamento_estudios: {
        Row: {
          atualizado_em: string
          criado_em: string
          estudio_id: string
          limite_bytes: number
        }

        Insert: {
          atualizado_em?: string
          criado_em?: string
          estudio_id: string
          limite_bytes: number
        }

        Update: {
          atualizado_em?: string
          criado_em?: string
          estudio_id?: string
          limite_bytes?: number
        }

        Relationships: [
          {
            foreignKeyName: "armazenamento_estudios_estudio_id_fkey"
            columns: ["estudio_id"]
            isOneToOne: true
            referencedRelation: "estudios"
            referencedColumns: ["id"]
          },
        ]
      }

      blocos_experiencia_imersiva: {
        Row: {
          atualizado_em: string
          conteudo: string | null
          criado_em: string
          estudio_id: string
          experiencia_id: string
          hold_point_segundos: number | null
          id: string
          imagem_caminho: string | null
          ordem: number
          teto_temporal_segundos: number | null
        }

        Insert: {
          atualizado_em?: string
          conteudo?: string | null
          criado_em?: string
          estudio_id: string
          experiencia_id: string
          hold_point_segundos?: number | null
          id?: string
          imagem_caminho?: string | null
          ordem: number
          teto_temporal_segundos?: number | null
        }

        Update: {
          atualizado_em?: string
          conteudo?: string | null
          criado_em?: string
          estudio_id?: string
          experiencia_id?: string
          hold_point_segundos?: number | null
          id?: string
          imagem_caminho?: string | null
          ordem?: number
          teto_temporal_segundos?: number | null
        }

        Relationships: [
          {
            foreignKeyName: "blocos_experiencia_imersiva_experiencia_fkey"
            columns: ["experiencia_id", "estudio_id"]
            isOneToOne: false
            referencedRelation: "experiencias_imersivas"
            referencedColumns: ["id", "estudio_id"]
          },
        ]
      }

      casa_ocultacoes: {
        Row: {
          conteudo_id: string
          motivo: string | null
          ocultado_em: string
          ocultado_por: string | null
          tipo_conteudo: string
        }

        Insert: {
          conteudo_id: string
          motivo?: string | null
          ocultado_em?: string
          ocultado_por?: string | null
          tipo_conteudo: string
        }

        Update: {
          conteudo_id?: string
          motivo?: string | null
          ocultado_em?: string
          ocultado_por?: string | null
          tipo_conteudo?: string
        }

        Relationships: []
      }

      cobranca_itens: {
        Row: {
          agendamento_id: string | null
          atualizado_em: string
          cobranca_id: string
          criado_em: string
          descricao: string
          estudio_id: string
          id: string
          quantidade: number
          valor_unitario: number
        }

        Insert: {
          agendamento_id?: string | null
          atualizado_em?: string
          cobranca_id: string
          criado_em?: string
          descricao: string
          estudio_id: string
          id?: string
          quantidade?: number
          valor_unitario: number
        }

        Update: {
          agendamento_id?: string | null
          atualizado_em?: string
          cobranca_id?: string
          criado_em?: string
          descricao?: string
          estudio_id?: string
          id?: string
          quantidade?: number
          valor_unitario?: number
        }

        Relationships: [
          {
            foreignKeyName: "cobranca_itens_agendamento_estudio_fkey"
            columns: ["agendamento_id", "estudio_id"]
            isOneToOne: false
            referencedRelation: "agendamentos"
            referencedColumns: ["id", "estudio_id"]
          },
          {
            foreignKeyName: "cobranca_itens_cobranca_estudio_fkey"
            columns: ["cobranca_id", "estudio_id"]
            isOneToOne: false
            referencedRelation: "cobrancas"
            referencedColumns: ["id", "estudio_id"]
          },
          {
            foreignKeyName: "cobranca_itens_cobranca_estudio_fkey"
            columns: ["cobranca_id", "estudio_id"]
            isOneToOne: false
            referencedRelation: "cobrancas_resumo"
            referencedColumns: ["id", "estudio_id"]
          },
          {
            foreignKeyName: "cobranca_itens_estudio_id_fkey"
            columns: ["estudio_id"]
            isOneToOne: false
            referencedRelation: "estudios"
            referencedColumns: ["id"]
          },
        ]
      }

      cobrancas: {
        Row: {
          atualizado_em: string
          contato_id: string
          criado_em: string
          estudio_id: string
          fechada_em: string | null
          id: string
          observacoes: string | null
          vencimento_em: string | null
        }

        Insert: {
          atualizado_em?: string
          contato_id: string
          criado_em?: string
          estudio_id: string
          fechada_em?: string | null
          id?: string
          observacoes?: string | null
          vencimento_em?: string | null
        }

        Update: {
          atualizado_em?: string
          contato_id?: string
          criado_em?: string
          estudio_id?: string
          fechada_em?: string | null
          id?: string
          observacoes?: string | null
          vencimento_em?: string | null
        }

        Relationships: [
          {
            foreignKeyName: "cobrancas_contato_estudio_fkey"
            columns: ["contato_id", "estudio_id"]
            isOneToOne: false
            referencedRelation: "contatos"
            referencedColumns: ["id", "estudio_id"]
          },
          {
            foreignKeyName: "cobrancas_estudio_id_fkey"
            columns: ["estudio_id"]
            isOneToOne: false
            referencedRelation: "estudios"
            referencedColumns: ["id"]
          },
        ]
      }

      configuracoes_casa: {
        Row: {
          atualizado_em: string
          id: string
          limite_trabalhos_por_estudio: number
        }

        Insert: {
          atualizado_em?: string
          id: string
          limite_trabalhos_por_estudio: number
        }

        Update: {
          atualizado_em?: string
          id?: string
          limite_trabalhos_por_estudio?: number
        }

        Relationships: []
      }

      contatos: {
        Row: {
          atualizado_em: string
          auth_user_id: string | null
          criado_em: string
          e_cliente: boolean
          email: string | null
          estudio_id: string
          id: string
          nome: string
          status_acesso: string
          telefone: string | null
        }

        Insert: {
          atualizado_em?: string
          auth_user_id?: string | null
          criado_em?: string
          e_cliente?: boolean
          email?: string | null
          estudio_id: string
          id?: string
          nome: string
          status_acesso?: string
          telefone?: string | null
        }

        Update: {
          atualizado_em?: string
          auth_user_id?: string | null
          criado_em?: string
          e_cliente?: boolean
          email?: string | null
          estudio_id?: string
          id?: string
          nome?: string
          status_acesso?: string
          telefone?: string | null
        }

        Relationships: [
          {
            foreignKeyName: "contatos_estudio_id_fkey"
            columns: ["estudio_id"]
            isOneToOne: false
            referencedRelation: "estudios"
            referencedColumns: ["id"]
          },
        ]
      }

      estudios: {
        Row: {
          atualizado_em: string
          cidade: string | null
          cor_principal: string | null
          criado_em: string
          descricao_publica: string | null
          embeds_publicos: Json
          id: string
          instagram: string | null
          landing_publicada: boolean
          logo_caminho: string | null
          modulos: string[]
          nome: string
          participar_da_casa: boolean
          slug: string
          status_plano: string
          tema_pagina_publica: string | null
          whatsapp_publico: string | null
        }

        Insert: {
          atualizado_em?: string
          cidade?: string | null
          cor_principal?: string | null
          criado_em?: string
          descricao_publica?: string | null
          embeds_publicos?: Json
          id: string
          instagram?: string | null
          landing_publicada?: boolean
          logo_caminho?: string | null
          modulos?: string[]
          nome: string
          participar_da_casa?: boolean
          slug: string
          status_plano?: string
          tema_pagina_publica?: string | null
          whatsapp_publico?: string | null
        }

        Update: {
          atualizado_em?: string
          cidade?: string | null
          cor_principal?: string | null
          criado_em?: string
          descricao_publica?: string | null
          embeds_publicos?: Json
          id?: string
          instagram?: string | null
          landing_publicada?: boolean
          logo_caminho?: string | null
          modulos?: string[]
          nome?: string
          participar_da_casa?: boolean
          slug?: string
          status_plano?: string
          tema_pagina_publica?: string | null
          whatsapp_publico?: string | null
        }

        Relationships: []
      }

      experiencias_imersivas: {
        Row: {
          album_id: string | null
          atualizado_em: string
          criado_em: string
          estudio_id: string
          id: string
          nome: string
          publicada_em: string | null
        }

        Insert: {
          album_id?: string | null
          atualizado_em?: string
          criado_em?: string
          estudio_id: string
          id?: string
          nome: string
          publicada_em?: string | null
        }

        Update: {
          album_id?: string | null
          atualizado_em?: string
          criado_em?: string
          estudio_id?: string
          id?: string
          nome?: string
          publicada_em?: string | null
        }

        Relationships: [
          {
            foreignKeyName: "experiencias_imersivas_album_id_fkey"
            columns: ["album_id"]
            isOneToOne: false
            referencedRelation: "albuns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "experiencias_imersivas_estudio_id_fkey"
            columns: ["estudio_id"]
            isOneToOne: false
            referencedRelation: "estudios"
            referencedColumns: ["id"]
          },
        ]
      }

      faixas: {
        Row: {
          atualizado_em: string
          bpm: number | null
          criado_em: string
          estudio_id: string
          id: string
          link_externo_audio: string | null
          observacoes: string | null
          projeto_id: string
          status_producao: Database["public"]["Enums"]["status_producao_faixa"]
          titulo: string
          tom: string | null
          versao_principal_id: string | null
        }

        Insert: {
          atualizado_em?: string
          bpm?: number | null
          criado_em?: string
          estudio_id: string
          id?: string
          link_externo_audio?: string | null
          observacoes?: string | null
          projeto_id: string
          status_producao?: Database["public"]["Enums"]["status_producao_faixa"]
          titulo: string
          tom?: string | null
          versao_principal_id?: string | null
        }

        Update: {
          atualizado_em?: string
          bpm?: number | null
          criado_em?: string
          estudio_id?: string
          id?: string
          link_externo_audio?: string | null
          observacoes?: string | null
          projeto_id?: string
          status_producao?: Database["public"]["Enums"]["status_producao_faixa"]
          titulo?: string
          tom?: string | null
          versao_principal_id?: string | null
        }

        Relationships: [
          {
            foreignKeyName: "faixas_estudio_id_fkey"
            columns: ["estudio_id"]
            isOneToOne: false
            referencedRelation: "estudios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "faixas_projeto_estudio_id_fkey"
            columns: ["projeto_id", "estudio_id"]
            isOneToOne: false
            referencedRelation: "projetos_artisticos"
            referencedColumns: ["id", "estudio_id"]
          },
          {
            foreignKeyName: "faixas_versao_principal_id_fkey"
            columns: ["versao_principal_id"]
            isOneToOne: false
            referencedRelation: "versoes_faixa"
            referencedColumns: ["id"]
          },
        ]
      }

      membros_projeto: {
        Row: {
          ativo: boolean
          atualizado_em: string
          contato_id: string
          criado_em: string
          estudio_id: string
          id: string
          papel: string
          projeto_id: string
          pode_acessar: boolean
          pode_enviar: boolean
          pode_comentar: boolean
        }

        Insert: {
          ativo?: boolean
          atualizado_em?: string
          contato_id: string
          criado_em?: string
          estudio_id: string
          id?: string
          papel: string
          projeto_id: string
          pode_acessar?: boolean
          pode_enviar?: boolean
          pode_comentar?: boolean
        }

        Update: {
          ativo?: boolean
          atualizado_em?: string
          contato_id?: string
          criado_em?: string
          estudio_id?: string
          id?: string
          papel?: string
          projeto_id?: string
          pode_acessar?: boolean
          pode_enviar?: boolean
          pode_comentar?: boolean
        }

        Relationships: [
          {
            foreignKeyName: "membros_projeto_contato_estudio_id_fkey"
            columns: ["contato_id", "estudio_id"]
            isOneToOne: false
            referencedRelation: "contatos"
            referencedColumns: ["id", "estudio_id"]
          },
          {
            foreignKeyName: "membros_projeto_estudio_id_fkey"
            columns: ["estudio_id"]
            isOneToOne: false
            referencedRelation: "estudios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "membros_projeto_projeto_estudio_id_fkey"
            columns: ["projeto_id", "estudio_id"]
            isOneToOne: false
            referencedRelation: "projetos_artisticos"
            referencedColumns: ["id", "estudio_id"]
          },
        ]
      }

      pagamentos: {
        Row: {
          cobranca_id: string
          criado_em: string
          estudio_id: string
          forma_pagamento: string | null
          id: string
          observacoes: string | null
          pagador_contato_id: string | null
          pago_em: string
          valor: number
        }

        Insert: {
          cobranca_id: string
          criado_em?: string
          estudio_id: string
          forma_pagamento?: string | null
          id?: string
          observacoes?: string | null
          pagador_contato_id?: string | null
          pago_em?: string
          valor: number
        }

        Update: {
          cobranca_id?: string
          criado_em?: string
          estudio_id?: string
          forma_pagamento?: string | null
          id?: string
          observacoes?: string | null
          pagador_contato_id?: string | null
          pago_em?: string
          valor?: number
        }

        Relationships: [
          {
            foreignKeyName: "pagamentos_cobranca_estudio_fkey"
            columns: ["cobranca_id", "estudio_id"]
            isOneToOne: false
            referencedRelation: "cobrancas"
            referencedColumns: ["id", "estudio_id"]
          },
          {
            foreignKeyName: "pagamentos_cobranca_estudio_fkey"
            columns: ["cobranca_id", "estudio_id"]
            isOneToOne: false
            referencedRelation: "cobrancas_resumo"
            referencedColumns: ["id", "estudio_id"]
          },
          {
            foreignKeyName: "pagamentos_estudio_id_fkey"
            columns: ["estudio_id"]
            isOneToOne: false
            referencedRelation: "estudios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pagamentos_pagador_estudio_fkey"
            columns: ["pagador_contato_id", "estudio_id"]
            isOneToOne: false
            referencedRelation: "contatos"
            referencedColumns: ["id", "estudio_id"]
          },
        ]
      }

      projetos_artisticos: {
        Row: {
          atualizado_em: string
          capa_caminho: string | null
          criado_em: string
          estudio_id: string
          id: string
          nome: string
          tipo: string
        }

        Insert: {
          atualizado_em?: string
          capa_caminho?: string | null
          criado_em?: string
          estudio_id: string
          id?: string
          nome: string
          tipo?: string
        }

        Update: {
          atualizado_em?: string
          capa_caminho?: string | null
          criado_em?: string
          estudio_id?: string
          id?: string
          nome?: string
          tipo?: string
        }

        Relationships: [
          {
            foreignKeyName: "projetos_artisticos_estudio_id_fkey"
            columns: ["estudio_id"]
            isOneToOne: false
            referencedRelation: "estudios"
            referencedColumns: ["id"]
          },
        ]
      }

      recursos_experiencia_imersiva: {
        Row: {
          atualizado_em: string
          chave_objeto: string | null
          confirmado_em: string | null
          criado_em: string
          estudio_id: string
          experiencia_id: string
          id: string
          nome: string
          nome_arquivo: string | null
          reserva_expira_em: string | null
          tamanho_bytes: number | null
          tipo_mime: string | null
          versao_id: string | null
        }

        Insert: {
          atualizado_em?: string
          chave_objeto?: string | null
          confirmado_em?: string | null
          criado_em?: string
          estudio_id: string
          experiencia_id: string
          id?: string
          nome: string
          nome_arquivo?: string | null
          reserva_expira_em?: string | null
          tamanho_bytes?: number | null
          tipo_mime?: string | null
          versao_id?: string | null
        }

        Update: {
          atualizado_em?: string
          chave_objeto?: string | null
          confirmado_em?: string | null
          criado_em?: string
          estudio_id?: string
          experiencia_id?: string
          id?: string
          nome?: string
          nome_arquivo?: string | null
          reserva_expira_em?: string | null
          tamanho_bytes?: number | null
          tipo_mime?: string | null
          versao_id?: string | null
        }

        Relationships: [
          {
            foreignKeyName: "recursos_experiencia_imersiva_experiencia_fkey"
            columns: ["experiencia_id", "estudio_id"]
            isOneToOne: false
            referencedRelation: "experiencias_imersivas"
            referencedColumns: ["id", "estudio_id"]
          },
          {
            foreignKeyName: "recursos_experiencia_imersiva_versao_id_fkey"
            columns: ["versao_id"]
            isOneToOne: false
            referencedRelation: "versoes_faixa"
            referencedColumns: ["id"]
          },
        ]
      }

      servicos: {
        Row: {
          duracao_minutos: number | null
          estudio_id: string
          id: string
          nome: string
          preco: number
          publico_na_landing: boolean
          tipo_cobranca: string
        }

        Insert: {
          duracao_minutos?: number | null
          estudio_id: string
          id?: string
          nome: string
          preco: number
          publico_na_landing?: boolean
          tipo_cobranca: string
        }

        Update: {
          duracao_minutos?: number | null
          estudio_id?: string
          id?: string
          nome?: string
          preco?: number
          publico_na_landing?: boolean
          tipo_cobranca?: string
        }

        Relationships: [
          {
            foreignKeyName: "servicos_estudio_id_fkey"
            columns: ["estudio_id"]
            isOneToOne: false
            referencedRelation: "estudios"
            referencedColumns: ["id"]
          },
        ]
      }

      versoes_faixa: {
        Row: {
          chave_objeto: string
          confirmado_em: string | null
          criado_em: string
          criado_por: string | null
          estudio_id: string
          faixa_id: string
          id: string
          nome_arquivo: string
          observacoes: string | null
          reserva_expira_em: string
          tamanho_bytes: number
          tipo_mime: string | null
          token_compartilhamento: string | null
          versao: string
        }

        Insert: {
          chave_objeto: string
          confirmado_em?: string | null
          criado_em?: string
          criado_por?: string | null
          estudio_id: string
          faixa_id: string
          id?: string
          nome_arquivo: string
          observacoes?: string | null
          reserva_expira_em?: string
          tamanho_bytes: number
          tipo_mime?: string | null
          token_compartilhamento?: string | null
          versao: string
        }

        Update: {
          chave_objeto?: string
          confirmado_em?: string | null
          criado_em?: string
          criado_por?: string | null
          estudio_id?: string
          faixa_id?: string
          id?: string
          nome_arquivo?: string
          observacoes?: string | null
          reserva_expira_em?: string
          tamanho_bytes?: number
          tipo_mime?: string | null
          token_compartilhamento?: string | null
          versao?: string
        }

        Relationships: [
          {
            foreignKeyName: "versoes_faixa_faixa_estudio_fkey"
            columns: ["faixa_id", "estudio_id"]
            isOneToOne: false
            referencedRelation: "faixas"
            referencedColumns: ["id", "estudio_id"]
          },
        ]
      }
    }

    Views: {
      cobrancas_resumo: {
        Row: {
          atualizado_em: string | null
          contato_id: string | null
          criado_em: string | null
          estudio_id: string | null
          fechada_em: string | null
          id: string | null
          observacoes: string | null
          saldo: number | null
          valor_pago: number | null
          valor_total: number | null
          vencimento_em: string | null
        }

        Relationships: [
          {
            foreignKeyName: "cobrancas_contato_estudio_fkey"
            columns: ["contato_id", "estudio_id"]
            isOneToOne: false
            referencedRelation: "contatos"
            referencedColumns: ["id", "estudio_id"]
          },
          {
            foreignKeyName: "cobrancas_estudio_id_fkey"
            columns: ["estudio_id"]
            isOneToOne: false
            referencedRelation: "estudios"
            referencedColumns: ["id"]
          },
        ]
      }
    }

    Functions: {
      calcular_uso_armazenamento_estudio: {
        Args: {
          p_estudio_id: string
          p_excluir_recurso_id?: string
          p_excluir_versao_id?: string
        }
        Returns: number
      }

      cancelar_reserva_upload_faixa: {
        Args: {
          p_versao_id: string
        }
        Returns: undefined
      }

      cancelar_reserva_upload_recurso_experiencia: {
        Args: {
          p_recurso_id: string
        }
        Returns: undefined
      }

      confirmar_upload_faixa: {
        Args: {
          p_tamanho_bytes_real: number
          p_versao_id: string
        }

        Returns: {
          chave_objeto: string
          confirmado_em: string | null
          criado_em: string
          estudio_id: string
          faixa_id: string
          id: string
          nome_arquivo: string
          observacoes: string | null
          reserva_expira_em: string
          tamanho_bytes: number
          tipo_mime: string | null
          token_compartilhamento: string | null
          versao: string
        }

        SetofOptions: {
          from: "*"
          to: "versoes_faixa"
          isOneToOne: true
          isSetofReturn: false
        }
      }

      confirmar_upload_faixa_execucao: {
        Args: {
          p_estudio_id: string
          p_tamanho_bytes_real: number
          p_versao_id: string
        }

        Returns: {
          chave_objeto: string
          confirmado_em: string | null
          criado_em: string
          estudio_id: string
          faixa_id: string
          id: string
          nome_arquivo: string
          observacoes: string | null
          reserva_expira_em: string
          tamanho_bytes: number
          tipo_mime: string | null
          token_compartilhamento: string | null
          versao: string
        }

        SetofOptions: {
          from: "*"
          to: "versoes_faixa"
          isOneToOne: true
          isSetofReturn: false
        }
      }

      confirmar_upload_faixa_interno: {
        Args: {
          p_estudio_id: string
          p_tamanho_bytes_real: number
          p_versao_id: string
        }

        Returns: {
          chave_objeto: string
          confirmado_em: string | null
          criado_em: string
          estudio_id: string
          faixa_id: string
          id: string
          nome_arquivo: string
          observacoes: string | null
          reserva_expira_em: string
          tamanho_bytes: number
          tipo_mime: string | null
          token_compartilhamento: string | null
          versao: string
        }

        SetofOptions: {
          from: "*"
          to: "versoes_faixa"
          isOneToOne: true
          isSetofReturn: false
        }
      }

      confirmar_upload_recurso_experiencia_interno: {
        Args: {
          p_estudio_id: string
          p_recurso_id: string
          p_tamanho_bytes_real: number
        }

        Returns: {
          atualizado_em: string
          chave_objeto: string | null
          confirmado_em: string | null
          criado_em: string
          estudio_id: string
          experiencia_id: string
          id: string
          nome: string
          nome_arquivo: string | null
          reserva_expira_em: string | null
          tamanho_bytes: number | null
          tipo_mime: string | null
          versao_id: string | null
        }

        SetofOptions: {
          from: "*"
          to: "recursos_experiencia_imersiva"
          isOneToOne: true
          isSetofReturn: false
        }
      }

      criar_agendamento: {
        Args: {
          p_contato_id: string
          p_fim: string
          p_inicio: string
          p_servicos: Json
        }
        Returns: string
      }

      criar_agendamento_interno: {
        Args: {
          p_contato_id: string
          p_fim: string
          p_inicio: string
          p_servicos: Json
        }
        Returns: string
      }

      criar_cobranca_agendamento: {
        Args: {
          p_agendamento_id: string
        }
        Returns: string
      }

      criar_cobranca_agendamento_interno: {
        Args: {
          p_agendamento_id: string
        }
        Returns: string
      }

      criar_link_compartilhamento_faixa: {
        Args: {
          p_versao_id: string
        }
        Returns: string
      }

      criar_link_compartilhamento_faixa_interno: {
        Args: {
          p_versao_id: string
        }
        Returns: string
      }

      definir_trabalho_na_casa: {
        Args: {
          exibir: boolean
          trabalho_id: string
        }
        Returns: boolean
      }

      estudio_possui_modulo: {
        Args: {
          p_estudio_id: string
          p_modulo: string
        }
        Returns: boolean
      }

      estudio_tem_modulo: {
        Args: {
          p_modulo: string
        }
        Returns: boolean
      }

      listar_casa: {
        Args: never
        Returns: {
          atualizado_em: string
          cidade: string
          cor_principal: string
          criado_em: string
          descricao_publica: string
          id: string
          logo_caminho: string
          nome: string
          servicos: string[]
          slug: string
        }[]
      }

      listar_trabalhos_casa: {
        Args: never
        Returns: {
          album_descricao: string
          album_id: string
          album_nome: string
          album_tipo: string
          capa_caminho: string
          download_publico: boolean
          estudio_cor_principal: string
          estudio_id: string
          estudio_nome: string
          estudio_slug: string
          projeto_nome: string
          reproducao_publica: boolean
          selecionado_para_casa_em: string
        }[]
      }

      obter_limite_trabalhos_casa: {
        Args: never
        Returns: number
      }

      reservar_upload_faixa: {
        Args: {
          p_chave_objeto: string
          p_faixa_id: string
          p_nome_arquivo: string
          p_observacoes: string
          p_tamanho_bytes: number
          p_tipo_mime: string
          p_versao: string
        }

        Returns: {
          chave_objeto: string
          confirmado_em: string | null
          criado_em: string
          estudio_id: string
          faixa_id: string
          id: string
          nome_arquivo: string
          observacoes: string | null
          reserva_expira_em: string
          tamanho_bytes: number
          tipo_mime: string | null
          token_compartilhamento: string | null
          versao: string
        }

        SetofOptions: {
          from: "*"
          to: "versoes_faixa"
          isOneToOne: true
          isSetofReturn: false
        }
      }

      reservar_upload_faixa_interno: {
        Args: {
          p_chave_objeto: string
          p_faixa_id: string
          p_nome_arquivo: string
          p_observacoes: string
          p_tamanho_bytes: number
          p_tipo_mime: string
          p_versao: string
        }

        Returns: {
          chave_objeto: string
          confirmado_em: string | null
          criado_em: string
          estudio_id: string
          faixa_id: string
          id: string
          nome_arquivo: string
          observacoes: string | null
          reserva_expira_em: string
          tamanho_bytes: number
          tipo_mime: string | null
          token_compartilhamento: string | null
          versao: string
        }

        SetofOptions: {
          from: "*"
          to: "versoes_faixa"
          isOneToOne: true
          isSetofReturn: false
        }
      }

      reservar_upload_recurso_experiencia: {
        Args: {
          p_chave_objeto: string
          p_experiencia_id: string
          p_nome: string
          p_nome_arquivo: string
          p_tamanho_bytes: number
          p_tipo_mime: string
        }

        Returns: {
          atualizado_em: string
          chave_objeto: string | null
          confirmado_em: string | null
          criado_em: string
          estudio_id: string
          experiencia_id: string
          id: string
          nome: string
          nome_arquivo: string | null
          reserva_expira_em: string | null
          tamanho_bytes: number | null
          tipo_mime: string | null
          versao_id: string | null
        }

        SetofOptions: {
          from: "*"
          to: "recursos_experiencia_imersiva"
          isOneToOne: true
          isSetofReturn: false
        }
      }

      revogar_link_compartilhamento_faixa: {
        Args: {
          p_versao_id: string
        }
        Returns: undefined
      }

      usuario_tem_acesso_como_contato: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }

    Enums: {
      status_producao_faixa:
        | "composicao"
        | "arranjos"
        | "gravacao"
        | "edicao"
        | "mixagem"
        | "masterizacao"
        | "concluido"
    }

    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema =
  DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },

  TableName extends (
    DefaultSchemaTableNameOrOptions extends {
      schema: keyof DatabaseWithoutInternals
    }
      ? keyof (
          DatabaseWithoutInternals[
            DefaultSchemaTableNameOrOptions["schema"]
          ]["Tables"] &
            DatabaseWithoutInternals[
              DefaultSchemaTableNameOrOptions["schema"]
            ]["Views"]
        )
      : never
  ) = never,
> =
  DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? (
        DatabaseWithoutInternals[
          DefaultSchemaTableNameOrOptions["schema"]
        ]["Tables"] &
          DatabaseWithoutInternals[
            DefaultSchemaTableNameOrOptions["schema"]
          ]["Views"]
      )[TableName] extends {
        Row: infer R
      }
      ? R
      : never
    : DefaultSchemaTableNameOrOptions extends keyof (
          DefaultSchema["Tables"] & DefaultSchema["Views"]
        )
      ? (
          DefaultSchema["Tables"] &
            DefaultSchema["Views"]
        )[DefaultSchemaTableNameOrOptions] extends {
          Row: infer R
        }
        ? R
        : never
      : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },

  TableName extends (
    DefaultSchemaTableNameOrOptions extends {
      schema: keyof DatabaseWithoutInternals
    }
      ? keyof DatabaseWithoutInternals[
          DefaultSchemaTableNameOrOptions["schema"]
        ]["Tables"]
      : never
  ) = never,
> =
  DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? DatabaseWithoutInternals[
        DefaultSchemaTableNameOrOptions["schema"]
      ]["Tables"][TableName] extends {
        Insert: infer I
      }
      ? I
      : never
    : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
      ? DefaultSchema["Tables"][
          DefaultSchemaTableNameOrOptions
        ] extends {
          Insert: infer I
        }
        ? I
        : never
      : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },

  TableName extends (
    DefaultSchemaTableNameOrOptions extends {
      schema: keyof DatabaseWithoutInternals
    }
      ? keyof DatabaseWithoutInternals[
          DefaultSchemaTableNameOrOptions["schema"]
        ]["Tables"]
      : never
  ) = never,
> =
  DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? DatabaseWithoutInternals[
        DefaultSchemaTableNameOrOptions["schema"]
      ]["Tables"][TableName] extends {
        Update: infer U
      }
      ? U
      : never
    : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
      ? DefaultSchema["Tables"][
          DefaultSchemaTableNameOrOptions
        ] extends {
          Update: infer U
        }
        ? U
        : never
      : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },

  EnumName extends (
    DefaultSchemaEnumNameOrOptions extends {
      schema: keyof DatabaseWithoutInternals
    }
      ? keyof DatabaseWithoutInternals[
          DefaultSchemaEnumNameOrOptions["schema"]
        ]["Enums"]
      : never
  ) = never,
> =
  DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? DatabaseWithoutInternals[
        DefaultSchemaEnumNameOrOptions["schema"]
      ]["Enums"][EnumName]
    : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
      ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
      : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },

  CompositeTypeName extends (
    PublicCompositeTypeNameOrOptions extends {
      schema: keyof DatabaseWithoutInternals
    }
      ? keyof DatabaseWithoutInternals[
          PublicCompositeTypeNameOrOptions["schema"]
        ]["CompositeTypes"]
      : never
  ) = never,
> =
  PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? DatabaseWithoutInternals[
        PublicCompositeTypeNameOrOptions["schema"]
      ]["CompositeTypes"][CompositeTypeName]
    : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
      ? DefaultSchema["CompositeTypes"][
          PublicCompositeTypeNameOrOptions
        ]
      : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },

  public: {
    Enums: {
      status_producao_faixa: [
        "composicao",
        "arranjos",
        "gravacao",
        "edicao",
        "mixagem",
        "masterizacao",
        "concluido",
      ],
    },
  },
} as const
