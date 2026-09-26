# ENCRYPTERON WIKI — MULTI-AGENT ARCHITECTURE & IMPLEMENTATION

You are working inside the existing **Encrypteron website repository**.

This is an existing production-oriented Next.js project.

Your task is to design and later implement a **secure personal Wiki system** integrated into Encrypteron.

---

# ⚠️ ABSOLUTE FIRST STEP — PLAN MODE ONLY

DO NOT WRITE OR MODIFY APPLICATION CODE YET.

DO NOT CREATE THE WIKI YET.

DO NOT INSTALL DEPENDENCIES YET.

DO NOT CHANGE ROUTES YET.

DO NOT CHANGE `AGENTS.md` YET.

Start in **PLAN MODE**.

Your first response/work phase must:

1. Read completely:
   - `AGENTS.md`
   - `ai-temp.md`
   - `package.json`
   - project structure
   - current Next.js configuration
   - current authentication/security-related code if any
   - `app/globals.css`
   - `app/layout.tsx`
   - `components/header.tsx`
   - `components/footer.tsx`
   - theme-related components
   - relevant content files
   - `.gitignore`
   - environment handling
   - deployment/reverse-proxy related files if present

2. Inspect the existing architecture before proposing anything.

3. Create a detailed implementation plan.

4. Use multiple specialized agents/subagents in parallel.

5. STOP after the complete plan and wait for implementation approval.

Do not make destructive assumptions.

Do not rewrite the existing site architecture simply because another architecture is more familiar.

Preserve existing Encrypteron behavior unless changing it is strictly required for the Wiki.

---

# PROJECT CONTEXT

`AGENTS.md` is the authoritative technical map for the existing Encrypteron website.

It currently says that:

- `WIKI` is intentionally disabled / marked as coming soon.
- `ROOT` is reserved for a future control panel.
- public English routes use `/`
- French equivalents use `/fr`
- the project has an existing dark/light theme
- styling is centralized in the existing Encrypteron design system
- public commercial facts must not be invented
- existing accessibility and responsive behavior must be preserved

The explicit instruction in this task supersedes the previous "do not activate WIKI unless explicitly asked" limitation.

You are now explicitly authorized to design the Wiki.

Do NOT automatically activate `ROOT`.

ROOT remains unrelated unless there is an extremely strong architectural reason, which must first be explained in the plan.

---

# PRIMARY OBJECTIVE

Build a **personal Encrypteron Wiki** consisting of two completely different security surfaces:

## 1. PUBLIC WIKI

A polished read-only Wiki for visitors.

Example conceptual routes:

```text
/wiki
/wiki/[slug]
```

And determine during planning how this should interact with the existing French architecture, for example whether localized Wiki content should eventually use:

```text
/fr/wiki
/fr/wiki/[slug]
```

Do not assume bilingual article content exists.

Propose the cleanest model first.

The public Wiki should support things such as:

- article listing
- article page
- categories
- tags
- search
- table of contents
- headings
- code blocks
- syntax highlighting
- links
- metadata
- created/updated dates
- optional article status
- clean URLs/slugs
- responsive article navigation
- accessible keyboard navigation
- SEO metadata where appropriate

But do not blindly implement every feature.

Categorize features as:

```text
REQUIRED
RECOMMENDED
OPTIONAL/FUTURE
```

---

# 2. PRIVATE WIKI ADMIN

Create an administration system used to:

- create articles
- edit articles
- preview articles
- publish/unpublish articles
- manage drafts
- delete/archive articles
- manage categories
- manage tags
- manage metadata
- manage slugs
- manage article visibility
- search/filter articles
- inspect modification timestamps

Potential future functionality may include:

- revisions/history
- audit history
- article restore
- media uploads
- attachment management

Do not implement unnecessary complexity during the first version.

---

# 🚨 CRITICAL SECURITY REQUIREMENT

The Wiki administration panel must be:

> PRIVATE / INTERNAL / LAN-ONLY

It MUST NOT be publicly reachable from the Internet.

Do not confuse:

```text
"hidden"
```

with:

```text
"secure"
```

Hiding a route is NOT security.

An obscure URL is NOT security.

Removing a navigation link is NOT security.

Client-side authentication alone is NOT security.

JavaScript checks alone are NOT security.

A `robots.txt` rule is NOT security.

Middleware alone should NOT be treated as the only security boundary.

---

# ADMIN ARCHITECTURE

Design the strongest practical architecture.

Prefer defense in depth.

Evaluate approaches such as:

```text
Internet
   │
   ▼
Public reverse proxy
   │
   ├──── Encrypteron public website
   │
   └──── Public Wiki (read-only)

LAN / VPN / trusted management network
   │
   ▼
Private reverse proxy / private listener
   │
   ▼
Wiki Admin
   │
   ▼
Authentication + authorization
   │
   ▼
Wiki backend/database
```

Determine whether the safest design is:

### Architecture A

One Next.js application with strict server/network separation.

### Architecture B

Separate public Wiki frontend and private Wiki admin application.

### Architecture C

Shared repository but separately built/deployed public and private applications.

### Architecture D

Another architecture discovered from the repository constraints.

Compare them objectively.

Select one in the plan and explain why.

Security takes priority over implementation convenience.

---

# ABSOLUTELY NO PUBLIC ADMIN DISCOVERY

The public Encrypteron website must contain:

- no Admin button
- no Admin link
- no Login button for Wiki administration
- no administrator instructions
- no admin URL shown in public HTML
- no comments leaking admin information
- no JavaScript exposing admin endpoints unnecessarily
- no public source references advertising the private panel
- no sitemap entry for the admin panel
- no public navigation reference
- no public footer reference

Ideally, the **public production frontend bundle should not contain the Wiki admin UI code at all**.

Investigate whether this requires physically separating the admin application/build.

Do NOT rely solely on "nobody knows the URL."

---

# ZERO-TRUST PRINCIPLE

Treat every request as untrusted.

Even on the LAN.

Even after authentication.

Security checks must occur server-side.

Apply:

```text
authenticate
→ authorize
→ validate
→ execute minimum required action
```

Never trust:

- client-provided role
- client-provided user ID
- article ownership information from the browser
- hidden HTML fields
- localStorage authentication claims
- JavaScript-only permissions
- URL secrecy
- browser state

---

# NETWORK SECURITY

The admin panel should preferably have several independent barriers.

Evaluate and propose:

1. LAN/VLAN firewall restriction
2. private reverse proxy listener
3. no public DNS record
4. no public NAT/port forwarding
5. WireGuard/VPN access if remote administration is required
6. host firewall restriction
7. application authentication
8. authorization
9. secure session handling
10. optional mTLS as an additional security layer

The plan must clearly distinguish:

```text
NETWORK AUTHORIZATION
APPLICATION AUTHENTICATION
APPLICATION AUTHORIZATION
```

All three are different controls.

---

# AUTHENTICATION

Even though the admin panel is LAN-only:

**DO NOT TRUST THE LAN.**

It still needs authentication.

Evaluate appropriate authentication methods.

Preferred characteristics:

- server-side authentication
- strong password hashing if passwords are used
- secure sessions
- HttpOnly cookies
- Secure cookies in production
- appropriate SameSite policy
- CSRF protection where applicable
- session rotation
- expiration
- logout
- brute-force mitigation
- rate limiting
- generic authentication error messages
- no authentication secrets in browser JavaScript
- no tokens in localStorage if avoidable

Strongly consider:

- passkeys / WebAuthn
- password + TOTP
- hardware security key
- local identity provider if appropriate

Do not unnecessarily introduce a giant identity platform for one administrator.

Choose an architecture proportional to the project.

---

# AUTHORIZATION

Authentication answers:

> "Who are you?"

Authorization answers:

> "Are you allowed to do this?"

Every sensitive operation must perform authorization server-side.

For example:

```text
create article
edit article
publish article
unpublish article
delete article
upload file
change category
change metadata
change slug
manage users
view drafts
```

Do not simply protect the admin page and then trust API requests.

Every privileged API/server action must independently verify authorization.

---

# ADMIN SESSION SECURITY

Design secure session handling.

Investigate:

- opaque server-side sessions vs signed tokens
- cookie security
- session expiration
- idle timeout
- absolute timeout
- session regeneration after authentication
- logout invalidation
- session revocation
- CSRF
- replay resistance
- authentication event logging

Do not invent custom cryptography.

Use established and maintained primitives/libraries when required.

---

# DATABASE / STORAGE

Inspect the existing repository first.

Then propose an appropriate persistence layer.

Possible examples:

- SQLite
- PostgreSQL
- another justified solution

For a personal Wiki, prefer simplicity unless the existing architecture requires something else.

Define an explicit data model.

At minimum consider:

```text
Article
Category
Tag
ArticleTag
Revision
AdminUser
Session
AuditEvent
```

Not every table necessarily needs to exist in v1.

Explain which ones are needed immediately.

Example Article concepts:

```text
id
slug
title
excerpt
content
status
language
category
createdAt
updatedAt
publishedAt
```

Possible statuses:

```text
draft
published
archived
```

Use strict validation.

Database constraints should complement application validation.

---

# ARTICLE FORMAT

Evaluate:

- Markdown
- MDX
- rich-text JSON
- sanitized HTML

For a personal technical Wiki, strongly evaluate Markdown as the default.

If HTML/MDX is rendered:

SECURITY IS REQUIRED.

Account for:

- XSS
- script injection
- unsafe attributes
- dangerous URLs
- raw HTML
- embedded components
- iframe abuse
- sanitization

Do not permit arbitrary executable MDX from the admin editor unless the risk is explicitly understood and justified.

---

# INPUT VALIDATION

Everything entering the backend must be considered malicious.

Use schema validation.

Validate:

- titles
- slugs
- article body
- categories
- tags
- search queries
- IDs
- status changes
- file names
- MIME types
- upload sizes
- metadata

Use allowlists where practical.

Never build SQL manually from untrusted strings.

---

# FILE UPLOADS

If uploads are included now or later:

Plan for:

- size limits
- MIME validation
- extension validation
- randomized storage names
- path traversal prevention
- filename normalization
- image re-encoding when appropriate
- no executable uploads
- storage outside executable/public application paths
- authorization before upload
- safe serving headers

Do not add uploads unless they are actually necessary for v1.

---

# SECURITY HEADERS

Inspect existing headers/configuration.

Propose improvements where appropriate:

- Content-Security-Policy
- frame restrictions / frame-ancestors
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy
- HSTS where deployment permits it
- secure cache behavior
- admin-specific `Cache-Control: no-store`

Do not blindly add incompatible policies.

Check the existing application first.

---

# PUBLIC WIKI SECURITY

The public Wiki must be read-only.

Public visitors must never obtain mutation capabilities.

Separate:

```text
READ API
```

from:

```text
WRITE / ADMIN API
```

where practical.

The public site should receive only the minimum data required for rendering.

Drafts must NEVER leak publicly.

Private metadata must NEVER leak publicly.

Admin audit logs must NEVER leak publicly.

Authentication state must NEVER leak publicly.

Database credentials must NEVER reach the frontend.

---

# CACHE SECURITY

Be particularly careful with Next.js caching.

Ensure:

- draft content cannot enter public static output
- admin content cannot enter shared caches
- authenticated pages are not cached publicly
- private API results use appropriate cache headers
- published content caching is intentionally designed
- revalidation does not accidentally expose drafts

Document the selected caching model.

---

# SERVER / CLIENT COMPONENT BOUNDARIES

Use server components where appropriate.

Avoid `"use client"` unless interactivity actually requires it.

Never put:

- secrets
- DB credentials
- privileged logic
- authorization assumptions
- admin-only data fetching credentials

inside client components.

Clearly document server/client boundaries.

---

# ENVIRONMENT SECRETS

Secrets must remain server-side.

Use environment variables for things such as:

```text
DATABASE_URL
SESSION_SECRET
AUTH_SECRET
```

Exact names may differ.

Requirements:

- `.env*` containing secrets must not be committed
- provide safe `.env.example`
- never generate fake production credentials
- never embed credentials in source code
- never expose private variables through `NEXT_PUBLIC_*`

Review `.gitignore`.

---

# DESIGN — MUST BE ENCRYPTERON

Do NOT invent a separate Wiki aesthetic.

The Wiki must look like a native part of Encrypteron.

Reuse the existing:

- font stack
- CSS variables
- palette
- background
- foreground
- pink/violet accents
- borders
- button system
- cards
- spacing
- typography
- headings
- header conventions
- footer conventions
- dark mode
- light mode
- focus states
- responsive rules
- reduced-motion behavior
- transitions
- layout width
- visual hierarchy

Inspect:

```text
app/globals.css
```

before designing anything.

Do not copy/paste large amounts of duplicate CSS if the existing tokens/components can be reused.

Prefer extracting reusable design primitives only when justified.

---

# ADMIN DESIGN

The admin UI can be more utilitarian but must remain visually related to Encrypteron.

Possible layout:

```text
┌────────────────────────────────────────────────────┐
│ ENCRYPTERON WIKI                                  │
├──────────────┬─────────────────────────────────────┤
│ Articles     │                                     │
│ Drafts       │       Article editor                │
│ Published    │                                     │
│ Categories   │       Markdown / content            │
│ Tags         │                                     │
│              │                                     │
│              │       Preview                       │
└──────────────┴─────────────────────────────────────┘
```

But inspect existing design first.

Do not blindly copy this wireframe.

---

# WIKI PUBLIC DESIGN

Potential structure:

```text
WIKI

Search documentation...

Categories

┌────────────────────────────┐
│ Networking                 │
│ MikroTik, routing, VLANs   │
└────────────────────────────┘

┌────────────────────────────┐
│ Linux                      │
│ NixOS, Debian, servers     │
└────────────────────────────┘
```

Article example:

```text
WIKI / NETWORKING / MIKROTIK

Configuring isolated VLANs
──────────────────────────

Last updated ...

[Article content]

On this page
  • Architecture
  • VLANs
  • Firewall
  • Testing
```

Again: derive final visuals from Encrypteron.

---

# SEARCH

Plan a Wiki search architecture.

For a personal Wiki, first consider whether simple server-side/database search is sufficient.

Do not introduce Elasticsearch/Meilisearch/etc. unless justified.

Consider:

```text
title
excerpt
content
tags
categories
```

Search must not reveal unpublished content.

---

# SEO

For public articles consider:

- title
- description
- canonical URL
- OpenGraph
- metadata
- sitemap integration
- robots indexing

For private admin:

```text
noindex
nofollow
noarchive
```

But remember:

`robots.txt` is not an access-control mechanism.

Network restriction and authentication remain mandatory.

---

# AUDIT LOGGING

For administrator actions consider a lightweight audit trail.

Examples:

```text
LOGIN_SUCCESS
LOGIN_FAILURE
ARTICLE_CREATED
ARTICLE_UPDATED
ARTICLE_PUBLISHED
ARTICLE_UNPUBLISHED
ARTICLE_ARCHIVED
ARTICLE_DELETED
CATEGORY_CREATED
TAG_CREATED
SESSION_REVOKED
```

Avoid logging secrets.

Avoid unnecessarily storing sensitive values.

Use useful timestamps.

If IP addresses are stored, explicitly call out the privacy/retention implications instead of silently collecting them.

---

# PRIVACY

Follow data minimization.

Do not automatically add analytics.

Do not automatically fingerprint visitors.

Do not collect visitor IP addresses inside the application unless operationally required and explicitly justified.

Remember that reverse proxies/hosting infrastructure may already create technical logs.

Any new collection must be documented accurately before production.

---

# ERROR HANDLING

The public application must not reveal:

- SQL errors
- stack traces
- filesystem paths
- environment variables
- internal hostnames
- private IP addresses
- authentication implementation details
- dependency internals

Admin errors should be useful but still safe.

Server logs may contain more detail than browser responses.

---

# RATE LIMITING

Plan rate limits for:

- login attempts
- authentication verification
- search if abuse becomes realistic
- write endpoints
- uploads

LAN-only access does NOT eliminate brute-force risk.

---

# CSRF

For cookie-authenticated administrative mutation endpoints:

evaluate and implement appropriate CSRF defenses.

Consider:

- SameSite cookies
- Origin validation
- CSRF tokens where required

Do not assume POST alone is safe.

---

# XSS

The Wiki renders user-authored content.

Even though the author is the administrator, content rendering must still be designed safely.

Protect against:

- stored XSS
- Markdown HTML injection
- malicious links
- unsafe embeds
- unsafe syntax-highlight output
- dangerous URL protocols

---

# SSRF

If the Wiki ever supports:

- remote image import
- URL previews
- external metadata fetching
- link unfurling

then SSRF must be considered.

Prefer not to implement server-side arbitrary URL fetching in v1.

---

# MULTI-AGENT WORKFLOW

You MUST use multiple specialized agents/subagents.

Use at least **5** if supported.

Do not assign all agents the same generic task.

Suggested structure:

---

## AGENT 1 — REPOSITORY / ARCHITECTURE ANALYST

Responsibilities:

- read `AGENTS.md`
- read `ai-temp.md`
- inspect directory structure
- inspect Next.js architecture
- inspect package dependencies
- inspect theme architecture
- inspect routing
- inspect deployment/config files
- identify constraints
- propose integration points
- identify possible regressions

Deliverable:

```text
CURRENT ARCHITECTURE REPORT
INTEGRATION CONSTRAINTS
FILES LIKELY TO CHANGE
RISKS
```

---

## AGENT 2 — WIKI FRONTEND / UX

Responsibilities:

- inspect Encrypteron style system
- design Wiki public pages
- design article layout
- design search UI
- design TOC/navigation
- responsive behavior
- light/dark support
- accessibility
- reuse existing components/tokens
- avoid style duplication

Deliverable:

```text
PUBLIC WIKI UX PLAN
COMPONENT TREE
ROUTES
DESIGN REUSE MAP
ACCESSIBILITY PLAN
```

---

## AGENT 3 — WIKI BACKEND / DATA

Responsibilities:

- determine persistence approach
- database schema
- article CRUD
- drafts/publishing
- categories/tags
- search
- slugs
- revisions if justified
- server actions/API design
- transaction boundaries
- validation
- migrations
- cache/revalidation model

Deliverable:

```text
BACKEND ARCHITECTURE
DATABASE SCHEMA
API/SERVER ACTION MODEL
CONTENT LIFECYCLE
```

---

## AGENT 4 — SECURITY ENGINEER

Responsibilities:

Threat-model the Wiki.

At minimum assess:

```text
authentication bypass
authorization bypass
XSS
CSRF
SQL injection
SSRF
path traversal
unsafe uploads
session theft
session fixation
brute force
rate-limit bypass
information disclosure
draft leakage
cache leakage
public admin exposure
secret leakage
dependency risk
LAN lateral movement
reverse-proxy misconfiguration
```

Deliverable:

```text
THREAT MODEL
TRUST BOUNDARIES
ATTACK SURFACES
SECURITY CONTROLS
REMAINING RISKS
```

Use severity where useful:

```text
CRITICAL
HIGH
MEDIUM
LOW
```

---

## AGENT 5 — ADMIN PANEL ENGINEER

Responsibilities:

- private editor architecture
- article editor UX
- preview
- draft workflow
- publish workflow
- authentication UX
- session handling
- no-public-bundle strategy
- internal routing
- private navigation
- data mutation architecture

Deliverable:

```text
ADMIN ARCHITECTURE
ADMIN COMPONENT TREE
AUTHENTICATION FLOW
ARTICLE EDITING FLOW
```

---

## AGENT 6 — QA / TESTING ENGINEER

Responsibilities:

Design tests before implementation.

Include:

- unit tests
- integration tests
- authorization tests
- authentication tests
- Wiki CRUD tests
- draft leakage tests
- public/private boundary tests
- XSS tests
- CSRF tests
- cache tests
- responsive tests
- accessibility tests
- build/lint/typecheck
- negative security tests

Deliverable:

```text
TEST MATRIX
SECURITY REGRESSION TESTS
ACCEPTANCE CRITERIA
```

---

# AGENT SYNTHESIS

After agents complete their independent analysis:

The primary agent must compare their recommendations.

Resolve disagreements.

Do not blindly combine incompatible ideas.

Produce ONE coherent architecture.

Explicitly state important disagreements such as:

```text
Frontend agent recommends X.
Security agent considers X unsafe because Y.
Final architecture therefore uses Z.
```

---

# CREATE A FUTURE `/wiki` WORKSPACE

During implementation — NOT during the first Plan Mode phase — create a project workspace/folder named:

```text
wiki/
```

But first determine what this folder should contain.

Possible structure:

```text
wiki/
├── README.md
├── ARCHITECTURE.md
├── SECURITY.md
├── THREAT-MODEL.md
├── DATA-MODEL.md
├── TESTING.md
└── ...
```

OR, if architecture warrants a separate application:

```text
wiki/
├── public/
├── admin/
├── shared/
└── docs/
```

Do NOT create a structure just because this prompt shows it.

Determine the correct structure from the existing repository.

---

# AGENTS.md MAINTENANCE

The existing project requires `AGENTS.md` to stay synchronized with architectural changes.

During implementation:

Update `AGENTS.md` in the SAME change whenever the Wiki introduces changes to:

- routes
- navigation
- file ownership
- commands
- cookies
- authentication
- Wiki architecture
- deployment assumptions
- public/private boundaries
- database
- admin interface
- environment variables
- security-relevant behavior

Do not remove existing facts.

Do not silently rewrite unrelated documentation.

---

# AI TEMP / HANDOFF

Read `ai-temp.md`.

Determine whether it should:

- be updated
- remain historical
- be replaced by a newer handoff
- receive a Wiki implementation section

Do not overwrite useful historical context without justification.

---

# NAVIGATION

The current navigation exposes WIKI as disabled/soon.

Once the **public Wiki** actually exists and passes testing:

WIKI may become active.

But:

- only the public Wiki gets a navigation entry
- the admin panel never gets a public navigation entry
- ROOT remains disabled unless explicitly requested separately

---

# BACKWARD COMPATIBILITY

Do NOT break:

- `/`
- `/products`
- `/vps`
- `/storage`
- `/network`
- `/principles`
- `/privacy`
- `/terms`
- `/imprint`
- `/fr`
- existing `/fr/*` pages
- theme selection
- legal acknowledgement flow
- language selection
- existing prices/content
- existing responsive behavior
- existing accessibility behavior

---

# DEPENDENCIES

Before adding any dependency:

Explain:

```text
WHAT it does
WHY it is needed
WHY the existing stack cannot reasonably do it
MAINTENANCE status
SECURITY implications
CLIENT bundle impact
SERVER bundle impact
```

Avoid dependency bloat.

Prefer mature dependencies.

Do not use abandoned packages.

---

# DO NOT OVERENGINEER

This is a personal Wiki.

Security should be strong.

Architecture should remain understandable.

Do NOT introduce, without compelling reason:

- Kubernetes
- Kafka
- Redis
- Elasticsearch
- microservices everywhere
- distributed queues
- enterprise IAM stacks
- unnecessary message brokers

A boring, well-secured architecture is preferred to unnecessary complexity.

---

# IMPLEMENTATION QUALITY

When implementation is later approved:

- use strict TypeScript
- avoid `any`
- avoid giant components
- keep concerns separated
- prefer server-side security enforcement
- validate all untrusted data
- use transactions where required
- use database constraints
- handle errors safely
- document difficult security decisions
- avoid duplicate CSS
- avoid duplicate business logic
- keep functions/components reasonably small
- preserve project conventions

---

# REQUIRED VERIFICATION AFTER IMPLEMENTATION

At minimum run the existing project checks:

```bash
npm run lint
npm run typecheck
npm run build
```

Then run the Wiki-specific tests that are introduced.

Do not claim success unless commands actually pass.

If something fails:

- report the exact failing check
- identify the cause
- fix it when within scope
- rerun the test

---

# SECURITY VERIFICATION CHECKLIST

Before declaring the implementation complete, verify explicitly:

```text
[ ] Admin is inaccessible from public Internet architecture
[ ] Admin requires authentication even on LAN
[ ] Admin is absent from public navigation
[ ] Admin URL is not intentionally exposed in public content
[ ] Preferably admin UI code is absent from public frontend bundle
[ ] Public users cannot call write APIs
[ ] Every write endpoint rechecks authorization server-side
[ ] Draft articles cannot be retrieved publicly
[ ] Archived/private articles cannot be retrieved publicly
[ ] Session cookies are secure
[ ] CSRF protection exists where needed
[ ] Inputs are validated
[ ] SQL injection is prevented
[ ] Stored XSS is prevented
[ ] Markdown/content rendering is safe
[ ] Secrets stay server-side
[ ] `.env` secrets are gitignored
[ ] Errors do not expose infrastructure
[ ] Auth endpoints have brute-force protection
[ ] Admin responses are not publicly cached
[ ] Public cache cannot contain draft/admin data
[ ] Security headers were reviewed
[ ] Dependencies were reviewed
[ ] No unrelated functionality was broken
```

---

# REQUIRED PLAN-MODE OUTPUT

Your FIRST deliverable must contain the following sections.

## 1. Existing Repository Analysis

Explain:

- current architecture
- routing
- styling
- language architecture
- server/client boundaries
- deployment clues
- existing dependencies
- existing security controls
- constraints from `AGENTS.md`
- constraints from `ai-temp.md`

---

## 2. Proposed Wiki Architecture

Include an ASCII architecture diagram such as:

```text
                    INTERNET
                        │
                        ▼
                 Public Reverse Proxy
                        │
                  ┌─────┴─────┐
                  │           │
                  ▼           ▼
             Encrypteron    Public Wiki
                              READ ONLY
                                 │
                                 ▼
                              Database
                                 ▲
                                 │
                       AUTHORIZED WRITES
                                 │
                    ┌────────────┴────────────┐
                    │ Private LAN/VPN only   │
                    │ Wiki Admin             │
                    │ + authentication       │
                    └─────────────────────────┘
```

Adapt this to the actual architecture.

---

## 3. Trust Boundary Diagram

Show:

```text
PUBLIC
TRUST BOUNDARY
PRIVATE APPLICATION
TRUST BOUNDARY
DATABASE
MANAGEMENT NETWORK
```

---

## 4. Public Wiki Routes

List proposed routes.

---

## 5. Private Admin Routes / Service

Describe the admin approach.

Do not expose unnecessary sensitive implementation details through the public application.

---

## 6. Data Model

Show proposed tables/entities and relationships.

---

## 7. Authentication Design

Explain exact authentication/session strategy.

---

## 8. Authorization Design

Explain server-side permission enforcement.

---

## 9. Network Security

Explain LAN/VLAN/reverse-proxy/firewall assumptions.

Clearly identify what must be configured outside the Next.js repository.

---

## 10. Threat Model

Use a table:

| Threat | Surface | Severity | Mitigation |
|---|---|---:|---|
| Auth bypass | Admin | Critical | ... |
| Stored XSS | Wiki article | High | ... |
| CSRF | Admin mutation | High | ... |
| Draft leakage | Public API/cache | High | ... |

Expand substantially.

---

## 11. File/Folder Plan

Show all proposed additions and modifications.

Example:

```text
CREATE
wiki/...
app/wiki/...
...

MODIFY
components/header.tsx
app/globals.css
AGENTS.md
...

UNCHANGED
...
```

Use the actual repository after inspection.

---

## 12. Dependency Plan

List every proposed new dependency and justification.

---

## 13. UI Component Plan

Public Wiki components.

Admin Wiki components.

Shared reusable Encrypteron components.

---

## 14. Testing Strategy

Include functional and security tests.

---

## 15. Migration / Rollback Strategy

Explain:

- database migrations
- failure recovery
- backups
- rollback
- what happens to articles during rollback

---

## 16. Deployment Strategy

Explain separately:

```text
PUBLIC WIKI
PRIVATE ADMIN
DATABASE
REVERSE PROXY
NETWORK FIREWALL
SECRETS
BACKUPS
```

---

## 17. Implementation Phases

Use phases such as:

```text
PHASE 0 — repository inspection
PHASE 1 — data model
PHASE 2 — public Wiki
PHASE 3 — private admin/auth
PHASE 4 — security hardening
PHASE 5 — testing
PHASE 6 — documentation
PHASE 7 — deployment verification
```

For every phase provide:

- objective
- files affected
- dependencies
- risks
- validation commands

---

## 18. Final Recommended Architecture

Give one final coherent architecture after combining all agent findings.

Explain why it was chosen.

---

# IMPORTANT

Do not tell me merely:

> "Use authentication and secure the admin panel."

I want the concrete architecture.

Do not tell me merely:

> "Use zero trust."

Explain exactly where every trust boundary is.

Do not tell me merely:

> "Use a firewall."

Explain which layer the firewall protects and what application controls remain necessary.

Do not implement fake security.

Do not rely on hiding routes.

Do not rely solely on client-side checks.

Do not expose private administration through the same public surface unless the architecture can prove an equivalent or stronger isolation model.

---

# CURRENT EXECUTION MODE

You are currently in:

# PLAN MODE

Use the multi-agent analysis now.

Inspect everything.

Produce the complete architecture and implementation plan.

**DO NOT IMPLEMENT ANYTHING YET.**

End the response with:

```text
PLAN COMPLETE — READY FOR IMPLEMENTATION
```

and nothing should be modified until implementation is explicitly authorized.