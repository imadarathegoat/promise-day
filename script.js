const startBtn = document.getElementById("startBtn");
const intro = document.querySelector(".intro");
const scene = document.getElementById("scene");
const content = document.querySelector(".content");
const message = document.getElementById("message");
const replayBtnContainer = document.getElementById("replayBtnContainer");
const replayBtn = document.getElementById("replayBtn");
const audio = document.getElementById("audio");

const promises = [
  "That day, we watched them promise forever...",
  "And I kept thinking...",
  "If I ever make a promise...",
  "I want it to be just as real...",
  "Just as strong...",
  "Just as endless...",
  "So today...",
  "I promise to stay by your side.",
  "No matter what.",
  "Just like that promise we watched together...",
  "This one is mine… and it’s for you."
];

startBtn.addEventListener("click", startExperience);
replayBtn.addEventListener("click", startExperience);

function startExperience() {
  intro.style.display = "none";
  replayBtnContainer.classList.add("hidden");
  scene.classList.remove("hidden");
  content.classList.remove("hidden");
  message.style.opacity = 0;

  audio.pause();
  audio.currentTime = 0;

  setTimeout(() => {
    scene.style.display = "none";
    showPromises(0);
  }, 7000);
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
    showFinalAudio();
  }
}

function showFinalAudio() {
  message.innerHTML = `<h2 style="font-size:32px; color:#ffb6c1; animation: glow 2s infinite alternate;">
    And this one… is forever. ❤️
  </h2>`;
  
  audio.currentTime = 0;
  audio.play();

  audio.onended = () => {
    replayBtnContainer.classList.remove("hidden");
  };
}
