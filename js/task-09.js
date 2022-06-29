//Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
//const bodyRef = document.body;
const buttonRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

const changeBodyColor = () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = bodyRef.style.backgroundColor;
};

buttonRef.addEventListener("click", changeBodyColor);
