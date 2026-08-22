import { Routes } from '@angular/router';

import { exigirAutenticacao } from '@fleiva-studios/shared-data-access';

export const rotasAplicacao: Routes = [
  {
  path: 'estudio/:slug/trabalho/:albumId',
  loadComponent: () =>
    import(
      './paginas/album-publico/album-publico'
    ).then(
      (modulo) => modulo.AlbumPublico,
    ),
},

  {

  path: 'estudio/:slug',
  loadComponent: () =>
    import(
      './paginas/pagina-estudio/pagina-estudio'
    ).then(
      (modulo) => modulo.PaginaEstudio,
    ),
},
  {
    path: 'login',
    loadComponent: () =>
      import('./paginas/login/login').then(
        (modulo) => modulo.PaginaLogin,
      ),
  },
  {
    path: 'arquivo/:token',
    loadComponent: () =>
      import(
        './paginas/arquivo-compartilhado/arquivo-compartilhado'
      ).then(
        (modulo) => modulo.ArquivoCompartilhado,
      ),
  },
  {
    path: 'album/:token',
    loadComponent: () =>
      import(
        './paginas/album-compartilhado/album-compartilhado'
      ).then(
        (modulo) => modulo.AlbumCompartilhado,
      ),
  },
  {
    path: '',
    canActivate: [exigirAutenticacao],
    loadComponent: () =>
      import(
        './layout/layout-principal/layout-principal'
      ).then(
        (modulo) => modulo.LayoutPrincipal,
      ),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'agendamentos',
      },
      {
        path: 'agendamentos',
        loadComponent: () =>
          import(
            './paginas/agendamentos/agendamentos'
          ).then(
            (modulo) => modulo.Agendamentos,
          ),
      },
      {
        path: 'contatos',
        loadComponent: () =>
          import('./paginas/contatos/contatos').then(
            (modulo) => modulo.Contatos,
          ),
      },
      {
        path: 'projetos',
        loadComponent: () =>
          import(
            './paginas/projetos-artisticos/projetos-artisticos'
          ).then(
            (modulo) => modulo.ProjetosArtisticos,
          ),
      },
      {
        path: 'servicos',
        loadComponent: () =>
          import('./paginas/servicos/servicos').then(
            (modulo) => modulo.Servicos,
          ),
      },
      {
        path: 'faixas',
        loadComponent: () =>
          import('./paginas/faixas/faixas').then(
            (modulo) => modulo.Faixas,
          ),
      },
      {
        path: 'albuns',
        loadComponent: () =>
          import('./paginas/albuns/albuns').then(
            (modulo) => modulo.Albuns,
          ),
      },
      {
        path: 'acertos',
        loadComponent: () =>
          import('./paginas/acertos/acertos').then(
            (modulo) => modulo.Acertos,
          ),
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('./paginas/perfil/perfil').then(
            (modulo) => modulo.Perfil,
          ),
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];
