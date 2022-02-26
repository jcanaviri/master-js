'use strict'

// Bucle while
let year = 2018

while (year !== 1991) {
  // ejecuta esto
  console.log('Estamos en el año: ' + year)

  if (year == 2000) break

  year--
}

// Do while
let years = 30

do {
  alert('SOLO CUANDO SEA DIFERENTE A 20')
  years--
} while (years > 25)
