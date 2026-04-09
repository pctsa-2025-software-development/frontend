import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Tag({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-brand-500/20 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-700",
        className,
      )}
      {...props}
    />
  );
}
