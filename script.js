const startBtn = document.getElementById("startBtn");
const intro = document.querySelector(".intro");
const scene = document.getElementById("scene");
const content = document.querySelector(".content");
const message = document.getElementById("message");
const replayBtnContainer = document.getElementById("replayBtnContainer");
const replayBtn = document.getElementById("replayBtn");
const audio = document.getElementById("audio");

const promises = ["This one is mine… and it’s for you."];

startBtn.addEventListener("click", startExperience);
replayBtn.addEventListener("click", replayAudio);

function startExperience() {
  intro.style.display = "none";
  replayBtnContainer.classList.remove("show");
  replayBtnContainer.style.display = "none";
  scene.classList.remove("hidden");
  content.classList.remove("hidden");
  message.style.opacity = 0;

  setTimeout(() => {
    scene.style.display = "none";
    showPromises(0);
  }, 4000);
}

function showPromises(index) {
  if (index < promises.length) {
    message.textContent = promises[index];
    message.style.opacity = 1;

    setTimeout(() => {
      message.style.opacity = 0;
      setTimeout(() => showPromises(index + 1), 800);
    }, 5000);
  } else {
    message.style.opacity = 1;
    replayBtnContainer.style.display = "block";
    setTimeout(() => {
      replayBtnContainer.classList.add("show");
    }, 50);
  }
}

function replayAudio() {
  audio.pause();
  audio.currentTime = 0;
  audio.play().catch(() => {
    console.log("Audio playback started after user interaction");
  });
}
