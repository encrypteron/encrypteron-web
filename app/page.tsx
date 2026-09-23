import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading";
import { useCases } from "./content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-copy">
              <p className="eyebrow"><span className="pink-dot" /> Independent cloud infrastructure</p>
              <h1>Cloud infrastructure, <em>made clear.</em></h1>
              <p className="hero-intro">VPS, object storage, and tunnelled networking for projects that need a direct, understandable foundation.</p>
              <div className="hero-actions"><a className="button" href="/products">Explore products <span aria-hidden="true">↗</span></a><a className="text-link" href="mailto:mail@encrypteron.com">Talk to us <span aria-hidden="true">↗</span></a></div>
            </div>
            <aside className="quick-start" aria-label="Products at a glance">
              <div className="quick-start-heading"><span>START HERE</span><i>ENCRYPTERON / 01</i></div>
              <a href="/products"><span className="quick-number">01</span><span><strong>Virtual private servers</strong><small>From €1.60 / month</small></span><b>↗</b></a>
              <a href="/products"><span className="quick-number">02</span><span><strong>Object storage</strong><small>S3-compatible · from €2 / month</small></span><b>↗</b></a>
              <a href="/network"><span className="quick-number">03</span><span><strong>Network path</strong><small>France compute · German public IP</small></span><b>↗</b></a>
            </aside>
          </div>
          <div className="hero-status" aria-label="Service categories"><span className="status-pulse" /> COMPUTE <b>·</b> STORAGE <b>·</b> CONNECTIVITY</div>
        </section>

        <section className="capability-strip" aria-label="Encrypteron capabilities"><div><span>01</span><strong>Virtual private servers</strong><a href="/products">View VPS <b>↗</b></a></div><div><span>02</span><strong>Object storage</strong><a href="/products">View storage <b>↗</b></a></div><div><span>03</span><strong>Network options</strong><a href="#network">Explore network <b>↓</b></a></div></section>

        <section id="network" className="section network-section">
          <SectionHeading eyebrow="01 / Network" title="Hosted in France. Connected through Germany." intro="Our main server is hosted in France. VPS traffic is routed through a tunnel so each VPS can use a Germany-based IP address." />
          <div className="network-grid"><article><span className="card-index">A</span><h3>France-hosted compute</h3><p>Your VPS runs on our main infrastructure in France, providing the compute layer behind your service.</p><div className="line-art" aria-hidden="true"><i /><i /><i /></div></article><article><span className="card-index">B</span><h3>German IP via tunnel</h3><p>Traffic is carried through a tunnel to provide your VPS with a Germany-based IP address.</p><div className="line-art tunnel" aria-hidden="true"><i /><i /><i /></div></article></div>
          <p className="section-note">The server location and IP location are intentionally distinct: compute is hosted in France; the public VPS IP is provided through the German tunnel path.</p>
        </section>

        <section className="section use-cases-section">
          <SectionHeading eyebrow="02 / Built for the work" title="Infrastructure that fits the job." intro="Start with the component you need. Keep the next conversation direct when your requirements become more specific." />
          <div className="use-cases-grid">{useCases.map((useCase) => <article key={useCase.mark}><span>{useCase.mark}</span><h3>{useCase.title}</h3><p>{useCase.text}</p><a href="/products" aria-label={`Explore products for ${useCase.title}`}>Explore <b>↗</b></a></article>)}</div>
        </section>

        <section className="principles-preview"><div><p className="eyebrow">03 / Operating principles</p><h2>The operating model matters.</h2><p>Clarity, deliberate boundaries, and direct conversations are the standards behind the services we offer.</p></div><a className="button" href="/principles">Explore our principles <span aria-hidden="true">↗</span></a></section>

        <section className="contact-section"><p className="eyebrow">Open channel</p><h2>Let’s discuss what you actually need.</h2><a className="button" href="mailto:mail@encrypteron.com">mail@encrypteron.com <span aria-hidden="true">↗</span></a></section>
      </main>
      <Footer />
    </>
  );
}
