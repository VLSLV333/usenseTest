import { useParams } from "react-router";

import { useNewsStore } from "../store/newsStore";

export default function ArticleDetailed() {
  const id = useParams().id;

  const articles = useNewsStore((s) => s.newsArticles);
  const newsToShow = articles.find((art) => art.id === Number(id));

  const time = new Date(String(newsToShow?.publishedAt)).toLocaleString(
    "en-GB",
    {
      timeZone: "UTC",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <article className="sm:flex sm:flex-col items-center lg:max-w-[900px] lg:mx-auto">
      <h2 className="font-bold text-2xl my-3 leading-[1.1]">
        {newsToShow?.title}
      </h2>
      <p className="font-bold text-md my-3 leading-[1.1] lg:max-w-[800px] lg:mx-auto">
        {newsToShow?.description}
      </p>
      <p className="mb-5">{time}</p>
      <img
        alt="news image"
        className="mb-2 lg:max-w-[1000px]"
        src={newsToShow?.urlToImage}
      />
      <p className="mb-5">by {newsToShow?.author ?? "author"}</p>
      <p className=" lg:max-w-[800px] lg:mx-auto">{newsToShow?.content}</p>
    </article>
  );
}
