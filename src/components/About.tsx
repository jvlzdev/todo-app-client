<<<<<<< HEAD
import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import imgURL from "../assets/images/jp.jpg";
import docPDF from "../assets/documents/julius-pineda.pdf";
=======
import React from 'react'
>>>>>>> a0ee311 ([Second] Navbar, darkmode, fullpage scroll, and responsiveness)

function About() {
  return (
    <div
      id="about"
<<<<<<< HEAD
      className="snap-start xs:snap-normal flex flex-col items-center justify-center text-center h-screen min-h-screen xs:h-full"
    >
      <h1 className="text-4xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 dark:text-slate-50 mb-10 xs:my-4">
        ABOUT ME
      </h1>

      <div className="flex flex-row w-3/6 text-left xs:w-5/6 xs:flex-col-reverse">
        <div className="flex-1 mr-5">
          <div className="flex flex-col text-3xl font-black text-neutral-800 xs:mt-5 dark:text-slate-50">
            <p>Software Engineer;</p>
            <p>Web Developer;</p>
          </div>
          <div className="flex flex-row">
            <div className="w-10 h-1 bg-[#663399] my-4 mr-2" />
          </div>
          <div className="text-base dark:text-slate-50">
            I am working as Senior Developer in{" "}
            <a
              href="https://atos.net/en"
              className="text-[#663399] font-bold hover:underline"
            >
              Atos Information Technology, Inc
            </a>
            . I have almost 5 years of experience especially in Web Development.
            I'm passionate about coding because this is my daily errands in
            life.
          </div>
          <div className="py-3">
            <button className="flex flex-row items-center px-2.5 py-2 bg-[#663399] text-white hover:bg-purple-700 hover:underline">
              <AiOutlineFilePdf className="w-5 h-5" />
              <a
                className="ml-2 text-sm font-bold leading-6"
                href={docPDF}
                target="_blank"
              >
                VIEW MY RESUME
              </a>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src={imgURL} className="w-80 m-auto" alt="JP" />
        </div>
      </div>
    </div>
  );
}

export default About;
=======
      className="snap-start flex flex-col items-center justify-center text-center h-screen min-h-screen"
    >
      <h1 className="text-4xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 dark:text-slate-50 mb-5">
        ABOUT
      </h1>
    </div>
  )
}

export default About
>>>>>>> a0ee311 ([Second] Navbar, darkmode, fullpage scroll, and responsiveness)
