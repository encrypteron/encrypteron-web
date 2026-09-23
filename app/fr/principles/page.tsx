import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading";
import { frPrinciples } from "../content";

const practices = [
  { label: "Décrire ce qui existe", text: "Nous alignons la présentation publique sur le service disponible. Capacité, emplacement et chemins réseau sont décrits clairement, sans formules génériques ambiguës." },
  { label: "Rendre les limites explicites", text: "Une exploitation rigoureuse commence par comprendre les connexions, les changements et les points à discuter avant le déploiement." },
  { label: "Partir de votre besoin", text: "Une fiche produit est un point de départ, pas un substitut au contexte. Pour un besoin particulier, échangeons par e-mail sur l’adéquation et la disponibilité." },
];

export default function FrenchPrinciplesPage() {
  return <><Header /><main lang="fr" className="principles-page"><section className="principles-hero"><div className="hero-grid" aria-hidden="true" /><div><p className="eyebrow"><span className="pink-dot" /> Principes Encrypteron</p><h1>L’infrastructure est <em>une pratique.</em></h1><p>Nos principes ne sont pas des badges. Ils guident la description de nos services, les échanges sur vos besoins et la lisibilité de l’infrastructure.</p></div></section><section className="section principle-manifesto"><SectionHeading eyebrow="01 / Principes d’exploitation" title="Les exigences qui guident le service." /><div className="manifesto-grid">{frPrinciples.map((item) => <article key={item.number}><span>{item.number}</span><h2>{item.title}</h2><p>{item.body}</p></article>)}</div></section><section className="principle-practice"><div className="principle-practice-inner"><SectionHeading eyebrow="02 / En pratique" title="Le sens de ces principes." intro="L’objectif est simple : réduire l’écart entre ce que le site annonce et les questions à traiter lors d’un échange sur l’infrastructure." /><div className="practice-list">{practices.map((item, i) => <article key={item.label}><span>0{i + 1}</span><div><h3>{item.label}</h3><p>{item.text}</p></div></article>)}</div></div></section><section className="section principles-contact"><p className="eyebrow">Pour aller plus loin</p><h2>Un besoin en tête ?</h2><p>Décrivez votre projet et ses contraintes. Nous commencerons par les questions concrètes d’infrastructure.</p><a className="button" href="mailto:mail@encrypteron.com?subject=Demande%20infrastructure">Nous contacter <span aria-hidden="true">↗</span></a></section></main><Footer /></>;
}
