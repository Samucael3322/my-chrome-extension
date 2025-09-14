# bootcamp2-chrome-ext-example

Extensão de exemplo para o Bootcamp — Manifest V3 (Chrome 114+).  
Contém um popup, um service worker e um content script minimalistas.

## Estrutura
```
my-chrome-extension/
├─ src/
│  ├─ popup/
│  ├─ content/
│  ├─ background/
│  └─ assets/
├─ icons/
├─ docs/
├─ manifest.json
├─ README.md
└─ LICENSE
```

## Instalação (modo desenvolvedor)
1. Baixe o .zip ou clone o repositório.
2. Acesse `chrome://extensions` e ative *Developer mode*.
3. Clique em **Load unpacked** e selecione a pasta `my-chrome-extension`.

## Testes
- Abra o popup (ícone da extensão) e clique em **Ping background** — você verá a resposta do service worker.
- Acesse `https://developer.chrome.com/` para ver o content script destacando links.

## Publicação no GitHub
1. Crie um repositório público chamado `bootcamp2-chrome-ext-<seu-usuario>`.
2. `git init`, `git add .`, `git commit -m "Initial commit"`, `git branch -M main`, `git remote add origin ...`, `git push -u origin main`.
3. Vá em Settings → Pages → escolha Branch: `main`, Folder: `/docs`, salve.
4. Crie uma Release com o arquivo `.zip` anexado (ou use Releases → New release).

## Licença
MIT — veja arquivo LICENSE.
