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
export const marketSnapshotDate = "2026-09-04";

export const marketPlayers: MarketPlayer[] = [
  {
    ticker: "NVDA",
    company: "NVIDIA",
    segment: "Gaming AI / GPUs",
    exchange: "NASDAQ",
    price: 230.36,
    dayChange: 0.8,
    thirtyDayChange: 5.1,
    ytdChange: 23.5,
    marketCap: "$3.1T",
    sentiment: "Bullish",
    summary:
      "GPU demand, local AI inference, and RTX creator tooling keep NVIDIA positioned as the strongest gaming AI infrastructure signal; latest fallback close is from public market coverage.",
    watchSignal: "On-device agents, DLSS adoption, and AI PC attach rates",
    trend: [49,62,45,45,63,66,66,65,51,45,43,37,20,33,23,73,45,54,45,64,75,80]
  },
  {
    ticker: "AMD",
    company: "AMD",
    segment: "Gaming CPUs / GPUs",
    exchange: "NASDAQ",
    price: 477.57,
    dayChange: 4.7,
    thirtyDayChange: -0.9,
    ytdChange: 123,
    marketCap: "$900B",
    sentiment: "Bullish",
    summary:
      "AMD remains a key gaming hardware read through console silicon, PC CPUs, Radeon GPUs, and AI accelerator adjacency.",
    watchSignal: "Console refresh silicon, AI PC demand, and GPU attach rate",
    trend: [54,48,34,39,48,48,80,71,49,31,34,38,21,44,46,41,30,35,24,21,20,42]
  },
  {
    ticker: "INTC",
    company: "Intel",
    segment: "PC Gaming / Chips",
    exchange: "NASDAQ",
    price: 95.8,
    dayChange: 4.5,
    thirtyDayChange: -5.2,
    ytdChange: 159.6,
    marketCap: "$706B",
    sentiment: "Watch",
    summary:
      "Intel is still relevant to PC gaming and handheld hardware, but execution and foundry transition risk keep the stock signal mixed.",
    watchSignal: "GPU driver maturity, handheld wins, and AI PC share",
    trend: [64,70,56,56,67,80,73,76,53,39,37,30,20,21,23,37,28,28,26,30,35,50]
  },
  {
    ticker: "MSFT",
    company: "Microsoft",
    segment: "Xbox / Cloud / AI",
    exchange: "NASDAQ",
    price: 499.7,
    dayChange: -2,
    thirtyDayChange: 2.5,
    ytdChange: 3.3,
    marketCap: "$3.2T",
    sentiment: "Watch",
    summary:
      "Xbox's cross-platform posture is increasingly tied to Microsoft cloud, subscriptions, and AI tooling rather than console unit economics alone.",
    watchSignal: "Game Pass mix, first-party release cadence, and Azure AI bundling",
    trend: [55,56,66,62,42,50,47,20,22,27,21,25,33,41,49,65,80,69,57,50,74,55]
  },
  {
    ticker: "SONY",
    company: "Sony Group",
    segment: "PlayStation / Hardware",
    exchange: "NYSE ADR",
    price: 24.56,
    dayChange: -1.6,
    thirtyDayChange: 9.4,
    ytdChange: -4.1,
    marketCap: "$115B",
    sentiment: "Bullish",
    summary:
      "Sony remains a premium console and IP compounder, with PlayStation hardware, services, and first-party releases driving the read.",
    watchSignal: "First-party slate visibility, console margins, and PC expansion",
    trend: [20,32,43,36,34,36,58,39,31,33,35,46,57,51,53,51,76,67,75,70,80,67]
  },
  {
    ticker: "NTDOY",
    company: "Nintendo",
    segment: "Console / IP",
    exchange: "OTC ADR",
    price: 14.07,
    dayChange: -1.3,
    thirtyDayChange: 19.5,
    ytdChange: -16.5,
    marketCap: "$76B",
    sentiment: "Pressure",
    summary:
      "Nintendo's hardware cycle and evergreen IP library give it a distinct counter-position to subscription-heavy platform strategies.",
    watchSignal: "Next-gen hardware ramp, attach rate, and software launch density",
    trend: [27,20,36,37,38,39,70,60,68,62,56,53,63,65,64,59,67,69,70,64,80,73]
  },
  {
    ticker: "U",
    company: "Unity",
    segment: "Game Engine / Ads",
    exchange: "NYSE",
    price: 41.66,
    dayChange: -1,
    thirtyDayChange: 17.5,
    ytdChange: -5.7,
    marketCap: "$10B",
    sentiment: "Bullish",
    summary:
      "Unity is still strategically important to mobile and indie developers, but the market wants clearer evidence of trust repair and durable growth.",
    watchSignal: "Runtime adoption, mobile ad demand, and developer retention",
    trend: [20,41,42,49,56,68,72,64,77,80,75,78,71,60,54,46,44,33,22,20,32,29]
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
    price: 56.6,
    dayChange: 1.3,
    thirtyDayChange: -8.1,
    ytdChange: -26.1,
    marketCap: "$480B",
    sentiment: "Watch",
    summary:
      "Tencent provides broad exposure to mobile, Asian publishing, esports ecosystems, and global studio investments.",
    watchSignal: "China approvals, mobile monetization, and overseas studio performance",
    trend: [69,80,76,58,29,20,31,34,30,42,37,45,36,32,31,35,44,37,27,27,25,32]
  },
  {
    ticker: "NTES",
    company: "NetEase",
    segment: "Online Games / Mobile",
    exchange: "NASDAQ ADR",
    price: 119.29,
    dayChange: 1.9,
    thirtyDayChange: -6.9,
    ytdChange: -13.3,
    marketCap: "$63B",
    sentiment: "Bullish",
    summary:
      "NetEase is a strong China and global online-games signal, with mobile publishing, PC titles, and overseas expansion in focus.",
    watchSignal: "New game approvals, international launches, and live-ops durability",
    trend: [69,76,80,60,46,41,50,47,48,57,30,61,42,63,43,41,41,37,31,29,20,28]
  },
  {
    ticker: "EA",
    company: "Electronic Arts",
    segment: "Sports / Live Services",
    exchange: "Private",
    price: null,
    dayChange: 0,
    thirtyDayChange: 0,
    ytdChange: 0,
    marketCap: "Private",
    sentiment: "Watch",
    summary:
      "EA went private on August 4, 2026; no current public share price is available. Sports and live-service performance remain industry signals.",
    watchSignal: "Sports retention, Ultimate Team bookings, and catalog performance",
    trend: [20,68,68,68,68,68]
  },
  {
    ticker: "TTWO",
    company: "Take-Two",
    segment: "AAA Publishing",
    exchange: "NASDAQ",
    price: 214.69,
    dayChange: 0.3,
    thirtyDayChange: -8.6,
    ytdChange: -16.1,
    marketCap: "$28B",
    sentiment: "Watch",
    summary:
      "Take-Two is a high-beta publishing signal because major franchise timing can reshape expectations for premium game demand.",
    watchSignal: "AAA release timing, marketing spend, and preorder momentum",
    trend: [48,69,80,75,64,62,70,62,63,55,60,59,49,49,49,49,52,28,24,23,20,21]
  },
  {
    ticker: "RBLX",
    company: "Roblox",
    segment: "UGC / Creator Economy",
    exchange: "NYSE",
    price: 43.31,
    dayChange: 4.3,
    thirtyDayChange: 19.7,
    ytdChange: -46.6,
    marketCap: "$25B",
    sentiment: "Watch",
    summary:
      "Roblox remains one of the clearest public UGC indicators, with monetization quality and safety investment driving the debate.",
    watchSignal: "Bookings growth, creator payouts, and age-up engagement",
    trend: [24,37,32,25,20,39,41,38,36,44,44,42,45,48,36,40,43,64,60,64,66,80]
  },
  {
    ticker: "CCOEY",
    company: "Capcom",
    segment: "Premium IP / Catalog",
    exchange: "OTC ADR",
    price: 14.06,
    dayChange: 4.1,
    thirtyDayChange: 16.1,
    ytdChange: 21.8,
    marketCap: "$11B",
    sentiment: "Pressure",
    summary:
      "Capcom is a durable pure-play read on premium game IP, catalog compounding, and disciplined franchise extension.",
    watchSignal: "Monster Hunter cadence, Resident Evil catalog, and digital sales mix",
    trend: [20,46,49,52,42,23,45,39,35,43,44,41,48,53,54,44,54,52,56,51,60,80]
  },
  {
    ticker: "KONMY",
    company: "Konami Group",
    segment: "Games / IP / Amusement",
    exchange: "OTC ADR",
    price: 69.15,
    dayChange: 0,
    thirtyDayChange: 10,
    ytdChange: 2.7,
    marketCap: "$13B",
    sentiment: "Watch",
    summary:
      "Konami offers exposure to long-lived Japanese IP, sports franchises, and a mixed entertainment portfolio beyond games.",
    watchSignal: "Silent Hill execution, eFootball retention, and digital entertainment margin",
    trend: [20,20,20,20,20,33,33,33,47,47,47,47,80,80,80,80,73,73,73,73,73,73]
  },
  {
    ticker: "NCBDY",
    company: "Bandai Namco",
    segment: "Games / Toys / Anime IP",
    exchange: "OTC ADR",
    price: 17.79,
    dayChange: -0.8,
    thirtyDayChange: 27.8,
    ytdChange: 34.2,
    marketCap: "$20B",
    sentiment: "Watch",
    summary:
      "Bandai Namco is a major anime, toy, and game IP operator with strong cross-media revenue optionality.",
    watchSignal: "Elden Ring tail, anime licensing, and transmedia release timing",
    trend: [20,60,58,59,53,46,59,51,51,56,66,63,68,70,75,71,76,76,80,76,80,77]
  },
  {
    ticker: "SQNXF",
    company: "Square Enix",
    segment: "RPGs / Publishing",
    exchange: "OTC",
    price: 18.25,
    dayChange: 0,
    thirtyDayChange: 18.1,
    ytdChange: -3.3,
    marketCap: "$5B",
    sentiment: "Watch",
    summary:
      "Square Enix remains a meaningful RPG and publishing signal, though investors are watching slate focus and margin quality.",
    watchSignal: "Final Fantasy pipeline, HD-2D output, and catalog monetization",
    trend: [20,20,20,20,20,20,20,20,20,20,20,66,66,66,66,66,70,50,80,76,66,66]
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
  dataSourceLabel: "Yahoo public daily closes through 2026-09-04 where available; other metrics are cached; not real-time data or financial advice",
  mode: "cached-fallback",
  refreshedAt: "2026-09-08T01:02:00.279Z",
  updatedTickers: ["NVDA","AMD","INTC","MSFT","SONY","NTDOY","U","TCEHY","NTES","TTWO","RBLX","CCOEY","KONMY","NCBDY","SQNXF"],
  failedTickers: ["EPIC", "EA"],
  failedTickerReasons: {
    EPIC: "Epic Games is private and has no public close price.",
    EA: "EA went private on August 4, 2026; historical quotes are not current prices. https://careers.ea.com/playtesting/news/ea-announces-completion-of-acquisition"
  }
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
