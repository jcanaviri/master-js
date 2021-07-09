'use strict';

let form = document.querySelector('form');

form.addEventListener('submit', () => {
  let title = document.querySelector('#name').value;
  localStorage.setItem(title, title);
  form.reset();
});

let moviesDiv = document.querySelector('#movies');
let ul = document.createElement('ul');

for (let i in localStorage) {
  if (typeof localStorage[i] == 'string') {
    let li = document.createElement('li');
    li.append(localStorage[i]);
    ul.appendChild(li);
  }
}
moviesDiv.appendChild(ul);

let formDelete = document.querySelector('#formDelete');

formDelete.addEventListener('submit', () => {
  let title = document.querySelector('#name2').value;
  localStorage.removeItem(title);
  form.reset();
});
