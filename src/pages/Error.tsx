import { Link } from "react-router";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error: unknown = useRouteError();

  let title = "Error occured";
  let message = "Something went wrong";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = "Looks like you are lost!:(";
      message = "Could not find page you are looking for";
    }
  } else if (error instanceof Error) {
    console.log(error);
  }

  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center px-2">
      <h1 className="mb-2">{title}</h1>
      <p className="mb-5">{message}</p>
      <Link to={"/"}><button className="bg-indigo-700 py-2 px-7 rounded-xl hover:cursor-pointer hover:bg-indigo-500">Go back to main page</button></Link>
    </main>
  );
}
