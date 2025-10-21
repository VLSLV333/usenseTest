import { Link } from "react-router-dom";

export default function CategorySelector() {
  const categories = [
    {
      name: "BUSINESS",
      classes: "col-start-1 col-end-6 row-start-1 row-end-4",
    },
    { name: "GENERAL", classes: "col-start-6 col-end-9 row-start-1 row-end-2" },
    { name: "BOOKS", classes: "col-start-9 col-end-12 row-start-1 row-end-2" },
    {
      name: "ENTERTAINMENT",
      classes: "col-start-6 col-end-12 row-start-2 row-end-4",
    },
    {
      name: "TECHNOLOGY",
      classes: "col-start-1 col-end-8 row-start-4 row-end-12",
    },
    {
      name: "SCIENCE",
      classes: "col-start-8 col-end-12 row-start-4 row-end-5",
    },
    { name: "SPORTS", classes: "col-start-8 col-end-12 row-start-5 row-end-6" },
    {
      name: "HEALTH",
      classes: "col-start-8 col-end-12 row-start-6 row-end-12",
    },
  ];
  return (
    <div className="grid grid-cols-11 grid-rows-11 gap-2 w-full max-w-3xl mx-auto py-4">
      {categories.map((cat) => (
        <Link
          key={cat.name}
          to={`${cat.name}`}
          className={`flex items-center justify-center  text-xs bg-indigo-700 text-white py-1 sm:py-3 sm:text-sm lg:text-xl lg:py-5 font-semibold rounded-lg hover:bg-blue-500 transition hover:cursor-pointer ${cat.classes}`}
        >
          <button key={cat.name}>{cat.name}</button>
        </Link>
      ))}
    </div>
  );
}
