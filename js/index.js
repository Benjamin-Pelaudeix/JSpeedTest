const playButton = document.getElementById('playButton');
const closeButton = document.getElementById('close');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const game = document.getElementById('game');

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

let interval = setInterval(updateCountdown, 1000000000000);

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
    clearInterval(interval);
    countdown.textContent = ' ';
}

startButton.addEventListener('click', function() {
    interval = setInterval(updateCountdown, randomTiming);
});

stopButton.addEventListener('click', function() {
    resetCountdown();
})