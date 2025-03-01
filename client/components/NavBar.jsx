import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  function signInHandleClick() {
    console.log("button clicked");
    fetch("http://localhost:8080/login")
      // .then((data) => data.json())
      .then((response) => (window.location.href = response.url));
  }
  return (
    <>
      <nav className="px-20 bg-gradient-to-r from-black  via-gray-900 to-gray-800">
        <div className="w-full grid grid-cols-3 items-center justify-between mx-auto p-2 ">
          {/* LOGO  */}
          <Link to="/" className="col-span-1">
            <img src={logo} className="h-14" alt="Modify Logo" />
          </Link>

          {/* SEARCH  */}
          <div className="col-span-1">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500  hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            <div className="relative hidden md:block ">
              {/* icon search */}
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-500 ">
                <svg
                  className="w-4 h-4 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>

              {/* search text  */}
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm rounded-lg bg-black focus:ring-gray-500 focus:border-gray-500
                focus:text-white"
                placeholder="Search..."
              />

              {/* <form class="max-w-sm mx-auto">
                <label
                  for="mood"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mood for tunes?
                </label>
                <select
                  id="mood"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected> Mood for tunes?</option>
                  <option value="chill">Chill</option>
                  <option value="upbeat">Upbeat</option>
                  <option value="motivated">Motivated</option>
                  <option value="moodbooster">Mood Booster</option>
                  <option value="feelingblue">Feeling blue</option>
                  <option value="anger">Anger</option>

                </select>
              </form> */}
            </div>

            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* OPTIONS  */}
          <div
            className="items-center justify-end hidden w-full md:flex md:w-auto md:order-1  col-span-1 "
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500    "
                placeholder="Search..."
              />
            </div>

            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 rounded md:bg-transparent md:text-gray-300 hover:text-purple-300 md:p-0 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="block py-2 px-3 rounded  md:hover:bg-transparent md:text-gray-300 md:hover:text-purple-300 md:p-0    "
                >
                  Profile
                </Link>
              </li>
              <li>
                <button
                  className="block py-2 px-3 rounded  md:hover:bg-transparent md:text-gray-300 md:hover:text-purple-300 md:p-0    "
                  onClick={signInHandleClick}
                >
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
