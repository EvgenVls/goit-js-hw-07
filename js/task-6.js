const input = document.querySelector('input');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');
let inputValue = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const divBox = document.createElement('div');
    divBox.style.width = `${(30 + 10 * i)}px`;
    divBox.style.height = `${(30 + 10 * i)}px`;
    divBox.style.backgroundColor = getRandomHexColor();
    divBoxes.append(divBox);
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = '';
}

input.addEventListener('change', event => inputValue = event.target.value);

create.addEventListener('click', () => {
  if (inputValue > 0 && inputValue <= 100) {
    destroyBoxes();
    createBoxes(inputValue);
  } else {
    alert('Enter a value from 1 to 100 inclusive!');
  }
  document.querySelector('#controls input').value = '';
})

destroy.addEventListener('click', destroyBoxes);