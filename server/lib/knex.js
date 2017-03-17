var knex = require('knex'),
    knexfile = require('../knexfile'),
    env = process.env.NODE_ENV || 'development';

module.exports = knex(knexfile[env]);