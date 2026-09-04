import { inject } from "@angular/core";
import {
  Router,
  type CanActivateChildFn,
  type CanActivateFn,
  type Routes,
} from "@angular/router";
import {
  DadosEstudio,
  exigirAutenticacao,
} from "@fleiva-studios/shared-data-access";

type SuperficieFleiva = "app" | "card" | "casa" | "play";

const carregarPaginaEstudio = () =>
  import("./paginas/pagina-estudio/pagina-estudio").then(
    (modulo) => modulo.PaginaEstudio,
  );

const carregarToca = () =>
  import("./paginas/toca/toca").then((modulo) => modulo.Toca);

const carregarCasa = () =>
  import("./paginas/casa/casa").then((modulo) => modulo.Casa);

const carregarSala = () =>
  import("./paginas/sala/sala").then((modulo) => modulo.Sala);

const carregarAlbumPublico = () =>
  import("./paginas/album-publico/album-publico").then(
    (modulo) => modulo.AlbumPublico,
  );

const carregarArquivoCompartilhado = () =>
  import("./paginas/arquivo-compartilhado/arquivo-compartilhado").then(
    (modulo) => modulo.ArquivoCompartilhado,
  );

const carregarAlbumCompartilhado = () =>
  import("./paginas/album-compartilhado/album-compartilhado").then(
    (modulo) => modulo.AlbumCompartilhado,
  );const carregarExperienciaImersivaPublica = () =>
  import(
    "./paginas/experiencia-imersiva-publica/experiencia-imersiva-publica"
  ).then(
    (modulo) => modulo.ExperienciaImersivaPublica,
  );

const encaminharTrabalhoParaToca: CanActivateFn = (rota) => {
  const slug = rota.paramMap.get("slug");
  const albumId = rota.paramMap.get("albumId");

  if (typeof window !== "undefined" && slug && albumId) {
    const slugSeguro = encodeURIComponent(slug);
    const albumIdSeguro = encodeURIComponent(albumId);

    window.location.replace(
      `https://play.fleiva.com.br/${slugSeguro}/trabalho/${albumIdSeguro}`,
    );
  }

  return false;
};

const MODULO_POR_ROTA = {
  agendamentos: "agenda",
  contatos: "agenda",
  servicos: "agenda",
  projetos: "artistas",
  "projetos/:id": "artistas",
  faixas: "faixas",
  albuns: "faixas",
  acertos: "financeiro",
} as const;

const exigirAcessoAoModulo: CanActivateChildFn = async (rota) => {
  const dadosEstudio = inject(DadosEstudio);
  const roteador = inject(Router);

  const caminho = rota.routeConfig?.path ?? "";

  const modulo = MODULO_POR_ROTA[caminho as keyof typeof MODULO_POR_ROTA];

  if (!modulo) {
    return true;
  }

  if (!dadosEstudio.estudio()) {
    await dadosEstudio.carregar();
  }

  if (dadosEstudio.possuiModulo(modulo)) {
    return true;
  }

  return roteador.parseUrl(obterDestinoPermitido(dadosEstudio));
};

function obterDestinoPermitido(dadosEstudio: DadosEstudio): string {
  if (dadosEstudio.possuiModulo("agenda")) {
    return "/agendamentos";
  }

  if (dadosEstudio.possuiModulo("artistas")) {
    return "/projetos";
  }

  if (dadosEstudio.possuiModulo("faixas")) {
    return "/faixas";
  }

  if (dadosEstudio.possuiModulo("financeiro")) {
    return "/acertos";
  }

  return "/perfil";
}

/**
 * card.fleiva.com.br
 *
 * Mantém a Casa antiga e os Cards públicos.
 */
const rotasCard: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: carregarCasa,
  },
  {
    path: "estudio",
    pathMatch: "full",
    redirectTo: "",
  },
  {
    path: "estudio/:slug/trabalho/:albumId",
    canActivate: [encaminharTrabalhoParaToca],
    loadComponent: carregarAlbumPublico,
  },
  {
    path: "estudio/:slug",
    pathMatch: "full",
    redirectTo: ":slug",
  },
  {
    path: ":slug",
    loadComponent: carregarPaginaEstudio,
  },
  {
    path: "**",
    redirectTo: "",
  },
];

/**
 * casa.fleiva.com.br
 *
 * Carrega somente a nova experiência Sala.
 * Os links da Sala levam aos Cards no domínio card.fleiva.com.br.
 */
const rotasCasa: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: carregarSala,
  },
  {
    path: "**",
    redirectTo: "",
  },
];

/**
 * play.fleiva.com.br
 */
const rotasPlay: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: carregarToca,
  },
  {
    path: "a/:token",
    loadComponent: carregarAlbumCompartilhado,
  },
  {
    path: "t/:token",
    loadComponent: carregarArquivoCompartilhado,
  },
  {
    path: "album/:token",
    loadComponent: carregarAlbumCompartilhado,
  },
  {
    path: "arquivo/:token",
    loadComponent: carregarArquivoCompartilhado,
  },
  {
  path: "experiencia/:experienciaId",
  loadComponent:
    carregarExperienciaImersivaPublica,
},
  {
    path: "estudio",
    pathMatch: "full",
    redirectTo: "",
  },
  {
    path: "estudio/:slug/trabalho/:albumId",
    loadComponent: carregarAlbumPublico,
  },
  {
    path: "estudio/:slug",
    pathMatch: "full",
    redirectTo: ":slug",
  },
  {
    path: ":slug/trabalho/:albumId",
    loadComponent: carregarAlbumPublico,
  },
  {
    path: ":slug/trabalho",
    pathMatch: "full",
    redirectTo: ":slug",
  },
  {
    path: ":slug",
    loadComponent: carregarToca,
  },
  {
    path: "**",
    redirectTo: "",
  },
];

/**
 * Aplicação principal.
 */
const rotasApp: Routes = [
  {
    path: "experiencia/:experienciaId",
    loadComponent: carregarExperienciaImersivaPublica,
  },
  {
    path: "estudio/:slug/trabalho/:albumId",
    loadComponent: carregarAlbumPublico,
  },
  {
    path: "estudio/:slug",
    loadComponent: carregarPaginaEstudio,
  },
  {
    path: "arquivo/:token",
    loadComponent: carregarArquivoCompartilhado,
  },
  {
    path: "album/:token",
    loadComponent: carregarAlbumCompartilhado,
  },
  {
    path: "cadastro",
    loadComponent: () =>
      import("./paginas/cadastro/cadastro").then((modulo) => modulo.Cadastro),
  },
  {
    path: "login",
    loadComponent: () =>
      import("./paginas/login/login").then((modulo) => modulo.PaginaLogin),
  },
  {
    path: "",
    canActivate: [exigirAutenticacao],
    canActivateChild: [exigirAcessoAoModulo],
    loadComponent: () =>
      import("./layout/layout-principal/layout-principal").then(
        (modulo) => modulo.LayoutPrincipal,
      ),
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "agendamentos",
      },
      {
        path: "agendamentos",
        loadComponent: () =>
          import("./paginas/agendamentos/agendamentos").then(
            (modulo) => modulo.Agendamentos,
          ),
      },
      {
        path: "contatos",
        loadComponent: () =>
          import("./paginas/contatos/contatos").then(
            (modulo) => modulo.Contatos,
          ),
      },
      {
        path: "projetos/:id",
        loadComponent: () =>
          import("./paginas/projeto-detalhe/projeto-detalhe").then(
            (modulo) => modulo.ProjetoDetalhe,
          ),
      },
      {
        path: "projetos",
        loadComponent: () =>
          import("./paginas/projetos-artisticos/projetos-artisticos").then(
            (modulo) => modulo.ProjetosArtisticos,
          ),
      },
      {
        path: "servicos",
        loadComponent: () =>
          import("./paginas/servicos/servicos").then(
            (modulo) => modulo.Servicos,
          ),
      },
      {
        path: "faixas",
        loadComponent: () =>
          import("./paginas/faixas/faixas").then((modulo) => modulo.Faixas),
      },
      {
        path: "albuns",
        loadComponent: () =>
          import("./paginas/albuns/albuns").then((modulo) => modulo.Albuns),
      },
      {
        path: "acertos",
        loadComponent: () =>
          import("./paginas/acertos/acertos").then((modulo) => modulo.Acertos),
      },
      {
        path: "perfil",
        loadComponent: () =>
          import("./paginas/perfil/perfil").then((modulo) => modulo.Perfil),
      },

{
  path: "experiencias",
  loadComponent: () =>
    import(
      "./paginas/experiencias-imersivas/experiencias-imersivas"
    ).then(
      (modulo) => modulo.ExperienciasImersivas,
    ),
},
    ],
  },
  {
    path: "**",
    redirectTo: "",
  },
];

const superficieAtual = identificarSuperficie();

export const rotasAplicacao: Routes =
  superficieAtual === "card"
    ? rotasCard
    : superficieAtual === "casa"
      ? rotasCasa
      : superficieAtual === "play"
        ? rotasPlay
        : rotasApp;

function identificarSuperficie(): SuperficieFleiva {
  if (typeof window === "undefined") {
    return "app";
  }

  const hostname = window.location.hostname.trim().toLocaleLowerCase();

  if (hostname === "card.fleiva.com.br" || hostname === "card.localhost") {
    return "card";
  }

  if (hostname === "casa.fleiva.com.br" || hostname === "casa.localhost") {
    return "casa";
  }

  if (hostname === "play.fleiva.com.br" || hostname === "play.localhost") {
    return "play";
  }

  return "app";
}
