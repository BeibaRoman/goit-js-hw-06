const refs = {
  inputValue: document.querySelector("#name-input"),
  outputValue: document.querySelector("#name-output"),
};

refs.inputValue.addEventListener("input", (e) => {
  const value = e.target.value;

  refs.outputValue.textContent = value;

  if (value === "") {
    refs.outputValue.textContent = "Anonymous";
  }
});
