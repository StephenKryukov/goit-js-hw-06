// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const counterValue = document.querySelector("#value");

const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');

const decrement = () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};
const increment = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};

decrementBtnEl.addEventListener("click", decrement);
incrementBtnEl.addEventListener("click", increment);
