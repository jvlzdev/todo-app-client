import React from "react";
import Footer from "./Footer";

function Contact() {
  return (
    <div
      id="contact"
      className="snap-start flex flex-col items-center justify-between text-center h-screen min-h-screen"
    >
      <div className="w-full max-h-screen h-screen justify-center flex items-center">
        <h1 className="text-4xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 dark:text-slate-50 mb-5">
          CONTACT
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
