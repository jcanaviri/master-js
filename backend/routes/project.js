'use strict';

const express = require('express');

const ProjectController = require('../controllers/project');

const router = express.Router();

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);

module.exports = router;
