import { Link } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

const team = [
  { name: "Project lead", role: "Strategy, writing, and quality" },
  { name: "Engineering", role: "Frontend architecture, routing, and accessibility" },
  { name: "Research", role: "Topic drafts, references, and inclusive language" },
];

const partners = ["School chapter advisors", "Local accessibility organizations", "Educators and classroom partners"];

export function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeader
        as="h1"
        align="left"
        eyebrow="About"
        title="Why we built AccessBridge"
        description="Clear disability education should be easier to find. We started with real conversations, built what mattered most, and we're committed to improving it based on feedback from students, families, and educators."
      />

      <div className="mt-11 grid gap-6 md:grid-cols-2">
        <Card className="hover-soft-lift md:mt-2">
          <h2 className="text-lg font-semibold text-white">What's in this site</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-slate-400">
            <li>Six resource guides covering mobility, vision, hearing, neurodiversity, caregiving, and workplace needs</li>
            <li>Links to the AccessBridge Companion browser extension (when available)</li>
            <li>Fully accessible UI: keyboard navigation, screen reader tested, respects user preferences</li>
          </ul>
        </Card>
        <Card className="hover-soft-lift">
          <h2 className="text-lg font-semibold text-white">What's next</h2>
          <p className="mt-4 text-slate-400">
            We're listening to feedback from the community. Whether it's adding more guides, expanding into new topics, or building features based on real needs—we want your input.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-block text-sm font-semibold text-slate-300 hover:text-white"
          >
            Send us feedback →
          </Link>
        </Card>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <Card className="hover-soft-lift">
          <h2 className="text-lg font-semibold text-white">Team snapshot</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            {team.map((member) => (
              <li key={member.name}>
                <p className="font-semibold text-white">{member.name}</p>
                <p className="text-slate-500">{member.role}</p>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="hover-soft-lift md:mt-3">
          <h2 className="text-lg font-semibold text-white">Community partners</h2>
          <p className="mt-4 text-sm text-slate-400">
            We're grateful for feedback from educators, accessibility advocates, and real users who help shape this project.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-slate-400">
            {partners.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
