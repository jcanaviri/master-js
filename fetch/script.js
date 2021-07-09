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

// Creating a resourse
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// Updating a resource
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// Patching a resource
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// Delete a resource
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});

// This will return all the posts that belong to the first user
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then((response) => response.json())
  .then((json) => console.log(json));

// This is equivalent to /comments?postId=1
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((response) => response.json())
  .then((json) => console.log(json));
