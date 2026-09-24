import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageShell } from "../../components/SiteShell";
import { productionSiteUrl } from "../../config/site";

export const metadata: Metadata = {
  title: { absolute: "Private, Local-First Personal Finance for Mac | Capehelm" },
  description:
    "Learn how Capehelm keeps personal finance data local on your Mac, avoids bank credentials, and limits network use to services such as Apple StoreKit.",
  alternates: { canonical: `${productionSiteUrl}/privacy` },
};

export const dynamic = "force-static";

const sections = [
  "Our Privacy Approach",
  "Information Processed by the Capehelm App",
  "Where Your Financial Data Is Stored",
  "iCloud Drive and Other Storage Services",
  "Financial Institution Connections",
  "Imported Files",
  "Backups, Reports and Exports",
  "Demo Mode",
  "Subscriptions, Introductory Trial and Apple StoreKit",
  "Terms Acceptance Information",
  "App Analytics and Tracking",
  "Information You Send to Capehelm",
  "Capehelm Website",
  "Cookies and Advertising",
  "Information Capehelm Does Not Intentionally Collect",
  "Disclosure of Personal Information",
  "Data Retention",
  "Your Privacy Choices",
  "Security",
  "Children",
  "International Users",
  "Canadian Privacy Rights",
  "Legal Requests",
  "Third-Party Services",
  "No Sale of Personal Information",
  "Changes to This Privacy Policy",
  "Contact and Privacy Questions",
] as const;

function SupportEmail() {
  return <a href="mailto:support@capehelm.com">support@capehelm.com</a>;
}

function SectionHeading({ number, children }: { number: number; children: ReactNode }) {
  return (
    <h2 id={`section-${number}`}>
      <span>{String(number).padStart(2, "0")}</span>
      {children}
    </h2>
  );
}

export default function PrivacyPage() {
  return (
    <PageShell>
      <header className="policy-hero section-shell">
        <p className="eyebrow"><span /> Legal</p>
        <h1>Capehelm<br /><em>Privacy Policy</em></h1>
        <div className="policy-intro">
          <p className="policy-date">Effective Date: September 18, 2026</p>
          <p>Capehelm is a local-first personal finance application designed to help you understand, organize, and plan your finances while keeping your financial information under your control.</p>
          <p>This Privacy Policy explains how information is handled when you use the Capehelm application, visit the Capehelm website, or contact Capehelm for support.</p>
          <p>Capehelm is operated by a sole proprietor.</p>
          <p>For privacy questions, requests, or concerns, contact <SupportEmail />.</p>
        </div>
      </header>

      <div className="policy-layout section-shell">
        <aside className="policy-index" aria-label="Privacy policy contents">
          <p>Contents</p>
          <ol>
            {sections.map((title, index) => (
              <li key={title}><a href={`#section-${index + 1}`}>{title}</a></li>
            ))}
          </ol>
        </aside>

        <article className="policy-document">
          <section>
            <SectionHeading number={1}>Our Privacy Approach</SectionHeading>
            <p>Capehelm is designed around a simple principle:</p>
            <p className="policy-callout"><strong>Your personal financial data should remain yours.</strong></p>
            <p>Capehelm does not operate a cloud service that receives or stores your personal finance database.</p>
            <p>Capehelm does not require you to create a Capehelm account.</p>
            <p>Capehelm does not use your financial information for advertising.</p>
            <p>Capehelm does not sell your personal information.</p>
            <p>Capehelm does not use third-party advertising SDKs.</p>
            <p>Capehelm does not use finance-data telemetry or behavioral analytics.</p>
            <p>Your transactions, account information, categories, budgets, forecasts, Net Worth information, retirement assumptions, financial to-do items, reports, and related financial records are generally processed locally on your device or stored in files and locations that you choose.</p>
          </section>

          <section>
            <SectionHeading number={2}>Information Processed by the Capehelm App</SectionHeading>
            <p>To provide its functionality, Capehelm may process information that you enter, import, or create, including:</p>
            <ul>
              <li>transaction information;</li><li>merchant and transaction descriptions;</li><li>transaction dates and amounts;</li><li>account names or descriptions;</li><li>categories and categorization rules;</li><li>budget amounts and targets;</li><li>forecast items and assumptions;</li><li>Net Worth accounts, balances, assets, and liabilities;</li><li>retirement contribution and growth assumptions;</li><li>Financial To-Do items;</li><li>imported CSV information;</li><li>custom financial-institution import profiles;</li><li>reports and exports;</li><li>backup information; and</li><li>other information you choose to enter into your Finance Documents.</li>
            </ul>
            <p>This information can be highly sensitive.</p>
            <p>Capehelm processes this information to provide the features you request, such as importing transactions, categorizing spending, creating budgets, generating forecasts, calculating Net Worth, creating retirement projections, identifying potential duplicate charges, and generating reports.</p>
            <h3>This financial information is not sent to Capehelm</h3>
            <p>Capehelm does not operate a server that receives this financial information.</p>
            <p>Capehelm does not upload your transaction history, account balances, categories, budgets, forecasts, Net Worth information, retirement information, reports, or imported statements to the Capehelm operator.</p>
          </section>

          <section>
            <SectionHeading number={3}>Where Your Financial Data Is Stored</SectionHeading>
            <p>Capehelm is designed to store financial data locally.</p>
            <p>Depending on how you use Capehelm, information may be stored:</p>
            <ul><li>within Capehelm&apos;s local application storage on your Mac;</li><li>inside a Capehelm <code>.pfinance</code> Finance Document;</li><li>in a backup file you create;</li><li>in an export or report you create; or</li><li>in another location you explicitly choose.</li></ul>
            <p>You control where user-created Finance Documents, backups, exports, and reports are saved.</p>
          </section>

          <section>
            <SectionHeading number={4}>iCloud Drive and Other Storage Services</SectionHeading>
            <p>You may choose to save a Capehelm Finance Document, backup, export, or other file in iCloud Drive or another third-party storage or synchronization service.</p>
            <p>If you do so, that service may copy, synchronize, transmit, process, or store the file according to its own terms and privacy practices.</p>
            <p>For example, a Finance Document stored in iCloud Drive may be transmitted and stored by Apple as part of the normal operation of iCloud Drive.</p>
            <p>This does <strong>not</strong> mean Capehelm receives the contents of that document.</p>
            <p>Use of a third-party storage service is your choice and is governed by the privacy policy and terms of that provider.</p>
          </section>

          <section>
            <SectionHeading number={5}>Financial Institution Connections</SectionHeading>
            <p>Capehelm does not require you to provide online banking credentials.</p>
            <p>Capehelm does not log in to your financial institution on your behalf.</p>
            <p>Capehelm does not operate an account-aggregation service.</p>
            <p>Financial information is generally brought into Capehelm through files that you select for import, such as supported CSV transaction files, or through information you enter manually.</p>
            <p>You are responsible for obtaining those files lawfully and for reviewing imported information for accuracy.</p>
          </section>

          <section>
            <SectionHeading number={6}>Imported Files</SectionHeading>
            <p>When you select a financial statement or transaction file for import, Capehelm processes that file locally to identify and normalize supported information.</p>
            <p>Depending on the import workflow, Capehelm may locally retain information needed for:</p>
            <ul><li>imported transactions;</li><li>duplicate detection;</li><li>import history;</li><li>mapping financial-institution file formats;</li><li>transaction categorization; and</li><li>reusable custom import profiles.</li></ul>
            <p>Capehelm does not upload the contents of imported financial files to Capehelm servers.</p>
          </section>

          <section>
            <SectionHeading number={7}>Backups, Reports and Exports</SectionHeading>
            <p>Capehelm may allow you to create:</p>
            <ul><li>Capehelm Finance Documents;</li><li>backup archives;</li><li>CSV exports;</li><li>PDF reports; and</li><li>other local files.</li></ul>
            <p>These files may contain sensitive financial information.</p>
            <p>Capehelm creates or stores these files only as part of actions you initiate.</p>
            <p>You are responsible for choosing where these files are stored and for protecting copies you create or share.</p>
            <p>If you share a Capehelm report, backup, Finance Document, or export with another person or service, that copy is no longer solely under Capehelm&apos;s local application controls.</p>
            <p>When you choose an Email / Share action, Capehelm hands the selected local file to the macOS sharing service or your email application; whether and where it is sent is determined by the action you take in that service.</p>
            <p>If you choose to prepare an inquiry about a transaction, Capehelm may open a draft in your default email application containing the details needed for that inquiry. If it cannot open that draft, Capehelm may copy the draft text to your clipboard instead. Capehelm does not send the email or read the clipboard contents after that handoff.</p>
            <p>When you choose to open a Capehelm support, privacy, or other website link, Capehelm hands the link to your default browser. Information handled by your email, sharing, clipboard, browser, or destination service is governed by that service&apos;s own privacy practices.</p>
          </section>

          <section>
            <SectionHeading number={8}>Demo Mode</SectionHeading>
            <p>Capehelm may offer a demonstration mode containing fictional or synthetic financial information.</p>
            <p>Demo data is generated for demonstration purposes and is kept separate from your personal Finance Documents.</p>
            <p>Capehelm does not use your personal financial information to generate the demo.</p>
          </section>

          <section>
            <SectionHeading number={9}>Subscriptions, Introductory Trial and Apple StoreKit</SectionHeading>
            <p>Capehelm uses Apple&apos;s App Store and StoreKit services for matters such as:</p>
            <ul><li>determining access to Capehelm subscription features;</li><li>determining eligibility for an introductory trial;</li><li>processing and renewing subscriptions;</li><li>cancelling and managing subscriptions; and</li><li>restoring purchases.</li></ul>
            <p>Eligible new subscribers may receive Apple&apos;s two-month introductory free trial with either the Monthly or Annual subscription option, subject to Apple&apos;s introductory-offer eligibility rules.</p>
            <p>Apple processes and manages App Store subscriptions and associated Apple account and payment information according to Apple&apos;s own terms and privacy practices.</p>
            <p>Capehelm does not receive your payment-card number.</p>
            <p>Capehelm may receive or evaluate StoreKit information necessary to determine whether the device or Apple account has an applicable Capehelm entitlement.</p>
            <p>Capehelm does not send your transactions, budgets, account balances, Finance Documents, or other personal financial information to Apple as part of the Capehelm purchase or entitlement process.</p>
          </section>

          <section>
            <SectionHeading number={10}>Terms Acceptance Information</SectionHeading>
            <p>Capehelm may locally store limited information recording your acceptance of the application&apos;s Terms of Use, including:</p>
            <ul><li>the Terms version you accepted; and</li><li>the date and time of acceptance.</li></ul>
            <p>This information is stored locally as application preference information.</p>
            <p>It is not added to your personal Finance Document and is not transmitted to a Capehelm server.</p>
          </section>

          <section>
            <SectionHeading number={11}>App Analytics and Tracking</SectionHeading>
            <p>The Capehelm application does not contain Capehelm-operated:</p>
            <ul><li>behavioral analytics;</li><li>advertising analytics;</li><li>third-party advertising SDKs;</li><li>cross-app tracking;</li><li>finance-data telemetry;</li><li>user profiling for advertising; or</li><li>remote usage reporting.</li></ul>
            <p>Capehelm does not sell your information or use your financial information to build advertising profiles.</p>
            <p>Local development or diagnostic functionality may measure technical performance on the device. Such functionality is designed not to record personal financial values such as transaction descriptions, merchant names, account information, or transaction amounts.</p>
          </section>

          <section>
            <SectionHeading number={12}>Information You Send to Capehelm</SectionHeading>
            <p>Capehelm may receive personal information when you voluntarily contact us.</p>
            <p>For example, if you email <SupportEmail />, we may receive:</p>
            <ul><li>your email address;</li><li>your name, if included in your email account or message;</li><li>the contents of your message;</li><li>attachments you choose to send; and</li><li>information necessary to respond to your request.</li></ul>
            <p>We use this information to respond to support requests, questions, privacy inquiries, complaints, or other correspondence.</p>
            <h3>Please do not send sensitive financial files unless specifically necessary</h3>
            <p>Because Capehelm is designed to keep financial information local, you should avoid sending:</p>
            <ul><li>bank statements;</li><li>transaction exports;</li><li><code>.pfinance</code> Finance Documents;</li><li>Capehelm backups;</li><li>financial reports containing personal information;</li><li>account numbers; or</li><li>other sensitive financial information</li></ul>
            <p>through ordinary support email unless there is a clear reason to do so and you understand the risks.</p>
            <p>We will never ask for your online banking password.</p>
          </section>

          <section>
            <SectionHeading number={13}>Capehelm Website</SectionHeading>
            <p>When you visit the Capehelm website, the infrastructure used to deliver the website may necessarily process basic technical information required to respond to web requests, such as:</p>
            <ul><li>IP address;</li><li>browser or device information;</li><li>requested page;</li><li>date and time of a request; and</li><li>standard network or server information.</li></ul>
            <p>Such information may be processed by the website hosting, domain, security, or content-delivery providers used to operate the website.</p>
            <p>Capehelm does not use the website as a mechanism for collecting your Capehelm financial records.</p>
            <p>If Capehelm later introduces optional website analytics, cookies, mailing lists, accounts, contact forms, or other services that materially change the information collected through the website, this Privacy Policy will be updated accordingly.</p>
          </section>

          <section>
            <SectionHeading number={14}>Cookies and Advertising</SectionHeading>
            <p>The Capehelm application does not use browser cookies.</p>
            <p>Capehelm does not use your personal financial information for targeted advertising.</p>
            <p>Capehelm does not sell personal information to advertisers or data brokers.</p>
            <p>If website functionality that uses cookies or similar technologies is introduced in the future, this policy will be updated to describe those practices.</p>
          </section>

          <section>
            <SectionHeading number={15}>Information Capehelm Does Not Intentionally Collect</SectionHeading>
            <p>Capehelm does not intentionally require or collect through the App:</p>
            <ul><li>online banking passwords;</li><li>financial institution login credentials;</li><li>government identification numbers;</li><li>precise location;</li><li>advertising identifiers;</li><li>biometric information; or</li><li>contact lists.</li></ul>
            <p>Capehelm does not need this information to perform its normal personal-finance functions.</p>
          </section>

          <section>
            <SectionHeading number={16}>Disclosure of Personal Information</SectionHeading>
            <p>Capehelm does not sell or rent personal information.</p>
            <p>Because Capehelm does not receive your local financial database, Capehelm cannot disclose financial information that it does not possess.</p>
            <p>Information under Capehelm&apos;s control may be disclosed only where reasonably necessary, including:</p>
            <ul><li>to service providers that support the operation of the Capehelm website or communications;</li><li>where you direct or consent to the disclosure;</li><li>where necessary to investigate misuse or protect legal rights; or</li><li>where required or permitted by applicable law.</li></ul>
            <p>Service providers may process limited information only in connection with the service they provide.</p>
            <p>Your use of Apple services, including the App Store, StoreKit, and any optional iCloud storage, is separately governed by Apple&apos;s privacy practices.</p>
          </section>

          <section>
            <SectionHeading number={17}>Data Retention</SectionHeading>
            <h3>Financial data stored locally</h3>
            <p>Capehelm does not set a central retention period for financial information stored solely on your device or in files under your control because Capehelm does not possess those files.</p>
            <p>You control their retention.</p>
            <p>You may delete Finance Documents, exports, reports, backups, or other user-controlled files using the normal tools available on your device or storage service.</p>
            <p>Some local application information may remain in Capehelm&apos;s application storage until it is deleted through the application, removed from your device, or otherwise cleared using operating-system tools.</p>
            <h3>Support correspondence</h3>
            <p>Information sent voluntarily to <SupportEmail /> may be retained for as long as reasonably necessary to:</p>
            <ul><li>answer your request;</li><li>maintain a record of support or privacy correspondence;</li><li>resolve disputes;</li><li>protect legal rights; or</li><li>comply with applicable legal obligations.</li></ul>
            <p>Information that is no longer reasonably required will be deleted or securely disposed of when appropriate.</p>
          </section>

          <section>
            <SectionHeading number={18}>Your Privacy Choices</SectionHeading>
            <p>Because Capehelm&apos;s personal financial information is generally stored locally, you have direct control over much of your information.</p>
            <p>Depending on the data and feature involved, you may be able to:</p>
            <ul><li>edit information in Capehelm;</li><li>delete transactions or other records where the App permits;</li><li>delete a Finance Document;</li><li>delete backups and exports;</li><li>move files to another storage location;</li><li>stop using a third-party synchronization service; or</li><li>uninstall Capehelm.</li></ul>
            <p>For information actually held by Capehelm—for example, correspondence you sent to the support address—you may contact <SupportEmail /> to ask about access, correction, or deletion, subject to applicable legal requirements and exceptions.</p>
            <p>If Capehelm does not hold personal information about you, we will tell you where practical.</p>
          </section>

          <section>
            <SectionHeading number={19}>Security</SectionHeading>
            <p>Capehelm is designed to reduce privacy risk by limiting the amount of personal financial information transmitted outside your devices.</p>
            <p>However, no software, storage device, email system, or electronic storage method can be guaranteed to be completely secure.</p>
            <p>You are responsible for maintaining appropriate security for your Mac, Apple account, storage locations, backups, exported files, and Finance Documents.</p>
            <p>We recommend using appropriate device security measures, keeping macOS and Capehelm updated, protecting your Apple account, and maintaining appropriate backups.</p>
            <p>Capehelm&apos;s local-first design reduces exposure to a centralized Capehelm data breach because Capehelm does not maintain a centralized database containing users&apos; personal financial records.</p>
          </section>

          <section>
            <SectionHeading number={20}>Children</SectionHeading>
            <p>Capehelm is a personal financial-management application intended for individuals capable of managing their own financial information and agreeing to applicable terms.</p>
            <p>Capehelm is not designed to knowingly collect children&apos;s personal information through a Capehelm-operated online account or financial-data service.</p>
            <p>If you believe personal information relating to a child has been provided directly to Capehelm through a support communication, contact <SupportEmail />.</p>
          </section>

          <section>
            <SectionHeading number={21}>International Users</SectionHeading>
            <p>Capehelm may be available in jurisdictions outside Canada.</p>
            <p>Your local device or user-selected storage provider may store information in jurisdictions determined by you, Apple, or the applicable service provider.</p>
            <p>Information you voluntarily send to Capehelm—for example through support email—may be processed in Canada or through service providers whose infrastructure operates in other jurisdictions.</p>
            <p>Privacy rights can vary by jurisdiction.</p>
            <p>Nothing in this Privacy Policy is intended to limit rights that cannot lawfully be waived under applicable privacy or consumer-protection laws.</p>
          </section>

          <section>
            <SectionHeading number={22}>Canadian Privacy Rights</SectionHeading>
            <p>Capehelm is operated from Canada.</p>
            <p>Where Canada&apos;s Personal Information Protection and Electronic Documents Act (“PIPEDA”) or another applicable privacy law applies, Capehelm handles personal information under its control in accordance with applicable legal obligations.</p>
            <p>These principles include, as applicable:</p>
            <ul><li>accountability;</li><li>identifying the purposes for collection;</li><li>consent;</li><li>limiting collection;</li><li>limiting use, disclosure, and retention;</li><li>accuracy;</li><li>safeguards;</li><li>openness;</li><li>individual access; and</li><li>the ability to challenge compliance.</li></ul>
            <p>Because Capehelm does not receive your locally stored financial database, an access request to Capehelm generally will not produce information that exists only on your own device or in your own Finance Documents.</p>
            <p>For questions, access requests, correction requests, complaints, or other privacy matters involving information actually under Capehelm&apos;s control, contact <SupportEmail />.</p>
          </section>

          <section>
            <SectionHeading number={23}>Legal Requests</SectionHeading>
            <p>Capehelm may disclose information actually within its possession or control where disclosure is required by valid applicable law, court order, or other lawful process.</p>
            <p>Because personal Finance Documents and financial databases are ordinarily stored locally rather than on Capehelm servers, Capehelm generally does not possess those records and therefore ordinarily cannot provide them in response to a request directed to Capehelm.</p>
            <p>Information stored with Apple, an email provider, website provider, or another third-party service may be subject to requests made directly to that provider under applicable law.</p>
          </section>

          <section>
            <SectionHeading number={24}>Third-Party Services</SectionHeading>
            <p>Capehelm may interact with or allow you to use services provided by others, including:</p>
            <ul><li>Apple&apos;s App Store;</li><li>Apple StoreKit;</li><li>iCloud Drive or other user-selected file-storage services;</li><li>your financial institution when you obtain an export independently of Capehelm;</li><li>email services used to contact Capehelm; and</li><li>infrastructure used to host the Capehelm website.</li></ul>
            <p>Capehelm does not control the privacy practices of those third parties.</p>
            <p>Their use of information is governed by their own policies and terms.</p>
          </section>

          <section>
            <SectionHeading number={25}>No Sale of Personal Information</SectionHeading>
            <p>Capehelm does not sell personal information.</p>
            <p>Capehelm does not sell personal financial records.</p>
            <p>Capehelm does not provide personal financial records to advertising networks or data brokers.</p>
          </section>

          <section>
            <SectionHeading number={26}>Changes to This Privacy Policy</SectionHeading>
            <p>Capehelm may update this Privacy Policy from time to time to reflect:</p>
            <ul><li>changes to the App;</li><li>changes to the website;</li><li>new features;</li><li>changes to service providers;</li><li>changes to legal requirements; or</li><li>changes to privacy practices.</li></ul>
            <p>When this policy is updated, the effective date at the top of the policy will be changed.</p>
            <p>If a change materially affects how personal information is collected, used, or disclosed, additional notice or consent will be provided where required by applicable law.</p>
          </section>

          <section>
            <SectionHeading number={27}>Contact and Privacy Questions</SectionHeading>
            <p>Questions, complaints, privacy requests, access requests, or concerns regarding this Privacy Policy or Capehelm&apos;s privacy practices may be directed to:</p>
            <p className="policy-contact"><SupportEmail /></p>
            <p>When contacting Capehelm about privacy, please avoid sending sensitive financial records unless they are genuinely necessary to resolve your request.</p>
          </section>

          <p className="policy-closing"><strong>Capehelm is designed to help you understand your finances without requiring you to hand your financial life to another cloud service.</strong></p>
        </article>
      </div>
    </PageShell>
  );
}
