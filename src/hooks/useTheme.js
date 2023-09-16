import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("");
  // Check local Storage for theme, Check prefered theme is there is no theme in local storage
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        !window.matchMedia("prefers-color-scheme: dark").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);
  // custom function to store theme in localstorage before setting state
  const toggleTheme = () => {
    if (theme === "dark") {
      localStorage.theme = "light";
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  };
  // return theme state and custom function
  return [theme, toggleTheme];
};

export default useTheme;
