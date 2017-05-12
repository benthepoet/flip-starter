exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('todo', function (table) {
            table.increments('id').primary();
            table.string('body');
        }),
        knex.schema.createTable('role', function (table) {
            table.increments('id').primary();
            table.string('name');
        }),
        knex.schema.createTable('user', function (table) {
            table.increments('id').primary();
            table.string('email');
            table.string('first_name');
            table.string('last_name');
            table.integer('role_id').unsigned().references('role.id');
        }),
        knex.schema.createTable('login', function (table) {
            table.increments('id').primary();
            table.string('username');
            table.string('hash');
            table.integer('user_id').unsigned().references('user.id');
        })
    ]);    
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('login'),
        knex.schema.dropTable('user'),
        knex.schema.dropTable('role'),
        knex.schema.dropTable('todo')
    ]);
};
