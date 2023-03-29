export type RootState = {
  weather: ParseWeatherForecast;
  errors: { message: string };
};

const INITIAL_STATE: RootState = {
  weather: { weatherByDate: {}, weatherDatesByWeek: [] },
  errors: { message: "" },
};

export default INITIAL_STATE;
