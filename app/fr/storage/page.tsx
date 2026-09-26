import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PlanCard } from "@/components/plan-card";
import { SectionHeading } from "@/components/section-heading";
import { plans } from "@/app/content";

export default function FrenchStoragePage() {
  return <><Header /><main lang="fr"><section className="products-hero storage-hero"><div className="hero-grid" aria-hidden="true" /><div><p className="eyebrow"><span className="pink-dot" /> Stockage objet</p><h1>Le stockage de<br /><em>vos services.</em></h1><p>Un stockage objet MinIO compatible S3 pour vos ressources, exports, sauvegardes et données applicatives.</p></div></section><section className="section storage-page-content"><SectionHeading eyebrow="01 / Stockage objet" title="Un stockage à part entière." intro="Un composant d’infrastructure autonome, avec une demande directe par e-mail avant tout déploiement." /><div className="pricing-grid storage-pricing-grid">{plans.filter((plan) => plan.category === "storage").map((plan) => <PlanCard plan={plan} language="fr" key={plan.name} />)}</div><div className="storage-notes"><article><span>PLATEFORME</span><h2>MinIO</h2><p>Stockage objet compatible S3 propulsé par MinIO.</p></article><article><span>CAPACITÉ</span><h2>25 Go NVMe M.2</h2><p>La capacité de stockage proposée utilise du NVMe M.2.</p></article><article><span>PRIX</span><h2>5 € / mois</h2><p>Forfait 25 Go, le moins cher : prix de base 5 € / mois, tarif actuel 1 € / mois.</p></article></div></section></main><Footer /></>;
}
