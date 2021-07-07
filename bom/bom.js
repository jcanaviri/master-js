'use strict';

document.write(`La pantalla tiene un ancho de ${window.innerWidth}px<br>`);
document.write(`La pantalla tiene un alto de ${window.innerHeight}px<br>`);

document.write(`La pantalla tiene un ancho de screen ${screen.width}px<br>`);
document.write(`La pantalla tiene un alto de screen ${screen.height}px<br>`);

console.log(window.location);

let btn = document.createElement('button');
btn.innerText = 'Google';

let body = document.getElementsByTagName('body')[0];
body.appendChild(btn);

btn.onclick = () => {
  // window.location.href = 'https://google.com';
  window.open('https://google.com');
};
