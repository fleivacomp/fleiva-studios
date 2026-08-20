create or replace function public.criar_link_compartilhamento_faixa(
  p_versao_id uuid
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $function$
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

create or replace function public.revogar_link_compartilhamento_faixa(
  p_versao_id uuid
)
returns void
language plpgsql
security definer
set search_path = ''
as $function$
begin
  if auth.uid() is null then
    raise exception 'Usuário não autenticado.';
  end if;

  update public.versoes_faixa
  set token_compartilhamento = null
  where id = p_versao_id
    and estudio_id = auth.uid()
    and confirmado_em is not null;

  if not found then
    raise exception 'Versão não encontrada.';
  end if;
end;
$function$;

revoke all
on function public.criar_link_compartilhamento_faixa(uuid)
from public;

revoke all
on function public.revogar_link_compartilhamento_faixa(uuid)
from public;

grant execute
on function public.criar_link_compartilhamento_faixa(uuid)
to authenticated;

grant execute
on function public.revogar_link_compartilhamento_faixa(uuid)
to authenticated;
