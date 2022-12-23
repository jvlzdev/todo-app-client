<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import imgFirstURL from "../assets/images/c-manulife.png";
import imgSecondURL from "../assets/images/c-rakuten.png";
import imgThirdURL from "../assets/images/c-pixelsoft.png";
import imgFourthURL from "../assets/images/c-factor-research.png";
import imgFifthURL from "../assets/images/c-sbhe.png";
import imgSixthURL from "../assets/images/c-intellicare.png";
import imgSeventhURL from "../assets/images/c-unionbank.png";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import docPDF from "../assets/documents/julius-pineda.pdf";
>>>>>>> 58344ff ([initial-finish] added portfolio and contact)
=======
>>>>>>> 9ae2edc (fixed target urls)
import {
  MdTabletMac,
  MdPhoneIphone,
  MdOutlineDesktopMac,
} from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

const portfolioData = [
  {
    id: "manulife",
    name: "Manulife",
    year: "2021",
    content: (
      <div>
        Manulife is a multinational insurance company. I contributed on the
        front-end/backend development of this website.
      </div>
    ),
    url: imgFirstURL,
<<<<<<< HEAD
<<<<<<< HEAD
    href: "https://www.manulife.com.ph",
=======
>>>>>>> 58344ff ([initial-finish] added portfolio and contact)
=======
    href: "https://www.manulife.com.ph",
>>>>>>> 9ae2edc (fixed target urls)
  },
  {
    id: "rakuten",
    name: "Rakuten Travel",
    year: "2020",
    content: (
      <div>
        Rakuten Travel is a big hotel booking website. I contributed mainly on
        the front-end development of this website.
      </div>
    ),
    url: imgSecondURL,
<<<<<<< HEAD
<<<<<<< HEAD
    href: "https://travel.rakuten.com",
=======
>>>>>>> 58344ff ([initial-finish] added portfolio and contact)
=======
    href: "https://travel.rakuten.com",
>>>>>>> 9ae2edc (fixed target urls)
  },
  {
    id: "watersport",
    name: "Watersport",
    year: "2022",
    content: (
      <div>
        Watersport is a booking website in Europe. I contributed mainly on the
        front-end development of this website.
      </div>
    ),
    url: imgThirdURL,
<<<<<<< HEAD
<<<<<<< HEAD
    href: "https://w-sports.click",
=======
>>>>>>> 58344ff ([initial-finish] added portfolio and contact)
=======
    href: "https://w-sports.click",
>>>>>>> 9ae2edc (fixed target urls)
  },
  {
    id: "factor-research",
    name: "Factor Research Limited",
    year: "2021",
    content: (
      <div>
        Finominal is an investment company website which focused on Analysis. I
        contributed on the frontend/backend development of this website.
      </div>
    ),
    url: imgFourthURL,
<<<<<<< HEAD
<<<<<<< HEAD
    href: "https://finominal.com",
=======
>>>>>>> 58344ff ([initial-finish] added portfolio and contact)
=======
    href: "https://finominal.com",
>>>>>>> 9ae2edc (fixed target urls)
  },
  {
    id: "sbhe",
    name: "SBHE PTE LTD",
    year: "2021",
    content: (
      <div>
        SBHE PTE LTD is construction company which is focused on design,
        maintenance, diagnostics, and repair. I contributed mainly on the
        front-end development of this website.
      </div>
    ),
    url: imgFifthURL,
<<<<<<< HEAD
<<<<<<< HEAD
    href: "https://sbhe-ume.com.sg",
=======
>>>>>>> 58344ff ([initial-finish] added portfolio and contact)
=======
    href: "https://sbhe-ume.com.sg",
>>>>>>> 9ae2edc (fixed target urls)
  },
  {
    id: "intellicare",
    name: "Intellicare",
    year: "2020",
    content: (
      <div>
        Intellicare is healthcare company which mainly focused on your health,
        tracking, and etc. I contributed on the frontend/backend development of
        this website.
      </div>
    ),
    url: imgSixthURL,
<<<<<<< HEAD
<<<<<<< HEAD
    href: "https://www.intellicare.net.ph",
=======
>>>>>>> 58344ff ([initial-finish] added portfolio and contact)
=======
    href: "https://www.intellicare.net.ph",
>>>>>>> 9ae2edc (fixed target urls)
  },
  {
    id: "unionbank",
    name: "Unionbank",
    year: "2019",
    content: (
      <div>
        Unionbank is a banking company which is mainly focused in digital
        banking. I contributed mainly on the front-end development of this
        website.
      </div>
    ),
    url: imgSeventhURL,
<<<<<<< HEAD
<<<<<<< HEAD
    href: "https://www.unionbankph.com",
=======
>>>>>>> 58344ff ([initial-finish] added portfolio and contact)
=======
    href: "https://www.unionbankph.com",
>>>>>>> 9ae2edc (fixed target urls)
  },
];

const Portfolio = () => {
  return (
<<<<<<< HEAD
    <>
      {portfolioData.map((data) => (
        <div
          id={data.id}
          className="snap-start xs:snap-normal flex flex-col items-center justify-center text-center h-screen min-h-screen xs:h-full xs:min-h-max
          "
        >
          {data.id === "manulife" && (
            <h1 className="text-4xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 dark:text-slate-50 mb-10 xs:mt-20 xs:my-4">
              PORTFOLIO
            </h1>
          )}
          <div className="flex flex-row w-3/6 items-center text-left xs:w-5/6 xs:flex-col-reverse text-neutral-800">
            <div className="flex-1 mr-5">
              <h3 className="text-xl font-bold xs:text-sm xs:mt-6 xs:text-xl dark:text-slate-50">
                {data.name}
              </h3>
              <div className="flex flex-row items-center justify-start w-full">
                <div className="rounded-sm px-2 py-0.5 mr-2 font-bold text-[0.5rem] bg-neutral-800 text-white dark:bg-white dark:text-neutral-800">
                  {data.year}
                </div>
                <div className="grid grid-cols-3 items-center justify-items-center dark:text-slate-50">
                  <MdOutlineDesktopMac className="w-[1.10rem] h-[1.10rem] mr-1" />
                  <MdTabletMac className="w-3.5	h-3.5" />
                  <MdPhoneIphone className="w-[0.95rem] h-[0.95rem]" />
                </div>
              </div>
              <div className="py-4 text-sm text-neutral-800 dark:text-slate-50">
                {data.content}
                <button className="flex flex-row items-center my-3 px-2.5 py-2 bg-[#663399] text-white hover:bg-purple-700 hover:underline">
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <a
                    className="ml-2 text-sm font-bold leading-6"
<<<<<<< HEAD
<<<<<<< HEAD
                    href={data.href}
=======
                    href={docPDF}
>>>>>>> 58344ff ([initial-finish] added portfolio and contact)
=======
                    href={data.href}
>>>>>>> 9ae2edc (fixed target urls)
                    target="_blank"
                  >
                    VISIT WEBSITE
                  </a>
                </button>
              </div>
            </div>
            <div className="flex-1">
              <img src={data.url} className="w-80 m-auto" alt="Manulife" />
            </div>
          </div>
        </div>
      ))}
    </>
=======
    <div
      id="portfolio"
      className="snap-start flex flex-col items-center justify-center text-center h-screen min-h-screen"
    >
      <h1 className="text-4xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 dark:text-slate-50 mb-5 xs:mt-20">
        PORTFOLIO
      </h1>
    </div>
>>>>>>> 5c32090 ([enhancement-v3] Added skills section, responsiveness and pdf viewer)
  );
};

export default Portfolio;
=======
import React from 'react'
=======
import React from "react";
>>>>>>> a0ee311 ([Second] Navbar, darkmode, fullpage scroll, and responsiveness)

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="snap-start flex flex-col items-center justify-center text-center h-screen min-h-screen"
    >
      <h1 className="text-4xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 dark:text-slate-50 mb-5">
        PORTFOLIO
      </h1>
    </div>
  );
}

<<<<<<< HEAD
export default Portfolio
>>>>>>> 348e8b5 ([Step-1] Initial Design and Setup)
=======
export default Portfolio;
>>>>>>> a0ee311 ([Second] Navbar, darkmode, fullpage scroll, and responsiveness)
