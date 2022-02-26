'use strict'

// Muestre todos los numeros divisores de un numero introduce en prompt
let numero = parseInt(prompt('Introduce un numero', 1))

for (let i = 1; i <= numero; i++) {
  if (numero % i == 0) {
    console.log('Divisor: ' + i)
  }
}
