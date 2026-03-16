import type { Content } from "@/content/types";

export const en: Content = {
  meta: {
    title: "Maxim Dudnik — AI Operations / Program Manager (AI initiatives)",
    description:
      "Bilingual (EN/RU) resume landing page with selected cases: AI operations, delivery, and coordination.",
    siteUrl: ""
  },
  header: {
    brand: "Maxim Dudnik",
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
    primaryCta: { label: "Email me", href: "mailto:dudnyk.maksym@gmail.com" },
    secondaryCta: { label: "Telegram", href: "https://t.me/maxximilyan" },
  },
  about: {
    title: "About",
    subtitle:
      "AI Operations focused on execution: I translate goals into delivery, align stakeholders, and make AI initiatives work in real operations.",
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
    subtitle: "In progress — I’ll fill this section with achievements next.",
    items: [],
  },
  contact: {
    title: "Contact",
    subtitle: "",
    items: [
      { label: "Email", value: "dudnyk.maksym@gmail.com", href: "mailto:dudnyk.maksym@gmail.com" },
      { label: "Telegram", value: "@maxximilyan", href: "https://t.me/maxximilyan" },
      { label: "LinkedIn", value: "linkedin.com/in/maxim-dudnik", href: "https://www.linkedin.com/in/maxim-dudnik/" }
    ],
  },
  notFound: {
    title: "Page not found",
    subtitle: "The page doesn’t exist or was moved.",
    cta: "Go to home",
  },
  footer: {
    note: "© Maxim Dudnik",
    built: "Built with Next.js + Tailwind",
  },
};
