
//Напиши скрипт управления формой логина.

{/* <form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form> */}

//Обработка отправки формы form.login-form должна быть по событию submit.
//При отправке формы страница не должна перезагружаться.
//Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
//что все поля должны быть заполнены.
//Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
//где имя поля будет именем свойства, а значение поля - значением свойства.
//Для доступа к элементам формы используй свойство elements.
//Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

// 3.1 Додати логіку підтвердження форми.
// При натисканні на кнопку "Submit" перевіряємо введені логін і пароль:
//     * Якщо логін і пароль співпадають,
// то переходимо на нову сторінку веб-сайту (тобто видаляємо все з документа)
// і показуємо <h2> з написом "Вхід успішний";
//     * Якщо логін і пароль не вірні,
// то показуємо під формою текст <p> червоним кольором "Логін або пароль не вірні".

const correctLogin = "user@goit.com";
const correctPassword = "1111";

const loginForm = document.querySelector("#login-form");
const formError = document.querySelector(".error");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = new FormData(e.target);

  if (
    form.get("login") === correctLogin &&
    form.get("password") === correctPassword
  ) {
    closeModal();

    document.body.innerHTML = `
        <h2 style="color:green;">Вхід успішний</h2>
    `;
  } else showError();
});