'use strict';

// Pedir 6 numeros al usuario y agregarlos a un array
let arr = new Array(6);

for (let i = 0; i < arr.length; i++) {
  arr[i] = parseInt(prompt('Introduzca un numero: '));
}
// Mostramos el array por la consola
console.log(arr);
// Mostramos en el cuerpo de la página
document.write('<h1>Elementos del array</h1>');
arr.forEach((num, i) => {
  document.write(`<strong>${num}</strong></br>`);
});
