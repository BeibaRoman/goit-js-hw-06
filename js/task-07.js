const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

text.style.fontSize = input.value + "px";

input.addEventListener("input", (e) => {
  text.style.fontSize = `${e.currentTarget.value}px`;
});
