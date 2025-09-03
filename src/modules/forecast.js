const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const key = "&key=JK95UVL2URHQJBBVJ6A3N4B3T&contentType=json";
const imperial = "?unitGroup=us";
const metric = "?unitGroup=metric";

export function fetchWeatherForecast(locationValue, isImperial, forecastLength, forecast, submit) {
  const unitGroup = isImperial ? imperial : metric;
  
  submit.disabled = true; // Disable button during request to prevent multiple clicks
  
  fetch(`${baseUrl}${encodeURIComponent(locationValue)}${unitGroup}${key}`, { mode: 'cors' })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(response => {
      const forecastArray = response.days.slice(0, forecastLength);
      if (response && forecastArray.length > 0) {
        let forecastText = "";
        forecastArray.forEach(day => {
          const unit = isImperial ? "°F" : "°C";
          forecastText += `${day.temp}${unit}\n`;
        });
        forecast.innerText = forecastText;
      } else {
        forecast.innerText = "No temperature data available";
      }
      console.log(response);
    })
    .catch(error => {
      console.error("Fetch error:", error);
      forecast.innerText = `Error fetching weather data: ${error.message}`;
    })
    .finally(() => {
      submit.disabled = false; // Re-enable button after request completes
    });
}