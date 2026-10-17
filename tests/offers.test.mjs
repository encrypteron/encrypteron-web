import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import { renderToStaticMarkup } from "react-dom/server";
import ts from "typescript";

const resolveModule = createRequire(import.meta.url);

function load(file, imports = {}) {
  const { outputText } = ts.transpileModule(readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  });
  const exports = {};
  runInNewContext(outputText, { exports, require: (name) => imports[name] ?? resolveModule(name) });
  return exports;
}

const content = load("app/content.ts");
const french = load("app/fr/content.ts", { "@/app/content": content });
const { PlanCard } = load("components/plan-card.tsx", { "@/app/content": content });

test("starting prices follow the cheapest plan without reordering the catalogue", () => {
  const names = content.plans.map((plan) => plan.name).join();
  assert.equal(content.getStartingPlan("vps").price, "€4.80");
  assert.equal(content.getStartingPlan("storage").price, "€1");
  assert.equal(content.plans.map((plan) => plan.name).join(), names);
  content.plans.push({ ...content.plans[0], name: "Lower-priced VPS", price: "€0.50" });
  try {
    assert.equal(content.getStartingPlan("vps").price, "€0.50");
  } finally {
    content.plans.pop();
  }
});

test("confirmed VPS prices and maximum speeds render in both languages", () => {
  const expected = {
    "VPS One": ["€4.80", 100], "VPS Neo": ["€8.40", 200],
    "VPS Pulse": ["€12.60", 300], "VPS X": ["€16.80", 350],
    "VPS Pure": ["€25.20", 450], "VPS Max": ["€37.20", 500],
  };
  assert.equal(content.plans.filter((plan) => plan.category === "vps").length, 6);
  for (const plan of content.plans) {
    assert.ok(plan.tags.includes("soon"), plan.name);
    if (plan.category === "vps") {
      assert.equal(plan.price, expected[plan.name][0]);
      assert.equal(plan.maxMbps, expected[plan.name][1]);
    }
    for (const language of ["en", "fr"]) {
      const html = renderToStaticMarkup(PlanCard({ plan, language }));
      assert.ok(html.includes(language === "fr" ? plan.price.replace("€", "").replace(".", ",") + " €" : plan.price));
      assert.match(html, language === "fr" ? /BIENTÔT/ : /COMING SOON/);
      assert.match(html, language === "fr" ? /Se renseigner sur/ : /Ask about/);
      if (plan.category === "vps") {
        assert.ok(html.includes(language === "fr" ? `Débit maximal : ${plan.maxMbps} Mbit/s` : `Maximum speed: ${plan.maxMbps} Mbps`));
        assert.match(html, language === "fr" ? /partagée via tunnel incluse/ : /Shared German IPv4 via tunnel included/);
      } else {
        assert.doesNotMatch(html, /SAVE 80%|ÉCONOMISEZ 80 %|plan-was|Maximum speed|Débit maximal/);
      }
    }
  }
});

test("planned service conditions cover ports, traffic, support and unavailable services", () => {
  assert.equal(content.vpsNetworkOptions.dedicatedIpv4Price, "€2");
  assert.equal(content.vpsNetworkOptions.sharedIpv4PortLimit, 15);
  const en = content.vpsServiceConditions.map((condition) => condition.body).join(" ");
  const fr = french.frVpsServiceConditions.map((condition) => condition.body).join(" ");
  for (const pattern of [/€2\/month/, /15 ports/, /Incoming and outgoing/, /first day of each month/, /24–72 hours/, /IPv6 is not available/, /not available yet/]) assert.match(en, pattern);
  for (const pattern of [/2 €\/mois/, /15 ports/, /entrant et sortant/, /premier jour de chaque mois/, /24 à 72 h/, /IPv6 n’est pas disponible/, /pas encore disponibles/]) assert.match(fr, pattern);
  assert.doesNotMatch(en + fr, /95|centile|percentile/i);
  assert.match(content.launchNotice, /not available to order/);
  assert.match(french.frLaunchNotice, /ne sont pas disponibles à la commande/);
});
