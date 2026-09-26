# Wiki verification and deployment checks

For repository checks, run `npm run lint`, `npm run typecheck`, and `npm run build`.

Before connecting publishing, add tests proving that only published records appear in pages, search, metadata, and sitemap; unknown/private slugs return 404; unsafe HTML, script URLs, malformed Markdown, and heading collisions cannot execute or disrupt structure; every admin operation rejects unauthenticated/non-admin requests; CSRF, rate limiting, session revocation, and safe errors work; and the public bundle has no admin code, URLs, or write endpoints.

At deployment time, separately verify the proxy allowlist, public-origin reachability, direct-origin and proxy bypass resistance, forwarded-IP spoofing behavior, public DNS/NAT absence, firewall rules, private database exposure and role grants, cache isolation, backups, and restore. Application builds do not prove network isolation.
