# Project Delos — Disability Education Website

A professional, accessible multi-page website designed to make disability education resources clearer, kinder, and easier to find. This repository contains the website frontend; the **Project Delos Companion** browser extension is maintained separately.

**Built by students who care about accessibility.** Part of the TSA Software Development competition.

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

## Getting started

**Prerequisites:** Node.js 18 or later

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser to see your local development server.

## Pre-merge checklist

Before submitting a pull request:

1. **Test all pages manually:**
   - Home page (`/`)
   - Resources hub (`/resources`)
   - At least one topic page (`/resources/:slug`)
   - Extensions page (`/download-extension`)
   - Contact, Privacy, Terms, and Accessibility pages

2. **Run quality checks:**
   ```bash
   npm run lint && npm test && npm run build
   ```

## Deploying to GitHub Pages

### Initial setup (one time)

1. **Enable GitHub Pages:**
   - Go to **Settings → Pages**
   - Set **Source** to **GitHub Actions**

2. **Configure workflow permissions:**
   - Go to **Settings → Actions → General**
   - Under **Workflow permissions**, select **Read and write**
   - Allow GitHub Actions to create pull requests (if prompted)

3. **Verify branch name:**
   - Ensure your default branch name (`main` or `master`) matches the branch name in `.github/workflows/*.yml`
   - Edit workflow files if needed

### How deployment works

- **CI workflow** ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)): Automatically runs linting, tests, and builds on every push and pull request
- **Deploy workflow** ([`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)):
  - Sets `VITE_BASE=/<repository-name>/` so all assets load correctly on GitHub Pages subpaths
  - Publishes the built site to `https://<your-username>.github.io/<repo>/`
  - Copies `dist/index.html` to `dist/404.html` so nested routes (like `/resources/topic-name`) work on page refresh

### Custom domain (optional)

To use a custom domain:
1. Add your domain under **Settings → Pages**
2. Create a `CNAME` file in `public/` with your domain name
3. Update `VITE_BASE` to `/` in your workflow files
4. Update any hardcoded URLs in the codebase as needed

### Troubleshooting

**Blank page or broken assets:**
- Check that `VITE_BASE` in your workflow matches your GitHub Pages URL
- For Project Pages, it should be `/<repository-name>/`
- For custom domains, it should be `/`

**Routes not working after refresh (e.g., `/resources/topic`):**
- Verify the `404.html` step ran in the deploy workflow
- Ensure you redeployed after the workflow was updated
- Check that `dist/404.html` exists in your built site

## For competition events

- **Demo without Wi-Fi?** See [Offline Event Demo](docs/TSA_OFFLINE_DEMO.md) for preparation tips.
- **Being judged on code?** See [Code Walkthrough Guide](docs/JUDGING_CODE_WALKTHROUGH.md) for a structured explanation of the architecture.

## Project structure

```
src/
├── app/              Router and shell layout
├── pages/            Page components for each route
├── components/
│   ├── layout/       Header, footer, skip link, etc.
│   └── ui/           Reusable UI primitives (buttons, cards, panels)
├── content/
│   ├── resources/    Topic articles and metadata
│   └── extension/    Extension release information
├── lib/              Utilities (CSS class merging, etc.)
└── test/             Test configuration
```
