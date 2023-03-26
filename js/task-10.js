const refs = {
  amountEl: document.querySelector("#controls input"),
  createEl: document.querySelector("button[data-create]"),
  destroyEl: document.querySelector("button[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};
console.log(refs.amountEl.value);

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement("div");
    element.style.width = 30 + 10 * i + "px";
    element.style.height = 30 + 10 * i + "px";
    element.style.backgroundColor = getRandomHexColor();

    refs.boxesEl.append(element);
  }
}

refs.createEl.addEventListener("click", () => {
  const amount = refs.amountEl.value;
  if (amount > 0) {
    createBoxes(amount);
  }
});

refs.destroyEl.addEventListener("click", () => {
  refs.boxesEl.innerHTML = "";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
