import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WikiMarkdown, getWikiHeadings } from "@/components/wiki-markdown";
import { getPublishedArticles } from "@/wiki/content";

export function generateStaticParams() { return getPublishedArticles("en").map(({ slug }) => ({ slug })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getPublishedArticles("en").find((item) => item.slug === slug);
  return article ? { title: article.title, description: article.summary, alternates: { canonical: `/wiki/${article.slug}` }, openGraph: { type: "article", publishedTime: article.publishedAt, modifiedTime: article.updatedAt } } : {};
}

export default async function WikiArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getPublishedArticles("en").find((item) => item.slug === slug);
  if (!article) notFound();
  const headings = getWikiHeadings(article.body);
  return <><Header /><main className="wiki-page wiki-article-page"><nav className="wiki-breadcrumb" aria-label="Breadcrumb"><Link href="/wiki">Wiki</Link><span aria-hidden="true">/</span><span>{article.category}</span></nav><header className="wiki-article-header"><p className="eyebrow"><span className="pink-dot" /> {article.category}</p><h1>{article.title}</h1><p className="wiki-summary">{article.summary}</p><div className="wiki-article-meta"><span>Published <time dateTime={article.publishedAt}>{article.publishedAt}</time></span><span>Updated <time dateTime={article.updatedAt}>{article.updatedAt}</time></span></div><ul className="wiki-tags" aria-label="Tags">{article.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></header><div className="wiki-reading-layout">{headings.length > 0 && <nav className="wiki-toc" aria-label="Table of contents"><strong>On this page</strong><ol>{headings.map((heading) => <li className={`depth-${heading.level}`} key={heading.id}><a href={`#${heading.id}`}>{heading.title}</a></li>)}</ol></nav>}<article className="wiki-article"><WikiMarkdown markdown={article.body} /></article></div></main><Footer /></>;
}
