# Encrypteron — Repository Guidelines & Technical Reference

> Instructions for coding agents working on the Encrypteron public website. Keep changes scoped, preserve the constraints below, and verify facts against the current repository before publishing. This is a working guide, not proof that a feature is deployed or a legal requirement is satisfied.

## 1. Agent workflow (read first)

1. **Inspect before editing.** Read the affected routes, shared components, content modules, and relevant `wiki/*.md` guidance. Do not infer behavior from this file alone.
2. **Make the smallest coherent change.** Follow existing Next.js App Router/React/TypeScript patterns; use two-space indentation and existing kebab-case filenames. Reuse components and avoid duplicating business data or UI logic.
3. **Keep locales synchronized.** For public changes, update English (`app/`) and French (`app/fr/`) equivalents in the same change; preserve meaning, prices, capabilities, tags, UX, and metadata, with idiomatic translation. French Wiki pages exist only for articles explicitly translated.
4. **Protect established boundaries.** No invented claims, secrets, checkout/provisioning/customer portal, or unrequested edits to rollback snapshots. Do not silently resolve conflicts between documented promises and implementation: inspect the content/code and ask for clarification when a business-critical fact remains contradictory.
5. **Verify before reporting success.** Run `npm run lint` and `npm run typecheck` after code edits. Run `npm run build` for routes, metadata, shared rendering, configuration, or other significant changes. Offer checks run with `node --test --test-isolation=none tests/offers.test.mjs`; consult `wiki/TESTING.md` for Wiki/deployment checks. Say which checks actually ran and whether they passed; do not equate a passing build with production security, legal compliance, or visual QA.
6. **Review the result.** Check relevant English/French routes, links, mobile/desktop layout, keyboard navigation, and theme behavior when affected. In PRs, explain the user-facing change, list checks, reference related issues, and attach desktop/mobile screenshots for visual changes.
7. **Keep this guide current.** Update it with changes to routes, filenames, commercial rules, network architecture, tags, images, theme/legal gate, Wiki boundaries, commands, or essential design constraints. Prefer concise, imperative commit messages; no formal commit convention is established.

## 2. Product scope and non-negotiable claims

- This is an **informational, pre-launch** website. Encrypteron is a personal project based in France, before business formation. VPS and S3-compatible Object Storage are not available to order and await the future ROOT panel. Publish no launch date. Email is for information enquiries only; do not imply current provisioning or active ticket support. Reuse `launchNotice` / `frLaunchNotice` on public offer pages.
- **Do not introduce** customer accounts, an ordering/checkout backend, live provisioning, an operational status service, analytics/tracking, or a support ticket system without explicit product-owner approval.
- Public text must be precise and supportable. Never fabricate or imply guarantees for uptime, SLA, latency, encryption, physical location, data-centre tier, certifications, regions, capacity, future launch dates, or service availability.
- VPS compute is **physically hosted in France** using Proxmox, an **Intel Xeon E3-1275 v5**, **DDR4 ECC**, and **HP EX950 NVMe**. The VPS public **IPv4 is Germany-based** and reaches France-hosted compute through a tunnel. Never describe the VPS as physically hosted in Germany.
- Network path: **client → German public IPv4 → tunnel → France-hosted VPS**; responses return along the reverse path. The extra hop can affect latency, which depends on client location, ISP/peering, routing, and tunnel conditions. Do not publish unverified latency benchmarks.
- Object Storage uses **MinIO**, is **S3-compatible**, and offers NVMe M.2-backed storage as described by the current product content.
- The **WIKI** is public and read-only. **ROOT** remains disabled in public navigation and is reserved for a future control panel. `/root/support` is a planned ticket-support path, not an existing route; mention it as future text only and do not add an active link or implement the portal without a separate request.

## 3. Repository structure and ownership

| Area | Primary responsibility |
| --- | --- |
| `app/` and `app/fr/` | English and French App Router pages, layouts, metadata, and localized public content. |
| `app/content.ts`, `app/fr/content.ts` | Product, plan, price, tag, image, navigation, and localized text definitions as actually implemented. Inspect both; do not create separate route-level values. |
| `app/layout.tsx`, `app/fr/layout.tsx` | Root metadata/cookies/theme bootstrap and French server-rendered language marker. |
| `app/globals.css` | Design tokens, layout, light/dark themes, responsive behavior, diagrams, accessibility, reduced motion. |
| `app/legal-page.tsx`, `app/legal-constants.ts` | Shared legal-page layout and legal acknowledgement version. |
| `components/` | Shared UI: header, footer, theme provider, section heading, plan cards, CPU/RAM explainers, Custom VM builder, Wiki Markdown/search. |
| `wiki/content.ts`, `wiki/*.md` | Reviewed published Wiki content and Wiki architecture/security/testing/reference documentation. |
| `public/assets/` | Public logo and icon assets served under `/assets/`. Confirm filesystem paths before changing imports. |
| `package.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs` | Scripts and framework/compiler/lint configuration. |
| `rollback-before-redesign/` | Old source/config reference; **never modify or restore unless explicitly instructed**. `node_modules` and `.next` are regenerated, not part of the snapshot. |

Use the existing component owners: `components/plan-card.tsx` for plan UI, `components/cpu-explainer.tsx` and `ram-explainer.tsx` for quota explanations, `components/custom-vm-builder.tsx` for Custom VM enquiries, `components/theme-provider.tsx` for preferences and entry gate, `components/header.tsx` for navigation, and `components/wiki-markdown.tsx` / `wiki-search.tsx` for guides.

### Route responsibilities

| Route (French counterpart under `/fr`) | Required scope |
| --- | --- |
| `/` | Left-aligned home hero, services, network teaser, use cases, principles preview, contact CTA. |
| `/products` | Product and non-orderable future-service directory **without plans, prices, or configuration controls**. |
| `/vps` | Plans, price/savings tags, CPU/RAM explanations, images, ISO rules, Custom VM email enquiry. |
| `/storage` | Object Storage plans and product details. |
| `/network` | Honest traffic-path and return-path diagram; qualified latency description. |
| `/principles` | Operating principles and explanations. |
| `/wiki`, `/wiki/[slug]` | Read-only guides; `/fr/wiki` and `/fr/wiki/[slug]` only when translations are reviewed. |
| `/privacy`, `/terms`, `/imprint` | Draft legal policies and public contact details, not finalized legal assertions. |

Preview categories on `/products`: planned **VPS**, planned **Object Storage**, and the VPS **Network path**. Do not label them “Available now”. Future-only cards: **Dedicated compute**, **Website hosting**, **Game hosting**. Future cards must not imply an orderable offering, public price, release date, availability guarantee, or order CTA. OS images and Custom VM belong under `/vps`, not standalone products.

## 4. Commercial data and presentation

**Source-of-truth rule:** Inspect the current content modules before quoting or changing prices/capacities. Treat the figures below as a **reference snapshot from the supplied technical map**, not a substitute for repository data or current owner confirmation. Keep EN/FR content aligned, and use shared components rather than hardcoded route prices.

| Product | Planned monthly price (VAT incl. where specified) | CPU | RAM | Storage | Monthly traffic | Max. speed per VPS |
| --- | --- | --- | --- | --- | --- | --- |
| VPS Pulse | €12.60 incl. VAT | 2.75 vCPU | 9.5 GiB | 64 GB | 1 TB | 300 Mbit/s |
| VPS One | €4.80 incl. VAT (€4 excl. 20% VAT) | 0.5 vCPU | 1.5 GiB | 25 GB NVMe | 750 GB | 100 Mbit/s |
| VPS Neo | €8.40 incl. VAT (€7 excl. VAT) | 1.5 vCPU | 4.5 GiB | 50 GB NVMe | 1 TB | 200 Mbit/s |
| VPS X | €16.80 incl. VAT (€14 excl. VAT) | 2.5 vCPU | 11.5 GiB | 100 GB NVMe | 1.25 TB | 350 Mbit/s |
| VPS Pure | €25.20 incl. VAT (€21 excl. VAT) | 4 vCPU | 21.5 GiB | 200 GB NVMe | 1.5 TB | 450 Mbit/s |
| VPS Max | €37.20 incl. VAT (€31 excl. VAT) | 6.5 vCPU | 32.5 GiB | 300 GB NVMe | 2 TB | 500 Mbit/s |
| Object Storage 25 GB | €1 | — | — | 25 GB NVMe M.2 | — | — |
| Object Storage 50 GB | €10 | — | — | 50 GB NVMe M.2 | — | — |
| Object Storage 100 GB | €20 | — | — | 100 GB NVMe M.2 | — | — |

- Render pricing via `components/plan-card.tsx`; label all prices as planned/indicative and mark every plan `COMING SOON` / `BIENTÔT`. VPS prices include shared IPv4 and are shown VAT-inclusive, without an ex-VAT line. Keep Pulse first with yellow outlined `★ STAR`, X `RECOMMENDED`, and Storage 25 GB `RECOMMENDED`. Do not show the old €5 storage price or `SAVE 80%`: promotion duration/renewal terms are unconfirmed. Derive home and storage starting prices with `getStartingPlan` rather than hardcoding them. Plan-card actions are email information enquiries, never orders.
- Manage display tags via `productTagCatalog` and each product's `tags` keys. Supported families include savings/percentage off, price dropped/locked, recommended/featured/new, beta/trial/pre-order/coming soon, limited/low availability/sold out, disabled/off/unavailable, legacy/deprecated, attention/maintenance, and danger. Use alarming or unavailable labels **only when true**; `warn` requires a real caveat.
- **Known source conflict:** The old map's general sentence says every VPS has **500 GB/month**, while its per-plan entries specify **750 GB–2 TB**. Do **not** repeat the 500 GB blanket claim. Check the live plan fields and confirm any discrepancy before publishing; do not alter plan allowances merely to reconcile this guide.
- Position Pulse (€12.60 incl. VAT) between Neo (€8.40) and X (€16.80). Pulse has a higher CPU quota than X; X offers more RAM, storage, and traffic. Describe the tradeoff explicitly rather than implying every plan is a CPU upgrade. Max has no `BEST VALUE` badge.
- VPS conditions confirmed by the owner: self-managed by the customer; no included backups; no DDoS protection; incoming + outgoing traffic count towards the listed monthly allowance; reset on the first calendar day of each month; blocked on overage until reset or an agreed support intervention; additional traffic quoted on request. Planned ROOT tickets have an indicative 24–72-hour response time with no fixed support days. Keep `vpsServiceConditions` / `frVpsServiceConditions` synchronized.
- VPS networking: use each plan’s `maxMbps` for maximum speed (not a guaranteed minimum). Shared German IPv4 via tunnel is included; dedicated IPv4 costs an additional €2/month incl. VAT; IPv6 is not available at this stage. Keep `vpsNetworkOptions` as the shared source for the option price and 15-port limit. Shared IPv4 gets random available, non-reserved initial public ports; customers may request their preferred available ports for SSH or other services, up to 15 per VPS. Link to the matching-language network page for latency testing.
- VPS CPU: `cpuQuota` represents **total VM CPU-time quota**, not a per-core limit. The guest sees `ceil(cpuQuota)` virtual cores; e.g. 6.5 vCPU → 7 visible cores with a 650% total quota. Use shared CPU explainer. A quota is a CPU-time cap, not a physical-core reservation or a performance guarantee; host CPU and load affect performance.
- VPS memory: `ramGiB` is binary; **1 GiB = 1,024 MiB**, and **32.5 GiB = 33,280 MiB**. Use GiB/MiB in English, Gio/Mio in French; do not interchange RAM units with storage/traffic units.

## 5. VPS images and Custom VM constraints

- Supported listing from the supplied map: **Debian 13/12/11; Ubuntu 26.04/24.04/22.04/20.04 LTS; Alpine Linux 3.21/3.20**; custom ISO, rescue environment, or cloud-init image. Do not add unapproved choices or guarantee all images can be provisioned.
- Multiple customer ISOs are allowed only if their **combined size is at most 3 GB** (not 3 GB each). Confirm image compatibility and availability during provisioning.
- `components/custom-vm-builder.tsx` runs **client-side only** and generates a pre-launch information `mailto:` enquiry: **no actual provisioning, binding quote, checkout, or backend**. The enquiry and summary specify shared IPv4; the dedicated option price comes from `vpsNetworkOptions`. Keep the unavailability notice visible.
- Builder options: **0.5–7 vCPU in steps of 0.5; 0.5–48 GiB in steps of 0.5; disks 25/50/80/160/320/500/1000 GB NVMe**. Keep UI selections and enquiry summaries consistent between French and English; label RAM Gio/GiB appropriately.

## 6. Language, theme, layout, and accessibility

- English site lives at `/`; French at `/fr`. Language switching should preserve the matching route when available and handle untranslated Wiki articles accurately.
- First-visit gate sequence: **language → theme → acknowledgement of the matching-language Terms and Privacy Notice**. Both legal pages must remain accessible before acknowledgement. The acknowledgement is versioned **per language**; a switch to an unacknowledged version/language reopens the gate.
- First-party operational cookies (max one year): `theme=dark|light`, `language=en|fr`, `legal_notice_version=<version>:<language>`. The legal cookie records acknowledgement, **not consent to optional tracking**. The welcome gate persists its selections only after Continue; header language choices persist immediately. Follow current code for exact handling.
- Without a theme cookie, use `prefers-color-scheme` **before paint** and track system-theme changes; prevent flashing. Preserve the root `<html data-scroll-behavior="smooth">` behavior, with smooth scrolling in `app/globals.css`.
- `components/theme-provider.tsx` maintains theme/language/gate state; `app/fr/layout.tsx` supplies a French-language server-rendered subtree.
- Brand assets: the shared pink stack mark is `encrypteron-notext.png`; the wordmark text adapts to the active theme in `components/brand-logo.tsx`.
- Home hero **left-aligned**; Products/VPS/Storage/Network/Principles hero headings **centered**. Allow natural heading wrapping. Mobile stacks grids, hides desktop navigation, and uses accessible `MENU ^`. At widths ≤360 px, hide the separate header contact button, **not** the menu's email link.
- Use semantic HTML, meaningful labels, sufficient contrast, keyboard controls, visible focus rings, and reduced-motion preferences. Test small mobile widths as well as desktop.

## 7. Wiki, privacy, and operational safety

- Wiki is a **read-only public guide** with published indexes/search and article pages; use the existing safe Markdown renderer. Review `wiki/*.md` and `wiki/TESTING.md` before modifying article publishing, Markdown, search, security models, or deployment.
- **Legal pages are drafts**, not signed-off policies. Before describing them as final, verify registered seller identity/address, company and VAT details, jurisdiction/governing law, hosting/CDN/email providers, real log fields and retention, actual security controls, and final terms. Never promise credit-only refunds in conflict with mandatory consumer rights.
- Public contact is **`mailto:mail@encrypteron.com`**. **`root@encrypteron.com` is reserved for ROOT**, not customer support.
- Never commit or expose credentials, API tokens, private keys, session data, or other secrets. Avoid collecting customer information or adding tracking without an explicit, reviewed requirement.

## 8. Commands and acceptance checklist

```bash
npm run dev        # local development
npm run lint       # ESLint
npm run typecheck  # strict TypeScript
node --test --test-isolation=none tests/offers.test.mjs  # offer pricing, networking, and localized card checks
npm run build      # production build
npm run start      # serve the production build
```

Before completion, verify that the change:

- respects page ownership and reuses shared components/content;
- preserves **France-hosted VPS + German IPv4 via tunnel** and makes no unverified promises;
- keeps EN/FR page data, links, metadata, tags, and terminology consistent;
- preserves welcome gate, cookies, keyboard access, responsive layout, and reduced motion if touched;
- avoids new ordering, provisioning, tracking, or active ROOT behavior;
- leaves legal drafts and the rollback snapshot intact unless explicitly authorized;
- reports actual lint/typecheck/build/manual-test outcomes, including any unrun checks.

### Historical information: do not treat as current verification

The supplied technical map dated **September 2026** reported successful lint/typecheck/build checks and a local audit of **22 routes** and **34 internal links**. These are historical results only; rerun appropriate checks on the current checkout. The documented site/legal/security status may have changed since then.
