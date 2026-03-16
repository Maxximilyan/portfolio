export type CaseBodyBlock = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type CaseItem = {
  slug: string;
  title: string;
  summary: string;
  impact?: string;
  role: string;
  tags: string[];
  body: CaseBodyBlock[];
};

export type Content = {
  meta: {
    title: string;
    description: string;
    siteUrl?: string;
  };
  header: {
    brand: string;
  };
  nav: {
    about: string;
    cases: string;
    experience: string;
    contact: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    highlights: string[];
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    tertiaryCta?: { label: string; href: string };
  };
  about: {
    title: string;
    subtitle?: string;
    blockTitle: string;
    bullets: string[];
  };
  skills: {
    title: string;
    items: string[];
  };
  cases: {
    title: string;
    subtitle?: string;
    hint: string;
    items: CaseItem[];
  };
  case: {
    back: string;
    impact: string;
    role: string;
  };
  contact: {
    title: string;
    subtitle?: string;
    items: { label: string; value: string; href: string; icon: "gmail" | "telegram" | "linkedin" }[];
  };
  notFound: {
    title: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    note: string;
    built: string;
  };
};
