exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('todos', function (table) {
          table.increments('id').primary();
          table.string('body');
        })
    ]);    
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('todos')
    ]);
};
