import Filter from "./Filter";
import SearchBar from "./SearchBar";

const Search = () => {
  return (
    <div className="flex sm:flex-col justify-between sm:justify-start items-center sm:items-start w-[100%]">
      <SearchBar />
      <Filter />
    </div>
  );
};
export default Search;
