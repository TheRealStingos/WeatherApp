import { fetchWeatherForecast } from './modules/forecast.js';

const forecast = document.getElementById("forecast");
const location = document.getElementById("location");
const form = document.getElementById("user-input");
const tempScale = document.getElementById("fahr");
const forecastSelect = document.getElementById("forecast-select");

// Listen to form submit event to prevent page refresh
form.addEventListener("submit", (event) => {
  event.preventDefault(); // This prevents the page refresh
  
  const locationValue = location.value.trim();
  if (!locationValue) {
    forecast.innerText = "Please enter a city";
    return;
  }

  const forecastLength = forecastSelect.value;
  
  fetchWeatherForecast(locationValue, tempScale.checked, forecastLength, forecast, document.getElementById("submit"));
});