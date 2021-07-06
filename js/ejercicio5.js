'use strict';

// Mostrar todos los divisores de n

let num1 = parseInt(prompt('Introduce un numero', 0));
let divisor = 1;

while (divisor <= num1) {
  if (num1 % divisor == 0) {
    document.write(`<p>${divisor}</p>`);
  }
  divisor++;
}
