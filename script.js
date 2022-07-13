// an async await fuction that fetches the openweather api. (i used the try statement which allows my block of code to be tested for errors while it's being executed.)
async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=d6bab5e0b374c1fb0431c40a61afa691`,
      { mode: "cors" }
    );

    // converting the response we get from the api into json format.
    const weatherData = await response.json();

    //selecting the specific responses we want from the api and logging them to see if it works alright.
    const { main, sys, weather, wind } = weatherData;
    console.log(main, "main");
    console.log(sys, "sys");
    console.log(weather, "weatherdata");
    console.log(wind, "wind");

    //calling the function that displays all the selected responses to our html page.
    displayData(location, sys, main, weather, wind);
  } catch (err) {
    //this catch statement always follows the try statement and it's used to handle errors which in this case, alerts the user of any error found.
    alert(err);
  }
}

//defining the DOM elements and assigning it's text content in a way that i want it to be displayed on my html page.
function displayData(location, sys, main, weather, wind) {
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const feelsLike = document.getElementById("feels-like");
  const humidity = document.getElementById("humidity");
  const weatherDescription = document.getElementById("description");
  const windSpeed = document.getElementById("wind");

  cityName.textContent = `${location}, ${sys.country}`;
  temperature.textContent = `${main.temp}°C`;
  feelsLike.textContent = `It feels like ${main.feels_like}°C`;
  humidity.textContent = `Humidity: ${main.humidity}%`;
  weatherDescription.textContent = `Description: ${weather[0].description}`;
  windSpeed.textContent = `Wind: ${wind.speed * 3.6}km/h`;
}

// a search button that returns the weather of the requested city once it's clicked on.
const searchButton = document.getElementById("search");
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const inputText = document.querySelector(".input-text");
  inputText.value = inputText.value.toUpperCase();
  getWeather(inputText.value);
  inputText.value = " "; // this clears the input bar when the requested data is shown.
});
