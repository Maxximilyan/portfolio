import type { CaseItem, Content } from "@/content/types";
import { en } from "@/content/en";

export function getContent(): Content {
  return en;
}

export function getCaseBySlug(slug: string): CaseItem | undefined {
  return getContent().cases.items.find((x) => x.slug === slug);
}
