import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Autenticacao } from './autenticacao';

export const exigirAutenticacao: CanActivateFn = async (
  _rota,
  estado,
) => {
  const autenticacao = inject(Autenticacao);
  const roteador = inject(Router);
  const usuario = await autenticacao.obterUsuarioValidado();

  if (usuario) {
    return true;
  }

  return roteador.createUrlTree(['/login'], {
    queryParams: {
      retorno: estado.url,
    },
  });
};
