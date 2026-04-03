import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Tag({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-300",
        className,
      )}
      {...props}
    />
  );
}
