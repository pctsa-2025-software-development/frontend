import { extensionRelease } from "@/content/extension/extension";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function DownloadExtensionPage() {
  const r = extensionRelease;
  const hasRemote = Boolean(r.downloadUrl || r.chromeWebStoreUrl);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeader
        align="left"
        eyebrow="Download"
        title="AccessBridge Companion"
        description={r.summary}
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <GlassPanel className="p-8 lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">
            Release
          </p>
          <p className="mt-2 text-3xl font-bold text-white">{r.name}</p>
          <p className="mt-2 text-slate-300">
            Version <span className="font-mono text-brand-200">{r.version}</span> ·{" "}
            {r.releaseDate}
          </p>
          <ul className="mt-8 space-y-3">
            {r.featureBullets.map((b) => (
              <li key={b} className="flex gap-3 text-slate-200">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-400" aria-hidden />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            {r.downloadUrl ? (
              <a href={r.downloadUrl}>
                <Button type="button">Download package</Button>
              </a>
            ) : (
              <Button type="button" disabled>
                Download URL pending
              </Button>
            )}
            {r.chromeWebStoreUrl ? (
              <a href={r.chromeWebStoreUrl} target="_blank" rel="noreferrer noopener">
                <Button variant="secondary" type="button">
                  Chrome Web Store
                </Button>
              </a>
            ) : null}
          </div>

          {!hasRemote ? (
            <p className="mt-6 text-sm text-amber-200/90">
              Placeholder: add a GitHub Release asset URL or store listing in{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs">
                src/content/extension/extension.ts
              </code>
              .
            </p>
          ) : null}
        </GlassPanel>

        <div className="space-y-6">
          <Card>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Offline demo
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              For events without Wi-Fi, install from a local archive or demo the website with{" "}
              <code className="rounded bg-white/10 px-1 font-mono text-xs">npm run preview</code>{" "}
              after a production build.
            </p>
            {r.offlineArchivePath ? (
              <a
                className="mt-4 inline-block text-sm font-semibold text-brand-300 hover:text-brand-200"
                href={r.offlineArchivePath}
                download
              >
                Download offline archive
              </a>
            ) : (
              <p className="mt-4 text-xs text-slate-500">
                Optional: add <code className="font-mono">offlineArchivePath</code> in extension
                content when a zip is published in <code className="font-mono">public/</code>.
              </p>
            )}
          </Card>
          <Card>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Release notes
            </h2>
            {r.releaseNotesUrl ? (
              <a
                href={r.releaseNotesUrl}
                className="mt-3 inline-block text-sm font-semibold text-brand-300 hover:text-brand-200"
                target="_blank"
                rel="noreferrer noopener"
              >
                View changelog
              </a>
            ) : (
              <p className="mt-3 text-sm text-slate-400">Link to release notes when available.</p>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
