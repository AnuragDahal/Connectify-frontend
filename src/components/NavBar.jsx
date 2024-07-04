import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";

const NavBar = () => {
  const [atTop, setAtTop] = useState(true);
  window.onscroll = () => {
    setAtTop(window.pageYOffset > 10 ? false : true);
  };
  return (
    <div className={`bg-grayDark ${!atTop ? "bg-black shadow-lg" : ""}`}>
      <div className="w-full text-gray-700 h-16 fixed top-0 animated z-40">
        <div className="flex flex-col text-white w-full px-4 sm:px-2 mx-auto md:items-center bg-slate-700 md:justify-around md:flex-row">
          <div className="p-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="tracking-widest rounded-lg focus:outline-none focus:shadow-outline"
            >
              <h1 className="font-semibold text-xl">CONNECTIFY</h1>
            </a>
            <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
              <span className="text-lg text-primary">
                <i className="fas fa-bell"></i>
              </span>
            </button>
          </div>
          <nav className="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
            <div className="relative w-full sm:w-auto">
              <input
                type="search"
                className="w-full sm:w-64 md:w-96 bg-gray-200 text-gray-700 border border-gray-200 rounded-3xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-4"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.905 14.32a8 8 0 1 1 1.414-1.414l5.337 5.337a1 1 0 0 1-1.414 1.414l-5.337-5.337zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
              </button>
            </div>
          </nav>
          <nav className="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
            <ul className="flex gap-3">
              <button className="rounded-sm hover:text-blue-400 text-white">
                <Link to="/login">Login</Link>
              </button>
              <button className="rounded-sm hover:text-blue-400 text-white">
                <Link to="/signup">SignUp</Link>
              </button>
              <button className="ml-10">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
