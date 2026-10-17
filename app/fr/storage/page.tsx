import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PlanCard } from "@/components/plan-card";
import { SectionHeading } from "@/components/section-heading";
import { getStartingPlan, plans } from "@/app/content";

import { frLaunchNotice } from "@/app/fr/content";

export default function FrenchStoragePage() {
  const startingPlan = getStartingPlan("storage");
  const startingPrice = startingPlan.price.replace("€", "").replace(".", ",") + " €";
  return <><Header /><main lang="fr"><section className="products-hero storage-hero"><div className="hero-grid" aria-hidden="true" /><div><p className="eyebrow"><span className="pink-dot" /> Stockage objet</p><h1>Le stockage de<br /><em>vos services.</em></h1><p>{frLaunchNotice}</p></div></section><section className="section storage-page-content"><SectionHeading eyebrow="01 / Stockage objet" title="Un stockage à part entière." intro="Un stockage objet MinIO compatible S3 prévu pour vos ressources et données applicatives. Les prix sont prévisionnels ; le service attend ROOT et n’est pas encore disponible." /><div className="pricing-grid storage-pricing-grid">{plans.filter((plan) => plan.category === "storage").map((plan) => <PlanCard plan={plan} language="fr" key={plan.name} />)}</div><div className="storage-notes"><article><span>PLATEFORME</span><h2>MinIO</h2><p>Stockage objet compatible S3 propulsé par MinIO.</p></article><article><span>CAPACITÉ</span><h2>25 Go NVMe M.2</h2><p>La capacité de stockage proposée utilise du NVMe M.2.</p></article><article><span>PRIX</span><h2>{startingPrice} / mois</h2><p>Tarif de départ prévisionnel pour {startingPlan.name.replace("Object Storage", "Stockage objet").replace("GB", "Go")}. La durée et les conditions de renouvellement d’une éventuelle promotion de lancement restent à confirmer.</p></article></div></section></main><Footer /></>;
}
