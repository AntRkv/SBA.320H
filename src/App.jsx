import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import {
  fetchWeatherData,
  fetchForecastData,
  fetchCityPhoto,
} from "./components/utils/api";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [backgroundPhoto, setBackgroundPhoto] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setError(null);

    try {
      const weather = await fetchWeatherData(city);
      const forecastData = await fetchForecastData(city);
      const photo = await fetchCityPhoto(city);
      setBackgroundPhoto(photo);

      setCurrentWeather({
        city: weather.name,
        temp: weather.main.temp,
        condition: weather.weather[0].description,
        humidity: weather.main.humidity,
      });

      setForecast(
        forecastData.map((day) => ({
          date: new Date(day.dt * 1000).toLocaleDateString(),
          temp: day.main.temp,
          condition: day.weather[0].description,
        }))
      );
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch weather data.");
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundPhoto})`,
      }}
    >
      <div className="background-overlay"></div>
      <div className="content">
        <h1>Weather Dashboard</h1>
        <SearchBar onSearch={handleSearch} />
        {error && <p className="error-message">{error}</p>}
        {currentWeather && <CurrentWeather weather={currentWeather} />}
        {forecast.length > 0 && <Forecast forecast={forecast} />}
      </div>
    </div>
  );
};

export default App;
