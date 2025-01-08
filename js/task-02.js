const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.getElementById("ingredients");

// const makeMarkupItem = (ingredients) => {
//   return ingredients.map((ingredient) => {
//     console.log(ingredient);
//     const liEl = document.createElement("li");
//     liEl.textContent = ingredient;
//     liEl.classList.add("item");
//     return liEl;
//   });
// };

// console.log(...makeMarkupItem(ingredients));
// listEl.append(...makeMarkupItem(ingredients));

const createItemElement = (ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  return itemEl;
};

const markupItem = ingredients.map(createItemElement);
// console.log("🚀 ~ markupItem:", ...markupItem);
listEl.append(...markupItem);
