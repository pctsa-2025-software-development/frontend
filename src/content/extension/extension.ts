/**
 * Extension release metadata — edit when GitHub Releases or store links are available.
 * No dependency on the extension repository in this workspace.
 */
export type ExtensionRelease = {
  name: string;
  version: string;
  releaseDate: string;
  summary: string;
  featureBullets: string[];
  /** Primary download (e.g. GitHub Release asset URL). Placeholder until published. */
  downloadUrl: string | null;
  /** Optional: Chrome Web Store when listed */
  chromeWebStoreUrl: string | null;
  /** Offline demo: path to bundled zip in /public for local serving (optional) */
  offlineArchivePath: string | null;
  releaseNotesUrl: string | null;
};

export const extensionRelease: ExtensionRelease = {
  name: "AccessBridge Companion",
  version: "0.1.0-poc",
  releaseDate: "2026-03-01",
  summary:
    "Browser companion that highlights accessibility options and supports common assistive workflows. Final packaging ships with the extension repository.",
  featureBullets: [
    "Keyboard-first navigation helpers",
    "Contrast and readability quick checks",
    "Respectful defaults with user control",
  ],
  downloadUrl: null,
  chromeWebStoreUrl: null,
  offlineArchivePath: null,
  releaseNotesUrl: null,
};
