// BANNER

const bannerWrapper = document.querySelector(".banner_wrapper");
const bannerOverlay = document.querySelector(".banner_overlay");

bannerWrapper.addEventListener("mouseenter", () => {
  bannerOverlay.classList.add("active");
});
bannerWrapper.addEventListener("mouseleave", () => {
  bannerOverlay.classList.remove("active");
});

// CARDS

const cardBox = document.querySelectorAll(".adv_wrapper-card--box");
const cardBg = document.querySelectorAll(".adv_wrapper-card--bg");

const arrCardBg = [...cardBg];
const arrCardBox = [...cardBox];
console.log(arrCardBox);

arrCardBg.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    el.classList.add("visible");
  });
});

arrCardBox.forEach((box) => {
  arrCardBg.forEach((bg) => {
    box.addEventListener("mouseleave", () => {
      if (bg.classList.contains("visible")) {
        bg.classList.remove("visible");
      }
    });
  });
});
