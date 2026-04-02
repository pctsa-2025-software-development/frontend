export type ResourceTopic = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  audience: string;
  lastReviewed: string;
  keyFacts: string[];
  misconceptions: string[];
  practicalTips: string[];
  references: { label: string; url?: string; note?: string }[];
  relatedSlugs: string[];
};
