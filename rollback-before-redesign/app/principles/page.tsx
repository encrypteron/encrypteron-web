import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading";
import { principles } from "../content";

const practices = [
  { label: "Describe the present", text: "We keep the public description close to the service that exists today. Capacity, location, and network paths are stated plainly rather than implied through generic platform language." },
  { label: "Keep boundaries explicit", text: "A careful operating approach starts with understanding what is connected, what changes, and what needs a direct conversation before it is provisioned." },
  { label: "Start with the requirement", text: "A product card is a starting point, not a substitute for context. For non-standard requirements, the next step is an email conversation about fit and availability." },
];

export default function PrinciplesPage() {
  return (
    <>
      <Header />
      <main className="principles-page">
        <section className="principles-hero"><div className="hero-grid" aria-hidden="true" /><div><p className="eyebrow"><span className="pink-dot" /> Encrypteron principles</p><h1>Infrastructure is<br /><em>an operating practice.</em></h1><p>Our principles are not a badge set. They shape how we describe services, discuss requirements, and make infrastructure easier to understand.</p></div></section>
        <section className="section principle-manifesto"><SectionHeading eyebrow="01 / Operating principles" title="The standards behind the service." /><div className="manifesto-grid">{principles.map((principle) => <article key={principle.number}><span>{principle.number}</span><h2>{principle.title}</h2><p>{principle.body}</p></article>)}</div></section>
        <section className="principle-practice"><div className="principle-practice-inner"><SectionHeading eyebrow="02 / In practice" title="What these words are meant to do." intro="The point is simple: reduce the gap between what the site says and what an infrastructure conversation actually needs to cover." /><div className="practice-list">{practices.map((practice, index) => <article key={practice.label}><span>0{index + 1}</span><div><h3>{practice.label}</h3><p>{practice.text}</p></div></article>)}</div></div></section>
        <section className="section principles-contact"><p className="eyebrow">A direct next step</p><h2>Have a requirement in mind?</h2><p>Tell us what you are building and the constraints that matter. We will start with the actual infrastructure question.</p><a className="button" href="mailto:mail@encrypteron.com?subject=Infrastructure%20enquiry">Start a conversation <span aria-hidden="true">↗</span></a></section>
      </main>
      <Footer />
    </>
  );
}
