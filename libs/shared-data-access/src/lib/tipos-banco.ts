export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
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
          fim: string
          id: string
          inicio: string
        }
        Insert: {
          contato_id: string
          estudio_id: string
          fim: string
          id?: string
          inicio: string
        }
        Update: {
          contato_id?: string
          estudio_id?: string
          fim?: string
          id?: string
          inicio?: string
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
      contatos: {
        Row: {
          atualizado_em: string
          criado_em: string
          e_cliente: boolean
          email: string | null
          estudio_id: string
          id: string
          nome: string
          telefone: string | null
        }
        Insert: {
          atualizado_em?: string
          criado_em?: string
          e_cliente?: boolean
          email?: string | null
          estudio_id: string
          id?: string
          nome: string
          telefone?: string | null
        }
        Update: {
          atualizado_em?: string
          criado_em?: string
          e_cliente?: boolean
          email?: string | null
          estudio_id?: string
          id?: string
          nome?: string
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
          criado_em: string
          id: string
          modulos: string[]
          nome: string
          slug: string
          status_plano: string
        }
        Insert: {
          atualizado_em?: string
          criado_em?: string
          id: string
          modulos?: string[]
          nome: string
          slug: string
          status_plano?: string
        }
        Update: {
          atualizado_em?: string
          criado_em?: string
          id?: string
          modulos?: string[]
          nome?: string
          slug?: string
          status_plano?: string
        }
        Relationships: []
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
          criado_em: string
          estudio_id: string
          id: string
          nome: string
          tipo: string
        }
        Insert: {
          atualizado_em?: string
          criado_em?: string
          estudio_id: string
          id?: string
          nome: string
          tipo?: string
        }
        Update: {
          atualizado_em?: string
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
      servicos: {
        Row: {
          duracao_minutos: number | null
          estudio_id: string
          id: string
          nome: string
          preco: number
          tipo_cobranca: string
        }
        Insert: {
          duracao_minutos?: number | null
          estudio_id: string
          id?: string
          nome: string
          preco: number
          tipo_cobranca: string
        }
        Update: {
          duracao_minutos?: number | null
          estudio_id?: string
          id?: string
          nome?: string
          preco?: number
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
      cancelar_reserva_upload_faixa: {
        Args: { p_versao_id: string }
        Returns: undefined
      }
      confirmar_upload_faixa: {
        Args: { p_tamanho_bytes_real: number; p_versao_id: string }
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
      criar_agendamento: {
        Args: {
          p_contato_id: string
          p_fim: string
          p_inicio: string
          p_servicos: Json
        }
        Returns: string
      }
      criar_cobranca_agendamento: {
        Args: { p_agendamento_id: string }
        Returns: string
      }
      criar_link_compartilhamento_faixa: {
        Args: { p_versao_id: string }
        Returns: string
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
      revogar_link_compartilhamento_faixa: {
        Args: { p_versao_id: string }
        Returns: undefined
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

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
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
