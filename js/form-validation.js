document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("#phone");
  const iti = intlTelInput(input, {
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input/build/js/utils.js",
    initialCountry: "ru",
  });
});
