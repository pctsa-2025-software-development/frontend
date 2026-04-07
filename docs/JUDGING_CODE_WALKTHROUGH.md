# Code Walkthrough & Architecture Guide

This guide helps judges (and contributors) understand the codebase by walking through key files and decisions.

**How to use this:** Pick a section below, open the linked file, and explain:
1. **What it does** — its purpose in the application
2. **How it works** — key implementation details
3. **Why it's designed this way** — the reasoning behind architectural choices

## Routing & Application Shell

**Why this matters:** The routing system needs to work both locally and when deployed to a GitHub Pages subpath. The app shell ensures consistent navigation and accessibility across all pages.

- [`src/main.tsx`](../src/main.tsx)
  - **Purpose:** Application entry point (Vite)
  - **Key detail:** Reads `import.meta.env.BASE_URL` to dynamically set the `BrowserRouter` basename
  - **Why:** Allows the same codebase to work at `/` (custom domain) or `/<repo-name>/` (GitHub Pages)

- [`src/app/App.tsx`](../src/app/App.tsx)
  - **Purpose:** Central route definitions
  - **Key detail:** All pages are lazy-loaded via a custom `lazyNamed` helper
  - **Why:** Reduces initial bundle size; pages load only when needed

- [`src/app/layout/AppLayout.tsx`](../src/app/layout/AppLayout.tsx)
  - **Purpose:** Wraps all pages with header, skip link, footer, and semantic structure
  - **Key detail:** Uses `<main id="main-content">` and skip link for accessibility
  - **Why:** Ensures consistent navigation and allows screen reader users to jump to main content

## Design System

**Why this matters:** A reusable design system ensures visual consistency and makes the codebase easier to maintain.

- [`src/components/ui/GlassPanel.tsx`](../src/components/ui/GlassPanel.tsx)
  - **Purpose:** Core glassmorphic surface component used throughout the site
  - **Key detail:** Accepts className and children for flexibility
  - **Why:** One component = one place to update the glass aesthetic

- [`src/lib/cn.ts`](../src/lib/cn.ts)
  - **Purpose:** Utility for safely merging Tailwind CSS classes
  - **Key detail:** Combines `clsx` (conditional classes) and `tailwind-merge` (resolves conflicts)
  - **Why:** Prevents style conflicts when overriding default component styles

## Content Architecture & Scalability

**Why this matters:** Separating content from presentation makes it trivial to add new topics without touching components.

- [`src/content/resources/types.ts`](../src/content/resources/types.ts)
  - **Purpose:** TypeScript schema defining what a topic article contains
  - **Key detail:** Includes fields for facts, misconceptions, tips, references, and related topics
  - **Why:** Type safety ensures all topics have consistent structure

- [`src/content/resources/topics.ts`](../src/content/resources/topics.ts)
  - **Purpose:** Central registry of all topic articles
  - **Key detail:** Exports an array of topics and a `getTopicBySlug()` lookup function
  - **Why:** Single source of truth; adding a new topic is just adding one object to the array

- [`src/pages/ResourceTopicPage.tsx`](../src/pages/ResourceTopicPage.tsx)
  - **Purpose:** Single page template that renders any topic by URL slug
  - **Key detail:** Uses `useParams()` to get the slug, then looks it up in the registry
  - **Why:** No need to create a new page file for each topic; one component handles all

## Extension Integration

**Why this matters:** The extension code lives in a separate repository, but the website needs to know about releases and download links.

- [`src/content/extension/extension.ts`](../src/content/extension/extension.ts)
  - **Purpose:** Centralized metadata about the extension (version, features, download URLs)
  - **Key detail:** No dependency on the extension repo; URLs can be updated here without code changes
  - **Why:** When the extension ships, just update the URLs and the website automatically reflects the new version

## Accessibility

**Why this matters:** Accessibility shouldn't be an afterthought; it's baked into the architecture.

- [`src/components/layout/SkipLink.tsx`](../src/components/layout/SkipLink.tsx)
  - **Purpose:** Hidden link that appears on focus, allowing keyboard users to skip navigation
  - **Key detail:** Links to `#main-content` in AppLayout
  - **Why:** Keyboard and screen reader users shouldn't have to navigate headers repeatedly

- [`src/index.css`](../src/index.css)
  - **Purpose:** Global styles including reduced motion preferences
  - **Key detail:** Uses `@media (prefers-reduced-motion: reduce)` to disable animations for users who prefer it
  - **Why:** Some users find animations distracting or nauseating; respecting this preference is essential

## Quality Assurance

**Why this matters:** Automated testing and linting catch errors early and maintain code quality.

- [`src/app/App.test.tsx`](../src/app/App.test.tsx)
  - **Purpose:** Smoke test verifying the application renders without crashes
  - **Key detail:** Tests that the home page hero section displays correctly
  - **Why:** A quick sanity check that the app still works after changes

- [`.github/workflows/ci.yml`](https://github.com/pctsa-2025-software-development/frontend/blob/main/.github/workflows/ci.yml)
  - **Purpose:** Continuous Integration—runs on every push and pull request
  - **Key detail:** Runs lint, tests, and full TypeScript build (with type checking)
  - **Why:** Catches errors before they reach main branch; ensures code quality is consistent
