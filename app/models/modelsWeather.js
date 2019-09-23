export class modelWeather {
  constructor(contr) {
    this.appKey = 'ae884c36417e5a6e150f60c6401a8689';
    this.controller = contr;
    this.dom = {
      cityName: document.getElementById('city-name'),
      icon: document.getElementById('icon'),
      temperature: document.getElementById('temperature'),
      humidity: document.getElementById('humidity-div'),
      wind: document.getElementById('wind'),
      tempMin: document.getElementById('tempMin'),
      tempMax: document.getElementById('tempMax'),
      description: document.getElementById('description')
    }
  }

  httpRequestAsync(url, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState == 4 && httpRequest.status == 200)
        callback(httpRequest.responseText, this.dom);
    }
    httpRequest.open('GET', url, true);
    httpRequest.send();
 
  };
}

