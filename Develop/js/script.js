
let question1 = {
    question: 'Which of these is a car?',
    options: ['Rolex', 'PS5', 'Southwest', 'M4'],
    correct: 3
    };

let question2 = {
        question: 'tesla models?',
        options: ['s','h','k','l'],
        correct: 0
    };
    
let question3 = {
        question: 'earth is a?',
        options: ['spaceship','sun','moon','planet'],
        correct: 3
    };
let question4 = {
        question: 'strongest avenger?',
        options: ['ironman','hulk','thor','spiderman'],
        correct: 1
    };



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
time.textContent = "15"

window.onload = function() {
    var listitem = document.getElementsByClassName("quiz");
    listitem.style= 'none';
};
startButton.addEventListener("click", startQuiz);


function startQuiz() {
    startButton.style.display= 'none';
    instruction.style.display= 'none';
console.log("click event happening");
timercount = 15;
startTimer();
showQ(question1);
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

function showQ() {
titleQ.textContent = question1.question;
console.log(opt);
opt.forEach(function(element, index) {
    element.textContent = question1.options[index];
    element.addEventListener('click', function() {
        if (question1.correct == index && timercount !== 0) {
            console.log('Correct Answer!');
            console.log(index);
            showQ2(question2);
            return;
          } 
          if (question1.correct !== index) {
            console.log('Wrong Answer!');
            console.log(index);
            showQ2(question2);
            return;
          }
    });
});

}

function showQ2() {
    titleQ.textContent = question2.question;
    console.log(opt);
    opt.forEach(function(element, index) {
        element.textContent = question2.options[index];
        element.addEventListener('click', function() {
            if (question2.correct == index && timercount !== 0) {
                console.log('Correct Answer!');
                console.log(index);
                showQ3(question3);
              } else {
                console.log('Wrong Answer!');
                console.log(index);
                showQ3(question3);
              }
        });
    });
}

function showQ3() {
    titleQ.textContent = question3.question;
    console.log(opt);
    opt.forEach(function(element, index) {
        element.textContent = question3.options[index];
        element.addEventListener('click', function() {
            if (question3.correct == index && timercount !== 0) {
                console.log('Correct Answer!');
                console.log(index);
                showQ4();
              } else {
                console.log('Wrong Answer!');
                console.log(index);
                showQ4();
              }
        });
    });
}

function showQ4() {
    titleQ.textContent = question4.question;
    console.log(opt);
    opt.forEach(function(element, index) {
        element.textContent = question4.options[index];
        element.addEventListener('click', function() {
            if (question4.correct == index && timercount !== 0) {
                console.log('Correct Answer!');
                console.log(index);
                return;
              } else {
                console.log('Wrong Answer!');
                console.log(index);
                return;
              }
        });
    });
}
function wrongAnswer() {
                console.log('Wrong Answer!');
            console.log(index);
}