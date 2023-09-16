import { useContext, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import DataConxtext from "../context/context";
import Tags from "./Tags";
import Tag from "./Tag";
const Filter = () => {
  const { filters, filtersDispatch } = useContext(DataConxtext);
  const [dropped, setDropped] = useState(false);
  const addFilter = (region) => {
    filtersDispatch({ type: "ADD_FILTER", filter: region });
  };
  return (
    <div className="flex sm:flex-col-reverse gap-5 sm:gap-5 justify-end items-center sm:items-start sm:mt-5 sm:w-[100%]">
      <Tags>
        {filters.map((filter) => (
          <Tag key={filter} id={filter}>
            {filter}
          </Tag>
        ))}
      </Tags>
      <div
        onClick={() => setDropped(() => !dropped)}
        className="relative cursor-pointer w-56 sm:w-full"
      >
        <div className="flex items-center justify-between py-4 px-8 bg-white dark:bg-dark-blue-100 drop-shadow-md rounded-md text-dark-blue-300 dark:text-white font-semibold w-[100%]">
          Filter by Region
          <FaAngleUp className={`${dropped ? "rotate-180" : ""}`} />
        </div>
        <div
          onClick={(e) => addFilter(e.target.getAttribute("data-value"))}
          className={`flex flex-col w-[100%] absolute z-10 bg-white dark:bg-dark-blue-100 mt-3 justify-start shadow-md rounded-md ${
            dropped ? "" : "hidden"
          }`}
        >
          <span
            className="text-dark-blue-300 text-base font-medium hover:bg-grey py-3 px-6 dark:bg-dark-blue-100
dark:text-white dark:hover:bg-dark-blue-50"
            data-value="Africa"
          >
            Africa
          </span>
          <span
            className="text-dark-blue-300 text-base font-medium hover:bg-grey py-3 px-6 dark:bg-dark-blue-100
dark:text-white dark:hover:bg-dark-blue-50"
            data-value="America"
          >
            America
          </span>
          <span
            className="text-dark-blue-300 text-base font-medium hover:bg-grey py-3 px-6 dark:bg-dark-blue-100
dark:text-white dark:hover:bg-dark-blue-50"
            data-value="Asia"
          >
            Asia
          </span>
          <span
            className="text-dark-blue-300 text-base font-medium hover:bg-grey py-3 px-6 dark:bg-dark-blue-100
dark:text-white dark:hover:bg-dark-blue-50"
            data-value="Europe"
          >
            Europe
          </span>
          <span
            className="text-dark-blue-300 text-base font-medium hover:bg-grey py-3 px-6 dark:bg-dark-blue-100
dark:text-white dark:hover:bg-dark-blue-50"
            data-value="Oceania"
          >
            Oceania
          </span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
