import { Link } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";

const stats = [
  { label: "Resource paths", value: "6+", hint: "Topic templates ready to scale" },
  { label: "Focus", value: "A11y", hint: "Built with keyboard-first patterns" },
  { label: "Demo mode", value: "Offline", hint: "Local build + static hosting" },
];

const pillars = [
  {
    title: "Education that scales",
    body: "Structured guides for common questions—written for clarity, not jargon.",
  },
  {
    title: "Product-grade UX",
    body: "Glassmorphic surfaces, vibrant gradients, and motion that respects reduced-motion settings.",
  },
  {
    title: "Extension-ready",
    body: "Download metadata lives in typed content—swap URLs when releases ship.",
  },
];

const timeline = [
  { year: "2025", title: "Problem framing", detail: "Identify real barriers and responsible messaging." },
  { year: "2026", title: "POC build", detail: "Website + extension ecosystem (extension repo separate)." },
  { year: "Next", title: "Scale & refine", detail: "Add research-backed content and user testing." },
];

export function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.25),_transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
          <div className="max-w-3xl">
            <Tag>Disability resources</Tag>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl sm:leading-tight">
              Clarity, access, and dignity—{" "}
              <span className="bg-gradient-to-r from-brand-300 via-white to-accent-fuchsia bg-clip-text text-transparent">
                engineered for real life
              </span>
              .
            </h1>
            <p className="mt-6 text-lg text-slate-300 sm:text-xl">
              AccessBridge is a modern, professional platform for learning about disability
              topics and downloading the companion extension. Built as a scalable proof of
              concept for TSA Software Development.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/resources"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-900/30 transition hover:from-brand-400 hover:to-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
              >
                Explore resources
              </Link>
              <Link
                to="/download-extension"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
              >
                Download extension
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <GlassPanel key={s.label} className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-200">
                  {s.label}
                </p>
                <p className="mt-2 text-3xl font-bold text-white">{s.value}</p>
                <p className="mt-2 text-sm text-slate-400">{s.hint}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeader
          eyebrow="Why AccessBridge"
          title="A Stripe-inspired rhythm: narrative, proof, and a crisp call to action."
          description="We combine editorial depth with a systemized layout—so your team can add topics without re-architecting the site."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <Card key={p.title}>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{p.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Roadmap"
            title="A timeline that tells the story—design process, not just screenshots."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {timeline.map((t) => (
              <GlassPanel key={t.year} className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-300">
                  {t.year}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{t.title}</p>
                <p className="mt-2 text-sm text-slate-400">{t.detail}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <GlassPanel className="relative overflow-hidden p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-fuchsia/20 blur-3xl" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Ready for the next layer of polish?
              </h2>
              <p className="mt-3 max-w-xl text-slate-300">
                Add research-backed copy, media, and interactive demos—your template and routing
                are already in place.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-900/30 transition hover:from-brand-400 hover:to-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
            >
              Talk to the team
            </Link>
          </div>
        </GlassPanel>
      </section>
    </div>
  );
}
