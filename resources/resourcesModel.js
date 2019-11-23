const db = require('../data/dbConfig');

module.exports = {
  find,
  insert
}

function find() {
  return db('resources');
}

function insert(resource) {
  return db('resources').insert(resource);
}