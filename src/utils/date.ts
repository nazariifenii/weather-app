const ordinalInWord = (cardinal: number) => {
  var ordinals = ["zeroth", "first", "second", "third", "forth"];
  return ordinals[cardinal];
};

const isDateToday = (date: Date) => {
  const today = new Date();
  return (
    date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
  );
};

const getDateString = (date: Date) => {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return isDateToday(date) ? "Today" : days[date.getDay()];
};

export { ordinalInWord, isDateToday, getDateString };
