-- =========================================================
-- COLUNAS DE ATUALIZAÇÃO
-- =========================================================

alter table public.estudios
  add column atualizado_em timestamp with time zone
  not null default now();

alter table public.contatos
  add column atualizado_em timestamp with time zone
  not null default now();

alter table public.projetos_artisticos
  add column atualizado_em timestamp with time zone
  not null default now();


-- =========================================================
-- FUNÇÃO PARA ATUALIZAR atualizado_em
-- =========================================================

create or replace function public.definir_atualizado_em()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.atualizado_em = now();
  return new;
end;
$$;

revoke execute
on function public.definir_atualizado_em()
from public, anon, authenticated;


-- =========================================================
-- TRIGGERS DE ATUALIZAÇÃO
-- =========================================================

create trigger estudios_definir_atualizado_em
before update on public.estudios
for each row
execute function public.definir_atualizado_em();

create trigger contatos_definir_atualizado_em
before update on public.contatos
for each row
execute function public.definir_atualizado_em();

create trigger projetos_artisticos_definir_atualizado_em
before update on public.projetos_artisticos
for each row
execute function public.definir_atualizado_em();

create trigger faixas_definir_atualizado_em
before update on public.faixas
for each row
execute function public.definir_atualizado_em();


-- =========================================================
-- VALIDAR OS DADOS EXISTENTES DE FAIXAS
-- =========================================================

do $$
begin
  if exists (
    select 1
    from public.faixas as faixa
    left join public.estudios as estudio
      on estudio.id = faixa.estudio_id
    where estudio.id is null
  ) then
    raise exception
      'Existem faixas com estudio_id inexistente.';
  end if;

  if exists (
    select 1
    from public.faixas as faixa
    join public.projetos_artisticos as projeto
      on projeto.id = faixa.projeto_id
    where faixa.estudio_id <> projeto.estudio_id
  ) then
    raise exception
      'Existem faixas vinculadas a projetos de outro estúdio.';
  end if;
end;
$$;


-- =========================================================
-- CHAVES COMPOSTAS PARA ISOLAMENTO POR ESTÚDIO
-- =========================================================

alter table public.contatos
  add constraint contatos_id_estudio_id_key
  unique (id, estudio_id);

alter table public.projetos_artisticos
  add constraint projetos_artisticos_id_estudio_id_key
  unique (id, estudio_id);


-- =========================================================
-- CORRIGIR RELACIONAMENTO DE FAIXAS
-- =========================================================

alter table public.faixas
  drop constraint if exists faixas_projeto_id_fkey;

alter table public.faixas
  add constraint faixas_estudio_id_fkey
  foreign key (estudio_id)
  references public.estudios(id)
  on delete cascade;

alter table public.faixas
  add constraint faixas_projeto_estudio_id_fkey
  foreign key (projeto_id, estudio_id)
  references public.projetos_artisticos(id, estudio_id)
  on delete cascade;


-- =========================================================
-- MEMBROS DOS PROJETOS ARTÍSTICOS
-- =========================================================

create table public.membros_projeto (
  id uuid not null default gen_random_uuid(),
  estudio_id uuid not null,
  projeto_id uuid not null,
  contato_id uuid not null,
  papel character varying(100) not null,
  ativo boolean not null default true,
  criado_em timestamp with time zone not null default now(),
  atualizado_em timestamp with time zone not null default now(),

  constraint membros_projeto_pkey
    primary key (id),

  constraint membros_projeto_estudio_id_fkey
    foreign key (estudio_id)
    references public.estudios(id)
    on delete cascade,

  constraint membros_projeto_projeto_estudio_id_fkey
    foreign key (projeto_id, estudio_id)
    references public.projetos_artisticos(id, estudio_id)
    on delete cascade,

  constraint membros_projeto_contato_estudio_id_fkey
    foreign key (contato_id, estudio_id)
    references public.contatos(id, estudio_id)
    on delete cascade,

  constraint membros_projeto_papel_check
    check (length(trim(papel)) > 0),

  constraint membros_projeto_vinculo_key
    unique (projeto_id, contato_id, papel)
);

alter table public.membros_projeto
  enable row level security;

create index membros_projeto_estudio_id_idx
  on public.membros_projeto(estudio_id);

create index membros_projeto_contato_id_idx
  on public.membros_projeto(contato_id);

create trigger membros_projeto_definir_atualizado_em
before update on public.membros_projeto
for each row
execute function public.definir_atualizado_em();


-- =========================================================
-- RLS DE MEMBROS DO PROJETO
-- =========================================================

create policy "Dono gerencia os membros dos próprios projetos"
on public.membros_projeto
for all
to authenticated
using (
  estudio_id = (select auth.uid())
)
with check (
  estudio_id = (select auth.uid())
);


-- =========================================================
-- PERMISSÕES
-- =========================================================

revoke all privileges
on table public.membros_projeto
from anon;

revoke all privileges
on table public.membros_projeto
from authenticated;

grant select, insert, update, delete
on table public.membros_projeto
to authenticated;

grant all privileges
on table public.membros_projeto
to service_role;
