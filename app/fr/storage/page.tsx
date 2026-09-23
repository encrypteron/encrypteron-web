import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PlanCard } from "@/components/plan-card";
import { SectionHeading } from "@/components/section-heading";
import { plans } from "@/app/content";

export default function FrenchStoragePage() {
  return <><Header /><main lang="fr"><section className="products-hero storage-hero"><div className="hero-grid" aria-hidden="true" /><div><p className="eyebrow"><span className="pink-dot" /> Stockage objet</p><h1>Le stockage de<br /><em>vos services.</em></h1><p>Un stockage objet compatible S3 pour vos ressources, exports, sauvegardes et données applicatives.</p></div></section><section className="section storage-page-content"><SectionHeading eyebrow="01 / Stockage objet" title="Un stockage à part entière." intro="Un composant d’infrastructure autonome, avec une demande directe par e-mail avant tout déploiement." /><div className="pricing-grid storage-pricing-grid">{plans.filter((plan) => plan.category === "storage").map((plan) => <PlanCard plan={plan} language="fr" key={plan.name} />)}</div><div className="storage-notes"><article><span>API</span><h2>Compatible S3</h2><p>Utilisez un flux de travail compatible S3 pour vos ressources et données applicatives.</p></article><article><span>CAPACITÉ</span><h2>250 Go inclus</h2><p>Le forfait de départ affiché comprend 250 Go de capacité de stockage.</p></article><article><span>ÉTAPE SUIVANTE</span><h2>Vérifier le besoin</h2><p>Contactez-nous pour confirmer la disponibilité et le périmètre adapté à votre projet.</p></article></div></section></main><Footer /></>;
}
