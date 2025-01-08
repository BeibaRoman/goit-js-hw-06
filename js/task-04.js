const refs = {
  incrementButton: document.querySelector('[data-action="increment"]'),
  decrementButton: document.querySelector('[data-action="decrement"]'),
  textValue: document.querySelector("#value"),
};

let counterValue = 0;

refs.incrementButton.addEventListener("click", () => {
  counterValue += 1;
  refs.textValue.textContent = counterValue;
});

refs.decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  refs.textValue.textContent = counterValue;
});
