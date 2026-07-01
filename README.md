# ATLÂNTICO STUDIO — Site institucional premium

Site estático pronto para GitHub Pages.

## Arquivos principais

- `index.html` — estrutura da página
- `style.css` — identidade visual, responsividade e animações
- `script.js` — loader, menu mobile, vídeo e formulário
- `video-options.html` — página para visualizar as 3 opções de vídeo do Hero
- `assets/logo` — logo, ícone e arquivos visuais da marca
- `assets/favicon` — favicon do site
- `assets/video` — vídeo aplicado no Hero
- `assets/video/options` — 3 opções de vídeos de mar
- `assets/images` — posters, thumbnails e imagens de apoio

## Vídeo atual do Hero

O site está usando por padrão:

```html
assets/video/ocean-waves-atlantico.mp4
```

Esse arquivo é uma cópia da opção 03:

```html
assets/video/options/ocean-option-03-ondas-batendo.mp4
```

## Como trocar o vídeo do Hero

No `index.html`, localize:

```html
<source src="assets/video/ocean-waves-atlantico.mp4" type="video/mp4" />
```

Troque pelo caminho de uma das opções:

```html
assets/video/options/ocean-option-01-ondas-aereas.mp4
assets/video/options/ocean-option-02-mar-profundo.mp4
assets/video/options/ocean-option-03-ondas-batendo.mp4
```

Também altere o poster se quiser:

```html
poster="assets/images/video-thumbs/ocean-option-01-ondas-aereas.jpg"
poster="assets/images/video-thumbs/ocean-option-02-mar-profundo.jpg"
poster="assets/images/video-thumbs/ocean-option-03-ondas-batendo.jpg"
```

## Como subir no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. Vá em **Settings > Pages**.
4. Em **Build and deployment**, escolha:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Salve e aguarde o GitHub gerar o link.

## Observação sobre cache

Se o site antigo continuar aparecendo no Safari depois do upload, abra em janela anônima ou limpe o cache. Em GitHub Pages, às vezes o navegador mantém o vídeo antigo por alguns minutos.
