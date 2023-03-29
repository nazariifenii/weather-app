declare type DayWeatherData = {
  date: string;
  dayName: string;
  iconUrl: string;
  humidity: string;
  windSpeed: string;
  dayTemperature: string;
  nightTemperature: string;
};

declare type WeatherDatesByWeek = {
  title: string;
  data: Array<string>;
};

declare type WeatherByDate = {
  [key: string]: DayWeatherData;
};

declare type ParseWeatherForecast = {
  weatherByDate: WeatherByDate;
  weatherDatesByWeek: Array<WeatherDatesByWeek>;
};

declare type OpenWeatherAPIRespListItem = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  speed: number;
  deg: number;
  gust: number;
  clouds: number;
  pop: number;
  rain: number;
};

declare type OpenWeatherAPIResp = {
  city: {
    id: number;
    name: string;
    coord: {
      lon: number;
      lat: number;
    };
    country: string;
    population: number;
    timezone: number;
  };
  cod: number;
  message: number;
  cnt: number;
  list: Array<OpenWeatherAPIRespListItem>;
};
