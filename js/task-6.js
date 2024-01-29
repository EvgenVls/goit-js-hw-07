const input = document.querySelector('input');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('.boxes');
let inputValue = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let boxesColection = ''
  for (let i = 0; i < amount; i++) {
    boxesColection += `<div style="width: ${30 + 10 * i}px; height: ${(30 + 10 * i)}px; background-color: ${getRandomHexColor()};"></div>`;
    // const divBox = document.createElement('div');
    // divBox.width = `${(30 + 10 * i)}px`;
    // divBox.height = `${(30 + 10 * i)}px`;
    // divBox.style.backgroundColor = getRandomHexColor();
    // divBoxes.;
  }
  divBoxes.insertAdjacentHTML('afterbegin', boxesColection);
  console.log(boxesColection);
}

function destroyBoxes() {
  // divBoxes.innerHTML() = "";
}

input.addEventListener('change', event => inputValue = event.target.value);

create.addEventListener('click', () => {
  
  if (inputValue > 0 && inputValue <= 100) {
  createBoxes(inputValue);
}
})

destroy.addEventListener('click', destroyBoxes());