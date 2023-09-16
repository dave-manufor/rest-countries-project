import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import DataConxtext from "../context/context";

const SearchBar = () => {
  const { search, setSearch } = useContext(DataConxtext);
  return (
    <div className="flex items-center py-4 px-8 bg-white dark:bg-dark-blue-100 drop-shadow-md sm:w-full rounded-md">
      <FaSearch className="mr-6 dark:text-white" />
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 text-dark-blue-300 text-medium font-medium placeholder:text-grey-dark dark:bg-dark-blue-100 dark:text-white dark:placeholder:text-grey-light text-ellipsis"
      />
    </div>
  );
};

export default SearchBar;
