'use strict';

let btn = document.querySelector('#btn-color');
let counter = 1;

btn.addEventListener('click', (event) => {
  if (counter % 2 == 0) {
    btn.style.background = 'red';
  } else {
    btn.style.background = 'green';
  }
  counter++;
});


let btnCounter = document.querySelector('#btn-counter');
let counterNumber = 1;

btnCounter.style.borderRadius = '50%';
btnCounter.style.padding = '30px';

btnCounter.addEventListener('click', (event) => {
  btnCounter.textContent = counterNumber;
  counterNumber++;
})
