# Deploying this Vite + React site to GitHub Pages

Repo: `GerryJr/Lantic`  
Public URL: https://gerryjr.github.io/Lantic/

## One-time setup
1) Ensure `vite.config.ts` has `base: '/Lantic/'`.  
2) Ensure `src/App.tsx` uses `<BrowserRouter basename="/Lantic">`.  
3) Commit `.github/workflows/deploy.yml`.  
4) In GitHub → **Settings → Pages**: Source = **GitHub Actions**.

## Develop
```bash
npm ci
npm run dev
