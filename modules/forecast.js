const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const key = "&key=JK95UVL2URHQJBBVJ6A3N4B3T&contentType=json";
const imperial = "?unitGroup=us";
const metric = "?unitGroup=metric";

export function fetchWeatherForecast(locationValue, isImperial, forecastLength, forecast, submit) {
  const unitGroup = isImperial ? imperial : metric;
  
  submit.disabled = true; // Disable button during request to prevent multiple clicks
  forecast.innerHTML = '<div class="loading">Loading weather data...</div>';
  
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
        let forecastHTML = "";
        forecastArray.forEach(day => {
          const unit = isImperial ? "°F" : "°C";
          const date = new Date(day.datetime);
          const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
          const shortDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          
          forecastHTML += `
            <div class="forecast-card">
              <div class="forecast-date">${shortDate}</div>
              <div class="forecast-day">${dayOfWeek}</div>
              <div class="forecast-temp">${Math.round(day.temp)}${unit}</div>
              <div class="forecast-conditions">${day.conditions}</div>
              <div class="forecast-humidity">${day.humidity}% humidity</div>
            </div>
          `;
        });
        forecast.innerHTML = forecastHTML;
      } else {
        forecast.innerHTML = '<div class="error-message">No temperature data available</div>';
      }
      console.log(response);
    })
    .catch(error => {
      console.error("Fetch error:", error);
      forecast.innerHTML = `<div class="error-message">Error fetching weather data: ${error.message}</div>`;
    })
    .finally(() => {
      submit.disabled = false; // Re-enable button after request completes
    });
}