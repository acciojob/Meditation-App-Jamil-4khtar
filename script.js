//your JS code here. If required.
let app = document.querySelector(".app");
let vidCont = document.querySelector(".video-container")
let AudioCont = document.querySelector(".player-container")
let pickSound = document.querySelector(".sound-picker")
let timeDuration = document.querySelector("#time-select")




let beachBtn = document.createElement("button")
beachBtn.className = "soundBtn"
let rainBtn = document.createElement("button")
rainBtn.className = "soundBtn"
beachBtn.innerHTML = `<img src="svg/beach.svg" alt="">`;
rainBtn.innerHTML = `<img src="svg/rain.svg" alt="">` 
pickSound.append(beachBtn)
pickSound.append(rainBtn)
///////////////////////////////////////////////////////////////Video
let beachVid = document.createElement("video");
let rainVid = document.createElement("video");
beachVid.src = "./video/beach.mp4"
rainVid.src = "./video/rain.mp4"
beachVid.className = "video"
rainVid.className = "video"
///////////////////////////////////////////////////////////////Audio
let beachAudio = document.createElement("audio");
let rainAudio = document.createElement("audio");
beachAudio.src = "./sounds/beach.mp3"
rainAudio.src = "./sounds/rain.mp3"

let td = document.createElement("h3"); td.className = "time-display";
td.innerHTML = "10:0";
app.append(td)

let pp = document.createElement("button"); pp.className = "play";

app.append(pp);

let currentVid, currentAudio, selectedTime = 600;
let countdown;
beachBtn.addEventListener("click", (e) => {
    e.preventDefault();
    switchMedia(beachVid, beachAudio);
    
})
rainBtn.addEventListener("click", (e) => {
    e.preventDefault();
    switchMedia(rainVid, rainAudio)

})

function switchMedia(video, audio) {
    if (currentVid && currentAudio) {
        currentVid.remove()
        currentAudio.remove()
        currentVid.pause()
        currentAudio.pause()
        
    }
    vidCont.append(video)
    AudioCont.append(audio)
    currentVid = video;
    currentAudio = audio;

    playDuration()
}

function playDuration(video, audio) {
    timeDuration.innerHTML = ""// clear previous buttons

    let smaller = document.createElement("button"); smaller.id = "smaller-mins"; 
    let med = document.createElement("button"); med.id = "medium-mins";
    let long = document.createElement("button"); long.id = "long-mins";
    timeDuration.append(smaller, med, long)
    smaller.innerHTML = "2 Minutes"
    med.innerHTML = "5 Minutes"
    long.innerHTML = "10 Minutes"

    smaller.addEventListener("click", () => setTimer(2))
    med.addEventListener("click", () => setTimer(5))
    long.addEventListener("click", () => setTimer(10))

}

function setTimer(minutes) {
    selectedTime = minutes * 60;
    td.innerHTML = `${minutes}:00`
    pp.innerHTML = "Play"
    clearInterval(countdown);
    pp.removeEventListener("click", playPause)
    pp.addEventListener("click", playPause)
}

function playPause() {
    if (pp.innerHTML === "Play") {
        currentVid.play()
        currentAudio.play()
        startCountDown(selectedTime)
        pp.innerHTML = "Pause"
    } else {
        currentVid.pause()
        currentAudio.pause()
        clearInterval(countdown)
        pp.innerHTML = "Play"
    }
}
function startCountDown(seconds) {
    clearInterval(countdown)
    countdown = setInterval(() => {
        let minutes = Math.floor(seconds / 60);
        let secs = seconds % 60;
        td.innerHTML = `${minutes}:${secs.toString().padStart(2, '0')}`;

        if (seconds === 0) {
            clearInterval(countdown);
            currentVid.pause();
            currentAudio.pause();
            pp.innerHTML = "Play";
        } else {
            seconds--;
        }
    }, 1000);
}