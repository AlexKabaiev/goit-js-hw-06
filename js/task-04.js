//Создай переменную counterValue в которой будет храниться текущее значение счетчика
//и инициализируй её значением 0.
//Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
//Обновляй интерфейс новым значением переменной counterValue.
let counterValue = 0;
const counter = document.querySelector("#value");
const targetButtonPlus = document.querySelector(
  'button[data-action="increment"]'
);
const targetButtonMinus = document.querySelector(
  'button[data-action="decrement"]'
);
targetButtonPlus.addEventListener("click", () => {
  counterValue = counterValue + 1;
  counter.textContent = counterValue;
});

targetButtonMinus.addEventListener("click", () => {
counterValue = counterValue - 1;
counter.textContent = counterValue;
});
