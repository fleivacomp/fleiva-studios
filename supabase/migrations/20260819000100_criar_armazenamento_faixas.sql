begin;

create table public.armazenamento_estudios (
  estudio_id uuid primary key
    references public.estudios(id)
    on delete cascade,
  limite_bytes bigint not null,
  criado_em timestamp with time zone not null default now(),
  atualizado_em timestamp with time zone not null default now(),

  constraint armazenamento_estudios_limite_bytes_check
    check (limite_bytes >= 0)
);

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conrelid = 'public.faixas'::regclass
      and conname = 'faixas_id_estudio_id_key'
  ) then
    alter table public.faixas
      add constraint faixas_id_estudio_id_key
      unique (id, estudio_id);
  end if;
end;
$$;

create table public.versoes_faixa (
  id uuid primary key default gen_random_uuid(),
  estudio_id uuid not null,
  faixa_id uuid not null,
  versao text not null,
  observacoes text,
  nome_arquivo text not null,
  chave_objeto text not null,
  tamanho_bytes bigint not null,
  tipo_mime text,
  confirmado_em timestamp with time zone,
  reserva_expira_em timestamp with time zone
    not null
    default (now() + interval '1 hour'),
  token_compartilhamento uuid unique,
  criado_em timestamp with time zone not null default now(),

  constraint versoes_faixa_tamanho_bytes_check
    check (tamanho_bytes > 0),

  constraint versoes_faixa_chave_objeto_key
    unique (chave_objeto),

  constraint versoes_faixa_faixa_estudio_fkey
    foreign key (faixa_id, estudio_id)
    references public.faixas(id, estudio_id)
);

create index versoes_faixa_estudio_faixa_criado_em_idx
  on public.versoes_faixa (
    estudio_id,
    faixa_id,
    criado_em desc
  );

create index versoes_faixa_estudio_confirmado_em_idx
  on public.versoes_faixa (
    estudio_id,
    confirmado_em
  );

alter table public.armazenamento_estudios
  enable row level security;

alter table public.versoes_faixa
  enable row level security;

revoke all
  on table public.armazenamento_estudios
  from public, anon, authenticated;

revoke all
  on table public.versoes_faixa
  from public, anon, authenticated;

grant select
  on table public.armazenamento_estudios
  to authenticated;

grant select
  on table public.versoes_faixa
  to authenticated;

create policy armazenamento_estudios_selecionar_proprio
  on public.armazenamento_estudios
  for select
  to authenticated
  using (
    estudio_id = (select auth.uid())
  );

create policy versoes_faixa_selecionar_proprias
  on public.versoes_faixa
  for select
  to authenticated
  using (
    estudio_id = (select auth.uid())
  );

create or replace function public.reservar_upload_faixa(
  p_faixa_id uuid,
  p_versao text,
  p_observacoes text,
  p_nome_arquivo text,
  p_chave_objeto text,
  p_tamanho_bytes bigint,
  p_tipo_mime text
)
returns public.versoes_faixa
language plpgsql
security definer
set search_path = ''
as $$
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
$$;

create or replace function public.confirmar_upload_faixa(
  p_versao_id uuid,
  p_tamanho_bytes_real bigint
)
returns public.versoes_faixa
language plpgsql
security definer
set search_path = ''
as $$
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

  if p_tamanho_bytes_real is null
    or p_tamanho_bytes_real <= 0
  then
    raise exception 'O tamanho real do arquivo é inválido.';
  end if;

  select *
  into v_registro
  from public.versoes_faixa
  where id = p_versao_id
    and estudio_id = v_estudio_id
  for update;

  if not found then
    raise exception 'Reserva de upload não encontrada.';
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
    and id <> p_versao_id
    and (
      confirmado_em is not null
      or reserva_expira_em > now()
    );

  if v_usado_bytes + p_tamanho_bytes_real > v_limite_bytes then
    raise exception 'Limite de armazenamento excedido.';
  end if;

  update public.versoes_faixa
  set
    tamanho_bytes = p_tamanho_bytes_real,
    confirmado_em = coalesce(confirmado_em, now())
  where id = p_versao_id
    and estudio_id = v_estudio_id
  returning *
  into v_registro;

  return v_registro;
end;
$$;

create or replace function public.cancelar_reserva_upload_faixa(
  p_versao_id uuid
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_estudio_id uuid;
begin
  v_estudio_id := auth.uid();

  if v_estudio_id is null then
    raise exception 'Usuário não autenticado.';
  end if;

  delete from public.versoes_faixa
  where id = p_versao_id
    and estudio_id = v_estudio_id
    and confirmado_em is null;
end;
$$;

revoke all
  on function public.reservar_upload_faixa(
    uuid,
    text,
    text,
    text,
    text,
    bigint,
    text
  )
  from public, anon;

revoke all
  on function public.confirmar_upload_faixa(uuid, bigint)
  from public, anon;

revoke all
  on function public.cancelar_reserva_upload_faixa(uuid)
  from public, anon;

grant execute
  on function public.reservar_upload_faixa(
    uuid,
    text,
    text,
    text,
    text,
    bigint,
    text
  )
  to authenticated;

grant execute
  on function public.confirmar_upload_faixa(uuid, bigint)
  to authenticated;

grant execute
  on function public.cancelar_reserva_upload_faixa(uuid)
  to authenticated;

commit;
