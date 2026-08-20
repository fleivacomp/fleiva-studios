create table public.cobrancas (
  id uuid primary key default gen_random_uuid(),
  estudio_id uuid not null,
  contato_id uuid not null,
  vencimento_em date,
  fechada_em timestamptz,
  observacoes text,
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now(),

  constraint cobrancas_id_estudio_id_unique
    unique (id, estudio_id),

  constraint cobrancas_estudio_id_fkey
    foreign key (estudio_id)
    references public.estudios (id),

  constraint cobrancas_contato_estudio_fkey
    foreign key (contato_id, estudio_id)
    references public.contatos (id, estudio_id)
);

create table public.cobranca_itens (
  id uuid primary key default gen_random_uuid(),
  estudio_id uuid not null,
  cobranca_id uuid not null,
  agendamento_id uuid,
  descricao text not null,
  quantidade numeric(12, 2) not null default 1,
  valor_unitario numeric(12, 2) not null,
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now(),

  constraint cobranca_itens_quantidade_positiva
    check (quantidade > 0),

  constraint cobranca_itens_estudio_id_fkey
    foreign key (estudio_id)
    references public.estudios (id),

  constraint cobranca_itens_cobranca_estudio_fkey
    foreign key (cobranca_id, estudio_id)
    references public.cobrancas (id, estudio_id),

  constraint cobranca_itens_agendamento_estudio_fkey
    foreign key (agendamento_id, estudio_id)
    references public.agendamentos (id, estudio_id)
    on delete set null (agendamento_id)
);

create table public.pagamentos (
  id uuid primary key default gen_random_uuid(),
  estudio_id uuid not null,
  cobranca_id uuid not null,
  pagador_contato_id uuid,
  valor numeric(12, 2) not null,
  forma_pagamento text,
  pago_em timestamptz not null default now(),
  observacoes text,
  criado_em timestamptz not null default now(),

  constraint pagamentos_valor_positivo
    check (valor > 0),

  constraint pagamentos_estudio_id_fkey
    foreign key (estudio_id)
    references public.estudios (id),

  constraint pagamentos_cobranca_estudio_fkey
    foreign key (cobranca_id, estudio_id)
    references public.cobrancas (id, estudio_id),

  constraint pagamentos_pagador_estudio_fkey
    foreign key (pagador_contato_id, estudio_id)
    references public.contatos (id, estudio_id)
    on delete set null (pagador_contato_id)
);

create index cobrancas_estudio_contato_idx
  on public.cobrancas (
    estudio_id,
    contato_id,
    criado_em desc
  );

create index cobrancas_estudio_fechada_idx
  on public.cobrancas (
    estudio_id,
    fechada_em
  );

create index cobranca_itens_cobranca_idx
  on public.cobranca_itens (
    estudio_id,
    cobranca_id
  );

create index cobranca_itens_agendamento_idx
  on public.cobranca_itens (
    estudio_id,
    agendamento_id
  )
  where agendamento_id is not null;

create index pagamentos_cobranca_idx
  on public.pagamentos (
    estudio_id,
    cobranca_id,
    pago_em desc
  );

create or replace function public.atualizar_acerto_atualizado_em()
returns trigger
language plpgsql
set search_path = ''
as $function$
begin
  new.atualizado_em = now();

  return new;
end;
$function$;

create trigger cobrancas_atualizar_atualizado_em
before update on public.cobrancas
for each row
execute function public.atualizar_acerto_atualizado_em();

create trigger cobranca_itens_atualizar_atualizado_em
before update on public.cobranca_itens
for each row
execute function public.atualizar_acerto_atualizado_em();

alter table public.cobrancas
enable row level security;

alter table public.cobranca_itens
enable row level security;

alter table public.pagamentos
enable row level security;

create policy cobrancas_selecionar_proprias
on public.cobrancas
for select
to authenticated
using (estudio_id = auth.uid());

create policy cobrancas_inserir_proprias
on public.cobrancas
for insert
to authenticated
with check (estudio_id = auth.uid());

create policy cobrancas_atualizar_proprias
on public.cobrancas
for update
to authenticated
using (estudio_id = auth.uid())
with check (estudio_id = auth.uid());

create policy cobrancas_excluir_proprias
on public.cobrancas
for delete
to authenticated
using (estudio_id = auth.uid());

create policy cobranca_itens_selecionar_proprios
on public.cobranca_itens
for select
to authenticated
using (estudio_id = auth.uid());

create policy cobranca_itens_inserir_proprios
on public.cobranca_itens
for insert
to authenticated
with check (estudio_id = auth.uid());

create policy cobranca_itens_atualizar_proprios
on public.cobranca_itens
for update
to authenticated
using (estudio_id = auth.uid())
with check (estudio_id = auth.uid());

create policy cobranca_itens_excluir_proprios
on public.cobranca_itens
for delete
to authenticated
using (estudio_id = auth.uid());

create policy pagamentos_selecionar_proprios
on public.pagamentos
for select
to authenticated
using (estudio_id = auth.uid());

create policy pagamentos_inserir_proprios
on public.pagamentos
for insert
to authenticated
with check (estudio_id = auth.uid());

create policy pagamentos_atualizar_proprios
on public.pagamentos
for update
to authenticated
using (estudio_id = auth.uid())
with check (estudio_id = auth.uid());

create policy pagamentos_excluir_proprios
on public.pagamentos
for delete
to authenticated
using (estudio_id = auth.uid());

revoke all on public.cobrancas
from anon;

revoke all on public.cobranca_itens
from anon;

revoke all on public.pagamentos
from anon;

grant select, insert, update, delete
on public.cobrancas
to authenticated;

grant select, insert, update, delete
on public.cobranca_itens
to authenticated;

grant select, insert, update, delete
on public.pagamentos
to authenticated;

create or replace view public.cobrancas_resumo
with (security_invoker = true)
as
with totais_itens as (
  select
    estudio_id,
    cobranca_id,
    sum(
      quantidade * valor_unitario
    ) as valor_total
  from public.cobranca_itens
  group by
    estudio_id,
    cobranca_id
),
totais_pagamentos as (
  select
    estudio_id,
    cobranca_id,
    sum(valor) as valor_pago
  from public.pagamentos
  group by
    estudio_id,
    cobranca_id
)
select
  cobranca.id,
  cobranca.estudio_id,
  cobranca.contato_id,
  cobranca.vencimento_em,
  cobranca.fechada_em,
  cobranca.observacoes,
  cobranca.criado_em,
  cobranca.atualizado_em,
  coalesce(
    itens.valor_total,
    0::numeric
  ) as valor_total,
  coalesce(
    pagamentos.valor_pago,
    0::numeric
  ) as valor_pago,
  coalesce(
    itens.valor_total,
    0::numeric
  ) - coalesce(
    pagamentos.valor_pago,
    0::numeric
  ) as saldo
from public.cobrancas as cobranca
left join totais_itens as itens
  on itens.estudio_id = cobranca.estudio_id
  and itens.cobranca_id = cobranca.id
left join totais_pagamentos as pagamentos
  on pagamentos.estudio_id = cobranca.estudio_id
  and pagamentos.cobranca_id = cobranca.id;

revoke all on public.cobrancas_resumo
from anon;

grant select
on public.cobrancas_resumo
to authenticated;

create or replace function public.criar_cobranca_agendamento(
  p_agendamento_id uuid
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $function$
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

revoke all
on function public.criar_cobranca_agendamento(uuid)
from public;

grant execute
on function public.criar_cobranca_agendamento(uuid)
to authenticated;
