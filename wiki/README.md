# Public Wiki

The public Wiki is part of the existing Encrypteron Next.js build. It is read-only and currently renders only reviewed articles exported from `wiki/content.ts`. There is no administrator UI, auth flow, database, API, or content mutation endpoint in this build.

## Routes

- `/wiki` — English published article index with search, category filter, and tag shortcuts.
- `/wiki/[slug]` — English published article detail with metadata, derived table of contents, and Markdown rendering.
- `/fr/wiki` — French index. It includes only entries with explicitly supplied French translations.
- `/fr/wiki/[slug]` — French translated article route. No English article is served as a French translation.

## Content and Markdown

Add reviewed public content to `wiki/content.ts`; pair translations by slug and language, use a lowercase URL-safe slug and ISO dates. Beginner-oriented English and French guides explain SSH setup from terminal selection and key creation through fingerprint verification, first commands, file transfer, routine maintenance, and recovery. Related guides walk through a cautious Debian security baseline, backups and restore drills, S3-compatible Object Storage concepts and client setup, deployment and rollback preparation, Linux permission notation, and step-by-step SSH diagnostics. Network-path and supported-image summaries stay on their existing product pages and are omitted from the Wiki index to avoid duplication. Articles in this source are treated as published. Do not put drafts, private notes, credentials, or personal data here. The renderer supports headings, paragraphs, lists, blockquotes, code, bold text, safe links, and responsive numbered guide-flow schematics written with `:::flow` and contextual visual cards written with `:::cards`. Raw HTML is rendered as text. Images, MDX, embeds, and uploads are not supported.

The Markdown renderer uses a restricted React element renderer. Link protocols are limited to HTTP(S), `mailto:`, local paths, and fragments; protocol-relative and script URLs are rendered as plain text.

## Future publishing backend boundary

Before adding an admin service, replace the static module with a server-only public reader whose database identity can select only a published-content view. Build and deploy admin separately with write credentials. Keep its routes, auth code, mutations, and dependencies out of this public Next.js artifact. Configure a private LAN/VPN listener, proxy allowlist, and host/network firewall outside this repository. This repository does not prove that any deployment is private or LAN-only.

See `ARCHITECTURE.md`, `DATA-MODEL.md`, `SECURITY.md`, `THREAT-MODEL.md`, and `TESTING.md` for the intended boundary and rollout prerequisites.
