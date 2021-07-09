'use strict';

// Local Storage
if (typeof Storage != 'undefined') {
  console.log('Local Storage is available');
} else {
  console.log('no');
}

// Almacenando datos en localStorage
localStorage.setItem('eggs', '42');

// Extraer un dato de localStorage
let value = localStorage.getItem('eggs');
console.log(value);

document.querySelector('#paragraph').innerHTML = value;
