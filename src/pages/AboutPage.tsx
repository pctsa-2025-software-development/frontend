import { Link } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

const team = [
  { name: "Project lead", role: "Direction, story, and quality checks" },
  { name: "Engineering", role: "Frontend build, routing, and accessibility patterns" },
  { name: "Research", role: "Topic drafts, references, and inclusive language review" },
];

const partners = ["School chapter advisors", "Local accessibility groups", "Classroom educators"];

export function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeader
        align="left"
        eyebrow="About"
        title="We built AccessBridge because clear disability education should be easier to find."
        description="This project started as a student idea and grew into something we genuinely care about. We try to keep every page practical, respectful, and easy to follow."
      />

      <div className="mt-11 grid gap-6 md:grid-cols-2">
        <Card className="hover-soft-lift md:mt-2">
          <h2 className="text-lg font-semibold text-slate-900">What we ship in this site</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-slate-600">
            <li>A resources hub with clear, repeatable topic pages</li>
            <li>An extension download page tied to release metadata</li>
            <li>Accessibility-focused UI patterns for keyboard and screen-reader use</li>
          </ul>
        </Card>
        <Card className="hover-soft-lift">
          <h2 className="text-lg font-semibold text-slate-900">What comes next</h2>
          <p className="mt-4 text-slate-600">
            Next, we want to keep improving clarity and add more voices from educators,
            students, families, and accessibility advocates.
          </p>
          <Link
            to="/resources"
            className="mt-4 inline-block text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            Browse resources →
          </Link>
        </Card>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <Card className="hover-soft-lift">
          <h2 className="text-lg font-semibold text-slate-900">Team snapshot</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {team.map((member) => (
              <li key={member.name}>
                <p className="font-semibold text-slate-900">{member.name}</p>
                <p className="text-slate-500">{member.role}</p>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="hover-soft-lift md:mt-3">
          <h2 className="text-lg font-semibold text-slate-900">Partners and reviewers</h2>
          <p className="mt-4 text-sm text-slate-600">
            These are placeholders for now while we finish approvals with real collaborators.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-slate-600">
            {partners.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
