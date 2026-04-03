import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "@/app/layout/AppLayout";
import { HomePage } from "@/pages/HomePage";

const AboutPage = lazy(() => import("@/pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const AccessibilityStatementPage = lazy(() => import("@/pages/AccessibilityStatementPage").then((m) => ({ default: m.AccessibilityStatementPage })));
const ContactPage = lazy(() => import("@/pages/ContactPage").then((m) => ({ default: m.ContactPage })));
const DownloadExtensionPage = lazy(() => import("@/pages/DownloadExtensionPage").then((m) => ({ default: m.DownloadExtensionPage })));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })));
const PrivacyPage = lazy(() => import("@/pages/PrivacyPage").then((m) => ({ default: m.PrivacyPage })));
const ResourceTopicPage = lazy(() => import("@/pages/ResourceTopicPage").then((m) => ({ default: m.ResourceTopicPage })));
const ResourcesHubPage = lazy(() => import("@/pages/ResourcesHubPage").then((m) => ({ default: m.ResourcesHubPage })));
const TermsPage = lazy(() => import("@/pages/TermsPage").then((m) => ({ default: m.TermsPage })));

function PageFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-400 border-t-transparent" />
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
