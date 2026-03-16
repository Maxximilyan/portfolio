import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getContent } from "@/content";
import { isLocale, type Locale } from "@/i18n/locales";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }];
}

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const content = getContent(params.locale);
  return {
    title: content.meta.title,
    description: content.meta.description,
    metadataBase: content.meta.siteUrl ? new URL(content.meta.siteUrl) : undefined,
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url: content.meta.siteUrl ?? undefined,
      type: "website",
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const content = getContent(locale);

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <header className="mb-10 flex items-center justify-between gap-4">
        <a href={`/${locale}`} className="text-sm font-semibold tracking-wide">
          {content.header.brand}
        </a>
        <nav className="flex items-center gap-4 text-sm text-muted">
          <a className="hover:text-text" href={`/${locale}#about`}>
            {content.nav.about}
          </a>
          <a className="hover:text-text" href={`/${locale}#cases`}>
            {content.nav.cases}
          </a>
          <a className="hover:text-text" href={`/${locale}#experience`}>
            {content.nav.experience}
          </a>
          <a className="hover:text-text" href={`/${locale}#contact`}>
            {content.nav.contact}
          </a>
          <div className="ml-2 h-4 w-px bg-border" />
          <a
            className="rounded-md border border-border px-2 py-1 text-xs text-text hover:bg-white/5"
            href={`/${locale === "en" ? "ru" : "en"}`}
          >
            {locale === "en" ? "RU" : "EN"}
          </a>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="mt-16 border-t border-border pt-6 text-xs text-muted">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p>{content.footer.note}</p>
          <p>{content.footer.built}</p>
        </div>
      </footer>
    </div>
  );
}
