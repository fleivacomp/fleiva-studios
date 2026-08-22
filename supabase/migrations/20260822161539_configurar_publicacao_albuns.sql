alter table public.albuns
  add column if not exists reproducao_publica boolean
  not null default false;

alter table public.albuns
  add column if not exists download_publico boolean
  not null default false;

update public.albuns
set
  publico_na_landing = false,
  reproducao_publica = false,
  download_publico = false
where
  publico_na_landing = true
  or reproducao_publica = true
  or download_publico = true;

create or replace function
  public.despublicar_album_ao_alterar_sequencia()
returns trigger
language plpgsql
set search_path = public
as $$
declare
  album_anterior_id uuid;
  album_novo_id uuid;
begin
  if tg_op = 'DELETE' then
    album_anterior_id := old.album_id;
  elsif tg_op = 'INSERT' then
    album_novo_id := new.album_id;
  else
    album_anterior_id := old.album_id;
    album_novo_id := new.album_id;
  end if;

  update public.albuns
  set
    publico_na_landing = false,
    reproducao_publica = false,
    download_publico = false,
    atualizado_em = now()
  where
    id in (
      album_anterior_id,
      album_novo_id
    )
    and (
      publico_na_landing = true
      or reproducao_publica = true
      or download_publico = true
    );

  if tg_op = 'DELETE' then
    return old;
  end if;

  return new;
end;
$$;

drop trigger if exists
  album_faixas_despublicar_ao_alterar
on public.album_faixas;

create trigger
  album_faixas_despublicar_ao_alterar
after insert or update or delete
on public.album_faixas
for each row
execute function
  public.despublicar_album_ao_alterar_sequencia();

create index if not exists
  albuns_publicos_por_estudio_idx
on public.albuns (
  estudio_id,
  atualizado_em desc
)
where publico_na_landing = true;
