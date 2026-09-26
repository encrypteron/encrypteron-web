import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading";
import { WikiSearch } from "@/components/wiki-search";
import { getPublishedArticles } from "@/wiki/content";

export const metadata: Metadata = { title: "Wiki", description: "Published Encrypteron infrastructure guides and reference articles." };

export default function WikiPage() {
  const articles = getPublishedArticles("en");
  return <><Header /><main className="wiki-page"><section className="products-hero wiki-hero"><div className="hero-grid" aria-hidden="true" /><div><p className="eyebrow"><span className="pink-dot" /> Encrypteron reference</p><h1>Infrastructure,<br /><em>explained.</em></h1><p>Guides and practical notes about the services and network path.</p></div></section><section className="section wiki-index"><SectionHeading eyebrow="01 / Published guides" title="The Wiki." intro="Browse published articles by topic or search their titles and tags." /><WikiSearch articles={articles} language="en" /></section></main><Footer /></>;
}
