import { plans } from "@/app/content";
import { SectionHeading } from "@/components/section-heading";

export function CpuExplainer({ language = "en" }: { language?: "en" | "fr" }) {
  const fr = language === "fr";
  const rows = plans.flatMap((plan) =>
    plan.category === "vps" && plan.cpuQuota !== undefined
      ? [{ name: plan.name, quota: plan.cpuQuota }]
      : [],
  );
  const max = rows.find((plan) => plan.name === "VPS Max");
  if (!max) return null;

  const format = new Intl.NumberFormat(fr ? "fr-FR" : "en-US", { maximumFractionDigits: 2 });
  const visibleCores = Math.ceil(max.quota);
  const limitPercent = max.quota * 100;

  return (
    <section className="section cpu-explainer">
      <SectionHeading
        eyebrow={fr ? "CPU / Comprendre" : "CPU / Explained"}
        title={fr ? "Cœurs visibles et limite CPU." : "Visible cores and CPU limits."}
        intro={fr
          ? "Le nombre de cœurs virtuels affichés dans le VPS et la limite de calcul utilisable sont deux valeurs différentes."
          : "The virtual cores shown inside a VPS and its usable CPU limit are two different values."}
      />
      <div className="cpu-explainer-grid">
        <article className="cpu-explainer-example">
          <p className="eyebrow">VPS Max</p>
          <div className="cpu-explainer-metrics">
            <div><strong>{visibleCores}</strong><span>{fr ? "cœurs visibles" : "visible cores"}</span></div>
            <span aria-hidden="true">→</span>
            <div><strong>{format.format(limitPercent)} %</strong><span>{fr ? "limite CPU totale" : "total CPU limit"}</span></div>
          </div>
          <p>{fr
            ? `Le système voit ${visibleCores} cœurs virtuels. La VM dispose d’un plafond total de ${format.format(limitPercent)} % de temps CPU, où 100 % correspond au temps d’un processeur logique.`
            : `The system sees ${visibleCores} virtual cores. The VM has a total CPU-time cap of ${format.format(limitPercent)}%, where 100% corresponds to the time of one logical processor.`}</p>
          <p>{fr
            ? "Le plafond concerne l’ensemble du VPS ; chaque cœur visible n’est pas limité séparément à un pourcentage fixe."
            : "The cap applies to the whole VPS; each visible core is not separately limited to a fixed percentage."}</p>
          <p>{fr
            ? "Ce quota ne constitue ni une réservation de cœurs physiques ni une garantie de performance. Les performances dépendent notamment du processeur hôte et de sa charge."
            : "This quota is neither a reservation of physical cores nor a performance guarantee. Performance depends on factors including the host processor and its load."}</p>
        </article>
        <div className="cpu-explainer-table-wrap">
          <table className="cpu-explainer-table">
            <caption>{fr ? "Cœurs visibles et limites CPU par forfait" : "Visible cores and CPU limits by plan"}</caption>
            <thead><tr><th scope="col">{fr ? "Forfait" : "Plan"}</th><th scope="col">{fr ? "Cœurs visibles" : "Visible cores"}</th><th scope="col">{fr ? "Limite totale" : "Total limit"}</th></tr></thead>
            <tbody>{rows.map((plan) => <tr key={plan.name}><th scope="row">{plan.name}</th><td>{Math.ceil(plan.quota)}</td><td>{format.format(plan.quota * 100)} %</td></tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
