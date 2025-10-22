import { QueryClient } from "@tanstack/react-query";

import {
  type Article,
  type articleFromApi,
  type source,
} from "../store/newsStore";

// const BASE_URL = "http://localhost:5000/api"; 
const BASE_URL = "https://132cc3054d54.ngrok-free.app/api"; 

export const queryClient = new QueryClient();

async function getTop20SourcesAsParamString(): Promise<string> {
  const resp = await fetch(`${BASE_URL}/sources`);

  if (!resp.ok) {
    const error = new Error("Error while getting top 20 sources");
    throw error;
  }

  const respObj = await resp.json();
  const sourcesIdsString: string = respObj.reduce(
    (acc: string, cur: source) => acc + (cur.id + ","),
    ""
  );
  return sourcesIdsString;
}

export async function getMainNews() {
  const sourcesStr = await getTop20SourcesAsParamString();
  const resp = await fetch(
    `${BASE_URL}/news?everything=true&sources=${sourcesStr}&pageSize=20`
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
    `${BASE_URL}/news?category=${category}&pageSize=20`,
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
    `${BASE_URL}/news?everything=true&q=${key}&pageSize=20`
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
