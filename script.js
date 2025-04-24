// f9adf29434ffa830f56c0a16866c7a1e
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=surat&appid=f9adf29434ffa830f56c0a16866c7a1e&units=metric

const apiKey = "f9adf29434ffa830f56c0a16866c7a1e";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const serachBox = document.querySelector(".search input");
const serachBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    const condition = data.weather[0].main;

    if (condition == "Clouds") {
      weatherIcon.src = "image/clouds.png";
    } else if (condition == "Clear") {
      weatherIcon.src = "image/clear.png";
    } else if (condition == "Rain") {
      weatherIcon.src = "image/rain.png";
    } else if (condition == "Drizzle") {
      weatherIcon.src = "image/drizzle.png";
    } else if (condition == "Mist") {
      weatherIcon.src = "image/mist.png";
    } else if (condition == "Snow") {
      weatherIcon.src = "image/snow.png";
    } else {
      weatherIcon.src = "image/clear.png"; // fallback image
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}
// serachBtn.addEventListener("click", () => {
//   checkWeather(serachBox.value);
// });
// serachBox.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     checkWeather(e);
//   }
// });

const handleSearch = (e) => {
  if (e.type === "click" || (e.type === "keypress" && e.key === "Enter")) {
    checkWeather(serachBox.value);
  }
};
serachBtn.addEventListener("click", handleSearch);
serachBox.addEventListener("keypress", handleSearch);
