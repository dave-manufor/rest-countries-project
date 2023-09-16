import { useContext } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import DataConxtext from "../context/context";
const Header = () => {
  const { theme, toggleTheme } = useContext(DataConxtext);
  return (
    <header className="flex w-[100%] justify-center items-center bg-white shadow-md px-16 py-4 sm:px-0 dark:bg-dark-blue-100">
      <div className="container flex-row justify-between items-center">
        <h1 className="text-dark-blue-300 dark:text-white text-xl font-extrabold">
          Where in the world?
        </h1>
        <span
          onClick={() => toggleTheme()}
          className="flex items-center justify-start gap-2 text-dark-blue-300 dark:text-white font-bold cursor-pointer"
        >
          <>
            {theme === "dark" ? (
              <>
                <FaRegMoon /> Dark Mode{" "}
              </>
            ) : (
              <>
                <FaRegSun /> Light Mode
              </>
            )}
          </>
        </span>
      </div>
    </header>
  );
};

export default Header;
