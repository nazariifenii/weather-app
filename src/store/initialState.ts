export type RootState = {
  isFetching: boolean;
  weather: ParseWeatherForecast;
  errors: { message: string };
};

const INITIAL_STATE: RootState = {
  isFetching: true,
  weather: { weatherByDate: {}, weatherDatesByWeek: [] },
  errors: { message: "" },
};

export default INITIAL_STATE;
