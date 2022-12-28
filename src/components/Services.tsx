import React from "react";
import responsiveImg from "../assets/images/responsive.jpg";
import dynamicImg from "../assets/images/dynamic.jpg";
import cleanImg from "../assets/images/clean.jpg";

function Services() {
  return (
    <div
      id="services"
      className="snap-start flex flex-col items-center justify-center text-center h-screen min-h-screen xs:h-full"
    >
      <h1 className="text-4xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 dark:text-slate-50 mb-10 xs:mt-20 xs:my-4">
        SERVICES
      </h1>

      <div className="flex flex-row w-3/5 text-center xs:w-5/6 xs:flex-col dark:text-slate-50">
        <div className="flex-1 mr-5 xs:pb-2">
          <img src={responsiveImg} className="mb-2" />
          <h3 className="text-xl font-bold xs:text-sm">RESPONSIVE</h3>
          <span className="text-sm px-4 xs:text-xs">
            I can develop a system/website that can work on any device,
            regarding the size.
          </span>
        </div>
        <div className="flex-1 mr-5 xs:pb-2">
          <img src={dynamicImg} className="mb-2" />
          <h3 className="text-xl font-bold xs:text-sm">DYNAMIC</h3>
          <span className="text-sm px-4 xs:text-xs">
            I can develop a system/website that can be fully controlled by it's
            user.
          </span>
        </div>
        <div className="flex-1 mr-5 xs:pb-2">
          <img src={cleanImg} className="mb-2" />
          <h3 className="text-xl font-bold xs:text-sm">CLEAN</h3>
          <span className="text-sm px-4 xs:text-xs">
            I can develop a system/website that can be easily understood by
            other programmers as well.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Services;
