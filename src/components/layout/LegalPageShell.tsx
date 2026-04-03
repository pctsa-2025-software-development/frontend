import { type ReactNode } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function LegalPageShell({ eyebrow, title, description, children }: Props) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <SectionHeader as="h1" align="left" eyebrow={eyebrow} title={title} description={description} />
      <Card className="mt-10 space-y-4 text-sm leading-relaxed text-slate-400">
        {children}
      </Card>
    </div>
  );
}
