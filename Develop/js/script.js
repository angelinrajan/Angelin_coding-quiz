/* Went with Arrays instead
let question1 = {
    question: "Commonly used data types DO NOT include: ",
        options: ["Strings", "Booleans", "Numbers", "Alerts"],
        answer: 3
    };

let question2 = {
    question: "How to call a function called passWord?",
    options: ["call passWord()", "passWord()", "call function myFunction()()", "password()"],
    answer: 1
    };
    
let question3 = {
    question: "An array starts with which index?",
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
        question: "Question 1-- Commonly used data types DO NOT include: ",
        options: ["Strings", "Booleans", "Numbers", "Alerts"],
        answer: "alerts"
    },
    {
        question: "Question 2-- How to call a function called passWord?",
        options: ["call passWord()", "passWord()", "call function myFunction()()", "password()"],
        answer: "passWord()"
    },
    {
        question: "Question 3-- An array starts with which index?",
        options: ["0", "1", "2", "5"],
        answer: "0"
    },
    {
        question: "Question 4-- How do you declare a javaScript variable to names?",
        options: ["v names", "variable names;", "variables= names", "var names;"],
        answer: "var names;"
    },
    {
        question: "Question 5-- Which of the following function of Array object calls a function for each element in the array?",
        options: ["concat()", "every()", "filter()", "forEach()"],
        answer: "forEach()"
    },
    {
        question: "Question 6-- Which function is used to serialize an object into a JSON string in Javascript?",
        options: ["stringify()", "parse()", "convert()", "changeme()"],
        answer: "stringify()"
    }
];


var viewHighscore = document.querySelector(".highscore");
var time = document.querySelector(".Time");
var startButton = document.querySelector(".StartButton");
var goBackbtn = document.querySelector(".goBack");
var clearbtn = document.querySelector(".clearHighscore");
var listScore = document.querySelector("#listScore");
var highscoreCount = document.querySelector("#highCount");
var instruction = document.getElementById('inst');
var titleQ = document.getElementById('QuestionTitle');
var initial = document.getElementById('initial');
var submitbtn = document.getElementById('submit')
var highscoreOutput = document.getElementById('outputscore')
var option = document.querySelectorAll('.options');
option.forEach(element => element.addEventListener("click", Test))

var timercount;
var timer;
time.textContent = "60"
var currentQuestion = 0;
var scoreCount = 0;
var listOfScores= [];


//var enteredInitials;


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

function refresh(){
location.reload();
Done.style.display = 'none';
highscore.style.display = 'none';

}
function startQuiz() {
    startButton.style.display = 'none';
    instruction.style.display = 'none';
    console.log("click event happening");
    timercount = 60;
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
        timercount -=10
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

    submitClick();
}


function submitClick() {
    submitbtn.addEventListener("click", highscorePage);
    };


function highscorePage(event) {
    event.preventDefault();
    initialText= initial.value;

    if (!initialText) {
        alert("Please enter initials to proceed");
    } else {

        Done.style.display = "none"
        //listitem.style.display = 'none';
        highscore.style.display= 'block';
        initialText= initial.value;

        var savedScore = localStorage.getItem("high scores");
        var scoresArray;

        if (savedScore === null) {
            scoresArray = [];
        } else {
            scoresArray = JSON.parse(savedScore)
        }

        var userscore = {
            initial: initial.value,
            score: scoreCount
        };

        console.log(userscore);
        scoresArray.push(userscore);

        var scoresString = JSON.stringify(scoresArray);
        window.localStorage.setItem("high scores", scoresString);

        ShowhighscorePage();
    }
};

function ShowhighscorePage() {
        
        var getSaved = localStorage.getItem("high scores");

        if (getSaved === null) {
            return;
        }
        console.log(getSaved);

        var stored = JSON.parse(getSaved);

        for(i=0; i<stored.length; i++) {
            var eachScore = document.createElement("li");
            
            eachScore.innerHTML = stored[i].initial + ": " + stored[i].score;
            listScore.appendChild(eachScore);
        }
/*
    var currentScore = document.getElementById("outputscore");
       // currentScore.innerHTML = "Current Score for " + (initialText)+ " :";
        currentScore.innerText = "Current Score for " + (initialText)+ " : " + scoreCount;
*/
        buttonClicks();
}

function buttonClicks(){
    if (goBackbtn.addEventListener("click", refresh)) {
        console.log("back was clicked");
    } else if (clearbtn.addEventListener("click", clearScore)){
        console.log("clear highscore was clicked");
    }
};

function clearScore() {
    highscoreCount.textContent= GameOver[scoreCount];
    window.localStorage.removeItem("high scores");
    listScore.innerHTML = "Cleared Scores!!!! 🙌🙌🙌";
}
/*
function listtodo() {
    listScore.innerHTML = "";
    highscoreCount.textContent = listScore.length;

    for (var i = 0; i<listScore.length; i++) {
        var listIt = listOfScores[i];
        var li = document.createElement("li");
        li.textContent = listIt;
        listScore.appendChild(li);
    }
};

function init() {
    var scored = JSON.parse(localStorage.getitem("listOfScores"));

    if (scored !== null) {
        listOfScores = scored;
    }
    listtodo();
}
*/
function storelist() {
    var scored = JSON.parse(localStorage.getitem("highscore"));
}
