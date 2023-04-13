const song = document.getElementById("song");
const playBtn = document.querySelector(".player-inner");
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
const rangeBar = document.querySelector(".range");
let isPlaying = true;
playBtn.addEventListener("click", playPause);

function playPause() {
    if (isPlaying) {
        song.play();
        playBtn.innerHTML = `<ion-icon name="pause"></ion-icon>`;
        isPlaying = false;
    }
    else {
        song.pause();
        playBtn.innerHTML = `<ion-icon name="play" class="play-icon" ></ion-icon>`;
        isPlaying = true;
    }
}
function displayTimer() {
    const { duration, currentTime } = song;
    rangeBar.max = duration;
  rangeBar.value = currentTime;
    remainingTime.textContent = formatTimer(currentTime);
    if (!duration) {
      durationTime.textContent = "00:00";
    } else {
      //durationTime.textContent = formatTimer(duration);
    }
    if (currentTime == rangeBar.max){ playBtn.innerHTML = `<ion-icon name="play" class="play-icon" ></ion-icon>`; isPlaying = true;}
}
function formatTimer(number) {
    const minutes = Math.floor(number / 60);
    const seconds = Math.floor(number - minutes * 60);
    return `${minutes < 10 ? "0" + minutes : minutes}:${
        seconds < 10 ? "0" + seconds : seconds
      }`;
  }
  rangeBar.addEventListener("change", handleChangeBar);
function handleChangeBar() {
  song.currentTime = rangeBar.value;
}
displayTimer();
setInterval(displayTimer, 1000);