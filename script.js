async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=d6bab5e0b374c1fb0431c40a61afa691`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    const { main, sys, weather, wind } = weatherData;
    console.log(main, "main");
    console.log(sys, "sys");
    console.log(weather, "weatherdata");
    console.log(wind, "wind");

    displayData(location, sys, main, weather, wind);
  } catch (err) {
    alert(`City ${location} not found!`);
  }
}

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

const searchButton = document.getElementById("search");
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const inputText = document.querySelector(".input-text");
  inputText.value = inputText.value.toUpperCase();
  getWeather(inputText.value);
  inputText.value = " ";
});
