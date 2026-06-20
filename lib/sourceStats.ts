import type { Article } from "@/data/articles";

export function getUniqueSourceCount(source: Article[]) {
  return new Set(source.map((article) => article.source)).size;
}

export function getUniqueSources(source: Article[]) {
  return Array.from(new Set(source.map((article) => article.source))).sort((a, b) => a.localeCompare(b));
}
