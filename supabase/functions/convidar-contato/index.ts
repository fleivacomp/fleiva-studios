import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function respostaJson(
  corpo: Record<string, unknown>,
  status = 200,
) {
  return new Response(
    JSON.stringify(corpo),
    {
      status,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    },
  );
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return respostaJson(
      {
        erro: "Método não permitido.",
      },
      405,
    );
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const supabaseServiceRoleKey = Deno.env.get(
      "SUPABASE_SERVICE_ROLE_KEY",
    );

    if (
      !supabaseUrl ||
      !supabaseAnonKey ||
      !supabaseServiceRoleKey
    ) {
      return respostaJson(
        {
          erro: "Variáveis de ambiente do Supabase não configuradas.",
        },
        500,
      );
    }

    const authorization =
      req.headers.get("Authorization");

    if (!authorization) {
      return respostaJson(
        {
          erro: "Usuário não autenticado.",
        },
        401,
      );
    }

    const supabase = createClient(
      supabaseUrl,
      supabaseAnonKey,
      {
        global: {
          headers: {
            Authorization: authorization,
          },
        },
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      },
    );

    const supabaseAdmin = createClient(
      supabaseUrl,
      supabaseServiceRoleKey,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      },
    );

    const {
      data: {
        user,
      },
      error: erroUsuario,
    } = await supabase.auth.getUser();

    if (erroUsuario || !user) {
      return respostaJson(
        {
          erro: "Não foi possível identificar o usuário autenticado.",
        },
        401,
      );
    }

    let corpo: {
      contato_id?: string;
    };

    try {
      corpo = await req.json();
    } catch {
      return respostaJson(
        {
          erro: "Corpo da requisição inválido.",
        },
        400,
      );
    }

    const contatoId = corpo.contato_id;

    if (!contatoId) {
      return respostaJson(
        {
          erro: "contatoId é obrigatório.",
        },
        400,
      );
    }

    const {
      data: contato,
      error: erroContato,
    } = await supabase
      .from("contatos")
      .select(
        `
          id,
          estudio_id,
          nome,
          email,
          auth_user_id,
          status_acesso
        `,
      )
      .eq("id", contatoId)
      .eq("estudio_id", user.id)
      .maybeSingle();

    if (erroContato) {
      console.error(
        "Erro ao buscar contato:",
        erroContato,
      );

      return respostaJson(
        {
          erro: "Não foi possível consultar o contato.",
          detalhe: erroContato.message,
        },
        500,
      );
    }

    if (!contato) {
      return respostaJson(
        {
          erro: "Contato não encontrado ou não pertence ao seu estúdio.",
        },
        404,
      );
    }

    if (!contato.email) {
      return respostaJson(
        {
          erro: "Este contato não possui um endereço de e-mail.",
        },
        400,
      );
    }

    if (contato.auth_user_id) {
      return respostaJson({
        sucesso: true,
        ja_vinculado: true,
        mensagem: "Este contato já está vinculado a uma conta.",
      });
    }

    const emailContato = contato.email
      .trim()
      .toLowerCase();

    /*
     * Verifica se já existe uma conta Auth com
     * exatamente o mesmo e-mail.
     *
     * Não usamos getUserByEmail(), pois esse método
     * não existe na API Admin Auth disponível aqui.
     */
    const {
      data: usuariosData,
      error: erroListaUsuarios,
    } =
      await supabaseAdmin.auth.admin.listUsers({
        page: 1,
        perPage: 1000,
      });

    if (erroListaUsuarios) {
      console.error(
        "Erro ao consultar usuários Auth:",
        erroListaUsuarios,
      );

      return respostaJson(
        {
          erro: "Não foi possível consultar as contas de usuário.",
          detalhe: erroListaUsuarios.message,
        },
        500,
      );
    }

    const usuarioExistente =
      usuariosData.users.find(
        (usuario) =>
          usuario.email
            ?.trim()
            .toLowerCase() === emailContato,
      ) ?? null;

    /*
     * Se já existe uma conta com o mesmo e-mail,
     * apenas vinculamos essa conta ao contato.
     *
     * O trigger do banco:
     * trg_marcar_contato_ativo
     *
     * atualizará automaticamente status_acesso
     * para "ativo".
     */
    if (usuarioExistente) {
      const {
        error: erroVinculo,
      } = await supabase
        .from("contatos")
        .update({
          auth_user_id: usuarioExistente.id,
        })
        .eq("id", contato.id)
        .eq("estudio_id", user.id);

      if (erroVinculo) {
        console.error(
          "Erro ao vincular usuário existente:",
          erroVinculo,
        );

        return respostaJson(
          {
            erro: "Não foi possível vincular a conta existente ao contato.",
            detalhe: erroVinculo.message,
          },
          500,
        );
      }

      return respostaJson({
        sucesso: true,
        ja_existia: true,
        usuario_id: usuarioExistente.id,
        mensagem:
          "A conta existente foi vinculada ao contato.",
      });
    }

    /*
     * Não existe uma conta com esse e-mail.
     *
     * Criamos o convite do Supabase Auth.
     */
    const {
      data: conviteData,
      error: erroConvite,
    } =
      await supabaseAdmin.auth.admin.inviteUserByEmail(
        emailContato,
        {
          redirectTo:
            "https://app.fleiva.com.br/convite",
        },
      );

    if (erroConvite) {
      console.error(
        "Erro ao enviar convite:",
        erroConvite,
      );

      return respostaJson(
        {
          erro: "Não foi possível enviar o convite.",
          detalhe: erroConvite.message,
        },
        500,
      );
    }

    const usuarioConvidado = conviteData.user;

    if (!usuarioConvidado) {
      return respostaJson(
        {
          erro:
            "O convite foi processado, mas o usuário não foi retornado pelo Supabase.",
        },
        500,
      );
    }

    /*
     * Vincula imediatamente a conta criada pelo convite
     * ao contato existente.
     *
     * O trigger do banco define status_acesso = "ativo".
     */
    const {
      error: erroVinculo,
    } = await supabase
      .from("contatos")
      .update({
        auth_user_id: usuarioConvidado.id,
      })
      .eq("id", contato.id)
      .eq("estudio_id", user.id);

    if (erroVinculo) {
      console.error(
        "Erro ao vincular usuário convidado:",
        erroVinculo,
      );

      return respostaJson(
        {
          erro:
            "O convite foi enviado, mas não foi possível vincular a conta ao contato.",
          detalhe: erroVinculo.message,
        },
        500,
      );
    }

    return respostaJson({
      sucesso: true,
      convite_enviado: true,
      usuario_id: usuarioConvidado.id,
      mensagem:
        "Convite enviado e contato vinculado com sucesso.",
    });
  } catch (erro) {
    console.error(
      "Erro inesperado na Edge Function:",
      erro,
    );

    return respostaJson(
      {
        erro: "Erro interno ao processar o convite.",
        detalhe:
          erro instanceof Error
            ? erro.message
            : String(erro),
      },
      500,
    );
  }
});
