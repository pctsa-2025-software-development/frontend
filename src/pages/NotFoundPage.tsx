import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="relative mx-auto max-w-6xl overflow-hidden px-4 py-24 text-center sm:px-6">
      <div className="glass-orb left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 bg-brand-200/40" aria-hidden />
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">404</p>
      <h1 className="mt-4 font-display text-4xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-4 text-slate-500">
        The route does not exist. On GitHub Pages, ensure SPA routing is configured (see README).
      </p>
      <Link to="/" className="btn-prism mt-8 inline-block px-6 py-3">
        Back home
      </Link>
    </div>
  );
}
