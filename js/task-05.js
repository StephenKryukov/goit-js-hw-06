// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const name = () => {
  output.textContent = input.value;
  if (input.value === "") {
    return (output.textContent = "Anonymous");
  }
};

input.addEventListener("input", name);
