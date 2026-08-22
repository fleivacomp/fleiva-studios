alter table public.estudios
  add column if not exists descricao_publica text,
  add column if not exists cidade text,
  add column if not exists whatsapp_publico text,
  add column if not exists instagram text,
  add column if not exists landing_publicada boolean not null default false;

alter table public.servicos
  add column if not exists publico_na_landing boolean not null default false;

alter table public.albuns
  add column if not exists publico_na_landing boolean not null default false;

comment on column public.estudios.descricao_publica is
  'Apresentação pública exibida na landing do estúdio.';

comment on column public.estudios.cidade is
  'Cidade ou região informada publicamente pelo estúdio.';

comment on column public.estudios.whatsapp_publico is
  'Número utilizado no botão público de contato.';

comment on column public.estudios.instagram is
  'Perfil público do Instagram do estúdio.';

comment on column public.estudios.landing_publicada is
  'Define se a landing pública pode ser acessada.';

comment on column public.servicos.publico_na_landing is
  'Define se o serviço aparece na landing pública.';

comment on column public.albuns.publico_na_landing is
  'Define se o álbum aparece na landing pública.';
