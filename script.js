async function getWeather(location) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=d6bab5e0b374c1fb0431c40a61afa691`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  const { main, sys, weather } = weatherData;
  console.log(main, "main");
  console.log(sys, "sys");
  console.log(weather, "weatherdata");
}

const searchButton = document.getElementById("search");
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const inputText = document.querySelector(".input-text");
  getWeather(inputText.value);
});
