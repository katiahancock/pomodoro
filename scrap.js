let pause = false;
let zero = '';
let minute = 2;
let second = 0;
let runClock;

document.getElementById('clock').innerHTML =
    (minute + ":" + '0' + second);

function startTimer() {
    let clock = document.getElementById('clock');
    if (pause == true) {
        runClock = setInterval(countDownMinutesAndSeconds, 1000);
        pause = false;
    } else {
        second = 60;
        runClock = setInterval(countDownMinutesAndSeconds, 1000);
    }
}

function countDownMinutesAndSeconds() {
    if (second == 60 && minute > 0) {
        minute = minute - 1;
    }

    if (second >= 0) {

        second = second - 1;
    }

    if (second < 0) {
        second = 59;
        minute = minute - 1;
    }

    if (second < 10) {
        zero = 0
    } else {
        zero = '';
    }

    if (minute == 0 && second == 0) {
        clearInterval(runClock)
        clock.innerHTML = "00:00";
    }
    clock.innerHTML = minute + ":" + zero + second;

}

function pauseClock() {
    pause = true;
    clearInterval(runClock);
}

function resetTimer() {
    clearInterval(runClock);
    minute = 2;
    second = 0;
    document.getElementById('clock').innerHTML = (minute + ":" + '0' + second);
    // startTimer();
}


// updateTimerState(state) {
// if (state === init) {
// document.getElementById('start').disabled = false;
// document.getElementById('pause').disabled = true;
// document.getElementById('reset').disabled = true;
// } else if (state === timerOn) {
// document.getElementById('start').disabled = true;
// document.getElementById('pause').disabled = false;
// document.getElementById('reset').disabled = false;
// }
// }
// Makes clock show up visually - connects to CSS div
// updateTimerState(init)