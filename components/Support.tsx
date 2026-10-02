import { BreadcrumbSchema } from "./BreadcrumbSchema";
import { SiteLink } from "./SiteShell";
import {
  supportArticleByKey,
  supportArticlePath,
  supportCategories,
  type SupportArticle,
  type SupportCategoryId,
  type SupportScreenshot,
  type SupportSection,
} from "../content/supportArticles";

export function SupportPrivacyWarning({ compact = false }: { compact?: boolean }) {
  const titleId = compact ? "support-privacy-title-compact" : "support-privacy-title";

  return (
    <aside className={`support-privacy-warning${compact ? " support-privacy-warning-compact" : ""}`} aria-labelledby={titleId}>
      <span className="support-warning-icon" aria-hidden="true">!</span>
      <div>
        <h3 id={titleId}>Never email personal financial data to Capehelm Support.</h3>
        <p>Do not send bank statements, Capehelm Finance Documents, transaction exports, backup archives, account numbers, screenshots containing personal financial information, or other sensitive financial information.</p>
      </div>
    </aside>
  );
}

export function SupportContact() {
  return (
    <section className="support-contact" aria-labelledby="support-contact-title">
      <div>
        <p className="eyebrow"><span /> Still need help?</p>
        <h2 id="support-contact-title">Tell us what happened.</h2>
        <p>Email <a href="mailto:support@capehelm.com">support@capehelm.com</a> and describe what you were trying to do, what happened, and any error message Capehelm displayed. Please write the error in the email instead of attaching sensitive files or screenshots.</p>
        <a className="button button-secondary" href="mailto:support@capehelm.com">Email Capehelm Support</a>
      </div>
      <SupportPrivacyWarning compact />
    </section>
  );
}

export function SupportBreadcrumbs({ article }: { article: SupportArticle }) {
  const category = supportCategories[article.category];

  return (
    <nav className="support-breadcrumbs" aria-label="Breadcrumb">
      <BreadcrumbSchema items={[
        { name: "Capehelm", path: "/" },
        { name: "Support", path: "/support" },
        { name: category.label, path: `/support#category-${article.category}` },
        { name: article.title, path: supportArticlePath(article) },
      ]} />
      <ol>
        <li><SiteLink href="/">Capehelm</SiteLink></li>
        <li><SiteLink href="/support">Support</SiteLink></li>
        <li><SiteLink href={`/support#category-${article.category}`}>{category.label}</SiteLink></li>
        <li aria-current="page">{article.title}</li>
      </ol>
    </nav>
  );
}

export function SupportScreenshotFigure({ screenshot }: { screenshot: SupportScreenshot }) {
  return (
    <figure className="support-screenshot">
      <div className="support-screenshot-frame">
        {/* Approved Phase 1 support PNGs are intentionally served at their original resolution. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={screenshot.src}
          width={screenshot.width}
          height={screenshot.height}
          loading="eager"
          decoding="async"
          alt={screenshot.alt}
        />
      </div>
      <figcaption>{screenshot.caption}</figcaption>
    </figure>
  );
}

export function SupportArticleSection({ section, number }: { section: SupportSection; number: number }) {
  return (
    <section className="support-article-section">
      <div className="support-section-heading">
        <span aria-hidden="true">{String(number).padStart(2, "0")}</span>
        <h2>{section.heading}</h2>
      </div>
      <div className="support-section-body">
        {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {section.steps && (
          <ol className="support-steps">
            {section.steps.map((step) => <li key={step}>{step}</li>)}
          </ol>
        )}
        {section.bullets && (
          <ul className="support-bullets">
            {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
        )}
        {section.note && (
          <aside className="support-note">
            <strong>{section.noteLabel ?? "Note"}</strong>
            <p>{section.note}</p>
          </aside>
        )}
      </div>
    </section>
  );
}

export function RelatedArticles({ related }: { related: string[] }) {
  const articles = related
    .map((key) => supportArticleByKey.get(key))
    .filter((article): article is SupportArticle => Boolean(article));

  return (
    <section className="related-support" aria-labelledby="related-support-title">
      <p className="eyebrow"><span /> Keep going</p>
      <h2 id="related-support-title">Related articles</h2>
      <div className="related-support-grid">
        {articles.map((article) => (
          <SiteLink href={supportArticlePath(article)} key={`${article.category}/${article.slug}`}>
            <span>{supportCategories[article.category].label}</span>
            <strong>{article.title}</strong>
            <p>{article.description}</p>
            <i aria-hidden="true">↗</i>
          </SiteLink>
        ))}
      </div>
    </section>
  );
}

export function SupportCategoryLabel({ category }: { category: SupportCategoryId }) {
  return <>{supportCategories[category].label}</>;
}
