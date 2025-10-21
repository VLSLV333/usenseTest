import { Link } from "react-router";

import { type Article } from "../store/newsStore";

export default function Article({
  author,
  description,
  title,
  urlToImage,
  id,
}: Article) {
  let aut = author;

  if (aut?.startsWith("https")) {
    aut = "author";
  }

  if (!aut) {
    aut = "author";
  }

  return (
    <article
      key={author + description}
      className="flex flex-col items-center py-6 border-b sm:flex-row sm:gap-3 lg:max-w-[1000px] lg:m-auto"
    >
      <div className="sm:w-[55%]">
        <Link to={`${id}`}>
          <h2 className="font-bold text-2xl leading-[1.1] mb-2">{title}</h2>
        </Link>
        <Link to={`${id}`}>
          <p className="mb-3">{description}</p>
        </Link>
        <Link to={`${id}`}>
          <p className="mb-3 ">by {aut}</p>
        </Link>
      </div>
      <Link to={`${id}`} className="sm:w-[45%]">
        <img alt="news image" className="w-full h-auto object-cover" src={urlToImage} />
      </Link>
    </article>
  );
}
