'use strict';

// Pedir 6 numeros al usuario y agregarlos a un array
let arr = new Array(6);

const showArray = (heading, arr) => {
  document.write(`<h3>${heading}</h3>`);
  arr.forEach((num) => {
    document.write(`<strong>${num}</strong></br>`);
  });
};

for (let i = 0; i < arr.length; i++) {
  arr[i] = parseInt(prompt('Introduzca un numero: '));
}

// Mostramos en el cuerpo de la página
showArray('Elementos del array', arr);

// Ordenamos el array
arr.sort();
console.log(arr);
showArray('Ordenando los elementos', arr);
