const display = document.getElementById('display');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const miliseconds = document.getElementById('miliseconds');
const reset = document.getElementById('btn-reset');
const stopBtn = document.getElementById('btn-stop');
const start = document.getElementById('btn-start');

let intervalId;
let milsecondsJs = 0;
let secondsJs = 0;
let minutesJs = 0;

function intervalFunc() {
    milsecondsJs++;

    miliseconds.innerHTML = milsecondsJs;

    if (milsecondsJs > 99) {
        secondsJs++;
        seconds.innerHTML = secondsJs;
        miliseconds.innerHTML = milsecondsJs = 0;
    }

    if (secondsJs > 59) {
        minutesJs++;
        minutes.innerHTML = minutesJs;
        seconds.innerHTML = secondsJs = 0;
    }

    if (minutesJs < 10) {
        minutes.innerHTML = "0" + minutesJs;
    }

    if (secondsJs < 10) {
        seconds.innerHTML = "0" + secondsJs;
    }

    if (minutesJs > 59) {
        clearInterval(intervalId);
        alert('StopWatch is stopped');
    }
}

function startInterval() {
    intervalId = setInterval(intervalFunc, 10);
}

function resetStopwatch() {
    clearInterval(intervalId);
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    miliseconds.innerHTML = '00';
    minutesJs = 0;
    secondsJs = 0;
    milsecondsJs = 0;
}

reset.addEventListener('click', resetStopwatch);

stopBtn.addEventListener('click', function () {
    clearInterval(intervalId);
});

start.addEventListener('click', startInterval);
