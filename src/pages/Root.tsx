import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

export default function RootPage() {
  return (
    <>
      <MainNavigation />
      <main className="px-4 sm:px-8 mb-5 pb-5 ">
        <Outlet />
      </main>
    </>
  );
}
