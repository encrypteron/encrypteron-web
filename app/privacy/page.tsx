import { LegalPage } from "../legal-page";

export default function PrivacyPage() {
  return <LegalPage label="Legal / 01" title="Privacy notice">
    <p><strong>Draft for Encrypteron.</strong> This notice describes the processing visible from the current website code. The controller identity and several hosting details below are not yet confirmed; this notice must be completed before commercial launch.</p>

    <h2>Who is responsible</h2>
    <p><strong>Controller:</strong> [LEGAL BLOCKER: insert the registered legal name, address, country, and company or registration number. Add VAT details where applicable.]</p>
    <p>Privacy requests can be sent to <a href="mailto:mail@encrypteron.com?subject=Privacy%20request">mail@encrypteron.com</a>. Confirm that this mailbox is monitored for privacy requests and identify the competent supervisory authority before launch.</p>

    <h2>Information processed</h2>
    <ul>
      <li><strong>Technical and security logs:</strong> the hosting or delivery provider may generate request and security logs. These can include an IP address, date and time, requested path, response status, browser or device information, referrer, and diagnostic data. The exact fields, provider, storage location, access, and retention period are [HOSTING BLOCKER: confirm from the deployed host/CDN configuration and contract].</li>
      <li><strong>Email enquiries:</strong> if you contact us, we receive the email address and any information you choose to include. The site opens your email application; it does not submit the enquiry to a site form.</li>
      <li><strong>Browser preferences:</strong> the site stores a <code>theme</code> cookie for your dark/light preference, a <code>language</code> cookie for your English/French choice, and a <code>legal_notice_version</code> cookie to remember which language version of the Terms and Privacy Notice you acknowledged. These first-party operational cookies have a maximum lifetime of one year. The acknowledgement cookie is not analytics and does not record your identity.</li>
    </ul>
    <p>The current application code contains no analytics, advertising, or cross-site tracking integration. Hosting and email-provider processing still needs to be confirmed.</p>

    <h2>Purposes and legal bases</h2>
    <ul>
      <li>Technical logs are used to deliver the pages, diagnose faults, protect availability, and investigate abuse or security incidents. The intended basis is legitimate interests in operating and securing the site (GDPR Article 6(1)(f)); the controller must document the balancing assessment.</li>
      <li>Email enquiries are handled to respond and, where you request it, take steps before a possible contract (Article 6(1)(b)); other correspondence may be handled on the basis of legitimate interests (Article 6(1)(f)), as applicable.</li>
      <li>The theme and acknowledgement cookies remember choices needed for the site experience and entry flow. They are not used to track browsing or target advertising.</li>
    </ul>

    <h2>Recipients, transfers, and retention</h2>
    <p>Hosting, CDN, security, and email providers may process information to provide their services. Their names, roles, processing locations, international-transfer safeguards, and retention periods are [PROCESSOR BLOCKER: identify and verify each provider and its configuration before launch]. Do not publish this notice as final until these facts have been checked.</p>
    <p>Technical logs should be retained only for a documented period necessary for delivery, troubleshooting, and security, then deleted or irreversibly anonymised. The actual configured period is currently unknown and must be set and recorded before launch. Enquiry correspondence is retained only as long as needed to handle the enquiry and any resulting relationship or legal obligations; define the applicable retention schedule before taking commercial orders.</p>

    <h2>Your rights</h2>
    <p>Subject to the conditions and exceptions in applicable law, you may request access, correction, deletion, restriction, or portability of your personal data, and object to processing based on legitimate interests. Where processing is based on consent, you may withdraw it. Contact <a href="mailto:mail@encrypteron.com?subject=Privacy%20request">mail@encrypteron.com</a>. You may also complain to the supervisory authority competent for the controller’s establishment or your circumstances. If the controller is established in France, the authority is the CNIL.</p>

    <h2>Security</h2>
    <p>The security controls used by the deployed site have not been independently verified. Before launch, document the actual transport security, administrative access controls, software maintenance, backups, incident process, and hosting-provider safeguards, and implement measures appropriate to the risk. Do not rely on this draft as evidence that a particular control is enabled.</p>

    <h2>Children and changes</h2>
    <p>The website is not designed to collect information from children. We may update this notice when the site or its processing changes. If an update changes the terms visitors must acknowledge, the entry acknowledgement version will be updated.</p>
  </LegalPage>;
}
