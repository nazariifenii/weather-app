import moment from "moment";
import { DATE_FORMAT } from "@env";

type DateType = string | Date | number | moment.Moment;

const formatDate = (date?: DateType): string =>
  date ? moment(date).format(DATE_FORMAT) : moment().format(DATE_FORMAT);

const ordinalInWord = (cardinal: number): string => {
  var ordinals = ["zeroth", "first", "second", "third", "forth"];
  return ordinals[cardinal];
};

const isDateToday = (date: DateType): boolean => {
  const today = moment().startOf("day");
  const parsedDate = moment(date).startOf("day");
  return today.diff(parsedDate) === 0;
};

const getDateString = (date: moment.Moment): string => {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return isDateToday(date) ? "Today" : days[date.weekday()];
};

const parseDateMoment = (date: string): string =>
  moment(date, "YYYY-MM-DD").startOf("day").format();

export {
  ordinalInWord,
  isDateToday,
  getDateString,
  parseDateMoment,
  formatDate,
};
