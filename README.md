# ATLÂNTICO STUDIO — Site institucional premium

Site estático pronto para GitHub Pages.

## Arquivos principais

- `index.html` — página principal
- `style.css` — estilos, responsividade e background cinematográfico
- `script.js` — loading, menu mobile, animações e formulário
- `assets/logo` — logo e ícone
- `assets/favicon` — favicon e Apple Touch Icon
- `assets/video/ocean-full-site-bg.mp4` — vídeo principal do oceano usado no Hero e no fundo do site inteiro
- `assets/images/ocean-full-site-poster.jpg` — imagem de fallback antes do vídeo carregar

## O que mudou nesta versão

- O site inteiro usa um vídeo de oceano com águas/ondas em movimento como fundo fixo.
- O Hero também usa o mesmo vídeo, com overlay reduzido para o mar aparecer mais.
- As seções internas foram refinadas com glassmorphism leve, menos aparência genérica e mais acabamento de agência.
- Títulos e textos foram reduzidos para melhor leitura em desktop, tablet e mobile.
- O código inclui parâmetros de cache no vídeo (`?v=5`) para evitar que o Safari/GitHub Pages continue exibindo a versão antiga.

## Como publicar no GitHub Pages

1. Extraia o ZIP.
2. Envie todos os arquivos da pasta para o repositório.
3. No GitHub, vá em **Settings > Pages**.
4. Em **Branch**, selecione `main` e `/root`.
5. Salve e aguarde a publicação.

## Importante sobre cache

Se o navegador ainda mostrar uma versão antiga, faça uma atualização forçada:

- Safari no Mac: `Option + Command + R`
- Chrome/Edge: `Ctrl + Shift + R` ou `Command + Shift + R`
- Também vale abrir em janela anônima.

## Personalização rápida

Para trocar o vídeo do oceano:

1. Coloque o novo MP4 em `assets/video/`.
2. No `index.html`, altere os dois trechos:

```html
<source src="assets/video/ocean-full-site-bg.mp4?v=5" type="video/mp4" />
```

Para trocar a logo:

- Substitua `assets/logo/logo-atlantico-studio.svg`
- Substitua `assets/logo/logo-atlantico-studio.png`
- Substitua os arquivos em `assets/favicon`

