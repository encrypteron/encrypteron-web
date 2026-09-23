import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading";

export default function NetworkPage() {
  return (
    <>
      <Header />
      <main className="network-page">
        <section className="network-hero">
          <div className="hero-grid" aria-hidden="true" />
          <div>
            <p className="eyebrow"><span className="pink-dot" /> Network architecture</p>
            <h1>France-hosted compute.<br /><em>German public IP.</em></h1>
            <p>VPS compute runs on our infrastructure in France. Its public traffic is presented through a Germany-based IP address via a tunnel path.</p>
          </div>
        </section>

        <section className="section network-explainer">
          <SectionHeading eyebrow="01 / Traffic path" title="How a VPS request reaches its destination." intro="The public IP and the physical compute are intentionally in separate locations. The diagram reflects the path for traffic addressed to a VPS." />
          <div className="network-diagram" aria-label="Client traffic travels to a German public IP, then through a tunnel to France-hosted compute and the VPS">
            <article><span className="diagram-number">01</span><strong>Client</strong><small>A visitor, application, or service connects to your VPS public IP.</small></article>
            <i className="diagram-link" aria-hidden="true">→</i>
            <article className="german-node"><span className="diagram-number">02</span><strong>German public IP</strong><small>The connection reaches the IP address assigned to your VPS in Germany.</small></article>
            <i className="diagram-link" aria-hidden="true">→</i>
            <article className="tunnel-node"><span className="diagram-number">03</span><strong>Tunnel path</strong><small>Traffic continues through the tunnel between the German IP path and France-hosted compute.</small></article>
            <i className="diagram-link" aria-hidden="true">→</i>
            <article><span className="diagram-number">04</span><strong>Your VPS in France</strong><small>The workload runs on the France-hosted infrastructure.</small></article>
          </div>
          <div className="return-path"><span>RETURN PATH</span><p>Responses take the reverse route: VPS in France → tunnel path → German public IP → client. The service therefore presents the Germany-based IP to the public internet.</p></div>
        </section>

        <section className="latency-section">
          <div className="latency-inner">
            <SectionHeading eyebrow="02 / Latency expectations" title="An extra hop is part of the design." intro="A fixed latency figure would be misleading: it depends on the client location, the client ISP or peering, the route to the German public IP, and the tunnel path to France." />
            <div className="latency-grid"><article><span>WHAT TO EXPECT</span><h3>Path length matters.</h3><p>Traffic traverses the German public-IP path and then the tunnel to France. That additional path can add latency compared with an IP that terminates directly at the compute location.</p></article><article><span>WHAT WE DO NOT CLAIM</span><h3>No invented milliseconds.</h3><p>We do not publish a universal ping number, uptime target, or performance guarantee for a route that varies by origin and network conditions.</p></article><article><span>HOW TO VALIDATE</span><h3>Test from your users.</h3><p>Before committing a latency-sensitive workload, ask us for a test target and validate with ping, traceroute, or your own application checks from relevant locations.</p></article></div>
          </div>
        </section>

        <section className="section network-facts"><SectionHeading eyebrow="03 / At a glance" title="A clear separation of roles." /><div><article><span>COMPUTE</span><strong>France</strong><p>Your VPS workload runs on France-hosted infrastructure.</p></article><article><span>PUBLIC IP</span><strong>Germany</strong><p>Your VPS is presented to the public internet with a Germany-based IP address.</p></article><article><span>CONNECTION</span><strong>Tunnel path</strong><p>The tunnel connects the public IP path with the France-hosted compute layer.</p></article></div></section>

        <section className="network-cta"><p className="eyebrow">Need to validate a route?</p><h2>Ask for a network conversation.</h2><a className="button" href="mailto:mail@encrypteron.com?subject=Network%20enquiry">mail@encrypteron.com <span aria-hidden="true">↗</span></a></section>
      </main>
      <Footer />
    </>
  );
}
