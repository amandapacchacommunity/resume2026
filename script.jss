document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card, .metric-card, .skill-card, .item");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-3px)";
      card.style.transition = "transform 0.2s ease";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });
});
