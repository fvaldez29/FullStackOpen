import { useEffect, useState } from "react";
import axios from "axios";

export const CountryDetails = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const capital = country.capital[0];
  const lat = country.latlng[0];
  const lon = country.latlng[1];

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${weatherApiKey}`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error.response?.data || error.message);
      }
    };

    fetchWeather();
  }, [lat, lon, weatherApiKey]);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {capital}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.name.common} width="150" />

      {weather ? (
        <div>
          <h2>Weather in {capital}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Wind: {weather.wind.speed} m/s</p>
          <p>Weather: {weather.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};
