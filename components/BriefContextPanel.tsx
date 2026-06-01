import { BookOpenCheck, FileSearch, ShieldCheck } from "lucide-react";
import Link from "next/link";
import {
  sourceCredibilityTypes,
  type Article,
  type SourceCredibility
} from "@/data/articles";

const sourceNotes: Record<SourceCredibility, string> = {
  "Official source": "Direct company, platform, union, or vendor publication.",
  "Trade press": "Reported industry coverage with editorial context.",
  "Market analysis": "Market-facing analysis, data, or analyst framing.",
  "Vendor report": "Useful product-side research; read with commercial bias in mind."
};

const sourceTone: Record<SourceCredibility, string> = {
  "Official source": "from-cyan-300 to-cyan-300/30",
  "Trade press": "from-violet-300 to-violet-300/30",
  "Market analysis": "from-emerald-300 to-emerald-300/30",
  "Vendor report": "from-amber-300 to-amber-300/30"
};

export function BriefContextPanel({ articles }: { articles: Article[] }) {
  const topAiStory = findTopArticle(articles, (article) => article.category === "AI");
  const topPlatformStory = findTopArticle(articles, (article) => article.category === "Platform");
  const topMarketStory = findTopArticle(articles, (article) => article.category === "Business");
  const averageConfidence = Math.round(
    articles.reduce((sum, article) => sum + article.confidence, 0) / articles.length
  );
  const sourceCounts = sourceCredibilityTypes.map((sourceType) => ({
    sourceType,
    count: articles.filter((article) => article.sourceCredibility === sourceType).length
  }));

  return (
    <section className="grid gap-3 lg:grid-cols-[minmax(0,1.35fr)_minmax(22rem,0.8fr)]">
      <div className="glass-panel premium-hover relative overflow-hidden rounded-lg p-4 sm:p-5">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_92%_0%,rgba(50,217,255,0.14),transparent_28%),radial-gradient(circle_at_12%_100%,rgba(138,92,255,0.12),transparent_30%)]" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
            <BookOpenCheck className="h-4 w-4" />
            This Week&apos;s Thesis
          </div>
          <h2 className="mt-3 max-w-4xl font-display text-2xl font-black leading-tight text-white sm:text-3xl">
            AI tooling is moving from spectacle into production infrastructure, while platforms keep chasing reach over exclusivity.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
            The week&apos;s highest-value read is not one isolated headline. It is the convergence of AI-assisted
            production, broader platform distribution, and tighter market discipline around launches, labor, and tooling.
          </p>

          <div className="mt-5 grid gap-2 md:grid-cols-3">
            <ThesisSignal label="Production shift" article={topAiStory} />
            <ThesisSignal label="Platform pressure" article={topPlatformStory} />
            <ThesisSignal label="Market discipline" article={topMarketStory} />
          </div>
        </div>
      </div>

      <aside className="glass-panel premium-hover relative overflow-hidden rounded-lg p-4 sm:p-5" aria-label="Source confidence breakdown">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_8%,rgba(84,240,169,0.12),transparent_30%)]" />
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-emerald-200">
                <ShieldCheck className="h-4 w-4" />
                Source Confidence
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                The brief separates source type from story confidence so readers can see the evidence mix.
              </p>
            </div>
            <SourceConfidenceDonut sourceCounts={sourceCounts} total={articles.length} average={averageConfidence} />
          </div>

          <div className="mt-5 space-y-3">
            {sourceCounts.map(({ sourceType, count }) => (
              <SourceConfidenceRow
                key={sourceType}
                sourceType={sourceType}
                count={count}
                total={articles.length}
              />
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}

function SourceConfidenceDonut({
  sourceCounts,
  total,
  average
}: {
  sourceCounts: Array<{ sourceType: SourceCredibility; count: number }>;
  total: number;
  average: number;
}) {
  let offset = 0;
  const colors: Record<SourceCredibility, string> = {
    "Official source": "#67e8f9",
    "Trade press": "#c4b5fd",
    "Market analysis": "#6ee7b7",
    "Vendor report": "#fcd34d"
  };

  return (
    <div className="relative grid h-24 w-24 shrink-0 place-items-center rounded-lg border border-white/10 bg-black/20">
      <svg className="absolute inset-2 h-20 w-20 -rotate-90" viewBox="0 0 42 42" aria-hidden="true">
        <circle cx="21" cy="21" r="15.5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
        {sourceCounts.map(({ sourceType, count }) => {
          const share = total ? (count / total) * 100 : 0;
          const dash = `${share} ${100 - share}`;
          const segment = (
            <circle
              key={sourceType}
              cx="21"
              cy="21"
              r="15.5"
              fill="none"
              stroke={colors[sourceType]}
              strokeDasharray={dash}
              strokeDashoffset={-offset}
              strokeLinecap="round"
              strokeWidth="5"
              pathLength="100"
            />
          );
          offset += share;
          return segment;
        })}
      </svg>
      <div className="relative text-center">
        <p className="text-[0.58rem] font-black uppercase tracking-[0.14em] text-emerald-100/70">Avg</p>
        <p className="font-display text-xl font-black text-white">{average}%</p>
      </div>
    </div>
  );
}

function ThesisSignal({ label, article }: { label: string; article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group rounded-lg border border-white/10 bg-black/20 p-3 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.07]"
    >
      <div className="flex items-center gap-2 text-[0.65rem] font-black uppercase tracking-[0.16em] text-slate-500">
        <FileSearch className="h-3.5 w-3.5 text-cyan-100 transition group-hover:text-white" />
        {label}
      </div>
      <p className="mt-2 line-clamp-2 text-sm font-bold leading-5 text-white transition group-hover:text-cyan-50">
        {article.title}
      </p>
      <p className="mt-2 text-xs leading-5 text-slate-500">
        Impact {article.impactScore}/100 · Momentum +{article.trendScore}%
      </p>
    </Link>
  );
}

function SourceConfidenceRow({
  sourceType,
  count,
  total
}: {
  sourceType: SourceCredibility;
  count: number;
  total: number;
}) {
  const width = `${Math.round((count / total) * 100)}%`;

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-bold text-slate-100">{sourceType}</p>
        <p className="text-xs font-black text-slate-500">{count} briefs</p>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.06]">
        <div className={`h-full rounded-full bg-gradient-to-r ${sourceTone[sourceType]}`} style={{ width }} />
      </div>
      <p className="mt-1.5 text-xs leading-5 text-slate-500">{sourceNotes[sourceType]}</p>
    </div>
  );
}

function findTopArticle(articles: Article[], predicate: (article: Article) => boolean) {
  return [...articles]
    .filter(predicate)
    .sort((a, b) => b.impactScore + b.trendScore * 0.6 - (a.impactScore + a.trendScore * 0.6))[0] ?? articles[0];
}
