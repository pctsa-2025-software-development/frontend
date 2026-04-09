import { LegalPageShell } from "@/components/layout/LegalPageShell";

export function PrivacyPage() {
  return (
    <LegalPageShell
      eyebrow="Legal"
      title="Privacy policy"
      description="Current privacy details for this student project. Expand this page before collecting real user data."
    >
      <p>
        Project Delos may update this page as features evolve. This website is
        designed to avoid collecting personal data unless you later connect forms or analytics
        to real services.
      </p>
      <h2 className="text-base font-semibold text-slate-900">Information we may process</h2>
      <p>
        If you use the contact form without a backend, submissions are not transmitted or
        stored by Project Delos. If you enable hosting analytics, describe the vendor and data
        collected.
      </p>
      <h2 className="text-base font-semibold text-slate-900">Cookies</h2>
      <p>
        This site does not require cookies today. If you add authentication or preferences, document
        categories and retention here.
      </p>
      <h2 className="text-base font-semibold text-slate-900">Contact</h2>
      <p>
        For privacy questions, use the contact page or your chapter advisor&apos;s official
        channel once finalized.
      </p>
    </LegalPageShell>
  );
}
