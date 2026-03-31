# Suggested code explanation (judges may ask)

Use this map to pick a file quickly and explain **purpose → how it works → why it is structured this way**.

## Application shell and routing

- [`src/main.tsx`](../src/main.tsx) — Vite entry; sets `BrowserRouter` **basename** from `import.meta.env.BASE_URL` so GitHub Pages subpaths resolve assets and routes.
- [`src/app/App.tsx`](../src/app/App.tsx) — Route table; nested layout via `AppLayout`.
- [`src/app/layout/AppLayout.tsx`](../src/app/layout/AppLayout.tsx) — Skip link, header, `<main id="main-content">`, footer.

## Design system

- [`src/components/ui/GlassPanel.tsx`](../src/components/ui/GlassPanel.tsx) — Shared glass surface (border, blur, translucent fill).
- [`src/lib/cn.ts`](../src/lib/cn.ts) — `clsx` + `tailwind-merge` to avoid conflicting Tailwind classes.

## Content architecture (scalability)

- [`src/content/resources/types.ts`](../src/content/resources/types.ts) — Typed schema for topic articles.
- [`src/content/resources/topics.ts`](../src/content/resources/topics.ts) — Six topic entries + `getTopicBySlug` registry.
- [`src/pages/ResourceTopicPage.tsx`](../src/pages/ResourceTopicPage.tsx) — Single template rendering any topic by `:slug`.

## Extension integration (website-only)

- [`src/content/extension/extension.ts`](../src/content/extension/extension.ts) — Release metadata; swap URLs when the extension ships—no monorepo dependency.

## Accessibility

- [`src/components/layout/SkipLink.tsx`](../src/components/layout/SkipLink.tsx) — Skip to `#main-content`.
- [`src/index.css`](../src/index.css) — `prefers-reduced-motion` guardrails.

## Quality gates

- [`src/app/App.test.tsx`](../src/app/App.test.tsx) — Smoke test that the home hero renders.
- [`.github/workflows/ci.yml`](../.github/workflows/ci.yml) — Lint, test, build on every push/PR.
