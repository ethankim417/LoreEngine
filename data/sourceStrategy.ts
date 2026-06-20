import { briefSnapshotDate } from "@/data/articles";

export const weeklyBriefCadence = {
  label: "Tuesday weekly brief",
  schedule: "Tuesdays at 14:00 UTC",
  localReadout: "Tuesday 9:00 AM ET / 6:00 AM PT / 11:00 PM KST",
  reason:
    "Tuesday catches Monday market closes, early-week company updates, and weekend event fallout after the first wave of coverage has settled.",
  snapshotDate: briefSnapshotDate
};

export const sourcePipeline = {
  candidateTarget: 40,
  shortlistTarget: 15,
  description:
    "Each weekly run is designed to review about 40 candidate items, dedupe overlapping coverage, then promote the strongest 15 brief articles into the public feed. Source counts refer only to unique outlets cited."
};

export const sourcePrinciples = [
  {
    title: "Start With Primary Evidence",
    description:
      "Official announcements, platform posts, earnings materials, storefront pages, and engine release notes get priority when they exist."
  },
  {
    title: "Use Trade Coverage For Context",
    description:
      "Gaming and technology trade press helps frame what changed, who noticed, and whether the signal is broader than one company post."
  },
  {
    title: "Separate Data From Opinion",
    description:
      "Market, esports, and storefront signals are treated as supporting data. Commentary can explain a signal, but it should not create one by itself."
  },
  {
    title: "Prefer Repeatable Sources",
    description:
      "The future weekly pipeline should favor sources with archives, feeds, timestamps, and stable URLs so briefs can be audited later."
  }
];

export const sourceTiers = [
  {
    tier: "Official Sources",
    examples: "Company blogs, engine release notes, storefront pages, investor materials",
    reason:
      "Best for verifying what actually changed. These sources anchor the brief before any interpretation is added."
  },
  {
    tier: "Trade Press",
    examples: "Gaming business coverage, platform reporting, technology press",
    reason:
      "Useful for cross-checking significance, industry reaction, timing, and second-order implications."
  },
  {
    tier: "Market And Usage Data",
    examples: "Public stock chart feeds, esports viewership trackers, storefront/event pages",
    reason:
      "Adds measurable context so LoreEngine does not rely only on narrative momentum."
  },
  {
    tier: "Vendor And Research Reports",
    examples: "Tooling vendors, QA reports, AI workflow studies",
    reason:
      "Helpful for emerging areas like game AI and production tooling, but treated with more caution because incentives can be promotional."
  }
];
