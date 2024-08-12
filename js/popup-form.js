// POPUP

const popup = document.querySelector(".popup");
const popupOverlay = document.querySelector(".popup_overlay");

// SHOW POPUP
const headershowPopup = document.querySelector(".header_subscribe");

headershowPopup.addEventListener("click", () => {
  popup.classList.add("active");
  popupOverlay.classList.add("active");
});

// CLOSE POPUP
const closePopup = document.querySelector(".popup_content-close");

popupOverlay.addEventListener("click", () => {
  popup.classList.remove("active");
  popupOverlay.classList.remove("active");
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
  popupOverlay.classList.remove("active");
});

const namePopup = document.getElementById("name");
const sendPopup = document.querySelector(".popup_wrapper-send--btn");

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    popup.classList.remove("active");
    popupOverlay.classList.remove("active");
  }
});

