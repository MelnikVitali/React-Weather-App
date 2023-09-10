// 20230910002140
// https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=8acd0e7f79261839f4a62477cc600141&units=metric

export const dummyCityWeather = {
  coord: {
    lon: 24.0232,
    lat: 49.8383,
  },
  weather: [
    {
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04n',
    },
  ],
  base: 'stations',
  main: {
    temp: 14.98,
    feels_like: 14.41,
    temp_min: 14.98,
    temp_max: 14.98,
    pressure: 1022,
    humidity: 72,
    sea_level: 1022,
    grnd_level: 988,
  },
  visibility: 10000,
  wind: {
    speed: 2.17,
    deg: 92,
    gust: 2.26,
  },
  clouds: {
    all: 59,
  },
  dt: 1694294311,
  sys: {
    country: 'UA',
    sunrise: 1694317911,
    sunset: 1694364639,
  },
  timezone: 10800,
  id: 702550,
  name: 'Lviv',
  cod: 200,
};
