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
    // setTimeout(() => { console.log(this.data) }, 1000);
  }

  displayWeather() {
    const display = {
      City: this.data.name,
      Weather: this.data.weather[0].main,
      Temperature: this.data.main.temp,
      Feels_like: this.data.main.feels_like,
      Humidity: this.data.main.humidity
    }
    return display;
  }
}

module.exports = Weather;

const client = new WeatherClient();
const weather = new Weather(client);

weather.fetch('London');

// setTimeout(() => { console.log(weather.getWeatherData()) }, 1000);
// console.log(weather.getWeatherData());

setTimeout(() => { console.log(weather.displayWeather()) }, 1000);