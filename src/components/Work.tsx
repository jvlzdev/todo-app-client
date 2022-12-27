import React from "react";

function Work() {
  return (
    <div
      id="work"
      className="snap-start flex flex-col items-center justify-center text-center h-screen min-h-screen xs:h-full"
    >
      <h1 className="text-4xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 dark:text-slate-50 mb-10 xs:my-4">
        WORK EXPERIENCE
      </h1>

      <div className="flex flex-row w-3/6 text-left xs:w-5/6 xs:flex-col">
        <div className="flex-1">
          <ol className="relative border-l border-gray-300 dark:border-gray-700">
            <li className="mb-2 ml-4">
              <div className="absolute w-3 h-3 bg-[#663399] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                October 2022 - Present
              </time>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                Atos Information Technology, Inc.
              </h3>
              <p className="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Senior Developer - Fulltime
              </p>
            </li>
            <li className="mb-2 ml-4">
              <div className="absolute w-3 h-3 bg-[#663399] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                September 2022 - Present
              </time>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                Pixelsoft Tech
              </h3>
              <p className="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Senior React Developer - Freelance
              </p>
            </li>
            <li className="mb-2 ml-4">
              <div className="absolute w-3 h-3 bg-[#663399] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                July 2020 - October 2022
              </time>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                Accenture Inc.
              </h3>
              <p className="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Senior Application Developer - Fulltime
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-[#663399] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                June 2021 - August 2021
              </time>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                SBHE PTE LTD
              </h3>
              <p className="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Web Developer - Freelance
              </p>
            </li>
          </ol>
        </div>
        <div className="flex-1">
          <ol className="relative border-l border-gray-300 dark:border-gray-700">
            <li className="mb-2 ml-4">
              <div className="absolute w-3 h-3 bg-[#663399] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                May 2021 - July 2021
              </time>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                Factor Research Limited
              </h3>
              <p className="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Web Developer - Freelance
              </p>
            </li>
            <li className="mb-2 ml-4">
              <div className="absolute w-3 h-3 bg-[#663399] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                May 2020 - July 2020
              </time>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                Achieve Without Borders
              </h3>
              <p className="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Javascript Developer - Freelance
              </p>
            </li>
            <li className="mb-2 ml-4">
              <div className="absolute w-3 h-3 bg-[#663399] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                September 2019 - March 2020
              </time>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                UnionBank of the Philippines
              </h3>
              <p className="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Web Developer - Fulltime
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-[#663399] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                June 2018 - April 2019
              </time>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                Personiv Philippines
              </h3>
              <p className="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Web Designer/Graphic Designer - Fulltime
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Work;
