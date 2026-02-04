const person = document.getElementById("person");

person.addEventListener("click", () => {
  person.classList.add("hit");

  setTimeout(() => {
    person.classList.remove("hit");
  }, 150);
});

