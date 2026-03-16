import type { Content } from "@/content/types";

export const en: Content = {
  meta: {
    title: "Maksym Dudnyk — Business Operations & AI Automation",
    description:
      "Business Operations & AI Automation Specialist focused on scalable systems, AI implementation, and execution.",
    siteUrl: ""
  },
  header: {
    brand: "Maksym Dudnyk",
  },
  nav: {
    about: "About",
    cases: "Cases",
    experience: "Experience",
    contact: "Contact",
  },
  hero: {
    kicker: "Business Operations & AI Automation Specialist",
    title: "Maksym Dudnyk",
    subtitle:
      "Turning operational chaos into scalable systems, process clarity, and AI-enabled execution. I help startups build operational foundations by improving processes, implementing AI, and automating internal workflows across teams.",
    highlights: [
      "Operations foundations",
      "AI implementation",
      "Workflow automation",
      "Systems design",
      "Execution"
    ],
    primaryCta: { label: "View Projects", href: "#cases" },
    secondaryCta: { label: "Contact Me", href: "#contact" },
    tertiaryCta: { label: "Download Resume", href: "#" },
  },
  about: {
    title: "About",
    subtitle: "I work at the intersection of operations, systems, and AI implementation.",
    blockTitle: "What I do",
    bullets: [
      "Business Operations — improve internal processes and create structure where workflows are fragmented.",
      "AI Implementation — introduce AI into internal systems to save time and support execution.",
      "Workflow Automation — build automation across tools using APIs, webhooks, AI, and no‑code.",
      "Systems & Process Design — replace inefficient setups and build scalable operating foundations.",
    ],
  },
  impact: {
    title: "Impact Snapshot",
    items: [
      { value: "3.5+ years", label: "Startup operations experience" },
      { value: "51 users", label: "Adopted internal AI knowledge bot" },
      { value: "480 / week", label: "Messages processed by AI bot" },
      { value: "22 hours", label: "Saved in first 3 days" },
      { value: "6+ days", label: "Saved per week" },
      { value: "28 → 15", label: "Jira boards simplified" },
    ],
  },
  workingStyle: {
    title: "Working Style",
    subtitle:
      "Most effective in fast-moving environments where systems are evolving and operations need to scale.",
    bullets: [
      "Teams move fast and iterate quickly",
      "Documentation is messy or fragmented",
      "Workflows depend too much on people",
      "Operations need structure and scalability",
      "Not just PM or coordinator — I build and implement systems",
    ],
  },
  tools: {
    title: "Tools",
    items: [
      "n8n",
      "RunBear",
      "OpenAI",
      "Claude",
      "Gemini",
      "Rovo",
      "Supabase",
      "Firecrawl",
      "Slack",
      "HubSpot",
      "Jira",
      "Confluence",
      "APIs",
      "Webhooks",
      "Google Sheets",
      "ATS systems",
      "HRIS systems",
      "Dashboards",
      "Reddit API",
    ],
  },
  skills: {
    title: "Skills / toolkit",
    items: [
      "Business Operations",
      "AI Automation",
      "Process Design",
      "Systems Thinking",
      "Stakeholder Alignment",
      "Knowledge Management",
      "Cross-functional Execution",
    ],
  },
  cases: {
    title: "Selected cases",
    subtitle: "Projects across AI, automation, and operational infrastructure.",
    hint: "Open a case to see details →",
    items: [
      {
        slug: "ai-knowledge-infrastructure",
        title: "AI Knowledge Infrastructure for Internal Operations",
        summary:
          "Created a structured knowledge base and launched an AI Slack bot connected to core systems to answer operational questions instantly.",
        impact: "51 users, 480 weekly messages, 6+ workdays saved per week",
        role: "AI Operations / Systems Builder",
        stack: "RunBear, Slack, HubSpot, Jira, Confluence, Zoom, Google Calendar, Aloware MCP",
        timeline: "2024 — 2025",
        tags: ["Knowledge infrastructure", "AI bot", "Operations"],
        body: [
          {
            title: "Context",
            paragraphs: [
              "Company documentation was scattered across multiple tools and spaces, with no consistent structure or easy retrieval.",
              "Getting answers often required interrupting teammates or joining calls to clarify basic operational details.",
            ],
          },
          {
            title: "What I did",
            paragraphs: [
              "Built the documentation foundation, then evolved it into an AI‑enabled internal system.",
            ],
            bullets: [
              "Reorganized Confluence into a centralized, structured knowledge base",
              "Improved documentation standards with examples and records",
              "Built an internal Slack bot connected to HubSpot, Jira, Confluence, Zoom, Google Calendar, and Aloware MCP",
            ],
          },
          {
            title: "Result",
            paragraphs: [
              "Employees got answers in seconds instead of relying on tribal knowledge or manual requests.",
            ],
            bullets: [
              "22 hours saved in the first 3 days (13 users)",
              "Scaled to 51 users and 480 messages in one week",
              "6+ workdays saved per week",
            ],
          },
        ],
      },
      {
        slug: "reddit-intelligence-workflow",
        title: "Reddit Intelligence Workflow for Market Insight",
        summary:
          "Built an internal system that turns Reddit discussions into structured market and customer insights.",
        impact: "Opened a new strategic direction; dedicated hire created",
        role: "Ops / Automation Lead",
        stack: "n8n, Supabase, Google Sheets, OpenAI, Reddit API, Slack",
        timeline: "2024",
        tags: ["Market intelligence", "Automation", "AI search"],
        body: [
          {
            title: "Context",
            paragraphs: [
              "AI-era search started surfacing Reddit content more prominently.",
              "Reddit became a strategic source of customer language, pain points, and market signals.",
            ],
          },
          {
            title: "What I did",
            paragraphs: ["Proposed Reddit as a strategic intelligence channel and built the workflow."],
            bullets: [
              "Automated collection of threads by keywords and competitor mentions",
              "Structured insights for market understanding and content direction",
              "Delivered a reliable stream of signals to internal stakeholders",
            ],
          },
          {
            title: "Result",
            paragraphs: [
              "Improved visibility into audience pain points and opened a new strategic direction.",
            ],
          },
        ],
      },
      {
        slug: "knowledge-base-restructuring",
        title: "Centralized Documentation System for Operational Clarity",
        summary:
          "Restructured fragmented documentation into a unified Confluence system that supports scale.",
        role: "Ops / Knowledge Management",
        stack: "Confluence, Jira, internal documentation processes",
        timeline: "2023 — 2024",
        tags: ["Knowledge management", "Process design"],
        body: [
          {
            title: "Context",
            paragraphs: [
              "Documentation was fragmented across multiple spaces and hard to maintain.",
              "Employees often had to ask others where information lived or how to interpret it.",
            ],
          },
          {
            title: "What I did",
            paragraphs: ["Led the move to a centralized documentation system."],
            bullets: [
              "Created clearer structure and navigation",
              "Reduced fragmentation and set documentation standards",
              "Made records, examples, and references easier to find",
            ],
          },
          {
            title: "Result",
            paragraphs: [
              "Built the documentation foundation that later enabled AI‑powered retrieval.",
            ],
          },
        ],
      },
      {
        slug: "jira-process-simplification",
        title: "Workflow Simplification Across Jira Operations",
        summary:
          "Reduced Jira board sprawl and improved clarity across teams.",
        impact: "28 boards → 15 boards",
        role: "Ops / Process Improvement",
        stack: "Jira, Confluence, workflow design",
        timeline: "2023",
        tags: ["Process simplification", "Jira"],
        body: [
          {
            title: "Context",
            paragraphs: [
              "Internal workflows were spread across too many Jira boards, creating fragmentation.",
            ],
          },
          {
            title: "What I did",
            paragraphs: ["Supported a simplification effort to reduce operational complexity."],
            bullets: [
              "Consolidated boards and clarified ownership",
              "Improved consistency across teams",
            ],
          },
          {
            title: "Result",
            paragraphs: [
              "Cleaner workflow structure, less operational sprawl, and improved visibility.",
            ],
          },
        ],
      },
      {
        slug: "ai-enabled-recruiting-ops",
        title: "AI‑Enabled Recruiting Operations",
        summary:
          "Improved recruiting workflows by enhancing ATS processes and AI‑supported pre‑screening.",
        role: "Ops / Recruiting Systems",
        stack: "ATS tools, internal systems, AI support workflows",
        timeline: "2022 — 2023",
        tags: ["Recruiting ops", "Automation"],
        body: [
          {
            title: "Context",
            paragraphs: [
              "Recruiting workflows depended on manual steps and fragmented tools.",
            ],
          },
          {
            title: "What I did",
            paragraphs: ["Improved systems and workflows around recruiting operations."],
            bullets: [
              "Refined ATS workflows and internal systems",
              "Supported AI‑enabled pre‑screening",
              "Improved onboarding/offboarding support",
            ],
          },
          {
            title: "Result",
            paragraphs: [
              "More structured recruiting operations and stronger hiring foundation.",
            ],
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
    subtitle: "Interested in operations, AI automation, internal systems, or startup process design?",
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
    note: "© Maksym Dudnyk",
    built: "Built with Next.js + Tailwind",
  },
};
