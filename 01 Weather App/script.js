// OpenWeatherMap API key for accessing weather data
const apiKey = "1f3dc98d7f51d969ec56d3e357eea565";

// Base URL for OpenWeatherMap API with units set to metric
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Get references to HTML elements for search input, search button, and weather icon
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Function to check the weather for a given city
async function checkWeather(city) {
    // Construct the API URL with the provided city and API key
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // Check if the response status is 404 (City not found)
    if (response.status == 404) {
        // Display error message and hide weather information
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        // Parse the response as JSON
        var data = await response.json();

        // Log the data to the console (for debugging purposes)
        console.log(data);

        // Display weather information in the HTML elements
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `°C`;
        document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
        document.querySelector(".wind").innerHTML = data.wind.speed + ` km/h`;

        // Set the weather icon based on the weather condition
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Dizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        // Display weather information and hide the error message
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

// Add an event listener to the search button to trigger weather check when clicked
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
