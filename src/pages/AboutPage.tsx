import { Link } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeader
        align="left"
        eyebrow="About"
        title="AccessBridge exists to make trustworthy information easier to find."
        description="We are a student-led POC modeled as a professional disability-focused organization. Our mission is education, respectful language, and practical tools—including a companion browser extension developed in a separate repository."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold text-white">What we ship in this site</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-slate-300">
            <li>Multi-page resource hub with six topic templates</li>
            <li>Extension download surface driven by typed release metadata</li>
            <li>Accessible glassmorphic UI with vibrant gradients</li>
          </ul>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold text-white">What comes next</h2>
          <p className="mt-4 text-slate-300">
            Content will be refined by a dedicated research team. The architecture and
            templates are designed so editorial updates do not require rewriting the app.
          </p>
          <Link
            to="/resources"
            className="mt-4 inline-block text-sm font-semibold text-brand-300 hover:text-brand-200"
          >
            Browse resources →
          </Link>
        </Card>
      </div>
    </div>
  );
}
