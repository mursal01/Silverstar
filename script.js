
// Loader
window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
});

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
faders.forEach(fader => observer.observe(fader));

// Burger menu
const burger = document.querySelector(".burger");
const nav = document.querySelector(".main-nav");
burger.addEventListener("click", () => {
  nav.classList.toggle("open");
});