alter table public.estudios
add column if not exists logo_caminho text;

insert into storage.buckets (
  id,
  name,
  public,
  file_size_limit,
  allowed_mime_types
)
values (
  'logos-estudios',
  'logos-estudios',
  true,
  5000000,
  array[
    'image/jpeg',
    'image/png',
    'image/webp'
  ]::text[]
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists
  logos_estudios_selecionar_proprio
on storage.objects;

create policy
  logos_estudios_selecionar_proprio
on storage.objects
for select
to authenticated
using (
  bucket_id = 'logos-estudios'
  and (
    name = (
      (select auth.uid())::text || '/logo'
    )
    or name ~ (
      '^'
      || (select auth.uid())::text
      || '/logo-[0-9a-f-]{36}\.(png|jpg|webp)$'
    )
  )
);

drop policy if exists
  logos_estudios_inserir_proprio
on storage.objects;

create policy
  logos_estudios_inserir_proprio
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'logos-estudios'
  and (
    name = (
      (select auth.uid())::text || '/logo'
    )
    or name ~ (
      '^'
      || (select auth.uid())::text
      || '/logo-[0-9a-f-]{36}\.(png|jpg|webp)$'
    )
  )
);

drop policy if exists
  logos_estudios_atualizar_proprio
on storage.objects;

create policy
  logos_estudios_atualizar_proprio
on storage.objects
for update
to authenticated
using (
  bucket_id = 'logos-estudios'
  and (
    name = (
      (select auth.uid())::text || '/logo'
    )
    or name ~ (
      '^'
      || (select auth.uid())::text
      || '/logo-[0-9a-f-]{36}\.(png|jpg|webp)$'
    )
  )
)
with check (
  bucket_id = 'logos-estudios'
  and (
    name = (
      (select auth.uid())::text || '/logo'
    )
    or name ~ (
      '^'
      || (select auth.uid())::text
      || '/logo-[0-9a-f-]{36}\.(png|jpg|webp)$'
    )
  )
);

drop policy if exists
  logos_estudios_excluir_proprio
on storage.objects;

create policy
  logos_estudios_excluir_proprio
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'logos-estudios'
  and (
    name = (
      (select auth.uid())::text || '/logo'
    )
    or name ~ (
      '^'
      || (select auth.uid())::text
      || '/logo-[0-9a-f-]{36}\.(png|jpg|webp)$'
    )
  )
);
