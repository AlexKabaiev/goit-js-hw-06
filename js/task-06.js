// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
//проверяет его содержимое на правильное количество введённых символов.
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }
// #validation-input.valid {
//   border-color: #4caf50;
// }
// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputEl = document.querySelector("#validation-input");
const inputLength = inputEl.dataset.length;

inputEl.addEventListener("blur", (event) => {
    const text = event.currentTarget.value.trim();
  if (text.length === +inputLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});


// const inputVal = document.querySelector("#validation-input");

// const totalLenght = inputVal.getAttribute("data-length");
// const intTotalLenght = parseInt(totalLenght, 10);

// inputVal.addEventListener("blur", () => {
//   if (inputVal.value.length === intTotalLenght) {
//     inputVal.classList.remove("invalid");
//     inputVal.classList.add("valid");
//   }
//   if (inputVal.value.length === 0) {
//     inputVal.classList.remove("valid");
//     inputVal.classList.remove("invalid");
//   }
//   if (
//     inputVal.value.length !== intTotalLenght &&
//     inputVal.value.length !== 0
//   ) {
//     inputVal.classList.add("invalid");
//   }
// });
