import { useState, useEffect } from "react";
import axios from "axios";
import CountryList from "./components/CountryList";
import ErrorMessage from "./components/ErrorMessage";
import CountryData from "./components/CountryData";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const performSearch = (e) => {
    e.preventDefault();

    const filtered = countries.filter((country) => {
      if (country.name.common.toLowerCase().includes(search.toLowerCase())) {
        return country;
      }
    });
    setFilteredCountries(filtered);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const buttonFunction = (countryClick) => {
    const filtered = countries.filter((country) => {
      if (country.name.common.toLowerCase() === countryClick.toLowerCase()) {
        return country;
      }
    });
    setFilteredCountries(filtered);
  };

  return (
    <div className="App">
      <form onSubmit={performSearch}>
        <label htmlFor="countrySearch">Find Countries: </label>
        <input
          type="text"
          id="countrySearch"
          name="countrySearch"
          onChange={updateSearch}
        ></input>
      </form>
      <CountryList
        countries={filteredCountries}
        buttonAction={buttonFunction}
      />
      <ErrorMessage countries={filteredCountries} />
      <CountryData countries={filteredCountries} />
    </div>
  );
}

export default App;
