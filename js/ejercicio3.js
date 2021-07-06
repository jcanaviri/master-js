'use strict';

// Programa que nuestra todos los numeros comprendidos
// entre los rangos que da el usuario

let num1 = 0;
let num2 = 0;
num1 = parseInt(prompt('Introduce el primer numero'));
num2 = parseInt(prompt('Introduce el segundo numero'));

if (isNaN(num1) || isNaN(num2) || num1 >= num2) {
  alert('No se puede realizar la operacion');
} else {
  for (let i = num1; i <= num2; i++) {
    document.write(`<p>${i}</p>`)
  }
}
