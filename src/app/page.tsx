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
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accentSoft text-accent">
                  {c.icon === "gmail" ? (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M2 6.5C2 5.12 3.12 4 4.5 4h15C20.88 4 22 5.12 22 6.5v11c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 20 2 18.88 2 17.5v-11zm2.2-.4 7.8 5.6 7.8-5.6a1.3 1.3 0 0 0-.8-.3h-14a1.3 1.3 0 0 0-.8.3zm15.6 12.3V8.1l-7.2 5.2a1 1 0 0 1-1.2 0l-7.2-5.2v10.3c0 .44.36.8.8.8h14.8c.44 0 .8-.36.8-.8z"
                      />
                    </svg>
                  ) : null}
                  {c.icon === "telegram" ? (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M21.6 4.6c.28-.1.58.08.64.37.04.18.01.37-.1.52L14 20.1c-.17.3-.56.4-.86.23l-3.9-2.22-2.5 2.5c-.23.23-.61.23-.84 0a.6.6 0 0 1-.17-.42v-3.7l9.2-8.4-11 6.2c-.27.15-.6.07-.77-.19a.6.6 0 0 1-.07-.49l2.3-8c.06-.2.22-.36.41-.42L21.6 4.6z"
                      />
                    </svg>
                  ) : null}
                  {c.icon === "linkedin" ? (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M4.5 3.9a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2zM3.2 8.6h2.6V20H3.2V8.6zm6.1 0h2.5v1.6h.1c.4-.8 1.4-1.7 3-1.7 3.1 0 3.6 2 3.6 4.6V20h-2.6v-5.7c0-1.4 0-3.1-2-3.1s-2.3 1.5-2.3 3V20H9.3V8.6z"
                      />
                    </svg>
                  ) : null}
                </span>
                <p className="text-sm font-semibold">{c.label}</p>
              </div>
              <p className="mt-1 text-sm text-muted">{c.value}</p>
            </a>
          ))}
        </div>
      </Section>
    </div>
  );
}
