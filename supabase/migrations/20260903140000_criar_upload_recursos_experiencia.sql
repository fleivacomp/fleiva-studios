begin;

create or replace function public.reservar_upload_recurso_experiencia(
  p_experiencia_id uuid,
  p_nome text,
  p_nome_arquivo text,
  p_chave_objeto text,
  p_tamanho_bytes bigint,
  p_tipo_mime text
)
returns public.recursos_experiencia_imersiva
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_estudio_id uuid;
  v_limite_bytes bigint;
  v_usado_bytes bigint;
  v_registro public.recursos_experiencia_imersiva;
begin
  v_estudio_id := auth.uid();

  if v_estudio_id is null then
    raise exception 'Usuário não autenticado.';
  end if;

  if p_tamanho_bytes is null or p_tamanho_bytes <= 0 then
    raise exception 'O tamanho do arquivo é inválido.';
  end if;

  if nullif(trim(p_nome), '') is null then
    raise exception 'Informe o nome do recurso.';
  end if;

  if nullif(trim(p_nome_arquivo), '') is null then
    raise exception 'Informe o nome do arquivo.';
  end if;

  if nullif(trim(p_chave_objeto), '') is null
    or p_chave_objeto not like v_estudio_id::text || '/%'
  then
    raise exception 'A chave do arquivo é inválida.';
  end if;

  if not exists (
    select 1
    from public.experiencias_imersivas experiencia
    where experiencia.id = p_experiencia_id
      and experiencia.estudio_id = v_estudio_id
  ) then
    raise exception 'Experiência não encontrada.';
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

  insert into public.recursos_experiencia_imersiva (
    estudio_id,
    experiencia_id,
    nome,
    nome_arquivo,
    chave_objeto,
    tamanho_bytes,
    tipo_mime,
    reserva_expira_em
  )
  values (
    v_estudio_id,
    p_experiencia_id,
    trim(p_nome),
    trim(p_nome_arquivo),
    trim(p_chave_objeto),
    p_tamanho_bytes,
    nullif(trim(p_tipo_mime), ''),
    now() + interval '1 hour'
  )
  returning *
  into v_registro;

  return v_registro;
end;
$$;

create or replace function public.confirmar_upload_recurso_experiencia_interno(
  p_estudio_id uuid,
  p_recurso_id uuid,
  p_tamanho_bytes_real bigint
)
returns public.recursos_experiencia_imersiva
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_limite_bytes bigint;
  v_usado_bytes bigint;
  v_registro public.recursos_experiencia_imersiva;
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
  from public.recursos_experiencia_imersiva
  where id = p_recurso_id
    and estudio_id = p_estudio_id
    and versao_id is null
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
    null,
    p_recurso_id
  );

  if v_usado_bytes + p_tamanho_bytes_real > v_limite_bytes then
    raise exception 'Limite de armazenamento excedido.';
  end if;

  update public.recursos_experiencia_imersiva
  set
    tamanho_bytes = p_tamanho_bytes_real,
    confirmado_em = coalesce(confirmado_em, now())
  where id = p_recurso_id
    and estudio_id = p_estudio_id
  returning *
  into v_registro;

  return v_registro;
end;
$$;

create or replace function public.cancelar_reserva_upload_recurso_experiencia(
  p_recurso_id uuid
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

  delete from public.recursos_experiencia_imersiva
  where id = p_recurso_id
    and estudio_id = v_estudio_id
    and versao_id is null
    and confirmado_em is null;
end;
$$;

revoke all
  on function public.reservar_upload_recurso_experiencia(
    uuid,
    text,
    text,
    text,
    bigint,
    text
  )
  from public, anon;

grant execute
  on function public.reservar_upload_recurso_experiencia(
    uuid,
    text,
    text,
    text,
    bigint,
    text
  )
  to authenticated;

revoke all
  on function public.confirmar_upload_recurso_experiencia_interno(
    uuid,
    uuid,
    bigint
  )
  from public, anon, authenticated;

grant execute
  on function public.confirmar_upload_recurso_experiencia_interno(
    uuid,
    uuid,
    bigint
  )
  to postgres, service_role;

revoke all
  on function public.cancelar_reserva_upload_recurso_experiencia(uuid)
  from public, anon;

grant execute
  on function public.cancelar_reserva_upload_recurso_experiencia(uuid)
  to authenticated;

commit;
