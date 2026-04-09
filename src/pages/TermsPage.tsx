import { LegalPageShell } from "@/components/layout/LegalPageShell";

export function TermsPage() {
  return (
    <LegalPageShell
      eyebrow="Legal"
      title="Terms of use"
      description="Simple terms for this student project. Have an advisor review before using this language in production."
    >
      <p>
        By using Project Delos materials, you agree to use them responsibly and to verify
        critical information with qualified professionals when making health, legal, or
        accessibility decisions.
      </p>
      <h2 className="text-base font-semibold text-slate-900">No professional advice</h2>
      <p>
        Content is educational and may be updated. It is not medical, legal, or individualized
        professional advice.
      </p>
      <h2 className="text-base font-semibold text-slate-900">Intellectual property</h2>
      <p>
        Student-created assets remain subject to your school and competition rules. Respect
        third-party licenses for fonts, icons, and libraries.
      </p>
    </LegalPageShell>
  );
}
