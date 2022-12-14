const Weather = require('./weather');
const apiKey = require('./apiKey');

describe(Weather, () => {
  it('returns the weather info for a given city', () => {
    const mockedClient = {
      fetchWeatherData: (city, callback) => {
        callback({
          place: 'Bristol',
          temp: 30,
          conditions: 'sunny'
        });
      }
    }

    const weather = new Weather(mockedClient);
    weather.fetch('Bristol');

    expect(weather.getWeatherData()).toEqual({
      place: 'Bristol',
      temp: 30,
      conditions: 'sunny'
    });
  });
});