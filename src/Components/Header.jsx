import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gray-100 px-4 py-5  md:px-24 lg:px-8">
      <div className="my-container relative mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          <BoltIcon className="lg:h-9 lg:w-9 md:h-7 md:w-7 h-6 w-6 text-blue-500" />
          <span className="ml-2 lg:text-3xl md:text-2xl text-xl font-bold tracking-wide text-gray-800">
            Next Page
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center text-lg font-bold hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              About us
            </NavLink>
          </li>
        </ul>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <BoltIcon className="h-6 w-6 text-blue-500" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Next Page
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="default font-bold">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/books"
                        className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Books
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
