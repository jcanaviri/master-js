'use strict';

const changeColor = (newColor) => {
  box.style.background = newColor;
}

let box = document.getElementById('mi-caja');
box.innerHTML = `Texto agregado con JS`;
box.style.background = '#2c2c2c';
box.style.padding = '20px';
box.style.color = 'white';
box.className = 'new-class';
console.log(box);
