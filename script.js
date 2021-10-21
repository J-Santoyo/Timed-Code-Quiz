var timeLeft = 75;
var quizTimerEl = document.getElementById("quiz-timer")
var startBtn = document.getElementById("start-btn")
var introEl = document.getElementById("intro")
var questionsEl = document.getElementById("questions")
var counter = 1
function startTimer() {
    var quizTimer = setInterval(function() {
        timeLeft = timeLeft-1
        quizTimerEl.textContent = timeLeft
        if(timeLeft <=0) {
            clearInterval(quizTimer);
        }
        
    
           
        },1000)
}
function startQuiz() {
    console.log("hello")
    startTimer();
    introEl.classList.add("hide")
    questionsEl.classList.remove("hide")
    
}
function question1() {

}
startBtn.addEventListener("click", startQuiz)
