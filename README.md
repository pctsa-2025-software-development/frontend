# AccessBridge (TSA Software Development — website)

Professional, glassmorphic multi-page site for disability education resources and the **AccessBridge Companion** extension (metadata only in this repo; extension code lives elsewhere).

## Stack

- React 19, Vite 5, TypeScript, Tailwind CSS
- React Router 7, Vitest, ESLint 9 (flat config), Prettier

## Scripts

| Command          | Purpose                          |
| ---------------- | -------------------------------- |
| `npm run dev`    | Local dev server                 |
| `npm run build`  | Typecheck + production build     |
| `npm run preview`| Serve `dist` locally             |
| `npm test`       | Unit tests (Vitest)              |
| `npm run lint`   | ESLint                           |
| `npm run typecheck` | TypeScript only              |

## Local development

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (usually `http://localhost:5173`).

## Major-feature gate (before merge)

1. Manually click through: `/`, `/resources`, `/download-extension`, `/contact`, `/privacy`, `/terms`, `/accessibility`, and at least one topic under `/resources/:slug`.
2. Run: `npm run lint && npm test && npm run build`.

## GitHub Pages deployment

### One-time repository settings

1. **Settings → Pages → Build and deployment**: Source **GitHub Actions** (not “Deploy from a branch” using `/docs` unless you switch strategy).
2. **Settings → Actions → General → Workflow permissions**: allow **Read and write**, and allow GitHub Actions to create pull requests if prompted (read-only is not enough for Pages in some orgs).
3. Ensure the default branch name matches the workflow (`main` or `master` — edit `.github/workflows/*.yml` if yours differs).

### How it works

- [`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs lint, tests, and build on pushes and PRs.
- [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) builds with  
  `VITE_BASE=/<repository-name>/` so asset URLs match **Project Pages** at  
  `https://<user>.github.io/<repo>/`.
- The workflow copies `dist/index.html` to `dist/404.html` so **client-side routes** work on refresh for nested paths.

### Custom domain (optional)

Add your domain under **Pages** and commit a `CNAME` file in `public/` if you use a subdomain; update `VITE_BASE` to `/` for root-hosted sites and adjust workflows accordingly.

### Troubleshooting

- **Blank page or broken assets**: `VITE_BASE` must match the repo segment of the GitHub Pages URL. For Project Pages, keep the deploy workflow’s default.
- **404 on refresh** for `/resources/foo`: ensure `404.html` step ran (see deploy workflow) and that you redeployed after adding it.

## Offline / no-Wi-Fi event demo

See [docs/TSA_OFFLINE_DEMO.md](docs/TSA_OFFLINE_DEMO.md).

## Judging: suggested code walkthrough

See [docs/JUDGING_CODE_WALKTHROUGH.md](docs/JUDGING_CODE_WALKTHROUGH.md).

## Project layout

- `src/app/` — router and shell layout
- `src/pages/` — route-level pages
- `src/components/ui/` — reusable primitives (buttons, glass panels, cards)
- `src/content/resources/` — typed topic articles
- `src/content/extension/` — extension release metadata (URLs placeholders until published)
