import React from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";

function NavHeader() {
  const scrollPosition = useScrollPosition();

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <nav
      className={classNames(
        scrollPosition > 0 ? "bg-white transition-colors" : "shadow-none",
        "px-2 sm:px-4 py-2.5 dark:bg-transparent fixed w-full z-20 top-0 left-0 border-gray-200 dark:border-gray-600"
      )}
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        {/* <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a> */}
        <div
          className="items-center justify-between hidden w-full md:flex lg:flex lg:w-auto lg:order-1 md:w-auto md:order-1 xl:flex 2xl:order-1 2xl:flex 2xl:w-auto"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row lg:flex-row xl:flex-row 2xl:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium 2xl:border-0 2xl:space-x-8 2xl:mt-0 2xl:text-sm 2xl:font-medium lg:border-0">
            <li>
              <a
                href="#home"
                className="font-bold block py-2 pl-3 pr-4 text-[#663399] rounded md:bg-transparent md:text-[#663399] md:p-0 lg:hover:text-[#663399] 2xl:hover:text-[#663399] dark:text-slate-50"
                aria-current="page"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-bold block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#663399] md:p-0 md:dark:hover:text-white dark:text-slate-50 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent lg:hover:text-[#663399] 2xl:hover:text-[#663399] dark:border-gray-700"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="font-bold block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#663399] md:p-0 md:dark:hover:text-white dark:text-slate-50 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent lg:hover:text-[#663399] 2xl:hover:text-[#663399] dark:border-gray-700"
              >
                SKILLS
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="font-bold block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#663399] md:p-0 md:dark:hover:text-white dark:text-slate-50 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent lg:hover:text-[#663399] 2xl:hover:text-[#663399] dark:border-gray-700"
              >
                PORTFOLIO
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-bold block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#663399] md:p-0 md:dark:hover:text-white dark:text-slate-50 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent lg:hover:text-[#663399] 2xl:hover:text-[#663399] dark:border-gray-700"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavHeader;
