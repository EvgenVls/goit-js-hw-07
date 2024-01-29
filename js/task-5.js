const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const color = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener('click', event => {
  const colorValue = getRandomHexColor();
  body.style.backgroundColor = colorValue;
  color.innerText = colorValue;
}) 



