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
        "surface-card rounded-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
