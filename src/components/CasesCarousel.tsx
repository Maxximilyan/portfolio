"use client";

import { useCallback, useMemo, useState } from "react";

import { AnimatedRangeStat } from "@/components/AnimatedRangeStat";
import { AnimatedStat } from "@/components/AnimatedStat";

type Metric =
  | { kind: "number"; value: number; label: string; suffix?: string; prefix?: string; from?: number }
  | { kind: "range"; from: number; to: number; label: string; format?: "number" | "compact" | "none" }
  | { kind: "text"; value: string; label: string };

type Case = {
  id: string;
  num: string;
  tags: string[];
  title: string;
  desc: string;
  steps: string[];
  before: string;
  metrics: Metric[];
};

const CASES: Case[] = [
  {
    id: "ai-knowledge-infrastructure",
    num: "01",
    tags: ["AI Agent", "Slack", "Operations"],
    title: "AI Knowledge Bot That Replaced 50 People Tagging Each Other",
    desc: 'Employees tagged colleagues daily to find answers across 6 systems. Built an AI agent in Slack connected to all of them.',
    steps: [
      "Cleaned Confluence from 4,000+ to 1,500 quality documents",
      "Connected bot to HubSpot, Jira, Confluence, Zoom, Intercom",
      'Added private DM mode to increase trust and adoption',
      "2 demos + FAQ to onboard 51 users in one week",
    ],
    before:
      "People interrupted each other constantly. Every tagged colleague had to stop their work to answer.",
    metrics: [
      { kind: "number", value: 22, suffix: "h", label: "Saved in first 3 days" },
      { kind: "number", value: 51, label: "Users in week one" },
      { kind: "number", value: 480, label: "Messages / week" },
      { kind: "number", value: 6, suffix: "+ days", label: "Saved every week" },
    ],
  },
  {
    id: "reddit-intelligence",
    num: "02",
    tags: ["8 AI Agents", "Market Intel", "Content"],
    title: "Reddit Intelligence System That Replaced Manual Market Research",
    desc: "8 specialised AI agents monitor 17 subreddits and turn posts into product, marketing, and sales insights automatically.",
    steps: [
      "Automated monitoring across 17 subreddits with keyword filters",
      "Product Analyst agent maps complaints to roadmap priorities",
      "Marketing agent identifies messaging gaps vs competitors",
      "Content agent generates blog drafts from real customer language",
    ],
    before:
      "Understanding customer pain required hours of manual browsing or expensive research firms.",
    metrics: [
      { kind: "number", value: 1193, label: "Posts analysed" },
      { kind: "number", value: 8, label: "Agents in parallel" },
      { kind: "number", value: 17, label: "Subreddits monitored" },
      { kind: "number", value: 1, suffix: " hire", label: "New hire from output volume" },
    ],
  },
  {
    id: "pulpo-jira-system",
    num: "03",
    tags: ["Process Design", "Jira", "Cross-team"],
    title: "PULPO — Turning 28 Jira Boards Into a System Engineers Could Trust",
    desc: "Teams submitted half-filled tickets directly to engineering. Designed PULPO — one structured intake layer for all teams.",
    steps: [
      "3-tier hierarchy: Product Matrix → PULPO → Engineering Pods",
      "Mandatory fields — incomplete tickets cannot be submitted",
      "Automations that route, categorise, and generate metrics",
      "Onboarding training from day one for every new joiner",
    ],
    before:
      "Developers got incomplete tickets. Product managers chased context. Customers waited. CSAT dropped.",
    metrics: [
      { kind: "range", from: 28, to: 15, label: "Boards consolidated" },
      { kind: "number", from: 10, value: 0, label: "Incomplete tickets" },
      { kind: "text", value: "Full CFT", label: "Trained from day one" },
      { kind: "text", value: "Live", label: "Metrics dashboards" },
    ],
  },
  {
    id: "custom-ats",
    num: "04",
    tags: ["Custom ATS", "AI Screening", "GDPR"],
    title: "Custom ATS That Replaced $15K/Year Software",
    desc: "Company paid for enterprise HR tools but used 20% of features. Built a custom ATS with AI screening and legal compliance.",
    steps: [
      "Built careers page with job descriptions and application form",
      "Auto emails triggered by candidate status changes",
      "AI screens each CV against all open roles simultaneously",
      "GDPR-compliant storage with deletion on request",
    ],
    before:
      "Paying for 3 enterprise platforms built for 10+ recruiters — with one recruiter and spreadsheets used anyway.",
    metrics: [
      {
        kind: "number",
        from: 2000,
        value: 0,
        prefix: "$",
        label: "Replaced paid tools",
      },
      { kind: "text", value: "Multi-role", label: "All roles screened by AI" },
      { kind: "text", value: "Auto", label: "Email sequences" },
      { kind: "text", value: "GDPR", label: "EU & US compliant" },
    ],
  },
  {
    id: "confluence-cleanup",
    num: "05",
    tags: ["Knowledge Mgmt", "Confluence", "AI-ready"],
    title: "4,000 Documents → 1,500: Making Company Knowledge AI-Ready",
    desc: "Audited and restructured years of scattered Confluence pages, then fed clean data into the AI knowledge bot.",
    steps: [
      "Audited all Confluence spaces against actual team needs",
      "Reduced 4,000+ pages to ~1,500 clean documents",
      "Created single master index across all spaces",
      "Standardised format so pages are readable, not just stored",
    ],
    before:
      "New hires joined Zoom calls to find documents. AI bot couldn't be built on messy unstructured data.",
    metrics: [
      { kind: "range", from: 4000, to: 1500, format: "compact", label: "Documents cleaned" },
      { kind: "number", value: 1, suffix: " index", label: "Master index" },
      { kind: "text", value: "AI-ready", label: "Clean data foundation" },
      { kind: "text", value: "Faster", label: "Onboarding" },
    ],
  },
];

function wrapIndex(index: number, length: number) {
  return (index + length) % length;
}

function MetricCell({ metric, delay }: { metric: Metric; delay: number }) {
  const cellClass =
    "flex flex-col rounded-xl border border-white/10 bg-[#1e1e1e] px-4 py-4 md:px-5 md:py-5";
  const numClass =
    "block font-serif-display text-2xl md:text-3xl leading-none text-[#c8f064] whitespace-nowrap";
  const labelClass =
    "mt-2 block text-xs md:text-[13px] leading-snug text-[#888] break-words";

  if (metric.kind === "number") {
    return (
      <AnimatedStat
        value={metric.value}
        from={metric.from}
        prefix={metric.prefix}
        suffix={metric.suffix}
        label={metric.label}
        delay={delay}
        className={cellClass}
        numberClassName={numClass}
        labelClassName={labelClass}
      />
    );
  }

  if (metric.kind === "range") {
    return (
      <AnimatedRangeStat
        from={metric.from}
        to={metric.to}
        format={metric.format}
        label={metric.label}
        delay={delay}
        className={cellClass}
        numberClassName={numClass}
        labelClassName={labelClass}
      />
    );
  }

  return (
    <div className={cellClass}>
      <div className={numClass}>{metric.value}</div>
      <div className={labelClass}>{metric.label}</div>
    </div>
  );
}

function SideCard({
  num,
  title,
  side,
  onClick,
}: {
  num: string;
  title: string;
  side: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "group relative h-[520px] w-[140px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#161616]",
        "opacity-55 transition-all duration-300 ease-out hover:opacity-80 hover:scale-[0.98]",
        "hidden lg:block",
      ].join(" ")}
      aria-label={`${side === "left" ? "Previous" : "Next"} case`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      <div className="absolute bottom-6 left-5 right-5">
        <div className="font-serif-display text-5xl leading-none text-white/10">{num}</div>
        <div className="mt-3 text-left text-[12px] font-medium leading-snug text-[#f0ede8]">
          {title}
        </div>
      </div>
    </button>
  );
}

function CenterCard({ c }: { c: Case }) {
  return (
    <article className="w-full rounded-2xl border border-white/10 bg-[#161616] p-6 md:p-10">
      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        <div className="min-w-0">
          <div className="font-serif-display text-7xl leading-none text-white/5">{c.num}</div>

          <div className="mt-4 flex flex-wrap gap-2">
            {c.tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/10 bg-[#1e1e1e] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#888]"
              >
                {t}
              </span>
            ))}
          </div>

          <h3 className="font-serif-display mt-5 text-2xl leading-tight text-[#f0ede8] md:text-3xl">
            {c.title}
          </h3>
          <p className="mt-4 text-[14px] leading-relaxed text-[#888] md:text-[15px]">{c.desc}</p>

          <div className="mt-6">
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#888]">
              What I did
            </div>
            <ul className="mt-3 space-y-2">
              {c.steps.map((s) => (
                <li
                  key={s}
                  className="flex gap-3 text-[13px] leading-snug text-[#888] md:text-[14px] before:content-['→'] before:text-[#c8f064] before:leading-none"
                >
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex min-w-0 flex-col">
          <div className="rounded-xl border border-white/10 bg-[#1e1e1e] p-5">
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#888]">
              Before
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-[#888]">{c.before}</p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {c.metrics.map((m, i) => (
              <MetricCell key={i} metric={m} delay={i * 120} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function CasesCarousel() {
  const [current, setCurrent] = useState(0);

  const prevIndex = useMemo(() => wrapIndex(current - 1, CASES.length), [current]);
  const nextIndex = useMemo(() => wrapIndex(current + 1, CASES.length), [current]);

  const goTo = useCallback((idx: number) => setCurrent(wrapIndex(idx, CASES.length)), []);

  const progress = useMemo(() => (current / (CASES.length - 1)) * 100, [current]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -top-2 left-0 h-[2px] w-full bg-white/5" />
      <div
        className="pointer-events-none absolute -top-2 left-0 h-[2px] bg-[#c8f064] transition-[width] duration-150 ease-linear"
        style={{ width: `${progress}%` }}
      />

      <div className="mt-10 flex items-stretch justify-between gap-6">
        <SideCard
          side="left"
          num={CASES[prevIndex].num}
          title={CASES[prevIndex].title}
          onClick={() => goTo(prevIndex)}
        />

        <div className="min-w-0 flex-1 transition-all duration-300 ease-out">
          <CenterCard c={CASES[current]} />

          <div className="mt-6 grid grid-cols-2 gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => goTo(prevIndex)}
              className="rounded-2xl border border-white/10 bg-[#161616] p-4 text-left opacity-70 transition-opacity hover:opacity-100"
              aria-label="Previous case"
            >
              <div className="font-serif-display text-4xl leading-none text-white/10">
                {CASES[prevIndex].num}
              </div>
              <div className="mt-2 text-[12px] font-medium leading-snug text-[#f0ede8]">
                {CASES[prevIndex].title}
              </div>
            </button>
            <button
              type="button"
              onClick={() => goTo(nextIndex)}
              className="rounded-2xl border border-white/10 bg-[#161616] p-4 text-left opacity-70 transition-opacity hover:opacity-100"
              aria-label="Next case"
            >
              <div className="font-serif-display text-4xl leading-none text-white/10">
                {CASES[nextIndex].num}
              </div>
              <div className="mt-2 text-[12px] font-medium leading-snug text-[#f0ede8]">
                {CASES[nextIndex].title}
              </div>
            </button>
          </div>
        </div>

        <SideCard
          side="right"
          num={CASES[nextIndex].num}
          title={CASES[nextIndex].title}
          onClick={() => goTo(nextIndex)}
        />
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        {CASES.map((c, i) => (
          <button
            key={c.id}
            type="button"
            onClick={() => goTo(i)}
            className={[
              "h-2 w-2 rounded-full transition-all duration-300 ease-out",
              i === current ? "bg-[#c8f064] scale-125" : "bg-white/20 hover:bg-white/35",
            ].join(" ")}
            aria-label={`Go to case ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
