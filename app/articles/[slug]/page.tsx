import { notFound } from "next/navigation";
import { ArticleDetailView } from "@/components/ArticleDetailView";
import { articles, getArticleBySlug } from "@/data/articles";

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

  return <ArticleDetailView article={article} />;
}
