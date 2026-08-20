create table public.servicos (
  id uuid primary key default gen_random_uuid(),
  estudio_id uuid not null references public.estudios(id) on delete cascade,
  nome text not null,
  preco numeric(12, 2) not null,
  tipo_cobranca text not null,
  duracao_minutos integer,
  unique (id, estudio_id)
);

create table public.agendamentos (
  id uuid primary key default gen_random_uuid(),
  estudio_id uuid not null references public.estudios(id) on delete cascade,
  contato_id uuid not null,
  inicio timestamptz not null,
  fim timestamptz not null,
  foreign key (contato_id, estudio_id)
    references public.contatos(id, estudio_id),
  unique (id, estudio_id)
);

create table public.agendamento_servicos (
  estudio_id uuid not null references public.estudios(id) on delete cascade,
  agendamento_id uuid not null,
  servico_id uuid not null,
  quantidade numeric(10, 2) not null default 1,
  primary key (agendamento_id, servico_id),
  foreign key (agendamento_id, estudio_id)
    references public.agendamentos(id, estudio_id) on delete cascade,
  foreign key (servico_id, estudio_id)
    references public.servicos(id, estudio_id)
);

alter table public.servicos enable row level security;
alter table public.agendamentos enable row level security;
alter table public.agendamento_servicos enable row level security;

create policy servicos_por_estudio
on public.servicos
for all
to authenticated
using (estudio_id = (select auth.uid()))
with check (estudio_id = (select auth.uid()));

create policy agendamentos_por_estudio
on public.agendamentos
for all
to authenticated
using (estudio_id = (select auth.uid()))
with check (estudio_id = (select auth.uid()));

create policy agendamento_servicos_por_estudio
on public.agendamento_servicos
for all
to authenticated
using (estudio_id = (select auth.uid()))
with check (estudio_id = (select auth.uid()));

create or replace function public.criar_agendamento(
  p_contato_id uuid,
  p_inicio timestamptz,
  p_fim timestamptz,
  p_servicos jsonb
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
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
$$;

revoke all on public.servicos, public.agendamentos, public.agendamento_servicos
from anon, authenticated;

grant select, insert, update, delete
on public.servicos
to authenticated;

grant select, update, delete
on public.agendamentos
to authenticated;

grant select
on public.agendamento_servicos
to authenticated;

revoke execute on function public.criar_agendamento(uuid, timestamptz, timestamptz, jsonb)
from public, anon;

grant execute on function public.criar_agendamento(uuid, timestamptz, timestamptz, jsonb)
to authenticated;
