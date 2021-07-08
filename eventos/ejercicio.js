'use strict';

window.addEventListener('load', () => {
  let form = document.querySelector('#form');
  let dashedBox = document.querySelector('.dashed');

  dashedBox.style.display = 'none';

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let name = document.querySelector('#name').value;
    let surname = document.querySelector('#surname').value;
    let age = document.querySelector('#age').value;
    
    let paragraph = document.createElement('p');
    let userData = [name, surname, age];
    userData.forEach(item => {
      paragraph.innerHTML += `${item} <br>`;
    })
    dashedBox.appendChild(paragraph);
    dashedBox.style.display = 'block';
  });
});
