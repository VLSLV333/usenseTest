import { useMutation } from "@tanstack/react-query";

import Article from "../components/Article";
import ReceiveKeyForm from "../components/ReceiveKeyForm";
import { getNewsByKey } from "../util/http";

import { useNewsStore } from "../store/newsStore";

export default function NewsByKey() {
  const setCurrentArticles = useNewsStore((s) => s.setCurrentArticles);

  const { mutate, data, isPending, isError } = useMutation({
    mutationFn: getNewsByKey,
  });

  let news = <></>;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const key = String(Object.fromEntries(formData).key);

    mutate(key);
    event.currentTarget.reset();
  }

  if (isError) {
    return (
      <>
        <h2 className="text-2xl font-bold my-3 sm:text-center">
          Could not get your news:(
        </h2>
        <p className="text-md font-bold my-3 sm:text-center">
          Please, reload page or try another key word.
        </p>
      </>
    );
  }

  if (data) {
    setCurrentArticles(data);
    news = (
      <>
        {data.map((art) => (
          <Article {...art} key={art.id} />
        ))}
      </>
    );
  }

  if (data && data.length === 0) {
    news = (
      <>
        <h3 className="font-semibold sm:text-center">
          News for given key word were not found :(
        </h3>
        <p className="font-semibold sm:text-center">
          Please, try another key word.
        </p>
      </>
    );
  }

  return (
    <>
      <h2 className="text-center font-bold text-xl my-6">
        Pls type what you are interested in and lets find the news!
      </h2>
      <ReceiveKeyForm handleSubmit={handleSubmit} isPending={isPending} />
      {news}
    </>
  );
}
