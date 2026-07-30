import fs from "node:fs";

const articlesSource = fs.readFileSync("data/articles.ts", "utf8");
const localizedSource = fs.readFileSync("lib/localizedContent.ts", "utf8");
const weeklyEditorialSource = fs.readFileSync("data/weeklyEditorial.ts", "utf8");

const articles = [...articlesSource.matchAll(/id: "(le-\d+)",\s+slug: "([^"]+)"/g)].map((match) => ({
  id: match[1],
  slug: match[2]
}));

const translations = new Map(
  [...localizedSource.matchAll(/"(le-\d+)": \{\s+sourceSlug: "([^"]+)"/g)].map((match) => [match[1], match[2]])
);

const missing = articles.filter((article) => !translations.has(article.id));
const stale = articles.filter((article) => translations.get(article.id) && translations.get(article.id) !== article.slug);
const editorialLeadSlug = weeklyEditorialSource.match(/leadArticleSlug: "([^"]+)"/)?.[1];
const editorialHeadlines = [...weeklyEditorialSource.matchAll(/(?:en|ko): "([^"]+)"/g)].map((match) => match[1].trim());
const previousHeadlineBlock = weeklyEditorialSource.match(/previousHeadlines:\s*\[([\s\S]*?)\]/)?.[1] ?? "";
const previousHeadlines = [...previousHeadlineBlock.matchAll(/"([^"]+)"/g)].map((match) => match[1].trim());
const staleEditorial = !editorialLeadSlug || !articles.some((article) => article.slug === editorialLeadSlug);
const incompleteEditorial = editorialHeadlines.length !== 2 || editorialHeadlines.some((headline) => !headline);
const repeatedEditorial = editorialHeadlines.some((headline) => previousHeadlines.includes(headline));

if (missing.length || stale.length || staleEditorial || incompleteEditorial || repeatedEditorial) {
  if (missing.length) {
    console.error(`Missing Korean article translations: ${missing.map((article) => article.id).join(", ")}`);
  }

  if (stale.length) {
    console.error(
      `Stale Korean article translations: ${stale
        .map((article) => `${article.id} expected ${article.slug}, found ${translations.get(article.id)}`)
        .join("; ")}`
    );
  }

  if (staleEditorial) {
    console.error(`Weekly editorial headline references an unknown lead article: ${editorialLeadSlug ?? "missing slug"}`);
  }

  if (incompleteEditorial) {
    console.error("Weekly editorial headline must include non-empty English and Korean versions.");
  }

  if (repeatedEditorial) {
    console.error("Weekly editorial headline repeats a previous headline.");
  }

  process.exit(1);
}

console.log(`Localization checks passed for ${articles.length} articles and the weekly editorial headline.`);
