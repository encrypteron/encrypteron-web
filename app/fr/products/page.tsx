import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading";
import { productTagCatalog } from "@/app/content";
import { frFutureCategories, frProductCategories } from "../content";

export default function FrenchProductsPage() {
  return <><Header /><main lang="fr" className="products-page"><section className="products-hero"><div className="hero-grid" aria-hidden="true" /><div><p className="eyebrow"><span className="pink-dot" /> Offres Encrypteron</p><h1>Des services<br /><em>bien distincts.</em></h1><p>Choisissez un service, puis consultez sa page pour découvrir ses options et les informations techniques utiles.</p></div></section><section className="section product-directory standalone-directory"><SectionHeading eyebrow="01 / Disponibles" title="Trois services. Un aperçu clair." intro="Les images et configurations personnalisées font partie de l’offre VPS. Les prix figurent sur chaque page produit." /><div className="category-grid">{frProductCategories.map((category) => <a href={category.href} key={category.title}><CategoryCard category={category} /></a>)}</div></section><section className="future-products"><div className="future-products-inner"><SectionHeading eyebrow="02 / À l’étude" title="Les pistes envisagées." intro="Ces catégories indiquent une orientation. Elles ne sont pas disponibles à la commande, n’ont pas de prix publié ni de date de lancement promise." /><div className="category-grid future-category-grid">{frFutureCategories.map((category) => <article key={category.title} aria-label={`${category.title}, pas encore disponible`}><CategoryCard category={category} /></article>)}</div></div></section></main><Footer /></>;
}

function CategoryCard({ category }: { category: { number: string; title: string; description: string; detail: string; tags: string[] } }) {
  const tags = { recommended: "RECOMMANDÉ", sale: "ÉCONOMISEZ 60 %", priceDrop: "PRIX EN BAISSE", featured: "À LA UNE", soon: "BIENTÔT", limited: "LIMITÉ", beta: "BÊTA" } as Record<string, string>;
  return <><span>{category.number}</span><div className="category-tags">{category.tags.map((tag) => { const config = productTagCatalog[tag as keyof typeof productTagCatalog]; return <i className={`product-tag tag-${config.tone}`} key={tag}>{tags[tag] ?? config.label}</i>; })}</div><h3>{category.title}</h3><p>{category.description}</p><small>{category.detail} <b>↗</b></small></>;
}
