import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header className="border-b py-4 px-2 sm:py-10">
      <nav className="max-w-[1500px] lg:m-auto">
        <ul className="flex gap-1 justify-between text-center sm:justify-evenly">
          <li className="outline-0">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `outline-0 sm:text-3xl ${
                  isActive ? "text-stone-100 border-b" : "text-stone-400"
                }`
              }
              end
            >
              All News
            </NavLink>
          </li>
          <li className="outline-0">
            <NavLink
              to="/category"
              className={({ isActive }) =>
                `outline-0 sm:text-3xl ${
                  isActive ? "text-stone-100 border-b" : "text-stone-400"
                }`
              }
              end
            >
              News by category
            </NavLink>
          </li>
          <li className="outline-0">
            <NavLink
              to="/key"
              className={({ isActive }) =>
                `outline-0 sm:text-3xl ${
                  isActive ? "text-stone-100 border-b" : "text-stone-400"
                }`
              }
              end
            >
              News by Key
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
