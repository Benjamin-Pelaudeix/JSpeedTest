const playButton = document.getElementById('playButton');
const closeButton = document.getElementById('close');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const game = document.getElementById('game');
const timerMilliseconds = document.getElementById('milliseconds');
const timerHundreds = document.getElementById('hundreds');
const millisecondsLastTimeResult = document.getElementById('millisecondsResult');
const hundredsLastTimeResult = document.getElementById('hundredsResult');
const countdown = document.getElementById('countdown');

countdown.textContent = 'STOP'
countdown.style.color = 'red'

let timerInterval

timerMilliseconds.innerHTML = "00";
timerHundreds.innerHTML = "00";

millisecondsLastTimeResult.innerHTML = "00";
hundredsLastTimeResult.innerHTML = "00";

playButton.addEventListener('click', function() {
    playButton.style.display = 'none';
    game.style.display = 'unset';
});

closeButton.addEventListener('click', function() {
    playButton.style.display = 'unset';
    game.style.display = 'none';
});



let randomTiming = Math.floor(Math.random() * 4001);

function updateCountdown() {
    let startingIn = 3;
    let start = false;
    if (startingIn === 0) {
        countdown.textContent = ' GO '
        countdown.style.color = 'green'
        start = true;
    } else {
        countdown.textContent = String(startingIn)
        startingIn--
        setTimeout(() => {
            countdown.textContent = String(startingIn)
            startingIn--
        }, 100)
    }
    return start;
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

function saveLastTime() {
    if (milliseconds < 10) {
        millisecondsLastTimeResult.innerHTML = "0" + milliseconds;
    }
    else {
        millisecondsLastTimeResult.innerHTML = milliseconds;
    }
    if (hundreds < 10) {
        hundredsLastTimeResult.innerHTML = "0" + hundreds;
    }
    else {
        hundredsLastTimeResult.innerHTML = hundreds;
    }
    
}

let random = Math.floor(Math.random() * 5001)

startButton.addEventListener('click', function() {
    countdown.textContent = 'READY'
    countdown.style.color = 'white'
    setTimeout(() => {
        countdown.textContent = 'GO'
        countdown.style.color = 'green'
        timerInterval = setInterval(timer, 10);
    }, random)
    startButton.disabled = true;
});

stopButton.addEventListener('click', function() {
    timerStop();
    saveLastTime();
    startButton.disabled = false;
    countdown.textContent = 'STOP'
    countdown.style.color = 'red'
});

stopButton.addEventListener('keypress', ev => {
    if (ev.keyCode === 32) {
        timerStop();
        saveLastTime();
        startButton.disabled = false;
    }
})

resetButton.addEventListener('click', function() {
    timerReset();
})
