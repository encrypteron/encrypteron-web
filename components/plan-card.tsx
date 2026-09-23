import { plans, productTagCatalog } from "@/app/content";

const frenchPlans = {
  "VPS Start": { description: "Un serveur virtuel compact pour de petits services et projets personnels.", specs: ["1 vCPU", "1 Go de RAM", "25 Go de stockage NVMe", "IPv4 allemande via tunnel"] },
  "VPS Build": { description: "Davantage de ressources pour vos applications et environnements en croissance.", specs: ["2 vCPU", "4 Go de RAM", "80 Go de stockage NVMe", "IPv4 allemande via tunnel"] },
  "Object Storage": { description: "Stockage compatible S3, avec une capacité de départ adaptée à vos besoins.", specs: ["250 Go inclus", "API compatible S3", "Étude de l’usage sur demande", "Assistance par e-mail"] },
} as const;

const frenchTags: Record<string, string> = { sale: "ÉCONOMISEZ 60 %", priceDrop: "PRIX EN BAISSE", bestValue: "MEILLEUR CHOIX", recommended: "RECOMMANDÉ", featured: "À LA UNE", soon: "BIENTÔT", limited: "LIMITÉ", beta: "BÊTA", unavailable: "INDISPONIBLE", soldOut: "ÉPUISÉ", maintenance: "MAINTENANCE", attention: "ATTENTION", danger: "DANGER" };

export function PlanCard({ plan, language = "en" }: { plan: (typeof plans)[number]; language?: "en" | "fr" }) {
  const fr = language === "fr";
  const localized = fr ? frenchPlans[plan.name as keyof typeof frenchPlans] : plan;
  const planName = fr && plan.name === "Object Storage" ? "Stockage objet" : plan.name;
  const price = fr ? plan.price.replace("€", "").replace(".", ",") + " €" : plan.price;
  const wasPrice = fr ? plan.wasPrice.replace("€", "").replace(".", ",") + " €" : plan.wasPrice;
  return <article className={plan.highlighted ? "featured" : ""}><div className="plan-tags">{plan.tags.map((tag) => { const config = productTagCatalog[tag]; return <span className={`product-tag tag-${config.tone}`} key={tag}>{fr ? frenchTags[tag] ?? config.label : config.label}</span>; })}</div><p className="plan-type">{fr ? plan.category === "storage" ? "STOCKAGE" : "SERVEUR VIRTUEL" : plan.category === "storage" ? "STORAGE" : "VIRTUAL SERVER"}</p><h3>{planName}</h3><p className="plan-price">{price}<small>{fr ? "/ mois" : plan.period}</small></p><p className="plan-was">{fr ? "Au lieu de" : "Was"} <s>{wasPrice}{fr ? "/ mois" : plan.period}</s></p><p className="plan-description">{localized.description}</p><ul>{localized.specs.map((spec) => <li key={spec}><span aria-hidden="true">✓</span>{spec}</li>)}</ul><a className={plan.highlighted ? "button" : "plan-button"} href={`mailto:mail@encrypteron.com?subject=${encodeURIComponent(`${fr ? "Demande Encrypteron" : "Encrypteron"} ${plan.name}`)}`}>{fr ? "Découvrir" : "Choose"} {planName} <span aria-hidden="true">↗</span></a></article>;
}
