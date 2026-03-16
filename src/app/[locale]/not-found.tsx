import Link from "next/link";
import { getContent } from "@/content";

export default function NotFound({
  params,
}: {
  params: { locale: "en" | "ru" };
}) {
  const content = getContent(params.locale);
  return (
    <div className="rounded-2xl border border-border bg-card/40 p-10">
      <h1 className="text-2xl font-semibold">{content.notFound.title}</h1>
      <p className="mt-3 text-sm text-muted">{content.notFound.subtitle}</p>
      <Link
        className="mt-6 inline-block rounded-xl bg-white px-4 py-2 text-sm font-semibold text-bg hover:bg-white/90"
        href={`/${params.locale}`}
      >
        {content.notFound.cta}
      </Link>
    </div>
  );
}

