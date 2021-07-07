'use strict';

// Pedir 6 numeros al usuario y agregarlos a un array
let arr = new Array(6);

const showArray = (heading, arr) => {
  document.write(`<h3>${heading}</h3>`);
  arr.forEach((num) => {
    document.write(`<strong>${num}</strong></br>`);
  });
};

for (let i = 0; i < arr.length; i++) {
  arr[i] = parseInt(prompt('Introduzca un numero: '));
}

// Mostramos en el cuerpo de la página
showArray('Elementos del array', arr);

// Ordenamos el array
arr.sort();
showArray('Ordenando los elementos', arr);

// Mostramos los elementos en orden reverso
arr.reverse();
showArray('Inverso de los elementos', arr);

document.write(`<h3>El array tiene ${arr.length}</h3>`);

// Bucamos un elemento en el array
let element = parseInt(prompt('Que numero desea buscar: ', 0));
let search = arr.findIndex(item => item == element);

if (search && search !== -1) {
  document.write(
    `<h3>El elemento esta en la posicion ${search}</h3>`
  );
} else {
  document.write(`El elemento no existe`)
}
