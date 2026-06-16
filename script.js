window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if(window.scrollY > 50){
    navbar.style.background = "rgba(0,0,0,0.85)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.3)";
  }
});

// Mobile menu toggle open/close
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

if (mobileMenu && navMenu) {
  mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    mobileMenu.classList.toggle("is-active"); // Animation effects ke liye
  });
}
