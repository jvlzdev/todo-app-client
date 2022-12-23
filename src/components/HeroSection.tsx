import React from "react";
import Typed from "react-typed";

function Intro() {
  return (
    <div
      id="home"
      className="snap-start flex flex-col items-center justify-center text-center h-screen min-h-screen"
    >
      <h1 className="text-8xl xs:text-6xl sm:text-7xl md:text-8xl font-bold text-neutral-900 dark:text-slate-50 mb-5">
        Hello,
      </h1>
      <h1 className="text-6xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 dark:text-slate-50 mb-5">
        I'm{" "}
        <span className="text-[#663399] dark:text-[#663399]">
          Julius Pineda.
        </span>
      </h1>
      <h1 className="text-lg md:text-lg sm:text-lg text-neutral-900 dark:text-slate-50">
        I developed
        <Typed
          className="text-[#663399] font-bold dark:text-[#663399]"
          strings={[" systems.", " websites."]}
          typeSpeed={120}
          backSpeed={110}
          loop
        />
      </h1>
    </div>
  );
}

export default Intro;
