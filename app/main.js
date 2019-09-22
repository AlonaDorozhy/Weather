 import {controllerWeather} from './controllers/controllerWeather.js';
import {viewWeather} from './views/viewsWeather.js';
import {modelWeather} from './models/modelsWeather.js';

// const game = new ControllerGame(new ModelGame(), new ViewGame());
const synoptic = new controllerWeather();
console.log(synoptic);

const appKey = 'ae884c36417e5a6e150f60c6401a8689';

let searchButton = document.getElementById('search-btn');
let searchInput = document.getElementById('search-txt');
let cityName = document.getElementById('city-name');
let icon = document.getElementById('icon');
let temperature = document.getElementById('temperature');
let humidity = document.getElementById('humidity-div');
let wind = document.getElementById('wind');
let tempMin = document.getElementById('tempMin')
let tempMax = document.getElementById('tempMax')
let description = document.getElementById('description')

searchButton.addEventListener('click', findWeatherDetails);
searchInput.addEventListener('keyup', enterPressed);

function enterPressed(event) {
  if (event.key === 'Enter') {
    findWeatherDetails();
  }
}

function findWeatherDetails() {
  if (searchInput.value === '') {

  } else {
    let searchLink = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${appKey}`;
    httpRequestAsync(searchLink, theResponse);
  }
}

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  cityName.innerHTML = jsonObject.name;
  icon.src = `http://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
  temperature.innerHTML = ` ${parseInt(jsonObject.main.temp - 273)}°`;
  tempMin.innerHTML = `min:${parseInt(jsonObject.main.temp_min - 273)}°-`;
  tempMax.innerHTML = `max:${parseInt(jsonObject.main.temp_max - 273)}° `;
  
  humidity.innerHTML = `${jsonObject.main.humidity }%`;
  wind.innerHTML = `${jsonObject.wind.speed } m/s`;
  description.innerHTML = jsonObject.weather[0].description ;
}

function httpRequestAsync(url, callback) {
 
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState == 4 && httpRequest.status == 200)
      callback(httpRequest.responseText);
  }
  httpRequest.open('GET', url, true); 
  httpRequest.send();
}