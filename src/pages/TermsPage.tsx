import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <SectionHeader
        align="left"
        eyebrow="Legal"
        title="Terms of use"
        description="Simple terms for this student project. Have an advisor review before using this language in production."
      />
      <Card className="mt-10 space-y-4 text-sm leading-relaxed text-slate-600">
        <p>
          By using AccessBridge materials, you agree to use them responsibly and to verify
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
      </Card>
    </div>
  );
}
