'use strict'

/*
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
PLUS: Si los numeros no son un numero o son menores o iguales a cero, nos los vuelva a pedir
*/

let numero1 = parseInt(prompt('Introduce el primer numero', 0))
let numero2 = parseInt(prompt('Introdu<ce el segundo numero', 0))

if (typeof numero1 === 'number' && typeof numero2 === 'number') {
  if (numero1 == numero2) {
    alert('LOS NUMEROS SON IGUALES')
  } else if (numero1 > numero2) {
    alert('EL NUMERO MAYOR ES: ' + numero1)
    alert('EL NUMERO MENOR ES: ' + numero2)
  } else if (numero2 > numero1) {
    alert('EL NUMERO MAYOR ES: ' + numero2)
    alert('EL NUMERO MENOR ES: ' + numero1)
  } else {
    alert('INTRODUCE NUMEROS CORRECTOS')
  }
} else {
  alert('El tipo de dato ingresado no es valido')
}
