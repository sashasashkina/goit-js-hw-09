import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBtn.setAttribute('disabled', '');

let newData = null;
let timeR = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future');
      startBtn.setAttribute('disabled', '');
      dateInput.style.borderColor = 'red';
    } else {
      newData = selectedDates[0];
      startBtn.removeAttribute('disabled');
      startBtn.addEventListener('click', timerOn);
      dateInput.style.borderColor = '#569ff7';
    }
  },
};

flatpickr('#datetime-picker', options);

function timerOn() {
  timeR = setInterval(() => {
    startBtn.setAttribute('disabled', '');
    dateInput.setAttribute('disabled', '');

    const currentTime = Date.now();
    const deltaTime = newData - currentTime;

    if (deltaTime < 1000) {
      clearInterval(timeR);
      startBtn.removeAttribute('disabled');
    }

    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    appClockInterface({ days, hours, minutes, seconds });
  }, 1000);
}

function appClockInterface({ days, hours, minutes, seconds }) {
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addStringZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addStringZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addStringZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addStringZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
function addStringZero(value) {
  return String(value);
  //   .padStart(2, '0');
}
