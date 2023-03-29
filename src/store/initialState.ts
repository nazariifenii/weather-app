type WeatherState = {
  weatherForecastByWeek: Array<WeatherDataByWeek>;
};

export type RootState = {
  isFetching: boolean;
  weather: WeatherState;
};

const INITIAL_STATE = {
  isFetching: true,
  weather: { weatherForecastByWeek: [] },
  errors: {},
};

export default INITIAL_STATE;
