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

let mareData = null;
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
      chosenDate = selectedDates[0];
      startBtn.removeAttribute('disabled');
      startBtn.addEventListener('click', timerOn);
      dateInput.style.borderColor = '#569ff7';
    }
  },
};
flatpickr('#datetime-picker', options);
