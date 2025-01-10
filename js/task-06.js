const input = document.querySelector("#validation-input");

input.addEventListener("blur", onCheckInput);

function onCheckInput(e) {
  const inputLength = e.currentTarget.value.length;

  if (inputLength !== Number(input.dataset.length)) {
    input.classList.add("invalid");
  } else {
    input.classList.replace("invalid", "valid");
    // input.classList.remove("valid");
  }
}
