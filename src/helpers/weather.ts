import { getDateString, ordinalInWord } from "../utils/date";
import { OPEN_WEATHER_ICON_URL } from "@env";

const getOpenWeatherIconUrl = (icon: string) =>
  `${OPEN_WEATHER_ICON_URL + "/" + icon}.png`;

const getWeekTitle = (weekCount: number) => {
  const ordinal = ordinalInWord(weekCount);
  return `${ordinal[0].toUpperCase() + ordinal.slice(1)} week`;
};

const weatherByWeek = (data: WeatherApiResp) => {
  let weekCount = 1;
  let weatherByWeek: Array<WeatherDataByWeek> = [];
  let currentWeekData: Array<DayWeatherData> = [];

  data.list.forEach((item: WeatherApiRespListItem, index: number) => {
    let date: Date = new Date(item.dt * 1000);
    const isLastDay = data.list.length - 1 === index;
    const isSunday = date.getDay() === 0;

    currentWeekData.push({
      humidity: item.humidity + " %",
      windSpeed: item.speed + " m / s",
      dayName: getDateString(date),
      iconUrl: getOpenWeatherIconUrl(item.weather[0].icon),
      dayTemperature: item.temp.day.toFixed(0) + "°C",
      nightTemperature: item.temp.night.toFixed(0) + "°C",
    });

    if (isSunday || isLastDay) {
      weatherByWeek.push({
        title: getWeekTitle(weekCount),
        data: currentWeekData,
      });
      currentWeekData = [];
      weekCount += 1;
    }
  });
  return weatherByWeek;
};

export { weatherByWeek };
