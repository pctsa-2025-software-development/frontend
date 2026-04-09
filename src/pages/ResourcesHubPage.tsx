import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { resourceTopics } from "@/content/resources/topics";

const ALL = "All" as const;

export function ResourcesHubPage() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<string>(ALL);
  const [tag, setTag] = useState<string>(ALL);

  const categories = useMemo(() => {
    const set = new Set(resourceTopics.map((t) => t.category));
    return [ALL, ...Array.from(set).sort()];
  }, []);

  const tags = useMemo(() => {
    const set = new Set(resourceTopics.flatMap((t) => t.tags));
    return [ALL, ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return resourceTopics.filter(
      (t) =>
        (category === ALL || t.category === category) &&
        (tag === ALL || t.tags.includes(tag)) &&
        (!s ||
          t.title.toLowerCase().includes(s) ||
          t.summary.toLowerCase().includes(s) ||
          t.slug.includes(s)),
    );
  }, [category, q, tag]);

  return (
    <div className="relative mx-auto max-w-6xl overflow-hidden px-4 py-16 sm:px-6">
      <div className="glass-orb -left-32 top-12 h-[350px] w-[350px] bg-brand-200/40" aria-hidden />
      <div className="glass-orb -right-20 top-1/3 h-[300px] w-[300px] bg-accent-coral/25" aria-hidden />
      <div className="glass-orb left-1/3 bottom-32 h-[240px] w-[240px] bg-accent-amber/20" aria-hidden />
      <SectionHeader
        as="h1"
        align="left"
        eyebrow="Resources"
        title="Browse guides by topic, at your own pace."
        description="Use search and filters to find what you need. Each guide includes facts, common myths, and practical tips."
      />

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="sr-only" htmlFor="resource-search">
          Search resources
        </label>
        <input
          id="resource-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search topics…"
          className="field-frost max-w-md"
        />
      </div>

      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={c === category}
              onClick={() => setCategory(c)}
              className={
                c === category
                    ? "rounded-full border border-brand-500/30 bg-brand-50/60 px-4 py-2 text-xs font-semibold text-brand-700 backdrop-blur-glass"
                    : "rounded-full border border-white/60 bg-white/50 px-4 py-2 text-xs font-semibold text-slate-600 backdrop-blur-glass hover:bg-white/70"
              }
            >
              {c}
            </button>
          ))}
          {(category !== ALL || tag !== ALL || q.trim()) && (
            <button
              type="button"
              onClick={() => {
                setCategory(ALL);
                setTag(ALL);
                setQ("");
              }}
              className="rounded-full border border-white/60 bg-white/50 px-4 py-2 text-xs font-semibold text-slate-600 backdrop-blur-glass hover:bg-white/70"
            >
              Reset
            </button>
          )}
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400" htmlFor="audience-tag">
            Audience
          </label>
          <select
            id="audience-tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="field-frost py-2"
          >
            {tags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <p className="text-sm text-slate-500">
            Showing {filtered.length} of {resourceTopics.length} topics
          </p>
        </div>
      </div>

      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {filtered.map((topic) => (
          <li key={topic.slug}>
            <Card className="h-full transition hover:border-black/15">
              <div className="flex flex-wrap gap-2">
                <Tag>{topic.lastReviewed}</Tag>
                <Tag>{topic.category}</Tag>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-slate-900">
                <Link
                  to={`/resources/${topic.slug}`}
                  className="rounded hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  {topic.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">{topic.summary}</p>
              <p className="mt-4 text-xs text-slate-400">Audience: {topic.audience}</p>
              <Link
                to={`/resources/${topic.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Read guide &rarr;
              </Link>
            </Card>
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <p className="mt-8 text-center text-slate-500">No topics match your search.</p>
      ) : null}
    </div>
  );
}
