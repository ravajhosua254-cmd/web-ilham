
const startButton = document.getElementById("startButton");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");
const musicText = document.getElementById("musicText");

const envelope = document.getElementById("envelope");
const openLetter = document.getElementById("openLetter");
const letterContent = document.getElementById("letterContent");

const heartsBg = document.getElementById("heartsBg");

let isPlaying = false;
let letterOpened = false;

// TOMBOL MASUK
startButton.addEventListener("click", async () => {
  mainContent.classList.remove("hidden");

  mainContent.scrollIntoView({
    behavior: "smooth"
  });

  try {
    await music.play();
    isPlaying = true;
    musicText.textContent = "Pause Lagu";
  } catch (error) {
    musicText.textContent = "Putar Lagu";
  }

  createHearts(12);
});

// MUSIK
musicButton.addEventListener("click", async () => {
  if (!isPlaying) {
    try {
      await music.play();
      isPlaying = true;
      musicText.textContent = "Pause Lagu";
    } catch (error) {
      musicText.textContent = "Gagal memutar";
    }
  } else {
    music.pause();
    isPlaying = false;
    musicText.textContent = "Putar Lagu";
  }
});

// SURAT
openLetter.addEventListener("click", () => {
  envelope.classList.toggle("open");

  if (!letterOpened) {
    letterOpened = true;

    setTimeout(() => {
      letterContent.classList.remove("hidden");

      letterContent.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      createHearts(15);
    }, 500);

    openLetter.textContent = "Surat Sudah Terbuka ♡";
  }
});

// ANIMASI HATI
function createHearts(amount = 5) {
  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");

      heart.className = "floating-heart";
      heart.innerHTML = Math.random() > 0.5 ? "♡" : "♥";

      heart.style.left = Math.random() * 100 + "%";
      heart.style.fontSize = (15 + Math.random() * 20) + "px";
      heart.style.animationDuration = (5 + Math.random() * 4) + "s";

      heartsBg.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 9500);
    }, i * 120);
  }
}

// HATI KECIL DI BACKGROUND
setInterval(() => {
  const heart = document.createElement("div");

  heart.className = "floating-heart";
  heart.innerHTML = "♡";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (12 + Math.random() * 12) + "px";
  heart.style.animationDuration = (8 + Math.random() * 4) + "s";

  heartsBg.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 12000);
}, 1800);
