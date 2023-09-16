import { useContext, useEffect } from "react";
import DataConxtext from "../context/context";
import CountryCard from "./CountryCard";

const CountryList = () => {
  const {
    filteredCountries,
    setFilteredCountries,
    search,
    filters,
    countries,
  } = useContext(DataConxtext);
  useEffect(() => {
    // Filter countries based on selected filters
    let tempCountries = [];
    if (filters.length === 0) {
      tempCountries = countries;
    } else {
      tempCountries = countries.filter((country) =>
        filters
          .map((filter) => filter.toLowerCase())
          .includes(country.region.toLowerCase())
      );
    }

    // Further filter countries based on search
    const updatedFilteredCountries = tempCountries.filter((country) =>
      [
        country.name.common,
        country.region,
        country.capital,
        country.cca2,
        country.cca3,
        ...country.altSpellings,
      ]
        .join("")
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    setFilteredCountries(updatedFilteredCountries);
  }, [search, filters, countries, setFilteredCountries]);
  return (
    <div className="w-full grid grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 sm:px-6 py-12 gap-10">
      {filteredCountries.length > 0 &&
        filteredCountries.map((country) => (
          <CountryCard
            key={country.name.common}
            flagUrl={country.flags.svg}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            cca3={country.cca3}
          />
        ))}
    </div>
  );
};

export default CountryList;
