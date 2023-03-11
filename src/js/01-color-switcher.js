const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let timerId = null;
btnStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', selectColor);

function selectColor(event) {
  const body = document.querySelector('body');
  const disabledStart = document.querySelector('[data-start]');
  const enabledStop = document.querySelector('[data-stop]');
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
}

btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  const enabledStart = document.querySelector('[data-start]');
  const disabledStop = document.querySelector('[data-stop]');
  btnStop.disabled = true;
  btnStart.disabled = false;
});
