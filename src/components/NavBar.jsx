import { LogIn } from "lucide-react";
import React, { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  window.onscroll = () => {
    setAtTop(window.pageYOffset > 10 ? false : true);
  };

  return (
    <div className={`bg-grayDark ${!atTop ? "bg-black shadow-lg" : ""}`}>
      <div className="w-full text-gray-700 h-16 fixed top-0 animated z-40">
        <div className="flex flex-col text-white w-full px-2 mx-auto md:items-center bg-slate-700 md:justify-around md:flex-row">
          <div className="p-4 flex flex-row items-center justify-between">
            <a
              href="#"
              className="tracking-widest rounded-lg focus:outline-none focus:shadow-outline"
            >
              <h1 className="font-semibold text-xl ">CONNECTIFY</h1>
            </a>
            <button
              className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
              onClick={() => setOpen(!open)}
            >
              <span className="text-lg text-primary">
                <i className="fas fa-bell"></i>
              </span>
            </button>
          </div>
          <nav
            className={`flex-col flex-grow pb-4 ${
              open ? "flex" : "hidden"
            } bg-white shadow-lg rounded-b`}
          >
            <h3>I am Nav LInks</h3>
          </nav>
          <nav className="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
            <ul className="flex justify-center align-middle gap-4 mr-20 ">
              <li className="hover:cursor-pointer hover:underline text-lg font-medium font-serif">
                Home
              </li>
              <li className="hover:cursor-pointer hover:underline text-lg font-medium font-serif">
                About
              </li>
              <li className="hover:cursor-pointer hover:underline text-lg font-medium font-serif">
                Notifications
              </li>
              <li className="hover:cursor-pointer hover:underline text-lg font-medium font-serif">
                <button className="rounded-sm text-white bg-blue-600">
                  Login
                </button>
                <button className="rounded-sm text-white bg-green-500">
                  SignUp
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
