import type { MetadataRoute } from "next";

const siteUrl = "https://lore-engine.ethankim.cc";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
