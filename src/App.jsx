import React from "react";
import "./App.css";




function App() {
  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <SearchBar />
      <CurrentWeather />
      <Forecast />
      <SavedCities />
    </div>
  );
}

export default App;
