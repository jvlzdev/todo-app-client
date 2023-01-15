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

const App = () => {
  const [theme, setTheme] = useState<null | string>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  return (
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
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
};

>>>>>>> 348e8b5 ([Step-1] Initial Design and Setup)
export default App;
