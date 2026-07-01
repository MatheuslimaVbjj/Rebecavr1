# ATLÂNTICO STUDIO — Site Premium

Site institucional/landing page estático, responsivo e pronto para publicação no GitHub Pages.

## Estrutura

```text
atlantico-studio-site/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── favicon/
    ├── images/
    ├── logo/
    └── video/
```

## Como subir no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos deste pacote para a raiz do repositório.
3. No GitHub, vá em **Settings → Pages**.
4. Em **Build and deployment**, selecione:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Clique em **Save**.
6. Aguarde o link ser gerado pelo GitHub Pages.

## Como editar informações

- Textos principais: `index.html`
- Cores, espaçamentos e responsividade: `style.css`
- Menu mobile, loading e animações: `script.js`
- Logo e favicon: `assets/logo/` e `assets/favicon/`
- Vídeo do hero: `assets/video/ocean-cinematic.mp4`

## Observação sobre logo

O pacote inclui uma versão vetorial premium editável em SVG/PNG para evitar qualquer asset quebrado. Para trocar pela logo oficial, substitua os arquivos abaixo mantendo os mesmos nomes:

- `assets/logo/logo-atlantico-studio.svg`
- `assets/logo/logo-atlantico-studio.png`
- `assets/logo/icon-atlantico.svg`
- `assets/logo/icon-atlantico.png`
- `assets/favicon/favicon.ico`
- `assets/favicon/favicon-32.png`
- `assets/favicon/apple-touch-icon.png`

## Checklist técnico

- HTML, CSS e JS puros
- Responsivo e mobile-first
- Sem dependências externas obrigatórias
- Loading screen com logo
- Header fixo com menu mobile
- Hero com vídeo local de mar em movimento
- SEO básico e Open Graph
- Animações suaves com suporte a `prefers-reduced-motion`
- Sem scroll horizontal
