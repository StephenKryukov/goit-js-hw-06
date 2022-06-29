// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector("#value");

const decrement = () => {
  spanEl.textContent = counterValue -= 1;
};
const increment = () => {
  spanEl.textContent = counterValue += 1;
};

decrementBtnEl.addEventListener("click", decrement);
incrementBtnEl.addEventListener("click", increment);
