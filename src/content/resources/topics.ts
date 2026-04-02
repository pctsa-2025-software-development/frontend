import type { ResourceTopic } from "./types";

/** Editorial content to be refined by your research team; structure is stable for expansion. */
export const resourceTopics: ResourceTopic[] = [
  {
    slug: "mobility-support",
    title: "Mobility support",
    summary:
      "Practical context for mobility-related barriers in daily digital and physical environments, with a focus on respectful language and accommodations.",
    category: "Mobility",
    tags: ["educators", "employers", "family"],
    audience:
      "Educators, employers, and family members supporting people with mobility disabilities.",
    lastReviewed: "2026-03-15",
    keyFacts: [
      "Barriers are often environmental (steps, narrow doors, unreachable controls), not individual limitations.",
      "Assistive tech ranges from ergonomic input devices to voice control and switch access.",
      "Flexible scheduling and remote options can remove whole classes of barriers.",
    ],
    misconceptions: [
      "That mobility support is only about wheelchairs—many conditions are episodic or invisible.",
      "That one accommodation fits everyone—needs vary by task and context.",
    ],
    practicalTips: [
      "Ask what helps rather than assuming; offer multiple ways to participate.",
      "Ensure meeting rooms and digital tools are reachable and operable without fine motor precision when possible.",
    ],
    references: [
      {
        label: "ADA National Network — overview",
        note: "Replace with your vetted source when content is finalized.",
      },
    ],
    relatedSlugs: ["workplace-accommodations", "caregiver-guides"],
  },
  {
    slug: "vision-accessibility",
    title: "Vision accessibility",
    summary:
      "How digital content and environments can work better for people who are blind, have low vision, or use screen magnification.",
    category: "Vision",
    tags: ["designers", "developers", "content"],
    audience: "Designers, developers, and content owners building public-facing sites.",
    lastReviewed: "2026-03-15",
    keyFacts: [
      "Semantic HTML and headings help screen readers build a navigable outline.",
      "Color contrast affects readability for many users, not only those with diagnosed vision conditions.",
      "Images need text alternatives; decorative images should be marked as such.",
    ],
    misconceptions: [
      "That larger text alone fixes accessibility—structure and predictability matter too.",
      "That automated checkers catch everything—manual testing with assistive tech still matters.",
    ],
    practicalTips: [
      "Test keyboard-only navigation on every critical flow.",
      "Avoid conveying meaning by color alone; pair with text or pattern.",
    ],
    references: [
      { label: "WCAG — quick reference", note: "Use official W3C materials for judging citations." },
    ],
    relatedSlugs: ["neurodiversity-support", "mobility-support"],
  },
  {
    slug: "hearing-accessibility",
    title: "Hearing accessibility",
    summary:
      "Communication access in meetings, media, and classrooms for people who are Deaf, hard of hearing, or prefer captions.",
    category: "Hearing",
    tags: ["events", "educators", "media"],
    audience: "Event organizers, teachers, and video producers.",
    lastReviewed: "2026-03-15",
    keyFacts: [
      "Captions benefit many audiences, including noisy environments and non-native speakers.",
      "Sign language and captioning address different needs; neither replaces the other.",
      "Clear audio and visible speakers improve lip-reading and assistive listening.",
    ],
    misconceptions: [
      "That loud volume substitutes for clarity—distortion and noise still block access.",
      "That automated captions are always sufficient—review critical content when accuracy matters.",
    ],
    practicalTips: [
      "Provide agendas and materials ahead of time.",
      "Use live captions for meetings; reserve ASL interpreters when requested.",
    ],
    references: [{ label: "Placeholder — institutional captioning guidelines" }],
    relatedSlugs: ["workplace-accommodations", "vision-accessibility"],
  },
  {
    slug: "neurodiversity-support",
    title: "Neurodiversity support",
    summary:
      "Inclusive practices for autistic people, people with ADHD, and others—without reducing individuals to stereotypes.",
    category: "Neurodiversity",
    tags: ["managers", "educators", "teams"],
    audience: "Managers, educators, and peer teams.",
    lastReviewed: "2026-03-15",
    keyFacts: [
      "Sensory environments (noise, lighting) can help or harm focus and comfort.",
      "Clear expectations and written follow-ups reduce ambiguity.",
      "Strengths and support needs vary widely across individuals.",
    ],
    misconceptions: [
      "That neurodivergent people need “special” treatment—often they need predictable, flexible systems.",
      "That one communication style works for everyone—offer options.",
    ],
    practicalTips: [
      "Offer agenda and materials before meetings.",
      "Allow camera-off options and breaks in long sessions when feasible.",
    ],
    references: [{ label: "Placeholder — respectful language guide" }],
    relatedSlugs: ["workplace-accommodations", "caregiver-guides"],
  },
  {
    slug: "caregiver-guides",
    title: "Caregiver guides",
    summary:
      "High-level guidance for family members and supporters coordinating care, school, and community access.",
    category: "Caregiver",
    tags: ["family", "students"],
    audience: "Family caregivers and student advocates.",
    lastReviewed: "2026-03-15",
    keyFacts: [
      "Documentation and a shared calendar reduce friction across providers and school teams.",
      "Self-care for caregivers affects sustainability of support.",
      "The person supported should lead goals when possible—especially for teens and adults.",
    ],
    misconceptions: [
      "That more meetings equal better outcomes—clarity and follow-through matter more.",
      "That one advocate must do everything—delegate and use community resources.",
    ],
    practicalTips: [
      "Keep a one-page profile of strengths, needs, and accommodations to share with new partners.",
      "Request written summaries after IEP/504 or care meetings.",
    ],
    references: [{ label: "Placeholder — local advocacy org" }],
    relatedSlugs: ["mobility-support", "neurodiversity-support"],
  },
  {
    slug: "workplace-accommodations",
    title: "Workplace accommodations",
    summary:
      "Foundations for requesting and implementing reasonable accommodations in hiring and employment contexts.",
    category: "Workplace",
    tags: ["employees", "hr", "managers"],
    audience: "Employees, HR partners, and team leads.",
    lastReviewed: "2026-03-15",
    keyFacts: [
      "Interactive process: identify barriers, explore options, implement, and adjust.",
      "Accommodations are often low-cost; creativity and flexibility go far.",
      "Privacy matters—share details on a need-to-know basis.",
    ],
    misconceptions: [
      "That accommodations give unfair advantage—they remove barriers to equal opportunity.",
      "That remote work is always the answer—sometimes assistive tech or schedule shifts are better fits.",
    ],
    practicalTips: [
      "Document requests in writing and keep copies of approvals.",
      "Pilot changes with a check-in date to refine what works.",
    ],
    references: [{ label: "EEOC — disability discrimination", note: "Official government sources for citations." }],
    relatedSlugs: ["vision-accessibility", "hearing-accessibility"],
  },
];

const bySlug = new Map(resourceTopics.map((t) => [t.slug, t]));

export function getTopicBySlug(slug: string): ResourceTopic | undefined {
  return bySlug.get(slug);
}

export function getAllTopicSlugs(): string[] {
  return resourceTopics.map((t) => t.slug);
}
