import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { GlassPanel } from "./GlassPanel";

export function Card({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <GlassPanel className={cn("p-6", className)} {...props}>
      {children}
    </GlassPanel>
  );
}
