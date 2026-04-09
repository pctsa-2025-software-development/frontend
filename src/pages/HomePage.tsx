import { Link } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { resourceTopics } from "@/content/resources/topics";

const topicCount = String(resourceTopics.length);

const stats = [
  { label: "Resource guides", value: topicCount, hint: "Clear, practical starting points for everyday questions", accent: "border-l-brand-500" },
  { label: "Built for access", value: "Yes", hint: "Keyboard-friendly, screen reader tested, works offline", accent: "border-l-accent-coral" },
  { label: "By students, for everyone", value: "Open", hint: "Grounded in real conversations with families and educators", accent: "border-l-accent-amber" },
];

const pillars = [
  {
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    title: "Written for real people",
    body: "We explain disability and accessibility in everyday language, without jargon or oversimplification.",
  },
  {
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    title: "Accessibility first",
    body: "Focus indicators are obvious, text contrast is tested, animations respect user preferences. It matters.",
  },
  {
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    title: "Built to last",
    body: "Helpful resources, one place to find them. Created by students who genuinely care about accessibility education.",
  },
];

const timeline = [
  { year: "2025", title: "Community listening", detail: "We asked educators, families, and students: What questions come up most often?", color: "bg-brand-500" },
  { year: "2026", title: "First release", detail: "The website and extension launch for class demos and competition judging.", color: "bg-accent-coral" },
  { year: "Ongoing", title: "Keep improving", detail: "Your feedback shapes what comes next. Sound accessibility education matters.", color: "bg-accent-amber" },
];

const highlights = [
  {
    title: "Resource guides",
    body: "Each guide covers key facts, common misconceptions, and real-world tips you can use right away.",
    border: "border-l-brand-500",
  },
  {
    title: "Companion extension",
    body: "A browser tool that brings accessibility reminders and quick checks to your daily browsing.",
    border: "border-l-accent-coral",
  },
  {
    title: "Built for offline use",
    body: "Works without Wi-Fi—perfect for school demos, events, and computers with limited connectivity.",
    border: "border-l-accent-amber",
  },
];

const credibility = [
  { title: "Built by students", body: "A team that cares deeply about clear, honest communication around disability.", stat: "100%", statLabel: "Student-led" },
  { title: "Accessibility tested", body: "Keyboard navigation, screen readers, and high-contrast modes are central to the design.", stat: "AA", statLabel: "WCAG level" },
  { title: "Honest roadmap", body: "We clearly label what's available today and what's planned next. No surprises.", stat: topicCount, statLabel: "Active guides" },
];

export function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/40">
        <div className="glass-orb -left-32 -top-20 h-[420px] w-[420px] bg-brand-300" aria-hidden />
        <div className="glass-orb -right-24 top-40 h-[350px] w-[350px] bg-accent-coral/60" aria-hidden />
        <div className="glass-orb left-1/3 top-72 h-[260px] w-[260px] bg-accent-amber/40" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6 sm:pt-24">
          <div className="max-w-3xl md:ml-2">
            <Tag className="reveal">Practical accessibility resources</Tag>
            <h1 className="reveal delay-1 mt-6 font-display text-5xl font-bold text-slate-900 sm:text-7xl hero-human-heading">
              We&rsquo;re students making accessibility{" "}
              <span className="font-handwritten text-brand-600">less confusing.</span>
            </h1>
            <p className="reveal delay-2 mt-7 max-w-2xl text-lg text-slate-500 sm:text-xl">
              These guides help families, educators, and builders understand disability
              in everyday language. No jargon. Just honesty.
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
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  {s.label}
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900">{s.value}</p>
                <p className="mt-2 text-sm text-slate-500">{s.hint}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative mx-auto max-w-6xl overflow-hidden px-4 pb-16 pt-24 sm:px-6">
        <div className="glass-orb -right-40 top-0 h-[300px] w-[300px] bg-brand-200/60" aria-hidden />
        <SectionHeader
          eyebrow="Why we built this"
          title="Built to help first, and to feel human while doing it."
          description="This project is personal to us. We want people to feel respected, not talked down to, when learning about accessibility."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.title} style={{ marginTop: i === 1 ? "1.5rem" : undefined }}>
              <Card className="hover-soft-lift h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-brand-200/40 bg-brand-50/50 backdrop-blur-sm">
                  <svg className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{p.body}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Student quote */}
      <section className="relative overflow-hidden py-12">
        <div className="glass-orb left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 bg-brand-100/60" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <blockquote className="surface-card-strong relative rounded-2xl p-8 sm:p-10">
            <svg className="absolute left-6 top-6 h-8 w-8 text-brand-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.71 11 13.267 11 15.165 11 16.117 10.615 17.03 9.93 17.69 9.245 18.35 8.328 18.72 7.371 18.72c-1.084 0-2.12-.468-2.788-1.399zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.71 21 13.267 21 15.165c0 .952-.385 1.865-1.07 2.525-.685.66-1.602 1.03-2.559 1.03-1.084 0-2.12-.468-2.788-1.399z" />
            </svg>
            <p className="relative mt-4 font-handwritten text-2xl leading-relaxed text-slate-700 sm:text-3xl">
              We started this because we noticed how hard it was to find clear, respectful
              information about disability—so we decided to build it ourselves.
            </p>
            <footer className="mt-6 text-sm font-medium text-slate-400">
              &mdash; The Project Delos student team
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative overflow-hidden border-y border-white/40 py-16">
        <div className="glass-orb -left-28 top-10 h-[280px] w-[280px] bg-accent-coral/40" aria-hidden />
        <div className="glass-orb right-0 top-1/2 h-[220px] w-[220px] bg-brand-200/50" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="What you can do here"
            title="Start with a guide, then take practical next steps."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <GlassPanel key={item.title} className={`hover-soft-lift border-l-2 p-6 ${item.border}`}>
                <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                <p className="mt-3 text-sm text-slate-500">{item.body}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden py-20">
        <div className="glass-orb -left-16 top-1/3 h-[240px] w-[240px] bg-brand-200/40" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Roadmap"
            title="How the project is growing over time."
          />
          <div className="relative mt-14">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-brand-300 via-accent-coral/40 to-accent-amber/40 md:block" aria-hidden />
            <div className="space-y-8 md:space-y-12">
              {timeline.map((t) => (
                <div key={t.year} className="relative flex items-start gap-6 md:gap-8">
                  <div className="relative z-10 hidden md:block">
                    <div className={`h-3 w-3 rounded-full ${t.color} ring-4 ring-surface-base`} />
                  </div>
                  <GlassPanel className="flex-1 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
                      {t.year}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">{t.title}</p>
                    <p className="mt-2 text-sm text-slate-500">{t.detail}</p>
                  </GlassPanel>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="relative overflow-hidden border-y border-white/40 py-20">
        <div className="glass-orb right-10 top-8 h-[260px] w-[260px] bg-brand-300/40" aria-hidden />
        <div className="glass-orb -left-20 bottom-0 h-[200px] w-[200px] bg-accent-amber/30" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Credibility"
            title="What keeps this work grounded."
            description="We are still learning, and we are open about that. Care, clarity, and accessibility guide every update."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {credibility.map((item) => (
              <Card key={item.title} className="hover-soft-lift text-center">
                <p className="text-4xl font-bold text-brand-600">{item.stat}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-400">{item.statLabel}</p>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-500">{item.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="glass-orb left-1/4 top-0 h-[300px] w-[300px] bg-brand-200/40" aria-hidden />
        <div className="glass-orb right-1/4 bottom-0 h-[220px] w-[220px] bg-accent-coral/30" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="surface-card-strong p-10 sm:p-14">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                  Want to share feedback or suggest a new topic?
                </h2>
                <p className="mt-4 max-w-xl text-slate-500">
                  We would genuinely love to hear from you. Even one thoughtful suggestion can help
                  us make this project more useful for students, families, and educators.
                </p>
              </div>
              <Link to="/contact" className="btn-prism shrink-0 px-8 py-4">
                Talk to the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
