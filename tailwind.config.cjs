/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a0ee311 ([Second] Navbar, darkmode, fullpage scroll, and responsiveness)
    screens: {
      xs: { min: "0px", max: "639px" },
      sm: { min: "640px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
<<<<<<< HEAD
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
=======
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
>>>>>>> 348e8b5 ([Step-1] Initial Design and Setup)
=======
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
>>>>>>> a0ee311 ([Second] Navbar, darkmode, fullpage scroll, and responsiveness)
      },
      colors: {
        primary: "#ff4800",
      },
    },
  },
  plugins: [],
};
