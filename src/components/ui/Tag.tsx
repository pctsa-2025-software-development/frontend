import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Tag({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700",
        className,
      )}
      {...props}
    />
  );
}
