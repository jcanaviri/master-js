'use strict';

// Pedir 6 numeros al usuario y agregarlos a un array
let arr = new Array(6);

for (let i = 0; i < arr.length; i++) {
  arr[i] = parseInt(prompt('Introduzca un numero: '));
}

console.log(arr);
