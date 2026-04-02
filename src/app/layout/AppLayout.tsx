import { Outlet, useLocation } from "react-router-dom";
import { SkipLink } from "@/components/layout/SkipLink";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export function AppLayout() {
  const location = useLocation();

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <SkipLink />
      <SiteHeader />
      <main id="main-content" className="relative z-10 flex-1" tabIndex={-1}>
        <div key={location.pathname} className="page-enter">
          <Outlet />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
