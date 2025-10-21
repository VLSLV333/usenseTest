import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http.js";

import RootPage from "./pages/Root";
import ErrorPage from "./pages/Error";
import AllNews from "./pages/AllNews";
import SelectCategory from "./pages/SelectCategory";
import NewsByCategory from "./pages/NewsByCategory";
import NewsByKey from "./pages/NewsByKey";
import ArticleDetailed from "./pages/ArticleDetailed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AllNews />,
      },
      {
        path: ":id",
        element: <ArticleDetailed />,
      },
      {
        path: "category",
        element: <SelectCategory />,
      },
      {
        path: "category/:c",
        element: <NewsByCategory />,
      },
      {
        path: "category/:c/:id",
        element: <ArticleDetailed />,
      },
      {
        path: "key",
        element: <NewsByKey />,
      },
      {
        path: "key/:id",
        element: <ArticleDetailed />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
