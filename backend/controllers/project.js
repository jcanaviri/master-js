'use strict';

const controller = {
  home: function (req, res) {
    return res.send({
      message: 'I am the home',
    });
  },
  test: function (req, res) {
    return res.send({
      message: 'I am the test',
    });
  },
};

module.exports = controller;
