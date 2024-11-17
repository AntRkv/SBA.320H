import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [weather, setWeather] = useState(null);

  const handleSearch = (city) => {
    console.log(`Search for: ${city}`);
    setWeather(null);
  };

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default App;
