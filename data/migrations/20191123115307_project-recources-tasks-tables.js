
exports.up = function(knex) {
  return (
    knex.schema
      .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('name').notNullable();
        tbl.string('description', 255);
        tbl.boolean('completed');
      })
      .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 255).notNullable();
        tbl.string('notes', 255);
        tbl.boolean('completed');
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('projects.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })
      .createTable('resources', tbl => {
        tbl.increments('id')
        tbl.text('name').notNullable();
        tbl.string('description', 255);
      })
  )
};

exports.down = function(knex) {
  
};
