import type { Metadata } from "next";
import { ProductWindow } from "../../components/ProductVisuals";
import { AppStoreLink, ArrowIcon, CheckIcon, PageShell, SiteLink } from "../../components/SiteShell";
import { productionSiteUrl } from "../../config/site";

export const metadata: Metadata = {
  title: { absolute: "Capehelm Features | Private Personal Finance for Mac" },
  description:
    "Explore Capehelm features for Mac, including budgeting, 14-day cash-flow forecasting, transaction analysis, Trends, Net Worth, Retirement and local CSV import.",
  alternates: { canonical: `${productionSiteUrl}/features` },
};

export const dynamic = "force-static";

const sections = [
  { id: "stand", eyebrow: "See where you stand", title: "A current financial picture, without the spreadsheet archaeology.", body: "Dashboard brings spending, budget position, forecast context, savings and net-worth signals into one focused starting point. Capehelm Guide shows what you’ve set up, what needs attention and the next useful step to take.", visual: "dashboard" as const, bullets: ["Monthly financial overview", "Capehelm Guide and setup progress", "Attention signals for reviews, budget pressure and potential duplicate charges", "Budget Health by group and category", "Projected month-end spending", "Budget Builder"] },
  { id: "understand", eyebrow: "Understand where it went", title: "Trace the story behind the totals.", body: "Import statements from supported formats or teach Capehelm the structure of another financial institution’s CSV—all locally. Review the results, shape categories and explore the story in Trends.", visual: "trends" as const, bullets: ["Built-in and configurable bank CSV imports", "Local mapping confirmation and reusable import profiles", "Duplicate detection and post-import review", "Search, filters and source traceability", "Group, category and merchant Trends"] },
  { id: "plan", eyebrow: "Plan what happens next", title: "Know what your money needs to do before you spend it.", body: "Forecast projects the next 14 days across checking balances, income, expenses, card payments and recurring commitments. Financial To-Do keeps payments, reimbursements and follow-ups visible alongside the numbers.", visual: "forecast" as const, bullets: ["14-day projected balance", "Safety-floor awareness", "Recurring and manual items", "Flexible spending context", "Financial To-Do for payments, reimbursements and follow-ups", "Due-soon and overdue awareness"] },
  { id: "progress", eyebrow: "Measure long-term progress", title: "See the balance sheet behind the month.", body: "Net Worth organizes institutions, accounts, assets, liabilities and histories into a long-term view that separates contributions, withdrawals and growth.", visual: "networth" as const, bullets: ["Account histories", "Contribution-adjusted growth", "Liquid versus fixed assets", "Account and institution organization", "Linked secured assets and liabilities"] },
  { id: "retirement", eyebrow: "Plan beyond the balance sheet", title: "Give long-term saving a clearer direction.", body: "See how the accounts you’re building today could grow toward retirement. Adjust contributions, retirement timing and expected growth, then compare conservative, expected and optimistic paths.", visual: "retirement" as const, bullets: ["Account-by-account retirement projections", "Contribution assumptions", "Expected growth with upside and downside bands", "Retirement age and date planning", "Saved-plan comparison", "Retirement milestones"] },
  { id: "household", eyebrow: "Keep your household aligned", title: "Turn financial complexity into a useful conversation.", body: "Report Builder creates clear plans and reviews for a partner or household member. The iPhone companion opens the same finance-document format for selected Forecast, Reports and Financial To-Do workflows.", visual: "budget" as const, bullets: ["Weekly Family Plan", "Weekly Spending Review", "Weekly Money Check-In", "Month-End Money Review", "Selected iPhone companion workflows"] },
];

export default function FeaturesPage() {
  return <PageShell>
    <section className="page-hero section-shell"><p className="eyebrow"><span /> Product features</p><h1>Past, present and future—<em>in one financial workspace.</em></h1><p>Capehelm is designed to move from a high-level answer to the detail behind it without sending your financial history to an app-owned cloud account.</p><div className="page-subnav">{sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.eyebrow}</a>)}<a href="#control">Keep control</a></div></section>
    <section className="feature-chapters section-shell">{sections.map((section, index) => <article className={`feature-chapter ${index % 2 ? "chapter-reverse" : ""}`} id={section.id} key={section.id}><div className="chapter-copy"><p className="eyebrow"><span /> {section.eyebrow}</p><h2>{section.title}</h2><p>{section.body}</p><ul>{section.bullets.map((bullet) => <li key={bullet}><CheckIcon />{bullet}</li>)}</ul></div><ProductWindow visual={section.visual} /></article>)}</section>
    <section className="control-strip section-shell" id="control"><div><p className="eyebrow"><span /> Local-first control</p><h2>Your data. Your files. Your backups.</h2></div><p>Capehelm Finance Documents, built-in and configurable bank CSV imports, local backups, reports and exports stay under your control.</p></section>
    <section className="compact-cta section-shell"><div><p className="eyebrow"><span /> Private personal finance for Mac</p><h2>A clearer view of your money, kept on your devices.</h2></div><div><AppStoreLink className="button">Download on the Mac App Store <ArrowIcon /></AppStoreLink><SiteLink className="text-link" href="/privacy">How privacy works <ArrowIcon /></SiteLink></div></section>
  </PageShell>;
}
