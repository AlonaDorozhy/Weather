export class viewWeather {
  constructor(cont) {
    this.controller = cont
    this.searchButton = document.getElementById('search-btn');
    this.searchInput = document.getElementById('search-txt');
    this.searchButton.addEventListener('click', (e, searchInput) => this.controller.findWeatherDetails(e, searchInput));
    this.searchInput.addEventListener('', (e) => this.controller.enterPressed(e));
    
  }

  theResponse(response, dom) {
    let jsonObject = JSON.parse(response);
    dom.cityName.innerHTML = jsonObject.name;
    dom.icon.src = `http://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
    dom.temperature.innerHTML = ` ${parseInt(jsonObject.main.temp - 273)}°`;
    dom.tempMin.innerHTML = `min:${parseInt(jsonObject.main.temp_min - 273)}°-`;
    dom.tempMax.innerHTML = `max:${parseInt(jsonObject.main.temp_max - 273)}° `;
    dom.humidity.innerHTML = `${jsonObject.main.humidity}%`;
    dom.wind.innerHTML = `${jsonObject.wind.speed} m/s`;
    dom.description.innerHTML = jsonObject.weather[0].description;

  }

};



