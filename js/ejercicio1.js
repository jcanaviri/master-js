'use strict';

// Pedir 2 numeros al usuario y decir cual es mayor y cual el menor o si son iguales
// Plus validar que si sea un numero y que sea mayor a 0
let number1 = 0;
let number2 = 0;

while (number1 <= 0 || number2 <= 0 || isNaN(number1) || isNaN(number2)) {
  number1 = parseInt(prompt('Introduce el primer numero: '));
  number2 = parseInt(prompt('Introduce el segundo numero: '));
}

if (number1 == number2) {
  alert('Son iguales');
} else if (number1 > number2) {
  alert(`Mayor: ${number1}`);
  alert(`Menor: ${number2}`);
} else {
  alert(`Mayor: ${number2}`);
  alert(`Menor: ${number1}`);
}
