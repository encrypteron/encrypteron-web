import { LegalPage } from "@/app/legal-page";

export default function FrenchPrivacyPage() {
  return <LegalPage label="Juridique / 01" title="Notice de confidentialité">
    <p><strong>Projet de notice Encrypteron.</strong> Cette notice décrit les traitements visibles dans le code actuel du site. L’identité du responsable et plusieurs informations sur l’hébergement restent à confirmer ; complétez-les avant toute activité commerciale.</p>
    <h2>Responsable du traitement</h2>
    <p><strong>Responsable :</strong> [INFORMATION À COMPLÉTER : dénomination légale, adresse, pays et numéro d’immatriculation. Ajouter les informations de TVA le cas échéant.]</p>
    <p>Les demandes relatives aux données peuvent être envoyées à <a href="mailto:mail@encrypteron.com?subject=Demande%20relative%20%C3%A0%20mes%20donn%C3%A9es">mail@encrypteron.com</a>. Confirmez que cette boîte est suivie pour ces demandes et identifiez l’autorité de contrôle compétente avant le lancement.</p>
    <h2>Données traitées</h2>
    <ul>
      <li><strong>Journaux techniques et de sécurité :</strong> le fournisseur d’hébergement ou de diffusion peut produire des journaux de requêtes et de sécurité. Ils peuvent inclure l’adresse IP, la date et l’heure, le chemin demandé, le statut de réponse, des informations sur le navigateur ou l’appareil, le référent et des données de diagnostic. Les champs exacts, le prestataire, le lieu de stockage, les accès et la durée de conservation restent à confirmer à partir de la configuration déployée et du contrat d’hébergement.</li>
      <li><strong>Demandes par e-mail :</strong> si vous nous contactez, nous recevons votre adresse e-mail et les informations que vous choisissez d’inclure. Le site ouvre votre logiciel de messagerie ; il ne transmet pas la demande via un formulaire du site.</li>
      <li><strong>Préférences du navigateur :</strong> le site utilise le cookie <code>theme</code> pour mémoriser le thème clair ou sombre et le cookie <code>legal_notice_version</code> pour mémoriser la version linguistique des conditions et de la notice que vous avez confirmée. Ce sont des cookies opérationnels de première partie, conservés au maximum un an. Le cookie de confirmation ne sert pas à l’analyse d’audience et n’enregistre pas votre identité.</li>
      <li><strong>Langue :</strong> le cookie <code>language</code> mémorise votre choix entre français et anglais pendant un an au maximum.</li>
    </ul>
    <p>Le code actuel de l’application ne contient pas d’outil d’analyse d’audience, de publicité ou de suivi intersites. Les traitements du fournisseur d’hébergement et de messagerie restent à vérifier.</p>
    <h2>Finalités et bases légales</h2>
    <ul>
      <li>Les journaux techniques servent à transmettre les pages, diagnostiquer les erreurs, protéger la disponibilité et examiner les abus ou incidents de sécurité. La base envisagée est l’intérêt légitime à exploiter et sécuriser le site (article 6, paragraphe 1, point f du RGPD) ; le responsable doit documenter la mise en balance des intérêts.</li>
      <li>Les demandes par e-mail sont traitées pour y répondre et, si vous le demandez, prendre des mesures précontractuelles (article 6, paragraphe 1, point b) ; les autres échanges peuvent relever de l’intérêt légitime (article 6, paragraphe 1, point f), selon le cas.</li>
      <li>Les cookies de thème, de langue et de confirmation mémorisent les choix nécessaires à l’affichage du site et à son parcours d’entrée. Ils ne servent pas à suivre votre navigation ni à cibler de la publicité.</li>
    </ul>
    <h2>Destinataires, transferts et conservation</h2>
    <p>Les fournisseurs d’hébergement, de CDN, de sécurité et de messagerie peuvent traiter certaines informations pour fournir leurs services. Leurs noms, rôles, lieux de traitement, garanties relatives aux transferts internationaux et durées de conservation restent à confirmer avant publication de la présente notice.</p>
    <p>Les journaux techniques doivent être conservés pendant une durée documentée, nécessaire à la fourniture du site, au diagnostic et à la sécurité, puis supprimés ou anonymisés de façon irréversible. La durée actuellement configurée n’est pas connue et doit être définie avant le lancement. Les échanges par e-mail sont conservés le temps nécessaire au traitement de la demande et, le cas échéant, de la relation ou des obligations légales ; définissez la durée applicable avant toute commande commerciale.</p>
    <h2>Vos droits</h2>
    <p>Sous réserve des conditions et exceptions prévues par la loi, vous pouvez demander l’accès, la rectification, l’effacement, la limitation ou la portabilité de vos données et vous opposer aux traitements fondés sur l’intérêt légitime. Lorsque le traitement repose sur le consentement, vous pouvez le retirer. Contactez <a href="mailto:mail@encrypteron.com?subject=Demande%20relative%20%C3%A0%20mes%20donn%C3%A9es">mail@encrypteron.com</a>. Vous pouvez également saisir l’autorité de contrôle compétente selon l’établissement du responsable et votre situation. Si le responsable est établi en France, il s’agit de la CNIL.</p>
    <h2>Sécurité</h2>
    <p>Les mesures de sécurité du site déployé n’ont pas été vérifiées de manière indépendante. Avant le lancement, documentez les protections réellement utilisées concernant le transport, les accès d’administration, la maintenance logicielle, les sauvegardes, la gestion des incidents et les garanties du fournisseur d’hébergement ; mettez en œuvre des mesures adaptées aux risques. Cette notice ne prouve pas qu’une mesure particulière est activée.</p>
    <h2>Mineurs et mises à jour</h2>
    <p>Le site n’est pas conçu pour collecter des informations auprès de mineurs. Cette notice pourra évoluer avec le site ou ses traitements. Si une modification nécessite une nouvelle confirmation à l’entrée, la version correspondante sera mise à jour.</p>
  </LegalPage>;
}
