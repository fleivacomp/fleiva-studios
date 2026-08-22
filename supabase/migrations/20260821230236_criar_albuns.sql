begin;

create table public.albuns (
  id uuid primary key default gen_random_uuid(),

  estudio_id uuid not null
    references public.estudios(id)
    on delete cascade,

  projeto_id uuid not null
    references public.projetos_artisticos(id)
    on delete cascade,

  nome varchar(255) not null,

  observacoes text,

  token_compartilhamento uuid not null
    default gen_random_uuid()
    unique,

  criado_em timestamptz not null
    default timezone('utc', now()),

  atualizado_em timestamptz not null
    default timezone('utc', now())
);

create table public.album_faixas (
  id uuid primary key default gen_random_uuid(),

  album_id uuid not null
    references public.albuns(id)
    on delete cascade,

  versao_id uuid not null
    references public.versoes_faixa(id)
    on delete restrict,

  ordem integer not null,

  criado_em timestamptz not null
    default timezone('utc', now())
);

create index albuns_estudio_id_idx
  on public.albuns(estudio_id);

create index albuns_projeto_id_idx
  on public.albuns(projeto_id);

create index album_faixas_album_ordem_idx
  on public.album_faixas(album_id, ordem);

create index album_faixas_versao_id_idx
  on public.album_faixas(versao_id);

alter table public.albuns
  enable row level security;

alter table public.album_faixas
  enable row level security;

grant select, insert, update, delete
  on public.albuns
  to authenticated;

grant select, insert, update, delete
  on public.album_faixas
  to authenticated;

revoke all
  on public.albuns
  from anon;

revoke all
  on public.album_faixas
  from anon;

create policy albuns_selecionar_proprios
on public.albuns
for select
to authenticated
using (
  estudio_id = auth.uid()
);

create policy albuns_inserir_proprios
on public.albuns
for insert
to authenticated
with check (
  estudio_id = auth.uid()
  and exists (
    select 1
    from public.projetos_artisticos projeto
    where projeto.id = projeto_id
      and projeto.estudio_id = auth.uid()
  )
);

create policy albuns_atualizar_proprios
on public.albuns
for update
to authenticated
using (
  estudio_id = auth.uid()
)
with check (
  estudio_id = auth.uid()
  and exists (
    select 1
    from public.projetos_artisticos projeto
    where projeto.id = projeto_id
      and projeto.estudio_id = auth.uid()
  )
);

create policy albuns_excluir_proprios
on public.albuns
for delete
to authenticated
using (
  estudio_id = auth.uid()
);

create policy album_faixas_selecionar_proprias
on public.album_faixas
for select
to authenticated
using (
  exists (
    select 1
    from public.albuns album
    join public.versoes_faixa versao
      on versao.id = album_faixas.versao_id
    where album.id = album_faixas.album_id
      and album.estudio_id = auth.uid()
      and versao.estudio_id = auth.uid()
  )
);

create policy album_faixas_inserir_proprias
on public.album_faixas
for insert
to authenticated
with check (
  exists (
    select 1
    from public.albuns album
    where album.id = album_id
      and album.estudio_id = auth.uid()
  )
  and exists (
    select 1
    from public.versoes_faixa versao
    where versao.id = versao_id
      and versao.estudio_id = auth.uid()
  )
);

create policy album_faixas_atualizar_proprias
on public.album_faixas
for update
to authenticated
using (
  exists (
    select 1
    from public.albuns album
    where album.id = album_id
      and album.estudio_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.albuns album
    where album.id = album_id
      and album.estudio_id = auth.uid()
  )
  and exists (
    select 1
    from public.versoes_faixa versao
    where versao.id = versao_id
      and versao.estudio_id = auth.uid()
  )
);

create policy album_faixas_excluir_proprias
on public.album_faixas
for delete
to authenticated
using (
  exists (
    select 1
    from public.albuns album
    where album.id = album_id
      and album.estudio_id = auth.uid()
  )
);

commit;
