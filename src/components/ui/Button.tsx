import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary: "btn-prism",
  secondary: "btn-frost",
  ghost: "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
  outline:
    "border border-slate-300 bg-transparent text-slate-700 hover:border-slate-400 hover:bg-slate-100",
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
          "inline-flex items-center justify-center gap-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          className,
        )}
        {...props}
      />
    );
  },
);
