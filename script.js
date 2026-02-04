console.log("script.js loaded"); // <- zum Testen

const person = document.getElementById("person");
const img = document.getElementById("person-img");

const BEFORE_SRC = "imagebefore.png";
const AFTER_SRC = "imageafter.png";

let timeoutId = null;

person.addEventListener("click", () => {
  console.log("clicked");

  if (timeoutId) clearTimeout(timeoutId);

  person.classList.add("hit");

  // Cache umgehen (GitHub Pages cached manchmal hart)
  img.src = AFTER_SRC + "?v=" + Date.now();

  timeoutId = setTimeout(() => {
    person.classList.remove("hit");
    img.src = BEFORE_SRC + "?v=" + Date.now();
    timeoutId = null;
  }, 400);
});
