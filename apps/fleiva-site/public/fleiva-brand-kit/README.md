# Kit de marca Flêiva

Arquivos preparados a partir das seis imagens de teste fornecidas.

## Paleta extraída

- Verde principal: `#5E886F`
- Roxo de registro: `#885F74`
- Creme: `#F7F2E0`
- Branco frio: `#F0F2F1`

## Estrutura

- `fontes/`: PNGs normalizados, recortados e com transparência.
- `web/`: WebP em 640 e 1280 px.
- `mask/`: máscaras transparentes para efeitos programáveis.
- `svg/`: versões vetoriais reais, sem raster embutido.
- `icones/`: favicon, ícones PWA e Apple Touch Icon.
- `demo/`: comparação visual e jitter em CSS.
- `angular/`: componente standalone pronto para integração.
- `ferramentas/`: script usado para gerar os caminhos SVG a partir das máscaras.

## Testar o jitter

Abra `demo/index.html` no navegador e passe o mouse sobre a primeira marca.

O efeito:

- acontece apenas por interação;
- não fica rodando enquanto o usuário trabalha;
- também responde a foco por teclado;
- é removido quando o sistema pede redução de movimento.

## Integração no Angular

1. Copie `mask/fleiva-wordmark-mask.png` e
   `mask/fleiva-monogram-mask.png` para:

   `apps/studio-dash/public/marca/`

2. Copie os três arquivos de `angular/` para um componente da aplicação.

3. Importe `FleivaLogo` no componente standalone que utilizará a marca.

4. Use a marca completa:

   `<app-fleiva-logo [entrada]="true" />`

5. Use o monograma:

   `<app-fleiva-logo [compacta]="true" />`

Para controlar o tamanho em um contexto específico:

```scss
app-fleiva-logo {
  --fleiva-largura: 9rem;
}
```

## Favicon

Copie os arquivos necessários de `icones/` para a pasta pública e adicione ao
`index.html`:

```html
<link rel="icon" href="/marca/favicon.ico" sizes="any" />
<link rel="icon" type="image/png" href="/marca/fleiva-icon-32.png" />
<link rel="apple-touch-icon" href="/marca/fleiva-icon-180.png" />
```

## Recomendações

- Login: marca completa com `[entrada]="true"`.
- Sidebar aberta: marca completa com jitter.
- Sidebar recolhida: monograma.
- Páginas públicas: assinatura pequena no rodapé.
- Player: monograma estático.
- Não usar jitter contínuo ou em loop.

## Sobre os SVGs

Os SVGs deste kit possuem caminhos vetoriais de verdade. Não são imagens PNG
codificadas dentro de um arquivo `.svg`.

`fleiva-wordmark-flat.svg` é a versão monocromática.

`fleiva-wordmark-jitter.svg` contém três camadas e animação interna. Para maior
controle no Angular, prefira o componente baseado nas máscaras PNG.

Para regenerar um vetor após ajustar uma máscara:

`python3 ferramentas/vetorizar_mascara.py mask/fleiva-wordmark-mask.png svg/fleiva-wordmark-flat.svg --modo flat`
