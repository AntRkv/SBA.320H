import React from "react";

const CurrentWeather = ({ weather }) => {
  return (
    <div>
      <h2>Weather in {weather.city}</h2>
      <p>Temperature: {weather.temp}°F</p>
      <p>Condition: {weather.condition}</p>
      <p>Humidity: {weather.humidity}%</p>
    </div>
  );
};

export default CurrentWeather;
