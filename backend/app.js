'use strict';

const express = require('express');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World');
});

app.post('/json/:id', (req, res) => {
  console.log(req.body.name);
  console.log(req.query.surname);
  console.log(req.params.id);
  res.send({ hello: 'world' });
});

module.exports = app;
