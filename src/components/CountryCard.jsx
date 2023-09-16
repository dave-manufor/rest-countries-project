import { useNavigate } from "react-router-dom";
import useFormattedNumber from "../hooks/useFormattedNumber";
import { memo } from "react";

const CountryCard = memo(
  ({ flagUrl, name, population, region, capital, cca3 }) => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate(`/${cca3}`);
    };
    return (
      <div
        onClick={() => handleClick()}
        className="flex flex-col bg-grey-light dark:bg-dark-blue-100 drop-shadow-md rounded-lg cursor-pointer group overflow-hidden"
      >
        <div className="h-[160px] overflow-hidden flex justify-center items-center">
          <img
            src={flagUrl}
            alt={`${name} flag`}
            className="min-h-full min-w-full flex-shrink-0 object-cover group-hover:scale-105 transition-transform ease-in-out duration-500"
          />
        </div>
        <div className="flex flex-col px-8 py-10">
          <h3 className="text-dark-blue-300 dark:text-white text-xl font-extrabold mb-4">
            {name}
          </h3>
          <p className="text-dark-blue-300 dark:text-white text-base mb-1">
            <span className="font-bold">Population: </span>
            <span className="dark:text-grey-light">
              {useFormattedNumber(population)}
            </span>
          </p>
          <p className="text-dark-blue-300 dark:text-white text-base mb-1">
            <span className="font-bold">Region: </span>
            <span className="dark:text-grey-light">{region}</span>
          </p>
          <p className="text-dark-blue-300 dark:text-white text-base">
            <span className="font-bold">Capital: </span>
            <span className="dark:text-grey-light">{capital}</span>
          </p>
        </div>
      </div>
    );
  }
);
export default CountryCard;
