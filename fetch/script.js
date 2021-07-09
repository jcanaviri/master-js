'use strict';

let ul = document.getElementById('users-list');
let loading = document.querySelector('.loading');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((data) => data.json())
  .then((users) => {
    users.map((user) => {
      let li = document.createElement('li');
      li.append(`${user.name} - ${user.email}`);
      ul.appendChild(li);
      loading.style.display = 'none';
    });
  });

// Getting a resourse
let ulPost = document.getElementById('user-post');
let loadingPost = document.querySelector('ul#user-post .loading');

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((post) => {
    let p = document.createElement('p');
    p.append(`${post.id} - ${post.title}`);
    ulPost.appendChild(p);
    loadingPost.style.display = 'none';
  });
