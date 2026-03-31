import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function GlassPanel({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/15 bg-white/10 shadow-glass backdrop-blur-xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
