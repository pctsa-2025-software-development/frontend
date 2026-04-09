import { Link } from "react-router-dom";

const footerCols = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Product",
    links: [
      { to: "/resources", label: "Resources" },
      { to: "/download-extension", label: "Extension" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy" },
      { to: "/terms", label: "Terms" },
      { to: "/accessibility", label: "Accessibility" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-8 border-t border-white/50 bg-surface-deep/70 backdrop-blur-glass-lg">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="font-display text-lg font-bold text-slate-900">Project Delos</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              A student-built project sharing clear disability resources and practical
              accessibility support for everyday use.
            </p>
          </div>
          {footerCols.map((col) => (
            <div key={col.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-slate-500 transition hover:text-slate-900"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 border-t border-white/40 pt-8 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Project Delos. Built with care by students for TSA Software
          Development.
        </p>
      </div>
    </footer>
  );
}
