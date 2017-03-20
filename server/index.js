var app = require('koa')(),
    cors = require('kcors'),
    parser = require('koa-bodyparser'),
    serve = require('koa-static');

app.context.knex = require('./lib/knex');

app
    .use(cors())
    .use(parser())
    .use(serve('client'))
    .use(require('./v1'))
    .listen(8080, start);

function start() {
    console.log('API ready');
}
