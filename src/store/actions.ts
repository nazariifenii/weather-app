import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions({
  fetchWeatherForecast: ["daysCount"],
  fetchWeatherForecastSuccess: ["payload"],
  fetchWeatherForecastFailure: ["message"],
});
