'use strict';

window.addEventListener('load', () => {
  let heading = document.querySelector('h1');
  let counter = 0;

  // Ejecucion constante
  let time = setInterval(() => {
    heading.textContent = counter;
    console.log(`Set interval ${counter++} ejecutado`);
  }, 1000);

  // Solo una vez
  setTimeout(() => {
    console.log('Set time out');
  }, 1000);

  let btnStop = document.querySelector('.btn-stop');
  btnStop.addEventListener('click', () => {
    clearInterval(time);
    console.log('Tiempo detenido');
  });

  let btnStart = document.querySelector('.btn-start');
  btnStart.addEventListener('click', () => {
    setInterval(() => {
      heading.textContent = counter++;
      console.log(`Reiniciado ${counter}`)
    }, 1000);
  });
});
