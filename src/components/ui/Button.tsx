import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-900/30 hover:from-brand-400 hover:to-brand-500",
  secondary:
    "border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/15",
  ghost: "text-brand-200 hover:bg-white/10 hover:text-white",
  outline:
    "border border-brand-400/50 bg-transparent text-brand-100 hover:border-brand-300 hover:bg-brand-950/40",
} as const;

type Variant = keyof typeof variants;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ className, variant = "primary", type = "button", ...props }, ref) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          className,
        )}
        {...props}
      />
    );
  },
);
