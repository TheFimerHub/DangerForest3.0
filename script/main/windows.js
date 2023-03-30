function gameOverWindow() {
    playGameOver()
    const winDiv = document.getElementById('game-over');
    winDiv.style.display = 'block';
    const lvlButton = winDiv.querySelector('.button-bad');
    const restartButton = winDiv.querySelector('.button-restart');
    winDiv.style.animation = 'scale-in 0.5s ease-in-out forwards';
    var stepCount = document.getElementById('step-count1');
    stepCount.textContent = counter;
    lvlButton.addEventListener('click', () => {
        playButtton()
        reloading();
    });

    restartButton.addEventListener('click', () => {
        playButtton()
        localStorage.setItem('counter', 1);
        reloading();
    });
}

function youAreWinWindow() {
    playWin()
    const winDiv = document.getElementById('win-win');
    winDiv.style.display = 'block';
    const lvlButton = winDiv.querySelector('.button-good');
    const restartButton = winDiv.querySelector('.button-restart');
    winDiv.style.animation = 'scale-in 0.5s ease-in-out forwards';
    var stepCount = document.getElementById('step-count2');
    stepCount.textContent = counter;
    lvlButton.addEventListener('click', () => {
        playButtton()
        const newCounterValue = parseInt(counterValue) + 1;
        localStorage.setItem('counter', newCounterValue);
        reloading();
    });

    restartButton.addEventListener('click', () => {
        playButtton()
        localStorage.setItem('counter', 1);
        reloading();
    });
}
