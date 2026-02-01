const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
    response.innerHTML = "Thank you my love ❤️ I promise to do better and protect your heart 🫂";
    response.style.color = "#ff4b5c";
});

function moveNoButton() {
    const x = Math.random() * 160 - 80;
    const y = Math.random() * 160 - 80;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveNoButton);   // desktop
noBtn.addEventListener("touchstart", moveNoButton);  // mobile
