# Future Wiki data model

The current static content model is in `wiki/content.ts`. If PostgreSQL publishing is introduced, use migrations and database constraints for:

- `Article`: ID, unique slug, title, summary, Markdown body, draft/published/archived status, language, category, created/updated/published timestamps, and public SEO title/description.
- `Category`: ID, unique slug, name, description.
- `Tag`: ID, unique slug, name.
- `ArticleTag`: article/tag join with a unique pair.
- `AdminUser` and `Session`: authentication-library-managed; registration disabled.
- `AuditEvent`: timestamp, event type, actor and target IDs, and minimal safe metadata. Never log credentials, session secrets, or article bodies.

Expose a view containing only published public fields. Grant the public database role `SELECT` on that view only. The private admin role may perform authorized writes. Do not add revisions, uploads, visitor IP collection, or remote fetching in the first admin version.
