'use strict';

window.addEventListener('load', () => {
  let form = document.querySelector('#form');
  let dashedBox = document.querySelector('.dashed');

  dashedBox.style.display = 'none';

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let name = document.querySelector('#name').value;
    let surname = document.querySelector('#surname').value;
    let age = parseInt(document.querySelector('#age').value);

    if (
        name == null || 
        surname == null || 
        age == null ||
        name.length == 0 || 
        surname.length == 0 || 
        age.length == 0 || isNaN(age)
    ) {
      alert('No llenaste bien los datos!');
      return false;
    }

    let paragraph = document.createElement('p');
    let userData = [name, surname, age];
    userData.forEach((item) => {
      paragraph.innerHTML += `${item} <br>`;
    });
    dashedBox.appendChild(paragraph);
    dashedBox.style.display = 'block';
  });
});
