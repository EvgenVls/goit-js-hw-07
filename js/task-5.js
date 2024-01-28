function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
btn.addEventListener('click', event => {
  const body = document.querySelector('body');
  const color = document.querySelector('.color');
  const colorValue = getRandomHexColor();
  body.style.backgroundColor = colorValue;
  color.innerText = colorValue;
  console.log(colorValue);
}) 



