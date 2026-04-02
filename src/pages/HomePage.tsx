import { Link } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";

const stats = [
  { label: "Topic guides", value: "6", hint: "Friendly starting points for common questions" },
  { label: "Primary goal", value: "A11y", hint: "Readable, keyboard-friendly pages" },
  { label: "Works offline", value: "Yes", hint: "Ready for school demos without Wi-Fi" },
];

const pillars = [
  {
    title: "Plain-language learning",
    body: "We explain things in everyday language so families and students can understand quickly.",
  },
  {
    title: "Respectful design",
    body: "Focus rings are obvious, contrast is intentional, and motion can be reduced when needed.",
  },
  {
    title: "Practical tools",
    body: "When extension links are ready, this site helps people find them without hunting around.",
  },
];

const timeline = [
  { year: "2025", title: "Listening first", detail: "We started by noting the questions people ask most." },
  { year: "2026", title: "First release", detail: "The website and extension concept were shared for class and judging demos." },
  { year: "Next", title: "Community feedback", detail: "We will keep refining content with students, families, and educators." },
];

const highlights = [
  {
    title: "Resource hub",
    body: "Every guide includes key facts, common myths, and practical tips you can use right away.",
  },
  {
    title: "Companion extension",
    body: "Quick checks and reminders help keep accessibility in mind during everyday browsing.",
  },
  {
    title: "Demo support",
    body: "Offline instructions and walkthrough notes make live demos less stressful.",
  },
];

const credibility = [
  { title: "Student-led work", body: "Built by a team that cares deeply about inclusive communication." },
  { title: "Accessibility in practice", body: "Skip links, visible focus, and semantic structure are built in." },
  { title: "Honest scope", body: "We clearly separate what is live today from what is planned next." },
];

export function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-stone-200/90">
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pt-20">
          <div className="max-w-3xl md:ml-2">
            <Tag className="reveal">Disability education resources</Tag>
            <h1 className="hero-human-heading reveal delay-1 mt-5 font-display text-4xl font-bold text-slate-900 sm:text-6xl">
              Making disability resources clearer, kinder, and easier to use.
            </h1>
            <p className="reveal delay-2 mt-6 text-lg text-slate-600 sm:text-xl">
              We are students who care about accessibility education. AccessBridge is our way of
              sharing practical guides that feel less overwhelming and more useful.
            </p>
            <div className="reveal delay-3 mt-9 flex flex-wrap gap-3">
              <Link to="/resources" className="btn-prism px-7 py-3.5 text-base font-bold">
                Explore resources
              </Link>
              <Link to="/download-extension" className="btn-frost px-4 py-2 text-sm font-medium">
                Download extension
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {stats.map((s, i) => (
              <GlassPanel
                key={s.label}
                className={`reveal delay-4 hover-soft-lift p-6 ${i === 0 ? "organic-a card-soft-a sm:min-h-[176px] sm:pt-7" : ""} ${i === 1 ? "card-soft-b sm:min-h-[264px] sm:pb-10" : ""} ${i === 2 ? "organic-b card-soft-c sm:min-h-[154px] sm:pb-5" : ""}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {s.label}
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900">{s.value}</p>
                <p className="mt-2 text-sm text-slate-600">{s.hint}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 pt-24 sm:px-6">
        <SectionHeader
          eyebrow="Why AccessBridge"
          title="Built to help first, and to feel human while doing it."
          description="This project is personal to us. We want people to feel respected, not talked down to, when they are learning about accessibility."
        />
        <div className="mt-11 grid gap-6 md:grid-cols-6">
          {pillars.map((p, i) => (
            <Card
              key={p.title}
              className={`hover-soft-lift ${i === 0 ? "card-soft-a md:col-span-3 md:min-h-[230px]" : ""} ${i === 1 ? "organic-a card-soft-b md:col-span-2 md:min-h-[255px]" : ""} ${i === 2 ? "card-soft-c md:col-span-1 md:min-h-[208px] md:pt-8" : ""}`}
            >
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-amber-50/40 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="What you can do here"
            title="Start with a guide, then take practical next steps."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map((item, i) => (
              <GlassPanel key={item.title} className={`hover-soft-lift p-6 ${i === 2 ? "organic-a" : ""}`}>
                <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm text-slate-600">{item.body}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Roadmap"
            title="How the project is growing over time."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {timeline.map((t, i) => (
              <GlassPanel key={t.year} className={`p-6 ${i === 0 ? "md:mt-3" : ""} ${i === 2 ? "md:mt-5" : ""}`}>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  {t.year}
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{t.title}</p>
                <p className="mt-2 text-sm text-slate-600">{t.detail}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6">
        <SectionHeader
          eyebrow="Credibility"
          title="What keeps this work grounded."
          description="We are still learning, and we are open about that. Care, clarity, and accessibility guide every update."
        />
        <div className="mt-11 grid gap-6 md:grid-cols-3">
          {credibility.map((item, i) => (
            <Card key={item.title} className={`hover-soft-lift ${i === 0 ? "organic-b" : ""}`}>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6">
        <GlassPanel className="relative overflow-hidden p-8 sm:p-11">
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                Want to share feedback or suggest a new topic?
              </h2>
              <p className="mt-3 max-w-xl text-slate-600">
                We would genuinely love to hear from you. Even one thoughtful suggestion can help
                us make this project more useful for students, families, and educators.
              </p>
            </div>
            <Link to="/contact" className="btn-prism shrink-0">
              Talk to the team
            </Link>
          </div>
        </GlassPanel>
      </section>
    </div>
  );
}
