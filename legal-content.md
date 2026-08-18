# Legal Content Package — Bathroom Remodeling Aggregator

Last updated for publication: July 14, 2026

## Implementation and legal-review notice

This file contains implementation-ready English copy for an online lead-generation and provider-matching aggregator. It is not a substitute for advice from counsel. Before publication, the operator should have qualified counsel review the copy against the operator’s actual entity, jurisdiction, contracts with providers and lead buyers, compensation model, tracking stack, communications practices, insurance, data-retention schedule, and dispute-resolution choices.

Do not publish bracketed instructions or any optional module marked “implementation only.” Replace every placeholder and remove every conditional passage that does not describe the live Site. The public pages must describe what the business actually does, not merely what its software could do.

The policies deliberately distinguish the website operator from the independent bathroom-remodeling contractors and other providers to whom a request may be routed. The operator should not be described anywhere else on the Site as the contractor, remodeler, employer, agent, insurer, guarantor, or supervisor of those providers.

## Dynamic placeholder and data-attribute map

Company identity and contact values are hydrated from js/site-config.js. Operational and legal settings are maintained in the site implementation, outside the company config.

| Public value | Suggested HTML target | Source |
| --- | --- | --- |
| Brand name | <span data-company-name>[Company Name]</span> | company.name |
| Legal entity name | <span data-company-legal-name>[Company Legal Name]</span> | company.legalName |
| Registration/company ID | <span data-company-id>[Company ID]</span> | company.id |
| Contact email | <a data-email-link href="mailto:[email]"><span data-email-text>[email]</span></a> | contact.email |
| Privacy email | <a data-privacy-email-link href="mailto:[privacy email]"><span data-privacy-email-text>[privacy email]</span></a> | contact.privacyEmail, or contact.email as fallback |
| Website/domain | <a data-website-link href="[website]"><span data-website-text>[website]</span></a> | contact.website |
| Privacy request form | <a data-privacy-request-link href="[privacy request URL]">Privacy Request Form</a> | Internal site setting |
| Cookie settings control | <button type="button" data-cookie-settings>Cookie Settings</button> | UI action, not plain URL |
| Opt-out link | <a data-do-not-sell-share-link href="[opt-out URL]">Your Privacy Choices</a> | Internal site setting |
| Provider-list disclosure | <a data-provider-list-link href="[provider list URL]">independent providers who may contact you</a> | Internal site setting |
| Maximum provider count | <span data-max-provider-count>[number]</span> | Internal legal setting |
| Governing law | <span data-governing-law>[State]</span> | Internal legal setting |
| Court venue | <span data-dispute-venue>[County, State]</span> | Internal legal setting |
| Cookie/local-storage key | <span data-cookie-storage-key>[storage key]</span> | Internal site setting |
| Privacy-page effective date | <time datetime="2026-07-14" data-legal-last-updated>July 14, 2026</time> | Internal legal setting |

Do not add operational URLs, consent limits, jurisdiction choices, cookie keys, policy dates, or UI labels to site-config.js. That file is reserved for the main browser title, company identity, brand, logo, and contact data.

If a dedicated privacy email, request form, opt-out mechanism, or provider list does not exist, do not display a dead link or invented contact method. Use the general config-driven email where appropriate. A “Your Privacy Choices” link must perform the promised opt-out and cannot be a decorative placeholder.

---

# Privacy Policy

**Last Updated:** <time datetime="2026-07-14" data-legal-last-updated>July 14, 2026</time>

## 1. Scope of This Privacy Policy

This Privacy Policy explains how <span data-company-legal-name>[Company Legal Name]</span>, doing business as <span data-company-name>[Company Name]</span> (“<span data-company-name>[Company Name]</span>,” “we,” “us,” or “our”), collects, uses, discloses, retains, and protects personal information when you:

- visit or interact with <a data-website-link href="[website]"><span data-website-text>[website]</span></a> and any page that links to this Privacy Policy (collectively, the “Site”);
- request information, a quote, or an introduction to a local bathroom-remodeling or related home-service provider;
- communicate with us by form, email, telephone, text message, or another channel;
- respond to a survey, promotion, or marketing communication; or
- otherwise interact with our provider-matching and lead-routing service.

This Privacy Policy applies to information handled by us. It does not govern an independent contractor’s or service provider’s handling of information after we disclose a request to that provider. Each independent provider may act as a separate business and may have its own privacy notice, terms, security practices, retention practices, and legal obligations.

This Privacy Policy also does not apply to personnel or job-applicant information, information processed solely on behalf of a business customer under a separate written agreement, or a third-party website or service that posts its own privacy policy, except where applicable law requires otherwise.

## 2. Our Role as an Aggregator

<span data-company-name>[Company Name]</span> operates an online information, referral, and lead-routing service. We are not a bathroom-remodeling contractor and do not ourselves perform, supervise, direct, inspect, insure, warrant, or guarantee remodeling work.

When you submit a service request, we may evaluate the details you provide—such as project type, property location, requested timing, budget range, and communication preferences—and route the request to one or more independent providers that may be able to respond. Routing may be performed through geographic, category, capacity, availability, quality, contractual, or similar matching criteria and may use automated rules. A match is an introduction, not a recommendation, endorsement, certification, employment relationship, agency relationship, or guarantee that a provider is qualified, available, licensed, insured, suitable, or willing to accept the project.

Independent providers are not our employees, agents, joint venturers, franchisees, or subcontractors. They determine whether to contact you, what information to request, whether to inspect the project, what services to offer, what price or estimate to provide, and whether to enter into a contract with you. Any project agreement is solely between you and the provider you choose.

## 3. Personal Information We Collect

“Personal information” means information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked to an individual or household. It does not include information that is lawfully public, aggregated, or deidentified so that it cannot reasonably be linked to you, where excluded by applicable law.

### 3.1 Information You Provide Directly

Depending on how you use the Site, you may provide:

- **Contact and identity information:** name, email address, telephone number, and preferred contact method.
- **Property and project information:** property location, ZIP or postal code, property type, ownership or authorization status, bathroom type, project scope, desired services, measurements, accessibility needs, preferred materials or features, existing conditions, target timing, budget range, financing interest, photographs, plans, and project descriptions.
- **Request and matching information:** requested service category, preferred appointment times, urgency, provider preferences, responses to qualification questions, and whether you have already selected a contractor.
- **Communications:** messages submitted through forms, email correspondence, customer-support requests, call notes, text messages, feedback, reviews sent directly to us, and records of complaints or disputes.
- **Consent and preference records:** the wording presented when consent was requested, the date and time of consent, form and page identifiers, IP address, browser or device information, source URL, marketing choices, cookie choices, opt-out requests, and revocation records.
- **Promotion or survey information:** entries, responses, and related contact details where a survey or promotion is offered.
- **Other information you choose to submit.**

Please do not submit Social Security numbers, government-issued identification numbers, financial-account credentials, payment-card data, medical records, or other highly sensitive information through a general project form. If a provider needs payment or regulated information, provide it directly to that provider only after independently verifying the provider and the security of the requested method.

### 3.2 Information Collected Automatically

When you use the Site, we and vendors acting for us may automatically collect:

- IP address and approximate location inferred from it;
- browser type, device type, operating system, language, screen size, and device settings;
- pages viewed, links or buttons selected, referring and exit pages, dates and times, session duration, navigation paths, and interaction events;
- form-start, form-completion, validation, attribution, and conversion events;
- cookie identifiers, local-storage values, advertising identifiers, and similar online identifiers, where used;
- network, server, diagnostic, security, error, and fraud-prevention logs;
- UTM parameters, campaign source, keyword, affiliate or publisher identifiers, click identifiers, and other attribution data; and
- consent signals and privacy-preference signals, including Global Privacy Control (“GPC”), where supported and legally required.

The Site may derive approximate location from an IP address to support provider matching, fraud prevention, or localized content. We do not request precise device geolocation unless a feature clearly asks for it and any consent required by law is obtained.

### 3.3 Information From Other Sources

We may receive information from:

- independent providers that update us about lead delivery, contact status, appointment status, service category, or complaint resolution;
- advertising, analytics, attribution, call-tracking, anti-fraud, and lead-management vendors;
- publishers, referral sources, affiliates, or co-branded sites through which you submitted a request;
- publicly available sources, government databases, licensing databases, and business directories;
- data providers that help verify, update, or prevent fraud involving contact or property information;
- social networks or third-party services when you choose to interact through them; and
- another person who submits a request for you and represents that they are authorized to do so.

If you provide another person’s information, you represent that you have authority to provide it and to request that we use it as described in this Privacy Policy.

### 3.4 Sensitive Personal Information

Some laws define certain information as “sensitive,” such as precise geolocation, account credentials, government identifiers, racial or ethnic origin, health information, or the contents of private communications. Our ordinary lead form is not intended to collect most sensitive personal information.

A project description could incidentally reveal sensitive facts—for example, an accessibility modification may suggest health-related circumstances. We use such information only as reasonably necessary to process the request, route it as directed, communicate with you, protect the service, and comply with law. Do not include sensitive details that are unnecessary for a provider to understand the requested work.

## 4. Notice at Collection

The table below summarizes categories of personal information we may collect, why we use them, the categories of recipients to whom they may be disclosed, and our general retention criteria. Actual practices depend on the features and vendors active when you use the Site.

| Category | Examples | Main purposes | Categories of recipients | General retention criteria |
| --- | --- | --- | --- | --- |
| Identifiers and contact information | Name, email, phone, address, IP address, online identifiers | Receive and route requests; communicate; authenticate consent; prevent fraud; comply with law | Matched independent providers; hosting, CRM, communications, form, security, and compliance vendors; authorities when legally required | Request lifecycle plus the period reasonably needed for consent records, disputes, legal obligations, suppression, and defense of claims |
| Customer records and project information | Property and project details, desired service, budget range, timing, photos, messages | Understand the request; match providers; customer support; quality and dispute management; analytics | Matched independent providers; CRM and lead-management vendors; support and storage vendors | Project/lead lifecycle plus a reasonable operational and legal period |
| Commercial information | Requested services, provider interactions, source and attribution data | Fulfill and measure the request; improve matching; reporting; prevent duplicate or fraudulent leads | Matched providers; attribution, analytics, CRM, and business-reporting vendors | As needed for service delivery, reporting, accounting, contracts, and claims |
| Internet or electronic network activity | Pages, clicks, device/browser, referral, cookie and log information | Operate and secure the Site; remember choices; debug; analytics; attribution; advertising where enabled | Hosting, analytics, security, consent-management, attribution, and advertising vendors where enabled | According to the applicable log, cookie, or vendor setting and legal need |
| Approximate geolocation | Location inferred from IP; project city, state, or ZIP | Provider matching; fraud prevention; localized content | Matched providers and technical/matching vendors | As associated with the lead or relevant technical log |
| Audio, electronic, or visual information | Call recordings where permitted; voicemail; project photos; chat or message content | Respond to requests; document consent and quality; train personnel; resolve disputes | Matched providers when you direct or reasonably expect disclosure; call, communications, storage, and support vendors | According to recording notice, operational need, and applicable law |
| Inferences | Likely service category, project location, project readiness, provider fit, duplicate/fraud indicators | Route leads; prioritize follow-up; personalize Site content; security | Matching, CRM, analytics, and fraud vendors; matched providers as relevant | As long as the underlying request or profile is retained and needed |
| Consent and preference data | Timestamp, disclosure version, checkbox/button action, source URL, IP/device, opt-outs, suppression status | Demonstrate permission; honor preferences; legal compliance; prevent prohibited contact | Communications and compliance vendors; providers where necessary to communicate the consent or revocation | For the period reasonably necessary to establish compliance, honor suppression, and resolve claims |

We may use or disclose a category for another purpose that is compatible with the context in which it was collected, with your direction or consent, or as otherwise permitted by law. We do not collect additional categories or use information for materially different, unrelated purposes without providing any notice or consent required by applicable law.

## 5. How We Use Personal Information

We may use personal information to:

1. **Provide the requested matching service.** Receive, validate, categorize, route, and deliver a request to potentially responsive independent providers.
2. **Communicate about the request.** Confirm submission, ask clarifying questions, provide status information, facilitate an introduction, and respond to support inquiries.
3. **Enable provider responses.** Give selected providers enough information to evaluate whether they may be able to help and to contact you using the methods you selected or authorized.
4. **Operate and improve the Site.** Maintain functionality, remember choices, test features, understand navigation, fix errors, improve content, and measure performance.
5. **Evaluate and improve matching.** Analyze service location, category, availability, lead quality, provider responsiveness, duplication, and outcomes.
6. **Personalize content.** Display relevant services, locations, forms, and calls to action.
7. **Attribute and measure traffic.** Understand which campaign, publisher, search, or referral source led to a request and compensate business partners where applicable.
8. **Market services where permitted.** Send promotional communications, create audiences, measure campaigns, and show relevant advertising, subject to consent and opt-out rights.
9. **Protect users and the business.** Detect invalid, abusive, automated, duplicate, unlawful, or fraudulent activity; enforce our Terms; secure systems; and investigate incidents.
10. **Manage provider and vendor relationships.** Deliver leads, reconcile records, administer contracts, review complaints, audit performance, and maintain suppression lists.
11. **Comply with law.** Keep consent records, honor privacy and communications requests, respond to lawful process, establish or defend legal claims, and meet accounting, tax, regulatory, and recordkeeping duties.
12. **Carry out a transaction or reorganization.** Evaluate or complete financing, acquisition, sale, merger, restructuring, insolvency, or transfer of all or part of the business.
13. **Use information for another purpose disclosed when collected or with your direction or consent.**

## 6. Lead Routing and Automated Matching

Submitting a request authorizes us to process the project and contact details needed to seek a potential match. We may route a request using manual review, automated rules, or a combination of both. Matching factors may include:

- project address, city, or ZIP code;
- selected service and project characteristics;
- requested schedule or urgency;
- provider location, coverage area, availability, capacity, and stated specialties;
- duplicate, validity, quality, abuse, or fraud signals;
- provider contractual eligibility and lead-allocation settings; and
- operational factors such as distribution limits, response history, or rotation.

Automated routing is intended to select a potentially relevant recipient for the request. It does not determine your eligibility for housing, employment, credit, insurance, education, healthcare, or another similarly significant service, and it does not decide whether a provider will accept your project or what the provider will charge.

A provider match does not mean we have endorsed, certified, ranked as superior, or guaranteed that provider. We do not warrant that routing will produce any response, quote, appointment, contract, savings, project outcome, or particular number of provider contacts.

Where applicable law grants a right concerning certain automated decision-making or profiling, you may submit a request using the methods in Section 15. We will evaluate the request based on the law that applies and the technology actually used.

## 7. How We Disclose Personal Information

We may disclose personal information to the following categories of recipients:

### 7.1 Independent Service Providers

We may disclose a service request to one or more independent bathroom-remodeling contractors, installers, designers, tradespeople, project professionals, or related providers that may be able to respond. Information disclosed may include your name, contact details, property location, project details, timing, budget range, submitted photos or messages, preferred contact method, and information needed to document the source and scope of your request.

Those providers use the information to evaluate the opportunity, contact you, prepare or discuss an estimate, schedule a visit, and potentially enter into a separate agreement with you. They may contact you directly and may separately collect information. Their practices are governed by their own notices and obligations, not this Privacy Policy.

We may be paid by a provider, lead buyer, referral partner, or other business when we deliver a request, make an introduction, facilitate contact, or when another agreed event occurs. You do not pay us merely to submit the standard matching request unless a separate, clearly disclosed paid service is offered.

### 7.2 Vendors That Process Information for Us

We may use vendors for hosting, content delivery, form processing, customer relationship management, lead distribution, database services, cloud storage, email, telephone, SMS, call tracking, call recording, customer support, analytics, attribution, consent management, suppression, auditing, security, fraud prevention, and professional advice. They may process information under contracts and instructions appropriate to their role.

### 7.3 Advertising, Analytics, and Attribution Partners

If those technologies are enabled, we may disclose online identifiers, IP address, device and browser data, Site activity, referral information, or conversion events to analytics, advertising, social-media, call-attribution, or campaign-measurement partners. Some privacy laws may treat certain advertising or cross-context behavioral disclosures as a “sale,” “sharing,” or “targeted advertising,” even when no money changes hands.

### 7.4 Publishers, Affiliates, and Referral Sources

If you arrived through a publisher, affiliate, comparison page, co-branded page, or referral source, we may share limited attribution, validation, and outcome information to administer that relationship, prevent fraud, reconcile requests, and measure performance.

### 7.5 Corporate Affiliates

We may disclose information within a corporate group for the purposes described in this Privacy Policy, subject to applicable law and appropriate controls.

### 7.6 Legal, Safety, and Compliance Recipients

We may disclose information if we reasonably believe doing so is necessary to comply with law, regulation, subpoena, court order, or lawful process; respond to governmental or regulatory requests; protect rights, property, safety, and security; investigate fraud or violations; enforce agreements; collect amounts owed; or establish, exercise, or defend legal claims.

### 7.7 Business Transactions

We may disclose or transfer information in connection with due diligence, financing, investment, merger, acquisition, reorganization, bankruptcy, receivership, sale of assets, or a similar corporate transaction. A recipient may continue to use the information as described in the notice applicable when it was collected, unless it provides any additional notice or choice required by law.

### 7.8 At Your Direction or With Your Consent

We may disclose information when you request or authorize the disclosure, including when you select a provider, use a third-party feature, or ask us to send information to another person.

## 8. Sale, Sharing, Targeted Advertising, and Lead Transfers

Privacy laws define “sell,” “share,” and “targeted advertising” differently. We do not sell personal information in the ordinary dictionary sense of selling a list of identities for unrestricted use. However, we may receive compensation for delivering or routing a service request to an independent provider or business partner, and some laws may classify that transfer as a “sale” or similar regulated disclosure. Likewise, use of certain advertising or analytics technologies may be considered “sharing” for cross-context behavioral advertising or processing for targeted advertising.

Where the applicable law treats these activities as a sale, sharing, or targeted advertising, you may opt out by:

- selecting <a data-do-not-sell-share-link href="[opt-out URL]">Your Privacy Choices</a>;
- opening <button type="button" data-cookie-settings>Cookie Settings</button> and disabling the relevant non-essential category;
- enabling a legally recognized opt-out preference signal, such as Global Privacy Control, in a supported browser; or
- contacting us as described in Section 21.

An opt-out does not prevent us from disclosing a request to a provider when you intentionally ask us to make that specific introduction or when another legal exception applies. It may limit our ability to offer broader matching, advertising, or attribution features. We will not require you to create an account solely to opt out.

We do not knowingly sell or share the personal information of consumers under 16 without the affirmative authorization required by law.

## 9. Cookies and Similar Technologies

We may use cookies, pixels, tags, scripts, software development kits, local storage, session storage, call-tracking technologies, and similar tools. These technologies may:

- keep the Site functional and secure;
- remember privacy and interface preferences;
- maintain a session and prevent duplicate submissions;
- measure traffic, performance, and interactions;
- identify referral and advertising sources;
- connect calls or form submissions to a campaign;
- prevent fraud and abuse; and
- support advertising where enabled and permitted.

Non-essential technologies should not be activated before any consent required in the user’s jurisdiction. You can learn about categories, durations, providers, and controls in our Cookie Policy and through <button type="button" data-cookie-settings>Cookie Settings</button>.

Browser controls may delete or block cookies but may not control all local storage, server-side records, device identifiers, or call-attribution tools. Blocking strictly necessary storage may affect Site functionality.

### Global Privacy Control and Do Not Track

Where legally required, we treat a valid Global Privacy Control signal as a request to opt out of sale or sharing for the browser or device that sends the signal. Because the Site may not know who you are, the signal may not apply across devices or browsers unless you make an authenticated or otherwise linkable request.

There is no universally accepted legal or technical standard requiring a particular response to every browser “Do Not Track” signal. Unless otherwise stated in the live cookie-preference interface, the Site does not respond to legacy Do Not Track signals. We do respond to legally recognized opt-out preference signals where required.

## 10. Calls, Text Messages, Email, and Consent

### 10.1 Service-Request Communications

When you provide contact information and submit a request, you ask us to communicate with you about that request and to route it to potentially responsive independent providers. We and the selected providers may contact you using the contact methods disclosed at the point of submission, subject to applicable law.

Depending on the consent language shown on the form, communications may include telephone calls, text messages, or emails and may be made using automated technology, an automatic telephone dialing system, prerecorded or artificial voice, or similar technology. The consent presented at submission—not this Privacy Policy alone—defines the scope of any such permission.

Your consent to receive marketing calls or texts is not a condition of purchasing property, goods, or services. Message and data rates may apply. Message frequency varies. Carrier delivery is not guaranteed.

### 10.2 Revoking Communications Consent

You may revoke consent by any reasonable method communicated to us or the sender. For text messages, reply STOP to the sender’s message. For help, reply HELP where supported. You may also use an unsubscribe link in a marketing email, tell a caller that you do not wish to receive further calls, or contact us at <a data-privacy-email-link href="mailto:[privacy email]"><span data-privacy-email-text>[privacy email]</span></a>.

We will honor a valid request as required by law. A provider is a separate sender and may need to receive your revocation directly. We may share a suppression or revocation instruction with recipients when reasonably necessary to honor your choice, but you should also tell any provider that contacts you to stop if you no longer wish to hear from that provider.

After an opt-out, we may send a legally permitted one-time confirmation and may still send non-marketing communications necessary to respond to a request you initiated, protect security, or comply with law.

### 10.3 Email Choices

Marketing emails will include a method to unsubscribe where required. Unsubscribing from promotional email does not prevent administrative or request-related email, such as a submission confirmation or response to a support inquiry.

### 10.4 Call Recording

Calls may be monitored or recorded for quality, training, consent verification, fraud prevention, and dispute resolution where permitted by law. When required, notice or consent will be provided before recording begins. If you do not wish to be recorded, tell the caller and use an available non-recorded communication method.

## 11. Legal Bases for Processing in the EEA, United Kingdom, and Similar Jurisdictions

This section applies only where a law requires us to identify a legal basis for processing.

We rely on one or more of the following, depending on the context:

- **Your request or steps before a contract:** to receive and process an inquiry you initiate and provide the requested matching functionality.
- **Consent:** for non-essential cookies, certain marketing, certain disclosures, precise geolocation, call recording, or another activity where consent is legally required. You may withdraw consent prospectively at any time.
- **Legitimate interests:** to operate, secure, debug, improve, and measure the Site; prevent fraud; maintain records; understand service performance; manage provider and vendor relationships; and establish or defend legal claims, where those interests are not overridden by your rights and interests.
- **Legal obligations:** to respond to lawful requests, maintain required records, honor privacy choices, and comply with tax, accounting, consumer-protection, communications, and other laws.
- **Protection of vital interests:** in the limited situation where processing is necessary to protect a person from a serious and imminent threat.

Where we rely on legitimate interests, you may have a right to object. Where we rely on consent, withdrawal does not affect processing already carried out lawfully before withdrawal.

Independent providers that receive a lead generally determine their own legal bases for their separate processing and should provide their own privacy information.

## 12. Data Retention

We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, including to provide matching and support, maintain accurate consent and suppression records, administer provider and vendor agreements, prevent fraud, comply with legal and accounting requirements, and establish or defend claims.

Retention is determined by the type of record, sensitivity, volume, purpose, operational need, contractual commitments, risk of harm, applicable limitation periods, and legal requirements. Typical criteria include:

| Record type | Retention approach |
| --- | --- |
| Incomplete form/session data | Brief period needed for form function, recovery, analytics, security, or fraud prevention; delete or deidentify when no longer needed |
| Submitted lead and project details | Duration of routing, follow-up, quality review, provider reconciliation, complaint handling, and applicable contractual/legal period |
| Consent and disclosure evidence | Long enough to demonstrate the disclosure shown, permission captured, source, and subsequent revocation through the relevant legal limitation period |
| Suppression and opt-out records | As long as reasonably necessary to ensure the preference continues to be honored; retain the minimum data needed for suppression |
| Customer-support and complaint records | Until the matter is closed plus a reasonable legal, audit, and quality period |
| Technical, security, and fraud logs | According to security need, log rotation, incident response, and legal requirements |
| Cookie and local-storage identifiers | As stated in the live Cookie Policy or preference interface |
| Deidentified or aggregated data | May be retained as permitted by law if maintained without reasonable means of reidentification |

Backups may preserve information for a limited period after deletion from active systems. We may retain information longer when required by law, subject to a preservation request or litigation hold, needed for safety or fraud prevention, or necessary to establish, exercise, or defend legal rights.

## 13. Data Security

We use reasonable administrative, technical, and physical safeguards designed to protect personal information in light of its nature and the risks involved. Measures may include access controls, least-privilege practices, encryption in transit, secure hosting, logging, vendor review, personnel controls, backup and recovery procedures, incident response, and data minimization.

No internet transmission, storage system, or security control is perfectly secure. We therefore cannot guarantee that information will never be accessed, altered, disclosed, or destroyed without authorization. You are responsible for using a secure device and connection and for carefully evaluating any provider before sending that provider additional sensitive or payment information.

If we are required to notify you of a security incident, we may do so electronically, by mail, by posting a notice, or through another legally permitted method.

## 14. Your Choices

Depending on your location and the activity involved, you can:

- decline non-essential cookies or change cookie preferences;
- opt out of sale, sharing, or targeted advertising where applicable;
- unsubscribe from promotional email;
- revoke consent to calls or texts;
- ask us to stop routing or processing a pending request, subject to information already delivered and legal retention;
- avoid submitting optional information;
- request access, correction, deletion, portability, or restriction where legally available; and
- object to or appeal certain processing decisions where legally available.

Withdrawing a choice is prospective. It does not invalidate processing that was lawful before the withdrawal, erase information held independently by a provider, or require deletion where an exception permits retention.

## 15. U.S. State Privacy Rights

Residents of certain U.S. states may have rights regarding personal information, subject to thresholds, definitions, exceptions, and verification rules in the applicable law. Depending on your state, these may include the right to:

- confirm whether we process your personal information and access it;
- obtain a portable copy of personal information you provided or that is otherwise covered;
- correct inaccuracies;
- delete personal information;
- obtain information about categories of information, sources, purposes, and recipients;
- opt out of sale, sharing, targeted advertising, or certain profiling;
- limit certain uses or disclosures of sensitive personal information;
- withdraw consent;
- receive a list of specific third parties or categories of third parties to which information was disclosed, where required;
- appeal our refusal of a request; and
- receive equal service and not be discriminated against for exercising a privacy right.

### 15.1 How to Submit a Request

Submit a request through <a data-privacy-request-link href="[privacy request URL]">Privacy Request Form</a> or by emailing <a data-privacy-email-link href="mailto:[privacy email]"><span data-privacy-email-text>[privacy email]</span></a>. Clearly state your state of residence and the right you wish to exercise.

To opt out of sale, sharing, or targeted advertising, use <a data-do-not-sell-share-link href="[opt-out URL]">Your Privacy Choices</a> or a recognized opt-out preference signal where applicable. We do not require identity verification for an opt-out request unless needed to determine whether the request is authentic or applies to the consumer.

### 15.2 Verification

We may need to verify your identity before completing an access, correction, deletion, or portability request. Verification may require matching information you provide with records we maintain and, for higher-risk requests, additional evidence. We will request only information reasonably necessary for verification. If we cannot verify a request, we may deny or limit it and explain the reason where required.

### 15.3 Authorized Agents

You may use an authorized agent where permitted. We may require evidence that you signed permission for the agent to act and may contact you directly to confirm your identity and authorization. These steps may not apply when the agent has a valid power of attorney under applicable law.

### 15.4 Appeals

If we deny a request and your state provides an appeal right, you may appeal by replying to our decision or emailing <a data-privacy-email-link href="mailto:[privacy email]"><span data-privacy-email-text>[privacy email]</span></a> with the subject “Privacy Appeal.” Include the request identifier and a brief explanation. We will respond within the period required by applicable law and, where required, provide information about contacting your state attorney general or regulator.

We will not discriminate against you for exercising a privacy right. We may deny requests that are fraudulent, abusive, technically infeasible, unreasonably repetitive, or outside the scope of applicable law, and we may retain information where a legal exception applies.

## 16. California Privacy Notice

This section supplements the rest of this Privacy Policy for California residents. Terms such as “personal information,” “sensitive personal information,” “sell,” and “share” have the meanings provided by the California Consumer Privacy Act, as amended (“CCPA”). This section applies only if and to the extent <span data-company-legal-name>[Company Legal Name]</span> is a “business” subject to the CCPA for the relevant processing.

### 16.1 California Rights

Subject to exceptions, California residents may request:

- the categories and specific pieces of personal information collected;
- the categories of sources;
- the business or commercial purposes for collecting, selling, or sharing;
- the categories of third parties to whom information is disclosed;
- deletion of personal information collected from them;
- correction of inaccurate personal information;
- opt-out of sale or sharing;
- limitation on use or disclosure of sensitive personal information when used beyond legally permitted purposes; and
- non-discriminatory treatment for exercising CCPA rights.

The methods in Section 15 may be used to exercise these rights.

### 16.2 Categories Collected and Disclosed

During the 12 months before the effective date of this notice, we may have collected the categories described in Section 4: identifiers; customer-record information; commercial information; internet or network activity; approximate geolocation; audio, electronic, or visual information; inferences; and, only if voluntarily included in a project description, limited sensitive personal information.

We may have disclosed each relevant category for business purposes to the recipient categories in Section 7. We do not use or disclose sensitive personal information to infer characteristics about a consumer or for purposes other than those permitted without a right to limit, unless the live notice expressly states otherwise and provides the required right.

### 16.3 Sale or Sharing

In the preceding 12 months, lead routing for compensation may have involved the categories of identifiers, customer/project information, commercial information, approximate location, inferences relevant to the requested service, and consent/source records. Transfers involving advertising or cross-context behavioral technologies may have involved identifiers and internet/network activity. Depending on the facts and applicable definitions, these activities may constitute sale or sharing.

The categories of recipients may include selected independent service providers, lead buyers, referral or publisher partners, and advertising or analytics partners. We do not knowingly sell or share personal information of consumers under 16 without required affirmative authorization.

Use <a data-do-not-sell-share-link href="[opt-out URL]">Your Privacy Choices</a> or GPC to submit an applicable opt-out.

### 16.4 Financial Incentives

We do not offer a financial incentive or price or service difference in exchange for retention or sale of personal information unless we first provide a separate Notice of Financial Incentive and obtain any consent required by law.

### 16.5 California “Shine the Light”

California Civil Code Section 1798.83 may permit certain California residents to request information about disclosure of personal information to third parties for those third parties’ own direct-marketing purposes. A request may be sent once per calendar year to <a data-privacy-email-link href="mailto:[privacy email]"><span data-privacy-email-text>[privacy email]</span></a> with the subject “California Shine the Light Request.” This right is distinct from CCPA rights and applies only where its statutory conditions are met.

## 17. EEA, United Kingdom, and Swiss Privacy Rights

Where applicable law provides, you may have rights to access, rectify, erase, restrict, or port personal data; object to processing based on legitimate interests or direct marketing; withdraw consent; and lodge a complaint with a competent supervisory authority.

We may need to retain some information despite a request where processing is necessary to comply with law, establish or defend legal claims, protect others, or exercise another lawful exception. You may contact us first so we can try to address the concern. You also have the right to complain to the data-protection authority where you live, work, or believe a violation occurred.

If personal data is transferred from the EEA, United Kingdom, or Switzerland to a country that has not been recognized as providing adequate protection, we will use a legally recognized transfer mechanism where required, such as approved standard contractual clauses, and supplementary measures appropriate to the risk.

## 18. Children’s Privacy

The Site is intended for adults arranging property-related services and is not directed to children under 13. We do not knowingly collect personal information online from a child under 13. If we learn that we collected such information without legally valid authorization, we will take reasonable steps to delete it.

Users under 18 may not submit a project request or agree to these Terms unless a parent or legal guardian submits the request or otherwise provides legally valid authorization. A parent or guardian who believes a child provided personal information may contact us using Section 21.

## 19. Third-Party Sites and Independent Providers

The Site may link to third-party websites, social networks, financing resources, manufacturer pages, or provider sites. We do not control those third parties and are not responsible for their privacy, security, content, or business practices. Review the third party’s privacy notice before providing information.

After a lead is delivered, an independent provider may keep the request, contact you, or process additional information under its own legal obligations and privacy practices. A deletion or opt-out request sent to us does not automatically delete information from that provider’s systems unless the law or our contract requires us to relay and effectuate it. You should contact the provider directly as well.

## 20. Changes to This Privacy Policy

We may update this Privacy Policy to reflect changes in law, technology, vendors, features, or business practices. We will post the revised policy and update the “Last Updated” date. If a change is material, we will provide additional notice or obtain consent where required. Unless otherwise stated, the revised policy applies when posted and does not retroactively reduce rights where prohibited by law.

## 21. Contact Us

Questions, complaints, or privacy requests may be directed to:

**<span data-company-legal-name>[Company Legal Name]</span>**  
Doing business as: <span data-company-name>[Company Name]</span>  
Company/registration ID: <span data-company-id>[Company ID]</span>  
Email: <a data-privacy-email-link href="mailto:[privacy email]"><span data-privacy-email-text>[privacy email]</span></a>  
Website: <a data-website-link href="[website]"><span data-website-text>[website]</span></a>

When contacting us, do not send sensitive identity documents unless we specifically request them through a secure method.

---

# Terms of Service

**Last Updated:** <time datetime="2026-07-14" data-legal-last-updated>July 14, 2026</time>

## 1. Agreement to These Terms

These Terms of Service (“Terms”) are a binding agreement between you and <span data-company-legal-name>[Company Legal Name]</span>, doing business as <span data-company-name>[Company Name]</span> (“<span data-company-name>[Company Name]</span>,” “we,” “us,” or “our”). They govern your access to and use of <a data-website-link href="[website]"><span data-website-text>[website]</span></a>, the pages and forms that link to these Terms, and our information, referral, provider-matching, and lead-routing features (collectively, the “Site” or “Matching Service”).

By accessing the Site, submitting a request, selecting a button that indicates agreement, or otherwise using the Matching Service, you acknowledge that you have read, understand, and agree to these Terms and our Privacy Policy. If you do not agree, do not use the Site or submit information.

If you use the Site for another person, household, property owner, business, or organization, you represent that you have authority to act for that person or entity and that they accept these Terms.

## 2. Important Aggregator Disclosure

<span data-company-name>[Company Name]</span> is an online aggregator and referral platform. We help users seek introductions to independent local bathroom-remodeling and related home-service providers. We are not a general contractor, specialty contractor, architect, engineer, designer, materials manufacturer, retailer, lender, insurer, escrow agent, code official, or provider of the remodeling work described on the Site.

We do not perform, control, direct, supervise, manage, inspect, certify, insure, warrant, or guarantee any provider or project. We are not a party to the agreement between you and a provider. We do not employ providers, and providers are not our agents, employees, joint venturers, franchisees, representatives, or subcontractors.

The Matching Service is generally free for homeowners and other users submitting a standard service request. We may receive compensation from a provider, lead buyer, referral source, publisher, affiliate, or another business for delivering a request, making an introduction, facilitating contact, or another agreed event. Compensation may affect which providers participate or receive a request. It does not increase the price a provider is required to quote, and it does not create a fiduciary duty or make us the provider’s guarantor.

## 3. Eligibility

You may use the request and matching features only if:

- you are at least 18 years old and legally capable of entering a binding agreement;
- you are the property owner, tenant with appropriate authority, authorized representative, or another person legally permitted to request the work;
- the information you submit is accurate and relates to a genuine project or service need;
- your use is personal or on behalf of an entity you are authorized to represent; and
- your use complies with these Terms and applicable law.

Provider availability varies by project location. Display of content does not mean a provider is available for a particular request or location.

## 4. The Matching Service

### 4.1 What We Provide

The Matching Service may allow you to:

- learn about bathroom-remodeling services and project considerations;
- submit contact, property, and project information;
- request contact from one or more potentially relevant independent providers;
- receive a confirmation or follow-up about the request; and
- access general educational content, planning checklists, service descriptions, or provider-related information.

We may use manual review, automated rules, or both to route a request. Potential criteria may include service category, project location, requested timing, provider coverage, capacity, stated specialties, contractual eligibility, allocation settings, and fraud or duplicate signals.

### 4.2 What We Do Not Promise

We do not promise:

- that any provider will receive, accept, or respond to your request;
- that you will receive a particular number of responses, estimates, or bids;
- that every provider serving your area participates in our network;
- that participating providers represent the lowest price, best value, highest rating, or most suitable option;
- that a provider’s availability, qualifications, licenses, insurance, registrations, bonding, certifications, background, financial condition, or references are current or sufficient;
- that an estimate will be free, complete, accurate, or honored;
- that a project can be performed within any schedule or budget;
- that permits, approvals, inspections, materials, labor, financing, or warranties will be available; or
- that any work will be safe, code-compliant, defect-free, timely, or satisfactory.

We may decide not to route a request, may pause or stop matching in an area or category, and may change, suspend, or discontinue any Site feature at any time.

### 4.3 No Ranking or Endorsement

A provider’s appearance on the Site, receipt of a lead, position in a list, or match to a request is not an endorsement, recommendation, certification, or statement that the provider is better than another provider. Unless a page clearly states an objective ranking methodology, order may reflect operational factors and should not be understood as a quality ranking.

## 5. Submitting a Service Request

You agree to provide complete, current, and truthful information. You must not:

- submit a false, test, speculative, competitive-intelligence, or fraudulent request;
- impersonate another person or submit contact information without authority;
- submit a request for a property or project you are not authorized to address;
- conceal material facts that would make contact or performance unlawful or unsafe;
- upload malware, unlawful material, or content that violates another person’s rights; or
- use the Matching Service to harass providers or generate unwanted communications to another person.

Submitting a request is not an acceptance of a provider’s offer and does not create a project contract. You may withdraw a pending request by contacting us, but withdrawal may not recall information already delivered to a provider. Contact any provider that has already received the request to tell that provider you no longer wish to proceed or be contacted.

## 6. Lead Routing and Disclosure to Providers

You understand that the purpose of submitting a request is to seek contact concerning the project. We may disclose the information reasonably needed to evaluate and respond to the request to up to <span data-max-provider-count>[number]</span> <a data-provider-list-link href="[provider list URL]">independent providers who may contact you</a>, as stated in the disclosure shown at submission.

Information may include your name, telephone number, email address, property or project location, selected service, project description, timing, budget range, photographs, communication preferences, and request-source or consent records.

A provider may decide independently whether and how to respond. Once disclosed, the provider may process the information under its own privacy notice and legal obligations. We are not responsible for a provider’s separate collection, use, security, retention, or communication practices, though we may take reasonable action under our provider agreements if we receive a substantiated complaint.

If the point-of-collection disclosure identifies a lead buyer, marketplace partner, or provider-list page, that disclosure is part of these Terms. The provider list or recipients should be reasonably accessible when consent is requested. The operator must not quietly expand the authorized recipient category after submission.

## 7. Calls, Texts, and Emails

### 7.1 Point-of-Collection Consent Controls

The exact disclosure shown next to the request button or consent control governs the scope of permission to call, text, or email you. These Terms and the Privacy Policy explain practices but do not, by themselves, create prior express written consent where the law requires a separate clear and conspicuous agreement.

If you expressly consent at submission, you may authorize <span data-company-name>[Company Name]</span> and the independent providers identified by or linked from the disclosure to contact you at the number or email provided about your request, including through calls, texts, or emails. The disclosure may state that automated technology, an automatic telephone dialing system, prerecorded or artificial voice, or similar technology may be used.

Your consent to receive marketing calls or texts is not a condition of purchasing any property, goods, or services. Message and data rates may apply. Message frequency varies. Telephone carriers are not responsible for delayed or undelivered messages.

### 7.2 Opting Out

You may revoke consent by any reasonable method. Reply STOP to a text from the relevant sender, use the unsubscribe link in a marketing email, tell a caller you do not wish to receive further calls, or contact us at <a data-privacy-email-link href="mailto:[privacy email]"><span data-privacy-email-text>[privacy email]</span></a>. For text help, reply HELP where supported.

Because independent providers are separate senders, an opt-out sent to us may not automatically stop a provider that independently maintains your information. We may relay suppression information where appropriate, but you should opt out directly with each provider that contacts you.

We and a provider may still send communications that do not require consent or that are reasonably necessary to complete a request you initiated, confirm an opt-out, protect security, or comply with law.

### 7.3 Telephone Number Authority

By providing a telephone number, you represent that you are the subscriber or customary user of that number or are otherwise authorized to provide it and receive the requested communications. You agree to notify us promptly if the number changes or is reassigned.

### 7.4 Call Monitoring

Calls may be monitored or recorded for quality, training, consent verification, fraud prevention, and dispute resolution where permitted by law. Notice or consent will be provided when required. If you do not wish to be recorded, say so and use an available alternative channel.

## 8. Independent Providers and Your Provider Agreement

Any estimate, scope of work, design, schedule, price, payment plan, warranty, financing, permit obligation, change order, cancellation right, dispute procedure, and project contract is offered by and agreed directly with the provider. We are not a party to that agreement and do not collect or hold project funds unless a separate feature expressly says otherwise.

The provider alone is responsible for:

- inspecting and evaluating the property and existing conditions;
- determining the appropriate scope, methods, labor, materials, and safety measures;
- providing required disclosures, estimates, contracts, notices, and cancellation rights;
- securing licenses, registrations, permits, inspections, approvals, bonds, and insurance;
- complying with building, plumbing, electrical, accessibility, environmental, employment, tax, and consumer-protection laws;
- supervising workers and subcontractors;
- protecting the property and occupants;
- performing and completing the work;
- correcting defects and honoring provider or manufacturer warranties; and
- resolving charges, liens, delays, damage, injuries, and project disputes.

You are responsible for reading and understanding the provider’s contract before signing or paying. If a provider’s contract conflicts with these Terms, the provider’s contract may govern only your relationship with that provider; it does not create duties for us.

## 9. Homeowner and Customer Responsibilities

Before hiring or paying a provider, you should independently:

1. verify the provider’s legal name, physical address, telephone number, and identity;
2. verify all licenses, registrations, certifications, and trade qualifications with the applicable government or licensing authority;
3. confirm current general-liability, workers’ compensation, automobile, bonding, and other appropriate insurance directly with the insurer or issuing organization;
4. obtain and contact recent references;
5. review complaint and disciplinary records where available;
6. obtain a detailed written scope, price, schedule, materials list, warranty, payment schedule, change-order process, cleanup responsibilities, and dispute terms;
7. compare multiple written estimates where practical;
8. confirm responsibility for permits, inspections, code compliance, utility coordination, and homeowners’ association or landlord approval;
9. investigate whether hazardous-material testing or specialist work may be needed, including for mold, asbestos, lead-based paint, structural, electrical, or plumbing conditions;
10. avoid unreasonable advance payments and use a traceable payment method;
11. understand lien rights, preliminary notices, and lien waivers applicable in your jurisdiction;
12. protect valuables and control access to the property; and
13. consult an attorney, architect, engineer, accountant, insurance professional, or other qualified adviser when appropriate.

You—not <span data-company-name>[Company Name]</span>—choose the provider and decide whether the provider’s credentials, contract, pricing, and work are acceptable.

## 10. Estimates, Prices, Promotions, and Financing

Site content about costs, timeframes, materials, return on investment, or project results is general information and may be based on examples, historical information, regional averages, third-party data, or assumptions. Actual price and timing vary based on property conditions, location, design, materials, labor, permits, supply, taxes, hidden damage, and provider practices.

A statement such as “free estimate,” “starting at,” “average cost,” “save,” “financing available,” or a promotional offer applies only if confirmed by the participating provider and may be subject to eligibility, inspection, credit approval, terms, fees, geographic limits, exclusions, and expiration. We do not guarantee Site pricing or provider quotes.

Unless we clearly identify ourselves as the lender, we do not offer or broker credit. Any financing application and decision are governed by the lender’s disclosures and terms. Do not send financial-account credentials or payment-card details through the general lead form.

## 11. No Emergency Service

The Site is not an emergency dispatch service and should not be used for an active flood, fire, gas leak, electrical hazard, structural collapse, medical event, crime, or other imminent threat. Contact emergency services, the appropriate utility, building authority, insurer, or a qualified emergency professional. We do not guarantee immediate review or response to a submitted request.

## 12. Educational Content Is Not Professional Advice

Articles, service descriptions, FAQs, checklists, illustrations, calculators, and other Site content are general educational information. They are not architectural, engineering, legal, tax, financial, insurance, environmental, code, health, or safety advice and cannot replace an on-site evaluation by a qualified professional.

Building codes, permit rules, licensing standards, product instructions, incentives, and best practices vary by jurisdiction and change over time. You should verify information with the relevant authority and professional before relying on it.

## 13. Photos, Videos, Testimonials, and Examples

Project photographs, renderings, videos, before-and-after examples, plans, prices, testimonials, ratings, and other examples are illustrative. They may show work performed by third parties, licensed stock media, generated imagery, staged spaces, or representative results. Unless expressly identified otherwise, persons depicted in photos or videos are actors or models and are not contractors or providers listed on the Site.

Results are not guaranteed. A testimonial reflects the experience of the person providing it and may not represent a typical result. We may edit a testimonial for length or clarity without changing its meaning, where permitted. Sponsored or incentivized endorsements must be disclosed as required.

## 14. User Content

“User Content” means text, photographs, plans, feedback, reviews, messages, or other material you submit to us, excluding personal information governed by the Privacy Policy.

You retain ownership of your User Content. You grant us a non-exclusive, worldwide, royalty-free, sublicensable license to host, store, reproduce, format, transmit, and disclose it only as reasonably necessary to operate, secure, improve, and promote the Site; process and route your request; communicate with you; resolve disputes; and comply with law. We will not publicly use an identifiable project photo or testimonial for marketing without any additional permission required by law.

You represent that:

- you own or have permission to submit the User Content;
- submission and authorized use do not violate privacy, publicity, copyright, contract, confidentiality, or other rights;
- the content is accurate in all material respects and not deceptive;
- the content does not contain malware or unlawful material; and
- you have removed highly sensitive information that is unnecessary for the request.

We may remove, restrict, preserve, or disclose User Content when reasonably necessary to operate the Site, enforce these Terms, protect rights or safety, or comply with law.

## 15. Acceptable Use

You may not:

- use the Site for an unlawful, deceptive, abusive, discriminatory, or fraudulent purpose;
- scrape, harvest, index, copy, or extract Site data except as expressly allowed by law or written permission;
- use bots, scripts, automated agents, or high-volume requests that burden or disrupt the Site;
- interfere with security, access controls, rate limits, networks, or another user;
- probe, scan, reverse engineer, decompile, or attempt to discover source code except where a non-waivable law expressly permits it;
- introduce malware, malicious code, or harmful content;
- impersonate another person or misrepresent affiliation;
- use Site content, forms, or provider information to compete with us, resell leads, solicit providers, or build a database without written permission;
- submit another person’s contact details to cause unwanted calls, texts, or emails;
- infringe intellectual property, privacy, publicity, or other rights;
- post defamatory, threatening, obscene, or unlawful content; or
- help another person engage in prohibited conduct.

We may use reasonable technical and legal measures to prevent misuse and may suspend access without notice when necessary to protect the Site, users, providers, or others.

## 16. Intellectual Property

The Site, including its selection, arrangement, design, branding, text, graphics, icons, software, code, forms, databases, and original content, is owned by or licensed to <span data-company-legal-name>[Company Legal Name]</span> and is protected by intellectual-property and unfair-competition laws.

Subject to these Terms, we grant you a limited, revocable, non-exclusive, non-transferable license to access and use the Site for your own lawful service inquiry. No ownership right is transferred. All rights not expressly granted are reserved.

Names, logos, product names, service names, and marks belonging to third parties remain their property. Reference to a third-party mark does not imply sponsorship or endorsement.

### Feedback

If you voluntarily send an idea, suggestion, or feedback about the Site, you grant us a perpetual, irrevocable, worldwide, royalty-free right to use it without restriction or compensation, provided we handle associated personal information under the Privacy Policy.

### Copyright Complaints

If you believe Site content infringes your copyright, send a detailed notice to <a data-email-link href="mailto:[email]"><span data-email-text>[email]</span></a> identifying the copyrighted work, the allegedly infringing material and its location, your contact details, a good-faith statement, a statement under penalty of perjury that the notice is accurate and you are authorized to act, and your physical or electronic signature. We may request additional information needed to process the notice.

## 17. Third-Party Sites, Tools, and Offers

The Site may contain links, embedded content, maps, widgets, social tools, financing resources, manufacturer information, or offers operated by third parties. We do not control or endorse them and are not responsible for their availability, terms, privacy, security, accuracy, products, or services. Your interaction with a third party is solely between you and that third party.

## 18. Privacy and Cookies

Our Privacy Policy describes how we handle personal information. Our Cookie Policy describes cookies and similar technologies and how to manage them. By using the Site, you acknowledge those notices. Where consent is legally required, use of the Site alone will not be treated as consent to non-essential technologies.

## 19. Electronic Communications and Signatures

You consent to receive records relating to your Site use electronically, including by email, text, or posting, to the extent permitted by law. You may retain electronic records by printing or saving them. You are responsible for maintaining a current email address and equipment capable of accessing standard web pages and electronic documents.

Selecting a checkbox or button labeled to show agreement may constitute your electronic signature where permitted by law. Communications consent that legally requires a distinct disclosure or signature will be requested separately and clearly.

## 20. Disclaimer of Warranties

TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SITE, MATCHING SERVICE, PROVIDER INFORMATION, MATCHES, INTRODUCTIONS, CONTENT, AND ALL RELATED FEATURES ARE PROVIDED “AS IS” AND “AS AVAILABLE,” WITH ALL FAULTS AND WITHOUT WARRANTIES OF ANY KIND.

<span data-company-legal-name>[Company Legal Name]</span> AND ITS OWNERS, AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, REPRESENTATIVES, LICENSORS, AND VENDORS DISCLAIM ALL EXPRESS, IMPLIED, AND STATUTORY WARRANTIES, INCLUDING WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, COMPLETENESS, QUIET ENJOYMENT, SECURITY, RELIABILITY, AVAILABILITY, QUALITY, AND RESULTS.

WITHOUT LIMITING THE ABOVE, WE DO NOT WARRANT THAT:

- THE SITE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE;
- INFORMATION OR PROVIDER DATA WILL BE ACCURATE, CURRENT, OR COMPLETE;
- ANY PROVIDER IS LICENSED, INSURED, BONDED, QUALIFIED, SAFE, SOLVENT, AVAILABLE, OR SUITABLE;
- A PROVIDER WILL CONTACT YOU, PROVIDE AN ESTIMATE, OR ACCEPT A PROJECT;
- AN ESTIMATE, CONTRACT, MATERIAL, WARRANTY, OR PROJECT WILL MEET YOUR EXPECTATIONS;
- WORK WILL BE PERFORMED SAFELY, LAWFULLY, ON TIME, ON BUDGET, OR WITHOUT DEFECT; OR
- ANY ERROR OR DEFECT WILL BE CORRECTED.

ALL CONTRACTORS AND PROVIDERS ARE INDEPENDENT. WE DO NOT WARRANT OR GUARANTEE ANY WORK PERFORMED. YOU ARE RESPONSIBLE FOR VERIFYING THAT THE PROVIDER YOU HIRE FURNISHES EVERY LICENSE, INSURANCE POLICY, BOND, CERTIFICATION, PERMIT, AND OTHER CREDENTIAL REQUIRED FOR THE WORK.

SOME JURISDICTIONS DO NOT ALLOW CERTAIN WARRANTY DISCLAIMERS, SO SOME OF THE ABOVE MAY NOT APPLY TO YOU. YOUR NON-WAIVABLE STATUTORY RIGHTS REMAIN UNAFFECTED.

## 21. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY LAW, <span data-company-legal-name>[Company Legal Name]</span> AND ITS OWNERS, AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, REPRESENTATIVES, LICENSORS, AND VENDORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES; LOSS OF PROFITS, REVENUE, SAVINGS, DATA, USE, GOODWILL, OR BUSINESS OPPORTUNITY; PROPERTY DAMAGE; PERSONAL INJURY; EMOTIONAL DISTRESS; SUBSTITUTE SERVICES; OR COST OF COVER ARISING OUT OF OR RELATING TO:

- USE OF OR INABILITY TO USE THE SITE;
- A MATCH, FAILURE TO MATCH, OR COMMUNICATION FROM A PROVIDER;
- THE ACTS, OMISSIONS, REPRESENTATIONS, PRICING, CONTRACTS, WORK, WORKERS, SUBCONTRACTORS, MATERIALS, DELAYS, DEFECTS, LIENS, DAMAGE, INJURIES, WARRANTIES, OR DISPUTES OF AN INDEPENDENT PROVIDER;
- RELIANCE ON SITE CONTENT OR PROVIDER INFORMATION;
- UNAUTHORIZED ACCESS, SECURITY INCIDENTS, TRANSMISSION ERRORS, OR DATA LOSS; OR
- ANY OTHER MATTER RELATING TO THE MATCHING SERVICE,

EVEN IF ADVISED THAT SUCH DAMAGES ARE POSSIBLE AND REGARDLESS OF THE THEORY OF LIABILITY.

TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE SITE OR THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID DIRECTLY TO US FOR THE MATCHING SERVICE DURING THE 12 MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM OR (B) ONE HUNDRED U.S. DOLLARS (US $100).

THE LIMITATIONS APPLY TO THE EXTENT PERMITTED EVEN IF A REMEDY FAILS OF ITS ESSENTIAL PURPOSE. THEY DO NOT LIMIT LIABILITY THAT CANNOT LAWFULLY BE LIMITED, WHICH MAY INCLUDE LIABILITY FOR FRAUD, WILLFUL MISCONDUCT, GROSS NEGLIGENCE, OR PERSONAL INJURY CAUSED DIRECTLY BY A PARTY WHERE APPLICABLE LAW PROHIBITS LIMITATION.

## 22. Disputes With Providers; Release

Any dispute concerning a provider’s contact, estimate, contract, payment, financing, lien, personnel, materials, damage, injury, warranty, or work is between you and that provider. You should first use the provider’s complaint and dispute process and seek advice appropriate to the issue.

To the maximum extent permitted by law, you release <span data-company-legal-name>[Company Legal Name]</span> and its owners, affiliates, officers, directors, employees, representatives, licensors, and vendors from claims, demands, losses, liabilities, and damages arising from or relating to your dealings or dispute with an independent provider.

If you are a California resident, you expressly waive California Civil Code Section 1542 to the extent lawfully waivable, which provides: “A general release does not extend to claims that the creditor or releasing party does not know or suspect to exist in his or her favor at the time of executing the release and that, if known by him or her, would have materially affected his or her settlement with the debtor or released party.” Residents of other jurisdictions waive comparable protections to the maximum extent permitted by law.

This release does not waive claims based on our own conduct that cannot lawfully be waived.

## 23. Indemnification

To the maximum extent permitted by law, you agree to defend, indemnify, and hold harmless <span data-company-legal-name>[Company Legal Name]</span> and its owners, affiliates, officers, directors, employees, representatives, licensors, and vendors from third-party claims, liabilities, damages, judgments, losses, costs, and reasonable legal fees arising out of or relating to:

- your unlawful or unauthorized use of the Site;
- your material breach of these Terms;
- false, misleading, or unauthorized information or User Content you submit;
- your violation of another person’s rights; or
- your conduct in connection with a project, except to the extent caused by the indemnified party’s conduct for which indemnification cannot lawfully be required.

We may control the defense and settlement of a covered claim, and you agree to cooperate. We will not settle a claim in a way that imposes a non-monetary obligation on you without your consent, which will not be unreasonably withheld. Consumer rights that cannot be waived remain unaffected.

## 24. Informal Dispute Resolution

Before filing a lawsuit against us, you and we agree to make a good-faith effort to resolve the dispute informally, unless emergency injunctive relief or a non-waivable law permits immediate filing.

Send a written notice by email to <a data-email-link href="mailto:[email]"><span data-email-text>[email]</span></a> with:

- your name and contact information;
- a description of the dispute and relevant dates;
- the request or communication identifier, if available;
- the relief sought; and
- documents reasonably supporting the claim.

We may send a notice to the email address associated with your request. The receiving party will have 30 days from receipt to respond and attempt resolution. Any limitation period will be tolled during that 30-day period where permitted by law.

## 25. Governing Law and Venue

These Terms and disputes between you and us are governed by the laws of <span data-governing-law>[State]</span>, without regard to conflict-of-law principles, except that the U.S. Federal Arbitration Act governs any arbitration module if one is validly adopted.

Subject to any separately adopted arbitration provision and applicable small-claims rights, you and we consent to exclusive jurisdiction and venue in the state and federal courts located in <span data-dispute-venue>[County, State]</span>.

If you are a consumer residing in a jurisdiction that gives you mandatory protections or a right to bring a claim in local courts, this section does not deprive you of those non-waivable protections or jurisdictional rights.

## 26. Suspension and Termination

We may restrict, suspend, or terminate access to all or part of the Site if we reasonably believe you violated these Terms, created legal or security risk, misused the Matching Service, or if suspension is necessary for maintenance or business reasons. We may preserve and disclose information as described in the Privacy Policy and as permitted by law.

You may stop using the Site at any time. Termination does not undo a lead disclosure already made, cancel a separate provider agreement, or eliminate provisions that by their nature should survive, including Sections 8, 9, 12–16, and 18–32.

## 27. Changes to the Site or Terms

We may modify the Site and these Terms. The revised Terms will display a new “Last Updated” date. If a change is material, we will provide additional notice where required. Changes apply prospectively when posted or on the stated effective date. Your continued use after that date constitutes acceptance to the extent permitted by law.

If you do not agree to revised Terms, stop using the Site. A change will not retroactively alter a dispute that arose before the change where prohibited by law.

## 28. Force Majeure

We are not responsible for delay or failure caused by events beyond our reasonable control, including natural disasters, severe weather, fire, flood, epidemic, war, terrorism, civil unrest, labor disputes, utility or telecommunications failure, cyberattack, third-party platform failure, government action, or interruption of hosting or communications services.

## 29. Assignment

You may not assign or transfer these Terms without our prior written consent. We may assign these Terms in connection with an affiliate relationship, financing, merger, acquisition, reorganization, or sale of assets, or by operation of law, subject to applicable privacy and consumer-protection requirements.

## 30. Severability; Waiver

If a provision is held invalid or unenforceable, it will be enforced to the maximum lawful extent and the remaining provisions will remain effective. Failure to enforce a provision is not a waiver. A waiver must be in writing and applies only to the specific instance stated.

## 31. Entire Agreement; No Third-Party Beneficiaries

These Terms, the Privacy Policy, Cookie Policy, and any specific disclosure or additional terms presented for a feature form the entire agreement between you and us regarding the Site and replace prior discussions concerning it. A provider’s separate contract does not amend these Terms.

Except as expressly stated, these Terms do not create third-party beneficiary rights. Headings are for convenience only. “Including” means “including without limitation.” The English version controls to the extent permitted if a translation conflicts.

## 32. Contact Information

**<span data-company-legal-name>[Company Legal Name]</span>**  
Doing business as: <span data-company-name>[Company Name]</span>  
Company/registration ID: <span data-company-id>[Company ID]</span>  
Email: <a data-email-link href="mailto:[email]"><span data-email-text>[email]</span></a>  
Website: <a data-website-link href="[website]"><span data-website-text>[website]</span></a>

---

# Cookie Policy

**Last Updated:** <time datetime="2026-07-14" data-legal-last-updated>July 14, 2026</time>

## 1. About This Cookie Policy

This Cookie Policy explains how <span data-company-legal-name>[Company Legal Name]</span>, doing business as <span data-company-name>[Company Name]</span> (“<span data-company-name>[Company Name]</span>,” “we,” “us,” or “our”), uses cookies and similar technologies on <a data-website-link href="[website]"><span data-website-text>[website]</span></a> and pages that link to this policy (collectively, the “Site”).

It should be read with our Privacy Policy, which explains how we collect, use, disclose, and protect personal information, including information associated with these technologies.

The live Cookie Settings interface and the technology inventory below must be kept consistent with the scripts, tags, pixels, embedded content, call-tracking tools, and storage actually active on the Site. If the tracking stack changes, update the inventory and consent controls before or when the new technology is deployed.

## 2. What Cookies and Similar Technologies Are

A cookie is a small text file that a website asks a browser to store on a device. Cookies may be:

- **First-party cookies,** set by the domain you are visiting;
- **Third-party cookies,** set by another domain whose technology appears on the Site;
- **Session cookies,** which generally expire when the browser session ends; or
- **Persistent cookies,** which remain until their configured expiration or until deleted.

Similar technologies include:

- browser local storage and session storage;
- pixels, tags, scripts, and web beacons;
- software development kits and embedded widgets;
- device, browser, advertising, or click identifiers;
- server logs and conversion APIs;
- call-tracking numbers and attribution identifiers; and
- technologies that recognize a browser, device, session, or interaction.

Some similar technologies do not place a traditional cookie but can serve related functions. In this policy, “cookies” sometimes refers collectively to cookies and these similar technologies.

## 3. Why We Use These Technologies

Depending on which features are active, we may use technologies to:

- make pages, forms, navigation, and security controls work;
- remember whether you accepted or declined optional technologies;
- preserve interface or accessibility preferences;
- prevent duplicate, invalid, fraudulent, or abusive submissions;
- maintain and debug Site performance;
- understand how visitors find and use the Site;
- measure form completion and provider-request conversions;
- attribute a visit, form, or telephone call to a campaign, publisher, affiliate, or search;
- display or measure advertising where enabled; and
- comply with privacy choices and legal obligations.

## 4. Categories of Technologies

### 4.1 Strictly Necessary

Strictly necessary technologies support a function required to provide the Site or a feature you request. They may be used for security, load balancing, form transmission, network management, fraud prevention, consent storage, and honoring opt-out choices.

Because these technologies are needed to provide the requested function or comply with a privacy choice, they generally cannot be disabled through our preference interface. You can configure your browser to block them, but parts of the Site may not work.

The consent-preference record does not indicate that you agreed to optional tracking; it records the choice you made, including a decline.

### 4.2 Functional

Functional technologies remember non-essential choices and enhance convenience, such as language, region, display, chat, media, map, or accessibility preferences. If disabled, the core request form should remain available, but enhanced features may not work.

### 4.3 Analytics and Performance

Analytics technologies help measure visits, referral sources, page interactions, form funnels, errors, speed, and general usage. We use this information to understand and improve the Site. Depending on configuration and law, analytics identifiers may be personal information and may require consent.

### 4.4 Advertising and Targeted Advertising

Advertising technologies may measure campaigns, limit repeated ads, create or use audiences, associate visits across sites or services, or help display ads based on activity. Some laws call this cross-context behavioral advertising, targeted advertising, “sharing,” or “sale.”

Where required, these technologies remain off unless you consent. You may opt out through <button type="button" data-cookie-settings>Cookie Settings</button>, <a data-do-not-sell-share-link href="[opt-out URL]">Your Privacy Choices</a>, or a legally recognized opt-out preference signal.

### 4.5 Attribution and Call Measurement

Attribution technologies may record campaign parameters, publisher or affiliate identifiers, click identifiers, form-conversion events, or dynamically displayed call-tracking numbers. They help determine which source produced a request or call and may be used for fraud prevention, reporting, and partner compensation.

Some attribution is strictly necessary to fulfill a request or prevent fraud; other attribution may be analytics or advertising. The Site must classify each tool based on its actual operation rather than its product label.

### 4.6 Security and Fraud Prevention

Security technologies may analyze IP address, browser or device signals, form behavior, network events, and request patterns to detect bots, malicious traffic, duplicate leads, or abuse. Some may be strictly necessary; any broader use should be separately classified and disclosed.

## 5. Current Technology Inventory

The public table must list every live cookie, local-storage item, pixel, analytics tool, embedded widget, call-attribution tool, and advertising tag that can store or access information on a user’s device or create a persistent identifier. Remove all placeholder rows before publication and do not list tools that are not deployed.

### Confirmed preference storage required by the project

| Name | Provider/domain | Type | Purpose | Category | Duration |
| --- | --- | --- | --- | --- | --- |
| <span data-cookie-storage-key>[storage key]</span> | <span data-website-text>[first-party website domain]</span> | Browser local storage or first-party cookie, according to implementation | Remembers whether the visitor accepted or declined optional technologies so the banner does not reappear on every page | Strictly necessary | <span data-cookie-preference-duration>[configured duration, or until the visitor clears storage or changes the choice]</span> |

### Live optional technologies

If optional technologies are deployed, insert audited rows in this form:

| Name | Provider/domain | Type | Purpose | Category | Duration |
| --- | --- | --- | --- | --- | --- |
| [Exact cookie, storage key, pixel, or tool name] | [Exact provider and domain] | [Cookie, local storage, pixel, script, call tracking, etc.] | [Specific purpose, not “improves experience”] | [Functional / Analytics / Advertising / Attribution] | [Session or exact maximum duration] |

If no optional technology is active, the public page should say:

> As of the Last Updated date, the Site uses the preference storage listed above and technical server logs needed to deliver and secure the Site. We do not activate analytics or advertising cookies on the Site. If that changes, we will update this policy and request consent where required.

Do not publish that statement if an analytics tag, advertising pixel, embedded third-party media tool, reCAPTCHA-like tool, map, chat widget, or persistent attribution technology is active.

## 6. Third-Party Technologies

Third parties may set or read technologies when their services are embedded or called by the Site. Depending on deployment, these parties may include hosting and content-delivery vendors, analytics providers, advertising platforms, social networks, form and CRM vendors, fraud-prevention services, mapping or media services, and telephone attribution providers.

Some vendors process data only for us under contract. Others may act as separate businesses and use information for their own purposes. Their privacy notices govern their independent activity. A link to a third-party policy does not mean we control or endorse that party.

The public technology inventory should name each third party rather than relying only on broad categories.

## 7. Consent and Preference Controls

When required by applicable law:

- optional technologies will remain disabled until you make an affirmative choice;
- “Accept” and “Decline” will be presented with comparable prominence and ease;
- declining optional technologies will not block access to basic Site content or the lead form;
- categories will not be preselected in a way that treats silence or continued browsing as consent;
- you can change or withdraw consent as easily as you gave it; and
- withdrawal will apply prospectively.

Use <button type="button" data-cookie-settings>Cookie Settings</button> to review or change preferences. The control should be available from the footer on every page. If you clear browser storage, change browser, use another device, or browse privately, we may not recognize the earlier choice and may ask again.

## 8. Browser and Device Controls

Most browsers allow you to view, block, or delete cookies. Browser instructions vary and may be available in the browser’s help or privacy settings. Blocking all cookies can prevent forms, consent records, or security features from working correctly.

Browser settings may not control every technology. Local storage, device settings, mobile advertising identifiers, and server-side processing may require separate controls. For third-party advertising choices, you may also use controls offered by the relevant provider or an industry opt-out program, but those controls may place an opt-out cookie that will be lost if you clear cookies.

## 9. Global Privacy Control and Do Not Track

Where required by applicable law, we recognize a valid Global Privacy Control signal as a request to opt out of sale or sharing for the browser or device sending the signal. The Site should apply that signal before loading technologies treated as sale or sharing and should not ask the user to re-consent in a way that overrides the signal without a legally valid process.

Because the Site may not know the visitor’s identity, a browser signal may not apply to records collected offline, to a lead already intentionally submitted, or across other browsers or devices. Contact us if you want to make a broader request.

There is no universally accepted standard for legacy “Do Not Track” signals. The Site does not respond to those signals unless the live settings interface says otherwise, but it does respond to legally recognized opt-out preference signals where required.

## 10. Lead Forms and Cookie Choices

Declining optional cookies does not stop you from intentionally submitting a request. Information typed into and submitted through the form is handled under the Privacy Policy and the disclosure shown at submission, regardless of the cookie preference.

A cookie opt-out also does not revoke consent to calls, texts, or emails. To stop those communications, use the opt-out instructions in the Privacy Policy or Terms. Likewise, opting out of communications does not automatically change cookie preferences.

## 11. Retention

Each cookie or similar technology is retained for the duration stated in the live inventory. Session cookies normally expire when the session ends. Persistent technologies remain until their configured expiration, until you delete them, or until the provider removes them.

Server-side records derived from a cookie or identifier may be retained separately under the Privacy Policy. Withdrawing cookie consent does not automatically delete information lawfully collected before withdrawal, though you may have separate deletion rights.

## 12. Updates to This Cookie Policy

We may update this Cookie Policy when technologies, vendors, purposes, laws, or controls change. We will post the revised policy and update the “Last Updated” date. We will provide additional notice or request new consent when required, including before using previously collected data for a materially different purpose that requires consent.

## 13. Contact Us

Questions about cookies or privacy choices may be directed to:

**<span data-company-legal-name>[Company Legal Name]</span>**  
Doing business as: <span data-company-name>[Company Name]</span>  
Email: <a data-privacy-email-link href="mailto:[privacy email]"><span data-privacy-email-text>[privacy email]</span></a>  
Website: <a data-website-link href="[website]"><span data-website-text>[website]</span></a>

---

# Supporting Legal and Consent Copy

The following short-form copy supports the three public policies. It should be placed at the relevant interface and kept consistent with the full policies. These notices do not replace the full pages.

## A. Full Aggregator Disclaimer

**Disclaimer:** <span data-company-name>[Company Name]</span> is a free service that helps homeowners connect with independent local bathroom-remodeling and related service providers. <span data-company-name>[Company Name]</span> is not a contractor and does not perform, direct, supervise, inspect, insure, warrant, or guarantee any provider or work. All contractors and providers are independent. You are responsible for verifying that any provider you hire has every license, registration, bond, insurance policy, permit, certification, and other credential required for the work. Any contract is solely between you and the provider you choose. All persons depicted in a photo or video are actors or models unless expressly identified otherwise and are not contractors or providers listed on this Site.

## B. Compact Footer Disclaimer

<span data-company-name>[Company Name]</span> is an independent provider-matching service, not a contractor. Providers are independent, and we do not warrant or guarantee their work. Verify licenses, insurance, permits, and credentials before hiring. People shown in photos or videos may be actors or models.

## C. About-Page Aggregator Disclosure

We make the early stage of a bathroom project simpler: tell us what you need, and our matching service can route your request to independent local providers who may be available to help. We do not send our own crews and do not perform remodeling work. Providers decide whether to respond, prepare their own estimates, and contract with you directly. You remain in control of whom you hire and are responsible for verifying credentials, comparing written terms, and deciding whether a provider is right for your home.

## D. Lead Form Privacy Notice

We use the information you submit to process your request, communicate with you, and route the request to potentially responsive independent providers. Those providers may contact you and handle your information under their own privacy notices. Learn more in our [Privacy Policy link] and [Terms of Service link].

Implementation target for the links:

<a href="privacy.html">Privacy Policy</a> and <a href="terms.html">Terms of Service</a>.

## E. Clear and Conspicuous Contact Consent — Full Version

Use this only if the actual call/text workflow and provider contracts support every statement. Place it immediately next to the unchecked consent control or submission button, in readable text, before submission:

> By clicking “<span data-cta-primary>[Get My Free Quote]</span>,” I agree to the Terms of Service and acknowledge the Privacy Policy. I request that <span data-company-name>[Company Name]</span> route my information to up to <span data-max-provider-count>[number]</span> <a data-provider-list-link href="[provider list URL]">independent providers identified here</a> that may respond to my bathroom-remodeling request. I expressly consent to receive calls and text messages from <span data-company-name>[Company Name]</span> and those identified providers at the number I provided, including through automated technology, an automatic telephone dialing system, and prerecorded or artificial voice, even if my number is on a federal, state, or corporate do-not-call list. Consent is not a condition of purchasing any property, goods, or services. Message and data rates may apply; message frequency varies. I can revoke consent at any time by replying STOP to a text, telling a caller not to call, or contacting <a data-privacy-email-link href="mailto:[privacy email]"><span data-privacy-email-text>[privacy email]</span></a>.

Implementation requirements:

- Do not precheck a marketing-consent checkbox.
- Make the submit-button label in the disclosure exactly match the button.
- Link “identified here” to the provider/partner list visible at the time of consent.
- State the real maximum number of provider recipients.
- Do not place the text behind a tooltip, collapsed accordion, or only in the Terms.
- Retain the disclosure version, timestamp, page/source URL, form ID, checkbox/button state, IP address, and request identifier.
- If only manual, non-marketing contact is used, narrow the disclosure instead of mentioning technology that is not used.
- Use separate consent if email marketing, recurring promotional SMS, or unrelated offers are planned.
- A privacy-policy acknowledgment and permission for marketing contact should be separately understandable.

## F. Service-Only Contact Request — Narrow Version

Use this only when communications are limited to responding to the specific request and no consent-requiring marketing technology is used:

> By clicking “<span data-cta-primary>[Request a Match]</span>,” I agree to the Terms of Service, acknowledge the Privacy Policy, and ask <span data-company-name>[Company Name]</span> to share my request with up to <span data-max-provider-count>[number]</span> <a data-provider-list-link href="[provider list URL]">independent providers identified here</a>. I understand that <span data-company-name>[Company Name]</span> and those providers may call, text, or email me to respond to this request. Message and data rates may apply. I can ask any sender to stop at any time.

Do not use the narrow version to conceal an automated, prerecorded, artificial-voice, recurring, or broader marketing program.

## G. Optional Promotional Email Consent

Use a separate unchecked checkbox:

> Yes, I would like to receive occasional promotional emails from <span data-company-name>[Company Name]</span>. I can unsubscribe at any time. My request for a provider match is not conditioned on this choice.

Marketing email must identify the sender, use accurate subject and routing information, include a valid postal address and a working opt-out method, and honor opt-outs within the legally required period.

## H. Form Success Modal

**Request received**

Thank you, <span data-form-first-name>[First name]</span>. <span data-company-name>[Company Name]</span> has received your request and will use the details you provided to seek a potential independent provider match. A match or response is not guaranteed. If your request is routed, one or more providers may contact you using the methods you authorized.

We sent any available confirmation to <span data-form-email>[submitted email]</span>. Need to correct your information or withdraw the pending request? Contact <a data-email-link href="mailto:[email]"><span data-email-text>[email]</span></a>. Withdrawing may not recall information already delivered to a provider, so tell any provider that contacts you if you no longer wish to proceed.

## I. Cookie Banner — No Optional Trackers

> **Your privacy choices**  
> We use essential browser storage to remember your choice and keep the Site working. We do not currently use analytics or advertising cookies. You can accept or decline optional technologies; either choice leaves the essential preference storage active. See our <a href="cookie-policy.html">Cookie Policy</a>.

Buttons: “Accept,” “Decline,” and “Cookie Policy.”

Use this version only if a technical audit confirms there are no optional trackers.

## J. Cookie Banner — Optional Trackers Present

> **Choose your privacy settings**  
> We use essential technologies to operate the Site. With your permission, we also use optional technologies for [analytics / functionality / advertising—list only active categories]. You can accept, decline, or choose categories. Declining optional technologies will not prevent you from submitting a service request. Learn more in our <a href="cookie-policy.html">Cookie Policy</a>.

Buttons, with comparable visual prominence: “Accept Optional,” “Decline Optional,” and “Manage Settings.”

The banner must not load non-essential technologies before the required choice, must remain usable at 360px width, and must not be covered by the floating CTA.

## K. Your Privacy Choices Panel

Suggested categories and descriptions:

- **Strictly Necessary — Always Active:** Required for security, form operation, consent storage, and privacy-choice enforcement.
- **Functional — Off by Default Where Consent Is Required:** Remembers optional settings and enables enhanced features.
- **Analytics — Off by Default Where Consent Is Required:** Helps us understand Site use and improve performance.
- **Advertising — Off by Default Where Consent Is Required:** Measures or personalizes advertising and may be considered sale, sharing, or targeted advertising.

Controls: “Save My Choices,” “Accept All Optional,” and “Decline All Optional.”

## L. Provider-Matching Disclosure Near Service CTAs

> <span data-company-name>[Company Name]</span> is a matching service, not a contractor. Your request may be sent to independent providers who decide whether to respond and contract with you directly. We do not guarantee availability, estimates, or work.

## M. Quote and Pricing Disclaimer

> Cost and timing information is illustrative and not a quote. Actual pricing, scope, materials, permits, availability, and schedule are determined by the independent provider after evaluating your project. Offers and financing, if shown, are subject to the provider’s or lender’s terms and eligibility requirements.

## N. Photo and Video Disclaimer

> Images and videos are illustrative. Unless expressly identified otherwise, people shown are actors or models and are not contractors or providers listed on this Site. Project appearance and results vary.

## O. Emergency Notice

> This Site is not an emergency dispatch service. For an active flood, fire, gas leak, electrical hazard, structural danger, or threat to safety, contact emergency services, the appropriate utility, or a qualified emergency professional.

## P. Privacy Request Confirmation

> We received your privacy request. We may contact you to verify your identity or clarify the request. Do not email identity documents unless we provide a secure method. We will respond within the period required by applicable law. Request ID: <span data-privacy-request-id>[Request ID]</span>.

## Q. Communications Opt-Out Confirmation

> Your request has been recorded. We will stop the covered communications as required by law. You may receive one confirmation message. Independent providers are separate senders; please also tell any provider that contacts you to stop. We may retain the minimum suppression information needed to honor your choice.

---

# Optional Dispute-Resolution Module — Implementation Only

Do not publish this module automatically. The court-venue clause in Terms Section 25 is the default draft. If the operator wants mandatory arbitration and a class-action waiver, counsel should adapt and approve a complete clause for the operator’s state, consumer base, arbitration administrator, fee allocation, opt-out procedure, mass-filing risk, and current enforceability standards.

At minimum, a reviewed arbitration clause should clearly address:

- mutual agreement to individual binding arbitration and a conspicuous jury-trial waiver;
- the Federal Arbitration Act, if applicable;
- claims covered and claims excluded;
- small-claims court and public injunctive relief where required;
- an informal notice-and-resolution period;
- the named arbitration administrator, current consumer rules, filing method, and accessible copy of the rules;
- hearing location or remote-hearing rights;
- fees and costs, including protections required for consumers;
- who decides arbitrability and enforceability;
- a clear class, collective, consolidated, and representative-action waiver only to the lawful extent;
- severability tailored to the class waiver and public-injunction law;
- a time-limited mail or email opt-out that does not affect use of the Site;
- treatment of changes to the arbitration clause for existing users; and
- governing law and venue for claims that are not arbitrated.

Do not combine an unreviewed arbitration module with Terms Section 25, and do not imply that a user waived rights through inconspicuous footer text.

---

# Pre-Publication Legal and Technical Checklist

## Business identity and jurisdiction

- Replace every fallback and verify the legal entity name, DBA, company ID, email, website, governing law, and venue.
- Confirm the legal entity—not a brand alias—is the contracting Site operator.
- Confirm the governing-law and venue clause with counsel.
- Decide whether the Site is U.S.-only. If it does not target the EEA, UK, or Switzerland, counsel may narrow the international sections; do not falsely claim a local representative.

## Aggregator and provider model

- Confirm the operator does not perform or supervise remodeling work.
- Ensure marketing never calls the operator a contractor, remodeling company, installer, licensed professional, or employer of provider crews.
- Confirm provider agreements require lawful contact, appropriate licensing/insurance, privacy protection, opt-out handling, and complaint cooperation.
- State the real maximum number of providers that may receive one lead.
- Maintain a provider/partner list accessible from the consent disclosure if relied upon.
- Determine whether lead transfers are a sale or sharing under each applicable state law and enable the corresponding opt-out.
- Do not claim that all providers are screened, licensed, insured, background-checked, or vetted unless the exact check, frequency, source, limitations, and current status can be substantiated.

## Privacy and data inventory

- Map every form field, automatic data point, source, purpose, recipient, vendor, system, location, and retention rule.
- Identify controller/business versus processor/service-provider roles in contracts.
- Audit CRM, form handler, email, SMS, telephone, call recording, call tracking, analytics, advertising, CDN, fonts, maps, chat, CAPTCHA, hosting logs, and affiliate scripts.
- Confirm whether project photos or accessibility requests can expose sensitive information.
- Adopt written retention periods rather than keeping leads indefinitely.
- Implement verified access, correction, deletion, portability, opt-out, appeal, and authorized-agent workflows where applicable.
- Honor Global Privacy Control where required.
- If subject to California law, assess the CCPA effective January 1, 2026, including risk-assessment, cybersecurity-audit, and automated-decisionmaking requirements and their applicable compliance dates.
- Assess data-broker registration and deletion-platform obligations if the operator’s activities meet a statutory data-broker definition.

## Calls, texts, email, and recording

- Diagram every caller, texter, email sender, telephone number, technology, message purpose, and provider recipient.
- Make point-of-collection consent specific to the actual senders and technologies.
- Keep marketing consent optional and unbundled from the ability to request or buy service.
- Never use a prechecked marketing-consent box.
- Store auditable evidence of disclosure and consent.
- Support STOP and other reasonable revocation methods; promptly propagate suppression as legally required.
- Ensure email marketing includes accurate sender information, a valid postal address, an opt-out, and timely suppression.
- Give call-recording notice and obtain consent based on the law applicable to the participants.
- Scrub and respect federal, state, internal, and provider-level do-not-call requirements as applicable.

## Cookies and tracking

- Use one current inventory generated from the production build, not assumptions.
- Block non-essential tags before consent in jurisdictions that require it.
- Give Accept and Decline comparable prominence.
- Store decline as well as acceptance.
- Keep Cookie Settings available after the banner closes.
- Make the banner, settings panel, floating CTA, and lead form coexist at 360px without overlap.
- Ensure changing cookie choice actually starts or stops the corresponding technology.
- Ensure GPC suppresses applicable sale/sharing technologies.

## User-facing consistency

- Link privacy.html, terms.html, and cookie-policy.html in the header/footer as designed.
- Put the full contact-consent disclosure immediately beside the submission control.
- Put the short aggregator disclaimer near the form and the full disclaimer in the footer/About/legal pages.
- Ensure the success modal does not promise a provider will call.
- Ensure titles and company identity hydrate from site-config.js on every legal page.
- Do not hardcode company contact details outside permitted fallbacks.
- Verify all legal links, email links, phone links, privacy controls, and provider-list links.
- Retain the fixed “Last Updated: July 14, 2026” date unless the public copy or actual practices change later.

---

# Official Compliance References — Implementation Only, Not Public Policy Copy

These sources were checked while preparing this package. They are reference points, not a substitute for advice about the operator’s specific facts.

- California Attorney General, California Consumer Privacy Act overview and consumer rights: https://oag.ca.gov/privacy/ccpa
- California Privacy Protection Agency, laws and regulations effective January 1, 2026: https://cppa.ca.gov/regulations/
- California Privacy Protection Agency, 2025 regulations covering risk assessments, cybersecurity audits, and automated decisionmaking technology: https://cppa.ca.gov/regulations/ccpa_updates.html
- Federal Communications Commission, consent-revocation rules for robocalls and robotexts: https://docs.fcc.gov/public/attachments/FCC-24-24A1_Rcd.pdf
- Federal Trade Commission, CAN-SPAM compliance guide: https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business
- Federal Trade Commission, COPPA frequently asked questions: https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions
- European Commission, individual data-protection rights: https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en
- European Commission, cookies policy explanation and inventory example: https://commission.europa.eu/cookies-policy_en
- UK Information Commissioner’s Office, cookies and similar technologies guidance: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/
