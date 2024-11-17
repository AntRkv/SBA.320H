import React from "react";
import WeatherCard from "./WeatherCard";

const Forecast = ({ forecast }) => {
  return (
    <div>
      <h2>5-Day Forecast</h2>
      <div>
        {forecast.map((day, index) => (
          <WeatherCard key={index} day={day} />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
