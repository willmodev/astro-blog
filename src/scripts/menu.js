
const hamburguer = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburguer.addEventListener("click", () => {
    navLinks.classList.toggle("expanded");
   hamburguer.classList.toggle("active");
});