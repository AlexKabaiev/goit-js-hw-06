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

const ListOfingredientsEl = document.querySelector("#ingredients");
let fragment = new DocumentFragment();
for (const value of ingredients) {
  const itemOfIngredientsEl = document.createElement("li");
  itemOfIngredientsEl.classList.add("item");
  itemOfIngredientsEl.textContent += value;
  fragment.appendChild(itemOfIngredientsEl);
}

document.querySelector("#ingredients").append(fragment);
