# Encrypteron technical map

## Purpose and boundaries

Encrypteron is an informational infrastructure website for VPS, Object Storage, and a tunnelled network path. It is not a customer portal, checkout, ordering backend, status service, analytics implementation, or customer-support system. Public enquiries are handled by email, and all availability, provisioning, and final commercial scope are confirmed outside the site.

Keep all public language specific and supportable. Never add an invented uptime figure, SLA, latency number, encryption claim, physical-location claim, certification, region, data-centre tier, capacity number, or future release date.

### Network facts that must remain accurate

- VPS compute is hosted on the France-hosted infrastructure.
- VPS public IPv4 addresses are Germany-based and provided through a tunnel path.
- Do not call VPS physically hosted in Germany.
- Public traffic follows: client → German public IP → tunnel path → France-hosted VPS; responses use the reverse path.
- The tunnel introduces an additional hop. Latency depends on client origin, ISP/peering, route and tunnel path; do not publish a fixed latency result without verified data.

## Routes and page responsibilities

| Route | What belongs there | Source |
| --- | --- | --- |
| `/` | Brand home: left-aligned hero, current service overview, network teaser, use cases, principles preview and contact CTA. | `app/page.tsx` |
| `/products` | Product index only: current service cards and explicitly non-orderable future-service cards. It contains no prices, plans, or configuration controls. | `app/products/page.tsx` |
| `/vps` | VPS plans, savings/price tags, supported images, BYO ISO guidance and Custom VM email builder. | `app/vps/page.tsx` |
| `/storage` | Object Storage plan and concise product details. | `app/storage/page.tsx` |
| `/network` | Detailed traffic-path diagram, return path and honest latency expectations. | `app/network/page.tsx` |
| `/principles` | Operating principles and practical explanation. | `app/principles/page.tsx` |
| `/privacy`, `/terms`, `/imprint` | Draft privacy notice, website terms, and imprint/contact details. Confirm all marked business, hosting, retention, and jurisdiction details before commercial launch. | `app/legal-page.tsx`, route pages |
| `/fr` and `/fr/*` | French-localized equivalents of the public pages, including the privacy notice, terms, imprint, product content, prices, and custom VM email builder. | `app/fr/**` |

`WIKI` intentionally has no route or action. It is displayed as “soon” in the navigation. `ROOT` is also disabled and reserved exclusively for the future control panel. Do not activate either item unless explicitly asked.

## Current and future catalogue

Current service categories on `/products`:

1. Virtual private servers → `/vps`
2. Object Storage → `/storage`
3. Network path → `/network`

Future-category cards are directional only and not orderable: Dedicated compute, Website hosting, and Game hosting. They must have no public price, release date, order CTA, or availability promise.

VPS-specific capabilities such as system images and Custom VM are part of `/vps`, not independent product pages.

## Commercial data and tags

`app/content.ts` is the only source for public commercial content:

- VPS Start: €1.60/month, previously €4.
- VPS Build: €3.60/month, previously €9.
- Object Storage: €2/month, previously €5.

All price cards are implemented through `components/plan-card.tsx`. Do not duplicate plan markup or prices in route pages.

`productTagCatalog` in `app/content.ts` controls all display tags. Add or edit a catalog entry, then add its key to a plan/category `tags` array. Available families include savings/off percentages, price dropped/locked, recommended, featured, new, beta, trial, pre-order, coming soon, limited, low availability, sold out, off, disabled, legacy, deprecated, attention, maintenance, unavailable, and danger.

Use `danger`, `sold out`, `unavailable`, `off`, or `disabled` only for a factual condition. Use `warn` only for a real caveat. Current live plan labels are `SAVE 60%`, `PRICE DROPPED`, plus `BEST VALUE` or `RECOMMENDED` where configured.

## VPS images and Custom VM

Only list these images unless the product owner changes the offering:

- Debian 13, 12, 11
- Ubuntu 26.04, 24.04, 22.04, 20.04 LTS
- Alpine Linux 3.21 and 3.20
- Bring your own: Custom ISO files, rescue environment, cloud-init image

Multiple custom ISO files are permitted only when their combined size is at most **3 GB**. Always describe it as a combined total, not a per-file allowance. Image availability and custom ISO suitability are confirmed during provisioning.

`components/custom-vm-builder.tsx` is client-side only. It prepares a pre-filled `mailto:` enquiry with CPU, memory, NVMe and image choices; it does not provision a VM or calculate a binding price.

## Theme, layout, and accessibility

The browser cookies are `theme=dark|light`, `language=en|fr`, and `legal_notice_version=<version>:<language>`; each is a first-party operational cookie with a maximum lifetime of one year. The latter remembers acknowledgement of the matching language version of the Terms and Privacy Notice; it does not identify a visitor or constitute consent to optional tracking.

- When no cookie exists, `app/layout.tsx` uses `prefers-color-scheme` before paint, and the welcome chooser preselects the system theme.
- On first visit, the welcome screen asks the visitor to choose a language, then a theme, then acknowledge the matching Terms and Privacy Notice. The acknowledgement is versioned per language; visitors must acknowledge the current language version before entering site routes.
- English routes remain at `/` and French routes use `/fr`. The language selector switches the current route where a translation exists. The Terms and Privacy Notice routes remain accessible before acknowledgement so the visitor can read them. The welcome screen records the language, acknowledgement, and chosen theme in cookies only after Continue is selected.
- The header language selector persists a language choice immediately and navigates to the corresponding route. Changing to a language whose legal notice has not been acknowledged opens the entry gate again.
- `components/theme-provider.tsx` updates the document language after hydration; `app/fr/layout.tsx` marks the French route subtree with `lang="fr"` for server-rendered content.
- A header-toggle choice persists a theme cookie preference.
- With no cookie, `components/theme-provider.tsx` also follows system theme changes.
- Preserve the before-paint logic to prevent a color flash. Keep `data-scroll-behavior="smooth"` on the root `<html>` element because smooth scrolling is configured in `app/globals.css` and Next.js uses the attribute to manage route transitions.

Page hero titles are centered on Products, VPS, Storage, Network and Principles; the home hero remains left-aligned. Do not force arbitrary headings to one line: wrapping is expected when a title cannot fit. Mobile layouts stack grids/cards, hide desktop nav, and use the `MENU ^` control in `components/header.tsx` to show the accessible mobile navigation.

Use semantic HTML, visible focus states, keyboard-operable controls, adequate contrast, and `prefers-reduced-motion` support. Keep components responsive from small phones upward.

## File ownership

| File | Responsibility |
| --- | --- |
| `app/layout.tsx` | Metadata, server cookie reads for theme and legal acknowledgement, system-theme before-paint script and `ThemeProvider`. |
| `app/globals.css` | All tokens, page layouts, light/dark styling, responsive behavior, mobile menu, diagrams, focus and reduced-motion rules. |
| `app/content.ts` | Navigation, service/future-service cards, prices, tag catalog, plans, images, principles and use cases. |
| `app/page.tsx` | Home composition. |
| `app/products/page.tsx` | Price-free product directory and future-service index. |
| `app/vps/page.tsx` | VPS product page. |
| `app/storage/page.tsx` | Object Storage product page. |
| `app/network/page.tsx` | Network explanation page. |
| `app/principles/page.tsx` | Principles page. |
| `app/legal-page.tsx` and legal route pages | Shared draft legal layout plus Terms, Privacy Notice, and imprint/contact content. |
| `app/legal-constants.ts` | Current legal acknowledgement version; bump when visitors need to acknowledge changed legal documents. |
| `app/fr/**` | French route pages, metadata, and translated public content. Keep facts and prices aligned with their English equivalents and this file. |
| `components/header.tsx` | Desktop/mobile navigation, disabled Wiki/ROOT, theme toggle and email CTAs. |
| `components/footer.tsx` | Brand signature and legal navigation. |
| `components/section-heading.tsx` | Reusable eyebrow/title/intro block. |
| `components/theme-provider.tsx` | Theme state, system-theme fallback, legal acknowledgement entry gate, and cookie persistence. |
| `components/plan-card.tsx` | Reusable tag-aware plan card. |
| `components/custom-vm-builder.tsx` | Interactive Custom VM enquiry builder. |
| `package.json` | Project scripts and dependencies. |
| `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `next-env.d.ts` | Framework, TypeScript and lint configuration. |
| `rollback-before-redesign/` | Pre-redesign source/config rollback snapshot. It excludes `node_modules` and `.next`, which are regenerated by install/build commands. Restore only on explicit request. |

## Contacts and legal requirements

- Public email CTA: `mailto:mail@encrypteron.com`
- `root@encrypteron.com` is not support email and is reserved for ROOT only.
- Legal drafts must not be represented as final until registered entity, address, company/VAT details, governing law, hosting/CDN and email providers, log fields and retention, security controls, and final policy/terms are confirmed. Never promise credit-only refunds where mandatory consumer refund rights apply.

## Project status — 2026-09-23

- English and French public routes are implemented. The French route set covers the home page, products, VPS, storage, network, principles, privacy, terms, and imprint.
- The welcome gate order is language → theme → acknowledgement of the matching language version of the Terms and Privacy Notice. French and English acknowledgements are tracked separately in the version cookie. Terms and Privacy routes remain readable before acknowledgement.
- The site legal pages are still drafts. Seller identity and jurisdiction, hosting/email providers, actual technical log fields and retention, and deployed security controls remain unverified. Do not remove draft notices or describe controls/collection as final until those facts are supplied and checked.
- Latest checks after the English/French route implementation: `npm run lint`, `npm run typecheck`, and `npm run build` passed. These checks establish compilation, not legal compliance or deployment security.

## Commands

- `npm run dev` — development server
- `npm run typecheck` — strict TypeScript check
- `npm run lint` — ESLint check
- `npm run build` — production build
- `npm run start` — production server

## Maintenance rule

Update this file in the same change whenever routes, navigation, file ownership, pricing, tags, available images, network behavior, theme behavior, rollback assets, or commands change.
