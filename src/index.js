import './styles.css';
import { fetchWeatherForecast } from './modules/forecast.js';

const forecast = document.getElementById("forecast");
const location = document.getElementById("location");
const submit = document.getElementById("submit");
const tempScale = document.getElementById("fahr");
const forecastSelect = document.getElementById("forecast-select");

submit.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission to avoid page reload

  const locationValue = location.value.trim(); // Get current input value
  if (!locationValue) {
    forecast.innerText = "Please enter a city";
    return;
  }

  const forecastLength = forecastSelect.value;
  
  fetchWeatherForecast(locationValue, tempScale.checked, forecastLength, forecast, submit);
});