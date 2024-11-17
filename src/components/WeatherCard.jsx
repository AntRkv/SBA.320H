import React from "react";

const WeatherCard = ({ day }) => (
  <div>
    <p>{day.date}</p>
    <p>Temp: {day.temp.toFixed(1)}°F</p>
    <p>{day.condition}</p>
  </div>
);

export default WeatherCard;
