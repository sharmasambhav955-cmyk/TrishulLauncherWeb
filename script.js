// Toggle hamburger layout
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

if (mobileMenu && navMenu) {
  mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
