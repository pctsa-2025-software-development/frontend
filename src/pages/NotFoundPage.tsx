import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">404</p>
      <h1 className="mt-4 font-display text-4xl font-bold text-white">Page not found</h1>
      <p className="mt-4 text-slate-400">
        The route does not exist. On GitHub Pages, ensure SPA routing is configured (see README).
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
      >
        Back home
      </Link>
    </div>
  );
}
