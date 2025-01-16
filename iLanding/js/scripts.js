document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("mainNavbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      navbar.classList.remove("fixed-top"); // Detach the navbar from the top
    } else {
      navbar.classList.remove("scrolled");
      navbar.classList.add("fixed-top"); // Attach it back to the top
    }
  });
});
