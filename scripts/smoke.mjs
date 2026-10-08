import { loadTypeScript } from "./load-typescript.mjs";

const { articles } = loadTypeScript("data/articles.ts");
const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";

const checks = [
  { path: "/", expect: "LoreEngine" },
  { path: "/market", expect: "Market Pulse" },
  { path: "/archive", expect: "Weekly Archive" },
  { path: "/sources", expect: "Source Strategy" },
  { path: "/privacy", expect: "Privacy And Legal Notes" },
  { path: "/methodology", expect: "Metric Methodology" },
  ...articles.map((article) => ({ path: `/articles/${article.slug}`, expect: article.title })),
  ...[...new Set(articles.map((article) => article.visual.image))].map((path) => ({ path })),
  { path: "/api/market", expect: "snapshotDate" },
  { path: "/api/health", expect: "\"status\":\"" },
  { path: "/robots.txt", expect: "sitemap" },
  { path: "/sitemap.xml", expect: "lore-engine.ethankim.cc" }
];

async function checkRoute({ path, expect }) {
  const url = new URL(path, baseUrl);
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) });

  if (!response.ok) {
    throw new Error(`${path} returned ${response.status}`);
  }

  if (expect) {
    const body = await response.text();
    const escaped = expect.replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;"
    })[char]);
    if (!body.includes(expect) && !body.includes(escaped)) {
      throw new Error(`${path} did not include expected text: ${expect}`);
    }
  } else if (!(response.headers.get("content-type") ?? "").startsWith("image/")) {
    throw new Error(`${path} did not return an image`);
  }

  console.log(`ok ${path}`);
}

try {
  if (!articles.length) throw new Error("No articles loaded for smoke checks");
  for (const check of checks) {
    await checkRoute(check);
  }

  console.log(`Smoke checks passed for ${baseUrl}`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
