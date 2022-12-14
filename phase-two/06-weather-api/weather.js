const WeatherClient = require('./weatherClient');

class Weather {
  constructor(client) {
    this.client = client;
  }
  
  fetch(city) {
    this.client.fetchWeatherData(city, (weatherData) => {
      this.data = weatherData;
    });
  }

  getWeatherData() {
    return this.data;
    // setTimeout(() => { return this.data }, 500);
    // setTimeout(() => { console.log(this.data) }, 500);
  }
}

module.exports = Weather;

// const client = new WeatherClient();
// const weather = new Weather(client);

// weather.fetch('Bristol');

// weather.getWeatherData();