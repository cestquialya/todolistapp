let timeLeft = 25 * 60; // 25 minutes in seconds
let timerId = null;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startTimer');
const resetButton = document.getElementById('resetTimer');

const hamburger = document.querySelector('.hamburger-icon');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Timer functionality
function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (timerId === null) {
        timerId = setInterval(() => {
            timeLeft--;
            updateTimer();
            if (timeLeft === 0) {
                clearInterval(timerId);
                timerId = null;
                alert('Time is up! Take a break! ');
            }
        }, 1000);
        startButton.textContent = 'Pause';
    } else {
        clearInterval(timerId);
        timerId = null;
        startButton.textContent = 'Start Timer';
    }
}

function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    timeLeft = 25 * 60;
    updateTimer();
    startButton.textContent = 'Start Timer';
}
startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
updateTimer();