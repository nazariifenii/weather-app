import { getDateString, ordinalInWord } from "../utils/date";
import { DATE_FORMAT, OPEN_WEATHER_ICON_URL } from "@env";
import moment from "moment";

const getOpenWeatherIconUrl = (icon: string) =>
  `${OPEN_WEATHER_ICON_URL + "/" + icon}.png`;

const getWeekTitle = (weekCount: number) => {
  const ordinal = ordinalInWord(weekCount);
  return `${ordinal[0].toUpperCase() + ordinal.slice(1)} week`;
};

const parseWeatherForecast = (
  data: OpenWeatherAPIResp
): ParseWeatherForecast => {
  let weatherByDate: WeatherByDate = {};
  let weatherDatesByWeek: Array<WeatherDatesByWeek> = [];

  let currentWeekDates: Array<string> = [];
  let weekCount = 1;

  data.list.forEach((item: OpenWeatherAPIRespListItem, index: number) => {
    const date: moment.Moment = moment(item.dt * 1000).startOf("day");
    const dateString = date.format(DATE_FORMAT);
    const isLastDay = data.list?.length === index + 1;
    const isSunday = date.day() === 0;

    weatherByDate[dateString] = {
      date: dateString,
      humidity: item.humidity + " %",
      windSpeed: item.speed + " m / s",
      dayName: getDateString(date),
      iconUrl: getOpenWeatherIconUrl(item.weather[0].icon),
      dayTemperature: item.temp.day.toFixed(0) + "°C",
      nightTemperature: item.temp.night.toFixed(0) + "°C",
    };

    currentWeekDates.push(dateString);

    if (isSunday || isLastDay) {
      weatherDatesByWeek.push({
        title: getWeekTitle(weekCount),
        data: currentWeekDates,
      });
      currentWeekDates = [];
      weekCount += 1;
    }
  });
  return { weatherByDate, weatherDatesByWeek };
};

export { parseWeatherForecast };
