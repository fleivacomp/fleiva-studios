import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ActivatedRoute } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { configuracaoAplicacao } from './app/app.config';
import { ExperienciaImersivaPublica } from './app/paginas/experiencia-imersiva-publica/experiencia-imersiva-publica';

(async () => {
  const app = await createApplication({
    ...configuracaoAplicacao,
    providers: [
      ...(configuracaoAplicacao.providers || []),
      { provide: APP_BASE_HREF, useValue: '/' }, // Previne o crash do Router no JSFiddle/Jornal
      {
        provide: ActivatedRoute, // Dublê completo para o seu ngOnInit
        useValue: {
          snapshot: {
            paramMap: { get: () => null },
            queryParamMap: { get: () => null }
          }
        }
      }
    ]
  });

  const fleivaElement = createCustomElement(ExperienciaImersivaPublica, {
    injector: app.injector
  });

  customElements.define('fleiva-experiencia', fleivaElement);
})();
