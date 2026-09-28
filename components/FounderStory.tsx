import { siteAssetPath } from "../config/site";

type Pillar = {
  title: string;
  body: string;
  icon: "understand" | "plan" | "look-ahead" | "bigger-picture";
};

const pillars: Pillar[] = [
  {
    title: "Understand",
    body: "See where your money went with Trends.",
    icon: "understand",
  },
  {
    title: "Plan",
    body: "Set a budget that fits your life.",
    icon: "plan",
  },
  {
    title: "Look ahead",
    body: "Use the 14-day Forecast to stay in control.",
    icon: "look-ahead",
  },
  {
    title: "Bigger picture",
    body: "Track long-term progress with Net Worth & Retirement.",
    icon: "bigger-picture",
  },
];

function PillarIcon({ icon }: Pick<Pillar, "icon">) {
  if (icon === "understand") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 38V27M18 38V20M28 38V13M38 38V7" />
        <path d="M6 38h36" />
      </svg>
    );
  }

  if (icon === "plan") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="9" y="7" width="30" height="34" rx="3" />
        <path d="M16 16h16M16 24h16M16 32h9" />
      </svg>
    );
  }

  if (icon === "look-ahead") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="m7 37 12-13 8 7 14-17" />
        <path d="M31 14h10v10" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="16" />
      <path d="M24 8v16h16" />
      <path d="M12.5 35.5 24 24" />
    </svg>
  );
}

export function FounderStory() {
  return (
    <section className="founder-story" aria-labelledby="founder-story-title">
      <div className="founder-story-grid section-shell">
        <div className="founder-copy reveal">
          <p className="eyebrow"><span /> The story behind Capehelm</p>
          <h1 id="founder-story-title">Why I built <em>Capehelm</em></h1>
          <div className="founder-narrative">
            <p>I&apos;m a project engineer. I&apos;ve spent years digging through the details of complex projects — tracking costs, understanding trends, forecasting what comes next, and turning a lot of information into something useful.</p>
            <p>Then I realized I wasn&apos;t applying those same skills to my own finances.</p>
            <p>So I built Capehelm.</p>
          </div>
          <p className="founder-principle">
            <span aria-hidden="true" />
            <strong>Understand what happened. Make a plan.<br />Look ahead. Keep track of the bigger picture.</strong>
          </p>
          <div className="founder-signoff" aria-label="Ashley Skinner — Founder, Capehelm">
            <p className="founder-signature">Ashley Skinner</p>
            <p>— Founder, Capehelm</p>
          </div>
        </div>

        <figure className="founder-visual reveal reveal-late">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="founder-hero-image"
            src={siteAssetPath("/images/founder/ashley-skinner-capehelm-hero.webp")}
            width="1374"
            height="1145"
            decoding="async"
            fetchPriority="high"
            alt="Ashley Skinner, founder of Capehelm, seated beside a table against a navy blueprint mountain backdrop"
          />
        </figure>
      </div>

      <section className="founder-pillars section-shell" aria-labelledby="founder-pillars-title">
        <h2 className="visually-hidden" id="founder-pillars-title">How the Capehelm story connects to the product</h2>
        {pillars.map((pillar) => (
          <article className={`founder-pillar founder-pillar-${pillar.icon}`} key={pillar.title}>
            <span className="founder-pillar-icon"><PillarIcon icon={pillar.icon} /></span>
            <div>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}
