const db = require('../data/dbConfig');

module.exports = {
  find,
  insert
}

function find() {
  return db('tasks as t')
    .join('projects as p', {'t.project_id' : 'p.id'})
    .select('t.id as task_id', 't.description', 't.notes', 't.completed', 'p.name as project_name', 'p.description as project_description');
}

function insert(resource) {
  return db('tasks').insert(resource);
}