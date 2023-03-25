const inputEl = document.querySelector("#validation-input");

const dataLength = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", () => {
  if ([...inputEl.value].length !== dataLength) {
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.replace("invalid", "valid");
  }
});
