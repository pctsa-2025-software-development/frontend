import { LegalPageShell } from "@/components/layout/LegalPageShell";

export function AccessibilityStatementPage() {
  return (
    <LegalPageShell
      eyebrow="Accessibility"
      title="Accessibility statement"
      description="We prioritize keyboard access, visible focus, semantic structure, and reduced-motion support."
    >
      <p>
        This site uses semantic landmarks, skip links, and focus-visible styles. We continue
        testing as pages and content evolve.
      </p>
      <h2 className="text-base font-semibold text-slate-900">Feedback</h2>
      <p>
        If you encounter a barrier, contact the team through the contact page. For judging,
        highlight specific components tested (navigation, forms, topic templates).
      </p>
      <h2 className="text-base font-semibold text-slate-900">Standards</h2>
      <p>
        Target WCAG 2.2 Level AA patterns as you iterate. Automated tools help but do not
        replace manual keyboard and screen reader checks.
      </p>
    </LegalPageShell>
  );
}
