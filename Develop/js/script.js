/*
let question1 = {
    question: "Commonly used data types DO NOT include: ",
        options: ["strings", "booleans", "numbers", "alerts"],
        answer: 3
    };

let question2 = {
    question: "How to call a function called passWord?",
    options: ["call passWord()", "passWord()", "call function myFunction()()", "password()"],
    answer: 1
    };
    
let question3 = {
    question: "an Array starts with which index?",
    options: ["0", "1", "2", "5"],
    answer: 0
    };
let question4 = {
    question: "How do you declare a javaScript variable to names?",
    options: ["v names", "variable names;", "variables= names", "var names;"],
    answer: 3
    };
*/
var totalQuestion = [
    {
        question: "Commonly used data types DO NOT include: ",
        options: ["strings", "booleans", "numbers", "alerts"],
        answer: "alerts"
    },
    {
        question: "How to call a function called passWord?",
        options: ["call passWord()", "passWord()", "call function myFunction()()", "password()"],
        answer: "passWord()"
    },
    {
        question: "an Array starts with which index?",
        options: ["0", "1", "2", "5"],
        answer: "0"
    },
    {
        question: "How do you declare a javaScript variable to names?",
        options: ["v names", "variable names;", "variables= names", "var names;"],
        answer: "var names;"
    }
];


var viewHighscore = document.querySelector(".highscore");
var time = document.querySelector(".Time");
var startButton = document.querySelector(".StartButton");
var instruction = document.getElementById('inst');
var titleQ = document.getElementById('QuestionTitle');
var initial = document.getElementById('initial');
var submitbtn = document.getElementById('submit')
var highscoreOutput = document.getElementById('outputscore')
var option = document.querySelectorAll('.options');
option.forEach(element => element.addEventListener("click", Test))

var timercount;
var timer;
time.textContent = "15"
var currentQuestion = 0;
var scoreCount = 0;
var enteredInitials;

// window.onload = function () {
    var listitem = document.querySelector(".quiz");
    listitem.style.display = 'none';
    var Done = document.querySelector(".quizComplete");
    Done.style.display = 'none';
    var highscore = document.querySelector(".highscore");
    highscore.style.display = 'none';
    console.log(listitem,Done)
// };
startButton.addEventListener("click", startQuiz);


function startQuiz() {
    startButton.style.display = 'none';
    instruction.style.display = 'none';
    console.log("click event happening");
    timercount = 15;
    console.log(scoreCount);
    listitem.style.display = "block"
    startTimer();
    showQ();
}



function startTimer() {
    timer = setInterval(function () {
        timercount--;
        time.textContent = timercount;
        if (timercount >= 0) {
            console.log("Timer greater than 0");
        }
        // Tests if time has run out
        if (timercount === 0 || timercount < 0) {  // 15- 14 = 1  -2 =-1
            console.log("GameOver!!")
            time.textContent = "Time Up! 😮";
            // Clears interval
            GameOver();
        }
    }, 1000);
}

function showQ() {
    titleQ.textContent = totalQuestion[currentQuestion].question;
    console.log(option);
    option.forEach(function (element, index) {
        element.textContent = totalQuestion[currentQuestion].options[index];

    });

}
function Test(event) {
    var index = event.target.textContent
    if (totalQuestion[currentQuestion].answer == index) {
        console.log('Correct Answer!');
        scoreCount += 1;
        console.log(index);
      
    }else{
        timercount -=2
        console.log('Wrong Answer!');
        console.log(index);
    }
    if(currentQuestion < totalQuestion.length-1){
        currentQuestion++;
        showQ();
       
    }else{
        time.textContent = "Thank you for playing! 👻";
        GameOver();
    }

}


function GameOver() {
    clearInterval(timer);
    Done.style.display = "block"
    listitem.style.display = 'none';
    document.getElementById("finalScore").innerText = "Your final score is: " + (scoreCount)
    document.getElementById("timeRemaining").innerText = "Your time remaining is: " + timercount +" seconds"
    submit();
}


function submit() {
    submitbtn.addEventListener("click", high);
    };


function high() {
    Done.style.display = "none"
    //listitem.style.display = 'none';
    highscore.style.display= 'block';
    initialText= initial.value;
    document.getElementById("outputscore").innerHTML = "highscore for " + (initialText);

}
