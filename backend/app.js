'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./routes/project');

// Config headers and cors
app.use(cors());

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api', routes);

module.exports = app;
