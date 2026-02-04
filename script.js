const person = document.getElementById("person");

person.addEventListener("click", () => {
  person.classList.add("hit");
  person.textContent = "😵";

  setTimeout(() => {
    person.classList.remove("hit");
    person.textContent = "😐";
  }, 150);
});
