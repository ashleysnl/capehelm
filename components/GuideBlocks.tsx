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

const connectionModels = [
  {
    label: "Connected model",
    steps: ["Bank", "Data provider / service", "Finance app"],
  },
  {
    label: "Capehelm / local-first model",
    steps: ["Bank", "CSV export", "Capehelm Finance Document"],
  },
] as const;

export function ConnectionModelsDiagram() {
  return (
    <figure className="guide-connection-models" aria-labelledby="connection-models-caption">
      <div className="guide-connection-models-grid">
        {connectionModels.map((model) => (
          <div className="guide-connection-model" key={model.label}>
            <p>{model.label}</p>
            <ol>
              {model.steps.map((step, index) => (
                <li key={step}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <figcaption id="connection-models-caption">
        Both approaches begin with the same financial institution. The difference is how and when information reaches the finance app.
      </figcaption>
    </figure>
  );
}

const approachRows = [
  ["Updates", "Transactions can arrive automatically", "You initiate imports"],
  ["Routine", "Less routine work", "Requires occasional effort"],
  ["Freshness", "Balances can remain more current", "Current as of your last update"],
  ["Many accounts", "Easier to aggregate continuously", "Accounts may need separate exports"],
  ["Data path", "Information moves through connected services", "Can reduce the systems handling your data"],
  ["Optimizes for", "Convenience", "Control"],
] as const;

export function ApproachComparison() {
  return (
    <figure className="guide-comparison" aria-labelledby="approach-comparison-caption">
      <div className="guide-comparison-heading">
        <span>Two reasonable approaches</span>
        <strong>Automatic and manual optimize for different priorities.</strong>
      </div>
      <table>
        <thead>
          <tr>
            <th scope="col">Consideration</th>
            <th scope="col">Bank-connected</th>
            <th scope="col">Manual / local</th>
          </tr>
        </thead>
        <tbody>
          {approachRows.map(([consideration, connected, local]) => (
            <tr key={consideration}>
              <th scope="row">{consideration}</th>
              <td data-label="Bank-connected">{connected}</td>
              <td data-label="Manual / local">{local}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption id="approach-comparison-caption">
        A neutral comparison of the day-to-day trade-offs between connected and user-directed finance workflows.
      </figcaption>
    </figure>
  );
}

const localFirstSteps = ["Export", "Import", "Review", "Understand"] as const;

export function LocalFirstProcessStrip() {
  return (
    <figure className="guide-process-strip" aria-labelledby="local-process-caption">
      <ol>
        {localFirstSteps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
      <figcaption id="local-process-caption">
        A user-directed review loop: export transactions, import them, review what changed and use the result to understand your finances.
      </figcaption>
    </figure>
  );
}

type GuideCtaProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  href?: string;
  label?: string;
};

export function GuideCta({
  eyebrow = "Capehelm Forecast",
  title = "See what’s coming next.",
  body = "Capehelm combines spending trends, budgeting and a 14-day cash-flow forecast in a private personal finance app for Mac.",
  href = "/cash-flow-forecast",
  label = "Explore Capehelm",
}: GuideCtaProps = {}) {
  return (
    <aside className="guide-cta" aria-labelledby="guide-cta-title">
      <div>
        <p className="eyebrow"><span /> {eyebrow}</p>
        <h2 id="guide-cta-title">{title}</h2>
        <p>{body}</p>
      </div>
      <SiteLink className="button" href={href}>{label} <ArrowIcon /></SiteLink>
    </aside>
  );
}
