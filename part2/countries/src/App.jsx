import { useEffect, useState } from "react";
import axios from "axios";
import { FilterCountry } from "./Components/FilterCountry";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      axios
        .get(`https://restcountries.com/v3.1/name/${search}`)
        .then((response) => {
          setCountries(response.data);
        })
        .catch((error) => {
          console.error("Error fetching countries:", error);
          setCountries([]);
        });
    } else {
      setCountries([]);
    }
  }, [search]);

  const filterHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      find country{" "}
      <input
        type="text"
        value={search}
        onChange={filterHandler}
        placeholder="Search for a country"
      />
      <FilterCountry countries={countries} />
    </div>
  );
}

export default App;
