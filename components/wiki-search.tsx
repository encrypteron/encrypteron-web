"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { WikiArticle } from "@/wiki/content";

export function WikiSearch({ articles, language }: { articles: WikiArticle[]; language: "en" | "fr" }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const fr = language === "fr";
  const categories = [...new Set(articles.map((article) => article.category))].sort();
  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    return articles.filter((article) => {
      const matchesCategory = category === "all" || article.category === category;
      const content = [article.title, article.summary, article.category, ...article.tags].join(" ").toLocaleLowerCase();
      return matchesCategory && (!normalized || content.includes(normalized));
    });
  }, [articles, category, query]);

  return <>
    <div className="wiki-controls">
      <label><span>{fr ? "Rechercher" : "Search"}</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={fr ? "Titres, sujets, étiquettes…" : "Titles, topics, tags…"} /></label>
      <label><span>{fr ? "Catégorie" : "Category"}</span><select value={category} onChange={(event) => setCategory(event.target.value)}><option value="all">{fr ? "Toutes les catégories" : "All categories"}</option>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
    </div>
    {results.length ? <div className="wiki-list">{results.map((article) => <article className="wiki-card" key={article.slug}>
      <div className="wiki-card-meta"><span>{article.category}</span><time dateTime={article.publishedAt}>{new Intl.DateTimeFormat(fr ? "fr-FR" : "en-GB", { dateStyle: "medium", timeZone: "UTC" }).format(new Date(`${article.publishedAt}T00:00:00Z`))}</time></div>
      <h2><Link href={`${fr ? "/fr" : ""}/wiki/${article.slug}`}>{article.title}</Link></h2><p>{article.summary}</p>
      <ul aria-label={fr ? "Étiquettes" : "Tags"}>{article.tags.map((tag) => <li key={tag}><button type="button" onClick={() => setQuery(tag)}>{tag}</button></li>)}</ul>
    </article>)}</div> : <p className="wiki-empty" role="status">{fr ? "Aucun article ne correspond à votre recherche." : "No articles match your search."}</p>}
  </>;
}
