
import { viewWeather } from "../views/viewsWeather.js";
import { modelWeather } from "../models/modelsWeather.js";


export class controllerWeather {
  constructor(event) {
    this.model = new modelWeather(this);
    this.view = new viewWeather(this);
    this.key = this.model.appKey;
    this.searchLink 

  }


  findWeatherDetails() {
    if (this.view.searchInput.value === '') {
      console.log("nothing");
    } else {
 
      this.searchLink = `https://api.openweathermap.org/data/2.5/weather?q=${this.view.searchInput.value}&appid=${this.key}`;
      this.model.httpRequestAsync(this.searchLink, this.view.theResponse);
    }
  }


};



