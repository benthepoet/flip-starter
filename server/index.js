const Koa = require('koa');
const cors = require('kcors');
const bodyparser = require('koa-bodyparser');
const serve = require('koa-static');

const knex = require('knex');
const knexfile = require('./knexfile');
    
let app = new Koa();
let env = process.env.NODE_ENV || 'development';

app.context.helpers = require('./shared/helpers');
app.context.knex = knex(knexfile[env]);
app.context.validation = require('./shared/validation');
    
app
    .use(cors())
    .use(bodyparser())
    .use(serve('client'))
    .use(require('./api'))
    .listen(8080, () => console.log('API ready'));
