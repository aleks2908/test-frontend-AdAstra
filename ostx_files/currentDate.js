var today = new Date();

var options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

var now = today.toLocaleString("pl", options).split(" ");

const weekday = document.querySelector(".current-weekday");
weekday.textContent = now[0].charAt(0).toUpperCase() + now[0].slice(1);

const day = document.querySelector(".current-day");
day.textContent = now[1];

const month = document.querySelector(".current-month");
month.textContent = now[2].toUpperCase();
