'use strict';

const changeColor = (newColor) => {
  box.style.background = newColor;
};

let box = document.getElementById('mi-caja');
box.innerHTML = `Texto agregado con JS`;
box.style.background = '#2c2c2c';
box.style.padding = '20px';
box.style.color = 'white';
box.className = 'new-class';

// Seleccionar por etiqueta
let allDivs = document.getElementsByTagName('div');
let content = allDivs[2];
content.innerHTML = 'Cambiado en javascript';

for (let value in allDivs) {
  if (typeof allDivs[value].textContent == 'string') {
    let paragraph = document.createElement('p');
    let text = document.createTextNode(allDivs[value].textContent);
    paragraph.appendChild(text);
    document.querySelector('#mi-section').appendChild(paragraph);
  }
}

let mySection = document.querySelector('#mi-section');
let hr = document.createElement('hr');
mySection.append(hr);

// getElementsByTagName retorna un arreglo
let red = document.getElementsByClassName('red');
red[0].style.background = 'red';

let green = document.getElementsByClassName('green');
green[0].style.background = 'green';

let blue = document.getElementsByClassName('blue');
blue[0].style.background = 'blue';

