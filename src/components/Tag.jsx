import { useContext } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import DataConxtext from "../context/context";

const Tag = ({ children, id }) => {
  const { filtersDispatch } = useContext(DataConxtext);
  const removeFilter = () => {
    filtersDispatch({ type: "REMOVE_FILTER", filter: id });
  };
  return (
    <span className="flex gap-1 justify-center items-center py-1 px-3 bg-dark-blue-100 text-base text-white rounded-full">
      {children}
      <IoIosCloseCircle
        onClick={() => removeFilter()}
        className="cursor-pointer"
      />
    </span>
  );
};

export default Tag;
