var timeLeft = 75;
var quizTimerEl = document.getElementById("quiz-timer");
var startBtn = document.getElementById("start-btn");
var introEl = document.getElementById("intro");
var questionsEl = document.getElementById("questions");
var counter = 1;

// answer buttons for question one
var answerA1 = document.getElementById("answer1a");
var answerB1 = document.getElementById("answer1b");
var answerC1 = document.getElementById("answer1c");
var answerD1 = document.getElementById("answer1d");

// answer buttons for question two
var answerA2 = document.getElementById("answer2a");
var answerB2 = document.getElementById("answer2b");
var answerC2 = document.getElementById("answer2c");
var answerD2 = document.getElementById("answer2d");

// answer buttons for question three
var answerA3 = document.getElementById("answer3a");
var answerB3 = document.getElementById("answer3b");
var answerC3 = document.getElementById("answer3c");
var answerD3 = document.getElementById("answer3d");



// This function starts the timer.
function startTimer() {
    var quizTimer = setInterval(function() {
        timeLeft = timeLeft-1
        quizTimerEl.textContent = timeLeft
        if(timeLeft <=0) {
            clearInterval(quizTimer);
        }
        
    
           
        },1000)
}
// This function starts the quiz and enables the startTimer function.
function startQuiz() {
    console.log("hello")
    startTimer();
    introEl.classList.add("hide")
    questionsEl.classList.remove("hide")
    
}
function start () {

}
startBtn.addEventListener("click", startQuiz)
