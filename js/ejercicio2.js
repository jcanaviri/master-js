let sum = 0;
let counter = 0;
let number = 0;

do {
  number = parseInt(prompt('Introduce un numero; para parar introduce -1'));
  if (isNaN(number)) {
    number = 0;
  } else if (number >= 0) {
    sum += number;
    counter++;
  }
} while (number >= 0);

console.log(`La suma de los numeros es ${sum}`);
console.log(`El promedio de los numeros es ${sum/counter}`)
