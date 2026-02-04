let current = 0;
const screens = document.querySelectorAll(".screen");
const music = document.getElementById("bgMusic");

function nextScreen() {
  screens[current].classList.remove("active");
  current++;
  screens[current].classList.add("active");
  music.play();
}

// 🎵 MUSIC TOGGLE
function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// 🎆 FINAL YES
function finalYes() {
  nextScreen();
}

// 🔄 SWITCH BUTTONS
document.querySelectorAll(".switch").forEach(btn => {
  btn.addEventListener("mouseover", () => {
    const parent = btn.parentElement;
    parent.appendChild(parent.firstElementChild);
  });
});

// 🏃 RUNAWAY BUTTONS
document.querySelectorAll(".runaway").forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.position = "absolute";
    btn.style.left = Math.random() * 80 + "vw";
    btn.style.top = Math.random() * 80 + "vh";
  });
});

