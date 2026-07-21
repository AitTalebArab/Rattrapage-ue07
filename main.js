// =========================================================
// Menu mobile : ouverture / fermeture de la navigation
// =========================================================
const burger = document.getElementById("burger");
const mainNav = document.getElementById("main-nav");

if (burger && mainNav) {
  burger.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    burger.setAttribute("aria-expanded", isOpen);
  });

  // Ferme le menu si on clique sur un lien (mobile)
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

// =========================================================
// Effet au scroll : header transparent -> blanc
// =========================================================
const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
  window.addEventListener("scroll", () => {
    // Si on descend de plus de 50 pixels, on ajoute la classe "scrolled"
    if (window.scrollY > 50) {
      siteHeader.classList.add("scrolled");
    } else {
      // Si on remonte tout en haut, on retire la classe
      siteHeader.classList.remove("scrolled");
    }
  });
}