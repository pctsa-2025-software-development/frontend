# Demo Preparation Guide: Wi-Fi-Free Setup

TSA competition events may have limited or no internet access. Prepare your demo in **two ways**:
1. **Cloud-hosted** — GitHub Pages live site (for when Wi-Fi is available)
2. **Fully local** — Development server running on your laptop (for offline events)

This guide ensures your project works either way.

## Local Production Preview (Recommended for Offline Events)

If Wi-Fi isn't available, run a local production server on your demo laptop.

**Setup:**
```bash
npm install
npm run build        # Creates optimized dist/ folder
npm run preview -- --host 127.0.0.1 --port 4173
```

**Test:**
1. Open `http://127.0.0.1:4173` in a browser
2. Click through all pages to ensure everything loads
3. Disconnect Wi-Fi and refresh to verify the site still works

**Why this works:** All assets are bundled locally; no CDN is required. Fonts are included via `@fontsource` (not Google Fonts CDN), so everything works offline.

## GitHub Pages Rehearsal (For Online Events)

If hosting is available, verify your live site works correctly.

**Steps:**
1. Find your live URL in **Actions → Deploy GitHub Pages** (usually `https://<username>.github.io/<repo>/`)
2. Open the link and test navigating all pages:
   - Home page
   - Resources hub
   - At least one topic page
   - Contact, Privacy, Terms, Accessibility
   - Download Extension page
3. **Test client-side routing:** Open a nested route (e.g., `/resources/mobility-support`), then refresh the page
   - This verifies the `404.html` fallback works correctly

## Extension Download Page

The extension is maintained in a separate repository. Handle the download links appropriately:

**For the competition:**
- If the extension isn't published yet, leave `downloadUrl` and `chromeWebStoreUrl` as `null` in `src/content/extension/extension.ts`
- The page will show a "Download URL pending" message
- **During judging:** Explain that the extension code lives separately and is not part of this repository

**Optional: Offline archieve**
- If you want to demo the extension without internet, create a zip file and add it to `public/`
- Update `offlineArchivePath` in `extension.ts` to point to it
- Example: `offlineArchivePath: "/extension-v0.1.0.zip"`

## Presentation Backup

Some competition environments may restrict browser extensions or require demonstrating on specific devices.

**Prepare a backup presentation:**
- Record a short screen video showing the extension in action
- Create slides explaining what the extension does and how it helps users
- Show the live GitHub Pages site as proof of concept

**Why:** This ensures you can fully explain the project even if the extension can't be installed during the judging session.
