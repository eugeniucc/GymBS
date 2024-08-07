// ADV CARDS

const cardBox = document.querySelectorAll(".adv_wrapper-card--box");
const cardBg = document.querySelectorAll(".adv_wrapper-card--bg");

const arrCardBg = [...cardBg];
const arrCardBox = [...cardBox];

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

// PROGRAM CARDS

const programCards = document.querySelectorAll(".subscribe_card-btn");
const arrProgramCards = [...programCards];

arrProgramCards.forEach((card) => {
  card.addEventListener("click", () => {
    popup.classList.add("active");
    popupOverlay.classList.add("active");
  });
});
