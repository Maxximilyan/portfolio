import Link from "next/link";

import { getContent } from "@/content";
import { CaseCard } from "@/components/CaseCard";
import { Pill } from "@/components/Pill";
import { Section } from "@/components/Section";

export default function HomePage() {
  const content = getContent();

  return (
    <div className="space-y-16">
      <section className="grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-sm md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-accentSoft px-3 py-1 text-xs font-semibold text-accent">
            {content.hero.kicker}
          </span>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            {content.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {content.hero.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {content.hero.highlights.map((h) => (
              <Pill key={h}>{h}</Pill>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {content.hero.primaryCta && (
              <a
                className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
                href={content.hero.primaryCta.href}
              >
                {content.hero.primaryCta.label}
              </a>
            )}
            {content.hero.secondaryCta && (
              <a
                className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-text hover:bg-accentSoft"
                href={content.hero.secondaryCta.href}
              >
                {content.hero.secondaryCta.label}
              </a>
            )}
            {content.hero.tertiaryCta && (
              <a
                className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-text hover:bg-accentSoft"
                href={content.hero.tertiaryCta.href}
              >
                {content.hero.tertiaryCta.label}
              </a>
            )}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute -right-3 top-6 h-24 w-24 rounded-md border border-border" />
          <div className="absolute -left-4 bottom-8 h-16 w-16 rounded-md border border-border" />
          <div className="relative h-72 w-60 rounded-2xl border border-border bg-accentSoft shadow-md">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-xl border-2 border-text/20 bg-white" />
            <div className="absolute -right-6 -bottom-6 h-28 w-28 rounded-xl bg-accent" />
            <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-accent">
              Photo / Avatar
            </div>
          </div>
        </div>
      </section>

      <Section id="cases" title={content.cases.title} subtitle={content.cases.subtitle}>
        <div className="grid gap-4 md:grid-cols-2">
          {content.cases.items.map((c) => (
            <CaseCard
              key={c.slug}
              slug={c.slug}
              title={c.title}
              summary={c.summary}
              impact={c.impact}
              tags={c.tags}
            />
          ))}
        </div>
        {content.cases.items[0] ? (
          <div className="mt-4 text-sm text-muted">
            <Link className="hover:text-text" href={`/cases/${content.cases.items[0].slug}`}>
              {content.cases.hint}
            </Link>
          </div>
        ) : null}
      </Section>

      <Section id="contact" title={content.contact.title} subtitle={content.contact.subtitle}>
        <div className="grid gap-4 md:grid-cols-2">
          {content.contact.items.map((c) => (
            <a
              key={c.label}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:-translate-y-0.5 hover:shadow-md"
              href={c.href}
            >
              <p className="text-sm font-semibold">{c.label}</p>
              <p className="mt-1 text-sm text-muted">{c.value}</p>
            </a>
          ))}
        </div>
      </Section>
    </div>
  );
}
