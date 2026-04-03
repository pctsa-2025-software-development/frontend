import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/cn";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "rounded-lg px-3 py-2 text-sm font-medium transition",
    isActive
      ? "bg-white/10 text-brand-300"
      : "text-slate-300 hover:bg-white/5 hover:text-white",
  );

const items: { to: string; label: string }[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Resources" },
  { to: "/download-extension", label: "Extension" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface-base/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 sm:pr-5">
        <NavLink
          to="/"
          className="reveal flex items-center gap-2.5 text-lg font-bold tracking-tight text-white"
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-400/30 bg-brand-500/15 text-sm font-black text-brand-300"
            aria-hidden
          >
            AB
          </span>
          AccessBridge
        </NavLink>

        <nav className="reveal delay-1 hidden items-center gap-1 md:flex" aria-label="Main">
          {items.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="reveal delay-2 hidden md:block md:mr-1">
          <NavLink to="/download-extension" className="btn-prism">
            Get extension
          </NavLink>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 p-2 text-slate-300 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-white/10 bg-surface-layer px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile main">
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={navLinkClass}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/download-extension"
              className="btn-prism mt-2 px-3 py-3 text-center"
              onClick={() => setOpen(false)}
            >
              Get extension
            </NavLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
