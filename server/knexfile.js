module.exports = {
    development: {
        client: 'mysql',
        connection: {
            database: 'flip',
            user: 'flip_api',
            password: 'password'
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },
  
    production: {
        client: 'mysql',
        connection: {
            database: 'flip',
            user: 'flip_api',
            password: 'password'
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
};