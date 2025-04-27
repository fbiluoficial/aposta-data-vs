# Ajuste de Deploy para GitHub Pages (branch gh-pages)

## Objetivo
Publicar o conteúdo estático exportado do Next.js na branch `gh-pages` e configurar o GitHub Pages para servir a partir dessa branch.

## Passos

1. **Ajustar o workflow do GitHub Actions**
   - Modificar o arquivo `.github/workflows/deploy.yml` para que o deploy seja feito na branch `gh-pages` e não na `main`.

2. **Exportar o site**
   - O comando `pnpm export` continuará gerando o conteúdo na pasta `out/`.

3. **Deploy automático**
   - O workflow irá publicar o conteúdo da pasta `out` na branch `gh-pages` após cada push na branch `main`.

4. **Configurar o GitHub Pages**
   - No repositório do GitHub, acessar Settings > Pages.
   - Em "Source", selecionar a branch `gh-pages` e a pasta `/` (root).

5. **Acesso**
   - O site estará disponível em:  
     `https://fbiluoficial.github.io/aposta-data-vs/`

## Observações

- O conteúdo da branch `main` permanece como código-fonte.
- A branch `gh-pages` conterá apenas os arquivos estáticos exportados.
- O deploy será automático a cada push na branch `main`.