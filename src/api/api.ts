import axios from "axios";
import {
  OPEN_WEATHER_MAP_API_URL,
  OPEN_WEATHER_MAP_API_KEY,
  LVIV_CITY_LAT,
  LVIV_CITY_LONG,
} from "@env";

export const getWeather = (
  daysCount: number
): Promise<Array<WeatherApiResp>> => {
  return axios
    .get(`${OPEN_WEATHER_MAP_API_URL}/data/2.5/forecast/daily`, {
      params: {
        lat: LVIV_CITY_LAT,
        lon: LVIV_CITY_LONG,
        appid: OPEN_WEATHER_MAP_API_KEY,
        units: "metric",
        cnt: daysCount,
      },
    })
    .then((response) => response.data);
};
