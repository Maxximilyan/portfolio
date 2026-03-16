"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getContent } from "@/content";

export default function NotFound() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "ru" ? "ru" : "en";
  const content = getContent(locale);
  return (
    <div className="rounded-2xl border border-border bg-card/40 p-10">
      <h1 className="text-2xl font-semibold">{content.notFound.title}</h1>
      <p className="mt-3 text-sm text-muted">{content.notFound.subtitle}</p>
      <Link
        className="mt-6 inline-block rounded-xl bg-white px-4 py-2 text-sm font-semibold text-bg hover:bg-white/90"
        href={`/${locale}`}
      >
        {content.notFound.cta}
      </Link>
    </div>
  );
}
