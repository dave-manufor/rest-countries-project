import { useContext } from "react";
import DataConxtext from "../context/context";
import { useNavigate } from "react-router-dom";

const BorderCountryLink = ({ cca3 }) => {
  const { countries } = useContext(DataConxtext);
  const country = countries.find((country) => country.cca3 === cca3);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${cca3}`);
  };
  return (
    <button
      onClick={() => handleClick()}
      className="flex justify-center items-center py-2 px-8 text-base font-normal bg-grey-light dark:bg-dark-blue-100 dark:text-white drop-shadow-md"
    >
      {country.name.common}
    </button>
  );
};

export default BorderCountryLink;
