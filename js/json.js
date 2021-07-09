'use strict';

const movie = {
  title: 'Memento',
  year: 1997,
  director: 'Christopher Nolan',
};

const movies = [
  {
    title: 'Memento',
    year: 2000,
    director: 'Christopher Nolan',
  },
  {
    title: 'Interestelar',
    year: 2014,
    director: 'Christopher Nolan',
  },
  {
    title: 'Inseption',
    year: 2010,
    director: 'Christopher Nolan',
  },
  {
    title: 'Tenet',
    year: 2020,
    director: 'Christopher Nolan',
  },
];

const movieBox = document.querySelector('#movies');
movies.forEach((movie) => {
  let p = document.createElement('p');
  p.textContent = `${movie.title} direted by ${movie.director}`;
  movieBox.appendChild(p);
});
