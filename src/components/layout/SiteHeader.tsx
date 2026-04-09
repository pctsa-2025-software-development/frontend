import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/cn";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "rounded-lg px-3 py-2 text-sm font-medium transition",
    isActive
      ? "bg-brand-500/10 text-brand-700 backdrop-blur-sm"
      : "text-slate-600 hover:bg-white/40 hover:text-slate-900 hover:backdrop-blur-sm",
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
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/25 shadow-glass backdrop-blur-glass-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 sm:pr-5">
        <NavLink
          to="/"
          className="reveal flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900"
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-sm font-black text-brand-700 backdrop-blur-sm"
            aria-hidden
          >
            PD
          </span>
          Project Delos
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
          className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/30 p-2 text-slate-600 backdrop-blur-glass md:hidden"
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
        <div id="mobile-nav" className="border-t border-white/30 bg-white/25 px-4 py-4 backdrop-blur-glass-lg md:hidden">
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
