import { plans, productTagCatalog } from "@/app/content";

const frenchPlans = {
  "VPS Pulse": { description: "Une configuration VPS pour vos applications et projets.", specs: ["2,75 vCPU (275 %)", "9,5 Go de RAM", "64 Go de disque", "Proxmox · Intel Xeon E3-1275 v5 · DDR4 ECC", "NVMe HP EX950 · 1 To de trafic mensuel", "IPv4 allemande via tunnel"] },
  "VPS One": { description: "Un point de départ pour les petits services et projets personnels.", specs: ["0,5 vCPU (un cœur limité à 50 %)", "1,5 Go de RAM", "25 Go de stockage NVMe M.2", "Proxmox · Intel Xeon E3-1275 v5 · DDR4 ECC", "NVMe HP EX950 · 750 Go de trafic mensuel", "IPv4 allemande via tunnel"] },
  "VPS Neo": { description: "Plus de ressources pour les applications et les environnements de développement.", specs: ["1,5 vCPU (150 % d’un cœur)", "4,5 Go de RAM", "50 Go de stockage NVMe M.2", "Proxmox · Intel Xeon E3-1275 v5 · DDR4 ECC", "NVMe HP EX950 · 1 To de trafic mensuel", "IPv4 allemande via tunnel"] },
  "VPS X": { description: "Une configuration intermédiaire pour les applications en croissance.", specs: ["2,5 vCPU (250 %)", "11,5 Go de RAM", "100 Go de stockage NVMe M.2", "Proxmox · Intel Xeon E3-1275 v5 · DDR4 ECC", "NVMe HP EX950 · 1,25 To de trafic mensuel", "IPv4 allemande via tunnel"] },
  "VPS Pure": { description: "Plus de CPU, de mémoire et de stockage pour les charges plus importantes.", specs: ["4 vCPU (400 %)", "21,5 Go de RAM", "200 Go de stockage NVMe M.2", "Proxmox · Intel Xeon E3-1275 v5 · DDR4 ECC", "NVMe HP EX950 · 1,5 To de trafic mensuel", "IPv4 allemande via tunnel"] },
  "VPS Max": { description: "La configuration la plus importante de cette gamme VPS.", specs: ["6,5 vCPU (650 %)", "32,5 Go de RAM", "300 Go de stockage NVMe M.2", "Proxmox · Intel Xeon E3-1275 v5 · DDR4 ECC", "NVMe HP EX950 · 2 To de trafic mensuel", "IPv4 allemande via tunnel"] },
  "Object Storage 25 GB": { description: "Stockage objet MinIO compatible S3 sur NVMe M.2.", specs: ["25 Go de stockage NVMe M.2", "Stockage objet MinIO", "API compatible S3", "Demande par e-mail avant déploiement"] },
  "Object Storage 50 GB": { description: "Stockage objet MinIO compatible S3 sur NVMe M.2.", specs: ["50 Go de stockage NVMe M.2", "Stockage objet MinIO", "API compatible S3", "Demande par e-mail avant déploiement"] },
  "Object Storage 100 GB": { description: "Stockage objet MinIO compatible S3 sur NVMe M.2.", specs: ["100 Go de stockage NVMe M.2", "Stockage objet MinIO", "API compatible S3", "Demande par e-mail avant déploiement"] },
} as const;

const frenchTags: Record<string, string> = { sale: "ÉCONOMISEZ 60 %", sale80: "ÉCONOMISEZ 80 %", priceDrop: "PRIX EN BAISSE", bestValue: "MEILLEUR CHOIX", recommended: "RECOMMANDÉ", featured: "À LA UNE", soon: "BIENTÔT", limited: "LIMITÉ", beta: "BÊTA", unavailable: "INDISPONIBLE", soldOut: "ÉPUISÉ", maintenance: "MAINTENANCE", attention: "ATTENTION", danger: "DANGER" };

export function PlanCard({ plan, language = "en" }: { plan: (typeof plans)[number]; language?: "en" | "fr" }) {
  const fr = language === "fr";
  const localized = fr ? frenchPlans[plan.name as keyof typeof frenchPlans] : plan;
  const planName = fr ? plan.name.replace("Object Storage", "Stockage objet").replace("GB", "Go") : plan.name;
  const price = fr ? plan.price.replace("€", "").replace(".", ",") + " €" : plan.price;
  const period = plan.vatPercent !== undefined ? (fr ? "/ mois TTC" : "/ month incl. VAT") : (fr ? "/ mois" : plan.period);
  return <article className={plan.starred ? "starred" : plan.highlighted ? "featured" : ""}><div className="plan-tags">{plan.tags.map((tag) => { const config = productTagCatalog[tag]; return <span className={`product-tag tag-${config.tone}`} key={tag}>{fr ? frenchTags[tag] ?? config.label : config.label}</span>; })}</div><p className="plan-type">{fr ? plan.category === "storage" ? "STOCKAGE" : "SERVEUR VIRTUEL" : plan.category === "storage" ? "STORAGE" : "VIRTUAL SERVER"}</p><h3>{planName}</h3><p className="plan-price">{price}<small>{period}</small></p>{plan.wasPrice && <p className="plan-was">{fr ? "Au lieu de" : "Was"} <s>{fr ? plan.wasPrice.replace("€", "").replace(".", ",") + " €" : plan.wasPrice}{fr ? "/ mois" : plan.period}</s></p>}<p className="plan-description">{localized.description}</p><ul>{localized.specs.map((spec) => <li key={spec}><span aria-hidden="true">✓</span>{spec}</li>)}</ul><a className={plan.highlighted ? "button" : "plan-button"} href={`mailto:mail@encrypteron.com?subject=${encodeURIComponent(`${fr ? "Demande Encrypteron" : "Encrypteron"} ${plan.name}`)}`}>{fr ? "Découvrir" : "Choose"} {planName} <span aria-hidden="true">↗</span></a></article>;
}
