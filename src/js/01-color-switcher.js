const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.body;

startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stoptColorChange);

stopBtn.setAttribute('disabled', '');
let timeR = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function timerForColorChange() {
  timeR = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function startColorChange() {
  timerForColorChange();

  changeBtn(startBtn, stopBtn);
}
function stoptColorChange() {
  clearInterval(timeR);

  changeBtn(stopBtn, startBtn);
}

function changeBtn(startBtn, stopBtn) {
  startBtn.disabled = true;
  stopBtn.disabled = false;
}
