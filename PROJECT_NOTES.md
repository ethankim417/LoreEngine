# Project Notes

## Why LoreEngine Exists

LoreEngine started as a practical experiment:

1. I wanted a better way to stay current on gaming industry movement.
2. I wanted to test how useful Codex could be as a product-building partner.

The app is intentionally framed as a weekly intelligence brief because that format fits the way I want to consume the information: quickly, with context, and without treating every headline as equally important.

## What I Wanted To Learn

- How far an AI coding agent can help take a rough product idea.
- Where human product judgment still matters most.
- How to keep an AI-assisted build from becoming cluttered or generic.
- How to structure a mock-data prototype so it can later support real scheduled summaries.
- How to keep AI costs predictable by caching generated summaries instead of running AI on every visit.

## Product Direction

The target experience is not a blog. It is closer to a small command center for gaming industry signals:

- top stories,
- AI disruption,
- platform and studio strategy,
- game engine changes,
- market movement,
- and public-company context.

The design should make the user feel like they are opening a useful brief, not browsing a content feed.

## Data Honesty

The current version is not live intelligence yet.

- News and summaries are mock records.
- Market prices are cached/manual snapshots.
- AI summaries are not generated at runtime.
- No AI API is called from the browser.

That constraint is part of the experiment. The goal is to build the shell, workflow, and product logic first, then connect real weekly ingestion later.

## Future Production Path

A real version would add:

- RSS/news source collection,
- deduplication and relevance filtering,
- server-only AI summarization,
- impact and momentum scoring,
- cached weekly results,
- and optional editorial review before publishing.

The core rule: users should only read cached summaries. Summarization should happen once per scheduled run, not on every page visit.
