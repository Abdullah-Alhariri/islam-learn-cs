"use strict";

var countdown = function countdown() {
  var countDate = new Date("May 14, 2022 00:00:00").getTime();
  var now = new Date().getTime();
  var gap = countDate - now;
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var textDay = Math.floor(gap / day);
  var textHour = Math.floor((gap % day) / hour)
    .toString()
    .padStart(2, "0");
  var textMinute = Math.floor((gap % hour) / minute)
    .toString()
    .padStart(2, "0");
  var textSecond = Math.floor((gap % minute) / second)
    .toString()
    .padStart(2, "0");
  document.querySelector(".primary-section-countdown-day").innerText = textDay;
  document.querySelector(".primary-section-countdown-hour").innerText = textHour;
  document.querySelector(".primary-section-countdown-min").innerText = textMinute;
  document.querySelector(".primary-section-countdown-sec").innerText = textSecond;
  if (gap <= 1) {
    document.querySelector(".primary-section-countdown").innerText = "Landing soon 🛬";
  }
};
countdown();
setInterval(countdown, 1000);
