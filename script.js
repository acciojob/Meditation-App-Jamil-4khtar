//your JS code here. If required.
let video = document.createElement("video");
video.src = "video/beach.mp4";
let vidCont = document.querySelector(".vid-container");
vidCont.append(video);

let audio = document.createElement("audio");
audio.src = "sounds/beach.mp3";
let AudioCont = document.querySelector(".player-container");
AudioCont.append(audio);

let playBtn = document.querySelector(".play");

let countDown;
playBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (video.paused) {
    video.play();
    audio.play();
    playBtn.textContent = "Pause";
    startCountDown()
  } else {
    stopCountdown()
  }
});

let beachBtn = document.querySelector(".beach-btn");
let rainBtn = document.querySelector(".rain-btn");

beachBtn.addEventListener("click", (e) => {
  e.preventDefault();
  video.src = "video/beach.mp4";
  audio.src = "sounds/beach.mp3";
});
rainBtn.addEventListener("click", (e) => {
  e.preventDefault();
  video.src = "video/rain.mp4";
  audio.src = "sounds/rain.mp3";
});

let long = document.getElementById("long-mins");
let med = document.getElementById("medium-mins");
let small = document.getElementById("smaller-mins");
let timeDisplay = document.querySelector(".time-display");

long.addEventListener("click", (e) => {
  e.preventDefault();
  timeDisplay.textContent = "10:00";
  setTimeout(() => {
    video.pause();
    audio.pause();
    playBtn.textContent = "Play";
  }, 10 * 60 * 1000);
});
med.addEventListener("click", (e) => {
  e.preventDefault();
  timeDisplay.textContent = "05:00";
  setTimeout(() => {
    video.pause();
    audio.pause();
    playBtn.textContent = "Play";
  }, 5 * 60 * 1000);
});
small.addEventListener("click", (e) => {
  e.preventDefault();
  timeDisplay.textContent = "02:00";
  setTimeout(() => {
    video.pause();
    audio.pause();
    playBtn.textContent = "Play";
  }, 2 * 60 * 1000);
});

function startCountDown() {
  countDown = setInterval(() => {
    let mins = parseInt(timeDisplay.textContent.split(":")[0]);
    let secs = parseInt(timeDisplay.textContent.split(":")[1]);

    secs--;
    if (secs < 0) {
      mins--;
      secs = 59;
    }
    timeDisplay.textContent = mins + ":" + secs;
    if (timeDisplay.textContent === "0:0") {
      stopCountdown()
    }
  }, 1000);
}

function stopCountdown() {
  video.pause();
  audio.pause();
  playBtn.textContent = "Play";
  clearInterval(countdown);
}