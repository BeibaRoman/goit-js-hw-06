function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  amountEl: document.querySelector("#controls > input"),
  createEl: document.querySelector("[data-create]"),
  destroyEl: document.querySelector("[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

refs.createEl.addEventListener("click", onClickCreateBox);

refs.destroyEl.addEventListener("click", onClickDestroyBoxes);

function onClickCreateBox() {
  const amount = Number(refs.amountEl.value);
  if (amount > 0) {
    createBoxes(amount);
  }
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let incriment = i * 10;
    const box = document.createElement("div");
    box.style.width = `${30 + incriment}px`;
    box.style.height = `${30 + incriment}px`;
    box.style.backgroundColor = getRandomHexColor();
    refs.boxesEl.append(box);
  }
}

function onClickDestroyBoxes() {
  refs.boxesEl.innerHTML = "";
  refs.amountEl.value = "";
}
