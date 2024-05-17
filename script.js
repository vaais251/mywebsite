const open_btn = document.querySelector(".open");
const close_btn = document.querySelector(".close");
const nav = document.querySelector(".nav");
open_btn.addEventListener("click", function () {
  open_btn.classList.toggle("hidden");
  close_btn.classList.toggle("hidden");
  nav.style.transform = "translateX(0%)";
});

close_btn.addEventListener("click", function () {
  open_btn.classList.toggle("hidden");
  close_btn.classList.toggle("hidden");
  nav.style.transform = "translateX(-100%)";
});
