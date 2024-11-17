const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";


export const fetchWeatherData = async (city) => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch current weather data");
  }
  return await response.json();
};


export const fetchForecastData = async (city) => {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=imperial`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch forecast data");
  }
  const data = await response.json();

 
  const groupedByDate = {};
  data.list.forEach((item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString();
    if (!groupedByDate[date]) {
      groupedByDate[date] = item;
    }
  });

  return Object.values(groupedByDate);
};


export const fetchCityPhoto = async (city) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${city}&client_id=${UNSPLASH_API_KEY}&per_page=1`
    );
    const data = await response.json();
    return data.results[0]?.urls?.regular || null;
  } catch (error) {
    console.error("Failed to fetch city photo", error);
    return null;
  }
};
