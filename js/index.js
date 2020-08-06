const playButton = document.getElementById('playButton');
const closeButton = document.getElementById('close');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const game = document.getElementById('game');
const timerMilliseconds = document.getElementById('milliseconds');
const timerHundreds = document.getElementById('hundreds');

timerMilliseconds.innerHTML = "00";
timerHundreds.innerHTML = "00";

playButton.addEventListener('click', function() {
    playButton.style.display = 'none';
    game.style.display = 'unset';
});

closeButton.addEventListener('click', function() {
    playButton.style.display = 'unset';
    game.style.display = 'none';
});

const startingSeconds = 3;
let time = startingSeconds;
const countdown = document.getElementById('countdown');

let randomTiming = Math.floor(Math.random() * 4001);

function updateCountdown() {
    let seconds = time;
    while (time !== 0) {
        time--;
        countdown.textContent = seconds;
        countdown.style.color = 'red';
    }
    if (time === 0) {
        countdown.textContent = 'GO';
        countdown.style.color = 'green';
    }
    return time;
}

function resetCountdown() {
    time = startingSeconds;
    clearTimeout(interval);
    countdown.textContent = ' ';
}

let hundreds = 0, milliseconds = 0;

function timer() {
    hundreds++;
    if (hundreds === 100) {
        hundreds = 1;
        milliseconds++;
    }
    if (milliseconds < 10) {
        timerMilliseconds.innerHTML = "0" + milliseconds;
    }
    else {
        timerMilliseconds.innerHTML = milliseconds;
    }
    if (hundreds < 10) {
        timerHundreds.innerHTML = "0" + hundreds;
    }
    else {
        timerHundreds.innerHTML = hundreds;
    }
}

function timerStop() {
    clearInterval(timerInterval);
}

function timerReset() {
    clearInterval(timerInterval);
    milliseconds = 0;
    hundreds = 0;
    timerMilliseconds.innerHTML = "0" + milliseconds;
    timerHundreds.innerHTML = "0" + hundreds;
}

startButton.addEventListener('click', function() {
    interval = setTimeout(updateCountdown, randomTiming);
    if (updateCountdown() == 0) {
        timerInterval = setInterval(timer, 10);
    }
});

stopButton.addEventListener('click', function() {
    resetCountdown();
    timerStop();
});

resetButton.addEventListener('click', function() {
    timerReset();
})
