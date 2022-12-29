import React from "react";
import Footer from "./Footer";
import {
  FaPhoneAlt,
  FaGooglePlusG,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

function Contact() {
  return (
    <div
      id="contact"
      className="snap-start flex flex-col items-center justify-between text-center h-screen min-h-screen"
    >
      <div className="flex flex-col w-full max-h-screen h-screen justify-center items-center">
        <h1 className="text-4xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 dark:text-slate-50 xs:my-4">
          CONTACT ME
        </h1>
        <h1 className="text-2xl xs:text-lg sm:text-xl md:text-2xl font-bold text-neutral-800 dark:text-slate-50 mb-10 xs:my-4">
          THROUGH
        </h1>
        <div className="flex gap-x-4 justify-center items-center text-neutral-800 w-3/6 text-center xs:w-5/6">
          <a href="tel:+639154168185">
            <FaPhoneAlt className="w-16 h-16 p-2 dark:text-slate-50	border-gray-300 border hover:bg-[#663399] hover:text-white" />
          </a>
          <a href="mailto:pinedajulius023@gmail.com">
            <FaGooglePlusG className="w-16 h-16 p-2 dark:text-slate-50	border-gray-300 border hover:bg-[#663399] hover:text-white" />
          </a>
          <a href="https://www.linkedin.com/in/julius-monson.pineda-704702163">
            <FaLinkedinIn className="w-16 h-16 p-2 dark:text-slate-50	border-gray-300 border hover:bg-[#663399] hover:text-white" />
          </a>
          <a href="https://www.facebook.com/jlspnd">
            <FaFacebookF className="w-16 h-16 p-2 dark:text-slate-50	border-gray-300 border hover:bg-[#663399] hover:text-white" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
