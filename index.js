const date = new Date();
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = date.getDay();
const currentTime = date.toLocaleTimeString();
alert(`Today is: ${weekDays[day]}\nCurrent time is: ${currentTime}`);
