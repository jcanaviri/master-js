'use strict';

const express = require('express');
const app = express();

const routes = require('./routes/project');

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api', routes);

module.exports = app;
