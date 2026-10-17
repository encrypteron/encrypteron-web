import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PlanCard } from "@/components/plan-card";
import { SectionHeading } from "@/components/section-heading";
import { getStartingPlan, launchNotice, plans } from "../content";

export default function StoragePage() {
  const startingPlan = getStartingPlan("storage");
  return <><Header /><main><section className="products-hero storage-hero"><div className="hero-grid" aria-hidden="true" /><div><p className="eyebrow"><span className="pink-dot" /> Object storage</p><h1>Storage for what<br /><em>your services keep.</em></h1><p>{launchNotice}</p></div></section><section className="section storage-page-content"><SectionHeading eyebrow="01 / Object storage" title="Storage, on its own terms." intro="Planned MinIO-based, S3-compatible storage for assets and application data. Prices are indicative; the service awaits ROOT and is not available yet." /><div className="pricing-grid storage-pricing-grid">{plans.filter((plan) => plan.category === "storage").map((plan) => <PlanCard plan={plan} key={plan.name} />)}</div><div className="storage-notes"><article><span>PLATFORM</span><h2>MinIO</h2><p>S3-compatible object storage powered by MinIO.</p></article><article><span>CAPACITY</span><h2>25 GB NVMe M.2</h2><p>The listed storage allocation uses NVMe M.2 storage.</p></article><article><span>PRICE</span><h2>{startingPlan.price} / month</h2><p>Indicative starting price for {startingPlan.name}. The duration and renewal terms of any launch promotion remain to be confirmed.</p></article></div></section></main><Footer /></>;
}
