import Link from "next/link";
import { notFound } from "next/navigation";

import { getContent } from "@/content";
import { isLocale, type Locale } from "@/i18n/locales";
import { CaseCard } from "@/components/CaseCard";
import { Pill } from "@/components/Pill";
import { Section } from "@/components/Section";

export default function LocaleHomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const content = getContent(locale);

  return (
    <div className="space-y-14">
      <section className="rounded-2xl border border-border bg-gradient-to-b from-white/5 to-transparent p-8">
        <p className="text-sm text-muted">{content.hero.kicker}</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
          {content.hero.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
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
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-bg hover:bg-white/90"
              href={content.hero.primaryCta.href}
            >
              {content.hero.primaryCta.label}
            </a>
          )}
          {content.hero.secondaryCta && (
            <a
              className="rounded-xl border border-border px-4 py-2 text-sm font-semibold hover:bg-white/5"
              href={content.hero.secondaryCta.href}
            >
              {content.hero.secondaryCta.label}
            </a>
          )}
        </div>
      </section>

      <Section id="about" title={content.about.title} subtitle={content.about.subtitle}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card/40 p-6">
            <h3 className="text-sm font-semibold">{content.about.blockTitle}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {content.about.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-white/60" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card/40 p-6">
            <h3 className="text-sm font-semibold">{content.skills.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {content.skills.items.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="cases" title={content.cases.title} subtitle={content.cases.subtitle}>
        <div className="grid gap-4 md:grid-cols-2">
          {content.cases.items.map((c) => (
            <CaseCard
              key={c.slug}
              locale={locale}
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
            <Link className="hover:text-text" href={`/${locale}/cases/${content.cases.items[0].slug}`}>
              {content.cases.hint}
            </Link>
          </div>
        ) : null}
      </Section>

      <Section
        id="experience"
        title={content.experience.title}
        subtitle={content.experience.subtitle}
      >
        <div className="space-y-4">
          {content.experience.items.map((e) => (
            <div key={e.company + e.role} className="rounded-2xl border border-border bg-card/40 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">{e.role}</p>
                  <p className="text-sm text-muted">{e.company}</p>
                </div>
                <p className="text-xs text-muted">{e.period}</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-white/60" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title={content.contact.title} subtitle={content.contact.subtitle}>
        <div className="grid gap-4 md:grid-cols-2">
          {content.contact.items.map((c) => (
            <a
              key={c.label}
              className="rounded-2xl border border-border bg-card/40 p-6 hover:bg-white/5"
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
