import { plans } from "@/app/content";
import { SectionHeading } from "@/components/section-heading";

export function RamExplainer({ language = "en" }: { language?: "en" | "fr" }) {
  const fr = language === "fr";
  const rows = plans.flatMap((plan) =>
    plan.category === "vps" && plan.ramGiB !== undefined
      ? [{ name: plan.name, gib: plan.ramGiB }]
      : [],
  );
  const max = rows.find((plan) => plan.name === "VPS Max");
  if (!max) return null;

  const format = new Intl.NumberFormat(fr ? "fr-FR" : "en-US", { maximumFractionDigits: 2 });
  const maxMiB = max.gib * 1024;

  return (
    <section className="section cpu-explainer ram-explainer">
      <SectionHeading
        eyebrow={fr ? "RAM / Comprendre" : "RAM / Explained"}
        title={fr ? "La mémoire en base 1024." : "Memory measured in base 1024."}
        intro={fr
          ? "La RAM des forfaits est exprimée en gibioctets (Gio). Un Gio correspond à 1 024 mébioctets (Mio)."
          : "Plan memory is expressed in gibibytes (GiB). One GiB equals 1,024 mebibytes (MiB)."}
      />
      <div className="cpu-explainer-grid">
        <article className="cpu-explainer-example">
          <p className="eyebrow">VPS Max</p>
          <div className="cpu-explainer-metrics">
            <div><strong>{format.format(max.gib)}</strong><span>{fr ? "Gio de RAM" : "GiB RAM"}</span></div>
            <span aria-hidden="true">× 1 024 →</span>
            <div><strong>{format.format(maxMiB)}</strong><span>{fr ? "Mio configurés" : "MiB configured"}</span></div>
          </div>
          <p>{fr
            ? `VPS Max reçoit ${format.format(max.gib)} × 1 024 = ${format.format(maxMiB)} Mio de mémoire configurée. Ce n’est pas une conversion en base 1 000.`
            : `VPS Max is configured with ${format.format(max.gib)} × 1,024 = ${format.format(maxMiB)} MiB of memory. This is not a base-1,000 conversion.`}</p>
        </article>
        <div className="cpu-explainer-table-wrap">
          <table className="cpu-explainer-table">
            <caption>{fr ? "Conversion de la RAM par forfait" : "RAM conversion by plan"}</caption>
            <thead><tr><th scope="col">{fr ? "Forfait" : "Plan"}</th><th scope="col">{fr ? "RAM (Gio)" : "RAM (GiB)"}</th><th scope="col">{fr ? "Configuration (Mio)" : "Configured (MiB)"}</th></tr></thead>
            <tbody>{rows.map((plan) => <tr key={plan.name}><th scope="row">{plan.name}</th><td>{format.format(plan.gib)}</td><td>{format.format(plan.gib * 1024)}</td></tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
