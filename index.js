const countdown = () => {
  const countDate = new Date("May 14, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour)
    .toString()
    .padStart(2, "0");
  const textMinute = Math.floor((gap % hour) / minute)
    .toString()
    .padStart(2, "0");
  const textSecond = Math.floor((gap % minute) / second)
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
