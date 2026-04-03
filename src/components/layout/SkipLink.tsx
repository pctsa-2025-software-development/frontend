export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-md transition focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      Skip to main content
    </a>
  );
}
