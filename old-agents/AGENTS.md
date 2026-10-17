# Repository Guidelines

## Project Structure

This is a Next.js App Router site. English routes live in `app/`; French equivalents live in `app/fr/`. Shared UI is in `components/`, public brand assets in `public/assets/`, and reviewed Wiki content and architecture notes in `wiki/`. `app/content.ts` and `app/fr/content.ts` hold service and language content. `rollback-before-redesign/` is a reference snapshot; change it only when explicitly restoring the old site.

## Development and Checks

- `npm run dev` starts the local development server.
- `npm run lint` runs ESLint across the repository.
- `npm run typecheck` runs strict TypeScript checking.
- `npm run build` creates a production build; `npm run start` serves that build.

There is no automated test script. For changes, run lint and typecheck; also build when changing routes, metadata, or rendering. Wiki-specific publishing and deployment checks are documented in `wiki/TESTING.md`.

## Code and Content Conventions

Use TypeScript and React components, two-space indentation, and the existing kebab-case file names (for example, `custom-vm-builder.tsx`). Keep shared behavior in existing components and commercial values in the content modules. Preserve semantic HTML, visible focus, keyboard access, responsive layouts, and reduced-motion support.

Public copy must stay factual. Keep English and French prices, service details, and translated pages aligned. Do not invent availability, performance, security, location, or legal claims; legal pages remain drafts until their marked details are confirmed. VPS compute is France-hosted, with German public IPv4 via a tunnel. Read the repository's supplied technical map before changing product, network, legal, or theme behavior.

## Changes and Reviews

Recent Git history uses short working labels and establishes no formal commit convention. Use a concise imperative summary, such as `Align French VPS image list`. Pull requests should explain the user-visible change, list checks run, link related issues when applicable, and include screenshots for visual changes at desktop and mobile widths. Update repository guidance when routes, pricing, navigation, or commands change.

## Configuration and Safety

Do not commit secrets or treat local build success as proof of deployment security. Avoid adding customer, checkout, or provisioning flows: enquiries are handled by the public email CTA, and final scope is confirmed outside the site.
