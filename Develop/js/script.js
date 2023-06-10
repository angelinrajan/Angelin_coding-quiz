var viewHighscore = document.querySelector(".highscore");
var time = document.querySelector(".Time");
var startButton = document.querySelector(".StartButton");
//var homePageTitle = document.getElementsByClassName('heading');
var instruction = document.getElementById('inst');
//var question1 = ("What contains true/false?");
//var option1 = ("Boolean", "Number", "String", "CSS");
var titleQ = document.getElementById('Q1');
var opt = document.querySelectorAll('.options');
var timercount;
var timer;
time.textContent = "5"

window.onload = function() {
    var listitem = document.getElementsByClassName("quiz");
    listitem.style= 'none';
};
startButton.addEventListener("click", startQuiz);


function startQuiz() {
    startButton.style.display= 'none';
    instruction.style.display= 'none';
console.log("click event happening");
timercount = 5;
startTimer();
showQ(questionNo1);
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
            time.textContent = "Game Over! 😮";
          // Clears interval
          clearInterval(timer);
        }
      }, 1000);
}


let questionNo1 = {
    Q1: 'Which of these is a car?',
    options: ['Rolex', 'PS5', 'Southwest', 'M4'],
    correct: 3

};

function showQ(q) {
titleQ.textContent = q.Q1;
console.log(opt);
opt.forEach(function(element, index) {
    element.textContent = q.options[index];
    element.addEventListener('click', function() {
        if (q.correct == index) {
            console.log('Correct Answer!');
            console.log(index);
          } else {
            console.log('Wrong Answer!');
            console.log(index);
          }
    });
});

}


