import { Routes } from '@angular/router';

import {
  exigirAutenticacao,
} from '@fleiva-studios/shared-data-access';

export const rotasAplicacao: Routes = [
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
          import(
            './paginas/contatos/contatos'
          ).then(
            (modulo) => modulo.Contatos,
          ),
      },
      {
        path: 'projetos',
        loadComponent: () =>
          import(
            './paginas/projetos-artisticos/projetos-artisticos'
          ).then(
            (modulo) =>
              modulo.ProjetosArtisticos,
          ),
      },
      {
        path: 'faixas',
        loadComponent: () =>
          import(
            './paginas/faixas/faixas'
          ).then(
            (modulo) => modulo.Faixas,
          ),
      },
      {
        path: 'servicos',
        loadComponent: () =>
          import(
            './paginas/servicos/servicos'
          ).then(
            (modulo) => modulo.Servicos,
          ),
      },
      {
        path: 'acertos',
        loadComponent: () =>
          import(
            './paginas/acertos/acertos'
          ).then(
            (modulo) => modulo.Acertos,
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
