export type MarketSentiment = "Bullish" | "Watch" | "Pressure";

export type MarketPlayer = {
  ticker: string;
  company: string;
  segment: string;
  exchange: string;
  price: number;
  dayChange: number;
  thirtyDayChange: number;
  ytdChange: number;
  marketCap: string;
  sentiment: MarketSentiment;
  summary: string;
  watchSignal: string;
  trend: number[];
};

// Mock cached market data for the portfolio version.
// Future production path: fetch quotes in a scheduled backend job, save the daily
// snapshot to a database/cache, and let the frontend read that cached result only.
export const marketPlayers: MarketPlayer[] = [
  {
    ticker: "NVDA",
    company: "NVIDIA",
    segment: "Gaming AI / GPUs",
    exchange: "NASDAQ",
    price: 124.83,
    dayChange: 1.8,
    thirtyDayChange: 14.6,
    ytdChange: 38.2,
    marketCap: "$3.1T",
    sentiment: "Bullish",
    summary:
      "GPU demand, local AI inference, and RTX creator tooling keep NVIDIA positioned as the strongest gaming AI infrastructure signal.",
    watchSignal: "On-device agents, DLSS adoption, and AI PC attach rates",
    trend: [42, 45, 43, 48, 52, 56, 61, 58, 64, 69, 73, 78]
  },
  {
    ticker: "MSFT",
    company: "Microsoft",
    segment: "Xbox / Cloud / AI",
    exchange: "NASDAQ",
    price: 431.92,
    dayChange: 0.7,
    thirtyDayChange: 5.1,
    ytdChange: 16.4,
    marketCap: "$3.2T",
    sentiment: "Bullish",
    summary:
      "Xbox's cross-platform posture is increasingly tied to Microsoft cloud, subscriptions, and AI tooling rather than console unit economics alone.",
    watchSignal: "Game Pass mix, first-party release cadence, and Azure AI bundling",
    trend: [50, 51, 54, 53, 57, 60, 58, 62, 63, 65, 67, 69]
  },
  {
    ticker: "SONY",
    company: "Sony Group",
    segment: "PlayStation / Media",
    exchange: "NYSE ADR",
    price: 92.47,
    dayChange: -0.4,
    thirtyDayChange: 3.2,
    ytdChange: 9.8,
    marketCap: "$115B",
    sentiment: "Watch",
    summary:
      "Sony remains a premium console and IP compounder, but investors are watching margin discipline and the timing of PC expansion.",
    watchSignal: "First-party slate visibility and live-service risk control",
    trend: [45, 47, 46, 48, 51, 50, 52, 54, 53, 55, 56, 57]
  },
  {
    ticker: "NTDOY",
    company: "Nintendo",
    segment: "Console / IP",
    exchange: "OTC ADR",
    price: 16.21,
    dayChange: 0.9,
    thirtyDayChange: 8.4,
    ytdChange: 21.7,
    marketCap: "$76B",
    sentiment: "Bullish",
    summary:
      "Nintendo's hardware cycle and evergreen IP library give it a distinct counter-position to subscription-heavy platform strategies.",
    watchSignal: "Next-gen hardware ramp, attach rate, and software launch density",
    trend: [40, 42, 44, 48, 46, 49, 53, 57, 59, 62, 61, 66]
  },
  {
    ticker: "TTWO",
    company: "Take-Two",
    segment: "AAA Publishing",
    exchange: "NASDAQ",
    price: 161.34,
    dayChange: 1.2,
    thirtyDayChange: 6.9,
    ytdChange: 18.3,
    marketCap: "$28B",
    sentiment: "Bullish",
    summary:
      "Take-Two is a high-beta publishing signal because major franchise timing can reshape expectations for premium game demand.",
    watchSignal: "AAA release timing, marketing spend, and preorder momentum",
    trend: [44, 46, 45, 47, 52, 55, 57, 56, 60, 63, 66, 68]
  },
  {
    ticker: "RBLX",
    company: "Roblox",
    segment: "UGC / Creator Economy",
    exchange: "NYSE",
    price: 37.68,
    dayChange: -1.1,
    thirtyDayChange: -4.8,
    ytdChange: 7.5,
    marketCap: "$25B",
    sentiment: "Watch",
    summary:
      "Roblox remains one of the clearest public UGC indicators, with monetization quality and safety investment driving the debate.",
    watchSignal: "Bookings growth, creator payouts, and age-up engagement",
    trend: [55, 57, 54, 52, 49, 51, 48, 47, 45, 46, 44, 43]
  },
  {
    ticker: "U",
    company: "Unity",
    segment: "Game Engine / Ads",
    exchange: "NYSE",
    price: 24.12,
    dayChange: -0.8,
    thirtyDayChange: -6.3,
    ytdChange: -12.6,
    marketCap: "$10B",
    sentiment: "Pressure",
    summary:
      "Unity is still strategically important to mobile and indie developers, but the market wants clearer evidence of trust repair and durable growth.",
    watchSignal: "Runtime adoption, mobile ad demand, and developer retention",
    trend: [58, 56, 53, 51, 49, 48, 45, 43, 42, 39, 37, 35]
  },
  {
    ticker: "TCEHY",
    company: "Tencent",
    segment: "Global Games / Mobile",
    exchange: "OTC ADR",
    price: 51.76,
    dayChange: 0.5,
    thirtyDayChange: 4.4,
    ytdChange: 13.9,
    marketCap: "$480B",
    sentiment: "Bullish",
    summary:
      "Tencent provides broad exposure to mobile, Asian publishing, esports ecosystems, and global studio investments.",
    watchSignal: "China approvals, mobile monetization, and overseas studio performance",
    trend: [46, 48, 49, 51, 50, 53, 55, 58, 57, 60, 62, 64]
  }
];
