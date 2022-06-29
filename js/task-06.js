// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

const input = document.querySelector("#validation-input");

const checkInputValue = () => {
  if (input.value.length === Number(input.getAttribute("data-length"))) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", checkInputValue);

//console.log(Number(input.getAttribute("data-length")));
