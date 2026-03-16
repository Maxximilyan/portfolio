import Link from "next/link";
import { getContent } from "@/content";

export default function NotFound() {
  const content = getContent();
  return (
    <div className="rounded-2xl border border-border bg-card p-10 shadow-sm">
      <h1 className="text-2xl font-semibold">{content.notFound.title}</h1>
      <p className="mt-3 text-sm text-muted">{content.notFound.subtitle}</p>
      <Link
        className="mt-6 inline-block rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
        href="/"
      >
        {content.notFound.cta}
      </Link>
    </div>
  );
}

