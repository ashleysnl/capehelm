import type { ProductVisual } from "../config/site";

const navItems = ["Overview", "Forecast", "Transactions", "Budget", "Trends", "Net Worth"];

function WindowFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="product-window" role="img" aria-label={label}>
      <div className="window-bar">
        <div className="traffic-lights" aria-hidden="true"><i /><i /><i /></div>
        <div className="window-title">Capehelm</div>
        <div className="window-status"><span /> Local only</div>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
}

function Sidebar({ active }: { active: string }) {
  return (
    <aside className="mock-sidebar" aria-hidden="true">
      <div className="mock-brand"><span>CH</span><b>Capehelm</b></div>
      {navItems.map((item) => (
        <div className={item === active ? "active" : ""} key={item}>
          <i /> {item}
        </div>
      ))}
      <div className="local-chip">▣ On this Mac</div>
    </aside>
  );
}

const MoneyCard = ({ label, value, note, tone = "blue" }: { label: string; value: string; note: string; tone?: string }) => (
  <div className={`money-card tone-${tone}`}>
    <span>{label}</span><strong>{value}</strong><small>{note}</small>
  </div>
);

function LineChart() {
  return (
    <div className="line-chart" aria-hidden="true">
      <div className="chart-grid" />
      <div className="chart-fill" />
      <div className="chart-line" />
      {[18, 36, 54, 72, 90].map((left, index) => <i key={left} style={{ left: `${left}%`, bottom: `${34 + (index % 3) * 10}%` }} />)}
    </div>
  );
}

function Dashboard() {
  return (
    <WindowFrame label="Synthetic Capehelm dashboard showing monthly position, budget health, forecast and net worth">
      <Sidebar active="Overview" />
      <div className="mock-content">
        <div className="screen-heading"><div><span>August overview</span><h3>Your financial position</h3></div><button>Current month</button></div>
        <div className="money-grid">
          <MoneyCard label="Income" value="$7,850" note="Month to date" tone="green" />
          <MoneyCard label="Spending" value="$4,240" note="54% of income" tone="pink" />
          <MoneyCard label="Left to plan" value="$1,430" note="On track" tone="blue" />
          <MoneyCard label="Net worth" value="$286k" note="Up this year" tone="violet" />
        </div>
        <div className="dashboard-lower">
          <div className="mock-panel wide"><div className="panel-label"><span>Spending this month</span><b>Healthy pace</b></div><LineChart /></div>
          <div className="mock-panel attention"><div className="panel-label"><span>Coming up</span><b>14 days</b></div><ul><li><span>Income</span><b>+$3,920</b></li><li><span>Commitments</span><b>−$1,740</b></li><li><span>Flexible room</span><b>$680</b></li></ul></div>
        </div>
      </div>
    </WindowFrame>
  );
}

function Forecast() {
  const days = [62, 68, 58, 72, 48, 55, 45, 70, 64, 75, 58, 52, 69, 78];
  return (
    <WindowFrame label="Synthetic Capehelm 14-day cash-flow forecast">
      <Sidebar active="Forecast" />
      <div className="mock-content">
        <div className="screen-heading"><div><span>14-day outlook</span><h3>Know what your money needs to do</h3></div><button>Aug 10–23</button></div>
        <div className="forecast-kpis"><MoneyCard label="Starting balance" value="$4,820" note="Northstar Chequing" /><MoneyCard label="Lowest balance" value="$2,160" note="Above safety floor" tone="green" /><MoneyCard label="Flexible room" value="$620" note="After commitments" tone="violet" /></div>
        <div className="mock-panel forecast-panel">
          <div className="panel-label"><span>Projected checking balance</span><b>Safety floor $1,500</b></div>
          <div className="forecast-bars" aria-hidden="true">{days.map((height, index) => <i key={index} className={index === 4 || index === 6 ? "pressure" : ""} style={{ height: `${height}%` }}><span>{10 + index}</span></i>)}</div>
        </div>
        <div className="event-row"><span>Today</span><b>Everyday Visa</b><em>−$820</em><small>Covered</small></div>
      </div>
    </WindowFrame>
  );
}

function Budget() {
  const rows = [["Home & utilities", "$2,180", "$2,090", "On track"], ["Groceries", "$820", "$760", "Watch"], ["Travel", "$410", "$540", "Over plan"], ["Savings goals", "$1,200", "$1,200", "On track"]];
  return (
    <WindowFrame label="Synthetic Capehelm Budget Health dashboard">
      <Sidebar active="Budget" />
      <div className="mock-content">
        <div className="screen-heading"><div><span>Monthly plan</span><h3>Budget health</h3></div><button>Open Budget Builder</button></div>
        <div className="budget-summary"><div className="budget-ring"><span>76%</span><small>month planned</small></div><MoneyCard label="Actual MTD" value="$4,240" note="52% of plan" /><MoneyCard label="Projected month-end" value="$7,980" note="$120 under plan" tone="green" /></div>
        <div className="budget-table"><div className="budget-row header"><span>Group</span><span>Plan</span><span>Projected</span><span>Status</span></div>{rows.map((row) => <div className="budget-row" key={row[0]}><b>{row[0]}</b><span>{row[1]}</span><span>{row[2]}</span><em className={row[3] === "On track" ? "good" : row[3] === "Watch" ? "watch" : "over"}>{row[3]}</em></div>)}</div>
      </div>
    </WindowFrame>
  );
}

function Trends() {
  const blocks = [["Housing", 34, "large blue"], ["Groceries", 18, "medium green"], ["Travel", 14, "medium pink"], ["Dining", 10, "small violet"], ["Utilities", 9, "small amber"], ["Shopping", 8, "small blue"], ["Other", 7, "small slate"]];
  return (
    <WindowFrame label="Synthetic Capehelm spending trends treemap">
      <Sidebar active="Trends" />
      <div className="mock-content">
        <div className="screen-heading"><div><span>Spending patterns</span><h3>See the shape of your spending</h3></div><button>Year to date</button></div>
        <div className="trend-tabs"><b>Group</b><span>Category</span><span>Merchant</span></div>
        <div className="trends-layout"><div className="treemap">{blocks.map(([label, value, classes]) => <div key={label} className={String(classes)}><b>{label}</b><span>{value}%</span></div>)}</div><div className="mock-panel leaderboard"><div className="panel-label"><span>Top movements</span><b>vs last year</b></div><ul><li><span>Groceries</span><b>+8%</b></li><li><span>Dining</span><b>−12%</b></li><li><span>Travel</span><b>+5%</b></li><li><span>Utilities</span><b>−3%</b></li></ul></div></div>
      </div>
    </WindowFrame>
  );
}

function NetWorth() {
  return (
    <WindowFrame label="Synthetic Capehelm net worth dashboard">
      <Sidebar active="Net Worth" />
      <div className="mock-content">
        <div className="screen-heading"><div><span>Long-term progress</span><h3>Net worth</h3></div><button>Update values</button></div>
        <div className="networth-hero"><div><span>Current net worth</span><strong>$286,420</strong><small>Contribution-adjusted growth +6.8%</small></div><LineChart /></div>
        <div className="allocation-grid"><MoneyCard label="Investments" value="$184k" note="64% of assets" tone="violet" /><MoneyCard label="Liquid assets" value="$42k" note="14% of assets" tone="green" /><MoneyCard label="Property" value="$380k" note="Updated recently" /><MoneyCard label="Liabilities" value="$320k" note="Mortgage + vehicle" tone="pink" /></div>
      </div>
    </WindowFrame>
  );
}

export function ProductWindow({ visual = "dashboard", className = "" }: { visual?: ProductVisual; className?: string }) {
  return <div className={`product-visual ${className}`}>{visual === "forecast" ? <Forecast /> : visual === "budget" ? <Budget /> : visual === "trends" ? <Trends /> : visual === "networth" ? <NetWorth /> : <Dashboard />}</div>;
}

export function ReportStack() {
  return (
    <div className="report-stack" role="img" aria-label="Synthetic Capehelm financial report pages">
      <article className="report-page report-back"><span>CAPEHELM</span><h4>Weekly Spending Review</h4><div className="report-chart" /><p>Three things to know this week</p></article>
      <article className="report-page report-front"><div className="report-logo">CH</div><span>WEEKLY FAMILY PLAN</span><h4>A clear plan for the week ahead.</h4><div className="report-stats"><b>$680<small>Flexible room</small></b><b>5<small>Commitments</small></b><b>14 days<small>Plan horizon</small></b></div><div className="report-chart pink" /><p>Built from synthetic demonstration data.</p></article>
    </div>
  );
}

export function DevicePair() {
  return (
    <div className="device-pair" role="img" aria-label="Capehelm on a Mac with an iPhone companion">
      <div className="mac-device"><ProductWindow visual="forecast" /></div>
      <div className="phone-device"><div className="phone-island" /><div className="phone-brand">CH <span>Capehelm</span></div><h4>Forecast</h4><small>Next 14 days</small><div className="phone-balance"><span>Lowest balance</span><strong>$2,160</strong><em>Above safety floor</em></div><div className="phone-bars">{[45, 62, 55, 70, 48, 64, 58].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div><nav><b>Forecast</b><span>Reports</span><span>To-Do</span></nav></div>
    </div>
  );
}
