//Напиши скрипт создания и очистки коллекции элементов.
//Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку
//Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

//Создай функцию createBoxes(amount), которая принимает один параметр - число.
//Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

//Размеры самого первого <div> - 30px на 30px.
//Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
//Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls").firstElementChild;
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

let amountBoxes;
input.addEventListener("blur", () => {
  amountBoxes = input.value;
});

const createBoxes = (amount) => {
  const sizeBoxes = 30;
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.width = `${sizeBoxes + 10 * i}px`;
    boxEl.style.height = `${sizeBoxes + 10 * i}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    divBoxes.append(boxEl);
  }
};

btnCreate.addEventListener("click", () => {
  createBoxes(amountBoxes);
});

const destroyBoxes = () => {
  divBoxes.innerHTML = "";
};

btnDestroy.addEventListener("click", destroyBoxes);


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const create = document.querySelector("button[data-create]");
// const destroy = document.querySelector("button[data-destroy]");
// const boxes = document.querySelector("#boxes");
// const input = document.querySelector("input");

// const createBoxes = (amount) => {
//   amount = input.value;
//   const arr = new Array(Number(amount)).fill("");
//   const markup = arr
//     .map((value, index) => {
//       value +
//         `<div style=
//     width: ${30 + index * 10}px
//     height: ${30 + index * 10}px
//     backgroundcolor: ${getRandomHexColor()}>
//     </div>`;
//     })
//     .join("");
//   boxes.insertAdjacentHTML("beforeend", markup);
// };

// function destroyBoxes() {
//   boxes.innerHTML = "";
//   input.value = "";
// }

// create.addEventListener("click", createBoxes);
// destroy.addEventListener("click", destroyBoxes);

