import { useState, createContext, useEffect, useReducer } from "react";
import useTheme from "../hooks/useTheme";
import api from "../api/countries";

const DataConxtext = createContext({});

export const DataProvider = ({ children }) => {
  const [theme, toggleTheme] = useTheme();
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const filterReducer = (state, action) => {
    if (!action.type)
      throw new Error("Action type not specified for filter dispatch");
    switch (action.type) {
      case "ADD_FILTER":
        if (!state.includes(action.filter)) {
          return state.concat(action.filter);
        } else {
          return state;
        }
      case "REMOVE_FILTER":
        return state.filter((filter) => filter !== action.filter);
      default:
        throw new Error("Invalid action type for filter dispatch");
    }
  };
  const [filters, filtersDispatch] = useReducer(filterReducer, []);
  /**********************************************************************/

  /**********************************************************************/
  // INITIAL COUNTRY FETCH
  useEffect(() => {
    let isMounted = true;
    const abortController = new AbortController();

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await api.get(url, {
          signal: abortController.signal,
        });
        if (isMounted) {
          setCountries(response.data);
          setFilteredCountries(response.data);
          setError(null);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData("all");

    const cleanUp = () => {
      isMounted = false;
      abortController.abort();
    };

    return cleanUp;
  }, []);
  /**********************************************************************/

  /**********************************************************************/
  return (
    <DataConxtext.Provider
      value={{
        theme,
        toggleTheme,
        search,
        setSearch,
        filters,
        filtersDispatch,
        countries,
        filteredCountries,
        setFilteredCountries,
        error,
        setError,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </DataConxtext.Provider>
  );
};

export default DataConxtext;
