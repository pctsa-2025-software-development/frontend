import { Link, useParams } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { getTopicBySlug } from "@/content/resources/topics";

export function ResourceTopicPage() {
  const { slug = "" } = useParams();
  const topic = getTopicBySlug(slug);

  if (!topic) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <h1 className="text-2xl font-bold text-slate-900">Topic not found</h1>
        <p className="mt-4 text-slate-500">
          <Link to="/resources" className="text-brand-600 hover:text-brand-700">
            Back to resources
          </Link>
        </p>
      </div>
    );
  }

  const related = topic.relatedSlugs
    .map((s) => getTopicBySlug(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
        <Link to="/resources" className="hover:text-slate-900">
          Resources
        </Link>
        <span className="mx-2" aria-hidden>
          /
        </span>
        <span className="text-slate-600">{topic.title}</span>
      </nav>

      <SectionHeader
        as="h1"
        align="left"
        eyebrow="Topic guide"
        title={topic.title}
        description={topic.summary}
      >
        <div className="mt-6 flex flex-wrap gap-2">
          <Tag>Last reviewed {topic.lastReviewed}</Tag>
          <Tag>{topic.category}</Tag>
          {topic.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </SectionHeader>

      <p className="mt-8 text-slate-500">
        <strong className="text-slate-900">Audience:</strong> {topic.audience}
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold text-slate-900">Key facts</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-slate-500">
            {topic.keyFacts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold text-slate-900">Common misconceptions</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-slate-500">
            {topic.misconceptions.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </Card>
        <Card className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-slate-900">Practical tips</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-slate-500">
            {topic.practicalTips.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="mt-6">
        <h2 className="text-lg font-semibold text-slate-900">References &amp; further reading</h2>
        <ul className="mt-4 space-y-3 text-slate-500">
          {topic.references.map((r) => (
            <li key={r.label}>
              {r.url ? (
                <a
                  href={r.url}
                  className="font-medium text-brand-600 underline-offset-4 hover:text-brand-700 hover:underline"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {r.label}
                </a>
              ) : (
                <span className="font-medium text-slate-900">{r.label}</span>
              )}
              {r.note ? <span className="block text-sm text-slate-400">{r.note}</span> : null}
            </li>
          ))}
        </ul>
      </Card>

      {related.length > 0 ? (
        <div className="mt-14">
          <h2 className="text-lg font-semibold text-slate-900">Related topics</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {related.map((t) => (
              <li key={t.slug}>
                <Link
                  to={`/resources/${t.slug}`}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                >
                  {t.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
