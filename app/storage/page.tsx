import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PlanCard } from "@/components/plan-card";
import { SectionHeading } from "@/components/section-heading";
import { plans } from "../content";

export default function StoragePage() {
  return <><Header /><main><section className="products-hero storage-hero"><div className="hero-grid" aria-hidden="true" /><div><p className="eyebrow"><span className="pink-dot" /> Object storage</p><h1>Storage for what<br /><em>your services keep.</em></h1><p>MinIO-based, S3-compatible object storage for assets, exports, backups, and application data.</p></div></section><section className="section storage-page-content"><SectionHeading eyebrow="01 / Object storage" title="Storage, on its own terms." intro="A separate infrastructure building block with direct email enquiry before provisioning." /><div className="pricing-grid storage-pricing-grid">{plans.filter((plan) => plan.category === "storage").map((plan) => <PlanCard plan={plan} key={plan.name} />)}</div><div className="storage-notes"><article><span>PLATFORM</span><h2>MinIO</h2><p>S3-compatible object storage powered by MinIO.</p></article><article><span>CAPACITY</span><h2>25 GB NVMe M.2</h2><p>The listed storage allocation uses NVMe M.2 storage.</p></article><article><span>PRICE</span><h2>€5 / month</h2><p>The lowest-priced plan is 25 GB: €5 / month base price, currently €1 / month.</p></article></div></section></main><Footer /></>;
}
