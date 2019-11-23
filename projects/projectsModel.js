const db = require('../data/dbConfig');

module.exports = {
  find,
  insert
}

function find() {
  return db('projects');
}

function insert(project) {
  return db('projects').insert(project);
}