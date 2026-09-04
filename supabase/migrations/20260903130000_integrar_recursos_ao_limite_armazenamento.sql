begin;

create or replace function public.calcular_uso_armazenamento_estudio(
  p_estudio_id uuid,
  p_excluir_versao_id uuid default null,
  p_excluir_recurso_id uuid default null
)
returns bigint
language sql
stable
security definer
set search_path = ''
as $$
  select
    coalesce(
      (
        select sum(versao.tamanho_bytes)
        from public.versoes_faixa versao
        where versao.estudio_id = p_estudio_id
          and (
            p_excluir_versao_id is null
            or versao.id <> p_excluir_versao_id
          )
          and (
            versao.confirmado_em is not null
            or versao.reserva_expira_em > now()
          )
      ),
      0
    )::bigint
    +
    coalesce(
      (
        select sum(recurso.tamanho_bytes)
        from public.recursos_experiencia_imersiva recurso
        where recurso.estudio_id = p_estudio_id
          and recurso.versao_id is null
          and recurso.tamanho_bytes is not null
          and (
            p_excluir_recurso_id is null
            or recurso.id <> p_excluir_recurso_id
          )
          and (
            recurso.confirmado_em is not null
            or recurso.reserva_expira_em > now()
          )
      ),
      0
    )::bigint;
$$;

create or replace function public.reservar_upload_faixa_interno(
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
    raise exception
      'O armazenamento não está disponível para este estúdio.';
  end if;

  v_usado_bytes := public.calcular_uso_armazenamento_estudio(
    v_estudio_id,
    null,
    null
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

create or replace function public.confirmar_upload_faixa_execucao(
  p_estudio_id uuid,
  p_versao_id uuid,
  p_tamanho_bytes_real bigint
)
returns public.versoes_faixa
language plpgsql
security definer
set search_path = ''
as $$
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

  v_usado_bytes := public.calcular_uso_armazenamento_estudio(
    p_estudio_id,
    p_versao_id,
    null
  );

  if v_usado_bytes + p_tamanho_bytes_real > v_limite_bytes then
    raise exception 'Limite de armazenamento excedido.';
  end if;

  update public.versoes_faixa
  set
    tamanho_bytes = p_tamanho_bytes_real,
    confirmado_em = coalesce(confirmado_em, now())
  where id = p_versao_id
    and estudio_id = p_estudio_id
  returning *
  into v_registro;

  return v_registro;
end;
$$;

revoke all
  on function public.calcular_uso_armazenamento_estudio(
    uuid,
    uuid,
    uuid
  )
  from public, anon, authenticated, service_role;

grant execute
  on function public.calcular_uso_armazenamento_estudio(
    uuid,
    uuid,
    uuid
  )
  to postgres;

commit;
