# AccessBridge — Project Conventions

## Architecture
- React 19, Vite 5, TypeScript (strict), Tailwind CSS
- Feature folders: `src/pages/`, `src/components/ui/`, `src/content/`, `src/lib/`
- Named exports only; one component per file
- Path alias `@/` maps to `src/`

## Quality gates
- `npm run lint` — ESLint with jsx-a11y
- `npm run typecheck` — strict TypeScript
- `npm test` — Vitest unit tests
- `npm run build` — full production build

## Visual design
- Dark glassmorphic theme with cyan/violet/fuchsia accents
- Glass panels use `backdrop-filter: blur()` with translucent backgrounds
- All interactive elements need keyboard and screen reader support

## Content
- Topic pages use the `ResourceTopic` type from `src/content/resources/types.ts`
- Extension metadata lives in `src/content/extension/extension.ts`
- Placeholder content will be refined by research team
