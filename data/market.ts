export type MarketSentiment = "Bullish" | "Watch" | "Pressure";

export type MarketPlayer = {
  ticker: string;
  company: string;
  segment: string;
  exchange: string;
  price: number | null;
  dayChange: number;
  thirtyDayChange: number;
  ytdChange: number;
  marketCap: string;
  sentiment: MarketSentiment;
  summary: string;
  watchSignal: string;
  trend: number[];
};

export type MarketGroup = {
  id: "hardware" | "engines" | "revenue";
  title: string;
  eyebrow: string;
  description: string;
  tickers: string[];
};

export type MarketDataMode = "cached-fallback" | "weekly-close-feed";

export type MarketSnapshot = {
  snapshotDate: string;
  players: MarketPlayer[];
  groups: MarketGroup[];
  dataSourceLabel: string;
  mode: MarketDataMode;
  refreshedAt: string;
  updatedTickers: string[];
  failedTickers: string[];
  failedTickerReasons?: Record<string, string>;
};

// Local fallback data. On Vercel, /api/market can refresh public close-price
// fields from a scheduled server job. The static mirror keeps reading this file.
export const marketSnapshotDate = "2026-06-11";

export const marketPlayers: MarketPlayer[] = [
  {
    ticker: "NVDA",
    company: "NVIDIA",
    segment: "Gaming AI / GPUs",
    exchange: "NASDAQ",
    price: 204.87,
    dayChange: 2.2,
    thirtyDayChange: -7.2,
    ytdChange: 38.2,
    marketCap: "$3.1T",
    sentiment: "Bullish",
    summary:
      "GPU demand, local AI inference, and RTX creator tooling keep NVIDIA positioned as the strongest gaming AI infrastructure signal.",
    watchSignal: "On-device agents, DLSS adoption, and AI PC attach rates",
    trend: [55, 63, 80, 62, 57, 54, 59, 52, 45, 45, 41, 43, 38, 61, 58, 44, 51, 28, 34, 33, 20, 28]
  },
  {
    ticker: "AMD",
    company: "AMD",
    segment: "Gaming CPUs / GPUs",
    exchange: "NASDAQ",
    price: 488.45,
    dayChange: 8,
    thirtyDayChange: 9,
    ytdChange: 24.9,
    marketCap: "$272B",
    sentiment: "Bullish",
    summary:
      "AMD remains a key gaming hardware read through console silicon, PC CPUs, Radeon GPUs, and AI accelerator adjacency.",
    watchSignal: "Console refresh silicon, AI PC demand, and GPU attach rate",
    trend: [36, 35, 37, 25, 23, 20, 36, 37, 45, 62, 58, 69, 68, 65, 70, 80, 71, 44, 56, 49, 38, 55]
  },
  {
    ticker: "INTC",
    company: "Intel",
    segment: "PC Gaming / Chips",
    exchange: "NASDAQ",
    price: 116.96,
    dayChange: 9.3,
    thirtyDayChange: -3,
    ytdChange: -8.1,
    marketCap: "$134B",
    sentiment: "Watch",
    summary:
      "Intel is still relevant to PC gaming and handheld hardware, but execution and foundry transition risk keep the stock signal mixed.",
    watchSignal: "GPU driver maturity, handheld wins, and AI PC share",
    trend: [73, 72, 61, 44, 42, 49, 69, 68, 71, 80, 76, 74, 58, 45, 42, 53, 51, 20, 47, 42, 39, 64]
  },
  {
    ticker: "MSFT",
    company: "Microsoft",
    segment: "Xbox / Cloud / AI",
    exchange: "NASDAQ",
    price: 390.34,
    dayChange: -1.8,
    thirtyDayChange: -4.3,
    ytdChange: 16.4,
    marketCap: "$3.2T",
    sentiment: "Watch",
    summary:
      "Xbox's cross-platform posture is increasingly tied to Microsoft cloud, subscriptions, and AI tooling rather than console unit economics alone.",
    watchSignal: "Game Pass mix, first-party release cadence, and Azure AI bundling",
    trend: [35, 33, 36, 47, 48, 43, 46, 45, 44, 42, 39, 51, 71, 80, 64, 52, 52, 43, 38, 31, 26, 20]
  },
  {
    ticker: "SONY",
    company: "Sony Group",
    segment: "PlayStation / Hardware",
    exchange: "NYSE ADR",
    price: 21.15,
    dayChange: 1.9,
    thirtyDayChange: -4.6,
    ytdChange: 9.8,
    marketCap: "$115B",
    sentiment: "Bullish",
    summary:
      "Sony remains a premium console and IP compounder, with PlayStation hardware, services, and first-party releases driving the read.",
    watchSignal: "First-party slate visibility, console margins, and PC expansion",
    trend: [61, 79, 60, 65, 77, 78, 80, 72, 60, 61, 52, 48, 44, 73, 79, 62, 63, 53, 60, 36, 20, 31]
  },
  {
    ticker: "NTDOY",
    company: "Nintendo",
    segment: "Console / IP",
    exchange: "OTC ADR",
    price: 11.23,
    dayChange: 1.2,
    thirtyDayChange: -1,
    ytdChange: 21.7,
    marketCap: "$76B",
    sentiment: "Pressure",
    summary:
      "Nintendo's hardware cycle and evergreen IP library give it a distinct counter-position to subscription-heavy platform strategies.",
    watchSignal: "Next-gen hardware ramp, attach rate, and software launch density",
    trend: [42, 35, 20, 35, 47, 59, 68, 51, 44, 30, 32, 25, 34, 39, 49, 46, 46, 50, 80, 34, 32, 38]
  },
  {
    ticker: "U",
    company: "Unity",
    segment: "Game Engine / Ads",
    exchange: "NYSE",
    price: 26.71,
    dayChange: 0.2,
    thirtyDayChange: -0.5,
    ytdChange: -12.6,
    marketCap: "$10B",
    sentiment: "Bullish",
    summary:
      "Unity is still strategically important to mobile and indie developers, but the market wants clearer evidence of trust repair and durable growth.",
    watchSignal: "Runtime adoption, mobile ad demand, and developer retention",
    trend: [32, 32, 36, 35, 31, 26, 26, 20, 20, 31, 40, 60, 65, 80, 67, 53, 61, 53, 50, 46, 30, 31]
  },
  {
    ticker: "EPIC",
    company: "Epic Games",
    segment: "Unreal Engine / UGC",
    exchange: "Private",
    price: null,
    dayChange: 0.3,
    thirtyDayChange: 4.8,
    ytdChange: 11.2,
    marketCap: "Private",
    sentiment: "Watch",
    summary:
      "Epic has no public ticker, but Unreal Engine and Fortnite creator economics make it unavoidable in any game-engine market read.",
    watchSignal: "Unreal adoption, Fortnite creator payouts, and enterprise licensing",
    trend: [48, 49, 51, 52, 51, 54, 56, 58, 57, 59, 61, 63]
  },
  {
    ticker: "TCEHY",
    company: "Tencent",
    segment: "Global Games / Mobile",
    exchange: "OTC ADR",
    price: 59.18,
    dayChange: 0,
    thirtyDayChange: 1.5,
    ytdChange: 13.9,
    marketCap: "$480B",
    sentiment: "Watch",
    summary:
      "Tencent provides broad exposure to mobile, Asian publishing, esports ecosystems, and global studio investments.",
    watchSignal: "China approvals, mobile monetization, and overseas studio performance",
    trend: [54, 80, 60, 58, 46, 57, 57, 40, 34, 34, 29, 20, 20, 26, 73, 53, 53, 42, 39, 48, 62, 62]
  },
  {
    ticker: "NTES",
    company: "NetEase",
    segment: "Online Games / Mobile",
    exchange: "NASDAQ ADR",
    price: 125.61,
    dayChange: 0.1,
    thirtyDayChange: 7.3,
    ytdChange: 15.8,
    marketCap: "$63B",
    sentiment: "Bullish",
    summary:
      "NetEase is a strong China and global online-games signal, with mobile publishing, PC titles, and overseas expansion in focus.",
    watchSignal: "New game approvals, international launches, and live-ops durability",
    trend: [38, 52, 34, 20, 21, 25, 37, 25, 36, 69, 72, 72, 66, 69, 76, 65, 66, 50, 46, 56, 80, 80]
  },
  {
    ticker: "EA",
    company: "Electronic Arts",
    segment: "Sports / Live Services",
    exchange: "NASDAQ",
    price: 203.05,
    dayChange: -0.1,
    thirtyDayChange: 1.4,
    ytdChange: 7.4,
    marketCap: "$37B",
    sentiment: "Watch",
    summary:
      "EA remains a core public read on sports games, live services, annualized franchises, and catalog monetization.",
    watchSignal: "Sports retention, Ultimate Team bookings, and catalog performance",
    trend: [20, 20, 31, 29, 36, 48, 46, 51, 35, 38, 29, 38, 49, 54, 54, 66, 80, 73, 76, 63, 76, 73]
  },
  {
    ticker: "TTWO",
    company: "Take-Two",
    segment: "AAA Publishing",
    exchange: "NASDAQ",
    price: 212.08,
    dayChange: 0.8,
    thirtyDayChange: -6.2,
    ytdChange: 18.3,
    marketCap: "$28B",
    sentiment: "Watch",
    summary:
      "Take-Two is a high-beta publishing signal because major franchise timing can reshape expectations for premium game demand.",
    watchSignal: "AAA release timing, marketing spend, and preorder momentum",
    trend: [49, 51, 80, 80, 79, 72, 69, 72, 52, 39, 35, 34, 46, 51, 42, 30, 32, 27, 24, 23, 20, 23]
  },
  {
    ticker: "RBLX",
    company: "Roblox",
    segment: "UGC / Creator Economy",
    exchange: "NYSE",
    price: 43.49,
    dayChange: 4.8,
    thirtyDayChange: 4.7,
    ytdChange: 7.5,
    marketCap: "$25B",
    sentiment: "Watch",
    summary:
      "Roblox remains one of the clearest public UGC indicators, with monetization quality and safety investment driving the debate.",
    watchSignal: "Bookings growth, creator payouts, and age-up engagement",
    trend: [20, 24, 40, 32, 69, 47, 59, 62, 80, 61, 57, 68, 71, 70, 52, 40, 37, 23, 27, 34, 20, 38]
  },
  {
    ticker: "CCOEY",
    company: "Capcom",
    segment: "Premium IP / Catalog",
    exchange: "OTC ADR",
    price: 8.91,
    dayChange: 1,
    thirtyDayChange: -17.7,
    ytdChange: 14.1,
    marketCap: "$11B",
    sentiment: "Pressure",
    summary:
      "Capcom is a durable pure-play read on premium game IP, catalog compounding, and disciplined franchise extension.",
    watchSignal: "Monster Hunter cadence, Resident Evil catalog, and digital sales mix",
    trend: [80, 76, 44, 45, 42, 56, 59, 58, 54, 50, 57, 46, 40, 42, 38, 31, 20, 23, 30, 23, 21, 24]
  },
  {
    ticker: "KONMY",
    company: "Konami Group",
    segment: "Games / IP / Amusement",
    exchange: "OTC ADR",
    price: 59.7,
    dayChange: -1.3,
    thirtyDayChange: -7.6,
    ytdChange: 12.4,
    marketCap: "$13B",
    sentiment: "Watch",
    summary:
      "Konami offers exposure to long-lived Japanese IP, sports franchises, and a mixed entertainment portfolio beyond games.",
    watchSignal: "Silent Hill execution, eFootball retention, and digital entertainment margin",
    trend: [80, 80, 80, 80, 80, 65, 65, 20, 20, 20, 20, 20, 32, 32, 32, 32, 32, 32, 32, 32, 32, 23]
  },
  {
    ticker: "NCBDY",
    company: "Bandai Namco",
    segment: "Games / Toys / Anime IP",
    exchange: "OTC ADR",
    price: 11.42,
    dayChange: 1,
    thirtyDayChange: -0.5,
    ytdChange: 18.6,
    marketCap: "$20B",
    sentiment: "Watch",
    summary:
      "Bandai Namco is a major anime, toy, and game IP operator with strong cross-media revenue optionality.",
    watchSignal: "Elden Ring tail, anime licensing, and transmedia release timing",
    trend: [31, 62, 35, 41, 26, 76, 76, 49, 37, 26, 43, 37, 25, 38, 48, 35, 36, 32, 41, 25, 20, 27]
  },
  {
    ticker: "SQNXF",
    company: "Square Enix",
    segment: "RPGs / Publishing",
    exchange: "OTC",
    price: 14.05,
    dayChange: 0,
    thirtyDayChange: -5.4,
    ytdChange: 5.3,
    marketCap: "$5B",
    sentiment: "Watch",
    summary:
      "Square Enix remains a meaningful RPG and publishing signal, though investors are watching slate focus and margin quality.",
    watchSignal: "Final Fantasy pipeline, HD-2D output, and catalog monetization",
    trend: [42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 74, 74, 75, 75, 75, 75, 80, 80, 73, 73, 20, 20]
  }
];

export const marketGroups: MarketGroup[] = [
  {
    id: "hardware",
    title: "Top Hardware-Related Companies",
    eyebrow: "5 tracked",
    description: "Semiconductors, consoles, and gaming hardware exposure.",
    tickers: ["NVDA", "AMD", "INTC", "SONY", "NTDOY"]
  },
  {
    id: "engines",
    title: "Top Game Engines",
    eyebrow: "2 tracked",
    description: "Unity is public; Epic/Unreal is private and shown as a proxy trend.",
    tickers: ["U", "EPIC"]
  },
  {
    id: "revenue",
    title: "Top Game Revenue Companies",
    eyebrow: "10 tracked",
    description: "Gaming revenue leaders excluding console hardware creators such as Sony and Nintendo.",
    tickers: ["TCEHY", "MSFT", "NTES", "EA", "TTWO", "RBLX", "CCOEY", "KONMY", "NCBDY", "SQNXF"]
  }
];

export const staticMarketSnapshot: MarketSnapshot = {
  snapshotDate: marketSnapshotDate,
  players: marketPlayers,
  groups: marketGroups,
  dataSourceLabel: "Cached fallback snapshot",
  mode: "cached-fallback",
  refreshedAt: `${marketSnapshotDate}T00:00:00.000Z`,
  updatedTickers: [
    "NVDA",
    "AMD",
    "INTC",
    "MSFT",
    "SONY",
    "NTDOY",
    "U",
    "TCEHY",
    "NTES",
    "EA",
    "TTWO",
    "RBLX",
    "CCOEY",
    "KONMY",
    "NCBDY",
    "SQNXF"
  ],
  failedTickers: [],
  failedTickerReasons: {}
};

export function getMarketPlayer(ticker: string) {
  return marketPlayers.find((player) => player.ticker === ticker);
}

export function getMarketGroupPlayers(group: MarketGroup) {
  return getMarketGroupPlayersFrom(group, marketPlayers);
}

export function getMarketGroupPlayersFrom(group: MarketGroup, players: MarketPlayer[]) {
  return group.tickers
    .map((ticker) => players.find((player) => player.ticker === ticker))
    .filter((player): player is MarketPlayer => Boolean(player));
}

export function getMarketFocusPlayers() {
  return getMarketFocusPlayersFromSnapshot(staticMarketSnapshot);
}

export function getMarketFocusPlayersFromSnapshot(snapshot: MarketSnapshot) {
  const seen = new Set<string>();

  return snapshot.groups.flatMap((group) =>
    getMarketGroupPlayersFrom(group, snapshot.players).filter((player) => {
      if (seen.has(player.ticker)) {
        return false;
      }

      seen.add(player.ticker);
      return true;
    })
  );
}
