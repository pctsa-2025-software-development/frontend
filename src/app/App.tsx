import { type ComponentType, lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "@/app/layout/AppLayout";
import { HomePage } from "@/pages/HomePage";

function lazyNamed<T extends Record<string, ComponentType>>(
  factory: () => Promise<T>,
  name: keyof T & string,
) {
  return lazy(() => factory().then((m) => ({ default: m[name] })));
}

const AboutPage = lazyNamed(() => import("@/pages/AboutPage"), "AboutPage");
const AccessibilityStatementPage = lazyNamed(() => import("@/pages/AccessibilityStatementPage"), "AccessibilityStatementPage");
const ContactPage = lazyNamed(() => import("@/pages/ContactPage"), "ContactPage");
const DownloadExtensionPage = lazyNamed(() => import("@/pages/DownloadExtensionPage"), "DownloadExtensionPage");
const NotFoundPage = lazyNamed(() => import("@/pages/NotFoundPage"), "NotFoundPage");
const PrivacyPage = lazyNamed(() => import("@/pages/PrivacyPage"), "PrivacyPage");
const ResourceTopicPage = lazyNamed(() => import("@/pages/ResourceTopicPage"), "ResourceTopicPage");
const ResourcesHubPage = lazyNamed(() => import("@/pages/ResourcesHubPage"), "ResourcesHubPage");
const TermsPage = lazyNamed(() => import("@/pages/TermsPage"), "TermsPage");

function PageFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center" role="status" aria-live="polite">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-400 border-t-transparent" />
      <span className="sr-only">Loading page…</span>
    </div>
  );
}

export function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="resources" element={<ResourcesHubPage />} />
          <Route path="resources/:slug" element={<ResourceTopicPage />} />
          <Route path="download-extension" element={<DownloadExtensionPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="accessibility" element={<AccessibilityStatementPage />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
