export type SupportCategoryId = "getting-started" | "troubleshooting";

export type SupportSection = {
  heading: string;
  paragraphs?: string[];
  steps?: string[];
  bullets?: string[];
  note?: string;
  noteLabel?: string;
};

export type SupportScreenshot = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export type SupportArticle = {
  category: SupportCategoryId;
  slug: string;
  title: string;
  description: string;
  lead: string;
  metadataTitle: string;
  metadataDescription: string;
  keywords: string[];
  quickAnswer?: string;
  screenshot?: SupportScreenshot;
  sections: SupportSection[];
  related: string[];
};

export const supportCategories = {
  "getting-started": {
    label: "Getting Started",
    description: "Set up a Finance Document and learn Capehelm’s everyday workflows.",
  },
  troubleshooting: {
    label: "Troubleshooting",
    description: "Resolve common import, document, backup, and subscription issues.",
  },
} satisfies Record<SupportCategoryId, { label: string; description: string }>;

export function supportArticlePath(article: Pick<SupportArticle, "category" | "slug">) {
  return `/support/${article.category}/${article.slug}`;
}

export const supportArticles: SupportArticle[] = [
  {
    category: "getting-started",
    slug: "create-finance-document",
    title: "Creating a Finance Document",
    description: "Create a new local Finance Document and choose its currency.",
    lead: "A Finance Document is the Capehelm package you choose when you begin working with your personal finances.",
    metadataTitle: "Create a Finance Document in Capehelm",
    metadataDescription: "Learn how to create a Capehelm Finance Document with the standard macOS save flow and choose CAD or USD.",
    keywords: ["create", "new", "finance document", "file", "pfinance", "CAD", "USD", "currency", "onboarding"],
    quickAnswer: "Choose Create New Finance Document during setup, use the standard macOS save panel, and select CAD or USD for the document.",
    // Phase 3 TODO: add /images/support/getting-started/01-create-finance-document.png after an approved isolated manual capture exists.
    sections: [
      {
        heading: "Choose how to begin",
        paragraphs: [
          "Capehelm’s setup presents two paths: Create New Finance Document and Open Existing Finance Document. Choose Create New Finance Document when you are starting a separate personal finance workspace. Choose Open Existing Finance Document only when you already have a Capehelm .pfinance package.",
        ],
      },
      {
        heading: "Create the document",
        steps: [
          "Select Create New Finance Document.",
          "Use the standard macOS save panel to choose a name and a location you control.",
          "Choose CAD or USD when Capehelm asks for the Finance Document’s currency.",
          "Complete setup to open the new Finance Document in Capehelm.",
        ],
        note: "Choose the document currency deliberately. The Phase 1 documentation establishes CAD and USD as the available setup choices.",
        noteLabel: "Before you continue",
      },
      {
        heading: "Already have a Capehelm document?",
        paragraphs: [
          "Use Open Existing Finance Document instead of creating another one. Capehelm works with .pfinance packages selected through the macOS file picker.",
        ],
      },
    ],
    related: [
      "getting-started/open-finance-document",
      "troubleshooting/finance-document-will-not-open",
      "getting-started/back-up-capehelm",
    ],
  },
  {
    category: "getting-started",
    slug: "open-finance-document",
    title: "Opening an Existing Finance Document",
    description: "Switch to an existing .pfinance package from Settings.",
    lead: "Open a Finance Document you already created by selecting its .pfinance package in Capehelm.",
    metadataTitle: "Open a Finance Document in Capehelm",
    metadataDescription: "Open an existing Capehelm .pfinance package from Settings, General, and Current Finance File.",
    keywords: ["open", "existing", "finance document", "file", "pfinance", "settings", "general", "switch"],
    quickAnswer: "Go to Settings > General, find Current Finance File, and choose Open Finance File.",
    screenshot: {
      src: "/images/support/getting-started/02-open-finance-document.png",
      width: 2360,
      height: 1624,
      alt: "Capehelm Settings showing General, Current Finance File, and the Open Finance File control in the fictional Demo.",
      caption: "Settings > General provides the safe entry point for opening another Finance Document.",
    },
    sections: [
      {
        heading: "Open the file",
        steps: [
          "Open Settings in Capehelm.",
          "Select General.",
          "In Current Finance File, choose Open Finance File.",
          "Select the existing .pfinance package in the macOS file picker.",
        ],
      },
      {
        heading: "If the package does not open",
        paragraphs: [
          "Confirm that you selected a Capehelm .pfinance package. If Capehelm cannot use the selected document, follow the recovery guidance rather than changing files inside the package.",
        ],
      },
    ],
    related: [
      "troubleshooting/finance-document-will-not-open",
      "troubleshooting/moving-renaming-finance-document",
      "troubleshooting/remembered-document-issues",
    ],
  },
  {
    category: "getting-started",
    slug: "import-transactions",
    title: "Importing Transactions",
    description: "Bring a downloaded bank statement into Capehelm using the local CSV workflow.",
    lead: "Capehelm inspects a CSV statement locally on your Mac and guides you through four stages before importing.",
    metadataTitle: "Import Transactions in Capehelm",
    metadataDescription: "Use Capehelm’s local Statement, Confirm, Review, and Import workflow for a downloaded CSV bank statement.",
    keywords: ["CSV", "import", "transactions", "statement", "bank", "confirm", "review", "mapping", "local"],
    quickAnswer: "From Transactions, choose Import and Other Financial Institution, then complete Statement, Confirm, Review, and Import.",
    screenshot: {
      src: "/images/support/getting-started/03-import-transactions.png",
      width: 1800,
      height: 1520,
      alt: "Capehelm transaction import screen showing the Statement, Confirm, Review, and Import workflow.",
      caption: "The import sheet shows each stage before anything is added to the Finance Document.",
    },
    sections: [
      {
        heading: "Start the import",
        steps: [
          "Open Transactions.",
          "Choose Import, then Other Financial Institution.",
          "At Statement, choose the downloaded CSV statement from your Mac.",
          "At Confirm, review the detected structure and required field mappings.",
          "At Review, check the transactions and any diagnostics Capehelm presents.",
          "Continue to Import when the review is ready.",
        ],
      },
      {
        heading: "What the four stages mean",
        bullets: [
          "Statement: choose the CSV file.",
          "Confirm: verify how the statement is structured and mapped.",
          "Review: inspect the rows and resolve anything that needs attention.",
          "Import: add the reviewed transactions to the Finance Document.",
        ],
        note: "CSV inspection and import stay local to your Mac. Capehelm does not connect directly to your bank and the statement is not uploaded by this workflow.",
        noteLabel: "Private by design",
      },
    ],
    related: [
      "troubleshooting/csv-will-not-import",
      "getting-started/review-categories",
    ],
  },
  {
    category: "getting-started",
    slug: "review-categories",
    title: "Reviewing Categories",
    description: "Find groups and Categories that Capehelm has marked for attention.",
    lead: "Use the Review workspace to focus on Categories and groups that need attention.",
    metadataTitle: "Review Categories in Capehelm",
    metadataDescription: "Use Categories, Review, and Needs Attention to work through category groups that require review in Capehelm.",
    keywords: ["categories", "category", "review", "needs attention", "groups", "transactions"],
    quickAnswer: "Open Categories, switch to Review, select Needs Attention, and open each listed group.",
    screenshot: {
      src: "/images/support/getting-started/04-review-categories.png",
      width: 2360,
      height: 1624,
      alt: "Capehelm Categories workspace in Review mode with the Needs Attention filter and fictional category groups.",
      caption: "Review mode narrows the workspace to the groups and Categories that need attention.",
    },
    sections: [
      {
        heading: "Review what needs attention",
        steps: [
          "Open Categories in Capehelm.",
          "Switch from Organize to Review.",
          "Select Needs Attention.",
          "Open a listed group to review the Categories or activity Capehelm has surfaced.",
          "Work through the remaining groups until you have reviewed the items that matter to you.",
        ],
      },
      {
        heading: "Keep the review focused",
        paragraphs: [
          "The Needs Attention view is the practical place to start. It avoids requiring you to inspect every Category when only a smaller set needs review.",
        ],
      },
    ],
    related: [
      "getting-started/import-transactions",
      "troubleshooting/csv-will-not-import",
      "getting-started/setup-budget",
    ],
  },
  {
    category: "getting-started",
    slug: "setup-budget",
    title: "Setting Up Budget",
    description: "Review group and Category targets, then apply them to the monthly budget.",
    lead: "Budget Builder helps you allocate budgeted income across groups and Categories for the month.",
    metadataTitle: "Set Up Budget in Capehelm",
    metadataDescription: "Use Capehelm Budget Builder to review or edit group and Category targets and apply them to the monthly budget.",
    keywords: ["budget", "budgets", "budget builder", "targets", "categories", "groups", "monthly"],
    quickAnswer: "Open Budget Builder, review or edit group and Category targets, then choose Apply to Monthly Budget.",
    screenshot: {
      src: "/images/support/getting-started/05-setup-budget.png",
      width: 2040,
      height: 1496,
      alt: "Capehelm Budget Builder showing fictional budget income, group targets, remaining allocation, and Apply to Monthly Budget.",
      caption: "Budget Builder shows the plan at group level and lets you review Category targets before applying it.",
    },
    sections: [
      {
        heading: "Build the monthly plan",
        steps: [
          "Open Budgets and enter Budget Builder.",
          "Review the budgeted income, total committed amount, and remaining amount to allocate.",
          "Review each budget group’s target. Open a group when you need to inspect or edit its Categories.",
          "Adjust the group or Category targets that should change for the month.",
          "Choose Apply to Monthly Budget when the plan is ready.",
        ],
      },
      {
        heading: "Use the status as a check",
        paragraphs: [
          "Budget Builder summarizes how much is committed and how much remains to allocate. Use that product feedback to review the plan before applying it; this guide does not prescribe a particular budgeting method.",
        ],
      },
    ],
    related: [
      "getting-started/review-categories",
      "getting-started/use-forecast",
    ],
  },
  {
    category: "getting-started",
    slug: "use-forecast",
    title: "Using Forecast",
    description: "Read the 14-day view of safe-to-spend, projected balances, and upcoming items.",
    lead: "Forecast brings the next 14 days into one workspace so you can see how planned activity affects your cash position.",
    metadataTitle: "Use the 14-Day Forecast in Capehelm",
    metadataDescription: "Understand Capehelm Forecast, including safe-to-spend, projected balances, upcoming forecast items, and workspace tabs.",
    keywords: ["forecast", "14 day", "safe to spend", "projected balances", "upcoming", "daily plan", "coverage", "safety floor"],
    quickAnswer: "Open Forecast and start on Overview to review safe-to-spend, projected balances, and the upcoming items in the 14-day window.",
    screenshot: {
      src: "/images/support/getting-started/06-use-forecast.png",
      width: 2360,
      height: 1624,
      alt: "Capehelm Forecast Overview showing a fictional 14-day safe-to-spend amount, safety floor, projected balances, and workspace tabs.",
      caption: "Forecast Overview summarizes the next 14 days using fictional Demo data in this image.",
    },
    sections: [
      {
        heading: "Read the Overview",
        bullets: [
          "Safe to spend summarizes what the current plan can spend while remaining above the safety floor shown by Capehelm.",
          "Projected balances show how checking and relevant forecast balances change across the selected 14-day period.",
          "Upcoming forecast items show the planned activity contributing to that projection.",
        ],
      },
      {
        heading: "Move through the Forecast workspace",
        paragraphs: [
          "Overview is the summary. Daily Plan and Coverage are the other Forecast workspace tabs documented by the current product. Use them when you need to move beyond the overview into the day-by-day plan or coverage view.",
        ],
        note: "Forecast is a planning view based on the information in Capehelm. Read the displayed amounts and status together rather than treating one number as the whole plan.",
        noteLabel: "Helpful context",
      },
    ],
    related: [
      "getting-started/setup-budget",
      "getting-started/import-transactions",
    ],
  },
  {
    category: "getting-started",
    slug: "back-up-capehelm",
    title: "Backing Up Capehelm",
    description: "Use Backup Status to create a backup or open the full backup manager.",
    lead: "Settings provides a clear backup status and direct controls for creating and managing Capehelm backups.",
    metadataTitle: "Back Up Capehelm",
    metadataDescription: "Use Settings, General, Backup Status, Back Up Now, and Manage Backups to begin protecting Capehelm data.",
    keywords: ["backup", "back up", "backup status", "back up now", "manage backups", "settings", "restore"],
    quickAnswer: "Go to Settings > General and use Back Up Now in Backup Status, or choose Manage Backups for the full workflow.",
    screenshot: {
      src: "/images/support/getting-started/07-backup-capehelm.png",
      width: 2360,
      height: 1624,
      alt: "Capehelm Settings showing Backup Status with Back Up Now and Manage Backups controls in the fictional Demo.",
      caption: "Backup Status is the safe starting point for a backup or the full Backup & Restore screen.",
    },
    sections: [
      {
        heading: "Create or manage a backup",
        steps: [
          "Open Settings and select General.",
          "Find Backup Status.",
          "Choose Back Up Now to begin a backup. If a destination has not been selected, Capehelm asks you to choose one.",
          "Choose Manage Backups when you need the full Backup & Restore workflow.",
        ],
      },
      {
        heading: "Need to restore?",
        paragraphs: [
          "Restoring an archive includes additional validation and safety behavior. Follow the dedicated Backup and Restore article before selecting a .pfbackup.zip archive.",
        ],
      },
    ],
    related: ["troubleshooting/backup-and-restore"],
  },
  {
    category: "troubleshooting",
    slug: "csv-will-not-import",
    title: "CSV Will Not Import",
    description: "Check file readability, mappings, formats, diagnostics, and duplicate handling.",
    lead: "An import stops when Capehelm cannot safely understand a required part of the statement or a row needs review.",
    metadataTitle: "Capehelm CSV Import Troubleshooting",
    metadataDescription: "Resolve Capehelm CSV import problems involving headers, delimiters, dates, mappings, currencies, row diagnostics, and duplicates.",
    keywords: ["CSV", "import", "error", "headers", "delimiter", "date format", "description", "amount", "currency", "duplicates", "profile", "mapping"],
    quickAnswer: "Return to Confirm or Review and verify the CSV’s headers, delimiter, date format, description and amount mappings, currency, and row diagnostics.",
    // Phase 3 TODO: add /images/support/troubleshooting/01-csv-import-problem.png after an approved synthetic-fixture capture exists.
    sections: [
      {
        heading: "Check these first",
        bullets: [
          "The CSV must be readable as UTF-8.",
          "Required headers must be present once; missing or duplicate required headers are rejected by the built-in Mastercard and Scotia workflows.",
          "The detected delimiter and date format must match the file.",
          "A universal import profile must map a date, a description, and a valid amount model.",
          "The default currency must be supported and unambiguous.",
        ],
      },
      {
        heading: "Review field mappings",
        paragraphs: [
          "In the universal Statement > Confirm > Review > Import workflow, confirm that the description and amount columns map to the correct fields. Conflicting mappings, ambiguous separators, invalid date formats, or an unsupported default currency block progress.",
          "If a saved profile’s headers changed or are missing, remap them explicitly. Capehelm does not silently guess consequential field mappings.",
        ],
      },
      {
        heading: "Use the row diagnostics",
        paragraphs: [
          "Review the rows Capehelm flags. Current diagnostics cover invalid dates, missing descriptions, invalid amounts, ambiguous Mastercard CAD/USD amounts, and invalid checking balances.",
        ],
      },
      {
        heading: "Understand duplicates",
        paragraphs: [
          "Duplicate rows are handled separately and skipped rather than blindly imported again. A duplicate result is therefore different from a malformed row or an invalid field mapping.",
        ],
        note: "CSV inspection and import stay local to the Mac. Statements are not uploaded by this workflow.",
        noteLabel: "Privacy",
      },
    ],
    related: [
      "getting-started/import-transactions",
      "getting-started/review-categories",
    ],
  },
  {
    category: "troubleshooting",
    slug: "finance-document-will-not-open",
    title: "Finance Document Will Not Open",
    description: "Recover when Capehelm cannot open a selected or remembered .pfinance package.",
    lead: "Capehelm shows recovery choices when it cannot open the Finance Document you selected or previously used.",
    metadataTitle: "Capehelm Finance Document Will Not Open",
    metadataDescription: "Use Locate Document, Open Another Document, or Create New Finance Document when a Capehelm .pfinance package will not open.",
    keywords: ["finance document", "will not open", "pfinance", "locate document", "open another", "create new", "schema", "update"],
    quickAnswer: "Use Locate Document to select the package again, Open Another Document for a different .pfinance file, or Create New Finance Document to start separately.",
    // Phase 3 TODO: add /images/support/troubleshooting/02-finance-document-will-not-open.png after an approved isolated recovery-state capture exists.
    sections: [
      {
        heading: "Choose the recovery path that matches your situation",
        bullets: [
          "Locate Document: select the remembered .pfinance package again.",
          "Open Another Document: deliberately choose a different Capehelm .pfinance package.",
          "Create New Finance Document: enter the existing start-fresh setup flow.",
        ],
      },
      {
        heading: "Confirm the file type",
        paragraphs: [
          "Capehelm accepts .pfinance packages. If the selected item is not a Capehelm document, choose the correct package instead.",
        ],
      },
      {
        heading: "If the document came from a newer Capehelm version",
        paragraphs: [
          "A document with a newer schema than the installed app supports is left unchanged. Update Capehelm to a version that supports the document, then try opening it again.",
        ],
        note: "A failed or unsupported selection does not replace the remembered Finance Document reference. The recovery screen also states that Capehelm will not delete, overwrite, or replace the unavailable document.",
        noteLabel: "Your recovery choice",
      },
    ],
    related: [
      "getting-started/open-finance-document",
      "troubleshooting/moving-renaming-finance-document",
      "troubleshooting/remembered-document-issues",
    ],
  },
  {
    category: "troubleshooting",
    slug: "restore-purchases",
    title: "Restore Purchases",
    description: "Ask the App Store to resynchronize the current account’s Capehelm access.",
    lead: "Restore Purchases refreshes Capehelm’s verified subscription access from the current App Store account.",
    metadataTitle: "Restore Capehelm Purchases",
    metadataDescription: "Use Settings, Capehelm Access, and Restore Purchases to refresh verified Monthly or Annual subscription access.",
    keywords: ["restore purchases", "subscription", "access", "App Store", "StoreKit", "monthly", "annual", "entitlement"],
    quickAnswer: "Open Settings > Capehelm Access and choose Restore Purchases while signed into the App Store account used for Capehelm.",
    screenshot: {
      src: "/images/support/troubleshooting/03-restore-purchases.png",
      width: 2360,
      height: 1624,
      alt: "Capehelm Settings showing Capehelm Access and the Restore Purchases control in a fictional Demo state.",
      caption: "Restore Purchases is available from Settings > Capehelm Access.",
    },
    sections: [
      {
        heading: "Restore access",
        steps: [
          "Open Settings.",
          "Select Capehelm Access.",
          "Choose Restore Purchases.",
          "Wait while Apple resynchronizes the current App Store account and Capehelm refreshes its verified entitlements.",
        ],
      },
      {
        heading: "What you may see",
        bullets: [
          "An active Monthly or Annual plan is restored and reported.",
          "Capehelm reports that no active subscription was found for the current App Store account.",
          "A StoreKit problem produces a recoverable restore error so you can try again later.",
        ],
        note: "Restore and relaunch recovery use the current verified App Store entitlement. Capehelm does not rely on a permanent local unlock flag.",
        noteLabel: "How access is checked",
      },
    ],
    related: ["troubleshooting/subscription-access"],
  },
  {
    category: "troubleshooting",
    slug: "subscription-access",
    title: "Subscription Access",
    description: "Recover when Capehelm cannot load or verify subscription access.",
    lead: "When App Store subscription information is unavailable, Capehelm presents recovery actions instead of assuming access.",
    metadataTitle: "Capehelm Subscription Access Help",
    metadataDescription: "Use Try Again, Restore Purchases, or Continue with Demo when Capehelm subscription access is unavailable.",
    keywords: ["subscription", "access", "unavailable", "try again", "restore purchases", "demo", "monthly", "annual", "pending"],
    quickAnswer: "Choose Try Again to reload access, Restore Purchases for an existing subscription, or Continue with Demo to use fictional data.",
    screenshot: {
      src: "/images/support/troubleshooting/04-subscription-access.png",
      width: 2360,
      height: 1624,
      alt: "Capehelm unavailable-access screen with Try Again, Restore Purchases, and Continue with Demo controls.",
      caption: "The unavailable state keeps all three recovery choices visible without inventing prices or access.",
    },
    sections: [
      {
        heading: "Choose a recovery action",
        bullets: [
          "Try Again asks Capehelm to load and verify the current App Store state again.",
          "Restore Purchases resynchronizes purchases for the current App Store account and refreshes verified entitlements.",
          "Continue with Demo opens Capehelm’s fictional Demo, which remains available independently of personal-document subscription access.",
        ],
      },
      {
        heading: "How subscription access works",
        paragraphs: [
          "Monthly and Annual are billing choices for the same Capehelm access. Personal Finance Documents require a verified current subscription entitlement; a missing or unverified entitlement does not unlock them.",
          "A pending transaction does not unlock access. Capehelm updates when the App Store later delivers a verified entitlement. If product information cannot load, Capehelm shows the unavailable state and Try Again without inventing a price or offer eligibility.",
        ],
        note: "No current price or introductory-offer eligibility is stated here. Those details come from Apple when the products are available.",
        noteLabel: "Billing information",
      },
    ],
    related: ["troubleshooting/restore-purchases"],
  },
  {
    category: "troubleshooting",
    slug: "backup-and-restore",
    title: "Backup and Restore",
    description: "Create a backup destination and safely restore a validated .pfbackup.zip archive.",
    lead: "Capehelm’s backup workflow creates archives you control and validates a selected archive before replacing current data.",
    metadataTitle: "Back Up and Restore Capehelm",
    metadataDescription: "Select a Capehelm backup destination, use Back Up Now, manage backups, and restore a validated .pfbackup.zip archive.",
    keywords: ["backup", "restore", "pfbackup.zip", "destination", "back up now", "manage backups", "archive", "validation", "safety backup"],
    quickAnswer: "Choose a backup destination, use Back Up Now, and open Manage Backups when you need to select a .pfbackup.zip archive for restore.",
    // Phase 3 TODO: add /images/support/troubleshooting/05-backup-and-restore.png after an approved entitled isolated capture exists.
    sections: [
      {
        heading: "Create a backup",
        steps: [
          "Open Settings and go to Backup & Restore, or use Manage Backups from General > Backup Status.",
          "Choose a backup destination you control. If no folder is selected, Back Up Now asks you to choose one.",
          "Choose Back Up Now.",
          "Use Manage Backups to review the available backup workflow.",
        ],
      },
      {
        heading: "Restore an archive",
        steps: [
          "Open the Backup & Restore workflow.",
          "Choose the .pfbackup.zip archive you intend to restore.",
          "Allow Capehelm to validate the archive before installation.",
          "Continue only with the archive you deliberately selected.",
        ],
      },
      {
        heading: "What Capehelm does before replacement",
        paragraphs: [
          "Capehelm validates the zip container, its manifest, safe paths, checksums, and the contained Finance Document when applicable. It also creates a safety backup of the current data before replacement.",
        ],
        note: "If restore validation fails, Capehelm does not intentionally replace the current data with an invalid backup. Current data is left in place or preserved by the safety backup.",
        noteLabel: "Restore protection",
      },
    ],
    related: [
      "getting-started/back-up-capehelm",
      "troubleshooting/finance-document-will-not-open",
    ],
  },
  {
    category: "troubleshooting",
    slug: "moving-renaming-finance-document",
    title: "Moving or Renaming a Finance Document",
    description: "Help Capehelm find a .pfinance package after its name or location changes.",
    lead: "Capehelm uses a macOS bookmark-backed reference, so a moved or renamed Finance Document may continue to open when macOS can still resolve it.",
    metadataTitle: "Move or Rename a Capehelm Finance Document",
    metadataDescription: "Learn how Capehelm follows a moved or renamed .pfinance package and how to locate it again when needed.",
    keywords: ["move", "rename", "finance document", "file", "pfinance", "bookmark", "reveal in finder", "locate document", "open another"],
    quickAnswer: "Use Reveal in Finder before moving the active package. If Capehelm later cannot find it, choose Locate Document and select the .pfinance package again.",
    // Phase 3 TODO: add /images/support/troubleshooting/06-moving-renaming-finance-document.png after an approved isolated move/recovery capture exists.
    sections: [
      {
        heading: "Before moving the active document",
        steps: [
          "Open Settings and view the active Finance File.",
          "Use Reveal in Finder to confirm the package you intend to move or rename.",
          "Move or rename the .pfinance package in Finder.",
          "Open Capehelm and confirm that the document still resolves.",
        ],
      },
      {
        heading: "If Capehelm can no longer locate it",
        paragraphs: [
          "Choose Locate Document in the Finance Document Unavailable screen and select the moved or renamed .pfinance package. Capehelm validates the selection and records a refreshed remembered reference when it opens successfully.",
          "If you want to work with a different package instead, use Open Another Document or the Open Another Finance File control available for the active package in Settings.",
        ],
      },
      {
        heading: "Why it may keep working automatically",
        paragraphs: [
          "Capehelm remembers shared Finance Documents using durable macOS bookmark data rather than only a fixed text path. When macOS resolves a stale bookmark, Capehelm refreshes it and updates the remembered display name to the package name it found.",
        ],
        note: "Do not edit Capehelm’s internal references. Use Finder and Capehelm’s Reveal, Open, or Locate controls.",
        noteLabel: "Use the supported controls",
      },
    ],
    related: [
      "getting-started/open-finance-document",
      "troubleshooting/finance-document-will-not-open",
      "troubleshooting/remembered-document-issues",
    ],
  },
  {
    category: "troubleshooting",
    slug: "remembered-document-issues",
    title: "App Launch / Remembered-Document Issues",
    description: "Recover when Capehelm cannot reopen the Finance Document remembered from an earlier session.",
    lead: "If the remembered package cannot be resolved or loaded at launch, Capehelm opens Finance Document Unavailable with clear recovery choices.",
    metadataTitle: "Capehelm Remembered-Document Launch Help",
    metadataDescription: "Recover at app launch with Locate Document, Open Another Document, or Create New Finance Document.",
    keywords: ["launch", "startup", "remembered document", "finance document unavailable", "locate document", "open another", "create new", "pfinance"],
    quickAnswer: "Select Locate Document to reconnect the remembered package, Open Another Document for a different package, or Create New Finance Document to start separately.",
    // Phase 3 TODO: add /images/support/troubleshooting/07-remembered-document-issue.png after an approved isolated startup recovery capture exists.
    sections: [
      {
        heading: "What happened",
        paragraphs: [
          "At shared-document startup, Capehelm first resolves the remembered macOS bookmark and then opens that .pfinance package. If either resolution or loading fails, the app shows Finance Document Unavailable with the remembered display name and a user-facing error.",
        ],
      },
      {
        heading: "Choose a recovery action",
        bullets: [
          "Locate Document: select the remembered package again. Capehelm validates it and records a refreshed reference after a successful open.",
          "Open Another Document: choose a different .pfinance package with the same file picker.",
          "Create New Finance Document: enter the existing recovery flow for starting fresh.",
        ],
      },
      {
        heading: "Your existing unavailable package",
        paragraphs: [
          "Choosing a recovery path does not silently delete the unavailable package. Open Another Document also does not delete or replace it; it changes what you deliberately choose to open.",
        ],
        note: "If you change recovery choices while startup work is still in progress, Capehelm gives the newer choice priority so an older operation cannot overwrite it.",
        noteLabel: "During recovery",
      },
    ],
    related: [
      "troubleshooting/finance-document-will-not-open",
      "troubleshooting/moving-renaming-finance-document",
      "getting-started/open-finance-document",
    ],
  },
];

export const supportArticleByKey = new Map(
  supportArticles.map((article) => [`${article.category}/${article.slug}`, article]),
);

export function getSupportArticle(category: string, slug: string) {
  return supportArticleByKey.get(`${category}/${slug}`);
}
