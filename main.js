let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// menambahkan event listener untuk menutup menu saat salah satu item di dalamnya diklik
let navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});

// menambahkan event listener untuk menutup menu saat area di luar menu diklik
document.addEventListener("click", (event) => {
  const isClickInsideNavbar = navbar.contains(event.target);
  const isClickInsideMenuIcon = menu.contains(event.target);

  if (!isClickInsideNavbar && !isClickInsideMenuIcon) {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
});
