# Capehelm Support Documentation Screenshot Manifest

Phase: 1

Generated: September 27, 2026

Repository scope: Capehelm macOS only

## Pack summary

- Screenshot files produced: 8
- Articles marked `READY`: 8
- Articles marked `MANUAL CAPTURE REQUIRED`: 6
- Articles marked `UNAVAILABLE`: 0
- Articles marked `NOT NEEDED`: 0
- Capehelm product/source changes: none

## Capture and privacy boundary

- Financial screenshots were captured from the existing code-generated Capehelm Demo.
- The capture app ran with an isolated temporary home at `/private/tmp/capehelm-support-docs-home`; it did not use the normal Capehelm Application Support directory or remembered-document preferences.
- The capture app used a temporary, ad-hoc-signed copy with a screenshot-only bundle identifier. This was a local capture harness only; no application source or shipping behavior changed.
- The existing non-writing universal CSV sheet was opened without importing a personal statement.
- The only CSV selected during troubleshooting exploration was the repository's existing synthetic/sanitized `parser_edge_cases.csv` fixture. It was not imported, and no screenshot containing its rows or a filesystem picker was accepted.
- No personal Finance Document, private bank CSV, private Net Worth store, private backup, report, or personal Application Support data was opened for capture.
- StoreKit screenshots use the current locked/unavailable development state and the Demo workspace; no real purchase was attempted.

## Getting Started

### Creating a Finance Document

Article:
Creating a Finance Document

Screenshot:
getting-started/01-create-finance-document.png (not captured)

Status:
MANUAL CAPTURE REQUIRED

Source:
Existing non-writing onboarding preview is implemented

Preview:
`--onboarding-preview=document`

Capehelm screen:
Onboarding > Choose Your Finance Document

Purpose:
Would show the current Create New Finance Document and Open Existing Finance Document choices.

User action illustrated:
Choose Create New Finance Document, then use the standard macOS save panel and choose CAD or USD.

Privacy review:
PASS FOR PLANNED SOURCE — the preview is non-writing and uses no Finance Document data.

Notes:
The current commercial access gate appears before onboarding in the isolated locked build. Capture this preview manually in an existing entitled StoreKit/Xcode development session. No screenshot-only application route was added.

### Opening an Existing Finance Document

Article:
Opening an existing Finance Document

Screenshot:
getting-started/02-open-finance-document.png

Status:
READY

Source:
Existing Capehelm Demo

Capehelm screen:
Settings > General > Current Finance File

Purpose:
Shows the Open Finance File control in the current Settings layout.

User action illustrated:
Select Open Finance File and choose a `.pfinance` package.

Privacy review:
PASS — only the fictional Demo and an isolated `/private/tmp` capture path are visible; no username or personal path is shown.

Notes:
Suitable for website publication.

### Importing Transactions

Article:
Importing transactions

Screenshot:
getting-started/03-import-transactions.png

Status:
READY

Source:
Existing Capehelm Demo with the existing non-writing universal CSV import sheet

Capehelm screen:
Transactions toolbar > Import > Other Financial Institution

Purpose:
Shows the four-stage local CSV workflow and where a user chooses a statement.

User action illustrated:
Choose a bank statement CSV; Capehelm then proceeds through Statement, Confirm, Review, and Import.

Privacy review:
PASS — no CSV was selected in the accepted image, and the screen states that the statement remains on the Mac.

Notes:
Suitable for website publication.

### Reviewing Categories

Article:
Reviewing categories

Screenshot:
getting-started/04-review-categories.png

Status:
READY

Source:
Existing Capehelm Demo

Capehelm screen:
Categories > Review > Needs Attention

Purpose:
Shows the current category-review workspace and the groups containing fictional items that need attention.

User action illustrated:
Switch to Review and open a category group that needs attention.

Privacy review:
PASS — all counts, totals, and category activity come from the fictional Demo.

Notes:
Suitable for website publication.

### Setting Up Budget

Article:
Setting up Budget

Screenshot:
getting-started/05-setup-budget.png

Status:
READY

Source:
Existing Capehelm Demo

Capehelm screen:
Budgets > Budget Builder

Purpose:
Shows how budgeted income is allocated across budget groups and categories.

User action illustrated:
Review or edit group/category targets, then apply them to the monthly budget.

Privacy review:
PASS — all values are fictional Demo values. The sheet was closed without applying changes.

Notes:
Suitable for website publication.

### Using Forecast

Article:
Using Forecast

Screenshot:
getting-started/06-use-forecast.png

Status:
READY

Source:
Existing Capehelm Demo

Capehelm screen:
Forecast > Overview

Purpose:
Shows the 14-day forecast summary, safety floor, projected balances, and forecast workspace tabs.

User action illustrated:
Review safe-to-spend, projected balances, and upcoming forecast items.

Privacy review:
PASS — the Demo — Fictional Data banner is visible and every financial value is generated by the Demo.

Notes:
Suitable for website publication.

### Backing Up Capehelm

Article:
Backing up Capehelm

Screenshot:
getting-started/07-backup-capehelm.png

Status:
READY

Source:
Existing Capehelm Demo

Capehelm screen:
Settings > General > Backup Status

Purpose:
Shows the current backup summary, Back Up Now control, and Manage Backups route.

User action illustrated:
Choose Back Up Now or open Manage Backups for the full Backup & Restore workflow.

Privacy review:
PASS — the only visible Finance File is the fictional Demo under an isolated `/private/tmp` path; no personal backup path is visible.

Notes:
Suitable for website publication. The image intentionally documents the safe entry point rather than creating a backup archive.

## Troubleshooting

### CSV Will Not Import

Article:
CSV will not import

Screenshot:
troubleshooting/01-csv-import-problem.png (not captured)

Status:
MANUAL CAPTURE REQUIRED

Source:
Existing universal CSV importer plus existing synthetic/sanitized parser test fixture

Test mechanism:
`Data/evidence_backed_bank_csv_test_pack/existing_style_fixtures/parser_edge_cases.csv`

Capehelm screen:
Import bank statement > Confirm or Review

Purpose:
Should show a current blocking validation or remapping message without using a private statement.

User action illustrated:
Review the detected delimiter, header, date format, amount mapping, currency, and row diagnostics before importing.

Privacy review:
PASS FOR PLANNED SOURCE — the referenced repository fixture is documented as synthetic/sanitized.

Notes:
Selecting the safe edge-case fixture did not yield a stable capturable state in this pass. No personal CSV was substituted, and no error state was fabricated.

### Support facts

- The built-in Mastercard and Scotia importers reject unreadable UTF-8 and report missing or duplicate required headers.
- Row diagnostics cover invalid dates, missing descriptions, invalid amounts, ambiguous Mastercard CAD/USD amounts, and invalid checking balances.
- The universal importer uses four stages: Statement, Confirm, Review, and Import.
- A universal profile must map a date, a description, and a valid amount model. Invalid date formats, conflicting mappings, ambiguous separators, or an unsupported default currency block progress.
- Changed or missing saved-profile headers can require explicit remapping; Capehelm does not silently guess consequential fields.
- Duplicate rows are detected separately and skipped rather than imported again.
- CSV inspection and import are local; the current UI states that statements are not uploaded.

### Finance Document Will Not Open

Article:
Finance Document will not open

Screenshot:
troubleshooting/02-finance-document-will-not-open.png (not captured)

Status:
MANUAL CAPTURE REQUIRED

Source:
Existing remembered-document recovery state

Capehelm screen:
Finance Document Unavailable

Purpose:
Would show Locate Document, Open Another Document, and Create New Finance Document.

User action illustrated:
Relocate the remembered document or deliberately choose a different recovery path.

Privacy review:
PASS FOR PLANNED SOURCE — use a fictional `.pfinance` package in an isolated test home and keep error details collapsed.

Notes:
The recovery view exists, but there is no existing non-writing launch argument that presents it directly. Manual capture is safer than creating a screenshot-only persistence path.

### Support facts

- Capehelm accepts `.pfinance` packages and rejects a selected file that is not a Capehelm document.
- If a document schema is newer than the app supports, Capehelm asks the user to update Capehelm and leaves the document unchanged.
- Coordinated-access failures are surfaced as errors rather than treated as a successful open.
- A failed or unsupported selection does not replace the existing remembered Finance Document reference.
- Recovery offers Locate Document, Open Another Document, and Create New Finance Document.
- The recovery screen states that Capehelm will not delete, overwrite, or replace the unavailable document.

### Restore Purchases

Article:
Restore Purchases

Screenshot:
troubleshooting/03-restore-purchases.png

Status:
READY

Source:
Existing Capehelm Demo plus current locked StoreKit development state

StoreKit mechanism:
Settings access fallback while no verified entitlement is present

Capehelm screen:
Settings > Capehelm Access

Purpose:
Shows the Restore Purchases control and the current locked-access explanation.

User action illustrated:
Choose Restore Purchases to ask StoreKit to resynchronize the current App Store account.

Privacy review:
PASS — the Demo banner is visible and the commerce screen contains no document values, account identifiers, or personal paths.

Notes:
Suitable for website publication.

### Support facts

- Restore Purchases calls `AppStore.sync()` and then refreshes current StoreKit entitlements.
- A verified active entitlement reports the restored Monthly or Annual plan.
- If no current entitlement is found, Capehelm reports that no active subscription was found for the App Store account.
- StoreKit errors are reported as a recoverable restore failure.
- Restore and relaunch recovery depend on current verified StoreKit entitlement state, not a local permanent-unlock flag.

### Subscription Access

Article:
Subscription access

Screenshot:
troubleshooting/04-subscription-access.png

Status:
READY

Source:
Existing StoreKit-unavailable development state in an isolated local build

StoreKit mechanism:
Current paywall `unavailable` state; no product or entitlement was fabricated

Capehelm screen:
Capehelm Access paywall

Purpose:
Shows the recoverable unavailable message, Try Again, Restore Purchases, and Continue with Demo.

User action illustrated:
Retry StoreKit, restore an existing purchase, or continue with the isolated fictional Demo.

Privacy review:
PASS — the screen contains no Finance Document data, Apple ID, email address, or local path.

Notes:
Suitable for website publication as an unavailable-access troubleshooting state. A separate screenshot of live Monthly/Annual product cards still requires an existing StoreKit configuration session if the website later needs it.

### Support facts

- Monthly and Annual are billing choices for the same Capehelm access.
- Personal Finance Documents require a verified current subscription entitlement; an unverified or missing entitlement does not unlock them.
- A StoreKit verification failure produces a recoverable unavailable state.
- Product-loading failure shows an unavailable message and Try Again without inventing prices, eligibility, or entitlement.
- A pending transaction does not unlock access; Capehelm updates when StoreKit later delivers a verified entitlement.
- User-cancelled purchase flow does not show a false failure message.
- The fictional Demo remains available independently of subscription state.

### Backup and Restore

Article:
Backup and restore

Screenshot:
troubleshooting/05-backup-and-restore.png (not captured)

Status:
MANUAL CAPTURE REQUIRED

Source:
Existing Backup & Restore settings screen

Capehelm screen:
Settings > Backup & Restore

Purpose:
Should show backup status, destination controls, and Choose Backup to Restore without exposing a private folder path.

User action illustrated:
Choose a backup destination, create a backup, or select a `.pfbackup.zip` archive for validated restore.

Privacy review:
PASS FOR PLANNED SOURCE — use an isolated temporary folder and fictional Demo/test state only.

Notes:
The Demo's General settings provided a safe backup entry-point image, but the dedicated Backup & Restore page is subscription-gated in the locked capture session. An entitled isolated manual session is required.

### Support facts

- If no backup folder is selected, Back Up Now first asks the user to choose one.
- Capehelm backup archives use the `CapehelmBackup-<timestamp>.pfbackup.zip` naming pattern and contain a manifest with checksums.
- Existing `.pfbackup.zip` archives and a backup destination nested inside the source are excluded from the source snapshot to avoid recursive backups.
- Restore validates the zip container, manifest, safe relative paths, checksums, and—when applicable—the contained Finance Document before installation.
- Capehelm creates a safety backup of the current data before replacement.
- On restore failure, current data is left in place or preserved by the safety backup.

### Moving or Renaming a Finance Document

Article:
Moving or renaming a Finance Document

Screenshot:
troubleshooting/06-moving-renaming-finance-document.png (not captured)

Status:
MANUAL CAPTURE REQUIRED

Source:
Existing bookmark-backed document startup and recovery behavior

Capehelm screen:
Settings > Finance File or Finance Document Unavailable

Purpose:
Should show the current file location/reveal controls or the Locate Document recovery action after a move.

User action illustrated:
Reveal the current package before moving it, or locate it again if the remembered reference no longer resolves.

Privacy review:
PASS FOR PLANNED SOURCE — use a fictional `.pfinance` package in `/private/tmp` and avoid showing a username/home path.

Notes:
No stable existing preview route produces the moved/renamed state. Manual capture is required.

### Support facts

- Capehelm remembers shared Finance Documents with durable/security-scoped bookmark data, not only an absolute path.
- When a stale bookmark still resolves, Capehelm refreshes the bookmark and updates the remembered display name to the resolved package name.
- A moved or renamed package may therefore continue to open when macOS resolves the bookmark successfully.
- If the bookmark cannot resolve or access has changed, startup enters Finance Document Unavailable instead of silently opening another data source.
- Settings provides Reveal in Finder and Open Another Finance File controls for the active package.

### App Launch / Remembered-Document Issues

Article:
App launch / remembered-document issues

Screenshot:
troubleshooting/07-remembered-document-issue.png (not captured)

Status:
MANUAL CAPTURE REQUIRED

Source:
Existing remembered-document startup recovery state

Capehelm screen:
Finance Document Unavailable

Purpose:
Would show the safe startup recovery actions without opening a personal document.

User action illustrated:
Locate the remembered document, open another document, or start the create-new-document flow.

Privacy review:
PASS FOR PLANNED SOURCE — use a fictional remembered filename and keep technical error details collapsed.

Notes:
Manual capture is required because the existing recovery view has no direct non-writing preview argument.

### Support facts

- On shared-document startup, Capehelm first resolves the remembered bookmark and then opens that `.pfinance` package.
- Resolution or load failure enters Finance Document Unavailable with the remembered display name and a user-facing error.
- Locate Document validates and opens the selected package, then records a refreshed remembered reference.
- Open Another Document uses the same `.pfinance` picker without deleting or replacing the unavailable package.
- Create New Finance Document enters the existing recovery-start-fresh onboarding flow.
- A newer recovery choice cancels/replaces an older in-flight startup operation so stale startup work cannot overwrite the user's current choice.

## Existing Demo visual coverage review

| Area | Coverage | Public screenshot suitability |
| --- | --- | --- |
| Dashboard | Strong: overview KPIs, Guide, spending pace, upcoming items, and Demo banner are populated. | Suitable. |
| Transactions | Strong: 435 fictional transactions, category/status controls, review count, account labels, and fictional merchants are populated. | Suitable when the Demo banner remains visible. |
| Categories | Strong: groups, counts, review mode, needs-attention state, rules, and unused state are populated. | Suitable. |
| Budget | Strong: monthly overview and Budget Builder are populated with coherent fictional targets and projections. | Suitable. |
| Forecast | Strong: 14-day scenario, safety floor, balances, items, Daily Plan, and Coverage tabs are populated. | Suitable. |
| Net Worth | Strong: clearly fictional organizations/accounts, asset/liability breakdowns, trend, and movers are populated. | Suitable if it appears in navigation or a later article; all values are Demo values. |
| Settings | Partial: General shows the Demo Finance File plus safe backup/import summaries. Personal Finance File, Backup & Restore, Imports, Data & Privacy, and Advanced pages fall back to Capehelm Access while locked. | General is suitable; gated pages need an entitled isolated session. |
| Imports | Good from the Transactions toolbar and universal CSV sheet. The Demo has no import-history entries, although the Transactions source metadata supports the Recent Imports view. | Suitable for import entry/setup; not sufficient for every error/result state. |
| Backup & Restore | Partial: General exposes Back Up Now and Manage Backups, but the dedicated page is access-gated in the locked Demo session. | Entry point is suitable; full restore screen needs manual capture. |

## Final validation record

- All eight PNG files opened successfully during visual review.
- Every accepted financial image uses the existing fictional Demo.
- The two commerce images contain no personal financial data and use existing StoreKit states.
- No personal Finance Document was opened.
- No private CSV, backup, Net Worth file, Application Support store, or report was copied into `dist/support-documentation/`.
- The screenshot pack contains only PNGs and this manifest.
- No screenshots or manifest files were staged in Git.
- No ignore rule was changed for this task. The checkout's pre-existing `.gitignore` modification was left untouched.
- No Capehelm application source, Demo generation, persistence, onboarding, StoreKit, privacy, or production behavior was changed.

## Phase 2 handoff

The eight `READY` screenshot candidates and this manifest are ready to copy into the separate Capehelm website repository. The six `MANUAL CAPTURE REQUIRED` entries should remain explicit gaps until they are captured in an isolated entitled StoreKit/development session. Phase 1 stops here; no website Support / Knowledge Hub work was performed.
