// Smooth fade-in for cards on page load
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".portal-card");
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    setTimeout(() => {
      card.style.transition = "all 0.6s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, index * 200); // stagger the animations
  });
});

// Optional: Add hover sound to buttons (like hacker clicks)
const buttonHoverSound = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    buttonHoverSound.currentTime = 0;
    buttonHoverSound.play();
  });
});
