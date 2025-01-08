const inputEl = document.getElementById("name-input");
const nameEl = document.getElementById("name-output");

inputEl.addEventListener("input", (e) => {
  nameEl.textContent = e.currentTarget.value;

  if (e.currentTarget.value === "") {
    nameEl.textContent = "Anonymous";
  }
});
