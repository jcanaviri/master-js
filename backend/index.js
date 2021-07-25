'use strict';

const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost:27017/portafolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conected XD');
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
