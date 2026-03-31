import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { resourceTopics } from "@/content/resources/topics";

export function ResourcesHubPage() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return resourceTopics;
    return resourceTopics.filter(
      (t) =>
        t.title.toLowerCase().includes(s) ||
        t.summary.toLowerCase().includes(s) ||
        t.slug.includes(s),
    );
  }, [q]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeader
        align="left"
        eyebrow="Resources"
        title="Learn by topic—each page follows the same editorial structure."
        description="Filter topics by keyword. Every article includes facts, misconceptions, tips, and placeholders for references."
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
          className="w-full max-w-md rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 backdrop-blur-md focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
        />
        <p className="text-sm text-slate-400">
          Showing {filtered.length} of {resourceTopics.length} topics
        </p>
      </div>

      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {filtered.map((topic) => (
          <li key={topic.slug}>
            <Card className="h-full transition hover:border-brand-400/50">
              <div className="flex flex-wrap gap-2">
                <Tag>{topic.lastReviewed}</Tag>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white">
                <Link
                  to={`/resources/${topic.slug}`}
                  className="hover:text-brand-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded"
                >
                  {topic.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{topic.summary}</p>
              <p className="mt-4 text-xs text-slate-500">Audience: {topic.audience}</p>
              <Link
                to={`/resources/${topic.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-brand-300 hover:text-brand-200"
              >
                Read guide →
              </Link>
            </Card>
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <p className="mt-8 text-center text-slate-400">No topics match your search.</p>
      ) : null}
    </div>
  );
}
