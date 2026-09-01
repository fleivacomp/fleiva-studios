alter table public.faixas
add column versao_principal_id uuid null;

alter table public.faixas
add constraint faixas_versao_principal_id_fkey
foreign key (versao_principal_id)
references public.versoes_faixa (id)
on delete set null;

create index faixas_versao_principal_id_idx
on public.faixas (versao_principal_id)
where versao_principal_id is not null;

create or replace function public.validar_versao_principal_faixa()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.versao_principal_id is null then
    return new;
  end if;

  if not exists (
    select 1
    from public.versoes_faixa as versao
    where versao.id = new.versao_principal_id
      and versao.faixa_id = new.id
      and versao.estudio_id = new.estudio_id
      and versao.confirmado_em is not null
  ) then
    raise exception using
      errcode = '23514',
      message = 'A versão principal deve ser uma versão confirmada da própria faixa.';
  end if;

  return new;
end;
$$;

create trigger validar_versao_principal_faixa
before insert or update of versao_principal_id
on public.faixas
for each row
execute function public.validar_versao_principal_faixa();
