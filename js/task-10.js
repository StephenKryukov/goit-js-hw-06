function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberOfBoxes = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const createBox = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

let boxSize = 20;
function createBoxes() {
  for (let i = 0; i < numberOfBoxes.value; i++) {
    boxSize += 10;
    let newColor = getRandomHexColor();

    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.margin = "5px";
    box.style.borderRadius = "2px";
    box.style.backgroundColor = `${newColor}`;
    createBox.append(box);
  }
}

function destroyBoxes() {
  createBox.innerHTML = "";
  boxSize = 20;
}
