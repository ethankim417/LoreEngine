import fs from "node:fs";

const articlesSource = fs.readFileSync("data/articles.ts", "utf8");
const localizedSource = fs.readFileSync("lib/localizedContent.ts", "utf8");

const articles = [...articlesSource.matchAll(/id: "(le-\d+)",\s+slug: "([^"]+)"/g)].map((match) => ({
  id: match[1],
  slug: match[2]
}));

const translations = new Map(
  [...localizedSource.matchAll(/"(le-\d+)": \{\s+sourceSlug: "([^"]+)"/g)].map((match) => [match[1], match[2]])
);

const missing = articles.filter((article) => !translations.has(article.id));
const stale = articles.filter((article) => translations.get(article.id) && translations.get(article.id) !== article.slug);

if (missing.length || stale.length) {
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

  process.exit(1);
}

console.log(`Localization checks passed for ${articles.length} articles.`);
