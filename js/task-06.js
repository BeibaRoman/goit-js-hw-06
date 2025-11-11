const validationInputEl = document.querySelector("#validation-input");

validationInputEl.addEventListener("blur", (e) => {
  const input = e.target;
  const requiredLength = Number(input.dataset.length);
  const isValid = input.value.length === requiredLength;

  input.classList.remove("valid", "invalid");

  if (input.value !== "") {
    input.classList.add(isValid ? "valid" : "invalid");
  }
});
