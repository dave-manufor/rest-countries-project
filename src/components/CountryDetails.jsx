import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataConxtext from "../context/context";
import { FaArrowLeft } from "react-icons/fa";
import { ReactSVG } from "react-svg";
import LoadingLight from "../images/Rolling-1s-200px.svg";
import LoadingDark from "../images/Rolling-1s-200px-white.svg";
import useFormattedNumber from "../hooks/useFormattedNumber";
import BorderCountryLink from "./BorderCountryLink";

const CountryDetails = () => {
  const { id } = useParams();
  const { countries, isLoading, theme } = useContext(DataConxtext);
  const navigate = useNavigate();
  const country = countries.find((country) => country.cca3 === id);
  const formattedPopulation = useFormattedNumber(country?.population);
  const handleBack = () => {
    navigate("/");
  };

  return (
    <main className="container py-10 flex-col flex-1">
      <button
        onClick={() => handleBack()}
        className="py-3 px-8 flex justify-center items-center gap-2 text-base font-bold bg-grey-light dark:bg-dark-blue-100 dark:text-white drop-shadow-md rounded-lg mr-auto"
      >
        <FaArrowLeft /> Back
      </button>
      {isLoading && (
        <div className="flex justify-center items-center w-[100%] flex-1 ">
          <ReactSVG src={theme === "dark" ? LoadingDark : LoadingLight} />
        </div>
      )}
      {!isLoading && country && (
        <div className="flex sm:flex-col sm:mt-12 w-full justify-around items-center flex-1 gap-24 sm:gap-12">
          <div className="flex justify-center items-center max-w-[400px] drop-shadow-md">
            <img src={country.flags.svg} alt={`${country.name.common} flag`} />
          </div>
          <div>
            <h1 className="text-3xl text-dark-blue-300 dark:text-white font-extrabold mb-10">
              {country.name.common}
            </h1>
            <div className="flex justify-between items-start flex-1 gap-20 sm:flex-col sm:gap-10 ">
              <div>
                <p className="text-lg text-dark-blue-300 dark:text-white mb-4 flex gap-2">
                  <span className="font-bold">Native Name: </span>
                  {Object.values(country.name.nativeName)[0].official}
                </p>
                <p className="text-lg text-dark-blue-300 dark:text-white mb-4 flex gap-2">
                  <span className="font-bold">Population: </span>
                  {formattedPopulation}
                </p>
                <p className="text-lg text-dark-blue-300 dark:text-white mb-4 flex gap-2">
                  <span className="font-bold">Region: </span>
                  {country.region}
                </p>
                <p className="text-lg text-dark-blue-300 dark:text-white mb-4 flex gap-2">
                  <span className="font-bold">Sub Region: </span>
                  {country.subregion ? country.subregion : "-"}
                </p>
                <p className="text-lg text-dark-blue-300 dark:text-white mb-4 flex gap-2">
                  <span className="font-bold">Capital: </span>
                  {country.capital ? country.capital : "-"}
                </p>
              </div>
              <div>
                <p className="text-lg text-dark-blue-300 dark:text-white mb-4 flex gap-2">
                  <span className="font-bold">Top Level Domain: </span>
                  {country.tld}
                </p>
                <p className="text-lg text-dark-blue-300 dark:text-white mb-4 flex gap-2">
                  <span className="font-bold">Currencies: </span>
                  {Object.values(country.currencies)
                    .map((currencies) => currencies.name)
                    .join(", ")}
                </p>
                <p className="text-lg text-dark-blue-300 dark:text-white mb-4 flex gap-2">
                  <span className="font-bold">Languages: </span>
                  {Object.values(country.languages).join(", ")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 mt-16 sm:flex-col sm:items-start sm:mt-8">
              <span className="text-lg text-dark-blue-300 dark:text-white font-bold">
                Border Countries:
              </span>
              <div className="flex gap-4 flex-wrap">
                {country?.borders?.map(
                  (border) =>
                    <BorderCountryLink cca3={border} key={border} /> || "-"
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default CountryDetails;
