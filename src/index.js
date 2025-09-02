const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const key = "&key=JK95UVL2URHQJBBVJ6A3N4B3T&contentType=json";
const imperial = "?unitGroup=us";
const metric = "?unitGroup=metric";
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

if (tempScale.checked) {
    submit.disabled = true; // Disable button during request to prevent multiple clicks
    fetch(`${baseUrl}${encodeURIComponent(locationValue)}${imperial}${key}`, { mode: 'cors' })
        .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
        })
        .then(response => {
        const forecastArray = response.days.slice(0, forecastLength)
        if (response && forecastArray.length > 0) {
            let forecastText = "";
            forecastArray.forEach(day => {
                forecastText += `${day.temp}°F 
                `;
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

    else {
        submit.disabled = true; // Disable button during request to prevent multiple clicks
  fetch(`${baseUrl}${encodeURIComponent(locationValue)}${metric}${key}`, { mode: 'cors' })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(response => {
    const forecastArray = response.days.slice(0, forecastLength)
        if (response && forecastArray.length > 0) {
            let forecastText = "";
            forecastArray.forEach(day => {
                forecastText += `${day.temp}°C 
                `;
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
});