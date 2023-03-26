const inputSliderEl = document.querySelector("#font-size-control");
const incrTextEl = document.querySelector("#text");

incrTextEl.style.fontSize = inputSliderEl.value + "px";

inputSliderEl.addEventListener("input", (event) => {
  incrTextEl.style.fontSize = event.currentTarget.value + "px";
});
