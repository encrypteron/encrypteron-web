# Encrypteron technical map

## Product intent

Encrypteron is a compact, security-minded infrastructure marketing site. It presents VPS, object storage, and network connectivity without a customer portal, ordering backend, analytics, status service, availability promise, or invented reliability claims. A visitor enquires directly by email; provisioning and commercial confirmation occur outside this site.

The core operational model is deliberately stated where relevant:

- VPS compute runs on the France-hosted infrastructure.
- Each public VPS address is Germany-based and presented through a tunnel path.
- The public-IP location and compute location are separate. Do not describe the VPS as physically hosted in Germany.
- The tunnel creates an additional network hop. Do not publish a generic latency number, uptime target, SLA, encryption claim, or performance guarantee unless supplied and verified.

## Live routes

| Route | Purpose | Source |
| --- | --- | --- |
| `/` | Brand home: positioning, service overview, network teaser, use cases, principles and email CTA. | `app/page.tsx` |
| `/products` | Product catalogue: VPS, object storage, prices, operating-system images, and the custom-VM email builder. | `app/products/page.tsx` |
| `/network` | Network architecture: Germany public IP → tunnel path → France VPS diagram, return path and latency guidance. | `app/network/page.tsx` |
| `/principles` | Encrypteron operating principles and their practical meaning. | `app/principles/page.tsx` |
| `/privacy` | Development-only privacy placeholder. | `app/privacy/page.tsx` |
| `/terms` | Development-only terms placeholder. | `app/terms/page.tsx` |
| `/imprint` | Development-only imprint/contact placeholder. | `app/imprint/page.tsx` |

There is no `/wiki` route yet. `WIKI` is intentionally a non-interactive, visible “soon” item in the header. `ROOT` is also intentionally non-interactive and reserved for a future control panel. Do not add a destination for either without an explicit request.

## File map

| File | Responsibility |
| --- | --- |
| `app/layout.tsx` | Server-reads `theme` cookie before paint, applies the initial HTML theme class, and mounts the provider. |
| `app/globals.css` | Design tokens, light/dark styles, layout, responsive states, diagrams, focus states, and reduced-motion rules. |
| `app/content.ts` | Single source for navigation, services, VPS/storage commercial copy, prices, image catalogue, principles and home use cases. |
| `app/page.tsx` | Home route composition. |
| `app/products/page.tsx` | Products route composition. |
| `app/network/page.tsx` | Network route composition. |
| `app/principles/page.tsx` | Principles route composition. |
| `app/legal-page.tsx` | Reusable legal-page shell and required launch warning. |
| `app/privacy/page.tsx` | Privacy placeholder content. |
| `app/terms/page.tsx` | Terms placeholder content. |
| `app/imprint/page.tsx` | Imprint/contact placeholder content. |
| `components/header.tsx` | Logo, navigation, disabled ROOT/WIKI UI, theme control, email CTA. |
| `components/footer.tsx` | Signature footer and legal links. |
| `components/section-heading.tsx` | Shared eyebrow, heading and intro block. |
| `components/theme-provider.tsx` | First-visit theme selector, client theme state and `theme` cookie persistence. |
| `components/custom-vm-builder.tsx` | Client-side custom VM selector that prepares a scoped enquiry email; it does not provision a VM or calculate a binding price. |
| `package.json` | Scripts and pinned Next.js/React/TypeScript dependencies. |
| `next.config.ts` | Next.js configuration. |
| `tsconfig.json` | Strict TypeScript configuration. |
| `eslint.config.mjs` | ESLint flat configuration. |
| `next-env.d.ts` | Next.js generated TypeScript declarations; do not manually edit. |

## Commercial and image data

`app/content.ts` holds current public prices: VPS Start €3.20/month, VPS Build €7.20/month, and Object Storage €5/month. Update it rather than duplicating numbers in JSX.

Only list these VPS operating-system families unless the owner changes the offering:

- Debian 13, 12, 11
- Ubuntu 26.04, 24.04, 22.04, 20.04 LTS
- Alpine Linux 3.21 and 3.20
- Bring your own: custom ISO files, rescue environment and cloud-init image

Multiple custom ISO files are permitted if their total size is no more than **3 GB**. State the combined limit, not a per-file limit. Availability is confirmed during provisioning.

## Theme and privacy behavior

`theme=dark|light` is the only browser cookie. It is used solely for visual preference and lasts one year. Dark is the default; visitors without the cookie see a branded choice screen. The header toggle updates the cookie. Preserve server-side cookie reading in `app/layout.tsx` to avoid a color flash.

## Contact and claims

- Public enquiries: `mailto:mail@encrypteron.com`
- `root@encrypteron.com` is reserved exclusively for the future ROOT control panel; never use it for support.
- Legal routes contain placeholders and must be replaced with official entity details, address, VAT, jurisdiction, and final legal text before a public launch.
- Use semantic HTML, keyboard-accessible controls and visible focus indicators. Respect `prefers-reduced-motion`.

## Commands

- `npm run dev` — development server
- `npm run typecheck` — strict TypeScript validation
- `npm run lint` — ESLint validation
- `npm run build` — production build
- `npm run start` — production server

## Change discipline

Prefer server components; client components are limited to interaction such as themes and custom-VM selection. Keep copy direct, specific and supportable. Whenever routes, navigation, file ownership, pricing, image availability, network behavior, cookie behavior, or commands change, update this map in the same change.
