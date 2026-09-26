export type FaqEntry = {
  id: string;
  question: string;
  answer: readonly string[];
  bullets?: readonly string[];
  link?: {
    href: string;
    label: string;
  };
  warning?: boolean;
};

export const faqEntries: readonly FaqEntry[] = [
  {
    id: "bank-connections",
    question: "Does Capehelm connect directly to my bank?",
    answer: [
      "Capehelm does not require your online-banking credentials. Transactions are imported from local statement files instead.",
      "Capehelm does not ask for your online-banking username or password or log in to a financial institution on your behalf. That local statement workflow is an intentional part of Capehelm’s local-first approach.",
    ],
  },
  {
    id: "financial-data-upload",
    question: "Does Capehelm upload my financial information?",
    answer: [
      "Your financial data stays in your Capehelm Finance Document and local app storage. Capehelm does not upload transactions, categories, account information, Net Worth information, Forecast information, budgets, reports, or Finance Documents to a Capehelm-hosted finance-data service.",
      "Capehelm does not use hosted finance-data storage, analytics, or finance-data telemetry. Apple StoreKit may communicate with Apple for subscription products, introductory-offer eligibility, purchases, entitlement verification, subscription changes, and Restore Purchases—but those operations do not send your Capehelm financial content.",
    ],
  },
  {
    id: "financial-institutions",
    question: "Which financial institutions can I use with Capehelm?",
    answer: [
      "Capehelm includes built-in statement import workflows where a supported format is available, plus a configurable custom CSV workflow for other financial institutions.",
      "If your institution can export a usable CSV statement, you can often map its columns, review the result, and save that local mapping for future imports. Capehelm does not promise that every institution or statement layout will work automatically, and it does not use direct bank connectivity.",
    ],
  },
  {
    id: "csv-imports",
    question: "Can I import CSV statements?",
    answer: [
      "Yes. Capehelm imports local CSV statement files and provides mapping, preview, categorization, duplicate-detection, and review tools before imported transactions become part of your financial picture.",
      "Built-in workflows cover supported formats, while the custom financial-institution importer can create a reusable local profile for other usable CSV layouts.",
    ],
  },
  {
    id: "data-storage",
    question: "Where is my Capehelm data stored?",
    answer: [
      "Your Finance Document is a local file you control. Capehelm stores finance data in local app storage and in user-created .pfinance Finance Documents that you create or open in locations you choose.",
      "Capehelm does not operate a hosted finance database. If you choose iCloud Drive or another file provider, that provider may store or synchronize the file under its own terms; Capehelm is not providing the cloud-hosted storage.",
    ],
  },
  {
    id: "backups",
    question: "Can I back up my data?",
    answer: [
      "Yes. In Backup & Restore, you choose a backup location and Capehelm creates a local .pfbackup.zip archive. You can select a valid archive and restore it through the app.",
      "Backup archives contain private financial information. Keep them in a secure location you control, and do not email them to support.",
    ],
  },
  {
    id: "subscription-expiry",
    question: "What happens if my subscription expires?",
    answer: [
      "Access to paid personal-document features is governed by your current App Store subscription entitlement. Cancelling does not end access immediately when a paid or introductory-trial entitlement is still valid; access continues until that entitlement expires or is revoked.",
      "When the entitlement expires, access to the personal Finance Document is locked. Your Finance Document is not deleted, rewritten, migrated, or reset when a subscription expires. Restoring a valid entitlement restores access to the same document.",
    ],
  },
  {
    id: "introductory-trial",
    question: "How does the two-month introductory trial work?",
    answer: [
      "Capehelm Monthly and Annual are auto-renewable subscriptions that unlock the same feature tier. Eligible new subscribers can receive Apple’s native two-month introductory free trial with either option; eligibility is determined through the App Store.",
      "After the introductory period, the selected subscription renews at its displayed price unless cancelled. You can manage or cancel the subscription through your Apple account or App Store subscription settings.",
    ],
  },
  {
    id: "macos-requirement",
    question: "What version of macOS does Capehelm require?",
    answer: [
      "Capehelm requires macOS 14 Sonoma or later.",
    ],
  },
  {
    id: "iphone-ipad",
    question: "Is Capehelm available on iPhone or iPad?",
    answer: [
      "Capehelm is currently being prepared as a Mac App Store product. An iPhone or iPad companion is not part of the current public release, and no release date has been announced.",
    ],
  },
  {
    id: "contact-support",
    question: "How do I contact support?",
    answer: [
      "For help, bug reports, or feature suggestions, email support@capehelm.com. Describe what you were trying to do, what happened, the error message, the Capehelm screen or workflow, and your Capehelm and macOS versions when relevant.",
      "Do not include a Finance Document, statement, transaction export, backup, account details, or a screenshot containing private financial information.",
    ],
    link: {
      href: "mailto:support@capehelm.com",
      label: "Email support@capehelm.com",
    },
  },
  {
    id: "support-attachments",
    question: "Can I send my Finance Document or bank statement to support?",
    answer: [
      "No. Please do not email your Finance Document, bank statements, transaction exports, backup archives, account details, screenshots containing private financial information, or other personal finance data.",
      "Describe the issue instead. Non-sensitive context is enough to begin troubleshooting.",
    ],
    bullets: [
      "What you were trying to do",
      "What happened and the exact error message",
      "The Capehelm screen or workflow you were using",
      "Your macOS version",
      "Your Capehelm version or build, when relevant",
    ],
    warning: true,
  },
] as const;
