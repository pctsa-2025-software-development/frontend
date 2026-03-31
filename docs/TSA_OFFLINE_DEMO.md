# Offline / low-network demo checklist

TSA events may not provide Wi-Fi. Prepare **two** paths: hosted GitHub Pages (if available) and **fully local**.

## A. Local production preview (recommended backup)

1. On the demo laptop:

   ```bash
   npm install
   npm run build
   npm run preview -- --host 127.0.0.1 --port 4173
   ```

2. Open `http://127.0.0.1:4173` in the browser. Disconnect Wi-Fi and confirm the UI still loads.

This site bundles **Inter** via `@fontsource-variable/inter` (no Google Fonts CDN required).

## B. GitHub Pages rehearsal

1. Confirm the live URL from the repository **Actions → Deploy GitHub Pages** run.
2. Walk the same route list as in the README “Major-feature gate”.
3. Hard-refresh on a nested route (e.g. `/resources/mobility-support`) to confirm SPA `404.html` fallback.

## C. Extension download page

- If no public URL exists yet, keep `downloadUrl` / `chromeWebStoreUrl` as `null` in `src/content/extension/extension.ts` and explain the placeholder during judging.
- Optional: add a zip under `public/` and set `offlineArchivePath` for a local file link.

## D. Presentation backup

- Short screen recording or slides showing extension behavior if browser policies block installs during the interview.
