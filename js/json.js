'use strict';

const movie = {
  title: 'Memento',
  year: 1997,
  director: 'Christopher Nolan',
};

const movies = [
  {
    title: 'Memento',
    year: 1997,
    director: 'Christopher Nolan',
  },
  {
    title: 'Interestelar',
    year: 2015,
    director: 'Christopher Nolan',
  },
];

console.log(movies);

const movieBox = document.querySelector('#movies');
movies.forEach((movie) => {
  let p = document.createElement('p');
  p.textContent = `${movie.title} direted by ${movie.director}`;
  movieBox.appendChild(p);
});
