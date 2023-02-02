//Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//подставляет его текущее значение в span#name - output.Если инпут пустой,
//в спане должна отображаться строка "Anonymous".
/* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */

// let input = document.querySelector("#name-input");
// let nameOutput = document.querySelector("#name-output");

// input.oninput = () => {
//   if (input.value === "") {
//     nameOutput.textContent = "Anonymous";
//   } else {
//     nameOutput.textContent = input.value.trim();
//   }
// };

const textInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  textInput.value === ""
    ? (nameOutput.textContent = "Anonymous")
    : (nameOutput.textContent = event.currentTarget.value.trim());
});
