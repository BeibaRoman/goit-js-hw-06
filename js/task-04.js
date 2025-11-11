const refs = {
  buttonDecEl: document.querySelector("[data-action='decrement']"),
  buttonIncEl: document.querySelector("[data-action='increment']"),
  valueEl: document.querySelector("#value"),
};

let counterValue = 0;

refs.buttonIncEl.addEventListener("click", () => {
  counterValue += 1;
  refs.valueEl.textContent = counterValue;
});

refs.buttonDecEl.addEventListener("click", () => {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
});
