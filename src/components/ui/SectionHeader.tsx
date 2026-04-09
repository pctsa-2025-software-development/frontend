import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  children?: ReactNode;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
  children,
}: Props) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" && "text-center",
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-lg text-slate-500">{description}</p>
      ) : null}
      {children}
    </div>
  );
}
