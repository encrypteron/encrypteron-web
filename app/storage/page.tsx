import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PlanCard } from "@/components/plan-card";
import { SectionHeading } from "@/components/section-heading";
import { plans } from "../content";

export default function StoragePage() {
  return <><Header /><main><section className="products-hero storage-hero"><div className="hero-grid" aria-hidden="true" /><div><p className="eyebrow"><span className="pink-dot" /> Object storage</p><h1>Storage for what<br /><em>your services keep.</em></h1><p>S3-compatible object storage for assets, exports, backups, and application data.</p></div></section><section className="section storage-page-content"><SectionHeading eyebrow="01 / Object storage" title="Storage, on its own terms." intro="A separate infrastructure building block with direct email enquiry before provisioning." /><div className="pricing-grid storage-pricing-grid">{plans.filter((plan) => plan.category === "storage").map((plan) => <PlanCard plan={plan} key={plan.name} />)}</div><div className="storage-notes"><article><span>API</span><h2>S3-compatible</h2><p>Use an S3-compatible workflow for assets and application data.</p></article><article><span>CAPACITY</span><h2>250 GB included</h2><p>The listed starting plan includes 250 GB of storage capacity.</p></article><article><span>NEXT STEP</span><h2>Discuss the fit</h2><p>Contact us to confirm availability and the scope that works for your project.</p></article></div></section></main><Footer /></>;
}
