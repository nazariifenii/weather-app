import axios from "axios";
import {
  OPEN_WEATHER_MAP_API_URL,
  OPEN_WEATHER_MAP_API_KEY,
  LVIV_CITY_LAT,
  LVIV_CITY_LONG,
} from "@env";

function ordinalInWord(cardinal: number) {
  var ordinals = ["zeroth", "first", "second", "third", "forth"];
  return ordinals[cardinal];
}

export const getWeather = (daysCount: number) => {
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
    .then((response) => response.data)
    .then((data) => {
      let weekCount = 1;
      let weatherByWeeks: any = [];
      let currentWeek: any = [];
      data.list.forEach((element: any) => {
        let date = new Date(element.dt * 1000);
        const dayName = date.toLocaleDateString("en", {
          weekday: "long",
        });
        const iconUrl = `https://openweathermap.org/img/wn/${element.weather[0].icon}.png`;
        const dayTemperature = element.temp.day.toFixed(0);

        currentWeek.push({ dayName, iconUrl, dayTemperature });

        if (date.getDay() === 0) {
          const ordinal = ordinalInWord(weekCount);
          const title = `${ordinal[0].toUpperCase() + ordinal.slice(1)} week`;
          weatherByWeeks.push({ title, data: currentWeek });
          weekCount += 1;
          currentWeek = [];
        }
      });
      return weatherByWeeks;
    });
};
