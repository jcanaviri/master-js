'use strict';

let num1 = parseInt(prompt('De que numero quieres la tabla', 1));

for (let i = 1; i <= 10; i++) {
  document.write(`<p>${num1} x ${i} = ${num1 * i}</p>`);
}
