//Weather App

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

const apiKey = "c030ed5eefff362e384926114448ad97";

weatherForm.addEventListener("sumbit", (event) => {
  event.preventDefault();
  const city = cityInput.value;
  if (city) {
  } else {
    displayError("Please enter a city");
  }
});

async function getWeatherData(city) {}

function displayWeatherInfo(data) {}

function getWeatherEmoji(weatherId) {}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
}
