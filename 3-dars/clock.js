const clock = document.getElementById("clock");
const showTime = () => {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let PM_AM = "";
  if (hour > 12) {
    PM_AM = "PM";
  } else {
    PM_AM = "AM";
  }
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = `${hour}:${min}:${sec} ${PM_AM}`;
  clock.innerHTML = currentTime;
};
showTime();
setInterval(showTime, 1000);
