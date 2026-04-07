import { extensionRelease } from "@/content/extension/extension";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function DownloadExtensionPage() {
  const r = extensionRelease;
  const hasRemote = Boolean(r.downloadUrl || r.chromeWebStoreUrl);
  const requirements = [
    "Chrome, Edge, or Brave (any Chromium-based browser)",
    "Keyboard and mouse interaction",
    "No account required—works right away",
  ];
  const installSteps = [
    "Download the extension from GitHub or the Chrome Web Store.",
    "Enable it and optionally pin it to your toolbar.",
    "Open any website and click the AccessBridge icon to see accessibility tools.",
  ];
  const roadmap = [
    { title: "Classroom feedback", detail: "Gather real-world input from students, teachers, and accessibility advocates." },
    { title: "Quick accessibility checks", detail: "Highlight contrast, heading, and focus issues in plain language." },
    { title: "Guided checklists", detail: "Step-by-step guidance for making websites more accessible." },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeader
        as="h1"
        align="left"
        eyebrow="Download"
        title="AccessBridge Companion"
        description="A browser extension designed to bring accessibility guidance into your daily browsing. Quick checks, reminders, and practical tools—all from your toolbar."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <GlassPanel className="p-8 lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            Release
          </p>
          <p className="mt-2 text-3xl font-bold text-white">{r.name}</p>
          <p className="mt-2 text-slate-400">
            Version <span className="font-mono text-slate-300">{r.version}</span> ·{" "}
            {r.releaseDate}
          </p>
          <ul className="mt-8 space-y-3">
            {r.featureBullets.map((b) => (
              <li key={b} className="flex gap-3 text-slate-300">
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
            <p className="mt-6 text-sm text-amber-400">
              The download link will be updated here when the extension is published. For now, you can explore the full website without it.
            </p>
          ) : null}
        </GlassPanel>

        <div className="space-y-6">
          <Card>
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              Offline demo
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              For events without Wi-Fi, install from a local archive or demo the website with{" "}
              <code className="rounded bg-white/10 px-1 font-mono text-xs text-slate-300">npm run preview</code>{" "}
              after a production build.
            </p>
            {r.offlineArchivePath ? (
              <a
                className="mt-4 inline-block text-sm font-semibold text-slate-300 hover:text-white"
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
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              Release notes
            </h2>
            {r.releaseNotesUrl ? (
              <a
                href={r.releaseNotesUrl}
                className="mt-3 inline-block text-sm font-semibold text-slate-300 hover:text-white"
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

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-white">Install steps</h2>
          <ol className="mt-4 list-inside list-decimal space-y-2 text-slate-400">
            {installSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold text-white">Requirements</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-slate-400">
            {requirements.map((req) => (
              <li key={req}>{req}</li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-white">Screenshots</h2>
          <p className="mt-3 text-sm text-slate-400">
            Replace these placeholders with real extension screens when they are ready.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {["Toolbar overview", "Accessibility panel"].map((label) => (
              <div
                key={label}
                className="flex h-40 items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/5 text-xs text-slate-400"
              >
                {label} screenshot
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold text-white">Roadmap</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            {roadmap.map((item) => (
              <li key={item.title}>
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-slate-500">{item.detail}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
