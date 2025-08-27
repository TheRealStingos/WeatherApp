const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const key = "&key=JK95UVL2URHQJBBVJ6A3N4B3T&contentType=json";
const imperial = "?unitGroup=us";
const metric = "?unitGroup=metric";
const forecast = document.getElementById("forecast");
const location = document.getElementById("location");
const submit = document.getElementById("submit");
const tempScale = document.getElementById("fahr")

submit.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission to avoid page reload

  const locationValue = location.value.trim(); // Get current input value
  if (!locationValue) {
    forecast.innerText = "Please enter a city";
    return;
  }

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
        forecast.innerText = response.currentConditions.temp
            ? `Current temperature in ${response.resolvedAddress}: ${response.currentConditions.temp}°F`
            : "No temperature data available";
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
      forecast.innerText = response.currentConditions.temp
        ? `Current temperature in ${response.resolvedAddress}: ${response.currentConditions.temp}°C`
        : "No temperature data available";
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