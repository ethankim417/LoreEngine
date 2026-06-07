import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, RadioTower } from "lucide-react";
import { ArticleReadTracker } from "@/components/ArticleReadTracker";
import { SectorSignalArt } from "@/components/SectorSignalArt";
import { SourceBadge } from "@/components/SourceBadge";
import { articles, getArticleBySlug } from "@/data/articles";
import { categoryTone, formatDate } from "@/lib/format";

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  return {
    title: article ? `${article.title} | LoreEngine` : "Article | LoreEngine"
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
      <ArticleReadTracker articleId={article.id} />
      <div aria-hidden="true" className="mesh-grid absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="absolute right-[-12rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-violet-500/15 blur-3xl"
      />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-4 sm:gap-6">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Dashboard
        </Link>
        <Link
          href="/#feed"
          className="fixed bottom-3 left-3 right-3 z-40 inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-300/20 bg-slate-950/85 px-4 py-3 text-sm font-black text-cyan-50 shadow-[0_20px_80px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:hidden"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to feed
        </Link>

        <article className="glass-panel overflow-hidden rounded-lg">
          <div className="relative overflow-hidden border-b border-white/10 p-4 sm:min-h-[30rem] sm:p-7">
            <Image
              src={article.visual.image}
              alt={article.visual.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-[0.2] saturate-[0.85] [mask-image:linear-gradient(90deg,black,black_54%,transparent_92%)]"
            />
            <SectorSignalArt article={article} opacity="subtle" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,7,13,0.99),rgba(6,7,13,0.92)_48%,rgba(6,7,13,0.58)_78%),linear-gradient(to_bottom,rgba(6,7,13,0.32),rgba(6,7,13,0.9))]" />
            <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_50%_35%,rgba(50,217,255,0.085),transparent_48%)]" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#06070d] to-transparent" />

            <div className="relative z-10 grid gap-5 sm:min-h-[26rem] lg:grid-cols-[1fr_18rem] lg:items-end">
              <div className="max-w-3xl">
                <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-lg border border-white/10 bg-slate-950/50 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:gap-3">
                  <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${categoryTone(article.category)}`}>
                    {article.category}
                  </span>
                  <SourceBadge source={article.source} credibility={article.sourceCredibility} />
                  <span className="text-sm text-slate-300">{formatDate(article.publishedAt)}</span>
                </div>
                <h1 className="mt-5 max-w-4xl text-balance font-display text-3xl font-black leading-tight tracking-normal text-white sm:text-5xl">
                  {article.title}
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
                  {article.fullTldr}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {article.sectors.slice(0, 5).map((sector) => (
                    <span
                      key={sector}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-50"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>

              <details className="mt-4 rounded-lg border border-white/10 bg-slate-950/70 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:hidden">
                <summary className="cursor-pointer text-xs font-black uppercase tracking-[0.14em] text-cyan-200">
                  Scores
                </summary>
                <div className="mt-3 grid gap-2">
                  <HeaderGauge label="Impact" value={article.impactScore} suffix="/100" />
                  <HeaderGauge label="Momentum" value={article.trendScore} prefix="+" suffix="%" />
                  <HeaderGauge label="Confidence" value={article.confidence} suffix="%" />
                </div>
              </details>

              <div className="hidden gap-2 rounded-lg border border-white/10 bg-slate-950/70 p-2.5 shadow-[0_24px_80px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:grid sm:p-3">
                <HeaderGauge label="Impact" value={article.impactScore} suffix="/100" />
                <HeaderGauge label="Momentum" value={article.trendScore} prefix="+" suffix="%" />
                <HeaderGauge label="Confidence" value={article.confidence} suffix="%" />
              </div>
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[1fr_18rem]">
            <div className="space-y-8 p-5 pb-20 sm:space-y-10 sm:p-8">
              <DetailBlock title="Why It Matters" body={article.whyItMatters} />
              <DetailBlock title="Possible Industry Impact" body={article.possibleImpact} />
              <DetailBlock title="Trend Analysis" body={article.trendAnalysis} />
              <div>
                <h2 className="font-display text-xl font-bold text-white">Key Affected Companies</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {article.companies.map((company) => (
                    <span
                      key={company}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm text-slate-200"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <aside className="border-t border-white/10 bg-black/20 p-5 sm:p-7 lg:border-l lg:border-t-0">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                <RadioTower className="h-4 w-4" />
                Intel Readout
              </div>
              <div className="mt-5 space-y-4">
                <Score label="Industry Impact" value={`${article.impactScore}/100`} />
                <Score label="Momentum" value={`+${article.trendScore}%`} />
                <Score label="Confidence" value={`${article.confidence}%`} />
              </div>
              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Affected Sectors</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {article.sectors.map((sector) => (
                    <span
                      key={sector}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-50"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="article-source-link"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-300 px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-200"
              >
                Open Source
                <ExternalLink className="h-4 w-4" />
              </a>
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
}

function DetailBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="border-l border-cyan-300/20 pl-4 sm:pl-5">
      <h2 className="font-display text-xl font-bold text-white">{title}</h2>
      <p className="mt-3 max-w-3xl text-base leading-8 text-slate-300">{body}</p>
    </section>
  );
}

function HeaderGauge({
  label,
  value,
  prefix = "",
  suffix = ""
}: {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.045] p-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-slate-500">{label}</p>
        <p className="font-display text-xl font-black text-white">
          {prefix}
          {value}
          {suffix}
        </p>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-300"
          style={{ width: `${Math.min(value, 100)}%` }}
        />
      </div>
    </div>
  );
}

function Score({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</p>
      <p className="mt-1 font-display text-3xl font-black text-white">{value}</p>
    </div>
  );
}
