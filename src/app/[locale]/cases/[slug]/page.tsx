import Link from "next/link";
import { notFound } from "next/navigation";

import { getCaseBySlug, getContent } from "@/content";
import { isLocale, type Locale } from "@/i18n/locales";
import { Pill } from "@/components/Pill";

export function generateStaticParams() {
  const enSlugs = getContent("en").cases.items.map((x) => x.slug);
  const ruSlugs = getContent("ru").cases.items.map((x) => x.slug);
  return [
    ...enSlugs.map((slug) => ({ locale: "en", slug })),
    ...ruSlugs.map((slug) => ({ locale: "ru", slug })),
  ];
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const content = getContent(locale);
  const item = getCaseBySlug(locale, slug);
  if (!item) notFound();

  return (
    <div className="space-y-8">
      <div className="text-sm text-muted">
        <Link className="hover:text-text" href={`/${locale}#cases`}>
          ← {content.case.back}
        </Link>
      </div>

      <header className="rounded-3xl border border-border bg-card p-8 shadow-sm">
        <h1 className="text-3xl font-semibold leading-tight">{item.title}</h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">{item.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>

        {item.impact && (
          <div className="mt-6 rounded-xl border border-border bg-accentSoft p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              {content.case.impact}
            </p>
            <p className="mt-2 text-sm">{item.impact}</p>
          </div>
        )}
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            {content.case.role}
          </p>
          <p className="mt-2 text-sm">{item.role}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            {content.case.stack}
          </p>
          <p className="mt-2 text-sm">{item.stack}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            {content.case.timeline}
          </p>
          <p className="mt-2 text-sm">{item.timeline}</p>
        </div>
      </section>

      <article className="space-y-6 rounded-2xl border border-border bg-card p-8 shadow-sm">
        {item.body.map((b) => (
          <section key={b.title} className="space-y-3">
            <h2 className="text-lg font-semibold">{b.title}</h2>
            {b.paragraphs.map((p) => (
              <p key={p} className="text-sm leading-relaxed text-muted">
                {p}
              </p>
            ))}
            {b.bullets?.length ? (
              <ul className="space-y-2 text-sm text-muted">
                {b.bullets.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-white/60" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </article>
    </div>
  );
}
