import { QueryClient } from "@tanstack/react-query";

import {
  type Article,
  type articleFromApi,
  type source,
} from "../store/newsStore";

const API_KEY:string = import.meta.env.VITE_NEWS_API_KEY;

export const queryClient = new QueryClient();

async function getTop20SourcesAsParamString(): Promise<string> {
  const resp = await fetch(
    `https://newsapi.org/v2/sources?apiKey=${API_KEY}`
  );

  if (!resp.ok) {
    const error = new Error("Error while getting top 20 sources");
    throw error;
  }

  const respObj = await resp.json();
  const sourcesArray = respObj.sources.slice(0, 20);
  const sourcesIdsString: string = sourcesArray.reduce(
    (acc: string, cur: source) => acc + (cur.id + ","),
    ""
  );
  return sourcesIdsString;
}

export async function getMainNews() {
  const sourcesStr = await getTop20SourcesAsParamString();
  const resp = await fetch(
    `https://newsapi.org/v2/everything?sources=${sourcesStr}&pageSize=20&language=en&apiKey=${API_KEY}`
  );

  if (!resp.ok) {
    const error = new Error("Error while getting news for main page");
    throw error;
  }

  const respObj = await resp.json();
  const articles: articleFromApi[] = respObj.articles;

  const artArr: Article[] = articles.map((art) => ({
    ...art,
    id: Math.random(),
  }));

  return artArr;
}

export async function getNewsByCategory(category: string, signal: AbortSignal) {
  const resp = await fetch(
    `https://newsapi.org/v2/top-headlines?category=${category}&pageSize=20&language=en&apiKey=${API_KEY}`,
    { signal }
  );

  if (!resp.ok) {
    const error = new Error("Error while getting news by category");
    throw error;
  }

  const respObj = await resp.json();
  const articles: articleFromApi[] = respObj.articles;

  const artArr: Article[] = articles.map((art) => ({
    ...art,
    id: Math.random(),
  }));

  return artArr;
}

export async function getNewsByKey(key: string) {
  const resp = await fetch(
    `https://newsapi.org/v2/everything?q=${key}&pageSize=20&language=en&apiKey=${API_KEY}`
  );

  if (!resp.ok) {
    const error = new Error("Error while getting news by key");
    throw error;
  }

  const respObj = await resp.json();
  const articles: articleFromApi[] = respObj.articles;

  const artArr: Article[] = articles.map((art) => ({
    ...art,
    id: Math.random(),
  }));

  return artArr;
}
