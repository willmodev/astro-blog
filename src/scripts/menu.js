

const handleHamburgerClick = () => {
    document.querySelector(".nav-links").classList.toggle("expanded");
    document.querySelector(".hamburger").classList.toggle("active");
};

document.addEventListener("astro:page-load", () => {
    document.querySelector(".hamburger").addEventListener("click", handleHamburgerClick);
});

