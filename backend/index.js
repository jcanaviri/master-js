'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost:27017/portafolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conected 😀');
    app.listen(port, () => {
      console.log('Listening on port 3000...');
    });
  })
  .catch((err) => {
    console.log(err);
  });
