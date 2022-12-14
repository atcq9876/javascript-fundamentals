const { get } = require('callback-fetch');
const apiKey = require('./apiKey');

class WeatherClient {
  constructor() {}

  fetchWeatherData(city, callbackFunction) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    get(apiUrl, (response) => {
      let responseObject = JSON.parse(response);
      return callbackFunction(responseObject);
    });
  }
}

module.exports = WeatherClient;

// const client = new WeatherClient();

// client.fetchWeatherData('London', (weatherData) => {
//   console.log(weatherData);
// });