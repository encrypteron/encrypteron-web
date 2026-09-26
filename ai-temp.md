# Note de reprise IA — site français et documents légaux

Mis à jour le 23 septembre 2026.

## Travail effectué

- Création des routes françaises `/fr`, `/fr/products`, `/fr/vps`, `/fr/storage`, `/fr/network`, `/fr/principles`, `/fr/terms`, `/fr/privacy` et `/fr/imprint`.
- Traduction des contenus visibles, navigation, pied de page, cartes de forfaits, formulaire de demande VM personnalisée et pages juridiques. Les noms des distributions et les noms des forfaits restent inchangés lorsqu’ils correspondent à des noms propres/catalogue.
- Ajout de choix Français/English sur l’écran d’entrée, dans l’ordre langue → thème → accord aux Conditions et confirmation de lecture de la notice de confidentialité.
- L’écran lie les documents dans la langue choisie. Les versions anglaise et française sont acceptées séparément via le cookie `legal_notice_version=<version>:<langue>` ; le choix de langue et le thème sont mémorisés dans des cookies de première partie d’une durée maximale d’un an.
- Les pages Terms/Privacy en anglais et Conditions/Confidentialité en français sont accessibles avant la confirmation, afin que l’utilisateur puisse les lire.
- Le sélecteur de langue dans l’en-tête permet de naviguer vers la route correspondante. Si la langue choisie n’a pas encore été acceptée, l’écran d’entrée réapparaît.
- `AGENTS.md` décrit maintenant les routes bilingues, les cookies, le fonctionnement de l’accord et l’état d’avancement.

## Fichiers principaux

- `components/theme-provider.tsx` : état de langue et du thème, écran d’entrée, cookies d’accord et navigation localisée.
- `components/header.tsx`, `components/footer.tsx` : sélecteur et navigation bilingues.
- `app/fr/**` : routes et contenus français.
- `app/fr/content.ts` : données éditoriales françaises de la page d’accueil, du catalogue et des principes.
- `components/plan-card.tsx`, `components/custom-vm-builder.tsx` : rendu français des forfaits et demande VM.
- `app/terms/page.tsx`, `app/privacy/page.tsx` : documents juridiques anglais.
- `app/fr/terms/page.tsx`, `app/fr/privacy/page.tsx` : traductions françaises des documents juridiques.
- `app/legal-constants.ts` : version de l’accord. L’incrémenter quand les visiteurs doivent confirmer une nouvelle version des documents.
- `AGENTS.md` : carte technique, règles de contenu et état du projet.

## Vérifications

Après les dernières modifications, ces commandes ont réussi :

- `npm run lint`
- `npm run typecheck`
- `npm run build`

Le build annonce toutes les routes `/fr` ci-dessus. Aucun test visuel navigateur ou parcours utilisateur automatisé n’a été exécuté.

## À faire avant lancement commercial

Les documents restent explicitement des projets. Demander puis vérifier :

1. Identité juridique complète du vendeur : dénomination, forme, adresse, pays, immatriculation et TVA le cas échéant ; droit applicable et juridiction.
2. Fournisseurs hébergement, CDN/sécurité et messagerie ; rôles, lieux de traitement, garanties de transfert, champs réellement journalisés et durées de conservation configurées.
3. Contrôles réellement activés en production : TLS/transport, accès administratifs, mises à jour, sauvegardes, gestion des incidents et protections du fournisseur. Le déploiement n’a pas été audité.
4. Modalités commerciales avant prise de commande : taxes et prix définitifs, renouvellement, résiliation, assistance/disponibilité propres au service et procédure de rétractation consommateur.
5. Relecture juridique des versions française et anglaise selon le pays du vendeur et les marchés ciblés. Un avoir ne doit jamais remplacer un remboursement ou droit de rétractation obligatoire.

Ne pas présenter les textes actuels comme une garantie contre les litiges. Le code de l’application n’intègre pas d’outil analytique, mais l’hébergeur/CDN peut produire des journaux techniques ; vérifier sa configuration. Les personnes qui envoient un e-mail communiquent volontairement leur adresse et le contenu de leur message.

## Contraintes à préserver

- Les routes anglaises restent sans préfixe (`/`) ; les équivalents français restent sous `/fr`.
- Les prix restent définis dans `app/content.ts` ; les pages françaises réutilisent ces forfaits avec un affichage français.
- Préserver les faits réseau : calcul hébergé en France, IP publique basée en Allemagne via tunnel, chemin retour inverse et latence dépendante du réseau.
- Les ISO personnalisées sont limitées à 3 Go au total combiné. Ne jamais reformuler comme une limite par fichier.
- Garder les futurs services non commandables et ne pas inventer de disponibilité, mesures, garanties, lieux, certifications ou dates.
- Mettre à jour `AGENTS.md` lorsque routes, langue, accord légal, cookies, prix ou responsabilités des fichiers changent.

## Wiki implementation handoff � 24 September 2026

- Activated the public Wiki navigation and added English `/wiki` and `/wiki/[slug]` pages with search, category filtering, tag shortcuts, article metadata, a generated table of contents, and responsive styles.
- Added a French Wiki index and translation-aware article route. No French articles are currently supplied; English-only article links return to the French index and English copy is not presented as translated content.
- The initial reviewed content source is `wiki/content.ts`. It is static public content only: no admin, authentication, database, draft store, or write endpoint was added. Markdown rendering uses a restricted React renderer, excludes raw HTML/MDX, and checks link protocols.
- `wiki/README.md`, `ARCHITECTURE.md`, `DATA-MODEL.md`, `SECURITY.md`, `THREAT-MODEL.md`, and `TESTING.md` document current scope and the separate admin/database/network boundary required for a later publishing system.
- Before adding admin publishing, establish a separate admin build/runtime, a private database with public read access limited to a published-only view, and an externally verified LAN/VPN proxy/firewall. No deployment/network configuration is available in this repository.

## French Wiki translation � 24 September 2026

- Added French translations for the VPS network path and VPS image selection articles. The French index now lists these translated articles, with localized category, summary, tags, and article body.
- `/fr/wiki/[slug]` serves only actual French content; an untranslated slug resolves as not found.
- Updated the Wiki README and AGENTS project status to require explicit translations for French routes.

## Wiki guide expansion � 24 September 2026

- Expanded `wiki/content.ts` with English and French guides for SSH key creation and host-key verification, a cautious Debian first-boot security baseline, VPS backup and restore planning, S3-compatible Object Storage setup, and SSH troubleshooting.
- Guides distinguish general operating-system advice from Encrypteron-specific network and product facts. They avoid asserting unverified provider controls, performance, durability, or security guarantees. Firewall and SSH changes include access-recovery cautions.

## Wiki index cleanup and new categories � 24 September 2026

- Removed the already-covered network-path and VPS image overview entries from the public Wiki indexes; the details remain on their existing product pages.
- Added Deployment and Linux basics categories with English and French articles on small-service deployment preparation and Linux file permissions. Existing Security, Operations, Storage, and Troubleshooting categories remain available through the category filter.
- Updated Wiki and project docs to reflect the non-duplicated index and added category coverage.

## Beginner Wiki guide expansion — 24 September 2026

- Expanded the English and French SSH guides from key generation through terminal setup, local-versus-remote commands, safe first login and host fingerprint checks, first shell commands, file transfer, account hardening order, maintenance, recovery, and troubleshooting.
- Added beginner-friendly workflow context to the Debian security, backup and restore, S3-compatible storage, service deployment, Linux permissions, and SSH troubleshooting guides in both languages.
- Kept examples qualified by OS/provider differences, preserved recovery paths, and avoided claiming provider features or security guarantees that have not been verified.
## Wiki visual guide schematics — 24 September 2026

- Added an accessible ordered-flow block to the Wiki renderer and styled it as responsive numbered step cards with directional arrows, stacking vertically on small screens.
- Added bilingual visual roadmaps to the SSH, Debian security, backup/recovery, Object Storage, deployment, Linux permissions, and SSH troubleshooting guides; kept detailed explanations below each roadmap.
- Updated Wiki and project documentation for the new schematic syntax.

## In-context Wiki visuals — 24 September 2026

- Added accessible :::cards blocks alongside article instructions, not only opening roadmaps. Examples distinguish private/public/host keys, map SSH client-to-server actions, order firewall setup, visualize restore drills and S3 terminology, and explain deployment, error triage, and Linux permission roles.
- Styled the cards responsively to match the existing light/dark theme tokens; diagrams use semantic lists and remain readable on narrow screens.
