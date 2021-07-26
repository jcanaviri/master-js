'use strict';

const Project = require('../models/Project');

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
  saveProject: function (req, res) {
    const newProject = new Project();
    let params = req.body;

    newProject.name = params.name;
    newProject.description = params.description;
    newProject.category = params.category;
    newProject.year = params.year;
    newProject.languages = params.languages;
    newProject.img = null;

    newProject.save((err, p) => {
      // Response with internal server error
      // if some error occurred
      if (err) {
        return res.status(500).send({
          message: 'Some error has occurred',
        });
      }

      // If project not exists,
      // we send not found status code
      if (!p)
        return res.status(404).send({
          message: 'Project has not been saved',
        });

      return res.status(200).send({ p });
    });

  },
};

module.exports = controller;
