import type { Metadata } from "next";
import "@/styles/globals.css";
import { getContent } from "@/content";
import { FadeUpObserver } from "@/components/FadeUpObserver";

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
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full antialiased">
        <nav>
          <div className="nav-logo">Maxim Dudnik</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#cases">Cases</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <main>{children}</main>

        <footer>
          <p>© 2026 Maxim Dudnik</p>
          <p>Operations &amp; AI Implementation</p>
        </footer>

        <FadeUpObserver />
      </body>
    </html>
  );
}
