let html_day = document.getElementById("timerDay");
let html_hours = document.getElementById("timerhour");
let html_minutes = document.getElementById("timerMinute");
let html_seconds = document.getElementById("timerSec");


var countDownDate = new Date("sep 11, 2023 09:00:0").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    html_day.innerHTML = days;
    html_hours.innerHTML = hours;
    html_minutes.innerHTML = minutes;
    html_seconds.innerHTML = seconds;

    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);