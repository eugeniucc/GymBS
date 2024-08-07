// BANNER

const bannerWrapper = document.querySelector(".banner_wrapper");
const bannerOverlay = document.querySelector(".banner_overlay");

bannerWrapper.addEventListener("mouseenter", () => {
  bannerOverlay.classList.add("active");
});
bannerWrapper.addEventListener("mouseleave", () => {
  bannerOverlay.classList.remove("active");
});
