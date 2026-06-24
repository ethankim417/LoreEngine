import { MarketPageView } from "@/components/MarketPageView";
import { getMarketSnapshot } from "@/lib/marketData";

export const metadata = {
  title: "Market Pulse | LoreEngine"
};

export const dynamic = process.env.GITHUB_PAGES === "true" ? "force-static" : "force-dynamic";

export default async function MarketPage() {
  const snapshot = await getMarketSnapshot();

  return <MarketPageView snapshot={snapshot} />;
}
