# Wiki security requirements

The current public Wiki has no authentication or write operations. Its article source is public content. Raw HTML and executable MDX are unsupported; content is mapped to React elements, and links are protocol-checked.

Any future admin must be a separate build/runtime. Require a private proxy plus host/network firewall allowlisting and application authentication. Require TOTP for the single administrator, server-side sessions, secure production cookies, rate limiting, same-origin/CSRF defenses, and server-side role authorization on every loader and mutation. Disable registration and recovery flows unless separately designed and reviewed. Validate all inputs and keep safe errors and minimal audit metadata.

Use distinct database credentials. Public runtime: select published view only. Admin runtime: only required writes. PostgreSQL is not Internet-facing. Admin/auth responses must be `Cache-Control: no-store` and noindex; these are supplemental controls, not access control.

Never claim LAN-only access until direct-origin access, proxy bypass, forwarded-IP spoofing, public DNS/NAT, firewall rules, and database exposure have been checked in the deployed topology.
