import type { Content } from "@/content/types";

export const en: Content = {
  meta: {
    title: "Your Name — AI Operations / Program Manager (AI initiatives)",
    description:
      "Bilingual (EN/RU) resume landing page with selected cases: AI operations, delivery, and coordination.",
    siteUrl: ""
  },
  header: {
    brand: "Your Name",
  },
  nav: {
    about: "About",
    cases: "Cases",
    experience: "Experience",
    contact: "Contact",
  },
  hero: {
    kicker: "AI Operations • Project coordination • Execution",
    title: "AI Operations / Program Manager (AI initiatives)",
    subtitle:
      "Background in IT recruiting and project coordination; now working in a startup as AI Operations: turning chaos into execution, aligning CEO/COS, building automations, and pushing initiatives to production.",
    highlights: ["Right hand to CEO/COS", "AI adoption", "Automation", "Operations", "Delivery"],
    primaryCta: { label: "Email me", href: "mailto:you@example.com" },
    secondaryCta: { label: "Telegram", href: "https://t.me/yourhandle" },
  },
  about: {
    title: "About",
    subtitle: "A short, concrete summary (edit in src/content/en.ts).",
    blockTitle: "What I do",
    bullets: [
      "Translate goals into clear plans, owners, timelines, and weekly progress.",
      "Implement AI in real workflows: prompts, tools, RAG, evals, rollout, adoption.",
      "Coordinate stakeholders: CEO, COS, engineers, ops, vendors.",
      "Build automations (no/low-code + scripts) and document processes.",
      "Measure impact and close the loop: metrics, iteration, and reliability.",
    ],
  },
  skills: {
    title: "Skills / toolkit",
    items: [
      "AI Ops",
      "Project coordination",
      "Project management",
      "Stakeholder management",
      "Process design (SOPs)",
      "Automation",
      "Docs & enablement",
      "Recruiting (IT)",
    ],
  },
  cases: {
    title: "Selected cases",
    subtitle: "2–5 cases is perfect. Each one should have impact.",
    hint: "Open a case to see the structure →",
    items: [
      {
        slug: "ai-ops-right-hand",
        title: "AI Ops as “right hand”: from idea to rollout",
        summary:
          "Designed and executed AI adoption across internal workflows: discovery → pilot → rollout → iteration, with stakeholder alignment and reliability focus.",
        impact: "Impact: replace with metrics (time saved, $$, adoption %, cycle time).",
        role: "AI Operations / Project Coordinator",
        stack: "LLMs, prompts, internal tools, automations (edit this).",
        timeline: "2025 — present (edit).",
        tags: ["AI adoption", "Ops", "Delivery", "Stakeholders"],
        body: [
          {
            title: "Context",
            paragraphs: [
              "Write 3–5 sentences: what was the situation and why it mattered.",
              "Keep it concrete: who needed what, what was broken, what was the risk.",
            ],
          },
          {
            title: "What I did",
            paragraphs: ["Describe your actions as a sequence."],
            bullets: [
              "Stakeholder interviews and problem framing",
              "Pilot scope + success metrics",
              "Implementation + rollout + training",
              "Monitoring / feedback loop / iteration",
            ],
          },
          {
            title: "Result",
            paragraphs: ["Add measurable outcomes. Even approximate is better than none."],
            bullets: ["Example: reduced turnaround time by X%", "Example: improved quality or consistency"],
          },
        ],
      },
    ],
  },
  case: {
    back: "Back to cases",
    impact: "Impact",
    role: "Role",
    stack: "Tools / stack",
    timeline: "Timeline",
  },
  experience: {
    title: "Experience",
    subtitle: "Keep it achievement-focused (not responsibilities).",
    items: [
      {
        company: "Startup (edit)",
        role: "AI Operations / Right hand to CEO",
        period: "2025 — present",
        bullets: [
          "Driving AI implementation and operational execution across initiatives.",
          "Coordinating CEO/COS priorities into weekly plans and delivery.",
        ],
      },
      {
        company: "Company (edit)",
        role: "Project Coordinator / Project Management (experience)",
        period: "2023 — 2025 (edit)",
        bullets: ["Cross-team coordination, tracking, documentation, delivery support."],
      },
      {
        company: "Company (edit)",
        role: "IT Recruiter",
        period: "2021 — 2023 (edit)",
        bullets: ["Hiring pipeline, stakeholder management, and process improvements."],
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Replace placeholders with real links.",
    items: [
      { label: "Email", value: "you@example.com", href: "mailto:you@example.com" },
      { label: "Telegram", value: "@yourhandle", href: "https://t.me/yourhandle" },
      { label: "GitHub", value: "github.com/your", href: "https://github.com/your" },
      { label: "LinkedIn", value: "linkedin.com/in/your", href: "https://linkedin.com/in/your" },
    ],
  },
  notFound: {
    title: "Page not found",
    subtitle: "The page doesn’t exist or was moved.",
    cta: "Go to home",
  },
  footer: {
    note: "© Your Name",
    built: "Built with Next.js + Tailwind",
  },
};
