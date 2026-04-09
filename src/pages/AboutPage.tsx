import { Link } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { resourceTopics } from "@/content/resources/topics";

const team = [
  { title: "Project Lead", name: "Brian Xiong", role: "Oversees project direction, manages timelines, and ensures every deliverable meets quality standards." },
  { title: "Engineering", name: "Aviral Parmarthi", role: "Designs and builds the frontend architecture, implements accessibility features, and maintains CI/CD pipelines." },
  { title: "Research", name: "Chinmay Khaire", role: "Drafts topic guides, verifies sources, and reviews content for inclusive and accurate language." },
];

const partners = ["School chapter advisors", "Local accessibility organizations", "Educators and classroom partners"];

export function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeader
        as="h1"
        align="left"
        eyebrow="About"
        title="Why we built Project Delos"
        description="Clear disability education should be easier to find. We started with real conversations, built what mattered most, and we're committed to improving it based on feedback from students, families, and educators."
      />

      <div className="mt-11 grid gap-6 md:grid-cols-2">
        <Card className="hover-soft-lift md:mt-2">
          <h2 className="text-lg font-semibold text-slate-900">What&rsquo;s in this site</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-slate-500">
            <li>{resourceTopics.length} resource guides covering mobility, vision, hearing, neurodiversity, caregiving, and workplace needs</li>
            <li>Links to the Project Delos Companion browser extension (when available)</li>
            <li>Fully accessible UI: keyboard navigation, screen reader tested, respects user preferences</li>
          </ul>
        </Card>
        <Card className="hover-soft-lift">
          <h2 className="text-lg font-semibold text-slate-900">What&rsquo;s next</h2>
          <p className="mt-4 text-slate-500">
            We&rsquo;re listening to feedback from the community. Whether it&rsquo;s adding more guides, expanding into new topics, or building features based on real needs—we want your input.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            Send us feedback &rarr;
          </Link>
        </Card>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <Card className="hover-soft-lift">
          <h2 className="text-lg font-semibold text-slate-900">Team snapshot</h2>
          <ul className="mt-4 space-y-5 text-sm">
            {team.map((member) => (
              <li key={member.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">{member.title}</p>
                <p className="mt-0.5 text-lg font-bold text-slate-900">{member.name}</p>
                <p className="mt-1 text-slate-500">{member.role}</p>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="hover-soft-lift md:mt-3">
          <h2 className="text-lg font-semibold text-slate-900">Community partners</h2>
          <p className="mt-4 text-sm text-slate-500">
            We&rsquo;re grateful for feedback from educators, accessibility advocates, and real users who help shape this project.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-slate-500">
            {partners.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
