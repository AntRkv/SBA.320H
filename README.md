# Weather Dashboard

A React application to fetch and display weather data for a city, including current weather and a 5-day forecast. The app also features dynamic backgrounds based on city names.

---

## Technologies Used

- **React.js**: For building the user interface.
- **CSS**: For styling the application.
- **OpenWeatherMap API**: To fetch current weather data and a 5-day forecast.
- **Unsplash API**: To fetch dynamic background images for cities.
- **Vite**: For a fast development environment.
- **JavaScript (ES6+)**: For managing application logic.

---

## Approach Taken

1. **Component-Based Architecture**:
   - Separated the application into reusable components (`SearchBar`, `CurrentWeather`, `Forecast`).
   - Created a modular `api.js` utility for all API-related logic.

2. **Dynamic Styling**:
   - Used dynamic backgrounds fetched from the Unsplash API.
   - Included responsive and adaptive styling for various screen sizes.

3. **State Management**:
   - Managed application state using React's `useState` for:
     - Current weather.
     - Forecast data.
     - Dynamic background photos.
     - Error handling.

4. **Error Handling**:
   - Displayed error messages for invalid API responses or connection issues.

---

## Live Site

[Visit Weather Dashboard](#)  
(*Replace `#` with your deployed site URL, e.g., Netlify or Vercel link*)

---

## Usage Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-dashboard.git
2. Navigate to the project directory:
   cd weather-dashboard
3. Install dependencies:
   npm install
4. Add your .env file with the following variables:
   VITE_WEATHER_API_KEY=your_openweathermap_api_key
   VITE_UNSPLASH_API_KEY=your_unsplash_api_key
5. Run the development server:
   npm run dev
6. Open your browser and visit:
   http://localhost:5173


