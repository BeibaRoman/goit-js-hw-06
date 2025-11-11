const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

// Функція для оновлення розміру
const updateFontSize = (value) => {
  text.style.fontSize = `${value}px`;
};

// Початкове значення (на випадок, якщо задане в HTML)
updateFontSize(input.value);

// Слухаємо зміну повзунка
input.addEventListener("input", () => {
  updateFontSize(input.value);
});
