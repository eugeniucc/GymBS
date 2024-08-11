const headerMobileBtn = document.querySelector(".header__mobile-btn");
const headerMobileDots = document.querySelector(".header__mobile-btn--img");
const mobileMenu = document.querySelector(".mobile__menu");

headerMobileBtn.addEventListener("click", () => {
  headerMobileDots.classList.toggle("hide");
  headerMobileBtn.classList.toggle("active");
  document.body.classList.toggle("freeze");
  mobileMenu.classList.toggle("active");
});

const mobileLinks = document.querySelectorAll(".mobile__link");
const arrMobileLinks = [...mobileLinks];

arrMobileLinks.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionID = el.getAttribute("data-target");
    const section = document.getElementById(sectionID);
    if (section) {
      section.scrollIntoView();
      headerMobileDots.classList.toggle("hide");
      headerMobileBtn.classList.toggle("active");
      document.body.classList.toggle("freeze");
      mobileMenu.classList.toggle("active");
    }
  });
});
