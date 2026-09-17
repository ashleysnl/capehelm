import type { Metadata } from "next";
import Link from "next/link";
import { ProductWindow } from "../../components/ProductVisuals";
import { ArrowIcon, CheckIcon, PageShell } from "../../components/SiteShell";

export const metadata: Metadata = {
  title: "Features — Capehelm",
  description: "Explore Capehelm Dashboard, Budget Health, Forecast, Trends, Transactions, Net Worth and reporting for Mac.",
};

const sections = [
  { id: "stand", eyebrow: "See where you stand", title: "A current financial picture, without the spreadsheet archaeology.", body: "Dashboard brings spending, budget position, forecast context, savings and net-worth signals into one focused starting point. Budget Health then shows whether the month is actually on track.", visual: "dashboard" as const, bullets: ["Monthly financial overview", "Budget Health status by group and category", "Projected month-end spending", "Upcoming attention items", "Budget Builder"] },
  { id: "understand", eyebrow: "Understand where it went", title: "Trace the story behind the totals.", body: "Capehelm treats transaction work as a serious local workflow. Import statements, review source details, normalize merchants and shape categories—then explore the results in Trends.", visual: "trends" as const, bullets: ["User-controlled CSV imports", "Search, filters and source traceability", "Merchant normalization and local aliases", "Group, category and merchant treemaps", "Month, 3-month, 6-month, YTD and previous-year views"] },
  { id: "plan", eyebrow: "Plan what happens next", title: "Know what your money needs to do before you spend it.", body: "Forecast projects the next 14 days across checking balances, income, expenses, card payments and recurring commitments. Financial To-Do keeps bills, reimbursements and follow-ups visible alongside the numbers.", visual: "forecast" as const, bullets: ["14-day projected balance", "Safety-floor awareness", "Recurring and manual items", "Flexible spending context", "Forecast Coverage and daily inspector"] },
  { id: "progress", eyebrow: "Measure long-term progress", title: "See the balance sheet behind the month.", body: "Net Worth organizes institutions, accounts, assets, liabilities and histories into a long-term view that separates contributions, withdrawals and growth.", visual: "networth" as const, bullets: ["Account histories", "Contribution-adjusted growth", "Liquid versus fixed assets", "Retirement nest egg", "Linked secured assets and liabilities"] },
  { id: "household", eyebrow: "Keep your household aligned", title: "Turn financial complexity into a useful conversation.", body: "Report Builder creates clear plans and reviews for a partner or household member. The iPhone companion opens the same finance-document format for selected Forecast, Reports and Financial To-Do workflows.", visual: "budget" as const, bullets: ["Weekly Family Plan", "Weekly Spending Review", "Weekly Money Check-In", "Month-End Money Review", "Selected iPhone companion workflows"] },
];

export default function FeaturesPage() {
  return <PageShell>
    <section className="page-hero section-shell"><p className="eyebrow"><span /> Product features</p><h1>Past, present and future—<em>in one financial workspace.</em></h1><p>Capehelm is designed to move from a high-level answer to the detail behind it without sending your financial history to an app-owned cloud account.</p><div className="page-subnav">{sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.eyebrow}</a>)}</div></section>
    <section className="feature-chapters section-shell">{sections.map((section, index) => <article className={`feature-chapter ${index % 2 ? "chapter-reverse" : ""}`} id={section.id} key={section.id}><div className="chapter-copy"><p className="eyebrow"><span /> {section.eyebrow}</p><h2>{section.title}</h2><p>{section.body}</p><ul>{section.bullets.map((bullet) => <li key={bullet}><CheckIcon />{bullet}</li>)}</ul></div><ProductWindow visual={section.visual} /></article>)}</section>
    <section className="compact-cta section-shell"><div><p className="eyebrow"><span /> Private by design</p><h2>A clearer view of your money, kept on your devices.</h2></div><div><Link className="button" href="/download">Download Capehelm <ArrowIcon /></Link><Link className="text-link" href="/privacy">How privacy works <ArrowIcon /></Link></div></section>
  </PageShell>;
}
