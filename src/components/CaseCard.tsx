import Link from "next/link";
import { Pill } from "@/components/Pill";

export function CaseCard({
  slug,
  title,
  summary,
  impact,
  tags,
}: {
  slug: string;
  title: string;
  summary: string;
  impact?: string;
  tags: string[];
}) {
  return (
    <Link
      href={`/cases/${slug}`}
      className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold leading-snug">{title}</h3>
        <span className="text-sm text-muted transition group-hover:text-accent">→</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{summary}</p>
      {impact ? (
        <p className="mt-4 text-sm font-semibold text-accent">{impact}</p>
      ) : (
        <div className="mt-4 h-5" />
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
    </Link>
  );
}
