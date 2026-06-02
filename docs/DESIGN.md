# LoreEngine Design Rationale

## Target User

LoreEngine is designed first for me: someone who wants to keep up with the gaming business without opening ten news tabs. The same experience could also serve a studio operator, investor, creator, analyst, or product leader.

The product assumes the user has limited time and wants to know:

- What changed this week?
- Why does it matter?
- Which sectors or companies may be affected?
- Is this a story, a signal, or just noise?

## User Journey

1. Land on the dashboard and understand the weekly brief status.
2. Scan top metrics for the overall industry mood.
3. Review the executive brief and highest-priority articles.
4. Filter by category or source type when looking for a specific signal.
5. Open an article detail page for the full TLDR, impact reasoning, and source context.
6. Visit Market Pulse for public-company context.

## UX Priorities

- **Fast scanning:** prioritize short titles, scores, and momentum labels.
- **Clear hierarchy:** metrics, executive brief, article cards, then deeper detail.
- **Decision framing:** every story should answer why it matters.
- **Low clutter:** show fewer decorative tags and reserve detail for hover states or detail pages.
- **First-screen clarity:** make the product's purpose obvious before the user starts exploring.

## Visual Principles

- Dark mode by default for a command-center tone.
- Glass-style panels with restrained opacity so the interface feels premium without hurting readability.
- Neon blue/purple accents used as signals, not decoration everywhere.
- Subtle sector art in article cards to add energy without turning the dashboard into a gallery.
- Compact market visuals that support the brief instead of dominating it.

## Structure Rationale

The dashboard is structured around the way a serious industry brief is consumed:

- **Top summary:** tells the user whether the week is hot, disruptive, or quiet.
- **Executive brief:** turns multiple stories into a higher-level read.
- **Signal map:** gives a visual sense of relationships between categories.
- **Article feed:** supports exploration, filtering, and detail.
- **Market Pulse:** adds company context without requiring live trading infrastructure.

## Demo Simplifications

- Article data is mocked to keep the current demo stable.
- Market data is weekly/cached close-price context and should not be treated as financial advice.
- Source links are representative and can be swapped for real collected articles later.
- Scores are calculated from local data and intended to test the product model.

## Future Design Improvements

- Add real screenshots and a short product GIF to the README.
- Add saved views for AI, market, platform, and studio strategy.
- Add an editorial review label when future AI-generated summaries are enabled.
- Add source freshness indicators and citation density.
- Add a comparison mode for week-over-week category movement.
