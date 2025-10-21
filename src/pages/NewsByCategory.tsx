import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import Article from "../components/Article";

import { getNewsByCategory } from "../util/http";

import { useNewsStore } from "../store/newsStore";

export default function NewsByCategory() {
  const setCurrentArticles = useNewsStore((s) => s.setCurrentArticles);

  const params = useParams();
  const category = params.c;

  if (category) {
    const { data, isLoading, isError } = useQuery({
      queryKey: ["category", category],
      queryFn: ({ signal }) => getNewsByCategory(category, signal),
    });

    if (isLoading) {
      return (
        <h2 className="text-2xl font-bold animate-pulse sm:text-center">
          Getting your news...
        </h2>
      );
    }

    if (isError) {
      return (
        <>
          <h2 className="text-2xl font-bold my-3 sm:text-center">
            Could not get your news:(
          </h2>
          <p className="text-md font-bold my-3 sm:text-center">
            Please, reload page or try another category
          </p>
        </>
      );
    }

    if (data?.length === 0) {
      return (
        <>
          <h2 className="text-2xl font-bold my-3 sm:text-center">
            No news for this category:(
          </h2>
          <p className="text-md font-bold my-3 sm:text-center">
            Please, try another category
          </p>
        </>
      );
    }

    if (data) {
      setCurrentArticles(data);
      return (
        <>
          {data.map((art) => (
            <Article {...art} key={art.id} />
          ))}
        </>
      );
    }
  }
}
