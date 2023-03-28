import axios from "axios";
import { OPEN_WEATHER_MAP_API_URL } from "@env";

export const getWeather = () => {
  return axios.get(OPEN_WEATHER_MAP_API_URL).then((response) => response.data);
};
