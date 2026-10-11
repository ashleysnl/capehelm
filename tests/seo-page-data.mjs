import { supportArticles, supportArticlePath } from "../content/supportArticles.ts";

export const productionOrigin = "https://capehelm.com";

export const supportArticlePages = supportArticles.map((article) => {
  const route = supportArticlePath(article);

  return {
    route,
    file: `${route.slice(1)}.html`,
    title: article.metadataTitle,
    description: article.metadataDescription,
    canonical: `${productionOrigin}${route}`,
  };
});
