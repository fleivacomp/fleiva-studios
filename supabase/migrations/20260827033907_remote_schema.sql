set local check_function_bodies = off;

revoke all on function "public"."confirmar_upload_faixa"(uuid, bigint) from "authenticated";

revoke all on function "public"."criar_agendamento"(uuid, timestamp with time zone, timestamp with time zone, jsonb) from "service_role";

revoke all on function "public"."criar_cobranca_agendamento"(uuid) from "anon";

revoke all on function "public"."criar_cobranca_agendamento"(uuid) from "service_role";

revoke all on function "public"."criar_link_compartilhamento_faixa"(uuid) from "anon";

revoke all on function "public"."criar_link_compartilhamento_faixa"(uuid) from "service_role";

revoke all on function "public"."reservar_upload_faixa"(uuid, text, text, text, text, bigint, text) from "service_role";

revoke all on function "public"."revogar_link_compartilhamento_faixa"(uuid) from "anon";

revoke all on function "public"."rls_auto_enable"() from "anon";

revoke all on function "public"."rls_auto_enable"() from "authenticated";

revoke all on table "public"."estudios" from "anon";

drop policy "Usuários atualizam o próprio estúdio" on "public"."estudios";

drop policy "Usuários veem o próprio estúdio" on "public"."estudios";

create table "public"."casa_ocultacoes" (
  "tipo_conteudo" text                     not null,
  "conteudo_id"   uuid                     not null,
  "motivo"        text,
  "ocultado_em"   timestamp with time zone not null default timezone('utc'::text, now()),
  "ocultado_por"  uuid,
  constraint "casa_ocultacoes_pkey" primary key (tipo_conteudo, conteudo_id)
);

alter table "public"."casa_ocultacoes"
  enable row level security;

create table "public"."configuracoes_casa" (
  "id"                           text                     not null,
  "limite_trabalhos_por_estudio" integer                  not null,
  "atualizado_em"                timestamp with time zone not null default timezone('utc'::text, now()),
  constraint "configuracoes_casa_pkey" primary key (id)
);

alter table "public"."configuracoes_casa"
  enable row level security;

alter table "public"."agendamentos"
  add column "resultado" text;

alter table "public"."agendamentos"
  add column "observacoes_fechamento" text;

alter table "public"."agendamentos"
  add column "fechado_em" timestamp with time zone;

alter table "public"."albuns"
  add column "capa_caminho" text;

alter table "public"."albuns"
  add column "tipo_publico" text;

alter table "public"."albuns"
  add column "descricao_publica" text;

alter table "public"."albuns"
  add column "publico_na_casa" boolean not null default false;

alter table "public"."albuns"
  add column "selecionado_para_casa_em" timestamp with time zone;

alter table "public"."estudios"
  add column "cor_principal" text;

alter table "public"."estudios"
  add column "tema_pagina_publica" text;

alter table "public"."estudios"
  add column "embeds_publicos" jsonb not null default '[]'::jsonb;

alter table "public"."estudios"
  add column "participar_da_casa" boolean not null default false;

alter table "public"."projetos_artisticos"
  add column "capa_caminho" text;

alter table "public"."albuns"
  alter column "token_compartilhamento" drop not null;

alter table "public"."estudios"
  alter column "modulos" set default '{}'::text[];

alter table "public"."estudios"
  alter column "status_plano" set default 'free'::character varying;

create or replace function public.ajustar_publicacao_album_na_casa()
  returns trigger
  language plpgsql
  set search_path to ''
  AS $function$
begin
  if new.publico_na_landing is false then
    new.publico_na_casa := false;
    new.selecionado_para_casa_em := null;
  end if;

  return new;
end;
$function$;

create or replace function public.confirmar_upload_faixa_execucao (
  p_estudio_id         uuid,
  p_versao_id          uuid,
  p_tamanho_bytes_real bigint
)
  returns public.versoes_faixa
  language plpgsql
  security definer
  set search_path to ''
  AS $function$
declare
  v_limite_bytes bigint;
  v_usado_bytes bigint;
  v_registro public.versoes_faixa;
begin
  if p_estudio_id is null then
    raise exception 'Estúdio não informado.';
  end if;

  if p_tamanho_bytes_real is null
    or p_tamanho_bytes_real <= 0
  then
    raise exception 'O tamanho real do arquivo é inválido.';
  end if;

  select *
  into v_registro
  from public.versoes_faixa
  where id = p_versao_id
    and estudio_id = p_estudio_id
    and chave_objeto like p_estudio_id::text || '/%'
  for update;

  if not found then
    raise exception 'Reserva de upload não encontrada.';
  end if;

  select limite_bytes
  into v_limite_bytes
  from public.armazenamento_estudios
  where estudio_id = p_estudio_id
  for update;

  if v_limite_bytes is null then
    raise exception
      'O armazenamento não está disponível para este estúdio.';
  end if;

  select coalesce(
    sum(tamanho_bytes),
    0
  )
  into v_usado_bytes
  from public.versoes_faixa
  where estudio_id = p_estudio_id
    and id <> p_versao_id
    and (
      confirmado_em is not null
      or reserva_expira_em > now()
    );

  if (
    v_usado_bytes +
    p_tamanho_bytes_real
  ) > v_limite_bytes then
    raise exception
      'Limite de armazenamento excedido.';
  end if;

  update public.versoes_faixa
  set
    tamanho_bytes = p_tamanho_bytes_real,
    confirmado_em = coalesce(
      confirmado_em,
      now()
    )
  where id = p_versao_id
    and estudio_id = p_estudio_id
  returning *
  into v_registro;

  return v_registro;
end;
$function$;

create or replace function public.confirmar_upload_faixa_interno (
  p_estudio_id         uuid,
  p_versao_id          uuid,
  p_tamanho_bytes_real bigint
)
  returns public.versoes_faixa
  language plpgsql
  security definer
  set search_path to ''
  AS $function$
begin
  if not public.estudio_possui_modulo(
    p_estudio_id,
    'faixas'
  ) then
    raise exception
      'O acervo de faixas não está disponível neste plano.';
  end if;

  return public.confirmar_upload_faixa_execucao(
    p_estudio_id,
    p_versao_id,
    p_tamanho_bytes_real
  );
end;
$function$;

create or replace function public.criar_agendamento (
  p_contato_id uuid,
  p_inicio     timestamp with time zone,
  p_fim        timestamp with time zone,
  p_servicos   jsonb
)
  returns uuid
  language plpgsql
  security definer
  set search_path to ''
  AS $function$
begin
  if not public.estudio_tem_modulo(
    'agenda'
  ) then
    raise exception
      'A agenda não está disponível neste plano.';
  end if;

  return public.criar_agendamento_interno(
    p_contato_id,
    p_inicio,
    p_fim,
    p_servicos
  );
end;
$function$;

create or replace function public.criar_agendamento_interno (
  p_contato_id uuid,
  p_inicio     timestamp with time zone,
  p_fim        timestamp with time zone,
  p_servicos   jsonb
)
  returns uuid
  language plpgsql
  security definer
  set search_path to ''
  AS $function$
declare
  estudio_atual uuid := auth.uid();
  agendamento_criado uuid;
  servico_atual uuid;
  item jsonb;
begin
  if estudio_atual is null then
    raise exception 'Usuário não autenticado.';
  end if;

  if p_servicos is null
    or jsonb_typeof(p_servicos) <> 'array'
    or jsonb_array_length(p_servicos) = 0
  then
    raise exception 'O agendamento precisa ter pelo menos um serviço.';
  end if;

  insert into public.agendamentos (
    estudio_id,
    contato_id,
    inicio,
    fim
  )
  values (
    estudio_atual,
    p_contato_id,
    p_inicio,
    p_fim
  )
  returning id into agendamento_criado;

  for item in
    select value from jsonb_array_elements(p_servicos)
  loop
    select id
    into servico_atual
    from public.servicos
    where id = (item ->> 'servico_id')::uuid
      and estudio_id = estudio_atual;

    if not found then
      raise exception 'Serviço inválido ou pertencente a outro estúdio.';
    end if;

    insert into public.agendamento_servicos (
      estudio_id,
      agendamento_id,
      servico_id,
      quantidade
    )
    values (
      estudio_atual,
      agendamento_criado,
      servico_atual,
      coalesce((item ->> 'quantidade')::numeric, 1)
    );
  end loop;

  return agendamento_criado;
end;
$function$;

create or replace function public.criar_cobranca_agendamento (
  p_agendamento_id uuid
)
  returns uuid
  language plpgsql
  security definer
  set search_path to ''
  AS $function$
begin
  if not public.estudio_tem_modulo(
    'agenda'
  ) then
    raise exception
      'A agenda não está disponível neste plano.';
  end if;

  if not public.estudio_tem_modulo(
    'financeiro'
  ) then
    raise exception
      'Os acertos não estão disponíveis neste plano.';
  end if;

  return public.criar_cobranca_agendamento_interno(
    p_agendamento_id
  );
end;
$function$;

create or replace function public.criar_cobranca_agendamento_interno (
  p_agendamento_id uuid
)
  returns uuid
  language plpgsql
  security definer
  set search_path to ''
  AS $function$
declare
  v_estudio_id uuid;
  v_contato_id uuid;
  v_cobranca_id uuid;
  v_quantidade_itens integer;
begin
  v_estudio_id := auth.uid();

  if v_estudio_id is null then
    raise exception 'Usuário não autenticado.';
  end if;

  select agendamento.contato_id
  into v_contato_id
  from public.agendamentos as agendamento
  where agendamento.id = p_agendamento_id
    and agendamento.estudio_id = v_estudio_id;

  if not found then
    raise exception 'Agendamento não encontrado.';
  end if;

  insert into public.cobrancas (
    estudio_id,
    contato_id
  )
  values (
    v_estudio_id,
    v_contato_id
  )
  returning id
  into v_cobranca_id;

  insert into public.cobranca_itens (
    estudio_id,
    cobranca_id,
    agendamento_id,
    descricao,
    quantidade,
    valor_unitario
  )
  select
    v_estudio_id,
    v_cobranca_id,
    agendamento_servico.agendamento_id,
    servico.nome,
    agendamento_servico.quantidade,
    servico.preco
  from public.agendamento_servicos
    as agendamento_servico
  join public.servicos as servico
    on servico.id =
      agendamento_servico.servico_id
    and servico.estudio_id =
      agendamento_servico.estudio_id
  where agendamento_servico.agendamento_id =
      p_agendamento_id
    and agendamento_servico.estudio_id =
      v_estudio_id;

  get diagnostics
    v_quantidade_itens = row_count;

  if v_quantidade_itens = 0 then
    raise exception
      'O agendamento não possui serviços.';
  end if;

  return v_cobranca_id;
end;
$function$;

create or replace function public.criar_estudio_para_novo_usuario()
  returns trigger
  language plpgsql
  security definer
  set search_path to ''
  AS $function$
declare
  nome_inicial text;
  slug_interno text;
begin
  nome_inicial := coalesce(
    nullif(
      btrim(
        new.raw_user_meta_data ->> 'nome'
      ),
      ''
    ),
    nullif(
      split_part(
        coalesce(new.email, ''),
        '@',
        1
      ),
      ''
    ),
    'Novo perfil'
  );

  slug_interno :=
    'conta-' ||
    replace(new.id::text, '-', '');

  insert into public.estudios (
    id,
    nome,
    slug,
    modulos,
    status_plano,
    landing_publicada
  )
  values (
    new.id,
    left(nome_inicial, 255),
    slug_interno,
    '{}'::text[],
    'free',
    false
  )
  on conflict (id) do nothing;

  return new;
end;
$function$;

create or replace function public.criar_link_compartilhamento_faixa (
  p_versao_id uuid
)
  returns uuid
  language plpgsql
  security definer
  set search_path to ''
  AS $function$
begin
  if not public.estudio_tem_modulo(
    'faixas'
  ) then
    raise exception
      'O compartilhamento de faixas não está disponível neste plano.';
  end if;

  return public.criar_link_compartilhamento_faixa_interno(
    p_versao_id
  );
end;
$function$;

create or replace function public.criar_link_compartilhamento_faixa_interno (
  p_versao_id uuid
)
  returns uuid
  language plpgsql
  security definer
  set search_path to ''
  AS $function$
declare
  v_token uuid;
begin
  if auth.uid() is null then
    raise exception 'Usuário não autenticado.';
  end if;

  update public.versoes_faixa
  set token_compartilhamento = coalesce(
    token_compartilhamento,
    gen_random_uuid()
  )
  where id = p_versao_id
    and estudio_id = auth.uid()
    and confirmado_em is not null
  returning token_compartilhamento
  into v_token;

  if not found then
    raise exception 'Versão não encontrada.';
  end if;

  return v_token;
end;
$function$;

create or replace function public.definir_trabalho_na_casa (
  trabalho_id uuid,
  exibir      boolean
)
  returns boolean
  language plpgsql
  security definer
  set search_path to ''
  AS $function$
declare
  estudio_atual uuid;
  trabalho_publicado boolean;
  total_selecionado integer;
  limite_atual integer;
begin
  estudio_atual := auth.uid();

  if estudio_atual is null then
    raise exception 'Usuário não autenticado.';
  end if;

  select album.publico_na_landing
  into trabalho_publicado
  from public.albuns as album
  where album.id = trabalho_id
    and album.estudio_id = estudio_atual;

  if not found then
    raise exception 'Trabalho não encontrado.';
  end if;

  if exibir is true then
    if trabalho_publicado is false then
      raise exception
        'Publique o trabalho no perfil antes de adicioná-lo à Casa.';
    end if;

    select public.obter_limite_trabalhos_casa()
    into limite_atual;

    select count(*)::integer
    into total_selecionado
    from public.albuns as album
    where album.estudio_id = estudio_atual
      and album.publico_na_casa is true
      and album.id <> trabalho_id;

    if total_selecionado >= limite_atual then
      raise exception
        'O limite atual de trabalhos selecionados para a Casa foi atingido.';
    end if;

    update public.albuns
    set
      publico_na_casa = true,
      selecionado_para_casa_em = timezone('utc', now())
    where id = trabalho_id
      and estudio_id = estudio_atual;
  else
    update public.albuns
    set
      publico_na_casa = false,
      selecionado_para_casa_em = null
    where id = trabalho_id
      and estudio_id = estudio_atual;
  end if;

  return exibir;
end;
$function$;

create or replace function public.estudio_possui_modulo (
  p_estudio_id uuid,
  p_modulo     text
)
  returns boolean
  language sql
  stable
  security definer
  set search_path to ''
  AS $function$
  select exists (
    select 1
    from public.estudios estudio
    where estudio.id = p_estudio_id
      and p_modulo = any(estudio.modulos)
  );
$function$;

create or replace function public.estudio_tem_modulo (
  p_modulo text
)
  returns boolean
  language sql
  stable
  security definer
  set search_path to ''
  AS $function$
  select exists (
    select 1
    from public.estudios estudio
    where estudio.id = (
      select auth.uid()
    )
      and p_modulo = any(estudio.modulos)
  );
$function$;

create or replace function public.listar_casa()
  returns table (
    id                uuid,
    nome              text,
    slug              text,
    cidade            text,
    descricao_publica text,
    servicos          text[],
    cor_principal     text,
    logo_caminho      text,
    criado_em         timestamp with time zone,
    atualizado_em     timestamp with time zone
  )
  language sql
  stable
  security definer
  set search_path to ''
  AS $function$
  select
    estudio.id,
    estudio.nome,
    estudio.slug,
    estudio.cidade,
    estudio.descricao_publica,
    array(
      select servico.nome
      from public.servicos as servico
      where servico.estudio_id = estudio.id
        and servico.publico_na_landing is true
      order by
        lower(servico.nome),
        servico.id
      limit 3
    ) as servicos,
    estudio.cor_principal,
    estudio.logo_caminho,
    estudio.criado_em,
    estudio.atualizado_em
  from public.estudios as estudio
  where estudio.landing_publicada is true
    and estudio.participar_da_casa is true
    and not exists (
      select 1
      from public.casa_ocultacoes as ocultacao
      where ocultacao.tipo_conteudo = 'estudio'
        and ocultacao.conteudo_id = estudio.id
    )
  order by
    estudio.criado_em desc,
    estudio.nome asc;
$function$;

create or replace function public.listar_trabalhos_casa()
  returns table (
    album_id                 uuid,
    album_nome               text,
    album_tipo               text,
    album_descricao          text,
    capa_caminho             text,
    reproducao_publica       boolean,
    download_publico         boolean,
    selecionado_para_casa_em timestamp with time zone,
    estudio_id               uuid,
    estudio_nome             text,
    estudio_slug             text,
    estudio_cor_principal    text,
    projeto_nome             text
  )
  language sql
  stable
  security definer
  set search_path to ''
  AS $function$
  select
    album.id as album_id,
    album.nome as album_nome,
    album.tipo_publico as album_tipo,
    album.descricao_publica as album_descricao,
    coalesce(
      album.capa_caminho,
      projeto.capa_caminho
    ) as capa_caminho,
    album.reproducao_publica,
    album.download_publico,
    album.selecionado_para_casa_em,
    estudio.id as estudio_id,
    estudio.nome as estudio_nome,
    estudio.slug as estudio_slug,
    estudio.cor_principal as estudio_cor_principal,
    projeto.nome as projeto_nome
  from public.albuns as album
  inner join public.estudios as estudio
    on estudio.id = album.estudio_id
  inner join public.projetos_artisticos as projeto
    on projeto.id = album.projeto_id
  where album.publico_na_landing is true
    and album.publico_na_casa is true
    and estudio.landing_publicada is true
    and estudio.participar_da_casa is true
    and not exists (
      select 1
      from public.casa_ocultacoes as ocultacao
      where ocultacao.tipo_conteudo = 'estudio'
        and ocultacao.conteudo_id = estudio.id
    )
    and not exists (
      select 1
      from public.casa_ocultacoes as ocultacao
      where ocultacao.tipo_conteudo = 'album'
        and ocultacao.conteudo_id = album.id
    )
  order by
    album.selecionado_para_casa_em desc,
    album.id;
$function$;

create or replace function public.obter_limite_trabalhos_casa()
  returns integer
  language sql
  stable
  security definer
  set search_path to ''
  AS $function$
  select coalesce(
    (
      select configuracao.limite_trabalhos_por_estudio
      from public.configuracoes_casa as configuracao
      where configuracao.id = 'principal'
    ),
    2
  );
$function$;

create or replace function public.reservar_upload_faixa (
  p_faixa_id      uuid,
  p_versao        text,
  p_observacoes   text,
  p_nome_arquivo  text,
  p_chave_objeto  text,
  p_tamanho_bytes bigint,
  p_tipo_mime     text
)
  returns public.versoes_faixa
  language plpgsql
  security definer
  set search_path to ''
  AS $function$
begin
  if not public.estudio_tem_modulo(
    'faixas'
  ) then
    raise exception
      'O acervo de faixas não está disponível neste plano.';
  end if;

  return public.reservar_upload_faixa_interno(
    p_faixa_id,
    p_versao,
    p_observacoes,
    p_nome_arquivo,
    p_chave_objeto,
    p_tamanho_bytes,
    p_tipo_mime
  );
end;
$function$;

create or replace function public.reservar_upload_faixa_interno (
  p_faixa_id      uuid,
  p_versao        text,
  p_observacoes   text,
  p_nome_arquivo  text,
  p_chave_objeto  text,
  p_tamanho_bytes bigint,
  p_tipo_mime     text
)
  returns public.versoes_faixa
  language plpgsql
  security definer
  set search_path to ''
  AS $function$
declare
  v_estudio_id uuid;
  v_limite_bytes bigint;
  v_usado_bytes bigint;
  v_registro public.versoes_faixa;
begin
  v_estudio_id := auth.uid();

  if v_estudio_id is null then
    raise exception 'Usuário não autenticado.';
  end if;

  if p_tamanho_bytes is null or p_tamanho_bytes <= 0 then
    raise exception 'O tamanho do arquivo é inválido.';
  end if;

  if not exists (
    select 1
    from public.faixas
    where id = p_faixa_id
      and estudio_id = v_estudio_id
  ) then
    raise exception 'Faixa não encontrada.';
  end if;

  select limite_bytes
  into v_limite_bytes
  from public.armazenamento_estudios
  where estudio_id = v_estudio_id
  for update;

  if v_limite_bytes is null then
    raise exception 'O armazenamento não está disponível para este estúdio.';
  end if;

  select coalesce(sum(tamanho_bytes), 0)
  into v_usado_bytes
  from public.versoes_faixa
  where estudio_id = v_estudio_id
    and (
      confirmado_em is not null
      or reserva_expira_em > now()
    );

  if v_usado_bytes + p_tamanho_bytes > v_limite_bytes then
    raise exception 'Limite de armazenamento excedido.';
  end if;

  insert into public.versoes_faixa (
    estudio_id,
    faixa_id,
    versao,
    observacoes,
    nome_arquivo,
    chave_objeto,
    tamanho_bytes,
    tipo_mime
  )
  values (
    v_estudio_id,
    p_faixa_id,
    trim(p_versao),
    nullif(trim(p_observacoes), ''),
    trim(p_nome_arquivo),
    p_chave_objeto,
    p_tamanho_bytes,
    nullif(trim(p_tipo_mime), '')
  )
  returning *
  into v_registro;

  return v_registro;
end;
$function$;

alter table "public"."casa_ocultacoes"
  add constraint "casa_ocultacoes_ocultado_por_fkey" foreign key (ocultado_por) references auth.users(id) on delete set null;

alter table "public"."estudios"
  add constraint "estudios_embeds_publicos_validos" check (((jsonb_typeof(embeds_publicos) = 'array'::text) AND (jsonb_array_length(embeds_publicos) <= 4)));

create trigger criar_estudio_apos_cadastro
  after insert on auth.users
  for each row
  execute function public.criar_estudio_para_novo_usuario();

create trigger ajustar_publicacao_album_na_casa
  before insert or update of publico_na_landing, publico_na_casa on public.albuns
  for each row
  execute function public.ajustar_publicacao_album_na_casa();

create policy "Plano permite serviços do agendamento" on "public"."agendamento_servicos"
  as restrictive
  for all
  to "authenticated"
  using (public.estudio_tem_modulo('agenda'::text))
  with check (public.estudio_tem_modulo('agenda'::text));

create policy "Plano permite agendamentos" on "public"."agendamentos"
  as restrictive
  for all
  to "authenticated"
  using (public.estudio_tem_modulo('agenda'::text))
  with check (public.estudio_tem_modulo('agenda'::text));

create policy "Plano permite faixas de álbuns" on "public"."album_faixas"
  as restrictive
  for all
  to "authenticated"
  using (public.estudio_tem_modulo('faixas'::text))
  with check (public.estudio_tem_modulo('faixas'::text));

create policy "Plano permite álbuns" on "public"."albuns"
  as restrictive
  for all
  to "authenticated"
  using (public.estudio_tem_modulo('faixas'::text))
  with check (public.estudio_tem_modulo('faixas'::text));

create policy "Plano permite itens de cobrança" on "public"."cobranca_itens"
  as restrictive
  for all
  to "authenticated"
  using (public.estudio_tem_modulo('financeiro'::text))
  with check (public.estudio_tem_modulo('financeiro'::text));

create policy "Plano permite cobranças" on "public"."cobrancas"
  as restrictive
  for all
  to "authenticated"
  using (public.estudio_tem_modulo('financeiro'::text))
  with check (public.estudio_tem_modulo('financeiro'::text));

create policy "Plano permite contatos" on "public"."contatos"
  as restrictive
  for all
  to "authenticated"
  using (public.estudio_tem_modulo('agenda'::text))
  with check (public.estudio_tem_modulo('agenda'::text));

create policy "Usuários atualizam o próprio estúdio" on "public"."estudios"
  for update
  to "authenticated"
  using ((( select auth.uid() as uid) = id))
  with check ((( SELECT auth.uid() AS uid) = id));

create policy "Usuários veem o próprio estúdio" on "public"."estudios"
  for select
  to "authenticated"
  using ((( select auth.uid() as uid) = id));

create policy "Plano permite faixas" on "public"."faixas"
  as restrictive
  for all
  to "authenticated"
  using (public.estudio_tem_modulo('faixas'::text))
  with check (public.estudio_tem_modulo('faixas'::text));

create policy "Plano permite membros de projetos" on "public"."membros_projeto"
  as restrictive
  for all
  to "authenticated"
  using (public.estudio_tem_modulo('artistas'::text))
  with check (public.estudio_tem_modulo('artistas'::text));

create policy "Plano permite pagamentos" on "public"."pagamentos"
  as restrictive
  for all
  to "authenticated"
  using (public.estudio_tem_modulo('financeiro'::text))
  with check (public.estudio_tem_modulo('financeiro'::text));

create policy "Plano permite projetos" on "public"."projetos_artisticos"
  as restrictive
  for all
  to "authenticated"
  using (public.estudio_tem_modulo('artistas'::text))
  with check (public.estudio_tem_modulo('artistas'::text));

create policy "Plano permite serviços" on "public"."servicos"
  as restrictive
  for all
  to "authenticated"
  using (public.estudio_tem_modulo('agenda'::text))
  with check (public.estudio_tem_modulo('agenda'::text));

create policy "Plano permite versões" on "public"."versoes_faixa"
  as restrictive
  for all
  to "authenticated"
  using (public.estudio_tem_modulo('faixas'::text))
  with check (public.estudio_tem_modulo('faixas'::text));

comment on column "public"."agendamentos"."fechado_em" is 'Data e horário em que o resultado foi registrado.';

comment on column "public"."agendamentos"."observacoes_fechamento" is 'Observações livres registradas ao fechar o agendamento.';

comment on column "public"."agendamentos"."resultado" is 'Resultado operacional do agendamento, como concluido, cancelado, reagendado ou nao_compareceu.';

grant execute on function "public"."ajustar_publicacao_album_na_casa"() to public, "anon", "authenticated", "postgres", "service_role";

revoke all on function "public"."confirmar_upload_faixa_execucao"(uuid, uuid, bigint) from public;

grant execute on function "public"."confirmar_upload_faixa_execucao"(uuid, uuid, bigint) to "postgres";

revoke all on function "public"."confirmar_upload_faixa_interno"(uuid, uuid, bigint) from public;

grant execute on function "public"."confirmar_upload_faixa_interno"(uuid, uuid, bigint) to "postgres", "service_role";

revoke all on function "public"."criar_agendamento_interno"(uuid, timestamp with time zone, timestamp with time zone, jsonb) from public;

grant execute on function "public"."criar_agendamento_interno"(uuid, timestamp with time zone, timestamp with time zone, jsonb) to "postgres";

revoke all on function "public"."criar_cobranca_agendamento_interno"(uuid) from public;

grant execute on function "public"."criar_cobranca_agendamento_interno"(uuid) to "postgres";

revoke all on function "public"."criar_estudio_para_novo_usuario"() from public;

grant execute on function "public"."criar_estudio_para_novo_usuario"() to "postgres", "service_role";

revoke all on function "public"."criar_link_compartilhamento_faixa_interno"(uuid) from public;

grant execute on function "public"."criar_link_compartilhamento_faixa_interno"(uuid) to "postgres";

revoke all on function "public"."definir_trabalho_na_casa"(uuid, boolean) from public;

grant execute on function "public"."definir_trabalho_na_casa"(uuid, boolean) to "anon", "authenticated", "postgres", "service_role";

revoke all on function "public"."estudio_possui_modulo"(uuid, text) from public;

grant execute on function "public"."estudio_possui_modulo"(uuid, text) to "postgres";

revoke all on function "public"."estudio_tem_modulo"(text) from public;

grant execute on function "public"."estudio_tem_modulo"(text) to "authenticated", "postgres", "service_role";

revoke all on function "public"."listar_casa"() from public;

grant execute on function "public"."listar_casa"() to "anon", "authenticated", "postgres", "service_role";

revoke all on function "public"."listar_trabalhos_casa"() from public;

grant execute on function "public"."listar_trabalhos_casa"() to "anon", "authenticated", "postgres", "service_role";

revoke all on function "public"."obter_limite_trabalhos_casa"() from public;

grant execute on function "public"."obter_limite_trabalhos_casa"() to "anon", "authenticated", "postgres", "service_role";

revoke all on function "public"."reservar_upload_faixa_interno"(uuid, text, text, text, text, bigint, text) from public;

grant execute on function "public"."reservar_upload_faixa_interno"(uuid, text, text, text, text, bigint, text) to "postgres";

revoke all on function "public"."rls_auto_enable"() from public;

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."casa_ocultacoes" to "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."configuracoes_casa" to "anon", "authenticated", "postgres", "service_role";

revoke all ("cidade") on table "public"."estudios" from "authenticated";

grant update ("cidade") on table "public"."estudios" to "authenticated";

revoke all ("cor_principal") on table "public"."estudios" from "authenticated";

grant update ("cor_principal") on table "public"."estudios" to "authenticated";

revoke all ("descricao_publica") on table "public"."estudios" from "authenticated";

grant update ("descricao_publica") on table "public"."estudios" to "authenticated";

revoke all ("embeds_publicos") on table "public"."estudios" from "authenticated";

grant update ("embeds_publicos") on table "public"."estudios" to "authenticated";

revoke all ("instagram") on table "public"."estudios" from "authenticated";

grant update ("instagram") on table "public"."estudios" to "authenticated";

revoke all ("landing_publicada") on table "public"."estudios" from "authenticated";

grant update ("landing_publicada") on table "public"."estudios" to "authenticated";

revoke all ("logo_caminho") on table "public"."estudios" from "authenticated";

grant update ("logo_caminho") on table "public"."estudios" to "authenticated";

revoke all ("nome") on table "public"."estudios" from "authenticated";

grant update ("nome") on table "public"."estudios" to "authenticated";

revoke all ("participar_da_casa") on table "public"."estudios" from "authenticated";

grant update ("participar_da_casa") on table "public"."estudios" to "authenticated";

revoke all ("slug") on table "public"."estudios" from "authenticated";

grant update ("slug") on table "public"."estudios" to "authenticated";

revoke all ("tema_pagina_publica") on table "public"."estudios" from "authenticated";

grant update ("tema_pagina_publica") on table "public"."estudios" to "authenticated";

revoke all ("whatsapp_publico") on table "public"."estudios" from "authenticated";

grant update ("whatsapp_publico") on table "public"."estudios" to "authenticated";

revoke all on table "public"."estudios" from "authenticated";

grant maintain, select on table "public"."estudios" to "authenticated";

