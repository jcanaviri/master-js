'use strict';

// Generar todos los impares entre 2 numeros
// introducidos por el usuario

let num1 = parseInt(prompt('Introduce un numero', 0));
let num2 = parseInt(prompt('Introduce un numero', 0));

if (isNaN(num1) || isNaN(num2) || num1 >= num2) {
  alert('No se puede realizar la operacion');
} else {
  for (let i = num1; i <= num2; i++) {
    if (i % 2 !== 0) {
      document.write(`<p>${i}</p>`)
    }
  }
}
