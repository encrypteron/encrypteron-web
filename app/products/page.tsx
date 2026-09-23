import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading";
import { futureProductCategories, productCategories, productTagCatalog } from "../content";

type Category = { number: string; title: string; description: string; detail: string; tags: string[] };

export default function ProductsPage() {
  return <><Header /><main className="products-page"><section className="products-hero"><div className="hero-grid" aria-hidden="true" /><div><p className="eyebrow"><span className="pink-dot" /> Encrypteron products</p><h1>Services, clearly<br /><em>separated.</em></h1><p>Choose a product, then open its dedicated page for the plans and technical information that matter.</p></div></section><section className="section product-directory standalone-directory"><SectionHeading eyebrow="01 / Available now" title="Three services. One clear index." intro="VPS includes images and custom configuration. Prices stay on the individual product pages." /><div className="category-grid">{productCategories.map((category) => <a href={category.href} key={category.title}><CategoryCard category={category} /></a>)}</div></section><section className="future-products"><div className="future-products-inner"><SectionHeading eyebrow="02 / Future services" title="What we are considering next." intro="These categories are directional only. They are not orderable, have no published price, and have no promised release date." /><div className="category-grid future-category-grid">{futureProductCategories.map((category) => <article key={category.title} aria-label={`${category.title}, not available yet`}><CategoryCard category={category} /></article>)}</div></div></section></main><Footer /></>;
}

function CategoryCard({ category }: { category: Category }) {
  return <><span>{category.number}</span><div className="category-tags">{category.tags.map((tag) => { const config = productTagCatalog[tag as keyof typeof productTagCatalog]; return <i className={`product-tag tag-${config.tone}`} key={tag}>{config.label}</i>; })}</div><h3>{category.title}</h3><p>{category.description}</p><small>{category.detail} <b>↗</b></small></>;
}
