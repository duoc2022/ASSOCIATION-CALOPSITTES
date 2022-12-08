/*!
////////////////////////////////////////
  * Javascript document : DATE
 //////////////////////////////////////
  */

const hours = document.getElementById("hours"),
  minutes = document.getElementById("minutes"),
  seconds = document.getElementById("seconds"),
  monthsNumber = document.getElementById("month"),
  dayNumber = document.getElementById("day"),
  yearNumber = document.getElementById("year"),
  daysName = document.getElementById("day-name"),
  daysList = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
  ],
  monthsList = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ];

setInterval(() => {
  const today = new Date(),
    hour = today.getHours(),
    minute = today.getMinutes(),
    second = today.getSeconds(),
    dayName = daysList[today.getDay()],
    month = monthsList[today.getMonth()],
    monthNum = today.getDate(),
    year = today.getUTCFullYear();

  hours.innerHTML = hour;
  hour < 10 ? (hours.innerHTML = "0" + hour) : (hours.innerHTML = hour);
  minute < 10 ?
    (minutes.innerHTML = "0" + minute) :
    (minutes.innerHTML = minute);
  if (second < 10) {
    seconds.innerHTML = "0" + second;
  } else {
    seconds.innerHTML = second;
  }
  daysName.innerHTML = dayName;
  dayNumber.innerHTML = monthNum;
  monthsNumber.innerHTML = month;
  yearNumber.innerHTML = year;
}, 1000);