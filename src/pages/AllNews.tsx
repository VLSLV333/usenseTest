import { useQuery } from "@tanstack/react-query";

import { getMainNews } from "../util/http";

import Article from "../components/Article";

import { useNewsStore } from "../store/newsStore";

export default function AllNews() {
  const setCurrentArticles = useNewsStore((s) => s.setCurrentArticles);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["news"],
    queryFn: getMainNews,
  });

  if (isError) {
    return (
      <>
        <h2 className="text-2xl font-bold my-3 sm:text-center">Could not get your news:(</h2>
        <p className="text-md font-bold my-3 sm:text-center">
          Please, reload page or try later
        </p>
      </>
    );
  }

  if (isLoading) {
    return (
      <h2 className="text-2xl font-bold animate-pulse sm:text-center">Getting your news...</h2>
    );
  }

  if (data) {
    setCurrentArticles(data);
    return (
      <>{!isLoading && data.map((art) => <Article {...art} key={art.id} />)}</>
    );
  }
}
