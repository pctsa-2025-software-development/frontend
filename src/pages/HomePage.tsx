import { Link } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";

const stats = [
  { label: "Topic guides", value: "6", hint: "Friendly starting points for common questions", accent: "border-brand-400/30" },
  { label: "Primary goal", value: "A11y", hint: "Readable, keyboard-friendly pages", accent: "border-accent-violet/30" },
  { label: "Works offline", value: "Yes", hint: "Ready for school demos without Wi-Fi", accent: "border-accent-fuchsia/30" },
];

const pillars = [
  {
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    title: "Plain-language learning",
    body: "We explain things in everyday language so families and students can understand quickly.",
    glow: "from-brand-500/20 to-transparent",
  },
  {
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    title: "Respectful design",
    body: "Focus rings are obvious, contrast is intentional, and motion can be reduced when needed.",
    glow: "from-accent-violet/20 to-transparent",
  },
  {
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    title: "Practical tools",
    body: "When extension links are ready, this site helps people find them without hunting around.",
    glow: "from-accent-fuchsia/20 to-transparent",
  },
];

const timeline = [
  { year: "2025", title: "Listening first", detail: "We started by noting the questions people ask most.", color: "bg-brand-400" },
  { year: "2026", title: "First release", detail: "The website and extension concept were shared for class and judging demos.", color: "bg-accent-violet" },
  { year: "Next", title: "Community feedback", detail: "We will keep refining content with students, families, and educators.", color: "bg-accent-fuchsia" },
];

const highlights = [
  {
    title: "Resource hub",
    body: "Every guide includes key facts, common myths, and practical tips you can use right away.",
    gradient: "from-brand-500/10 via-transparent to-transparent",
  },
  {
    title: "Companion extension",
    body: "Quick checks and reminders help keep accessibility in mind during everyday browsing.",
    gradient: "from-accent-violet/10 via-transparent to-transparent",
  },
  {
    title: "Demo support",
    body: "Offline instructions and walkthrough notes make live demos less stressful.",
    gradient: "from-accent-fuchsia/10 via-transparent to-transparent",
  },
];

const credibility = [
  { title: "Student-led work", body: "Built by a team that cares deeply about inclusive communication.", stat: "100%", statLabel: "Student built" },
  { title: "Accessibility in practice", body: "Skip links, visible focus, and semantic structure are built in.", stat: "AA", statLabel: "WCAG target" },
  { title: "Honest scope", body: "We clearly separate what is live today from what is planned next.", stat: "6", statLabel: "Topic guides" },
];

export function HomePage() {
  return (
    <div>
      {/* Hero — full-width gradient with mesh pattern */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute inset-0 bg-mesh-1 opacity-60" aria-hidden />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0c0f1a] to-transparent" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6 sm:pt-24">
          <div className="max-w-3xl md:ml-2">
            <Tag className="reveal">Disability education resources</Tag>
            <h1 className="hero-human-heading reveal delay-1 mt-6 font-display text-5xl font-bold sm:text-7xl">
              <span className="text-gradient-brand">Making disability resources</span>{" "}
              <span className="text-white">clearer, kinder, and easier to use.</span>
            </h1>
            <p className="reveal delay-2 mt-7 max-w-2xl text-lg text-slate-400 sm:text-xl">
              We are students who care about accessibility education. AccessBridge is our way of
              sharing practical guides that feel less overwhelming and more useful.
            </p>
            <div className="reveal delay-3 mt-10 flex flex-wrap gap-4">
              <Link to="/resources" className="btn-prism px-8 py-4 text-base font-bold">
                Explore resources
              </Link>
              <Link to="/download-extension" className="btn-frost px-5 py-3 text-sm font-medium">
                Download extension
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {stats.map((s) => (
              <GlassPanel
                key={s.label}
                className={`reveal delay-4 hover-soft-lift border-l-2 p-6 ${s.accent}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {s.label}
                </p>
                <p className="mt-2 text-3xl font-bold text-white">{s.value}</p>
                <p className="mt-2 text-sm text-slate-400">{s.hint}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars — bento grid with icon badges and accent glows */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6">
        <SectionHeader
          eyebrow="Why AccessBridge"
          title="Built to help first, and to feel human while doing it."
          description="This project is personal to us. We want people to feel respected, not talked down to, when they are learning about accessibility."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="group relative">
              <div className={`pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br ${p.glow} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`} aria-hidden />
              <Card className="relative hover-soft-lift h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <svg className="h-6 w-6 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.body}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights — accent gradient backgrounds */}
      <section className="border-y border-white/5 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="What you can do here"
            title="Start with a guide, then take practical next steps."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <GlassPanel key={item.title} className="hover-soft-lift relative overflow-hidden p-6">
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.gradient}`} aria-hidden />
                <div className="relative">
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <p className="mt-3 text-sm text-slate-400">{item.body}</p>
                </div>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline — vertical connected nodes */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Roadmap"
            title="How the project is growing over time."
          />
          <div className="relative mt-14">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-brand-400/40 via-accent-violet/40 to-accent-fuchsia/40 md:block" aria-hidden />
            <div className="space-y-8 md:space-y-12">
              {timeline.map((t) => (
                <div key={t.year} className="relative flex items-start gap-6 md:gap-8">
                  <div className="relative z-10 hidden md:block">
                    <div className={`h-3 w-3 rounded-full ${t.color} ring-4 ring-[#0c0f1a]`} />
                  </div>
                  <GlassPanel className="flex-1 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-400">
                      {t.year}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">{t.title}</p>
                    <p className="mt-2 text-sm text-slate-400">{t.detail}</p>
                  </GlassPanel>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credibility — stat-led cards with pull-quote style */}
      <section className="border-y border-white/5 bg-gradient-to-b from-transparent via-accent-violet/[0.03] to-transparent py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Credibility"
            title="What keeps this work grounded."
            description="We are still learning, and we are open about that. Care, clarity, and accessibility guide every update."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {credibility.map((item) => (
              <Card key={item.title} className="hover-soft-lift text-center">
                <p className="text-gradient-brand text-4xl font-bold">{item.stat}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-500">{item.statLabel}</p>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-400">{item.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — full-bleed gradient with glassmorphic overlay */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute left-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-500/20 blur-[100px]" />
          <div className="absolute right-1/4 top-1/3 h-48 w-48 rounded-full bg-accent-violet/15 blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <GlassPanel className="relative overflow-hidden p-10 sm:p-14">
            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Want to share feedback or suggest a new topic?
                </h2>
                <p className="mt-4 max-w-xl text-slate-400">
                  We would genuinely love to hear from you. Even one thoughtful suggestion can help
                  us make this project more useful for students, families, and educators.
                </p>
              </div>
              <Link to="/contact" className="btn-prism shrink-0 px-8 py-4">
                Talk to the team
              </Link>
            </div>
          </GlassPanel>
        </div>
      </section>
    </div>
  );
}
