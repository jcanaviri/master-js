'use strict';

let btn = document.querySelector('#btn');

function changeColor() {
  let bg = btn.style.background;
  if (bg == 'green') {
    btn.style.background = 'red';
  } else {
    btn.style.background = 'green';
  }
  return true;
}
