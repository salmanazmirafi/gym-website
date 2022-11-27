/*=============== SHOW MENU ===============*/
const navManu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navManu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navManu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

/*=============== CALCULATE JS ===============*/

/*=============== EMAIL JS ===============*/
