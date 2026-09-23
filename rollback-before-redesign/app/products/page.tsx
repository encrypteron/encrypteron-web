import { Footer } from "@/components/footer";
import { CustomVmBuilder } from "@/components/custom-vm-builder";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading";
import { operatingSystems, plans, services } from "../content";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="products-page">
        <section className="products-hero">
          <div className="hero-grid" aria-hidden="true" />
          <div>
            <p className="eyebrow"><span className="pink-dot" /> Encrypteron products</p>
            <h1>Compute, storage,<br /><em>and connection.</em></h1>
            <p>Clear VPS, object storage, and tunnelled networking — built for a direct path from requirement to service.</p>
          </div>
        </section>

        <section className="section services-section">
          <SectionHeading eyebrow="01 / Services" title="The essentials, deliberately offered." intro="Compute, storage, and connectivity presented as clear building blocks — not a maze of product names." />
          <div className="services-grid">{services.map((service) => <article key={service.code}><span className="card-index">{service.code}</span><h3>{service.title}</h3><p>{service.body}</p><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
        </section>

        <section className="pricing-section">
          <div className="pricing-inner">
            <SectionHeading eyebrow="02 / Launch pricing" title="Simple pricing, before you commit." intro="Choose a starting point, then send us an email to discuss availability and fit. No checkout flow yet." />
            <div className="pricing-grid">{plans.map((plan, index) => <article className={index === 1 ? "featured" : ""} key={plan.name}>{index === 1 && <span className="plan-tag">RECOMMENDED</span>}<p className="plan-type">{plan.name === "Object Storage" ? "STORAGE" : "VIRTUAL SERVER"}</p><h3>{plan.name}</h3><p className="plan-price">{plan.price}<small>{plan.period}</small></p><p className="plan-description">{plan.description}</p><ul>{plan.specs.map((spec) => <li key={spec}><span aria-hidden="true">✓</span>{spec}</li>)}</ul><a className={index === 1 ? "button" : "plan-button"} href={`mailto:mail@encrypteron.com?subject=${encodeURIComponent(`Encrypteron ${plan.name} enquiry`)}`}>Choose {plan.name} <span aria-hidden="true">↗</span></a></article>)}</div>
            <p className="pricing-note">Prices are shown in EUR per month. Availability and final scope are confirmed by email before provisioning.</p>
          </div>
        </section>

        <section className="section images-section">
          <div className="images-heading"><SectionHeading eyebrow="03 / VPS images" title="Start with the system you know." intro="Choose Debian, Ubuntu, or Alpine Linux. Need something specific? Bring custom ISO files up to 3 GB in total." /><span className="image-status"><i /> IMAGE LIBRARY</span></div>
          <div className="os-grid">{operatingSystems.map((system) => <article key={system.family}><h3>{system.family}</h3><div>{system.versions.map((version) => <span key={version}>{version}</span>)}</div></article>)}</div>
          <p className="section-note">Image availability is confirmed during provisioning. Multiple custom ISO files are allowed when their combined size stays within the 3 GB limit; suitability review may be required.</p>
        </section>

        <CustomVmBuilder />
      </main>
      <Footer />
    </>
  );
}
