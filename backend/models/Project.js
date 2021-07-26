'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = Schema({
  name: String,
  description: String,
  category: String,
  year: Number,
  languages: [String],
});

module.exports = mongoose.model('Project', ProjectSchema);
