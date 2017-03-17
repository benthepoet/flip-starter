var app = require('koa')(),
    cors = require('kcors'),
    bodyParser = require('koa-bodyparser');

app.context.knex = require('./lib/knex');
app.context.create = function* () {
    
}

app
    .use(cors())
    .use(bodyParser())
    .use(require('./v1'));

app.listen(8080, start);

function start() {
    console.log('API ready');
}
