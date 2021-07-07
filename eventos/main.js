'use strict';

window.addEventListener('load', () => {
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
  });

  // Focus
  let inputField = document.getElementById('field_name');
  inputField.addEventListener('focus', () => {
    console.log('[focus] Esta en focus');
  });

  // Blur
  inputField.addEventListener('blur', () => {
    console.log('[blur] FUERA del input');
  });

  // Keydown
  inputField.addEventListener('keydown', (event) => {
    console.log('pulsada tecla', String.fromCharCode(event.keyCode));
  });

  // Keypress
  inputField.addEventListener('keypress', (event) => {
    console.log('pulsando tecla', String.fromCharCode(event.keyCode));
  });

  // Keyup
  inputField.addEventListener('keyup', (event) => {
    console.log('levantaste el dedo', String.fromCharCode(event.keyCode));
  });
});
