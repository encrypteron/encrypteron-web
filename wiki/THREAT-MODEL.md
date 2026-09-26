# Wiki threat model

| Threat | Impact | Required control |
|---|---|---|
| Admin listener exposed or proxy bypassed | Unauthorized content changes and account compromise | Private interface, LAN/VPN allowlist, host/network firewall, no public DNS/NAT; verify direct-origin blocking |
| Stolen session or authentication bypass | Unauthorized administration | TOTP, server-side sessions, secure cookies, expiry and revocation, generic errors |
| Authorization bypass | Unauthorized reads or writes | Reauthenticate/authorize every page and operation; ignore client-supplied identity and role |
| Draft disclosure | Private editorial content becomes public | Public DB role sees only published view; unknown/private slugs return 404 |
| Stored XSS | Visitor or admin script execution | No raw HTML/MDX, safe renderer, URL checks, safe heading IDs, same renderer in preview |
| CSRF | Cookie-authenticated unwanted mutations | SameSite cookies, Origin checks, CSRF protection |
| Brute force | Account compromise or service exhaustion | Proxy and app rate limits, generic login errors |
| Cache leakage | Draft/admin response served publicly | Cache published projections only; admin no-store; test invalidation and separation |
| Invalid state or injection | Data corruption or unauthorized query | Parameterized queries, runtime validation, constraints, transactions |
| Secret/error disclosure | Credential or internal detail exposure | Separate builds and credentials, server-only secrets, safe client errors |
| Excess data collection | Unnecessary privacy impact | Minimal audit metadata; no visitor IP collection in the application |

The current static implementation has no admin listener, database, session, draft state, or write path. Deployment isolation remains unverified.
