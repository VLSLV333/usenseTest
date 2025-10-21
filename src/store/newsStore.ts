import { create } from "zustand";

export type source = {
  id: string;
  name: string;
};

export type articleFromApi = {
  author: string | null;
  content: string;
  description: string;
  publishedAt: string;
  source: source;
  title: string;
  url: string;
  urlToImage: string;
};

export type Article = articleFromApi & {
  id: number;
};

interface NewsState {
  newsArticles: [] | Article[];
  setCurrentArticles: (arr: Article[]) => void;
}

export const useNewsStore = create<NewsState>((set) => ({
  newsArticles: [],
  setCurrentArticles: (arr) => set({ newsArticles: arr }),
}));
