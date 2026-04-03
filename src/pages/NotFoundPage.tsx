import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">404</p>
      <h1 className="mt-4 font-display text-4xl font-bold text-white">Page not found</h1>
      <p className="mt-4 text-slate-400">
        The route does not exist. On GitHub Pages, ensure SPA routing is configured (see README).
      </p>
      <Link to="/" className="btn-prism mt-8 px-6 py-3">
        Back home
      </Link>
    </div>
  );
}
