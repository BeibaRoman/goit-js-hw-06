const categoriesItemEl = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesItemEl.length}`);

categoriesItemEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
