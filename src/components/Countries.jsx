import { useContext } from "react";
import CountryList from "./CountryList";
import Search from "./Search";
import DataConxtext from "../context/context";
import LoadingLight from "../images/Rolling-1s-200px.svg";
import LoadingDark from "../images/Rolling-1s-200px-white.svg";
import { ReactSVG } from "react-svg";

const Countries = () => {
  const { isLoading, theme } = useContext(DataConxtext);
  return (
    <main className="container py-10 flex-col flex-1">
      <Search />
      {isLoading && (
        <div className="flex justify-center items-center w-[100%] flex-1 ">
          <ReactSVG src={theme === "dark" ? LoadingDark : LoadingLight} />
        </div>
      )}
      {!isLoading && <CountryList />}
    </main>
  );
};

export default Countries;
