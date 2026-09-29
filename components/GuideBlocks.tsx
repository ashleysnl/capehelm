import { ArrowIcon, SiteLink } from "./SiteShell";

export function GuideBreadcrumbs({ current }: { current: string }) {
  return (
    <nav className="guide-breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li><SiteLink href="/">Home</SiteLink></li>
        <li><SiteLink href="/guides">Guides</SiteLink></li>
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}

const flowSteps = [
  { number: "01", title: "Budget", label: "Plan" },
  { number: "02", title: "Actuals", label: "What happened" },
  { number: "03", title: "Forecast", label: "What happens next" },
] as const;

export function BudgetActualsForecastFlow() {
  return (
    <figure className="guide-flow" aria-labelledby="guide-flow-caption">
      <ol>
        {flowSteps.map((step) => (
          <li key={step.title}>
            <span>{step.number}</span>
            <strong>{step.title}</strong>
            <small>{step.label}</small>
          </li>
        ))}
      </ol>
      <figcaption id="guide-flow-caption">A useful financial rhythm connects the plan, the record and the next decision.</figcaption>
    </figure>
  );
}

const forecastRows = [
  { date: "Sep 28", item: "Starting balance", amount: "", balance: "$3,400", tone: "starting" },
  { date: "Sep 30", item: "Mortgage", amount: "−$1,850", balance: "$1,550", tone: "expense" },
  { date: "Oct 1", item: "Paycheque", amount: "+$4,200", balance: "$5,750", tone: "income" },
  { date: "Oct 3", item: "Electricity", amount: "−$240", balance: "$5,510", tone: "expense" },
  { date: "Oct 5", item: "Credit card", amount: "−$3,100", balance: "$2,410", tone: "expense" },
  { date: "Oct 8", item: "Childcare", amount: "−$600", balance: "$1,810", tone: "expense" },
] as const;

export function ForecastTimeline() {
  return (
    <figure className="guide-forecast-card" aria-labelledby="forecast-timeline-caption">
      <div className="guide-forecast-card-heading">
        <div>
          <span>14-day outlook</span>
          <strong>Projected chequing balance</strong>
        </div>
        <small>Starting Sep 28</small>
      </div>
      <div className="guide-forecast-labels" aria-hidden="true">
        <span>Date</span><span>Item</span><span>Amount</span><span>Balance</span>
      </div>
      <ol className="guide-forecast-timeline">
        {forecastRows.map((row) => (
          <li className={`guide-forecast-${row.tone}`} key={`${row.date}-${row.item}`}>
            <time dateTime={row.date === "Sep 28" ? "2026-09-28" : row.date === "Sep 30" ? "2026-09-30" : `2026-10-${row.date.split(" ")[1].padStart(2, "0")}`}>{row.date}</time>
            <span className="guide-forecast-item">{row.item}</span>
            <span className="guide-forecast-amount">{row.amount || <span className="sr-only">No change</span>}</span>
            <strong>{row.balance}</strong>
          </li>
        ))}
      </ol>
      <figcaption id="forecast-timeline-caption">The order of known income and expenses reveals the balance available after each event.</figcaption>
    </figure>
  );
}

export function GuideCta() {
  return (
    <aside className="guide-cta" aria-labelledby="guide-cta-title">
      <div>
        <p className="eyebrow"><span /> Capehelm Forecast</p>
        <h2 id="guide-cta-title">See what&apos;s coming next.</h2>
        <p>Capehelm combines spending trends, budgeting and a 14-day cash-flow forecast in a private personal finance app for Mac.</p>
      </div>
      <SiteLink className="button" href="/cash-flow-forecast">Explore Capehelm <ArrowIcon /></SiteLink>
    </aside>
  );
}
