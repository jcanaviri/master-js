'use strict';

let userBox = document.querySelector('#users');
let userJannet = document.querySelector('#jannet');

getUsers()
  .then((data) => data.json())
  .then((users) => {
    listUsers(users.data);
    return getInfo();
  })
  .then((data) => {
    console.log(data);
    return getJannet();
  })
  .then((data) => data.json())
  .then((user) => {
    showUser(user.data);
  })
  .catch((err) => {
    console.log(err);
  });

function getUsers() {
  return fetch('https://reqres.in/api/users');
}

function getJannet() {
  return fetch('https://reqres.in/api/users/2');
}

function getInfo() {
  let teacher = {
    firstName: 'Victor',
    lastName: 'Robles',
    url: 'https://victorroblesweb.es',
  };

  return new Promise((resolve, reject) => {
    let teacherString = '';
    setTimeout(() => {
      teacherString = JSON.stringify(teacher);
      if (typeof teacherString !== 'string' || teacherString == '') {
        return reject('Error');
      }

      return resolve(teacherString);
    }, 3000);
  });
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
