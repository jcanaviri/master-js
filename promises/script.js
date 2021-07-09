'use strict';

let userBox = document.querySelector('#users');
let userJannet = document.querySelector('#jannet');

getUsers()
  .then((data) => data.json())
  .then((users) => {
    listUsers(users.data);
    return getJannet();
  })
  .then((data) => data.json())
  .then((jannet) => showUser(jannet.data));

function getUsers() {
  return fetch('https://reqres.in/api/users');
}

function getJannet() {
  return fetch('https://reqres.in/api/users/2');
}

function listUsers(users) {
  users.map((user) => {
    let name = document.createElement('p');
    name.innerHTML = `${user.first_name} ${user.last_name}`;
    userBox.appendChild(name);
  });
}

function showUser(user) {
  let name = document.createElement('p');
  let avatar = document.createElement('img');

  name.innerHTML = `${user.first_name} ${user.last_name}`;
  avatar.src = user.avatar;
  avatar.width = '500';
  userJannet.appendChild(name);
  userJannet.appendChild(avatar);
}
