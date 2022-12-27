import React from "react";
import imgURL from "../assets/images/jp.jpg";

function About() {
  return (
    <div
      id="about"
      className="snap-start flex flex-col items-center justify-center text-center h-screen min-h-screen xs:h-full"
    >
      <h1 className="text-4xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 dark:text-slate-50 mb-10 xs:my-4">
        ABOUT ME
      </h1>

      <div className="flex flex-row w-3/6 text-left xs:w-5/6 xs:flex-col-reverse">
        <div className="flex-1 mr-5">
          <div className="flex flex-col text-3xl font-black text-neutral-800">
            <p>System Engineer;</p>
            <p>Web Developer;</p>
            <p>Code Lover;</p>
          </div>
          <div className="flex flex-row">
            <div className="w-1.5 h-6 bg-[#663399] my-4 mr-2" />
            <div className="w-1.5 h-6 bg-[#663399] my-4 mr-2" />
            <div className="w-1.5 h-6 bg-[#663399] my-4 mr-2" />
            <div className="w-1.5 h-6 bg-[#663399] my-4 mr-2" />
            <div className="w-1.5 h-6 bg-[#663399] my-4 mr-2" />
          </div>
          <div className="text-lg">
            I am a System Developer in XAM Consulting. I also trained in Japan
            as a System Engineer for 2 years. I have a serious passion for
            coding especially in web development.
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
