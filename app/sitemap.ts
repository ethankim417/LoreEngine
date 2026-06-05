import type { MetadataRoute } from "next";
import { articles, briefSnapshotDate } from "@/data/articles";
import { marketSnapshotDate } from "@/data/market";

const siteUrl = "https://lore-engine.ethankim.cc";

export default function sitemap(): MetadataRoute.Sitemap {
  const briefDate = new Date(briefSnapshotDate);
  const marketDate = new Date(marketSnapshotDate);

  return [
    {
      url: siteUrl,
      lastModified: briefDate,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/market`,
      lastModified: marketDate,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/methodology`,
      lastModified: briefDate,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${siteUrl}/archive`,
      lastModified: briefDate,
      changeFrequency: "weekly",
      priority: 0.7
    },
    ...articles.map((article) => ({
      url: `${siteUrl}/articles/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
