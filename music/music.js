function playButtton() {
  let audio = document.getElementById("audio");
  audio.currentTime = 0;
  audio.volume = 0.1
  audio.play();
}

function playGameOver() {
  let audio = document.getElementById("gameover");
  audio.currentTime = 0;
  audio.volume = 0.2
  audio.play();
}

function playWin() {
  let audio = document.getElementById("win");
  audio.currentTime = 0;
  audio.volume = 0.5
  audio.play();
}

function playBackground() {
  let audio = document.getElementById("bg");
  audio.currentTime = 0;
  audio.volume = 0.02
  audio.play();
}