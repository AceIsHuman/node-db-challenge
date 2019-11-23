
exports.up = function(knex) {
  return (
    knex.schema
      .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('name').notNullable();
        tbl.string('description', 255);
        tbl.boolean('completed').notNullable();
      })
      .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 255).notNullable();
        tbl.string('notes', 255);
        tbl.boolean('completed').notNullable();
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
      .createTable('project_resources', tbl => {
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('project.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.integer('resource_id')
          .unsigned()
          .notNullable()
          .references('resources.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.primary(['project_id', 'resource_id']);
      })
  );
};

exports.down = function(knex) {
  return (
    knex.schema
      .dropTableIfExists('projects')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('project_resources')
  );
};
