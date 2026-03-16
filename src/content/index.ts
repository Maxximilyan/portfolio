import type { Locale } from "@/i18n/locales";
import type { CaseItem, Content } from "@/content/types";
import { en } from "@/content/en";
import { ru } from "@/content/ru";

export function getContent(locale: Locale): Content {
  return locale === "ru" ? ru : en;
}

export function getCaseBySlug(locale: Locale, slug: string): CaseItem | undefined {
  return getContent(locale).cases.items.find((x) => x.slug === slug);
}

