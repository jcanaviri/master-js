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

  getProject: function (req, res) {
    const projectId = req.params.id;

    Project.findById(projectId, (err, p) => {
      // Response with internal server error
      // if some error occurred
      if (err) {
        return res.status(500).send({
          message: 'Some error has occurred',
        });
      }

      // If project not exists,
      // we send not found status code
      if (!p) {
        return res.status(404).send({
          message: 'Project has not been found',
        });
      }

      return res.status(200).send({ p });
    });
  },

  getProjects: function (req, res) {
    Project.find({}).exec((err, projects) => {
      if (err) {
        return res.status(500).send({
          message: 'Some error has occurred',
        });
      }

      // If project not exists,
      // we send not found status code
      if (!projects)
        return res.status(404).send({
          message: 'Projects not found',
        });

      return res.status(200).send({ projects });
    });
  },

  updateProject: function (req, res) {
    let projectId = req.params.id;
    let update = req.body;

    Project.findByIdAndUpdate(projectId, update, (err, p) => {
      if (err)
        return res.status(500).send({
          message: 'Some error happend',
        });

      if (!p)
        return res.status(404).send({
          message: 'Product was not updated',
        });

      return res.status(200).send({
        message: 'Updated',
      });
    });
  },
};

module.exports = controller;
