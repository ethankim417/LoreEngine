import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, RadioTower } from "lucide-react";
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
    <main className="relative min-h-screen overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      <div aria-hidden="true" className="mesh-grid absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="absolute right-[-12rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-violet-500/15 blur-3xl"
      />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-6">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Dashboard
        </Link>

        <article className="glass-panel overflow-hidden rounded-lg">
          <div className="relative min-h-[22rem] overflow-hidden border-b border-white/10 p-5 sm:min-h-[24rem] sm:p-7">
            <Image
              src={article.visual.image}
              alt={article.visual.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,7,13,0.96),rgba(6,7,13,0.78)_38%,rgba(6,7,13,0.18)_72%),linear-gradient(to_bottom,rgba(6,7,13,0.18),rgba(6,7,13,0.72))]" />
            <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_50%_35%,rgba(50,217,255,0.16),transparent_48%)]" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#06070d] to-transparent" />

            <div className="relative z-10 max-w-3xl rounded-lg border border-white/10 bg-slate-950/72 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.36),inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${categoryTone(article.category)}`}>
                  {article.category}
                </span>
                <SourceBadge source={article.source} />
                <span className="text-sm text-slate-300">{formatDate(article.publishedAt)}</span>
              </div>
              <h1 className="mt-5 max-w-4xl font-display text-3xl font-black leading-tight tracking-normal text-white sm:text-5xl">
                {article.title}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">{article.fullTldr}</p>
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[1fr_18rem]">
            <div className="space-y-7 p-5 sm:p-7">
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
                <Score label="Impact" value={`${article.impactScore}/100`} />
                <Score label="Trend" value={`+${article.trendScore}%`} />
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
    <section>
      <h2 className="font-display text-xl font-bold text-white">{title}</h2>
      <p className="mt-3 leading-7 text-slate-300">{body}</p>
    </section>
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
