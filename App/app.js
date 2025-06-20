let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let restartButton = document.getElementById("restart");
let timerDisplay = document.getElementById("timer");

let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

function updateTimerDisplay() {
  timerDisplay.textContent =
    `${String(minutes).padStart(2, '0')}
  :
  ${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(function () {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          isRunning = false;
          alert("Pomodoro terminé !");
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }
      updateTimerDisplay();
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function restartTimer() {
  clearInterval(timer);
  isRunning = false;
  minutes = 25;
  seconds = 0;
  updateTimerDisplay();
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
restartButton.addEventListener("click", restartTimer);

updateTimerDisplay();
