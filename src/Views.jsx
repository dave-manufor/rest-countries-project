import { Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";

const Views = () => {
  return (
    <Routes>
      <Route index element={<Countries />} />
      <Route path="/:id" element={<CountryDetails />} />
    </Routes>
  );
};

export default Views;
