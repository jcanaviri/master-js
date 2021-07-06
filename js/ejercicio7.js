'use strict';

let num1 = parseInt(prompt('Primer numero', 0));
let num2 = parseInt(prompt('Segundo numero', 0));

if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
  alert('No se puede realizar la operacion');
} else {
  document.write(`<p>La suma es: ${num1 + num2}</p>`);
  document.write(`<p>La resta es: ${num1 - num2}</p>`);
  document.write(`<p>La multiplicacion es: ${num1 * num2}</p>`);
  document.write(`<p>La division es: ${num1 / num2}</p>`);
}
