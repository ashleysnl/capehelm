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

export const fourteenDayForecastRows = [
  { day: 0, label: "Today", item: "Starting balance", change: "—", balance: 4800 },
  { day: 2, label: "Day 2", item: "Mortgage", change: "−$1,850", balance: 2950 },
  { day: 4, label: "Day 4", item: "Paycheque", change: "+$3,900", balance: 6850 },
  { day: 5, label: "Day 5", item: "Groceries", change: "−$250", balance: 6600 },
  { day: 7, label: "Day 7", item: "Credit card", change: "−$3,200", balance: 3400 },
  { day: 9, label: "Day 9", item: "Electricity", change: "−$240", balance: 3160 },
  { day: 11, label: "Day 11", item: "Childcare", change: "−$600", balance: 2560 },
  { day: 14, label: "Day 14", item: "Paycheque", change: "+$3,900", balance: 6460 },
] as const;

const formatBalance = (value: number) => `$${value.toLocaleString("en-CA")}`;

export function FourteenDayBalancePath() {
  const width = 920;
  const height = 300;
  const plot = { left: 62, right: 56, top: 38, bottom: 56 };
  const minimum = 2000;
  const maximum = 7000;
  const x = (day: number) => plot.left + (day / 14) * (width - plot.left - plot.right);
  const y = (balance: number) => plot.top + ((maximum - balance) / (maximum - minimum)) * (height - plot.top - plot.bottom);
  const points = fourteenDayForecastRows.map((row) => `${x(row.day)},${y(row.balance)}`).join(" ");
  const lowPoint = fourteenDayForecastRows.reduce((lowest, row) => row.balance < lowest.balance ? row : lowest);

  return (
    <figure className="guide-balance-path" aria-labelledby="balance-path-caption">
      <div className="guide-balance-path-heading">
        <div>
          <span>Illustrative example</span>
          <strong>A 14-day projected balance path</strong>
        </div>
        <small>Lowest point highlighted</small>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Illustrative 14-day projected balance path, with the lowest point of $2,560 on Day 11 highlighted"
        aria-labelledby="balance-path-title balance-path-description"
      >
        <title id="balance-path-title">Projected chequing balance over fourteen days</title>
        <desc id="balance-path-description">The balance starts at $4,800, reaches a high of $6,850 on Day 4, falls to its lowest point of $2,560 on Day 11 and ends at $6,460 on Day 14.</desc>
        {[2000, 4000, 6000].map((value) => (
          <g className="guide-chart-grid" key={value}>
            <line x1={plot.left} x2={width - plot.right} y1={y(value)} y2={y(value)} />
            <text x={plot.left - 12} y={y(value) + 4} textAnchor="end">${value / 1000}k</text>
          </g>
        ))}
        <polyline className="guide-chart-line-glow" points={points} />
        <polyline className="guide-chart-line" points={points} />
        {fourteenDayForecastRows.map((row) => (
          <g className={row.day === lowPoint.day ? "guide-chart-point guide-chart-point-low" : "guide-chart-point"} key={row.day}>
            <circle cx={x(row.day)} cy={y(row.balance)} r={row.day === lowPoint.day ? 7 : 4.5} />
            {[0, 4, 7, 11, 14].includes(row.day) ? <text x={x(row.day)} y={height - 24} textAnchor="middle">{row.label}</text> : null}
          </g>
        ))}
        <g className="guide-chart-low-label">
          <line x1={x(lowPoint.day)} x2={x(lowPoint.day)} y1={y(lowPoint.balance) - 11} y2={y(lowPoint.balance) - 40} />
          <text x={x(lowPoint.day)} y={y(lowPoint.balance) - 49} textAnchor="middle">Low point · {formatBalance(lowPoint.balance)}</text>
        </g>
      </svg>
      <figcaption id="balance-path-caption">The path reveals the pressure between the starting and ending balances. The same values are listed in the accessible forecast table above.</figcaption>
    </figure>
  );
}

export function ForecastHighlights() {
  const balances = fourteenDayForecastRows.map((row) => row.balance);
  const highlights = [
    ["Starting balance", balances[0]],
    ["Highest projected balance", Math.max(...balances)],
    ["Lowest projected balance", Math.min(...balances)],
    ["Ending balance", balances.at(-1) ?? 0],
  ] as const;

  return (
    <aside className="guide-forecast-highlights" aria-label="Fourteen-day forecast highlights">
      {highlights.map(([label, value]) => (
        <div className={label.startsWith("Lowest") ? "guide-forecast-highlight-low" : undefined} key={label}>
          <span>{label}</span>
          <strong>{formatBalance(value)}</strong>
        </div>
      ))}
    </aside>
  );
}

const forecastProcessSteps = [
  "Start with available cash",
  "Add income",
  "Add obligations",
  "Estimate variable spend",
  "Find the low point",
] as const;

export function ForecastProcessStrip() {
  return (
    <figure className="guide-process-strip guide-process-strip-forecast" aria-labelledby="forecast-process-caption">
      <ol>
        {forecastProcessSteps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
      <figcaption id="forecast-process-caption">A practical forecast starts with available cash, adds what is expected and then looks for the point where the projected balance is lowest.</figcaption>
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
