const person = document.getElementById("person");
const img = document.getElementById("person-img");

const BEFORE_SRC = "imagebefore.png";
const AFTER_SRC = "imageafter.png";

let timeoutId = null;

person.addEventListener("click", () => {
  // falls man schnell mehrfach klickt: Timer zurücksetzen
  if (timeoutId) clearTimeout(timeoutId);

  person.classList.add("hit");
  img.src = AFTER_SRC;

  timeoutId = setTimeout(() => {
    person.classList.remove("hit");
    img.src = BEFORE_SRC;
    timeoutId = null;
  }, 500); // 0.5 Sekunden
});
