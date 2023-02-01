//Напиши скрипт, который для каждого элемента массива ingredients:
//Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//Добавит название ингредиента как его текстовое содержимое.
//Добавит элементу класс item.
//После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Первый вариант
const ingredientsList = document.querySelector("#ingredients");
const itemsList = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
});
ingredientsList.append(...itemsList);

//Второй вариант
// const ListOfingredientsEl = document.querySelector("#ingredients");
// let fragment = new DocumentFragment();
// for (const value of ingredients) {
//   const itemOfIngredientsEl = document.createElement("li");
//   itemOfIngredientsEl.classList.add("item");
//   itemOfIngredientsEl.textContent += value;
//   fragment.appendChild(itemOfIngredientsEl);
// }
// document.querySelector("#ingredients").append(fragment);
