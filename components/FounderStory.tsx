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

function BlueprintMountain() {
  return (
    <svg
      className="founder-blueprint-mountain"
      viewBox="0 0 920 500"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <path d="M22 448 210 250l70 64 172-222 92 126 70-71 284 301" />
      <path d="m44 448 171-173 64 72L451 116l91 130 73-75 255 277" />
      <path d="m208 250 50 11 22 53 41 4 131-226 21 98 71 28 70-71 29 93" />
      <path d="m172 448 110-134 44 82 126-304 24 199 68-73 62 151 8-222" />
      <path className="founder-contour" d="M96 420c128-52 196-30 286-87 91-58 145-116 244-108 82 7 135 72 236 90" />
      <path className="founder-contour" d="M122 449c111-42 199-19 293-76 97-59 144-103 236-94 73 8 119 50 196 72" />
    </svg>
  );
}

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
      <div className="founder-blueprint-grid" aria-hidden="true" />
      <BlueprintMountain />
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

        <figure className="founder-portrait reveal reveal-late">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteAssetPath("/images/founder/ashley-skinner.webp")}
            width="768"
            height="1024"
            decoding="async"
            fetchPriority="high"
            alt="Ashley Skinner, founder of Capehelm"
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
