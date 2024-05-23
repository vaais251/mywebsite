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

let map = L.map("map").setView([35.2889769, 75.640937], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([35.2889769, 75.640937])
  .addTo(map)
  .bindPopup("ADVENTURE SARAI HOTEL SKARDU")
  .openPopup();
