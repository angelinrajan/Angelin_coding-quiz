var viewHighscore = document.querySelector(".highscore");
var time = document.querySelector(".Time");
var startButton = document.querySelector(".StartButton");
var question1 = ("What contains true/false?");
var option1 = ("Boolean", "Number", "String", "CSS");
var timercount;
var timer;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
console.log("click event happening");


startTimer();
}



function startTimer() {
    timer = setInterval(function() {
        timercount--;
        time.textContent = timercount;
        if (timercount >= 0) {
            console.log("Timer greater than 0");
        }
        // Tests if time has run out
        if (timercount === 0) {
            console.log("GameOver!!")
          // Clears interval
          clearInterval(timer);
        }
      }, 1000);
}