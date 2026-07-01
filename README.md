# ATLÂNTICO STUDIO — Site institucional premium

Pacote pronto para publicar no GitHub Pages.

## Estrutura

```txt
atlantico-studio-site/
├── index.html
├── style.css
├── script.js
├── video-test.html
├── assets/
│   ├── favicon/
│   ├── images/
│   ├── logo/
│   └── video/
└── README.md
```

## Versão v6

Esta versão foi ajustada para usar vídeo real no fundo inteiro do site, incluindo o Hero inicial.

O Hero não usa imagem como fundo. O background principal vem de um elemento `<video>` fixo no `index.html`.

Principais ajustes:

- Removido poster/imagem do Hero.
- Removido fallback visual com imagem no CSS.
- Background global em vídeo MP4.
- Vídeo externo de oceano/ondas carregado por conexão direta.
- Fallback local em MP4 caso o vídeo externo não carregue.
- Botão discreto “Ativar vídeo” aparece apenas se o Safari bloquear autoplay.
- CSS refeito sem blocos duplicados e sem media query escondendo vídeo.
- Responsividade refinada para desktop, tablet e mobile.

## Publicar no GitHub Pages

1. Extraia o ZIP.
2. Abra a pasta `atlantico-studio-site`.
3. Envie todos os arquivos para o repositório.
4. No GitHub, vá em **Settings > Pages**.
5. Selecione a branch principal e a pasta `/root`.
6. Aguarde a publicação.

## Teste do vídeo

Depois de publicar, abra:

```txt
/video-test.html
```

Essa página toca apenas o vídeo, com controles. Se ela tocar, o vídeo externo está carregando corretamente no navegador.

## Cache no Safari

Após substituir arquivos no GitHub Pages, use:

```txt
Option + Command + R
```

ou teste em uma janela privada.

## Observação sobre a logo

A pasta `assets/logo` contém a versão atual usada no projeto. Para trocar pela logo oficial final, substitua os arquivos mantendo os mesmos nomes:

```txt
assets/logo/logo-atlantico-studio.svg
assets/logo/logo-atlantico-studio.png
assets/logo/icon-atlantico.svg
assets/logo/icon-atlantico.png
assets/favicon/favicon.ico
assets/favicon/favicon-32.png
assets/favicon/apple-touch-icon.png
```
