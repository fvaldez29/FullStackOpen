import { useState } from "react";
import { CountryDetails } from "./CountryDetails";

export const FilterCountry = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  if (selectedCountry) {
    return (
      <div>
        <CountryDetails country={selectedCountry} />
        <button onClick={() => setSelectedCountry(null)}>Back</button>
      </div>
    );
  }

  return (
    <div>
      {countries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : countries.length > 1 ? (
        countries.map((country) => (
          <div key={country.cca3}>
            {country.name.common}
            <button onClick={() => setSelectedCountry(country)}>Show</button>
          </div>
        ))
      ) : countries.length === 1 ? (
        <CountryDetails country={countries[0]} />
      ) : (
        <p>No matches found</p>
      )}
    </div>
  );
};
