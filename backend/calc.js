'use strict';

let args = process.argv.slice(2);

let num1 = parseInt(args[0])
let num2 = parseInt(args[1])

let template = `ADD: ${num1 + num2}
SUBS: ${num1 - num2}
MULT: ${num1 * num2}
DIV: ${num1 / num2}`;

console.log(template);
