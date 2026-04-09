import { extensionRelease } from "@/content/extension/extension";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeader } from "@/components/ui/SectionHeader";

const screenshotBase = import.meta.env.BASE_URL;

const extensionScreenshots = [
  {
    src: `${screenshotBase}screenshots/snapshot1.png`,
    caption: "Focus Enhancement",
    alt: "Project Delos extension highlights the navigatable elements on the page",
  },
  {
    src: `${screenshotBase}screenshots/snapshot2.png`,
    caption: "High Contrast",
    alt: "Project Delos extension inverts the colors of the page to improve contrast",
  },
] as const;

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
    "Open any website and click the Project Delos icon to see accessibility tools.",
  ];
  const roadmap = [
    { title: "Classroom feedback", detail: "Gather real-world input from students, teachers, and accessibility advocates." },
    { title: "Quick accessibility checks", detail: "Highlight contrast, heading, and focus issues in plain language." },
    { title: "Guided checklists", detail: "Step-by-step guidance for making websites more accessible." },
  ];

  return (
    <div className="relative mx-auto max-w-6xl overflow-hidden px-4 py-16 sm:px-6">
      <div className="glass-orb -right-28 top-0 h-[380px] w-[380px] bg-brand-200/45" aria-hidden />
      <div className="glass-orb -left-20 top-1/2 h-[260px] w-[260px] bg-accent-coral/30" aria-hidden />
      <div className="glass-orb right-1/3 bottom-40 h-[200px] w-[200px] bg-accent-amber/25" aria-hidden />
      <SectionHeader
        as="h1"
        align="left"
        eyebrow="Download"
        title="Project Delos Companion"
        description="A browser extension designed to bring accessibility guidance into your daily browsing. Quick checks, reminders, and practical tools—all from your toolbar."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <GlassPanel className="p-8 lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
            Release
          </p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{r.name}</p>
          <p className="mt-2 text-slate-500">
            Version <span className="font-mono text-slate-600">{r.version}</span> &middot;{" "}
            {r.releaseDate}
          </p>
          <ul className="mt-8 space-y-3">
            {r.featureBullets.map((b) => (
              <li key={b} className="flex gap-3 text-slate-600">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-500" aria-hidden />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            {r.downloadUrl ? (
              <a href={r.downloadUrl} className="btn-prism" download>
                Download package
              </a>
            ) : (
              <Button type="button" disabled>
                Download URL pending
              </Button>
            )}
            {r.chromeWebStoreUrl ? (
              <a
                href={r.chromeWebStoreUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-frost"
              >
                Chrome Web Store
              </a>
            ) : null}
          </div>

          {!hasRemote ? (
            <p className="mt-6 text-sm text-amber-600">
              The download link will be updated here when the extension is published. For now, you can explore the full website without it.
            </p>
          ) : null}
        </GlassPanel>

        <div className="space-y-6">
          <Card>
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">
              Offline demo
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              For events without Wi-Fi, install from a local archive or demo the website with{" "}
              <code className="rounded bg-white/40 px-1 font-mono text-xs text-slate-600 backdrop-blur-sm">npm run preview</code>{" "}
              after a production build.
            </p>
            {r.offlineArchivePath ? (
              <a
                className="mt-4 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700"
                href={r.offlineArchivePath}
                download
              >
                Download offline archive
              </a>
            ) : (
              <p className="mt-4 text-xs text-slate-400">
                Optional: add <code className="font-mono">offlineArchivePath</code> in extension
                content when a zip is published in <code className="font-mono">public/</code>.
              </p>
            )}
          </Card>
          <Card>
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">
              Release notes
            </h2>
            {r.releaseNotesUrl ? (
              <a
                href={r.releaseNotesUrl}
                className="mt-3 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700"
                target="_blank"
                rel="noreferrer noopener"
              >
                View changelog
              </a>
            ) : (
              <p className="mt-3 text-sm text-slate-500">Link to release notes when available.</p>
            )}
          </Card>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-slate-900">Install steps</h2>
          <ol className="mt-4 list-inside list-decimal space-y-2 text-slate-500">
            {installSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold text-slate-900">Requirements</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-slate-500">
            {requirements.map((req) => (
              <li key={req}>{req}</li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-slate-900">Screenshots</h2>
          <p className="mt-3 text-sm text-slate-500">
            The extension popup and toolbar in context.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {extensionScreenshots.map((shot) => (
              <figure key={shot.src} className="overflow-hidden rounded-xl border border-white/60 bg-white/30 backdrop-blur-glass">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="border-t border-white/40 px-3 py-2 text-center text-xs font-medium text-slate-500">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold text-slate-900">Roadmap</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-500">
            {roadmap.map((item) => (
              <li key={item.title}>
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="text-slate-400">{item.detail}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
