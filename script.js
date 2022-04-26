async function getWeather(location) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=d6bab5e0b374c1fb0431c40a61afa691`,
    { mode: "cors" }
  );
  if (!response.ok) alert(`City ${location} not found`);
  const weatherData = await response.json();
  const { main, sys, weather } = weatherData;
  console.log(main, "main");
  console.log(sys, "sys");
  console.log(weather, "weatherdata");

  displayData(main, sys, weather, location);
}

function displayData(main, sys, weather, location) {
  const cityName = document.getElementById("city-name");
  const feelsLike = document.getElementById("feels-like");
  const humidity = document.getElementById("humidity");
  const temperature = document.getElementById("temperature");
  const weatherDescription = document.getElementById("description");

  cityName.textContent = `${location}, ${sys.country}`;
  feelsLike.textContent = `It feels like ${main.feels_like}°C`;
  humidity.textContent = `Humidity: ${main.humidity}%`;
  temperature.textContent = `Temperature: ${main.temp}°C`;
  weatherDescription.textContent = `Description: ${weather[0].description}`;
}

const searchButton = document.getElementById("search");
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const inputText = document.querySelector(".input-text");
  getWeather(inputText.value);
  inputText.value = " ";
});
