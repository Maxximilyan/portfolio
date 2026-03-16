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

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
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
  impact: {
    title: string;
    items: { value: string; label: string }[];
  };
  workingStyle: {
    title: string;
    subtitle?: string;
    bullets: string[];
  };
  tools: {
    title: string;
    items: string[];
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
  experience: {
    title: string;
    subtitle?: string;
    items: ExperienceItem[];
  };
  contact: {
    title: string;
    subtitle?: string;
    items: { label: string; value: string; href: string }[];
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
