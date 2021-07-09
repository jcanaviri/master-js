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

// Guardando objetos en localStorage
let user = {
  name: 'Josue',
  email: 'email@example.com',
};

localStorage.setItem('user', JSON.stringify(user));

let myUser = JSON.parse(localStorage.getItem('user'));

document.querySelector('#user').innerHTML = `${myUser.name} - ${myUser.email}`;

localStorage.removeItem('user');
