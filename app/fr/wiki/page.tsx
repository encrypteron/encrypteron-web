import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading";
import { WikiSearch } from "@/components/wiki-search";
import { getPublishedArticles } from "@/wiki/content";

export const metadata: Metadata = { title: "Wiki", description: "Articles de référence publiés par Encrypteron." };

export default function FrenchWikiPage() {
  const articles = getPublishedArticles("fr");
  return <><Header /><main lang="fr" className="wiki-page"><section className="products-hero wiki-hero"><div className="hero-grid" aria-hidden="true" /><div><p className="eyebrow"><span className="pink-dot" /> Référence Encrypteron</p><h1>Infrastructure,<br /><em>expliquée.</em></h1><p>Guides et notes pratiques sur les services et le chemin réseau.</p></div></section><section className="section wiki-index"><SectionHeading eyebrow="01 / Guides publiés" title="Le Wiki." intro="Parcourez les articles publiés par sujet ou recherchez dans leurs titres et étiquettes." /><WikiSearch articles={articles} language="fr" /></section></main><Footer /></>;
}
