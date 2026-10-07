import {
  ExperienciaImersivaPublica
} from "./chunk-6OCD2JVM.js";
import {
  APP_BASE_HREF,
  ActivatedRoute,
  ApplicationRef,
  ChangeDetectionScheduler,
  ClienteSupabase,
  DadosEstudio,
  Injector,
  NgZone,
  Observable,
  ReplaySubject,
  Router,
  __spreadProps,
  __spreadValues,
  createApplication,
  createComponent,
  exigirAutenticacao,
  fornecerConfiguracaoSupabase,
  inject,
  isSignal,
  isViewDirty,
  markForRefresh,
  merge,
  provideBrowserGlobalErrorListeners,
  provideRouter,
  provideZonelessChangeDetection,
  reflectComponentType,
  switchMap
} from "./chunk-IMBOO5ID.js";

// node_modules/@angular/elements/fesm2022/elements.mjs
var scheduler = {
  schedule(taskFn, delay) {
    const id = setTimeout(taskFn, delay);
    return () => clearTimeout(id);
  }
};
function camelToDashCase(input) {
  return input.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);
}
function isElement(node) {
  return !!node && node.nodeType === Node.ELEMENT_NODE;
}
var _matches;
function matchesSelector(el, selector) {
  if (!_matches) {
    const elProto = Element.prototype;
    _matches = elProto.matches || elProto.matchesSelector || elProto.mozMatchesSelector || elProto.msMatchesSelector || elProto.oMatchesSelector || elProto.webkitMatchesSelector;
  }
  return el.nodeType === Node.ELEMENT_NODE ? _matches.call(el, selector) : false;
}
function getDefaultAttributeToPropertyInputs(inputs) {
  const attributeToPropertyInputs = {};
  inputs.forEach(({
    propName,
    templateName,
    transform
  }) => {
    attributeToPropertyInputs[camelToDashCase(templateName)] = [propName, transform];
  });
  return attributeToPropertyInputs;
}
function getComponentInputs(component, injector) {
  return reflectComponentType(component).inputs;
}
function extractProjectableNodes(host, ngContentSelectors) {
  const nodes = host.childNodes;
  const projectableNodes = ngContentSelectors.map(() => []);
  let wildcardIndex = -1;
  ngContentSelectors.some((selector, i) => {
    if (selector === "*") {
      wildcardIndex = i;
      return true;
    }
    return false;
  });
  for (let i = 0, ii = nodes.length; i < ii; ++i) {
    const node = nodes[i];
    const ngContentIndex = findMatchingIndex(node, ngContentSelectors, wildcardIndex);
    if (ngContentIndex !== -1) {
      projectableNodes[ngContentIndex].push(node);
    }
  }
  return projectableNodes;
}
function findMatchingIndex(node, selectors, defaultIndex) {
  let matchingIndex = defaultIndex;
  if (isElement(node)) {
    selectors.some((selector, i) => {
      if (selector !== "*" && matchesSelector(node, selector)) {
        matchingIndex = i;
        return true;
      }
      return false;
    });
  }
  return matchingIndex;
}
var DESTROY_DELAY = 10;
var ComponentNgElementStrategyFactory = class {
  component;
  componentMirror;
  inputMap = /* @__PURE__ */ new Map();
  constructor(component) {
    this.component = component;
    this.componentMirror = reflectComponentType(component);
    for (const input of this.componentMirror.inputs) {
      this.inputMap.set(input.propName, input.templateName);
    }
  }
  create(injector) {
    return new ComponentNgElementStrategy(this.component, injector, this.inputMap);
  }
};
var ComponentNgElementStrategy = class {
  component;
  injector;
  inputMap;
  eventEmitters = new ReplaySubject(1);
  events = this.eventEmitters.pipe(switchMap((emitters) => merge(...emitters)));
  componentRef = null;
  scheduledDestroyFn = null;
  initialInputValues = /* @__PURE__ */ new Map();
  ngZone;
  elementZone;
  appRef;
  cdScheduler;
  constructor(component, injector, inputMap) {
    this.component = component;
    this.injector = injector;
    this.inputMap = inputMap;
    this.ngZone = this.injector.get(NgZone);
    this.appRef = this.injector.get(ApplicationRef);
    this.cdScheduler = injector.get(ChangeDetectionScheduler);
    this.elementZone = typeof Zone === "undefined" ? null : this.ngZone.run(() => Zone.current);
  }
  connect(element) {
    this.runInZone(() => {
      if (this.scheduledDestroyFn !== null) {
        this.scheduledDestroyFn();
        this.scheduledDestroyFn = null;
        return;
      }
      if (this.componentRef === null) {
        this.initializeComponent(element);
      }
    });
  }
  disconnect() {
    this.runInZone(() => {
      if (this.componentRef === null || this.scheduledDestroyFn !== null) {
        return;
      }
      this.scheduledDestroyFn = scheduler.schedule(() => {
        if (this.componentRef !== null) {
          this.componentRef.destroy();
          this.componentRef = null;
        }
      }, DESTROY_DELAY);
    });
  }
  getInputValue(property) {
    return this.runInZone(() => {
      if (this.componentRef === null) {
        return this.initialInputValues.get(property);
      }
      return this.componentRef.instance[property];
    });
  }
  setInputValue(property, value) {
    if (this.componentRef === null) {
      this.initialInputValues.set(property, value);
      return;
    }
    this.runInZone(() => {
      this.componentRef.setInput(this.inputMap.get(property) ?? property, value);
      if (isViewDirty(this.componentRef.hostView)) {
        markForRefresh(this.componentRef.changeDetectorRef);
        this.cdScheduler.notify(6);
      }
    });
  }
  initializeComponent(element) {
    const childInjector = Injector.create({
      providers: [],
      parent: this.injector
    });
    const projectableNodes = extractProjectableNodes(element, reflectComponentType(this.component).ngContentSelectors);
    this.componentRef = createComponent(this.component, {
      environmentInjector: this.injector,
      elementInjector: childInjector,
      hostElement: element,
      projectableNodes
    });
    this.initializeInputs();
    this.initializeOutputs(this.componentRef);
    this.appRef.attachView(this.componentRef.hostView);
    this.componentRef.hostView.detectChanges();
  }
  initializeInputs() {
    for (const [propName, value] of this.initialInputValues) {
      this.setInputValue(propName, value);
    }
    this.initialInputValues.clear();
  }
  initializeOutputs(componentRef) {
    const eventEmitters = reflectComponentType(this.component).outputs.map(({
      propName,
      templateName
    }) => {
      const emitter = componentRef.instance[propName];
      return new Observable((observer) => {
        const sub = emitter.subscribe((value) => observer.next({
          name: templateName,
          value
        }));
        return () => sub.unsubscribe();
      });
    });
    this.eventEmitters.next(eventEmitters);
  }
  runInZone(fn) {
    return this.elementZone && Zone.current !== this.elementZone ? this.ngZone.run(fn) : fn();
  }
};
var NgElement = class extends HTMLElement {
  ngElementEventsSubscription = null;
};
function createCustomElement(component, config) {
  const inputs = getComponentInputs(component);
  const strategyFactory = config.strategyFactory || new ComponentNgElementStrategyFactory(component);
  const attributeToPropertyInputs = getDefaultAttributeToPropertyInputs(inputs);
  class NgElementImpl extends NgElement {
    injector;
    static ["observedAttributes"] = Object.keys(attributeToPropertyInputs);
    get ngElementStrategy() {
      if (!this._ngElementStrategy) {
        const strategy = this._ngElementStrategy = strategyFactory.create(this.injector || config.injector);
        inputs.forEach(({
          propName,
          transform
        }) => {
          if (!this.hasOwnProperty(propName)) {
            return;
          }
          const value = this[propName];
          delete this[propName];
          strategy.setInputValue(propName, value, transform);
        });
      }
      return this._ngElementStrategy;
    }
    _ngElementStrategy;
    constructor(injector) {
      super();
      this.injector = injector;
    }
    attributeChangedCallback(attrName, oldValue, newValue, namespace) {
      const [propName, transform] = attributeToPropertyInputs[attrName];
      this.ngElementStrategy.setInputValue(propName, newValue, transform);
    }
    connectedCallback() {
      let subscribedToEvents = false;
      if (this.ngElementStrategy.events) {
        this.subscribeToEvents();
        subscribedToEvents = true;
      }
      this.ngElementStrategy.connect(this);
      if (!subscribedToEvents) {
        this.subscribeToEvents();
      }
    }
    disconnectedCallback() {
      if (this._ngElementStrategy) {
        this._ngElementStrategy.disconnect();
      }
      if (this.ngElementEventsSubscription) {
        this.ngElementEventsSubscription.unsubscribe();
        this.ngElementEventsSubscription = null;
      }
    }
    subscribeToEvents() {
      this.ngElementEventsSubscription = this.ngElementStrategy.events.subscribe((e) => {
        const customEvent = new CustomEvent(e.name, {
          detail: e.value
        });
        this.dispatchEvent(customEvent);
      });
    }
  }
  inputs.forEach(({
    propName,
    transform,
    isSignal: _isSignal
  }) => {
    Object.defineProperty(NgElementImpl.prototype, propName, {
      get() {
        const inputValue = this.ngElementStrategy.getInputValue(propName);
        return _isSignal && isSignal(inputValue) ? inputValue() : inputValue;
      },
      set(newValue) {
        this.ngElementStrategy.setInputValue(propName, newValue, transform);
      },
      configurable: true,
      enumerable: true
    });
  });
  return NgElementImpl;
}

// apps/studio-dash/src/environments/ambiente.ts
var ambiente = {
  producao: false,
  supabase: {
    url: "https://heodxztxxivfjndqqvzq.supabase.co",
    chavePublicavel: "sb_publishable_VmRTwOQLkse0yh76DxygLA_IwBoqtdi"
  }
};

// apps/studio-dash/src/app/app.routes.ts
var carregarPaginaEstudio = () => import("./chunk-32CQ33RP.js").then(
  (modulo) => modulo.PaginaEstudio
);
var carregarToca = () => import("./chunk-QGVQAIY7.js").then((modulo) => modulo.Toca);
var carregarCasa = () => import("./chunk-NDCJA3ER.js").then((modulo) => modulo.Casa);
var carregarSala = () => import("./chunk-EUJ6365B.js").then((modulo) => modulo.Sala);
var carregarAlbumPublico = () => import("./chunk-P4MFW2CT.js").then(
  (modulo) => modulo.AlbumPublico
);
var carregarArquivoCompartilhado = () => import("./chunk-3GNVWESU.js").then(
  (modulo) => modulo.ArquivoCompartilhado
);
var carregarAlbumCompartilhado = () => import("./chunk-7SS7HDID.js").then(
  (modulo) => modulo.AlbumCompartilhado
);
var carregarExperienciaImersivaPublica = () => import("./chunk-TSXC2RZB.js").then(
  (modulo) => modulo.ExperienciaImersivaPublica
);
var encaminharTrabalhoParaToca = (rota) => {
  const slug = rota.paramMap.get("slug");
  const albumId = rota.paramMap.get("albumId");
  if (typeof window !== "undefined" && slug && albumId) {
    const slugSeguro = encodeURIComponent(slug);
    const albumIdSeguro = encodeURIComponent(albumId);
    window.location.replace(
      `https://play.fleiva.com.br/${slugSeguro}/trabalho/${albumIdSeguro}`
    );
  }
  return false;
};
var MODULO_POR_ROTA = {
  agendamentos: "agenda",
  contatos: "agenda",
  servicos: "agenda",
  projetos: "artistas",
  "projetos/:id": "artistas",
  faixas: "faixas",
  albuns: "faixas",
  acertos: "financeiro"
};
var exigirAcessoAoModulo = async (rota) => {
  const dadosEstudio = inject(DadosEstudio);
  const clienteSupabase = inject(ClienteSupabase);
  const roteador = inject(Router);
  const caminho = rota.routeConfig?.path ?? "";
  const modulo = MODULO_POR_ROTA[caminho];
  if (!modulo) {
    return true;
  }
  await dadosEstudio.carregar();
  if (dadosEstudio.estudio() && dadosEstudio.possuiModulo(modulo)) {
    return true;
  }
  const { data, error } = await clienteSupabase.cliente.rpc(
    "usuario_tem_acesso_como_contato"
  );
  if (!error && data === true) {
    return true;
  }
  if (dadosEstudio.estudio()) {
    return roteador.parseUrl(
      obterDestinoPermitido(dadosEstudio)
    );
  }
  return roteador.parseUrl("/login");
};
function obterDestinoPermitido(dadosEstudio) {
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
var rotasCard = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: carregarCasa
  },
  {
    path: "estudio",
    pathMatch: "full",
    redirectTo: ""
  },
  {
    path: "estudio/:slug/trabalho/:albumId",
    canActivate: [encaminharTrabalhoParaToca],
    loadComponent: carregarAlbumPublico
  },
  {
    path: "estudio/:slug",
    pathMatch: "full",
    redirectTo: ":slug"
  },
  {
    path: ":slug",
    loadComponent: carregarPaginaEstudio
  },
  {
    path: "**",
    redirectTo: ""
  }
];
var rotasCasa = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: carregarSala
  },
  {
    path: "**",
    redirectTo: ""
  }
];
var rotasPlay = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: carregarToca
  },
  {
    path: "a/:token",
    loadComponent: carregarAlbumCompartilhado
  },
  {
    path: "t/:token",
    loadComponent: carregarArquivoCompartilhado
  },
  {
    path: "album/:token",
    loadComponent: carregarAlbumCompartilhado
  },
  {
    path: "arquivo/:token",
    loadComponent: carregarArquivoCompartilhado
  },
  {
    path: "experiencia/:experienciaId",
    loadComponent: carregarExperienciaImersivaPublica
  },
  {
    path: "estudio",
    pathMatch: "full",
    redirectTo: ""
  },
  {
    path: "estudio/:slug/trabalho/:albumId",
    loadComponent: carregarAlbumPublico
  },
  {
    path: "estudio/:slug",
    pathMatch: "full",
    redirectTo: ":slug"
  },
  {
    path: ":slug/trabalho/:albumId",
    loadComponent: carregarAlbumPublico
  },
  {
    path: ":slug/trabalho",
    pathMatch: "full",
    redirectTo: ":slug"
  },
  {
    path: ":slug",
    loadComponent: carregarToca
  },
  {
    path: "**",
    redirectTo: ""
  }
];
var rotasApp = [
  {
    path: "experiencia/:experienciaId",
    loadComponent: carregarExperienciaImersivaPublica
  },
  {
    path: "estudio/:slug/trabalho/:albumId",
    loadComponent: carregarAlbumPublico
  },
  {
    path: "estudio/:slug",
    loadComponent: carregarPaginaEstudio
  },
  {
    path: "arquivo/:token",
    loadComponent: carregarArquivoCompartilhado
  },
  {
    path: "album/:token",
    loadComponent: carregarAlbumCompartilhado
  },
  {
    path: "cadastro",
    loadComponent: () => import("./chunk-PQC2NENM.js").then(
      (modulo) => modulo.Cadastro
    )
  },
  {
    path: "convite",
    loadComponent: () => import("./chunk-5EPW4UWY.js").then(
      (modulo) => modulo.Convite
    )
  },
  {
    path: "login",
    loadComponent: () => import("./chunk-RTKUT3AZ.js").then(
      (modulo) => modulo.PaginaLogin
    )
  },
  {
    path: "",
    canActivate: [exigirAutenticacao],
    canActivateChild: [exigirAcessoAoModulo],
    loadComponent: () => import("./chunk-OCKJ226F.js").then(
      (modulo) => modulo.LayoutPrincipal
    ),
    children: [
      {
        path: "",
        pathMatch: "full",
        canActivate: [
          async () => {
            const dadosEstudio = inject(DadosEstudio);
            const clienteSupabase = inject(ClienteSupabase);
            const roteador = inject(Router);
            await dadosEstudio.carregar();
            if (dadosEstudio.estudio() && dadosEstudio.possuiModulo("artistas")) {
              return roteador.parseUrl("/projetos");
            }
            const { data, error } = await clienteSupabase.cliente.rpc(
              "usuario_tem_acesso_como_contato"
            );
            if (!error && data === true) {
              return roteador.parseUrl(
                "/projetos-externos"
              );
            }
            if (dadosEstudio.estudio()) {
              return roteador.parseUrl(
                obterDestinoPermitido(dadosEstudio)
              );
            }
            return roteador.parseUrl("/login");
          }
        ],
        loadComponent: () => import("./chunk-RCTV4NY4.js").then(
          (modulo) => modulo.ProjetosArtisticos
        )
      },
      {
        path: "agendamentos",
        loadComponent: () => import("./chunk-XCPQ77NH.js").then(
          (modulo) => modulo.Agendamentos
        )
      },
      {
        path: "contatos",
        loadComponent: () => import("./chunk-4A4CUPYU.js").then(
          (modulo) => modulo.Contatos
        )
      },
      {
        path: "projetos/:id",
        loadComponent: () => import("./chunk-EV4QMNV7.js").then(
          (modulo) => modulo.ProjetoDetalhe
        )
      },
      {
        path: "projetos",
        loadComponent: () => import("./chunk-RCTV4NY4.js").then(
          (modulo) => modulo.ProjetosArtisticos
        )
      },
      {
        path: "projetos-externos",
        loadComponent: () => import("./chunk-FMQ5EKYX.js").then(
          (modulo) => modulo.ProjetosExternos
        )
      },
      {
        path: "projetos-externos/:id",
        loadComponent: () => import("./chunk-EV4QMNV7.js").then(
          (modulo) => modulo.ProjetoDetalhe
        )
      },
      {
        path: "servicos",
        loadComponent: () => import("./chunk-H2Q4EJDI.js").then(
          (modulo) => modulo.Servicos
        )
      },
      {
        path: "faixas",
        loadComponent: () => import("./chunk-YYA32SIN.js").then(
          (modulo) => modulo.Faixas
        )
      },
      {
        path: "albuns",
        loadComponent: () => import("./chunk-VTHHKKOY.js").then(
          (modulo) => modulo.Albuns
        )
      },
      {
        path: "acertos",
        loadComponent: () => import("./chunk-EUWSQCXQ.js").then(
          (modulo) => modulo.Acertos
        )
      },
      {
        path: "perfil",
        loadComponent: () => import("./chunk-SIDHEOS4.js").then(
          (modulo) => modulo.Perfil
        )
      },
      {
        path: "experiencias",
        loadComponent: () => import("./chunk-SOOSJNMW.js").then(
          (modulo) => modulo.ExperienciasImersivas
        )
      }
    ]
  },
  {
    path: "**",
    redirectTo: ""
  }
];
var superficieAtual = identificarSuperficie();
var rotasAplicacao = superficieAtual === "card" ? rotasCard : superficieAtual === "casa" ? rotasCasa : superficieAtual === "play" ? rotasPlay : rotasApp;
function identificarSuperficie() {
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

// apps/studio-dash/src/app/app.config.ts
var configuracaoAplicacao = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(rotasAplicacao),
    fornecerConfiguracaoSupabase(ambiente.supabase)
  ]
};

// apps/studio-dash/src/main-widget.ts
(async () => {
  const app = await createApplication(__spreadProps(__spreadValues({}, configuracaoAplicacao), {
    providers: [
      ...configuracaoAplicacao.providers || [],
      { provide: APP_BASE_HREF, useValue: "/" },
      // Previne o crash do Router no JSFiddle/Jornal
      {
        provide: ActivatedRoute,
        // Dublê completo para o seu ngOnInit
        useValue: {
          snapshot: {
            paramMap: { get: () => null },
            queryParamMap: { get: () => null }
          }
        }
      }
    ]
  }));
  const fleivaElement = createCustomElement(ExperienciaImersivaPublica, {
    injector: app.injector
  });
  customElements.define("fleiva-experiencia", fleivaElement);
})();
