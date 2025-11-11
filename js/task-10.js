function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const input = document.querySelector("[type='number']");
const field = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  const value = Number(input.value);
  const boxes = createBoxes(value);

  if (!value || value < 1) {
    alert("Please enter a positive number!");
    return;
  }

  field.append(...boxes);
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  return boxes;
}

function destroyBoxes() {
  input.value = "";
  field.innerHTML = "";
}
