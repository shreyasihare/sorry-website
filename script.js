const heartsContainer = document.querySelector(".hearts");

if (heartsContainer) {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerText = "❤️";
    heart.classList.add("heart");

    // random horizontal position
    heart.style.left = Math.random() * 100 + "vw";

    // small heart size
    heart.style.fontSize = Math.random() * 8 + 10 + "px";

    // smooth floating speed
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);
  }, 400);
}
