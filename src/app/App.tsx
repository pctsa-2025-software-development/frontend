import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "@/app/layout/AppLayout";
import { AboutPage } from "@/pages/AboutPage";
import { AccessibilityStatementPage } from "@/pages/AccessibilityStatementPage";
import { ContactPage } from "@/pages/ContactPage";
import { DownloadExtensionPage } from "@/pages/DownloadExtensionPage";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { ResourceTopicPage } from "@/pages/ResourceTopicPage";
import { ResourcesHubPage } from "@/pages/ResourcesHubPage";
import { TermsPage } from "@/pages/TermsPage";

export function App() {
  return (
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
  );
}
