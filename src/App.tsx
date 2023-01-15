<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import Footer from "./components/Footer";
import Todo from "./components/Todo";
import { getAllTodoAction } from "./features/todo/todoService";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllTodoAction());
  }, []);
  return (
<<<<<<< HEAD
    <div className={styles.container}>
      <Todo />
      <Footer />
    </div>
=======
    <>
      <button
        type="button"
        onClick={handleSwitchTheme}
        className="fixed p-2 xs:p-1 z-50 xs:right-8 sm:right-8 sm:p-1 right-20 top-4 bg-neutral-900 text-slate-50 text-lg rounded-md dark:bg-slate-50 dark:text-neutral-900 xl:top-9 2xl:top-6 lg:top-5"
      >
        {theme === "dark" ? sun : moon}
      </button>
      <div className="font-poppins basis-1/2 snap-y-mandatory xs:snap-none max-h-screen overflow-y-scroll w-full scroll-smooth bg-slate-50 dark:bg-stone-900 transition duration-150">
        {/* <NavHeader /> */}
        <HeroSection />
        <About />
        <Services />
        <Work />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </>
>>>>>>> 5c32090 ([enhancement-v3] Added skills section, responsiveness and pdf viewer)
  );
};

const styles = {
  container:
    "font-poppins min-h-screen w-full bg-slate-50 flex flex-col justify-center items-center gap-y-5",
};

=======
=======
import { useEffect, useState } from "react";
import About from "./components/About";
>>>>>>> a0ee311 ([Second] Navbar, darkmode, fullpage scroll, and responsiveness)
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavHeader from "./components/NavHeader";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
=======
import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import Footer from "./components/Footer";
import Todo from "./components/Todo";
import { getAllTodoAction } from "./features/todo/todoService";
>>>>>>> 5b35ec2 ([DONE] Todo App)

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllTodoAction());
  }, []);
  return (
<<<<<<< HEAD
    <>
      <button
        type="button"
        onClick={handleSwitchTheme}
        className="fixed p-2 xs:p-1 z-50 xs:right-8 sm:right-8 sm:p-1 right-20 top-4 bg-neutral-900 text-slate-50 text-lg rounded-md dark:bg-slate-50 dark:text-neutral-900 xl:top-9 2xl:top-6 lg:top-5"
      >
        {theme === "dark" ? sun : moon}
      </button>
      <div className="font-poppins basis-1/2 snap-y-mandatory max-h-screen overflow-y-scroll w-full scroll-smooth bg-slate-50 dark:bg-stone-900 transition duration-150">
        <NavHeader />
        <HeroSection />
        <About />
        <Work />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
};

>>>>>>> 348e8b5 ([Step-1] Initial Design and Setup)
=======
    <div className={styles.container}>
      <Todo />
      <Footer />
    </div>
  );
};

const styles = {
  container:
    "font-poppins min-h-screen w-full bg-slate-50 flex flex-col justify-center items-center gap-y-5",
};

>>>>>>> 5b35ec2 ([DONE] Todo App)
export default App;
