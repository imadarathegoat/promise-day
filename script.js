const startBtn = document.getElementById("startBtn");
const intro = document.querySelector(".intro");
const scene = document.getElementById("scene");
const content = document.querySelector(".content");
const message = document.getElementById("message");
const replayBtnContainer = document.getElementById("replayBtnContainer");

const promises = [
  // "That day, we watched them promise forever...",
  // "And I kept thinking...",
  // "If I ever make a promise...",
  // "I want it to be just as real...",
  // "Just as strong...",
  // "Just as endless...",
  // "So today...",
  // "I promise to stay by your side.",
  // "No matter what...",
  // "Just like that promise we watched together...",
  "This one is mine… and it’s for you.",
];

startBtn.addEventListener("click", () => {
  intro.style.display = "none";
  replayBtnContainer.classList.add("hidden");
  replayBtnContainer.style.display = "none";
  scene.classList.remove("hidden");
  content.classList.remove("hidden");
  message.style.opacity = 0;

  setTimeout(() => {
    scene.style.display = "none";
    showPromises(0);
  }, 4000);
});

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
      replayBtnContainer.classList.add("visible");
    }, 50);
  }
}
