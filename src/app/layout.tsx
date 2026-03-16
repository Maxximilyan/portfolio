import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/globals.css";
import { getContent } from "@/content";

export function generateMetadata(): Metadata {
  const content = getContent();
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const content = getContent();
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-bg text-text antialiased">
        <div className="page-bg min-h-full">
          <div className="relative mx-auto max-w-6xl px-5 py-10">
            <div className="pointer-events-none absolute -left-10 top-16 hidden h-40 w-40 rounded-full border border-border md:block" />
            <div className="pointer-events-none absolute -right-6 top-24 hidden h-20 w-20 rounded-full border border-border md:block" />
            <div className="pointer-events-none absolute -right-12 bottom-24 hidden h-28 w-28 rounded-lg border border-border md:block" />

            <div className="pointer-events-none absolute left-6 top-24 hidden h-24 w-24 rounded-md opacity-60 md:block dot-grid" />
            <div className="pointer-events-none absolute right-8 bottom-28 hidden h-20 w-20 rounded-md opacity-60 md:block dot-grid" />

            <header className="mb-10 flex items-center justify-between gap-4 rounded-2xl border border-border bg-card/80 px-6 py-4 shadow-sm">
              <Link href="/" className="text-sm font-semibold tracking-wide text-accent">
                {content.header.brand}
              </Link>
              <nav className="flex items-center gap-4 text-sm text-muted">
                <a className="hover:text-text" href="#about">
                  {content.nav.about}
                </a>
                <a className="hover:text-text" href="#cases">
                  {content.nav.cases}
                </a>
                <a className="hover:text-text" href="#experience">
                  {content.nav.experience}
                </a>
                <a className="hover:text-text" href="#contact">
                  {content.nav.contact}
                </a>
                <a
                  className="ml-2 hidden rounded-full border border-accent px-3 py-1 text-xs font-semibold text-accent hover:bg-accent hover:text-white md:inline-flex"
                  href="#contact"
                >
                  Download CV
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
        </div>
      </body>
    </html>
  );
}
