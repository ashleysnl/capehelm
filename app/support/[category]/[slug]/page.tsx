import { notFound } from "next/navigation";
import { PageShell, SiteLink } from "../../../../components/SiteShell";
import {
  RelatedArticles,
  SupportArticleSection,
  SupportBreadcrumbs,
  SupportContact,
  SupportScreenshotFigure,
} from "../../../../components/Support";
import { createPageMetadata } from "../../../../config/pageMetadata";
import {
  getSupportArticle,
  supportArticlePath,
  supportArticles,
  supportCategories,
} from "../../../../content/supportArticles";

type ArticlePageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return supportArticles.map(({ category, slug }) => ({ category, slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { category, slug } = await params;
  const article = getSupportArticle(category, slug);
  if (!article) return {};

  return createPageMetadata({
    title: article.metadataTitle,
    description: article.metadataDescription,
    path: supportArticlePath(article),
  });
}

export default async function SupportArticlePage({ params }: ArticlePageProps) {
  const { category, slug } = await params;
  const article = getSupportArticle(category, slug);
  if (!article) notFound();

  return (
    <PageShell>
      <article className="support-article section-shell">
        <SupportBreadcrumbs article={article} />
        <header className="support-article-hero">
          <p className="eyebrow"><span /> {supportCategories[article.category].label}</p>
          <h1>{article.title}</h1>
          <p>{article.lead}</p>
          {article.quickAnswer && (
            <div className="support-quick-answer">
              <strong>Quick answer</strong>
              <p>{article.quickAnswer}</p>
            </div>
          )}
        </header>

        {article.screenshot && <SupportScreenshotFigure screenshot={article.screenshot} />}

        <div className="support-article-content">
          {article.sections.map((section, index) => (
            <SupportArticleSection key={section.heading} section={section} number={index + 1} />
          ))}
        </div>

        <RelatedArticles related={article.related} />
        <SupportContact />
        <nav className="support-back-link" aria-label="Back to Knowledge Hub">
          <SiteLink href="/support"><span aria-hidden="true">←</span> Back to Capehelm Support</SiteLink>
        </nav>
      </article>
    </PageShell>
  );
}
