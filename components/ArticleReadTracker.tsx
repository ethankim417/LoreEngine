"use client";

import { useEffect } from "react";

export function ArticleReadTracker({ articleId }: { articleId: string }) {
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("loreengine-read-briefs");
      const parsed = stored ? (JSON.parse(stored) as unknown) : [];
      const readIds = Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === "string") : [];

      if (!readIds.includes(articleId)) {
        window.localStorage.setItem("loreengine-read-briefs", JSON.stringify([...readIds, articleId]));
        window.dispatchEvent(new Event("loreengine-read-updated"));
      }
    } catch {
      // Read tracking is a local UX enhancement only.
    }
  }, [articleId]);

  return null;
}
