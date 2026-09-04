begin;

create table public.experiencias_imersivas (
  id uuid primary key default gen_random_uuid(),
  estudio_id uuid not null
    references public.estudios(id)
    on delete cascade,
  album_id uuid
    references public.albuns(id)
    on delete set null,
  nome text not null,
  publicada_em timestamp with time zone,
  criado_em timestamp with time zone not null default now(),
  atualizado_em timestamp with time zone not null default now(),

  constraint experiencias_imersivas_id_estudio_id_key
    unique (id, estudio_id)
);

create table public.blocos_experiencia_imersiva (
  id uuid primary key default gen_random_uuid(),
  estudio_id uuid not null,
  experiencia_id uuid not null,
  ordem integer not null,
  conteudo text,
  imagem_caminho text,
  teto_temporal_segundos numeric,
  hold_point_segundos numeric,
  criado_em timestamp with time zone not null default now(),
  atualizado_em timestamp with time zone not null default now(),

  constraint blocos_experiencia_imersiva_experiencia_fkey
    foreign key (experiencia_id, estudio_id)
    references public.experiencias_imersivas(id, estudio_id)
    on delete cascade,

  constraint blocos_experiencia_imersiva_ordem_key
    unique (experiencia_id, ordem),

  constraint blocos_experiencia_imersiva_identidade_key
    unique (id, experiencia_id, estudio_id)
);

create table public.recursos_experiencia_imersiva (
  id uuid primary key default gen_random_uuid(),
  estudio_id uuid not null,
  experiencia_id uuid not null,
  versao_id uuid
    references public.versoes_faixa(id)
    on delete restrict,
  nome text not null,
  nome_arquivo text,
  chave_objeto text unique,
  tamanho_bytes bigint,
  tipo_mime text,
  confirmado_em timestamp with time zone,
  reserva_expira_em timestamp with time zone,
  criado_em timestamp with time zone not null default now(),
  atualizado_em timestamp with time zone not null default now(),

  constraint recursos_experiencia_imersiva_experiencia_fkey
    foreign key (experiencia_id, estudio_id)
    references public.experiencias_imersivas(id, estudio_id)
    on delete cascade,

  constraint recursos_experiencia_imersiva_identidade_key
    unique (id, experiencia_id, estudio_id)
);

create table public.acoes_bloco_experiencia_imersiva (
  id uuid primary key default gen_random_uuid(),
  estudio_id uuid not null,
  experiencia_id uuid not null,
  bloco_id uuid not null,
  recurso_id uuid,
  ordem integer not null,
  acao text not null,
  inicio_segundos numeric not null default 0,
  parametros jsonb not null default '{}'::jsonb,
  criado_em timestamp with time zone not null default now(),
  atualizado_em timestamp with time zone not null default now(),

  constraint acoes_bloco_experiencia_imersiva_bloco_fkey
    foreign key (bloco_id, experiencia_id, estudio_id)
    references public.blocos_experiencia_imersiva(
      id,
      experiencia_id,
      estudio_id
    )
    on delete cascade,

  constraint acoes_bloco_experiencia_imersiva_recurso_fkey
    foreign key (recurso_id, experiencia_id, estudio_id)
    references public.recursos_experiencia_imersiva(
      id,
      experiencia_id,
      estudio_id
    )
    on delete restrict,

  constraint acoes_bloco_experiencia_imersiva_ordem_key
    unique (bloco_id, ordem)
);

create index experiencias_imersivas_estudio_criado_em_idx
  on public.experiencias_imersivas(estudio_id, criado_em desc);

create index experiencias_imersivas_album_id_idx
  on public.experiencias_imersivas(album_id)
  where album_id is not null;

create index experiencias_imersivas_publicadas_idx
  on public.experiencias_imersivas(estudio_id, publicada_em desc)
  where publicada_em is not null;

create index blocos_experiencia_imersiva_experiencia_ordem_idx
  on public.blocos_experiencia_imersiva(experiencia_id, ordem);

create index recursos_experiencia_imersiva_experiencia_idx
  on public.recursos_experiencia_imersiva(experiencia_id, criado_em);

create index recursos_experiencia_imersiva_versao_id_idx
  on public.recursos_experiencia_imersiva(versao_id)
  where versao_id is not null;

create index acoes_bloco_experiencia_imersiva_bloco_ordem_idx
  on public.acoes_bloco_experiencia_imersiva(bloco_id, ordem);

create trigger experiencias_imersivas_definir_atualizado_em
before update on public.experiencias_imersivas
for each row
execute function public.definir_atualizado_em();

create trigger blocos_experiencia_imersiva_definir_atualizado_em
before update on public.blocos_experiencia_imersiva
for each row
execute function public.definir_atualizado_em();

create trigger recursos_experiencia_imersiva_definir_atualizado_em
before update on public.recursos_experiencia_imersiva
for each row
execute function public.definir_atualizado_em();

create trigger acoes_bloco_experiencia_imersiva_definir_atualizado_em
before update on public.acoes_bloco_experiencia_imersiva
for each row
execute function public.definir_atualizado_em();

alter table public.experiencias_imersivas
  enable row level security;

alter table public.blocos_experiencia_imersiva
  enable row level security;

alter table public.recursos_experiencia_imersiva
  enable row level security;

alter table public.acoes_bloco_experiencia_imersiva
  enable row level security;

revoke all
  on table public.experiencias_imersivas
  from public, anon, authenticated;

revoke all
  on table public.blocos_experiencia_imersiva
  from public, anon, authenticated;

revoke all
  on table public.recursos_experiencia_imersiva
  from public, anon, authenticated;

revoke all
  on table public.acoes_bloco_experiencia_imersiva
  from public, anon, authenticated;

grant select, insert, update, delete
  on table public.experiencias_imersivas
  to authenticated;

grant select, insert, update, delete
  on table public.blocos_experiencia_imersiva
  to authenticated;

grant select, insert, update, delete
  on table public.recursos_experiencia_imersiva
  to authenticated;

grant select, insert, update, delete
  on table public.acoes_bloco_experiencia_imersiva
  to authenticated;

create policy experiencias_imersivas_gerenciar_proprias
on public.experiencias_imersivas
for all
to authenticated
using (
  estudio_id = (select auth.uid())
)
with check (
  estudio_id = (select auth.uid())
  and (
    album_id is null
    or exists (
      select 1
      from public.albuns album
      where album.id = album_id
        and album.estudio_id = (select auth.uid())
        and album.publico_na_landing = true
    )
  )
);

create policy blocos_experiencia_imersiva_gerenciar_proprios
on public.blocos_experiencia_imersiva
for all
to authenticated
using (
  estudio_id = (select auth.uid())
)
with check (
  estudio_id = (select auth.uid())
  and exists (
    select 1
    from public.experiencias_imersivas experiencia
    where experiencia.id = experiencia_id
      and experiencia.estudio_id = (select auth.uid())
  )
);

create policy recursos_experiencia_imersiva_gerenciar_proprios
on public.recursos_experiencia_imersiva
for all
to authenticated
using (
  estudio_id = (select auth.uid())
)
with check (
  estudio_id = (select auth.uid())
  and exists (
    select 1
    from public.experiencias_imersivas experiencia
    where experiencia.id = experiencia_id
      and experiencia.estudio_id = (select auth.uid())
  )
  and (
    versao_id is null
    or exists (
      select 1
      from public.versoes_faixa versao
      where versao.id = versao_id
        and versao.estudio_id = (select auth.uid())
        and versao.confirmado_em is not null
    )
  )
);

create policy acoes_bloco_experiencia_imersiva_gerenciar_proprias
on public.acoes_bloco_experiencia_imersiva
for all
to authenticated
using (
  estudio_id = (select auth.uid())
)
with check (
  estudio_id = (select auth.uid())
  and exists (
    select 1
    from public.blocos_experiencia_imersiva bloco
    where bloco.id = bloco_id
      and bloco.experiencia_id = experiencia_id
      and bloco.estudio_id = (select auth.uid())
  )
  and (
    recurso_id is null
    or exists (
      select 1
      from public.recursos_experiencia_imersiva recurso
      where recurso.id = recurso_id
        and recurso.experiencia_id = experiencia_id
        and recurso.estudio_id = (select auth.uid())
    )
  )
);

commit;
