drop policy if exists
  "Permitir acesso completo apenas aos dados do próprio estúdio"
  on public.faixas;

revoke all privileges
on table public.faixas
from anon;

revoke all privileges
on table public.faixas
from authenticated;

grant select, insert, update, delete
on table public.faixas
to authenticated;

create policy "Dono gerencia as faixas do próprio estúdio"
on public.faixas
for all
to authenticated
using (
  estudio_id = (select auth.uid())
)
with check (
  estudio_id = (select auth.uid())
);
