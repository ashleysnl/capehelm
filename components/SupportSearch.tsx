"use client";

import { useMemo, useState } from "react";
import {
  supportArticlePath,
  supportArticles,
  supportCategories,
  type SupportCategoryId,
} from "../content/supportArticles";
import { SiteLink } from "./SiteShell";

const categoryOrder: SupportCategoryId[] = ["getting-started", "troubleshooting"];

function normalize(value: string) {
  return value.trim().toLocaleLowerCase();
}

export function SupportSearch() {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalize(query);
  const filteredArticles = useMemo(() => {
    if (!normalizedQuery) return supportArticles;

    return supportArticles.filter((article) =>
      normalize([
        article.title,
        article.description,
        article.lead,
        ...article.keywords,
      ].join(" ")).includes(normalizedQuery),
    );
  }, [normalizedQuery]);

  return (
    <div className="support-catalogue">
      <div className="support-search-wrap">
        <label htmlFor="support-search">Search the Knowledge Hub</label>
        <div className="support-search-control">
          <span aria-hidden="true">⌕</span>
          <input
            id="support-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search CSV, backup, document, subscription…"
            autoComplete="off"
          />
          {query && <button type="button" onClick={() => setQuery("")}>Clear</button>}
        </div>
        <p className="support-search-status" role="status" aria-live="polite">
          {normalizedQuery
            ? `${filteredArticles.length} ${filteredArticles.length === 1 ? "article" : "articles"} found`
            : "Search all 14 articles, or browse by category below."}
        </p>
      </div>

      {filteredArticles.length ? categoryOrder.map((categoryId) => {
        const articles = filteredArticles.filter((article) => article.category === categoryId);
        if (!articles.length) return null;
        const category = supportCategories[categoryId];

        return (
          <section className="support-category" id={`category-${categoryId}`} key={categoryId} aria-labelledby={`category-title-${categoryId}`}>
            <div className="support-category-heading">
              <div>
                <p className="eyebrow"><span /> {categoryId === "getting-started" ? "Learn Capehelm" : "Find a fix"}</p>
                <h2 id={`category-title-${categoryId}`}>{category.label}</h2>
              </div>
              <p>{category.description}</p>
            </div>
            <div className="support-card-grid">
              {articles.map((article, index) => (
                <SiteLink className="support-card" href={supportArticlePath(article)} key={article.slug}>
                  <span className="support-card-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <span className="support-card-action">Read article <i aria-hidden="true">↗</i></span>
                </SiteLink>
              ))}
            </div>
          </section>
        );
      }) : (
        <div className="support-empty" role="status">
          <h2>No matching articles</h2>
          <p>Try a shorter term such as “CSV”, “backup”, “document”, or “subscription”.</p>
          <button type="button" className="button button-secondary" onClick={() => setQuery("")}>Clear search</button>
        </div>
      )}
    </div>
  );
}
