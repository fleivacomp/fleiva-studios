set local check_function_bodies = off;

alter default privileges for role "postgres" in schema "public" revoke all on sequences from "anon";

alter default privileges for role "postgres" in schema "public" revoke all on sequences from "authenticated";

alter default privileges for role "postgres" in schema "public" revoke all on sequences from "service_role";

alter default privileges for role "postgres" in schema "public" revoke all on tables from "anon";

alter default privileges for role "postgres" in schema "public" revoke all on tables from "authenticated";

alter default privileges for role "postgres" in schema "public" revoke all on tables from "service_role";

create table "public"."contatos" (
  "id"         uuid                     not null default gen_random_uuid(),
  "estudio_id" uuid                     not null,
  "criado_em"  timestamp with time zone not null default timezone('utc'::text, now()),
  "nome"       character varying(255)   not null,
  "email"      character varying(255),
  "telefone"   character varying(50),
  "e_cliente"  boolean                  not null default true,
  constraint "contatos_pkey" primary key (id)
);

alter table "public"."contatos"
  enable row level security;

create table "public"."estudios" (
  "id"           uuid                     not null,
  "criado_em"    timestamp with time zone not null default timezone('utc'::text, now()),
  "nome"         character varying(255)   not null,
  "slug"         character varying(100)   not null,
  "modulos"      text[]                   not null default '{agenda,artistas,faixas,financeiro}'::text[],
  "status_plano" character varying(50)    not null default 'trial'::character varying,
  constraint "estudios_pkey" primary key (id),
  constraint "estudios_slug_key" unique (slug)
);

alter table "public"."estudios"
  enable row level security;

create table "public"."faixas" (
  "id"                 uuid                     not null default gen_random_uuid(),
  "estudio_id"         uuid                     not null,
  "projeto_id"         uuid                     not null,
  "titulo"             character varying(255)   not null,
  "bpm"                integer,
  "tom"                character varying(10),
  "link_externo_audio" text,
  "observacoes"        text,
  "criado_em"          timestamp with time zone not null default now(),
  "atualizado_em"      timestamp with time zone not null default now(),
  constraint "faixas_pkey" primary key (id)
);

alter table "public"."faixas"
  enable row level security;

create table "public"."projetos_artisticos" (
  "id"         uuid                     not null default gen_random_uuid(),
  "estudio_id" uuid                     not null,
  "criado_em"  timestamp with time zone not null default timezone('utc'::text, now()),
  "nome"       character varying(255)   not null,
  "tipo"       character varying(50)    not null default 'solo'::character varying,
  constraint "projetos_artisticos_pkey" primary key (id)
);

alter table "public"."projetos_artisticos"
  enable row level security;

create type "public"."status_producao_faixa" as enum (
  'composicao',
  'arranjos',
  'gravacao',
  'edicao',
  'mixagem',
  'masterizacao',
  'concluido'
);

alter table "public"."faixas"
  add column "status_producao" public.status_producao_faixa not null default 'composicao'::public.status_producao_faixa;

create or replace function public.rls_auto_enable()
  returns event_trigger
  language plpgsql
  security definer
  set search_path to 'pg_catalog'
  AS $function$
DECLARE
  cmd record;
BEGIN
  FOR cmd IN
    SELECT *
    FROM pg_event_trigger_ddl_commands()
    WHERE command_tag IN ('CREATE TABLE', 'CREATE TABLE AS', 'SELECT INTO')
      AND object_type IN ('table','partitioned table')
  LOOP
     IF cmd.schema_name IS NOT NULL AND cmd.schema_name IN ('public') AND cmd.schema_name NOT IN ('pg_catalog','information_schema') AND cmd.schema_name NOT LIKE 'pg_toast%' AND cmd.schema_name NOT LIKE 'pg_temp%' THEN
      BEGIN
        EXECUTE format('alter table if exists %s enable row level security', cmd.object_identity);
        RAISE LOG 'rls_auto_enable: enabled RLS on %', cmd.object_identity;
      EXCEPTION
        WHEN OTHERS THEN
          RAISE LOG 'rls_auto_enable: failed to enable RLS on %', cmd.object_identity;
      END;
     ELSE
        RAISE LOG 'rls_auto_enable: skip % (either system schema or not in enforced list: %.)', cmd.object_identity, cmd.schema_name;
     END IF;
  END LOOP;
END;
$function$;

alter table "public"."estudios"
  add constraint "estudios_id_fkey" foreign key (id) references auth.users(id);

alter table "public"."contatos"
  add constraint "contatos_estudio_id_fkey" foreign key (estudio_id) references public.estudios(id) on delete cascade;

alter table "public"."projetos_artisticos"
  add constraint "projetos_artisticos_estudio_id_fkey" foreign key (estudio_id) references public.estudios(id) on delete cascade;

alter table "public"."faixas"
  add constraint "faixas_projeto_id_fkey" foreign key (projeto_id) references public.projetos_artisticos(id) on delete cascade;

create index idx_faixas_estudio_id on public.faixas using btree (estudio_id);

create index idx_faixas_projeto_id on public.faixas using btree (projeto_id);

create policy "Donos gerenciam apenas os contatos do seu estúdio" on "public"."contatos"
  for all
  to PUBLIC
  using ((estudio_id = auth.uid()))
  with check ((estudio_id = auth.uid()));

create policy "Usuários atualizam o próprio estúdio" on "public"."estudios"
  for update
  to PUBLIC
  using ((auth.uid() = id));

create policy "Usuários veem o próprio estúdio" on "public"."estudios"
  for select
  to PUBLIC
  using ((auth.uid() = id));

create policy "Permitir acesso completo apenas aos dados do próprio estúdio" on "public"."faixas"
  for all
  to PUBLIC
  using ((estudio_id = ( select (((auth.jwt() -> 'user_metadata'::text) ->> 'estudio_id'::text))::uuid as uuid)))
  with check ((estudio_id = ( SELECT (((auth.jwt() -> 'user_metadata'::text) ->> 'estudio_id'::text))::uuid AS uuid)));

create policy "Donos gerenciam apenas os projetos do seu estúdio" on "public"."projetos_artisticos"
  for all
  to PUBLIC
  using ((estudio_id = auth.uid()))
  with check ((estudio_id = auth.uid()));

create event trigger "ensure_rls"
  on ddl_command_end
  when tag in ('CREATE TABLE', 'CREATE TABLE AS', 'SELECT INTO')
  execute function "public"."rls_auto_enable"();

grant execute on function "public"."rls_auto_enable"() to public, "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."contatos" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."estudios" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."faixas" to "anon", "authenticated", "postgres", "service_role";

grant delete, insert, maintain, references, select, trigger, truncate, update on table "public"."projetos_artisticos" to "anon", "authenticated", "postgres", "service_role";

grant usage on type "public"."status_producao_faixa" to "postgres";

alter default privileges for role "postgres" in schema "public" grant select, update, usage on sequences to "anon";

alter default privileges for role "postgres" in schema "public" grant select, update, usage on sequences to "authenticated";

alter default privileges for role "postgres" in schema "public" grant select, update, usage on sequences to "service_role";

alter default privileges for role "postgres" in schema "public" grant execute on FUNCTIONS to "anon";

alter default privileges for role "postgres" in schema "public" grant execute on FUNCTIONS to "authenticated";

alter default privileges for role "postgres" in schema "public" grant execute on FUNCTIONS to "service_role";

alter default privileges for role "postgres" in schema "public" grant delete, insert, maintain, references, select, trigger, truncate, update on tables to "anon";

alter default privileges for role "postgres" in schema "public" grant delete, insert, maintain, references, select, trigger, truncate, update on tables to "authenticated";

alter default privileges for role "postgres" in schema "public" grant delete, insert, maintain, references, select, trigger, truncate, update on tables to "service_role";

