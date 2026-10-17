import { LegalPage } from "../legal-page";

export default function TermsPage() {
  return <LegalPage label="Legal / 02" title="Terms of use">
    <p><strong>Draft for Encrypteron.</strong> These terms cover use of this informational website. They are not a service order, price quote, service-level agreement, or guarantee that a service is available. Complete the marked seller details and obtain jurisdiction-specific review before using them for commercial contracting.</p>

    <p>Encrypteron is a personal project based in France, before business formation. VPS and Object Storage are in preparation; no service orders are currently accepted. ROOT and its ticket support are planned features.</p>

    <h2>Who operates the website</h2>
    <p>It is operated by [LEGAL BLOCKER: insert the provider’s registered legal name, legal form, registered address, country, and company or registration number; include VAT details where applicable]. Contact: <a href="mailto:mail@encrypteron.com">mail@encrypteron.com</a>.</p>

    <h2>Website information and enquiries</h2>
    <p>The website describes VPS, object storage, and a network path. Product descriptions, displayed prices, savings labels, configurations, and availability are informational and may change. They do not themselves form an offer or reserve capacity. An enquiry by email is a request for information, not an order.</p>
    <p>A service contract is formed only when the provider sends a written order or service agreement identifying the service, total price and applicable taxes, billing and renewal terms, start date, cancellation process, and any service-specific conditions, and both parties accept it. The final pre-contract information and mandatory consumer rights will be provided before the customer is bound.</p>
    <p>VPS compute is hosted on France-hosted infrastructure. VPS public IPv4 addresses are Germany-based and traffic uses the tunnel path described on the Network page. The tunnel adds a network hop; performance depends on the customer’s route and network conditions. No fixed latency, uptime, or SLA is promised by this website.</p>

    <h2>Customer responsibilities and acceptable use</h2>
    <p>Customers must comply with applicable law and any accepted service agreement, keep their credentials secure, and ensure their use and stored material are lawful. Do not use a service to compromise systems, disrupt networks, distribute malware, infringe others’ rights, or facilitate unlawful activity. The service agreement will set out any further operational and abuse-handling requirements.</p>

    <h2>Prices, payment, and cancellation</h2>
    <p>Prices shown on this website are indicative information only. Before a consumer accepts an order, the provider must state the total payable price, applicable taxes, billing period, renewal and cancellation terms, and any other mandatory charges. These details are not established by this website and must appear in the written order or service agreement.</p>
    <p>Any recurring charge, renewal, service suspension, customer cancellation procedure, and provider termination right will be stated in the applicable service agreement. No recurring payment is taken through this website.</p>

    <h2>Withdrawal and refunds</h2>
    <p>Nothing in these terms removes mandatory consumer rights. Where a consumer has a statutory right to withdraw from a distance service contract, the applicable withdrawal period, method, and consequences will be given before the contract is made. If performance is requested during a withdrawal period, any required express request, acknowledgement, and proportionate payment will be handled as required by law.</p>
    <p>Where the law permits a discretionary refund or compensation instead of a mandatory cash refund, Encrypteron may offer service credit for future Encrypteron invoices. Such credit is not generally transferable or redeemable for cash. This voluntary credit policy does not replace a consumer’s statutory refund, withdrawal, or other non-waivable rights. A mandatory refund will be paid by the legally required method; where applicable, a different method such as credit may be used only if the consumer expressly agrees.</p>

    <h2>Availability, suspension, and termination</h2>
    <p>This website makes no availability or uptime commitment. The service agreement will specify service availability, maintenance, support, suspension, termination, data handling at the end of service, and any remedies. The provider may take proportionate action required by law or to address an immediate security or abuse risk, subject to the contract and mandatory law.</p>

    <h2>Liability and consumer protections</h2>
    <p>Nothing in these terms excludes or limits liability where exclusion or limitation is prohibited by law, including mandatory consumer protections. Any enforceable limits on liability, responsibility for customer data, and remedies must be stated in the service agreement and reviewed under the governing law.</p>

    <h2>Intellectual property and changes</h2>
    <p>The website’s text, design, and code may not be copied or reused except as permitted by law or with permission. We may update website information and these website terms. Changes to an existing service contract will be handled under that contract and applicable law; material changes to this notice will require a new entry acknowledgement where appropriate.</p>

    <h2>Applicable law and disputes</h2>
    <p>[LEGAL BLOCKER: confirm the provider’s establishment and applicable governing law and competent courts. Any choice of law or forum remains subject to mandatory consumer protections, including protections that apply in the consumer’s country of residence.]</p>
  </LegalPage>;
}
