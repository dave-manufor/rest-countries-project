/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
    },
    colors: {
      "dark-blue": {
        50: "hsl(209, 23%, 40%)",
        100: "hsl(209, 23%, 22%)",
        200: "hsl(207, 26%, 17%)",
        300: "hsl(200, 15%, 8%)",
      },
      "grey-dark": "hsl(0, 0%, 52%)",
      grey: "hsl(0, 0%, 90%)",
      "grey-light": "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
