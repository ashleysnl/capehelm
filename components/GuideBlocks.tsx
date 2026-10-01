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

const csvAnalysisSteps = ["Export", "Clean", "Categorize", "Analyze"] as const;

export function CsvAnalysisProcessStrip() {
  return (
    <figure className="guide-process-strip" aria-labelledby="csv-analysis-process-caption">
      <ol>
        {csvAnalysisSteps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
      <figcaption id="csv-analysis-process-caption">Preserve the export, clean a working copy, add useful categories and then look for patterns.</figcaption>
    </figure>
  );
}

const transactionTransformationRows = [
  ["MCDONALDS #1234 ST JOHNS NL", "McDonald’s", "Fast Food"],
  ["SOBEYS #123", "Sobeys", "Groceries"],
  ["SHELL 12345", "Shell", "Fuel"],
  ["NETFLIX.COM", "Netflix", "Streaming"],
] as const;

export function TransactionTransformation() {
  return (
    <figure className="guide-comparison guide-transform-table" aria-labelledby="transaction-transformation-caption">
      <div className="guide-comparison-heading">
        <span>Keep the source · Add useful structure</span>
        <strong>Raw descriptions become easier to analyze without being overwritten.</strong>
      </div>
      <table>
        <thead>
          <tr>
            <th scope="col">Raw description</th>
            <th scope="col">Clean merchant</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {transactionTransformationRows.map(([raw, merchant, category]) => (
            <tr key={raw}>
              <th scope="row">{raw}</th>
              <td data-label="Clean merchant">{merchant}</td>
              <td data-label="Category">{category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption id="transaction-transformation-caption">The original bank description remains available while a normalized merchant and category support analysis.</figcaption>
    </figure>
  );
}

const spendingHierarchy = [
  ["Group", "Variable Necessities", "A broad area of household spending"],
  ["Category", "Groceries", "The type of expense inside that group"],
  ["Merchant", "Sobeys", "Where the money was actually spent"],
] as const;

export function SpendingHierarchyGraphic() {
  return (
    <figure className="guide-process-strip guide-hierarchy-strip" aria-labelledby="spending-hierarchy-caption">
      <ol>
        {spendingHierarchy.map(([level, example, explanation], index) => (
          <li key={level}>
            <span>{String(index + 1).padStart(2, "0")} · {level}</span>
            <strong>{example}</strong>
            <small>{explanation}</small>
          </li>
        ))}
      </ol>
      <figcaption id="spending-hierarchy-caption">Moving from group to category to merchant changes the level of detail—and the question you can answer.</figcaption>
    </figure>
  );
}

const analysisQuestions = [
  "Where did most of my money go?",
  "Which merchants appear most often?",
  "What repeats every month?",
  "Which expenses are growing?",
  "Which transactions deserve another look?",
] as const;

export function AnalysisQuestionsCard() {
  return (
    <aside className="guide-analysis-questions" aria-labelledby="analysis-questions-title">
      <div className="guide-analysis-questions-heading">
        <span>Five useful questions</span>
        <strong id="analysis-questions-title">Start simple. Look for patterns that help you understand what happened.</strong>
      </div>
      <ol>
        {analysisQuestions.map((question, index) => (
          <li key={question}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{question}</strong>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export function NetWorthEquationCard() {
  return (
    <figure className="guide-net-worth-equation" aria-labelledby="net-worth-equation-caption">
      <div className="guide-net-worth-equation-heading">
        <span>Illustrative household</span>
        <strong>Net worth brings assets and liabilities into one view.</strong>
      </div>
      <div className="guide-net-worth-equation-values" role="img" aria-label="Assets of $878,000 minus liabilities of $438,000 equals net worth of $440,000">
        <div><span>Assets</span><strong>$878,000</strong></div>
        <i aria-hidden="true">−</i>
        <div><span>Liabilities</span><strong>$438,000</strong></div>
        <i aria-hidden="true">=</i>
        <div className="guide-net-worth-equation-result"><span>Net worth</span><strong>$440,000</strong></div>
      </div>
      <figcaption id="net-worth-equation-caption">Assets minus liabilities equals net worth. The example matches the account values used throughout this guide.</figcaption>
    </figure>
  );
}

const netWorthHistory = [
  { month: "January", value: 405000 },
  { month: "April", value: 416000 },
  { month: "July", value: 427000 },
  { month: "October", value: 440000 },
] as const;

export function NetWorthHistoryChart() {
  const width = 920;
  const height = 300;
  const plot = { left: 74, right: 50, top: 40, bottom: 62 };
  const minimum = 400000;
  const maximum = 445000;
  const x = (index: number) => plot.left + (index / (netWorthHistory.length - 1)) * (width - plot.left - plot.right);
  const y = (value: number) => plot.top + ((maximum - value) / (maximum - minimum)) * (height - plot.top - plot.bottom);
  const points = netWorthHistory.map((entry, index) => `${x(index)},${y(entry.value)}`).join(" ");

  return (
    <figure className="guide-balance-path guide-net-worth-history" aria-labelledby="net-worth-history-caption">
      <div className="guide-balance-path-heading">
        <div>
          <span>Illustrative example</span>
          <strong>Net-worth history reveals the direction.</strong>
        </div>
        <small>January to October</small>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-labelledby="net-worth-history-title net-worth-history-description"
      >
        <title id="net-worth-history-title">Illustrative net-worth history</title>
        <desc id="net-worth-history-description">Net worth increases from $405,000 in January to $416,000 in April, $427,000 in July and $440,000 in October.</desc>
        {[400000, 420000, 440000].map((value) => (
          <g className="guide-chart-grid" key={value}>
            <line x1={plot.left} x2={width - plot.right} y1={y(value)} y2={y(value)} />
            <text x={plot.left - 14} y={y(value) + 4} textAnchor="end">${value / 1000}k</text>
          </g>
        ))}
        <polyline className="guide-chart-line-glow" points={points} />
        <polyline className="guide-chart-line" points={points} />
        {netWorthHistory.map((entry, index) => (
          <g className="guide-chart-point guide-net-worth-history-point" key={entry.month}>
            <circle cx={x(index)} cy={y(entry.value)} r="6" />
            <text x={x(index)} y={height - 28} textAnchor="middle">{entry.month}</text>
            <text className="guide-net-worth-history-value" x={x(index)} y={y(entry.value) - 18} textAnchor="middle">${entry.value.toLocaleString("en-CA")}</text>
          </g>
        ))}
      </svg>
      <figcaption id="net-worth-history-caption">The household&apos;s estimated net worth rises by $35,000 across four snapshots. The values also appear in the accessible history table in the article.</figcaption>
    </figure>
  );
}

const netWorthDrivers = [
  ["Asset growth", "Changes in the value of investments, property or other assets"],
  ["Contributions", "New money added to savings or investment accounts"],
  ["Withdrawals", "Money removed from an account or moved elsewhere"],
  ["Debt repayment", "Liabilities reduced through mortgage or loan payments"],
  ["Valuation changes", "Updates to estimates for homes, vehicles or other assets"],
] as const;

export function NetWorthDriversCard() {
  return (
    <aside className="guide-net-worth-drivers" aria-labelledby="net-worth-drivers-title">
      <div className="guide-analysis-questions-heading">
        <span>What changed?</span>
        <strong id="net-worth-drivers-title">The total matters less when you can&apos;t explain what moved it.</strong>
      </div>
      <dl>
        {netWorthDrivers.map(([driver, description], index) => (
          <div key={driver}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <dt>{driver}</dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

const financialTimeHorizons = [
  ["Transactions", "Past"],
  ["Budget", "Plan"],
  ["Forecast", "Near term"],
  ["Net Worth", "Bigger picture"],
  ["Retirement", "Long term"],
] as const;

export function FinancialTimeHorizonsStrip() {
  return (
    <figure className="guide-process-strip guide-time-horizons" aria-labelledby="financial-time-horizons-caption">
      <ol>
        {financialTimeHorizons.map(([view, horizon], index) => (
          <li key={view}>
            <span>{String(index + 1).padStart(2, "0")} · {horizon}</span>
            <strong>{view}</strong>
          </li>
        ))}
      </ol>
      <figcaption id="financial-time-horizons-caption">Each view answers a different question, from what already happened to where the longer-term direction could lead.</figcaption>
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
