import { AppStoreLink, ArrowIcon, SiteLink } from "./SiteShell";

type LandingCtaProps = {
  eyebrow: string;
  title: string;
  body: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export function LandingCta({
  eyebrow,
  title,
  body,
  secondaryHref,
  secondaryLabel,
}: LandingCtaProps) {
  return (
    <section className="landing-cta section-shell">
      <div>
        <p className="eyebrow"><span /> {eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className="landing-cta-actions">
        <AppStoreLink className="button">Download on the Mac App Store <ArrowIcon /></AppStoreLink>
        <SiteLink className="text-link" href={secondaryHref}>{secondaryLabel} <ArrowIcon /></SiteLink>
      </div>
    </section>
  );
}

type RelatedLink = {
  href: string;
  label: string;
  description: string;
};

export function RelatedGuides({ links }: { links: readonly RelatedLink[] }) {
  return (
    <nav className="landing-related section-shell" aria-label="Related Capehelm guides">
      <p className="eyebrow"><span /> Keep exploring</p>
      <div>
        {links.map((link) => (
          <SiteLink href={link.href} key={link.href}>
            <strong>{link.label}</strong>
            <span>{link.description}</span>
            <i aria-hidden="true">↗</i>
          </SiteLink>
        ))}
      </div>
    </nav>
  );
}
